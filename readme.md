@prefix : <http://www.semanticweb.org/mehme/ontologies/2026/superlig#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@base <http://www.semanticweb.org/mehme/ontologies/2026/superlig#> .

<http://www.semanticweb.org/mehme/ontologies/2026/superlig> rdf:type owl:Ontology ;
                                                             owl:versionIRI <http://www.semanticweb.org/mehme/ontologies/2026/superlig/2.0> ;
                                                             rdfs:comment "An OWL 2 ontology representing the Turkish Süper Lig professional football league. Includes all 19 current teams, players, managers, stadiums, cities, playing positions, matches and seasons. Developed in Protégé 5.x using the METHONTOLOGY methodology. Phase 2 — May 2026."@en ;
                                                             rdfs:label "Süper Lig Football Knowledge Ontology"@en ;
                                                             owl:versionInfo "2.0" .

#################################################################
#    Object Properties
#################################################################

###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#awayTeam
:awayTeam rdf:type owl:ObjectProperty ;
          rdfs:domain :Match ;
          rdfs:range :Team ;
          rdfs:comment "Relates a Match to the Team playing as the away side. [Added v2]"@en ;
          rdfs:label "awayTeam"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasHomeStadium
:hasHomeStadium rdf:type owl:ObjectProperty ;
                rdfs:domain :Team ;
                rdfs:range :Stadium ;
                rdfs:comment "Relates a Team to the Stadium it uses for home matches."@en ;
                rdfs:label "hasHomeStadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasPlayer
:hasPlayer rdf:type owl:ObjectProperty ;
           rdfs:domain :Team ;
           rdfs:range :Player ;
           rdfs:comment "Relates a Team to a Player currently contracted to it."@en ;
           rdfs:label "hasPlayer"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#homeTeam
:homeTeam rdf:type owl:ObjectProperty ;
          rdfs:domain :Match ;
          rdfs:range :Team ;
          rdfs:comment "Relates a Match to the Team playing as the home side. [Added v2]"@en ;
          rdfs:label "homeTeam"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#isManagedBy
:isManagedBy rdf:type owl:ObjectProperty ;
             rdfs:domain :Team ;
             rdfs:range :Manager ;
             rdfs:comment "Relates a Team to its current head coach or manager."@en ;
             rdfs:label "isManagedBy"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#locatedInCity
:locatedInCity rdf:type owl:ObjectProperty ;
               rdfs:domain :Stadium ,
                           :Team ;
               rdfs:range :City ;
               rdfs:comment "Relates a Team or Stadium to the City in which it is geographically situated."@en ;
               rdfs:label "locatedInCity"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#partOfSeason
:partOfSeason rdf:type owl:ObjectProperty ;
              rdfs:domain :Match ;
              rdfs:range :Season ;
              rdfs:comment "Relates a Match to the Season it belongs to. [Added v2]"@en ;
              rdfs:label "partOfSeason"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#participatesIn
:participatesIn rdf:type owl:ObjectProperty ;
                rdfs:domain :Team ;
                rdfs:range :Match ;
                rdfs:comment "Relates a Team to a Match in which it takes part. [Added v2]"@en ;
                rdfs:label "participatesIn"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#playedAt
:playedAt rdf:type owl:ObjectProperty ;
          rdfs:domain :Match ;
          rdfs:range :Stadium ;
          rdfs:comment "Relates a Match to the Stadium where it was played. [Added v2]"@en ;
          rdfs:label "playedAt"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#playsPosition
:playsPosition rdf:type owl:ObjectProperty ;
               rdfs:domain :Player ;
               rdfs:range :Position ;
               rdfs:comment "Relates a Player to their primary playing Position on the pitch. [Added v2]"@en ;
               rdfs:label "playsPosition"@en .


#################################################################
#    Data properties
#################################################################

###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasAge
:hasAge rdf:type owl:DatatypeProperty ;
        rdfs:domain :Player ;
        rdfs:range xsd:integer ;
        rdfs:comment "The age in years of a Player. [Added v2]"@en ;
        rdfs:label "hasAge"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasCapacity
