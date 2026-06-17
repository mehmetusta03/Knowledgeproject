# SPARQL Query Results — Süper Lig Knowledge Graph v4.0

Total triples in graph: **7875**

All queries executed against `superlig-ontology-protege-v4.owl` using rdflib 7.x.


## Q1 — Team Roster (Galatasaray)

Returns all players belonging to Galatasaray together with their position, nationality and jersey number.

**Result count:** 23


```sparql
SELECT ?playerLabel ?position ?nationality ?jersey
WHERE {
    :Galatasaray :hasPlayer ?player .
    ?player rdfs:label ?playerLabel .
    OPTIONAL { ?player :playsPosition ?pos . ?pos rdfs:label ?position }
    OPTIONAL { ?player :hasNationality ?nationality }
    OPTIONAL { ?player :hasJerseyNumber ?jersey }
}
ORDER BY ?jersey
```

| playerLabel | position | nationality | jersey |
|---|---|---|---|
| Fernando Muslera | Goalkeeper | Uruguayan | 1 |
| Patrick Van Aanholt | Defender | Dutch | 3 |
| Victor Nelsson | Defender | Danish | 4 |
| Sergio Oliveira | Defender | Portuguese | 5 |
| Davinson Sanchez | Defender | Colombian | 6 |
| Lucas Torreira | Midfielder | Uruguayan | 8 |
| Victor Osimhen | Forward | Nigerian | 9 |
| Gabriel Sara | Midfielder | Brazilian | 10 |
| Milot Rashica | Midfielder | Kosovar | 11 |
| Inaki Pena | Goalkeeper | Spanish | 13 |

*… 13 more row(s) — see `sparql/results/Q1_takim_kadrosu.csv` for full output.*


## Q2 — All Match Results

Returns home/away teams, scores, result label and matchweek for matches in the dataset (first 10 by week).

**Result count:** 10


```sparql
SELECT ?homeLabel ?awayLabel ?homeScore ?awayScore ?result ?week
WHERE {
    ?match a :Match ;
           :homeTeam ?home ;
           :awayTeam ?away ;
           :hasHomeScore ?homeScore ;
           :hasAwayScore ?awayScore ;
           :hasMatchResult ?result ;
           :hasMatchweek ?week .
    ?home rdfs:label ?homeLabel .
    ?away rdfs:label ?awayLabel .
}
ORDER BY ?week
LIMIT 10
```

| homeLabel | awayLabel | homeScore | awayScore | result | week |
|---|---|---|---|---|---|
| Fenerbahce | Eyupspor | 0 | 2 | Draw | 1 |
| Besiktas | Goztepe | 2 | 0 | HomeWin | 1 |
| Trabzonspor | Ankaragucu | 4 | 0 | HomeWin | 1 |
| Konyaspor | Sivasspor | 2 | 0 | HomeWin | 1 |
| Samsunspor | Alanyaspor | 4 | 0 | HomeWin | 1 |
| Gaziantep FK | Kasimpasa | 0 | 0 | Draw | 1 |
| Basaksehir FK | Bursaspor | 2 | 0 | HomeWin | 1 |
| Kayserispor | Caykur Rizespor | 4 | 0 | HomeWin | 1 |
| Antalyaspor | Hatayspor | 1 | 1 | AwayWin | 1 |
| Galatasaray | Eyupspor | 1 | 0 | Draw | 2 |

## Q3 — Matches Officiated by Halil Umut Meler

Lists every match officiated by referee Halil Umut Meler, ordered by date.

**Result count:** 18


```sparql
SELECT ?matchLabel ?date ?homeLabel ?awayLabel
WHERE {
    ?match a :Match ;
           :officatedBy :Halil_Umut_Meler ;
           rdfs:label ?matchLabel ;
           :hasMatchDate ?date ;
           :homeTeam ?home ;
           :awayTeam ?away .
    ?home rdfs:label ?homeLabel .
    ?away rdfs:label ?awayLabel .
}
ORDER BY ?date
```

