@prefix sh:    <http://www.w3.org/ns/shacl#> .
@prefix xsd:   <http://www.w3.org/2001/XMLSchema#> .
@prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#> .
@prefix :      <http://www.semanticweb.org/mehme/ontologies/2026/superlig#> .

# ============================================================================
#  SUPER LIG FOOTBALL KNOWLEDGE ONTOLOGY v4.0 — SHACL VALIDATION SHAPES
#  Validates: superlig-ontology-protege-v4.owl
#  Tool: pySHACL 0.31 (W3C SHACL Core)
#  Author: Mehmet Usta — Knowledge Engineering Project, Phase 4
# ============================================================================


# ----------------------------------------------------------------------------
# 1. PlayerShape — every Player must have a valid jersey number, age, position
#    and nationality.
# ----------------------------------------------------------------------------
:PlayerShape
    a sh:NodeShape ;
    sh:targetClass :Player ;
    rdfs:label "Player Shape" ;
    rdfs:comment "Validates jersey number range, age range, presence of position and nationality for every Player individual." ;

    sh:property [
        sh:path :hasJerseyNumber ;
        sh:datatype xsd:integer ;
        sh:minInclusive 1 ;
        sh:maxInclusive 99 ;
        sh:maxCount 1 ;
        sh:minCount 1 ;
        sh:message "A player's jersey number must be an integer between 1 and 99." ;
    ] ;

    sh:property [
        sh:path :hasAge ;
        sh:datatype xsd:integer ;
        sh:minInclusive 15 ;
        sh:maxInclusive 45 ;
        sh:maxCount 1 ;
        sh:minCount 1 ;
        sh:message "A player's age must be an integer between 15 and 45." ;
    ] ;

    sh:property [
        sh:path :hasNationality ;
        sh:datatype xsd:string ;
        sh:minCount 1 ;
        sh:message "A player must have at least one hasNationality value." ;
    ] ;

    sh:property [
        sh:path :playsPosition ;
        sh:class :Position ;
        sh:minCount 1 ;
        sh:message "A player must be linked to at least one Position individual via playsPosition." ;
    ] .


# ----------------------------------------------------------------------------
# 2. MatchShape — every Match must have exactly one home team, one away team,
#    a referee, a date, a matchweek in [1,38], and non-negative scores.
#    Home team and away team must also be different individuals.
# ----------------------------------------------------------------------------
:MatchShape
    a sh:NodeShape ;
    sh:targetClass :Match ;
    rdfs:label "Match Shape" ;
    rdfs:comment "Validates structural completeness of a Match: teams, referee, date, matchweek bounds, and non-negative scores." ;

    sh:property [
        sh:path :homeTeam ;
        sh:class :Team ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A match must have exactly one homeTeam, which must be a Team individual." ;
    ] ;

    sh:property [
        sh:path :awayTeam ;
        sh:class :Team ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A match must have exactly one awayTeam, which must be a Team individual." ;
    ] ;

    sh:property [
        sh:path :officatedBy ;
        sh:class :Referee ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A match must be officiated by exactly one Referee individual." ;
    ] ;

    sh:property [
        sh:path :hasMatchweek ;
        sh:datatype xsd:integer ;
        sh:minInclusive 1 ;
        sh:maxInclusive 38 ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A match's matchweek must be an integer between 1 and 38." ;
    ] ;

    sh:property [
        sh:path :hasHomeScore ;
        sh:datatype xsd:integer ;
        sh:minInclusive 0 ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "hasHomeScore must be a non-negative integer." ;
    ] ;

    sh:property [
        sh:path :hasAwayScore ;
        sh:datatype xsd:integer ;
        sh:minInclusive 0 ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "hasAwayScore must be a non-negative integer." ;
    ] ;

    sh:property [
        sh:path :hasMatchDate ;
        sh:datatype xsd:string ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:pattern "^[0-9]{4}-[0-9]{2}-[0-9]{2}$" ;
        sh:message "hasMatchDate must be present and follow the YYYY-MM-DD format." ;
    ] ;

    sh:property [
        sh:path :hasAttendance ;
        sh:datatype xsd:integer ;
        sh:minInclusive 0 ;
        sh:message "hasAttendance, if present, must be a non-negative integer." ;
    ] .


# ----------------------------------------------------------------------------
# 2b. MatchDistinctTeamsShape — SPARQL-based constraint: home and away team
#     must not be the same Team (a club cannot play against itself).
# ----------------------------------------------------------------------------
:MatchDistinctTeamsShape
    a sh:NodeShape ;
    sh:targetClass :Match ;
    rdfs:label "Match Distinct Teams Shape" ;
    rdfs:comment "SPARQL constraint ensuring homeTeam and awayTeam are never the same Team individual." ;
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:message "homeTeam and awayTeam must refer to two different Team individuals." ;
        sh:select """
            SELECT $this
            WHERE {
                $this <http://www.semanticweb.org/mehme/ontologies/2026/superlig#homeTeam> ?h .
                $this <http://www.semanticweb.org/mehme/ontologies/2026/superlig#awayTeam> ?a .
                FILTER (?h = ?a)
            }
        """ ;
    ] .