:hasCapacity rdf:type owl:DatatypeProperty ;
             rdfs:domain :Stadium ;
             rdfs:range xsd:integer ;
             rdfs:comment "The official seating capacity of a Stadium. [Added v2]"@en ;
             rdfs:label "hasCapacity"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasFoundedYear
:hasFoundedYear rdf:type owl:DatatypeProperty ;
                rdfs:domain :Team ;
                rdfs:range xsd:integer ;
                rdfs:comment "The year in which a Team was officially founded. [Added v2]"@en ;
                rdfs:label "hasFoundedYear"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasJerseyNumber
:hasJerseyNumber rdf:type owl:DatatypeProperty ;
                 rdfs:domain :Player ;
                 rdfs:range xsd:integer ;
                 rdfs:comment "The shirt number of a Player. [Added v2]"@en ;
                 rdfs:label "hasJerseyNumber"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasNationality
:hasNationality rdf:type owl:DatatypeProperty ;
                rdfs:domain :Manager ,
                            :Player ;
                rdfs:range xsd:string ;
                rdfs:comment "The nationality of a Player or Manager. [Added v2]"@en ;
                rdfs:label "hasNationality"@en .


#################################################################
#    Classes
#################################################################

###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#City
:City rdf:type owl:Class ;
      rdfs:comment "A Turkish city in which one or more Süper Lig teams or stadiums are located."@en ;
      rdfs:label "City"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Manager
:Manager rdf:type owl:Class ;
         rdfs:subClassOf :Person ;
         rdfs:comment "The head coach or technical director responsible for managing a Süper Lig team."@en ;
         rdfs:label "Manager"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Match
:Match rdf:type owl:Class ;
       rdfs:comment "An individual competitive fixture between two Süper Lig teams. [Added v2]"@en ;
       rdfs:label "Match"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Person
:Person rdf:type owl:Class ;
        rdfs:comment "Abstract superclass for any human individual in the football domain."@en ;
        rdfs:label "Person"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Player
:Player rdf:type owl:Class ;
        rdfs:subClassOf :Person ;
        rdfs:comment "A professional footballer currently contracted to a Süper Lig club."@en ;
        rdfs:label "Player"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Position
:Position rdf:type owl:Class ;
          rdfs:comment "A playing position on a football pitch: Forward, Midfielder, Defender, or Goalkeeper. [Added v2]"@en ;
          rdfs:label "Position"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Referee
:Referee rdf:type owl:Class ;
         rdfs:subClassOf :Person ;
         rdfs:comment "A licensed match official. Included for structural completeness; currently out of scope for population."@en ;
         rdfs:label "Referee"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Season
:Season rdf:type owl:Class ;
        rdfs:comment "A Süper Lig football season (e.g., 2025-26). [Added v2]"@en ;
        rdfs:label "Season"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Stadium
:Stadium rdf:type owl:Class ;
         rdfs:comment "A physical sports venue where Süper Lig matches are played."@en ;
         rdfs:label "Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Team
:Team rdf:type owl:Class ;
      rdfs:comment "A professional football club participating in the Turkish Süper Lig in the 2025-26 season."@en ;
      rdfs:label "Team"@en .


#################################################################
#    Individuals
#################################################################

###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Abdullah_Avci
:Abdullah_Avci rdf:type owl:NamedIndividual ,
                        :Manager ;
               :hasNationality "Turkish" ;
               rdfs:label "Abdullah Avci"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Adis_Jahovic
:Adis_Jahovic rdf:type owl:NamedIndividual ,
                       :Player ;
              :playsPosition :Forward ;
              :hasJerseyNumber 9 ;
              :hasNationality "Macedonian" ;
              rdfs:label "Adis Jahovic"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Alanyaspor
:Alanyaspor rdf:type owl:NamedIndividual ,
                     :Team ;
            :locatedInCity :Antalya ;
            :hasFoundedYear 1948 ;
            rdfs:label "Alanyaspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankara
