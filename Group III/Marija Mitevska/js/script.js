/*---------------THE ARRAY COONTAINING THE BANDS OBJECTS---------------*/
let bands = [
    {
        "name": "Metallica",
        "active": true,
        "tags": [
            "thrash metal",
            "metal",
            "heavy metal",
            "hard rock",
            "rock"
        ],
        "members": [
            {
                "name": "James Hetfield"
            },
            {
                "name": "Lars Ulrich"
            },
            {
                "name": "Kirk Hammett"
            },
            {
                "name": "Robert Trujillo",
                "former": false
            },
            {
                "name": "Dave Mustaine",
                "former": true
            },
            {
                "name": "Ron McGovney",
                "former": true
            },
            {
                "name": "Cliff Burton",
                "former": true
            },
            {
                "name": "Jason Newsted",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Kill 'Em All",
                "year": 1983,
                "type": "studio"
            },
            {
                "name": "Ride the Lightning",
                "year": 1984,
                "type": "studio"
            },
            {
                "name": "Master of Puppets",
                "year": 1986,
                "type": "studio"
            },
            {
                "name": "...And Justice for All",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Metallica",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "Live Shit: Binge & Purge",
                "year": 1993,
                "type": "live"
            },
            {
                "name": "Load",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "Reload",
                "year": 1997,
                "type": "studio"
            },
            {
                "name": "Garage Inc.",
                "year": 1998,
                "type": "cover"
            },
            {
                "name": "S&M",
                "year": 1999,
                "type": "live"
            },
            {
                "name": "St. Anger",
                "year": 2003,
                "type": "studio"
            },
            {
                "name": "Death Magnetic",
                "year": 2008,
                "type": "studio"
            },
            {
                "name": "Hardwired... to Self-Destruct",
                "year": 2016,
                "type": "studio"
            }
        ]
    },
    {
        "name": "Megadeth",
        "active": true,
        "tags": [
            "thrash metal",
            "heavy metal",
            "metal",
            "speed metal"
        ],
        "members": [
            {
                "name": "Dave Mustaine"
            },
            {
                "name": "David Ellefson"
            },
            {
                "name": "Kiko Loureiro"
            },
            {
                "name": "Dirk Verbeuren"
            },
            {
                "name": "Gar Samuelson",
                "former": true
            },
            {
                "name": "Chris Poland",
                "former": true
            },
            {
                "name": "Chuck Behler",
                "former": true
            },
            {
                "name": "Jeff Young",
                "former": true
            },
            {
                "name": "Nick Menza",
                "former": true
            },
            {
                "name": "Marty Friedman",
                "former": true
            },
            {
                "name": "Jimmy DeGrasso",
                "former": true
            },
            {
                "name": "Al Pitrelli",
                "former": true
            },
            {
                "name": "Shawn Drover",
                "former": true
            },
            {
                "name": "Glen Drover",
                "former": true
            },
            {
                "name": "James MacDonough",
                "former": true
            },
            {
                "name": "James LoMenzo",
                "former": true
            },
            {
                "name": "Chris Broderick",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Killing Is My Business... and Business Is Good!",
                "year": 1985,
                "type": "studio"
            },
            {
                "name": "Peace Sells... but Who's Buying?",
                "year": 1986,
                "type": "studio"
            },
            {
                "name": "So Far, So Good... So What!",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Rust in Peace",
                "year": 1990,
                "type": "studio"
            },
            {
                "name": "Countdown to Extinction",
                "year": 1992,
                "type": "studio"
            },
            {
                "name": "Youthanasia",
                "year": 1994,
                "type": "studio"
            },
            {
                "name": "Cryptic Writings",
                "year": 1997,
                "type": "studio"
            },
            {
                "name": "Risk",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "The World Needs a Hero",
                "year": 2001,
                "type": "studio"
            },
            {
                "name": "The System Has Failed",
                "year": 2004,
                "type": "studio"
            },
            {
                "name": "United Abominations",
                "year": 2007,
                "type": "studio"
            },
            {
                "name": "Endgame",
                "year": 2009,
                "type": "studio"
            },
            {
                "name": "Thirteen",
                "year": 2011,
                "type": "studio"
            },
            {
                "name": "Super Collider",
                "year": 2013,
                "type": "studio"
            },
            {
                "name": "Dystopia",
                "year": 2016,
                "type": "studio"
            },
            {
                "name": "Rude Awakening",
                "year": 2002,
                "type": "live"
            },
            {
                "name": "Capitol Punishment: The Megadeth Years",
                "year": 2000,
                "type": "compilation"
            },
            {
                "name": "Warchest",
                "year": 2007,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Slayer",
        "active": true,
        "tags": [
            "thrash metal",
            "metal",
            "heavy metal",
            "speed metal"
        ],
        "members": [
            {
                "name": "Kerry King"
            },
            {
                "name": "Tom Araya"
            },
            {
                "name": "Paul Bostaph"
            },
            {
                "name": "Gary Holt"
            },
            {
                "name": "Jeff Hanneman",
                "former": true
            },
            {
                "name": "Dave Lombardo",
                "former": true
            },
            {
                "name": "Jon Dette",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Show No Mercy",
                "year": 1983,
                "type": "studio"
            },
            {
                "name": "Hell Awaits",
                "year": 1985,
                "type": "studio"
            },
            {
                "name": "Reign in Blood",
                "year": 1986,
                "type": "studio"
            },
            {
                "name": "South of Heaven",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Seasons in the Abyss",
                "year": 1990,
                "type": "studio"
            },
            {
                "name": "Divine Intervention",
                "year": 1994,
                "type": "studio"
            },
            {
                "name": "Undisputed Attitude",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "Diabolus in Musica",
                "year": 1998,
                "type": "studio"
            },
            {
                "name": "God Hates Us All",
                "year": 2001,
                "type": "studio"
            },
            {
                "name": "Christ Illusion",
                "year": 2006,
                "type": "studio"
            },
            {
                "name": "World Painted Blood",
                "year": 2009,
                "type": "studio"
            },
            {
                "name": "Repentless",
                "year": 2015,
                "type": "studio"
            },
            {
                "name": "Live Undead",
                "year": 1984,
                "type": "live"
            }
        ]
    },
    {
        "name": "Athrax",
        "active": true,
        "tags": [
            "thrash metal",
            "heavy metal",
            "metal",
            "speed metal"
        ],
        "members": [
            {
                "name": "Scott Ian"
            },
            {
                "name": "Charlie Benante"
            },
            {
                "name": "Frank Bello"
            },
            {
                "name": "Joey Belladonna"
            },
            {
                "name": "Jonathan Donais"
            },
            {
                "name": "Dan Lilker",
                "former": true
            },
            {
                "name": "John Connelly",
                "former": true
            },
            {
                "name": "Dirk Kennedy",
                "former": true
            },
            {
                "name": "Greg D'Angelo",
                "former": true
            },
            {
                "name": "Neil Turbin",
                "former": true
            },
            {
                "name": "Dan Spitz",
                "former": true
            },
            {
                "name": "John Bush",
                "former": true
            },
            {
                "name": "Paul Crook",
                "former": true
            },
            {
                "name": "Rob Caggiano",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Fistful of Metal",
                "year": 1984,
                "type": "studio"
            },
            {
                "name": "Spreading the Disease",
                "year": 1985,
                "type": "studio"
            },
            {
                "name": "Among the Living",
                "year": 1987,
                "type": "studio"
            },
            {
                "name": "State of Euphoria",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Persistence of Time",
                "year": 1990,
                "type": "studio"
            },
            {
                "name": "Sound of White Noise",
                "year": 1993,
                "type": "studio"
            },
            {
                "name": "Stomp 442",
                "year": 1995,
                "type": "studio"
            },
            {
                "name": "Volume 8: The Threat Is Real",
                "year": 1998,
                "type": "studio"
            },
            {
                "name": "We've Come for You All",
                "year": 2003,
                "type": "studio"
            },
            {
                "name": "Worship Music",
                "year": 2003,
                "type": "studio"
            },
            {
                "name": "For All Kings",
                "year": 2016,
                "type": "studio"
            },
            {
                "name": "Live: The Island Years",
                "year": 1994,
                "type": "live"
            },
            {
                "name": "Music of Mass Destruction",
                "year": 2004,
                "type": "live"
            },
            {
                "name": "Attack of the Killer B's",
                "year": 1991,
                "type": "compilation"
            },
            {
                "name": "Return of the Killer A's",
                "year": 1999,
                "type": "compilation"
            },
            {
                "name": "The Greater of Two Evils",
                "year": 2004,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Kreator",
        "active": true,
        "tags": [
            "thrash metal",
            "metal",
            "heavy metal",
            "german"
        ],
        "members": [
            {
                "name": "Mille Petrozza",
                "former": false
            },
            {
                "name": "Christian Giesler",
                "former": false
            },
            {
                "name": "Jürgen Reil",
                "former": false
            },
            {
                "name": "Sami Yli-Sirniö",
                "former": false
            },
            {
                "name": "Michael Wulf",
                "former": true
            },
            {
                "name": "Jörg Trzebiatowski",
                "former": true
            },
            {
                "name": "Frank Gosdzik",
                "former": true
            },
            {
                "name": "Tommy Vetterli",
                "former": true
            },
            {
                "name": "Roberto Fioretti",
                "former": true
            },
            {
                "name": "Andreas Herz",
                "former": true
            },
            {
                "name": "Joe Cangelosi",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Endless Pain",
                "year": 1985,
                "type": "studio"
            },
            {
                "name": "Pleasure to Kill",
                "year": 1986,
                "type": "studio"
            },
            {
                "name": "Terrible Certainty",
                "year": 1987,
                "type": "studio"
            },
            {
                "name": "Extreme Aggression",
                "year": 1989,
                "type": "studio"
            },
            {
                "name": "Coma of Souls",
                "year": 1990,
                "type": "studio"
            },
            {
                "name": "Renewal",
                "year": 1992,
                "type": "studio"
            },
            {
                "name": "Cause for Conflict",
                "year": 1995,
                "type": "studio"
            },
            {
                "name": "Outcast",
                "year": 1997,
                "type": "studio"
            },
            {
                "name": "Endorama",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "Violent Revolution",
                "year": 2001,
                "type": "studio"
            },
            {
                "name": "Enemy of God",
                "year": 2005,
                "type": "studio"
            },
            {
                "name": "Hordes of Chaos",
                "year": 2009,
                "type": "studio"
            },
            {
                "name": "Phantom Antichrist",
                "year": 2012,
                "type": "studio"
            },
            {
                "name": "Gods of Violence",
                "year": 2017,
                "type": "studio"
            },
            {
                "name": "Live Kreation",
                "year": 2003,
                "type": "live"
            },
            {
                "name": "Dying Alive",
                "year": 2013,
                "type": "live"
            },
            {
                "name": "Voices of Transgression",
                "year": 1999,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Slipknot",
        "active": true,
        "tags": [
            "nu metal",
            "metal",
            "heavy metal",
            "alternative metal"
        ],
        "members": [
            {
                "name": "Corey Taylor"
            },
            {
                "name": ""
            },
            {
                "name": "Mick Thomson"
            },
            {
                "name": "Jim Root"
            },
            {
                "name": "Craig Jones"
            },
            {
                "name": "Sid Wilson",
                "former": false
            },
            {
                "name": "Shawn Crahan",
                "former": false
            },
            {
                "name": "Chris Fehn",
                "former": false
            },
            {
                "name": "Alessandro Venturella",
                "former": false
            },
            {
                "name": "Jay Weinberg",
                "former": false
            },
            {
                "name": "Josh Brainard",
                "former": true
            },
            {
                "name": "Paul Gray",
                "former": true
            },
            {
                "name": "Donnie Steele",
                "former": true
            },
            {
                "name": "Joey Jordison",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Slipknot",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "Iowa",
                "year": 2001,
                "type": "studio"
            },
            {
                "name": "Vol. 3: (The Subliminal Verses)",
                "year": 2004,
                "type": "studio"
            },
            {
                "name": "All Hope Is Gone",
                "year": 2008,
                "type": "studio"
            },
            {
                "name": ".5: The Gray Chapter",
                "year": 2014,
                "type": "studio"
            },
            {
                "name": "9.0: Live",
                "year": 2005,
                "type": "live"
            },
            {
                "name": "Antennas to Hell",
                "year": 2012,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Stone Sour",
        "active": true,
        "tags": [
            "alternative metal",
            "hard rock",
            "metal",
            "nu metal",
            "rock",
            "alternative rock"
        ],
        "members": [
            {
                "name": "Corey Taylor",
                "former": false
            },
            {
                "name": "Josh Rand",
                "former": false
            },
            {
                "name": "Roy Mayorga",
                "former": false
            },
            {
                "name": "Johny Chow",
                "former": false
            },
            {
                "name": "Christian Martucci",
                "former": false
            },
            {
                "name": "Joel Ekman",
                "former": true
            },
            {
                "name": "Shawn Economaki",
                "former": true
            },
            {
                "name": "Jim Root",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Stone Sour",
                "year": 2002,
                "type": "studio"
            },
            {
                "name": "Come What(ever) May",
                "year": 2006,
                "type": "studio"
            },
            {
                "name": "Audio Secrecy",
                "year": 2010,
                "type": "studio"
            },
            {
                "name": "House of Gold & Bones – Part 1",
                "year": 2012,
                "type": "studio"
            },
            {
                "name": "House of Gold & Bones – Part 2 (2013)",
                "year": 2013,
                "type": "studio"
            },
            {
                "name": "Hydrograd",
                "year": 2017,
                "type": "studio"
            },
            {
                "name": "Live in Moscow",
                "year": 2007,
                "type": "live"
            }
        ]
    },
    {
        "name": "Rage Against the Machine",
        "active": false,
        "tags": [
            "rock",
            "alternative rock",
            "alternative",
            "political",
            "rapcore",
            "metal"
        ],
        "members": [
            {
                "name": "Zack de la Rocha"
            },
            {
                "name": "Tom Morello"
            },
            {
                "name": "Tim Commerford"
            },
            {
                "name": "Brad Wilk"
            }
        ],
        "albums": [
            {
                "name": "Rage Against the Machine",
                "year": 1992,
                "type": "studio"
            },
            {
                "name": "Evil Empire",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "The Battle of Los Angeles",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "Renegades",
                "year": 2000,
                "type": "studio"
            },
            {
                "name": "Live at the Grand Olympic Auditorium",
                "year": 2003,
                "type": "live"
            },
            {
                "name": "The Collection",
                "year": 2010,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Guns N' Roses",
        "active": true,
        "tags": [
            "hard rock",
            "rock",
            "hair metal",
            "heavy metal"
        ],
        "members": [
            {
                "name": "Axl Rose"
            },
            {
                "name": "Duff McKagan"
            },
            {
                "name": "Slash"
            },
            {
                "name": "Dizzy Reed"
            },
            {
                "name": "Richard Fortus"
            },
            {
                "name": "Frank Ferrer"
            },
            {
                "name": "Melissa Reese"
            },
            {
                "name": "Izzy Stradlin",
                "former": true
            },
            {
                "name": "Steven Adler",
                "former": true
            },
            {
                "name": "Matt Sorum",
                "former": true
            },
            {
                "name": "Gilby Clarke",
                "former": true
            },
            {
                "name": "Robin Finck",
                "former": true
            },
            {
                "name": "Buckethead",
                "former": true
            },
            {
                "name": "Bryan Mantia",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Appetite for Destruction",
                "year": 1987,
                "type": "studio"
            },
            {
                "name": "G N' R Lies",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Use Your Illusion I",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "Use Your Illusion II",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "The Spaghetti Incident?",
                "year": 1993,
                "type": "studio"
            },
            {
                "name": "Chinese Democracy",
                "year": 2008,
                "type": "studio"
            },
            {
                "name": "Greatest Hits",
                "year": 2004,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Soundgarden",
        "active": false,
        "tags": [
            "grunge",
            "alternative rock",
            "rock",
            "hard rock",
            "alternative"
        ],
        "members": [
            {
                "name": "Kim Thayil"
            },
            {
                "name": "Ben Shepherd"
            },
            {
                "name": "Matt Cameron"
            },
            {
                "name": "Chris Cornell",
                "former": true
            },
            {
                "name": "Hiro Yamamoto",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Ultramega OK",
                "year": 1988,
                "type": "studio"
            },
            {
                "name": "Louder Than Love",
                "year": 1989,
                "type": "studio"
            },
            {
                "name": "Badmotorfinger",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "Superunknown",
                "year": 1994,
                "type": "studio"
            },
            {
                "name": "Down on the Upside",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "King Animal",
                "year": 2012,
                "type": "studio"
            },
            {
                "name": "Live on I-5",
                "year": 2011,
                "type": "live"
            },
            {
                "name": "Telephantasm",
                "year": 2010,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Nirvana",
        "active": false,
        "tags": [
            "grunge",
            "alternative rock",
            "rock",
            "hard rock",
            "alternative"
        ],
        "members": [
            {
                "name": "Kurt Cobain"
            },
            {
                "name": "Krist Novoselic"
            },
            {
                "name": "Dave Grohl"
            },
            {
                "name": "Chad Channing",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Bleach",
                "year": 1989,
                "type": "studio"
            },
            {
                "name": "Nevermind",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "In Utero",
                "year": 1993,
                "type": "studio"
            },
            {
                "name": "MTV Unplugged in New York",
                "year": 1994,
                "type": "unplugged"
            },
            {
                "name": "From the Muddy Banks of the Wishkah",
                "year": 1996,
                "type": "live"
            },
            {
                "name": "Incesticide",
                "year": 1992,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Foo Fighters",
        "active": true,
        "tags": [
            "rock",
            "alternative rock",
            "grunge",
            "alternative",
            "hard rock"
        ],
        "members": [
            {
                "name": "Dave Grohl"
            },
            {
                "name": "Nate Mendel"
            },
            {
                "name": "Pat Smear"
            },
            {
                "name": "Taylor Hawkins"
            },
            {
                "name": "Chris Shiflett"
            },
            {
                "name": "Rami Jaffee"
            },
            {
                "name": "William Goldsmith",
                "former": true
            },
            {
                "name": "Franz Stahl",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Foo Fighters",
                "year": 1995,
                "type": "studio"
            },
            {
                "name": "The Colour and the Shape",
                "year": 1997,
                "type": "studio"
            },
            {
                "name": "There Is Nothing Left to Lose",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "One by One",
                "year": 2002,
                "type": "studio"
            },
            {
                "name": "In Your Honor",
                "year": 2005,
                "type": "studio"
            },
            {
                "name": "Echoes, Silence, Patience & Grace",
                "year": 2007,
                "type": "studio"
            },
            {
                "name": "Wasting Light",
                "year": 2011,
                "type": "studio"
            },
            {
                "name": "Sonic Highways",
                "year": 2014,
                "type": "studio"
            },
            {
                "name": "Concrete and Gold",
                "year": 2017,
                "type": "studio"
            },
            {
                "name": "Skin and Bones",
                "year": 2006,
                "type": "live"
            },
            {
                "name": "Greatest Hits",
                "year": 2009,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Velvet Revolver",
        "active": false,
        "tags": [
            "hard rock",
            "rock",
            "alternative rock",
            "alternative",
            "metal"
        ],
        "members": [
            {
                "name": "Slash"
            },
            {
                "name": "Duff McKagan"
            },
            {
                "name": "Matt Sorum"
            },
            {
                "name": "Dave Kushner"
            },
            {
                "name": "Scott Weiland"
            }
        ],
        "albums": [
            {
                "name": "Contraband",
                "year": 2004,
                "type": "studio"
            },
            {
                "name": "Libertad",
                "year": 2007,
                "type": "studio"
            }
        ]
    },
    {
        "name": "Stone Temple Pilots",
        "active": true,
        "tags": [
            "grunge",
            "alternative rock",
            "rock",
            "alternative",
            "hard rock"
        ],
        "members": [
            {
                "name": "Dean DeLeo"
            },
            {
                "name": "Robert DeLeo"
            },
            {
                "name": "Eric Kretz"
            },
            {
                "name": "Jeff Gutt"
            },
            {
                "name": "Scott Weiland",
                "former": true
            },
            {
                "name": "Chester Bennington",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Core",
                "year": 1992,
                "type": "studio"
            },
            {
                "name": "Purple",
                "year": 1994,
                "type": "studio"
            },
            {
                "name": "Tiny Music... Songs from the Vatican Gift Shop",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "No. 4",
                "year": 1999,
                "type": "studio"
            },
            {
                "name": "Shangri-La Dee Da",
                "year": 2001,
                "type": "studio"
            },
            {
                "name": "Stone Temple Pilots",
                "year": 2010,
                "type": "studio"
            },
            {
                "name": "Stone Temple Pilots",
                "year": 2018,
                "type": "studio"
            },
            {
                "name": "Alive in the Windy City",
                "year": 2012,
                "type": "live"
            },
            {
                "name": "Thank You",
                "year": 2003,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Pearl Jam",
        "active": true,
        "tags": [
            "grunge",
            "rock",
            "alternative rock",
            "alternative"
        ],
        "members": [
            {
                "name": "Eddie Vedder"
            },
            {
                "name": "Mike McCready"
            },
            {
                "name": "Stone Gossard"
            },
            {
                "name": "Jeff Ament"
            },
            {
                "name": "Matt Cameron"
            },
            {
                "name": "Dave Krusen",
                "former": true
            },
            {
                "name": "Matt Chamberlain",
                "former": true
            },
            {
                "name": "Dave Abbruzzese",
                "former": true
            },
            {
                "name": "Jack Irons",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Ten",
                "year": 1991,
                "type": "studio"
            },
            {
                "name": "Vs.",
                "year": 1993,
                "type": "studio"
            },
            {
                "name": "Vitalogy",
                "year": 1994,
                "type": "studio"
            },
            {
                "name": "No Code",
                "year": 1996,
                "type": "studio"
            },
            {
                "name": "Yield",
                "year": 1998,
                "type": "studio"
            },
            {
                "name": "Binaural",
                "year": 2000,
                "type": "studio"
            },
            {
                "name": "Riot Act",
                "year": 2002,
                "type": "studio"
            },
            {
                "name": "Pearl Jam",
                "year": 2006,
                "type": "studio"
            },
            {
                "name": "Backspacer",
                "year": 2009,
                "type": "studio"
            },
            {
                "name": "Lightning Bolt",
                "year": 2013,
                "type": "studio"
            },
            {
                "name": "Live on Two Legs",
                "year": 1998,
                "type": "live"
            },
            {
                "name": "Live at Benaroya Hall",
                "year": 2004,
                "type": "live"
            },
            {
                "name": "Live on Ten Legs",
                "year": 2011,
                "type": "live"
            },
            {
                "name": "Lost Dogs",
                "year": 2003,
                "type": "compilation"
            },
            {
                "name": "Rearviewmirror",
                "year": 2004,
                "type": "compilation"
            },
            {
                "name": "Pearl Jam Twenty",
                "year": 2011,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Temple of the Dog",
        "active": false,
        "tags": [
            "grunge",
            "alternative rock",
            "rock",
            "alternative"
        ],
        "members": [
            {
                "name": "Chris Cornell"
            },
            {
                "name": "Jeff Ament"
            },
            {
                "name": "Matt Cameron"
            },
            {
                "name": "Stone Gossard"
            },
            {
                "name": "Mike McCready"
            },
            {
                "name": "Eddie Vedder"
            }
        ],
        "albums": [
            {
                "name": "Temple of the Dog",
                "year": 1991,
                "type": "studio"
            }
        ]
    },
    {
        "name": "Alice in Chains",
        "active": true,
        "tags": [
            "grunge",
            "alternative rock",
            "rock",
            "hard rock",
            "metal"
        ],
        "members": [
            {
                "name": "Jerry Cantrell"
            },
            {
                "name": "Sean Kinney"
            },
            {
                "name": "Mike Inez"
            },
            {
                "name": "William DuVall"
            },
            {
                "name": "Layne Staley",
                "former": true
            },
            {
                "name": "Mike Starr",
                "former": true
            }
        ],
        "albums": [
            {
                "name": "Facelift",
                "year": 1990,
                "type": "studio"
            },
            {
                "name": "Dirt",
                "year": 1992,
                "type": "studio"
            },
            {
                "name": "Alice in Chains",
                "year": 1995,
                "type": "studio"
            },
            {
                "name": "Black Gives Way to Blue",
                "year": 2009,
                "type": "studio"
            },
            {
                "name": "The Devil Put Dinosaurs Here",
                "year": 2013,
                "type": "studio"
            },
            {
                "name": "MTV Unplugged",
                "year": 1996,
                "type": "unplugged"
            },
            {
                "name": "Live",
                "year": 2000,
                "type": "live"
            },
            {
                "name": "Jar of Flies",
                "year": 1994,
                "type": "compilation"
            }
        ]
    },
    {
        "name": "Audioslave",
        "active": false,
        "tags": [
            "alternative rock",
            "rock",
            "hard rock",
            "grunge",
            "alternative"
        ],
        "members": [
            {
                "name": "Tom Morello"
            },
            {
                "name": "Tim Commerford"
            },
            {
                "name": "Brad Wilk"
            },
            {
                "name": "Chris Cornell"
            }
        ],
        "albums": [
            {
                "name": "Audioslave",
                "year": 2002,
                "type": "studio"
            },
            {
                "name": "Out of Exile",
                "year": 2005,
                "type": "studio"
            },
            {
                "name": "Revelations",
                "year": 2006,
                "type": "studio"
            }
        ]
    }
];

/*---------------GLOBAL VARIABLES/DOM ELEMENTS---------------*/
let table = document.getElementById('table');
let searchBtn = document.getElementById('search-btn');
let selectGenre = document.getElementById("tag-dropdown");
let bandName = document.getElementById('bandName-header');
let albums = document.getElementById('albums-header');
let activeBand = document.getElementById('active-band');
let inactiveBand = document.getElementById('inactive-band');

/*--------------------DEFINING THE BAND CLASS--------------------*/
class Band {
    constructor(name, isActive, tags, members, albums) {
        this.name = name || "";
        this.isActive = isActive || false
        this.tags = tags || [];
        this.members = members || [];
        this.albums = albums || 0;
    }
}

/*--------------------DEFINING THE BANDS DISPLAY CLASS--------------------*/
class BandsDisplay {
    constructor() {
        this.bands = [];
    }

    // The method that will add a new band to the bands table
    AddBand(band) {
        this.bands.push(band);
        let row = document.createElement('tr');

        function tableCell(value, classValue) {
            let td = document.createElement('td');
            td.setAttribute('class', `${classValue}-tableField`);
            td.innerHTML = value;
            row.appendChild(td);
        }

        tableCell(`<span>${this.bands.length}</span>`, 'id-entry');

        for (let property in band) {
            switch (property) {
                case 'name':
                    tableCell(band.name, 'bandName');
                    break;
                case 'active':
                    if(band.active) {
                        tableCell(`<i class="fas fa-check"></i>`, 'active');
                    } else {
                        tableCell(`<i class="fas fa-times"></i>`, 'active');
                    }
                    break;
                case 'tags':
                    let tags = [];
                    let tagsString = '';
                    for (let i = 0; i < band.tags.length; i++) {
                        tags.push(band.tags[i]);
                    }
                    tagsString = tags.join(', ');
                    tableCell(tagsString, 'tags');
                    break;
                case 'members':
                    let members = [];
                    let formerMembers = [];
                    let membersString = '';
                    let formerMembersString = '';
                    for (let i = 0; i < band.members.length; i++) {
                        if(!band.members[i].former) {
                            members.push(band.members[i].name);
                        } else if (band.members[i].former == true) {
                            formerMembers.push(band.members[i].name);
                        }
                    }
                    membersString = members.join(`<br>`);
                    tableCell(membersString, 'members');
                    break;
                case 'albums':
                    tableCell(`${band.albums.length}`, 'albums');
                    break;
            }
        }

        table.appendChild(row);
    }
}

/*---FILLING IN THE BANDS DISPLAY TABLE WITH A NEW BANDS DISPLAY OBJECT---*/
let bandsDisplay = new BandsDisplay;

for (let i = 0; i < bands.length; i++) {
    const band = bands[i];
    bandsDisplay.AddBand(band);
}

/*-------------------SEARCH BY NAME OF BAND-------------------*/
searchBtn.addEventListener('click', e => {
    let searchInput = document.getElementById('search-box').value;
    function capitalizeFirstLetter(searchInput) {
        return searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
    }
    searchInput = capitalizeFirstLetter(searchInput);
    let filteredBandsByName = [];
    for (let i = 0; i < bands.length; i++) {
        table.innerHTML = '';
        const band = bands[i];
        if (band.name == searchInput) {
            filteredBandsByName.push(band);
        }
    }
    bandsDisplay.bands = [];
    for (let i = 0; i < filteredBandsByName.length; i++) {
        const band = filteredBandsByName[i];
        bandsDisplay.AddBand(band);
    }
});

/*-------------CREATE LIST OF GENRES FROM THE TAGS--------------*/
let genres = [];
for (let i = 0; i < bands.length; i++) {
    const band = bands[i];
    for (let j = 0; j < band.tags.length; j++) {
        if (genres.indexOf(band.tags[j]) < 0) {
            genres.push(band.tags[j]);
        }
    }
}

/*--------FILL IN THE SELECT ELEMENT WITH GENRE OPTIONS---------*/
for (let i = 0; i < genres.length; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', `${genres[i]}`);
    option.innerHTML = genres[i];
    selectGenre.appendChild(option);
}

/*--------EVENT LISTENERS FOR THE GENRE OPTIONS---------*/
selectGenre.addEventListener("change", function() {
    let genre = selectGenre.value;
    bandsDisplay.bands = [];
    table.innerHTML = '';
    switch (genre) {
        case 'thrash metal':
            sortByGenre('thrash metal');
            break;
        case 'metal':
            sortByGenre('metal');
            break;
        case 'heavy metal':
            sortByGenre('heavy metal');
            break;
        case 'hard rock':
            sortByGenre('hard rock');
            break;
        case 'rock':
            sortByGenre('rock');
            break;
        case 'speed metal':
            sortByGenre('speed metal');
            break;
        case 'german':
            sortByGenre('german');
            break;
        case 'nu metal':
            sortByGenre('nu metal');
            break;
        case 'alternative metal':
            sortByGenre('alternative metal');
            break;
        case 'alternative rock':
            sortByGenre('alternative rock');
            break;
        case 'alternative rock':
            sortByGenre('alternative rock');
            break;
        case 'political':
            sortByGenre('political');
            break;
        case 'rapcore':
            sortByGenre('rapcore');
            break;
        case 'hair metal':
            sortByGenre('hair metal');
            break;
        case 'grunge':
            sortByGenre('grunge');
            break;
    }
});

// Fuction which sorts the bands according to the genre
function sortByGenre(genreString) {
    let bandsByGenre = [];
    for (let i = 0; i < bands.length; i++) {
        const band = bands[i];
        for (let j = 0; j < band.tags.length; j++) {
            if (band.tags[j] == genreString && bandsByGenre.indexOf(band) < 0) {
                bandsByGenre.push(band);
            }
        }
    }
    for (let i = 0; i < bandsByGenre.length; i++) {
        const band = bandsByGenre[i];
        bandsDisplay.AddBand(band);
    }
}

/*--------SORT BANDS BY ALBUMS NUMBER---------*/
let bandsByAlbums = bands.sort((bandOne, bandTwo) => {
    return bandTwo.albums.length - bandOne.albums.length;
});
let albumsArrowDown = document.getElementById('albums-arrowDown');
let albumsArrowUp = document.getElementById('albums-arrowUp');
albums.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    bandsDisplay.bands = [];
    table.innerHTML = '';
    albumsArrowDown.removeAttribute('class', 'hidden');
    albumsArrowDown.setAttribute('class', 'visible');
    // albumsArrowUp.removeAttribute('class', 'hidden');
    // albumsArrowUp.setAttribute('class', 'visible');
    albumsClick();
});
function albumsClick() {
    for (let i = 0; i < bandsByAlbums.length; i++) {
        const band = bandsByAlbums[i];
        bandsDisplay.AddBand(band);
    }
    bandsByAlbums.reverse();
}

/*--------SORT BANDS BY BAND NAME---------*/
let bandsByName = bands.sort((bandOne, bandTwo) => {
    return bandOne.name.localeCompare(bandTwo.name);
});
let nameArrowDown = document.getElementById('bandName-arrowDown');
let nameArrowUp = document.getElementById('bandName-arrowUp');
bandName.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    bandsDisplay.bands = [];
    table.innerHTML = '';
    nameArrowUp.removeAttribute('class', 'hidden');
    nameArrowUp.setAttribute('class', 'visible');
    // nameArrowDown.removeAttribute('class', 'hidden');
    // nameArrowDown.setAttribute('class', 'visible');
    bandNameClick();
});
function bandNameClick() {
    for (let i = 0; i < bandsByName.length; i++) {
        const band = bandsByName[i];
        bandsDisplay.AddBand(band);
    }
    bandsByName.reverse();
}

/*--------SORT BANDS BY ACTIVE STATUS---------*/
let activeBands = bands.filter(band => band.active);
let inactiveBands = bands.filter(band => !band.active);
activeBand.addEventListener('click', e => {
    bandsDisplay.bands = [];
    table.innerHTML = '';
    for (let i = 0; i < activeBands.length; i++) {
        const band = activeBands[i];
        bandsDisplay.AddBand(band);
    }
});

inactiveBand.addEventListener('click', e => {
    bandsDisplay.bands = [];
    table.innerHTML = '';
    for (let i = 0; i < inactiveBands.length; i++) {
        const band = inactiveBands[i];
        bandsDisplay.AddBand(band);
    }
});