# ----------------------------------------------------------------------------
# 3. TeamShape — every Team must have a manager, a home stadium, and at least
#    one player in its squad.
# ----------------------------------------------------------------------------
:TeamShape
    a sh:NodeShape ;
    sh:targetClass :Team ;
    rdfs:label "Team Shape" ;
    rdfs:comment "Validates that every Team has a manager, a home stadium and a non-empty squad." ;

    sh:property [
        sh:path :isManagedBy ;
        sh:class :Manager ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A team must be managed by exactly one Manager individual." ;
    ] ;

    sh:property [
        sh:path :hasHomeStadium ;
        sh:class :Stadium ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A team must have exactly one home stadium." ;
    ] ;

    sh:property [
        sh:path :hasPlayer ;
        sh:class :Player ;
        sh:minCount 1 ;
        sh:message "A team must have at least one player in hasPlayer." ;
    ] .


# ----------------------------------------------------------------------------
# 4. RefereeShape — every Referee must have a nationality and a license level
#    drawn from a controlled vocabulary (FIFA or TFF).
# ----------------------------------------------------------------------------
:RefereeShape
    a sh:NodeShape ;
    sh:targetClass :Referee ;
    rdfs:label "Referee Shape" ;
    rdfs:comment "Validates nationality presence and license level vocabulary for every Referee." ;

    sh:property [
        sh:path :hasNationality ;
        sh:datatype xsd:string ;
        sh:minCount 1 ;
        sh:message "A referee must have at least one hasNationality value." ;
    ] ;

    sh:property [
        sh:path :hasLicenseLevel ;
        sh:datatype xsd:string ;
        sh:in ( "FIFA"^^xsd:string "TFF"^^xsd:string ) ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "hasLicenseLevel must be exactly one of: FIFA, TFF." ;
    ] .


# ----------------------------------------------------------------------------
# 5. ManagerShape — every Manager must have a nationality.
# ----------------------------------------------------------------------------
:ManagerShape
    a sh:NodeShape ;
    sh:targetClass :Manager ;
    rdfs:label "Manager Shape" ;
    rdfs:comment "Validates that every Manager individual declares a nationality." ;

    sh:property [
        sh:path :hasNationality ;
        sh:datatype xsd:string ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A manager must have exactly one hasNationality value." ;
    ] .


# ----------------------------------------------------------------------------
# 6. StadiumShape — every Stadium must have a positive capacity and be
#    located in a city.
# ----------------------------------------------------------------------------
:StadiumShape
    a sh:NodeShape ;
    sh:targetClass :Stadium ;
    rdfs:label "Stadium Shape" ;
    rdfs:comment "Validates that every Stadium has a positive seating capacity and a city location." ;

    sh:property [
        sh:path :hasCapacity ;
        sh:datatype xsd:integer ;
        sh:minInclusive 1000 ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "hasCapacity must be an integer of at least 1000." ;
    ] ;

    sh:property [
        sh:path :locatedInCity ;
        sh:minCount 1 ;
        sh:maxCount 1 ;
        sh:message "A stadium must be linked to exactly one city via locatedInCity." ;
    ] .


# ----------------------------------------------------------------------------
# 7. MatchResultConsistencyShape — hasMatchResult value must be consistent
#    with hasHomeScore / hasAwayScore (semantic integrity, not just syntax).
# ----------------------------------------------------------------------------
:MatchResultConsistencyShape
    a sh:NodeShape ;
    sh:targetClass :Match ;
    rdfs:label "Match Result Consistency Shape" ;
    rdfs:comment "SPARQL constraint checking that hasMatchResult (HomeWin/AwayWin/Draw) agrees with the recorded scores." ;
    sh:sparql [
        a sh:SPARQLConstraint ;
        sh:message "hasMatchResult value is inconsistent with hasHomeScore/hasAwayScore." ;
        sh:select """
            SELECT $this
            WHERE {
                $this <http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasHomeScore> ?hs .
                $this <http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasAwayScore> ?as .
                $this <http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasMatchResult> ?r .
                BIND (
                    IF (?hs > ?as, "HomeWin",
                        IF (?as > ?hs, "AwayWin", "Draw")
                    ) AS ?expected
                )
                FILTER (?r != ?expected)
            }
        """ ;
    ] .


# ----------------------------------------------------------------------------
# 8. LabelPresenceShape — every named individual of any core class must have
#    an rdfs:label (data completeness check, applies ontology-wide).
# ----------------------------------------------------------------------------
:LabelPresenceShape
    a sh:NodeShape ;
    sh:target [
        a sh:SPARQLTarget ;
        sh:select """
            SELECT ?this
            WHERE {
                ?this a ?cls .
                FILTER (?cls IN (
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Player>,
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Team>,
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Match>,
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Referee>,
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Manager>,
                    <http://www.semanticweb.org/mehme/ontologies/2026/superlig#Stadium>
                ))
            }
        """ ;
    ] ;
    rdfs:label "Label Presence Shape" ;
    rdfs:comment "Every core individual (Player, Team, Match, Referee, Manager, Stadium) must carry a human-readable rdfs:label." ;
    sh:property [
        sh:path rdfs:label ;
        sh:minCount 1 ;
        sh:message "Every core individual must have at least one rdfs:label." ;
    ] .