:Ankara rdf:type owl:NamedIndividual ,
                 :City ;
        rdfs:label "Ankara"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankara_Stad
:Ankara_Stad rdf:type owl:NamedIndividual ,
                      :Stadium ;
             :locatedInCity :Ankara ;
             :hasCapacity 19800 ;
             rdfs:label "Ankara Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankaragucu
:Ankaragucu rdf:type owl:NamedIndividual ,
                     :Team ;
            :hasHomeStadium :Ankara_Stad ;
            :locatedInCity :Ankara ;
            :hasFoundedYear 1910 ;
            rdfs:label "Ankaragucu"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalya
:Antalya rdf:type owl:NamedIndividual ,
                  :City ;
         rdfs:label "Antalya"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalya_Stadium
:Antalya_Stadium rdf:type owl:NamedIndividual ,
                          :Stadium ;
                 :locatedInCity :Antalya ;
                 :hasCapacity 32536 ;
                 rdfs:label "Antalya Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalyaspor
:Antalyaspor rdf:type owl:NamedIndividual ,
                      :Team ;
             :hasHomeStadium :Antalya_Stadium ;
             :locatedInCity :Antalya ;
             :hasFoundedYear 1966 ;
             rdfs:label "Antalyaspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ataturk_Olympic_Stadium
:Ataturk_Olympic_Stadium rdf:type owl:NamedIndividual ,
                                  :Stadium ;
                         :locatedInCity :Istanbul ;
                         :hasCapacity 76092 ;
                         rdfs:label "Ataturk Olympic Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Basaksehir_FK
:Basaksehir_FK rdf:type owl:NamedIndividual ,
                        :Team ;
               :hasHomeStadium :Ataturk_Olympic_Stadium ;
               :isManagedBy :Ismail_Kartal ;
               :locatedInCity :Istanbul ;
               :hasFoundedYear 1990 ;
               rdfs:label "Basaksehir FK"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Besiktas
:Besiktas rdf:type owl:NamedIndividual ,
                   :Team ;
          :hasHomeStadium :Tupras_Stadium ;
          :hasPlayer :Rafa_Silva ;
          :isManagedBy :Serdar_Topraktepe ;
          :locatedInCity :Istanbul ;
          :hasFoundedYear 1903 ;
          rdfs:label "Besiktas"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Bursa
:Bursa rdf:type owl:NamedIndividual ,
                :City ;
       rdfs:label "Bursa"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Bursaspor
:Bursaspor rdf:type owl:NamedIndividual ,
                    :Team ;
           :hasHomeStadium :Timsah_Arena ;
           :isManagedBy :Sergen_Yalcin ;
           :locatedInCity :Bursa ;
           :hasFoundedYear 1963 ;
           rdfs:label "Bursaspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Caykur_Didi_Stadium
:Caykur_Didi_Stadium rdf:type owl:NamedIndividual ,
                              :Stadium ;
                     :locatedInCity :Rize ;
                     :hasCapacity 15600 ;
                     rdfs:label "Caykur Didi Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Caykur_Rizespor
:Caykur_Rizespor rdf:type owl:NamedIndividual ,
                          :Team ;
                 :hasHomeStadium :Caykur_Didi_Stadium ;
                 :locatedInCity :Rize ;
                 :hasFoundedYear 1953 ;
                 rdfs:label "Caykur Rizespor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Defender
:Defender rdf:type owl:NamedIndividual ,
                   :Position ;
          rdfs:label "Defender"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dominic_Tedesco
:Dominic_Tedesco rdf:type owl:NamedIndividual ,
                          :Manager ;
                 :hasNationality "German" ;
                 rdfs:label "Dominic Tedesco"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dries_Mertens
:Dries_Mertens rdf:type owl:NamedIndividual ,
                        :Player ;
               :playsPosition :Forward ;
               :hasJerseyNumber 14 ;
               :hasNationality "Belgian" ;
               rdfs:label "Dries Mertens"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dusan_Tadic