| matchLabel | date | homeLabel | awayLabel |
|---|---|---|---|
| Beşiktaş v Göztepe W1 | 2025-08-17 | Besiktas | Goztepe |
| Beşiktaş v Kasımpaşa W3 | 2025-08-31 | Besiktas | Kasimpasa |
| Beşiktaş v Antalyaspor W5 | 2025-09-14 | Besiktas | Antalyaspor |
| Beşiktaş v Samsunspor W7 | 2025-09-28 | Besiktas | Samsunspor |
| Galatasaray v Hatayspor W10 | 2025-10-19 | Galatasaray | Hatayspor |
| Hatayspor v Gaziantep FK W12 | 2025-11-02 | Hatayspor | Gaziantep FK |
| Hatayspor v Beşiktaş W14 | 2025-11-16 | Hatayspor | Besiktas |
| Çaykur Rizespor v Ankaragücü W16 | 2025-11-30 | Caykur Rizespor | Ankaragucu |
| Çaykur Rizespor v Bursaspor W18 | 2025-12-14 | Caykur Rizespor | Bursaspor |
| Ankaragücü v Fenerbahçe W21 | 2026-02-01 | Ankaragucu | Fenerbahce |

*… 8 more row(s) — see `sparql/results/Q3_hakemin_yonettigi_maclar.csv` for full output.*


## Q4 — Team / Manager / Stadium Mapping

Joins Team, Manager (isManagedBy) and Stadium (hasHomeStadium) to show the full club structure.

**Result count:** 19


```sparql
SELECT ?teamLabel ?managerLabel ?stadiumLabel
WHERE {
    ?team a :Team ;
          rdfs:label ?teamLabel ;
          :isManagedBy ?manager ;
          :hasHomeStadium ?stadium .
    ?manager rdfs:label ?managerLabel .
    ?stadium rdfs:label ?stadiumLabel .
}
ORDER BY ?teamLabel
```

| teamLabel | managerLabel | stadiumLabel |
|---|---|---|
| Alanyaspor | Francesco Farioli | Bahçeşehir Okulları Stadyumu |
| Ankaragucu | Murat Yakin | Ankara Stadium |
| Antalyaspor | Nuri Şahin | Antalya Stadium |
| Basaksehir FK | Ismail Kartal | Ataturk Olympic Stadium |
| Besiktas | Serdar Topraktepe | Tupras Stadium |
| Bursaspor | Sergen Yalcin | Timsah Arena |
| Caykur Rizespor | Bülent Uygun | Caykur Didi Stadium |
| Eyupspor | Mustafa Denizli | Haliç Stadyumu |
| Fenerbahce | Dominic Tedesco | Sukru Saracoglu Stadium |
| Galatasaray | Okan Buruk | Rams Park |

*… 9 more row(s) — see `sparql/results/Q4_takim_menajer_stadyum.csv` for full output.*


## Q5 — High-Scoring Matches (>=4 goals)

Filters matches where combined home+away goals are 4 or more, using a SPARQL arithmetic FILTER expression.

**Result count:** 10


```sparql
SELECT ?homeLabel ?awayLabel ?homeScore ?awayScore 
       ((?homeScore + ?awayScore) AS ?totalGoals)
WHERE {
    ?match a :Match ;
           :homeTeam ?home ;
           :awayTeam ?away ;
           :hasHomeScore ?homeScore ;
           :hasAwayScore ?awayScore .
    ?home rdfs:label ?homeLabel .
    ?away rdfs:label ?awayLabel .
    FILTER ((?homeScore + ?awayScore) >= 4)
}
ORDER BY DESC(?totalGoals)
LIMIT 10
```

| homeLabel | awayLabel | homeScore | awayScore | totalGoals |
|---|---|---|---|---|
| Basaksehir FK | Hatayspor | 4 | 1 | 5 |
| Fenerbahce | Alanyaspor | 1 | 4 | 5 |
| Basaksehir FK | Kayserispor | 4 | 1 | 5 |
| Eyupspor | Bursaspor | 1 | 4 | 5 |
| Ankaragucu | Bursaspor | 1 | 4 | 5 |
| Alanyaspor | Bursaspor | 4 | 1 | 5 |
| Ankaragucu | Hatayspor | 4 | 1 | 5 |
| Besiktas | Trabzonspor | 4 | 1 | 5 |
| Sivasspor | Basaksehir FK | 1 | 4 | 5 |
| Bursaspor | Konyaspor | 4 | 1 | 5 |

## Q6 — Brazilian Players

Filters all Player individuals whose hasNationality literal equals 'Brazilian'.

**Result count:** 20


```sparql
SELECT ?playerLabel ?nationality
WHERE {
    ?player a :Player ;
            rdfs:label ?playerLabel ;
            :hasNationality ?nationality .
    FILTER (?nationality = "Brazilian")
}
ORDER BY ?playerLabel
```

| playerLabel | nationality |
|---|---|
| Alex Telles | Brazilian |
| Anderson Talisca | Brazilian |
| Davidson | Brazilian |
| Felipe Melo | Brazilian |
| Fernando | Brazilian |
| Fred | Brazilian |
| Gabriel | Brazilian |
| Gabriel Sara | Brazilian |
| Guilherme | Brazilian |
| Guilherme Arana | Brazilian |

