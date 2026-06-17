# Süper Lig Football Knowledge Ontology

An OWL 2 DL knowledge graph of the Turkish Süper Lig 2025–26 season — built with Protégé 5.x, queried with SPARQL, and validated with SHACL.

**Version 5.0** · 19 teams · 309 players · 19 managers · 20 referees · 19 stadiums · 343 matches · 7,889 RDF triples · zero SHACL violations.

---

## Project Objective

Turkish professional football data is typically fragmented across spreadsheets, club websites and news articles. This project formalizes the Süper Lig domain — clubs, players, managers, referees, stadiums, matches and seasons — as a single OWL 2 DL knowledge graph, so the data can be queried with SPARQL, checked for integrity with SHACL, and reasoned over like any other Semantic Web resource.

The ontology was developed iteratively across five versions following the **METHONTOLOGY** methodology, starting from a single-team prototype (v1.0) and ending with a fully validated, full-season knowledge graph (v5.0). See `report/ORSD_v3_SuperLig_Ontology.docx` for the full requirements specification, including all 15 competency questions the ontology is designed to answer.

## Dataset Sources

Individuals (clubs, stadiums, well-known managers, and a representative set of real and realistic players) were curated specifically for this project to model a complete and internally consistent 2025–26 season. The full 343-match double round-robin fixture (19 teams × 18 opponents, home and away, across 36 matchweeks) was generated programmatically to guarantee fixture-list completeness. See **Data Acquisition** in `report/Project_Report_v5.docx` for full details, transformation steps and known limitations (match results are synthetic, not a live results feed).

## Repository Structure

```
.
├── ontology/              OWL/RDF-XML ontology files
│   ├── superlig-ontology-v5.owl     ← current production ontology
│   └── archive-v2.owl / v3.owl / v4.owl   ← prior versions, kept for traceability
├── rdf/                   Same v5.0 graph in alternate RDF serializations
│   ├── superlig-ontology-v5.ttl     (Turtle)
│   └── superlig-ontology-v5.nt      (N-Triples)
├── sparql/                10 SPARQL 1.1 queries
│   ├── Q1_takim_kadrosu.rq … Q10_yuksek_katilimli_maclar.rq   (individual queries)
│   ├── all_sparql_queries.sparql    (combined reference file)
│   ├── sparql_results.md            (queries + result tables, ready to read)
│   └── results/*.csv                (full result set per query)
├── shacl/                 SHACL validation
│   ├── superlig-shapes.ttl          (9 node shapes incl. 2 SPARQL constraints)
│   ├── demo-broken-data.ttl         (3 intentionally invalid individuals, for demo)
│   └── shacl_validation_report.md   (before/after v4→v5 + demo results)
├── docs/widoco/            WIDOCO-style ontology documentation
│   └── index.html                   (open directly, or serve via GitHub Pages)
├── dataset_samples/        Sample CSV exports of query results
├── src/                    Generation / validation scripts (Python)
│   ├── fix_v4_to_v5.py              (SHACL-driven data-quality corrections)
│   ├── generate_sparql_report.py
│   └── generate_shacl_report.py
├── report/
│   ├── Project_Report_v5.docx       (full course report — all required sections)
│   └── ORSD_v3_SuperLig_Ontology.docx  (Ontology Requirements Specification Document)
└── presentation/
    └── Project_Presentation_v5.pptx (14-slide course presentation)
```

## Installation / Setup

No installation is required to read the ontology — any OWL/RDF tool will open it.

**Open in Protégé:**
1. Install [Protégé 5.x](https://protege.stanford.edu/).
2. `File → Open` → select `ontology/superlig-ontology-v5.owl`.

**Run SPARQL queries (Python / rdflib):**
```bash
pip install rdflib
python3 -c "
from rdflib import Graph
g = Graph()
g.parse('ontology/superlig-ontology-v5.owl', format='xml')
with open('sparql/Q8_hakem_basina_mac_sayisi.rq') as f:
    q = f.read()
for row in g.query(q):
    print(row)
"
```

**Run SHACL validation (pySHACL):**
```bash
pip install pyshacl
pyshacl -s shacl/superlig-shapes.ttl -df xml ontology/superlig-ontology-v5.owl
# Expect: Conforms: True
```

**View the WIDOCO documentation:** open `docs/widoco/index.html` in any browser, or publish the `docs/widoco/` folder via GitHub Pages.

## Team Members

- Mehmet Usta
- Ruhi Ensar Baştopçu
- Kaan Durusoy
- Muhammed Sencer Dede

## Version History

| Version | Highlights |
|---|---|
| v1.0 | Initial prototype — 7 classes, single team (Galatasaray) |
| v2.0 | Expanded to all 19 teams; added Match, Season, Position |
| v3.0 | Populated Referee class (20 individuals); added officatedBy |
| v4.0 | Added match scores/results/attendance; full 343-match fixture |
| v5.0 | Introduced SHACL validation; corrected 94 data-quality issues |

Full changelog in `report/ORSD_v3_SuperLig_Ontology.docx`, Section 8.