:Dusan_Tadic rdf:type owl:NamedIndividual ,
                      :Player ;
             :playsPosition :Midfielder ;
             :hasJerseyNumber 10 ;
             :hasNationality "Serbian" ;
             rdfs:label "Dusan Tadic"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Eyupspor
:Eyupspor rdf:type owl:NamedIndividual ,
                   :Team ;
          :locatedInCity :Istanbul ;
          :hasFoundedYear 1954 ;
          rdfs:label "Eyupspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Fenerbahce
:Fenerbahce rdf:type owl:NamedIndividual ,
                     :Team ;
            :hasHomeStadium :Sukru_Saracoglu_Stadium ;
            :hasPlayer :Dusan_Tadic ,
                       :Mauro_Icardi ;
            :isManagedBy :Dominic_Tedesco ;
            :locatedInCity :Istanbul ;
            :hasFoundedYear 1907 ;
            rdfs:label "Fenerbahce"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Forward
:Forward rdf:type owl:NamedIndividual ,
                  :Position ;
         rdfs:label "Forward"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Galatasaray
:Galatasaray rdf:type owl:NamedIndividual ,
                      :Team ;
             :hasHomeStadium :Rams_Park ;
             :hasPlayer :Dries_Mertens ,
                        :Kerem_Akturkoglu ,
                        :Victor_Osimhen ;
             :isManagedBy :Okan_Buruk ;
             :locatedInCity :Istanbul ;
             :hasFoundedYear 1905 ;
             rdfs:label "Galatasaray"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Gaziantep
:Gaziantep rdf:type owl:NamedIndividual ,
                    :City ;
           rdfs:label "Gaziantep"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Gaziantep_FK
:Gaziantep_FK rdf:type owl:NamedIndividual ,
                       :Team ;
              :hasHomeStadium :Kalyon_Gaziantep_Stadium ;
              :locatedInCity :Gaziantep ;
              :hasFoundedYear 1988 ;
              rdfs:label "Gaziantep FK"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Goalkeeper
:Goalkeeper rdf:type owl:NamedIndividual ,
                     :Position ;
            rdfs:label "Goalkeeper"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Goztepe
:Goztepe rdf:type owl:NamedIndividual ,
                  :Team ;
         :locatedInCity :Izmir ;
         :hasFoundedYear 1925 ;
         rdfs:label "Goztepe"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hakan_Kutlu
:Hakan_Kutlu rdf:type owl:NamedIndividual ,
                      :Manager ;
             :hasNationality "Turkish" ;
             rdfs:label "Hakan Kutlu"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hatay
:Hatay rdf:type owl:NamedIndividual ,
                :City ;
       rdfs:label "Hatay"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hatayspor
:Hatayspor rdf:type owl:NamedIndividual ,
                    :Team ;
           :hasHomeStadium :Yeni_Hatay_Stadium ;
           :locatedInCity :Hatay ;
           :hasFoundedYear 1967 ;
           rdfs:label "Hatayspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ismail_Kartal
:Ismail_Kartal rdf:type owl:NamedIndividual ,
                        :Manager ;
               :hasNationality "Turkish" ;
               rdfs:label "Ismail Kartal"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Istanbul
:Istanbul rdf:type owl:NamedIndividual ,
                   :City ;
          rdfs:label "Istanbul"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Izmir
:Izmir rdf:type owl:NamedIndividual ,
                :City ;
       rdfs:label "Izmir"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kadir_Has_Stadium
:Kadir_Has_Stadium rdf:type owl:NamedIndividual ,
                            :Stadium ;
                   :locatedInCity :Kayseri ;
                   :hasCapacity 32864 ;
                   rdfs:label "Kadir Has Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kalyon_Gaziantep_Stadium
