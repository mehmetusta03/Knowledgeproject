{
  "_comment" : "Created with OWL2VOWL (version 0.3.5), http://vowl.visualdataweb.org",
  "header" : {
    "languages" : [ "en", "undefined" ],
    "baseIris" : [ "http://www.w3.org/1999/02/22-rdf-syntax-ns", "http://www.w3.org/2000/01/rdf-schema", "http://www.w3.org/2001/XMLSchema", "http://www.semanticweb.org/mehme/ontologies/2026/superlig" ],
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "version" : "2.0",
    "labels" : {
      "en" : "Süper Lig Football Knowledge Ontology"
    },
    "comments" : {
      "en" : "An OWL 2 ontology representing the Turkish Süper Lig professional football league. Includes all 19 current teams, players, managers, stadiums, cities, playing positions, matches and seasons. Developed in Protégé 5.x using the METHONTOLOGY methodology. Phase 2 — May 2026."
    },
    "other" : {
      "versionInfo" : [ {
        "identifier" : "versionInfo",
        "language" : "undefined",
        "value" : "2.0",
        "type" : "label"
      } ]
    }
  },
  "namespace" : [ ],
  "class" : [ {
    "id" : "3",
    "type" : "owl:Class"
  }, {
    "id" : "4",
    "type" : "owl:Class"
  }, {
    "id" : "8",
    "type" : "owl:Class"
  }, {
    "id" : "2",
    "type" : "owl:Class"
  }, {
    "id" : "9",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "10",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "11",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "12",
    "type" : "owl:Class"
  }, {
    "id" : "13",
    "type" : "owl:Class"
  }, {
    "id" : "18",
    "type" : "owl:Class"
  }, {
    "id" : "19",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "20",
    "type" : "rdfs:Datatype"
  }, {
    "id" : "23",
    "type" : "owl:Class"
  }, {
    "id" : "1",
    "type" : "owl:Class"
  }, {
    "id" : "7",
    "type" : "owl:Class"
  }, {
    "id" : "5",
    "type" : "owl:Class"
  }, {
    "id" : "14",
    "type" : "owl:Class"
  } ],
  "classAttribute" : [ {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Position",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Position",
      "en" : "Position"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Forward",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Forward",
        "en" : "Forward"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Midfielder",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Midfielder",
        "en" : "Midfielder"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Goalkeeper",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Goalkeeper",
        "en" : "Goalkeeper"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Defender",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Defender",
        "en" : "Defender"
      }
    } ],
    "comment" : {
      "en" : "A playing position on a football pitch: Forward, Midfielder, Defender, or Goalkeeper. [Added v2]"
    },
    "id" : "3"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Referee",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Referee",
      "en" : "Referee"
    },
    "comment" : {
      "en" : "A licensed match official. Included for structural completeness; currently out of scope for population."
    },
    "id" : "4",
    "superClasses" : [ "5" ]
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Player",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Player",
      "en" : "Player"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Victor_Osimhen",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Victor_Osimhen",
        "en" : "Victor Osimhen"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dries_Mertens",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Dries_Mertens",
        "en" : "Dries Mertens"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dusan_Tadic",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Dusan_Tadic",
        "en" : "Dusan Tadic"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rafa_Silva",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Rafa_Silva",
        "en" : "Rafa Silva"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Mauro_Icardi",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Mauro_Icardi",
        "en" : "Mauro Icardi"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Adis_Jahovic",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Adis_Jahovic",
        "en" : "Adis Jahovic"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Paul_Onuachu",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Paul_Onuachu",
        "en" : "Paul Onuachu"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kerem_Akturkoglu",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kerem_Akturkoglu",
        "en" : "Kerem Akturkoglu"
      }
    } ],
    "comment" : {
      "en" : "A professional footballer currently contracted to a Süper Lig club."
    },
    "id" : "8",
    "superClasses" : [ "5" ]
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Team",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Team",
      "en" : "Team"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsunspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Samsunspor",
        "en" : "Samsunspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sivasspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Sivasspor",
        "en" : "Sivasspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Besiktas",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Besiktas",
        "en" : "Besiktas"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Trabzonspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Trabzonspor",
        "en" : "Trabzonspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Basaksehir_FK",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Basaksehir_FK",
        "en" : "Basaksehir FK"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konyaspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Konyaspor",
        "en" : "Konyaspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalyaspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Antalyaspor",
        "en" : "Antalyaspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Eyupspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Eyupspor",
        "en" : "Eyupspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hatayspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Hatayspor",
        "en" : "Hatayspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Caykur_Rizespor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Caykur_Rizespor",
        "en" : "Caykur Rizespor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kayserispor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kayserispor",
        "en" : "Kayserispor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Gaziantep_FK",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Gaziantep_FK",
        "en" : "Gaziantep FK"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Fenerbahce",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Fenerbahce",
        "en" : "Fenerbahce"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kasimpasa",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kasimpasa",
        "en" : "Kasimpasa"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankaragucu",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Ankaragucu",
        "en" : "Ankaragucu"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Galatasaray",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Galatasaray",
        "en" : "Galatasaray"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Goztepe",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Goztepe",
        "en" : "Goztepe"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Bursaspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Bursaspor",
        "en" : "Bursaspor"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Alanyaspor",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Alanyaspor",
        "en" : "Alanyaspor"
      }
    } ],
    "comment" : {
      "en" : "A professional football club participating in the Turkish Süper Lig in the 2025-26 season."
    },
    "id" : "2"
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#integer",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "9",
    "label" : {
      "IRI-based" : "integer"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#integer",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "10",
    "label" : {
      "IRI-based" : "integer"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#string",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "11",
    "label" : {
      "IRI-based" : "string"
    }
  }, {
    "instances" : 0,
    "union" : [ "2", "7" ],
    "attributes" : [ "union", "anonymous" ],
    "id" : "12"
  }, {
    "instances" : 0,
    "union" : [ "8", "14" ],
    "attributes" : [ "union", "anonymous" ],
    "id" : "13"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Season",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Season",
      "en" : "Season"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Superlig_Season_2025_26",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Superlig_Season_2025_26",
        "en" : "Superlig Season 2025-26"
      }
    } ],
    "comment" : {
      "en" : "A Süper Lig football season (e.g., 2025-26). [Added v2]"
    },
    "id" : "18"
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#integer",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "19",
    "label" : {
      "IRI-based" : "integer"
    }
  }, {
    "iri" : "http://www.w3.org/2001/XMLSchema#integer",
    "baseIri" : "http://www.w3.org/2001/XMLSchema",
    "id" : "20",
    "label" : {
      "IRI-based" : "integer"
    }
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#City",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "City",
      "en" : "City"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Izmir",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Izmir",
        "en" : "Izmir"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankara",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Ankara",
        "en" : "Ankara"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Bursa",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Bursa",
        "en" : "Bursa"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kayseri",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kayseri",
        "en" : "Kayseri"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Istanbul",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Istanbul",
        "en" : "Istanbul"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Gaziantep",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Gaziantep",
        "en" : "Gaziantep"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Trabzon",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Trabzon",
        "en" : "Trabzon"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalya",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Antalya",
        "en" : "Antalya"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsun",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Samsun",
        "en" : "Samsun"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konya",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Konya",
        "en" : "Konya"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hatay",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Hatay",
        "en" : "Hatay"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rize",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Rize",
        "en" : "Rize"
      }
    } ],
    "comment" : {
      "en" : "A Turkish city in which one or more Süper Lig teams or stadiums are located."
    },
    "id" : "23"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Match",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Match",
      "en" : "Match"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Match_GS_FB_2025",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Match_GS_FB_2025",
        "en" : "Galatasaray vs Fenerbahce 2025"
      }
    } ],
    "comment" : {
      "en" : "An individual competitive fixture between two Süper Lig teams. [Added v2]"
    },
    "id" : "1"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Stadium",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Stadium",
      "en" : "Stadium"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Antalya_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Antalya_Stadium",
        "en" : "Antalya Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kalyon_Gaziantep_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kalyon_Gaziantep_Stadium",
        "en" : "Kalyon Gaziantep Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Papara_Park",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Papara_Park",
        "en" : "Papara Park"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Rams_Park",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Rams_Park",
        "en" : "Rams Park"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Konya_Buyuksehir_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Konya_Buyuksehir_Stadium",
        "en" : "Konya Buyuksehir Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Kadir_Has_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Kadir_Has_Stadium",
        "en" : "Kadir Has Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ataturk_Olympic_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Ataturk_Olympic_Stadium",
        "en" : "Ataturk Olympic Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Caykur_Didi_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Caykur_Didi_Stadium",
        "en" : "Caykur Didi Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Samsun_19_Mayis_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Samsun_19_Mayis_Stadium",
        "en" : "Samsun 19 Mayis Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sukru_Saracoglu_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Sukru_Saracoglu_Stadium",
        "en" : "Sukru Saracoglu Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Timsah_Arena",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Timsah_Arena",
        "en" : "Timsah Arena"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Yeni_Hatay_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Yeni_Hatay_Stadium",
        "en" : "Yeni Hatay Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Tupras_Stadium",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Tupras_Stadium",
        "en" : "Tupras Stadium"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ankara_Stad",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Ankara_Stad",
        "en" : "Ankara Stadium"
      }
    } ],
    "comment" : {
      "en" : "A physical sports venue where Süper Lig matches are played."
    },
    "id" : "7"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Person",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Person",
      "en" : "Person"
    },
    "subClasses" : [ "4", "8", "14" ],
    "comment" : {
      "en" : "Abstract superclass for any human individual in the football domain."
    },
    "id" : "5"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Manager",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "instances" : 0,
    "label" : {
      "IRI-based" : "Manager",
      "en" : "Manager"
    },
    "individuals" : [ {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Abdullah_Avci",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Abdullah_Avci",
        "en" : "Abdullah Avci"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Okan_Buruk",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Okan_Buruk",
        "en" : "Okan Buruk"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Dominic_Tedesco",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Dominic_Tedesco",
        "en" : "Dominic Tedesco"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Ismail_Kartal",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Ismail_Kartal",
        "en" : "Ismail Kartal"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Sergen_Yalcin",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Sergen_Yalcin",
        "en" : "Sergen Yalcin"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Stjepan_Tomas",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Stjepan_Tomas",
        "en" : "Stjepan Tomas"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Serdar_Topraktepe",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Serdar_Topraktepe",
        "en" : "Serdar Topraktepe"
      }
    }, {
      "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#Hakan_Kutlu",
      "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
      "labels" : {
        "IRI-based" : "Hakan_Kutlu",
        "en" : "Hakan Kutlu"
      }
    } ],
    "comment" : {
      "en" : "The head coach or technical director responsible for managing a Süper Lig team."
    },
    "id" : "14",
    "superClasses" : [ "5" ]
  } ],
  "property" : [ {
    "id" : "0",
    "type" : "owl:objectProperty"
  }, {
    "id" : "6",
    "type" : "owl:objectProperty"
  }, {
    "id" : "15",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "16",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "17",
    "type" : "rdfs:SubClassOf"
  }, {
    "id" : "21",
    "type" : "owl:objectProperty"
  }, {
    "id" : "22",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "24",
    "type" : "owl:objectProperty"
  }, {
    "id" : "25",
    "type" : "owl:objectProperty"
  }, {
    "id" : "26",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "27",
    "type" : "owl:objectProperty"
  }, {
    "id" : "28",
    "type" : "owl:objectProperty"
  }, {
    "id" : "29",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "30",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "31",
    "type" : "owl:datatypeProperty"
  }, {
    "id" : "32",
    "type" : "owl:objectProperty"
  }, {
    "id" : "33",
    "type" : "owl:objectProperty"
  }, {
    "id" : "34",
    "type" : "owl:objectProperty"
  } ],
  "propertyAttribute" : [ {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#homeTeam",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "2",
    "label" : {
      "IRI-based" : "homeTeam",
      "en" : "homeTeam"
    },
    "domain" : "1",
    "comment" : {
      "en" : "Relates a Match to the Team playing as the home side. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "0"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasHomeStadium",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "7",
    "label" : {
      "IRI-based" : "hasHomeStadium",
      "en" : "hasHomeStadium"
    },
    "domain" : "2",
    "comment" : {
      "en" : "Relates a Team to the Stadium it uses for home matches."
    },
    "attributes" : [ "object" ],
    "id" : "6"
  }, {
    "range" : "5",
    "domain" : "4",
    "attributes" : [ "object", "anonymous" ],
    "id" : "15"
  }, {
    "range" : "5",
    "domain" : "8",
    "attributes" : [ "object", "anonymous" ],
    "id" : "16"
  }, {
    "range" : "5",
    "domain" : "14",
    "attributes" : [ "object", "anonymous" ],
    "id" : "17"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#playedAt",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "7",
    "label" : {
      "IRI-based" : "playedAt",
      "en" : "playedAt"
    },
    "domain" : "1",
    "comment" : {
      "en" : "Relates a Match to the Stadium where it was played. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "21"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasFoundedYear",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "9",
    "label" : {
      "IRI-based" : "hasFoundedYear",
      "en" : "hasFoundedYear"
    },
    "domain" : "2",
    "comment" : {
      "en" : "The year in which a Team was officially founded. [Added v2]"
    },
    "attributes" : [ "datatype" ],
    "id" : "22"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#playsPosition",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "3",
    "label" : {
      "IRI-based" : "playsPosition",
      "en" : "playsPosition"
    },
    "domain" : "8",
    "comment" : {
      "en" : "Relates a Player to their primary playing Position on the pitch. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "24"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#awayTeam",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "2",
    "label" : {
      "IRI-based" : "awayTeam",
      "en" : "awayTeam"
    },
    "domain" : "1",
    "comment" : {
      "en" : "Relates a Match to the Team playing as the away side. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "25"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasCapacity",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "20",
    "label" : {
      "IRI-based" : "hasCapacity",
      "en" : "hasCapacity"
    },
    "domain" : "7",
    "comment" : {
      "en" : "The official seating capacity of a Stadium. [Added v2]"
    },
    "attributes" : [ "datatype" ],
    "id" : "26"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#partOfSeason",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "18",
    "label" : {
      "IRI-based" : "partOfSeason",
      "en" : "partOfSeason"
    },
    "domain" : "1",
    "comment" : {
      "en" : "Relates a Match to the Season it belongs to. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "27"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#locatedInCity",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "23",
    "label" : {
      "IRI-based" : "locatedInCity",
      "en" : "locatedInCity"
    },
    "domain" : "12",
    "comment" : {
      "en" : "Relates a Team or Stadium to the City in which it is geographically situated."
    },
    "attributes" : [ "object" ],
    "id" : "28"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasNationality",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "11",
    "label" : {
      "IRI-based" : "hasNationality",
      "en" : "hasNationality"
    },
    "domain" : "13",
    "comment" : {
      "en" : "The nationality of a Player or Manager. [Added v2]"
    },
    "attributes" : [ "datatype" ],
    "id" : "29"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasAge",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "19",
    "label" : {
      "IRI-based" : "hasAge",
      "en" : "hasAge"
    },
    "domain" : "8",
    "comment" : {
      "en" : "The age in years of a Player. [Added v2]"
    },
    "attributes" : [ "datatype" ],
    "id" : "30"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasJerseyNumber",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "10",
    "label" : {
      "IRI-based" : "hasJerseyNumber",
      "en" : "hasJerseyNumber"
    },
    "domain" : "8",
    "comment" : {
      "en" : "The shirt number of a Player. [Added v2]"
    },
    "attributes" : [ "datatype" ],
    "id" : "31"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#hasPlayer",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "8",
    "label" : {
      "IRI-based" : "hasPlayer",
      "en" : "hasPlayer"
    },
    "domain" : "2",
    "comment" : {
      "en" : "Relates a Team to a Player currently contracted to it."
    },
    "attributes" : [ "object" ],
    "id" : "32"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#participatesIn",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "1",
    "label" : {
      "IRI-based" : "participatesIn",
      "en" : "participatesIn"
    },
    "domain" : "2",
    "comment" : {
      "en" : "Relates a Team to a Match in which it takes part. [Added v2]"
    },
    "attributes" : [ "object" ],
    "id" : "33"
  }, {
    "iri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig#isManagedBy",
    "baseIri" : "http://www.semanticweb.org/mehme/ontologies/2026/superlig",
    "range" : "14",
    "label" : {
      "IRI-based" : "isManagedBy",
      "en" : "isManagedBy"
    },
    "domain" : "2",
    "comment" : {
      "en" : "Relates a Team to its current head coach or manager."
    },
    "attributes" : [ "object" ],
    "id" : "34"
  } ]
}