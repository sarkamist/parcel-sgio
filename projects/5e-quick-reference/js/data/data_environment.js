data_environment_obscurance = [
    {
        title: "Lightly obscured",
        icon: "semi-closed-eye",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
        ]
    },
    {
        title: "Heavily obscured",
        icon: "sight-disabled",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage",
        reference: "PHB, pg. 183.",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <a href='blinded'>blinded</a> condition."
        ]
    }
];

data_environment_light = [
    {
        title: "Bright light",
        icon: "sun-cloud",
        subtitle: "Normal vision",
        description: "Bright light lets most creatures see normally",
        reference: "PHB, pg. 183.",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim light",
        icon: "dungeon-light",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <a href='lightly-obscured'>lightly obscured</a> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Darkness",
        icon: "worried-eyes",
        subtitle: "Heavily obscured",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creates a <a href='heavily-obscured'>heavily obscured</a> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
];

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "blindfold",
        subtitle: "Perceive without sight",
        description: "Perceive your surroundings without relying on sight, within a certain radius",
        reference: "PHB, pg. 183.",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Darkvision",
        icon: "night-vision",
        subtitle: "Limited vision in darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only <a href='lightly-obscured'>lightly obscured</a> as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray.",
            "Many creatures in the worlds of D&D, especially those that dwell underground, have darkvision."
        ]
    },
    {
        title: "Truesight",
        icon: "eye-of-horus",
        subtitle: "See in darkness",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "PHB, pg. 184.",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see <a href='invisible'>invisible</a> creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic.",
            "Furthermore, the creature can see into the Ethereal Plane."
        ]
    }
];