:Kalyon_Gaziantep_Stadium rdf:type owl:NamedIndividual ,
                                   :Stadium ;
                          :locatedInCity :Gaziantep ;
                          :hasCapacity 35336 ;
                          rdfs:label "Kalyon Gaziantep Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kasimpasa
:Kasimpasa rdf:type owl:NamedIndividual ,
                    :Team ;
           :locatedInCity :Istanbul ;
           :hasFoundedYear 1921 ;
           rdfs:label "Kasimpasa"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kayseri
:Kayseri rdf:type owl:NamedIndividual ,
                  :City ;
         rdfs:label "Kayseri"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kayserispor
:Kayserispor rdf:type owl:NamedIndividual ,
                      :Team ;
             :hasHomeStadium :Kadir_Has_Stadium ;
             :locatedInCity :Kayseri ;
             :hasFoundedYear 1966 ;
             rdfs:label "Kayserispor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kerem_Akturkoglu
:Kerem_Akturkoglu rdf:type owl:NamedIndividual ,
                           :Player ;
                  :playsPosition :Midfielder ;
                  :hasJerseyNumber 77 ;
                  :hasNationality "Turkish" ;
                  rdfs:label "Kerem Akturkoglu"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konya
:Konya rdf:type owl:NamedIndividual ,
                :City ;
       rdfs:label "Konya"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konya_Buyuksehir_Stadium
:Konya_Buyuksehir_Stadium rdf:type owl:NamedIndividual ,
                                   :Stadium ;
                          :locatedInCity :Konya ;
                          :hasCapacity 42512 ;
                          rdfs:label "Konya Buyuksehir Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konyaspor
:Konyaspor rdf:type owl:NamedIndividual ,
                    :Team ;
           :hasHomeStadium :Konya_Buyuksehir_Stadium ;
           :hasPlayer :Adis_Jahovic ;
           :isManagedBy :Hakan_Kutlu ;
           :locatedInCity :Konya ;
           :hasFoundedYear 1922 ;
           rdfs:label "Konyaspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Match_GS_FB_2025
:Match_GS_FB_2025 rdf:type owl:NamedIndividual ,
                           :Match ;
                  :awayTeam :Fenerbahce ;
                  :homeTeam :Galatasaray ;
                  :partOfSeason :Superlig_Season_2025_26 ;
                  :playedAt :Rams_Park ;
                  rdfs:label "Galatasaray vs Fenerbahce 2025"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Mauro_Icardi
:Mauro_Icardi rdf:type owl:NamedIndividual ,
                       :Player ;
              :playsPosition :Forward ;
              :hasJerseyNumber 9 ;
              :hasNationality "Argentine" ;
              rdfs:label "Mauro Icardi"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Midfielder
:Midfielder rdf:type owl:NamedIndividual ,
                     :Position ;
            rdfs:label "Midfielder"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Okan_Buruk
:Okan_Buruk rdf:type owl:NamedIndividual ,
                     :Manager ;
            :hasNationality "Turkish" ;
            rdfs:label "Okan Buruk"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Papara_Park
:Papara_Park rdf:type owl:NamedIndividual ,
                      :Stadium ;
             :locatedInCity :Trabzon ;
             :hasCapacity 40682 ;
             rdfs:label "Papara Park"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Paul_Onuachu
:Paul_Onuachu rdf:type owl:NamedIndividual ,
                       :Player ;
              :playsPosition :Forward ;
              :hasJerseyNumber 88 ;
              :hasNationality "Nigerian" ;
              rdfs:label "Paul Onuachu"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rafa_Silva
:Rafa_Silva rdf:type owl:NamedIndividual ,
                     :Player ;
            :playsPosition :Midfielder ;
            :hasJerseyNumber 7 ;
            :hasNationality "Portuguese" ;
            rdfs:label "Rafa Silva"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rams_Park
:Rams_Park rdf:type owl:NamedIndividual ,
                    :Stadium ;
           :locatedInCity :Istanbul ;
           :hasCapacity 52223 ;
           rdfs:label "Rams Park"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rize
