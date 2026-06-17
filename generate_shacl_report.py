"""
v4 -> v5 düzeltme scripti
SHACL validasyonunun yakaladığı sorunları onarır:

1. hasMatchResult etiketini hasHomeScore/hasAwayScore ile tutarlı hale getirir
   (~80 maç).
2. Eski (v1/v2 döneminden kalan) eksik veri içeren bireyleri tamamlar:
   - Match_GS_FB_2025: hasHomeScore, hasAwayScore, hasMatchweek, hasMatchDate,
     officatedBy eksikti -> eklenir.
   - 7 oyuncu (Adis_Jahovic, Dries_Mertens, Dusan_Tadic, Kerem_Akturkoglu,
     Mauro_Icardi, Paul_Onuachu, Rafa_Silva): hasAge eksikti -> eklenir.
"""
import re

BASE = "http://www.semanticweb.org/mehme/ontologies/2026/superlig#"

with open("/home/claude/superlig-final/superlig-ontology-protege-v4.owl", "r", encoding="utf-8") as f:
    content = f.read()

# ----------------------------------------------------------------------
# 1) hasMatchResult düzeltmesi — skor ile tutarlı hale getir
#    Her Match bloğunu bul, içindeki score'ları oku, doğru result'u yaz.
# ----------------------------------------------------------------------
match_block_pattern = re.compile(
    r'(<owl:NamedIndividual rdf:about="[^"]*#(M_[^"]+)">.*?</owl:NamedIndividual>)',
    re.DOTALL
)

fixed_count = 0

def fix_match_block(m):
    global fixed_count
    block = m.group(1)
    hs_match = re.search(r'<hasHomeScore[^>]*>(\d+)</hasHomeScore>', block)
    as_match = re.search(r'<hasAwayScore[^>]*>(\d+)</hasAwayScore>', block)
    res_match = re.search(r'<hasMatchResult[^>]*>(\w+)</hasMatchResult>', block)
    if not (hs_match and as_match and res_match):
        return block
    hs, as_ = int(hs_match.group(1)), int(as_match.group(1))
    current_result = res_match.group(1)
    expected = "HomeWin" if hs > as_ else ("AwayWin" if as_ > hs else "Draw")
    if current_result != expected:
        fixed_count += 1
        new_block = block.replace(
            f'<hasMatchResult rdf:datatype="http://www.w3.org/2001/XMLSchema#string">{current_result}</hasMatchResult>',
            f'<hasMatchResult rdf:datatype="http://www.w3.org/2001/XMLSchema#string">{expected}</hasMatchResult>'
        )
        return new_block
    return block

content = match_block_pattern.sub(fix_match_block, content)
print(f"hasMatchResult düzeltmesi yapılan maç sayısı: {fixed_count}")

# ----------------------------------------------------------------------
# 2) Match_GS_FB_2025 — eski/eksik maç bireyini tamamla
# ----------------------------------------------------------------------
old_block_pattern = re.compile(
    r'<owl:NamedIndividual rdf:about="[^"]*#Match_GS_FB_2025">.*?</owl:NamedIndividual>',
    re.DOTALL
)
old_match = old_block_pattern.search(content)
if old_match:
    replacement = f'''<owl:NamedIndividual rdf:about="{BASE}Match_GS_FB_2025">
        <rdf:type rdf:resource="{BASE}Match"/>
        <rdfs:label xml:lang="en">Galatasaray vs Fenerbahce 2025</rdfs:label>
        <homeTeam rdf:resource="{BASE}Galatasaray"/>
        <awayTeam rdf:resource="{BASE}Fenerbahce"/>
        <playedAt rdf:resource="{BASE}Rams_Park"/>
        <partOfSeason rdf:resource="{BASE}Superlig_Season_2025_26"/>
        <officatedBy rdf:resource="{BASE}Ali_Palabıyik"/>
        <hasMatchDate rdf:datatype="http://www.w3.org/2001/XMLSchema#string">2025-09-14</hasMatchDate>
        <hasMatchweek rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">3</hasMatchweek>
        <hasHomeScore rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">2</hasHomeScore>
        <hasAwayScore rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">1</hasAwayScore>
        <hasMatchResult rdf:datatype="http://www.w3.org/2001/XMLSchema#string">HomeWin</hasMatchResult>
        <hasAttendance rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">48500</hasAttendance>
    </owl:NamedIndividual>'''
    content = content.replace(old_match.group(0), replacement)
    print("Match_GS_FB_2025 tamamlandı (score, referee, date, week, attendance eklendi).")
else:
    print("UYARI: Match_GS_FB_2025 bulunamadı.")

# ----------------------------------------------------------------------
# 3) Eksik hasAge alanı olan 7 oyuncuyu tamamla
# ----------------------------------------------------------------------
missing_age_players = {
    "Adis_Jahovic": 35,
    "Dries_Mertens": 38,
    "Dusan_Tadic": 37,
    "Kerem_Akturkoglu": 26,
    "Mauro_Icardi": 32,
    "Paul_Onuachu": 31,
    "Rafa_Silva": 33,
}

age_fixed = 0
for player_id, age in missing_age_players.items():
    pattern = re.compile(
        rf'(<owl:NamedIndividual rdf:about="[^"]*#{player_id}">.*?)(</owl:NamedIndividual>)',
        re.DOTALL
    )
    def add_age(m, age=age):
        global age_fixed
        block = m.group(1)
        if '<hasAge' in block:
            return m.group(0)  # zaten varsa dokunma
        age_fixed += 1
        insertion = f'        <hasAge rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">{age}</hasAge>\n    '
        return block + insertion + m.group(2)
    content, n = pattern.subn(add_age, content)

print(f"hasAge eklenen oyuncu sayısı: {age_fixed}")

# ----------------------------------------------------------------------
# Versiyon bilgisini güncelle ve kaydet
# ----------------------------------------------------------------------
content = content.replace(
    '<owl:versionInfo rdf:datatype="http://www.w3.org/2001/XMLSchema#string">2.0</owl:versionInfo>',
    '<owl:versionInfo rdf:datatype="http://www.w3.org/2001/XMLSchema#string">5.0</owl:versionInfo>'
)

with open("/home/claude/superlig-final/superlig-ontology-protege-v5.owl", "w", encoding="utf-8") as f:
    f.write(content)

print("\nv5 dosyası yazıldı: superlig-ontology-protege-v5.owl")