data_environment_cover = [
    {
        title: "Half cover",
        icon: "broken-shield",
        subtitle: "Low wall, furniture",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+2 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "Portcullis, arrow slit",
        description: "A target has three-quarters cover if about three-quarters of it is covered by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "A target with three-quarters cover has a <b>+5 bonus to AC and Dexterity saving throws</b>.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Full cover",
        icon: "shield",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
];

data_environment_hazards = [
    {
        title: "Extreme cold",
        icon: "thermometer-cold",
        subtitle: "Gain exhaustion each hour",
        description: "Weather hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "Whenever the temperature is at or below 0 degrees Fahrenheit, a creature exposed to the cold must succeed on a DC 10 Constitution saving throw at the end of each hour or gain one level of <a href='exhaustion'>exhaustion</a>. Creatures with resistance or immunity to cold damage automatically succeed on the saving throw, as do creatures wearing cold weather gear (thick coats, gloves, and the like) and creatures naturally adapted to cold climates."
        ]
    },
    {
        title: "Extreme heat",
        icon: "thermometer-hot",
        subtitle: "Gain exhaustion each hour",
        description: "Weather hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "When the temperature is at or above 100 degrees Fahrenheit, a creature exposed to the heat and without access to drinkable water must succeed on a Constitution saving throw at the end of each hour or gain one level of <a href='exhaustion'>exhaustion</a>. The DC is 5 for the first hour and increases by 1 for each additional hour. Creatures wearing medium or heavy armor, or who are clad in heavy clothing, have disadvantage on the saving throw. Creatures with resistance or immunity to fire damage automatically succeed on the saving throw, as do creatures naturally adapted to hot climates."
        ]
    },
    {
        title: "Strong wind",
        icon: "windsock",
        subtitle: "Disadvantage on attacks and Perception",
        description: "Weather hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "A strong wind imposes disadvantage on ranged weapon attack rolls and Wisdom (Perception) checks that rely on hearing. A strong wind also extinguishes open flames, disperses fog, and makes flying by nonmagical means nearly impossible. A flying creature in a strong wind must land at the end of its turn or fall.",
            "A strong wind in a desert can create a sandstorm that imposes disadvantage on Wisdom (Perception) checks that rely on sight."
        ]
    },
    {
        title: "Heavy precipitation",
        icon: "raining",
        subtitle: "Disadvantage on Perception",
        description: "Weather hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "Everything within an area of heavy rain or heavy snowfall is <a href='lightly-obscured'>lightly obscured</a>, and creatures in the are have disadvantage on Wisdom (Perception) checks that rely on sight. Heavy rain also extinguishes open flames and imposes disadvantage on Wisdom (Perception) checks that rely on hearing.",
        ]
    },
    {
        title: "High altitude",
        icon: "summits",
        subtitle: "Reduced travel time",
        description: "Environment hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "Traveling at altitudes of 10.000 feet or higher above sea level is taxing for a creature that needs to breathe, because of the reduced amount of oxygen in the air. Each hour such a creature spends traveling at high altitude counts as 2 hours for the purpose of determining <a href='forced-march'>how long that creature can travel</a>.",
            "Breathing creatures can become acclimated to high altitude by spending 30 days or more at this elevation. Breathing creatures can't become acclimated to elevations above 20.000 feet unless they are native to such environments."
        ]
    },
    {
        title: "Frigid water",
        icon: "ice-cube",
        subtitle: "Gain exhaustion each minute",
        description: "Wilderness hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "A creature can be immersed in frigid water for a number of minutes equal to <b>its Constitution score</b> before suffering any ill effects. Each additional minute spent in frigid water requires the creature to succeed on a DC 10 Constitution saving throw or gain one level of <a href='exhaustion'>exhaustion</a>. Creatures with resistance or immunity to cold damage automatically succeed on the saving throw, as do creatures that are naturally adapted to living in ice-cold water."
        ]
    },
    {
        title: "Quicksand",
        icon: "quicksand",
        subtitle: "Sink onto the pit each turn",
        description: "Wilderness hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "A quicksand pit covers the ground in roughly a 10-foot-square area and is usually 10 feet deep. When a creature enters the area, it sinks 1d4 + 1 feet into the quicksand and becomes <a href='restrained'>restrained</a>. At the start of each of the creature's turns, it sinks another 1d4 feet. As long as the creature isn't completely submerged in quicksand, it can escape by using its action and succeeding on a Strength check. The DC is 10 plus the number of feet the creature has sunk into the quicksand. A creature that is completely submerged in quicksand <a href='suffocating'>can't breathe</a>.",
            "A creature can pull another creature within its reach out of a quicksand pit by using its action and succeeding on a Strength check. The DC is 5 plus the number of the target creature has sunk into the quicksand."
        ]
    },
    {
        title: "Razorvine",
        icon: "razorvine",
        subtitle: "Take damage on contact",
        description: "Wilderness hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "Razorvine is a plant that grows in wild tangles and hedges. It also clings to the sides of buildings and other surfaces as ivy does. A 10-foot-high, 10-foot-wide, 5-foot-thick wall or hedge of razorvine has AC 11, 25 hit points, and immunity to bludgeoning, piercing, and psychic damage.",
            "When a creature comes into direct contact with razorvine for the first time on a turn, the creature must succeed on a DC 10 Dexterity saving throw or take 5 (1d10) slashing damage from the razorvine's bladelike thorns."
        ]
    },
    {
        title: "Slippery ice",
        icon: "frozen-block",
        subtitle: "May fall prone",
        description: "Wilderness hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "Slippery ice is difficult terrain. When a creature moves onto slippery ice for the first time on a turn, it must succeed on a DC 10 Dexterity (Acrobatics) check or fall <a href='prone'>prone</a>."
        ]
    },
    {
        title: "Thin ice",
        icon: "thin-ice",
        subtitle: "May break from overweight",
        description: "Wilderness hazard",
        reference: "DMG, pg. 111.",
        bullets: [
            "Thin ice has a weight tolerance of 3d10 x 10 pounds per 10-foot-square area. Whenever the total weight on an area of thin ice exceeds its tolerance, the ice in that area breaks. All creatures on broken ice fall through."
        ]
    },
    {
        title: "Desecrated ground",
        icon: "raise-zombie",
        locked: "761d920da9aa0bba1f04b377ea5985d3",
        subtitle: "Unholy energies taint the ground",
        description: "Wilderness hazard",
        reference: "DMG, pg. 110.",
        bullets: [
            "U29tZSBjZW1ldGVyaWVzIGFuZCBjYXRhY29tYnMgYXJlIGltYnVlZCB3aXRoIHRoZSB1bnNlZW4gdHJhY2VzIG9mIGFjaWVudCBldmlsLiBBbiBhcmVhIG9mIGRlc2VjcmF0ZWQgZ3JvdW5kIGNhbiBiZSBhbnkgc2l6ZSwgYW5kIDxpPmRldGVjdCBldmlsIGFuZCBnb29kPC9pPiBzcGVsbCBjYXN0IHdpdGhpbiByYW5nZSByZXZlYWxzIGl0cyBwcmVzZW5jZS4=",
            "VW5kZWFkIHN0YW5kaW5nIG9uIGRlc2VjcmF0ZWQgZ3JvdW5kIGhhdmUgYWR2YW50YWdlIG9uIGFsbCBzYXZpbmcgdGhyb3dzLg==",
            "QSBmbGFzayBvZiBob2x5IHdhdGVyIHB1cmlmaWVzIGEgMTAtZm9vdC1zcXVhcmUgYXJlYSBvZiBkZXNlY3JhdGVkIGdyb3VuZCB3aGVuIHNwcmlua2xlZCBvbiBpdCwgYW5kIGEgPGk+aGFsbG93PC9pPiBzcGVsbCBwdXJpZmllcyBkZXNlY3JhdGVkIGdyb3VuZCB3aXRoaW4gaXRzIGFyZWEu"
        ]
    },
    {
        title: "Webs",
        icon: "spider-web",
        subtitle: "May hinder your movement",
        description: "Dungeon hazard",
        reference: "DMG, pg. 105.",
        bullets: [
            "Giant spiders weave thick, sticky webs across passages and at the bottom of pits to snare prey. These web-filled areas are difficult terrain. Moreover, a creature entering a webbed area for the first time on a turn or starting its turn there must succeed on a DC 12 Dexterity saving throw or become <a href='restrained'>restrained</a> by the webs. A <a href='restrained'>restrained</a> creature can use its action to try to escape, doing so with a successful DC 12 Strength (Athletics) or Dexterity (Acrobatics) check.",
            "Each 10-foot cube of giant webs has AC 10, 15 hit points, vulnerability to fire, and immunity to bludgeoning, piercing, and psychic damage."
        ]
    },
    {
        title: "Brown mold",
        icon: "fleshy-mass",
        subtitle: "May hinder your movement",
        description: "Dungeon hazard",
        reference: "DMG, pg. 105.",
        bullets: [
            "",
            "",
            ""
        ]
    }
];