:Rize rdf:type owl:NamedIndividual ,
               :City ;
      rdfs:label "Rize"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsun
:Samsun rdf:type owl:NamedIndividual ,
                 :City ;
        rdfs:label "Samsun"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsun_19_Mayis_Stadium
:Samsun_19_Mayis_Stadium rdf:type owl:NamedIndividual ,
                                  :Stadium ;
                         :locatedInCity :Samsun ;
                         :hasCapacity 33500 ;
                         rdfs:label "Samsun 19 Mayis Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsunspor
:Samsunspor rdf:type owl:NamedIndividual ,
                     :Team ;
            :hasHomeStadium :Samsun_19_Mayis_Stadium ;
            :isManagedBy :Stjepan_Tomas ;
            :locatedInCity :Samsun ;
            :hasFoundedYear 1965 ;
            rdfs:label "Samsunspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Serdar_Topraktepe
:Serdar_Topraktepe rdf:type owl:NamedIndividual ,
                            :Manager ;
                   :hasNationality "Turkish" ;
                   rdfs:label "Serdar Topraktepe"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sergen_Yalcin
:Sergen_Yalcin rdf:type owl:NamedIndividual ,
                        :Manager ;
               :hasNationality "Turkish" ;
               rdfs:label "Sergen Yalcin"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sivasspor
:Sivasspor rdf:type owl:NamedIndividual ,
                    :Team ;
           :locatedInCity :Samsun ;
           :hasFoundedYear 1967 ;
           rdfs:label "Sivasspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Stjepan_Tomas
:Stjepan_Tomas rdf:type owl:NamedIndividual ,
                        :Manager ;
               :hasNationality "Croatian" ;
               rdfs:label "Stjepan Tomas"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sukru_Saracoglu_Stadium
:Sukru_Saracoglu_Stadium rdf:type owl:NamedIndividual ,
                                  :Stadium ;
                         :locatedInCity :Istanbul ;
                         :hasCapacity 50509 ;
                         rdfs:label "Sukru Saracoglu Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Superlig_Season_2025_26
:Superlig_Season_2025_26 rdf:type owl:NamedIndividual ,
                                  :Season ;
                         rdfs:label "Superlig Season 2025-26"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Timsah_Arena
:Timsah_Arena rdf:type owl:NamedIndividual ,
                       :Stadium ;
              :locatedInCity :Bursa ;
              :hasCapacity 43500 ;
              rdfs:label "Timsah Arena"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Trabzon
:Trabzon rdf:type owl:NamedIndividual ,
                  :City ;
         rdfs:label "Trabzon"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Trabzonspor
:Trabzonspor rdf:type owl:NamedIndividual ,
                      :Team ;
             :hasHomeStadium :Papara_Park ;
             :hasPlayer :Paul_Onuachu ;
             :isManagedBy :Abdullah_Avci ;
             :locatedInCity :Trabzon ;
             :hasFoundedYear 1967 ;
             rdfs:label "Trabzonspor"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Tupras_Stadium
:Tupras_Stadium rdf:type owl:NamedIndividual ,
                         :Stadium ;
                :locatedInCity :Istanbul ;
                :hasCapacity 42584 ;
                rdfs:label "Tupras Stadium"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Victor_Osimhen
:Victor_Osimhen rdf:type owl:NamedIndividual ,
                         :Player ;
                :playsPosition :Forward ;
                :hasAge 26 ;
                :hasJerseyNumber 9 ;
                :hasNationality "Nigerian" ;
                rdfs:label "Victor Osimhen"@en .


###  http://www.semanticweb.org/mehme/ontologies/2026/superlig#Yeni_Hatay_Stadium
:Yeni_Hatay_Stadium rdf:type owl:NamedIndividual ,
                             :Stadium ;
                    :locatedInCity :Hatay ;
                    :hasCapacity 25000 ;
                    rdfs:label "Yeni Hatay Stadium"@en .


###  Generated by the OWL API (version 5.1.18) https://github.com/owlcs/owlapi/