*… 10 more row(s) — see `sparql/results/Q6_brezilyali_oyuncular.csv` for full output.*


## Q7 — Fenerbahce Away Wins

Finds matches where Fenerbahce played away and won (hasMatchResult = 'AwayWin').

**Result count:** 4


```sparql
SELECT ?homeLabel ?week ?homeScore ?awayScore
WHERE {
    ?match a :Match ;
           :awayTeam :Fenerbahce ;
           :homeTeam ?home ;
           :hasMatchResult "AwayWin"^^xsd:string ;
           :hasHomeScore ?homeScore ;
           :hasAwayScore ?awayScore ;
           :hasMatchweek ?week .
    ?home rdfs:label ?homeLabel .
}
ORDER BY ?week
```

| homeLabel | week | homeScore | awayScore |
|---|---|---|---|
| Caykur Rizespor | 14 | 1 | 4 |
| Antalyaspor | 15 | 0 | 4 |
| Trabzonspor | 18 | 0 | 4 |
| Alanyaspor | 22 | 1 | 1 |

## Q8 — Matches per Referee (COUNT aggregation)

Aggregates the number of matches assigned to each referee using COUNT and GROUP BY.

**Result count:** 20


```sparql
SELECT ?refereeLabel (COUNT(?match) AS ?matchCount)
WHERE {
    ?match a :Match ;
           :officatedBy ?referee .
    ?referee rdfs:label ?refereeLabel .
}
GROUP BY ?refereeLabel
ORDER BY DESC(?matchCount)
```

| refereeLabel | matchCount |
|---|---|
| Ali Palabıyık | 18 |
| Halil Umut Meler | 18 |
| Tugay Kaan Nümeroğlu | 17 |
| Atilla Karaoğlan | 17 |
| Çağdaş Yıldız | 17 |
| Abdülkadir Bitigen | 17 |
| Zorbay Küçük | 17 |
| Erkan Özdamar | 17 |
| Sarper Barış Saka | 17 |
| Burak Şeke | 17 |

*… 10 more row(s) — see `sparql/results/Q8_hakem_basina_mac_sayisi.csv` for full output.*


## Q9 — Player Detail Lookup (Lucas Torreira)

Looks up a single player (Lucas Torreira) and returns their team, position, nationality and age.

**Result count:** 1


```sparql
SELECT ?team ?position ?nationality ?age
WHERE {
    ?team :hasPlayer :GS_Lucas_Torreira .
    :GS_Lucas_Torreira :playsPosition ?pos ;
                        :hasNationality ?nationality ;
                        :hasAge ?age .
    ?pos rdfs:label ?position .
}
```

| team | position | nationality | age |
|---|---|---|---|
| Galatasaray | Midfielder | Uruguayan | 28 |

## Q10 — High-Attendance Matches (>=30000)

Filters matches with attendance >= 30000 and returns the stadium where they were played.

**Result count:** 10


```sparql
SELECT ?homeLabel ?awayLabel ?attendance ?stadiumLabel
WHERE {
    ?match a :Match ;
           :homeTeam ?home ;
           :awayTeam ?away ;
           :hasAttendance ?attendance ;
           :playedAt ?stadium .
    ?home rdfs:label ?homeLabel .
    ?away rdfs:label ?awayLabel .
    ?stadium rdfs:label ?stadiumLabel .
    FILTER (?attendance >= 30000)
}
ORDER BY DESC(?attendance)
LIMIT 10
```

| homeLabel | awayLabel | attendance | stadiumLabel |
|---|---|---|---|
| Antalyaspor | Konyaspor | 51917 | Antalya Stadium |
| Ankaragucu | Konyaspor | 51903 | Ankara Stadium |
| Hatayspor | Bursaspor | 51702 | Yeni Hatay Stadium |
| Caykur Rizespor | Sivasspor | 51495 | Caykur Didi Stadium |
| Galatasaray | Caykur Rizespor | 51475 | Rams Park |
| Konyaspor | Hatayspor | 51323 | Konya Buyuksehir Stadium |
| Gaziantep FK | Basaksehir FK | 51237 | Kalyon Gaziantep Stadium |
| Gaziantep FK | Galatasaray | 51181 | Kalyon Gaziantep Stadium |
| Konyaspor | Eyupspor | 51137 | Konya Buyuksehir Stadium |
| Alanyaspor | Ankaragucu | 51100 | Bahçeşehir Okulları Stadyumu |