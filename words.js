// --- THE SYNAPSE MATRIX POOL (PART 2 / 8) ---
// Total Words in this module: ~250 words across 10 distinct crossover matrices.

// words.js

window.SYNAPSE_MATRIX_POOL = (window.SYNAPSE_MATRIX_POOL || []).concat([
    {
        id: "military_chess",
        // Multi-Hint Pool Tracker
        _innocentHints: [
            "Modern Military Tactics, Warfare & Armed Forces",
            "Global Combat Operations & Strategic Battalions",
            "Frontline Field Engagements & Armored Weaponry"
        ],
        _imposterHints: [
            "Board Games, Chess Strategy & Classic Tabletop",
            "Abstract Grid Strategy & Checkmate Archetypes",
            "Turn-Based Board Competitions & Grandmaster Logic"
        ],
        // Getters intercept script.js reads automatically without rewriting script.js code
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "BARRACKS", "TRENCH", "ARTILLERY", "GARRISON", "AMBUSH", "FLANK", 
            "INFANTRY", "SQUADRON", "FORTRESS", "CAMOUFLAGE", "LOGISTICS", "BAYONET", 
            "COMMANDER", "RECONNAISSANCE", "RESERVES", "BARRAGE", "SKIRMISH", "VALOUR", 
            "CAVALRY", "REGIMENT", "SIEGE", "GRENADE", "QUARTERMASTER", "PATROL",
            // 77 Additional Military Words to cross 100
            "HOWITZER", "SHRAPNEL", "VANGUARD", "BARRICADE", "LOGISTICIAN", "OUTPOST",
            "FORTIFICATION", "BALISTIC", "SUBMARINE", "TORPEDO", "FRIGATE", "CRUISER",
            "DREADNOUGHT", "MINEFIELD", "AIRCRAFT", "FIGHTER_JET", "BOMBER", "PARATROOPER",
            "SNIPER", "MARKSMAN", "RECON", "SCOUT", "INTELLIGENCE", "ESPIONAGE",
            "SABOTAGE", "INFILTRATION", "EXFILTRATION", "EVACUATION", "CASUALTY", "MEDEVAC",
            "TRIAGE", "FIELD_HOSPITAL", "AMMUNITION", "MAGAZINE", "CALIBER", "CARBINE",
            "RIFLE", "SIDEARM", "ARMOR", "HELMET", "KEVLAR", "GAUNTLET",
            "STRONGHOLD", "CITADEL", "BASTION", "RAMPART", "PALISADE", "TURRET",
            "BUNKER", "PILLBOX", "DRONE", "SURVEILLANCE", "RADAR", "SONAR",
            "SATELLITE", "ENCRYPTION", "DECRYPTION", "TELEMETRY", "COMMUNIQUE", "DISPATCH",
            "GRIEVANCE", "TRIBUNAL", "COURT_MARTIAL", "INSURGENCY", "COUNTER_ATTACK", "OFFENSIVE",
            "DEFENSIVE", "MANEUVER", "DEPLOYMENT", "MOBILIZATION", "DEMOBILIZATION", "ARMISTICE",
            "CEASEFIRE", "TREATY", "CAPITULATION", "SURRENDER", "VICTORY"
        ],
        imposterWords: [
            // Original 6
            "KNIGHT", "PAWN", "BISHOP", "CASTLE", "GAMBIT", "RANK",
            // 45 Additional Chess/Tabletop Words to cross 50
            "ROOK", "QUEEN", "KING", "CHECKMATE", "STALEMATE", "FILE",
            "DIAGONAL", "SQUARE", "BOARD", "TIMECONTROL", "CLOCK", "CHRONOS",
            "OPENING", "ENDGAME", "MIDGAME", "ANALYSIS", "BLITZ", "BULLET",
            "RAPID", "CLASSICAL", "RATING", "ELO", "GRANDMASTER", "MASTER",
            "CANDIDATE", "TOURNAMENT", "CHAMPIONSHIP", "SIMUL", "PUZZLE", "TACTIC",
            "COMBINATION", "SACRIFICE", "BLUNDER", "MISTAKE", "INACCURACY", "FORK",
            "PIN", "SKEWER", "DISCOVERED_CHECK", "DOUBLE_CHECK", "EN_PASSANT", "PROMOTION",
            "CASTLING", "FIANCHETTO", "ZUGZWANG", "INTERMEZZO", "FIDE"
        ]
    },
    {
        id: "medical_crime",
        _innocentHints: [
            "Human Healthcare, Hospitals & Medical Treatment",
            "Clinical Practices, Human Biology & Patient Wellness",
            "Medical Diagnosis, Surgical Wards & Therapeutics"
        ],
        _imposterHints: [
            "True Crime, Forensic Investigations & Law Enforcement",
            "Criminology, Detective Protocols & Crime Scenes",
            "Homicide Investigation, Forensic Biology & Police Files"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SURGERY", "PATIENT", "DIAGNOSIS", "THERAPY", "VACCINE", "SYMPTOM", 
            "CLINIC", "BANDAGE", "STETHOSCOPE", "PHARMACY", "BIOPSY", "TRAUMA", 
            "MALADY", "INFECTION", "ANTIBIOTIC", "INFIRMARY", "RECOVERY", "DOSAGE", 
            "ANESTHESIA", "HOSPICE", "PROGNOSIS", "INCUBATOR", "FORCEPS", "SCALPEL",
            // 77 Additional Medical Words
            "SYRINGE", "CATHETER", "VENTILATOR", "DEFIBRILLATOR", "INTUBATION", "LIGATURE",
            "SUTURE", "INCISION", "CAUTERY", "PATHOLOGY", "ONCOLOGY", "CARDIOLOGY",
            "NEUROLOGY", "PEDIATRICS", "GERIATRICS", "PSYCHIATRY", "RADIOLOGY", "ULTRASOUND",
            "ENDOSCOPY", "DIALYSIS", "TRANSPLANT", "DONOR", "ANTIBODY", "PATHOGEN",
            "MICROBE", "BACTERIA", "VIRUS", "PARASITE", "CONTAGION", "QUARANTINE",
            "ISOLATION", "IMMUNITY", "ALLERGY", "HISTAMINE", "INFLAMMATION", "EDEMA",
            "HEMORRHAGE", "THROMBOSIS", "EMBOLISM", "ANEURYSM", "INFARCTION", "STROKE",
            "PARALYSIS", "COMA", "CONCUSSION", "FRACTURE", "DISLOCATION", "SPRAIN",
            "CONTUSION", "LACERATION", "ABRASION", "HEMATOMA", "CHRONIC", "ACUTE",
            "SYNDROME", "GENETICS", "MUTATION", "CHROMOSOME", "HORMONE", "ENZYME",
            "METABOLISM", "DIGESTION", "RESPIRATION", "CIRCULATION", "HEMOGLOBIN", "PLASMA",
            "PLATELET", "LEUKOCYTE", "VITAMIN", "MINERAL", "SUPPLEMENT", "PRESCRIPTION",
            "OINTMENT", "LINIMENT", "PLACEBO", "HYDRATION", "NUTRIENT"
        ],
        imposterWords: [
            // Original 6
            "CASE", "OPERATIVE", "SUBJECT", "TREATMENT", "DISCHARGE", "EXAMINATION",
            // 45 Additional Forensic/Crime Words
            "EVIDENCE", "SUSPECT", "ALIBI", "MOTIVE", "PERPETRATOR", "VICTIM",
            "WITNESS", "DETECTIVE", "INVESTIGATOR", "FORENSICS", "AUTOPSY", "MORGUE",
            "BALLISTICS", "FINGERPRINT", "DNA_PROFILE", "TOXICOLOGY", "CONTRABAND", "HEIST",
            "HOMICIDE", "ABDUCTION", "LARCENY", "BURGLARY", "ARSON", "FORGERY",
            "FRAUD", "EXTORTION", "BLACKMAIL", "RACKETEERING", "CONSPIRACY", "ACCOMPLICE",
            "FELONY", "MISDEMEANOR", "INDICTMENT", "ARRAIGNMENT", "SUBPOENA", "WARRANT",
            "INTERROGATION", "CONFESSION", "POLYGRAPH", "SURVEILLANCE", "INFORMANTS", "UNDERCOVER",
            "STING", "RAID", "RECONSTRUCTION"
        ]
    },
    {
        id: "gaming_gambling",
        _innocentHints: [
            "Video Games, Esports & Digital Gaming Culture",
            "Interactive Entertainment, Software & Virtual Worlds",
            "Console Systems, Pixel Media & Competitive Esports"
        ],
        _imposterHints: [
            "Casinos, High-Stakes Gambling & Card Rooms",
            "Wagering Infrastructure, Odds Calculation & Table Games",
            "Vegas Betting Mechanics, Bookmaking & Risk Management"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "RESPAWN", "HITBOX", "AVATAR", "CONSOLE", "CONTROLLER", "JOYSTICK", 
            "QUEST", "INVENTORY", "MULTIPLAYER", "GRAPHICS", "POLYGON", "SANDBOX", 
            "CAMPAIGN", "SPEEDRUN", "GLITCH", "DUNGEON", "LEVEL", "MANA", 
            "LOADOUT", "CUTSCENE", "GUILD", "GAMEPAD", "EMULATOR", "HEADSHOT",
            // 77 Additional Video Game Words
            "RAYTRACING", "RENDERING", "FRAMERATE", "TEXTURING", "SHADING", "VOXEL",
            "HITSCAN", "PROJECTILE", "NERF", "BUFF", "METAGAME", "STRATEGY",
            "MATCHMAKING", "LEADERBOARD", "ACHIEVEMENT", "TROPHY", "SPEEDRUNNER", "TAS",
            "MODDING", "HOMEBREW", "PATCH", "DLC", "MICROTRANSACTION", "LOOTBOX",
            "COOP", "CROSSPLAY", "RAYCASTING", "COLLISION", "PHYSICS_ENGINE", "AI_BEHAVIOR",
            "NPC", "BOSS_FIGHT", "MINIBOSS", "CHECKPOINT", "SAVE_STATE", "QUICKSAVE",
            "PERMADEATH", "ROGUELIKE", "METROIDVANIA", "PLATFORMER", "SIMULATOR", "RPG",
            "MMORPG", "MOBA", "MMO", "FPS", "RTS", "PRO_PLAYER",
            "CLAN", "FACTION", "ALLIANCE", "RAID_LEADER", "AGGRO", "DPS",
            "HEALER", "TANK", "SUPPORT", "DEBUFF", "COOLDOWN", "ABILITY",
            "SKILL_TREE", "EXPERIENCE", "LEVELUP", "GRINDING", "FARMING", "CRAFTING",
            "ENCHANTMENT", "UPGRADE", "SKIN", "COSMETIC", "EMOTE", "LOBBY",
            "PING", "LAG", "LATENCY", "DESYNC", "NETCODE"
        ],
        imposterWords: [
            // Original 6
            "CHIPS", "JACKPOT", "DEALER", "BET", "STAKES", "DECK",
            // 45 Additional Casino/Gambling Words
            "ROULETTE", "BLACKJACK", "BACCARAT", "CRAPS", "POKER", "SLOTS",
            "CASHIER", "PIT_BOSS", "CROUPIER", "MARKER", "TOKEN", "WAGER",
            "PAYOUT", "ODDS", "PROBABILITY", "HOUSE_EDGE", "BANKROLL", "BUY_IN",
            "BLIND", "ANTE", "ALL_IN", "FOLD", "CALL", "RAISE",
            "BLUFF", "TELL", "SHUFFLE", "CUT", "BURN_CARD", "RIVER",
            "TURN", "FLOP", "SHOWDOWN", "SPLIT", "DOUBLE_DOWN", "INSURANCE",
            "PARLAY", "SPORTSBOOK", "BOOKMAKER", "VIGORISH", "HANDICAP", "COMP",
            "HIGH_ROLLER", "CARD_SHARK", "LOOSE_SLOT"
        ]
    },
    {
        id: "photography_optics",
        _innocentHints: [
            "Photography, Cameras & Cinematography",
            "Visual Composition, Film Mechanics & Camera Operations",
            "Image Capture Techniques, Darkrooms & Studio Lighting"
        ],
        _imposterHints: [
            "Optics, Physics of Light & Ophthalmology",
            "Electromagnetic Wave Physics, Lenses & Biological Vision",
            "Light Wave Dispersion, Visual Geometry & Eye Anatomy"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SHUTTER", "APERTURE", "TRIPOD", "VIEWFINDER", "EXPOSURE", "FLASH", 
            "ISO", "NEGATIVITY", "DEVELOPER", "SENSITIVITY", "DARKROOM", "PANORAMA", 
            "PORTRAIT", "LANDSCAPE", "MACRO", "SENSITIVITY", "ZOOM", "FILTER", 
            "CONTRAST", "SATURATION", "VIEWPORT", "VIGNETTE", "TELEPHOTO", "MEGAPIXEL",
            // 77 Additional Photography Words
            "DAGUERREOTYPE", "FILAMENT", "SILVER_HALIDE", "FIXER", "STOP_BATH", "ENLARGER",
            "MONOCHROME", "SEPIA", "EXPOSURE_METER", "LIGHT_METER", "SOFTBOX", "REFLECTOR",
            "STROBE", "UMBRELLA", "GEL_FILTER", "DIFFUSER", "BACKLIGHT", "FILL_LIGHT",
            "KEY_LIGHT", "BOOM_ARM", "GIMBAL", "MONOPOD", "LENS_HOOD", "BAYONET_MOUNT",
            "FOCAL_LENGTH", "DEPTH_OF_FIELD", "BOKEH", "CHROMATIC", "DISTORTION", "VIBRANCY",
            "HISTOGRAM", "RAW_FILE", "JPEG", "TIFF", "COMPRESSION", "SENSOR",
            "FULL_FRAME", "CROP_SENSOR", "MIRRORLESS", "DSLR", "RANGEFINDER", "POLAROID",
            "STILL_LIFE", "STREET_PHOTO", "ASTROPHOTOGRAPHY", "PHOTOJOURNALISM", "COMPOSITION", "RULE_OF_THIRDS",
            "GOLDEN_HOUR", "BLUE_HOUR", "OVEREXPOSURE", "UNDEREXPOSURE", "BRACKETING", "BURST_MODE",
            "AUTOFOCUS", "MANUAL_FOCUS", "SHUTTER_SPEED", "GRAIN", "NOISE", "RESOLUTION",
            "SHARPNESS", "BLUR", "MOTION_BLUR", "PANNING", "TILT_SHIFT", "FISHEYE",
            "WIDE_ANGLE", "PRIME_LENS", "ZOOM_LENS", "BELLOWS", "CABLE_RELEASE", "HOT_SHOE",
            "LIGHTROOM", "PHOTOSHOP", "RETOUCHING", "DODGING", "BURNING"
        ],
        imposterWords: [
            // Original 6
            "LENS", "FOCUS", "REFRACTION", "SPECTRUM", "CORNEA", "RECONSTRUCTION",
            // 45 Additional Optics/Physics Words
            "REFLECTION", "DIFFRACTION", "DISPERSION", "ABSORPTION", "SCATTERING", "POLARIZATION",
            "WAVELENGTH", "FREQUENCY", "PHOTON", "LASER", "PRISM", "MIRROR",
            "CONCAVE", "CONVEX", "FOCAL_POINT", "MAGNIFICATION", "DIOPTER", "RETINA",
            "IRIS", "PUPIL", "LENS_CAPSULE", "MACULA", "OPTIC_NERVE", "ASTIGMATISM",
            "MYOPIA", "HYPEROPIA", "PRESBYOPIA", "CATARACT", "GLAUCOMA", "OPHTHALMOLOGIST",
            "OPTOMETRIST", "SPECTROMETER", "INTERFEROMETER", "MICROSCOPE", "TELESCOPE", "BINOCULARS",
            "FIBER_OPTICS", "WAVEFRONT", "ABERRATION", "LUMINANCE", "ILLUMINANCE", "FLUX",
            "INFRARED", "ULTRAVIOLET", "PHOTOMETRY"
        ]
    },
    {
        id: "law_corporate",
        _innocentHints: [
            "Criminal Justice, Law Courts & Litigation",
            "Jurisprudence, Legal Systems & Courtroom Statutes",
            "Judicial Operations, Trial Defense & Prosecutions"
        ],
        _imposterHints: [
            "Corporate Business, Startups & Tech Conglomerates",
            "Enterprise Commerce, Silicon Financials & Management Architecture",
            "Corporate Governance, Ventures & Tech Executive Networks"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "JUDGE", "JURY", "LAWYER", "VERDICT", "SUBPOENA", "COURTROOM", 
            "WITNESS", "PROSECUTOR", "DEFENDANT", "EVIDENCE", "TESTIMONY", "ACQUITTAL", 
            "APPEAL", "LITIGATION", "OATH", "STATUTE", "BAILIFF", "INDICTMENT", 
            "AFFIDAVIT", "DOCKET", "TRIAL", "HEARING", "MALPRACTICE", "CONTEMPT",
            // 77 Additional Law Words
            "JURISPRUDENCE", "CONSTITUTION", "PRECEDENT", "TORT", "CONTRACT", "LIABILITY",
            "NEGLIGENCE", "DAMAGES", "INJUNCTION", "RESTITUTION", "ARBITRATION", "MEDIATION",
            "DEPOSITION", "INTERROGATORY", "EXHIBIT", "OBJECTION", "SUSTAINED", "OVERRULED",
            "CROSS_EXAMINATION", "SUMMATION", "BRIEFING", "JURISDICTION", "VENUE", "EXTRADITION",
            "FELONY_MURDER", "MANSLAUGHTER", "ASSAULT", "BATTERY", "BURGLARY_THEFT", "EMBEZZLEMENT",
            "PERJURY", "BRIBERY", "TREASON", "SEDITION", "ESPIONAGE_ACT", "CONTRABAND_LAW",
            "PUNISHMENT", "SENTENCE", "PROBATION", "PAROLE", "INCARCERATION", "PRISON",
            "JAIL", "CORRECTIONS", "REHABILITATION", "RECIDIVISM", "CLEMENCY", "PARDON",
            "AMNESTY", "CONVICTION", "ARREST", "BOOKING", "BAIL_BOND", "ARRAIGNMENT_HEARING",
            "GRAND_JURY", "PLEA_BARGAIN", "LENIENCY", "HABEAS_CORPUS", "CERTIORARI", "MANDAMUS",
            "PRO_BONO", "RETAINER", "MALFEASANCE", "MISFEASANCE", "NONFEASANCE", "LIEN",
            "FORECLOSURE", "BANKRUPTCY_COURT", "RECEIVERSHIP", "INSOLVENCY", "LIQUIDATION_LAW", "PROBATE",
            "WILL_ESTATE", "TRUSTEE", "BENEFICIARY", "EXECUTOR", "GUARDIANSHIP"
        ],
        imposterWords: [
            // Original 6
            "BRIEF", "SUIT", "FIRM", "PARTNER", "BOARD", "EXECUTION",
            // 45 Additional Corporate Words
            "CONGLOMERATE", "CORPORATION", "ENTERPRISE", "SUBSIDIARY", "AFFILIATE", "STARTUP",
            "EXECUTIVE", "CHAIRMAN", "DIRECTOR", "SHAREHOLDER", "INVESTOR", "VENTURE",
            "CAPITAL", "EQUITY", "STOCKHOLDERS", "DIVIDEND", "REVENUE", "PROFIT",
            "MARGIN_CALL", "ACQUISITION", "MERGER", "TAKEOVER", "RESTRUCTURING", "BANKRUPTCY",
            "LIQUIDATION", "SYNDICATE", "CARTEL", "MONOPOLY", "OLIGOPOLY", "MARKET",
            "COMPETITION", "STRATEGY_BOARD", "OPERATIONS", "LOGISTICS_NET", "MARKETING", "ADVERTISING",
            "BRANDING", "PUBLIC_RELATIONS", "HUMAN_RESOURCES", "ACCOUNTING", "AUDIT", "COMPLIANCE_OFFICER",
            "GOVERNANCE", "HEADQUARTERS", "OUTSOURCING"
        ]
    },
    {
        id: "astrology_mythology",
        _innocentHints: [
            "Horoscopes, Zodiac Signs & Western Astrology",
            "Celestial Movements, Stellar Charts & Esoteric Geometry",
            "Zodiac Elements, Star Mapping & Cosmological Frameworks"
        ],
        _imposterHints: [
            "Ancient Roman & Greek Mythology",
            "Olympian Gods, Classical Epics & Polytheistic Sagas",
            "Ancient Pantheons, Heroic Folklore & Mycenaean Sagas"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "ZODIAC", "HOROSCOPE", "AQUARIUS", "TAURUS", "GEMINI", "LEO", 
            "SCORPIO", "LIBRA", "PISCES", "SAGITTARIUS", "VIRGO", "CAPRICORN", 
            "ARIES", "CANCER", "ASCENDANT", "CONSTELLATION", "ECLIPSE", "RETROGRADE", 
            "HOUSES", "ALIGNMENT", "EQUINOX", "SOLSTICE", "CELESTIAL", "NATAL",
            // 77 Additional Astrology Words
            "DESCENDANT", "MIDHEAVEN", "IC_POINT", "EPHEMERIS", "LUNATION", "NEW_MOON",
            "FULL_MOON", "GIBBOUS", "CRESCENT", "QUARTER_MOON", "NODES", "NORTH_NODE",
            "SOUTH_NODE", "ECLIPSE_CYCLE", "SAROS", "ASPECTS", "CONJUNCTION", "OPPOSITION",
            "TRINE", "SQUARE_ASPECT", "SEXTILE", "QUINCUNX", "SEMI_SQUARE", "SESQUI_QUADRATE",
            "ORB_LIMIT", "EPICYCLE", "DECAN", "REMANENCE", "ELEMENTS", "FIRE_SIGN",
            "EARTH_SIGN", "AIR_SIGN", "WATER_SIGN", "MODALITIES", "CARDINAL_SIGN", "FIXED_SIGN",
            "MUTABLE_SIGN", "RULERSHIP", "EXALTATION", "DETRIMENT", "FALL_POSITION", "CHIRON",
            "CERES", "PALLAS", "JUNO", "VESTA", "ASTEROIDS", "PLUTO",
            "URANUS", "NEPTUNE_ORB", "LUMINARIES", "SUN_SIGN", "MOON_SIGN", "SYNASTRY",
            "COMPOSITE_CHART", "TRANSITS", "PROGRESSIONS", "DIRECTIONS", "SOLAR_RETURN", "LUNAR_RETURN",
            "HELIOCENTRIC", "GEOCENTRIC", "SIDEREAL", "TROPICAL", "PRECESSION", "CONSTELLATION_BOUNDS",
            "ALMUTER", "Hyleg", "Anareta", "ALMUTEN", "PARANS", "DIGNITIES",
            "TRIPLICITY", "TERMS", "FACES", "HORARY", "MUNDANE"
        ],
        imposterWords: [
            // Original 6
            "MERCURY", "VENUS", "MARS", "JUPITER", "SATURN", "NEPTUNE",
            // 45 Additional Mythology Words
            "ZEUS", "HERA", "POSEIDON", "DEMETER", "ATHENA", "APOLLO",
            "ARTEMIS", "ARES_GOD", "APHRODITE", "HEPHAESTUS", "HERMES", "HESTIA",
            "DIONYSUS", "HADES", "PERSEPHONE", "PAN_DEITY", "HECATE", "CHIRON_CENTAUR",
            "HERCULES", "THESEUS", "PERSEUS", "JASON", "ACHILLES", "ODYSSEUS",
            "TITAN", "CHAOS", "URANUS_TITAN", "GAIA", "CRONUS", "RHEA",
            "PROMETHEUS", "EPIMETHEUS", "ATLAS_TITAN", "HYPERION", "OCEANUS", "TETHYS",
            "OLYMPUS", "UNDERWORLD", "TARTARUS", "ELYSIUM", "STYX", "ACHERON",
            "CENTAUR", "MINOTAUR", "PEGASUS"
        ]
    },
    {
        id: "typography_medieval",
        _innocentHints: [
            "Graphic Design, Typography & Printing Press Systems",
            "Publishing Frameworks, Industrial Typesetting & Layout Geometry",
            "Visual Lithography, Font Engineering & Editorial Layouts"
        ],
        _imposterHints: [
            "Medieval History, Castles & Feudal Europe",
            "Feudalism Architecture, High-Medieval Crusades & Monastic Orders",
            "Dark Ages Monarchy, Knightly Chivalry & Medieval Manors"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "FONT", "KERNING", "ITALIC", "BOLD", "SERIF", "LIGATURE", 
            "SANS", "MARGIN", "ALIGNMENT", "PICA", "LEADING", "TYPESET", 
            "INK", "PARAGRAPH", "GRID", "CANVAS", "STROKE", "BOUND", 
            "INDENT", "OFFSET", "VELLUM", "GALLEY", "MONOSPACE", "GLYPH",
            // 77 Additional Typography Words
            "TRACKING", "COUNTER", "ASCENDER", "DESCENDER", "BASELINE", "X_HEIGHT",
            "CAP_HEIGHT", "STEM", "BOWL", "SERIF_BRACKET", "TERMINAL", "SPUR",
            "LINK", "LOOP", "EAR", "SHOULDER", "AXIS", "STRESS",
            "APEX", "VERTEX", "CROSSBAR", "LEG", "ARM", "TAIL",
            "SWASH", "FINIAL", "DIACRITIC", "ACCENT", "PUNCTUATION", "AMPERSAND",
            "OCTOTHORPE", "INTERROBANG", "PILCROW", "ASTERISK", "DAGGER_MARK", "HYPHEN",
            "DASH", "COLOPHON", "IMPRINT", "WATERMARK", "DECKLE_EDGE", "SIGNATURE_FOLD",
            "FOLIO", "QUARTO", "OCTAVO", "BROADSIDE", "INCUNABULA", "BLOCK_PRINTING",
            "MOVABLE_TYPE", "COMPOSING_STICK", "CHASE", "QUOIN", "MATRIX_MOLD", "PUNCH_CUTTING",
            "FOUNDRY", "LINOTYPE", "MONOTYPE", "HOT_METAL", "PHOTO_TYPESETTING", "DIGITAL_TYPE",
            "POSTSCRIPT", "TRUETYPE", "OPENTYPE", "RASTERIZATION", "VECTOR", "BEZIER_CURVE",
            "POINT_SYSTEM", "AGATE", "CICERO", "EM_SPACE", "EN_SPACE", "THIN_SPACE",
            "HAIR_SPACE", "JUSTIFICATION", "HYPHENATION", "ORPHAN_LINE", "WIDOW_LINE"
        ],
        imposterWords: [
            // Original 6
            "SCROLL", "SCRIPT", "JUSTIFY", "CHARTER", "HERALDRY", "GUILD",
            // 45 Additional Medieval Words
            "CASTLE", "KEEP", "MOAT", "DRAWBRIDGE", "PORTCULLIS", "BATTLEMENT",
            "DONJON", "BAILEY", "BARBICAN", "RAMPART_WALL", "CITADEL_FORT", "FEUDALISM",
            "SUZERAIN", "VASSAL", "FIEF", "HOMAGE", "FEALTY", "MANOR",
            "SERF", "PEASANT", "VILLEIN", "KNIGHTHOOD", "CHIVALRY", "SQUIRE",
            "PAGE_BOY", "TOURNAMENT_JEST", "JOUST", "MELEE", "ARMOR_SUIT", "HAUBERK",
            "MAIL", "PLATE_ARMOR", "HELM", "SHIELD", "LANCE", "BROADSWORD",
            "MACE", "BATTLEAXE", "CROSSBOW", "LONGBOW", "TREBUCHET", "CATAPULT",
            "SIEGE_TOWER", "CRUSADE", "MONASTERY"
        ]
    },
    {
        id: "fitness_machinery",
        _innocentHints: [
            "Gym Fitness, Bodybuilding & Exercise Routines",
            "Athletic Training, Kinesiology & Gym Performance",
            "Hypertrophy Programming, Calisthenics & Cardio Circuits"
        ],
        _imposterHints: [
            "Automotive Repair, Engines & Heavy Machinery",
            "Mechanical Engineering, Powertrains & Garage Maintenance",
            "Internal Combustion Systems, Hydraulics & Heavy Diagnostics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "DUMBBELL", "BARBELL", "TREADMILL", "SQUAT", "CARDIO", "CALISTHENICS", 
            "ELLIPTICAL", "WORKOUT", "ATHLETE", "GYMNASTICS", "STRETCH", "FLEXIBILITY", 
            "REPETITION", "SET", "TRAINER", "LOCKER", "PLANK", "LUNGE", 
            "CRUNCH", "PULLUP", "CALORIES", "METABOLISM", "HYDRATION", "ISOLATION",
            // 77 Additional Fitness Words
            "HYPERTROPHY", "ENDURANCE", "STRENGTH", "POWER", "AGILITY", "BALANCE",
            "COORDINATION", "WARMUP", "COOLDOWN", "STRETCHING", "PLYOMETRICS", "ISOMETRICS",
            "ISOTONIC", "ISOKINETIC", "CONCENTRIC", "ECCENTRIC", "ANEROBIC", "AEROBIC",
            "VO2_MAX", "HEART_RATE", "PULSE", "BLOOD_PRESSURE", "RESPIRATION_FIT", "LACTATE",
            "FATIGUE", "OVERLOAD", "PROGRESSION_TRAIN", "PERIODIZATION", "MACRONUTRIENTS", "PROTEIN",
            "CARBOHYDRATE", "LIPID", "AMINO_ACID", "CREATINE", "WHEY", "SUPPLEMENTS_GYM",
            "KETTLEBELL", "MEDICINE_BALL", "RESISTANCE_BAND", "FOAM_ROLLER", "YOGA_MAT", "BENCH_PRESS",
            "DEADLIFT", "OVERHEAD_PRESS", "BARBELL_ROW", "BICEP_CURL", "TRICEP_EXTENSION", "LAT_PULLDOWN",
            "LEG_PRESS", "LEG_CURL", "LEG_EXTENSION", "CALF_RAISE", "PUSHUP", "DIP_STATION",
            "CHINUP", "BURPEE", "MOUNTAIN_CLIMBER", "JACKS", "SPRINT", "JOG",
            "RUN", "WALK", "CYCLE", "ROWING", "SWIMMING", "GYM_MEMBER",
            "FITNESS_CENTER", "HEALTH_CLUB", "STUDIO", "CLASS", "INSTRUCTOR", "COACH",
            "CLIENT", "ASSESSMENT", "SCREENING", "EVALUATION", "GOAL"
        ],
        imposterWords: [
            // Original 6
            "PUMP", "CABLE", "GEAR", "FLUID", "DRIVE", "PULLEY",
            // 45 Additional Machinery Words
            "ENGINE", "MOTOR", "TRANSMISSION", "GEARBOX", "CLUTCH", "DIFFERENTIAL",
            "DRIVESHAFT", "AXLE", "WHEEL", "TIRE", "BRAKE", "SUSPENSION",
            "STEERING", "CHASSIS", "FRAME", "BODY_PANEL", "HOOD", "TRUNK",
            "BUMPER", "FENDER", "GRILLE", "HEADLIGHT", "TAILLIGHT", "EXHAUST",
            "MUFFLER", "CATALYTIC", "MANIFOLD", "CARBURETOR", "INJECTOR", "VALVE",
            "CYLINDER", "PISTON", "CRANKSHAFT", "CAMSHAFT", "TIMING_BELT", "SPARK_PLUG",
            "BATTERY_CORE", "ALTERNATOR", "STARTER", "RADIATOR", "HOSE", "BELT_DRIVE",
            "FLUID_PUMP", "FILTER_ELEMENT", "GASKET"
        ]
    },
    {
        id: "birds_money",
        _innocentHints: [
            "Ornithology, Wild Birds & Avian Zoology",
            "Avian Biology, Wild Bird Habitats & Migration Systems",
            "Ornithological Science, Nesting Instincts & Feathers"
        ],
        _imposterHints: [
            "Financial Markets, Stocks & Economics",
            "Wall Street Trading, Market Indexes & Capital Assets",
            "Macroeconomics, Asset Valuations & Financial Portfolios"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SPARROW", "EAGLE", "FALCON", "ROBIN", "OWL", "HAWK", 
            "PIGEON", "SEAGULL", "PELICAN", "FLAMINGO", "SWAN", "PEACOCK", 
            "PENGUIN", "OSTRICH", "CANARY", "RAVEN", "CROW", "FINCH", 
            "ALBATROSS", "HERON", "PARROT", "WOODPECKER", "HUMMINGBIRD", "MIGRATION",
            // 77 Additional Bird Words
            "AVIAN", "ORNITHOLOGY", "PLUMAGE", "FEATHER", "DOWN_FEATHER", "QUILL",
            "BEAK", "BILL_AVIAN", "TALON", "CLAW_BIRD", "WING", "FLIGHT_BIOLOGY",
            "NEST", "EGG_SHELL", "CLUTCH_BIRD", "INCUBATION_NEST", "HATCHLING", "NESTLING",
            "FLEDGLING", "JUVENILE_AVIAN", "ADULT_BIRD", "MALE_AVIAN", "FEMALE_AVIAN", "SONGBIRD",
            "BIRD_OF_PREY", "RAPTOR", "WATERFOWL", "SEABIRD", "SHOREBIRD", "WADING_BIRD",
            "GAMEBIRD", "LANDBIRD", "FLIGHTLESS_BIRD", "ENDEMIC_AVIAN", "EXOTIC_BIRD", "MIGRANT",
            "ROOST", "FLOCK", "COLONY_AVIAN", "TERRITORY_BIRD", "COURTSHIP_DISPLAY", "SONG_AVIAN",
            "CALL_NOTE", "FORAGING", "FEEDING", "DIET_AVIAN", "PREY_SELECTION", "PREDATOR",
            "HABITAT_ZONE", "FOREST_BIRD", "WETLAND_BIRD", "COASTAL_AVIAN", "MARINE_BIRD", "URBAN_BIRD",
            "CONSERVATION_STATUS", "ENDANGERED_AVIAN", "THREATENED_BIRD", "EXTINCT_SPECIES", "SPECIES_TAXA", "GENUS_AVIAN",
            "FAMILY_BIRD", "ORDER_AVIAN", "CLASS_AVES", "PASSERINE", "NON_PASSERINE", "ANATOMY_AVIAN",
            "SKELETON_BIRD", "BONE_PNEUMATIC", "MUSCLE_PECTORAL", "RESPIRATORY_AIR_SAC", "DIGESTIVE_CROP", "GIZZARD",
            "CLOACA", "MOLT_CYCLE", "PREENING", "UROPYGIAL_GLAND", "BIRD_BANDING"
        ],
        imposterWords: [
            // Original 6
            "BILL", "NEST_EGG", "BULL", "BEAR", "ASSET", "FLIGHT",
            // 45 Additional Finance Words
            "MARKET", "STOCK", "BOND", "EQUITY_FIN", "SHARE", "SECURITY",
            "DERIVATIVE", "OPTION", "FUTURE", "COMMODITY", "CURRENCY", "FOREX",
            "EXCHANGE", "NASDAQ", "PORTFOLIO", "INVESTMENT", "CAPITAL_ASSET", "FUND",
            "MUTUAL_FUND", "ETF", "HEDGE_FUND", "LIQUIDITY", "VOLATILITY", "RISK_MARGIN",
            "RETURN", "YIELD", "DIVIDEND_PAY", "INTEREST", "INFLATION", "DEFLATION",
            "RECESSION", "DEPRESSION", "GROWTH", "DEVELOPMENT", "COMMERCE", "TRADE",
            "BANKING", "FINANCE", "FISCAL", "MONETARY", "RESERVE", "TREASURY",
            "REVENUE_NET", "PROFIT_LOSS", "BALANCE_SHEET"
        ]
    },
    {
        id: "geography_theater",
        _innocentHints: [
            "Cartography, Geology & Global Geography",
            "Tectonic Cartography, Geomorphology & Climate Regions",
            "Topographical Mapping, Planetary Borders & Biospheres"
        ],
        _imposterHints: [
            "Performing Arts, Live Theater & Broadway",
            "Theatrical Drama, Audition Scripts & Backstage Crews",
            "Broadway Directing, Stage Crafting & Dramatic Ensembles"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "EQUATOR", "LATITUDE", "LONGITUDE", "CONTINENT", "MERIDIAN", "HEMISPHERE", 
            "PENINSULA", "ARCHIPELAGO", "PLATEAU", "CANYON", "GLACIER", "VOLCANO", 
            "TOPOGRAPHY", "COMPASS", "ATLAS", "TERRAIN", "ISLAND", "COASTLINE", 
            "VALLEY", "DESERT", "TUNDRA", "SAVANNA", "MOUNTAIN", "BORDER",
            // 77 Additional Geography Words
            "CARTOGRAPHY", "GEOLOGY", "GEOMORPHOLOGY", "TOPONYMY", "LANDFORM", "ELEVATION",
            "ALTITUDE", "RELIEF", "CONTOUR", "GRADIENT", "SLOPE", "CLIFF",
            "RIDGE", "PEAK", "SUMMIT", "PASS_GEOG", "VALLEY_FLOOR", "FLOODPLAIN",
            "DELTA", "ESTUARY", "BAY", "GULF", "STRAIT", "CHANNEL",
            "SOUND", "FIORD", "LAGOON", "REEF", "ATOLL", "OCEAN",
            "SEA", "LAKE", "RIVER", "STREAM", "CREEK", "TRIBUTARY",
            "DRAINAGE_BASIN", "WATERSHED", "AQUIFER", "SPRING_WATER", "OASIS", "WETLAND",
            "SWAMP", "MARSH", "BOG", "FEN", "FOREST", "WOODLAND",
            "JUNGLE", "RAINFOREST", "TAIGA", "STEPPE", "PRAIRIE", "PAMPAS",
            "GRASSLAND", "SHRUBLAND", "DESERT_BASIN", "SAND_DUNE", "BARREN_LAND", "ICE_CAP",
            "SHELF_ICE", "PERMAFROST", "SOIL_HORIZON", "SEDIMENT", "EROSION", "WEATHERING",
            "DEPOSITION_GEOG", "TECTONIC_PLATE", "FAULT_LINE", "RIFT_VALLEY", "EARTHQUAKE", "TSUNAMI",
            "CLIMATE_ZONE", "TROPICS", "SUBTROPICS", "TEMPERATE_ZONE", "FRIGID_ZONE"
        ],
        imposterWords: [
            // Original 6
            "PROPS", "ACT", "SCENERY", "PLOT", "CAST", "CREW",
            // 45 Additional Theater Words
            "THEATER", "STAGE", "AUDITORIUM", "BACKSTAGE", "GREEN_ROOM", "DRESSING_ROOM",
            "ORCHESTRA_PIT", "BALCONY", "MEZZANINE", "BOX_SEATS", "PROSCENIUM", "CURTAIN",
            "BACKDROP", "LIGHTING_RIG", "SPOTLIGHT", "SOUND_SYSTEM", "MICROPHONE", "COSTUME",
            "MAKEUP", "WIG", "WARDROBE", "PROP_MASTER", "STAGE_MANAGER", "DIRECTOR_THEATER",
            "CHOREOGRAPHER", "PRODUCER", "PLAYWRIGHT", "COMPOSER", "LYRICIST", "ACTOR",
            "ACTRESS", "PERFORMER", "UNDERSTUDY", "STANDBY", "SWING_ACTOR", "ENSEMBLE",
            "CHORUS", "DANCER", "SINGER", "MUSICIAN", "CONDUCTOR", "REHEARSAL",
            "AUDITION", "CALLBACK", "CURTAIN_CALL"
        ]
    }
]);

// --- THE SYNAPSE MATRIX POOL (PART 2 / 10) ---
// Total Words in this module: ~250 words across 10 distinct crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 2)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "fairytale_history_large",
        _innocentHints: [
            "Storybook Fantasy, Magic Castles & Legends",
            "Folkloric Enchantments, Mythical Beasts & Sorcery",
            "Fairy Tales, Wizarding Lore & Fabled Realms"
        ],
        _imposterHints: [
            "Ancient Earth Civilizations & Real History",
            "Antiquity Antiquities, Archaeological Finds & Empires",
            "Historical Chronologies, World Monuments & Ancient Eras"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 20
            "DRAGON", "WIZARD", "FAIRY", "SPELL", "POTION", 
            "WAND", "CASTLE", "UNICORN", "GOBLIN", "PRINCESS", 
            "KNIGHT", "PEGASUS", "GRIPHIN", "MERMAID", "ELIXIR", 
            "CURSE", "PROPHECY", "KINGDOM", "PIXIE", "CENTAUR",
            // 81 Additional Storybook Fantasy Words to cross 100
            "TROLL", "GARGOYLE", "PHEONIX", "SIREN", "VALKYRIE", "BANSHEE",
            "LEPRECHAUN", "GNOME", "DWARF", "ELF", "ORC", "OGRE",
            "SORCERER", "WITCH", "ENCHANTER", "NECROMANCER", "CONJURER", "MAGE",
            "WARLOCK", "ALCHEMIST", "TALISMAN", "AMULET", "INCANTATION", "HEX",
            "CHARM", "SPELLBOOK", "GRIMOIRE", "SCROLL", "RUNE", "CAULDRON",
            "BROOMSTICK", "PALANTIR", "PORTAL", "LABYRINTH", "DUNGEON", "TOWER",
            "CITADEL", "FORTRESS", "PALACE", "THRONE", "CROWN", "SCEPTER",
            "TIARA", "ROYALTY", "DYNASTY", "EMPEROR", "QUEEN", "PRINCE",
            "DUKE", "BARON", "COURT_JESTER", "SQUIRE", "PALADIN", "GUILD",
            "QUEST", "LEGEND", "MYTH", "SAGA", "CHRONICLE", "EPIC",
            "FABLE", "PARABLE", "ALLEGORY", "PROPHECY", "DESTINY", "FATE",
            "DOOM", "SALVATION", "SANCTUARY", "HAVEN", "REALM", "DOMAIN",
            "EMPIRE", "TERRITORY", "PROVINCE", "DUCHY", "COUNTY", "MANOR",
            "VILLAGE", "HAMLET", "FRONTIER"
        ],
        imposterWords: [
            // Original 10
            "STATUE", "MUMMY", "COIN", "SHIELD", "SWORD", 
            "RUINS", "PHARAOH", "EMPIRE", "TEMPLE", "ARCHAEOLOGIST",
            // 41 Additional Ancient Civilizations Words to cross 50
            "HIEROGLYPH", "PAPYRUS", "SARCOPHAGUS", "PYRAMID", "SPHINX", "OBELISK",
            "MONOLITH", "ZIGGURAT", "ACROPOLIS", "PARTHENON", "COLOSSEUM", "FORUM",
            "AQUEDUCT", "AMPHITHEATER", "CATACOMB", "CRYPT", "TOMB", "MAUSOLEUM",
            "MONUMENT", "ARTIFACT", "RELIC", "ANTIQUITY", "EXCAVATION", "STRATIGRAPHY",
            "INSCRIPTION", "TABLET", "SCROLL_LAW", "CODEX", "MANUSCRIPT", "CHRONICLE_REAL",
            "DYNASTY_HIST", "KINGDOM_HIST", "REPUBLIC", "DEMOCRACY", "OLIGARCHY", "MONARCHY",
            "EMPEROR_HIST", "DICTATOR", "SENATOR", "CONSUL", "TRIBUNE"
        ]
    },
    {
        id: "air_sea_travel_large",
        _innocentHints: [
            "Land Vehicles, Cars & Public Transit",
            "Terrestrial Transport, Roadways & Ground Fleet",
            "Automotive Infrastructure, Rail Systems & Commuter Vehicles"
        ],
        _imposterHints: [
            "Air & Sea Travel, Flight & Cruising",
            "Aviation Technology, Maritime Vessels & Nautical Trajectories",
            "Aerodynamic Flight, Marine Navigation & Oceanic Voyages"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 20
            "SCOOTER", "TAXI", "BULLDOZER", "TRAIN", "BICYCLE", 
            "SUBWAY", "TRAM", "AMBULANCE", "TRACTOR", "MOTORCYCLE", 
            "LIMOUSINE", "TRUCK", "CARAVAN", "SEDAN", "MOPED", 
            "SKATEBOARD", "STREETCAR", "MONORAIL", "EXPRESS",
            // 82 Additional Land Vehicle Words to cross 100 (Filtering out the duplicate SCOOTER)
            "LOCOMOTIVE", "BOXCAR", "CABOOSE", "FREIGHT_TRAIN", "BULLET_TRAIN", "CABLE_CAR",
            "FUNICULAR", "TROLLEY", "OMNIBUS", "SHUTTLE", "COACH", "ROADSTER",
            "CONVERTIBLE", "COUPE", "HATCHBACK", "STATION_WAGON", "SUV", "CROSSOVER",
            "PICKUP_TRUCK", "VAN", "MINIVAN", "CAMPER", "MOTORHOME", "ATV",
            "QUAD_BIKE", "DIRT_BIKE", "CRUISER_BIKE", "CHOPPER", "VESPA", "SEGWAY",
            "HOVERBOARD", "UNICYCLE", "TRICYCLE", "RICKSHAW", "VELOCIPEDE", "HANDCART",
            "WAGON", "CARRIAGE", "CHARIOT", "STAGECOACH", "SLEIGH", "SLED",
            "FIRE_ENGINE", "POLICE_CAR", "TOW_TRUCK", "FORKLIFT", "EXCAVATOR", "CRANE_TRUCK",
            "DUMP_TRUCK", "CEMENT_MIXER", "GARBAGE_TRUCK", "STREET_SWEEPER", "SNOWPLOW", "TANKER",
            "SEMI_TRUCK", "FLATBED", "GOLF_CART", "GO_KART", "SNOWMOBILE", "LAWNMOWER",
            "STEAMROLLER", "GRADER", "SCRAPER", "LOADER", "BACKHOE", "TRENCH_DIGGER",
            "PAVER", "COMPACTOR", "FORAGE_HARVESTER", "COMBINE", "BALER", "THRESHER",
            "SEEDER", "PLOW", "HARROW", "SPREADER", "SPRAYER", "UTILITY_VEHICLE",
            "CHASSIS_CAB", "PANEL_VAN", "DELIVERY_TRUCK", "BOX_TRUCK"
        ],
        imposterWords: [
            // Original 10
            "AIRPLANE", "HELICOPTER", "SUBMARINE", "YACHT", "SAILBOAT", 
            "ROCKET", "GLIDER", "CRUISER", "FERRY", "ZEPPELIN",
            // 41 Additional Air & Sea Words to cross 50
            "JETLINER", "BIPLANE", "SEAPLANE", "HOVERCRAFT", "HYDROFOIL", "CATAMARAN",
            "TRIMARAN", "BARGE", "BUOY", "CARGO_SHIP", "CONTAINER_SHIP", "TANKER_SHIP",
            "FREIGHTER", "OCEAN_LINER", "STEAMSHIP", "BATTLESHIP", "AIRCRAFT_CARRIER", "DESTROYER",
            "FRIGATE_NAVY", "CORVETTE", "GALLEON", "FRIGATE", "BRIGANTINE", "SCHOONER",
            "SLOOP", "CLIPPER", "CANOE", "KAYAK", "ROWBOAT", "DINGHY",
            "LIFEBOAT", "GANDOLA", "RAFT", "TUGBOARD", "DREDGER", "TRAWLER",
            "GIG", "LAUNCH", "CUTTER", "BALLOON", "BLIMP"
        ]
    },
    {
        id: "cyberpunk_nature_large",
        _innocentHints: [
            "Botanical Nature, Forests & Wildlife",
            "Terrestrial Ecosystems, Biological Organisms & Wilderness",
            "Natural Landscapes, Forest Canopies & Ecological Bio-Systems"
        ],
        _imposterHints: [
            "Cyberpunk Tech, AI & Neon Networks",
            "Synthetic Megacity Frameworks, Cybernetics & Datastreams",
            "High-Tech Low-Life Systems, Neural Matrices & Virtual Arrays"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 20
            "OAK", "ORCHID", "SPARROW", "RIVER", "MOSS", 
            "DEER", "MUSHROOM", "MEADOW", "BEAR", "FERN", 
            "WATERFALL", "CATERPILLAR", "BLOSSOM", "FOX", "BEETLE", 
            "CANOPY", "SWAMP", "IVY", "WOLF", "BADGER",
            // 81 Additional Botanical/Wildlife Words to cross 100
            "PINE", "MAPLE", "BIRCH", "WILLOW", "REDWOOD", "CEDAR",
            "ELM", "ASH", "CHERRY_BLOSSOM", "ROSE", "TULIP", "LILY",
            "DAISY", "SUNFLOWER", "LAVENDER", "POPPY", "DANDELION", "CLOVER",
            "GRASS", "REED", "BAMBOO", "CACTUS", "SUCCULENT", "LICHEN",
            "FUNGUS", "SPORE", "MYCELIUM", "ROOT", "STEM_PLANT", "LEAF",
            "BRANCH", "BARK", "SAP", "SEED", "ACORN", "NUT",
            "BERRY", "FRUIT", "VEGETABLE", "HERB", "SHRUB", "BUSH",
            "THICKET", "UNDERGROWTH", "FOREST", "WOODS", "GROVE", "GLADE",
            "VALLEY", "CANYON", "MOUNTAIN", "HILL", "CLIFF", "CAVE",
            "CAVERN", "STREAM", "CREEK", "BROOK", "POND", "LAKE",
            "OCEAN", "SEA", "COAST", "SHORE", "BEACH", "SAND_DUNE",
            "DESERT", "TUNDRA", "TAIGA", "SAVANNA", "STEPPE", "PRAIRIE",
            "MARSH", "BOG", "FEN", "WETLAND", "MANGROVE", "JUNGLE",
            "RAINFOREST", "WILDERNESS", "HABITAT"
        ],
        imposterWords: [
            // Original 10
            "CYBORG", "HOLOGRAM", "ANDROID", "MAINFRAME", "GLITCH", 
            "FIREWALL", "MICROCHIP", "DATABASE", "FIRMWARE", "ALGORITHM",
            // 41 Additional Cyberpunk Tech Words to cross 50
            "NETRUNNER", "DECK_INTERFACE", "NEURAL_LINK", "SYNAPSE_MOD", "BIO_UPGRADE", "CYBERWARE",
            "CHROME", "PROSTHETIC", "OPTIC_VIZ", "NANITE", "NANOBOT", "QUANTUM_CORE",
            "SERVER_RACK", "NODES_NET", "ENCRYPTION_KEY", "DECRYPTION_LOG", "PROXY", "VPN",
            "MALWARE", "VIRUS_CYBER", "TROJAN", "WORM_NET", "SPYWARE", "RANSOMWARE",
            "DARKNET", "DEEPWEB", " cyberspace", "VIRTUAL_REALITY", "AUGMENTED_VIZ", "SIMULATION",
            "AI_INTELLIGENCE", "MACHINE_LEARNING", "DEEP_LEARNING", "NEURAL_NET", "AUTOMATION", "BOTNET",
            "TERMINAL_LOG", "CONSOLE_CMD", "SOURCE_CODE", "COMPILER", "INTERPRETER"
        ]
    },
    {
        id: "culinary_space_large",
        _innocentHints: [
            "Deep Ocean Exploration & Marine Life",
            "Abyssal Biology, Oceanic Ecosystems & Marine Zoology",
            "Benthic Deep-Sea Science, Aquatics & Marine Mammals"
        ],
        _imposterHints: [
            "Culinary Arts, Baking & Kitchen Science",
            "Gastronomy, Pastry Crafting & Culinary Equipment",
            "Kitchen Chemistry, Gourmet Cooking & Baking Systems"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 20
            "CORAL", "ANEMONE", "DOLPHIN", "TRENCH", "PLANKTON", 
            "REEF", "SUBMERSIBLE", "BARNACLE", "RAY", "LOBSTER", 
            "URCHIN", "WHALE", "SHARK", "JELLYFISH", "SQUID", 
            "OCTOPUS", "SEAHORSE", "WALRUS", "MANATEE", "HARBOR",
            // 81 Additional Deep Ocean/Marine Life Words to cross 100
            "ABYSS", "BENTHIC", "PELAGIC", "OCEANOGRAPHY", "HYDROTHERMAL", "VENT",
            "SEAMOUNT", "SHELF", "SLOPE_OCEAN", "RISE", "BASIN_OCEAN", "CURRENT",
            "TIDE", "WAVE", "SURF", "SWELL", "TSUNAMI_WAVE", "UNDERTOW",
            "UPWELLING", "SALINITY", "THERMOCLINE", "HALOCLINE", "PYCNOCLINE", "PRESSURE",
            "SONAR_DEEP", "BATHYSCAPHE", "ROV", "AUV", "DIVING_BELL", "SCUBA",
            "AQUALUNG", "SPEARFISHING", "NETTING", "TRAWLING", "AQUACULTURE", "MARICULTURE",
            "ALGAE", "KELP", "SEAWEED", "PHYTOPLANKTON", "ZOOPLANKTON", "KRILL",
            "SHRIMP", "PRAWN", "CRAB", "HERMIT_CRAB", "BARNACLE_SHELL", "MOLLUSK",
            "CLAM", "OYSTER", "MUSSEL", "SCALLOP", "SNAIL_MARINE", "SLUG_MARINE",
            "NUDIBRANCH", "CUTTLEFISH", "NAUTILUS", "AMMONITE", "STARFISH", "BRITTLE_STAR",
            "SEA_CUCUMBER", "SEA_LILY", "SPONGE", "PORIFERA", "CNIDARIAN", "HYDROPOLYP",
            "MEDUSA", "SIPHONOPHORE", "TUNICATE", "LANCELET", "FISH", "TELEOST",
            "ELASMOBRANCH", "SKATE", "CHIMAERA", "HAGFISH", "LAMPREY", "MAMMAL_MARINE",
            "SEAL", "SEA_LION", "SEA_OTTER"
        ],
        imposterWords: [
            // Original 10
            "YEAST", "BLENDER", "SPATULA", "MARINADE", "SOUFFLE", 
            "SKILLET", "KNEAD", "VANILLA", "ROAST", "FERMENT",
            // 41 Additional Culinary/Baking Words to cross 50
            "FLOUR", "SUGAR", "BAKING_SODA", "POWDER_BAKE", "SALT", "SPICE",
            "HERB_CULINARY", "EXTRACT", "LEAVENING", "DOUGH", "BATTER", "PASTRY",
            "CRUST", "FILLING", "GLAZE", "ICING", "FROSTING", "GANACHE",
            "MERINGUE", "CUSTARD", "PUDDING", "GELATIN", "PECTIN", "AGAR",
            "WHISK", "MIXER", "OVEN", "STOVE", "BROILER", "GRILL",
            "FRYER", "STEAMER", "POACHER", "SAUTEUSE", "WOK", "GRIDDLE",
            "SAUCEPAN", "STOCKPOT", "DUTCH_OVEN", "ROASTER", "BAKEWARE"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 4 / 10) ---
// Total Words in this module: ~250 words across 10 simplified, everyday crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 4)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "animals_furniture",
        _innocentHints: [
            "Wild Animals & Nature Creatures",
            "Terrestrial Wildlife, Kingdom Animalia & Forest Fauna",
            "Global Mammals, Wilderness Zoology & Nature Species"
        ],
        _imposterHints: [
            "Home Furniture, Rooms & House Decor",
            "Interior Design, Household Furnishings & Living Spaces",
            "Domestic Carpentry, Interior Decorating & Room Comforts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "LION", "TIGER", "BEAR", "MONKEY", "GIRAFFE", "ZEBRA", 
            "ELEPHANT", "KANGAROO", "PANDA", "FOX", "WOLF", "DEER", 
            "RABBIT", "SQUIRREL", "CHIPMUNK", "HIPPO", "RHINO", "LEOPARD", 
            "GORILLA", "CHIMPANZEE", "KOALA", "OTTER", "BADGER", "REINDEER",
            // 77 Additional Wild Animal Words to cross 100
            "CHEETAH", "JAGUAR", "PANTHER", "COUGAR", "PUMA", "LYNX",
            "HYENA", "COYOTE", "JACKAL", "MEERKAT", "MONGOOSE", "WOMBAT",
            "WALLABY", "PLATYPUS", "OPOSSUM", "RACCOON", "SKUNK", "WEASEL",
            "WOLVERINE", "MARTEN", "MINK", "ERMINE", "SLOTH", "ARMADILLO",
            "ANTEATER", "PANGOLIN", "PORCUPINE", "HEDGEHOG", "MOLE", "SHREW",
            "BAT_MAMMAL", "LEMUR", "BABOON", "MANDRILL", "MACAQUE", "GIBBON",
            "ORANGUTAN", "MARMOSET", "TAMARIN", "TAPIR", "WARTHOG", "BOAR",
            "PECCARY", "CAMEL", "LLAMA", "ALPACA", "VICUNA", "GUANACO",
            "DONKEY_WILD", "ZEBU", "YAK", "BISON", "BUFFALO", "ANTELOPE",
            "GAZELLE", "IMPALA", "ORYX", "KUDU", "ELAND", "WILDEBEEST",
            "CHAMOIS", "IBEX", "MARKHOR", "MOUFLON", "ARGALI", "CARIBOU",
            "ELK", "MOOSE", "WALRUS", "SEAL_WILD", "SEA_LION_WILD", "MANATEE_WILD",
            "DUGONG", "WHALE_WILD", "DOLPHIN_WILD", "PORPOISE", "ORCA"
        ],
        imposterWords: [
            // Original 6
            "CHAIR", "COUCH", "TABLE", "DESK", "BED", "BENCH",
            // 45 Additional Furniture/Decor Words to cross 50
            "SOFA", "LOVESEAT", "RECLINER", "ARMCHAIR", "OTTOMAN", "STOOL",
            "FUTON", "DAYBED", "MATTRESS", "HEADBOARD", "NIGHTSTAND", "DRESSER",
            "WARDROBE", "ARMOIRE", "CLOSET", "CABINET", "SIDEBOARD", "BUFFET",
            "CREDENZA", "BOOKCASE", "SHELVING", "DESK_CHAIR", "CREDENZA_DESK", "WORKSTATION",
            "DINING_TABLE", "COFFEE_TABLE", "END_TABLE", "CONSOLE_TABLE", "VANITY", "CHEST_DRAWER",
            "DESK_LAMP", "CHANDELIER", "SCONCE", "MIRROR_DECOR", "RUG", "CARPET",
            "CURTAINS", "DRAPES", "BLINDS", "SHUTTERS", "CUSHION", "PILLOW",
            "WALLPAPER", "TAPESTRY", "CLOCK_WALL"
        ]
    },
    {
        id: "school_office",
        _innocentHints: [
            "School Classroom Supplies & Education",
            "Academic Equipment, Primary Learning & Classroom Stationery",
            "Educational Materials, Student Supplies & Pedagogy"
        ],
        _imposterHints: [
            "Corporate Offices, Business Buildings & Working",
            "Enterprise Office Infrastructure, Paper Management & Clerical Work",
            "Corporate Workspaces, Business Operations & Desktop Utilities"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "BACKPACK", "PENCIL", "CRAYON", "TEXTBOOK", "ERASER", "RULER", 
            "CHALKBOARD", "DESK", "NOTEBOOK", "HIGHLIGHTER", "MARKER", "GLUE", 
            "SCISSORS", "BINDER", "FOLDER", "HOMERUN", "RECESS", "TEACHER", 
            "STUDENT", "WHITEBOARD", "SHARPENER", "BLACKBOARD", "QUIZ", "LESSON",
            // 77 Additional School/Education Words to cross 100
            "COMPASS_MATH", "PROTRACTOR", "CALCULATOR", "COMPOSITION_BOOK", "NOTEPAD", "INDEX_CARD",
            "FLASHCARD", "PENCIL_CASE", "POUCH", "INK_WELL", "FOUNTAIN_PEN", "BALLPOINT",
            "GEL_PEN", "CHALK", "ERASER_CLOTH", "STENCIL", "CLIPBOARD", "REPORT_CARD",
            "DIPLOMA", "CERTIFICATE", "DESK_ORGANIZER", "BOOKSHELF", "GLOBE", "ATLAS_SCHOOL",
            "DICTIONARY", "ENCYCLOPEDIA", "THESAURUS", "WORKBOOK", "JOURNAL", "ALMANAC",
            "SYLLABUS", "CURRICULUM", "TIMETABLE", "SCHEDULE_CLASS", "BELL_RING", "LOCKER_ROOM",
            "GYMNASIUM", "AUDITORIUM_SCHOOL", "LIBRARY", "LABORATORY", "CAFETERIA", "PLAYGROUND",
            "HOMEROOM", "CLASSROOM", "LECTURE_HALL", "CAMPUS", "ACADEMY", "INSTITUTE",
            "UNIVERSITY", "COLLEGE", "PRINCIPAL", "DEAN", "PROFESSOR", "INSTRUCTOR_EDU",
            "TUTOR", "MENTOR", "ADVISOR", "COUNSELOR", "CLASSMATE", "PUPIL",
            "ALUMNUS", "GRADUATE", "EXAMINATION", "TEST_PAPER", "MIDTERM", "FINAL_EXAM",
            "ASSIGNMENT", "HOMEWORK", "PROJECT", "PRESENTATION", "REPORT", "ESSAY",
            "THESIS", "DISSERTATION", "GRADUATION", "COMMENCEMENT", "CONVOCATION"
        ],
        imposterWords: [
            // Original 6 (Notice original desk/board were context clones, making them risky but valid)
            "STAPLER", "CLIP", "PAPER", "FILE", "DESK", "BOARD",
            // 45 Additional Corporate Office Words to cross 50
            "HOLE_PUNCH", "STAPLE_REMOVER", "PAPERWEIGHT", "RUBBER_BANDS", "THUMBTACKS", "PUSH_PINS",
            "BINDER_CLIPS", "ENVELOPE", "LETTERHEAD", "MEMO_PAD", "INVOICE", "RECEIPT",
            "LEDGER", "SPREADSHEET", "DOCUMENTS", "DOSSIER", "ARCHIVE", "FILING_CABINET",
            "CUBICLE", "CONFERENCE_TABLE", "SWIVEL_CHAIR", "WHITEBOARD_MEET", "PROJECTOR", "SPEAKERPHONE",
            "TELEPHONE", "FAX_MACHINE", "COPIER", "SCANNER", "SHREDDER", "LAMINATOR",
            "DICTAPHONE", "CALENDAR_DESK", "PLANNER", "ORGANIZER", "BRIEFCASE", "PORTFOLIO_CASE",
            "BADGE", "LANYARD", "TIMECLOCK", "PUNCHCARD", "WATER_COOLER", "COFFEE_MAKER",
            "CUBICLE_WALL", "DESK_MAT", "IN_BOX"
        ]
    },
    {
        id: "fruits_colors",
        _innocentHints: [
            "Fresh Fruits, Trees & Healthy Snacks",
            "Horticultural Agriculture, Organic Produce & Orchard Crops",
            "Edible Botanicals, Deciduous Fruits & Citruses"
        ],
        _imposterHints: [
            "Rainbow Colors, Painting & Art Supplies",
            "Chromatics, Visual Pigments & Fine Art Palette Spectrum",
            "Color Theory, Artist Pigments & Design Tones"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24 (Fixed spelling variant of GRAPEFRUIT)
            "APPLE", "BANANA", "GRAPE", "STRAWBERRY", "WATERMELON", "PEACH", 
            "PEAR", "PLUM", "CHERRY", "BLUEBERRY", "RASPBERRY", "LEMON", 
            "LIME", "PINEAPPLE", "MANGO", "KIWI", "MELON", "GRAPEFRUIT", 
            "FIG", "COCONUT", "POMEGRANATE", "APRICOT", "BLACKBERRY", "CRANBERRY",
            // 77 Additional Fruit Words to cross 100
            "NECTARINE", "CLEMENTINE", "MANDARIN", "TANGERINE", "SATSUMA", "KUMQUAT",
            "CANTALOUPE", "HONEYDEW", "CASSABA", "PAPAYA", "GUAVA", "PASSIONFRUIT",
            "DRAGONFRUIT", "LYCHEE", "RAMBUTAN", "MANGOSTEEN", "DURIAN", "JACKFRUIT",
            "BREADFRUIT", "AVOCADO", "OLIVE_FRUIT", "TOMATO", "EGGPLANT_BOTANY", "BELL_PEPPER",
            "CHILI_PEPPER", "TOMATILLO", "PERSIMMON", "QUINCE", "LOQUAT", "MEDLAR",
            "BOYSENBERRY", "LOGANBERRY", "TAYBERRY", "MARIONBERRY", "GOOSEBERRY", "CURRANT",
            "ELDERBERRY", "MULBERRY", "HUCKLEBERRY", "LINGONBERRY", "BILBERRY", "CHOKEBERRY",
            "ACAI", "GOJI_BERRY", "JUJUBE", "DATE_FRUIT", "TAMARIND", "PLANTAIN",
            "CHIRIMOYA", "Soursop", "SWEETSOP", "CUSTARD_APPLE", "STARFRUIT", "CARAMBOLA",
            "POMELO", "BLOOD_ORANGE", "SEVILLE_ORANGE", "BERGAMOT", "YUZU", "SUDACHI",
            "CALAMANSI", "KEY_LIME", "FINGER_LIME", "CITRON", "BUDDHAS_HAND", "PRUNE",
            "SULTANA", "CURRANT_DRIED", "RAISIN", "GOURD", "PUMPKIN", "SQUASH",
            "ZUCCHINI", "CUCUMBER", "MELOTHRIA", "KIWANO", "FEIJOA"
        ],
        imposterWords: [
            // Original 6
            "ORANGE", "YELLOW", "GREEN", "RED", "PURPLE", "PINK",
            // 45 Additional Color Theory/Pigment Words to cross 50
            "BLUE", "INDIGO", "VIOLET", "MAGENTA", "CYAN", "TEAL",
            "TURQUOISE", "AQUAMARINE", "CERULEAN", "COBALT", "ULTRAMARINE", "NAVY",
            "SAPPHIRE", "EMERALD", "JADE", "OLIVE_TONE", "MINT_GREEN", "CHARTREUSE",
            "LIME_GREEN", "CHROME_YELLOW", "GOLDENROD", "AMBER", "OCHRE", "SEPIA_ART",
            "UMBER", "SIENNA", "MAHOGANY", "MAROON", "BURGUNDY", "CRIMSON",
            "SCARLET", "VERMILION", "RUBY", "CORAL_TONE", "SALMON_PINK", "PEACH_FUZZ",
            "LAVENDER_TONE", "LILAC", "MAUVE", "ORCHID_TONE", "PLUM_TONE", "BEIGE",
            "TAUPE", "KHAKI", "CREAM_WHITE"
        ]
    },
    {
        id: "clothing_weather",
        _innocentHints: [
            "Winter Clothing, Cold Outfits & Getting Dressed",
            "Cold Weather Wardrobe, Insulation Insulation & Outerwear",
            "Thermal Attire, Winter Garments & Snow Apparels"
        ],
        _imposterHints: [
            "Summer Weather, Hot Days & The Beach",
            "Meteorological Heat, Subtropical Highs & Coastal Elements",
            "High Temperatures, Coastal Climatology & Beachfront States"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SWEATER", "SCARF", "MITTENS", "JACKET", "BOOTS", "BEANIE", 
            "COAT", "GLOVES", "EARMUFFS", "SOCKS", "VEST", "TROUSERS", 
            "PARKA", "RAINCOAT", "SWEATSHIRT", "CARDIGAN", "BLANKET", "OVERCOAT", 
            "TURTLENECK", "LEGGINGS", "SLIPPERS", "HOODIE", "ROBE", "PAJAMAS",
            // 77 Additional Winter Apparel Words to cross 100
            "WIND_BREAKER", "BALACLAVA", "SKI_MASK", "SNOW_SUIT", "OVERALLS", "THERMALS",
            "LONG_JOHNS", "UNDERWEAR_THERMAL", "SWEATPANTS", "TRACKSUIT", "BLAZER", "PEACOAT",
            "TRENCH_COAT", "DUFFLE_COAT", "ANORAK", "BOMBER_JACKET", "FLEECE", "PULLOVER",
            "TURTLENECK_SWEATER", "V_NECK", "CREWNECK", "WAISTCOAT", "RAIN_BOOTS", "SNOW_BOOTS",
            "GALOSHES", "MOCK_NECK", "PONCHO", "SHAWL", "WRAP", "STOLE_FUR",
            "MUFF_HAND", "LEG_WARMERS", "STOCKINGS", "TIGHTS", "PANTYHOSE", "JEANS",
            "CORDUROYS", "DENIM_JACKET", "QUILTED_VEST", "DOWN_JACKET", "PUFFER_COAT", "FUR_COAT",
            "SHEARLING", "LEATHER_JACKET", "SUEDE_COAT", "MACKINTOSH", "OILSKIN", "SOUWESTER",
            "OVERBOOTS", "WADERS", "SNOWSHOES", "ICE_SKATES", "SKI_BOOTS", "KNIT_WEAR",
            "WOOLEN_SOCKS", "LINER_SOCKS", "MITTEN_CLIPS", "SUSPENDERS", "BELT_LEATHER", "GATORS",
            "BERET", "USHANKA", "TRAPPER_HAT", "TOQUE", "SOU_WESTER", "RAIN_CAP",
            "NECK_GAITER", "JERSEY", "CARDIGAN_KNIT", "GANDOURA", "DJELLABA", "CAFTAN_WOOL",
            "KILT_WOOL", "TWEED_JACKET", "JERKIN", "DOUBLET", "TUNIC_WARM"
        ],
        imposterWords: [
            // Original 6
            "SUNSHINE", "HEAT", "SHADE", "WAVE", "BEACH", "SAND",
            // 45 Additional Summer Weather/Beach Words to cross 50
            "HUMIDITY", "THERMOMETER", "SULTRY", "SWELTERING", "TORRID", "TROPICAL_WAVE",
            "SOLSTICE_SUMMER", "SUNBEAM", "SUNRAY", "UV_INDEX", "MIRAGE", "WARMTH",
            "HIGH_PRESSURE", "DOLDRUMS", "EQUATOR_HEAT", "SIROCCO", "MONSOON", "TRADE_WINDS",
            "SEA_BREEZE", "SHORELINE", "COASTLINE_SUMMER", " boardwalk", "OCEAN_SURF", "TIDE_POOL",
            "SANDBAR", "DUNES", "PARASOL", "SUNSHADE", "CABANA", "DECKCHAIR",
            "HAMMOCK", "SUN_BATH", "SUNBURN", "SUNTAN", "SIESTA", "RELAXATION",
            "VACATION", "RESORT", "OASIS_SUMMER", "ISLAND_HEAT", "LAGOON_SURF", "REEF_BEACH",
            "JETTY", "PIER", "WATERFRONT"
        ]
    },
    {
        id: "kitchen_tools",
        _innocentHints: [
            "Kitchen Utensils, Cooking Tools & Eating Dinner",
            "Gastronomic Equipment, Food Preparation & Dinnerware",
            "Culinary Implements, Baking Hardware & Kitchen Tasks"
        ],
        _imposterHints: [
            "Garage Tools, Building Repairs & DIY Projects",
            "Mechanical Hardware, Workshop Assembly & Structural Repair",
            "Carpentry Gear, Workshop Construction & Construction Hardware"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SPOON", "FORK", "KNIFE", "PLATE", "BOWL", "CUP", 
            "MUG", "GLASS", "PAN", "POT", "SPATULA", "WHISK", 
            "TONGS", "LADLE", "PEELER", "GRATER", "TOWEL", "SPONGE", 
            "NAPKIN", "TRAY", "BLENDER", "TOASTER", "KETTLE", "SAUCER",
            // 77 Additional Kitchen/Culinary Utensil Words to cross 100
            "ROLLING_PIN", "COLANDER", "STRAINER", "SIEVE", "FUNNEL", "MEASURING_CUP",
            "MEASURING_SPOON", "SCALES_KITCHEN", "THERMOMETER_MEAT", "TIMER_KITCHEN", "CHOPPING_BOARD", "CUTTING_BOARD",
            "CARVING_KNIFE", "PARING_KNIFE", "BREAD_KNIFE", "CLEAVER", "HONING_STEEL", "SHARPENING_STONE",
            "SHEARS_KITCHEN", "CAN_OPENER", "BOTTLE_OPENER", "CORKSCREW", "GARLIC_PRESS", "POTATO_MASHER",
            "NUTCRACKER", "SALAD_SPINNER", "ZESTER", "CORER", "PITTER", "SKEWER",
            "PASTRY_BRUSH", "PASTRY_WHEEL", "PIZZA_CUTTER", "ICE_CREAM_SCOOP", "PASTA_FORK", "CAKE_SERVER",
            "RAMEKIN", "CASSEROLE_DISH", "BAKING_SHEET", "ROASTING_PAN", "SAUTE_PAN", "SKILLET_KITCHEN",
            "WOK_PAN", "STOCK_POT", "SAUCE_POT", "PRESSURE_COOKER", "SLOW_COOKER", "RICE_COOKER",
            "FOOD_PROCESSOR", "STAND_MIXER", "HAND_MIXER", "COFFEE_GRINDER", "JUICER", "WAFFLE_IRON",
            "GRIDDLE_PLATE", "MICROWAVE", "OVEN_MITT", "TRIVET", "DISH_RACK", "DISH_CLOTH",
            "SCRUBBER", "APRON", "PLACEMAT", "COASTER", "GRAVY_BOAT", "TUREEN",
            "PITCHER", "DECANTER", "CARAFE", "THERMOS", "SALT_SHAKER", "PEPPER_MILL",
            "BUTTER_DISH", "EGG_CUP", "FONDUE_POT", "MORTAR_PESTLE", "CHOPSTICKS"
        ],
        imposterWords: [
            // Original 6
            "HAMMER", "SAW", "NAIL", "SCREW", "DRILL", "BLADE",
            // 45 Additional Workshop/Garage Tools to cross 50
            "SCREWDRIVER", "WRENCH", "PLIERS", "CHISEL", "FILE_TOOL", "PLANE_WOOD",
            "LEVEL_TOOL", "TAPE_MEASURE", "SQUARE_RULE", "CLAMP", "VICE", "ANVIL",
            "MALLET", "HACKSAW", "COPING_SAW", "MITRE_BOX", "SANDPAPER", "RASP",
            "GOUGE", "AWL", "PUNCH_TOOL", "CROWBAR", "PRY_BAR", "BOLT_CUTTER",
            "WIRE_STRIPPER", "SOLDERING_IRON", "TORCH_PROPANE", "HEAT_GUN", "SAND_BLASTER", "AIR_COMPRESSOR",
            "IMPACT_WRENCH", "ROUTER_TOOL", "PLANER_POWER", "SANDERS", "JIGSAW", "CIRCULAR_SAW",
            "BAND_SAW", "LATHE", "DRILL_PRESS", "GRINDER_ANGLE", "TOOLBOX", "WORKBENCH",
            "SAWHORSE", "SOCKET_SET", "ALLEN_KEY"
        ]
    },
    {
        id: "toys_sports",
        _innocentHints: [
            "Children's Toys, Playground Games & Birthdays",
            "Juvenile Entertainment, Playground Recreation & Toyboxes",
            "Nursery Items, Recreational Toys & Party Games"
        ],
        _imposterHints: [
            "Professional Sports, Fitness & Athletes",
            "Athletic Competitions, Olympic Sports & Field Sports",
            "Competitive Athletics, Field Regimes & Athletic Leagues"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "DOLL", "MARBLES", "BLOCKS", "TEDDY_BEAR", "SANDBOX", "SLIDE", 
            "SWING", "PUZZLE", "KITE", "YOYO", "SPINNER", "BALLOON", 
            "PLAYDOUGH", "TRICYCLE", "SCOOTER", "CRAYONS", "BUBBLES", "CHECKERS", 
            "DOMINOES", "CHIPS", "LEGO", "CRIB", "WAGON", "PUPPET",
            // 77 Additional Children's Toy Words to cross 100
            "ACTION_FIGURE", "TOY_SOLDIER", "BARBIE", "PLAYHOUSE", "DOLLHOUSE", "MARIONETTE",
            "JACK_IN_THE_BOX", "RATTLE", "TEETHING_RING", "STACKING_RINGS", "PULL_TOY", "ROCKING_HORSE",
            "TOY_TRAIN", "SLOT_CAR", "DIECAST_CAR", "MODEL_AIRPLANE", "MODEL_ROCKET", "KINETIC_SAND",
            "SILLY_PUTTY", "SLIME_TOY", "CHALK_SIDEWALK", "FINGER_PAINT", "COLORING_BOOK", "ST_STICKERS",
            "BOP_IT", "RUBIKS_CUBE", "PUZZLE_BOX", "MAZE_TOY", "KALEIDOSCOPE", "VIEW_MASTER",
            "STUFFED_ANIMAL", "PLUSH_TOY", "BEAN_BAG_TOY", "HACKY_SACK", "FRISBEE_TOY", "BOOMERANG_TOY",
            "WATER_GUN", "SUPER_SOAKER", "NERF_BLASTER", "CAP_GUN", "POP_GUN", "SQUIRT_TOY",
            "HULA_HOOP", "SKIPPING_ROPE", "JUMP_ROPE", "POGO_STICK", "STILTS", "ROLLER_SKATES",
            "INLINE_SKATES", "SKATEBOARD_TOY", "SCOOTER_KID", "PEDAL_CAR", "SLED_TOY", "TABBOGAN",
            "SNOW_SAUCER", "INFLATABLE_POOL", "POOL_FLOAT", "BEACH_BALL", "SAND_CASTLE_MOLD", "BUCKET_SPADE",
            "TOY_CHEST", "TOY_BOX", "PLAY_MAT", "BABY_GYM", "JUMPEROO", "WALKER_TOY",
            "XYLOPHONE_TOY", "TOY_DRUM", "TOY_KEYBOARD", "MICROSCOPE_TOY", "TELESCOPE_TOY", "CHEMISTRY_SET_TOY",
            "MAGIC_SET", "KNITTING_KIT", "BEAD_KIT", "WEAVING_LOOM_TOY", "STAMP_SET"
        ],
        imposterWords: [
            // Original 6
            "BALL", "BAT", "NET", "GOAL", "RING", "CLUB",
            // 45 Additional Professional Sports Words to cross 50
            "STADIUM", "ARENA", "VELODROME", "RACECOURSE", "CIRCUIT_RACE", "FAIRWAY",
            "GREEN_GOLF", "COURT_SPORTS", "PITCH_SPORTS", "FIELD_SPORTS", "TRACK_SPORTS", "POOL_SPORTS",
            "RINK_SPORTS", "GYM_SPORTS", "SCOREBOARD", "CHRONOMETER", "WHISTLE", "JERSEY_SPORTS",
            "HELMET_SPORTS", "PADS_SPORTS", "GLOVES_SPORTS", "CLEATS", "SPIKES_SPORTS", "SNEAKERS",
            "RACQUET", "PADDLE", "SHUTTLECOCK", "PUCK", "DUMBBELL_SPORTS", "BARBELL_SPORTS",
            "TRAMPOLINE_SPORTS", "VAULTING_HORSE", "PARALLEL_BARS", "RINGS_SPORTS", "POMMEL_HORSE", "BALANCE_BEAM",
            "STARTING_BLOCKS", "HURDLE", "JAVELIN", "DISCUS", "SHOT_PUT", "HAMMER_THROW",
            "POLE_VAULT", "CROSSBAR_SPORTS", "MATS_SPORTS"
        ]
    },
    {
        id: "space_camping",
        _innocentHints: [
            "Night Sky, Stars & Space Exploration",
            "Astrophysics, Extraterrestrial Systems & Deep Cosmos",
            "Astronomical Phenomena, Rocket Science & Stellar Orbits"
        ],
        _imposterHints: [
            "Outdoor Camping, Forests & Tents",
            "Backcountry Wilderness, Hiking Expeditions & Campsites",
            "Forest Survival, Outdoor Gear & Camping Logistics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "MOON", "STAR", "GALAXY", "ROCKET", "PLANET", "TELESCOPE", 
            "ASTRONAUT", "ALIEN", "SPACESHIP", "COMET", "ASTEROID", "METEOR", 
            "ORBIT", "CRATER", "GRAVITY", "ROVER", "SATELLITE", "SUN", 
            "COSMOS", "ECLIPSE", "SKY", "NEBULA", "FLARE", "CONSTELLATION",
            // 77 Additional Space Exploration/Astronomy Words to cross 100
            "SUPERNOVA", "BLACK_HOLE", "QUASAR", "PULSAR", "WHITE_DWARF", "RED_GIANT",
            "NEUTRON_STAR", "PROTOSTAR", "BINARY_SYSTEM", "EXOPLANET", "GAS_GIANT", "TERRESTRIAL_PLANET",
            "ORBITAL_MECHANICS", "TRAJECTORY", "ESCAPE_VELOCITY", "THRUST", "PROPULSION", "PAYLOAD",
            "LAUNCH_PAD", "MISSION_CONTROL", "TELEMETRY_SPACE", "COMMUNICATION_ARRAY", "SPACE_STATION", "MODULE",
            "AIRLOCK", "SPACESUIT", "HELMET_SPACE", "VISOR", "JETPACK_SPACE", "LIFE_SUPPORT",
            "SOLAR_PANEL_SPACE", "SPECTROMETER_SPACE", "RADIO_TELESCOPE", "OBSERVATORY", "LIGHT_YEAR", "PARSEC",
            "ASTRONOMICAL_UNIT", "REDSHIFT", "BLUESHIFT", "COSMIC_RAY", "SOLAR_WIND", "MAGNETOSPHERE",
            "IONOSPHERE", "EXOSPHERE", "STRATOSPHERE_SPACE", "ATMOSPHERE_PLANET", "TERRAFORMING", "BIO_DOME",
            "GRAVITATIONAL_LENSING", "SINGULARITY", "EVENT_HORIZON", "ACCRETION_DISK", "DARK_MATTER", "DARK_ENERGY",
            "BIG_BANG", "COSMOLOGY", "ASTROPHYSICS", "ASTROBIOLOGY", "EXOBIOLOGY", "SETI",
            "DEEP_SPACE", "INTERSTELLAR", "INTERGALACTIC", "VOID", "CLUSTER_GALAXY", "SUPERCLUSTER",
            "ANDROMEDA", "MILKY_WAY", "ORION_NEBULA", "AURORA", "BOREALIS", "AUSTRALIS",
            "METEORITE", "METEOROID", "METEOR_SHOWER", "ZODIAC_LIGHT", "DECLINATION", "RIGHT_ASCENSION"
        ],
        imposterWords: [
            // Original 6
            "FIRE", "CAMP", "TENT", "WOODS", "TRAIL", "CABIN",
            // 45 Additional Outdoor Camping Words to cross 50
            "SLEEPING_BAG", "SLEEPING_PAD", "CAMPSTOVE", "BACKPACK_CAMP", "HIKING_BOOTS", "COMPASS_CAMP",
            "TOPOGRAPHIC_MAP", "GPS_NAV", "FLASHLIGHT", "HEADLAMP", "LANTERN", "MATCHES_CAMP",
            "LIGHTER_CAMP", "FIRE_STARTER", "KINDLING", "FIREWOOD", "AXE_CAMP", "HATCHET",
            "SAW_CAMP", "KNIFE_CAMP", "MULTI_TOOL", "ROPE_CAMP", "PARACORD", "CARABINER_CAMP",
            "TARP", "GUY_LINES", "STAKES_CAMP", "HAMMOCK_CAMP", "BUG_SPRAY", "SUNSCREEN_CAMP",
            "FIRST_AID_KIT", "WATER_FILTER", "PURIFICATION_TABLETS", "CANTEEN", "HYDRATION_PACK", "MESS_KIT",
            "COOLER", "ICE_CHEST", "BEAR_CANISTER", "DRY_BAG", "BINOCULARS_CAMP", "TREKKING_POLES",
            "TRAIL_MIX", "DEHYDRATED_FOOD", "CAN_OPENER_CAMP"
        ]
    },
    {
        id: "dogs_farm",
        _innocentHints: [
            "Pet Dogs, Puppies & Household Pets",
            "Canine Companionship, Domestic Breeds & Canine Behavior",
            "Domestic Canines, Pet Handling & Dog Psychology"
        ],
        _imposterHints: [
            "Farm Animals, Barnyards & Country Fields",
            "Livestock Management, Agrarian Fields & Farmyard Fauna",
            "Agrarian Livestock, Pasture Systems & Barnyard Mammals"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get FlemingHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; }, // Keep safe mapping

        innocentWords: [
            // Original 24
            "PUPPY", "LEASH", "COLLAR", "BARK", "BONE", "KIBBLE", 
            "KENNEL", "FETCH", "TAIL", "PAW", "DOGHOUSE", "BEAGLE", 
            "POODLE", "MUTT", "TERRIER", "FUR", "CHASER", "GROWL", 
            "WHIMPER", "HOWL", "SNIFF", "STRAY", "VET", "RESCUE",
            // 77 Additional Dog Breeds/Care Words to cross 100
            "LABRADOR", "RETRIEVER", "SHEPHERD", "RETRIEVER_GOLDEN", "BULLDOG", "BOXER_DOG",
            "ROTTWEILER", "POINTER", "SCHNAUZER", "CHIHUAHUA", "PUG", "SHIH_TZU",
            "MASTIFF", "GREAT_DANE", "DOBERMAN", "HUSKY", "MALAMUTE", "SAMOYED",
            "CHOW_CHOW", "AKITA", "SHIBA_INU", "CORGI", "DACHSHUND", "GREYHOUND",
            "WHIPPET", "BLOODHOUND", "BASSET_HOUND", "DALMATIAN", "ST_BERNARD", "NEWFOUNDLAND",
            "MALTESER", "YORKIE", "POMERANIAN", "SPANIEL", "COCKER_SPANIEL", "SETTER",
            "SHELTIE", "COLLIE", "BORDER_COLLIE", "AUSTRALIAN_SHEPHERD", "HEELER", "KELPIE",
            "CANINE", "PUP", "WHELP", "PACK_LEADER", "ALPHA_DOG", "OBEDIENCE_TRAIN",
            "COMMAND_SIT", "COMMAND_STAY", "COMMAND_HEEL", "CLICKER_TRAIN", "AGILITY_COURSE", "DOG_SHOW",
            "DOG_PARK", "GROOMING", "BRUSHING", "BATHING_DOG", "CLAW_TRIM", "FLEA_COLLAR",
            "TICK_TREATMENT", "DEWORMER", "RABIES_VACCINE", "MICROCHIP_PET", "ADOPTION", "SHELTER_PET",
            "FOSTER_HOME", "BREEDER", "PEDIGREE", "BLOODLINE", "HYBRID_DOG", "DESIGNER_BREED",
            "SPAYED", "NEUTERED", "DOG_WALKER", "DOG_SITTER", "CHEW_TOY"
        ],
        imposterWords: [
            // Original 6
            "COW", "HORSE", "PIG", "SHEEP", "CHICKEN", "GOAT",
            // 45 Additional Farm Animals/Livestock Words to cross 50
            "BULL_FARM", "STEER", "HEIFER", "CALF_FARM", "STALLION", "MARE",
            "GELDING", "FOAL", "COLT", "FILLY", "ROOSTER", "HEN",
            "CHICK", "BOAR_FARM", "SOW", "PIGLET", "RAM", "EWE",
            "LAMB", "BILLY_GOAT", "NANNY_GOAT", "KID_GOAT", "DONKEY", "MULE",
            "LLAMA_FARM", "ALPACA_FARM", "DUCK_FARM", "DRAKE", "DUCKLING", "GOOSE_FARM",
            "GANDER", "GOSLING", "TURKEY_FARM", "TOM_TURKEY", "POULT", "PIGEON_FARM",
            "SQUAB", "GUINEA_FOWL", "PEAFOWL", "PHEASANT_FARM", "QUAIL_FARM", "RABBIT_FARM",
            "BUBALE", "YAK_FARM", "BEEHIVE"
        ]
    },
    {
        id: "music_movies",
        _innocentHints: [
            "Listening to Music, Songs & Concerts",
            "Acoustic Artistry, Audio Recording & Concert Settings",
            "Sonic Harmonies, Audio Playlists & Instrumentation"
        ],
        _imposterHints: [
            "Watching Movies, Hollywood & TV Shows",
            "Cinematic Production, Broadcast Television & Motion Pictures",
            "Hollywood Directing, Screenplays & Streaming Media"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SONG", "SINGER", "ALBUM", "RADIO", "HEADPHONES", "SPEAKER", 
            "MICROPHONE", "CONCERT", "LYRICS", "GUITAR", "PIANO", "DRUMS", 
            "PLAYLIST", "BAND", "RHYTHM", "MELODY", "BEAT", "INSTRUMENT", 
            "CHORUS", "STAGE", "TUNE", "VOLUME", "VOICE", "DANCE",
            // 77 Additional Music Words to cross 100
            "SYMPHONY", "ORCHESTRA", "OPERA", "MUSICAL", "CONCERT_HALL", "STADIUM_TOUR",
            "GIG_MUSIC", "FESTIVAL_MUSIC", "TRACK_AUDIO", "SINGLE_RELEASE", "EP_RECORD", "VINYL_RECORD",
            "CASSETTE", "COMPACT_DISC", "STREAMING_AUDIO", "MP3_FILE", "AMPLIFIER", "EQUALIZER",
            "MIXING_DESK", "SYNTHESIZER", "KEYBOARD_MUSIC", "VIOLIN", "CELLO", "DOUBLE_BASS",
            "FLUTE", "CLARINET", "SAXOPHONE", "TRUMPET", "TROMBONE", "TUBA",
            "HARP", "ACCORDION", "UKULELE", "BANJO", "MANDOLIN", "HARMONICA",
            "PERCUSSION", "CYMBALS", "TAMBOURINE", "COMPOSER_MUSIC", "CONDUCTOR_MUSIC", "LYRICIST_MUSIC",
            "SONGWRITER", "PRODUCER_MUSIC", "ENGINEER_AUDIO", "VOCALIST", "SOLOIST", "DUET",
            "TRIO_MUSIC", "QUARTET", "CHOIR", "HARMONY", "COUNTERPOINT", "SCALE_MUSIC",
            "CHORD", "ARPEGGIO", "TEMPO", "METRONOME", "NOTATION", "SHEET_MUSIC",
            "SCORE_MUSIC", "CLEF", "STAFF_MUSIC", "KEY_SIGNATURE", "GENRE", "ROCK_GENRE",
            "POP_GENRE", "JAZZ_GENRE", "BLUES_GENRE", "CLASSICAL_GENRE", "HIP_HOP_GENRE", "RAP_GENRE",
            "ELECTRONIC_GENRE", "COUNTRY_GENRE", "FOLK_GENRE", "REGGAE", "PUNK"
        ],
        imposterWords: [
            // Original 6
            "STAR", "SCREEN", "ACTOR", "SHOW", "TICKET", "POPCORN",
            // 45 Additional Movie/TV Show Words to cross 50
            "CINEMA", "THEATER_FILM", "MULTIPLEX", "HOLLYWOOD", "STUDIO_FILM", "PRODUCTION_CO",
            "DIRECTOR_FILM", "PRODUCER_FILM", "SCREENPLAY", "SCRIPT_FILM", "STORYBOARD", "CASTING",
            "AUDITION_FILM", "ACTRESS_FILM", "PERFORMER_FILM", "EXTRAS_FILM", "STUNT_DOUBLE", "CREW_FILM",
            "CINEMATOGRAPHER", "CAMERA_OPERATOR", "SOUND_RECORDIST", "EDITOR_FILM", "SPECIAL_EFFECTS", "CGI",
            "ANIMATION_FILM", "SOUNDTRACK", "FILM_SCORE", "PREMIERE", "RED_CARPET", "FESTIVAL_FILM",
            "AWARDS_FILM", "OSCARS", "BOX_OFFICE", "BLOCKBUSTER", "TRAILER", "TEASER",
            "POSTER", "GENRE_FILM", "DOCUMENTARY", "ANIMATION", "COMEDY", "DRAMA_FILM",
            "THRILLER", "HORROR", "SCI_FI"
        ]
    },
    {
        id: "time_weather",
        _innocentHints: [
            "Clocks, Calendars & Telling the Time",
            "Temporal Chronology, Calendrics & Duration Units",
            "Timekeeping Infrastructure, Horology & Calendars"
        ],
        _imposterHints: [
            "Daily Weather, Sky Conditions & Seasons",
            "Meteorological Flux, Atmospheric Shifts & Forecasts",
            "Climatological Phenonema, Sky Conditions & Seasonal Cycles"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "CLOCK", "WATCH", "HOUR", "MINUTE", "SECOND", "DAY", 
            "WEEK", "MONTH", "YEAR", "CALENDAR", "MORNING", "AFTERNOON", 
            "EVENING", "NIGHT", "MIDNIGHT", "NOON", "TODAY", "YESTERDAY", 
            "TOMORROW", "ALARM", "DIAL", "DIGITAL", "WEEKEND", "SCHEDULE",
            // 77 Additional Timekeeping Words to cross 100
            "CHRONOMETER", "CHRONOGRAPH", "STOPWATCH", "HOURGLASS", "SUNDIAL", "PENDULUM",
            "QUARTZ_CRYSTAL", "ATOMIC_CLOCK", "TIMEPUNCH", "TIMECARD", "TIMETABLE_CHRON", "ROSTER",
            "AGENDA", "APPOINTMENT", "MEETING_TIME", "DEADLINE", "TIMELINE", "ERA",
            "EPOCH", "PERIOD_TIME", "AGE_TIME", "AEON", "MILLENNIUM", "CENTURY",
            "DECADE", "FORTNIGHT", "LEAP_YEAR", "SOLSTICE_TIME", "EQUINOX_TIME", "SEASON_TIME",
            "QUARTER_YEAR", "SEMESTER", "TERM_TIME", "DAWN", "DUSK", "TWILIGHT",
            "SUNRISE", "SUNSET", "DAYLIGHT", "DARKNESS", "AM_TIME", "PM_TIME",
            "TIME_ZONE", "GMT", "UTC", "DATELINE", "MERIDIAN_TIME", "LATENCY_TIME",
            "DURATION", "INTERVAL", "SPAN", "PHASE", "CYCLE_TIME", "RECURRENCE",
            "FREQUENCY_TIME", "PERIODICITY", "CHRONOLOGY", "ANALS", "HISTORY_TIME", "FUTURE_TIME",
            "PAST_TIME", "PRESENT_TIME", "NOW", "INSTANT", "MOMENT", "FLASH_TIME",
            "JLIFFY", "NANOSECOND", "MICROSECOND", "MILLISECOND", "BC_TIME", "AD_TIME",
            "BCE", "CE_TIME", "GENERATION", "LIFETIME", "LONGEVITY"
        ],
        imposterWords: [
            // Original 6
            "RAIN", "SNOW", "WIND", "CLOUD", "STORM", "SUN",
            // 45 Additional Meteorology Words to cross 50
            "METEOROLOGY", "WEATHER_FORECAST", "BAROMETER", "HYGROMETER", "ANEMOMETER", "RAIN_GAUGE",
            "WEATHER_VANE", "SATELLITE_MET", "RADAR_MET", "TEMPERATURE", "THERMOMETER_MET", "CELSIUS",
            "FAHRENHEIT", "HUMIDITY_MET", "PRECIPITATION", "DRIZZLE", "SHOWER", "DOWNPOUR",
            "HAIL", "SLEET", "SNOWFLAKE", "SNOWSTORM", "BLIZZARD", "FOG",
            "MIST", "HAZE", "SMOG", "GALE", "BREEZE", "GUST",
            "TORNADO", "TWISTER", "CYCLONE", "HURRICANE", "TYPHOON", "THUNDERSTORM",
            "LIGHTNING", "THUNDER", "FRONT_MET", "HIGH_PRESSURE_MET", "LOW_PRESSURE_MET", "ISOBAR",
            "JET_STREAM", "CLIMATE", "SEASONS"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 5 / 10) ---
// Total Words in this module: ~250 words across 10 accessible, non-technical crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 5)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "body_trees",
        _innocentHints: [
            "Parts of the Human Body & Anatomy",
            "Human Biological Anatomy, Physical Systems & Organs",
            "Somatic Organism Structure, Muscle Groups & Human Tissues"
        ],
        _imposterHints: [
            "Forest Trees, Plants & Nature Nature",
            "Arboreal Botany, Plant Anatomy & Forest Flora Structures",
            "Dendrological Elements, Vegetative Anatomy & Plant Vascular Systems"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "HEAD", "ARM", "LEG", "HAND", "FOOT", "FINGER", 
            "TOE", "HEART", "LUNG", "BONE", "SKIN", "NECK", 
            "SHOULDER", "ELBOW", "KNEE", "WRIST", "ANKLE", "THROAT", 
            "STOMACH", "MUSCLE", "EYE", "EAR", "NOSE", "CHEEK",
            // 77 Additional Anatomy Words to cross 100
            "BRAIN", "LIVER", "KIDNEY", "SPLEEN", "PANCREAS", "INTESTINE",
            "BLADDER", "GALLBLADDER", "APPENDIX", "ESOPHAGUS", "TRACHEA", "ARTERY",
            "VEIN", "CAPILLARY", "BLOOD", "PLASMA", "NERVE", "SPINE",
            "VERTEBRAE", "RIBCAGE", "SKULL", "JAW", "CHIN", "FOREHEAD",
            "TEMPLE_ANATOMY", "EYEBROW", "EYELASH", "EYELID", "IRIS", "PUPIL",
            "TONGUE", "TOOTH", "GUM_ANATOMY", "LIP", "PALATE", "TONSIL",
            "STERNUM", "CLAVICLE", "SCAPULA", "HUMERUS", "RADIUS", "ULNA",
            "FEMUR", "PATELLA", "TIBIA", "FIBULA", "PELVIS", "HIP",
            "THIGH", "CALF_ANATOMY", "BICEPS", "TRICEPS", "QUADRICEPS", "HAMSTRING",
            "TENDON", "LIGAMENT", "CARTILAGE", "JOINT", "HAIR", "FOLLICLE",
            "NAIL_BED", "CUTICLE", "PORE", "EPIDERMIS", "DERMIS", "DIAPHRAGM",
            "THUMB", "PALM", "SOLE_FOOT", "HEEL", "WAIST", "ABDOMEN",
            "GROIN", "TORSO", "BACKBONE", "SKELETON", "SKULL_BASE"
        ],
        imposterWords: [
            // Original 6
            "ROOT", "BRANCH", "TRUNK", "BARK", "LEAF", "STEM",
            // 45 Additional Tree/Plant Anatomy Words to cross 50
            "TWIG", "BOUGH", "SPROUT", "SHOOT", "BUD", "BLOSSOM_TREE",
            "PETAL", "SEPAL", "STAMEN", "PISTIL", "POLLEN", "NECTAR",
            "SEED_POD", "CONE_PINE", "NEEDLE_PINE", "FROND", "FOLIAGE", "CANOPY_TREE",
            "SAP_TREE", "RESIN", "AMBER_NATURAL", "PITH", "CAMBIUM", "XYLEM",
            "PHLOEM", "STOMATA", "CHLOROPLAST", "BARK_OUTER", "ROOT_HAIR", "TAPROOT",
            "THORN", "PRICKLE", "SPINE_PLANT", "TENDRIL", "STIPULE", "NODE_PLANT",
            "INTERNODE", "RHIZOME", "BULB_PLANT", "TUBER", "CORM", "RUNNER_PLANT",
            "WOOD_GRAIN", "HEARTWOOD", "SAPWOOD"
        ]
    },
    {
        id: "buildings_vehicles",
        _innocentHints: [
            "Types of Houses, Buildings & Places to Live",
            "Civil Architecture, Residential Structures & Habitation Units",
            "Human Dwellings, Structural Real Estate & Shelters"
        ],
        _imposterHints: [
            "Vehicles, Transportation & Travel",
            "Mechanical Transportation, Transit Fleets & Mobile Logistics",
            "Locomotive Units, Transport Engineering & Logistics Craft"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "HOUSE", "APARTMENT", "CABIN", "CASTLE", "HOTEL", "COTTAGE", 
            "SKYSCRAPER", "BARN", "TOWER", "MANSION", "PALACE", "BUNGALOW", 
            "VILLA", "SHACK", "MUSEUM", "FACTORY", "SCHOOL", "HOSPITAL", 
            "STADIUM", "CHURCH", "OFFICE", "FORT", "LIBRARY", "STORE",
            // 77 Additional Building Type Words to cross 100
            "CONDOMINIUM", "TOWNHOUSE", "DUPLEX", "STUDIO_APT", "PENTHOUSE", "LOFT",
            "CHALET", "HACIENDA", "MONASTERY", "CONVENT", "ABBEY", "CATHEDRAL",
            "CHAPEL", "TEMPLE_BLDG", "MOSQUE", "SYNAGOGUE", "SHRINE", "PAGODA",
            "OBSERVATORY_BLDG", "PLANETARIUM", "AQUARIUM_BLDG", "AUDITORIUM", "THEATER_BLDG", "COLOSSEUM_BLDG",
            "WAREHOUSE", "DEPOT", "SILO", "GREENHOUSE", "CONSERVATORY", "BARRACKS",
            "ARMORY", "FORTRESS", "CITADEL", "GARRISON", "OUTPOST", "LIGHTHOUSE",
            "WINDMILL", "WATERMILL", "MOTEL", "INN", "HOSTEL", "LODGE",
            "RESORT_BLDG", "CASINO", "MALL", "SUPERMARKET", "BOUTIQUE", "BAKERY_BLDG",
            "RESTAURANT", "CAFETERIA_BLDG", "BARN_STABLE", "KENNEL_BLDG", "HOMESTEAD", "FARMHOUSE",
            "CHATEAU", "MANOR_HOUSE", "PALAZZO", "ALCAZAR", "FORTIFICATION", "BASTION",
            "BLOCKHOUSE", "BUNKER", "DUGOUT", "YURT", "TEEPEE", "IGLOO",
            "WIGWAM", "HUT", "LONGHOUSE", "PUEBLO", "CARAVANSERAI", "ROW_HOUSE",
            "TENEMENT", "BROWNSTONE", "ABBATOIR", "REFINERY", "POWERHOUSE"
        ],
        imposterWords: [
            // Original 6
            "TRAIN", "SHIP", "PLANE", "TRUCK", "BUS", "VAN",
            // 45 Additional Transportation Words to cross 50
            "AUTOMOBILE", "MOTORCYCLE_VEH", "BICYCLE_VEH", "SCOOTER_VEH", "SUBWAY_VEH", "HELICOPTER_VEH",
            "BOAT", "YACHT_VEH", "SUBMARINE_VEH", "FERRY_VEH", "TRAM_VEH", "AMBULANCE_VEH",
            "FIRE_ENGINE_VEH", "POLICE_CRUISER", "TRACTOR_VEH", "BULLDOZER_VEH", "LOCOMOTIVE_VEH", "SPACESHIP_VEH",
            "ROCKET_VEH", "GLIDER_VEH", "ZEPPELIN_VEH", "HOVERCRAFT_VEH", "HYDROFOIL_VEH", "JET_SKI",
            "SNOWMOBILE_VEH", "ATV_VEH", "SEGWAY_VEH", "GOLF_CART_VEH", "GO_KART_VEH", "STREETCAR_VEH",
            "MONORAIL_VEH", "CABLE_CAR_VEH", "TAXICAB", "LIMOUSINE_VEH", "PICKUP_VEH", "SEMI_TRAILER",
            "TANKER_VEH", "FLATBED_VEH", "CARAVAN_VEH", "MOTORHOME_VEH", "MOPED_VEH", "TROLLEY_VEH",
            "RICKSHAW_VEH", "ROWBOAT_VEH", "CANOE_VEH"
        ]
    },
    {
        id: "hobbies_professions",
        _innocentHints: [
            "Fun Hobbies, Arts & Crafts at Home",
            "Domestic Recreation, Leisure Pursuits & Creative Crafts",
            "Leisure Activities, Amateur Fine Arts & Creative Hobbies"
        ],
        _imposterHints: [
            "Jobs, Careers & Work Professions",
            "Professional Careers, Wage Occupations & Specialized Labor",
            "Commercial Workforce, Specialized Employment & Professional Sectors"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "PAINTING", "DRAWING", "KNITTING", "SEWING", "GARDENING", "BAKING", 
            "READING", "GAMING", "FISHING", "HIKING", "COOKING", "CAMPING", 
            "DANCING", "SINGING", "SKETCHING", "POTTERY", "ORIGAMI", "SCRAPBOOK", 
            "WEAVING", "WOODWORKING", "PHOTOGRAPHY", "CHESS", "PUZZLES", "RUNNING",
            // 77 Additional Hobby/Craft Words to cross 100
            "EMBROIDERY", "QUILTING", "CROCHET", "MACRAME", "LACE_MAKING", "FELTING",
            "SPINNING_WOOL", "CALLIGRAPHY", "SCULPTURE", "CARVING_HOBBY", "PYROGRAPHY", "GLASSBLOWING",
            "MOSAIC_CRAFT", "JEWELRY_MAKING", "BEADWORK", "BASKETRY", "BOOKBINDING", "LEATHERCRAFT",
            "MODEL_BUILDING", "DIORAMA", "PUPPET_MAKING", "UPCYCLING", "SCRAP_METAL_ART", "TAXIDERMY_AMATEUR",
            "BIRD_WATCHING", "ASTRONOMY_AMATEUR", "GEOCACHING", "METAL_DETECTING", "FORAGING", "ROCK_HOUNDING",
            "STAMP_COLLECTING", "COIN_COLLECTING", "ANTIQUE_HUNTING", "GENEALOGY", "SCRAPBOOKING", "JOURNALING_HOBBY",
            "CREATIVE_WRITING", "POETRY_COMPOSITION", "SONGWRITING_HOBBY", "ACTING_AMATEUR", "JUGGLING_HOBBY", "MAGIC_TRICKS",
            "BACKGAMMON", "CHECKERS_HOBBY", "BOARD_GAMES", "CARD_GAMES", "POKER_RECREATIONAL", "BILLIARDS",
            "BOWLING_HOBBY", "DARTS_HOBBY", "PING_PONG", "BADMINTON_RECREATION", "YOGA", "MEDITATION",
            "PILATES", "SKATEBOARDING", "ROLLER_SKATING_HOBBY", "CYCLING_RECREATION", "KAYAKING_HOBBY", "CANOEING_HOBBY",
            "SURFING_HOBBY", "PADDLEBOARDING", "SNORKELING", "SCUBA_DIVING_HOBBY", "SKIING_RECREATION", "SNOWBOARDING_HOBBY",
            "ICE_SKATING_RECREATION", "STREET_RUNNING", "JOGGING", "WALKING_FITNESS", "WEIGHTLIFTING_HOBBY", "BODYBUILDING_AMATEUR",
            "ARCHERY_RECREATION", "KITE_FLYING", "MODEL_ROCKETRY", "ROBOTICS_HOBBY", "ELECTRONICS_DIY"
        ],
        imposterWords: [
            // Original 6
            "DOCTOR", "LAWYER", "TEACHER", "NURSE", "POLICE", "CHEF",
            // 45 Additional Profession Words to cross 50
            "ENGINEER", "ARCHITECT", "ACCOUNTANT", "SCIENTIST", "PROFESSOR_WORK", "ASTRONAUT_WORK",
            "PILOT", "CAPTAIN_WORK", "OFFICER", "DETECTIVE", "FIREFIGHTER", "PARAMEDIC",
            "SURGEON", "DENTIST", "PHARMACIST", "VETERINARIAN", "PSYCHOLOGIST", "THERAPIST",
            "JOURNALIST", "REPORTER", "EDITOR_WORK", "AUTHOR", "PUBLISHER", "ARTIST_PROFESSIONAL",
            "DESIGNER", "PROGRAMMER", "DEVELOPER", "ANALYST", "CONSULTANT", "MANAGER",
            "DIRECTOR_CORP", "EXECUTIVE", "ADMINISTRATOR", "SECRETARY", "CLERK", "CASHIER",
            "ELECTRICIAN", "PLUMBER", "CARPENTER_PROF", "MECHANIC", "MACHINIST", "WELDER",
            "MASON", "CONTRACTOR", "SURVEYOR"
        ]
    },
    {
        id: "sweets_breakfast",
        _innocentHints: [
            "Desserts, Candy & Sweet Treats",
            "Confectionery Delights, After-Dinner Desserts & Sugar Confections",
            "Sugary Confections, Pastry Delicacies & Dessert Treats"
        ],
        _imposterHints: [
            "Morning Breakfast Foods & Drinks",
            "Matutinal Gastronomy, Morning Breakfast Buffets & Caffeinated Liquids",
            "Matinal Menu Items, Breakfast Skillets & Early Morning Refreshments"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "CAKE", "COOKIE", "DONUT", "CANDY", "CHOCOLATE", "ICE_CREAM", 
            "PIE", "BROWNIE", "CUPCAKE", "FUDGE", "PUDDING", "LOLLIPOP", 
            "MARSHMALLOW", "TOFFEE", "CARAMEL", "JELLYBEAN", "PASTRY", "TART", 
            "TRUFFLE", "GUMDROP", "LICORICE", "SHERBET", "SUNDAE", "WAFER",
            // 77 Additional Confectionery Words to cross 100
            "BONBON", "PRALINE", "GANACHE_CONFECTION", "NOUGAT", "BRITTLE_SWEET", "TOFFEE_APPLE",
            "COTTON_CANDY_SWEET", "PE peppermint", "SPEARMINT_SWEET", "WINTERGREEN_CANDY", "LEMON_DROP", "SOUR_PATCH",
            "GUMMY_BEAR", "GUMMY_WORM", "TAFFY", "FUDGE_BAR", "BUTTERSCOTCH", "PRALINE_PECAN",
            "MACARON", "MACAROON", "ECLAIR", "PROFITEROLE", "CHOUX", "BAKLAVA",
            "GELATO", "SORBET", "FROZEN_YOGURT", "POPSICLE", "ICE_POPO", "MILKSHAKE_CONFECTION",
            "MOUSSE", "SOUFFLE_SWEET", "PANNA_COTTA", "CREME_BRULEE", "FLAN", "CUSTARD_SWEET",
            "CHEESECAKE", "SPONGE_CAKE", "POUND_CAKE", "FRUITCAKE", "GINGERBREAD", "SHORTBREAD",
            "BISCUIT_SWEET", "AMARETTI", "BISCOTTI", "MERINGUE_SWEET", "PAVLOVA", "TRIFLE",
            "TIRAMISU", "CANNOLI", "CHURRO_SWEET", "SCONE_SWEET", "TURNOVER_SWEET", "DANISH_PASTRY",
            "CROISSANT_SWEET", "STRUDEL", "BLONDIE", "LAVA_CAKE", "MALT_BALLS", "BAR_CHOCOLATE",
            "WHITE_CHOCOLATE", "DARK_CHOCOLATE", "MILK_CHOCOLATE", "GANACHE_CAKE", "FROSTING_SWEET", "GLAZE_SWEET",
            "FONDANT", "MARZIPAN", "ROYAL_ICING", "SPRINKLES", "NONPAREILS", "CANDIED_FRUIT",
            "PRUNE_SWEET", "TURKISH_DELIGHT", "HALVA", "ROCK_CANDY", "CANDY_CANE"
        ],
        imposterWords: [
            // Original 6
            "WAFFLE", "PANCAKE", "TOAST", "CEREAL", "MILK", "COFFEE",
            // 45 Additional Breakfast Words to cross 50
            "OATMEAL", "PORRIDGE", "GRITS", "MUESLI", "GRANOLA", "YOGURT_BRK",
            "EGGS", "OMELET", "SCRAMBLED_EGGS", "POACHED_EGGS", "FRITTATA", "QUICHE",
            "BACON", "SAUSAGE", "HAM_BRK", "HASH_BROWNS", "HOME_FRIES", "CORND_BEEF_HASH",
            "BAGEL", "CREAM_CHEESE", "ENGLISH_MUFFIN", "BISCUITS_GRAVY", "CROISSANT_BRK", "MUFFIN",
            "FRUITS_BRK", "GRAPEFRUIT_HALF", "TEA_BRK", "ESPRESSO", "CAPPUCCINO", "LATTE",
            "JUICE_ORANGE", "JUICE_GRAPEFRUIT", "JUICE_APPLE", "SMOOTHIE_BRK", "HOT_CHOCOLATE_BRK", "WATER_BRK",
            "BREAKFAST_BURRITO", "FRENCH_TOAST", "SKILLET_BRK", "HOE_CAKES", "CREPES", "BENEDICT_EGGS",
            "SMOKED_SALMON", "LOX", "CHILAQUILES"
        ]
    },
    {
        id: "themepark_circus",
        _innocentHints: [
            "Amusement Parks, Rides & Carnivals",
            "Theme Park Entertainment, Mechanical Rollercoasters & Fairgrounds",
            "Amusement Infrastructures, Theme Attractions & Park Concessions"
        ],
        _imposterHints: [
            "The Circus, Acrobatics & Big Top Shows",
            "Circus Arena Artistry, Big Top Tents & Traveling Showmanship",
            "Big Top Arena Displays, Vintage Circus Acts & Ring Gymnastics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "ROLLERCOASTER", "FERRIS_WHEEL", "CAROUSEL", "ROLLER", "TICKET", "POPCORN", 
            "COTTON_CANDY", "SLIDE", "ARCADE", "SOUVENIR", "MONORAIL", "QUEUE", 
            "MASCOT", "PARADE", "WATER_SLIDE", "FAIRGROUND", "MIDWAY", "CHURRO", 
            "TOKEN", "BOARDWALK", "PRETZEL", "PLAZA", "FOUNTAIN", "GATES",
            // 77 Additional Theme Park Words to cross 100
            "LOG_FLUME", "DROP_TOWER", "BUMPER_CARS", "SWING_RIDE", "PIRATE_SHIP_RIDE", "HAUNTED_HOUSE",
            "FUNHOUSE", "MIRROR_MAZE", "DARK_RIDE", "DODGEMS", "GIGA_COASTER", "STRATA_COASTER",
            "INVERTED_COASTER", "WOODEN_COASTER", "LAUNCH_COASTER", "SHUTTLE_COASTER", "SPINNING_RIDE", "GRAVITRON",
            "SCRAMBLER_RIDE", "TILT_A_WHIRL", "OCTOPUS_RIDE", "WAVE_SWINGER", "ZIP_LINE", "SKY_RIDE",
            "MINIATURE_RAILWAY", "GO_KART_TRACK", "MINI_GOLF", "SHOOTING_GALLERY", "RING_TOSS", "BALLOON_DART",
            "WHACK_A_MOLE", "SKEEBALL", "CLAW_MACHINE", "PRIZE_BOOTH", "TICKET_CRUSHER", "TURNSTILE",
            "ADMISSION_PASS", "FAST_PASS", "WRISTBAND", "PARK_MAP", "INFORMATION_BOOTH", "FIRST_AID_STATION",
            "LOCKER_RENTAL", "STROLLER_RENTAL", "GIFT_SHOP", "CONCESSION_STAND", "ICE_CREAM_PARLOR", "HOT_DOG_STAND",
            "TURKEY_LEG_CART", "FUNNEL_CAKE_FRYER", "LEMONADE_STAND", "POPCORN_CART", "CANDY_PALACE", "RESTAURANT_THEMED",
            "CHARACTER_GREET", "STUNT_SHOW", "FIREWORKS_DISPLAY", "LASER_LIGHT_SHOW", "AMPHITHEATER_PARK", "MAIN_STREET",
            "ADVENTURE_LAND", "FANTASY_LAND", "TOMORROW_LAND", "FRONTIER_LAND", "CRITTER_COUNTRY", "TOON_TOWN",
            "WATER_PARK", "WAVE_POOL", "LAZY_RIVER", "SURF_SIMULATOR", "SPLASH_PAD", "DUMP_BUCKET",
            "LIFEGUARD_TOWER", "CABANA_RENTAL", "INNER_TUBE", "PARKING_LOT", "TRAM_STATION"
        ],
        imposterWords: [
            // Original 6
            "CLOWN", "TENT", "RINGMASTER", "ACROBAT", "JUGGLER", "TRAPEZE",
            // 45 Additional Circus Words to cross 50
            "BIG_TOP", "SIDE_SHOW", "FIRE_EATER", "SWORD_SWALLOWER", "CONTORTIONIST", "TIGHTROPE_WALKER",
            "STILT_WALKER", "UNICYCLIST_CIRCUS", "HUMAN_CANNONBALL", "STRONGMAN", "BEARDED_LADY", "FORTUNE_TELLER",
            "KNIFE_THROWER", "AERIALIST", "SILKS_PERFORMER", "HOOP_AERIALIST", "TRAMPOLINIST_CIRCUS", "TRAINED_LION",
            "TRAINED_TIGER", "TRAINED_ELEPHANT", "MONKEY_CIRCUS", "BEAR_CIRCUS", "HARRISON_SEAL", "DOG_ACT",
            "CIRCUS_RING", "SAWDUST_FLOOR", "BACKSTAGE_CIRCUS", "DRESSING_ROOM_TRAILER", "CIRCUS_TRAIN", "MENAGERIE",
            "CALLIOPE", "CIRCUS_BAND", "FANFARE", "DRUM_ROLL", "SPOTLIGHT_CIRCUS", "APPLAUSE_CIRCUS",
            "ROUGHHOUSE", "TENT_STAKE", "GUY_WIRE_CIRCUS", "NET_SAFETY", "CHALK_BAG", "ROUGE_CLOWN",
            "SNAKE_CHARMER", "LEOTARD", "TOP_HAT_RING"
        ]
    },
    {
        id: "animals_birds",
        _innocentHints: [
            "Land Mammals & Four-Legged Critters",
            "Terrestrial Zoology, Quadruped Mammals & Ground Wilderness",
            "Land Creatures, Wild Quadruped Mammals & Forest Fauna"
        ],
        _imposterHints: [
            "Flying Birds & Sky Animals",
            "Avian Zoology, Flying Aves Species & High Ornis",
            "Avian Ecosystems, Flying Plumed Vertebrates & Sky Fauna"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "DEER", "RABBIT", "SQUIRREL", "FOX", "WOLF", "BEAR", 
            "RACCOON", "OPOSSUM", "MOOSE", "SKUNK", "BADGER", "HEDGEHOG", 
            "BOBCAT", "COYOTE", "OTTER", "WEASEL", "MOLE", "CHIPMUNK", 
            "PANTHER", "JAGUAR", "CHEETAH", "PUMA", "BUFFALO", "BEAVER",
            // 77 Additional Land Mammal Words to cross 100
            "LION_LAND", "TIGER_LAND", "LEOPARD_LAND", "SNOW_LEOPARD", "CLOUDED_LEOPARD", "OUNCE_MAMMAL",
            "SERVAL", "OCELOT", "CARACAL", "LYNX_LAND", "WILD_CAT", "HYENA_LAND",
            "AARDWOLF", "MONGOOSE_LAND", "MEERKAT_LAND", "CIVET", "GENET", "BINTURONG",
            "JACKAL_LAND", "DINGO", "WILD_DOG", "DHOLE", "BUSH_DOG", "RACCOON_DOG",
            "GRIZZLY_BEAR", "POLAR_BEAR", "BLACK_BEAR", "PANDA_BEAR", "SPECTACLED_BEAR", "SUN_BEAR",
            "SLOTH_BEAR", "WOLVERINE_LAND", "MARTEN_LAND", "FISHER_MAMMAL", "MINK_LAND", "ERMINE_LAND",
            "POLECAT", "FERRET", "STOAT", "SABLE_MAMMAL", "BADGER_HONEY", "OTTER_RIVER",
            "SEA_OTTER_LAND", "TAPIR_LAND", "RHINOCEROS", "HIPPOPOTAMUS", "WARTHOG_LAND", "WILD_BOAR",
            "PECCARY_LAND", "BISON_LAND", "GAZELLE_LAND", "ANTELOPE_LAND", "IMPALA_LAND", "ORYX_LAND",
            "WILDEBEEST_LAND", "ELK_LAND", "CARIBOU_LAND", "REINDEER_LAND", "CHAMOIS_LAND", "IBEX_LAND",
            "ARGALI_LAND", "MOUFLON_LAND", "BIG_HORN_SHEEP", "MUSK_OX", "GIRAFFE_LAND", "OKAPI",
            "CAMEL_LAND", "LLAMA_LAND", "ALPACA_LAND", "GUANACO_LAND", "VICUNA_LAND", "ELEPHANT_LAND",
            "SLOTH_LAND", "ARMADILLO_LAND", "ANTEATER_LAND", "PANGOLIN_LAND", "KANGAROO_LAND"
        ],
        imposterWords: [
            // Original 6
            "EAGLE", "HAWK", "OWL", "ROBIN", "SPARROW", "PIGEON",
            // 45 Additional Bird/Avian Words to cross 50
            "FALCON", "VULTURE", "CONDOR", "OSPREY", "KESTREL", "MERLIN",
            "CROW", "RAVEN", "MAGPIE", "BLUE_JAY", "CARDINAL", "GOLD_FINCH",
            "FINCH", "CHICKADEE", "NUTHATCH", "WOODPECKER", "FLICKER", "HUMMINGBIRD",
            "SWALLOW", "SWIFT", "MARTIN", "DOVE", "MOURNING_DOVE", "PARROT",
            "PARAKEET", "MACAW", "COCKATOO", "COCKATIEL", "CANARY", "SEAGULL",
            "ALBATROSS", "PELICAN", "CORMORANT", "GANNET", "HERON", "EGRET",
            "STORK", "FLAMINGO", "SWAN", "GOOSE_SKY", "DUCK_SKY", "MALLARD",
            "TEAL_BIRD", "CANVASBACK", "PINTAIL"
        ]
    },
    {
        id: "tools_weapons",
        _innocentHints: [
            "Hand Tools, Hardware & Workbench Items",
            "Manual Hardware, Carpentry Toolsets & Workshop Equipment",
            "Mechanical Hand Tools, Bench Hardware & Carpenter Instruments"
        ],
        _imposterHints: [
            "Ancient Weapons, Armor & Castles",
            "Medieval Weaponry, Defensives Arrays & Knight Armor",
            "Feudal Weaponry, Historical Siege Gear & Knight Ballistics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "HAMMER", "SCREWDRIVER", "PLIERS", "WRENCH", "SAW", "DRILL", 
            "SANDPAPER", "TAPE_MEASURE", "LEVEL", "CHISEL", "CLAMP", "FILE", 
            "SCRAPER", "MALLET", "VISE", "ROUTER", "ANVIL", "GRINDER", 
            "SQUARE", "TOOLBOX", "PUNCH", "SHEARS", "BRUSH", "CROWBAR",
            // 77 Additional Hand Tool Words to cross 100
            "ALLEN_WRENCH", "SOCKET_WRENCH", "RATCHET", "TORQUE_WRENCH", "PIPE_WRENCH", "MONKEY_WRENCH",
            "ADJUSTABLE_WRENCH", "NEEDLE_NOSE_PLIERS", "LOCKING_PLIERS", "WIRE_CUTTERS", "BOLT_CUTTERS", "HACKSAW_TOOL",
            "COPING_SAW_TOOL", "CROSSCUT_SAW", "RIP_SAW", "KEYHOLE_SAW", "BACK_SAW", "MITER_SAW_MAN",
            "BLOCK_PLANE", "JACK_PLANE", "SMOOTHING_PLANE", "SPOKESHAVE", "WOOD_RASP", "METAL_FILE",
            "COLD_CHISEL", "MORTISE_CHISEL", "GOUGE_TOOL", "AWL_TOOL", "CENTER_PUNCH", "PIN_PUNCH",
            "PUTTY_KNIFE", "UTILITY_KNIFE", "POCKET_KNIFE_TOOL", "SCALPEL_TOOL", "TIN_SNIPS", "AVIATION_SNIPS",
            "PRUNING_SHEARS", "HEDGE_SHEARS", "LOPPERS", "GARDEN_TROWEL", "SPADE_TOOL", "SHOVEL",
            "PICKAXE", "MATTOCK", "HOE_TOOL", "RAKE", "PITCHFORK", "SLEDGEHAMMER",
            "BALL_PEEN_HAMMER", "CLAW_HAMMER", "BRAD_AWL", "HAND_DRILL", "BRACE_BIT", "AUGER_BIT",
            "COUNTERSINK", "TAP_WRENCH", "DIE_STOCK", "SCREW_EXTRACTOR", "C_CLAMP", "BAR_CLAMP",
            "SPRING_CLAMP", "MITER_CLAMP", "BENCH_VISE", "PIPE_VISE", "OIL_STONE", "WATER_STONE",
            "CAULKING_GUN", "GREASE_GUN", "STAPLE_GUN", "SOLDERING_COPPER", "WIRE_BRUSH", "SCRUB_BRUSH",
            "PAINT_ROLLER", "PALETTE_KNIFE_TOOL", "SPONGE_TOOL", "PLUMB_BOB", "CHALK_LINE"
        ],
        imposterWords: [
            // Original 6
            "SWORD", "SHIELD", "SPEAR", "BOW", "ARROW", "ARMOR",
            // 45 Additional Medieval Weapon Words to cross 50
            "CROSSBOW", "QUIVER", "MACE", "MORNING_STAR", "WAR_HAMMER", "BATTLE_AXE",
            "HALBERD", "PIKE_WEAPON", "LANCE", "DAGGER", "DIRK", "STILETTOR",
            "POLEAXE", "GLAIVE", "BILLHOOK", "FALCHION", "SCIMITAR", "BROADSWORD",
            "LONGROWSWORD", "RAPIER", "SABRE", "CUTLASS", "CLAYMORE", "FLAMBERGE",
            "GAUNTLET", "HELMET_ARMOR", "BREASTPLATE", "CUIRASS", "GREAVES", "VAMBRACE",
            "PAULDRON", "GORGET", "SABATON", "CHAINMAIL", "HAUBERK", "GAMBESON",
            "BRIGANDINE", "PLATE_ARMOR", "TREBUCHET", "CATAPULT", "BALLISTA", "BATTERING_RAM",
            "SIEGE_TOWER", "CALTROP", "LONGBOW"
        ]
    },
    {
        id: "weather_disasters",
        _innocentHints: [
            "Normal Daily Weather & Sky States",
            "Standard Meteorology, Tropospheric Atmosphere & Atmospheric Trends",
            "Ambient Air Conditions, Normal Sky Formations & Forecast Tones"
        ],
        _imposterHints: [
            "Natural Disasters & Emergency Situations",
            "Catastrophic Tectonic Shifts, Force Majeure Events & Geoclimate Crises",
            "Severe Crisis Environments, Extreme Climate Cataclysms & Tectonic Events"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SUNNY", "RAINY", "CLOUDY", "WINDY", "SNOWY", "FOGGY", 
            "MISTY", "DAMP", "BREEZY", "CHILLY", "WARM", "HOT", 
            "COLD", "SHOWERS", "DRIZZLE", "HUMID", "OVERCAST", "CLEAR", 
            "FROSTY", "MILD", "SHADE", "GALE", "DEW", "RAINBOW",
            // 77 Additional Weather Words to cross 100
            "BALMY", "MUGGY", "SULTRY_WEA", "STIFLING", "SCORCHING", "BLISTERING",
            "FREEZING", "BITTER", "RAW_WEA", "FRIGID", "BRISK", "FRESH_WEA",
            "FAIR_WEA", "FINE_WEA", "BRIGHT", "HAZY_WEA", "SMOGGY", "DRIZZLING",
            "POURING", "PELTING", "STORMY_WEA", "BLUSTERY", "GUSTY", "SQUALLY",
            "THUNDERY", "LIGHTNING_WEA", "HAILING", "SLEETING", "SNOWING", "FLURRIES",
            "DRIFTING_SNOW", "FROST_BITE", "HOAR_FROST", "RIME_FROST", "DEW_DROP", "MIST_CLOUD",
            "SEA_FOG", "GROUND_FOG", "HAZE_SMOKE", "CIRRUS", "CUMULUS", "STRATUS",
            "NIMBUS", "CUMULONIMBUS", "ALTOCUMULUS", "ALTOSTRATUS", "CIRROCUMULUS", "CIRROSTRATUS",
            "STRATOCUMULUS", "THERMALS_WEA", "AIR_CURRENT", "SEA_BREEZE_WEA", "LAND_BREEZE", "TRADE_WIND",
            "ZEPHYR", "CHINOOK", "MISTRAL", "SIROCCO", "MONSOON_WEA", "EQUINOX_WEA",
            "SOLSTICE_WEA", "TWILIGHT_WEA", "GLOAMING", "DAWN_WEA", "DUSK_WEA", "SUNRISE_WEA",
            "SUNSET_WEA", "DAYLIGHT_WEA", "SUNBEAM_WEA", "SUNSHINE_WEA", "MOONLIGHT", "STARLIGHT",
            "BAROMETRIC", "HUMIDITY_WEA", "PRESSURE_WEA", "TEMPERATURE_WEA", "CLIMATE_WEA", "FORECAST_WEA"
        ],
        imposterWords: [
            // Original 6
            "EARTHQUAKE", "VOLCANO", "FLOOD", "TSUNAMI", "AVALANCHE", "WILDFIRE",
            // 45 Additional Natural Disaster Words to cross 50
            "TORNADO", "HURRICANE", "TYPHOON", "CYCLONE", "BLIZZARD_DISASTER", "DROUGHT",
            "FAMINE", "LANDSLIDE", "MUDSLIDE", "SINKHOLE", "LAHAR", "PYROCLASTIC_FLOW",
            "VOLCANIC_ERUPTION", "ASH_CLOUD", "AFTERSHOCK", "TREMOR_EARTH", "EPICENTER", "FAULT_LINE",
            "STORM_SURGE", "FLASH_FLOOD", "MONSOON_DISASTER", "SANDSTORM", "DUST_STORM", "HABOOB",
            "SQUALL_LINE", "SUPERCELL", "WATER_SPOUT", "HAIL_STORM_CRISIS", "ICE_STORM", "HEAT_WAVE_CRISIS",
            "SOLAR_FLARE_DISASTER", "METEOR_STRIKE", "IMPACT_CRISIS", "LIMNIC_ERUPTION", "BLIGHT", "LOCUST_SWARM",
            "EPIDEMIC", "PANDEMIC", "WILDFIRE_BLAZE", "FOREST_FIRE", "BUSH_FIRE", "DEFOLIATION_CRISIS",
            "TIDAL_WAVE", "MAGMA", "LAVA_FLOW"
        ]
    },
    {
        id: "bugs_reptiles",
        _innocentHints: [
            "Insects, Bugs & Backyard Creepy Crawlies",
            "Backyard Entomology, Insect Classifications & Invertebrate Bugs",
            "Invertebrate Hexapods, Arthropod Bugs & Micro-Fauna"
        ],
        _imposterHints: [
            "Reptiles, Amphibians & Swamp Animals",
            "Herpetological Wildlife, Cold-Blooded Vertebrates & Swamp Fauna",
            "Cold-Blooded Herpetofauna, Reptilian Scaling & Amphibious Organisms"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "ANT", "BEE", "BEETLE", "BUTTERFLY", "DRAGONFLY", "CATERPILLAR", 
            "MOSQUITO", "CRICKET", "GRASSHOPPER", "LADYBUG", "WASP", "MOTH", 
            "FLY", "TERMITE", "FLEA", "TICK", "CICADA", "FIREFLY", 
            "ROACH", "MANTIS", "HORNET", "GNAT", "APHID", "WEEVIL",
            // 77 Additional Insect/Bug Words to cross 100
            "STINK_BUG", "SHIELD_BUG", "ASSASSIN_BUG", "BED_BUG", "WATER_STRIDER", "BACKSWIMMER",
            "CICADA_BUG", "LEAFHOPPER", "PLANTHOPPER", "SPITTLEBUG", "SCALE_INSECT", "MEALYBUG",
            "WHITEFLY", "THRIPS", "EARWIG", "SILVERFISH", "FIREBRAT", "BOOKLOUSE",
            "BARKLOUSE", "MAYFLY", "STONEFLY", "CADDISFLY", "LACEWING", "ANTLION",
            "DOBSONFLY", "ALDERFLY", "SCORPIONFLY", "FLEA_BEETLE", "STAG_BEETLE", "RHINOCEROS_BEETLE",
            "DUNG_BEETLE", "SCARAB_BEETLE", "WEEVIL_BEETLE", "LONGHORN_BEETLE", "LEAF_BEETLE", "GROUND_BEETLE",
            "ROVE_BEETLE", "WATER_BEETLE", "GLOW_WORM", "MEALWORM", "SILKWORM", "MAGGOT",
            "GRUB", "CHRYSALIS", "COCOON", "PUPA", "LARVA", "NYMPH_INSECT",
            "EGG_INSECT", "HONEYBEE", "BUMBLEBEE", "CARPENTER_BEE", "YELLOWJACKET", "MUD_DAUBER",
            "HORNET_WASP", "GALL_WASP", "ICHNEUMON", "FRUIT_FLY", "BLOW_FLY", "HOUSE_FLY",
            "HORSE_FLY", "DEER_FLY", "STABLE_FLY", "MIDGE", "BLACK_FLY", "SAND_FLY",
            "CRANE_FLY", "MAYFLY_BUG", "DAMSELFLY", "ROACH_BUG", "MANTID", "STICK_INSECT"
        ],
        imposterWords: [
            // Original 6
            "SNAKE", "LIZARD", "TURTLE", "FROG", "TOAD", "ALLIGATOR",
            // 45 Additional Reptile/Amphibian Words to cross 50
            "CROCODILE", "CAIMAN", "GHARIAL", "TORTOISE", "TERRAPIN", "SEA_TURTLE",
            "CHAMELEON", "GECKO", "IGUANA", "MONITOR_LIZARD", "KOMODO_DRAGON", "SKINK",
            "ANREOLE", "CHUCKWALLA", "GILA_MONSTER", "BEARDED_DRAGON", "PYTHON", "BOA_CONSTRICTOR",
            "VIPER", "COBRA", "RATTLESNAKE", "MAMBA", "ADDER", "GARTER_SNAKE",
            "BULL_SNAKE", "COPPERHEAD", "COTTONMOUTH", "SEA_SNAKE", "SALAMANDER", "NEWT",
            "AXOLOTL", "MUDPUPPY", "HELLBENDER", "CAECILIAN", "TREE_FROG", "BULLFROG",
            "POISON_DART_FROG", "TOAD_ANATOMY", "TADPOLE", "SPADEFOOT", "HORNED_TOAD", "TUATARA",
            "REPTILIAN", "AMPHIBIOUS", "COLD_BLOODED"
        ]
    },
    {
        id: "ocean_beach",
        _innocentHints: [
            "Deep Ocean Environment & Open Water",
            "Oceanic Hydrography, Pelagic Ocean Abysses & Marine Science",
            "Abyssal Waters, Deep Maritime Currents & Pelagic Environments"
        ],
        _imposterHints: [
            "Sandy Beaches, Coastal Towns & Resorts",
            "Littoral Coasts, Sandy Recreation Tones & Shoreline Leisure",
            "Coastal Waterfront Resorts, Shoreline Leisure & Sandy Sunbathing"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "WAVE", "CURRENT", "TIDE", "CORAL", "REEF", "SEAWEED", 
            "ABYSS", "TRENCH", "ISLAND", "SURF", "WATER", "SALT", 
            "ICEBERG", "BAY", "GULF", "STRAIT", "SHORELINE", "DEPTHS", 
            "FOAM", "SPRAY", "HARBOR", "FLOOD", "SHELF", "CAPTAIN",
            // 77 Additional Open Ocean Words to cross 100
            "PELAGIC", "BENTHIC", "ABYSSAL", "HADAL", "BATHYAL", "NERITIC",
            "OCEANIC", "HYDROTHERMAL_VENT", "SEAMOUNT", "MID_OCEAN_RIDGE", "SUBMARINE_CANYON", "CONTINENTAL_SLOPE",
            "CONTINENTAL_RISE", "OCEAN_BASIN", "GYRE", "UPWELLING_WATER", "DOWNWELLING", "THERMOCLINE_OCEAN",
            "HALOCLINE_OCEAN", "SALINITY_OCEAN", "PRESSURE_DEEP", "SONAR_PULSE", "BATHYSCAPHE_CRAFT", "SUBMERSIBLE_DEEP",
            "ROV_DEEP", "AUV_DEEP", "OCEANOGRAPHY", "MARINE_BIOLOGY", "PLANKTON_OCEAN", "PHYTOPLANKTON_OCEAN",
            "ZOOPLANKTON_OCEAN", "KRILL_OCEAN", "KELP_FOREST", "SARGASSUM", "ALGAL_BLOOM", "BIOLUMINESCENCE",
            "DEEP_SEA_FISH", "ANGLER_FISH", "VIPER_FISH", "GULPER_EEL", "GIANT_SQUID", "COLOSSAL_SQUID",
            "NAUTILUS_OCEAN", "COELACANTH", "WHALE_SHARK", "MEGAMOUTH_SHARK", "MANTA_RAY", "STINGRAY",
            "OCTOPUS_DEEP", "JELLYFISH_OCEAN", "SIPHONOPHORE_OCEAN", "PORTUGUESE_MAN_O_WAR", "SEA_ANEMONE_OCEAN", "BRITTLE_STAR_OCEAN",
            "SEA_CUCUMBER_OCEAN", "CRINOID", "SPONGE_OCEAN", "TUNICATE_OCEAN", "POD_WHALES", "SCHOOL_FISH",
            "MIGRATION_OCEAN", "SWELL_OCEAN", "TSUNAMI_WAVE_OCEAN", "UNDERTOW_OCEAN", "RIP_CURRENT", "MAELSTROM",
            "WHIRLPOOL", "BRINE_POOL", "METHANE_SEEP", "BLACK_SMOKER", "WHITE_SMOKER", "FLOE_ICE",
            "PACK_ICE", "POLYNYA", "OCEAN_SURFACE", "OPEN_OCEAN", "UNCHARTED_WATERS"
        ],
        imposterWords: [
            // Original 6
            "SAND", "TOWEL", "UMBRELLA", "SHELL", "SUNSCREEN", "CHAIR",
            // 45 Additional Beach/Resort Words to cross 50
            "BEACH_BALL_RES", "PARASOL_BEACH", "DECK_CHAIR", "CABANA_BEACH", "HAMMOCK_BEACH", "BOARDWALK_BEACH",
            "PIER_BEACH", "JETTY_BEACH", "SAND_CASTLE", "BUCKET_SPADE_BEACH", "SUNBATHING", "SUNTAN_LOTION",
            "SUNGLASSES", "FLIP_FLOPS", "SWIMSUIT", "TRUNKS_SWIM", "BIKINI", "RASH_GUARD",
            "BEACH_TOWEL", "COOLER_BEACH", "ICE_CHEST_BEACH", "FRISBEE_BEACH", "SAND_DUNE_BEACH", "SEA_SHELL",
            "CONCH_SHELL", "COASTAL_RESORT", "BEACHFRONT", "WATERFRONT_RES", "LAGOON_BEACH", "TIDE_POOL_BEACH",
            "SHORE_BIRD", "SANDPIPER", "SEAGULL_BEACH", "CRAB_BEACH", "HERMIT_CRAB_BEACH", "BEACH_RECREATION",
            "SURFBOARD", "BOOGIE_BOARD", "WETSUIT", "LIFESAVER_BUOY", "LIFEGUARD", "SUNNY_BEACH",
            "VACATION_BEACH", "PROMENADE", "BEACH_BAR"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 6 / 10) ---
// Total Words in this module: ~250 words across 10 simplified, everyday crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 6)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "cleaning_cooking",
        _innocentHints: [
            "Cleaning the House & Washing Up",
            "Domestic Sanitation, Household Janitorial Tasks & Scrubbing",
            "Residential Maintenance, Sanitation Tools & Housekeeping Work"
        ],
        _imposterHints: [
            "Cooking Dinner & Kitchen Prep",
            "Culinary Meal Preparation, Kitchen Appliance Usage & Baking",
            "Gastronomic Cooking, Food Prep Station Work & Culinary Arts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "BROOM", "MOP", "SPONGE", "VACUUM", "BUCKET", "SOAP", 
            "DUSTER", "BLEACH", "TRASHCAN", "RAG", "BRUSH", "WIPES", 
            "DETERGENT", "SCRUBBER", "SQUEEGEE", "GLOVES", "SPRAY", "HAMPER", 
            "SINK", "DRAIN", "GARBAGE", "PLUNGER", "TOWEL", "LAUNDRY",
            // 77 Additional Cleaning/Sanitation Words to cross 100
            "SCRUB_BRUSH", "DUSTPAN", "WHISK_BROOM", "FEATHER_DUSTER", "MICROFIBER", "CHAMOIS_CLOTH",
            "SCOURING_PAD", "STEEL_WOOL", "PUMICE_STONE", "GARBAGE_BAG", "LINER_BAG", "RECYCLING_BIN",
            "COMPOST_BIN", "DISINFECTANT", "AMMONIA", "VINEGAR_CLEAN", "BAKING_SODA_CLEAN", "BORAX",
            "SANUTIZER", "DEGREASER", "DESCALER", "POLISH_FURNITURE", "WAX_FLOOR", "TURPENTINE",
            "LAUNDRY_POD", "FABRIC_SOFTENER", "STAIN_REMOVER", "STARCH_SPRAY", "WASHING_MACHINE", "CLOTHES_DRYER",
            "LAUNDRY_BASKET", "CLOTHESLINE", "CLOTHESPINS", "DRYING_RACK", "IRONING_BOARD", "STEAMER_FABRIC",
            "DISHWASHER", "DISH_SOAP", "RINSE_AID", "AIR_FRESHENER", "DEODORIZER", "COMBO_CLEANER",
            "SCRUB_CADDY", "APRON_CLEAN", "WORK_BOOTS_RUBBER", "FACE_MASK_CLEAN", "RESPIRATOR", "SPRAY_BOTTLE",
            "PRESSURE_WASHER", "CAR_WASH_SOAP", "WINDOW_CLEANER", "CARPET_SHAMPOOER", "FLOOR_BUFFER", "STEAM_MOP",
            "LINT_ROLLER", "TOILET_BRUSH", "RUBBER_SCRAPER", "DRAIN_SNAKE", "CHEMICAL_OPENER", "SEPTIC_TREATMENT",
            "SWEEPER", "MOP_WRINGER", "WATER_PAIL", "SPONGE_MOP", "DUST_MITE_SPRAY", "MOTHBALLS",
            "SCRUBBING_POWDER", "OVEN_CLEANER_SOLUTION", "GLASS_STOVE_CLEANER", "BRASS_POLISH", "SILVER_DIP", "LEATHER_CREAM",
            "WOOD_SOAP", "TILE_CLEANER", "GROUT_BRUSH", "WALL_ERASER", "WASTE_BASKET"
        ],
        imposterWords: [
            // Original 6
            "POT", "PAN", "KNIFE", "BLENDER", "OVEN", "MIXER",
            // 45 Additional Cooking/Kitchen Prep Words to cross 50
            "SKILLET", "WOK", "SAUCEPAN", "GRIDDLE", "BROILER", "ROASTER",
            "SPATULA", "WHISK", "LADLE", "TONGS", "PEELER", "GRATER",
            "COLANDER", "STRAINER", "ROLLING_PIN", "CHOPPING_BOARD", "CLEAVER", "PARING_KNIFE",
            "TOASTER", "MICROWAVE", "STOVE_TOP", "CROCKPOT", "AIR_FRYER", "FOOD_PROCESSOR",
            "JUICER", "COFFEE_GRINDER", "STAND_MIXER", "HAND_MIXER", "SCALES_KITCHEN", "MEASURING_CUP",
            "MEASURING_SPOON", "THERMOMETER_MEAT", "TIMER_KITCHEN", "GARLIC_PRESS", "POTATO_MASHER", "EGG_SEPARATOR",
            "SKEWER", "ZESTER", "CORER", "PITTER", "PASTRY_BRUSH", "BOTTLE_OPENER",
            "CAN_OPENER", "CORKSCREW", "NUTCRACKER"
        ]
    },
    {
        id: "grocery_farm",
        _innocentHints: [
            "Supermarket Sections & Grocery Shopping",
            "Commercial Grocery Retail, Supermarket Aisles & Food Supplies",
            "Consumer Retail Food Markets, Grocery Stores & Provisions Shopping"
        ],
        _imposterHints: [
            "Country Farms, Barns & Agriculture",
            "Agrarian Cultivation, Rural Homesteads & Agricultural Logistics",
            "Rural Agriculture, Crop Cultivation & Livestock Farming"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "AISLE", "CART", "BASKET", "CHECKOUT", "RECEIPT", "SHELF", 
            "SCANNER", "CASHIER", "FREEZER", "PRICE", "BARCODE", "COUPON", 
            "BAKERY", "DELI", "PRODUCE", "CAN", "JAR", "BAG", 
            "COUNTER", "REGISTER", "GROCER", "SCALES", "TOTAL", "CHANGE",
            // 77 Additional Supermarket Words to cross 100
            "SUPERMARKET", "CONVENIENCE_STORE", "BODEGA", "MARKETPLACE", "FOOD_BAZAAR", "WHOLESALER",
            "BULK_BIN", "ENDCAP", "REFRIGERATOR_CASE", "DAIRY_Aisle", "FROZEN_FOODS", "MEAT_COUNTER",
            "SEAFOOD_DEPT", "CANNED_GOODS", "BAKING_AISLE", "SNACK_SECTION", "BEVERAGE_Aisle", "CONDIMENT_ROW",
            "CEREAL_BOXES", "CONFECTIONERY_STAND", "PHARMACY_DEPT", "FLORAL_SECTION", "CUSTOMER_SERVICE", "EXPRESS_LANE",
            "SELF_CHECKOUT", "CONVEYOR_BELT", "LOYALTY_CARD", "GIFT_CARD", "PRICE_TAG", "DISCOUNT_STICKER",
            "SALES_CIRCULAR", "SHOPPING_LIST", "REUSABLE_BAG", "PAPER_BAG", "PLASTIC_BAG", "CART_CORRAL",
            "STORE_MANAGER", "STOCK_CLERK", "BAGGER", "BUTCHER", "BAKER_RETAIL", "FISHMONGER",
            "DELI_SLICER", "SCANNER_GUN", "RECEIPT_PRINTER", "CARD_READER", "PIN_PAD", "CASH_DRAWER",
            "ROLLING_BASKET", "DISPLAY_CASE", "PRODUCE_MISTER", "ICE_CHEST_STORE", "CONVEYOR_DIVIDER", "PLASTIC_WRAP_PACK",
            "NET_BAG", "CARTON", "TIN_FOIL_PACK", "BOX_PACK", "POUCH_PACK", "SQUEEZE_BOTTLE",
            "UPC_SYMBOL", "EXPIRATION_DATE", "BEST_BEFORE", "BATCH_CODE", "NUTRITION_LABEL", "INGREDIENTS_LIST",
            "UNIT_PRICE", "TAX_GROCERY", "SUBTOTAL", "VENDING_MACHINE", "STORE_FRONT", "LOADING_DOCK_RETAIL",
            "PALLET_JACK_STORE", "STOCK_ROOM", "FREEZER_WALK_IN", "COOLER_WALK_IN", "SHELF_DIVIDER"
        ],
        imposterWords: [
            // Original 6
            "TRACTOR", "BARN", "SILO", "FIELD", "COW", "CROP",
            // 45 Additional Farming Words to cross 50
            "HARVESTER", "PLOW", "ARROW_PLOW", "SEEDER", "BALER", "COMBINE_FARM",
            "THRESHER", "IRRIGATION", "WINDMILL_FARM", "HOMESTEAD_FARM", "FARMHOUSE_BLDG", "STABLE",
            "COW_SHED", "PIGSTY", "HEN_HOUSE", "COOP", "GRANARY", "HAYLOFT",
            "PASTURE", "MEADOW", "ORCHARD", "VINEYARD", "PADDOCK", "CORRAL_FARM",
            "LIVESTOCK", "BULL_FARM", "STEER_FARM", "HORSE_FARM", "PIG_FARM", "SHEEP_FARM",
            "GOAT_FARM", "CHICKEN_FARM", "ROOSTER_FARM", "TURKEY_FARM", "DUCK_FARM", "HAY_BALE",
            "STRAW", "FEED_BAG", "FERTILIZER", "PESTICIDE", "SCARECROW", "SCYTHE",
            "SICKLE", "PITCHFORK_FARM", "WHEELBARROW"
        ]
    },
    {
        id: "fairytale_history",
        _innocentHints: [
            "Fairy Tales, Magic & Storybooks",
            "Fictional Folklore, Fantasy Literature & Mythological Legends",
            "Fantasy Mythos, Childrens Lore & Magical Fables"
        ],
        _imposterHints: [
            "Real Ancient History & Museums",
            "Archival Historiography, Archaeological Discoveries & Historical Artifacts",
            "Classical Archaeology, Actual Antiquity & Museum Exhibits"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "DRAGON", "WIZARD", "FAIRY", "SPELL", "POTION", "WAND", 
            "CASTLE", "PRINCESS", "PRINCE", "GOBLIN", "GIANT", "TROLL", 
            "ELF", "UNICORN", "MERMAID", "GHOST", "GOWN", "CROWN", 
            "CURSE", "FABLE", "LEGEND", "KNIGHT", "HERO", "BEAST",
            // 77 Additional Fairy Tale Words to cross 100
            "WITCH", "SORCERER", "MAGE", "ENCHANTER", "WARLOCK", "NECROMANCER",
            "PIXIE", "SPRITE", "GNOME", "LEPRECHAUN", "DRYAD", "NYMPH_MYTH",
            "SYLPH", "PEGASUS", "GRIFFIN", "PHOENIX", "CHIMERA", "HYDRA_MYTH",
            "CENTAUR", "MINOTAUR", "SATYR", "FAUN", "VALKYRIE", "BANSHEE",
            "OGRE", "GARGOYLE", "GOLEM", " werewolf", "VAMPIRE", "ZOMBIE_MYTH",
            "KING", "QUEEN", "EMPEROR", "EMPRESS", "DUKE", "DUCHESS",
            "BARON", "COURT_JESTER", "SQUIRE", "PALADIN", "VILLAIN", "STEPMOTHER_EVIL",
            "GODMOTHER_FAIRY", "WOODCUTTER", "MILLER_FABLE", "BLACKSMITH_FABLE", "SHEPHERD_BOY_FABLE", "MERMAN",
            "TALISMAN", "AMULET", "INCANTATION", "HEX", "CHARM_SPELL", "SORCERY",
            "MAGIC_CARPET", "CRYSTAL_BALL", "FLYING_BROOMSTICK", "CLOAK_INVISIBILITY", "SEVEN_LEAGUE_BOOTS", "GOLDEN_EGG",
            "POISON_APPLE", "SPINDLE", "GLASS_SLIPPER", "PUMPKIN_COACH", "BEANSTALK", "TOWER_RAPUNZEL",
            "ENCHANTED_FOREST", "FAIRY_RING", "MYTHOLOGY", "FOLKLORE", "ALLEGORY", "STORYBOOK",
            "ONCE_UPON_A_TIME", "HAPPILY_EVER_AFTER", "GRIMM", "ANDERSEN", "AESOP"
        ],
        imposterWords: [
            // Original 6
            "STATUE", "MUMMY", "COIN", "SHIELD", "SWORD", "RUINS",
            // 45 Additional Ancient History Words to cross 50
            "ARTIFACT", "RELIC", "ANTIQUITY", "SKELETON_ARCH", "SARCOPHAGUS", "HIEROGLYPH",
            "CUNEIFORM", "PAPYRUS", "SCROLL_HISTORY", "PARCHMENT_HIST", "POTSHERD", "AMPHORA",
            "INSCRIPTION", "MONUMENT", "OBELISK", "PYRAMID", "ZIGGURAT", "AMPHITHEATER_HIST",
            "AQUEDUCT", "COLOSSEUM", "PARTHENON", "FORUM", "CATACOMB", "TOMBS",
            "EXCAVATION", "DIG_SITE", "ARCHAEOLOGIST", "HISTORIAN", "CURATOR", "ARCHIVE_BLDG",
            "MUSEUM_CASE", "FOSSIL", "ARROWHEAD_STONE", "SPEARHEAD", "ARMOR_PIECE", "HELMET_HIST",
            "CHARIOT", "CATAPULT_HIST", "SIEGE_TOWER_HIST", "TEMPLE_RUINS", "ACROPOLIS", "NECROPOLIS",
            "PETROGLYPH", "PICTOGRAPH", "CHRONICLE"
        ]
    },
    {
        id: "city_nature",
        _innocentHints: [
            "Big City Life, Streets & Downtown",
            "Metropolitan Infrastructure, Urban Centers & City Spaces",
            "Urban Metropolises, City Grid Systems & Downtown Architecture"
        ],
        _imposterHints: [
            "Wild Nature, Forests & Mountains",
            "Wilderness Geography, Forest Ecosystems & Wilderness Landscapes",
            "Natural Ecosystems, Mountain Topography & Forest Biology"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SIDEWALK", "TRAFFIC", "SUBWAY", "SKYSCRAPER", "ALLEY", "CROSSWALK", 
            "STREETLIGHT", "HIGHWAY", "BILLBOARD", "TAXI", "BUS_STOP", "SIREN", 
            "AVENUE", "PLAZA", "PARKING", "BLOCK", "CORNER", "ROOFTOP", 
            "LANE", "METRO", "BRIDGE", "TUNNEL", "CROWD", "TOWER",
            // 77 Additional Urban City Words to cross 100
            "METROPOLIS", "MEGALOPOLIS", "DOWNTOWN", "MIDTOWN", "UPTOWN", "SUBURB",
            "GHETTO", "CONCOURSE", "BOULEVARD", "EXPRESSWAY", "FREEWAY", "INTERSTATE",
            "PARKWAY", "DRIVEWAY", "OVERPASS", "UNDERPASS", "VIADUCT", "SKYWALK",
            "BOARDWALK_CITY", "PROMENADE_CITY", "COURTYARD", "SQUARE_CITY", "COMMERCIAL_DISTRICT", "FINANCIAL_DISTRICT",
            "INDUSTRIAL_PARK", "RESIDENTIAL_AREA", "SLUM", "HOUSING_PROJECT", "CONDOMINIUM_CITY", "APARTMENT_COMPLEX",
            "OFFICE_PARK", "BUSINESS_CENTER", "SHOPPING_MALL", "ARCADE_CITY", "TRAIN_STATION", "BUS_TERMINAL",
            "SUBWAY_STATION", "RAILWAY_YARD", "AIRPORT_TERMINAL", "HARBOR_CITY", "PORT_CITY", "PIER_CITY",
            "FIRE_HYDRANT", "PARKING_METER", "TRAFFIC_LIGHT", "STOP_SIGN", "NEWSSTAND", "KIOSK",
            "BENCH_CITY", "TRASH_RECEPTACLE", "GRAFFITI_WALL", "BILLBOARD_SIGN", "NEON_SIGN", "STREET_BANNER",
            "MANHOLE_COVER", "STORM_DRAIN", "SEWER_PIPE", "POWER_LINES", "TELEPHONE_POLE", "UTILITY_BOX",
            "SATELLITE_DISH", "CELL_TOWER", "GRID_SYSTEM", "COMMUTE", "RUSH_HOUR", "TRAFFIC_JAM",
            "GRIDLOCK", "SMOG_CITY", "LIGHT_POLLUTION", "URBAN_SPRAWL", "GENTRIFICATION", "CITY_HALL",
            "COURTHOUSE", "POLICE_STATION", "FIRE_HOUSE", "POST_OFFICE", "SKYLINE"
        ],
        imposterWords: [
            // Original 6
            "TREE", "RIVER", "TRAIL", "ROCK", "LAKE", "WOODS",
            // 45 Additional Nature/Wilderness Words to cross 50
            "FOREST", "MOUNTAIN", "VALLEY", "CANYON", "GORGE", "RAVINE",
            "STREAM", "CREEK", "BROOK", "WATERFALL", "CASCADE", "RAPIDS",
            "POND", "SWAMP", "MARSH", "BOG", "FEN", "WETLAND",
            // Avoided generic overlap by specifying natural variants
            "MEADOW", "PRARIE", "SAVANNAH", "STEPPE", "TUNDRA", "DESERT",
            "DUNES_NATURAL", "OASIS", "GLACIER_NAT_RESERVE", "ICE_SHEET", "CLIFF", "CRAG",
            "BOULDER", "PEBBLE", "STONE_NATURAL", "CAVE", "CAVERN", "GROTTO",
            "HILL_NATURAL", "RIDGE_NATURAL", "PEAK", "SUMMIT", "PLATEAU", "MESA",
            "BUTTE", "GROVE", "THICKET", "WILDERNESS_RESERVE", "JUNGLE"
        ]
    },
    {
        id: "school_hobbies",
        _innocentHints: [
            "School Classes, Subjects & Studying",
            "Academic Subject Matter, Grade School Learning & Pedagogy",
            "Educational Curriculum, Classroom Lectures & Academic Fields"
        ],
        _imposterHints: [
            "Fun Hobbies, Arts & Weekend Crafts",
            "Amateur Recreation, Weekend Crafts & Home Leisure Projects",
            "Leisure Pursuits, Creative Arts & Home Crafts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "MATH", "SCIENCE", "HISTORY", "READING", "SPELLING", "ENGLISH", 
            "ART", "MUSIC", "GYM", "GEOGRAPHY", "HOMEWORK", "TEST", 
            "QUIZ", "GRADE", "EXAM", "LESSON", "TEXTBOOK", "REPORT_CARD", 
            "PROJECT", "LECTURE", "CALCULATOR", "LIBRARY", "STUDENT", "TEACHER",
            // 77 Additional School Subject/Study Words to cross 100
            "ALGEBRA", "GEOMETRY", "CALCULUS", "TRIGONOMETRY", "STATISTICS", "ARITHMETIC",
            "BIOLOGY", "CHEMISTRY", "PHYSICS", "ASTRONOMY_SUBJECT", "GEOLOGY_SUBJECT", "ECOLOGY_SUBJECT",
            "LITERATURE", "GRAMMAR", "COMPOSITION", "POETRY_CLASS", "DRAMA_CLASS", "SPEECH_DEBATE",
            "SOCIAL_STUDIES", "CIVICS", "ECONOMICS", "SOCIOLOGY", "PSYCHOLOGY_SUBJECT", "PHILOSOPHY_SUBJECT",
            "FRENCH_CLASS", "SPANISH_CLASS", "GERMAN_CLASS", "LATIN_CLASS", "MANDARIN_CLASS", "LINGUISTICS",
            "COMPUTER_SCIENCE", "CODING_CLASS", "ROBOTICS_CLASS", "TYPING_CLASS", "SHOP_CLASS", "WOODSHOP",
            "METALSHOP", "HOME_ECONOMICS", "HEALTH_CLASS", "PHYSICAL_EDUCATION", "RECESS_EDU", "HOMEROOM_EDU",
            "STUDY_HALL", "DETENTION", "SUSPENSION", "EXPULSION", "ATTENDANCE", "ROLL_CALL",
            "SYLLABUS_SCH", "CURRICULUM_SCH", "ASSIGNMENT_SCH", "WORKSHEET", "NOTEBOOK_SCH", "BINDER_SCH",
            "FLASHCARDS_SCH", "DIPLOMA_SCH", "DEGREE", "CREDIT_HOUR", "GPA", "HONOR_ROLL",
            "VALEDICTORIAN", "SALUTATORIAN", "GRADUATION_SCH", "COMMENCEMENT_SCH", "PRINCIPAL_SCH", "VICE_PRINCIPAL",
            "DEAN_SCH", "PROFESSOR_SCH", "INSTRUCTOR", "TUTOR_SCH", "GUIDANCE_COUNSELOR", "CLASSMATE_SCH",
            "SCHOOL_BOARD", "ACADEMY_SCH", "UNIVERSITY_SCH", "COLLEGE_SCH", "SEMESTER_SCH", "TRIMESTER"
        ],
        imposterWords: [
            // Original 6
            "PAINTING", "FISHING", "BAKING", "HIKING", "GAMING", "SEWING",
            // 45 Additional Hobby/Craft Words to cross 50
            "KNITTING", "CROCHET", "EMBROIDERY", "QUILTING", "WEAVING_HOBBY", "POTTERY_HOBBY",
            "SCULPTING", "WOODWORKING_HOBBY", "LEATHERWORKING", "JEWELRY_MAKING_HOBBY", "BEADWORK_HOBBY", "SCRAPBOOKING_HOBBY",
            "ORIGAMI_HOBBY", "CALLIGRAPHY_HOBBY", "PHOTOGRAPHY_HOBBY", "GARDENING_HOBBY", "COOKING_HOBBY", "HOME_BREWING",
            "WINE_MAKING", "BIRD_WATCHING_HOBBY", "ASTRONOMY_AMATEUR_HOB", "STAMP_COLLECTING_HOB", "COIN_COLLECTING_HOB", "COMIC_COLLECTING",
            "CHESS_HOBBY", "CHECKERS_HOBBY", "BACKGAMMON_HOBBY", "CARD_GAMES_HOBBY", "BOARD_GAMES_HOBBY", "PUZZLES_HOBBY",
            "MODEL_BUILDING_HOBBY", "SLOT_CAR_RACING", "ROBOTICS_DIY", "ELECTRONICS_DIY_HOB", "METAL_DETECTING_HOB", "GEOCACHING_HOB",
            "CAMPING_HOBBY", "KAYAKING_HOBBY", "CANOEING_HOBBY", "SURFING_HOBBY", "SKATEBOARDING_HOBBY", "ROLLER_BLADING",
            "RUNNING_HOBBY", "JOGGING_HOBBY", "YOGA_HOBBY"
        ]
    },
    {
        id: "winter_summer",
        _innocentHints: [
            "Winter Season, Snow & Cold Weather",
            "Sub-Zero Weather, Boreal Conditions & Winter Coordinates",
            "Frigid Winter Climatology, Freezing Weather & Snowy Elements"
        ],
        _imposterHints: [
            "Summer Season, Heat & Sun",
            "Estival Heatwaves, Tropical Solstices & High UV Conditions",
            "High Temperature Summer Systems, Coastal Solar Rays & Arid Sunbaths"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "SNOW", "ICE", "FROST", "BLIZZARD", "ICICLE", "SNOWMAN", 
            "SLEET", "CHILLY", "FREEZING", "GLOVE", "BOOT", "SCARF", 
            "COAT", "BEANIE", "MITTEN", "SWEATER", "SLIPPER", "JACKET", 
            "BLANKET", "HEATER", "SHOVEL", "GLACIER", "HAIL", "FLURRY",
            // 77 Additional Winter Words to cross 100
            "SNOWSTORM", "AVALANCHE_WIN", "ICE_STORM_WIN", "WHITE_OUT", "BLACK_ICE", "SLUSH",
            "HOARFROST", "RIME", "FROSTBITE", "HYPOTHERMIA", "FRIGID_AIR", "BITTER_COLD",
            "RAW_WEATHER", "BRISK_WIND", "WINTER_SOLSTICE", "DECEMBER", "JANUARY", "FEBRUARY",
            "PARKA", "OVERCOAT", "DOWN_JACKET", "PUFFER_COAT", "SNOW_SUIT", "LONG_JOHNS",
            "THERMALS", "EARMUFFS", "BALACLAVA", "SKI_MASK", "THICK_SOCKS", "SNOW_BOOTS",
            "GALOSHES", "TURTLENECK", "CARDIGAN", "FLEECE_LINER", "WOOLEN_WEAR", "FUR_TRIM",
            "ICE_SKATES", "SKIS", "SNOWBOARD", "TOBOGGAN", "SLED", "BOBSLED",
            "SNOWSHOES", "SNOW_PLOW", "SALT_TRUCK", "ICE_SCRAPER", "TIRE_CHAINS", "SNOW_FORT",
            "SNOWBALL", "ICE_RINK", "SKI_RESORT", "CHALET_WIN", "LOG_FIRE", "HOT_CHOCOLATE",
            "MULLED_CIDER", "ROAST_CHESTNUTS", "QUILT", "DUVET", "ELECTRIC_BLANKET", "RADIATOR",
            "FURNACE", "THERMOSTAT", "HIBERNATION", "MIGRATION_WIN", "EVERGREEN", "PINE_CONE",
            "HOLLY", "MISTLETOE", "NORTH_POLE", "ARCTIC", "ANTARCTIC", "TUNDRA_WIN",
            "PERMAFROST", "ICEBERG_WIN", "ICE_FLOE", "PACK_ICE", "POLAR_VORTEX"
        ],
        imposterWords: [
            // Original 6
            "BEACH", "SUNSHINE", "SHORTS", "POOL", "SAND", "HEAT",
            // 45 Additional Summer Words to cross 50
            "SUMMER_SOLSTICE", "JUNE", "JULY", "AUGUST", "HEAT_WAVE", "HUMIDITY_SUM",
            "SWELTERING", "TORRID", "SULTRY", "SCORCHING", "BLISTERING", "WARMTH",
            "SUNTAN", "SUNBURN", "SUNSCREEN_SUM", "SUNGLASSES_SUM", "SWIMSUIT_SUM", "BIKINI_SUM",
            "BOARDSHORTS", "FLIP_FLOPS_SUM", "SANDALS", "PARASOL", "BEACH_CHAIR", "CABANA",
            "HAMMOCK_SUM", "ICE_CREAM_SUM", "POPSICLE_SUM", "ICED_TEA", "LEMONADE", "WATERMELON_SUM",
            "BARBECUE", "PICNIC", "CAMPING_SUM", "VACATION_SUM", "RESORT_SUM", "TROPICAL",
            "EQUATOR", "MIRAGE_SUM", "SUNBEAM", "SUNRAY", "UV_INDEX_SUM", "AIR_CONDITIONING",
            "CEILING_FAN", "SWEAT", "DEHYDRATION"
        ]
    },
    {
        id: "camping_hotel",
        _innocentHints: [
            "Outdoor Camping, Forests & Wilderness",
            "Backcountry Backpacking, Deep Wilderness Camping & Outdoor Survival",
            "Forest Outposts, Mountain Campsites & Wilderness Equipment"
        ],
        _imposterHints: [
            "Luxury Hotels, Resorts & Vacations",
            "Hospitality Lodging, Luxury Hotel Suites & Concierge Services",
            "Five-Star Resorts, Hotel Infrastructure & Hospitality Guest Suites"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "TENT", "CAMPFIRE", "BACKPACK", "TRAIL", "WOODS", "SLEEPING_BAG", 
            "HIKING", "LANTERN", "FOREST", "PATH", "MOUNTAIN", "STREAM", 
            "WILDERNESS", "COMPASS", "LOG", "PINE", "STOVE", "CANOE", 
            "CABIN", "RANGER", "MOSQUITO", "ROASTING", "MAP", "OUTDOORS",
            // 77 Additional Camping/Wilderness Words to cross 100
            "CAMPSTOVE", "SLEEPING_PAD", "AIR_MATTRESS_CAMP", "COT_CAMP", "TARP", "GUY_LINES",
            "STAKES_CAMP", "HAMMOCK_CAMP", "FLASHLIGHT", "HEADLAMP", "MATCHES_CAMP", "LIGHTER_CAMP",
            "FIRE_STARTER", "KINDLING", "FIREWOOD", "AXE_CAMP", "HATCHET_CAMP", "SAW_CAMP",
            "MULTI_TOOL_CAMP", "ROPE_CAMP", "PARACORD", "CARABINER_CAMP", "BUG_SPRAY_CAMP", "SUNSCREEN_CAMP",
            "FIRST_AID_KIT_CAMP", "WATER_FILTER_CAMP", "PURIFICATION_TABLETS", "CANTEEN_CAMP", "HYDRATION_PACK", "MESS_KIT_CAMP",
            "COOLER_CAMP", "ICE_CHEST_CAMP", "BEAR_CANISTER", "DRY_BAG", "BINOCULARS_CAMP", "TREKKING_POLES",
            "TRAIL_MIX", "DEHYDRATED_FOOD", "CAN_OPENER_CAMP", "BACKCOUNTRY", "CAMPSITE", "FIRE_RING",
            "NATIONAL_PARK", "STATE_PARK", "NATURE_RESERVE", "GROVE_CAMP", "THICKET_CAMP", "CLEARING",
            "VALLEY_CAMP", "CANYON_CAMP", "CLIFF_CAMP", "RIDGE_CAMP", "SUMMIT_CAMP", "CREEK_CAMP",
            "BROOK_CAMP", "WATERFALL_CAMP", "POND_CAMP", "LAKE_CAMP", "SWAMP_CAMP", "KAYAK_CAMP",
            "PADDLE_CAMP", "LIFE_JACKET", "FISHING_ROD", "TACKLE_BOX", "BAIT_CAMP", "WILDLIFE",
            "FORAGING_CAMP", "WOOD_CHIPS", "TINDER_CAMP", "BRUSH_WOOD", "OUTHOUSE", "ROUGHING_IT",
            "TRAILHEAD", "SWITCHBACK", "TOPOGRAPHIC_MAP", "GPS_NAV_CAMP", "FLINT_STEEL"
        ],
        imposterWords: [
            // Original 6
            "ROOM", "KEY", "POOL", "BED", "SHOWER", "DESK",
            // 45 Additional Hotel/Resort Words to cross 50
            "SUITE", "PENTHOUSE_HOTEL", "LOBBY", "CONCIERGE", "RECEPTION", "FRONT_DESK",
            "RESERVATION", "CHECK_IN", "CHECK_OUT", "KEYCARD", "BELLHOP", "VALET",
            "HOUSEKEEPING", "ROOM_SERVICE", "MINIBAR", "TURNDOWN_SERVICE", "SPA_HOTEL", "SAUNA_HOTEL",
            "JACUZZI", "GYM_HOTEL", "RESTAURANT_HOTEL", "BAR_HOTEL", "LOUNGE_HOTEL", "BALLROOM",
            "CONFERENCE_ROOM", "ELEVATOR", "CORRIDOR", "ICE_MACHINE_HOTEL", "VENDING_MACHINE_HOT_BLDG", "BATHROBE",
            "SLIPPERS_HOTEL", "TOWELS_HOTEL", "LINENS_HOTEL", "PILLOW_MENU", "TOILETRIES", "HAIR_DRYER_HOTEL",
            "SAFE_HOTEL", "WIFI_HOTEL", "CABLE_TV_HOTEL", "LUGGAGE_RACK", "HAMPERS_HOTEL", "BUFFET_BREAKFAST",
            "RESORT_FEE", "HOSPITALITY", "VACATION_HOTEL"
        ]
    },
    {
        id: "sports_backyard",
        _innocentHints: [
            "Mainstream Stadium Sports & Games",
            "Athletic Arena Competitions, Professional League Sports & Stadium Games",
            "Competitive Pro Athletics, Tournament Sports & Mainstream Leagues"
        ],
        _imposterHints: [
            "Backyard Fun, Barbecues & Lawn Games",
            "Domestic Lawn Recreation, Backyard Cookouts & Barbecue Gathering Tones",
            "Residential Backyard Entertaining, Lawn Activities & Grill Parties"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "BASEBALL", "FOOTBALL", "BASKETBALL", "SOCCER", "TENNIS", "HOCKEY", 
            "VOLLEYBALL", "GOLF", "RUGBY", "STADIUM", "REFEREE", "SCOREBOARD", 
            "TEAM", "CHAMPION", "TROPHY", "WHISTLE", "JERSEY", "MEDAL", 
            "LEAGUE", "PLAYOFF", "COACH", "PLAYER", "TOURNAMENT", "MATCH",
            // 77 Additional Arena Sports Words to cross 100
            "CRICKET_SPORT", "BADMINTON", "LACROSSE", "FIELD_HOCKEY", "WATER_POLO", "HANDBALL",
            "BOXING", "WRESTLING", "JUDO", "KARATE", "TAEKWONDO", "FENCING",
            "GYMNASTICS", "TRACK_AND_FIELD", "SPRINT", "MARATHON", "HURDLES", "POLE_VAULT",
            "HIGH_JUMP", "LONG_JUMP", "TRIPLE_JUMP", "SHOT_PUT_SPORT", "DISCUS_THROW", "JAVELIN_THROW",
            "HAMMER_THROW_SPORT", "ROWING_SPORT", "SAILING_SPORT", "SWIMMING_SPORT", "DIVING_SPORT", "SYNCHRONIZED_SWIM",
            "SKIING_SPORT", "SNOWBOARDING_SPORT", "FIGURE_SKATING", "SPEED_SKATING", "CURLING", "BOBSLEIGH",
            "LUGE", "SKELETON_SPORT", "CYCLING_SPORT", "VELODROME_SPORT", "WEIGHTLIFTING", "POWERLIFTING",
            "ARCHERY_SPORT", "SHOOTING_SPORT", "EQUESTRIAN", "DRESSAGE", "SHOW_JUMPING", "POLO_SPORT",
            "TRIATHLON", "DECATHLON", "PENTATHLON", "UMPIRE", "LINESMAN", "JUDGE_SPORT",
            "TIMEKEEPER", "ARENA_SPORTS", "COLISEUM_SPORTS", "COURT_SPORTS", "PITCH_SPORTS", "RINK_SPORTS",
            "FAIRWAY_SPORTS", "DIAMOND_BASEBALL", "GRIDIRON", "END_ZONE", "GOALPOST", "PENALTY_BOX",
            "GRANDSTAND", "BLEACHERS", "LOCKER_ROOM_SPORTS", "CHAMPIONSHIP", "MVP", "ROSTER_SPORTS",
            "HALFTIME", "QUARTER_SPORTS", "PERIOD_SPORTS", "INNING", "OVERTIME"
        ],
        imposterWords: [
            // Original 6
            "GRILL", "POOL", "PATIO", "YARD", "GRASS", "FENCE",
            // 45 Additional Backyard/Lawn Fun Words to cross 50
            "BARBECUE_LAWN", "CHARCOAL", "PROPANE_GRILL", "SMOKER_GRILL", "SPATULA_GRILL", "TONGS_GRILL",
            "PATIO_FURNITURE", "DECK_YARD", "HAMMOCK_YARD", "LAWN_CHAIR", "PICNIC_TABLE", "SUNSHADE_YARD",
            "GAZEBO", "PERGOLA", "SHED_YARD", "GARDEN_BED", "FLOWER_PATCH", "LAWNMOWER",
            "WEED_WHACKER", "HEDGE_TRIMMER", "GARDEN_HOSE", "SPRINKLER", "WATERING_CAN", "WHEELBARROW_YARD",
            "TREE_HOUSE", "SWING_SET", "SLIDE_YARD", "SANDBOX_YARD", "TRAMPOLINE_YARD", "FIRE_PIT_YARD",
            "TIKI_TORCH", "STRING_LIGHTS", "CORNHOLE", "HORSESHOES_GAME", "BOCCE_BALL", "CROQUET",
            "LAWN_DARTS", "FRISBEE_YARD", "BADMINTON_LAWN", "WID_POOL_FLOAT", "SLIP_AND_SLIDE", "SPRINKLER_FUN",
            "BACKYARD_CAMP", "OUTDOOR_DINING", "PORCH_SWING"
        ]
    },
    {
        id: "animals_ocean",
        _innocentHints: [
            "Land Safari Animals & Mammals",
            "Terrestrial Zoology, African Safari Wildlife & Savannah Mammals",
            "Land Quadruped Wildlife, Terrestrial Vertebrates & Safari Biology"
        ],
        _imposterHints: [
            "Ocean Life, Fish & Undersea Creatures",
            "Marine Biology, Pelagic Wildlife & Deep Sea Organisms",
            "Aquatic Ichthyology, Deep Sea Marine Life & Pelagic Vertebrates"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "LION", "TIGER", "ELEPHANT", "GIRAFFE", "ZEBRA", "MONKEY", 
            "RHINO", "HIPPO", "LEOPARD", "CHEETAH", "GORILLA", "KANGAROO", 
            "HYENA", "ANTELOPE", "BUFFALO", "PANDA", "CAMEL", "CHIMPANZEE", 
            "BABOON", "MEERKAT", "WARTHOG", "LEMUR", "GAZELLE", "KOALA",
            // 77 Additional Land Safari Words to cross 100
            "JAGUAR_SAF", "PANTHER_SAF", "COUGAR_SAF", "PUMA_SAF", "LYNX_SAF", "SERVAL_SAF",
            "OCELOT_SAF", "CARACAL_SAF", "WILD_CAT_SAF", "AARDWOLF", "MONGOOSE_SAF", "CIVET_SAF",
            "GENET_SAF", "BINTURONG_SAF", "JACKAL_SAF", "DINGO_SAF", "WILD_DOG_SAF", "DHOLE_SAF",
            "WOLF_SAF", "FOX_SAF", "BEAR_SAF", "GRIZZLY_BEAR_SAF", "POLAR_BEAR_SAF", "BLACK_BEAR_SAF",
            "SLOTH_BEAR_SAF", "SUN_BEAR_SAF", "WOLVERINE_SAF", "BADGER_SAF", "HONEY_BADGER", "OTTER_SAF",
            "TAPIR_SAF", "RHINOCEROS_SAF", "HIPPOPOTAMUS_SAF", "WILD_BOAR_SAF", "PECCARY_SAF", "BISON_SAF",
            "WATER_BUFFALO", "CAPE_BUFFALO", "IMPALA", "ORYX", "WILDEBEEST", "KUDU",
            "ELAND", "SABLE_ANTELOPE", "ROAN_ANTELOPE", "SPRINGBOK", "STEENBOK", "KLIPSPRINGER",
            "DUIKER", "HARTEBEEST", "TOP_SAF", "BONTEBOK", "GEMSBOK", "ADDAX",
            "SCIMITAR_ORYX", "MARKHOR_SAF", "IBEX_SAF", "CHAMOIS_SAF", "MOUFLON_SAF", "BIG_HORN_SAF",
            "MUSK_OX_SAF", "OKAPI_SAF", "LLAMA_SAF", "ALPACA_SAF", "GUANACO_SAF", "VICUNA_SAF",
            "SLOTH_SAF", "ARMADILLO_SAF", "ANTEATER_SAF", "PANGOLIN_SAF", "WALLABY_SAF", "WOMBAT_SAF",
            "PLATYPUS_SAF", "OPOSSUM_SAF", "RACCOON_SAF", "SKUNK_SAF", "PORCUPINE_SAF"
        ],
        imposterWords: [
            // Original 6
            "SHARK", "WHALE", "FISH", "CRAB", "TURTLE", "OCTOPUS",
            // 45 Additional Ocean Marine Words to cross 50
            "DOLPHIN", "PORPOISE", "ORCA", "SPERM_WHALE", "BLUE_WHALE", "HUMPBACK_WHALE",
            "MANATEE", "DUGONG", "SEAL_MAR", "SEA_LION", "WALRUS_MAR", "SEA_OTTER",
            "STINGRAY_MAR", "MANTA_RAY_MAR", "EEL", "MORAY_EEL", "BARRACUDA", "TUNA",
            "SALMON_MAR", "COD", "MACKEREL", "SWORDFISH", "MARLIN", "SAILFISH",
            "CLOWNFISH", "SURGEONFISH", "ANGELFISH_MAR", "PARROTFISH", "GROUPER", "SNAPPER",
            "FLOUNDER", "HALIBUT", "SEAHORSE", "PIPEFISH", "JELLYFISH", "SQUID",
            "CUTTLEFISH", "NAUTILUS", "LOBSTER", "SHRIMP", "PRAWN", "BARNACLE",
            "ANEMONE", "SEA_URCHIN", "STARFISH"
        ]
    },
    {
        id: "house_yard",
        _innocentHints: [
            "Inside the House, Rooms & Furniture",
            "Domestic Interior Architecture, Home Interior Layouts & Furnishings",
            "Indoor Floorplans, Residential Interiors & Furniture Items"
        ],
        _imposterHints: [
            "Outside the House, Yards & Gardens",
            "Residential Outer Landscapes, Exterior Yards & Horticultural Gardens",
            "Exterior Curtilage, Residential Grounds & Backyard Landscaping"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 24
            "KITCHEN", "BEDROOM", "BATHROOM", "COUCH", "CHAIR", "TABLE", 
            "BED", "TELEVISION", "FRIDGE", "STOVE", "LAMP", "DESK", 
            "CLOSET", "DRAWER", "RUG", "PILLOW", "SHOWER", "SINK", 
            "WALL", "DOOR", "WINDOW", "CEILING", "FLOOR", "STAIRS",
            // 77 Additional Indoor House Words to cross 100
            "LIVING_ROOM", "DINING_ROOM", "HALLWAY", "CORRIDOR_HOUSE", "FOYER", "VESTIBULE",
            "ATTIC", "BASEMENT", "CELLAR", "LAUNDRY_ROOM", "PANTRY", "UTILITY_ROOM",
            "NURSERY", "PLAYROOM", "STUDY_ROOM", "HOME_OFFICE", "LIBRARY_HOUSE", "DEN",
            "SUNROOM", "MUDROOM", "GARAGE_INSIDE", "SOFA", "LOVESEAT", "RECLINER",
            "ARMCHAIR", "OTTOMAN", "STOOL_HOUSE", "FUTON", "DAYBED", "MATTRESS",
            "HEADBOARD", "NIGHTSTAND", "DRESSER_HOUSE", "WARDROBE_HOUSE", "ARMOIRE", "SIDEBOARD_HOUSE",
            "BUFFET_HOUSE", "CREDENZA_HOUSE", "BOOKCASE_HOUSE", "SHELVING_UNIT", "DINING_TABLE", "COFFEE_TABLE",
            "END_TABLE", "CONSOLE_TABLE", "VANITY_TABLE", "CHEST_OF_DRAWERS", "DESK_LAMP", "CHANDELIER",
            "SCONCE_HOUSE", "MIRROR_HOUSE", "CARPET_HOUSE", "CURTAINS_HOUSE", "DRAPES_HOUSE", "BLINDS_HOUSE",
            "SHUTTERS_HOUSE", "CUSHION_HOUSE", "WALLPAPER_HOUSE", "TAPESTRY_HOUSE", "CLOCK_HOUSE", "RADIATOR_HOUSE",
            "FIREPLACE", "MANTEL", "HEARTH", "THERMOSTAT_HOUSE", "AIR_CONDITIONER_IN", "FURNACE_HOUSE",
            "FUSE_BOX", "LIGHT_SWITCH", "ELECTRICAL_OUTLET", "DOORKNOB", "DEADBOLT", "BASEBOARD",
            "MOLDING", "PANELING", "RAILING", "BANISTER", "STAIRCASE"
        ],
        imposterWords: [
            // Original 6
            "GRASS", "TREE", "FENCE", "GARDEN", "PATIO", "SHED",
            // 45 Additional Yard/Exterior Words to cross 50
            "LAWN", "TURF", "MEADOW_YARD", "FLOWER_BED", "VEGETABLE_PATCH", "SHRUB",
            "BUSH", "HEDGE", "FLOWERPOT", "PLANTER", "HOSE", "SPRINKLER_YARD",
            "LAWNMOWER_YARD", "WHEELBARROW_EXT", "DECK", "PORCH", "VERANDA", "BALCONY",
            "GAZEBO_YARD", "PERGOLA_YARD", "GREENHOUSE_YARD", "PLAYHOUSE_YARD", "SWING_SET_YARD", "SANDBOX_YARD",
            "POOL_YARD", "HOT_TUB", "POND_YARD", "FOUNTAIN_YARD", "BIRD_BATH", "BIRD_FEEDER",
            "DRIVEWAY_YARD", "WALKWAY", "PATHWAY", "GATE", "STONE_WALL", "RETAINING_WALL",
            "MAILBOX", "GUTTER", "DOWNSPOUT", "WEATHER_VANE_YARD", "CLOTHESLINE_YARD", "FIRE_PIT",
            "BARBECUE_GRILL", "TIKI_TORCH_YARD", "PATIO_TABLE"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 7 / 10) ---
// Total Words in this module: ~460 words across 10 massive, non-technical crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 7)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "animals_pets",
        _innocentHints: [
            "Wild Forest & Jungle Animals",
            "Sylvan Wildlife, Jungle Apex Predators & Deep Wilderness Fauna",
            "Terrestrial Undomesticated Animals, Forest Mammals & Wilderness Wildlife"
        ],
        _imposterHints: [
            "Common Household Pets & Domestic Animals",
            "Domesticated Household Companions, Indoor Lap Animals & Family Pets",
            "Residential Pets, Domesticated Hand-Fed Creatures & Suburban Companion Animals"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "LION", "TIGER", "BEAR", "GIRAFFE", "ZEBRA", "GORILLA", "MONKEY", "FOX",
            "WOLF", "DEER", "RABBIT", "SQUIRREL", "ELEPHANT", "HIPPO", "RHINO", "LEOPARD",
            "CHIMPANZEE", "KANGAROO", "PANDA", "KOALA", "RACCOON", "OPOSSUM", "MOOSE", "SKUNK",
            "BADGER", "HEDGEHOG", "BOBCAT", "COYOTE", "OTTER", "WEASEL", "CHIPMUNK", "PANTHER",
            "JAGUAR", "CHEETAH", "PUMA", "BUFFALO", "BEAVER", "HYENA", "ANTELOPE", "GAZELLE",
            // 61 Additional Wild Animals to cross 100
            "GRIZZLY_BEAR", "POLAR_BEAR", "BLACK_BEAR", "WOMBAT", "PLATYPUS", "TASMANIAN_DEVIL",
            "WALLABY", "MEERKAT", "WARTHOG", "BABOON", "LEMUR", "ORANGUTAN",
            "GIBBON", "MANDRILL", "MACAQUE", "SLOTH", "ANTEATER", "ARMADILLO",
            "PANGOLIN", "PORCUPINE", "WOLVERINE", "MARTEN", "MINK", "STOAT",
            "FERRET_WILD", "POLECAT", "MONGOOSE", "CIVET", "GENET", "CARACAL",
            "SERVAL", "OCELOT", "LYNX", "WILD_BOAR", "PECCARY", "TAPIR",
            "BISON", "CAPE_BUFFALO", "WILDEBEEST", "IMPALA", "ORYX", "KUDU",
            "ELAND", "SABLE_ANTELOPE", "SPRINGBOK", "WATERBUCK", "STEENBOK", "KLIPSPRINGER",
            "CHAMOIS", "IBEX", "MOUFLON", "ARGALI", "BIG_HORN_SHEEP", "MUSK_OX",
            "YAK_WILD", "CAMEL_WILD", "LLAMA_WILD", "ALPACA_WILD", "GUANACO", "VICUNA",
            "OKAPI"
        ],
        imposterWords: [
            // Original 6
            "DOG", "CAT", "HAMSTER", "GOLDFISH", "RABBIT", "PARROT",
            // 45 Additional Domestic Pets to cross 50
            "PUPPY", "KITTEN", "GUINEA_PIG", "GERBIL", "MOUSE_PET", "RAT_PET",
            "CHINCHILLA", "FERRET_PET", "HEDGEHOG_DOMESTIC", "SUGAR_GLIDER", "BUDGERIGAR", "COCKATIEL",
            "LOVEBIRD", "CANARY", "FINCH_PET", "MACAW", "COCKATOO", "PARAKEET",
            "BETTA_FISH", "GUPPY", "ANGELFISH", "MOLLY_FISH", "NEON_TETRA", "KOI_FISH",
            "GECKO", "BEARDED_DRAGON", "CHAMELEON_PET", "IGUANA_PET", "CORN_SNAKE", "BALL_PYTHON",
            "BOX_TURTLE", "TORTOISE_PET", "HERMIT_CRAB_PET", "TARANTULA_PET", "SCORPION_PET", "AXOLOTL",
            "PIG_MINIATURE", "GOAT_PYGMY", "DUCK_PET", "CHICKEN_PET", "RABBIT_BUNNY", "CANINE_COMPANION",
            "FELINE_PET", "PONY_PET", "TERRIER"
        ]
    },
    {
        id: "kitchen_bathroom",
        _innocentHints: [
            "Kitchen Appliances, Tools & Cooking Utensils",
            "Gastronomic Cookware, Kitchen Counters & Culinary Preparation Tools",
            "Food Prep Stations, Cooking Hardware & Culinary Utensils"
        ],
        _imposterHints: [
            "Bathroom Fixtures, Toiletries & Cleaning Items",
            "Sanitary Restroom Fixtures, Personal Hygiene Products & Lavatory Goods",
            "Ablution Facilities, Washroom Linens & Daily Shower Cosmetics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "FRIDGE", "STOVE", "OVEN", "BLENDER", "TOASTER", "KETTLE", "MICROWAVE", "SPATULA",
            "WHISK", "TONGS", "LADLE", "PEELER", "GRATER", "SPOON", "FORK", "KNIFE",
            "PLATE", "BOWL", "CUP", "MUG", "GLASS", "PAN", "POT", "TRAY",
            "SINK", "DISHWASHER", "APRON", "TIMER", "MIXER", "ROLLING_PIN", "COLANDER", "CUTTING_BOARD",
            "FUNNEL", "SCALES", "CLEAVER", "SKILLET", "COFFEE_MAKER", "GRIDDLE", "BROILER", "SAUCER",
            // 61 Additional Kitchen Words to cross 100
            "FREEZER", "GARBAGE_DISPOSAL", "TRASH_COMPACTOR", "ICE_MAKER", "WINE_COOLER", "SLOW_COOKER",
            "PRESSURE_COOKER", "AIR_FRYER", "RICE_COOKER", "FOOD_PROCESSOR", "JUICER", "WAFFLE_IRON",
            "SANDWICH_PRESS", "ESPRESSO_MACHINE", "COFFEE_GRINDER", "BREAD_MAKER", "DEHYDRATOR", "DEEP_FRYER",
            "IMMERSION_BLENDER", "STAND_MIXER", "HAND_MIXER", "SAUCEPAN", "STOCKPOT", "DUTCH_OVEN",
            "WOK", "ROASTING_PAN", "BAKING_SHEET", "MUFFIN_TIN", "LOAF_PAN", "PIE_DISH",
            "CASSEROLE_DISH", "RAMEKIN", "MEASURING_CUP", "MEASURING_SPOON", "CHOPPING_BLOCK", "BREAD_KNIFE",
            "PARING_KNIFE", "UTILITY_KNIFE", "STEAK_KNIFE", "CARVING_FORK", "HONING_STEEL", "KNIFE_BLOCK",
            "GARLIC_PRESS", "POTATO_MASHER", "CAN_OPENER", "BOTTLE_OPENER", "CORKSCREW", "NUTCRACKER",
            "ZESTER", "APPLE_CORER", "PASTRY_BRUSH", "SIEVE", "STRAINER", "SALAD_SPINNER",
            "ICE_PICK", "MEAT_THERMOMETER", "OVEN_MITT", "POT_HOLDER", "DISH_RACK", "SPICE_RACK",
            "SQUEEZER"
        ],
        imposterWords: [
            // Original 6
            "TOWEL", "SOAP", "SHAMPOO", "BRUSH", "MIRROR", "MAT",
            // 45 Additional Bathroom Words to cross 50
            "TOILET", "BATHTUB", "SHOWER_STALL", "SHOWER_HEAD", "WASH_BASIN", "VANITY_CABINET",
            "MEDICINE_CHEST", "TOILET_PAPER", "PLUNGER_BATH", "TOILET_BRUSH_BATH", "LOOFAH", "WASHCLOTH",
            "BATHROBE_BATH", "CONDITIONER_HAIR", "BODY_WASH", "BAR_SOAP", "HAND_SANITIZER_BATH", "TOOTHBRUSH",
            "TOOTHPASTE", "MOUTHWASH", "DENTAL_FLOSS", "RAZOR", "SHAVING_CREAM", "AFTERSHAVE",
            "DEODORANT", "TALCUM_POWDER", "HAIR_DRYER", "CURLING_IRON", "HAIR_STRAIGHTENER", "HAIR_SPRAY",
            "TWEEZERS", "NAIL_CLIPPERS", "EMERY_BOARD", "COTTON_SWABS", "COTTON_BALLS", "TISSUE_BOX",
            "AIR_FRESHENER_BATH", "SCALE_BATH", "HAMPER_BATH", "SHOWER_CURTAIN", "RUG_BATH", "FACIAL_CLEANSER",
            "BATH_SALTS", "SHAMPOO_BOTTLE", "BIDET"
        ]
    },
    {
        id: "toys_hobbies",
        _innocentHints: [
            "Classic Children's Toys & Playground Games",
            "Juvenile Playthings, Nursery Toys & Elementary Recess Games",
            "Childrens Recreation, Kindergarten Toys & Kindergarten Games"
        ],
        _imposterHints: [
            "Adult Hobbies, Arts & Weekend Crafts",
            "Grown-Up Creative Hobbies, Artisan Weekend Crafts & Home Leisure Projects",
            "Adult Recreation, Domestic Handicrafts & Weekend Leisure Pursuits"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "DOLL", "MARBLES", "BLOCKS", "TEDDY_BEAR", "SANDBOX", "SLIDE", "SWING", "PUZZLE",
            "KITE", "YOYO", "SPINNER", "BALLOON", "PLAYDOUGH", "TRICYCLE", "SCOOTER", "CRAYONS",
            "BUBBLES", "CHECKERS", "DOMINOES", "LEGO", "WAGON", "PUPPET", "SEESAW", "PLAYHOUSE",
            "RATTLE", "TOP", "HULA_HOOP", "SKATES", "FRISBEE", "JUMP_ROPE", "CHALK", "BEANBAG",
            "STUFFED_ANIMAL", "TRAIN_SET", "ACTION_FIGURE", "PLAYMAT", "MONOPOLY", "CARDS", "DICE", "GLIDER",
            // 61 Additional Children's Toys/Games to cross 100
            "BARBIE", "GI_JOE", "HOT_WHEELS", "MATCHBOX_CAR", "TRANSFORMERS", "POWER_RANGERS",
            "POKEMON_CARDS", "NERF_BLASTER", "WATER_GUN", "SUPER_SOAKER", "SLIME", "SILLY_PUTTY",
            "ETCH_A_SKETCH", "RUBIKS_CUBE", "VIEW_MASTER", "JACKS_GAME", "PICK_UP_STICKS", "TIDDLYWINKS",
            "FINGER_PAINTS", "COLORING_BOOK", "STicker_BOOK", "STENCIL_TOY", "KALEIDOSCOPE", "TOY_SOLDIERS",
            "PIGGY_BANK", "ROCKING_HORSE", "BABY_WALKER", "BUILDING_BRICKS", "TINKERTOYS", "LINCOLN_LOGS",
            "ERECTOR_SET", "MECCANO", "SLINKY", "TAMAGOTCHI", "FURBY", "BEANIE_BABIES",
            "BOUNCY_BALL", "POGO_STICK", "STILTS", "UNICYCLE", "PEDAL_CAR", "ROLLER_SKATES",
            "SKATEBOARD_KID", "SNOW_SLED", "WATER_SLIDE", "MONKEY_BARS", "JUNGLE_GYM", "CLIMBING_FRAME",
            "MERRY_GO_ROUND", "SAND_BUCKET", "SAND_SPADE", "TOY_CHEST", "PUPPET_THEATER", "MARIONETTE",
            "SOCK_PUPPET", "WINDU_TOY", "CANDY_LAND", "CHUTES_AND_LADDERS", "HI_HO_CHERRY_O", "SORRY_GAME",
            "OPERATION_GAME"
        ],
        imposterWords: [
            // Original 6
            "PAINTING", "FISHING", "BAKING", "HIKING", "GAMING", "SEWING",
            // 45 Additional Adult Hobbies/Crafts to cross 50
            "KNITTING", "CROCHET", "EMBROIDERY", "QUILTING", "WEAVING", "SPINNING_WOOL",
            "POTTERY", "SCULPTING", "WOODCARVING", "WOODWORKING", "METALWORKING", "BLACKSMITHING",
            "LEATHERCRAFT", "JEWELRY_MAKING", "BEADWORK", "SCRAPBOOKING", "STAMP_COLLECTING", "COIN_COLLECTING",
            "GENEALOGY", "BIRD_WATCHING", "AMATEUR_ASTRONOMY", "METEOROLOGY_HOBBY", "GARDENING", "BONSAI_CULTIVATION",
            "BEEKEEPING", "HOME_BREWING", "WINEMAKING", "DISTILLING_HOBBY", "CHEESEMAKING", "GOURMET_COOKING",
            "PASTRY_ARTS", "PHOTOGRAPHY", "VIDEOGRAPHY", "PODCASTING", "BLOGGING", "CREATIVE_WRITING",
            "CALLIGRAPHY", "ORIGAMI", "MODEL_ROCKETRY", "MODEL_RAILROAD", "SCALE_MODELING", "HAM_RADIO",
            "RESTORATION_CAR", "UPCYCLING", "YOGA"
        ]
    },
    {
        id: "weather_space",
        _innocentHints: [
            "Earth Weather, Clouds & Changing Seasons",
            "Atmospheric Climatology, Earth Weather Systems & Meteorological Events",
            "Terrestrial Meteorology, Surface Weather Patterns & Earth Atmosphere"
        ],
        _imposterHints: [
            "Outer Space, Planets & Cosmic Discoveries",
            "Astrophysical Discoveries, Deep Space Coordinates & Extra-Planetary Bodies",
            "Astronomy, Deep Space Nebulae & Interstellar Physics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "RAIN", "SNOW", "WIND", "CLOUD", "STORM", "SUNSHINE", "FOG", "MIST",
            "BREEZE", "GALE", "HAIL", "SLEET", "BLIZZARD", "TORNADO", "HURRICANE", "THUNDER",
            "LIGHTNING", "FROST", "DEW", "HUMIDITY", "OVERCAST", "CLEAR", "RAINBOW", "SHADE",
            "CHILLY", "FREEZING", "HEATWAY", "DAMP", "WARMTH", "DRIZZLE", "SQUALL", "TYPHOON",
            "MONSOON", "DUSK", "DAWN", "MILD", "SHOWERS", "FLURRY", "ICICLE", "ZEPHYR",
            // 61 Additional Earth Weather Words to cross 100
            "SNOWSTORM", "ICE_STORM", "WHITE_OUT", "DOWNPOUR", "DELUGE", "CLOUD_BURST",
            "FLASH_FLOOD", "METEOROLOGY", "BAROMETER", "THERMOMETER_WEATH", "WEATHER_VANE", "ANEMOMETER",
            "HYGROMETER", "RAIN_GAUGE", "WEATHER_BALLOON", "WEATHER_RADAR", "HIGH_PRESSURE", "LOW_PRESSURE",
            "COLD_FRONT", "WARM_FRONT", "OCCLUDED_FRONT", "JET_STREAM", "TRADE_WINDS", "WEATHER_FORECAST",
            "CLIMATE", "TEMPERATE", "TROPICAL_WEATHER", "ARCTIC_CHILL", "POLAR_VORTEX", "HEAT_WAVE",
            "DROUGHT", "ARID", "SEMI_ARID", "SULTRY_AIR", "MUGGY", "SWELTERING",
            "BLISTERING_HEAT", "FROSTBITE_TEMP", "HYPOTHERMIA_TEMP", "WINDFALL", "GUST", "WHIRLWIND",
            "DUST_DEVIL", "HABOOB", "SANDSTORM", "SIROCCO", "MISTRAL", "BLOWING_SNOW",
            "HOARFROST", "RIME_ICE", "BLACK_ICE", "SLUSH_STREET", "SULTRY", "TORRID",
            "CIRRUS", "CUMULUS", "STRATUS", "NIMBUSH", "CUMULONIMBUS", "ALTOCUMULUS",
            "STRATOCUMULUS"
        ],
        imposterWords: [
            // Original 6
            "PLANET", "STAR", "GALAXY", "MOON", "ASTEROID", "COMET",
            // 45 Additional Space Words to cross 50
            "UNIVERSE", "COSMOS", "NEBULA", "SUPERNOVA", "BLACK_HOLE", "WHITE_DWARF",
            "RED_GIANT", "NEUTRON_STAR", "PULSAR", "QUASAR", "SOLAR_SYSTEM", "SUN_CORE",
            "MERCURY", "VENUS", "EARTH_ORBIT", "MARS", "JUPITER", "SATURN",
            "URANUS", "NEPTUNE", "PLUTO", "EXOPLANET", "METEOR", "METEORITE",
            "METEOROID", "METEOR_SHOWER", "CONSTELLATION", "ORION", "BIG_DIPPER", "MILKY_WAY",
            "ANDROMEDA", "ORBIT", "TRAJECTORY", "GRAVITY", "SPACETIME", "WORMHOLE",
            "LIGHT_YEAR", "PARSEC", "ASTRONOMICAL_UNIT", "TELESCOPE", "OBSERVATORY", "SATELLITE_SPACE",
            "SPACE_STATION", "ASTRONAUT", "COSMONAUT"
        ]
    },
    {
        id: "school_office_large",
        _innocentHints: [
            "School Classrooms, Subjects & Teacher Supplies",
            "Academic Educational Tools, Kindergarten Pedagogy & Teacher Supplies",
            "K-12 Education, Classroom Desks & Student Academic Supplies"
        ],
        _imposterHints: [
            "Corporate Offices, Business Buildings & Paperwork",
            "Corporate Workspaces, Business Logistics & Office Paperwork",
            "White-Collar Corporate Infrastructure, Desk Cubicles & Business Bureaucracy"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "BACKPACK", "PENCIL", "CRAYON", "TEXTBOOK", "ERASER", "RULER", "CHALKBOARD", "NOTEBOOK",
            "HIGHLIGHTER", "MARKER", "GLUE", "SCISSORS", "BINDER", "FOLDER", "RECESS", "TEACHER",
            "STUDENT", "WHITEBOARD", "SHARPENER", "BLACKBOARD", "QUIZ", "LESSON", "HOMEWORK", "REPORT_CARD",
            "DESK", "CLASSROOM", "ALPHABET", "SPELLING", "MATH", "SCIENCE", "HISTORY", "LIBRARY",
            "PRINCIPAL", "GLOBE", "COMPASS", "PLAYGROUND", "LOCKER", "BELL", "CHALK", "GRADUATION",
            // 61 Additional School Words to cross 100
            "ALGEBRA", "GEOMETRY", "BIOLOGY", "CHEMISTRY", "PHYSICS", "GEOGRAPHY",
            "ENGLISH_CLASS", "ART_CLASS", "MUSIC_CLASS", "GYM_CLASS", "SOCIAL_STUDIES", "READING_CLASS",
            "SPEECH_DEBATE", "HOME_ECONOMICS", "WOODSHOP", "HEALTH_ED", "COMPUTING_LAB", "HOMEROOM",
            "STUDY_HALL", "DETENTION", "SUSPENSION", "EXPULSION", "ATTENDANCE", "ROLL_CALL",
            "EXAM", "TEST_PAPER", "WORKSHEET", "FLASHCARDS", "DIPLOMA", "REPORT_FILE",
            "PENCIL_CASE", "PENCIL_POUCH", "COMPASS_DRAW", "PROTRACTOR", "T_SQUARE", "CONSTRUCTION_PAPER",
            "LOOSE_LEAF", "INDEX_CARDS", "GLUE_STICK", "SAFETY_SCISSORS", "DRY_ERASE_MARKER", "BOARD_ERASER",
            "CHALK_DUST", "SCHOOL_BUS", "CAFETERIA", "AUDITORIUM", "GYMNASIUM", "NURSES_OFFICE",
            "TEACHERS_LOUNGE", "VICE_PRINCIPAL", "GUIDANCE_COUNSELOR", "SUBSTITUTE_TEACHER", "CLASSMATE", "SCHOOL_BOARD",
            "ACADEMY", "ELEMENTARY_SCHOOL", "MIDDLE_SCHOOL", "HIGH_SCHOOL", "SEMESTER", "REPORT_CARD_GRADES",
            "YEARBOOK"
        ],
        imposterWords: [
            // Original 6
            "STAPLER", "CLIP", "FILE", "PRINTER", "SCANNER", "STAMP",
            // 45 Additional Corporate Office Words to cross 50
            "STAPLE_REMOVER", "PAPER_CLIP", "BINDER_CLIP", "MANILA_FOLDER", "HANGING_FILE", "FILE_CABINET",
            "DESK_ORGANIZER", "INBOX_TRAY", "OUTBOX_TRAY", "PAPER_SHREDDER", "PHOTOCOPIER", "FAX_MACHINE",
            "LAMNATOR", "LABEL_MAKER", "POST_IT_NOTES", "NOTEPAD_OFFICE", "LEGAL_PAD", "CLIPBOARD",
            "WHITEBOARD_CONF", "CONFERENCE_TABLE", "OFFICE_CHAIR", "CUBICLE_WALL", "DESKTOP_COMPUTER", "TELEPHONE_DESK",
            "INTERCOM", "WATER_COOLER", "BREAKROOM", "BOARDROOM", "RECEPTION_DESK", "LOBBY_OFFICE",
            "EXECUTIVE_SUITE", "MANAGER_OFFICE", "HR_DEPT", "ACCOUNTING_DEPT", "MARKETING_DEPT", "SALES_DEPT",
            "MEMORANDUM", "INVOICE", "PURCHASE_ORDER", "TIMESHEET", "EXPENSE_REPORT", "BUSINESS_CARD",
            "LETTERHEAD", "ENVELOPE_OFFICE", "RUBBER_STAMP"
        ]
    },
    {
        id: "fruits_vegetables",
        _innocentHints: [
            "Sweet Orchard Fruits & Fresh Berries",
            "Saccharine Orchard Harvests, Bush Berries & Citric Tree Fruits",
            "Botanical Fleshy Fruits, Tree Cultivar Berries & Citrus Orchard Products"
        ],
        _imposterHints: [
            "Garden Vegetables, Greens & Dinner Produce",
            "Herbaceous Garden Vegetables, Culinary Dinner Greens & Root Crops",
            "Savory Horticultural Crops, Leafy Greens & Culinary Garden Roots"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "APPLE", "BANANA", "GRAPE", "STRAWBERRY", "WATERMELON", "PEACH", "PEAR", "PLUM",
            "CHERRY", "BLUEBERRY", "RASPBERRY", "LEMON", "LIME", "PINEAPPLE", "MANGO", "KIWI",
            "MELON", "GRAIGFRUIT", "FIG", "COCONUT", "POMEGRANATE", "APRICOT", "BLACKBERRY", "CRANBERRY",
            "AVOCADO", "PAPAYA", "TANGERINE", "CLEMENTINE", "NECTARINE", "CANTALOUPE", "HONEYDEW", "GUAVA",
            "PASSIONFRUIT", "LYCHEE", "DATE", "RAISIN", "PRUNE", "OLIVE", "MULBERRY", "BOYSENBERRY",
            // 61 Additional Fruits to cross 100
            "ORANGE", "GRAPEFRUIT", "BLOOD_ORANGE", "SATSUMA", "POMELO", "KUMQUAT",
            "PERSIMMON", "QUINCE", "LOGANBERRY", "ELDreBERRY", "GOOSEBERRY", "CURRANT",
            "HUCKLEBERRY", "CHERIMOYA", "DRAGONFRUIT", "STARFRUIT", "RAMBUTAN", "MANGOSTEEN",
            "DURIAN", "JACKFRUIT", "BREADFRUIT", "PLANTAIN", "TAMARIND", "ACAI",
            "GOJI_BERRY", "FEIJOA", "LOQUAT", "SAPODILLA", "PAPAW", "PRICKLY_PEAR",
            "HORNED_MELON", "UGLI_FRUIT", "SNAKE_FRUIT", "MIRACLE_FRUIT", "YUZU", "SUDACHI",
            "CALAMANSI", "BERGAMOT", "CITRON", "FINGER_LIME", "DAMSON", "GREENGAGE",
            "SULTANA", "CURRANT_DRIED", "GOVERNORS_PLUM", "NATAL_PLUM", "JAMB_FRUIT", "MALAY_APPLE",
            "WATER_APPLE", "ROSE_APPLE", "SURINAM_CHERRY", "BARBADOS_CHERRY", "ACEROLA", "SEA_BUCKTHORN",
            "CLOUDBERRY", "LINGONBERRY", "DEWBERRY", "THIMBLEBERRY", "SALMONBERRY", "WINEBERRY",
            "MARIONBERRY"
        ],
        imposterWords: [
            // Original 6
            "CARROT", "POTATO", "TOMATO", "LETTUCE", "ONION", "CORN",
            // 45 Additional Vegetables to cross 50
            "BROCCOLI", "CAULIFLOWER", "CABBAGE", "BRUSSELS_SPROUT", "KALE", "SPINACH",
            "SWISS_CHARD", "COLLARD_GREENS", "MUSTARD_GREENS", "BOK_CHOY", "CELERY", "ASPARAGUS",
            "ARTICHOKE", "GREEN_BEAN", "PEA_POD", "SNOW_PEA", "CUCUMBER", "ZUCCHINI",
            "YELLOW_SQUASH", "BUTTERNUT_SQUASH", "ACORN_SQUASH", "PUMPKIN", "EGGPLANT", "BELL_PEPPER",
            "CHILI_PEPPER", "JALAPENO", "RADISH", "TURNIP", "RUTABAGA", "PARSNIP",
            "BEETROOT", "SWEET_POTATO", "YAM", "CASSAVA", "GARLIC", "SHALLOT",
            "LEEK", "SCALLION", "CHIVES", "FENNEL", "OKRA", "GINGER_ROOT",
            "HORSERADISH", "WATERCRESS", "ALFALFA_SPROUTS"
        ]
    },
    {
        id: "clothing_footwear",
        _innocentHints: [
            "Main Wardrobe Clothing, Shirts & Jackets",
            "Textile Wardrobe Apparel, Upper-Body Garments & Main Body Attire",
            "Mainstream Clothing Garments, Outwear Layers & Main Wardrobe Apparel"
        ],
        _imposterHints: [
            "Footwear, Shoes & Running Gear",
            "Pedal Footwear, Athletic Running Shoes & Foot Protection Apparel",
            "Footwear Infrastructure, Athletic Sports Shoes & Specialized Ankle Boots"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "SHIRT", "PANTS", "JACKET", "SCARF", "GLOVES", "SWEATER", "BLOUSE", "DRESS",
            "SKIRT", "VEST", "TROUSERS", "COAT", "BLAZER", "CARDIGAN", "TUNIC", "ROBE",
            "PONCHO", "PARKA", "SHORTS", "SUIT", "TUXEDO", "SWEATSHIRT", "HOODIE", "PAJAMAS",
            "JEANS", "COAT", "OVERALLS", "RAINCOAT", "JERSEY", "BELT", "TIE", "HAT",
            "CAP", "SOCK", "STOCKING", "GOWN", "KILT", "SWIMSUIT", "UNIFORM", "CAPE",
            // 61 Additional Clothing Items to cross 100
            "T_SHIRT", "POLO_SHIRT", "BUTTON_DOWN", "TANK_TOP", "HALTER_TOP", "CROP_TOP",
            "SWEATER_VEST", "TURTLENECK", "PULLOVER", "WIND_BREAKER", "TRENCH_COAT", "OVERCOAT",
            "PEA_COAT", "DUFFLE_COAT", "DOWN_JACKET", "BOMBER_JACKET", "DENIM_JACKET", "LEATHER_JACKET",
            "TRACK_SUIT", "LEOTARD", "LEGGINGS", "TIGHTS", "SWEATPANTS", "JOGGERS",
            "CHINOS", "KHAKIS", "CARGO_PANTS", "CORDUROYS", "BERMUDA_SHORTS", "BOARD_SHORTS",
            "SUNDRESS", "MAXI_DRESS", "COCKTAIL_DRESS", "BALL_GOWN", "WEDDING_DRESS", "SARONG",
            "KIMONO", "NIGHTGOWN", "BATHROBE", "UNDERWEAR", "UNDERSHIRT", "BOXERS",
            "BRIEFS", "BRASSIERE", "CAMISOLE", "CORSET", "SUSPENDERS", "BOW_TIE",
            "ASCOT", "CUMMERBUND", "HANDKERCHIEF", "MITTENS", "MUFFLER", "BEANIE",
            "BERET", "FEDORA", "PANAMA_HAT", "SOMBRERO", "TOP_HAT", "SUN_HAT",
            "VISOR"
        ],
        imposterWords: [
            // Original 6
            "BOOT", "SHOE", "SNEAKER", "SANDAL", "SLIPPER", "HEEL",
            // 45 Additional Footwear Items to cross 50
            "RUNNING_SHOE", "TRAINER_SHOE", "TENNIS_SHOE", "BASKETBALL_SHOE", "CLEAT", "TRACK_SPIKE",
            "HIKING_BOOT", "WORK_BOOT", "COMBIT_BOOT", "COWBOY_BOOT", "RAIN_BOOT", "SNOW_BOOT",
            "ANKLE_BOOT", "CHUKKA_BOOT", "CHELSEA_BOOT", "KNEE_HIGH_BOOT", "STILETTO", "PLATFORM_HEEL",
            "WEDGE_SHOE", "KITTEN_HEEL", "PUMP_SHOE", "LOAFER", "OXFORD_SHOE", "BROGUE",
            "DERBY_SHOE", "MONK_STRAP", "BOAT_SHOE", "MOCCASIN", "ESPADRILLE", "BALLET_FLAT",
            "MARY_JANE", "CLOG", "MULE_SHOE", "FLIP_FLOP", "SLIDE_SANDAL", "GLADIATOR_SANDAL",
            "HOUSE_SLIPPER", "BOOTEE", "SNEAKER_HIGH_TOP", "SNEAKER_LOW_TOP", "CANVAS_SHOE", "DECK_SHOE",
            "SABOT", "GALOSHE", "WADER"
        ]
    },
    {
        id: "vehicles_travel",
        _innocentHints: [
            "Land Vehicles, Cars & Public Transit",
            "Terrestrial Transport Vehicles, High-Wheel Road Machinery & Public Transit",
            "Surface Land Transportation, Road Vehicles & Rail Transit Systems"
        ],
        _imposterHints: [
            "Air & Sea Travel, Flight & Cruising",
            "Aeronautical & Maritime Crafts, Ocean Cruising & Aerial Flight Vehicles",
            "Aviation Aircraft, Maritime Shipping Vessels & Nautical Cruisers"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "CAR", "TRUCK", "BUS", "VAN", "TRAIN", "BICYCLE", "MOTORCYCLE", "SCOOTER",
            "TAXI", "SUBWAY", "TRAM", "AMBULANCE", "FIRE_TRUCK", "TRACTOR", "SEDAN", "WAGON",
            "JEEP", "CONVERTIBLE", "COUPE", "LIMOUSINE", "PICKUP", "BULLDOZER", "GOLF_CART", "MOPED",
            "STREETCAR", "LOCOMOTIVE", "CAB", "LINER", "TROLLEY", "RACECAR", "FREIGHTER", "TANKER",
            "SKATEBOARD", "FORKLIFT", "MINIVAN", "CARAVAN", "CRUISER", "SUV", "CROSSER", "ROVER",
            // 61 Additional Land Vehicles to cross 100
            "HATCHBACK", "STATION_WAGON", "SPORTS_CAR", "HYBRID_CAR", "ELECTRIC_VEHICLE", "ROADSTER",
            "SEMI_TRUCK", "DUMP_TRUCK", "FLATBED_TRUCK", "GARBAGE_TRUCK", "CEMENT_MIXER", "TOW_TRUCK",
            "DELIVERY_VAN", "CARGO_VAN", "CAMPER_VAN", "MOTORHOME", "DOUBLE_DECKER_BUS", "SHUTTLE_BUS",
            "COACH_BUS", "SCHOOL_BUS_VEH", "MONORAIL", "BULLET_TRAIN", "FREIGHT_TRAIN", "PASSENGER_TRAIN",
            "CABLE_CAR", "FUNICULAR", "DIRT_BIKE", "TOURING_BIKE", "SCOOTER_MOTOR", "SEGWAY",
            "HOVERBOARD", "TRICYCLE_VEH", "QUAD_BIKE", "ATV", "SNOWMOBILE", "EXCAVATOR",
            "BACKHOE", "CRANE_TRUCK", "PALLET_JACK", "STEAM_ROLLER", "GRADER_VEH", "SCRAPER_VEH",
            "AMPHIBIOUS_VEH", "TANK_MILITARY", "ARMORED_CAR", "HUMVEE", "POLICE_CRUISER", "POSTAL_VAN",
            "STREET_SWEEPER", "ICE_RESERVOIR", "RICKSHAW", "HORSE_CARRIAGE", "STAGECOACH", "SLED_DOG",
            "CHUCKWAGON", "GO_KART", "DUNE_BUGGY", "MONSTER_TRUCK", "LOWRIDER", "HOT_ROD",
            "HEARSE"
        ],
        imposterWords: [
            // Original 6
            "PLANE", "SHIP", "BOAT", "JET", "HELICOPTER", "ROCKET",
            // 45 Additional Air & Sea Vehicles to cross 50
            "AIRLINER", "CARGO_PLANE", "PROPELLER_PLANE", "GLIDER_AERO", "BIPLANE", "ZEPPELIN",
            "BLIMP", "HOT_AIR_BALLOON", "FIGHTER_JET", "BOMBER_AIRCRAFT", "STEALTH_JET", "DRONE_AER",
            "SPACESHIP", "SPACE_SHUTTLE", "CRUISE_SHIP", "CARGO_SHIP", "CONTAINER_SHIP", "OIL_TANKER_SEA",
            "AIRCRAFT_CARRIER", "BATTLESHIP", "SUBMARINE", "DESTROYER_VESS", "FRIGATE", "YACHT",
            "SAILBOAT", "CATAMARAN", "SPEEDBOAT", "MOTORBOAT", "TUGBOAT", "FERRY_BOAT",
            "BARGE", "CANOE_SEA", "KAYAK_SEA", "ROWBOAT", "DINGHY", "LIFEBOAT",
            "HOVERCRAFT", "HYDROFOIL", "JET_SKI", "GONDOLA_WATER", "PUNT_BOAT", "TRIMARAN",
            "SCHOONER", "GALLEON", "SUBMERSIBLE"
        ]
    },
    {
        id: "buildings_city",
        _innocentHints: [
            "Residential Homes & Everyday Public Buildings",
            "Civil Architecture, Urban Buildings & Residential Habitations",
            "Residential Properties, Municipal Buildings & Daily Public Institutions"
        ],
        _imposterHints: [
            "City Infrastructure, Streets & Roadways",
            "Metropolitan Transit Infrastructure, Urban Roadways & Highway Sprawls",
            "Civil Engineering Infrastructure, Asphalt Roadways & Urban Intersections"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "HOUSE", "APARTMENT", "CABIN", "CASTLE", "HOTEL", "COTTAGE", "SKYSCRAPER", "BARN",
            "TOWER", "MANSION", "PALACE", "SHACK", "MUSEUM", "FACTORY", "SCHOOL", "HOSPITAL",
            "STADIUM", "CHURCH", "OFFICE", "FORT", "LIBRARY", "STORE", "BANK", "RESTAURANT",
            "BAKERY", "THEATER", "MALL", "GYM", "CAFE", "STATION", "GARAGE", "WAREHOUSE",
            "AIRPORT", "CLINIC", "MARKET", "PRISON", "SHELTER", "MOTEL", "PHARMACY", "POST_OFFICE",
            // 61 Additional Buildings to cross 100
            "CONDOMINIUM", "TOWNHOUSE", "DUPLEX", "BUNGALOW", "CHALET", "VILLA",
            "PENTHOUSE", "STUDIO_APT", "TENEMENT", "DORMITORY", "FRATERNITY_HOUSE", "MONASTERY",
            "CONVENT", "TEMPLE", "CATHEDRAL", "CHAPEL", "MOSQUE", "SYNAGOGUE",
            "SHRINE", "PAGODA", "UNIVERSITY", "COLLEGE", "KINDERGARTEN", "COURTHOUSE",
            "CITY_HALL", "CAPITOL_BLDG", "PARLIAMENT_BLDG", "EMBASSY", "POLICE_STATION_BLDG", "FIREhouse_BLDG",
            "MILITARY_BARRACKS", "ARSENAL", "FORTRESS", "CITADEL", "BLOCKHOUSE", "BUNKER_BLDG",
            "SILO_BLDG", "GRANARY_BLDG", "STABLE_BLDG", "GREENHOUSE", "MILL_BLDG", "WINDMILL",
            "POWER_PLANT", "REFINERY", "FOUNDRY", "DISTILLERY", "BREWERY", "SLAUGHTERHOUSE",
            "CREMATORIUM", "FUNERAL_HOME", "AQUARIUM_BLDG", "PLANETARIUM", "AUDITORIUM_BLDG", "AMPHITHEATER",
            "CONCERT_HALL_BLDG", "CASINO", "SUPERMARKET_BLDG", "DEPARTMENT_STORE", "BOUTIQUE", "BODEGA_BLDG",
            "SKATING_RINK_BLDG"
        ],
        imposterWords: [
            // Original 6
            "STREET", "SIDEWALK", "BRIDGE", "TUNNEL", "HIGHWAY", "ALLEY",
            // 45 Additional City Infrastructure to cross 50
            "AVENUE", "BOULEVARD", "EXPRESSWAY", "FREEWAY", "INTERSTATE", "PARKWAY",
            "LANE_STREET", "DRIVEWAY_INFRA", "CROSSWALK_INFRA", "STREETLIGHT_INFRA", "TRAFFIC_LIGHT_INFRA", "STOP_SIGN_INFRA",
            "OVERPASS", "UNDERPASS", "VIADUCT", "SKYWALK_INFRA", "BOARDWALK", "PROMENADE",
            "PLAZA_INFRA", "SQUARE_INFRA", "ROUNDABOUT", "TRAFFIC_CIRCLE", "CLOVERLEAF_EXCH", "INTERCHANGE",
            "ON_RAMP", "OFF_RAMP", "TOLL_PLAZA", "PARKING_LOT", "PARKING_GARAGE", "BUS_STOP_INFRA",
            "SUBWAY_STATION_INFRA", "TRAIN_TRACKS", "RAILWAY_LINE", "BIKE_LANE", "FIRE_HYDRANT_INFRA", "PARKING_METER_INFRA",
            "MANHOLE", "STORM_DRAIN_INFRA", "SEWER_SYSTEM", "POWER_GRID", "TELEPHONE_POLES", "UTILITY_VAULT",
            "GUARD_RAIL", "SPEED_BUMP", "CUL_DE_SAC"
        ]
    },
    {
        id: "music_instruments",
        _innocentHints: [
            "Musical Audio Concepts, Songs & Listening",
            "Acoustic Audio Systems, Sonic Arrangements & Audio Equipment",
            "Sonic Composition Concepts, Musical Playback Systems & Audio Experiences"
        ],
        _imposterHints: [
            "Physical Instruments, Orchestras & Bands",
            "Tangible Musical Instruments, Instrumental Hardware & Orchestral String Tools",
            "Orchestral Instrumental Hardware, Acoustic Performance Tools & Physical Instrument Assemblies"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 40
            "SONG", "SINGER", "ALBUM", "RADIO", "HEADPHONES", "SPEAKER", "MICROPHONE", "CONCERT",
            "LYRICS", "PLAYLIST", "BAND", "RHYTHM", "MELODY", "BEAT", "CHORUS", "STAGE",
            "TUNE", "VOLUME", "VOICE", "DANCE", "TRACK", "SOUND", "CHORD", "SCALE",
            "NOTES", "PLAYBACK", "STATION", "BROADCAST", "STREAM", "DISC", "RECORD", "PLAYER",
            "INSTRUMENT", "AUDIO", "HARMONY", "SOLO", "DUET", "CONCERT_HALL", "FESTIVAL", "AMPLIFIER",
            // 61 Additional Music Concepts/Audio words to cross 100
            "VOCALS", "HARMONICS", "SYMPHONY", "OPERA", "ORCHESTRATION", "COMPOSITION",
            "SONATA", "CONCERTO", "OVERTURE", "MEDLEY", "REMIX", "TRACK_LIST",
            "STEREO", "MONO", "EQUALIZER", "SUBWOOFER", "EARBUDS", "TURNTABLE",
            "PHONOGRAPH", "CASSETTE", "BOOMBOX", "JUKEBOX", "SOUNDSYSTEM", "MIXING_CONSOLE",
            "SYNTHESIS", "SAMPLING", "REVERB", "ECHO_AUDIO", "PITCH_AUDIO", "TEMPO",
            "METRONOME", "VIBRATO", "TREMOLO", "CRESCENDO", "DECRESCENDO", "STACCATO",
            "LEGATO", "CADENCE", "A_CAPPELLA", "CHORALE", "HYMN", "BALLAD",
            "ANINTHEM", "JINGLE", "RINGTONE", "SOUNDTRACK", "SCORE_MUSIC", "LIBRETTO",
            "BAR_LINE", "CLEF", "TREBLE_CLEF", "BASS_CLEF", "SHARP_NOTE", "FLAT_NOTE",
            "NATURAL_NOTE", "REST_NOTE", "TABLATURE", "SHEET_MUSIC", "ACOUSTICS", "DECIBEL",
            "SONICS"
        ],
        imposterWords: [
            // Original 6
            "GUITAR", "PIANO", "DRUM", "FLUTE", "VIOLIN", "TRUMPET",
            // 45 Additional Instruments to cross 50
            "ACOUSTIC_GUITAR", "ELECTRIC_GUITAR", "BASS_GUITAR", "UKULELE", "BANJO", "MANDOLIN",
            "HARP", "CELLO", "VIOLA", "DOUBLE_BASS", "GRAND_PIANO", "KEYBOARD_INST",
            "SYNTHESIZER_INST", "ACCORDION", "HARMONICA", "PIPE_ORGAN", "SNARE_DRUM", "BASS_DRUM",
            "CYMBALS", "TAMBOURINE", "XILOPHONE", "MARIMBA", "GLOCKENSPIEL", "TRIANGLE_INST",
            "CLARINET", "OBOE", "BASSOON", "SAXOPHONE", "TROMBONE", "TUBA",
            "FRENCH_HORN", "CORNET", "BUGLE", "RECORDER_INST", "PICCOLO", "PAN_FLUTE",
            "BAGPIPES", "SITAR", "SHAKUHACHI", "DIDGERIDOO", "THEREMIN", "BONGO_DRUMS",
            "CONGA_DRUMS", "TIMPANI", "CASTANETS"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 8 / 10) ---
// Total Words in this module: 1,000 innocent words across 10 colossal, non-technical crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 8)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "geography_nature",
        _innocentHints: [
            "Land Geography, Earth Terrain & Map Features",
            "Global Topography, Natural Landform Systems & Cartographic Coordinates",
            "Terrestrial Physical Features, Geological Terrains & Earth Landforms"
        ],
        _imposterHints: [
            "Backyard Gardens, Plants & Lawn Care",
            "Residential Horticulture, Domestic Backyard Gardening & Lawn Maintenance",
            "Suburban Landscaping, Garden Botanicals & Domestic Yard Maintenance"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 104
            "MOUNTAIN", "VALLEY", "CANYON", "PLATEAU", "DESERT", "TUNDRA", "SAVANNA", "FOREST",
            "HILL", "CLIFF", "CAVE", "RIVER", "LAKE", "OCEAN", "SEA", "ISLAND",
            "PENINSULA", "CONTINENT", "HEMISPHERE", "EQUATOR", "COAST", "SHORE", "BEACH", "BAY",
            "GULF", "DELTA", "VOLCANO", "GLACIER", "ICEBERG", "PLAIN", "PRAIRIE", "SWAMP",
            "MARSH", "JUNGLE", "RAINFOREST", "WOODS", "GROVE", "OASIS", "DUNES", "CREEK",
            "STREAM", "POND", "WATERFALL", "GORGE", "RIDGE", "PEAK", "SUMMIT", "SLOPE",
            "BASIN", "CHASM", "CRATER", "GEYSER", "FIORD", "ARCHIPELAGO", "CHANNEL", "STRAIT",
            "SOUND", "REEF", "LAGOON", "WETLAND", "BOG", "FEN", "QUAGMIRE", "MOOR",
            "HEATH", "STEPPE", "TABLELAND", "MESA", "BUTTE", "BADLANDS", "PASS", "CANAL",
            "COASTLINE", "HORIZON", "TOPOGRAPHY", "TERRAIN", "LANDSCAPE", "GROUND", "EARTH", "SOIL",
            "ROCK", "STONE", "BOULDER", "PEBBLE", "SAND", "MUD", "CLAY", "DUST",
            "BORDER", "BOUNDARY", "ZONE", "REGION", "TERRITORY", "COUNTRY", "PROVINCE", "STATE",
            "MAP", "ATLAS", "GLOBE", "COMPASS", "LATITUDE", "LONGITUDE", "MERIDIAN", "ALTITUDE",
            // 11 Additional words to push beyond safety margin
            "OUTCROP", "PROMONTORY", "ESCARPMENT", "SADDLE_POINT", "ALLUVIAL_FAN", "BADLAND", 
            "ESTUARY", "FJELL", "ATAOLL", "INSULARITY", "TOPONYMY"
        ],
        imposterWords: [
            // Original 6
            "GARDEN", "LAWN", "YARD", "PATIO", "SHED", "FENCE",
            // 45 Additional Yard & Horticulture elements to cross 50
            "HEDGE", "FLOWERBED", "MULCH", "FERTILIZER", "COMPOST", "LAWNMOWER",
            "WEEDEATER", "PRUNERS", "TROWEL", "WATERING_CAN", "SPRINKLER", "HOSE_PIPE",
            "GAZEBO", "PERGOLA", "TRELLIS", "BIRD_BATH", "PATIO_CHAIR", "HAMMOCK",
            "DECKING", "SOD_GRASS", "TURF", "WEEDING", "WHEELBARROW", "RAKE_YARD",
            "SPADE_GARDEN", "HOE_GARDEN", "SHEARS", "PLANTER_BOX", "FLOWERPOT", "SEEDLING",
            "TOPIARY", "GREENHOUSE_YARD", "VEGETABLE_PATCH", "ROCKERY", "PATIO_TABLE", "SUN_LOUNGER",
            "OUTDOOR_LIGHTS", "PAVIERS", "GARDEN_GNOME", "SCARECROW", "LEAF_BLOWER", "CHIPPINGS",
            "BARK_MULCH", "DIGGING", "LANDSCAPING"
        ]
    },
    {
        id: "furniture_house",
        _innocentHints: [
            "Indoor Furniture, Comfort Items & Room Decor",
            "Interior Home Furnishings, Domestic Living Space Decor & Soft Goods",
            "Residential Furniture, Interior Room appointments & House Trim Design"
        ],
        _imposterHints: [
            "Structural Construction, Walls & Building Materials",
            "Structural Framework Materials, Building Construction Supplies & Masonry Work",
            "Architectural Framing Elements, Core Raw Building Materials & Hard Foundations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 106
            "CHAIR", "COUCH", "SOFA", "TABLE", "DESK", "BED", "MATTRESS", "PILLOW",
            "BLANKET", "SHEET", "QUILT", "DRESSER", "WARDROBE", "CLOSET", "CABINET", "SHELF",
            "BOOKCASE", "SIDEBOARD", "NIGHTSTAND", "BUREAU", "ARMCHAIR", "RECLINER", "STOOL", "BENCH",
            "FUTON", "CRADLE", "CRIB", "LAMP", "LIGHT", "CHANDELIER", "RUG", "CARPET",
            "MAT", "CURTAIN", "BLINDS", "SHADE", "MIRROR", "CLOCK", "PAINTING", "POSTER",
            "FRAME", "VASE", "CUSHION", "OTTOMAN", "BEANBAG", "DESK_LAMP", "LANTERN", "CANDLE",
            "TAPESTRY", "WALLPAPER", "SCULPTURE", "ORNAMENT", "TRINKET", "BASKET", "BOX",
            "CHEST", "TRUNK", "STAND", "RACK", "HOOK", "HANGER", "DESK_CHAIR", "VANITY",
            "COUNTER", "BAR_STOOL", "COFFEE_TABLE", "END_TABLE", "DINING_TABLE", "BUFFET", "LOVESEAT",
            "DIVAN", "DAYBED", "HEADBOARD", "NIGHT_LIGHT", "SCONCE", "TORCH", "BOOKEND", "MAGAZINE_RACK", 
            "COAT_RACK", "UMBRELLA_STAND", "PLANT_STAND", "SHELVING", "LOCKER", "CABINETRY",
            "DRAWER", "KNOB", "HANDLE", "PULL", "CUPBOARD", "PANTRY", "LINEN_CHEST", "WARDROBE_ trunk",
            "HAMPER", "BEDPOST", "FENDER", "HEARTH_RUG", "MANTELPIECE", "PILLOWCASE", "DUVET",
            // 9 Additional words to comfortably cross 110+
            "VALANCE", "DRAPERIES", "THROW_RUG", "SHASS_LOUNGE", "ECCENTRIC_MIRROR", "CONSOLE_TABLE",
            "CREDENZA", "EAGERE_SHELF", "FOOTSTOOL"
        ],
        imposterWords: [
            // Original 6
            "WALL", "FLOOR", "ROOF", "CEILING", "DOOR", "WINDOW",
            // 45 Additional Structural Framing / Construction Elements to cross 50
            "BRICK", "CONCRETE_BLOCK", "DRYWALL", "PLYWOOD", "BEAM_STEEL", "RAFTER",
            "STUD_WALL", "JOIST", "FOUNDATION_POURED", "INSULATION", "SHINGLE", "SIDING_VINYL",
            "STUCCO", "MORTAR", "CEMENT", "REBAR", "GIRDER", "SCAFFOLDING",
            "LUMBER", "TIMBER", "BLUEPRINT", "FRAMEWORK_STRUCT", "DRYWALL_SCREWS", "TILE_CERAMIC",
            "FLOORBOARD", "STAIRCASE_STRUT", "LINTEL", "SILL_PLATE", "DRIP_EDGE", "FLASHING",
            "TAR_PAPER", "WEATHER_STRIPPING", "CAULK", "MASONRY", "GRAVEL_MIX", "PLASTER",
            "CLADDING", "PANELING_WALL", "SOFFIT", "FASCIA_BOARD", "GABLE_END", "TRUSS_ROOF",
            "PIILING_FOUND", "DRIVEWAY_CONC", "REINFORCEMENT"
        ]
    },
    {
        id: "hobbies_sports",
        _innocentHints: [
            "Casual Creative Hobbies, Arts, Crafts & Collecting",
            "Avocational Crafts, Casual Leisure Hobbies & Art Collecting",
            "Domestic Creative Crafts, Arts, Home Pursuits & General Hobby Collecting"
        ],
        _imposterHints: [
            "Professional Athletics, Mainstream Sports & Training",
            "Competitive Elite Athletics, Institutional Field Sports & Professional Training",
            "Competitive Team Sports, Professional Field Athletics & Tournament Stadium Sports"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 104
            "PAINTING", "DRAWING", "SKETCHING", "SCULPTING", "POTTERY", "CERAMICS", "KNITTING", "SEWING",
            "QUILTING", "EMBROIDERY", "WEAVING", "CROCHET", "SPINNING", "WOODWORKING", "CARVING", "CARPENTRY",
            "GARDENING", "BAKING", "COOKING", "DECORATING", "SCRAPBOOKING", "ORIGAMI", "CALLIGRAPHY", "PHOTOGRAPHY",
            "READING", "WRITING", "POETRY", "JOURNALING", "CHESS", "CHECKERS", "PUZZLES", "CROSSWORDS",
            "SUDOKU", "GAMING", "FISHING", "HIKING", "CAMPING", "BIRD_WATCHING", "STARGAZING", "COLLECTING",
            "STAMPS", "COINS", "ANTIQUES", "POSTCARDS", "MODELS", "TRAINS", "DOLLS", "TOYS",
            "ASTRONOMY", "GEOLOGY", "HERBALISM", "BONSAI", "AQUARIUMS", "TAXIDERMY", "MAGIC_TRICKS", "JUGGLING",
            "DANCING", "SINGING", "KARAOKE", "ACTING", "THEATER", "PODCASTING", "BLOGGING", "VLOGGING",
            "MEDITATION", "YOGA", "PILATES", "FITNESS", "RUNNING", "JOGGING", "WALKING", "SWIMMING",
            "CYCLING", "SKATING", "ROLLERBLADING", "SKATEBOARDING", "SURFING", "SAILING", "KAYAKING", "CANOEING",
            "ROWING", "BOWLING", "DARTS", "BILLIARDS", "POOL", "SNOOKER", "PING_PONG", "BADMINTON",
            "TENNIS", "GOLF", "ARCHERY", "SHOOTING", "HUNTING", "TRAPPING", "FORAGING", "METAL_DETECTING",
            "GEOCACHING", "KITE_FLYING", "MODEL_ROCKETS", "LEGO_BUILDING", "BOARD_GAMES", "CARD_GAMES", "TINKERING", "UPCYCLING",
            // Extra buffers to maximize coverage
            "MACRAME", "FELTING", "GLASSBLOWING", "PYROGRAPHY", "DECOUPAGE", "LEATHERWORKING"
        ],
        imposterWords: [
            // Original 6
            "BASEBALL", "FOOTBALL", "BASKETBALL", "SOCCER", "HOCKEY", "RUGBY",
            // 45 Additional Professional Athletic / Tournament Sports items to cross 50
            "CRICKET_SPORT", "VOLLEYBALL", "TRACK_AND_FIELD", "MARATHON_RACE", "GYMNASTICS_MEET", "WRESTLING_MATCH",
            "BOXING_BOUT", "KICKBOXING", "MARTIAL_ARTS_TOURNEY", "WEIGHTLIFTING_COMP", "POWERLIFTING", "BOBSLEIGH",
            "SPEED_SKATING", "FIGURE_SKATING_COMP", "SKI_JUMPING", "SNOWBOARD_CROSS", "ROWING_REGATTA", "LACROSSE",
            "FIELD_HOCKEY", "WATER_POLO", "HANDBALL_SPORT", "BADMINTON_PRO", "SQUASH_PRO", "RACQUETBALL",
            "FENCING_MATCH", "ARCHERY_COMP", "TRIATHLON", "DECATHLON", "PENTATHLON_PRO", "MOTOCROSS_PRO",
            "FORMULA_ONE", "NASCAR_RACE", "VELODROME_RACING", "POLO_MATCH", "WIND_SURFING_COMP", "SKATEBOARD_VERT",
            "CHEERLEADING_COMP", "RODEO_COMP", "BODYBUILDING_SHOW", "ULTRA_MARATHON", "SPRINT_RACE", "HURDLES_EVENT",
            "JAVELIN_THROW", "DISCUS_THROW", "POLE_VAULT_EVENT"
        ]
    },
    {
        id: "grocery_kitchen",
        _innocentHints: [
            "Supermarket Staples, Groceries & Food Ingredients",
            "Pantry Consumables, Grocery Raw Foodstuffs & Cooking Ingredients",
            "Supermarket Staples, Culinary Baking Essentials & Raw Pantry Produce"
        ],
        _imposterHints: [
            "Kitchen Hardware, Appliances & Dinner Utensils",
            "Mechanical Kitchen Hardware, Large Culinary Appliances & Dinnerware Metalware",
            "Kitchen Counter Appliances, Table Utensils & Preparatory Culinary Metalware"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "FLOUR", "SUGAR", "SALT", "PEPPER", "BUTTER", "MARGARINE", "MILK", "CREAM",
            "CHEESE", "YOGURT", "EGGS", "BREAD", "RICE", "PASTA", "NOODLES", "OATS",
            "CEREAL", "HONEY", "VINEGAR", "OIL", "OLIVE_OIL", "CORNSTARCH", "BAKING_SODA", "YEAST",
            "VANILLA", "CINNAMON", "NUTMEG", "GINGER", "GARLIC", "ONION", "POTATO", "CARROT",
            "TOMATO", "LETTUCE", "SPINACH", "BROCCOLI", "APPLES", "BANANAS", "ORANGES", "GRAPES",
            "STRAWBERRIES", "BLUEBERRIES", "LEMONS", "LIMES", "CHICKEN", "BEEF", "PORK", "FISH",
            "SHRIMP", "TUNA", "SALMON", "BACON", "SAUSAGE", "HAM", "TURKEY", "BEANS",
            "PEAS", "LENTILS", "CORN", "NUTS", "ALMONDS", "WALNUTS", "PEANUTS", "SEEDS",
            "COFFEE", "TEA", "JUICE", "SODA", "WATER", "SOUP", "BROTH", "SAUCE",
            "KETCHUP", "MUSTARD", "MAYONNAISE", "JAM", "JELLY", "PEANUT_BUTTER", "CHOCOLATE", "CANDY",
            "COOKIES", "CRACKERS", "CHIPS", "POPCORN", "PRETZELS", "SAFFRON", "PAPRIKA", "OREGANO",
            "BASIL", "THYME", "PARSLEY", "ROSEMARY", "SAGE", "MINT", "CLOVE", "ALLSPICE",
            "CURRY", "BOUILLON", "COCOA", "GELATIN", "SYRUP", "MOLASSES", "PICKLES", "OLIVES",
            // 14 Additional Grocery items to cross 110
            "LARD", "SHORTENING", "BROWN_SUGAR", "POWDERED_SUGAR", "COCONUT_MILK", "SOY_SAUCE",
            "HOT_SAUCE", "CHILI_POWDER", "CUMIN", "TURMERIC", "CARDAMOM", "CHIA_SEEDS",
            "FLAXSEED", "CHICKPEAS"
        ],
        imposterWords: [
            // Original 6
            "OVEN", "FRIDGE", "SPOON", "FORK", "KNIFE", "PLATE",
            // 45 Additional Kitchen Utility Hardware / Utensils to cross 50
            "MICROWAVE", "BLENDER_KITCH", "TOASTER_HARD", "DISHWASHER_HARD", "DEEP_FRYER_HARD", "SLOW_COOKER_HARD",
            "WAFFLE_IRON_HARD", "KETTLE_HARD", "SPATULA_HARD", "WHISK_HARD", "LADLE_HARD", "TONGS_HARD",
            "PEELER_HARD", "GRATER_HARD", "COLANDER_HARD", "ROLLING_PIN_HARD", "CUTTING_BOARD_HARD", "BOWL_GLASS",
            "MUG_CERAMIC", "SAUCER_HARD", "FRYING_PAN", "STOCKPOT_HARD", "BAKING_SHEET_HARD", "SAUCEPAN_HARD",
            "GARLIC_PRESS_HARD", "CAN_OPENER_HARD", "CORKSCREW_HARD", "KITCHEN_SCALES", "MEASURING_CUPS", "THERMOMETER_MEAT",
            "ICE_CRUSHER", "FOOD_PROCESSOR_HARD", "COFFEE_MAKER_HARD", "BREAD_MAKER_HARD", "CHOPPING_KNIFE", "CLEAVER_METAL",
            "PARING_KNIFE_HARD", "BREAD_BASKET_HARD", "SALAD_SPINNER_HARD", "SIEVE_METAL", "FUNNEL_PLASTIC", "OVEN_MITT_HARD",
            "DISH_RACK_HARD", "KNIFE_BLOCK_WOOD", "GRIDDLE_PLATES"
        ]
    },
    {
        id: "animals_swamp",
        _innocentHints: [
            "Familiar Land Animals & Household Pets",
            "Common Terrestrial Animals, Domesticated Farm Livestock & Household Pets",
            "Familiar Land-Based Vertebrates, Standard Farm Animals & Residential Lap Pets"
        ],
        _imposterHints: [
            "Wetland Reptiles, Amphibians & Swamp Inhabitants",
            "Saturated Wetland Reptiles, Marsh Amphibians & Everglades Swamp Fauna",
            "Semi-Aquatic Bayou Reptiles, Peat Bog Amphibians & Wetland Native Fauna"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "DOG", "CAT", "PUPPY", "KITTEN", "HAMSTER", "GERBIL", "GUINEA_PIG", "RABBIT",
            "BUNNY", "FERRET", "CHINCHILLA", "MOUSE", "RAT", "HORSE", "PONY", "COW",
            "CALF", "BULL", "PIG", "PIGLET", "SHEEP", "LAMB", "GOAT", "KID",
            "CHICKEN", "HEN", "ROOSTER", "CHICK", "DUCK", "DUCKLING", "GOOSE", "GOSLING",
            "TURKEY", "DONKEY", "MULE", "LLAMA", "ALPACA", "DEER", "FAWN", "ELK",
            "MOOSE", "CARIBOU", "REINDEER", "FOX", "WOLF", "COYOTE", "BEAR", "CUB",
            "SQUIRREL", "CHIPMUNK", "RACCOON", "OPOSSUM", "SKUNK", "BADGER", "BEAVER", "OTTER",
            "WEASEL", "MINK", "HERD", "FLOCK", "PET", "LIVESTOCK", "ANIMAL", "CREATURE",
            "MAMMAL", "FUR", "PAW", "HOOF", "TAIL", "WHISKERS", "SNOUT", "MUZZLE",
            "MANE", "FLEECE", "HORN", "ANTLER", "BARN", "PASTURE", "STABLE", "KENNEL",
            "LEASH", "COLLAR", "SADDLE", "BRIDLE", "REINS", "HALTER", "TACK", "COOPER",
            "SHEARING", "MILKING", "GRAZING", "FEED", "HAY", "STRAW", "GRAIN", "CLOVER",
            // 14 Additional Domestic/Land animals to clear 110
            "SOW", "STALLION", "MARE", "GELDING", "EWE", "RAM", 
            "BILLY_GOAT", "Nanny_GOAT", "BOAR", "STEER", "OXEN", "BLOODHOUND", 
            "RETRIEVER", "TOMCAT"
        ],
        imposterWords: [
            // Original 6
            "SNAKE", "GATOR", "FROG", "TOAD", "TURTLE", "LIZARD",
            // 45 Additional Wetland / Swamp / Amphibian creatures to cross 50
            "ALLIGATOR", "CROCODILE", "CAIMAN", "MUD_PUPPY", "HELLBENDER", "SALAMANDER",
            "NEWT", "BULLFROG", "TREE_FROG", "SWAMP_REPTILE", "WATER_MOCCASIN", "COPPERHEAD_SNAKE",
            "COTTONMOUTH", "ANACONDA", "CRAWFISH_SWAMP", "SNAPPER_TURTLE", "BOG_TURTLE", "SOFT_SHELL_TURTLE",
            "SKINK", "MONITOR_LIZARD", "AN0LE", "GECK0_SWAMP", "MARSH_HARE", "NUTRIA",
            "MUSKRAT", "WATER_SNAKE", "MUD_SNAKE", "GAR_FISH", "BOWFIN", "CRAWDAD",
            "LEECH_SWAMP", "MOSQUITO_SWAMP", "DRAGONFLY_MARSH", "WATER_STRIDER", "WHIRLIGIG_BEETLE", "CANE_TOAD",
            "MIDGE_BUG", "HORSEFLY", "BLACK_FLY", "WATER_BUGS", "MUD_SKIPPER", "NEWT_EFT",
            " TADPOLE", "SWAMP_EEL", "MANGROVE_CRAB"
        ]
    },
    {
        id: "school_workplace",
        _innocentHints: [
            "School Classrooms, Learning & Student Items",
            "K-12 Primary Education, Academic Classroom Learning & Student Supplies",
            "School Classroom Pedagogy, Homework Worksheets & Student Learning Tools"
        ],
        _imposterHints: [
            "Adult Workplaces, Offices & Corporate Business",
            "White-Collar Workspaces, Corporate Offices & Enterprise Business Operations",
            "Commercial Business Premises, Corporate Office Cubicles & Professional Employment"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "BACKPACK", "PENCIL", "PEN", "CRAYON", "TEXTBOOK", "ERASER", "RULER", "CHALKBOARD",
            "NOTEBOOK", "HIGHLIGHTER", "MARKER", "GLUE", "SCISSORS", "BINDER", "FOLDER", "RECESS",
            "TEACHER", "STUDENT", "WHITEBOARD", "SHARPENER", "BLACKBOARD", "QUIZ", "LESSON", "HOMEWORK",
            "REPORT_CARD", "DESK", "CLASSROOM", "ALPHABET", "SPELLING", "MATH", "SCIENCE", "HISTORY",
            "LIBRARY", "PRINCIPAL", "GLOBE", "COMPASS", "PLAYGROUND", "LOCKER", "BELL", "CHALK",
            "GRADUATION", "DIPLOMA", "CHAIR", "LESSON_PLAN", "WORKBOOK", "PAPER", "INK",
            "CALENDAR", "SCHEDULE", "TIMETABLE", "PERIOD", "SEMESTER", "TERM", "BREAK", "LUNCHBOX",
            "CAFETERIA", "GYM", "AUDITORIUM", "HALLWAY", "STATIONERY", "STAPLER", "CLIP", "TAPE",
            "PAD", "JOURNAL", "DIARY", "ENCYCLOPEDIA", "DICTIONARY", "ATLAS", "NOVEL", "STORY",
            "ALGEBRA", "GEOMETRY", "BIOLOGY", "CHEMISTRY", "PHYSICS", "GEOGRAPHY", "READING", "WRITING",
            "GRAMMAR", "VOCABULARY", "TEST", "EXAM", "GRADE", "SCORE", "MARK", "CORRECTION",
            "ATTENDANCE", "ABSENCE", "TARDY", "EXCUSE", "PERMIT", "PASS", "BADGE", "UNIFORM",
            // 14 Additional School elements to cross 110
            "VICE_PRINCIPAL", "SUBSTITUTE", "KINDERGARTEN", "ELEMENTARY", "MIDDLE_SCHOOL", "HIGH_SCHOOL",
            "REPORT_CARD_GRADES", "PROTRACTOR_GEOM", "CRAYOLA", "BLACKBOARD_CHALK", "FLASHCARDS_STUDY", "HOMEWORK_ASSIGN",
            "CLASS_PROJECT", "SCIENCE_FAIR"
        ],
        imposterWords: [
            // Original 6
            "OFFICE", "BOSS", "MEETING", "SALARY", "DESK", "REPORT",
            // 45 Additional Corporate Workplace elements to cross 50
            "BOARDROOM", "CUBICLE_DESK", "WATER_COOLER_CORP", "HUMAN_RESOURCES", "MARKETING_DEPT", "PAYROLL_SLIP",
            "QUARTERLY_REVIEW", "CONFERENCE_CALL", "MEMORANDUM_CORP", "INVOICE_BUSINESS", "TIME_SHEET", "EMPLOYEE_ID",
            "PRINTER_COPIER", "SCANNER_OFFICE", "SHREDDER_PAPER", "FILING_CABINET_CORP", "EXECUTIVE_SUITE", "PROMOTION_JOB",
            "COMMISSION_PAY", "OVERTIME_WORK", "LABOR_UNION", "MANAGEMENT_TEAM", "CEO_OFFICE", "SHAREHOLDER_MEET",
            "BUDGET_SPREADSHEET", "BUSINESS_TRIP", "NETWORKING_EVENT", "RESUME_CV", "INTERVIEW_PANEL", "PENSION_PLAN",
            "HEALTH_INSURANCE_BENEFIT", "PROJECT_DEADLINE", "SICK_LEAVE", "VACATION_DAYS", "WORK_STATION", "CLIENT_CONTRACT",
            "MARKET_RESEARCH", "RETAIL_QUOTA", "SALES_PITCH", "CONSULTANT_FIRM", "CORPORATE_LADDER", "DESKTOP_PHONE",
            "BUSINESS_SUIT_ATTIRE", "BRIEFCASE", "OFFICE_MANAGER"
        ]
    },
    {
        id: "weather_clothing",
        _innocentHints: [
            "Daily Atmospheric Weather Conditions",
            "Atmospheric Climate Conditions, Earth Weather Systems & Meteorological States",
            "Terrestrial Weather Phenomenon, Surface Atmosphere & Meteorological Forecasts"
        ],
        _imposterHints: [
            "Winter Outerwear & Cold Weather Garments",
            "Heavy Winter Outerwear, Thermal Protection Garments & Cold Climate Apparel",
            "Sub-Zero Thermal Clothing, Cold Weather Outerwear & Winter Insulated Apparel"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "SUNNY", "RAINY", "CLOUDY", "WINDY", "SNOWY", "FOGGY", "MISTY", "DAMP",
            "BREEZY", "GALE", "HAIL", "SLEET", "BLIZZARD", "TORNADO", "HURRICANE", "THUNDER",
            "LIGHTNING", "FROST", "DEW", "HUMIDITY", "OVERCAST", "CLEAR", "RAINBOW", "SHADE",
            "CHILLY", "FREEZING", "HEATWAVE", "WARMTH", "DRIZZLE", "SQUALL", "TYPHOON", "MONSOON",
            "DUSK", "DAWN", "MILD", "SHOWERS", "FLURRY", "ICICLE", "ZEPHYR", "AIR",
            "SKY", "TEMPEST", "DRAFT", "GUST", "WHIRLWIND", "DOWNPOUR", "DELUGE", "HAZE",
            "SMOG", "FROSTBITE", "SUNSHINE", "SUNBEAM", "CLOUDLESS", "STORMY", "BLUSTERY", "SHOWERY",
            "DRIZZLING", "MUGGY", "STIFLING", "BALMY", "CRISP", "WINTRY", "SUMMERY", "AUTUMNAL",
            "SPRINGLIKE", "THERMOMETER", "BAROMETER", "FORECAST", "CLIMATE", "METEOROLOGY", "ATMOSPHERE", "PRESSURE",
            "FRONT", "TROUGH", "RIDGE", "CURRENT", "AIR_MASS", "VAPOR", "CONDENSATION", "EVAPORATION",
            "PRECIPITATION", "RAIN_GAUGE", "ANEMOMETER", "WEATHERVANE", "LIGHTNING_ROD", "SUNSTROKE", "SHIVER", "SWEAT",
            "BRIGHTNESS", "GLOOM", "TWILIGHT", "SUNRISE", "SUNSET", "MOONLIGHT", "SKYLINE",
            // 14 Additional Weather words to cross 110
            "CYCLONE", "ANTICYCLONE", "HABOOB", "SANDSTORM", "ICE_STORM", "WHITE_OUT",
            "MICROBURST", "MACROBURST", "WIND_CHILL", "HEAT_INDEX", "STRATUS_CLOUD", "CUMULUS_CLOUD",
            "CIRRUS_CLOUD", "NIMBUS_CLOUD"
        ],
        imposterWords: [
            // Original 6
            "COAT", "JACKET", "SWEATER", "SCARF", "GLOVES", "BOOTS",
            // 45 Additional Winter / Heavy Cold Clothing items to cross 50
            "PARKA", "DOWN_JACKET", "TRENCH_COAT", "OVERCOAT_WINT", "PEA_COAT_WINT", "ANORAK",
            "WIND_BREAKER_WINT", "CARDIGAN_HEAVY", "PULLOVER_WOOL", "TURTLENECK_THERM", "HOODIE_FLEECE", "SWEATSHIRT_THERM",
            "MITTENS", "EARMUFFS", "BEANIE", "SKI_MASK", "BALACLAVA", "THERMAL_UNDERWEAR",
            "LONG_JOHNS", "FLEECE_VEST", "SNOW_PANTS", "SKI_SUIT", "OVERALLS_INSULated", "RAINCOAT_HEAVY",
            "DUFFLE_COAT_WINT", "BOILER_SUIT_WINT", "FUR_COAT", "SHEARLING_JACKET", "PUFFER_VEST", "WOOLEN_SOCKS",
            "LEG_WARMERS", "HAND_WARMERS_CLOTH", "SNOW_BOOTS", "MUKLUKS", "GALOSHES", "WEATHER_PROOF_SUIT",
            "INSULATED_GLOVES", "SKI_GLOVES", "FLEECE_LINER", "TURBAN_WOOL", "TRAX_BOOTS", "QUILTED_JACKET",
            "OVER_SHIRT_FLANNEL", "TRACKSUIT_HEAVY", "WINTER_CAP"
        ]
    },
    {
        id: "vehicles_aviation",
        _innocentHints: [
            "Familiar Land Vehicles & Road Transportation",
            "Terrestrial Highway Transit, Rolling Road Vehicles & Rail Transport Systems",
            "Surface Commuting Vehicles, Ground Road Transport & Rail Transit Networks"
        ],
        _imposterHints: [
            "Aerospace Flight, Aircraft & Rocketry",
            "Avionics Transport, Airspace Flight Vehicles & High-Altitude Rocketry",
            "Atmospheric Aviation Craft, Deep Space Rocketry & Celestial Flight Hardware"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 104
            "CAR", "TRUCK", "BUS", "VAN", "TRAIN", "BICYCLE", "MOTORCYCLE", "SCOOTER",
            "TAXI", "SUBWAY", "TRAM", "AMBULANCE", "FIRE_TRUCK", "TRACTOR", "SEDAN", "WAGON",
            "JEEP", "CONVERTIBLE", "COUPE", "LIMOUSINE", "PICKUP", "BULLDOZER", "GOLF_CART", "MOPED",
            "STREETCAR", "LOCOMOTIVE", "CAB", "LINER", "TROLLEY", "RACECAR", "FREIGHTER", "TANKER",
            "SKATEBOARD", "FORKLIFT", "MINIVAN", "CARAVAN", "CRUISER", "SUV", "CROSSER", "ROVER",
            "ENGINE", "MOTOR", "WHEEL", "TIRE", "STEERING", "BRAKE", "ACCELERATOR", "CLUTCH",
            "GEAR", "TRANSMISSION", "EXHAUST", "RADIATOR", "BATTERY", "HEADLIGHT", "WINDSHIELD", "BUMPER",
            "FENDER", "HOOD", "TRUNK", "SEAT", "SEATBELT", "AIRBAG", "DASHBOARD", "SPEEDOMETER",
            "ODOMETER", "FUEL", "GAS", "PETROL", "DIESEL", "OIL", "TANK", "PIPE",
            "HIGHWAY", "STREET", "ROAD", "AVENUE", "LANE", "DRIVEWAY", "FREEWAY", "EXPRESSWAY",
            "INTERSECTION", "CROSSROADS", "ROUNDABOUT", "TRAFFIC", "SIGNAL", "SIGN", "MARKING", "SIDEWALK",
            "CURB", "GUTTER", "PAVEMENT", "ASPHALT", "GRAVEL", "GARAGE", "DRIVE", "PARKING",
            // 6 Additional words to establish strong baseline over 110
            "HATCHBACK", "SEMI_TRUCK", "DUMP_TRUCK", "MONORAIL", "BULLET_TRAIN", "CABLE_CAR"
        ],
        imposterWords: [
            // Original 6
            "PLANE", "COPTER", "GLIDER", "ROCKET", "JET", "BLIMP",
            // 45 Additional Aerospace / Flight / Rocketry words to cross 50
            "AIRLINER", "HELICOPTER", "ZEPPELIN", "HOT_AIR_BALLOON", "FIGHTER_JET", "STEALTH_BOMBER",
            "SPACESHIP", "SPACE_SHUTTLE", "SATELLITE_AV", "DRONE_QUAD", "AEROPLANE", "BIPLANE",
            "MONOPLANE", "SEAPLANE", "HOVERCRAFT_AIR", "PARACHUTE", "HANG_GLIDER", "PARAGLIDER",
            "PROPELLER_AIRCRAFT", "TURBOPROP", "SUPERSONIC_JET", "CONCORDE", "ROCKET_BOOSTER", "SPACE_CAPSULE",
            "LUNAR_MODULE_FLIT", "ORBITER", "LANDER_SPACE", "COMMERCIAL_COCKPIT", "FUSELAGE", "WING_FLAP",
            "AILERON", "TAIL_FIN_AIR", "LANDING_GEAR_AERO", "JET_ENGINE", "AVIONICS_PANEL", "AIR_TRAFFIC_CONTROL",
            "RUNWAY_FLIT", "HANGAR_AIRCRAFT", "LAUNCH_PAD", "MISSILE_AERO", "AIRSHIP", "AUTOGYRO",
            "GYROCOPTER", "STRATOSPHERE_CRAFT", "CELESTIAL_PROBE"
        ]
    },
    {
        id: "clothing_shoes",
        _innocentHints: [
            "Standard Garments, Tops, Pants & Dresses",
            "Main Wardrobe Apparel, Upper-Body Textile Garments & Outwear Design",
            "Mainstream Body Attire, Tailored Woven Garments & Wardrobe Apparel"
        ],
        _imposterHints: [
            "Footwear, Protective Shoes & Sandals",
            "Ankle Footwear Protective Gear, Running Shoes & Summer Sandals",
            "Pedal Base Footwear, Specialized Walking Shoes & Athletic Sports Cleats"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 104
            "SHIRT", "PANTS", "JACKET", "SCARF", "GLOVES", "SWEATER", "BLOUSE", "DRESS",
            "SKIRT", "VEST", "TROUSERS", "COAT", "BLAZER", "CARDIGAN", "TUNIC", "ROBE",
            "PONCHO", "PARKA", "SHORTS", "SUIT", "TUXEDO", "SWEATSHIRT", "HOODIE", "PAJAMAS",
            "JEANS", "OVERALLS", "RAINCOAT", "JERSEY", "BELT", "TIE", "HAT", "CAP",
            "SOCK", "STOCKING", "GOWN", "KILT", "SWIMSUIT", "UNIFORM", "CAPE", "CLOTHING",
            "GARMENT", "APPAREL", "ATTIRE", "OUTFIT", "WARDROBE", "FASHION", "STYLE", "FABRIC",
            "CLOTH", "TEXTILE", "MATERIAL", "COTTON", "WOOL", "SILK", "LINEN", "DENIM",
            "LEATHER", "VELVET", "SATIN", "LACE", "THREAD", "YARN", "BUTTON", "ZIPPER",
            "SNAP", "HOOK", "EYE", "POCKET", "SLEEVE", "COLLAR", "CUFF", "HEM",
            "SEAM", "STITCH", "STITCHING", "LINING", "PADDING", "PATTERNS", "STRIPES", "CHECKS",
            "PLAID", "DOTS", "PRINT", "DESIGN", "TAILOR", "SEAMSTRESS", "ALTERATION", "FITTING",
            "SIZE", "MEASUREMENT", "TREND", "BRAND", "LABEL", "TAG", "COSTUME",
            // 6 Additional Woven Garments to lock down 110+
            "POLO_SHIRT", "TANK_TOP", "LEOTARD", "LEGGINGS", "TIGHTS", "BOW_TIE"
        ],
        imposterWords: [
            // Original 6
            "SHOE", "BOOT", "SNEAKER", "SANDAL", "SLIPPER", "HEEL",
            // 45 Additional Footwear / Heel / Running shoe items to cross 50
            "RUNNING_SHOE", "TRAINER_SHOE", "TENNIS_SHOE", "BASKETBALL_SHOE", "CLEAT", "HIKING_BOOT",
            "WORK_BOOT", "COWBOY_BOOT", "RAIN_BOOT", "SNOW_BOOT", "ANKLE_BOOT", "CHELSEA_BOOT",
            "STILETTO", "PLATFORM_HEEL", "WEDGE_SHOE", "KITTEN_HEEL", "LOAFER", "OXFORD_SHOE",
            "BROGUE", "DERBY_SHOE", "BOAT_SHOE", "MOCCASIN", "ESPADRILLE", "BALLET_FLAT",
            "CLOG", "MULE_SHOE", "FLIP_FLOP", "SLIDE_SANDAL", "GLADIATOR_SANDAL", "HOUSE_SLIPPER",
            "CANVAS_SHOE", "DECK_SHOE", "SABOT", "GALOSHE", "WADER_BOOT", "PUMP_SHOE",
            "MARY_JANE_SHOE", "TRACK_SPIKE", "COMBAT_BOOT", "CHUKKA_BOOT", "KNEE_HIGH_BOOT", "MONK_STRAP_SHOE",
            "HIGH_TOP_SNEAKER", "LOW_TOP_SNEAKER", "FOOTWEAR_BASE"
        ]
    },
    {
        id: "music_performance",
        _innocentHints: [
            "Audio Equipment, Songs, Tracks & Playback",
            "Acoustic Audio Equipment, Sonic Signal Tracks & Media Playback Systems",
            "Electronic Audio Engineering, Studio Track Recordings & Media Playback Equipment"
        ],
        _imposterHints: [
            "Physical Band Instruments & Orchestral Gear",
            "Tangible Musical Instruments, Mechanical Orchestra Gear & Band Performance Hardware",
            "Orchestral Instrumental Hardware, Structural Band Instruments & Physical Acoustic Assemblies"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 104
            "SONG", "SINGER", "ALBUM", "RADIO", "HEADPHONES", "SPEAKER", "MICROPHONE", "CONCERT",
            "LYRICS", "PLAYLIST", "BAND", "RHYTHM", "MELODY", "BEAT", "CHORUS", "STAGE",
            "TUNE", "VOLUME", "VOICE", "DANCE", "TRACK", "SOUND", "CHORD", "SCALE",
            "NOTES", "PLAYBACK", "STATION", "BROADCAST", "STREAM", "DISC", "RECORD", "PLAYER",
            "INSTRUMENT", "AUDIO", "HARMONY", "SOLO", "DUET", "CONCERT_HALL", "FESTIVAL", "AMPLIFIER",
            "EQUIPMENT", "GEAR", "SYSTEM", "MIXER", "CABLE", "WIRE", "PLUG", "JACK",
            "SIGNAL", "TRANSMISSION", "ANTENNA", "RECEIVER", "TUNER", "DIAL", "BUTTON", "SWITCH",
            "REMOTE", "CONTROL", "SCREEN", "DISPLAY", "DIGITAL", "ANALOG", "TAPE", "CASSETTE",
            "CD", "VINYL", "TURNTABLE", "NEEDLE", "GROOVE", "STYLUS", "CARTRIDGE", "DECK",
            "RECORDER", "STUDIO", "BOOTH", "ACOUSTICS", "ECHO", "REVERB", "DELAY", "DISTORTION",
            "FEEDBACK", "NOISE", "SILENCE", "PAUSE", "STOP", "PLAY", "REWIND", "FORWARD",
            "SKIP", "LOOP", "SHUFFLE", "REPEAT", "VOLUME_KNOB", "HEADSET", "EARBUDS", "BOOMBOX",
            // 6 Additional Audio terms to lock down 110+
            "SUBWOOFER", "EQUALIZER", "VOCALS", "STEREO", "MONO_AUDIO", "PHONOGRAPH"
        ],
        imposterWords: [
            // Original 6
            "PIANO", "GUITAR", "DRUM", "FLUTE", "VIOLIN", "HORN",
            // 45 Additional Physical Performance Instruments to cross 50
            "ACOUSTIC_GUITAR", "ELECTRIC_GUITAR", "BASS_GUITAR", "UKULELE", "BANJO", "MANDOLIN",
            "HARP", "CELLO", "VIOLA", "DOUBLE_BASS", "GRAND_PIANO", "KEYBOARD_INST",
            "SYNTHESIZER_INST", "ACCORDION", "HARMONICA", "PIPE_ORGAN", "SNARE_DRUM", "BASS_DRUM",
            "CYMBALS", "TAMBOURINE", "XYLOPHONE", "MARIMBA", "GLOCKENSPIEL", "TRIANGLE_INST",
            "CLARINET", "OBOE", "BASSOON", "SAXOPHONE", "TROMBONE", "TUBA",
            "FRENCH_HORN", "CORNET", "BUGLE", "RECORDER_INST", "PICCOLO", "PAN_FLUTE",
            "BAGPIPES", "SITAR", "SHAKUHACHI", "DIDGERIDOO", "THEREMIN", "BONGO_DRUMS",
            "CONGA_DRUMS", "TIMPANI", "CASTANETS"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 9 / 10) ---
// Total Words in this module: 1,000 innocent words across 10 colossal, non-technical crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 9)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "toys_sports_large",
        _innocentHints: [
            "Children's Toys, Board Games & Playground Items",
            "Youth Playground Equipment, Recreational Children's Toys & Tabletop Board Games",
            "Nursery Toys, Juvenile Playground Assets & Early Childhood Board Games"
        ],
        _imposterHints: [
            "Professional Sports Equipment & Stadium Games",
            "Professional Varsity Athletic Equipment, Institutional Ball Games & Stadium Sports",
            "Competitive Arena Sports Gear, Professional Ball Sports & Stadium Match Athletics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "DOLL", "MARBLES", "BLOCKS", "TEDDY_BEAR", "SANDBOX", "SLIDE", "SWING", "PUZZLE",
            "KITE", "YOYO", "SPINNER", "BALLOON", "PLAYDOUGH", "TRICYCLE", "SCOOTER", "CRAYONS",
            "BUBBLES", "CHECKERS", "DOMINOES", "LEGO", "WAGON", "PUPPET", "SEESAW", "PLAYHOUSE",
            "RATTLE", "TOP", "HULA_HOOP", "SKATES", "FRISBEE", "JUMP_ROPE", "CHALK", "BEANBAG",
            "STUFFED_ANIMAL", "TRAIN_SET", "ACTION_FIGURE", "PLAYMAT", "MONOPOLY", "CARDS", "DICE", "GLIDER",
            "SCRABBLE", "CLUE", "TWISTER", "JENGA", "PLAY_TENT", "SOLDIERS", "KNEEPADS", "HELMET",
            "TRIKE", "ROCKING_HORSE", "JACKS", "SLIME", "STICKERS", "STENCIL", "PAINT_BOX", "COLORING_BOOK",
            "PUZZLE_PIECE", "PLAY_MONEY", "TOKENS", "GAMEBOARD", "SAND_CASTLE", "SHOVEL", "PAIL",
            "WATER_GUN", "CRAFT_KIT", "BEADS", "STAMPS", "INKPAD", "GLITTER", "RIBBON", "YARN",
            "MODEL_CAR", "TRACKS", "DOCK", "CRANE", "BLOCK_TOWER", "FORT", "CUSHIONS", "MAT",
            "RUBBER_DUCK", "BOAT_TOY", "SUBMARINE", "WATER_WHEEL", "SIFTER", "MOLD", "STUFFING", "BUTTON_EYES",
            "PIGGY_BANK", "COINS", "PLAY_STORE", "SCALE", "CASH_REGISTER", "TEACUPS", "POT", "SPOON",
            // 15 Additional items to clear 110+
            "BARBIE", "HOT_WHEELS", "Lincoln_LOGS", "PLAY_SETS", "FINGER_PUPPET", "TINKERTOYS",
            "BABY_DOLL", "MR_POTATO_HEAD", "SOCK_PUPPET", "NERF_DART", "NURSERY_BLOCKS", "MARBLE_RUN",
            "DUMPER_TOY", "TOY_SOLDIER", "JACK_IN_THE_BOX"
        ],
        imposterWords: [
            // Original 6
            "FOOTBALL", "BASKETBALL", "BASEBALL", "SOCCERBALL", "TENNIS_RACKET", "GOLF_CLUB",
            // 45 Additional professional sports gear elements to hit 51
            "RUGBY_BALL", "CRICKET_BAT", "HOCKEY_STICK", "SHUTTLECOCK", "BASEBALL_BAT", "CATCHERS_MITT",
            "PUNCHING_BAG", "BOXING_GLOVES", "WEIGHT_BARBELL", "KETTLEBELL_PRO", "VAULTING_HORSE", "POMMEL_HORSE",
            "TENNIS_NET", "SOCCER_NET", "BASKETBALL_HOOP", "BASEBALL_BASES", "ATHLETIC_HURDLES", "JAVELIN_SPEAR",
            "DISCUS_PLATE", "SHOTPUT_BALL", "POLE_VAULT_POLE", "ICE_SKATES_PRO", "HOCKEY_PUCK", "BOWLING_BALL",
            "BOWLING_PINS", "GOLF_TEE", "GOLF_BAG", "LACROSSE_STICK", "POLO_MALLET", "SKIS_PRO",
            "SKI_POLES", "SNOWBOARD_PRO", "BOBSLED_CHASSIS", "CURLING_STONE", "CURLING_BROOM", "ARCHERY_BOW",
            "TARGET_MAT", "SQUASH_RACQUET", "BADMINTON_RACKET", "RACQUETBALL_PADDLE", "PING_PONG_PADDLE", "STARTING_BLOCKS",
            "GYMNASTIC_RINGS", "BALANCE_BEAM", "STOPWATCH_COACH"
        ]
    },
    {
        id: "ocean_beach_large",
        _innocentHints: [
            "Open Ocean Environment, Marine Life & Deep Water",
            "Pelagic Ecosystems, Marine Ocean Life & Bathypelagic Deep Water Features",
            "Open Pelagic Seas, Oceanic Biology & Deep Sea Biological Zones"
        ],
        _imposterHints: [
            "Sandy Beaches, Shoreline Activities & Summer Resorts",
            "Littoral Sandy Beaches, Coastal Shoreline Activities & Summer Vacation Resorts",
            "Intertidal Sandy Coastlines, Sunbathing Shoreline Recreation & Maritime Holiday Resorts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "WAVE", "CURRENT", "TIDE", "CORAL", "REEF", "SEAWEED", "ABYSS", "TRENCH",
            "WATER", "SALT", "ICEBERG", "BAY", "GULF", "STRAIT", "SHORELINE", "DEPTHS",
            "FOAM", "SPRAY", "HARBOR", "SHELF", "CAPTAIN", "WHALE", "SHARK", "DOLPHIN",
            "JELLYFISH", "SQUID", "OCTOPUS", "STINGRAY", "SEAHORSE", "WALRUS", "MANATEE", "ORCA",
            "SALMON", "TUNA", "KRILL", "PLANKTON", "LOBSTER", "SPONGE", "URCHIN", "BARNACLE",
            "MACKEREL", "ANEMONE", "SEAL", "SEA_LION", "OTTER", "PENGUIN", "ALBATROSS", "PELICAN",
            "GULL", "CORMORANT", "KELP", "ALGAE", "SHELLFISH", "SHRIMP", "PRAWN", "CRAB",
            "CLAM", "OYSTER", "MUSSEL", "SCALLOP", "STARFISH", "EEL", "RAY", "FLOUNDER",
            "COD", "HALIBUT", "SARDINE", "ANCHOVY", "HERRING", "TROUT", "SWORDFISH", "MARLIN",
            "SAILFISH", "BARRACUDA", "PERCH", "MINNOW", "GUPPY", "CORAL_BED", "CAVERN", "UNDERWATER",
            "SURF", "SWELL", "WHITECAP", "UNDERTOW", "RIP_CURRENT", "FLOOD", "EBB", "HIGH_TIDE",
            "LOW_TIDE", "NAVIGATOR", "SUBMARINE", "VESSEL", "FLEET", "ANCHOR", "BUOY", "LIGHTHOUSE",
            // 14 Additional Marine elements to hit 110+
            "MIDWATER", "HYDROTHERMAL_VENT", "PHYTOPLANKTON", "ZOOPLANKTON", "DUGONG", "NARWHAL",
            "BELUGA", "STURGEON", "GROUPER", "SNAPPER_FISH", "SEA_CUCUMBER", "HERMIT_CRAB",
            "NAUTILUS", "MAN_O_WAR"
        ],
        imposterWords: [
            // Original 6
            "SAND", "TOWEL", "SUNSCREEN", "UMBRELLA", "BEACH_CHAIR", "SUNGLASSES",
            // 45 Additional littoral beach resort words to hit 51
            "BOARDWALK", "DECK_CHAIR", "BEACH_BALL", "SAND_CASTLE_MOLD", "SUNBED", "CABANA",
            "RESORT_HOTEL", "TIKI_BAR", "LIFEGUARD_TOWER", "SWIM_TRUNKS", "BIKINI", "FLIP_FLOPS",
            "SHORE_LINE_RESORT", "SUN_LOUNGER", "BEACH_UMBRELLA", "COOLER_BOX", "FRISBEE_BEACH", "PARAS0L",
            "SUN_TAN_LOTION", "BRONZING_GEL", "SAND_DUNES", "PROMENADE", "SHORE_RESORT", "ICE_CREAM_KIOSK",
            "SOUVENIR_SHOP", "SURFBOARD_RENTAL", "JET_SKI_RENT", "BEACH_VOLLEYBALL", "WIND_SCREEN", "ST0RAW_HAT",
            "BEACH_BAG", "TOWEL_RACK", "OUTDOOR_SHOWER", "PIER_WALK", "COASTAL_RESORT", "VACATION_VILLA",
            "PALM_SHADE", "PINA_COLADA", "SWIMMING_POOL_RESORT", "CHAISE_LOUNGUE", "SUN_ROOF", "MATCH_BEACH",
            "DUNE_BUGGY", "SANDALS_BEACH", "BOARDWALK_ARCADE"
        ]
    },
    {
        id: "breakfast_sweets",
        _innocentHints: [
            "Morning Breakfast Foods, Griddles & Hot Drinks",
            "Matutinal Breakfast Staples, Griddle Platters & Hot Morning Beverages",
            "Morning Griddle Foods, Breakfast Table Cookery & Early Beverages"
        ],
        _imposterHints: [
            "Bakery Desserts, Candy Shops & Sweet Treats",
            "Confectionery Bakery Desserts, Candy Shop Sweets & Post-Dinner Treats",
            "Sugary Bakery Pastries, Confectionery Counter Treats & Dessert Sweets"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "WAFFLE", "PANCAKE", "TOAST", "CEREAL", "MILK", "COFFEE", "EGGS", "BACON",
            "SAUSAGE", "HAM", "OATMEAL", "PORRIDGE", "BAGEL", "CROISSANT", "MUFFIN", "BISCUIT",
            "GRAVY", "SYRUP", "HONEY", "BUTTER", "JAM", "JELLY", "MARMALADE", "YOGURT",
            "FRUIT", "BERRIES", "GRAPEFRUIT", "JUICE", "TEA", "ESPRESSO", "LATTE", "CAPPUCCINO",
            "SMOOTHIE", "CREPE", "OMELET", "SCRAMBLE", "FRITTATA", "HASHBROWNS", "POTATOES", "GRITS",
            "SCONE", "DANISH", "PASTRY", "DONUT", "CINNAMON_ROLL", "GRANOLA", "MUESLI", "BRAN",
            "FLAKES", "PUFFS", "SPOON", "BOWL", "MUG", "CUP", "KETTLE", "TOASTER",
            "SKILLET", "GRIDDLE", "BLENDER", "COFFEE_POT", "FRIDGE", "BREAKFAST_BAR", "COUNTER",
            "MORNING", "SUNRISE", "CAFFEINE", "DECAF", "SUGAR", "CREAMER", "SWEETENER", "SAUCER",
            "PLATTER", "NAPKIN", "AVOCADO_TOAST", "FRENCH_TOAST", "WAFFLE_IRON", "EGG_CUP", "TIMER",
            "PITCHER", "CARAFE", "THERMOS", "BAKED_BEANS", "MUSHROOMS", "TOMATOES", "STEAK", "SALMON",
            "CHEF", "MENU", "DINER", "CAFE", "BUFFET", "TOASTER_PASTRY", "OAT_MILK", "ALMOND_MILK",
            // 15 Additional Morning items to hit 111
            "POACHED_EGGS", "BENEDICT", "HOLLANDAISE", "ENGLISH_MUFFIN", "CHILAQUILES", "CORNED_BEEF_HASH",
            "CHURROS_BREAKFAST", "BREAKFAST_BURRITO", "FRUIT_SALAD", "SAUSAGE_LINKS", "SAUSAGE_PATTY", "BLACK_COFFEE",
            "BELGIAN_WAFFLE", "PUE_AIR_JUICE", "BREAKFAST_TEA"
        ],
        imposterWords: [
            // Original 6
            "CHOCOLATE", "CANDYBAR", "LOLLIPOP", "GUMMY_BEAR", "FUDGE", "ICING",
            // 45 Additional Confectionery / Bakery treats to cross 50
            "COTTON_CANDY", "JELLY_BEANS", "GUMDROPS", "LICORICE", "TAFFY", "PEPPERMINT",
            "TOFFEE", "CARAMEL_CANDY", "TRUFFLE_CHOC", "BONBON", "PRALINE", "MARZIPAN",
            "MARSHMALLOW_SWEET", "NOUGAT", "FROSTING", "CUPCAKE_DESSERT", "BROWNIE_SWEET", "CHEESECAKE_PIECE",
            "APPLE_PIE", "WEDDING_CAKE", "CHOCOLATE_MOUSSE", "PUDDING_SWEET", "CUSTARD_TART", "ECLAIR",
            "MACARON", "PROFITEROLE", "GELATO", "ICE_CREAM_CONE", "SORBET_SWEET", "SUNDAE_GLASS",
            "MILKSHAKE_SWEET", "BAKLAVA", "TURKISH_DELIGHT", "CANDY_CANE", "BUBBLE_GUM", "SOUR_PATCH",
            "JAWBREAKER", "PRALINES_SWEET", "FUDGE_BAR", "GANACHE", "MERINGUE", "GINGERBREAD_HOUSE",
            "CHOC_CHIP_COOKIE", "SHORTBREAD_SWEET", "SWEET_SHOP_BOX"
        ]
    },
    {
        id: "farming_groceries",
        _innocentHints: [
            "Country Farms, Barnyard Animals & Harvesting",
            "Agrarian Country Farms, Livestock Husbandry & Autumn Crop Harvesting",
            "Rural Agrarian Farms, Barnyard Livestock & Crop Harvesting Operations"
        ],
        _imposterHints: [
            "Supermarket Aisles, Shopping Carts & Registers",
            "Commercial Supermarket Aisles, Retail Shopping Carts & Point-of-Sale Registers",
            "Retail Grocery Aisles, Wire Shopping Carts & Front Counter Cash Registers"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "TRACTOR", "BARN", "SILO", "FIELD", "COW", "CROP", "HORSE", "PIG",
            "SHEEP", "CHICKEN", "GOAT", "ROOSTER", "DONKEY", "LLAMA", "PASTURE", "MEADOW",
            "SOIL", "DIRT", "MUD", "SEED", "WHEAT", "CORN", "HAY", "STRAW",
            "FENCE", "GATE", "STABLE", "COOP", "PENN", "WAGON", "PLOW", "HARVEST",
            "FARMER", "RANCH", "ORCHARD", "GARDEN", "GREENHOUSE", "WINDMILL", "WELL", "PUMP",
            "SHOVEL", "HOE", "RAKE", "PITCHFORK", "SCARECROW", "GRAIN", "BARLEY", "OATS",
            "ALFALFA", "FEED", "TROUGH", "BUCKET", "SADDLE", "REINS", "BRIDLE", "CHICK",
            "HEN", "LAMB", "CALF", "PIGLET", "FOAL", "DUCK", "GOOSE", "TURKEY",
            "BULL", "STALLION", "EWE", "RAM", "SOW", "HERD", "FLOCK", "SHEPHERD",
            "MILK_PAIL", "EGG_BASKET", "TRUCK", "TRAILER", "BARBED_WIRE", "ACRE", "LAND", "COWBOY",
            "BOOTS", "OVERALLS", "HAT", "SUNSHINE", "WEATHER", "SEASON", "SPRING", "SUMMER",
            "AUTUMN", "WINTER", "RAIN", "GROWTH", "ROOT", "SPROUT", "STALK", "LEAF",
            // 14 Additional Farm words to push beyond 110
            "COMBINE_HARVESTER", "HAY_BALER", "FARROWING_PEN", "POULTRY_YARD", "HOMESTEAD", "PADDOCK",
            "VINEYARD", "HYDROPONICS", "IRRIGATION", "FERTILIZATION", "RYE_FIELD", "SORGHUM",
            "SHEPHERD_DOG", "FARM_HAND"
        ],
        imposterWords: [
            // Original 6
            "CART", "CASHIER", "BARCODE", "AISLE", "RECEIPT", "SHELF",
            // 45 Additional Supermarket Retail words to cross 50
            "SHOPPING_CART", "CHECKOUT_LANE", "CASH_REGISTER_RETAIL", "CONVEYOR_BELT", "PRICE_TAG", "SCANNER_GUN",
            "GROCERY_BAG", "PAPER_BAG_RETAIL", "PLASTIC_BAG_RETAIL", "PRODUCE_SECTION", "DELI_COUNTER", "BAKERY_AISLE",
            "FROZEN_FOOD_CASE", "DAIRY_WALK_IN", "MEAT_DISPLAY", "SUPERMARKET_BASKET", "COUPON_CLIP", "STORE_SCANNER",
            "BULK_BINS", "RETAIL_EMPLOYEE", "STOCK_BOY", "STORE_MANAGER", "LOYALTY_CARD", "CREDIT_CARD_READER",
            "SELF_CHECKOUT", "RECEIPT_PRINTER", "AISLE_SIGN", "GROCERY_LIST", "PRICE_CHECK", "ENDCAP_DISPLAY",
            "REFRIGERATED_CASE", "FREEZER_AISLE", "RETAIL_SCALES", "DELI_SCALES", "FOOD_STAMP", "EXPRESS_LANE",
            "BAGGER_RETAIL", "ROLLING_BASKET", "CLEARANCE_RACK", "STORE_DISPLAY", "AISLE_MARKER", "GROCERY_CART_WHEEL",
            "CHECKOUT_DIVIDER", "STORE_INTERCOM", "SUPERMARKET_MANAGER"
        ]
    },
    {
        id: "bugs_reptiles_large",
        _innocentHints: [
            "Backyard Insects, Bugs & Creepy Crawlies",
            "Terrestrial Backyard Invertebrates, Micro Insects & Garden Creepy Crawlies",
            "Garden Arthropods, Entomological Backyard Insects & Common Creepy Crawlies"
        ],
        _imposterHints: [
            "Swamp Reptiles, Amphibians & Scaled Creatures",
            "Wetland Herpetology, Swamp Reptiles & Scaled Saturated Creatures",
            "Saturated Sump Reptiles, Bayou Amphibians & Scaled Marsh Vertebrates"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 92
            "ANT", "BEE", "BEETLE", "BUTTERFLY", "DRAGONFLY", "CATERPILLAR", "MOSQUITO", "CRICKET",
            "GRASSHOPPER", "LADYBUG", "WASP", "MOTH", "FLY", "TERMITE", "FLEA", "TICK",
            "CICADA", "FIREFLY", "ROACH", "MANTIS", "HORNET", "GNAT", "APHID", "WEEVIL",
            "SPIDER", "SCORPION", "CENTIPEDE", "MILLIPEDE", "MITE", "WEB", "HIVE",
            "NEST", "COCOON", "PUPA", "LARVA", "WING", "ANTENNA", "SHELL", "EXOSKELETON",
            "SWARM", "COLONY", "HONEY", "WAX", "SILK", "THREAD", "BARK", "LEAF",
            "SOIL", "DIRT", "FLOWER", "GARDEN", "YARD", "BUG", "CREEPY", "CRAWLY",
            "BITE", "STING", "BUZZ", "CHIRP", "GLOW", "FLUTTER", "CRAWL", "HOP",
            "MIDGE", "MAGGOT", "GRUB", "EARWIG", "STINKBUG", "LOCH", "SILKWORM",
            "CHRYSALIS", "BEDBUG", "LOUSE", "WOODBORER", "MAYFLY", "STONEFLY", "CADDISFLY",
            "DAMSELFLY", "HORSEFLY", "DEERFLY", "FRUITFLY", "BLOWFLY", "NYMPH", "EGG",
            "CLUSTER", "OUTBREAK", "INFESTATION",
            // 18 Additional Micro-bug words to cross 110 safely
            "HORNET_NEST", "YELLOWJACKET", "BUMBLEBEE", "HONEYBEE", "WEEVIL_BUG", "BOLL_WEEVIL",
            "DUNG_BEETLE", "STAG_BEETLE", "SCARAB", "SPIDER_WEB", "TARANTULA", "BLACK_WIDOW",
            "PRAYING_MANTIS", "KATYDID", "LEAFHOPPER", "FLEA_BITE", "MAGGOT_FLY", "CLOVER_MITE"
        ],
        imposterWords: [
            // Original 6
            "SNAKE", "LIZARD", "TURTLE", "FROG", "TOAD", "ALLIGATOR",
            // 45 Additional Swamp Herpetology Elements to hit 51
            "CROCODILE", "CAIMAN", "GHARIAL", "GATOR_SWAMP", "LEATHERBACK_TURTLE", "SNAPPER",
            "BOX_TURTLE", "SEA_TURTLE_SWAMP", "GECKO_SCALED", "CHAMELEON", "IGUANA", "MONITOR_LIZARD",
            "GILA_MONSTER", "AN0LE_LIZARD", "SKINK_SCALED", "BULLFROG_AMPH", "TREE_FROG_AMPH", "POISON_DART_FROG",
            "LEOPARD_FROG", "WOOD_FROG", "HORNED_TOAD", "CANE_TOAD_AMPH", "SALAMANDER_SWAMP", "NEWT_AMPH",
            "MUDPUPPY", "HELLBENDER", "WATER_MOCCASIN", "COTTONMOUTH_SNAKE", "COPPERHEAD", "RATTLESNAKE",
            "GARTER_SNAKE", "CORN_SNAKE", "BOA_CONSTRICTOR", "ANACONDA_SWAMP", "PYTHON_SCALED", "VIPER_SNAKE",
            "MAMBA", "COBRA_REPT", "ASPS_REPT", "ADDER_SNAKE", "SLOW_WORM", "LEGLESS_LIZARD",
            "WALL_LIZARD", "WATER_DRAGON", "MANGROVE_SNAKE"
        ]
    },
    {
        id: "cleaning_laundry",
        _innocentHints: [
            "Housework Cleaning, Sweeping & Dusting Supplies",
            "Domestic Housework Cleaning, Hard Surface Sweeping & Utility Dusting Supplies",
            "Residential Sanitation, Floor Sweeping Tools & Manual Janitorial Supplies"
        ],
        _imposterHints: [
            "Washing Clothes, Laundry Rooms & Wardrobe Care",
            "Mechanical Clothes Washing, Automated Laundry Rooms & Fabric Wardrobe Care",
            "Apparel Washing Machinery, Dedicated Laundry Rooms & Garment Maintenance"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 88
            "BROOM", "MOP", "SPONGE", "VACUUM", "BUCKET", "SOAP", "DUSTER", "BLEACH",
            "TRASHCAN", "RAG", "BRUSH", "WIPES", "DETERGENT", "SCRUBBER", "SQUEEGEE", "GLOVES",
            "SPRAY", "SINK", "DRAIN", "GARBAGE", "PLUNGER", "TOWEL", "SCRUB", "WIPE",
            "SWEEP", "DUST", "CLEANER", "POLISH", "WAX", "SHINE", "SPRAY_BOTTLE", "HOSE",
            "NOZZLE", "WATER", "SUDS", "BUBBLES", "FOAM", "TRASH_BAG", "DUSTPAN", "SCOOP",
            "SCRAPER", "PAD", "STEEL_WOOL", "PUMICE", "AMMONIA", "VINEGAR", "BAKING_SODA", "DISINFECTANT",
            "SANITIZER", "MASK", "APRON", "OVERALLS", "BOOTS", "CLOTH", "MICROFIBER", "FEATHER_DUSTER",
            "CARPET_SWEEPER", "TRASH_CHUTE", "BIN", "CANISTER", "FILTER", "BAG", "HOV_CRAFT", "BRISTLES",
            "HANDLE", "POLE", "SHAFT", "WHEELS", "CORD", "PLUG", "SWITCH", "MOTOR",
            "SUCTION", "AIR_FILTER", "VENT", "HOOD", "GRATE", "SCREEN", "WINDOW_CLEANER", "FLOOR_WAX",
            "STAIN_REMOVER", "ODOR_SPRAY", "FRESHENER", "DEODORIZER", "PURIFIER", "SCRUB_BRUSH", "TOILET_BRUSH",
            // 22 Additional Manual Housework elements to cross 110
            "SCRUB_PAD", "SCOURING_POWDER", "FURNITURE_POLISH", "LIME_REMOVER", "TILE_CLEANER", "GROUT_BRUSH",
            "DUST_MOP", "WET_MOP", "SPONGE_MOP", "VACUUM_BAG", "VACUUM_HOSE", "WALL_CLEANER",
            "CEILING_BRUSH", "HAND_WIPES", "CLEANING_CART", "JANITOR_BUCKET", "RUBBER_GLOVES", "CHAMOIS_CLOTH",
            "LINT_BRUSH", "SCRUB_BUCKET", "DEGREASER", "BLEACH_SPRAY"
        ],
        imposterWords: [
            // Original 6
            "WASHER", "DRYER", "HAMPER", "HANGER", "IRON", "CLOTHESPIN",
            // 45 Additional Garment / Laundry / Washer-Dryer room items to hit 51
            "WASHING_MACHINE", "CLOTHES_DRYER", "LAUNDRY_BASKET", "IRONING_BOARD", "FABRIC_SOFTENER", "LAUNDRY_DETERGENT",
            "BLEACH_LIQUID", "STARCH_SPRAY", "DRYER_SHEETS", "CLOTHES_LINE", "DRYING_RACK", "GARMENT_STEAMER",
            "LINT_ROLLER", "LAUNDRY_CHUTE", "STAIN_STICK", "WASH_TUB", "WASHBOARD", "FABRIC_REFRESHER",
            "CLOTHES_RACK", "COAT_HANGER", "SUIT_BAG", "WARDROBE_BOX", "SOCK_CLIP", "LAUNDRY_BAG",
            "DELICATES_BAG", "WASH_CYCLE", "DRY_CYCLE", "SPIN_CYCLE", "FRONT_LOADER", "TOP_LOADER",
            "LAUNDRY_SOAP", "FABRIC_DYE", "COLOR_CATCHER", "WRINKLE_RELEASE", "WOOL_DRYER_BALLS", "LAUNDRY_SINK",
            "DRY_CLEANING_BAG", "SKIRT_HANGER", "TROUSER_CLAMP", "BOOT_SHAPER", "SHOE_STRETCHER", "HAT_FORM",
            "LINT_TRAP", "DRYER_VENT", "LAUNDRY_MAT"
        ]
    },
    {
        id: "camping_wilderness",
        _innocentHints: [
            "Outdoor Camping, Sleeping Bags & Forest Trails",
            "Wilderness Dispersed Camping, Mountain Trail Hiking & Forest Sleeping Bags",
            "Outdoor Backcountry Camping, Mountain Hiking Trails & Alpine Wilderness"
        ],
        _imposterHints: [
            "Luxury Hotel Rooms, Main Lobbies & Services",
            "Luxury Hospitality Suites, Main Hotel Lobbies & Concierge Services",
            "Boutique Hotel Suites, Ground Floor Lobbies & Premium Hospitality Services"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "TENT", "CAMPFIRE", "BACKPACK", "TRAIL", "WOODS", "SLEEPING_BAG", "HIKING", "LANTERN",
            "FOREST", "PATH", "MOUNTAIN", "STREAM", "WILDERNESS", "COMPASS", "LOG", "PINE",
            "STOVE", "CANOE", "CABIN", "RANGER", "MOSQUITO", "ROASTING", "MAP", "OUTDOORS",
            "NATURE", "TREE", "LEAF", "BRANCH", "ROCK", "STONE", "CREEK", "RIVER",
            "LAKE", "POND", "WATERFALL", "HILLS", "VALLEY", "CANYON", "SKY", "STARS",
            "MOON", "SUN", "CLOUDS", "WEATHER", "STORM", "RAIN", "WIND", "AIR",
            "BEAR", "DEER", "WOLF", "FOX", "SQUIRREL", "BIRD", "OWL", "EAGLE",
            "BOOTS", "JACKET", "HAT", "SOCKS", "FLASHLIGHT", "BATTERIES", "MATCHES", "LIGHTER",
            "AXE", "KNIFE", "ROPE", "CORD", "TARP", "PEGS", "POLES", "HAMMOCK",
            "COOLER", "ICE", "FOOD", "WATER_BOTTLE", "CAN_OPENER", "SKILLET", "POT", "MUG",
            "PLATE", "FORK", "SPOON", "KNIFE", "CLEAN_UP", "TRASH_BAG", "FIRST_AID", "BANDAGE",
            "WHISTLE", "SUNSCREEN", "BUG_SPRAY", "KIT", "GEAR", "PACK", "STUFF_SACK", "ZIPPER",
            // 14 Additional Wilderness elements to comfortably cross 110
            "HEADLAMP", "WATER_FILTER", "BIODEGRADABLE_SOAP", "FIRE_STARTER", "TINDER_WOOD", "KINDLING",
            "TRAIL_MIX", "DEHYDRATED_FOOD", "BIVOUAC", "GROUND_CLOTH", "TREKKING_POLE", "BEAR_CANISTER",
            "TOPOGRAPHIC_MAP", "BACKCOUNTRY"
        ],
        imposterWords: [
            // Original 6
            "BED", "KEYCARD", "ELEVATOR", "SUITE", "SHOWER", "TELEVISION",
            // 45 Additional Luxury Hospitality Hotel words to cross 50
            "CONCIERGE", "BELLHOP", "RECEPTION_DESK", "ROOM_SERVICE", "MINIBAR", "VALET_PARKING",
            "HOTEL_LOBBY", "PENTHOUSE", "KING_BED", "QUEEN_SUITE", "CHECK_IN_COUNTER", "HOTEL_RESERVATION",
            "HOUSEKEEPING_STAFF", "MAID_SERVICE", "BATHROBE_HOTEL", "COMPLIMENTARY_BREAKFAST", "SPA_RESORT", "SWIMMING_POOL_HOTEL",
            "GYM_HOTEL", "CONFERENCE_ROOM", "BALLROOM", "BANQUET_HALL", "HOTEL_BAR", "LOUNGE_CHAIR_HOTEL",
            "GUEST_ROOM", "ICE_MACHINE_HOTEL", "VENDING_MACHINE", "CORRIDOR_HOTEL", "BELL_CART", "LUGGAGE_RACK",
            "ROOM_KEY", "DO_NOT_DISTURB", "PILLOW_MENU", "TURNDOWN_SERVICE", "HOTEL_SAFE", "BATH_TOWEL_HOTEL",
            "SHAMPOO_BOTTLE", "MINI_SOAP", "HOTEL_LOUNGE", "CONCIERGE_DESK", "RECEPTIONIST", "GUEST_REGISTRATION",
            "EARLY_CHECK_IN", "LATE_CHECK_OUT", "BOUTIQUE_HOTEL"
        ]
    },
    {
        id: "clothing_accessories",
        _innocentHints: [
            "Main Wardrobe Outfits, Shirts & Trousers",
            "Primary Body Clothing, Upper-Body Textiles & Legwear Trousers",
            "Standard Body Attire, Woven Garment Texturing & Main Legwear Outfits"
        ],
        _imposterHints: [
            "Jewelry, Pocket Accessories & Styling Accents",
            "Metallic Finger Jewelry, Leather Pocket Accessories & Fine Styling Accents",
            "Precious Metal Jewelry, Portable Pocket Assets & Outer Styling Accents"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 88
            "SHIRT", "PANTS", "JACKET", "SWEATER", "BLOUSE", "DRESS", "SKIRT", "VEST",
            "TROUSERS", "COAT", "BLAZER", "CARDIGAN", "TUNIC", "ROBE", "PONCHO", "PARKA",
            "SHORTS", "SUIT", "TUXEDO", "SWEATSHIRT", "HOODIE", "PAJAMAS", "JEANS", "OVERALLS",
            "RAINCOAT", "JERSEY", "GOWN", "KILT", "SWIMSUIT", "UNIFORM", "CAPE", "CLOTHING",
            "GARMENT", "APPAREL", "ATTIRE", "OUTFIT", "WARDROBE", "FASHION", "STYLE", "FABRIC",
            "CLOTH", "TEXTILE", "MATERIAL", "COTTON", "WOOL", "SILK", "LINEN", "DENIM",
            "LEATHER", "VELVET", "SATIN", "LACE", "THREAD", "YARN", "BUTTON", "ZIPPER",
            "SNAP", "HOOK", "POCKET", "SLEEVE", "COLLAR", "CUFF", "HEM", "SEAM",
            "STITCH", "LINING", "PADDING", "STRIPES", "CHECKS", "PLAID", "DOTS", "PRINT",
            "DESIGN", "TAILOR", "SEAMSTRESS", "ALTERATION", "FITTING", "SIZE", "MEASUREMENT", "TREND",
            "BRAND", "LABEL", "TAG", "COSTUME", "OVERCOAT", "TURTLENECK", "LEGGINGS",
            "SLIPPERS", "SOCKS", "STOCKINGS", "TIGHTS", "UNDERWEAR", "UNDERSHIRT", "CAMISOLE",
            // 22 Additional Core Garment items to cross 110
            "TANK_TOP", "POLO_SHIRT", "BUTTON_DOWN", "WIND_BREAKER", "FLANNEL_SHIRT", "CARGO_SHORTS",
            "TRACKSUIT", "JUMPSUIT", "PLAYSUIT", "NIGHTGOWN", "BOXERS", "BRIEFS",
            "THERMAL_SHIRT", "WAISTCOAT", "DUNGAREES", "CULLOTES", "PEACOAT", "DUFFLE_COAT",
            "SHEARLING_JACKET", "BOMBER_JACKET", "SPORTS_BRA", "LOUNGEWEAR"
        ],
        imposterWords: [
            // Original 6
            "RING", "WATCH", "BELT", "SCARF", "WALLET", "NECKLACE",
            // 45 Additional Jewelry / Accents / Pocket Items to cross 50
            "EARRINGS", "BRACELET", "BROOCH", "CUFFLINKS", "TIE_PIN", "AN0KLET",
            "CHARM_BRACELET", "PENDANT", "CHOKER", "L0CKET", "BANGLE", "TIARA",
            "MONOCLE", "POCKET_WATCH", "KEYCHAIN", "MONEY_CLIP", "PURSE_ACC", "HANDBAG_ACC",
            "CLUTCH_ACC", "CIGARETTE_CASE_ACC", "COMPACT_MIRROR", "HAIR_PIN", "HAIR_CLIP", "HEADBAND_ACC",
            "SCRUNCHIE", "SUSPENDERS", "BANDANA", "POCKET_SQUARE", "LAPEL_PIN", "BADGE_ACC",
            "KEY_RING", "CARD_HOLDER_ACC", "PASSPORT_WALLET", "COIN_PURSE", "BILLFOLD", "GL0OVE_CLIP",
            "F0B_WATCH", "NECK_CHAIN", "CHARM_ACC", "ARMLET", "NOSE_STUD", "BELLY_RING",
            "TOE_RING", "FINGER_ARMOR", "TI0E_BAR"
        ]
    },
    {
        id: "city_downtown",
        _innocentHints: [
            "Big City Infrastructure, Roads & Buildings",
            "Metropolitan City Infrastructure, Public Roadways & High-Rise Buildings",
            "Urban Civil Infrastructure, Concrete Roadways & High-Rise Office Buildings"
        ],
        _imposterHints: [
            "Quiet Wilderness, Forest Habitats & Parks",
            "Uninhabited Quiet Wilderness, Woodland Forest Habitats & National Nature Parks",
            "Primal Quiet Wilderness, Woodland Forest Ecosystems & Isolated Wilderness Parks"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "SIDEWALK", "TRAFFIC", "SUBWAY", "SKYSCRAPER", "ALLEY", "CROSSWALK", "STREETLIGHT", "HIGHWAY",
            "BILLBOARD", "TAXI", "BUS_STOP", "SIREN", "AVENUE", "PLAZA", "PARKING", "BLOCK",
            "CORNER", "ROOFTOP", "LANE", "METRO", "BRIDGE", "TUNNEL", "CROWD", "TOWER",
            "STREET", "ROAD", "BOULEVARD", "FREEWAY", "INTERSECTION", "TRAFFIC_LIGHT", "SIGN", "MARKING",
            "CURB", "GUTTER", "PAVEMENT", "ASPHALT", "CONCRETE", "BRICK", "BUILDING", "OFFICE",
            "STORE", "SHOP", "MALL", "MARKET", "BANK", "HOTEL", "RESTAURANT", "CAFE",
            "THEATER", "CINEMA", "MUSEUM", "LIBRARY", "SCHOOL", "COLLEGE", "HOSPITAL", "CLINIC",
            "STATION", "TERMINAL", "GARAGE", "LOT", "METER", "BENCH", "TRASH_BIN", "HYDRANT",
            "NEWSSTAND", "KIOSK", "POST_BOX", "TELEPHONE_BOOTH", "SQUARE", "COURTYARD", "PARK", "FOUNTAIN",
            "STATUE", "MONUMENT", "ARCH", "WALL", "FENCE", "GATE", "SEWER", "MANHOLE",
            "DRAIN", "PIPE", "CABLE", "WIRE", "POLE", "TRANSFORMER", "GRID", "POWER_PLANT",
            // 14 Additional Urban Grid elements to hit 110+
            "OVERPASS", "UNDERPASS", "VIADUCT", "PEDESTRIAN_BRIDGE", "COMMUTER_RAIL", "PARKING_STRUCTURE",
            "CONDO_COMPLEX", "APARTMENT_BLOCK", "MUNICIPAL_BUILDING", "COURTHOUSE", "CITY_HALL", "UTILITY_VAULT",
            "STREET_GRID", "ZONING_DISTRICT"
        ],
        imposterWords: [
            // Original 6
            "TREE", "RIVER", "MOUNTAIN", "TRAIL", "LAKE", "CAVE",
            // 45 Additional Pristine Wilderness elements to cross 50
            "FOREST_HABITAT", "WILDERNESS_VALLEY", "MOUNTAIN_RIDGE", "NATURAL_CREEK", "SWAMP_MARSH", "DEEP_WOODS",
            "ALPINE_MEADOW", "TUNDRA_LAND", "BACKCOUNTRY_TRAIL", "NATURE_RESERVE", "NATIONAL_PARK", "WILDLIFE_SANCTUARY",
            "UNEXPLORED_CAVERN", "ROCKY_CLIFF", "WATERFALL_NATIVE", "GLACIER_VALLEY", "OLD_GROWTH_FOREST", "JUNGLE_CANOPY",
            "RAINFOREST_HABITAT", "DESERT_DUNES", "OASIS_WILD", "PRISTINE_STREAM", "MOUNTAIN_PEAK", "CANYON_FLOOR",
            "WOODLAND_GLADE", "BOG_WETLAND", "FEN_MOOR", "HEATHLAND", "STEPPE_PLAINS", "PRAIRIE_GRASSLAND",
            "OUTBACK_WILD", "SAVANNA_THICKET", "BRUSH_WOODLAND", "NATIVE_FORREST", "PINE_BARRENS", "THICK_UNDERBRUSH",
            "WILD_RIVER_RAPIDS", "NATURAL_SPRING_WELL", "GE0YSER_WILD", "HOT_SPRING_POOL", "CRATER_LAKE", "VOLCANIC_FIELD",
            "MESA_TOPOLOGY", "BUTTE_FORMATION", "BADLANDS_WILD"
        ]
    },
    {
        id: "home_decor_large",
        _innocentHints: [
            "Living Room Items, Couches & Side Tables",
            "Interior Living Room Furnishings, Domestic Upholstery & Side Tables",
            "Residential Living Space Decor, Upholstered Couches & Side Accent Tables"
        ],
        _imposterHints: [
            "Garage Tools, Hardware & Building Supplies",
            "Mechanical Garage Tools, Metal Workbench Hardware & Workshop Building Supplies",
            "Heavy Garage Maintenance Tools, Hardware Fasteners & Workbench Supplies"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "CHAIR", "COUCH", "SOFA", "TABLE", "DESK", "LAMP", "LIGHT", "RUG",
            "CARPET", "MAT", "CURTAIN", "BLINDS", "SHADE", "MIRROR", "CLOCK", "PAINTING",
            "POSTER", "FRAME", "VASE", "CUSHION", "OTTOMAN", "BEANBAG", "DESK_LAMP", "LANTERN",
            "CANDLE", "TAPESTRY", "WALLPAPER", "SCULPTURE", "ORNAMENT", "TRINKET", "BASKET", "BOX",
            "CHEST", "TRUNK", "STAND", "RACK", "HOOK", "HANGER", "DESK_CHAIR", "VANITY",
            "COUNTER", "STOOL", "BAR_STOOL", "COFFEE_TABLE", "END_TABLE", "DINING_TABLE", "BUFFET", "LOVESEAT",
            "DIVAN", "DAYBED", "HEADBOARD", "NIGHT_LIGHT", "SCONCE", "TORCH", "BOOKEND", "MAGAZINE_RACK",
            "COAT_RACK", "UMBRELLA_STAND", "PLANT_STAND", "SHELVING", "CABINET", "DRAWER", "KNOB", "HANDLE",
            "PULL", "CUPBOARD", "PANTRY", "HAMPER", "WARDROBE", "BEDPOST", "MANTELPIECE", "PILLOWCASE",
            "DUVET", "SHEET", "BLANKET", "QUILT", "PILLOW", "MATTRESS", "BED", "CLOSET",
            // 14 Additional Living Room/Home Accents to hit 110+
            "VALANCE", "DRAPERIES", "AREA_RUG", "CHAISE_LOUNGUE_INT", "CONSOLE_DECOR", "CREDENZA_INT",
            "ETAGERE_SHELF", "FOOTSTOOL_DECOR", "THROW_PILLOW", "SLIPCOVER", "ARMCHAIR_INT", "WINE_RACK_INT",
            "ACCENT_TABLE", "DISPLAY_CASE"
        ],
        imposterWords: [
            // Original 6
            "HAMMER", "SCREWDRIVER", "WRENCH", "PLIERS", "SAW", "DRILL",
            // 45 Additional Heavy Workshop / Garage items to cross 50
            "SOCKET_WRENCH", "ALLEN_KEY", "CHISEL_TOOL", "MALLET_GARAGE", "HACKSAW", "CIRCULAR_SAW",
            "JIGSAW_POWER", "TABLE_SAW", "SANDPAPER", "POWER_SANDER", "ANGLE_GRINDER", "VICE_GRIP",
            "CLAMPS_GARAGE", "WIRE_STRIPPERS", "SOLDERING_IRON", "VOLTMETER", "TAPE_MEASURE_GARAGE", "SPIRIT_LEVEL",
            "TOOLBOX_STEEL", "WORKBENCH_WOOD", "NAILS_STEEL", "SCREWS_HARDWARE", "BOLTS_METRIC", "NUTS_HARDWARE",
            "WASHERS_METAL", "WALL_ANCHORS", "WOOD_GLUE", "DUCT_TAPE_GARAGE", "ELECTRICAL_TAPE", "WD_40_SPRAY",
            "MOTOR_OIL_CAN", "GREASE_GUN", "CAR_JACK", "JACK_STANDS", "TIRE_IRON", "AIR_COMPRESSOR",
            "PNEUMATIC_DRILL", "BATTERY_CHARGER_GARAGE", "EXTENSION_CORD_HEAVY", "WORK_LIGHT", "SHOP_VAC", "BUMPER_JACK",
            "PIPE_WRENCH", "WIRE_BRUSH_METAL", "CROWBAR_STEEL"
        ]
    }
);

// --- THE SYNAPSE MATRIX POOL (PART 10 / 10) ---
// Total Words in this module: 1,000 innocent words across 10 colossal, non-technical crossover matrices.

// ==========================================
// THE SYNAPSE PARADOX: DATA ARCHIVE (PART 10)
// ==========================================

window.SYNAPSE_MATRIX_POOL = window.SYNAPSE_MATRIX_POOL || [];

window.SYNAPSE_MATRIX_POOL.push(
    {
        id: "school_hobbies_large",
        _innocentHints: [
            "School Subjects, Classrooms & Academic Studies",
            "Institutional Academic Studies, Primary Curriculums & Classroom Environments",
            "Educational Classrooms, Scholastic Subjects & Academic Lecture Studies"
        ],
        _imposterHints: [
            "Creative Home Hobbies, Arts & Craft Projects",
            "Creative Domestic Leisure, Leisure Arts & Craft Projects",
            "Home Crafting Hobbies, Leisure Arts & Creative Studio Work"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "MATH", "SCIENCE", "HISTORY", "READING", "SPELLING", "ENGLISH", "ART", "MUSIC",
            "GYM", "GEOGRAPHY", "HOMEWORK", "TEST", "QUIZ", "GRADE", "EXAM", "LESSON",
            "TEXTBOOK", "REPORT_CARD", "PROJECT", "LECTURE", "CALCULATOR", "LIBRARY", "STUDENT", "TEACHER",
            "ALGEBRA", "GEOMETRY", "BIOLOGY", "CHEMISTRY", "PHYSICS", "GRAMMAR", "VOCABULARY", "ATTENDANCE",
            "ABSENCE", "TARDY", "EXCUSE", "PERMIT", "PASS", "BADGE", "UNIFORM", "BACKPACK",
            "PENCIL", "PEN", "CRAYON", "ERASER", "RULER", "CHALKBOARD", "NOTEBOOK", "HIGHLIGHTER",
            "MARKER", "GLUE", "SCISSORS", "BINDER", "FOLDER", "RECESS", "WHITEBOARD", "SHARPENER",
            "BLACKBOARD", "CLASSROOM", "ALPHABET", "GLOBE", "COMPASS", "PLAYGROUND", "LOCKER", "BELL",
            "CHALK", "GRADUATION", "DIPLOMA", "DESK", "CHAIR", "LESSON_PLAN", "WORKBOOK", "PAPER",
            "INK", "CALENDAR", "SCHEDULE", "TIMETABLE", "PERIOD", "SEMESTER", "TERM", "BREAK",
            "LUNCHBOX", "CAFETERIA", "AUDITORIUM", "HALLWAY", "STATIONERY", "STAPLER", "CLIP", "TAPE",
            "PAD", "JOURNAL", "DIARY", "ENCYCLOPEDIA", "DICTIONARY", "ATLAS", "NOVEL", "STORY",
            // 15 Additional Academic items to hit 111
            "DETENTION", "PRINCIPAL", "VICE_PRINCIPAL", "DEAN_OF_STUDENTS", "LECTURE_HALL", "SYLLABUS",
            "POPCORN_READING", "FLASHCARDS", "STUDY_GUIDE", "COMPOSITION_BOOK", "PROTRACTOR", "PENCIL_CASE",
            "REPORT_SHEET", "CURRICULUM", "FACULTY"
        ],
        imposterWords: [
            // Original 6
            "PAINTING", "FISHING", "BAKING", "HIKING", "GAMING", "SEWING",
            // 45 Additional Home Hobbies/Crafts items to hit 51
            "KNITTING", "CROCHET", "QUILTING", "EMBROIDERY", "SCRAPBOOKING", "POTTERY_WHEEL",
            "CERAMICS", "WOODWORKING", "SCULPTING_CLAY", "LEATHERWORKING", "BIRD_WATCHING", "STAMP_COLLECTING",
            "COIN_COLLECTING", "MODEL_ROCKETRY", "AMATEUR_RADIO", "ASTRONOMY_HOBBY", "GARDENING_HOME", "BONSAI_TRIMMING",
            "COOKING_HOBBY", "BREWING_HOME", "WINE_MAKING", "JEWELRY_MAKING", "BEADWORK", "CANDLE_MAKING",
            "SOAP_MAKING", "ORIGAMI", "CALLIGRAPHY_ART", "SKETCHING", "WEAVING", "SPINNING_WOOL",
            "TAXIDERMY", "METAL_DETECTING", "GEOCACHING", "BOARD_GAMING", "PUZZLE_BUILDING", "MODEL_TRAINS",
            "MINIATURE_PAINTING", "PAPER_MACHE", "DECOUPAGE", "WOOD_CARVING", "MACRAME", "FELTING",
            "BASKET_WEAVING", "BOOKBINDING_HOBBY", "GLASS_BLOWING"
        ]
    },
    {
        id: "kitchen_cleaning_large",
        _innocentHints: [
            "Kitchen Dinner Prep, Cooking & Food Hardware",
            "Culinary Dinner Preparation, Domestic Cookware & Kitchen Food Hardware",
            "Domestic Food Preparation, Kitchen Cookware & Culinary Hardware"
        ],
        _imposterHints: [
            "Housework Cleaning, Sweeping & Washing Supplies",
            "Domestic Housework Cleaning, Hard Surface Sweeping & Utility Wash Supplies",
            "Manual Sanitation, Floor Sweeping Tools & Domestic Utility Cleaning Supplies"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 87 (Removes duplicate 'PEELER' count error)
            "POT", "PAN", "KNIFE", "BLENDER", "OVEN", "MIXER", "SPOON", "FORK",
            "PLATE", "BOWL", "CUP", "MUG", "GLASS", "SPATULA", "WHISK", "TONGS",
            "LADLE", "PEELER", "GRATER", "TRAY", "TOASTER", "KETTLE", "SAUCER", "FRIDGE",
            "STOVE", "MICROWAVE", "TIMER", "ROLLING_PIN", "COLANDER", "CUTTING_BOARD", "FUNNEL", "SCALES",
            "CLEAVER", "SKILLET", "COFFEE_MAKER", "GRIDDLE", "BROILER", "DISHWASHER", "APRON", "PANTRY",
            "COUNTER", "CABINET", "DRAWER", "SHELF", "OVEN_MITT", "RACK", "COOKBOOK", "RECIPE",
            "SINK", "FAUCET", "TAP", "GARBAGE_DISPOSAL", "TRASH_BIN", "CAN_OPENER", "CORKSCREW",
            "SLICER", "THERMOMETER", "CHOPPING_BLOCK", "STRAINER", "SIFTER", "MEASURING_CUP", "MEASURING_SPOON", "TUREEN",
            "PLATTER", "PITCHER", "CARAFE", "DECANTER", "BREADBOX", "SPICE_RACK", "GRINDER", "MORTAR",
            "PESTLE", "JUICER", "WOK", "PRESSURE_COOKER", "SLOW_COOKER", "STEAMER", "ROASTER", "BAKEWARE",
            "CAKE_PAN", "MUFFIN_TIN", "COOKIE_SHEET", "PIE_DISH", "RAMEKIN", "CASSEROLE_DISH", "FOIL", "PARCHMENT_PAPER",
            // 24 Additional Kitchen / Culinary hardware tools to reach 111
            "GARLIC_PRESS", "ZESTER", "SALAD_SPINNER", "EGG_SEPARATOR", "BREAD_KNIFE", "PARING_KNIFE",
            "BONING_KNIFE", "PASTRY_BRUSH", "MEAT_TENDERIZER", "POTATO_MASHER", "PASTRY_CUTTER", "CHEF_KNIFE",
            "ICE_PICK", "MELON_BALLER", "APPLE_CORER", "CHEESE_WIRE", "NUTCRACKER", "ROASTING_JACK",
            "STOCK_POT", "SAUCE_PAN", "DUTCH_OVEN", "CREPE_PAN", "SOUFFLE_DISH", "PASTA_MACHINE"
        ],
        imposterWords: [
            // Original 6
            "BROOM", "MOP", "SPONGE", "VACUUM", "BLEACH", "DUSTPAN",
            // 45 Additional Cleaning Supplies words to hit 51
            "FEATHER_DUSTER", "SCRUB_BRUSH", "SQUEEGEE", "TOILET_BRUSH", "CARPET_SWEEPER", "VACUUM_BAG",
            "TRASH_BAGS", "RUBBER_GLOVES_CLEAN", "LAUNDRY_HAMPER", "SCRUB_PAD", "STEEL_WOOL", "PUMICE_STONE",
            "CLEANING_WIPES", "DISINFECTANT_SPRAY", "AMMONIA_BOTTLE", "VINEGAR_CLEANER", "BAKING_SODA_CLEAN", "WINDOW_SPRAY",
            "FLOOR_WAX_LIQUID", "STAIN_REMOVER_SPRAY", "OVEN_CLEANER_CAN", "DRAIN_OPENER", "FURNITURE_POLISH_SPRAY", "DEGREASER_LIQUID",
            "SCOURING_POWDER_CAN", "TILE_CLEANER_MIST", "GROUT_BRUSH_TOOL", "DUST_MOP_POLE", "LAUNDRY_DETERGENT_POD", "FABRIC_SOFTENER_BOTTLE",
            "CLOTHESPIN_WOOD", "WASHBOARD_RETR0", "FABRIC_STEAMER", "LINT_ROLLER_BRUSH", "DRYER_SHEETS_BOX", "IRONING_BOARD_METAL",
            "CLOTHES_HANGER_WIRE", "JANITOR_BUCKET_WHEELS", "CLEANING_RAGS", "MICROFIBER_CLOTH", "CHAMOIS_LEATHER", "SPONGE_MOP_HEAD",
            "PLUNGER_TOILET", "SINK_SQUEEGEE", "HAND_SANITIZER_PUMP"
        ]
    },
    {
        id: "nature_city_large",
        _innocentHints: [
            "Wild Nature, Forest Habitats, Trails & Mountains",
            "Pristine Rural Nature, Sylvatic Forest Habitats & Wilderness Mountain Trails",
            "Wild Natural Ecosystems, Uninhabited Forest Habitats & Mountain Terrain Trails"
        ],
        _imposterHints: [
            "Big City Infrastructure, Roads & Downtown Core",
            "Metropolitan Civil Infrastructure, Urban Roadways & Downtown Core High-Rises",
            "Urban Concrete Infrastructure, High-Density Roadways & Downtown Commerce Core"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "TREE", "RIVER", "TRAIL", "ROCK", "LAKE", "WOODS", "MOUNTAIN", "VALLEY",
            "CANYON", "PLATEAU", "DESERT", "TUNDRA", "SAVANNA", "FOREST", "HILL", "CLIFF",
            "CAVE", "OCEAN", "SEA", "ISLAND", "PENINSULA", "CONTINENT", "COAST", "SHORE",
            "BEACH", "BAY", "GULF", "DELTA", "VOLCANO", "GLACIER", "ICEBERG", "PLAIN",
            "PRAIRIE", "SWAMP", "MARSH", "JUNGLE", "RAINFOREST", "GROVE", "OASIS", "DUNES",
            "CREEK", "STREAM", "POND", "WATERFALL", "GORGE", "RIDGE", "PEAK", "SUMMIT",
            "SLOPE", "BASIN", "CHASM", "CRATER", "GEYSER", "FIORD", "ARCHIPELAGO", "WETLAND",
            "BOG", "FEN", "QUAGMIRE", "MOOR", "HEATH", "STEPPE", "TABLELAND", "MESA",
            "BUTTE", "BADLANDS", "PASS", "COASTLINE", "HORIZON", "TOPOGRAPHY", "TERRAIN", "LANDSCAPE",
            "GROUND", "EARTH", "SOIL", "STONE", "BOULDER", "PEBBLE", "SAND", "MUD",
            "CLAY", "DUST", "MOSS", "FERN", "LOG", "STUMP", "BRANCH", "LEAF",
            "ROOT", "BARK", "TWIG", "SAPLING", "WILDERNESS", "OUTDOORS", "PATH", "CAMP",
            // 15 Additional Wilderness features to clear 111
            "THICKET", "UNDERBRUSH", "GLADE", "MEADOWLAND", "ALPINE_ZONE", "ICE_SHEET", "COASTAL_SHELF",
            "ALLUVIAL_FAN", "SANDBAR", "ESTUARY", "SALT_MARSH", "WOODLAND", "MANGROVE_SWAMP", "SCREE_SLOPE",
            "LAVA_FIELD"
        ],
        imposterWords: [
            // Original 6
            "SIDEWALK", "TRAFFIC", "SUBWAY", "SKYSCRAPER", "HIGHWAY", "STREETLIGHT",
            // 45 Additional Urban Grid elements to reach 51
            "AVENUE", "BOULEVARD", "EXPRESSWAY", "FREEWAY", "INTERSECTION", "CROSSWALK_LINE",
            "TRAFFIC_LIGHT", "BILLBOARD_AD", "BUS_STOP_BENCH", "TAXI_STAND", "METRO_STATION", "PARKING_METER",
            "PARKING_GARAGE", "ALLEYWAY", "CURBSIDE", "SEWER_GRATE", "MANHOLE_COVER", "STREET_SIGN",
            "PEDESTRIAN_BRIDGE", "OVERPASS_CONCRETE", "UNDERPASS_TUNNEL", "VIADUCT_STEEL", "UTILITY_POLE", "TRANSFORMER_BOX",
            "CONCRETE_PAVEMENT", "ASPHALT_ROAD", "BRICK_ALLEY", "CITY_BLOCK", "CORNER_LOT", "ROOFTOP_DECK",
            "OFFICE_TOWER", "RETAIL_MALL", "CIVIC_PLAZA", "CROWDED_STREET", "FIRE_HYDRANT", "TRASH_RECEPTACLE",
            "NEWSSTAND_KIOSK", "TELEPHONE_BOOTH_VINT", "PUBLIC_FOUNTAIN", "COMMERCIAL_BUILDING", "TOWNHOUSE_BLOCK", "APARTMENT_COMPLEX",
            "CONDO_HIGHRISE", "CITY_HALL_SQUARE", "GRID_UTILITY"
        ]
    },
    {
        id: "animals_birds_large",
        _innocentHints: [
            "Land Safari Animals & Heavy Four-Legged Mammals",
            "Terrestrial Safari Megafauna, Quadrupedal Land Mammals & Savannah Animals",
            "Quadrupedal Savannah Mammals, Land Megafauna & Safari Wilderness Animals"
        ],
        _imposterHints: [
            "Flying Birds, Backyard Avian Life & Sky Predators",
            "Volant Aviary Species, Backyard Avian Wildlife & Aerial Predators",
            "Winged Aviary Species, Backyard Birdlife & Aerial Raptors"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 95 (Corrects duplicate MEERKAT/JAGUAR counts)
            "LION", "TIGER", "ELEPHANT", "GIRAFFE", "ZEBRA", "MONKEY", "RHINO", "HIPPO",
            "LEOPARD", "CHEETAH", "GORILLA", "KANGAROO", "HYENA", "ANTELOPE", "BUFFALO", "PANDA",
            "CAMEL", "CHIMPANZEE", "BABOON", "MEERKAT", "WARTHOG", "LEMUR", "GAZELLE", "KOALA",
            "BEAR", "WOLF", "FOX", "DEER", "RABBIT", "SQUIRREL", "RACCOON", "OPOSSUM",
            "MOOSE", "SKUNK", "BADGER", "HEDGEHOG", "BOBCAT", "COYOTE", "OTTER", "WEASEL",
            "CHIPMUNK", "PANTHER", "JAGUAR", "PUMA", "BEAVER", "COUGAR", "LYNX", "LEMMING",
            "STAG", "DOE", "FAWN", "ELK", "CARIBOU", "REINDEER", "OX", "YAK",
            "BISON", "GRIZZLY", "POLAR_BEAR", "BLACK_BEAR", "CUB", "PACK", "HERD", "CREATURE",
            "MAMMAL", "FUR", "PAW", "CLAW", "HOOF", "TAIL", "WHISKERS", "SNOUT",
            "FANG", "ROAR", "GROWL", "HOWL", "TRACKS", "DEN", "BURROW", "WILDLIFE",
            "JUNGLE", "SAVANNA", "CHAMP", "SLOTH", "ARMADILLO", "ANTEATER", "TAPIR",
            "MONGOOSE", "WOMBAT", "PLATYPUS", "WALLABY", "TASMANIAN_DEVIL", "DINGO", "ALPA",
            // 16 Additional Quadruped / Land Mammals to reach 111
            "WILDEBEEST", "IMPALA", "KUDU", "OKAPI", "ORCA_LAND", "BABIRUSA", "CAPYBARA", "PATAGONIAN_MARA",
            "QUOKKA", "BANDICOOT", "OPOSSUM_WILD", "TASMANIAN_TIGER", "PANGOLIN", "AARDVARK", "CIVET", "GENET"
        ],
        imposterWords: [
            // Original 6
            "EAGLE", "HAWK", "OWL", "ROBIN", "SPARROW", "PIGEON",
            // 45 Additional Aviary Flying Bird words to reach 51
            "FALCON", "VULTURE", "CONDOR", "OSPREY", "KESTREL", "MERLIN_BIRD",
            "BLUE_JAY", "CARDINAL", "CROW", "RAVEN", "MAGPIE", "STARLING",
            "FINCH", "CHICKADEE", "NUTHATCH", "WOODPECKER", "HUMMINGBIRD", "SWALLOW",
            "SWIFT_BIRD", "MOCKINGBIRD", "NIGHTINGALE", "CANARY", "PARROT", "MACAW",
            "COCKATOO", "PARAKEET", "SEAGULL", "PELICAN", "ALBATROSS", "CORMORANT",
            "HERON", "EGRET", "STORK", "FLAMINGO", "SWAN", "GOOSE_FLY",
            "MALLARD", "CANVASBACK", "TEAL_DUC", "PHEASANT", "QUAIL", "GROUSE",
            "TURKEY_WILD", "PEAFOWL", "OSTRICH_AVIAN"
        ]
    },
    {
        id: "winter_summer_large",
        _innocentHints: [
            "Winter Cold Season, Ice & Snowstorm Concepts",
            "Boreal Winter Season, Glacial Ice Formations & Snowstorm Concepts",
            "Wintry Sub-Zero Season, Glacial Formations & Arctic Snowstorm Conditions"
        ],
        _imposterHints: [
            "Summer Heat Season, Sunny Days & Beach Vacations",
            "Tropical Summer Season, High-Heat Sunny Days & Coastal Beach Vacations",
            "Torrid Summer Weather, Solar Sunshine Days & Maritime Beach Vacations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "SNOW", "ICE", "FROST", "BLIZZARD", "ICICLE", "SNOWMAN", "SLEET", "CHILLY",
            "FREEZING", "GLOVE", "BOOT", "SCARF", "COAT", "BEANIE", "MITTEN", "SWEATER",
            "SLIPPER", "JACKET", "BLANKET", "HEATER", "SHOVEL", "GLACIER", "HAIL", "FLURRY",
            "WINTRY", "FROSTBITE", "SHIVER", "AVALANCHE", "SNOWBALL", "SNOWBOARD", "SKIS", "SLED",
            "PARKA", "EARMUFFS", "TURTLENECK", "THERMALS", "FIREPLACE", "LOG", "COCOA", "FROSTY",
            "SNOWDRIFT", "ICE_SKATE", "IGLOO", "NORTH_POLE", "FREEZER", "CHILL", "COLD", "BRISK",
            "CRISP", "BITING", "NUMB", "ZERO", "DECEMBER", "JANUARY", "FEBRUARY", "SOLSTICE",
            "WHITE_OUT", "BLACK_ICE", "SLUSH", "SNOWFLAKE", "HAILSTONE", "SQUALL", "THAW", "MELT",
            "SNOWPLOW", "TIRE_CHAINS", "CABIN", "WINTERGREEN", "EVERGREEN", "PINE_CONE", "FROSTING", "OVERCOAT",
            "WINDCHILL", "POLAR", "ARCTIC", "ANTARCTIC", "GLACIAL", "ICE_CAP", "BERG", "PACK_ICE",
            "SNOWSUIT", "LONG_JOHNS", "FLEECE", "QUILT", "COMFORTER", "DOWN", "INSULATION", "WEATHER_STRIP",
            // 14 Additional Winter items to reach 110+
            "SNOW_SHOE", "FROZEN_TUNDRA", "HOARFROST", "PERMAFROST", "ICE_SHEET_WINT", "SNOW_CAVERN", "WINTER_STORM",
            "MUKLUKS", "BALACLAVA", "SNOW_GOGGLES", "ICE_AXE", "SLEDGE", "TOBOGGAN", "DE_ICER"
        ],
        imposterWords: [
            // Original 6
            "BEACH", "SUNSHINE", "SHORTS", "POOL", "SAND", "HEAT",
            // 45 Additional Summer Vacations / Tropical heat words to reach 51
            "SUNSCREEN_L0T", "SUNGLASSES_SUM", "SWIMSUIT_SUM", "BIKINI_SUM", "BOARDSHORTS", "FLIP_FLOPS_SUM",
            "SANDALS_SUM", "STRAW_HAT_SUM", "BEACH_TOWEL_SUM", "BEACH_UMBRELLA_SUM", "DECK_CHAIR_SUM", "CABANA_SUM",
            "RESORT_VACATION", "SUMMER_CAMP", "PICNIC_BASKET", "BARBEQUE_GRILL", "ICE_CREAM_CONE_SUM", "POPSICLE",
            "LEMONADE_PITCHER", "ICED_TEA", "WATERMELON_SLICE", "SUNSTROKE", "HEATWAVE", "HUMIDITY",
            "SOLAR_RAY", "JUNE_MONTH", "JULY_MONTH", "AUGUST_MONTH", "SUMMER_SOLSTICE", "BEACH_BALL_SUM",
            "SURFBOARD_SUM", "JET_SKI", "SNORKEL_MASK", "FL0ATIE", "LIFEGUARD_CHAIR", "BOARDWALK_SUM",
            "TIKI_TORCH", "PALM_TREE_SUM", "SUNTAN_OIL", "BRONZER_LOT", "SWIMMING_TRUNKS", "AIR_CONDITIONING",
            "CEILING_FAN_SUM", "ICE_CUBE_MELT", "SUMMER_VACATION"
        ]
    },
    {
        id: "house_yard_large",
        _innocentHints: [
            "Inside Home Comforts, Rooms & Indoor Space",
            "Interior Residential Spaces, Household Chambers & Indoor Room Comforts",
            "Indoor Structural Elements, Residential Rooms & Interior Living Spaces"
        ],
        _imposterHints: [
            "Outside Landscaping, Grassy Yards & Boundaries",
            "Exterior Yard Landscaping, Outer Perimeter Boundaries & Green Lawn Spaces",
            "Outdoor Botanical Landscaping, Open Yard Boundaries & Exterior Green Spaces"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 95 (Removed duplicate 'CLOSET'/'DRAWER' count variations)
            "KITCHEN", "BEDROOM", "BATHROOM", "COUCH", "CHAIR", "TABLE", "BED", "TELEVISION",
            "FRIDGE", "STOVE", "LAMP", "DESK", "CLOSET", "DRAWER", "RUG", "PILLOW",
            "SHOWER", "SINK", "WALL", "DOOR", "WINDOW", "CEILING", "FLOOR", "STAIRS",
            "LIVING_ROOM", "DINING_ROOM", "HALLWAY", "ATTIC", "BASEMENT", "PANTRY", "LAUNDRY", "OFFICE",
            "DEN", "PLAYROOM", "NURSERY", "GUEST_ROOM", "SHELF", "COUNTER",
            "SOFA", "ARMCHAIR", "RECLINER", "STOOL", "BENCH", "MATTRESS", "BLANKET", "SHEET",
            "QUILT", "DUVET", "PILLOWCASE", "CURTAIN", "BLINDS", "MIRROR", "CLOCK", "PAINTING",
            "POSTER", "FRAME", "VASE", "CUSHION", "OTTOMAN", "BEANBAG", "BOOKCASE", "CABINET",
            "WARDROBE", "NIGHTSTAND", "CHEST", "TRUNK", "HOOK", "HANGER", "STAPLES", "PLUG",
            "OUTLET", "SWITCH", "LIGHT", "CHANDELIER", "SCONCE", "HEATER", "AC", "VENT",
            "THERMOSTAT", "RADIATOR", "FIREPLACE", "MANTEL", "HEARTH", "WALLPAPER", "PAINT", "CARPET",
            // 16 Additional Indoor Room Elements to clear 111
            "FOYER", "VESTIBULE", "SCULLERY", "WINE_CELLAR", "UTILITY_ROOM", "SUNROOM_INT", "MUDROOM_INT",
            "LINEN_CLOSET", "CEILING_FAN", "DOORKNOB", "BASEBOARD", "CROWN_MOLDING", "FLOOR_LAMP", "NIGHT_LIGHT_INT",
            "BATH_MAT", "VANITY_MIRROR"
        ],
        imposterWords: [
            // Original 6
            "GRASS", "TREE", "FENCE", "GARDEN", "PATIO", "SHED",
            // 45 Additional Outdoor Landscaping / Boundary words to reach 51
            "LAWN_MOWER", "FLOWER_BED", "VEGETABLE_PATCH", "GREENHOUSE_YARD", "GAZEBO", "PERGOLA",
            "DECK_WOODEN", "PORCH_SWING", "BACKYARD", "FRONT_YARD", "SIDE_YARD", "DRIVEWAY_OUT",
            "PROPERTY_LINE", "HEDGE_ROW", "STONE_WALL", "PICKET_FENCE", "GATE_OUTDOOR", "MAILBOX_POST",
            "BIRD_BATH", "LOUNGE_CHAIR_LAWN", "HAMMOCK_YARD", "FIRE_PIT_OUT", "BARBEQUE_PIT", "OUTDOOR_KITCHEN",
            "SPRINKLER_SYSTEM", "GARDEN_HOSE", "HOSE_REEL", "RAISED_BED", "COMPOST_BIN", "WHEELBARROW",
            "GARDEN_SHEARS", "TROWEL_TOOL", "PRUNING_SAW", "LAWN_AERATOR", "WEED_WHACKER", "LEAF_BLOWER",
            "PATIO_TABLE", "UMBRELLA_STAND_YARD", "OUTDOOR_LIGHTING", "LANDSCAPE_TIMBER", "MULCH_BED", "PAVER_STONES",
            "GRAVEL_PATH", "TRELLIS", "ARBOR"
        ]
    },
    {
        id: "vehicles_travel_large",
        _innocentHints: [
            "Land Roads, Traffic, Cars & Rail Vehicles",
            "Terrestrial Infrastructure, Ground Road Traffic & Rail Vehicles",
            "Ground Transport Logistics, Highway Traffic Networks & Road/Rail Vehicles"
        ],
        _imposterHints: [
            "Airborne Flight & Maritime Oceans Travel",
            "Atmospheric Airborne Flight & Oceanic Maritime Travel",
            "Aviation Flight Logistics & Transoceanic Maritime Vessels"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "CAR", "TRUCK", "BUS", "VAN", "TRAIN", "BICYCLE", "MOTORCYCLE", "SCOOTER",
            "TAXI", "SUBWAY", "TRAM", "AMBULANCE", "FIRE_TRUCK", "TRACTOR", "SEDAN", "WAGON",
            "JEEP", "CONVERTIBLE", "COUPE", "LIMOUSINE", "PICKUP", "BULLDOZER", "GOLF_CART", "MOPED",
            "STREETCAR", "LOCOMOTIVE", "CAB", "LINER", "TROLLEY", "RACECAR", "FREIGHTER", "TANKER",
            "SKATEBOARD", "FORKLIFT", "MINIVAN", "CARAVAN", "CRUISER", "SUV", "CROSSER", "ROVER",
            "ENGINE", "MOTOR", "WHEEL", "TIRE", "STEERING", "BRAKE", "ACCELERATOR", "CLUTCH",
            "GEAR", "TRANSMISSION", "EXHAUST", "RADIATOR", "BATTERY", "HEADLIGHT", "WINDSHIELD", "BUMPER",
            "FENDER", "HOOD", "TRUNK", "SEAT", "SEATBELT", "AIRBAG", "DASHBOARD", "SPEEDOMETER",
            "ODOMETER", "FUEL", "GAS", "PETROL", "DIESEL", "OIL", "TANK", "PIPE",
            "HIGHWAY", "STREET", "ROAD", "AVENUE", "LANE", "DRIVEWAY", "FREEWAY", "EXPRESSWAY",
            "INTERSECTION", "CROSSROADS", "ROUNDABOUT", "TRAFFIC", "SIGNAL", "SIGN", "MARKING", "SIDEWALK",
            "CURB", "GUTTER", "PAVEMENT", "ASPHALT", "GRAVEL", "GARAGE", "DRIVE", "PARKING",
            // 14 Additional Land-vehicle infrastructure words to clear 110
            "BOXCAR", "CABOOSE", "MONORAIL", "CHASSIS", "TACHOMETER", "SPARK_PLUG", "CARBURETOR", "ALTER_NATOR",
            "DISTRIBUTOR_CAP", "DRIVE_SHAFT", "DIFFERENTIAL_GEAR", "AXLE_BAR", "PARKING_LOT", "TOLL_PLAZA"
        ],
        imposterWords: [
            // Original 6
            "PLANE", "SHIP", "BOAT", "JET", "HELICOPTER", "ROCKET",
            // 45 Additional Aviation / Maritime elements to reach 51
            "AIRLINER", "CARGO_PLANE", "BIPLANE", "GLIDER_AIR", "ZEPPELIN", "BLIMP",
            "HOT_AIR_BALLOON", "FIGHTER_JET", "STEALTH_BOMBER", "PROP_PLANE", "SEAPLANE", "SUB_MARINE_VESSEL",
            "AIRCRAFT_CARRIER", "BATTLESHIP", "DESTROYER_VESS", "CRUISE_SHIP", "CAR_FERRY", "OCEAN_LINER",
            "CARGO_VESSEL", "CONTAINER_SHIP", "OIL_TANKER_SEA", "FISHING_TRAWLER", "YACHT", "SAILBOAT",
            "CATAMARAN", "SPEEDBOAT", "HOVERCRAFT", "HYDROFOIL", "ROWBOAT", "CANOE_MARITIME",
            "KAYAK_MARITIME", "JET_SKI_VESS", "TUG_BOAT", "BARGE", "LIFEBOAT", "G0NDOLA_WATER",
            "FREIGHTER_SEA", "SCH0ONER", "FRIGATE", "CLIPPER_SHIP", "PARACHUTE", "HANG_GLIDER",
            "DRONE_AIRCRAFT", "SPACESHIP", "SPACE_SHUTTLE"
        ]
    },
    {
        id: "buildings_city_large",
        _innocentHints: [
            "Indoor Offices, Stores & Community Buildings",
            "Enclosed Indoor Offices, Commercial Stores & Civic Community Buildings",
            "Structural Indoor Enclosures, Retail Stores & Corporate Office Buildings"
        ],
        _imposterHints: [
            "City Infrastructure Streets, Tunnels & Bridges",
            "Civil Open-Air Infrastructure Streets, Transport Tunnels & Structural Bridges",
            "Municipal Outdoor Infrastructure, Thoroughfare Streets & Spanning Transit Bridges"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 88
            "HOUSE", "APARTMENT", "CABIN", "CASTLE", "HOTEL", "COTTAGE", "SKYSCRAPER", "BARN",
            "TOWER", "MANSION", "PALACE", "SHACK", "MUSEUM", "FACTORY", "SCHOOL", "HOSPITAL",
            "STADIUM", "CHURCH", "OFFICE", "FORT", "LIBRARY", "STORE", "BANK", "RESTAURANT",
            "BAKERY", "THEATER", "MALL", "GYM", "CAFE", "STATION", "GARAGE", "WAREHOUSE",
            "AIRPORT", "CLINIC", "MARKET", "PRISON", "SHELTER", "MOTEL", "PHARMACY", "POST_OFFICE",
            "SUPERMARKET", "BOUTIQUE", "HARDWARE_STORE", "BOOKSTORE", "PET_SHOP", "ARCADE", "CASINO", "BOWLING_ALLEY",
            "CONCERT_HALL", "OPERA_HOUSE", "SHRINE", "TEMPLE", "CATHEDRAL", "MONASTERY", "CONVENT", "COURTHOUSE",
            "CITY_HALL", "POLICE_STATION", "FIRE_HOUSE", "EMBASSY", "CAPITOL", "PARLIAMENT", "LABORATORY", "OBSERVATORY",
            "PLANETARIUM", "AQUARIUM", "ZOO", "GREENHOUSE", "POWER_PLANT", "REFINERY", "MILL", "WORKSHOP",
            "STUDIO", "GALLERY", "LOFT", "CONDO", "DUPLEX", "TOWNHOUSE", "COMMUNITY_CENTER", "AUDITORIUM",
            // 23 Additional Commercial / Civil Enclosures to reach 111
            "SKATING_RINK", "RECREATION_CENTER", "SQUASH_COURT_BLDG", "DENTAL_OFFICE", "VETERINARY_CLINIC", "DAYCARE_CENTER",
            "RETIREMENT_HOME", "SANATORIUM", "INFIRMARY", "GRAIN_ELEVATOR_BLDG", "BREWERY_BLDG", "DISTILLERY_BLDG",
            "LAUNDROMAT", "DRY_CLEANERS_BLDG", "FUNERAL_HOME", "MAUSOLEUM", "CREMATORIUM", "BARRACKS",
            "ARMORY", "PENITENTIARY", "REFORMATORY", "HALFWAY_HOUSE", "MISSION_BLDG"
        ],
        imposterWords: [
            // Original 6
            "STREET", "SIDEWALK", "BRIDGE", "TUNNEL", "HIGHWAY", "ALLEY",
            // 45 Additional Open Air Transit Infrastructure options to cross 50
            "AVENUE_INFRA", "BOULEVARD_INFRA", "EXPRESSWAY_INFRA", "FREEWAY_INFRA", "INTERSECTION_INFRA", "CROSSWALK_INFRA",
            "TRAFFIC_LIGHT_INFRA", "STREETLIGHT_INFRA", "PEDESTRIAN_OVERPASS", "UNDERPASS_INFRA", "VIADUCT_INFRA", "FLYOVER_RAMP",
            "CLOVERLEAF_INTERCHANGE", "ROUNDABOUT_INFRA", "CUL_DE_SAC", "LANEWAY", "PROMENADE_INFRA", "BOARDWALK_INFRA",
            "BIKE_LANE", "BUS_LANE", "TRAM_TRACKS", "RAILROAD_CROSSING", "SEWER_SYSTEM", "STORM_DRAIN_GRATE",
            "MANHOLE_INFRA", "UTILITY_CONDUIT", "WATER_MAIN", "GAS_LINE_GRID", "ELECTRICAL_GRID", "TELECOM_TRENCH",
            "FIBER_OPTIC_ROUTE", "RETAINING_WALL", "SOUND_BARRIER", "GUARD_RAIL", "TOLL_BOOTH_LANE", "MILE_MARKER",
            "STREET_CURB", "DRAINAGE_GUTTER", "PAVEMENT_MARKING", "SPEED_BUMP", "TRAFFIC_CIRCLE", "EMBANKMENT",
            "AQUEDUCT_SPAN", "SUSPENSION_BRIDGE", "DRAW_BRIDGE"
        ]
    },
    {
        id: "fairytale_history_large",
        _innocentHints: [
            "Storybook Fantasy, Magic Castles & Legends",
            "Storybook Narrative Fantasy, Enchanted Castles & Mythological Legends",
            "Mythological Storybook Fantasy, Arcane Sorcery Castles & Fable Legends"
        ],
        _imposterHints: [
            "Ancient Earth Civilizations & Real History",
            "Ancient Chronological Civilizations, Veritable Earth Antiquity & Real History",
            "Documented Earth Antiquity, Archaeological Civilizations & Veritable Real History"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 88
            "DRAGON", "WIZARD", "FAIRY", "SPELL", "POTION", "WAND", "CASTLE", "PRINCESS",
            "PRINCE", "GOBLIN", "GIANT", "TROLL", "ELF", "UNICORN", "MERMAID", "GHOST",
            "GOWN", "CROWN", "CURSE", "FABLE", "LEGEND", "KNIGHT", "HERO", "BEAST",
            "KING", "QUEEN", "THRONE", "SCEPTRE", "PALACE", "MOAT", "DUNGEON", "TOWER",
            "FORTRESS", "SHIELD", "SWORD", "ARMOR", "HELMET", "QUEST", "JOURNEY", "MYTH",
            "FOLKLORE", "TALE", "ENCHANTMENT", "SORCERER", "WITCH", "CAULDRON", "BROOMSTICK", "PUPPET",
            "PEGASUS", "PHOENIX", "GRIFFIN", "CENTAUR", "PIXIE", "SPRITE", "GNOME", "LEPRECHAUN",
            "OGRE", "GARGOYLE", "VAMPIRE", "WEREWOLF", "MUMMY", "ZOMBIE", "FRANKENSTEIN", "MONSTER",
            "AMULET", "TALISMAN", "RING", "CLOAK", "HOOD", "MIRROR", "SPINDLE", "SLIPPER",
            "BEANSTALK", "FOREST", "WOODS", "PATH", "COTTAGE", "TAVERN", "VILLAGE", "PEASANT",
            "SQUIRE", "JESTER", "BARD", "SCROLL", "MAP", "COMPASS", "GOLD", "TREASURE",
            // 23 Additional Narrative Myth / Arcane elements to reach 111
            "WYVERN", "BASILISK", "CHIMERA", "HYDRA_MYTH", "VALKYRIE", "KRAKEN",
            "BANSHEE", "GOLEM", "BABA_YAGA", "DIRGE", "INCANTATION", "MAGIC_CARPET",
            "FLYING_BROOM", "POWDER_ELIXIR", "CRYSTAL_BALL", "FORTUNE_TELLER", "PALM_READ", "SEER",
            "ORACLE", "FAIRY_GODMOTHER", "WISH_BONE", "SEVEN_LEAGUE_BOOTS", "INVISIBILITY_SHIELD"
        ],
        imposterWords: [
            // Original 6
            "STATUE", "MUMMY", "COIN", "SHIELD", "SWORD", "RUINS",
            // 45 Additional Factual Antiquity / Historical Archaeological elements to cross 50
            "ARCHAEOLOGY", "EXCAVATION_SITE", "HIEROGLYPHICS", "CUNEIFORM", "PAPYRUS_SCROLL", "PARCHMENT_HIST",
            "STONE_TABLET", "SARCOPHAGUS", "PYRAMID_EGYPT", "ZIGGURAT", "AMPHITHEATER", "AQUEDUCT_HIST",
            "COLOSSEUM", "PARTHENON", "FORUM_ROMAN", "CAT_ACOMBS", "ARTIFACT", "POTSHERD",
            "FLINT_KNAPPING", "BRONZE_AGE", "IRON_AGE", "MINTED_COIN", "CHRONICLE_LOG", "ARCHIVIST",
            "HISTORIAN", "MUSEUM_EXHIBIT", "CARBON_DATING", "STRATIGRAPHY", "FOSSIL_RECORD", "PALEONTOLOGY",
            "ANCIENT_SCULPTURE", "POTTERY_FRAGMENTS", "BURIAL_MOUND", "MEGALITH", "DOLMEN", "STONEHENGE_RELI",
            "OBELISK_HIST", "PETROGLYPH", "PICTOGRAPH", "ANCIENT_MANUSCRIPT", "CODEX", "SCRIBE_HIST",
            "ILLUMINATED_TEXT", "PARCHMENT_ROLL", "HISTORIC_MONUMENT"
        ]
    },
    {
        id: "home_decor_garage",
        _innocentHints: [
            "Indoor Coziness, Living Room Decor & Curtains",
            "Interior Domestic Coziness, Living Room Upholstery & Decorative Curtains",
            "Residential Indoor Coziness, Living Space Furnishings & Window Curtains"
        ],
        _imposterHints: [
            "Garage Toolbenches, Hardware & Heavy Repairs",
            "Mechanical Garage Toolbenches, Industrial Metal Hardware & Heavy Automotive Repairs",
            "Heavy Maintenance Toolbenches, Functional Hardware Fasteners & Automotive Repairs"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            // Original 96
            "CHAIR", "COUCH", "SOFA", "TABLE", "DESK", "LAMP", "LIGHT", "RUG",
            "CARPET", "MAT", "CURTAIN", "BLINDS", "SHADE", "MIRROR", "CLOCK", "PAINTING",
            "POSTER", "FRAME", "VASE", "CUSHION", "OTTOMAN", "BEANBAG", "DESK_LAMP", "LANTERN",
            "CANDLE", "TAPESTRY", "WALLPAPER", "SCULPTURE", "ORNAMENT", "TRINKET", "BASKET", "BOX",
            "CHEST", "TRUNK", "STAND", "RACK", "HOOK", "HANGER", "DESK_CHAIR", "VANITY",
            "COUNTER", "STOOL", "BAR_STOOL", "COFFEE_TABLE", "END_TABLE", "DINING_TABLE", "BUFFET", "LOVESEAT",
            "DIVAN", "DAYBED", "HEADBOARD", "NIGHT_LIGHT", "SCONCE", "TORCH", "BOOKEND", "MAGAZINE_RACK",
            "COAT_RACK", "UMBRELLA_STAND", "PLANT_STAND", "SHELVING", "CABINET", "DRAWER", "KNOB", "HANDLE",
            "PULL", "CUPBOARD", "PANTRY", "HAMPER", "WARDROBE", "BEDPOST", "MANTELPIECE", "PILLOWCASE",
            "DUVET", "SHEET", "BLANKET", "QUILT", "PILLOW", "MATTRESS", "BED", "CLOSET",
            // 14 Additional Living Space Furnishings to reach 110+
            "VALANCE_WINDOW", "DRAPERIES_FABRIC", "AREA_RUG_FLOOR", "CHAISE_INT_DECOR", "CONSOLE_TABLE_ACC", "CREDENZA_WOOD",
            "ETAGERE_UNIT", "FOOTSTOOL_COZY", "THROW_PILLOW_SOFT", "SLIPCOVER_SOFA", "ARMCHAIR_COZY", "WINE_RACK_WOOD",
            "ACCENT_TABLE_DECOR", "DISPLAY_CASE_GLASS"
        ],
        imposterWords: [
            // Original 6
            "HAMMER", "SCREWDRIVER", "WRENCH", "PLIERS", "SAW", "DRILL",
            // 45 Additional Heavy Automotive / Workbench items to hit 51
            "SOCKET_SET", "ALLEN_WRENCH", "CHISEL_WOOD", "MALLET_RUBBER", "HACKSAW_METAL", "CIRCULAR_SAW_POW",
            "JIGSAW_TOOL", "TABLE_SAW_HEAVY", "SANDPAPER_BLOCK", "POWER_SANDER_ORB", "ANGLE_GRINDER_TOOL", "VISE_GRIP_PLIERS",
            "C_CLAMPS", "WIRE_STRIPPERS_TOOL", "SOLDERING_GUN", "VOLTMETER_DIGITAL", "TAPE_MEASURE_STEEL", "SPIRIT_LEVEL_TOOL",
            "TOOLBOX_METAL", "WORKBENCH_STEEL", "NAILS_BOX", "SCREWS_PACK", "BOLTS_GRADE", "NUTS_HEX",
            "WASHERS_LOCK", "WALL_ANCHORS_PLASTIC", "WOOD_GLUE_BOTTLE", "DUCT_TAPE_ROLL", "ELECTRICAL_TAPE_BLACK", "WD_40_CAN",
            "MOTOR_OIL_QUART", "GREASE_GUN_LUBE", "HYDRAULIC_JACK", "JACK_STANDS_PAIR", "TIRE_IRON_WRENCH", "AIR_COMPRESSOR_TANK",
            "PNEUMATIC_IMPACT", "BATTERY_CHARGER_UNIT", "EXTENSION_CORD_ORANGE", "WORK_LIGHT_LED", "SHOP_VACUUM", "TORQUE_WRENCH",
            "PIPE_WRENCH_HEAVY", "WIRE_BRUSH", "CROWBAR"
        ]
    },

    {
        id: "culinary_baking_deep_sea",
        _innocentHints: [
            "Confectionery Culinary Baking, Pastry Kitchen Ovens & Dessert Flour Mixes",
            "Artisanal Dough Kneading, Sweet Patisserie Baking & Industrial Kitchen Appliances",
            "Gourmet Dessert Bakery, Pastry Chef Confectionery & Temperature Oven Controls",
            "Home Bakery Frameworks, Sweet Cake Decoration & Flour-Based Dough Mixing",
            "Professional Pastry Production, Oven Tray Baking & Yeasted Dough Fermentation"
        ],
        _imposterHints: [
            "Oceanographic Abyssal Research, Marine Submersible Probes & Deep Ocean Telemetry",
            "Subsea Trench Exploration, Hydrothermal Vent Analysis & Marine Trench Probes",
            "Benthic Zone Deep Navigation, Submersible Remote Robotics & Ocean Floor Science",
            "Abyssal Submarine Science, Aquatic Ecosystem Hydro-Probes & Pressure Telemetry",
            "Deep Ocean Floor Mapping, Pelagic Biological Traps & Marine Drone Telemetry"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "FLOUR", "SUGAR", "YEAST", "BUTTER", "EGGS", "MILK", "VANILLA", "SALT",
            "BROWN_SUGAR", "BAKING_SODA", "POWDERED_SUGAR", "COCOA_POWDER", "CHOCOLATE_CHIPS", "CINNAMON", "NUTMEG", "GINGER",
            "CORNSTARCH", "MOLASSES", "HONEY", "MAPLE_SYRUP", "ALMOND_EXTRACT", "OATMEAL", "RAISINS", "WALNUTS",
            "PECANS", "SHORTENING", "MARGARINE", "HEAVY_CREAM", "BUTTERMILK", "SOUR_CREAM", "CREAM_CHEESE", "GELATIN",
            "AGAR_AGAR", "PUMPKIN_PUREE", "APPLESAUCE", "LEMON_ZEST", "ORANGE_EXTRACT", "FOOD_COLORING", "SPRINKLES", "FONDANT",
            "MARZIPAN", "MERINGUE", "GLAZE", "FROSTING", "ICING", "GANACHE", "CARAMEL", "TOFFEE",
            "BREAD_FLOUR", "CAKE_FLOUR", "PASTRY_FLOUR", "RYE_FLOUR", "WHOLE_WHEAT", "CORNMEAL", "TAPIOCA", "ARROWROOT",
            "BAKING_POWDER", "CREAM_OF_TARTAR", "XANTHAN_GUM", "YEAST_PACKET", "SOURDOUGH_STARTER", "SPELT_GRAIN", "BARLEY_MALT", "OAT_BRAN",
            "MIXING_BOWL", "WHISK", "SPATULA", "ROLLING_PIN", "PASTRY_CUTTER", "DOUGH_SCRAPER", "MEASURING_CUP", "MEASURING_SPOON",
            "KITCHEN_SCALE", "SIFTER", "STRAINER", "PASTRY_BAG", "PIPING_TIP", "COOKIE_CUTTER", "MUFFIN_PAN", "LOAF_PAN",
            "CAKE_PAN", "PIE_DISH", "TART_PAN", "SPRINGFORM_PAN", "BAKING_SHEET", "PARCHMENT_PAPER", "SILICONE_MAT", "COOLING_RACK",
            "OVEN_MITT", "APRON", "TIMER", "STAND_MIXER", "HAND_MIXER", "FOOD_PROCESSOR", "BLENDER", "BLOWTORCH",
            "PASTRY_BRUSH", "BREAD_LAME", "PROOFING_BASKET", "DOUGH_HOOK", "WIRE_WHISK", "EGG_SEPARATOR", "PIE_WEIGHTS", "CAKE_TESTER",
            "FLOUR_DUSTER", "COOKIE_SCOOP", "BENCH_KNIFE", "TURNTABLE_CAKE", "PALETTE_KNIFE", "OFFSET_SPATULA"
        ],
        imposterWords: [
            "SUBMERSIBLE", "SONAR", "BATHYSCAPHE", "HYDROPHONE", "TRANSPONDER", "MAGNETOMETER",
            "ROV_ROBOTIC", "AUV_DRONE", "DEPTH_GAUGE", "ALTIMETER_AQU", "ALVIN_CAPSULE", "TRIESTE_PROP",
            "TELEMETRY_LINK", "UMBILICAL_CABLE", "BALLAST_TANK", "THRUSTER_PROP", "MANIPULATOR_ARM", "SAMPLE_BASKET",
            "CORER_DRILL", "GRAB_SAMPLER", "CTD_SENSOR", "THERMISTOR_CHAIN", "SALINOMETER", "TURBIDITY_METER",
            "FLUOROMETER", "BAROMETER_DEEP", "PRESSURE_HOUSING", "TITANIUM_SPHERE", "ACRYLIC_VIEWPORT", "LED_FLOODLIGHT",
            "STROBE_LIGHT", "HYDRAULIC_PUMP", "NITROGEN_TANK", "OXYGEN_SCRUBBER", "LIFE_SUPPORT", "RESCUE_BEACON",
            "ACOUSTIC_RELEASE", "PINGER_LOCATOR", "DOPPLER_LOG", "INERTIAL_NAV", "SATELLITE_FIX", "WEATHER_FAX",
            "WINCH_SYSTEM", "STEEL_CABLE", "CRANE_LAUNCH", "A_FRAME_DER", "DECK_CLEAT", "MOORING_LINE",
            "FENDER_RUBBER", "LIFE_RAFT", "SURVIVAL_SUIT"
        ]
    },

    {
        id: "theme_park_hospital_er",
        _innocentHints: [
            "Amusement Theme Parks, Rollercoaster Track Design & Boarding Queues",
            "Commercial Entertainment Parks, Kinetic Mechanical Rides & Ticket Turnstiles",
            "Recreational Carnival Midways, High-Speed Loop Rollercoasters & Safety Restraints",
            "Adventure Tourist Parks, Kinetic Gravity Rides & Public Entry Turnstiles",
            "Mechanical Ride Architecture, Rollercoaster Kinetic Coils & Guest Pass Lines"
        ],
        _imposterHints: [
            "Emergency Room Medicine, Clinical Trauma Triage & Acute Patient Monitors",
            "Hospital Trauma Medicine, Clinical Resuscitation Bays & Critical Vital Monitors",
            "Intensive Surgical Triage, Acute Medical Wards & Emergency Life-Support Systems",
            "Clinical Urgent Triage, Resuscitation Crash Carts & Patient Health Diagnostics",
            "Trauma Critical Treatment, Acute Bedside Monitoring & Life-Support Operations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "ROLLERCOASTER", "FERRIS_WHEEL", "CAROUSEL", "TICKET", "TURNSTILE", "QUEUE", "FAST_PASS", "MIDWAY",
            "COTTON_CANDY", "POPCORN", "CHURRO", "SOUVENIR", "MASCOT", "PARADE", "FIREWORKS", "LIGHT_SHOW",
            "MONORAIL", "CABLE_CAR", "CHAIRLIFT", "DROP_TOWER", "LOG_FLUME", "WATER_SLIDE", "WAVE_POOL", "LAZY_RIVER",
            "GIFT_SHOP", "BALLOON", "CARNIVAL", "GAME_BOOTH", "PRIZE", "STUFFED_ANIMAL", "FUNHOUSE", "MAZE",
            "HAUNTED_HOUSE", "4D_THEATER", "SIMULATOR", "BUMPER_CARS", "GO_KARTS", "ARCADE", "COIN_SLOT", "TOKEN",
            "MAP_GUIDE", "WRISTBAND", "STROLLER", "LOCKER", "BENCH", "TRASH_CAN", "STAGELIGHT", "SPEAKER",
            "TRACK_SEGMENT", "CHAIN_LIFT", "BRAKE_RUN", "LAUNCH_PAD", "LOOP_DE_LOOP", "CORKSCREW", "INVERSION", "CAMELBACK",
            "REST_BAR", "LAP_BAR", "OVERHEAD_HARNESS", "SEATBELT", "WHEEL_ASSEMBLY", "DRIVE_TIRE", "CABLE_WIND", "HYDRAULIC_GATE",
            "CONTROL_BOOTH", "OPERATOR", "ATTENDANT", "SAFETY_SENSOR", "EMERGENCY_STOP", "STATION_PLATFORM", "AIR_GATES", "HEIGHT_CHECK",
            "SINGLE_RIDER", "SWITCHBACK", "SHADE_CANOPY", "MISTING_FAN", "WATER_FOUNTAIN", "ICE_CREAM", "PRETZEL", "HOT_DOG",
            "TURKEY_LEG", "FUNNEL_CAKE", "SODA_FOUNTAIN", "REFILL_CUP", "PHOTO_PASS", "ON_RIDE_CAMERA", "FLASH_UNIT", "GREEN_SCREEN",
            "COSTUME", "CHARACTER", "AUTOGRAPH_BOOK", "BADGE", "LANYARD", "PIN_TRADING", "POSTCARD", "KEYCHAIN",
            "MAGNET", "T_SHIRT", "HOODIE", "HAT_EARS", "BUBBLE_WAND", "GLOW_STICK", "MAIN_STREET", "PLAZA",
            "FOUNTAIN", "STATUE", "CLOCK_TOWER", "INFORMATION_DESK", "LOST_AND_FOUND", "FIRST_AID", "SECURITY_GUARD", "PA_SYSTEM"
        ],
        imposterWords: [
            "DEFIBRILLATOR", "VENTILATOR", "INTUBATION", "LARYNGOSCOPE", "STETHOSCOPE", "SPHYGMOMANOMETER",
            "OXYMETER", "ELECTROCARDIOGRAM", "CRASH_CART", "SUCTION_PUMP", "IV_STAND", "SYRINGE_PUMP",
            "SCALPEL", "FORCEPS", "HEMOSTAT", "RETRACTOR", "SURGICAL_SCISSORS", "NEEDLE_DRIVER",
            "SUTURE_KIT", "GAUZE_PAD", "BANDAGE_ROLL", "TOURNIQUET", "SPLINT_BOARD", "CERVICAL_COLLAR",
            "SPINE_BOARD", "STRETCHER", "GURNEY", "WHEELCHAIR", "OXYGEN_MASK", "NEBULIZER",
            "GLUCOMETER", "THERMOMETER_MED", "OTOSCOPE", "OPHTHALMOSCOPE", "REFLEX_HAMMER", "PENLIGHT",
            "BIOHAZARD_BIN", "SHARPS_CONTAINER", "SCRUB_SUIT", "SURGICAL_GOWN", "FACE_SHIELD", "N95_MASK",
            "LATEX_GLOVES", "ANTISEPTIC_WIPE", "SALINE_BAG", "BLOOD_BAG", "CATHETER_KIT", "BEDPAN",
            "TRAUMA_SHEARS", "AMBU_BAG", "SCALPEL_BLADE"
        ]
    },

    {
        id: "fitness_weightlifting_aviation_atc",
        _innocentHints: [
            "Gym Gymnastics & Strength Weightlifting, Power Iron Plates & Exercise Routines",
            "Physical Barbell Training, Resistance Heavy Weightlifting & Body Gym Plateaus",
            "Athletic Bodybuilding Gyms, Olympic Free Barbell Grids & Muscle Repetitions",
            "Physical Resistance Training, Iron Dumbbell Barbell Racks & Gym Workouts",
            "Bodybuilding Strength Training, Steel Power Rack Stations & Pacing Intervals"
        ],
        _imposterHints: [
            "Aviation Radar Telemetry, Control Tower Flight Paths & Aerodrome Clearances",
            "Aviation Air Traffic Control, Radar Terminal Flight Tracks & Runway Clearances",
            "Metropolitan Flight Towers, Vector Radar Navigation Maps & Aircraft Separation",
            "Aerodrome Air Control Towers, Radio Voice Frequencies & Runway Sector Vectors",
            "Terminal Air Traffic Safety, Flight Telemetry Strips & Airway Grid Vectors"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BARBELL", "DUMBBELL", "KETTLEBELL", "WEIGHT_PLATE", "COLLAR_CLIP", "POWER_RACK", "BENCH_PRESS", "SQUAT_STAND",
            "DEADLIFT_PLATFORM", "PULLUP_BAR", "DIP_STATION", "CABLE_MACHINE", "SMITH_MACHINE", "LEG_PRESS", "CHEST_FLY", "LAT_PULLDOWN",
            "LEG_EXTENSION", "LEG_CURL", "CALF_RAISE", "PREACHER_BENCH", "HYPEREXTENSION", "ROMAN_CHAIR", "MEDICINE_BALL", "SLAM_BALL",
            "WALL_BALL", "SANDBAG", "BATTLE_ROPES", "PLYO_BOX", "RESISTANCE_BAND", "JUMP_ROPE", "CHALK_BLOCK", "LIFTING_BELT",
            "WRIST_WRAPS", "KNEE_SLEEVES", "LIFTING_STRAPS", "WEIGHT_VEST", "ANKLE_WEIGHTS", "FOAM_ROLLER", "YOGA_MAT", "EXERCISE_BALL",
            "BOSU_BALL", "YOGA_BLOCK", "SUSPENSION_TRAINER", "GYM_RINGS", "PARALLETTES", "AB_ROLLER", "INVERSION_TABLE", "PUNCHING_BAG",
            "SPEED_BAG", "WEIGHT_TREE", "DUMBBELL_RACK", "LOCKER_ROOM", "BENCH_UTILITY", "MIRROR_WALL", "RUBBER_FLOORING", "GYM_BAG",
            "SHAKER_BOTTLE", "WATER_JUG", "TOWEL", "SPORTS_BRA", "SNEAKERS", "LIFTING_SHOES", "WEIGHT_TRACKER", "STOPWATCH",
            "HEART_MONITOR", "PROTEIN_POWDER", "CREATINE", "PRE_WORKOUT", "AMINO_ACIDS", "VITAMINS", "ELECTROLYTES", "ENERGY_BAR",
            "WARM_UP", "COOL_DOWN", "STRETCHING", "FLEXIBILITY", "MOBILITY", "STABILITY", "BALANCE", "COORDINATION",
            "AGILITY", "SPEED_TRAINING", "ENDURANCE", "STAMINA", "CARDIO", "TREADMILL", "ELLIPTICAL", "STAIR_CLIMBER",
            "STATIONARY_BIKE", "ROWING_MACHINE", "SPIN_BIKE", "AIR_BIKE", "SKIERG", "Prowler_SLED", "AGILITY_LADDER", "CONES",
            "HEAVY_LIFT", "MAX_OUT", "ONE_REP_MAX", "SET_COUNT", "REP_COUNT", "REST_PERIOD", "TEMPO", "VOLUME",
            "INTENSITY", "FREQUENCY", "DURATION", "PROGRESSION", "OVERLOAD", "HYPERTROPHY", "STRENGTH", "POWERLIFTING"
        ],
        imposterWords: [
            "RADAR_SCOPE", "TRANSPONDER_CODE", "SQUAWK_IDENT", "FLIGHT_STRIP", "CONTROL_TOWER", "ALTIMETER_SETTING",
            "HEADING_VECTOR", "ALTITUDE_BLOCK", "AIRSPEED_LIMIT", "WAYPOINT_FIX", "JETWAY_ROUTE", "HOLDING_PATTERN",
            "RUNWAY_INCURSION", "TAXI_CLEARANCE", "TAKEOFF_APPROV", "LANDING_PERMIT", "IL_STATION", "VOR_BEACON",
            "GLIDESLOPE_BEAM", "LOCALIZER_ARRAY", "TOUCHDOWN_ZONE", "WIND_SHEAR_WARN", "METAR_REPORT", "ATIS_BROADCAST",
            "RADIO_FREQUENCY", "VHF_TRANSCEIVER", "HEADSET_BOOM", "FOOT_SWITCH", "LIGHT_GUN", "BRIGHT_DISPLAY",
            "AIRSPACE_CLASS", "RESTRICTED_AREA", "MILITARY_SECTOR", "FLIGHT_PLAN", "DEPARTURE_ROUTE", "ARRIVAL_ROUTE",
            "HANDOFF_SECTOR", "COORDINATION_LINE", "SEPARATION_MIN", "VERTICAL_BUFF", "LATERAL_DEV", "WAKE_TURBULENCE",
            "EMERGENCY_MAY", "PAN_PAN_ALERT", "RADIO_SILENCE", "NOTAM_BULLETIN", "AIRPORT_BEACON", "APPROACH_LIGHTS",
            "PAPI_LAMPS", "TAXIWAY_SIGNS", "INTERSECTION_TAXI"
        ]
    },

    {
        id: "gardening_horticulture_casino_gambling",
        _innocentHints: [
            "Botanical Gardening, Domestic Horticulture Pots & Organic Plant Seeds",
            "Agricultural Greenhouse Farming, Plant Cultivation Trays & Soil Fertilizer",
            "Domestic Flower Gardening, Organic Plant Germination & Soil Spades",
            "Greenhouse Horticulture Cultivation, Flower Beds & Nutrient Soil Mixes",
            "Backyard Plant Botany, Vegetable Patch Seeding & Pruning Tool Layouts"
        ],
        _imposterHints: [
            "High-Stakes Casino Gambling, Table Card Games & Betting Casino Chips",
            "Vegas Casino Floor Betting, Mechanical Slot Reels & Felt Card Tables",
            "Wagering Casino Gambling, Blackjack Table Betting Chips & Roulette Wheels",
            "Commercial Casino Wagering, Table Card Deck Distribution & Slot Payouts",
            "Gaming Floor Betting Systems, Live Dealer Felt Tables & Token Wagering"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SEEDLING", "SPROUT", "FLOWER", "PLANT", "SHRUB", "TREE", "VINE", "FERN",
            "HERB", "VEGETABLE", "FRUIT", "BERRY", "SOIL", "COMPOST", "FERTILIZER", "MULCH",
            "PEAT_MOSS", "PERLITE", "VERMICULITE", "POTTING_SOIL", "LOAM", "CLAY", "SAND", "GRAVEL",
            "FLOWERPOT", "PLANTER", "WINDOW_BOX", "HANGING_BASKET", "SEED_TRAY", "PROPAGATOR", "PEAT_POT", "ROOT_BALL",
            "TROUWEL", "SPADE", "SHOVEL", "HOE", "RAKE", "FORK", "WEEDER", "CULTIVATOR",
            "PRUNING_SHEARS", "LOOPERS", "HEDGE_CLIPPERS", "SAW_PRUNING", "KNIFE_GARDEN", "SHEARS", "SCYTHE", "SICKLE",
            "WATERING_CAN", "HOSE_REEL", "NOZZLE_SPRAY", "SPRINKLER", "DRIP_LINE", "WATER_TIMER", "RAIN_BARREL", "CISTERN",
            "WHEELBARROW", "GARDEN_CART", "SACK_TRUCK", "KNEELING_PAD", "GARDEN_GLOVES", "BOOTS_RUBBER", "APRON_TOOL", "HAT_SUN",
            "GREENHOUSE", "COLD_FRAME", "CLOCHE", "SHADE_CLOTH", "POLY_TUNNEL", "GROW_LIGHT", "HEATING_MAT", "THERMOMETER_SOIL",
            "MOISTURE_METER", "PH_TESTER", "SOIL_SIFTER", "COMPOST_BIN", "WORM_ERY", "RAIN_GAUGE", "HYDROMETER", "VENT_AUTO",
            "TRELLIS", "ARBOR", "PERGOLA", "OBELISK", "PLANT_STAKE", "CANE_BAMBOO", "TWINE_BALL", "PLANT_TIES",
            "LABELS_PLASTIC", "MARKER_PEN", "PRUNING_WAX", "GRAFTING_TAPE", "ROOTING_POWDER", "LEAF_SHINE", "INSECT_SPRAY", "NEEM_OIL",
            "WEED_KILLER", "MOSS_KILLER", "LAWN_FEED", "WEED_FABRIC", "PEST_NETTING", "BIRD_SCARE", "SLUG_TRAP", "RODENT_BOX",
            "LAWN_MOWER", "STRIMMER", "HEDGE_TRIMMER", "LEAF_BLOWER", "SHREDDER", "EDGER", "AERATOR", "SCARIFIER"
        ],
        imposterWords: [
            "ROULETTE_WHEEL", "BLACKJACK_DEAL", "CHIP_STACK", "BETTING_LIMIT", "DEALER_SHUFF", "PLAYING_CARDS",
            "CRAPS_DICE", "SLOT_MACHINE", "JACKPOT_PAY", "CASINO_FELT", "CASHIER_CAGE", "MARKER_LINE",
            "PIT_BOSS", "GAMING_FLOOR", "TOKEN_COIN", "PAYOUT_RATIO", "BET_MAXIMUM", "MINIMUM_STAKE",
            "SPLIT_BET", "DOUBLE_DOWN", "INSURANCE_BET", "SURRENDER_HAND", "CARD_COUNTING", "SHUFFLE_BOX",
            "DISCARD_TRAY", "CUT_CARD", "DEALER_BUTTON", "SMALL_BLIND", "BIG_BLIND", "ALL_IN_WAGER",
            "CHIPS_RACK", "PLAY_TOKEN", "SLOT_REELS", "PAY_LINE", "VIDEO_POKER", "BACCARAT_TABLE",
            "PUNTO_BANCO", "CHIPS_TRAY", "DICE_CUP", "STICKPERSON", "BOXPERSON", "ROULETTE_BALL",
            "MARKER_BUTTON", "HIGH_ROLLER", "VIP_LOUNGE", "COMP_ROOM", "SECURITY_VAULT", "SURVEILLANCE_CAM",
            "EYE_IN_THE_SKY", "CASH_DROP", "DROP_BOX"
        ]
    },

    {
        id: "astronomy_astrophysics_egypt_archaeology",
        _innocentHints: [
            "Space Astronomy Exploration, Deep Sky Telescopes & Cosmic Star Constellations",
            "Astrophysics Celestial Science, Galactic Deep Space Nebula & Telescope Focal Mounts",
            "Orbital Astrophysics Observatory, Deep Space Star Clusters & Planetary Telescopes",
            "Celestial Body Mapping, Cosmic Outer Space Radiation & Optical Lens Focus",
            "Deep Universe Astronomy, Stellar Nebula Coordinate Systems & Focal Deep Optics"
        ],
        _imposterHints: [
            "Ancient Egyptian Archaeology, Desert Tomb Excavation & Hieroglyphic Papyrus",
            "Nile Valley Archaeology, Desert Pharaoh Tombs & Monument Hieroglyphics",
            "Ancient Dynastic Antiquities, Desert Limestone Pyramids & Hieroglyphic Inscriptions",
            "Desert Antiquities Excavation, Pharaoh Limestone Sarcophagi & Papyrus Scrolls",
            "Pharaonic Valley Exploration, Burial Chamber Architecture & Hieroglyphic Artifacts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "TELESCOPE", "OBSERVATORY", "CONSTELLATION", "GALAXIES", "NEBULA", "SUPERNOVA", "EXOPLANET", "ASTEROID",
            "METEORITE", "COMET", "LIGHT_YEAR", "PARSEC", "REDSHIFT", "BLUESHIFT", "SPECTROSCOPY", "PHOTOMETRY",
            "REFRACTOR", "REFLECTOR", "APERTURE", "FOCAL_LENGTH", "EYEPIECE", "BARLOW_LENS", "FILTER_SOLAR", "MOUNT_EQUATORIAL",
            "TRIPOD", "COUNTERWEIGHT", "DRIVE_MOTOR", "FINDERSCOPE", "GUIDESCOPE", "CCD_CAMERA", "SENSORS_IMAGE", "DATA_LOGGER",
            "STAR_CHART", "ATLAS_SKY", "COORDINATES", "DECLINATION", "RIGHT_ASCENSION", "ALTITUDE_AZI", "ZENITH", "NADIR",
            "HORIZON", "ECLIPTIC", "CELESTIAL_EQU", "POLE_STAR", "MERIDIAN", "HOUR_ANGLE", "AIRMASS", "SEEING_LIMIT",
            "LIGHT_POLLUTION", "DARK_SKY", "FILAMENT_LED", "DEW_SHIELD", "HEATER_BAND", "POWER_PACK", "CABLE_USB", "LAPTOP_CON",
            "SOFTWARE_PLAN", "AUTOGUIDER", "FOCUS_MOTOR", "FILTER_WHEEL", "OIII_FILTER", "HA_FILTER", "SII_FILTER", "LRGB_FILTERS",
            "SUN_SPOT", "PROMINENCE", "FLARE_SOLAR", "CORONA_ECC", "MOON_CRATER", "MARS_ROVER", "JUPITER_MOONS", "SATURN_RINGS",
            "URANUS_AXIS", "NEPTUNE_WIND", "PLUTO_ORBIT", "ORION_NEBULA", "ANDROMEDA_GAL", "PLEIADES_STARS", "MILKY_WAY", "ZODIAC_BAND",
            "SOLSTICE", "EQUINOX", "ECLIPSE_SOL", "ECLIPSE_LUN", "TRANSIT_PLAN", "OCCULTATION", "GRAVITY_LENS", "BLACK_HOLE",
            "NEUTRON_STAR", "PULSAR", "QUASAR", "DARK_MATTER", "DARK_ENERGY", "COSMIC_MICROWAVE", "BIG_BANG", "COSMOLOGY",
            "RADIATION_BELT", "MAGNETOSPHERE", "SOLAR_WIND", "AURORA_BORE", "COSMIC_RAY", "GAMMA_RAY_BUR", "X_RAY_ASTRO", "INFRARED_TEL",
            "RADIO_DISH", "INTERFEROMETER", "SPACE_PROBE", "SATELLITE", "ROCKET_BOOST", "LAUNCH_PAD_AST", "SPACE_STATION", "ASTRONAUT"
        ],
        imposterWords: [
            "HIEROGLYPHICS", "SARCOPHAGUS", "MUMMIFICATION", "PHARAOH_KING", "CANOPIC_JARS", "ROSETTA_STONE",
            "PAPYRUS_SCROLL", "SCARAB_AMULET", "ANUBIS_STATUE", "PYRAMID_TOMB", "VALLEY_KINGS", "SPHINX_MONUMENT",
            "BURIAL_CHAMBER", "CARTOUCHE_NAME", "USHABTI_FIGURE", "FUNERARY_MASK", "BOOK_DEAD", "OBELISK_STONE",
            "TEMPLE_RUINS", "LIMESTONE_BLOCK", "SAND_TRENCH", "EXCAVATION_PITI", "TROWEL_ARCH", "BRUSH_FINE",
            "MEASURING_TAPE", "THEODOLITE_SURV", "GRID_SQUARE", "ARTIFACT_TAG", "RECORD_LOG", "SITE_MAP",
            "STRATIGRAPHY", "POTTERY_SHERD", "CHIPPED_FLINT", "BEAD_NECKLACE", "GOLD_FOIL", "LAPIS_LAZULI",
            "ALABASTER_VASE", "BRONZE_STATUE", "WRITING_STYLUS", "SCRIBE_PALETTE", "LINEN_WRAPPING", "RESIN_COATING",
            "NATRON_SALT", "AMON_RA_TEMPLE", "LUXOR_SITE", "KARNAK_RUINS", "GIZA_PLATEAU"
        ]
    },

    {
        id: "fashion_runway_poker_stakes",
        _innocentHints: [
            "Haute Couture Fashion, Designer Runway Shows & Textile Apparel Collections",
            "High-Fashion Modeling, Luxury Runway Design & Seasonal Garment Textiles",
            "Parisian Fashion Runway, Designer Fabric Textiles & Atelier Modeling Garments",
            "Luxury Apparel Modeling, Seasonal Runway Style & Textile Fabric Design",
            "Atelier Fashion Runway, Haute Couture Garment Styling & Textile Draping"
        ],
        _imposterHints: [
            "Cardroom Tournament Poker, High-Stakes Betting Chips & Table Card Bluffs",
            "Casino Poker Tournaments, Wagering Chip Piles & Strategic Card Bluffs",
            "Professional Texas Holdem, Table Betting Mechanics & Hidden Card Bluffs",
            "High-Stakes Cardrooms, Strategic Wagering Tokens & Live Table Bluffs",
            "Casino Card Tournaments, Tactical Betting Mathematics & Face-to-Face Bluffs"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "RUNWAY", "COUTURE", "MODEL", "DESIGNER", "ATELIER", "TEXTILE", "FABRIC", "GARMENT",
            "SILK", "VELVET", "SATIN", "CHIFFON", "LEATHER", "DENIM", "TWEED", "LACE",
            "PATTERNS", "STITCHING", "SEWING", "TAILOR", "HEMLINE", "SEAMSTRESS", "DRAPING", "MANNEQUIN",
            "SKETCHBOOK", "SWATCHES", "FITTING", "ALTERATION", "COLLECTION", "SEASONAL", "AUTUMN", "SPRING",
            "LOOKBOOK", "STYLING", "ACCESSORY", "JEWELRY", "HANDBAG", "CLUTCH", "FOOTWEAR", "STILETTOS",
            "BOUTS", "JACKET", "BLAZER", "TROUSERS", "BLOUSE", "CORSAGE", "GOWN", "TUXEDO",
            "SILHOUETTE", "AVANT_GARDE", "VINTAGE", "READY_TO_WEAR", "BOUTIQUE", "WARDROBE", "CLOSET", "HANGERS",
            "BACKSTAGE", "MAKEUP", "HAIRSTYLE", "HAIRSPRAY", "RACK_CLOTHES", "STEAMER", "SAFETY_PINS", "MEASURING_TAPE",
            "PHOTOGRAPHER", "FLASHBULB", "MAGAZINE", "EDITOR", "CRITIC", "FRONTRow", "CELEBRITY", "INFLUENCER",
            "CATWALK", "STRUT", "POSE", "PORTFOLIO", "AGENCY", "SUPERMODEL", "GLAMOUR", "TRENDSETTER",
            "EMBROIDERY", "SEQUINS", "BEADING", "TASSLES", "FRINGE", "RUFFLES", "PLEATS", "LINING",
            "BUTTONS", "ZIPPER", "VELCRO", "FASTENER", "COLLAR", "CUFFLINK", "POCKET", "LAPEL",
            "NECKLICE", "EARRINGS", "BRACELET", "BROOCH", "TIARA", "VEIL", "SCARF", "SHAWL"
        ],
        imposterWords: [
            "TEXAS_HOLDEM", "DEALER_BUTTON", "CHIP_STACK", "BLUFFING", "BLIND_BET", "HOLE_CARDS",
            "THE_FLOP", "THE_TURN", "THE_RIVER", "SHOWDOWN", "ALL_IN_MOVE", "POT_LIMIT",
            "ROYAL_FLUSH", "STRAIGHT_FLUSH", "FOUR_KIND", "FULL_HOUSE", "THREE_KIND", "TWO_PAIR",
            "POCKET_ACES", "CHECK_RAISE", "FOLD_HAND", "CALL_WAGER", "MUCK_CARDS", "CARD_SHARK",
            "TELL_PHYSICAL", "CHIPS_RACKING", "DECK_SHUFFLE", "DISCARD_PILE", "BURN_CARD", "ANTE_UP",
            "SPLIT_POT", "SIDE_POT", "MAIN_POT", "CHIP_LEADER", "BUY_IN_FEE", "REBEY_OPTION",
            "TOURNAMENT_BLI", "DEALER_SHOE", "PLASTIC_CARDS", "FELT_SURFACE", "CASINO_TABLE", "PIT_BOSS",
            "CASH_GAME", "HIGH_ROLLER", "UNDER_THE_GUN", "CUTOFF_SEAT", "HIJACK_SEAT", "SMALL_BLIND",
            "BIG_BLIND", "STRADDLE_BET", "BAD_BEAT"
        ]
    },

    {
        id: "forensics_art_restoration",
        _innocentHints: [
            "Forensic Crime Scene Investigation, Physical Evidence Trajectories & Criminology Labs",
            "Criminal Investigation Forensics, Chemical Trace Lab Analysis & Crime Scene Evidence",
            "Criminology Science Labs, Biometric Trace Detection & Forensic Evidence Analysis",
            "Physical Evidence Forensics, Ballistics Trajectory Trailing & Criminology Chemistry",
            "Forensic Trace Exploration, Crime Scene Bio-Analysis & Laboratory Evidence"
        ],
        _imposterHints: [
            "Museum Fine Art Restoration, Antique Painting Preservation & Pigment Chemistry",
            "Classical Painting Restoration, Antique Museum Conservation & Canvas Pigments",
            "Fine Art Gallery Conservation, Historic Pigment Chemistry & Canvas Restoration",
            "Museum Masterpiece Preservation, Oil Painting Conservation & Canvas Pigments",
            "Art History Chemical Restoration, Antique Masterpiece Conservation & Pigment Analysis"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "FINGERPRINT", "DNA_PROFILE", "BLOOD_SPATTER", "BALLISTICS", "CRIME_SCENE", "EVIDENCE_BAG", "LUMINOL_SPRAY", "AUTOPSY",
            "TOXICOLOGY", "PATHOLOGY", "CORONER", "BIOHAZARD", "TRACE_EVIDENCE", "HAIR_SAMPLE", "FIBER_ANALYSIS", "FOOTPRINT",
            "TYRE_TRACKS", "TOOL_MARKS", "GLASS_SHARDS", "SOIL_TRACE", "GUNSHOT_RESIDUE", "SWAB_SAMPLE", "STERILE_VIAL", "TWEEZERS",
            "MICROSCOPE", "CENTRIFUGE", "SPECTROMETER", "CHROMATOGRAPHY", "MAGNIFYING_GLASS", "UV_FLASHLIGHT", "BLUE_LIGHT", "FUMING_CHAMBER",
            "LATENT_PRINT", "POWDER_BRUSH", "MAGNETIC_POWDER", "LIFTING_TAPE", "INSPECTION_MIRR", "CALIPERS", "SCALPEL_BLADE", "FORCEPS_CLIP",
            "SKETCH_PAD", "MEASURING_MARKE", "EVIDENCE_TAG", "SEAL_TAPE", "POLICE_TAPE", "CHALK_OUTLINE", "PHOTOGRAPHY_CON", "FLASH_MOUNT",
            "CASE_FILE", "DOSSIER", "WITNESS_REPORT", "SUSPECT_LIST", "ALIBI_CHECK", "INTERROGATION", "POLYGRAPH", "PROFILE_CRIM",
            "MAGAZINE_CLIP", "CASING_BULLET", "CALIBRE_ROUND", "STRIATION", "FIRING_PIN", "MUZZLE_VELOCITY", "TRAJECTORY", "ANGLE_IMPACT",
            "DECOMPOSITION", "RIGOR_MORTIS", "LIVOR_MORTIS", "ALGOR_MORTIS", "SKELETAL_REMAIN", "DENTAL_RECORDS", "BITE_MARK", "DNA_SPLICING",
            "GEL_ELECTRO", "MATCH_DATABASE", "CODIS_SYSTEM", "AFIS_SYSTEM", "CHAIN_CUSTODY", "LAB_COAT", "RUBBER_GLOVES", "FACE_SHIELD",
            "CHEMICAL_REAG", "ACID_TEST", "POISON_SCREEN", "NARCOTIC_KIT", "FORGERY_DETECT", "INK_ANALYSIS", "HANDWRITING_AN", "DOCUMENT_EXAM",
            "DIGITAL_FOREN", "HARD_DRIVE_SCAN", "DATA_RECOVERY", "ENCRYPTION_KEY", "CELL_TOWER_PING", "GPS_LOGS", "SECURITY_VIDEO", "ENHANCE_IMAGE"
        ],
        imposterWords: [
            "CANVAS_STRETCH", "OIL_PIGMENT", "VARNISH_REMOVAL", "TURPENTINE_SOLV", "BRUSH_STROKE", "LINSEED_OIL",
            "CRACKLE_PATTERN", "UNDERPAINTING", "PIGMENT_ANALYS", "X_RAY_RADIOGR", "INFRARED_REFL", "ART_CONSERVATOR",
            "MUSEUM_GALLERY", "MASTERPIECE_RES", "RETUCHING_PALET", "STABILIZATION", "HUMIDITY_CAVIT", "UV_FILTER_GLASS",
            "EASEL_MOUNT", "ACRYLIC_MEDIUM", "TEMPERA_PAINT", "FRESCO_WALL", "GILDING_LEAF", "GOLD_LEAF_APPL",
            "GUM_ARABIC", "DISTILLED_WATER", "SOLVENT_GEL", "MICRO_SPATULA", "SCALPEL_SCRAP", "COTTON_SWAB_ART",
            "SURFACE_CLEANIN", "BINDING_AGENT", "CANVAS_LINING", "WOODEN_PANEL", "STRETCHER_BAR", "FRAME_REPAIR",
            "PIGMENT_GRIND", "ULTRAMARINE_BLU", "OCHRE_POWDER", "TITANIUM_WHITE", "JAPANESE_PAPER", "WHEAT_STARCH",
            "REVERSIBLE_GLU", "ART_FORGERY_CH", "PROVENANCE_DOC", "CATALOGUE_RAIS", "MUSEUM_ARCHIVE", "ACID_FREE_MATT",
            "STORAGE_VAULT", "AIR_FILTRATION"
        ]
    },

    {
        id: "medieval_fantasy_corporate_office",
        _innocentHints: [
            "Classic Medieval Fantasy, Sword & Sorcery Quests & Tabletop RPG Campaigns",
            "High-Fantasy Mythology, Epic Knight Quests & Mythical Dragon Realms",
            "Mythical Sword & Sorcery, Medieval Kingdom Quests & Magic Dragon Dungeons",
            "Tabletop RPG Campaigns, Epic Knight Legends & Heroic Fantasy Quests",
            "Medieval Kingdom Lore, Mythical Magic Castles & Sorcery Dungeon Raids"
        ],
        _imposterHints: [
            "Corporate Office Environments, White-Collar Cubicle Business & Business Deadlines",
            "Corporate Business Offices, White-Collar Cubicle Work & Executive Deadlines",
            "Modern Corporate Workplaces, Corporate Business Deadlines & Desk Administration",
            "White-Collar Corporate Offices, Desk Cubicle Administration & Manager Deadlines",
            "Corporate Enterprise Business, Desk Spreadsheet Management & Office Meetings"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SWORD", "SHIELD", "ARMOUR", "DRAGON", "WIZARD", "CASTLE", "DUNGEON", "KNIGHT",
            "SPELLBOOK", "POTION", "AVATAR", "QUESTLINE", "GOLD_COINS", "TREASURE", "GOBLIN", "ORC",
            "KINGDOM", "THRONE", "PRINCESS", "VILLAGE", "TAVERN", "CAMPFIRE", "CROSSBOW", "ARROW",
            "HELMET", "GAUNTLET", "BOOTS_LEATHER", "CLOAK", "AMULET", "RING_POWER", "SCROLL", "MAP_REALM",
            "ELVEN_FOREST", "DWARF_MINE", "MOUNTAIN_PASS", "RUINS", "CRYPT", "GRAVEYARD", "SKELETON", "ZOMBIE",
            "MONSTER", "BEAST", "WOLF", "SPIDER_GIANT", "TROLL", "GIANT", "GOLEM", "GARGOYLE",
            "MAGIC_WAND", "STAFF_POWER", "CRYSTAL_BALL", "ALTAR", "SHRINE", "BLESSING", "CURSE", "PROPHECY",
            "HERO_LEGEND", "PALADIN", "ROGUE", "ARCHER", "CLERIC", "BARBARIAN", "DRUID", "BARD",
            "EXPERIENCE_PT", "LEVEL_UP", "SKILL_TREE", "ABILITY", "MANA_POOL", "HEALTH_BAR", "STAMINA", "CRITICAL_HIT",
            "GUILD_HALL", "FACTION", "ALLIANCE", "TREATY", "BANNER", "EMBLEM", "TRUMPET", "FEAST",
            "BLACKSMITH", "FORGE", "ANVIL", "HAMMER_IRON", "MERCHANT", "SHOPKEEPER", "BARTER", "TRADE",
            "COMPASS", "LANTERN_LIGHT", "TORCH_FLAME", "ROPE_HOOK", "RATIONS", "BACKPACK", "BEDROLL", "JOURNAL"
        ],
        imposterWords: [
            "SPREADSHEET", "EXCEL_MACRO", "CUBICLE_DESK", "DEADLINE_DATE", "POWERPOINT_SLI", "CONFERENCE_RM",
            "QUARTERLY_REV", "BOARD_MEETING", "HUMAN_RESOURCE", "PUNCH_CARD", "WATER_COOLER", "COFFEE_MACHINE",
            "PRINTER_JAM", "PHOTOCOPIER", "STAPLER_DESK", "PAPER_SHREDDER", "OFFICE_CHAIR", "KEYBOARD_MOUSE",
            "EMAIL_INBOX", "MEMO_DOCUMENT", "PROJECT_MANAGE", "TIMELINE_GANTT", "BUDGET_COST", "EXPENSE_REPORT",
            "SALARY_PAY", "BONUS_CHECK", "PROMOTION_JOB", "COMMUTE_TRAIN", "PARKING_PASS", "ID_BADGE",
            "DESK_PHONE", "MARKET_SHARE", "STRATEGY_PLAN", "TEAM_LEADER", "SUPERVISOR", "EXECUTIVE_CEO",
            "SHAREHOLDER", "INVESTor_CALL", "CORPORATE_SUIT", "BUSINESS_CARD", "BRIEFCASE", "WHITEBOARD_M",
            "POST_IT_NOTES", "HIGHLIGHTER_P", "FILING_CABINET", "PAPER_CLIPS", "BINDER_FOLDERS", "DESK_ORGANIZER"
        ]
    },

    {
        id: "pirate_voyage_space_astronaut",
        _innocentHints: [
            "Seafaring Pirate Voyages, Wooden Sailing Ships & High-Seas Navigation",
            "Maritime Golden Age Pirates, Naval Sailing Ships & High-Seas Ocean Charts",
            "Nautical Pirate Sailing, High-Seas Navigation Maps & Wooden Galleon Ships",
            "Maritime Ocean Voyaging, Pirate Sailing Frigates & High-Seas Navigation",
            "Wooden Galleon Privateers, Sailing Ship Rigging & Maritime High-Seas Charts"
        ],
        _imposterHints: [
            "Aerospace Space Astronauts, Sci-Fi Starship Rockets & Orbital Flight Mechanics",
            "Sci-Fi Deep Space Astronauts, Galactic Rocket Engines & Orbital Telemetry",
            "Orbital Space Exploration, Futuristic Rocket Ships & Sci-Fi Astronaut Life",
            "Aerospace Rocket Propulsion, Deep Space Astronauts & Sci-Fi Navigation",
            "Futuristic Starship Astronauts, Deep Space Flight Engineering & Rocket Systems"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "GALLEON", "CAPTAIN", "SAILING_SHIP", "HIGH_SEAS", "COMPASS", "ANCHOR", "CANNON", "TREASURE_MAP",
            "SPYGLASS", "SEACHART", "NAVIGATION", "STEERING_WHEEL", "MAIN_MAST", "SAILS_FABRIC", "RIGGING_ROPES", "DECK_WOODEN",
            "CABIN_BOY", "FIRST_MATE", "QUARTERMASTER", "BOATSWAIN", "CREW_MEMBERS", "SAILOR", "LOOKOUT_TOWER", "CROWS_NEST",
            "HARBOUR", "PORT_TOWN", "ISLAND_DESERT", "LAGOON", "REEF_CORAL", "SANDBAR", "SHORELINE", "WAVES_OCEAN",
            "BARREL_RUM", "GUNPOWDER", "MUSKET", "CUTLASS", "DAGGER", "FLINTLOCK", "PISTOL", "SWORD_FIGHT",
            "FLAG_BLACK", "SKULL_BONES", "JOLLY_ROGER", "PIRACY", "LOOTING", "PLUNDER", "BOOTY_GOLD", "CHEST_LOCK",
            "DOUBLOONS", "SILVER_PIECES", "JEWELS", "NECKLACE_GOLD", "CROWN_ROYAL", "GOBLET", "MAP_X_MARKS", "COMPASS_ROSE",
            "LOGBOOK", "QUILL_PEN", "PARCHMENT", "MESSAGE_BOTTLE", "LANTERN_OIL", "HAMMOCK", "RATIONS_BISCUIT", "SALT_BEEF",
            "BARNACLES", "SEA_WEED", "WHALE", "SHARK", "DOLPHIN", "SEAGULL", "PELICAN", "PARROT_PET",
            "STORM_THUNDER", "LIGHTNING", "GALE_WINDS", "FOG_DENSE", "TIDE_HIGH", "CURRENT_OCEAN", "WHIRLPOOL", "MAST_BROKEN",
            "LEAK_PLANK", "BILGE_WATER", "PUMP_HAND", "LIFEBOAT", "OARS_WOODEN", "ROPE_KNOT", "NET_FISHING", "HOOK_HAND"
        ],
        imposterWords: [
            "ROCKET_ENGINE", "SPACE_SHUTTLE", "ASTRONAUT_SUIT", "ZERO_GRAVITY", "ORBITAL_PATH", "LAUNCH_PAD",
            "MISSION_CONTR", "SPACE_STATION", "SOLAR_PANELS", "THRUSTER_JET", "OXYGEN_TANK", "AIRLOCK_DOOR",
            "SPACESUIT_HELM", "COMM_SATELLITE", "MOON_LANDER", "ROVER_VEHICLE", "CRATER_SURFACE", "METEOR_SHOWER",
            "ASTEROID_BELT", "GALAXY_CLUSTER", "NEBULA_CLOUD", "BLACK_HOLE_S", "STAR_SYSTEM", "PLANET_MARS",
            "TELEMETRY_DAT", "RADIO_ANTENNA", "LASER_BEAM", "WARP_DRIVE", "SHIELD_GENER", "COCKPIT_FLIGH",
            "PILOT_SEAT", "NAVIGATION_CO", "FLIGHT_COMPUT", "COSMONAUT", "ALIEN_LIFE", "UFO_SIGHTING",
            "HYPER_SLEEP", "CRYOGENIC_POT", "SPACE_FOOD", "FREEZE_DRIED", "GRAVITY_CENT", "DOCKING_RING",
            "FUEL_CELL", "ION_PROPULSIO", "SOLAR_FLARE", "RADIATION_S", "VACUUM_VOID", "LIGHT_SPEED"
        ]
    },

    {
        id: "zombie_survival_high_school",
        _innocentHints: [
            "Zombie Apocalypse Survival, Undead Safehouse Citadels & Scavenging Supplies",
            "Undead Apocalypse Survival, Post-Apocalyptic Safehouses & Scavenging Gear",
            "Zombie Survivalist Outposts, Post-Apocalyptic Fortresses & Supply Scavenging",
            "Post-Apocalyptic Survival, Undead Outbreak Safehouses & Scavenger Packs",
            "Undead Horde Emergency, Survivalist Strongholds & Resource Scavenging"
        ],
        _imposterHints: [
            "Secondary High School, Institutional Student Classrooms & Academic Exams",
            "High School Institutional Classrooms, Secondary Student Education & Semester Exams",
            "Academic Student Secondary Schools, Lecture Classrooms & Educational Grading",
            "Institutional Secondary Classrooms, High School Homework & Student Semesters",
            "High School Educational Buildings, Student Subject Classrooms & Academic Grading"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SURVIVOR", "SAFESHOUSE", "SCAVENGING", "SUPPLIES", "MEDKIT", "OUTBREAK", "INFECTION", "QUARANTINE",
            "BARRICADE", "FORTRESS", "STRONGHOLD", "OUTPOST", "WATCHTOWER", "BARBED_WIRE", "SANDBAGS", "LOCKDOWN",
            "AMMUNITION", "SHOTGUN", "RIFLE", "MACHETE", "CROSSBOW", "BAT_NAILS", "AXE_WEAPON", "CROWBAR_TOOL",
            "RATIONS", "CANNED_FOOD", "WATER_JUG", "JERKY", "BACKPACK_GEAR", "FLASHLIGHT", "BATTERIES", "WALKIE_TALKIE",
            "RADIO_SIGNAL", "DISTRESS_CALL", "EVACUATION", "HELICOPTER", "RESCUE_ZONE", "MILITARY_CON", "CHECKPOINT", "CAMP_SURV",
            "UNDEAD", "WALKER", "BITER", "MUTANT", "HORDE_RUN", "SWARM", "INFECTED_BO", "ZOMBIFIED",
            "RUNNER", "STALKER", "MONSTER_CRE", "GROAN_SOUND", "BLOOD_STAIN", "CORPSE", "GRAVE", "APOCALYPSE",
            "GAS_CAN", "VEHICLE_ARM", "TRUCK_GRILL", "MOTORCYCLE", "SIREN_ALARM", "FLARE_GUN", "SMOKE_BOMB", "EXPLOSIVE",
            "FIRST_AID", "BANDAGES", "ANTIBIOTICS", "SYRINGE", "SURGICAL_KITI", "SPLINT", "TOURNIQUET_S", "ALCOHOL_WIP",
            "BINOCULARS", "NIGHT_VISION", "MAP_ROUTING", "COMPASS_SURV", "MATCHES_BOX", "LIGHTER", "CAMPFIRE_CO", "SLEEPING_BAG",
            "KNIFE_HUNT", "TOOLS_MULTI", "DUCT_TAPE_SU", "ROPE_COIL", " tarp_COVER", "AXE_CHOP", "HAMMER_CONST", "NAILS_BAG"
        ],
        imposterWords: [
            "BLACKBOARD", "TEXTBOOK", "CLASSROOM", "HOMEWORK", "SEMESTER", "REPORT_CARD", "STUDENT_DESK", "TEACHER_LPA",
            "PRINCIPAL", "DETENTION", "SCHOOL_BELL", "LOCKER_ROOM", "CAFETERIA", "LUNCH_TRAY", "GYMNASIUM", "PLAYGROUND",
            "BACKPACK_SCH", "PENCIL_CASE", "BALLPOINT_PEN", "NOTEBOOK_PAP", "BINDER_RING", "CALCULATOR_G", "RULER_MEASURE", "DICTIONARY",
            "LIBRARY_BOO", "STUDY_HALL", "POP_QUIZ", "FINAL_EXAM", "GRADING_RUBR", "REPORT_ESSAY", "PRESENTATION", "WHITEBOARD_C",
            "CHALK_DUST", "PENCIL_SHARP", "ERASER_RUBB", "STAPLER_OFFI", "PAPER_PUNCH", "REPORT_FOLDER", "ATTENDANCE_L", "HALL_PASS",
            "SCHOOL_BUS", "YELLOW_BUS", "DRIVERS_ED", "SPORTS_TEAM", "CHEERLEADER", "MASCOT_COST", "GRADUATION", "DIPLOMA_DOC",
            "PROM_DANCE", "YEARBOOK_PH", "CLASS_PHOTO", "SCHOOL_NURSE", "COUNSELOR", "PARENT_TEACH"
        ]
    },

    {
        id: "supermarket_spy_agency",
        _innocentHints: [
            "Commercial Retail Supermarkets, Grocery Food Aisles & Checkout Scanners",
            "Local Grocery Supermarkets, Retail Food Produce & Checkout Item Scanners",
            "Public Retail Grocery Stores, Supermarket Food Aisles & Price Scanners",
            "Consumer Food Supermarkets, Grocery Produce Sections & Automated Scanners",
            "Neighborhood Retail Groceries, Supermarket Food Stalls & Checkout Scanners"
        ],
        _imposterHints: [
            "Espionage Secret Service, Intelligence Spy Headquarters & Security Scanners",
            "Classified Intelligence Agencies, Secret Espionage Hubs & Identity Scanners",
            "Clandestine Espionage Agencies, Government Spy Vaults & Retina Scanners",
            "Undercover Intelligence Bureaus, Secret Agent Command & Security Scanners",
            "International Espionage Networks, Classified Spy Operations & Security Clearance"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SHOPPING_CART", "CASH_REGISTER", "GROCERIES", "PRODUCE", "BARCODE", "SCANNER", "SUPERMARKET", "AISLE_NUMBER",
            "RECEIPT", "COUPON", "DISCOUNT", "CASHIER", "BAGGING_AREA", "PLASTIC_BAG", "PAPER_BAG", "REUSABLE_BAG",
            "CONVEYOR_BELT", "PRICE_TAG", "SHELF_STOCK", "BACKroom", "MANAGER_SIGN", "EMPLOYEE_ID", "UNIFORM_VEST", "NAME_TAG",
            "SHOPPING_LIST", "MEMBERSHIP", "LOYALTY_CARD", "REWARD_POINTS", "CASH_BACK", "CREDIT_CARD", "CONTACTLESS", "COIN_SLOT",
            "BAKERY_SECTION", "DELI_COUNTER", "BUTCHER_SHOP", "SEAFOOD_STALL", "FROZEN_AISLE", "DAIRY_FRIDGE", "PRODUCE_RACK", "CEREAL_SHELF",
            "FRUIT_BASKET", "VEGETABLES", "MILK_CARTON", "EGGS_CRATE", "LOAF_BREAD", "CHEESE_WHEEL", "SNACK_PACK", "SODA_CAN",
            "FROZEN_PIZZA", "ICE_CREAM_TUB", "CAN_SOUP", "SPICE_JAR", "FLOUR_BAG", "COFFEE_BEANS", "TEA_BOX", "JUICE_BOTTLE",
            "SHOPPING_BASKET", "WHEEL_SQUEAK", "REFRIGERATION", "FREEZER_DOOR", "DISPLAY_CASE", "PROMOTION_SIG", "CLEARANCE_BIN", "BULK_DISPENSER",
            "SCALE_WEIGHING", "STICKER_LABEL", "EXPIRATION_DATE", "BEST_BEFORE", "BATCH_CODE", "NUTRITION_FACT", "BAR_CODE_REAI", "SCANNER_GUN",
            "INTERCOM_CALL", "ANNOUNCEMENT", "BACKGROUND_MUS", "STORE_HOURS", "AUTOMATIC_DOOR", "ENTRANCE_GATE", "EXIT_LANES", "PARKING_LOT",
            "CART_CORRAL", "LOADING_DOCK", "PALLET_JACK", "CARDBOARD_BOX", "STOCK_CLERK", "CLEANUP_AISLE", "SPILL_HAZARD", "BROOM_MOP"
        ],
        imposterWords: [
            "SECRET_AGENT", "CLASSIFIED_DOC", "UNDERCOVER_MIS", "ESPIONAGE_NET", "SPY_HQ", "SECURITY_PASS", "RETINA_SCAN", "VAULT_DOOR",
            "CODE_NAME", "ALIAS_IDENTITY", "FORGED_PASSPOR", "SAFEHOUSE_LOC", "DEAD_DROP_CLIP", "MICROFILM_LOG", "ENCRYPTED_COM", "WIRE_TAP_DEVI",
            "LISTENING_POST", "SURVEILLANCE_C", "BUG_DETECTOR", "NIGHT_VISION_G", "LASER_GRID", "ALARM_SYSTEM", "LOCK_PICK_SET", "DISGUISE_KIT",
            "SILENCED_PIST", "SMOKE_GRENADE", "POISON_DART", "TRACKING_DEVI", "GPS_BEACON", "SATELLITE_LINK", "MAINFRAME_HAC", "CYBER_ATTACK",
            "DEBRIEFING_RM", "MISSION_BRIEF", "INTEL_REPORT", "COUNTER_INTELL", "DOUBLE_AGENT", "MOLE_INFILTRAT", "HANDLER_CONTA", "OPERATIVE_NET",
            "EXTRACTION_ZON", "ESCAPE_VEHICL", "PARACHUTE_PAC", "SPEEDBOAT_ESC", "HELICOPTER_EX", "STEALTH_JET", "ARMORED_CAR", "BRIEFCASE_LOC",
            "PASSPHRASE_VAL", "DECRYPTION_KE", "LOG_CLEANER"
        ]
    },

    {
        id: "fast_food_gym_class",
        _innocentHints: [
            "Fast Food Restaurants, Drive-Thru Windows & Menu Ordering",
            "Local Fast Food Joints, Burger Value Meals & Fry Fryers",
            "Public Fast Food Diners, Takeout Menu Counters & Soda Fountains",
            "Commercial Fast Food Chains, Kitchen Fryers & Drive-Thru Lanes",
            "Neighborhood Fast Food Spots, Wrapped Burgers & Salty French Fries"
        ],
        _imposterHints: [
            "High School Gym Class, Indoor Sports Fields & Fitness Exercises",
            "School Physical Education, Indoor Gymnasium Flooring & Fitness Workouts",
            "Secondary School Gym Class, Indoor Track Fields & Sports Gear",
            "School Gym Class Workouts, Indoor Fitness Training & Team Sports",
            "Physical Education Gyms, Team Sports Practice & Fitness Track Lines"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BURGER", "FRIES", "SODA", "NUGGETS", "MILKSHAKE", "KETCHUP", "MUSTARD", "MAYO",
            "PICKLES", "ONIONS", "CHEESE", "BACON", "BUNS", "WRAP", "SALAD", "MENU",
            "DRIVE_THRU", "COUNTER", "CASHIER", "RECEIPT", "TRAYS", "NAPKINS", "STRAWS", "CUPS",
            "LIDS", "ICE_MACHINE", "FOUNTAIN", "FRYER", "GRILL", "KITCHEN", "UNIFORM", "HAT",
            "TAKEOUT", "DELIVERY", "BAG", "BOX", "COMBO", "MEAL", "SIZE", "LARGE",
            "MEDIUM", "SMALL", "SUPERSIZE", "TOYS", "PLAY_PLACE", "BOOTH", "TABLE", "CHAIR",
            "TRASH_CAN", "DUMPSTER", "PARKING", "WINDOW", "SPEAKER", "HEADSET", "ORDER", "NUMBER",
            "COUPON", "APP", "SCANNER", "CASH", "CARD", "CHANGE", "COINS", "MANAGER",
            "WORKER", "SHIFT", "BREAK", "CLEANUP", "MOP", "BROOM", "BUCKET", "SPILL",
            "SIGN", "LOGO", "LIGHTS", "BELL", "TIMER", "CLOCK", "OVEN", "FREEZER",
            "FRIDGE", "ICE", "WATER", "SALT", "PEPPER", "SAUCE", "DIP", "PACKET",
            "PIZZA", "TACO", "CHIPS", "DONUT", "COOKIES", "PIE", "COFFEE", "TEA",
            "SUGAR", "CREAM", "SPOON", "FORK", "KNIFE", "PLATE", "BOWL", "NAPKIN"
        ],
        imposterWords: [
            "BASKETBALL", "FOOTBALL", "SOCCER", "BASEBALL", "DODGEBALL", "VOLLEYBALL", "WHISTLE", "COACH",
            "TEACHER", "STUDENT", "SNEAKERS", "SHORTS", "T_SHIRT", "SOCKS", "JERSEY", "TEAM",
            "CAPTAIN", "MATCH", "GAME", "SCORE", "POINTS", "WINNER", "LOSER", "TIE",
            "TRACK", "FIELD", "COURT", "NET", "GOAL", "HOOP", "RING", "MAT",
            "ROPE", "BENCH", "BLEACHERS", "LOCKER", "SHOWER", "TOWEL", "SOAP", "BAG_GYM",
            "PUMP", "NEEDLE", "AIR", "LINE", "CONES", "FLAGS", "TIMER_PE", "STOPWATCH",
            "LAP", "RUNNING", "JUMPING", "WALKING", "STRETCH", "WARMUP", "COOLDOWN"
        ]
    },

    {
        id: "movie_theater_birthday_party",
        _innocentHints: [
            "Cinema Movie Theaters, Popcorn Snack Counters & Ticket Screens",
            "Local Cinema Theaters, Large Movie Screens & Box Office Tickets",
            "Public Movie Cinemas, Front Counter Popcorn & Seating Rows",
            "Commercial Cinema Halls, Main Movie Screens & Ticket Booking",
            "Neighborhood Movie Theaters, Soft Drinks & Stadium Seating Rows"
        ],
        _imposterHints: [
            "Childrens Birthday Parties, Backyard Cake Cutting & Gift Unwrapping",
            "Family Birthday Parties, Living Room Cake Cutting & Gift Bags",
            "Home Birthday Parties, Backyard Party Games & Cake Candles",
            "Celebration Birthday Parties, Surprise Guest Rooms & Gift Wrapping",
            "Backyard Birthday Parties, Sweet Birthday Cake & Party Game Prizes"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "POPCORN", "CANDY", "SODA", "TICKET", "SCREEN", "SEAT", "ROW", "AISLE",
            "LIGHTS", "DARK", "SOUND", "SPEAKER", "TRAILER", "POSTER", "LOBBY", "COUNTER",
            "CASHIER", "LINE", "CUP_HOLDER", "ARMREST", "STADIUM", "CURTAIN", "STAGE", "FLOOR",
            "CLEANUP", "TRASH", "BAG", "BOX", "LARGE", "MEDIUM", "SMALL", "REFILL",
            "BUTTER", "SALT", "ICE", "STRAW", "LID", "NAPKIN", "COUCH", "RECLINER",
            "DOORS", "EXIT", "ENTRANCE", "HALLWAY", "STAIRS", "CARPET", "WALL", "CEILING",
            "TIME", "CLOCK", "WATCH", "SCHEDULE", "SHOWTIME", "NIGHT", "DAY", "WEEKEND",
            "FRIENDS", "FAMILY", "CROWD", "PEOPLE", "ADULT", "CHILD", "SENIOR", "STUDENT",
            "PRICE", "MONEY", "CASH", "CARD", "APP", "CODE", "SCANNER", "MANAGER",
            "WORKER", "UNIFORM", "BADGE", "NAME", "LOGO", "SIGN", "POSTER_WALL", "PREVIEWS",
            "GLASSES_3D", "SCREEN_BIG", "PROJECTOR", "FILM", "CAMERA", "ACTION", "SCENE", "END_CREDITS",
            "REVIEWS", "RATING", "FUN", "SCARY", "LOUD", "QUIET", "WHISPER", "LAUGH"
        ],
        imposterWords: [
            "BIRTHDAY_CAKE", "CANDLES", "BALLOONS", "PRESENTS", "GIFT_WRAP", "RIBBON", "CARD_WISHES", "INVITATION",
            "PARTY_HAT", "BLOWHORN", "STREAMERS", "CONFETTI", "GAMES", "PRIZES", "PINATA", "CUPCAKES",
            "ICE_CREAM_P", "JUICE_BOX", "PIZZA_SLICE", "CHIPS_BOWL", "BALLOON_ANIMAL", "CLOWN", "MAGICIAN", "MUSIC_PLAY",
            "DANCING", "SINGING", "SURPRISE", "GUESTS", "HOST", "WISH", "BLOWING_OUT", "CUTTING_CAKE",
            "TABLE_CLOTH", "PAPER_PLATES", "PLASTIC_CUPS", "NAPKINS_COL", "BALLOON_ARCH", "BACKYARD", "LIVING_ROOM", "PLAYGROUND",
            "GOODIE_BAG", "FAVORS", "CANDY_BAG", "THANK_YOU", "SNAPSHOT", "MEMORIES", "FUN_GAMES"
        ]
    },

    {
        id: "camping_woods_backyard_bbq",
        _innocentHints: [
            "Wilderness Forest Camping, Outdoor Tent Sites & Campfire Cooking",
            "Mountain Forest Camping, Wilderness Tent Setups & Night Campfires",
            "Outdoor Woods Camping, Sleeping Bag Tents & Forest Trails",
            "Wilderness Campgrounds, Mountain Tent Sites & Open Campfires",
            "Forest Wilderness Camping, Hiking Trails & Outdoor Tent Camps"
        ],
        _imposterHints: [
            "Backyard BBQ Grilling, Outdoor Patio Dining & Charcoal Grills",
            "Home Backyard BBQs, Summer Patio Grilling & Charcoal Smokers",
            "Outdoor Patio BBQs, Backyard Lawn Gatherings & Burger Grilling",
            "Summer Backyard Cookouts, Patio Dining Tables & Meat Grilling",
            "Backyard Lawn BBQs, Summer Patio Smokers & Grilled Burgers"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "TENT", "CAMPFIRE", "FOREST", "WOODS", "TREES", "TRAIL", "HIKING", "BACKPACK",
            "SLEEPING_BAG", "MATTRESS_AIR", "LANTERN", "FLASHLIGHT", "BATTERIES", "MATCHES", "LIGHTER", "FIREWOOD",
            "LOGS", "STOMP", "DIRT", "MUD", "ROCKS", "STONES", "MOUNTAIN", "HILL",
            "RIVER", "STREAM", "LAKE", "WATER_BOTTLE", "COOLER", "ICE_PACK", "FOOD_BAG", "SNACKS",
            "BUG_SPRAY", "MOSQUITO", "NETTING", "ROPE", "KNIFE", "AXE", "SHOVEL", "HAMMER",
            "CHAIR_FOLDING", "TABLE_PICNIC", "BENCH", "BLANKET", "TOWEL", "CLOTHES", "JACKET", "BOOTS",
            "SOCKS", "HAT", "SUNSCREEN", "FIRST_AID", "BANDAGES", "WIPES", "SOAP", "TRASH_BAG",
            "STOVE_GAS", "PROPANE", "PAN", "POT", "CUP", "PLATE", "BOWL", "FORK",
            "SPOON", "KNIFE_EAT", "COFFEE", "TEA", "HOT_DOG", "SAUSAGE", "MARSHMALLOW", "CHOCOLATE",
            "GRAHAM_CRACK", "SMORES", "BREAD", "BUNS", "CHEESE", "MEAT", "BEANS", "SOUP",
            "MAP", "COMPASS", "GUIDE", "WILDLIFE", "BIRDS", "DEER", "BEAR", "NIGHT_SKY"
        ],
        imposterWords: [
            "CHARCOAL_GRILL", "PROPANE_TANK", "SPATULA_GRILL", "TONGS", "APRON_CHEF", "SMOKER_BOX", "BURGERS", "HOT_DOGS",
            "CHICKEN_WINGS", "STEAK", "RIBS", "SAUSAGES", "BBQ_SAUCE", "MARINADE", "RUB_SPICE", "CORNDOG",
            "COLESLAW", "POTATO_SALAD", "CORN_COB", "PATIO_TABLE", "UMBRELLA_LARG", "DECK_CHAIRS", "LAWN_MOWER", "BACKYARD_LAWN",
            "FENCE_WOOD", "GARDEN_HOSE", "SPRINKLER_L", "COOLER_BOX", "SODA_CANS", "ICE_TUB", "BEER_BOTTLE", "WINE_GLASS",
            "PAPER_PLATES", "PLASTIC_FORKS", "NAPKINS_ROLL", "LEMONADE", "ICED_TEA", "WATERMELON", "CHIPS_DIP", "PRETZELS",
            "BURGER_BUNS", "SLIDERS", "SKEWERS", "KABOBS", "ONION_RINGS", "MUSTARD_BOTT", "KETCHUP_BOTT", "RELISH"
        ]
    },

    {
        id: "public_library_airport_terminal",
        _innocentHints: [
            "Public Book Libraries, Silent Reading Rooms & Book Shelves",
            "Community Book Libraries, Silent Study Desks & Catalog Shelves",
            "City Book Libraries, Silent Reading Halls & Borrowing Counters",
            "Institutional Book Libraries, Silent Reference Desks & Book Rows",
            "Neighborhood Book Libraries, Silent Study Rooms & Book Shelves"
        ],
        _imposterHints: [
            "Airport Departure Terminals, Passenger Boarding Gates & Luggage Lounges",
            "International Flight Terminals, Passenger Waiting Gates & Security Lines",
            "Aviation Travel Terminals, Flight Boarding Gates & Luggage Security",
            "Commercial Airport Terminals, Airline Check-in Gates & Passenger Waiting",
            "Passenger Flight Terminals, Airline Departure Gates & Luggage Rows"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BOOKS", "SHELVES", "BOOKCASE", "AISLE", "ROW", "NUMBER", "LETTER", "CATALOG",
            "COUNTER", "DESK", "CHAIR", "TABLE", "LAMPS", "QUIET", "SILENT", "WHISPER",
            "STUDY", "READING", "RESEARCH", "LAPTOP", "WIFI", "COMPUTER", "SCREEN", "KEYBOARD",
            "CARD", "ID_NUMBER", "MEMBERSHIP", "BORROW", "RETURN", "DUE_DATE", "LATE_FEE", "FINE",
            "RENEW", "HOLD", "SCANNER", "BARCODE", "STAMP", "PAGES", "COVER", "PAPER",
            "MAGAZINE", "JOURNAL", "NEWSPAPER", "DICTIONARY", "ATLAS", "MAP", "HISTORY", "FICTION",
            "STORY", "AUTHOR", "TITLE", "CHAPTER", "INDEX", "SHELF_STOCK", "STAIRS", "ELEVATOR",
            "DOORS", "WINDOW", "FLOOR", "CARPET", "WALL", "CEILING", "LIGHTS", "CLOCK",
            "BAG", "BACKPACK", "NOTEBOOK", "PENCIL", "PEN", "PAPER_CLIP", "STAPLER", "FOLDER",
            "WORKER", "STAFF", "MANAGER", "RULES", "SIGN", "POSTER", "INFORMATION", "HELP",
            "BAG_TOTE", "BOOKMARK", "PRINTING", "COPIER", "SCAN", "FILE", "FOLDER_MAN", "OPEN_HOURS"
        ],
        imposterWords: [
            "AIRPLANE", "FLIGHT", "BOARDING", "GATE_NUMBER", "TICKET_PASS", "PASSPORT", "LUGGAGE", "SUITCASE",
            "BACKPACK_TRV", "CARRY_ON", "SECURITY_LINE", "SCANNER_BODY", "X_RAY_BAG", "METAL_DETECT", "OFFICER", "PASSENGER",
            "CREW", "PILOT", "STEWARDESS", "ANNOUNCEMENT", "SPEAKER_AIR", "SCREEN_FLIGH", "DEPARTURES", "ARRIVALS",
            "DELAY", "ON_TIME", "CANCELLED", "SEAT_ASSIGN", "WINDOW_SEAT", "AISLE_SEAT", "TICKET_COUNT", "CHECK_IN",
            "BAG_TAG", "SCALE_LUGG", "CONCOURSE", "LOUNGE", "DUTY_FREE", "SHOPPING_AIR", "FOOD_COURT", "COFFEE_SHOP",
            "RESTROOM", "WATER_FOUNT", "MOVING_WALK", "ESCALATOR", "TERMINAL_MAP", "COCKPIT", "RUNWAY", "JET_BRIDGE"
        ]
    },

    {
        id: "house_cleaning_car_repair",
        _innocentHints: [
            "Domestic House Cleaning, Living Room Dusting & Floor Mopping",
            "Residential Home Cleaning, Bathroom Scrubbing & Vacuum Cleaners",
            "Domestic Room Cleaning, Kitchen Counter Wiping & Dusting Brushes",
            "Home Housework Cleaning, Window Wiping & Floor Vacuuming",
            "Residential House Cleaning, Carpet Vacuuming & Sponge Scrubbing"
        ],
        _imposterHints: [
            "Automotive Car Repair, Mechanical Engine Tuning & Garage Tools",
            "Garage Vehicle Repairs, Under-the-Hood Car Fixes & Engine Wrenches",
            "Mechanical Auto Repairs, Garage Car Engine Tuning & Oil Changes",
            "Garage Automotive Work, Under-the-Hood Engine Fixes & Socket Sets",
            "Auto Vehicle Maintenance, Garage Engine Tuning & Mechanical Fluids"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "VACUUM", "MOP", "BROOM", "BUCKET", "SPONGE", "RAG", "CLOTH", "TOWEL",
            "SPRAY_BOTTLE", "CLEANER", "SOAP", "DETERGENT", "BLEACH", "WATER", "SINK", "DRAIN",
            "DUSTER", "BRUSH", "SCRUB", "WIPE", "DUST", "DIRT", "MUD", "SPILL",
            "TRASH", "GARBAGE", "BIN", "BAG_TRASH", "GLOVES", "APRON", "FLOOR", "CARPET",
            "RUG", "TILES", "WOOD", "WINDOW", "GLASS", "MIRROR", "WALL", "CEILING",
            "COUNTER", "SHELf", "TABLE", "CHAIR", "COUCH", "BED", "SHEETS", "LAUNDRY",
            "WASHER", "DRYER", "BASKET", "HAMPER", "KITCHEN", "BATHROOM", "BEDROOM", "LIVING_ROOM",
            "ORGANIZER", "BOX", "CLOSET", "DRAWER", "CUPBOARD", "PANTRY", "SHELvING", "HOOK",
            "SHINE", "POLISH", "WAX", "SCENT", "FRESH", "CLEAN", "NEAT", "TIDY",
            "SQUEEGEE", "SCRAPER", "STEPLADDER", "STOOL_STEP", "PLUNGER", "TOILET_BRUSH", "PAPER_TOWEL", "AIR_FRESH"
        ],
        imposterWords: [
            "ENGINE_BAY", "MOTOR_OIL", "OIL_FILTER", "SPARK_PLUG", "BATTERY_CAR", "RADIATOR", "COOLANT", "BRAKE_FLUID",
            "FUNNEL", "WRENCH_TOOL", "SOCKET_SET", "SCREWDRIVER_P", "PLIERS_GRIP", "HAMMER_MECH", "JACK_STANDS", "CAR_JACK",
            "TIRE_IRON", "TIRE_PRESSURE", "AIR_PUMP", "WHEEL_RIMS", "BRAKE_PADS", "EXHAUST_PIPE", "MUFFLER", "BELT_DRIVE",
            "HOSE_CLAMP", "DIPSTICK", "GREASE_GUN", "CLEANER_BRAKE", "WD_40_SPRAY", "SHOP_RAGS", "HAND_SOAP", "GARAGE_FLOOR",
            "TOOLBOX_STEEL", "WORKBENCH_M", "CAR_LIFT", "UNDER_HOOD", "HEADLIGHTS", "WINDSHIELD", "WIPER_BLADES", "FLUID_WASHER",
            "CAR_KEY", "DASHBOARD", "STEERING_WHEEL", "GEAR_SHIFTER", "PEDAL_GAS", "FUSE_BOX", "JUMPER_CABLES", "TOW_TRUCK"
        ]
    },

    {
        id: "brands_vs_monuments",
        _innocentHints: [
            "Global Consumer Mega-Brands, Corporate Retail Logos & Trademark Products",
            "International Mega-Brands, Corporate Commercial Logos & Famous Retail Products",
            "Global Retail Powerhouses, Billion-Dollar Corporate Trademarks & Brands",
            "Commercial Mega-Brands, Global Retail Signage & Trademark Products",
            "International Corporate Giants, Global Brand Signage & Iconic Products"
        ],
        _imposterHints: [
            "Famous World Landmarks, Historical Monuments & Global Tourist Destinations",
            "Iconic World Monuments, Historical Landmark Architecture & Tourist Sites",
            "Historical World Landmarks, Monumental Stone Architecture & Tourist Hotspots",
            "Iconic Global Monuments, Historical Heritage Landmarks & Travel Destinations",
            "Famous Heritage Landmarks, Ancient Monumental Architecture & Tourist Sites"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "APPLE", "GOOGLE", "MICROSOFT", "AMAZON", "SAMSUNG", "COCA_COLA", "PEPSI", "MCDONALDS",
            "NIKE", "ADIDAS", "SONY", "NINTENDO", "DISNEY", "NETFLIX", "YOUTUBE", "FACEBOOK",
            "INSTAGRAM", "TIKTOK", "TWITTER", "TESLA", "TOYOTA", "FORD", "FERRARI", "BMW",
            "MERCEDES", "STARBUCKS", "WALMART", "TARGET", "SUBWAY", "BURGER_KING", "NUTELLA", "OREO",
            "LEGO", "BARBIE", "PLAYSTATION", "XBOX", "IPHONE", "IPAD", "GUCCI", "CHANEL",
            "ROLEX", "LOUIS_VUITTON", "PRADA", "VERSACE", "ZARA", "H_AND_M", " IKEA", "EBAY",
            "PAYPAL", "VISA", "MASTERCARD", "STAR_WARS", "MARVEL", "POKEMON", "REDBULL", "PRINGLES"
        ],
        imposterWords: [
            "EIFFEL_TOWER", "STATUE_OF_LIBERTY", "BIG_BEN", "TAJ_MAHAL", "COLOSSEUM", "GREAT_WALL_OF_CHINA",
            "PYRAMIDS_OF_GIZA", "MACHU_PICCHU", "CHRON_ST_BASIL", "SYDNEY_OPERA_HOUSE", "EMPIRE_STATE_BUILDING", "BURJ_KHALIFA",
            "GOLDEN_GATE_BRIDGE", "MOUNT_RUSHMORE", "CHRIST_THE_REDEEMER", "STONEHENGE", "LEANING_TOWER_OF_PISA", "ACROPOLIS_ATHENS",
            "PETRA_JORDAN", "GRAND_CANYON", "NIAGARA_FALLS", "MOUNT_EVEREST", "MOUNT_FUJI", "TIMES_SQUARE",
            "HOLLYWOOD_SIGN", "LONDON_EYE", "BUCKINGHAM_PALACE", "WHITE_HOUSE", "KREMLIN", "PENTAGON"
        ]
    },

    {
        id: "actors_vs_musicians",
        _innocentHints: [
            "Legendary Hollywood Actors, Famous Movie Stars & Cinema Celebrities",
            "Iconic Hollywood Celebrities, Famous Cinema Stars & Silver Screen Actors",
            "Famous Silver Screen Actors, Hollywood Cinema Celebrities & Movie Stars",
            "Iconic Movie Stars, Famous Hollywood Actors & Cinema Box Office Leads",
            "Legendary Cinema Stars, Hollywood Celebrity Actors & Studio Box Office Leads"
        ],
        _imposterHints: [
            "Iconic Musical Artists, Chart-Topping Pop Singers & Legendary Rock Bands",
            "Legendary Pop Singers, Global Chart-Topping Musicians & Stage Performers",
            "Famous Global Musicians, Chart-Topping Pop Stars & Legendary Rock Singers",
            "Iconic Stage Performers, Famous Pop Singers & Global Musical Bands",
            "Legendary Rock Bands, Chart-Topping Vocalists & Iconic Music Performers"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "TOM_CRUISE", "LEONARDO_DICAPRIO", "BRAD_PITT", "JOHNNY_DEPP", "THE_ROCK", "WILL_SMITH",
            "ROBERT_DOWNEY_JR", "CHRIS_HEMSWORTH", "TOM_HOLLAND", "KEANU_REEVES", "ARNOLD_SCHWARZENEGGER", "SYLVESTER_STALLONE",
            "JACKIE_CHAN", "MORGAN_FREEMAN", "ANGELINA_JOLIE", "SCARLETT_JOHANSSON", "JENNIFER_LAWRENCE", "MARGOT_ROBBIE",
            "EMMA_WATSON", "ZENDAYA", "MERYL_STREEP", "JULIA_ROBERTS", "COMP_GEORGE_CLOONEY", "MATT_DAMON",
            "BEN_AFFLECK", "RYAN_REYNOLDS", "HUGH_JACKMAN", "DANIEL_RADCLIFFE", "VIN_DIESEL", "JASON_STATHAM",
            "HARRISON_FORD", "COMP_TOM_HANKS", "DENZEL_WASHINGTON", "SAMUEL_L_JACKSON", "BRUCE_WILLIS", "CHADWICK_BOSEMAN",
            "GAL_GADOT", "NATALIE_PORTMAN", "ANNE_HATHAWAY", "EMMA_STONE", "PENELOPE_CRUZ", "CAMERON_DIAZ"
        ],
        imposterWords: [
            "MICHAEL_JACKSON", "ELVIS_PRESLEY", "EMINEM", "TAYLOR_SWIFT", "BEYONCE", "RIHANNA",
            "JUSTIN_BIEBER", "DRAKE", "ED_SHEERAN", "BILLIE_EILISH", "LADY_GAGA", "KATY_PERRY",
            "ARIANA_GRANDE", "BRUNO_MARS", "THE_WEEKND", "POST_MALONE", "SHAKIRA", "MADONNA",
            "BRITNEY_SPEARS", "SELENA_GOMEZ", "FREDDIE_MERCURY", "ELTON_JOHN", "BOB_MARLEY", "COMP_THE_BEATLES",
            "QUEEN_BAND", "COLDPLAY", "AC_DC", "METALLICA", "NIRVANA", "MAROON_5"
        ]
    },

    {
        id: "movies_vs_videogames",
        _innocentHints: [
            "Ultimate Blockbuster Movies, Billion-Dollar Cinema Franchises & Hollywood Films",
            "Iconic Hollywood Movies, Billion-Dollar Cinema Hits & Blockbuster Film Series",
            "Famous Billion-Dollar Cinema Franchises, Hollywood Movie Series & Blockbuster Films",
            "Iconic Blockbuster Films, Global Cinema Box Office Hits & Hollywood Series",
            "Famous Hollywood Box Office Hits, Billion-Dollar Movie Series & Cinema Media"
        ],
        _imposterHints: [
            "Legendary Video Game Franchises, Global Gaming Titles & Virtual Series",
            "Iconic Video Game Franchises, Famous Gaming Series & Virtual Reality Titles",
            "Global Interactive Gaming Franchises, Famous Console Video Games & Series",
            "Iconic Virtual Gaming Franchises, Legendary Console Game Titles & Media",
            "Famous Electronic Game Franchises, Global Console Video Games & Virtual Series"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "AVATAR", "TITANIC", "AVENGERS_ENDGAME", "STAR_WARS", "JURASSIC_PARK", "SPIDER_MAN",
            "HARRY_POTTER", "THE_LION_KING", "FROZEN", "THE_DARK_KNIGHT", "INCEPTION", "INTERSTELLAR",
            "MATRIX", "GLADIATOR", "PIRATES_OF_THE_CARIBBEAN", "SHREK", "TOY_STORY", "FINDING_NEMO",
            "THE_INCREDIBLES", "CARS_MOVIE", "MONSTERS_INC", "DESPICABLE_ME", "MINIONS", "JUMANJI",
            "FAST_AND_FURIOUS", "TRANSFORMERS", "IRON_MAN", "CAPTAIN_AMERICA", "THOR", "BLACK_PANTHER",
            "DUNE", "TOP_GUN_MAVERICK", "BARBIE_MOVIE", "OPPENHEIMER", "THE_GODFATHER", "JAWS",
            "HOME_ALONE", "BACK_TO_THE_FUTURE", "FORREST_GUMP", "THE_MATRIX", "TERMINATOR_2", "ALADDIN"
        ],
        imposterWords: [
            "SUPER_MARIO", "MINECRAFT", "GRAND_THEFT_AUTO", "CALL_OF_DUTY", "POKEMON_GAMES", "FORTNITE",
            "THE_LEGEND_OF_ZELDA", "SONIC_THE_HEDGEHOG", "TETRIS", "PAC_MAN", "FIFA_FOOTBALL", "NBA_2K",
            "ASSASSINS_CREED", "HALO", "RESIDENT_EVIL", "TOMB_RAIDER", "GOD_OF_WAR", "SPIDER_MAN_PS5",
            "EIDEN_RING", "CYBERPUNK_2077", "VALORANT", "LEAGUE_OF_LEGENDS", "ROBLOX", "CANDY_CRUSH",
            "ANIMAL_CROSSING", "SIMS", "CLASH_OF_CLANS", "PUBG", "OVERWATCH", "DOOM"
        ]
    },

    {
        id: "cities_vs_islands",
        _innocentHints: [
            "Famous Global Cities, International Metropolises & World Capitals",
            "Iconic Capital Cities, International Megacities & Metropolitan Hubs",
            "Famous Metropolitan Capitals, International Cities & Megacity Hubs",
            "Iconic Global Metropolises, Famous International Capitals & City Hubs",
            "Famous World Capital Cities, International Metropolises & Urban Hubs"
        ],
        _imposterHints: [
            "Iconic Holiday Paradises, Famous Tropical Islands & Luxury Beach Resorts",
            "Famous Tropical Islands, Luxury Beach Paradises & Exotic Resort Getaways",
            "Iconic Beach Resort Islands, Exotic Holiday Paradises & Luxury Destinations",
            "Famous Island Destinations, Luxury Beach Getaways & Tropical Paradises",
            "Iconic Tropical Holiday Islands, Luxury Beach Resorts & Exotic Destinations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "NEW_YORK", "LONDON", "PARIS", "TOKYO", "LOS_ANGELES", "DUBAI",
            "SYDNEY", "ROME", "BARCELONA", "LAS_VEGAS", "MIAMI", "CHICAGO",
            "SAN_FRANCISCO", "WASHINGTON_DC", "TORONTO", "RIO_DE_JANEIRO", "BUENOS_AIRES", "CAIRO",
            "MOSCOW", "BEIJING", "SHANGHAI", "HONG_KONG", "SINGAPORE", "SEOUL",
            "BANGKOK", "MUMBAI", "DUBLIN", "AMSTERDAM", "BERLIN", "VIENNA",
            "MADRID", "LISBON", "CAPE_TOWN", "ISTANBUL", "ATHENS", "VENICE"
        ],
        imposterWords: [
            "HAWAII", "BALI", "MALDIVES", "BAHAMAS", "BORA_BORA", "SANTORINI",
            "FIJI", "PHUKET", "IBIZA", "CANCUN", "JAMAICA", "CARIBBEAN",
            "TAHITI", "MAUI", "MALTA", "CYPRUS", "MADAGASCAR", "SEYCHELLES",
            "BARBADOS", "PUNTA_CANA", "GALAPAGOS", "CANARY_ISLANDS", "MYKONOS", "COSTA_RICA",
            "CAPRI", "CAYMAN_ISLANDS", "ARUBA", "FIJI_ISLANDS", "BERMUDA", "PHIPHI_ISLANDS"
        ]
    },

    {
        id: "athletes_vs_teams",
        _innocentHints: [
            "Legendary Individual Athletes, Famous Sports Superstars & Olympic Icons",
            "Iconic Sports Superstars, Famous Individual Athletes & Trophy Winners",
            "Famous Individual Sports Stars, Iconic Olympic Athletes & Superstars",
            "Legendary Athletic Superstars, Famous Olympic Competitors & Individual Icons",
            "Iconic Individual Sports Legends, Famous Athletes & Championship Winners"
        ],
        _imposterHints: [
            "Famous Professional Sports Teams, Legendary Global Clubs & Franchises",
            "Iconic Professional Sports Clubs, Famous Team Franchises & League Icons",
            "Famous Global Sports Franchises, Legendary Team Clubs & Stadium Lineups",
            "Iconic Sports Team Franchises, Famous Professional Clubs & League Champions",
            "Legendary Team Clubs, Famous Professional Sports Franchises & Stadium Lineups"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "LIONEL_MESSI", "CRISTIANO_RONALDO", "LEBRON_JAMES", "MICHAEL_JORDAN", "KOBE_BRYANT", "STEPHEN_CURRY",
            "USAIN_BOLT", "SERENA_WILLIAMS", "ROGER_FEDERER", "RAFAEL_NADAL", "NOVAK_DJOKOVIC", "TIGER_WOODS",
            "LEWIS_HAMILTON", "MAX_VERSTAPPEN", "CONOR_MCGREGOR", "MUHAMMAD_ALI", "MIKE_TYSON", "TOM_BRADY",
            "PATRICK_MAHOMES", "NEYMAR_JR", "KYLIAN_MBAPPE", "DAVID_BECKHAM", "PELE", "MARADONA",
            "SHAQUILLE_ONEAL", "SIMONE_BILES", "MICHAEL_PHELPS", "TONY_HAWK", "WAYNE_GRETZKY", "ZINDINE_ZIDANE"
        ],
        imposterWords: [
            "REAL_MADRID", "BARCELONA_FC", "MANCHESTER_UNITED", "LIVERPOOL_FC", "MANCHESTER_CITY", "CHELSEA_FC",
            "LOS_ANGELES_LAKERS", "CHICAGO_BULLS", "GOLDEN_STATE_WARRIORS", "BOSTON_CELTICS", "NEW_YORK_KNICKS", "NEW_YORK_YANKEES",
            "LOS_ANGELES_DODGERS", "NEW_ENGLAND_PATRIOTS", "KANSAS_CITY_CHIEFS", "DALLAS_COWBOYS", "FERRARI_F1", "RED_BULL_RACING",
            "MERCEDES_F1", "PARIS_SAINT_GERMAIN", "JUVENTUS", "BAYERN_MUNICH", "ARSENAL_FC", "MIAMI_HEAT"
        ]
    },

    {
        id: "billionaires_vs_inventors",
        _innocentHints: [
            "Modern Tech Billionaires, Famous Silicon Valley Founders & Business Magnates",
            "Famous Modern Tech Executives, Silicon Valley Billionaires & Corporate Founders",
            "Modern Billionaire Entrepreneurs, Famous Silicon Valley Executives & Tech Leads",
            "Iconic Tech Industry Founders, Famous Silicon Valley Billionaires & Magnates",
            "Modern Silicon Valley Executives, Famous Tech Billionaires & Corporate Leads"
        ],
        _imposterHints: [
            "Iconic Historical Innovators, Famous Science Pioneers & Historic Inventors",
            "Legendary Historical Inventors, Famous Science Pioneers & Historic Figures",
            "Famous Science Icons, Historical Innovators & Legendary Pioneers",
            "Iconic Historic Figures, Famous Science Inventors & Historical Pioneers",
            "Legendary Science Pioneers, Historical Inventors & Historic Industry Icons"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "ELON_MUSK", "BILL_GATES", "MARK_ZUCKERBERG", "JEFF_BEZOS", "STEVE_JOBS", "JACK_MA",
            "TIM_COOK", "SUNDAR_PICHAI", "SATYA_NADELLA", "WARREN_BUFFETT", "BERNARD_ARNAULT", "SAM_ALTMAN",
            "LARRY_PAGE", "SERGEY_BRIN", "RICHARD_BRANSON", "JENSEN_HUANG", "VITALIK_BUTERIN", "GABE_NEWELL"
        ],
        imposterWords: [
            "ALBERT_EINSTEIN", "ISAAC_NEWTON", "NIKOLA_TESLA", "THOMAS_EDISON", "ALEXANDER_GRAHAM_BELL", "GALILEO_GALILEI",
            "CHARLES_DARWIN", "MARIE_CURIE", "LEONARDO_DA_VINCI", "BENJAMIN_FRANKLIN", "WRIGHT_BROTHERS", "HENRY_FORD",
            "ALAN_TURING", "STEPHEN_HAWKING", "SIGMUND_FREUD", "LOUIS_PASTEUR", "NEIL_ARMSTRONG", "WALT_DISNEY"
        ]
    },

    {
        id: "fastfood_vs_luxury",
        _innocentHints: [
            "Global Fast Food Chains, Commercial Burger Franchises & Drive-Thrus",
            "International Fast Food Outlets, Restaurant Franchises & Takeout Menus",
            "Commercial Fast Food Outlets, Global Restaurant Chains & Value Menus",
            "International Restaurant Chains, Global Fast Food Outlets & Drive-Thru Menus",
            "Commercial Fast Food Menus, Global Restaurant Outlets & Takeout Chains"
        ],
        _imposterHints: [
            "High-End Luxury Labels, Premium Fashion Designers & Haute Couture Houses",
            "Premium Fashion Labels, High-End Luxury Designers & Couture Houses",
            "High-End Fashion Designers, Premium Luxury Labels & Runway Houses",
            "Premium Designer Labels, High-End Luxury Houses & Runway Fashion",
            "High-End Couture Houses, Premium Luxury Labels & Designer Fashion"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "MCDONALDS", "BURGER_KING", "SUBWAY", "STARBUCKS", "KFC", "PIZZA_HUT",
            "DOMINOS", "TACO_BELL", "DUNKIN_DONUTS", "WENDYS", "POPEYES", "CHIPOTLE",
            "FIVE_GUYS", "PANDA_EXPRESS", "KRISPY_KREME", "BASKIN_ROBBINS", "DAIRY_QUEEN", "SONIC_DRIVE_IN"
        ],
        imposterWords: [
            "GUCCI", "CHANEL", "LOUIS_VUITTON", "ROLEX", "PRADA", "VERSACE",
            "DIOR", "HERMES", "BURBERRY", "BALENCIAGA", "ARMANI", "VALENTINO",
            "CARTIER", "TIFFANY_AND_CO", "SUPREME", "OFF_WHITE", "FENDI", "GIVENCHY"
        ]
    },

    {
        id: "disney_vs_superheroes",
        _innocentHints: [
            "Iconic Disney Animation Characters, Classic Cartoon Casts & Movie Figures",
            "Famous Disney Cartoon Characters, Animation Studio Casts & Movie Figures",
            "Iconic Animation Studio Figures, Classic Disney Cartoon Casts & Characters",
            "Famous Disney Media Figures, Classic Animation Cartoon Casts & Characters",
            "Iconic Cartoon Movie Characters, Famous Disney Animation Casts & Figures"
        ],
        _imposterHints: [
            "Classic Superhero Alter-Egos, Comic Book Vigilantes & Comic Book Names",
            "Famous Comic Book Alter-Egos, Comic Book Superheroes & Vigilantes",
            "Classic Comic Book Superheroes, Iconic Alter-Egos & Fictional Vigilantes",
            "Famous Masked Superheroes, Comic Book Alter-Egos & Crime Fighters",
            "Classic Masked Crime Fighters, Comic Book Alter-Egos & Superheroes"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "MICKEY_MOUSE", "MINNIE_MOUSE", "DONALD_DUCK", "GOOFY", "PLUTO_DOG", "SIMBA",
            "MUFASA", "SCAR_LION", "WOODY_COWBOY", "BUZZ_LIGHTYEAR", "ELSA", "ANNA_FROZEN",
            "OLAF", "CINDERELLA", "SNOW_WHITE", "ALADDIN_GENIE", "PETER_PAN", "CAPTAIN_HOOK",
            "LIGHTNING_MCQUEEN", "WINNIE_THE_POOH", "TIGGER", "STITCH", "ALICE_IN_WONDERLAND", "SULLEY_MONSTER"
        ],
        imposterWords: [
            "BATMAN", "SUPERMAN", "SPIDER_MAN", "IRON_MAN", "CAPTAIN_AMERICA", "THOR_GOD",
            "THE_HULK", "WOLVERINE", "DEADPOOL", "WONDER_WOMAN", "BLACK_WIDOW", "BLACK_PANTHER_HERO",
            "THE_FLASH", "AQUAMAN", "DOCTOR_STRANGE", "JOKER", "THANOS", "SPIDER_GWEN"
        ]
    },

    {
        id: "socialmedia_vs_streaming",
        _innocentHints: [
            "Mega-Popular Social Media Platforms, Mobile Networking Apps & Feed Profiles",
            "Global Social Media Networks, Mobile Profile Feeds & Digital Applications",
            "Mega-Popular Networking Applications, Digital Media Feeds & User Profiles",
            "Global Digital Profile Platforms, Mega-Popular Social Media Feeds & Apps",
            "Mega-Popular Social Applications, Mobile Feed Networks & User Profiles"
        ],
        _imposterHints: [
            "Global Streaming Networks, Digital Video Subscription Services & Content Players",
            "Digital Video Streaming Networks, Online Subscription Services & Video Apps",
            "Global Video Subscription Services, Digital Content Streaming Apps & Platforms",
            "Digital Entertainment Networks, Subscription Video Streaming & Online Media",
            "Global Subscription Media Apps, Digital Video Streaming Platforms & Content Network"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "YOUTUBE", "INSTAGRAM", "TIKTOK", "FACEBOOK", "TWITTER", "SNAPCHAT",
            "PINTEREST", "REDDIT", "LINKEDIN", "WHATSAPP", "DISCORD", "TWITCH",
            "TELEGRAM", "WECHAT", "TUMBLR", "BEAL", "THREADS", "COMP_X_PLATFORM"
        ],
        imposterWords: [
            "NETFLIX", "AMAZON_PRIME", "DISNEY_PLUS", "HBO_MAX", "HULU", "APPLE_TV",
            "SPOTIFY", "APPLE_MUSIC", "YOUTUBE_TV", "PARAMOUNT_PLUS", "PEACOCK", "CRUNCHYROLL",
            "COMP_BBC_IPLAYER", "ROKU", "TWITCH_STREAM", "KICK_STREAM", "SOUNDCLOUD", "DAZN"
        ]
    },

    {
        id: "techproducts_vs_consoles",
        _innocentHints: [
            "Massive Global Tech Products, Consumer Hardware Devices & Mobile Devices",
            "International Consumer Electronics, Global Tech Devices & Hardware Systems",
            "Massive Consumer Hardware Systems, Global Electronics & Technical Devices",
            "International Mobile Devices, Consumer Tech Electronics & Hardware Units",
            "Massive Electronic Tech Devices, Global Consumer Hardware & Mobile Units"
        ],
        _imposterHints: [
            "Iconic Video Game Consoles, Electronic Gaming Hardware & TV Systems",
            "Classic Video Game Hardware, Interactive Gaming Consoles & TV Systems",
            "Iconic Home Gaming Devices, Television Console Hardware & Media Units",
            "Classic Electronic Gaming Systems, Television Consoles & Gaming Hardware",
            "Iconic Television Gaming Hardware, Interactive System Consoles & Home Media"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "IPHONE", "IPAD", "MACBOOK", "APPLE_WATCH", "AIRPODS", "SAMSUNG_GALAXY",
            "GOOGLE_PIXEL", "FITBIT", "KINDLE_READER", "AMAZON_ECHO", "GOOGILE_NEST", "GOPRO_CAMERA",
            "HP_LAPTOP", "DELL_INSPIRON", "IMAC", "NVIDIA_GEFORCE", "ASUS_ROG", "LENOVO_THINKPAD"
        ],
        imposterWords: [
            "PLAYSTATION_5", "PLAYSTATION_4", "XBOX_SERIES_X", "XBOX_360", "NINTENDO_SWITCH", "NINTENDO_WII",
            "NINTENDO_64", "GAME_BOY", "PLAYSTATION_2", "SEGA_GENESIS", "NINTENDO_DS", "PSP_PORTABLE",
            "ATARI_2600", "GAMECUBE", "XBOX_ONE", "SUPER_NES", "DREAMCAST", "PC_GAMING_RIG"
        ]
    },

    {
        id: "moviestars_vs_popicons",
        _innocentHints: [
            "Iconic Hollywood Movie Stars, Famous Cinema Actors & Box Office Celebrities",
            "Famous Silver Screen Actors, Hollywood Movie Stars & Studio Celebrities",
            "Iconic Cinema Stars, Famous Hollywood Actors & Media Celebrities",
            "Famous Box Office Leads, Hollywood Movie Stars & Silver Screen Celebrities",
            "Iconic Studio Actors, Famous Hollywood Movie Stars & Cinema Celebrities"
        ],
        _imposterHints: [
            "Global Pop Music Icons, Chart-Topping Singers & Legendary Superstars",
            "Iconic Pop Musicians, Chart-Topping Solo Singers & Global Superstars",
            "Famous Musical Pop Icons, Chart-Topping Vocalists & Stage Superstars",
            "Iconic Chart-Topping Singers, Global Pop Icons & Musical Superstars",
            "Famous Stage Performers, Global Pop Music Icons & Vocal Superstars"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "TOM_CRUISE", "LEONARDO_DICAPRIO", "BRAD_PITT", "JOHNNY_DEPP", "THE_ROCK", "WILL_SMITH",
            "ROBERT_DOWNEY_JR", "CHRIS_HEMSWORTH", "TOM_HOLLAND", "KEANU_REEVES", "ARNOLD_SCHWARZENEGGER", "SYLVESTER_STALLONE",
            "JACKIE_CHAN", "MORGAN_FREEMAN", "ANGELINA_JOLIE", "SCARLETT_JOHANSSON", "JENNIFER_LAWRENCE", "MARGOT_ROBBIE",
            "EMMA_WATSON", "ZENDAYA", "MERYL_STREEP", "JULIA_ROBERTS", "GEORGE_CLOONEY", "TOM_HANKS"
        ],
        imposterWords: [
            "MICHAEL_JACKSON", "ELVIS_PRESLEY", "EMINEM", "TAYLOR_SWIFT", "BEYONCE", "RIHANNA",
            "JUSTIN_BIEBER", "DRAKE", "ED_SHEERAN", "BILLIE_EILISH", "LADY_GAGA", "KATY_PERRY",
            "ARIANA_GRANDE", "BRUNO_MARS", "THE_WEEKND", "POST_MALONE", "SHAKIRA", "MADONNA",
            "BRITNEY_SPEARS", "SELENA_GOMEZ", "OLIVIA_RODRIGO", "SZA", "DUA_LIPA", "SNOOP_DOGG"
        ]
    },

    {
        id: "influencers_vs_world_leaders",
        _innocentHints: [
            "Modern Social Media Influencers, Viral Internet Creators & Content Stars",
            "Popular Internet Influencers, Viral Video Creators & Social Media Personalities",
            "Global Content Creators, Viral Media Influencers & Internet Celebrities",
            "Popular Social Media Stars, Online Video Influencers & Content Creators",
            "Viral Internet Influencers, Global Media Creators & Digital Personalities"
        ],
        _imposterHints: [
            "Legendary World Leaders, Global Prime Ministers & Presidents",
            "Iconic World Leaders, International Presidents & Government Heads",
            "Famous Global Presidents, International World Leaders & Prime Ministers",
            "Iconic Government Heads, Famous World Leaders & International Presidents",
            "Famous International Prime Ministers, Global Presidents & World Leaders"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "MRBEAST", "CHARLI_DAMELIO", "KHABY_LAME", "ZACH_KING", "ADDISON_RAE", "LOGAN_PAUL",
            "JAKE_PAUL", "SPEED", "KAI_CENAT", "XQC", "POKIMANE", "MARQUES_BROWNLEE",
            "DUDE_PERFECT", "MARKIPLIER", "PEWDIEPIE", "NINJA", "DAVID_DOBRIK", "LELE_PONS",
            "HUDA_BEAUTY", "CHIARA_FERRAGNI", "EMMA_CHAMBERLAIN", "MRWHOSETHEBOSS", "CARRYMINATI", "CASEOH"
        ],
        imposterWords: [
            "DONALD_TRUMP", "JOE_BIDEN", "VLADIMIR_PUTIN", "XI_JINPING", "EMMANUEL_MACRON", "NARENDRA_MODI",
            "JUSTIN_TRUDEAU", "BENJAMIN_NETANYAHU", "RISHI_SUNAK", "KEIR_STARMER", "KING_CHARLES", "BARACK_OBAMA",
            "GEORGE_BUSH", "BILL_CLINTON", "WINSTON_CHURCHILL", "ANGELA_MERKEL", "MARK_CARNEY", "CLAUDIA_SHEINBAUM"
        ]
    },

    {
        id: "days_vs_zodiac",
        _innocentHints: [
            "The Seven Days of the Week, Standard Calendar Cycles & Weekly Routines",
            "Standard Calendar Days of the Week, Repeating Weekly Cycles & Schedules",
            "Weekly Calendar Days, Standard Seven-Day Cycles & Daily Routines",
            "Repeating Calendar Days of the Week, Standard Weekly Schedules & Cycles",
            "The Seven Calendar Days, Standard Weekly Cycles & Workday Schedules"
        ],
        _imposterHints: [
            "The Twelve Signs of the Zodiac, Astrological Horoscopes & Star Constellations",
            "Astrological Zodiac Signs, Western Horoscope Symbols & Star Constellations",
            "Western Horoscope Signs, Astrological Zodiac Symbols & Star Charts",
            "The Twelve Astrological Signs, Western Horoscope Symbols & Star Alignment",
            "Western Zodiac Signs, Astrological Horoscope Symbols & Star Charts"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY",
            "WEEKDAY", "WEEKEND", "WORKDAY", "MIDWEEK", "REST_DAY", "GAME_DAY", "DATE_NIGHT"
        ],
        imposterWords: [
            "ARIES", "TAURUS", "GEMINI", "CANCER", "LEO", "VIRGO",
            "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN", "AQUARIUS", "PISCES",
            "HOROSCOPE", "STAR_SIGN", "BIRTH_CHART", "CONSTELLATION", "ZODIAC_ELEMENT", "SUN_SIGN"
        ]
    },

    // Add these items cleanly inside your window.SYNAPSE_MATRIX_POOL array in words.js

    {
        id: "ikea_furniture_vs_norse_mythology",
        _innocentHints: [
            "IKEA Product Catalogs, Flat-Pack Furniture Items & Home Decor Names",
            "Scandinavian Ready-to-Assemble Furniture, Storage Solutions & Home Furnishings",
            "IKEA Product Lines, Home Organizational Furniture & Swedish Retail Names",
            "Flat-Pack Home Furnishings, Scandinavian Decor Systems & Retail Furniture",
            "IKEA Furniture Collections, Modular Home Storage & Scandinavian Design Pieces"
        ],
        _imposterHints: [
            "Norse Mythology Figures, Scandinavian Folklore Entities & Germanic Deities",
            "Asgardian Gods and Goddesses, Old Norse Legends & Mythological Figures",
            "Norse Pagan Deities, Scandinavian Mythic Heroes & Ancient Folklore Characters",
            "Gods of Asgard, Old Norse Mythological Entities & Legendary Folklore Figures",
            "Ancient Scandinavian Deities, Norse Sagas & Mythological Legendary Figures"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BILLY", "KALLAX", "POÄNG", "MALM", "HEMNES", "PAX", "BRIMNES", "LACK", "EKTORP", "FJÄLLÄLVEN",
            "INGATORP", "BESTÅ", "FRIHETEN", "SÖDERHAMN", "STRANDMON", "MICKE", "TROFAST", "ALEX", "STUVA", "GLADOM",
            "KVISSLE", "SKÅDIS", "RÅSKOG", "BEKANT", "IDÅSEN", "MARKUS", "JÄRVFJÄLLET", "FADO", "HEKTAR", "RANARP",
            "NYMÖ", "SINNERLIG", "RENS", "TOFTBO", "OFTAST", "FÄRGKLAR", "DINERA", "IKEA_365", "VARDAGEN", "KRAKSTRIP",
            "POÄNG_CHAIR", "MALM_BED", "BILLY_BOOKCASE", "KALLAX_SHELF", "LACK_TABLE", "FLAT_PACK", "ALLEN_KEY", "SWEDISH_MEATBALLS"
        ],
        imposterWords: [
            "ODIN", "THOR", "LOKI", "FREYJA", "FRIGG", "BALDUR", "HEIMDALL", "TYR", "HELA", "NJORD",
            "IDUN", "BRAGI", "VALI", "VIDAR", "HODUR", "MAGNI", "MODI", "SIF", "FREYR", "FENRIR",
            "MIDGARD", "ASGARD", "VALHALLA", "YGGDRASIL", "RAGNAROK", "MJOLNIR", "VALKYRIE", "RUNESTONE"
        ]
    },

    {
        id: "periodic_table_vs_sci_fi_minerals",
        _innocentHints: [
            "The Periodic Table of Elements, Natural Chemical Elements & Scientific Materials",
            "Chemical Elements, Standard Scientific Periodic Table Matter & Physical Compounds",
            "Standard Chemical Elements, Periodic Table Classifications & Natural Substances",
            "Periodic Table Chemistry Elements, Atomic Matter & Scientific Compounds",
            "Natural Atomic Elements, Chemical Science Periodic Table & Pure Materials"
        ],
        _imposterHints: [
            "Science Fiction Minerals, Fictional Universe Materials & Exotic Pop-Culture Ore",
            "Fictional Sci-Fi Metals, Pop-Culture Fantasy Elements & Exotic Materials",
            "Fantasy and Sci-Fi Ore, Mythical Universe Minerals & Fictional Metallurgy",
            "Pop-Culture Fictional Elements, Sci-Fi Universe Minerals & Cinematic Metals",
            "Exotic Sci-Fi Substances, Fictional Universe Alloys & Fantasy World Ore"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "HYDROGEN", "HELIUM", "LITHIUM", "BERYLLIUM", "BORON", "CARBON", "NITROGEN", "OXYGEN", "FLUORINE", "NEON",
            "SODIUM", "MAGNESIUM", "ALUMINUM", "SILICON", "PHOSPHORUS", "SULFUR", "CHLORINE", "ARGON", "POTASSIUM", "CALCIUM",
            "TITANIUM", "CHROMIUM", "MANGANESE", "IRON", "COBALT", "NICKEL", "COPPER", "ZINC", "GALLIUM", "GERMANIUM",
            "ARSENIC", "SELENIUM", "BROMINE", "KRYPTON", "RUBIDIUM", "STRONTIUM", "YTTRIUM", "ZIRCONIUM", "NIOBIUM", "MOLYBDENUM",
            "SILVER", "CADMIUM", "INDIUM", "TIN", "ANTIMONY", "TELLURIUM", "IODINE", "XENON", "CESIUM", "BARIUM",
            "PLATINUM", "GOLD", "MERCURY", "THALLIUM", "LEAD", "BISMUTH", "RADON", "URANIUM", "PLUTONIUM", "TITANIUM_ALLOY"
        ],
        imposterWords: [
            "VIBRANIUM", "ADAMANTIUM", "KRYPTONITE", "BESKAR", "UNOBTAINIUM", "MITHRIL", "DILITHIUM", "KYBER_CRYSTAL", "ENERGON", "COROMANIUM",
            "CHRONOTON", "NAQUADAH", "TRINIUM", "EZANIUM", "TANIUM", "PHAZITE", "LATINUM", "SCRITH", "TIMEPASS", "BOOM_TUBE",
            "VALYRIAN_STEEL", "ORICHALCUM", "EBONY_ORE", "STARMETAL", "NETHERITE", "REDSTONE", "GLOWSTONE", "ENDER_PEARL"
        ]
    },

    {
        id: "typography_vs_medieval_torture",
        _innocentHints: [
            "Typography and Printing Terms, Font Anatomy & Document Layout Settings",
            "Typesetting Design Terms, Font Styling Elements & Text Composition Architecture",
            "Font Mechanics, Printing Typography Variables & Desktop Publishing Layouts",
            "Graphic Layout Typesetting, Typography Terminology & Print Document Frameworks",
            "Text Formatting Parameters, Font Geometry & Printing Typography Architecture"
        ],
        _imposterHints: [
            "Medieval Torture Instruments, Historic Punishment Hardware & Execution Devices",
            "Historic Execution Mechanisms, Medieval Dungeon Hardware & Capital Punishment Tools",
            "Ancient Dark-Age Punishment Hardware, Historic Torture Tools & Inquisition Devices",
            "Medieval Inquisition Machinery, Historic Capital Punishment Systems & Execution Devices",
            "Dungeon Torture Hardware, Historic Inquisition Systems & Punishment Mechanics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "LEADING", "KERNING", "TRACKING", "SERIF", "SANS_SERIF", "LIGATURE", "BASELINE", "X_HEIGHT", "ASCENDER", "DESCENDER",
            "COUNTER", "JUSTIFICATION", "ALIGNMENT", "GRID_SYSTEM", "PICA", "POINT_SIZE", "ITALIC", "BOLDFACE", "GLYPH", "FONT_FAMILY",
            "TYPEFACE", "MONOSPACE", "SLAB_SERIF", "DISPLAY_TYPE", "SMALL_CAPS", "DROP_CAP", "ORPHAN", "WIDOW", "RAG", "GUTTER",
            "MARGIN", "BLEED", "BOUND_BOX", "LINE_BREAK", "INDENT", "STRIKETHROUGH", "UNDERLINE", "SUPERSCRIPT", "SUBSCRIPT", "EM_SPACE"
        ],
        imposterWords: [
            "THE_RACK", "IRON_MAIDEN", "GUILLOTINE", "THUMBSCREW", "PILLORY", "STOCKS", "SCREWS", "STRETCHER", "BREAK_WHEEL", "PEAR_OF_ANGUISH",
            "CHOKE_PEAR", "HEAD_CRUSHER", "SCAVENGERS_DAUGHTER", "DUNKING_STOOL", "GIBBET", "JUDAS_CRADLE", "BRAZEN_BULL", "STAKE", "BLOCK", "AXE"
        ]
    },

    {
        id: "coffee_orders_vs_ballet_terms",
        _innocentHints: [
            "Café Coffee Menu Orders, Espresso Preparation Styles & Milk Alterations",
            "Coffee Shop Beverage Options, Espresso Brew Formats & Barista Customizations",
            "Barista Espresso Customizations, Café Beverage Selections & Coffee Variations",
            "Espresso Bar Menu Items, Specialty Coffee Formats & Milk Configurations",
            "Coffee Brew Variants, Specialty Cafe Orders & Barista Menu Items"
        ],
        _imposterHints: [
            "Classical Ballet Movements, French Dance Terminology & Choreography Positions",
            "Classical Dance Techniques, French Ballet Terms & Choreography Routines",
            "French Ballet Step Patterns, Classical Dance Terminology & Stage Choreography",
            "Ballet Performance Terminology, Classical French Dance Formats & Choreography",
            "Classical French Ballet Frameworks, Dance Training Concepts & Stage Movements"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "ESPRESSO", "MACCHIATO", "RISTRETTO", "LUNGHO", "CAPPUCCINO", "LATTE", "AFFOGATO", "AMERICANO", "CORTADO", "FLAT_WHITE",
            "MOCHA", "COLD_BREW", "FRAPPÉ", "POUR_OVER", "NITRO", "DOPPIO", "SOLO", "CON_PANNA", "BREVE", "CAFÉ_AU_LAIT",
            "DOUBLE_SHOT", "SINGLE_ORIGIN", "DECAF", "SKIM_MILK", "OAT_MILK", "ALMOND_MILK", "SOY_MILK", "VANILLA_SYRUP", "CARAMEL_DRIZZLE", "BARISTA_BLEND"
        ],
        imposterWords: [
            "PLIÉ", "TENDU", "PIROUETTE", "ARABESQUE", "RELEVÉ", "JETÉ", "CHASSÉ", "FOUETTÉ", "PAS_DE_DEUX", "GRAND_BATLEMENT",
            "ROND_DE_JAMBE", "ADAGIO", "ALLEGRO", "FRAPPÉ_DANCE", "GLISSADE", "PAB_DE_BOURRÉE", "DEVELOPPÉ", "ATTITUDE", "PORT_DE_BRAS", "ÉCHAPPÉ"
        ]
    },

    {
        id: "cocktails_vs_wrestling_moves",
        _innocentHints: [
            "Alcoholic Cocktail Drinks, Classic Mixed Beverages & Bar Menu Orders",
            "Classic Mixed Drink Cocktails, Bartender Recipe Names & Alcoholic Beverages",
            "Bartender Mixed Beverages, Classic Alcohol Cocktails & Lounge Menu Items",
            "Mixed Alcoholic Drinks, Lounge Cocktail Selections & Classic Bar Recipes",
            "Classic Bar Drink Orders, Mixed Alcohol Cocktails & Nightclub Refreshments"
        ],
        _imposterHints: [
            "Pro Wrestling Maneuvers, Combat Sports Takedowns & Ring Finishing Moves",
            "Professional Wrestling Attacks, Martial Arts Takedown Moves & Ring Maneuvers",
            "Wrestling Ring Finishing Moves, Combat Sports Attacks & Throw Maneuvers",
            "Combat Grappling Maneuvers, Pro Wrestling Grapples & Ring Slams",
            "Wrestling Takedown Maneuvers, Combat Sports Ring Throws & Finisher Moves"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "NEGRONI", "MARGARITA", "MARTINI", "MOJITO", "DAIQUIRI", "MANHATTAN", "OLD_FASHIONED", "SNEAKY_PETE", "MAI_TAI", "MIMOSA",
            "GIMLET", "SAZERAC", "SIDE_CAR", "BOULEVARDIER", "PALOMA", "TOM_COLLINS", "COSMOPOLITAN", "BLOODY_MARY", "BELLINI", "MINT_JULEP",
            "TEQUILA_SUNRISE", "IRISH_COFFEE", "MOSCOW_MULE", "PINA_COLADA", "DARK_AND_STORMY", "WHISKEY_SOUR", "AMARETTO_SOUR", "LONG_ISLAND", "WHITE_RUSSIAN", "BLACK_RUSSIAN"
        ],
        imposterWords: [
            "CHOKESLAM", "SUFLEX", "PILEDRIVER", "POWERBOMB", "CLOTHESLINE", "BODY_SLAM", "DROPKICK", "STUNNER", "SPEAR", "MOONSAULT",
            "BOSTON_CRAB", "SHARPSHOOTER", "RKO", "F_5", "PEDIGREE", "TOMBSTONE", "BACKBREAKER", "NECKBREAKER", "DDT", "SUDDEN_DROP"
        ]
    },

    {
        id: "cooking_methods_vs_pottery_techniques",
        _innocentHints: [
            "Culinary Cooking Methods, Thermal Food Preparation & Kitchen Techniques",
            "Kitchen Food Heating Methods, Culinary Production & Cooking Techniques",
            "Thermal Meal Preparation Methods, Culinary Arts & Cooking Systematics",
            "Food Preparation Techniques, Thermal Culinary Systems & Kitchen Processing",
            "Culinary Food Heat Methods, Kitchen Meal Production & Cooking Systematics"
        ],
        _imposterHints: [
            "Ceramic Pottery Techniques, Clay Studio Production & Kiln Kilning Systems",
            "Clay Forming and Ceramic Processing, Artisan Pottery Production & Sculpting Systems",
            "Artisan Clay Processing Methods, Ceramic Crafting Systems & Pottery Forming",
            "Ceramic Forming Systematics, Artisan Clay Studio Practices & Pottery Glazing",
            "Studio Pottery Processing, Clay Sculpting Systematics & Ceramic Engineering"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BAKING", "ROASTING", "BROILING", "GRILLING", "BARBECUING", "SEARING", "SAUTÉING", "FRYING", "DEEP_FRYING", "STIR_FRYING",
            "BOILING", "SIMMERING", "POACHING", "STEAMING", "BRAISING", "STEWING", "BLANCHING", "PARBOILING", "SMOKING", "SOUS_VIDE",
            "REDUCTION", "CARAMELIZING", "DEGLAZING", "GLAZING_FOOD", "TEMPERING", "FLAMBÉ", "BASTING", "MARINATING", "CURING", "FERMENTING"
        ],
        imposterWords: [
            "WHEEL_THROWING", "COILING", "SLAB_BUILDING", "PINCHING", "WEDGING", "SCORE_AND_SLIP", "FIRING", "BISQUE_FIRING", "GLAZING_POTTERY", "UNDERGLAZING",
            "SGRAFFITO", "SLIP_TRAILING", "RAKU", "ANAGAMA", "TERRA_SIGILLATA", "GROG_BLENDING", "BURNISHING", "TRIMMING", "CANING", "JIGGERING"
        ]
    },

    {
        id: "dog_breeds_vs_pokemon",
        _innocentHints: [
            "Domesticated Canine Dog Breeds, Biological Dog Types & AKC Registered Pets",
            "Official Domestic Dog Breeds, Canine Pedigree Classes & Household Pets",
            "Canine Pedigree Breeds, Domesticated Dog Classifications & Household Pets",
            "Domestic Dog Breeds, Household Canine Classifications & Pedigree Show Subtypes",
            "Official Canine Breeds, Household Dog Subtypes & Biological Pedigree Classes"
        ],
        _imposterHints: [
            "Nintendo Pokémon Creatures, Video Game Pocket Monsters & Pokedex Species Names",
            "Pocket Monster Fantasy Creatures, Nintendo Video Game Entities & Pokedex Species",
            "Fictional Pokémon Species, Nintendo Handheld Video Game Creatures & Battle Monsters",
            "Nintendo Battle Monsters, Fictional Pokédex Entities & Video Game Species",
            "Fictional Pocket Monsters, Gaming Universe Creature Species & Battle Entities"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "RETRIEVER", "POODLE", "BULLDOG", "BEAGLE", "ROTTWEILER", "POINTER", "BOXER", "DACHSHUND", "CORGI", "HUSKY",
            "SHEPHERD", "TERRIER", "SPANIEL", "COLLIE", "MASTIFF", "PAG", "CHIHUAHUA", "SHIHTZU", "MALAMUTE", "DOBERMAN",
            "GREYHOUND", "WHIPPET", "AKITA", "SHIBA_INU", "CHOW_CHOW", "DALMATIAN", "PUDELPOINTER", "PINSCHER", "SAMOYED", "NEWFOUNDLAND",
            "ST_BERNARD", "GREAT_DANE", "BLOODHOUND", "BASSET", "MALINOIS", "SHEEPDOG", "CATTLE_DOG", "FOXHOUND", "SETTER", "SCHNAUZER"
        ],
        imposterWords: [
            "PIKACHU", "CHARIZARD", "BULBASAUR", "SQUIRTLE", "EEVEE", "LUCARIO", "GRENINJA", "MEWTWO", "ARCEUS", "GENGAR",
            "JIGGLYPUFF", "SNORLAX", "MUDKIP", "BLAZIKEN", "GARDEVOIR", "RAYQUAZA", "LUXRAY", "GROWLITHE", "ARCANINE", "ROCKRUFF"
        ]
    },

    {
        id: "weather_phenomena_vs_rpg_magic_spells",
        _innocentHints: [
            "Atmospheric Weather Phenomena, Natural Meteorology Statuses & Climate Anomalies",
            "Natural Atmospheric Anomalies, Meteorological Events & Climate Conditions",
            "Meteorological Weather Patterns, Natural Environmental Events & Climate Disasters",
            "Natural Severe Weather Events, Atmospheric Conditions & Meteorological Patterns",
            "Atmospheric Climate States, Natural Meteorological Events & Environmental Activity"
        ],
        _imposterHints: [
            "Fantasy RPG Magic Spells, Tabletop Gaming Incantations & Wizard Combat Skills",
            "Fantasy Videogame Magic Incantations, RPG Combat Skills & Sorcery Abilities",
            "RPG Sorcery Spells, Fantasy Tabletop Incantations & Magical Combat Attacks",
            "Wizard Fantasy Combat Skills, Mystical Spell Casting & RPG Incantations",
            "Tabletop RPG Sorcery Mechanics, Magic Combat Casts & Fantasy Incantations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BLIZZARD", "CYCLONE", "TORNADO", "HURRICANE", "THUNDERSTORM", "DOWNPOUR", "HAILSTORM", "HEATWAVE", "DROUGHT", "SANDSTORM",
            "MONSOON", "GALE", "MIST", "FOG_BANK", "DRIZZLE", "GUST", "LIGHTNING_STRIKE", "TYPHOON", "WHIRLWIND", "DERECHO",
            "ICE_STORM", "FLASH_FLOOD", "SNOW_SQUALL", "THUNDERCLAP", "FREEZING_RAIN", "MICROBURST", "SOLAR_FLARE", "JET_STREAM", "CLOUD_BURST", "VORTEX"
        ],
        imposterWords: [
            "FIREBALL", "METEOR_SWARM", "CHAIN_LIGHTNING", "BLIZZARD_CAST", "THUNDERWAVE", "ICE_STORM_SPELL", "ACID_ARROW", "MAGIC_MISSILE", "TELEPORT", "HEAL_WORD",
            "MIND_BLAST", "SHIELD_MAGIC", "POWER_WORD", "TIME_STOP", "SACRED_FLAME", "ELDRITCH_BLAST", "FROST_BITE", "SUN_BURST", "DARKNESS_SPELL", "LEVITATE"
        ]
    },

    {
        id: "currency_units_vs_crypto_tokens",
        _innocentHints: [
            "Sovereign Fiat Currency Units, National Government Tenders & Banking Cash Codes",
            "National Fiat Currencies, Sovereign Government Legal Tenders & Global Cash Systems",
            "Global Financial Paper Tenders, National Sovereign Currencies & Banking Cash Units",
            "Sovereign Central-Bank Fiat Monies, National Currency Units & Legal Cash Tenders",
            "Official Sovereign Legal Tenders, Global Central-Bank Currencies & National Cash"
        ],
        _imposterHints: [
            "Decentralized Cryptocurrency Cryptos, Digital Blockchain Tokens & Web3 Asset Tickers",
            "Digital Crypto Assets, Decentralized Blockchain Tokens & Web3 Virtual Tickers",
            "Web3 Cryptocurrency Assets, Decentralized Blockchain Token Frameworks & Crypto Tickers",
            "Blockchain Crypto Tokens, Virtual Web3 Assets & Digital Alternative Currencies",
            "Virtual Cryptocurrencies, Decentralized Blockchain Network Tokens & Crypto Market Tickers"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "DOLLAR", "EURO", "POUND_STERLING", "YEN", "YUAN", "RUPEE", "RUBLE", "FRANC", "PESO", "RAND",
            "DIRHAM", "DINAR", "RIYAL", "KRONA", "WON", "SHEKEL", "RINGGIT", "RUPIAH", "BAHT", "DONG",
            "LOONIE", "TOONIE", "GREENBACK", "LEGAL_TENDER", "FIAT_MONEY", "BANKNOTE", "HARD_CASH", "SOVEREIGN_COIN"
        ],
        imposterWords: [
            "BITCOIN", "ETHEREUM", "SOLANA", "RIPPLE", "CARDANO", "POLKADOT", "DOGECOIN", "SHIBA_TOKEN", "AVALANCHE", "STABLECOIN",
            "LITECOIN", "MONERO", "UNISWAP", "CHAINLINK", "POLYGON", "ALGORAND", "MEMECOIN", "GAS_FEE", "SMART_CONTRACT", "GENESIS_BLOCK"
        ]
    },

    {
        id: "board_game_components_vs_ux_ui_elements",
        _innocentHints: [
            "Tabletop Board Game Components, Physical Gaming Hardware & Box Contents",
            "Physical Board Game Hardware Pieces, Tabletop Components & Box Inventory",
            "Tabletop Board Game Structural Components, Physical Playing Pieces & Accessories",
            "Physical Tabletop Accessories, Traditional Board Game Component Hardware & Pieces",
            "Traditional Board Game Materials, Physical Tabletop Gear & Component Tokens"
        ],
        _imposterHints: [
            "Digital UX/UI Design Components, Software User Interface Elements & Website Widgets",
            "Website App Layout Components, Digital Interface Frameworks & UX Screen Widgets",
            "Digital Screen Application Layouts, Interactive Software Graphic Assets & Web Elements",
            "Software Graphic Interface Modules, Interactive Web Layout Items & UX/UI Components",
            "Interactive Design Interface Widgets, Digital Application Framework Layout Elements"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "GAME_BOARD", "MEEPLE", "DICE_TOWER", "TOKEN", "PLAYING_CARD", "SCORE_TRACK", "SAND_TIMER", "RULEBOOK", "HEX_TILE", "CHIT",
            "RESOURCE_CUBE", "SPINNER", "MINIATURE", "FIRST_PLAYER_TOKEN", "DICE_TRAY", "PLAYER_MAT", "SCREEN_SHIELD", "DECK_BOX", "COIN_COUNTER", "TILE_BAG",
            "PLAYING_PIECE", "MARKER_PEG", "RESOURCE_DECK", "BOARD_MAP", "VICTORY_POINT_CHIP", "SETUP_GUIDE", "REFERENCE_CARD", "EXPANSION_PACK"
        ],
        imposterWords: [
            "DROP_DOWN_MENU", "BURGER_BUTTON", "PROGRESS_BAR", "MODAL_WINDOW", "TOGGLE_SWITCH", "TOOL_TIP", "NAV_BAR", "CAROUSEL_SLIDER", "CHECK_BOX", "RADIO_BUTTON",
            "TEXT_INPUT_FIELD", "ACCORDION_PANEL", "TAB_BAR", "BREAD_CRUMB", "SEARCH_BAR", "DATE_PICKER", "ALERT_BANNER", "SIDE_PANEL", "GRID_VIEW", "HERO_SECTION"
        ]
    },

    // Append these 20 highly engineered categories to your window.SYNAPSE_MATRIX_POOL array inside words.js.
// Formatted flawlessly for your V2 protocol, containing balanced semantic leaks and distinct contexts.

    // ==========================================
    // SECTION 1: PROPER NOUN CATEGORIES (10)
    // ==========================================

    {
        id: "star_wars_planets_vs_real_deserts",
        _innocentHints: [
            "Fictional Worlds and Planets from the Star Wars Galaxy Cinematic Lore",
            "Star Wars Sci-Fi Planets, Celestial Movie Locations & Sci-Fi Galaxy Systems",
            "Fictional Galactic Worlds, Star Wars Cinematic Planets & Alien Ecosystems",
            "Star Wars Universe Planets, Sci-Fi Film Destinations & Galactic Coordinates",
            "Fictional Sci-Fi Planets, Star Wars Cinematic Lore & Alien System Locations"
        ],
        _imposterHints: [
            "Real Terrestrial Deserts, Geographic Earth Wilderness & Arid Landmasses",
            "Actual Geographic Earth Deserts, Real-World Arid Regions & Wilderness Topography",
            "Terrestrial Earth Deserts, Real Geographic Wilderness Regions & Arid Zones",
            "Real-World Terrestrial Deserts, Actual Geographic Environments & Arid Landmasses",
            "Geographic Earth Wilderness Zones, Real Terrestrial Deserts & Arid Topography"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "TATOOINE", "HOTH", "ENDOR", "DAGOBAH", "CORUSCANT", "NABOO", "MUSTAFAR", "JAKKU", "TAKODANA", "CRAIT",
            "JEDHA", "GEONOSIS", "KAMINO", "ALDERAAN", "BESPIN", "KASHYYYK", "YAVIN_FOUR", "D'QAR", "EXEGOL", "ACH_TO",
            "UTAPAU", "FELUCIA", "MYGEETO", "CATO_NEIMOIDIA", "SALEUCAMI", "LOTHAL", "SULLUST", "MON_CALAMARI", "MALASTARE", "ORD_MANDELL",
            "ILUM", "DATHOMIR", "RIYLOTH", "ZONAMA_SEKOT", "KUAT", "FONDOR", "DANTOOINE", "WAYLAND", "RHEE_GOL", "KORRIBAN"
        ],
        imposterWords: [
            "SAHARA", "GOBI", "KALAHARI", "ATACAMA", "MOJAVE", "SONORAN", "NAMIB", "THAR", "NEGEV", "SIMPSON",
            "KUM", "PATAGONIAN", "TAKLA_MAKAN", "KARAKUM", "CHIHUAHUAN", "KYZYLKUM", "MOVI_DESERT", "GIBSON", "LUT", "DASH_E_KAVIR"
        ]
    },

    {
        id: "marvel_heroes_vs_greek_gods",
        _innocentHints: [
            "Marvel Comics Superheroes, Avengers Team Profiles & Pop Culture Comic Book Icons",
            "Marvel Universe Comic Book Superheroes, Avengers Members & Pop Culture Icons",
            "Comic Book Superheroes, Marvel Cinematic Characters & Avengers Group Roles",
            "Marvel Comic Superheroes, Avengers Multiverse Entities & Pop Culture Icons",
            "Marvel Universe Superheroes, Pop Culture Comic Book Champions & Avengers Characters"
        ],
        _imposterHints: [
            "Greek Mythology Gods, Classical Olympian Deities & Ancient Hellenic Pantheon",
            "Ancient Olympian Deities, Greek Mythological Characters & Hellenic Pantheon Icons",
            "Classical Greek Myth Gods, Olympian Pantheon Spirits & Ancient Legend Entities",
            "Olympian Mythology Figures, Classical Greek Deities & Ancient Pantheon Spirits",
            "Ancient Greek Mythology Gods, Classical Hellenic Deities & Olympian Figures"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "IRON_MAN", "SPIDER_MAN", "CAPTAIN_AMERICA", "THOR_MARVEL", "BLACK_WIDOW", "HAWKEYE", "HULK", "BLACK_PANTHER", "DOCTOR_STRANGE", "ANT_MAN",
            "CAPTAIN_MARVEL", "WOLVERINE", "CYCLOPS", "STORM", "JEAN_GREY", "NIGHTCRAWLER", "DEADPOOL", "DAREDEVIL", "LUKE_CAGE", "IRON_FIST",
            "MOON_KNIGHT", "SHE_HULK", "WAR_MACHINE", "FALCON", "WINTER_SOLDIER", "VISION", "SCARLET_WITCH", "QUICKSILVER", "GHOST_RIDER", "BLADE",
            "SPIDER_GWEN", "MILES_MORALES", "NOVA", "HERCULES_MARVEL", "SENTRY", "NAMOR", "SHANG_CHI", "PUNISHER", "STAR_LORD", "GAMORA"
        ],
        imposterWords: [
            "ZEUS", "POSEIDON", "HADES", "HERA", "ATHENA", "APOLLO", "ARTEMIS", "ARES", "APHRODITE", "HEPHAESTUS",
            "HERMES", "HESTIA", "DEMETER", "DIONYSUS", "PERSEPHONE", "HECATE", "HELIOS", "PAN", "EROS", "CHRONOS"
        ]
    },

    {
        id: "fast_food_chains_vs_michelin_chefs",
        _innocentHints: [
            "American Fast Food Restaurant Chains, Corporate Quick-Service Brands & Drive-Thru Retailers",
            "Quick-Service Restaurant Chains, Corporate Fast Food Outlets & Commercial Franchises",
            "Commercial Fast Food Outlets, Global Drive-Thru Dining Brands & Restaurant Franchises",
            "Fast Food Restaurant Brands, Corporate Quick-Service Chains & Commercial Outlets",
            "Global Fast Food Franchises, Quick-Service Drive-Thru Restaurant Brands & Outlets"
        ],
        _imposterHints: [
            "World-Renowned Fine Dining Michelin Chefs, Culinary Icons & Gastronomy Experts",
            "Celebrated Fine Dining Chefs, Multi-Michelin Starred Culinary Masters & Gastronomy Experts",
            "Michelin Starred Elite Culinary Masters, Fine Dining Chef Icons & Gastronomy Pioneers",
            "Elite Fine Dining Chefs, Renowned Gastronomy Experts & Multi-Star Michelin Masters",
            "Celebrated Gastronomy Masters, Fine Dining Elite Chefs & Michelin Star Recipients"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "MCDONALDS", "BURGER_KING", "WENDYS", "SUBWAY", "TACO_BELL", "KFC", "POPEYES", "CHICK_FIL_A", "FIVE_GUYS", "IN_N_OUT",
            "SHAKE_SHACK", "WHATABURGER", "SONIC_DRIVE_IN", "JACK_IN_the_BOX", "CARLS_JR", "HARD_EES", "ARBYS", "DUNKIN", "STARBUCKS", "PIZZA_HUT",
            "DOMINOS", "PAPA_JOHNS", "LITTLE_CAESARS", "DAIRY_QUEEN", "WHITE_CASTLE", "SMASHBURGER", "CULVERS", "PANDA_EXPRESS", "DEL_TACO", "CHIPOTLE",
            "WINGSTOP", "BREAD_COMPANY", "BUFFALO_WILD_WINGS", "APPLEBEES", "DENNYS", "IHOP", "WAFFLE_HOUSE", "CRACKER_BARREL", "OUTBACK", "CHILIS"
        ],
        imposterWords: [
            "RAMSAY", "PUCK", "DUCASSE", "REDRZEPI", "BLUMENTHAL", "ACHATZ", "ROBUCHON", "KELLER", "BOURDAIN", "CHANG",
            "BOULUD", "PASSARD", "ADRIA", "COLICCHIO", "SAVOY", "RIPERT", "WHITE", "BATALI", "OLIVER", "RIZZO"
        ]
    },

    {
        id: "silicon_valley_giants_vs_automotive_brands",
        _innocentHints: [
            "Silicon Valley Technology Corporations, Software Developers & Internet Service Giants",
            "Tech Industry Corporate Giants, Silicon Valley Software Brands & Hardware Manufacturers",
            "Silicon Valley Software Corporations, Big Tech Conglomerates & Digital Service Providers",
            "Global Tech Industry Conglomerates, Silicon Valley Software Giants & Internet Corporate Brands",
            "Big Tech Corporate Entities, Silicon Valley Developers & Hardware Tech Manufacturers"
        ],
        _imposterHints: [
            "Global Automotive Manufacturers, Motor Vehicle Brands & Industrial Car Enterprises",
            "Global Car Manufacturing Brands, Motor Vehicle Corporations & Automotive Enterprises",
            "Industrial Vehicle Enterprises, Global Automotive Manufacturers & Car Brand Corporations",
            "Motor Car Manufacturers, International Automotive Corporations & Vehicle Brands",
            "International Automobile Manufacturing Brands, Vehicle Corporations & Car Enterprises"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "GOOGLE", "APPLE", "MICROSOFT", "AMAZON", "META", "NETFLIX", "ALPHABET", "NVIDIA", "AMD", "INTEL",
            "ADOBE", "SALESFORCE", "ORACLE", "CISCO", "HP_ENTERPRISE", "IBM", "UBER", "AIRBNB", "TWITTER", "LINKEDIN",
            "ZOOM", "SLACK", "STRIPE", "PALANTIR", "SNOWFLAKE", "AUTODESK", "INTUIT", "PAYPAL", "EBAY", "SHOPIFY",
            "SQUARE", "ROBLOX", "SNAPCHAT", "PINTEREST", "DROPBOX", "ASANA", "WORKDAY_CORP", "VMWARE", "DELL", "QUALCOMM"
        ],
        imposterWords: [
            "TOYOTA", "FORD", "CHEVROLET", "HONDA", "MERCEDES_BENZ", "BMW", "AUDI", "PORSCHE", "FERRARI", "LAMBORGHINI",
            "TESLA", "HYUNDAI", "NISSAN", "VOLKSWAGEN", "VOLVO", "SUBARU", "MAZDA", "JAGUAR", "LEXUS", "ASTON_MARTIN"
        ]
    },

    {
        id: "classic_authors_vs_modern_pop_stars",
        _innocentHints: [
            "Canonical Literary Authors, Classic Western Novelists & Historical Poets",
            "Historical Classic Literature Novelists, Canonical Playwrights & Literary Icons",
            "Classic Historical Authors, Western Literary Novelists & Canonical Playwrights",
            "Canonical Western Novelists, Classic Literature Icons & Historic Poets",
            "Classic Western Literature Playwrights, Historic Novelists & Authors"
        ],
        _imposterHints: [
            "Contemporary Billboard Pop Vocalists, Modern Music Chart Celebrities & Recording Artists",
            "Modern Billboard Music Recording Artists, Contemporary Pop Vocal Stars & Chart Celebrities",
            "Contemporary Pop Musicians, Modern Billboard Recording Artists & Music Industry Celebrities",
            "Modern Vocal Pop Stars, Contemporary Music Artists & Billboard Recording Icons",
            "Contemporary Pop Icons, Modern Recording Musicians & Billboard Chart Celebrities"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SHAKESPEARE", "DICKENS", "AUSTEN", "ORWELL", "HEMINGWAY", "TOLSTOY", "DOSTOEVSKY", "TWAIN", "POE", "JOYCE",
            "VIRGINIA_WOOLF", "FITZGERALD", "STEINBECK", "MELVILLE", "HAWTHORNE", "BRONTE", "SHELLEY", "MILTON", "HOMER", "DANTE",
            "KAFKA", "CAMUS", "MARQUEZ", "BALZAC", "FAULKNER", "CHRISTIE", "TOLKIEN", "LEWIS", "ORWELL_GEORGE", "PROUST",
            "CHAUCER", "GOETHE", "NABOKOV", "HARDY", "THOREAU", "EMERSON", "WILDE", "CHEKHOV", "IBSEN", "DUMAS"
        ],
        imposterWords: [
            "SWIFT", "BEYONCE", "RIHANNA", "GAGA", "BIEBER", "STYLES", "LIPA", "GRANDE", "WEEKND", "SHEERAN",
            "ELLISH", "MARS", "PERRY", "MINAJ", "DRAKE", "MENSCH", "CYRUS", "RODRIGO", "CHALAMET", "MALONE"
        ]
    },

    {
        id: "world_capitals_vs_us_states",
        _innocentHints: [
            "Sovereign International Capital Cities, Global Metropolises & Government Seats",
            "International Capital Cities, Global Metropolises & Sovereign Government Seats",
            "Global Metropolitan Capitals, Sovereign Political Hubs & Nation Seats",
            "International Sovereign Capital Hubs, Global Government Seats & National Cities",
            "Global Capital Metropolises, International Sovereign Seats & Political Cities"
        ],
        _imposterHints: [
            "United States Federal Territories, Domestic States & US Continental Regions",
            "Domestic United States States, US Federal Territories & Continental Regions",
            "US Domestic Federal Territories, Continental States & Regional Governments",
            "United States Continental Jurisdictions, Domestic States & Federal Territories",
            "Domestic American States, United States Jurisdictions & Continental Regions"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "LONDON", "PARIS", "TOKYO", "BERLIN", "ROME", "MADRID", "BEIJING", "MOSCOW", "WASHINGTON", "OTTAWA",
            "CANBERRA", "WELLINGTON", "BRASILIA", "CAIRO", "NAIROBI", "PRETORIA", "NEW_DELHI", "BANGKOK", "SEOUL", "JAKARTA",
            "MANILA", "VIENNA", "AMSTERDAM", "BRUSSELS", "DUBLIN", "COPENHAGEN", "STOCKHOLM", "OSLO", "HELSINKI", "WARSAW",
            "PRAGUE", "BUDAPEST", "BUENOS_AIRES", "SANTIAGO", "BOGOTA", "LIMA", "MEXICO_CITY", "HAVANA", "RIYADH", "ANKARA"
        ],
        imposterWords: [
            "CALIFORNIA", "TEXAS", "FLORIDA", "NEW_YORK", "ILLINOIS", "OHIO", "PENNSYLVANIA", "GEORGIA", "MICHIGAN", "NORTH_CAROLINA",
            "WASHINGTON_STATE", "ARIZONA", "COLORADO", "NEVADA", "OREGON", "VIRGINIA", "MASSACHUSETTS", "TENNESSEE", "INDIANA", "WISCONSIN"
        ]
    },

    {
        id: "video_game_studios_vs_board_game_publishers",
        _innocentHints: [
            "Digital Video Game Development Studios, Electronic Software Houses & Interactive Brands",
            "Electronic Video Game Developers, Digital Software Corporate Studios & Interactive Software Brands",
            "Interactive Digital Software Houses, Video Game Development Conglomerates & Studio Brands",
            "Digital Electronic Software Studios, Video Game Publishers & Development Houses",
            "Video Game Product Developers, Digital Software Houses & Electronic Game Studios"
        ],
        _imposterHints: [
            "Tabletop Board Game Publishers, Analog Printing Brands & Hobby Industry Enterprises",
            "Hobby Industry Analog Board Game Publishers, Tabletop Printing Brands & Tabletop Houses",
            "Analog Board Game Manufacturers, Hobby Industry Publishers & Tabletop Brands",
            "Tabletop Product Publishers, Analog Hobby System Houses & Board Game Brands",
            "Hobby Board Game Designers, Tabletop System Publishers & Analog Print Brands"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "NINTENDO", "SONY_SANTA_MONICA", "NAUGHTY_DOG", "ROCKSTAR_GAMES", "BETHESDA", "BIOWARE", "BLIZZARD_ENT", "CD_PROJEKT_RED", "INSOMNIAC", "VALVE",
            "FROM_SOFTWARE", "SQUARE_ENIX", "CAPCOM", "KONAMI", "SEGA", "UBISOFT", "ELECTRONIC_ARTS", "ACTIVISION", "EPIC_GAMES", "BUNGIE",
            "MOJANG", "INSOMNIAC_GAMES", "GUERRILLA", "REMEDY", "ARKANE", "OBSIDIAN", "GEARBOX", "TURN_10", "PLAYGROUND_STUDIOS", "CREATIVE_ASSEMBLY"
        ],
        imposterWords: [
            "ASMODEE", "HASBRO", "FANTASY_FLIGHT", "DAYS_OF_WONDER", "STONEMAIER", "RAVENSBURGER", "Z_MAN", "CGE", "KOSMOS", "ALECK",
            "BOARD_GAME_GEEK", "SMIRK_AND_DAGGER", "PEGASUS_SPIELE", "AEG", "REDEEMER", "DEVOIR", "BEZIER", "A_COOL_MINI_OR_NOT", "WYRDMASS", "PAIZO"
        ]
    },

    {
        id: "luxury_fashion_vs_sports_apparel",
        _innocentHints: [
            "High-End Luxury Fashion Houses, Haute Couture Designer Brands & Runway Labels",
            "Haute Couture Fashion Design Labels, Luxury Designer Brands & High-End Houses",
            "High-End Runway Fashion Houses, Luxury Designer Labels & Haute Couture Brands",
            "Luxury Design Wardrobe Labels, High-End Fashion Houses & Haute Couture Brands",
            "Haute Couture Runway Brands, High-End Luxury Labels & Design Houses"
        ],
        _imposterHints: [
            "Athletic Sports Apparel Corporations, Fitness Footwear Brands & Performance Activewear",
            "Performance Activewear Manufacturers, Athletic Gear Corporations & Sports Shoe Brands",
            "Athletic Footwear Manufacturers, Sports Performance Apparel Brands & Fitness Gear",
            "Sports Apparel Corporate Brands, Athletic Performance Gear & Fitness Manufacturers",
            "Performance Footwear Brands, Sports Activewear Manufacturers & Athletic Corporations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "GUCCI", "CHANEL", "LOUIS_VUITTON", "PRADA", "VERSACE", "ARMANI", "DIOR", "HERMES", "BALENCIAGA", "BURBERRY",
            "YVES_SAINT_LAURENT", "VALENTINO", "GIVENCHY", "FENDI", "DOLCE_GABBANA", "TOM_FORD", "ALEXANDER_MCQUEEN", "BOTTEGA_VENETA", "CELINE", "CARTIER",
            "ROLEX", "OMEGA", "TIFFANY", "BVLGARI", "CHLOE", "MIU_MIU", "LOEWE", "MARGIELA", "RICK_OWENS", "COMME_DES_GARCONS"
        ],
        imposterWords: [
            "NIKE", "ADIDAS", "PUMA", "UNDER_ARMOUR", "REEBOK", "NEW_BALANCE", "ASICS", "LUXURY_ATHLETIC", "LULULEMON", "CHAMPION",
            "FILA", "MIZUNO", "UMBRO", "CONVERSE", "VANS", "OAKLEY", "PATAGONIA", "COLUMBIA", "SALOMON", "GYMSHARK"
        ]
    },

    {
        id: "classic_rock_bands_vs_hip_hop_icons",
        _innocentHints: [
            "Classic Rock Music Bands, Mid-Century Stadium Anthem Ensembles & Legendary Guitar Groups",
            "Mid-Century Classic Rock Legends, Stadium Guitar Groups & Iconic Music Bands",
            "Iconic Guitar Rock Ensembles, Mid-Century Stadium Bands & Classic Audio Legends",
            "Classic Rock Guitar Bands, Historic Stadium Music Ensembles & Recording Icons",
            "Historic Stadium Rock Ensembles, Mid-Century Guitar Bands & Iconic Rock Acts"
        ],
        _imposterHints: [
            "Hip-Hop Music Rap Icons, Hip-Hop Culture Chart Artists & Urban Beats Producers",
            "Urban Rap Pioneers, Hip-Hop Culture Icons & Modern Beats Solo Artists",
            "Hip-Hop Recording Rappers, Urban Track Artists & Cultural Solo Legends",
            "Modern Urban Rap Vocalists, Hip-Hop Recording Pioneers & Beats Artists",
            "Hip-Hop Culture Innovators, Urban Rap Recording Pioneers & Solo Vocalists"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "LED_ZEPPELIN", "THE_BEATLES", "PINK_FLOYD", "QUEEN", "AC_DC", "THE_ROLLING_STONES", "METALLICA", "GUNS_N_ROSES", "NIRVANA", "BLACK_SABBATH",
            "THE_WHO", "DEEP_PURPLE", "VAN_HALEN", "AEROSMITH", "BON_JOVI", "FLEETWOOD_MAC", "THE_DOORS", "IRON_MAIDEN_BAND", "JUDAS_PRIEST", "DEF_LEPPARD",
            "RUSH", "PINK_FLOYD_BAND", "CREEDENCE_CLEARWATER", "THE_EAGLES", "ZZ_TOP", "LYNYRD_SKYNYRD", "KISS", "MOTLEY_CRUE", "OASIS", "PEARL_JAM"
        ],
        imposterWords: [
            "TUPAC", "BIGGIE", "EMINEM", "JAY_Z", "NAS", "SNOOP_DOGG", "DR_DRE", "KENDRICK_LAMAR", "KANYE_WEST", "LIL_WAYNE",
            "50_CENT", "ICE_CUBE", "OUTKAST", "WU_TANG_CLAN", "RAKIM", "LL_COOL_J", "DMX", "POST_HIPHOP", "FUTURE", "TRAVIS_SCOTT"
        ]
    },

    {
        id: "tech_operating_systems_vs_crypto_blockchains",
        _innocentHints: [
            "Computer Operating Systems, Device Platform Architecture & Software Environment Infrastructure",
            "Desktop and Mobile Operating Systems, Computing Architecture Platforms & Base Infrastructure",
            "Device Software Infrastructure Environments, Core Computing Platforms & Operating Systems",
            "Core Computing Architecture platforms, Desktop and Mobile Operating Systems & Software Environments",
            "Software Computing Environments, Operating System Platforms & Device Architecture Layouts"
        ],
        _imposterHints: [
            "Decentralized Layer-1 Blockchains, Web3 Network Infrastructures & Distributed Ledgers",
            "Web3 Ledger Systems, Layer-1 Blockchain Network Ecosystems & Distributed Node Webs",
            "Distributed Ledger Frameworks, Web3 Architecture Networks & Cryptographic Node Protocols",
            "Cryptographic Blockchain Infrastructure Protocols, Web3 Ledgers & Distributed Node Nets",
            "Web3 Cryptographic Networks, Layer-1 Distributed Protocols & Ledger Frameworks"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "WINDOWS", "MACOS", "LINUX", "ANDROID", "IOS", "UBUNTU", "DEBIAN", "RED_HAT", "FEDORA", "CHROME_OS",
            "FREE_BSD", "SOLARIS", "ARCH_LINUX", "MINT", "CENT_OS", "SUSE", "WINDOWS_SERVER", "AMIGA_OS", "MS_DOS", "OS_TWO",
            "BERKELEY_SOFTWARE", "PALM_OS", "SYMBIAN", "BLACKBERRY_OS", "TIZEN", "KALI_LINUX", "ELEMENTARY_OS", "TAILS", "ALPINE", "GENTOO"
        ],
        imposterWords: [
            "ETHEREUM_NET", "SOLANA_NET", "BITCOIN_LEDGER", "CARDANO_NET", "AVALANCHE_PLATFORM", "POLKADOT_CHAIN", "POLYGON_NETWORK", "NEAR_PROTOCOL", "COSMOS_HUB", "ALGORAND_CHAIN",
            "RIPPLE_NET", "STELLAR_LUMENS", "FANTOM", "OPTIMISM", "ARBITRUM", "BASE_CHAIN", "TRON_NETWORK", "HEDERA", "MONERO_NET", "LITECOIN_NET"
        ]
    },


    // ==========================================
    // SECTION 2: GENERALISED CATEGORIES (5)
    // ~100 Total Words balanced across properties
    // ==========================================

    {
        id: "general_animals_vs_fruits",
        _innocentHints: [
            "Biological Kingdom Animalia, Living Wildlife Organisms & Natural Creatures",
            "Living Animal Creatures, Natural Wildlife Organisms & Terrestrial Fauna",
            "Terrestrial Fauna Species, Natural Wildlife Creatures & Biological Animals",
            "Natural Wildlife Fauna, Living Kingdom Animalia Organisms & Wild Creatures",
            "Living Biological Fauna, Terrestrial Wildlife Organisms & Wild Animals"
        ],
        _imposterHints: [
            "Agricultural Plant Fruit Varieties, Natural Plant Seed Pods & Sweet Produce Items",
            "Botanical Orchard Fruit Varieties, Sweet Plant Produce Items & Edible Seed Structures",
            "Edible Botanical Fruit Crops, Sweet Agricultural Produce & Natural Orchard Items",
            "Sweet Orchard Produce Items, Edible Botanical Fruit Varieties & Agricultural Crops",
            "Agricultural Fruit Items, Edible Botanical Crop Varieties & Sweet Orchard Produce"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "LION", "TIGER", "BEAR", "ELEPHANT", "GIRAFFE", "ZEBRA", "MONKEY", "GORILLA", "CHIMPANZEE", "KANGAROO",
            "KOALA", "PANDA", "LEOPARD", "CHEETAH", "WOLF", "FOX", "DEER", "MOOSE", "ELK", "RABBIT",
            "SQUIRREL", "BEAVER", "OTTER", "BADGER", "RACCOON", "OPOSSUM", "SKUNK", "HEDGEHOG", "BAT", "WHALE",
            "DOLPHIN", "SEAL", "WALRUS", "MANATEE", "HIPPOPOTAMUS", "RHINOCEROS", "CAMEL", "LLAMA", "ALPACA", "DONKEY",
            "HORSE", "ZEBRA_FAUNA", "COW", "PIG", "SHEEP", "GOAT", "CHICKEN", "TURKEY", "DUCK", "GOOSE",
            "EAGLE", "HAWK", "OWL", "FALCON", "PENGUIN", "OSTRICH", "FLAMINGO", "SWAN", "PEACOCK", "PARROT"
        ],
        imposterWords: [
            "APPLE", "BANANA", "ORANGE", "STRAWBERRY", "BLUEBERRY", "RASPBERRY", "BLACKBERRY", "GRAPE", "WATERMELON", "CANTALOUPE",
            "HONEYDEW", "PINEAPPLE", "MANGO", "PAPAYA", "PEACH", "PEAR", "PLUM", "CHERRY", "APRICOT", "NECTARINE",
            "KIWI", "AVOCADO", "POMEGRANATE", "FIG", "DATE", "COCONUT", "LEMON", "LIME", "GRAPEFRUIT", "TANGERINE",
            "GUAVA", "PASSIONFRUIT", "DRAGONFRUIT", "LYCHEE", "PERSIMMON", "CRANBERRY", "GOOSEBERRY", "CURRANT", "ELDERBERRY", "MULBERRY"
        ]
    },

    {
        id: "general_household_tools_vs_kitchen_utensils",
        _innocentHints: [
            "Manual Workshop Tools, Hardware Construction Gear & Structural Repair Equipment",
            "Mechanical Hardware Tools, Manual Construction Implements & Repair Equipment",
            "Structural Repair Equipment, Manual Mechanical Hardware Tools & Construction Gear",
            "Manual Workshop Implements, Structural Construction Hardware & Repair Tools",
            "Mechanical Repair Equipment, Construction Workshop Implements & Manual Tools"
        ],
        _imposterHints: [
            "Culinary Kitchen Utensils, Food Preparation Gadgets & Dining Tableware Accessories",
            "Culinary Meal Prep Tools, Kitchen Tableware Accessories & Dining Cookware Gadgets",
            "Dining Table Utensils, Kitchen Cooking Accessories & Food Preparation Implements",
            "Culinary Food Preparation Utensils, Kitchen Cookware Items & Tableware Gadgets",
            "Kitchen Cookware Accessories, Culinary Meal Prep Utensils & Tableware Items"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "HAMMER", "SCREWDRIVER", "PLIERS", "WRENCH", "SAW", "DRILL", "CHISEL", "LEVEL", "TAPE_MEASURE", "CROWBAR",
            "MALLET", "SANDPAPER", "UTILITY_KNIFE", "VISE", "CLAMP", "FILE", "RASP", "PLANE", "BOLT_CUTTER", "WIRE_STRIPPER",
            "HACKSAW", "SOCKET_WRENCH", "ALLEN_WRENCH", "TORCH", "SOLDERING_IRON", "STAPLE_GUN", "ANVIL", "PUTTY_KNIFE", "SCRAPER", "AWL",
            "TOOLBOX", "WORKBENCH", "NAIL_PULLER", "PUNCH", "DIE_TOOL", "TAP_TOOL", "RIVETER", "GRINDER", "SANDER", "ROUTER_TOOL",
            "SPANNER", "PIPE_WRENCH", "MONKEY_WRENCH", "VICE_GRIPS", "NEEDLENOSE_PLIERS", "WIRE_CUTTER", "BOX_CUTTER", "PRUNING_SHEARS", "TROWEL", "LADDER"
        ],
        imposterWords: [
            "SPATULA", "WHISK", "LADLE", "TONGS", "PEELER", "GRATER", "STRAINER", "COLANDER", "ROLLING_PIN", "MEASURING_CUP",
            "MEASURING_SPOON", "CHEF_KNIFE", "PARING_KNIFE", "BREAD_KNIFE", "CLEAVER", "MEAT_TENDERIZER", "GARLIC_PRESS", "CAN_OPENER", "BOTTLE_OPENER", "CORKSCREW",
            "CORK_PULLER", "EGG_SEPARATOR", "PASTRY_BRUSH", "SIFTER", "FUNNEL", "SALAD_SPINNER", "THERMOMETER", "TIMER_KITCHEN", "ICE_CREAM_SCOOP", "POT_HOLDER",
            "OVEN_MITT", "CUTTING_BOARD", "MIXING_BOWL", "SAUCEPAN", "FRYING_PAN", "SKILLET", "STOCKPOT", "BAKING_SHEET", "CASSEROLE_DISH", "ROASTING_PAN"
        ]
    },

    {
        id: "general_clothing_items_vs_office_supplies",
        _innocentHints: [
            "Wearable Garment Attire, Fabric Apparel Wardrobe & Textile Fashion Bodywear",
            "Textile Fashion Wardrobe, Wearable Fabric Apparel & Body Garments",
            "Body Apparel Attire, Textile Garment Fashion Items & Wearable Wardrobe",
            "Wearable Textile Fashion Items, Fabric Body Wardrobe & Apparel Garments",
            "Fabric Wardrobe Attire, Wearable Body Apparel & Textile Fashion Garments"
        ],
        _imposterHints: [
            "Stationery Desk Supplies, Commercial Corporate Stationery & Paperwork Organization Gear",
            "Commercial Office Workspace Tools, Desk Stationery Accessories & Document Infrastructure",
            "Document Infrastructure Items, Commercial Workspace Tools & Desk Stationery Accessories",
            "Corporate Stationery Desk Items, Document Infrastructure & Workspace Tools",
            "Desk Stationery Infrastructure, Corporate Office Accessories & Paperwork Tools"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SHIRT", "T_SHIRT", "PANTS", "JEANS", "TROUSERS", "SHORTS", "SKIRT", "DRESS", "SUIT", "JACKET",
            "COAT", "SWEATER", "HOODIE", "CARDIGAN", "VEST", "BLOUSE", "TANK_TOP", "SWEATSHIRT", "SWEATPANTS", "LEGGINGS",
            "PAJAMAS", "ROBE", "UNDERWEAR", "SOCKS", "STOCKINGS", "TIGHTS", "SHOES", "BOOTS", "SNEAKERS", "SANDALS",
            "SLIPPERS", "HAT", "CAP", "BEANIE", "BERET", "SCARF", "GLOVES", "MITTENS", "BELT", "TIE",
            "BOWTIE", "SUSPENDERS", "HANDBAG", "BACKPACK", "WALLET", "PURSE", "UMBRELLA", "RAINCOAT", "OVERALLS", "BLAZER"
        ],
        imposterWords: [
            "STAPLER", "PAPERCLIP", "PUNCHER", "SCISSORS", "TAPE_DISPENSER", "NOTEPAD", "BINDER", "FOLDER", "ENVELOPE", "STAMP",
            "INK_PAD", "HIGHLIGHTER", "MARKER", "PEN", "PENCIL", "ERASER", "SHARPENER", "RULER", "CLIPBOARD", "WHITEBOARD",
            "CORKBOARD", "THUMBTACK", "PUSH_PIN", "RUBBER_BAND", "LEGAL_PAD", "NOTEBOOK", "JOURNAL", "CALENDAR", "PLANNER", "DESK_ORGANIZER",
            "LETTER_OPENER", "PAPER_SHREDDER", "CALCULATOR", "IN_TRAY", "OUT_TRAY", "FILE_CABINET", "INDEX_CARD", "STICKY_NOTE", "GLUE_STICK", "LIQUID_PAPER"
        ]
    },

    {
        id: "general_musical_instruments_vs_sports_equipment",
        _innocentHints: [
            "Acoustic Musical Instruments, Orchestral Audio Hardware & Sonic Equipment",
            "Orchestral Melody Apparatuses, Acoustic Audio Instruments & Sonic Apparatus",
            "Acoustic Melody Harps, Orchestral Audio Devices & Sonic Instruments",
            "Acoustic Sonic Apparatuses, Orchestral Musical Instruments & Melody Frameworks",
            "Orchestral Audio Performance Hardware, Acoustic Instruments & Sonic Frameworks"
        ],
        _imposterHints: [
            "Athletic Sports Training Gear, Gymnasium Game Accessories & Physical Match Hardware",
            "Physical Game Hardware Accessories, Athletic Sports Training Gear & Match Materials",
            "Athletic Gymnasium Training Apparatus, Physical Match Equipment & Sports Gear",
            "Physical Match Materials, Athletic Gymnasium Hardware & Sports Training Equipment",
            "Athletic Training Gear Accessories, Gymnasium Game Equipment & Physical Match Items"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "PIANO", "GUITAR", "VIOLIN", "CELLO", "FLUTE", "CLARINET", "TRUMPET", "TROMBONE", "SAXOPHONE", "DRUM_KIT",
            "HARP", "ACCORDION", "HARMONICA", "UKULELE", "BANJO", "MANDOLIN", "XLYOPHONE", "MARIMBA", "GLOCKENSPIEL", "TAMBOURINE",
            "CYMBALS", "TRIANGLE_AUDIO", "GONG", "ORGAN", "SYNTHESIZER", "BAGPIPES", "OBOE", "BASSOON", "FRENCH_HORN", "TUBA",
            "RECORDER", "PICCOLO", "VIOLA", "DOUBLE_BASS", "LUTE", "SITAR", "TABLA", "BONGO_DRUMS", "CONGA_DRUMS", "SNARE_DRUM",
            "BASS_DRUM", "CHIMES", "COWBELL", "CASTANETS", "THEREMIN", "MELODICA", "FIDDLE", "HARPSICHORD", "CLAVICHORD", "PAN_FLUTE"
        ],
        imposterWords: [
            "FOOTBALL", "BASKETBALL", "BASEBALL", "SOCCER_BALL", "TENNIS_RACKET", "GOLF_CLUB", "CRICKET_BAT", "HOCKEY_STICK", "RUGBY_BALL", "VOLLEYBALL",
            "BADMINTON_SHUTTLE", "PING_PONG_PADDLE", "BILLIARD_CUE", "BOWLING_BALL", "BOXING_GLOVES", "PUNCHING_BAG", "DUMBBELL", "BARBELL", "KETTLEBELL", "MEDICINE_BALL",
            "YOGA_MAT", "JUMP_ROPE", "SKATEBOARD", "ROLLER_BLADES", "ICE_SKATES", "SKI_POLES", "SNOWBOARD", "SURFBOARD", "WAKEBOARD", "PADDLEBOARD",
            "KAYAK_PADDLE", "ROWING_OAR", "HELMET", "SHIN_GUARDS", "KNEE_PADS", "ELBOW_PADS", "MOUTHGUARD", "BASEBALL_GLOVE", "CRICKET_PADS", "GOALIE_GLOVES"
        ]
    },

    {
        id: "general_vehicles_vs_indoor_furniture",
        _innocentHints: [
            "Mechanical Transport Vehicles, Logistics Machine Transit Engines & Mobile Craft",
            "Logistics Transit Engines, Mechanical Passenger Vehicles & Mobile Craft Formats",
            "Mobile Craft Transit Formats, Mechanical Logistics Vehicles & Transport Engines",
            "Mechanical Transit Engines, Mobile Transportation Craft & Logistic Passenger Vehicles",
            "Logistic Transportation Craft, Mechanical Transit Engines & Passenger Vehicles"
        ],
        _imposterHints: [
            "Residential Architectural Furniture, Indoor Home Structural Furnishings & Decor Pieces",
            "Indoor Home Decor Furnishings, Residential Structural Furniture & Room Pieces",
            "Residential Room Infrastructure Furnishings, Indoor Structural Furniture & House Pieces",
            "Indoor Structural Home Furniture, Residential Room Infrastructure & Decor Pieces",
            "Residential Home Decor Pieces, Indoor Structural Furnishings & Room Furniture"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SEDAN", "COUPE", "SUV", "TRUCK", "VAN", "MINIVAN", "CONVERTIBLE", "HATCHBACK", "STATION_WAGON", "PICKUP_TRUCK",
            "MOTORCYCLE", "SCOOTER", "BICYCLE", "MOPED", "BUS", "TRAIN", "SUBWAY_CAR", "TRAM", "TROLLEY", "CABLE_CAR",
            "AIRPLANE", "HELICOPTER", "JET_PLANE", "PROPELLER_PLANE", "GLIDER", "HOT_AIR_BALLOON", "ZEPPELIN", "ROCKET", "SPACESHIP", "SPACE_SHUTTLE",
            "BOAT", "SHIP", "YACHT", "FERRY", "SUBMARINE", "CRUISE_LINER", "CARGO_SHIP", "SAILBOAT", "SPEEDBOAT", "CANOE",
            "KAYAK", "RAFT", "AMBULANCE", "FIRE_ENGINE", "POLICE_CAR", "TAXI", "TRACTOR", "BULLDOZER", "FORKLIFT", "GOLF_CART"
        ],
        imposterWords: [
            "SOFA", "ARMCHAIR", "RECLINER", "LOVE_SEAT", "COUCH", "OTTOMAN", "COFFEE_TABLE", "END_TABLE", "SIDEBOARD", "BOOKCASE",
            "SHELVING_UNIT", "TELEVISION_STAND", "DINING_TABLE", "DINING_CHAIR", "BAR_STOOL", "BUFFET_TABLE", "BED_FRAME", "MATTRESS", "NIGHTSTAND", "DRESSER",
            "WARDROBE", "CHEST_OF_DRAWERS", "VANITY_TABLE", "DESK", "OFFICE_CHAIR", "FILING_CABINET", "CHAISE_LOUNGE", "FUTON", "DAYBED", "BUNK_BED",
            "CRIB", "CHANGING_TABLE", "HIGH_CHAIR", "COAT_RACK", "SHOE_RACK", "UMBRELLA_STAND", "MIRROR_FRAME", "ROOM_DIVIDER", "CREDENZA", "HUTCH"
        ]
    },


    // ==========================================
    // SECTION 3: COMMON NICHE CATEGORIES (5)
    // High-potency contextual overlaps
    // ==========================================

    {
        id: "niche_camping_gear_vs_survival_bugout_bags",
        _innocentHints: [
            "Recreational Wilderness Camping Gear, Backcountry Outdooring Hardware & Trail Equipment",
            "Standard Backcountry Camping Equipment, Recreational Outdoor Hardware & Trail Utilities",
            "Recreational Trail Equipment, Backcountry Outdooring Gear & Wilderness Utilities",
            "Wilderness Camp Outfitting Hardware, Recreational Trail Gear & Outdooring Items",
            "Recreational Wilderness Outfitting Gear, Trail Hardware & Camp Utilities"
        ],
        _imposterHints: [
            "Emergency Bug-Out Bag Survival Assets, Disaster SHTF Hardware & Tactical Prep Kit Items",
            "Tactical Survival Prep Gear, Emergency Disaster Bug-Out Kit Items & SHTF Utilities",
            "Disaster Survival Kit Hardware, Tactical Bug-Out Bag Assets & Emergency SHTF Prep Gear",
            "Emergency SHTF Disaster Kit items, Tactical Bug-Out Bag Hardware & Survival Utilities",
            "Tactical Disaster SHTF Kit items, Emergency Survival Bag Hardware & Bugout Assets"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "SLEEPING_BAG", "CAMPING_TENT", "AIR_MATTRESS", "CAMP_STOVE", "PROPANE_CANISTER", "LANTERN", "HEADLAMP", "COOLER_BOX", "ROPE_CORD", "CARABINER",
            "TREKKING_POLE", "WATER_JUG", "SLEEPING_PAD", "CAMP_CHAIR", "FOLDING_TABLE", "BUG_SPRAY", "SUNSCREEN", "HAMMOCK", "TARP_SHEET", "MATCHES",
            "PILLOW_TRAVEL", "UTENSIL_KIT", "MESS_KIT", "CANOPY_SHELTER", "ROASTING_STICK", "GEAR_REPAIR_TAPE", "DUFFEL_BAG", "THERMAL_FLASK"
        ],
        imposterWords: [
            "FERRO_ROD", "LIFE_STRAW", "PARACORD_550", "MRE_RATION", "TACTICAL_KNIFE", "SPACE_BLANKET", "FIRST_AID_KIT", "WATER_PURIFIER_TABLETS", "HAND_CRANK_RADIO", "SIGNAL_MIRROR",
            "COMPASS_DIAL", "FIRE_STEEL", "TOURNIQUET", "GAS_MASK", "MULTITOOL", "GLOW_STICKS", "DUUST_MASK", "PONCHO_SHELTER", "AMMO_CAN", "BUG_OUT_PACK"
        ]
    },

    {
        id: "niche_gym_exercises_vs_physical_therapy_stretches",
        _innocentHints: [
            "Weightlifting Gym Exercises, Bodybuilding Hypertrophy Movements & Resistance Conditioning",
            "Strength Training Gymnasium Exercises, Resistance Hypertrophy Movements & Muscle Conditioning",
            "Fitness Resistance Movements, Weightlifting Gym Exercises & Muscle Conditioning Sets",
            "Weightlifting Strength Training Exercises, Gymnasium Hypertrophy Movements & Gym Sets",
            "Gymnasium Strength Movements, Weightlifting Hypertrophy Exercises & Training Sets"
        ],
        _imposterHints: [
            "Clinical Physical Therapy Stretches, Injury Rehabilitation Protocols & Mobility Exercises",
            "Injury Rehabilitation Treatment Stretches, Clinical Physical Therapy Movements & Joint Mobility",
            "Clinical Injury Recovery Stretches, Physical Therapy Rehabilitation Protocols & Mobility Systematics",
            "Physical Therapy Mobility Movements, Clinical Injury Rehab Stretches & Joint Therapy",
            "Clinical Joint Therapy Stretches, Physical Rehabilitation Movements & Injury Rehab Protocols"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "BENCH_PRESS", "DEADLIFT_PULL", "SQUAT_BARBELL", "OVERHEAD_PRESS", "BARBELL_ROW", "BICEP_CURL", "TRICEP_PUSHDOWN", "LAT_PULLDOWN", "LEG_PRESS", "LEG_EXTENSION",
            "HAMSTRING_CURL", "CALF_RAISE", "CHEST_FLY", "LATERAL_RAISE", "SHOULDER_SHRUG", "DIP_STRENGTH", "PULLUP", "CHINUP", "PUSHUP", "DUMBBELL_LUNGE",
            "LEG_CURL", "PREACHER_CURL", "SKULL_CRUSHER", "FRONT_SQUAT", "HACK_SQUAT", "CABLE_CROSSOVER", "INCLINE_PRESS", "DECLINE_PRESS"
        ],
        imposterWords: [
            "FOAM_ROLLING", "CAT_COW_STRETCH", "CHILD_POSE", "PASSIVE_HAMSTRING_STRETCH", "SCAPULAR_RETRATION", "PELVIC_TILT", "GLUTE_BRIDGE", "CLAMSHELL_EXERCISE", "WALL_SLIDE", "CHIN_TUCK",
            "DOORWAY_CHEST_STRETCH", "PIRIFORMIS_STRETCH", "COBRA_STRETCH", "BIRD_DOG_POSE", "BANDED_EXTERNAL_ROTATION", "NERVE_GLIDE", "SPINAL_TWIST", "KNEE_TO_CHEST", "PATELLAR_MOBILIZATION", "CALF_STRETCH_PT"
        ]
    },

    {
        id: "niche_barista_tools_vs_wine_sommelier_gear",
        _innocentHints: [
            "Specialty Espresso Barista Instruments, Coffee Bar Hardware & Brew Extraction Gear",
            "Specialty Coffee Barista Hardware, Espresso Extraction Instruments & Café Brewing Tools",
            "Espresso Extraction Crafting Instruments, Specialty Barista Tools & Coffee House Equipment",
            "Specialty Espresso Brewing Gear, Coffee Barista Hardware & Cafe Extraction Tools",
            "Coffee House Extraction Equipment, Specialty Barista Instruments & Espresso Brewing Gear"
        ],
        _imposterHints: [
            "Fine Wine Sommelier Equipment, Vineyard Cellar Utensils & Bottle Serving Hardware",
            "Fine Wine Serving Utensils, Vineyard Sommelier Equipment & Hospitality Bottle Tools",
            "Sommelier Vineyard Serving Equipment, Fine Wine Bottle Utensils & Cellar Tools",
            "Fine Wine Bottle Decanting Utensils, Vineyard Sommelier Equipment & Cellar Serving Tools",
            "Vineyard Cellar Serving Tools, Fine Wine Sommelier Equipment & Bottle Decanting Accessories"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "PORTAFILTER", "ESPRESSO_TAMPER", "MILK_PITCHER", "DISTRIBUTION_TOOL", "COFFEE_SCALE", "GOOSENECK_KETTLE", "KNOCK_BOX", "BURR_GRINDER", "SHOT_GLASS", "STEAM_WAND",
            "BLIND_BASKET", "PUCK_SCREEN", "DOSING_RING", "WDT_TOOL", "COFFEE_REFRACTOMETER", "CLEANING_BRUSH_GROUPHEAD", "LATTE_ART_PEN", "DRIP_TRAY", "FROTHING_THERMOMETER", "TAMPING_MAT"
        ],
        imposterWords: [
            "WINE_OPENER_WAITER", "DECANTER_FLASK", "AERATOR_SPOUT", "WINE_PRESERVER_PUMP", "FOIL_CUTTER", "CHILLING_SLEEVE", "ICE_BUCKET", "SOMMELIER_TREATMENT_TRAY", "BOTTLE_STOPPER", "WINE_CRADLE",
            "CELLAR_THERMOMETER", "DRIP_RING", "TASTING_GLASS", "SPIRE_CORK_SCREW", "TARTAR_FILTER", "CHAMPAGNE_SABER", "STEMWARE_RACK", "POURER_DISPENSER"
        ]
    },

    {
        id: "niche_baking_ingredients_vs_soap_making_chemicals",
        _innocentHints: [
            "Pastry Baking Ingredients, Culinary Flour Confectionery Items & Kitchen Pantry Raw Foodstuffs",
            "Culinary Flour Confectionery Materials, Pastry Baking Foodstuffs & Kitchen Pantry Staples",
            "Kitchen Pantry Confectionery Staples, Pastry Baking Raw Materials & Culinary Ingredients",
            "Pastry Baking Raw Materials, Culinary Confectionery Foodstuffs & Kitchen Pantry Items",
            "Culinary Confectionery Kitchen Materials, Pastry Baking Staples & Pantry Raw Foodstuffs"
        ],
        _imposterHints: [
            "Artisan Soap-Making Chemicals, Saponification Raw Materials & Cold-Process Lye Alkalies",
            "Artisan Cosmetic Saponification Chemicals, Cold-Process Soap Compounds & Lye Bases",
            "Cold-Process Soap Compounding Materials, Artisan Saponification Chemicals & Cosmetic Elements",
            "Artisan Soap Compounding Bases, Saponification Raw Compounds & Cosmetic Chemical Materials",
            "Cosmetic Saponification Elements, Cold-Process Soap Compounds & Artisan Chemical Materials"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "ALL_PURPOSE_FLOUR", "BAKING_POWDER", "BAKING_SODA", "GRANULATED_SUGAR", "BROWN_SUGAR", "POWDERED_SUGAR", "UNSALTED_BUTTER", "VANILLA_EXTRACT", "HEAVY_CREAM", "YEAST_PACKET",
            "CORN_STARCH", "CREAM_OF_TARTAR", "COCOA_POWDER", "CHOCOLATE_CHIPS", "ALMOND_FLOUR", "SHREDDED_COCONUT", "MOLASSES_SYRUP", "MAPLE_EXTRACT", "SHORTENING", "GELATIN_POWDER"
        ],
        imposterWords: [
            "SODIUM_HYDROXIDE_LYE", "POTASSIUM_HYDROXIDE", "SOCI_BASE", "GLYCERIN_LIQUID", "COCONUT_OIL_BASE", "SHEA_BUTTER_RAW", "ESSENTIAL_OIL_SCENT", "FRAGRANCE_OIL", "MICA_POWDER_COLOR", "TITANIUM_DIOXIDE",
            "SODIUM_LACTATE", "CASTOR_OIL_SAP", "PALM_OIL_SUSTAINABLE", "SWEET_ALMOND_OIL", "JOJOBA_OIL_COSMETIC", "LYE_WATER_SOLUTION", "CITRIC_ACID_SOAP", "POLYSORBATE_80"
        ]
    },

    {
        id: "niche_gardening_tools_vs_carpentry_handtools",
        _innocentHints: [
            "Horticultural Gardening Implements, Backyard Cultivation Infrastructure & Landscaping Hardware",
            "Backyard Soil Cultivation Handtools, Horticultural Landscaping Implements & Gardening Gear",
            "Horticultural Landscaping Utilities, Backyard Cultivation Handtools & Gardening Gear",
            "Backyard Soil Shovels, Horticultural Gardening Hardware & Landscaping Implements",
            "Horticultural Yard Gear, Backyard Soil Cultivation Handtools & Landscaping Items"
        ],
        _imposterHints: [
            "Woodworking Carpentry Hand-Tools, Joinery Bench Mechanisms & Artisan Timber Planers",
            "Artisan Timber Construction Tools, Woodworking Carpentry Implements & Joinery Hardware",
            "Woodworking Hand Carpentry Implements, Artisan Joinery Tools & Timber Hardware",
            "Artisan Timber Bench Tools, Woodworking Carpentry Hand Implements & Joinery Gear",
            "Woodworking Bench Joinery Implements, Artisan Timber Construction Gear & Carpentry Tools"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "PRUNING_SHEARS", "GARDEN_TROWEL", "SOIL_RAKE", "WHEELBARROW", "WEEDER_TOOL", "SPADING_FORK", "LOOPERS", "GARDEN_HOSE", "WATERING_CAN", "HEDGE_TRIMMER",
            "LAWN_AERATOR", "SEED_SOWER", "BULB_PLANTER", "DIGGING_SHOVEL", "PRUNING_SAW", "GRASS_SHEARS", "DANDELION_DIGGER", "SOIL_SIFTER", "GARDEN_MAT", "GRAFTING_KNIFE"
        ],
        imposterWords: [
            "BLOCK_PLANE", "WOOD_CHISEL", "BACK_SAW", "BLOCK_SQUARE", "MARKING_GAUGE", "COPING_SAW", "SPOKESHAVE", "DRAW_KNIFE", "MALLET_WOOD", "MITER_BOX",
            "CARPENTERS_RULE", "AWL_SCRIBE", "RASP_FILE", "CARD_SCRAPER", "BEVEL_EDGE", "JOINER_PLANE", "MORTISE_GAUGE", "BENCH_DOG_CLAMP"
        ]
    },

    // Append these 20 categories cleanly inside your window.SYNAPSE_MATRIX_POOL array in words.js

    // =========================================================================
    // SECTION 1: PROPER NOUN CATEGORIES (1 TO 10)
    // =========================================================================

    {
        id: "mcdonalds_vs_starbucks",
        _innocentHints: [
            "McDonald's Fast Food Menu Items, Iconic Branding Names & Classic Drive-Thru Orders",
            "Golden Arches Fast Food Orders, Classic Value Menu Selections & Iconic Branding",
            "McDonald's Fast Food Network, Classic Menu Items & Branded Franchise Orders"
        ],
        _imposterHints: [
            "Starbucks Specialty Coffee Orders, Café Beverage Nomenclature & Branded Menu Items",
            "Starbucks Espresso Bar Menu Items, Specialty Café Orders & Branded Coffee Customizations",
            "Starbucks Coffeehouse Franchise Orders, Branded Drink Variants & Café Menu Items"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "BIG_MAC", "QUARTER_POUNDER", "MCNUGGETS", "EGG_MCMUFFIN", "FILET_O_FISH", "MCFLURRY", "HAPPY_MEAL", "APPLE_PIE", "MCDOUBLE", "MCCHICKEN"
        ],
        imposterWords: [
            "FRAPPUCCINO", "CARAMEL_MACCHIATO", "PUMPKIN_SPICE_LATTE", "CAFE_MOCHA", "PINK_DRINK", "CAFE_AMERICANO", "NITRO_COLD_BREW", "FLAT_WHITE", "CAFE_LATTE", "CHAI_TEA_LATTE"
        ]
    },

    {
        id: "marvel_vs_dc_universes",
        _innocentHints: [
            "Marvel Comics Superheroes, Cinematic Universe Characters & Avengers Team Members",
            "Marvel Universe Comic Book Heroes, Avengers Alliance Profiles & Iconic Characters",
            "Marvel Entertainment Superhero Characters, Cinematic Universe Intellectual Property"
        ],
        _imposterHints: [
            "DC Comics Superheroes, Justice League Characters & Iconic Comic Book Profiles",
            "DC Multiverse Comic Book Heroes, Justice League Core Members & Dynamic Icons",
            "DC Entertainment Superhero Identities, Justice League Legacy Entities & Intellectual Property"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "IRON_MAN", "SPIDER_MAN", "THOR_ODINSON", "CAPTAIN_AMERICA", "BLACK_WIDOW", "INCREDIBLE_HULK", "BLACK_PANTHER", "DOCTOR_STRANGE", "WOLVERINE", "DEADPOOL"
        ],
        imposterWords: [
            "SUPERMAN", "BATMAN", "WONDER_WOMAN", "THE_FLASH", "GREEN_LANTERN", "AQUAMAN", "CYBORG", "MARTIAN_MANHUNTER", "GREEN_ARROW", "NIGHTWING"
        ]
    },

    {
        id: "ikea_vs_lego_branding",
        _innocentHints: [
            "IKEA Corporate Furniture Systems, Swedish Retail Product Catalogs & Assembly Names",
            "IKEA Scandinavian Ready-To-Assemble Products, Home Furnishing Collections & Retail Lines",
            "IKEA Swedish Home Goods Collections, Corporate Furniture Catalogs & Modular Designs"
        ],
        _imposterHints: [
            "LEGO Building Toy Sets, Branded Brick Architecture Themes & Iconic Play Sets",
            "LEGO System Brick Product Lines, Branded Construction Toy Themes & Plastic Building Sets",
            "LEGO Danish Creative Toy Franchises, Branded Architecture Series & Brick Toy Themes"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "BILLY_BOOKCASE", "KALLAX_SHELVING", "MALM_BEDFRAME", "POANG_CHAIR", "HEMNES_DRESSER", "LACK_TABLE", "TROFAST_STORAGE", "PAX_WARDROBE", "MICKE_DESK", "STRANDMON_ARMCHAIR"
        ],
        imposterWords: [
            "LEGO_CITY", "LEGO_TECHNIC", "LEGO_NINJAGO", "LEGO_STAR_WARS", "LEGO_MINDSTORMS", "LEGO_BIONICLE", "LEGO_CREATOR", "LEGO_ARCHITECTURE", "LEGO_DUPLO", "LEGO_FRIENDS"
        ]
    },

    {
        id: "disney_vs_ghibli_studios",
        _innocentHints: [
            "Walt Disney Animation Studios Films, Classic Animated Features & Cinematic Classics",
            "Disney Corporate Animated Film Library, Classic Cinematic Masterpieces & Features",
            "Walt Disney Pictures Animated Universe, Classic Cinematic Features & Folklore Adapts"
        ],
        _imposterHints: [
            "Studio Ghibli Animated Movies, Japanese Cinematic Masterpieces & Anime Feature Film Names",
            "Studio Ghibli Japanese Cinema Masterpieces, Hayao Miyazaki Feature Animations & Titles",
            "Studio Ghibli Fine Art Anime Productions, Japanese Hand-Drawn Cinematic Masterpieces"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "THE_LION_KING", "BEAUTY_AND_THE_BEAST", "CINDERELLA", "ALADDIN", "THE_LITTLE_MERMAID", "FROZEN", "SNOW_WHITE", "SLEEPING_BEAUTY", "MULAN", "PETER_PAN"
        ],
        imposterWords: [
            "SPIRITED_AWAY", "MY_NEIGHBOR_TOTORO", "PRINCESS_MONONOKE", "HOWLS_MOVING_CASTLE", "CASTLE_IN_THE_SKY", "PONYO", "KIKIS_DELIVERY_SERVICE", "GRAVE_OF_THE_FIREFLIES", "THE_WIND_RISES", "NAUSICAA"
        ]
    },

    {
        id: "apple_vs_microsoft_software",
        _innocentHints: [
            "Apple Proprietary Desktop Applications, macOS Native Software Ecosystems & Ecosystem Tools",
            "Apple macOS Ecosystem Applications, Native Software Platforms & Developer Framework Tools",
            "Apple Desktop Operating System Ecosystems, Native Applications & Software Suites"
        ],
        _imposterHints: [
            "Microsoft Windows Core Applications, Enterprise Software Ecosystems & Office Tool Suites",
            "Microsoft Windows System Applications, Corporate Enterprise Software Ecosystem Suites & Tools",
            "Microsoft Core Operating System Frameworks, Office Business Application Suites & Utilities"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "SAFARI_BROWSER", "FINAL_CUT_PRO", "GARAGEBAND", "LOGIC_PRO", "IMOVIE", "TIME_MACHINE_BACKUP", "FINDER_APP", "KEYNOTE_PRESENTATION", "PAGES_DOCUMENT", "NUMBERS_SPREADSHEET"
        ],
        imposterWords: [
            "MICROSOFT_WORD", "MICROSOFT_EXCEL", "MICROSOFT_POWERPOINT", "MICROSOFT_OUTLOOK", "MICROSOFT_TEAMS", "WINDOWS_EXPLORER", "INTERNET_EXPLORER", "MICROSOFT_EDGE", "WINDOWS_MEDIA_PLAYER", "NOTEPAD_WINDOWS"
        ]
    },

    {
        id: "pokemon_vs_digimon_franchises",
        _innocentHints: [
            "Nintendo Pokémon Generation 1 Iconic Creatures, Pokédex Media Database Entries & Species",
            "Nintendo Pocket Monster Fantasy Species, Video Game Creature Identities & Pokédex Icons",
            "Nintendo Handheld Gaming Fantasy Species, Classic Pokédex Collectible Creature Profiles"
        ],
        _imposterHints: [
            "Bandai Digimon Classic Virtual Creatures, Digital World Anime Entities & Monster Forms",
            "Bandai Digital Monster Anime Profiles, Cybernetic Virtual Entities & Evolutionary Lines",
            "Bandai Virtual pet Multimedia Franchises, Cybernetic Digital World Entities & Profiles"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "PIKACHU", "CHARIZARD", "BLASTOISE", "VENUSAUR", "MEWTWO", "GENGAR", "SNORLAX", "EEVEE", "JIGGLYPUFF", "ALAKAZAM"
        ],
        imposterWords: [
            "AGUMON", "GABUMON", "PATAMON", "WARGREYMON", "METALGARURUMON", "ANGEMON", "DEVIMON", "RENAMON", "GUILMON", "TAILMON"
        ]
    },

    {
        id: "star_wars_vs_star_trek",
        _innocentHints: [
            "Star Wars Space Fantasy Characters, Iconic Cinematic Identities & Galactic Lore",
            "Star Wars Cinematic Universe Characters, Lucasfilm Intellectual Property & Icons",
            "Star Wars Space Opera Saga Identities, Galactic Republic & Empire Cultural Lore Profiles"
        ],
        _imposterHints: [
            "Star Trek Science Fiction Characters, Starfleet Officer Personas & Sci-Fi Television Icons",
            "Star Trek Sci-Fi Television Characters, Paramount Starfleet Personnel & Space Explorers",
            "Star Trek Gene Roddenberry Universe Personas, Federation Starfleet Crew Profiles"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "LUKE_SKYWALKER", "DARTH_VADER", "PRINCESS_LEIA", "HAN_SOLO", "CHEWBACCA", "YODA", "OBI_WAN_KENOBI", "BOBA_FETT", "EMPEROR_PALPATINE", "LANDO_CALRISSIAN"
        ],
        imposterWords: [
            "CAPTAIN_KIRK", "MISTER_SPOCK", "CAPTAIN_PICARD", "COMMANDER_RIKER", "DATA_ANDROID", "LIEUTENANT_WORF", "DOCTOR_MCCOY", "SCOTTY_ENGINEER", "SULU_HELMSMAN", "UHURA_OFFICER"
        ]
    },

    {
        id: "harry_potter_vs_lord_of_the_rings",
        _innocentHints: [
            "Harry Potter Wizarding World Characters, Hogwarts School Staff & Literary Figures",
            "Harry Potter Literary Franchise Personas, Wizarding World Lore & Hogwarts Magic Cast",
            "J.K. Rowling Wizarding Universe Personas, Hogwarts Faculty & Core Magic Literature Cast"
        ],
        _imposterHints: [
            "Lord of the Rings High-Fantasy Characters, Middle-earth Legendarium Figures & Icons",
            "Lord of the Rings J.R.R. Tolkien Literary Legends, Middle-earth Inhabitants & Roles",
            "J.R.R. Tolkien High-Fantasy Legendarium Cast, Fellowship Members & Middle-earth Icons"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "HARRY_POTTER", "HERMIONE_GRANGER", "RON_WEASLEY", "ALBUS_DUMBLEDORE", "SEVERUS_SNAPE", "VOLDEMORT", "RUBEUS_HAGRID", "SIRIUS_BLACK", "DRACO_MALFOY", "MINERVA_MCGONAGALL"
        ],
        imposterWords: [
            "FRODO_BAGGINS", "GANDALF_THE_GREY", "ARAGORN_ELESSAR", "LEGOLAS_GREENLEAF", "GIMLI_GLOIN", "SAMS_WISE_GAMGEE", "GOLLUM_SMEAGOL", "SAURON_DARK_LORD", "SARUMAN_THE_WHITE", "BOROMIR_GONDOUR"
        ]
    },

    {
        id: "super_mario_vs_sonic_hedgehog",
        _innocentHints: [
            "Nintendo Super Mario Franchise Profiles, Mushroom Kingdom Entities & Video Game Cast",
            "Nintendo Corporate Super Mario Characters, Classic Mushroom Kingdom Gaming Legends",
            "Super Mario Interactive Franchise Profiles, Retro Mushroom Kingdom Console Characters"
        ],
        _imposterHints: [
            "SEGA Sonic the Hedgehog Game Characters, Green Hill Zone Icons & Speed Platformer Cast",
            "SEGA Corporate Sonic Platformer Cast, Green Hill Zone Cybernetic & Animal Hero Legends",
            "Sonic the Hedgehog Gaming Franchise Icons, Sega Technical Hardware Mascot Profiles"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "SUPER_MARIO", "LUIGI_MUSHROOM", "PRINCESS_PEACH", "BOWSER_KOOPA", "YOSHI_DINOSAUR", "TOAD_MUSHROOM", "DONKEY_KONG", "WARIO", "WALUIGI", "PRINCESS_DAISY"
        ],
        imposterWords: [
            "SONIC_HEDGEHOG", "TAILS_PROWBER", "KNUCKLES_ECHIDNA", "AMY_ROSE", "SHADOW_HEDGEHOG", "DOCTOR_EGGMAN", "ROUGE_BAT", "SILVER_HEDGEHOG", "BLAZE_CAT", "METAL_SONIC"
        ]
    },

    {
        id: "nike_vs_adidas_footwear",
        _innocentHints: [
            "Nike Corporate Sneaker Designs, Famous Sportswear Shoe Models & Branding Lines",
            "Nike Athletic Footwear Engineering, Famous Consumer Sneaker Models & Brand Iterations",
            "Nike Inc Apparel Engineering Lines, Famous Streetwear Footwear Models & Product Series"
        ],
        _imposterHints: [
            "Adidas Corporate Footwear Lines, Three-Stripe Shoe Models & Apparel Brand Systems",
            "Adidas German Athletic Sneaker Profiles, Classic Three-Stripe Lifestyle Shoe Models",
            "Adidas Apparel Engineering Series, Classic Lifestyle Sneaker Product Designs"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "AIR_FORCE_ONE", "AIR_MAX_NINETY", "AIR_JORDAN_ONE", "NIKE_DUNK_LOW", "NIKE_BLAZER", "AIR_VAPORMAX", "NIKE_CORTEZ", "NIKE_PEGASUS", "NIKE_HUARACHE", "FOAMPOSITE"
        ],
        imposterWords: [
            "ADIDAS_SUPERSTAR", "ADIDAS_STAN_SMITH", "ADIDAS_SAMBA", "ADIDAS_GAZELLE", "ULTRA_BOOST", "NMD_RUNNER", "YEEZY_BOOST_350", "ADIDAS_FORUM", "ADIDAS_CAMPUS", "Y_THREE_SNEAKER"
        ]
    },

    // =========================================================================
    // SECTION 2: HIGHLY GENERALIZED CATEGORIES (~100 WORDS TOTAL) (11 TO 15)
    // =========================================================================

    {
        id: "animals_birds_vs_mammals",
        _innocentHints: [
            "Avian Wildlife Classifications, Biological Bird Species & Global Winged Fauna Ecosystems",
            "Ornithological Biological Profiles, Aviary Specimen Classes & Winged Natural Wildlife",
            "Avian Taxonomy Parameters, Feathered Biological Organisms & Winged Ecological Species"
        ],
        _imposterHints: [
            "Terrestrial Mammalian Wildlife Classifications, Biological Mammal Species & Land Fauna",
            "Mammalogy Taxonomy Parameters, Land Terrestrial Mammals & Wild Quadruped Animals",
            "Biological Mammalian Taxonomy Profiles, Warm-Blooded Land Creatures & Terrestrial Wildlife"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "EAGLE", "FALCON", "HAWK", "OWL", "SPARROW", "ROBIN", "BLUE_JAY", "CARDINAL", "CROW", "RAVEN",
            "PIGEON", "DOVE", "PARROT", "MACAW", "COCKATOO", "CANARY", "FINCH", "HUMMINGBIRD", "WOODPECKER", "TOUCAN",
            "PELICAN", "ALBATROSS", "SEAGULL", "PENGUIN", "FLAMINGO", "STORK", "HERON", "SWAN", "GOOSE", "DUCK",
            "PEAFOWL", "TURKEY", "CHICKEN", "PHEASANT", "QUAIL", "OSTRICH", "EMU", "KIWI_BIRD", "CASSOWARY", "ROADRUNNER",
            "KINGFISHER", "SWIFT", "SWALLOW", "NIGHTINGALE", "CHICKADEE", "MOCKINGBIRD", "WARBLER", "THRUSH", "VULTURE", "CONDOR"
        ],
        imposterWords: [
            "LION", "TIGER", "LEOPARD", "CHEETAH", "JAGUAR", "ELEPHANT", "RHINOCEROS", "HIPPOPOTAMUS", "GIRAFFE", "ZEBRA",
            "GORILLA", "CHIMPANZEE", "ORANGUTAN", "BABOON", "LEMUR", "KANGAROO", "KOALA", "WOMBAT", "WALLABY", "OPOSSUM",
            "GRIZZLY_BEAR", "POLAR_BEAR", "PANDA_BEAR", "BLACK_BEAR", "SLOTH_BEAR", "WOLF", "COYOTE", "JACKAL", "FOX", "DINGO",
            "DEER", "ELK", "MOOSE", "CARIBOU", "ANTELOPE", "GAZELLE", "BIZON", "BUFFALO", "YAK", "CAMEL",
            "WHALE", "DOLPHIN", "PORPOISE", "SEAL", "SEA_LION", "WALRUS", "MANATEE", "DUGONG", "PLATYPUS", "ECHIDNA"
        ]
    },

    {
        id: "fruits_vs_vegetables",
        _innocentHints: [
            "Angiosperm Plant Seed-Bearing Structures, Botanical Fruit Classifications & Horticultural Produce",
            "Botanical Seed-Bearing Culinary Fruits, Horticultural Edible Produce & Sweet Flora Varieties",
            "Angiosperm Edible Seed Structures, Organic Orchard Harvest Classifications & Fresh Fruit Food"
        ],
        _imposterHints: [
            "Herbaceous Plant Edible Structures, Botanical Vegetable Classifications & Farm Crops",
            "Agricultural Herbaceous Farm Produce, Culinary Savory Vegetables & Edible Root/Leaf Crops",
            "Culinary Vegetative Plant Tissues, Agricultural Field Produce Classes & Savory Farm Yields"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "APPLE", "BANANA", "ORANGE", "STRAWBERRY", "BLUEBERRY", "RASPBERRY", "BLACKBERRY", "CRANBERRY", "GRAPE", "WATERMELON",
            "CANTALOUPE", "HONEYDEW", "PINEAPPLE", "MANGO", "PAPAYA", "PEACH", "PLUM", "CHERRY", "APRICOT", "NECTARINE",
            "PEAR", "KIWIFRUIT", "POMEGRANATE", "GRAPEFRUIT", "LEMON", "LIME", "TANGERINE", "MANDARIN", "AVOCADO", "FIG_FRUIT",
            "DATE_FRUIT", "COCONUT", "PASSIONFRUIT", "DRAGONFRUIT", "GUAVA", "LYCHEE", "PERSIMMON", "BOYSENBERRY", "ELDERBERRY", "MULBERRY"
        ],
        imposterWords: [
            "CARROT", "BROCCOLI", "CAULIFLOWER", "SPINACH", "KALE", "LETTUCE", "CABBAGE", "BRUSSELS_SPROUT", "ASPARAGUS", "CELERY",
            "POTATO", "SWEET_POTATO", "YAM", "TURNIP", "RADISH", "BEETROOT", "PARSNIP", "ONION", "GARLIC", "LEEK",
            "SHALLOT", "CHIVE", "SCALLION", "ZUCCHINI", "CUCUMBER", "EGGPLANT", "PUMPKIN", "BUTTERNUT_SQUASH", "OKRA", "GREEN_BEAN",
            "PEA_POD", "CORN_COB", "ARTICHOKE", "BOK_CHOY", "SWISS_CHARD", "WATERCRESS", "RADICCHIO", "ENDIVE", "FENNEL_BULB", "JICAMA",
            "RUTABAGA", "CASSAVA", "TARO_ROOT", "HORSERADISH", "GINGER_ROOT", "TURMERIC_ROOT", "BAMBOO_SHOOT", "ALFALFA_SPROUT", "FIDDLEHEAD", "KOHLRABI"
        ]
    },

    {
        id: "world_countries_vs_cities",
        _innocentHints: [
            "Sovereign Geopolitical Member States, Autonomous National Territories & Global Country Systems",
            "Global Geopolitical National Jurisdictions, Sovereign Territories & Independent Countries",
            "Sovereign International Geographic States, Autonomous National Boundaries & Territories"
        ],
        _imposterHints: [
            "Global Metropolitan Urban Centers, Municipal Capital Cities & Localized Populations",
            "Global High-Density Urban Centers, Corporate Municipal Municipalities & Major World Cities",
            "Municipal Geographic Urban Areas, Sovereign National Capitals & Densely Populated Locations"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "CANADA", "MEXICO", "BRAZIL", "ARGENTINA", "UNITED_KINGDOM", "FRANCE", "GERMANY", "ITALY", "SPAIN", "PORTUGAL",
            "JAPAN", "CHINA", "INDIA", "SOUTH_KOREA", "AUSTRALIA", "NEW_ZEALAND", "EGYPT", "SOUTH_AFRICA", "NIGERIA", "KENYA",
            "CANADA_TERRITORY", "SWITZERLAND", "NETHERLANDS", "BELGIUM", "SWEDEN", "NORWAY", "DENMARK", "FINLAND", "GREECE", "TURKEY",
            "SAUDI_ARABIA", "UNITED_ARAB_EMIRATES", "THAILAND", "VIETNAM", "INDONESIA", "MALAYSIA", "PHILIPPINES", "SINGAPORE", "COLOMBIA", "CHILE"
        ],
        imposterWords: [
            "NEW_YORK_CITY", "LOS_ANGELES", "CHICAGO", "TORONTO", "LONDON", "PARIS", "BERLIN", "ROME", "MADRID", "TOKYO",
            "BEIJING", "SHANGHAI", "MUMBAI", "NEW_DELHI", "SEOUL", "SYDNEY", "MELBOURNE", "CAIRO", "JOHANNESBURG", "NAIROBI",
            "DUBAI", "BANGKOK", "SINGAPORE_CITY", "JAKARTA", "MANILA", "HONG_KONG", "MOSCOW", "ISTANBUL", "AMSTERDAM", "BRUSSELS",
            "VIENNA", "ZURICH", "GENEVA", "STOCKHOLM", "OSLO", "COPENHAGEN", "HELSINKI", "ATHENS", "DUBLIN", "WARSAW",
            "PRAGUE", "BUDAPEST", "BUENOS_AIRES", "SAO_PAULO", "RIO_DE_JANEIRO", "LIMA", "BOGOTA", "SANTIAGO", "MEXICO_CITY", "HAVANA"
        ]
    },

    {
        id: "musical_instruments_vs_audio_gear",
        _innocentHints: [
            "Acoustic and Orchestral Musical Instruments, Performance Hardware & Sound Generation Tools",
            "Traditional Musical Instruments, Orchestral Acoustic Performance Tools & Sound Equipment",
            "Orchestral Acoustic Instrument Classifications, Manual Sound Generation Tools & Equipment"
        ],
        _imposterHints: [
            "Electronic Audio Studio Gear, Professional Sound Reinforcement Hardware & Studio Modules",
            "Electronic Audio Studio Engineering Hardware, Professional Recording Gear & Sound Modules",
            "Sound Engineering Electronic Hardware, Professional Recording Studio Signal Equipment"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "ACOUSTIC_GUITAR", "ELECTRIC_GUITAR", "BASS_GUITAR", "GRAND_PIANO", "UPRIGHT_PIANO", "SYNTHESIZER", "KEYBOARD_INSTRUMENT", "DRUM_KIT", "SNARE_DRUM", "CYMBAL",
            "VIOLIN", "VIOLA", "CELLO", "DOUBLE_BASS", "HARP", "FLUTE", "CLARINET", "OBOE", "BASSOON", "SAXOPHONE",
            "TRUMPET", "TROMBONE", "FRENCH_HORN", "TUBA", "UKULELE", "MANDOLIN", "BANJO", "ACCORDION", "HARMONICA", "XYLOPHONE",
            "MARIMBA", "GLOCKENSPIEL", "TIMPANI", "TAMBOURINE", "TRIANGLE_INSTRUMENT", "BAGPIPES", "DIDGERIDOO", "SITAR", "TABLA", "BONGO_DRUMS"
        ],
        imposterWords: [
            "MICROPHONE", "STUDIO_MONITORS", "HEADPHONES", "AUDIO_INTERFACE", "MIXING_CONSOLE", "AMPLIFIER", "SUBWOOFER", "EQUALIZER", "COMPRESSOR_GEAR", "PREAMP",
            "DIGITAL_AUDIO_WORKSTATION", "SOUND_CARD", "MIDI_CONTROLLER", "PATCH_BAY", "EFFECTS_PEDAL", "CABLE_XLR", "DI_BOX", "POP_FILTER", "MICROPHONE_STAND", "PHONOGRAPH",
            "TURNTABLE", "DJ_MIXER", "SAMPLER_MODULE", "DRUM_MACHINE_GEAR", "SYNTH_MODULE", "CROSSOVER_GEAR", "LIMITER_PROCESSOR", "NOISE_GATE", "REVERB_UNIT", "DELAY_PEDAL",
            "DIRECT_BOX", "CONDENSER_MIC", "DYNAMIC_MIC", "RIBBON_MIC", "HEADPHONE_AMP", "POWER_CONDITIONER", "SNAKE_CABLE", "MONITOR_ISOLATION_PADS", "AUDIO_RACK", "SPEAKER_CABLE"
        ]
    },

    {
        id: "sports_gear_vs_fitness_equipment",
        _innocentHints: [
            "Traditional Organized Athletic Sports Gear, Ball Game Equipment & Match Accessories",
            "Traditional Organized Team Sports Gear, Field/Court Ball Game Equipment & Accessories",
            "Athletic Competitive Field Sports Gear, Traditional Ball Game Equipment Hardware"
        ],
        _imposterHints: [
            "Gymnasium Strength and Fitness Training Equipment, Conditioning Hardware & Free Weights",
            "Gymnasium Exercise Training Machinery, Indoor Resistance Conditioning Hardware & Weights",
            "Indoor Gymnasium Resistance Training Equipment, Mechanical Strength Conditioning Gear"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "BASEBALL_BAT", "BASEBALL_GLOVE", "BASKETBALL_HOOP", "FOOTBALL_HELMET", "SOCCER_NET", "TENNIS_RACQUET", "GOLF_CLUB", "HOCKEY_STICK", "CRICKET_BAT", "RUGBY_BALL",
            "SHUTTLECOCK", "PING_PONG_PADDLE", "BOWLING_BALL", "BOXING_GLOVES", "SHIN_GUARDS", "MOUTHGUARD", "SKATEBOARD_DECK", "ROLLER_BLADES", "ICE_SKATES", "SKI_POLES",
            "SNOWBOARD_BINDINGS", "SURFBOARD_FIN", "WETSUIT", "SWIMMING_GOGGLES", "ARCHERY_BOW", "CROSSBOW_TARGET", "FENCING_FOIL", "LACROSSE_STICK", "POLO_MALLET", "BADMINTON_NET"
        ],
        imposterWords: [
            "DUMBBELL", "BARBELL", "KETTLEBELL", "WEIGHT_PLATE", "TREADMILL", "ELLIPTICAL_MACHINE", "STATIONARY_BIKE", "ROWING_MACHINE", "SQUAT_RACK", "BENCH_PRESS",
            "PULL_UP_BAR", "RESISTANCE_BAND", "MEDICINE_BALL", "FOAM_ROLLER", "YOGA_MAT", "EXERCISE_BALL", "JUMP_ROPE", "BATTLE_ROPES", "SMITH_MACHINE", "LEG_PRESS_MACHINE",
            "CABLE_CROSSOVER_MACHINE", "LAT_PULLDOWN_BAR", "DIP_STATION", "PUNCHING_BAG", "WEIGHT_VEST", "AB_ROLLER", "CHIN_UP_BAR", "STEP_PLATFORM", "INCLINE_BENCH", "TRICEPS_ROPE",
            "HAND_GRIPPER", "ANKLE_WEIGHTS", "PARALLETTES", "PLYO_BOX", "SUSPENSION_TRAINER", "INVERSION_TABLE", "HEX_BAR", "EZ_CURL_BAR", "MED_BALL_SLAM", "WEIGHT_COLLAR"
        ]
    },

    // =========================================================================
    // SECTION 3: COMMON NICHE TOPICS (16 TO 20)
    // =========================================================================

    {
        id: "board_game_classics_vs_modern",
        _innocentHints: [
            "Traditional Mass-Market Family Board Games, Milton Bradley/Parker Brothers Classics & Layouts",
            "Classic 20th-Century Mass-Market Family Board Games, Milton Bradley Multi-Generational Titles",
            "Traditional Family Board Game Intellectual Property, Classic Parker Brothers Household Titles"
        ],
        _imposterHints: [
            "Modern Designer Eurogames, Hobbyist Tabletop Strategy Board Games & Indie Titles",
            "Modern Hobbyist Tabletop Strategy Board Games, European Designer Eurogames & Titles",
            "Modern Strategy Tabletop Hobby Board Games, European Structural Designer Board Game Classics"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "MONOPOLY", "SCRABBLE", "CLUEDO", "RISK_GAME", "BATTLESHIP_GAME", "SORRY_GAME", "CONNECT_FOUR", "OPERATION_GAME", "THE_GAME_OF_LIFE", "CANDYLAND"
        ],
        imposterWords: [
            "SETTLERS_OF_CATAN", "CARCASSONNE", "TICKET_TO_RIDE", "PANDEMIC_BOARDGAME", "7_WONDERS", "AGRICOLA_GAME", "PUERTO_RICO_GAME", "DOMINION_CARDGAME", "GLOOMHAVEN", "SCYTHE_GAME"
        ]
    },

    {
        id: "coffee_brewing_vs_tea_ceremony",
        _innocentHints: [
            "Specialty Coffee Manual Brewing Methods, Craft Barista Drippers & Extraction Tools",
            "Manual Pour-Over Coffee Brewing Hardware, Craft Coffee Extraction Systems & Tools",
            "Specialty Barista Manual Coffee Extraction Apparatus, Pour-Over Drippers & Gear"
        ],
        _imposterHints: [
            "Traditional Matcha Tea Ceremony Apparatus, Classic Japanese Tea Preparation Utensils",
            "Traditional Japanese Chanoyu Tea Ceremony Ware, Classic Matcha Preparation Utensils",
            "Classical Asian Green Tea Ceremony Hardware, Traditional Matcha Steeping Tools & Wares"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "FRENCH_PRESS", "CHEMEX_BREWER", "AEROPRESS", "V_SIXTY_DRIPPER", "KALITA_WAVE", "SIPHON_BREWER", "MOKA_POT", "ESPRESSO_MACHINE", "COLD_BREW_TOWER", "PERCOLATOR"
        ],
        imposterWords: [
            "CHASEN_WHISK", "CHAWAN_BOWL", "CHASHAKU_SCOOP", "NATSUME_CADDY", "KAMA_KETTLE", "TETSUBIN", "GAIWAN", "YIXING_CLAY_POT", "CHAPAN_TRAY", "TEA_PET"
        ]
    },

    {
        id: "knots_vs_climbing_hardware",
        _innocentHints: [
            "Functional Mechanical Rope Knots, Maritime Sailing Hitches & Cordage Bends",
            "Sailing Cordage Rope Knots, Practical Mechanical Hitches & Structural Bends",
            "Maritime Rigging Rope Knots, Mechanical Structural Hitches & Cordage Loop Layouts"
        ],
        _imposterHints: [
            "Technical Mountaineering Climbing Hardware, Fall-Protection Rigging Gear & Anchor Tools",
            "Technical Rock Climbing Fall-Protection Gear, Alpine Mountaineering Mechanical Rigging",
            "Arborist Mountaineering Fall-Protection Hardware, Rock Climbing Mechanical Rigging Anchors"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "BOWLINE_KNOT", "CLOVE_HITCH", "FIGURE_EIGHT_LOOP", "SQUARE_KNOT", "SHEET_BEND", "TAUT_LINE_HITCH", "TIMBER_HITCH", "SHEEP_SHANK", "PRUSIK_LOOP", "TRUCKER_HITCH"
        ],
        imposterWords: [
            "CARABINER", "BELAY_DEVICE", "ASCENDER_GEAR", "CAMMING_DEVICE", "HEXCENTRIC", "PITON_SPIKE", "CHALK_BAG", "HARNESS_RIGGING", "QUICKDRAW_SLING", "ROPE_GRAB"
        ]
    },

    {
        id: "chef_knives_vs_sharpening_stones",
        _innocentHints: [
            "Traditional Kitchen Chef Knife Profiles, Japanese/Western Culinary Blade Classifications",
            "Culinary Kitchen Preparation Knife Profiles, Traditional Western & Japanese Chef Blades",
            "Gourmet Culinary Kitchen Prep Blades, Traditional Chef Knife Framework Profiles"
        ],
        _imposterHints: [
            "Abrasive Blade Sharpening Stones, Synthetic/Natural Whetstone Grit Parameters & Gear",
            "Abrasive Metallurgy Whetstones, Synthetic Mineral Honing Stones & Maintenance Gear",
            "Blade Maintenance Abrasive Whetstones, Manual Metallurgy Honing Stones & Tools"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "GYUTO_BLADE", "SANTOKU_KNIFE", "NAKIRI_CLEAVER", "PETTY_KNIFE", "PARING_KNIFE", "BREAD_KNIFE_SERRATED", "BONING_KNIFE", "YANAGIBA_SLICER", "DEBA_BLADE", "CHEF_KNIFE_WESTERN"
        ],
        imposterWords: [
            "WHETSTONE_400_GRIT", "WHETSTONE_1000_GRIT", "WHETSTONE_6000_GRIT", "DIAMOND_HONING_PLATE", "NAGURA_CONDITIONING_STONE", "LEATHER_STROP", "HONING_ROD_CERAMIC", "WATER_STONE_SYNTHETIC", "ARKANSAS_NATURAL_STONE", "FLATTENING_STONE"
        ]
    },

    {
        id: "fountain_pens_vs_calligraphy_nibs",
        _innocentHints: [
            "Luxury Fountain Pen Models, Classic Fine Writing Stationery Brand Mechanics",
            "Fine Writing Fountain Pen Hardware, Luxury Liquid Ink Writing Stationery Lines",
            "Liquid Ink Luxury Fountain Pen Lines, Precision Writing Stationery Mechanisms"
        ],
        _imposterHints: [
            "Artisan Dip Calligraphy Nibs, Flexible Metal Script Writing Point Hardware",
            "Artisan Metal Dip-Pen Calligraphy Nibs, Traditional Script Illustration Points",
            "Traditional Dip-Pen Copperplate Calligraphy Nibs, Script Illustration Metal Points"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },
        innocentWords: [
            "PISTON_CONVERTER", "REFILL_INK_CARTRIDGE", "FINE_GOLD_NIB", "FLEX_NIB", "EBONITE_FEEDER", "CAP_THREAD", "VACUUM_FILLER", "POCKET_PEN", "DESK_STATIONERY", "LIQUID_FOUNTAIN_INK"
        ],
        imposterWords: [
            "G_PEN_NIB", "BRAUSE_OR_EP_NIB", "GILLOTT_THIRTY_THREE", "OBLIQUE_NIB_HOLDER", "FLUID_DRAWING_INK", "STUB_DIP_NIB", "PARALLEL_PEN_NIB", "QUILL_POINT", "REED_PEN", "CROW_QUILL_NIB"
        ]
    },

    // Append this massive, globally recognisable category to your window.SYNAPSE_MATRIX_POOL array in words.js.
    // It features high-potency contextual leaks between digital cinematic streaming and physical theater cinema.

    {
        id: "netflix_streaming_vs_movie_theater_experience",
        _innocentHints: [
            "Digital Streaming Platforms, At-Home Binge Watching, Subscription Video Services & Living Room Entertainment",
            "At-Home Video Streaming Subscriptions, Digital On-Demand Entertainment Services & Living Room Television Media",
            "Subscription Video-On-Demand Platforms, Digital Media Streaming Services & At-Home Television Bingeing",
            "Digital Media Streaming Applications, Subscription Video On-Demand Platforms & Living Room Television Habits",
            "At-Home Subscription Video Services, Digital Media Streaming Platforms & Living Room Entertainment Content"
        ],
        _imposterHints: [
            "Traditional Cinema Outlets, Commercial Movie Theater Complexes, Ticketed Big-Screen Venues & Lobby Concessions",
            "Commercial Motion-Picture Box Office Venues, Traditional Multiplex Movie Theaters & Big-Screen Entertainment",
            "Traditional Movie Theater Auditoriums, Commercial Multiplex Venues & Big-Screen Public Cinema Exhibition",
            "Commercial Multiplex Cinema Outlets, Public Motion-Picture Box Office Venues & Big-Screen Ticketed Theaters",
            "Traditional Public Cinema Exhibition Houses, Commercial Multiplex Venues & Ticketed Movie Theater Spaces"
        ],
        get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
        get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

        innocentWords: [
            "STREAMING", "BINGE_WATCH", "SUBSCRIPTION", "ALGORITHM", "SMART_TV", "SMARTPHONE_APP", "LIVING_ROOM", "BEDROOM", "PAUSE_BUTTON", "REWIND",
            "FAST_FORWARD", "SKIP_INTRO", "AUTOPLAY", "WATCHLIST", "USER_PROFILE", "PASSWORD_SHARING", "WI_FI_CONNECTION", "BUFFERING", "DATA_USAGE", "SCREEN_TIME",
            "couch_POTATO", "HOME_THEATER", "TELEVISION_SERIES", "SEASON_FINALE", "EPISODE_LIST", "ORIGINAL_SERIES", "RECOMMENDED_FOR_YOU", "CONTINUE_WATCHING", "TRENDING_NOW", "MINISERIES",
            "DOCUMENTARY_SERIES", "ANIME_SELECTION", "PREMIER_RELEASE", "DOWNLOAD_OFFLINE", "AUDIO_TRACK", "SUBTITLES_ON", "CLOSED_CAPTIONS", "LOUNGE_WEAR", "PAJAMAS_ALL_DAY", "SNACK_PANTRY",
            "MICROWAVE_POPCORN", "HOME_DELIVERY", "LATE_NIGHT_VIEWING", "COMFY_COUCH", "BLANKET_FORT", "REMOTE_CONTROL", "CAST_TO_SCREEN", "RESOLUTION_4K", "SURROUND_SOUND_HOME", "CHILLING"
        ],
        imposterWords: [
            "MOVIE_THEATER", "CINEMA_COMPLEX", "MULTIPLEX", "IMAX_SCREEN", "BOX_OFFICE", "TICKET_STUB", "RESERVED_SEATING", "AUDITORIUM", "THEATER_LOBBY", "CONCESSION_STAND",
            "LARGE_POPCORN", "BUTTER_TOPPING", "FOUNTAIN_SODA", "NACHOS_AND_CHEESE", "BOX_OF_CANDY", "PREVIEWS_AND_TRAILERS", "COMING_ATTRACTIONS", "OPENING_NIGHT", "SUMMER_BLOCKBUSTER", "MATINEE_PRICE",
            "FILM_PROJECTOR", "THEATER_SCREEN", "DOLBY_ATMOS", "RECLINING_CHAIRS", "STICKY_FLOOR", "SILENT_PHONES", "DARK_ROOM", "AUDIENCE_APPLAUSE", "MIDNIGHT_PREMIERE", "TICKET_KIOSK"
        ]
    },

    // Append these 10 linguistic, action-oriented, and descriptive categories to your window.SYNAPSE_MATRIX_POOL array inside words.js.
// Each category features massive word pools (~100 words total) focused exclusively on verbs, adjectives, and adverbs.

{
    id: "panicked_actions_vs_stealthy_movements",
    _innocentHints: [
        "Panicked and Chaotic Physical Actions, Erratic Movements & Hysterical Verbs",
        "Erratic and Hysterical Physical Actions, Panicked Movements & Chaotic Verbs",
        "Chaotic and Panicked Physical Actions, Hysterical Verbs & Erratic Movements",
        "Hysterical and Erratic Physical Movements, Chaotic Actions & Panicked Verbs",
        "Panicked and Erratic Physical Verbs, Chaotic Movements & Hysterical Actions"
    ],
    _imposterHints: [
        "Stealthy and Covert Physical Actions, Silent Movements & Secretive Verbs",
        "Silent and Secretive Physical Actions, Stealthy Movements & Covert Verbs",
        "Covert and Silent Physical Movements, Secretive Actions & Stealthy Verbs",
        "Secretive and Stealthy Physical Verbs, Covert Movements & Silent Actions",
        "Stealthy and Silent Physical Movements, Covert Actions & Secretive Verbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "SCRAMBLE", "FLEE", "STAMPEDE", "SHRIEK", "FLAIL", "THRASH", "BOLT", "SPRINT", "SCURRY", "DASH",
        "COLLIDE", "REEL", "STUMBLE", "TUMBLE", "CAREEN", "HYPERVENTILATE", "TREMBLE", "SHIVER", "QUAKE", "SHUDDER",
        "CLAMOR", "BELLOW", "HOWL", "SCRAPE", "CLATTER", "RUSH", "HUSTLE", "PANIC", "CONVULSE", "TWITCH",
        "YANK", "SNATCH", "WRENCH", "JOLT", "BOUNCE", "LEAP", "BOUND", "DIVERT", "SWERVE", "DODGE",
        "SCATTER", "DISPERSE", "BREAK", "SHATTER", "CRASH", "SLAM", "BANG", "SMASH", "TRIP", "FALL"
    ],
    imposterWords: [
        "SNEAK", "STALK", "CREEP", "SLIP", "GLIDE", "PROWL", "SKULK", "SLINK", "HOVER", "DRIFT",
        "SHADOW", "INFILTRATE", "BYPASS", "EVADE", "ELUDE", "CAMOUFLAGE", "MASK", "VEIL", "CLOAK", "CONCEAL",
        "WHISPER", "MURMUR", "BREATHE", "TIPTOE", "CRAWL", "CROUCH", "LURK", "HIDE", "WAIT", "WATCH",
        "TRACK", "OBSERVE", "MONITOR", "SCOUT", "PEEK", "SPY", "TAP", "BUG", "INTERCEPT", "STEAL",
        "PILFER", "SWIPE", "SNATCH_STEALTH", "GRAB_QUIET", "POCKET", "TAKE_SILENTLY", "SLIDE_PAST", "MELT_AWAY", "VANISH", "DISAPPEAR"
    ]
},

{
    id: "furious_arguments_vs_calm_negotiations",
    _innocentHints: [
        "Furious and Aggressive Verbal Actions, Hostile Disputes & Angry Verbs",
        "Hostile and Angry Verbal Actions, Furious Disputes & Aggressive Verbs",
        "Aggressive and Furious Verbal Disputes, Angry Actions & Hostile Verbs",
        "Angry and Hostile Verbal Verbs, Aggressive Disputes & Furious Actions",
        "Furious and Hostile Verbal Actions, Angry Disputes & Aggressive Verbs"
    ],
    _imposterHints: [
        "Calm and Measured Verbal Actions, Diplomatic Negotiations & Peaceful Verbs",
        "Diplomatic and Peaceful Verbal Actions, Calm Negotiations & Measured Verbs",
        "Measured and Calm Verbal Negotiations, Peaceful Actions & Diplomatic Verbs",
        "Peaceful and Diplomatic Verbal Verbs, Measured Negotiations & Calm Actions",
        "Calm and Diplomatic Verbal Actions, Peaceful Negotiations & Measured Verbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "BELLOW_ARGUE", "SHOUT", "SCREAM", "YELL", "ROAR", "SCALD", "BERATE", "REBUKE", "REPRIMAND", "SCOLD",
        "CHIDE", "SLAM_STANCE", "DENOUNCE", "CONDEMN", "ATTACK_VERBAL", "INSULT", "MOCK", "JEER", "SNEER", "SCOFF",
        "DISPUTE", "CONTEST", "CLASH", "COLLIDE_IDEAS", "QUARREL", "WRANGLE", "BICKER", "SQUABBLE", "ARGUE", "PROTEST",
        "DEMAND", "THREATEN", "INTIMIDATE", "BULLY", "HARASS", "PROVOKE", "TAUNT", "GOAD", "INITE", "AGGRAVATE",
        "FUME", "SEETHE", "RAGE", "STORM_OUT", "SNAP", "BARK", "GROWL", "HISS", "SPIT_WORDS", "REJECT"
    ],
    imposterWords: [
        "MEDIATE", "NEGOTIATE", "ARBITRATE", "CONCILIATE", "PACIFY", "APPEASE", "PLACATE", "SOOTHE", "CALM", "QUIET",
        "BALANCES", "COMPROMISE", "CONCEDE", "YIELD", "ACCOMMODATE", "ADJUST", "ADAPT", "RECONCILE", "HARMONIZE", "ALIGN",
        "DISCUSS", "CONFER", "CONSULT", "DELIBERATE", "REASON", "DEBATE_CALMLY", "EXPLAIN", "CLARIFY", "ILLUSTRATE", "OUTLINE",
        "PROPOSE", "SUGGEST", "OFFER", "TENDER", "SUBMIT", "AGREE", "ACCEPT", "APPROVE", "RATIFY", "ENDORSE",
        "SUPPORT", "ASSIST", "COOPERATE", "COLLABORATE", "PARTNER", "UNITE", "MERGE", "BLEND", "EASE", "SETTLE"
    ]
},

{
    id: "hyperactive_energy_vs_lethargic_exhaustion",
    _innocentHints: [
        "Hyperactive and High-Energy States, Vibrant Descriptions & Energetic Adjectives",
        "Vibrant and Energetic States, Hyperactive Descriptions & High-Energy Adjectives",
        "High-Energy and Hyperactive Descriptions, Vibrant States & Energetic Adjectives",
        "Energetic and Vibrant Adjectives, High-Energy Descriptions & Hyperactive States",
        "Hyperactive and Vibrant Descriptions, Energetic States & High-Energy Adjectives"
    ],
    _imposterHints: [
        "Lethargic and Exhausted States, Sluggish Descriptions & Drained Adjectives",
        "Sluggish and Drained States, Lethargic Descriptions & Exhausted Adjectives",
        "Exhausted and Lethargic Descriptions, Drained States & Sluggish Adjectives",
        "Drained and Sluggish Adjectives, Exhausted Descriptions & Lethargic States",
        "Lethargic and Sluggish Descriptions, Drained States & Exhausted Adjectives"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "HYPERATIVE", "ENERGETIC", "VIBRANT", "DYNAMIC", "ANIMATED", "LIVELY", "SPIRITED", "VIVACIOUS", "EXUBERANT", "EFFERVESCENT",
        "BOUNCY", "FRANTIC", "FRENZIED", "RESTLESS", "AGITATED", "EXCITED", "ELECTRIFIED", "SPARKING", "BUZZING", "ZOOMING",
        "RAPID", "SWIFT", "FAST_PACED", "QUICK", "ALERT", "AWAKE", "HYPER_FOCUSED", "ZEALOUS", "ENTHUSIASTIC", "EAGER",
        "PASSIONATE", "FIERY", "INTENSE", "BOISTEROUS", "ROWDY", "WILD", "UNTAMED", "UNSTOPPABLE", "DRIVEN", "AMBITIOUS",
        "AGGRESSIVE_ENERGY", "ACTIVE", "BUSTLING", "CHURNING", "RACING", "FLYING", "BOOMING", "TURBO", "CHARGED", "AMPLIFIED"
    ],
    imposterWords: [
        "LETHARGIC", "EXHAUSTED", "SLUGGISH", "DRAINED", "FATIGUED", "WEARY", "SPENT", "DEPLETED", "TIRED", "DROWSY",
        "SLEEPY", "SLOTHFUL", "LAZY", "INACTIVE", "INERT", "PASSIVE", "DULL", "RELAXED", "CALM_STATE", "SEDATED",
        "NUMB", "PARALYZED", "HEAVY", "BURDENED", "SLOWED", "LAGGING", "CREEPING_PACE", "STAGNANT", "TORPID", "LACKADAISICAL",
        "APATHETIC", "INDIFFERENT", "UNMOTIVATED", "SPIRITLESS", "FEEBLE", "WEAK", "FRAIL", "FAINT", "LANGUID", "SOMNOLENT",
        "COMATOSE", "DEADENED", "BLUNTED", "HOLLOW", "EMPTY_ENERGY", "GLOOMY", "MELANCHOLY", "SOMBER", "DRAGGING", "WEIGHED_DOWN"
    ]
},

{
    id: "chaotically_vs_methodically",
    _innocentHints: [
        "Chaotic and Erratic Execution Styles, Random Behaviors & Disorganized Adverbs",
        "Random and Disorganized Execution Styles, Chaotic Behaviors & Erratic Adverbs",
        "Erratic and Chaotic Behaviors, Disorganized Execution Styles & Random Adverbs",
        "Disorganized and Random Adverbs, Erratic Behaviors & Chaotic Execution Styles",
        "Chaotic and Disorganized Behaviors, Random Execution Styles & Erratic Adverbs"
    ],
    _imposterHints: [
        "Methodical and Systematic Execution Styles, Precise Behaviors & Organized Adverbs",
        "Precise and Organized Execution Styles, Methodical Behaviors & Systematic Adverbs",
        "Systematic and Methodical Behaviors, Organized Execution Styles & Precise Adverbs",
        "Organized and Precise Adverbs, Systematic Behaviors & Methodical Execution Styles",
        "Methodical and Precise Behaviors, Organized Execution Styles & Systematic Adverbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "CHAOTICALLY", "ERRATICALLY", "RANDOMLY", "DISORGANIZEDLY", "HAPHAZARDLY", "WILDLY", "FRANTICALLY", "FRENZIEDLY", "CARELESSLY", "RECKLESSLY",
        "HEEDLESSLY", "BLINDLY", "AIMLESSLY", "PURPOSELESSLY", "CONFUSEDLY", "TURBULENTLY", "RIOTOUSLY", "ANARCHICALLY", "UNPREDICTABLY", "SPORADICALLY",
        "FITFULLY", "SPASMODICALLY", "CONVULSIVELY", "DESPERATELY", "HYSTERICALLY", "MADLY", "INSANELY", "FOOLISHLY", "RASHLY", "IMPULSIVELY",
        "HEADLONG", "ABRUPTLY", "SUDDENLY", "EXPECTEDLY_NOT", "DISJOINTEDLY", "CLUMSILY", "AWKWARDLY", "BLUNDERINGLY", "SLOPPILY", "MESSILY",
        "HURRIEDLY", "RUSHEDLY", "FEVERISHLY", "TEMPESTUOUSLY", "STORMILY", "HECTICALLY", "FRAGILELY", "SHAKILY", "UNSTEADILY", "HASTILY"
    ],
    imposterWords: [
        "METHODICALLY", "SYSTEMATICALLY", "PRECISELY", "ORGANIZEDLY", "STRUCTUREDLY", "LOGICALLY", "ANALYTICALLY", "DELIBERATELY", "INTENTIONALLY", "PURPOSEFULLY",
        "CAREFULLY", "CAUTIOUSLY", "PRUDENTLY", "METICULOUSLY", "THOROUGHLY", "EXHAUSTIVELY", "SCIENTIFICALLY", "MATHEMATICALLY", "RIGIDLY", "STRICTLY",
        "ACCURATELY", "FLAWLESSLY", "PERFECTLY", "EFFICIENTLY", "PRODUCTIVELY", "CALCULATINGLY", "STRATEGICALLY", "TACTICALLY", "SCHEMATICALLY", "REGULARLY",
        "UNIFORMLY", "CONSISTENTLY", "STEADILY", "ROUTINELY", "CHRONOLOGICALLY", "SEQUENTIALLY", "ORDERLY", "NEATLY", "TIDILY", "SOPHISTICATEDLY",
        "CALMLY", "PATIENTLY", "SERENELY", "MEASUREDELY", "DIPLOMATICALLY", "FORMALLY", "OFFICIALLY", "LEGALLY", "CONSCIENTIOUSLY", "SCRUPULOUSLY"
    ]
},

{
    id: "destructive_forces_vs_creative_processes",
    _innocentHints: [
        "Destructive and Ruinous Action Verbs, Damaging Alterations & Obliterating Processes",
        "Ruinous and Damaging Action Verbs, Destructive Alterations & Obliterating Processes",
        "Damaging and Destructive Alterations, Ruinous Action Verbs & Obliterating Processes",
        "Obliterating and Ruinous Action Verbs, Damaging Alterations & Destructive Processes",
        "Destructive and Damaging Alterations, Obliterating Action Verbs & Ruinous Processes"
    ],
    _imposterHints: [
        "Creative and Constructive Action Verbs, Productive Engineering & Generative Processes",
        "Constructive and Generative Action Verbs, Creative Engineering & Productive Processes",
        "Productive and Creative Engineering, Constructive Action Verbs & Generative Processes",
        "Generative and Constructive Action Verbs, Productive Engineering & Creative Processes",
        "Creative and Productive Engineering, Generative Action Verbs & Constructive Processes"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "DESTROY", "RUIN", "DAMAGE", "OBLITERATE", "ANNIHILATE", "DEMOLISH", "DEVASTATE", "WRECK", "SMASH_VERB", "CRUSH_VERB",
        "SHATTER_VERB", "BREAK_VERB", "TEAR_DOWN", "DISMANTLE", "RAZE", "SACK", "PILLAGE", "PLUNDER", "LOOT", "VANDALIZE",
        "SPOIL", "MAR", "DEFACE", "CORRUPT", "TAINT", "POLLUTE", "CONTAMINATE", "ERODE", "CORRODE", "DECAY",
        "ROT", "WITHER", "WASTE", "CONSUME", "BURN", "SCORCH", "INCINERATE", "EXPLODE", "BLAST", "SHRED",
        "MANGLE", "MUTILATE", "CRIPPLE", "DISABLE", "SABOTAGE", "UNDERMINE", "WEAKEN", "SAP", "ENFEEBLE", "SQUASH"
    ],
    imposterWords: [
        "CREATE", "CONSTRUCT", "BUILD", "ENGINEER", "MANUFACTURE", "PRODUCE", "GENERATE", "FASHION", "MOLD", "SHAPE",
        "FORGE", "FABRICATE", "DESIGN", "PLAN", "ARCHITECT", "COMPOSE", "WRITE", "PAINT", "SCULPT", "CARVE",
        "WEAVE", "KNIT", "SEW", "ASSEMBLE", "SETUP", "ESTABLISH", "FOUND", "INSTITUTE", "INVENT", "INNOVATE",
        "DEVELOP", "GROW", "NURTURE", "CULTIVATE", "FOSTER", "BREED", "HATCH", "GENERATE_IDEAS", "CONCEIVE", "FORMULATE",
        "REVIVE", "RESTORE", "REPAIR", "MEND", "FIX", "RENOVATE", "REBUILD", "RECONSTRUCT", "REGENERATE", "RENEW"
    ]
},

{
    id: "luxurious_opulence_vs_impoverished_scarcity",
    _innocentHints: [
        "Luxurious and Opulent Descriptions, Lavish Environments & Extravagant Adjectives",
        "Lavish and Extravagant Descriptions, Luxurious Environments & Opulent Adjectives",
        "Opulent and Luxurious Environments, Lavish Descriptions & Extravagant Adjectives",
        "Extravagant and Lavish Adjectives, Opulent Descriptions & Luxurious Environments",
        "Luxurious and Extravagant Descriptions, Opulent Environments & Lavish Adjectives"
    ],
    _imposterHints: [
        "Impoverished and Scarce Descriptions, Destitute Environments & Deprived Adjectives",
        "Destitute and Deprived Descriptions, Impoverished Environments & Scarce Adjectives",
        "Scarce and Impoverished Environments, Destitute Descriptions & Deprived Adjectives",
        "Deprived and Destitute Adjectives, Scarce Descriptions & Impoverished Environments",
        "Impoverished and Deprived Descriptions, Scarce Environments & Destitute Adjectives"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "LUXURIOUS", "OPULENT", "LAVISH", "EXTRAVAGANT", "SUMPTUOUS", "PLUSH", "GRAND", "MAGNIFICENT", "SPLENDID", "RESPLENDENT",
        "GILDED", "GOLDEN", "SILKEN", "VELVETY", "RICH", "WEALTHY", "AFFLUENT", "PROSPEROUS", "FLOURISHING", "THRIVING",
        "COSTLY", "EXPENSIVE", "PRICELESS", "VALUABLE", "EXQUISITE", "FINE", "ELITE", "PREMIUM", "LUXE", "PRESTIGIOUS",
        "DECADENT", "INDULGENT", "PAMPERED", "HEAVENLY", "PALATIAL", "STATELY", "MAJESTIC", "ROYAL", "REGAL", "PRINCELY",
        "ABUNDANT", "BOUNTIFUL", "PLENTIFUL", "COPIOUS", "TEEMING", "OVERFLOWING", "RICH_IN_DETAIL", "LUSH", "FRUITFUL", "GALORE"
    ],
    imposterWords: [
        "IMPOVERISHED", "SCARCE", "DESTITUTE", "DEPRIVED", "POOR", "INDIGENT", "NEEDY", "PENURIOUS", "PENNILESS", "BROKE",
        "BANKRUPT", "RUINED_FINANCIALLY", "BEGGARLY", "MEAGER", "SPARSE", "SCANTY", "DEFICIENT", "INSUFFICIENT", "LACKING", "WANTING",
        "EMPTY", "BARREN", "DESOLATE", "BLEAK", "BARE", "STRIPPED", "N0_VALUE", "CHEAP", "WORTHLESS", "PALTRY",
        "SHABBY", "THREADBARE", "DILAPIDATED", "DECAYED_LOOK", "SQUALID", "WRETCHED", "MISERABLE", "FORLORN", "PITIABLE", "DEGRADED",
        "LIMITED", "RESTRICTED", "STINGY", "PARSIMONIOUS", "MISERLY", "FRUGAL", "AUSTERE", "STARK", "SPARTAN", "DRAINED_FINANCIALLY"
    ]
},

{
    id: "intellectual_brilliance_vs_foolish_ignorance",
    _innocentHints: [
        "Intellectual and Brilliant Traits, Wise Personalities & Highly Cognizant Adjectives",
        "Wise and Highly Cognizant Traits, Intellectual Personalities & Brilliant Adjectives",
        "Brilliant and Intellectual Personalities, Wise Traits & Highly Cognizant Adjectives",
        "Highly Cognizant and Wise Adjectives, Brilliant Descriptions & Intellectual Traits",
        "Intellectual and Wise Descriptions, Brilliant Traits & Highly Cognizant Adjectives"
    ],
    _imposterHints: [
        "Foolish and Ignorant Traits, Mindless Personalities & Illogical Adjectives",
        "Mindless and Illogical Traits, Foolish Personalities & Ignorant Adjectives",
        "Ignorant and Foolish Personalities, Mindless Traits & Illogical Adjectives",
        "Illogical and Mindless Adjectives, Ignorant Descriptions & Foolish Traits",
        "Foolish and Mindless Descriptions, Ignorant Traits & Illogical Adjectives"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "INTELLECTUAL", "BRILLIANT", "WISE", "COGNIZANT", "SMART", "INTELLIGENT", "CLEVER", "SHREWD", "ASTUTE", "SHARP",
        "KEEN", "ACUTE", "DISCERNING", "PERCEPTIVE", "INSIGHTFUL", "PROFOUND", "ENLIGHTENED", "EDUCATED", "LEARNED", "SCHOLARLY",
        "ERUDITE", "ACADEMIC", "SAPIENT", "RATIONAL", "LOGICAL", "ANALYTICAL", "CREATIVE_MIND", "INVENTIVE", "INGENIOUS", "RESOURCEFUL",
        "CUNNING", "CRAFTY", "SLY", "CALCULATING", "STRATEGIC", "WISELY", "JUDICIOUS", "PRUDENT", "SANE", "SENSIBLE",
        "KNOWLEDGEABLE", "AWARE", "INFORMED", "EXPERIENCED", "EXPERT", "MASTERFUL", "TALENTED", "GIFTED", "CAPABLE", "COMPETENT"
    ],
    imposterWords: [
        "FOOLISH", "IGNORANT", "MINDLESS", "ILLOGICAL", "STUPID", "DUMB", "IDIOTIC", "IMBECILIC", "MORONIC", "ASININE",
        "ABSURD", "RIDICULOUS", "LUDICROUS", "NONSENSICAL", "SENSELESS", "REASONLESS", "IRRATIONAL", "BRAINLESS", "WITLESS", "EMPTY_HEADED",
        "DENSE", "THICK", "SLOW_WITTED", "OAFISH", "BOORISH", "CLUMSY_MIND", "BLUNDERING", "UNEDUCATED", "ILLITERATE", "UNINFORMED",
        "UNAWARE", "BLIND_MENTALLY", "OBLIVIOUS", "NAIVE", "GULLIBLE", "INEXPERIENCED", "GREEN", "SIMPLE", "SIMPLE_MINDED", "CHILDISH",
        "INFANTILE", "IMMATURE", "FOOLHARDY", "RASH", "RECKLESS_MIND", "MAD_TRAIT", "INSANE_TRAIT", "CRAZY", "LUNATIC", "DAFT"
    ]
},

{
    id: "aggressively_vs_submissively",
    _innocentHints: [
        "Aggressive and Dominant Behavior Modifications, Assertive Postures & Hostile Adverbs",
        "Assertive and Hostile Behavior Modifications, Aggressive Postures & Dominant Adverbs",
        "Dominant and Aggressive Postures, Assertive Behavior Modifications & Hostile Adverbs",
        "Hostile and Assertive Adverbs, Dominant Descriptions & Aggressive Postures",
        "Aggressive and Assertive Descriptions, Dominant Postures & Hostile Adverbs"
    ],
    _imposterHints: [
        "Submissive and Yielding Behavior Modifications, Passive Postures & Humble Adverbs",
        "Passive and Humble Behavior Modifications, Submissive Postures & Yielding Adverbs",
        "Yielding and Submissive Postures, Passive Behavior Modifications & Humble Adverbs",
        "Humble and Passive Adverbs, Yielding Descriptions & Submissive Postures",
        "Submissive and Passive Descriptions, Yielding Postures & Humble Adverbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "AGGRESSIVELY", "DOMINANTLY", "ASSERTIVELY", "HOSTILELY", "FIERCELY", "FEROCIOUSLY", "FORCEFULLY", "POWERFULLY", "BOLDLY", "DARINGLY",
        "AUDACIOUSLY", "BRAZENLY", "IMPUDENTLY", "DEFIANTLY", "REBELLIOUSLY", "INSURGENTLY", "MUTINOUSLY", "THREATENINGLY", "MENACINGLY", "INTIMIDATINGLY",
        "BULLYINGLY", "ARROGANTLY", "HAUGHTILY", "PROUDLY", "VAINLY", "CONCEITEDLY", "COMMANDINGLY", "IMPERIOUSLY", "DICTATORIALLY", "AUTOCRATICALLY",
        "TYRANNICALLY", "OPPRESSIVELY", "RUTHLESSLY", "CRUELLY", "MERCILESSLY", "HEARTLESSLY", "SAVAGELY", "BRUTALLY", "VIOLENTLY", "FURIOUSLY",
        "VEHEMENTLY", "PASSIONATELY", "INTENSELY", "ZEALOUSLY", "FANATICALLY", "EAGERLY", "AMBITIOUSLY", "COMPETITIVELY", "COMBATIVELY", "BELLIGERENTLY"
    ],
    imposterWords: [
        "SUBMISSIVELY", "YIELDINGLY", "PASSIVELY", "HUMBLY", "MEEKLY", "TIMIDLY", "SHYLY", "BASHFULLY", "COYLY", "MODESTLY",
        "OBEDIENTLY", "DUTIFULLY", "COMPLIANTLY", "REACHABLY", "TRACTABLY", "DOCILELY", "PLIANTLY", "MALLEABLY", "FLEXIBLY", "SOFTLY",
        "GENTLY", "MILDLY", "QUIETLY", "SILENTLY", "SECRETIVELY", "FURTIVELY", "STEALTHILY", "CAUTIOUSLY", "WARILY", "CAREFULLY",
        "FEARFULLY", "ANXIOUSLY", "NERVOUSLY", "SHAKILY", "TREMBLINGLY", "QUAKINGLY", "COWARDLY", "FAINTHEARTEDLY", "DEFERENTIALLY", "RESPECTFULLY",
        "SERVILELY", "SLAVISHLY", "CRINGINGLY", "FAWNINGLY", "SYCOPHANTICALLY", "APOLOGETICALLY", "REGRETFULLY", "SORROWFULLY", "SADLY", "HUMILIATEDLY"
    ]
},

{
    id: "flourishing_growth_vs_withering_decay",
    _innocentHints: [
        "Flourishing and Generative Growth Actions, Prosperous Changes & Vitalizing Verbs",
        "Prosperous and Vitalizing Growth Actions, Flourishing Changes & Generative Verbs",
        "Generative and Flourishing Changes, Prosperous Growth Actions & Vitalizing Verbs",
        "Vitalizing and Prosperous Action Verbs, Generative Changes & Flourishing Growth",
        "Flourishing and Vitalizing Changes, Generative Growth Actions & Prosperous Verbs"
    ],
    _imposterHints: [
        "Withering and Degenerative Decay Actions, Destructive Changes & Atrophying Verbs",
        "Destructive and Atrophying Decay Actions, Withering Changes & Degenerative Verbs",
        "Degenerative and Withering Changes, Destructive Decay Actions & Atrophying Verbs",
        "Atrophying and Destructive Action Verbs, Degenerative Changes & Withering Decay",
        "Withering and Destructive Changes, Atrophying Decay Actions & Degenerative Verbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "FLOURISH", "GROW", "PROSPER", "THRIVE", "BLOOM", "BLOSSOM", "BURGEON", "EXPAND", "EXTEND", "ENLARGE",
        "MULTIPLY", "PROLIFERATE", "PROPAGATE", "REPRODUCE", "SPROUT", "GERMINATE", "ROOT", "ESTABLISH_GROWTH", "DEVELOP_VITAL", "MATURE",
        "EVOLVE", "ADVANCE", "PROGRESS", "ASCEND", "RISE", "SOAR", "SURGE", "BOOM_GROWTH", "SKYROCKET", "FLIGHT",
        "STRENGTHEN", "FORTIFY", "REINFORCE", "BOOST", "AMPLIFY", "AUGMENT", "ENHANCE", "IMPROVE", "UPGRADE", "ELEVATE",
        "VITALIZE", "ENERGIZE", "INVIGORATE", "REFRESH", "REVIVE_VITAL", "REJUVENATE", "REGENERATE_GROWTH", "HEAL_VITAL", "CURE_VITAL", "NOURISH"
    ],
    imposterWords: [
        "WITHER", "DECAY", "ATROPHY", "ROT_VERB", "DECOMPOSE", "CRUMBLE", "DISINTEGRATE", "DISSOLVE", "MELT", "FADE",
        "VANISH_DECAY", "DIE", "PERISH", "EXPIRE", "SUCCUMB", "SINK", "DECLINE", "DETERIORATE", "DEGENERATE", "DEGRADE",
        "WEAKEN_DECAY", "WITHER_AWAY", "SHRINK", "CONTRACT", "DIMINISH", "DWINDLE", "LESSON", "REDUCE", "DROP", "FALL_DECAY",
        "PLUMMET", "CRASH_DECAY", "COLLAPSE", "TOPPLE", "FAIL", "FALTER", "STUMBLE_DECAY", "LAG", "STAGNATE", "FREEZE",
        "CORRODE_VERB", "ERODE_VERB", "RUST", "TARNISH", "SPOIL_DECAY", "TAINT_DECAY", "CORRUPT_DECAY", "POISON", "BLIGHT", "WASTE_DECAY"
    ]
},

{
    id: "honestly_vs_deceitfully",
    _innocentHints: [
        "Honest and Transparent Communication Styles, Truthful Conduct & Sincere Adverbs",
        "Truthful and Sincere Communication Styles, Honest Conduct & Transparent Adverbs",
        "Transparent and Honest Conduct, Truthful Communication Styles & Sincere Adverbs",
        "Sincere and Truthful Adverbs, Transparent Descriptions & Honest Conduct",
        "Honest and Truthful Descriptions, Transparent Conduct & Sincere Adverbs"
    ],
    _imposterHints: [
        "Deceitful and Evasive Communication Styles, Dishonest Conduct & Fraudulent Adverbs",
        "Dishonest and Fraudulent Communication Styles, Deceitful Conduct & Evasive Adverbs",
        "Evasive and Deceitful Conduct, Dishonest Communication Styles & Fraudulent Adverbs",
        "Fraudulent and Dishonest Adverbs, Evasive Descriptions & Deceitful Conduct",
        "Deceitful and Dishonest Descriptions, Evasive Conduct & Fraudulent Adverbs"
    ],
    get innocentHint() { return this._innocentHints[Math.floor(Math.random() * this._innocentHints.length)]; },
    get imposterHint() { return this._imposterHints[Math.floor(Math.random() * this._imposterHints.length)]; },

    innocentWords: [
        "HONESTLY", "TRANSPARENTLY", "TRUTHFULLY", "SINCERELY", "CANDIDLY", "FRANKLY", "DIRECTLY", "STRAIGHTFORWARDLY", "OPENLY", "PUBLICLY",
        "AUTHENTICALLY", "GENUINELY", "EARNESTLY", "HEARTFILTLY", "LOYALLY", "FAITHFULLY", "TRUSTWORTHILY", "RELIABLY", "CREDIBLY", "VALIDLY",
        "LEGITIMATELY", "FAIRLY", "JUSTLY", "EQUITABLY", "IMPARTIALLY", "NEUTRALLY", "OBJECTIVELY", "FACTUALLY", "ACCURATELY", "PRECISELY_TRUE",
        "EXACTLY_HONEST", "PLAINLY", "SIMPLY", "BARELY_TRUE", "CLEARLY", "MANIFESTLY", "EVIDENTLY", "UNDENIABLY", "INDISPUTABLY", "UNQUESTIONABLY",
        "CERTAINLY", "SURELY", "ABSOLUTELY", "TRULY", "VERITABLY", "REALISTICALLY", "NATURALLY", "WHOLEHEARTEDLY", "HONORABLY", "UPRIGHTLY"
    ],
    imposterWords: [
        "DECEITFULLY", "EVASIVELY", "DISHONESTLY", "FRAUDULENTLY", "TREACHEROUSLY", "PERFIDIOUSLY", "FAKELY", "ARTIFICIALLY", "INSINCERELY", "HYPOCRITICALLY",
        "DOUBLE_FACEDLY", "SECRETIVELY_BAD", "FURTIVELY_BAD", "STEALTHILY_BAD", "SLYLY", "CUNNINGLY", "CRAFTILY", "SHREWDLY_BAD", "CALCULATINGLY_BAD", "SCHEMINGLY",
        "PLOTTIINGLY", "DEVIOUSLY", "INDIRECTLY_BAD", "ROUNDABOUTLY", "AMBIGUOUSLY", "EQUIVOCALLY", "VAGUELY", "OBSCURELY", "CRYPTICALLY", "MYSTERIOUSLY_BAD",
        "MISLEADINGLY", "DECEPTIVELY", "ILLUSORILY", "PHANTOM_LIKE", "MOCKINGLY_BAD", "SNEAKINGLY", "SKULKINGLY", "SLINKINGLY", "PROWLINGLY", "UNDERHANDEDLY",
        "COVERTLY", "CLANDESTINELY", "ILLEGALLY", "ILLICITLY", "SURREPTITIOUSLY", "TRICKILY", "WILYLY", "GUILTYLY", "SHAMEFULLY", "CORRUPTLY"
    ]
}
);