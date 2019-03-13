data_condition = [
    {
        title: "Blinded",
        icon: "sight-disabled",
        subtitle: "You can't see",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Charmed",
        icon: "smitten",
        subtitle: "You are charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Deafened",
        icon: "hearing-disabled",
        subtitle: "You can't hear",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Exhaustion",
        icon: "despair",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in six levels",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Finishing a <a href='long-rest'>long rest</a> reduces your exhaustion level by 1, provided that you have also had some food and drink."
        ]
    },
    {
        title: "Frightened",
        icon: "sharp-smile",
        subtitle: "You are frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly <a href='move'>move</a> closer to the source of your fear."
        ]
    },
    {
        title: "Grappled",
        icon: "grab",
        subtitle: "You are grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is <a href='incapacitated'>incapacitated</a>.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Incapacitated",
        icon: "internal-injury",
        subtitle: "You can't take actions or reactions",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "You can't be seen",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of <a href='hide'>hiding</a>, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralyzed",
        icon: "skeleton-inside",
        subtitle: "You are paralyzed",
        description: "You can't do anything",
        reference: "PHB, pg. 291.",
        bullets: [
            "You are <a href='incapacitated'>incapacitated</a> and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a <a href='critical-hit'>critical hit</a> if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrified",
        icon: "gargolye",
        subtitle: "You are transformed into stone",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are <a href='incapacitated'>incapacitated</a>, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Poisoned",
        icon: "vomiting",
        subtitle: "You are poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Prone",
        icon: "falling",
        subtitle: "You are prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to <a href='crawl'>crawl</a>, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Restrained",
        icon: "imprisoned",
        subtitle: "You are restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Stunned",
        icon: "knockout",
        subtitle: "You are stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are <a href='incapacitated'>incapacitated</a>, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Unconscious",
        icon: "coma",
        subtitle: "You are unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are <a href='incapacitated'>incapacitated</a>, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a <a href='critical-hit'>critical hit</a> if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Encumbered",
        icon: "weight-lifting-down",
        subtitle: "You are encumbered",
        description: "You are encumbered",
        reference: "PHB, pg. 176.",
        bullets: [
            "If you carry weight in excess of 5 times your Strength score, you are encumbered, which means your speed drops by 10 feet.",
            "If you carry weight in excess of 10 times your Strength score, up to your maximum carrying capacity, you are instead heavily encumbered, which means your speed drops by 20 feet and you have disadvantage on ability checks, attack rolls, and saving throws that use Strength, Dexterity, or Constitution."
        ]
    },
    {
        title: "Concentrated",
        icon: "meditation",
        subtitle: "You maintain your concentration",
        description: "You maintain your concentration on a spell",
        reference: "PHB, pg. 203.",
        bullets: [
            "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends.",
            "If a spell must be maintained with concentration, that fact appears in its Duration entry, and the spell specifies how long you can concentrate on it. You can end concentration at any time (no action required).",
            "Normal activity, such as moving and attacking, doesn't interfere with concentration. The following factors can break concentration.",
            "<b>Casting another spell that requires concentration.</b> You lose concentration on a spell if you cast another spell that requires concentration. You can't concentrate on two spells at once.",
            "<b>Taking damage.</b> Whenever you take damage while you are concentrating on a spell, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher. If you take damage from multiple sources, such as an arrow and a dragon's breath, you make a separate saving throw for each source of damage.",
            "<b>Being incapacitated or killed.</b> You lose concentration on a spell if you are incapacitated or if you die.",
            "The DM might also decide that certain environmental phenomena, such as a wave crashing over you while you're on a storm-tossed ship, require you to succeed on a DC 10 Constitution saving throw to maintain concentration on a spell."
        ]
    },
    {
        title: "Injured",
        icon: "arm-bandage",
        subtitle: "Potential long-term injuries",
        description: "A creature might sustain a lingering injury under certain circumstances.",
        reference: "DMG, pg. 272.",
        bullets: [
            "You might sustain a lingering injury under the following circumstances:<br>• When you take a <a href='critical-hit'>critical hit</a><br>• When you drop to 0 hit points but you aren't killed outright<br>• When you fail a death saving throw by 5 or more",
            "To determine the nature of the injury, roll on the Lingering Injuries table (at the DM's discretion)."
        ]
    },
    {
        title: "Mad",
        icon: "screaming",
        subtitle: "Short-term, long-term, or indefinite",
        description: "Sometimes the stress of being an adventurer can be too much to bear",
        reference: "DMG, pg. 258-260.",
        bullets: [
            "When afflicted with <b>short-term madness</b> you are subjected to a random effect determined by a roll on the Short-Term Madness table for 1d10 minutes.",
            "When afflicted with <b>long-term madness</b> you are subjected to a random effect determined by a roll on the Long-Term Madness table for 1d10 x 10 hours.",
            "When with <b>indefinite madness</b> you are subjected to a random effect determined by a roll on the Indefinite Madness table that lasts until cured.",
            "A <i>calm emotions</i> spell can suppress the effects of madness, while a <i>lesser restoration</i> spell can rid you of a short-term or long-term madness. Depending on the source of the madness, <i>remove curse</i> or <i>dispel evil</i> might also prove effective. A <i>greater restoration</i> spell or more powerful magic is required to rid you of indefinite madness."
        ]
    }
];

data_physiological_needs = [
    {
        title: "Starved",
        icon: "eating",
        subtitle: "You begin to feel hungry",
        description: "You begin to feel hungry, ultimately leading to exhaustion",
        reference: "PHB, pg. 185.",
        bullets: [
            "You need one pound of food per day and can make food last longer by subsisting on half rations. Eating half a pound of food in a day counts as half a day without food.",
            "You can go without food for a number of days equal to <b>3 + your Constitution modifier</b> (minimum 1). At the end of each day beyond that limit, you automatically suffer one level of <a href='exhaustion'>exhaustion</a>.",
            "A normal day of eating resets your count of days without food to zero.",
            "<a href='exhaustion'>exhaustion</a> caused by lack of food or water can't be removed until the character eats and drinks the full required amount."
        ]
    },
    {
        title: "Dehydrated",
        icon: "drinking",
        subtitle: "You begin to feel thirsty",
        description: "You begin to feel thirsty, ultimately leading to exhaustion",
        reference: "PHB, pg. 185.",
        bullets: [
            "You need one gallon of water per day, or two gallons per day if the weather is hot.",
            "When you drink only half that much water, you must succeed on a DC 15 Constitution saving throw or suffer one level of <a href='exhaustion'>exhaustion</a> at the end of the day.",
            "When you have access to even less water, you automatically suffer one level of <a href='exhaustion'>exhaustion</a> at the end of the day.",
            "If you already have one or more levels of <a href='exhaustion'>exhaustion</a>, you take two levels in either case",
            "<a href='exhaustion'>exhaustion</a> caused by lack of food or water can't be removed until the character eats and drinks the full required amount."
        ]
    },
    {
        title: "Sleep deprived",
        icon: "sleepy",
        subtitle: "You begin to feel tired",
        description: "You begin to feel tired, ultimately leading to exhaustion",
        reference: "XGTE, pg. 78.",
        bullets: [
            "Whenever you end a 24-hour period without finishing a <a href='long-rest'>long rest</a>, you must succeed on a DC 10 Constitution saving throw or suffer one level of <a href='exhaustion'>exhaustion</a>.",
            "It becomes harder to fight off exhaustion if you stay awake for multiple days. After the first 24 hours, the DC increases by 5 for each consecutive 24-hour period without a <a href='long-rest'>long rest</a>. The DC resets to 10 when you finish a <a href='long-rest'>long rest</a>.",
            "When you finish a <a href='long-rest'>long rest</a> during which you slept in medium or heavy armor, you regain only one quarter of your spent Hit Dice (minimum of one die). If you have any levels of <a href='exhaustion'>exhaustion</a>, the rest doesn't reduce your <a href='exhaustion'>exhaustion</a> level."
        ]
    },
    {
        title: "Suffocating",
        icon: "drowning",
        subtitle: "You begin to suffocate",
        description: "You begin to suffocate, running out of breath",
        reference: "PHB, pg. 183.",
        bullets: [
            "A creature can hold your breath for a number of minutes equal to <b>1 + your Constitution modifier</b> (minimum of 30 seconds).",
            "When a creature runs out of breath, it can survive for a number of rounds equal to <b>its Constitution modifier</b> (minimum 1 round). At the start of its next turn, it drops to 0 hit points and is dying.",
            "For example, a creature with a Constitution of 14 can hold its breath for 3 minutes. If it starts suffocating, it has 2 rounds to reach air before it drops to 0 hit points."
        ]
    }
];

data_modifiers = [
    {
        title: "Rolling 1 or 20",
        icon: "dice-twenty-faces-twenty",
        subtitle: "Attack rolls",
        description: "Sometimes fate blesses or curses a combatant, causing the novice to hit and the veteran to miss.",
        reference: "PHB, pg. 194.",
        bullets: [
            "If the d20 roll for an <a href='attack'>attack</a> is a 20, the <a href='attack'>attack</a> hits regardless of any modifiers ar the target's AC. In addition, the attack is a <a href='critical-hit'>critical hit</a>.",
            "If the d20 roll for an <a href='attack'>attack</a> is a 1, the <a href='attack'>attack</a> misses regardless of any modifiers or the target's AC."
        ]
    }, {
        title: "Critical hit",
        icon: "helmet-head-shot",
        subtitle: "Damage rolls",
        description: "Critical hits let you roll extra dice for an attack's damage.",
        reference: "PHB, pg. 196.",
        bullets: [
            "When you score a critical hit, you get to roll extra dice for the attack's damage against the target. Roll all of the attack's damage dice twice and add them together. Then add any relevant modifiers as normal. To speed up play you can roll all the damage dice at once. For example, if you score a critical hit with a dagger, roll 2d4 for the damage, rather than 1d4, and then add your relevant ability modifier.",
            "If the attack involves other damage dice, such as from the rogue's <i>Sneak Attack</i> feature, you roll those dice twice as well.",
            "Alternatively, when you score a critical hit you can subject the target to a <a href='injured'>lingering injury</a>."
        ]
    }, {
        title: "Knocking a creature out",
        icon: "coma",
        subtitle: "Damage rolls",
        description: "Sometimes an attacker wants to incapacitate a foe, rather than deal a killing blow.",
        reference: "PHB, pg. 198.",
        bullets: [
            "When you reduce a creature to 0 hit points with a melee <a href='attack'>attack</a>, you can knock the creature out. You can make this choice the instant the damage is dealt. The creature falls <a href='unconscious'>unconscious</a> and is stable."
        ]
    }, {
        title: "Massive damage",
        icon: "deadly-strike",
        subtitle: "Damage rolls",
        description: "Is easier for you to fall unconscious against massive damage.",
        reference: "DMG, pg. 273.",
        bullets: [
            "When you take damage from a single source equal to or greater than half your hit point maximum, you must succeed on a DC 15 Constitution saving throw or suffer a random effect determined by a roll on the System Shock table (at the DM's discretion)."
        ]
    }, {
        title: "Falling",
        icon: "fall-down",
        subtitle: "Take damage",
        description: "A fall from a great height is one of the most common hazards facing an adventurer.",
        reference: "PGB, pg. 183. / XGTE, pg. 77",
        bullets: [
            "When you fall from a great height, you instantly descend up to 500 feet. If you're still falling on your next turn, you descend up to 500 feet at the end of that turn. This process continues until the fall ends, either because you hit the ground or the fall is otherwise halted.",
            "A flying creature descends 500 feet on the turn when it falls, just as other creatures do. But if that creature starts any of its later turns still falling and is <a href='prone'>prone</a>, it can halt the fall on its turn by spending half its flying speed to counter the <a href='prone'>prone</a> condition (as if it were standing up in midair).",
            "A flying creature in flight falls if it is knocked <a href='prone'>prone</a>, if its speed is reduced to 0 feet, or if it otherwise loses the ability to <a href='move'>move</a>, unless it can hover or it is being held aloft by magic, such as the <i>fly</i> spell.",
            "A flying creature can flap its wings furiously or take similar measures to slow the velocity of its fall, subtracting it's current flying speed from the distance it fell before calculating falling damage.",
            "At the end of a fall, a creature takes 1d6 bludgeoning damage for every 10 feet it fell, to a maximum of 20d6. The creature lands <a href='prone'>prone</a>, unless it avoids taking damage from the fall."
        ]
    }
];

data_diseases = [
    {
        title: "Cackle fever/Nilbogism",
        icon: "goblin-head",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "You succumb to fits of mad laughter",
        description: "Source of infection is unknown, but being next to an infected creature during a mad laughter may infect you",
        reference: "DMG, pg. 257. (houseruled)",
        bullets: [
            "VGhpcyBkaXNlYXNlIHRhcmdldCBnaWFudHMgYW5kIGh1bWFub2lkcywgYWx0aG91Z2ggZ25vbWVzIGFuZCBnb2JsaW5vaWRzIGFyZSBzdHJhbmdlbHkgaW1tdW5lLiBXaGlsZSBpbiB0aGUgZ3JpcHMgb2YgdGhpcyBkaXNlYXNlLCB2aWN0aW1zIGZyZXF1ZW50bHkgc3VjY3VtYiB0byBmaXRzIG9mIG1hZCBsYXVnaHRlciwgZ2l2aW5nIHRoZSBkaXNlYXNlIGl0cyBjb21tb24gbmFtZSBhbmQgaXRzIG1vcmJpZCBuaWNrbmFtZTogdGhlIHNocmlla3Mu",
            "U3ltcHRvbXMgbWFuaWZlc3QgMWQ0IGhvdXJzIGFmdGVyIGluZmVjdGlvbiBhbmQgaW5jbHVkZSBmZXZlciBhbmQgZGlzb3JpZW50YXRpb24uIFRoZSBpbmZlY3RlZCBjcmVhdHVyZSBnYWlucyBvbmUgbGV2ZWwgb2YgPGEgaHJlZj0nZXhoYXVzdGlvbic+ZXhoYXVzdGlvbjwvYT4gdGhhdCBjYW4ndCBiZSByZW1vdmVkIHVudGlsIHRoZSBkaXNlYXNlIGlzIGN1cmVkLg==",
            "QW55IGV2ZW50IHRoYXQgY2F1c2VzIHRoZSBpbmZlY3RlZCBjcmVhdHVyZSBncmVhdCBzdHJlc3Mg4oCUaW5jbHVkaW5nIGVudGVyaW5nIGNvbWJhdCwgdGFraW5nIGRhbWFnZSwgZXhwZXJpZW5jaW5nIGZlYXIsIG9yIGhhdmluZyBhIG5pZ2h0bWFyZeKAlCBmb3JjZXMgdGhlIGNyZWF0dXJlIHRvIG1ha2UgYSBEQyAxMyBDb25zdGl0dXRpb24gc2F2aW5nIHRocm93LiBPbiBhIGZhaWxlZCBzYXZlLCB0aGUgY3JlYXR1cmUgdGFrZXMgNSAoMWQxMCkgcHN5Y2hpYyBkYW1hZ2UgYW5kIGJlY29tZXMgPGEgaHJlZj0naW5jYXBhY2l0YXRlZCc+aW5jYXBhY2l0YXRlZDwvYT4gd2l0aCBtYWQgbGF1Z2h0ZXIgZm9yIDEgbWludXRlLiBUaGUgY3JlYXR1cmUgY2FuIHJlcGVhdCB0aGUgc2F2aW5nIHRocm93IGF0IHRoZSBlbmQgb2YgZWFjaCBvZiBpdHMgdHVybnMsIGVuZGluZyB0aGUgbWFkIGxhdWdodGVyIGFuZCA8YSBocmVmPSdpbmNhcGFjaXRhdGVkJz5pbmNhcGFjaXRhdGVkPC9hPiBjb25kaXRpb24gb24gYSBzdWNjZXNzLg==",
            "QW55IGdpYW50IG9yIGh1bWFub2lkIGNyZWF0dXJlIHRoYXQgc3RhcnRzIGl0cyB0dXJuIHdpdGhpbiAxMCBmZWV0IG9mIGFuIGluZmVjdGVkIGNyZWF0dXJlIGluIHRoZSB0aHJvZXMgb2YgbWFkIGxhdWdodGVyIG11c3Qgc3VjY2VlZCBvbiBhIERDIDEwIENvbnN0aXR1dGlvbiBzYXZpbmcgdGhyb3cgb3IgYmVjb21lIGluZmVjdGVkIHdpdGggdGhlIGRpc2Vhc2UuIE9uY2UgYSBjcmVhdHVyZSBzdWNjZWVkcyBvbiB0aGlzIHNhdmUsIGl0IGlzIGltbXVuZSB0byB0aGUgbWFkIGxhdWdodGVyIG9mIHRoYXQgcGFydGljdWxhciBpbmZlY3RlZCBjcmVhdHVyZSBmb3IgMjQgaG91cnMu",
            "QXQgdGhlIGVuZCBvZiBlYWNoIDxhIGhyZWY9J2xvbmctcmVzdCc+bG9uZyByZXN0PC9hPiwgYW4gaW5mZWN0ZWQgY3JlYXR1cmUgY2FuIG1ha2UgYSBEQyAxMyBDb25zdGl0dXRpb24gc2F2aW5nIHRocm93LiBPbiBhIHN1Y2Nlc3NmdWwgc2F2ZSwgdGhlIERDIGZvciB0aGlzIHNhdmUgYW5kIGZvciB0aGUgc2F2ZSB0byBhdm9pZCBhbiBhdHRhY2sgb2YgbWFkIGxhdWdodGVyIGRyb3BzIGJ5IDFkNi4gV2hlbiB0aGUgc2F2aW5nIHRocm93IERDIGRyb3BzIHRvIDAsIHRoZSBjcmVhdHVyZSByZWNvdmVycyBmcm9tIHRoZSBkaXNlYXNlLiBBIGNyZWF0dXJlIHRoYXQgZmFpbHMgdGhyZWUgb2YgdGhlc2Ugc2F2aW5nIHRocm93cyBnYWlucyBhIHJhbmRvbWx5IGRldGVybWluZWQgZm9ybSBvZiA8YSBocmVmPSdtYWQnPmluZGVmaW5pdGUgbWFkbmVzczwvYT4u",
            "QWx0aG91Z2ggZ29ibGlub2lkcyBhcmUgaW1tdW5lIHRvIHRoZSBjYWNrbGUgZmV2ZXIsIGEgc3BlY2lhbGx5IHdlYWsgYW5kIG1pc3RyZWF0ZWQgZ29ibGluIG1heSBwc3ljaGljYWxseSBtYW5pZmVzdCBhIGplc3RlciBzcGlyaXQgd2hlbiBpbmZlY3RlZCBieSB0aGlzIGRpc2Vhc2UuIFRoaXMgc3Bpcml0IGlzIGtub3duIGFzIGEgPGI+TmlsYm9nPC9iPiBhbmQgYnJpbmdzIGhhdm9jIGFtb25nIGdvYmxpbm9pZCBob3N0cyBieSBwb3NzZXNpbmcgb25seSBnb2JsaW5zIGFuZCBpbmZ1c2luZyB0aGVtIHdpdGggYml6YXJyZSBtYWdpY2FsIHBvd2VycywgY29lcmNpbmcgaXRzIGhvc3QgdG8gdHVybiBhZ2FpbnN0IHRob3NlIHdobyB3cm9uZ2VkIGhpbS4gVGhpcyBzdHJhbmdlIHBoZW5vbWVub24gaXMga25vd24gYXMgTmlsYm9naXNtIGFuZCBpcyBmZWFyZWQgYW1vbmcgdGhlIHJhbmtzIG9mIHRoZSBidWdiZWFycyBhbmQgaG9iZ29ibGlucywgd2hvIHVzdWFsbHkgbWlzdHJlYXQgdGhlaXIgd2Vha2VyIGJyZXRocmVuLg=="
        ]
    },
    {
        title: "Sewer plague",
        icon: "mouse",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "You feel fatigated and constipated",
        description: "Being bitten by a carrier or coming into contact with filth or offal contaminated may infect you",
        reference: "DMG, pg. 257.",
        bullets: [
            "U2V3ZXIgcGxhZ3VlIGlzIGEgZ2VuZXJpYyB0ZXJtIGZvciBhIGJyb2FkIGNhdGVnb3J5IG9mIGlsbG5lc3NlcyB0aGF0IGluY3ViYXRlIGluIHNld2VycywgcmVmdXNlIGhlYXBzLCBzdGFnbmFudCBzd2FtcHMsIGFuZCB3aGljaCBhcmUgc29tZXRpbWVzIHRyYW5zbWl0dGVkIGJ5IGNyZWF0dXJlcyB0aGF0IGR3ZWxsIGluIHRob3NlIGFyZWFzLCBzdWNoIGFzIHJhdHMgYW5kIG90eXVnaHMu",
            "V2hlbiBhIGdpYW50IG9yIGh1bWFub2lkIGlzIGJpdHRlbiBieSBhIGNyZWF0dXJlIHRoYXQgY2FycmllcyB0aGlzIGRpc2Vhc2UsIG9yIHdoZW4gaXQgY29tZXMgaW50byBjb250YWN0IHdpdGggZmlsdGggb3Igb2ZmYWwgY29udGFtaW5hdGVkIGJ5IHRoZSBkaXNlYXNlLCB0aGUgY3JlYXR1cmUgbXVzdCBzdWNjZWVkIG9uIGEgREMgMTEgQ29uc3RpdHV0aW9uIHNhdmluZyB0aHJvdyBvciBiZWNvbWUgaW5mZWN0ZWQu",
            "SXQgdGFrZXMgMWQ0IGRheXMgZm9yIHNld2VyJ3MgcGxhZ3VlIHN5bXB0b21zIHRvIG1hbmlmZXN0IGluIGFuIGluZmVjdGVkIGNyZWF0dXJlLiBTeW1wdG9tcyBpbmNsdWRlIGZhdGlndWUgYW5kIGNyYW1wcy4gVGhlIGluZmVjdGVkIGNyZWF0dXJlIHN1ZmZlcnMgb25lIGxldmVsIG9mIDxhIGhyZWY9J2V4aGF1c3Rpb24nPmV4aGF1c3Rpb248L2E+LCBhbmQgaXQgcmVnYWlucyBvbmx5IGhhbGYgdGhlIG5vcm1hbCBudW1iZXIgb2YgaGl0IHBvaW50cyBmcm9tIHNwZW5kaW5nIEhpdCBEaWNlIGFuZCBubyBoaXQgcG9pbnRzIGZyb20gZmluaXNoaW5nIGEgPGEgaHJlZj0nbG9uZy1yZXN0Jz5sb25nIHJlc3Q8L2E+Lg==",
            "QXQgdGhlIGVuZCBvZiBlYWNoIDxhIGhyZWY9J2xvbmctcmVzdCc+bG9uZyByZXN0PC9hPiwgYW4gaW5mZWN0ZWQgY3JlYXR1cmUgbXVzdCBtYWtlIGEgREMgMTEgQ29uc3RpdHV0aW9uIHNhdmluZyB0aHJvdy4gT24gYSBmYWlsZWQgc2F2ZSwgdGhlIGNoYXJhY3RlciBnYWlucyBvbmUgbGV2ZWwgb2YgPGEgaHJlZj0nZXhoYXVzdGlvbic+ZXhoYXVzdGlvbjwvYT4uIE9uIGEgc3VjY2Vzc2Z1bCBzYXZlLCB0aGUgY2hhcmFjdGVyJ3MgPGEgaHJlZj0nZXhoYXVzdGlvbic+ZXhoYXVzdGlvbjwvYT4gbGV2ZWwgZGVjcmVhc2VzIGJ5IG9uZSBsZXZlbC4gSWYgYSBzdWNjZXNzZnVsIHNhdmluZyB0aHJvdyByZWR1Y2VzIHRoZSBpbmZlY3RlZCBjcmVhdHVyZSdzIGxldmVsIG9mIDxhIGhyZWY9J2V4aGF1c3Rpb24nPmV4aGF1c3Rpb248L2E+IGJlbG93IDEsIHRoZSBjcmVhdHVyZSByZWNvdmVycyBmcm9tIHRoZSBkaXNlYXNlLg=="
        ]
    },
    {
        title: "Sight rot",
        icon: "bleeding-eye",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "Your vision begins to blurry",
        description: "Drinking water tainted by sight rot may infect you",
        reference: "DMG, pg. 257.",
        bullets: [
            "VGhpcyBwYWluZnVsIGluZmVjdGlvbiBjYXVzZXMgYmxlZWRpbmcgZnJvbSB0aGUgZXllcyBhbmQgZXZlbnR1YWxseSBibGluZHMgdGhlIHZpY3RpbS4=",
            "QSBiZWFzdCBvciBodW1hbm9pZCB0aGF0IGRyaW5rcyB3YXRlciB0YWludGVkIGJ5IHNpZ2h0IHJvdCBtdXN0IHN1Y2NlZWQgb24gYSBEQyAxNSBDb25zdGl0dXRpb24gc2F2aW5nIHRocm93IG9yIGJlY29tZSBpbmZlY3RlZC4gT25lIGRheSBhZnRlciBpbmZlY3Rpb24sIHRoZSBjcmVhdHVyZSdzIHZpc2lvbiBzdGFydHMgdG8gYmVjb21lIGJsdXJyeS4gVGhlIGNyZWF0dXJlIHRha2VzIGEgLTEgcGVuYWx0eSB0byBhdHRhY2sgcm9sbHMgYW5kIGFiaWxpdHkgY2hlY2tzIHRoYXQgcmVseSBvbiBzaWdodC4gQXQgdGhlIGVuZCBvZiBlYWNoIDxhIGhyZWY9J2xvbmctcmVzdCc+bG9uZyByZXN0PC9hPiBhZnRlciB0aGUgc3ltcHRvbXMgYXBwZWFyLCB0aGUgcGVuYWx0eSB3b3JzZW5zIGJ5IDEuIFdoZW4gaXQgcmVhY2hlcyAtNSwgdGhlIHZpY3RpbSBpcyA8YSBocmVmPSdibGluZGVkJz5ibGluZGVkPC9hPiB1bnRpbCBpdHMgc2lnaHQgaXMgcmVzdG9yZWQgYnkgbWFnaWMgc3VjaCBhcyA8aT5sZXNzZXIgcmVzdG9yYXRpb248L2k+IG9yIDxpPmhlYWw8L2k+Lg==",
            "U2lnaHQgcm90IGNhbiBiZSBjdXJlZCB1c2luZyBhIHJhcmUgZmxvd2VyIGNhbGxlZCBFeWVicmlnaHQsIHdoaWNoIGdyb3dzIGluIHNvbWUgc3dhbXBzLiBHaXZlbiBhbiBob3VyLCBhIGNoYXJhY3RlciB3aG8gaGFzIHByb2ZpY2llbmN5IHdpdGggYW4gaGVyYWJsaXNtIGtpdCBjYW4gdHVybiB0aGUgZmxvd2VyIGludG8gb25lIGRvc2Ugb2Ygb2ludG1lbnQuIEFwcGxpZWQgdG8gdGhlIGV5ZXMgYmVmb3JlIGEgbG9uZyByZXN0LCBvbmUgZG9zZSBvZiBpdCBwcmV2ZW50cyB0aGUgZGlzZWFzZSBmcm9tIHdvcnNlbmluZyBhZnRlciB0aGF0IHJlc3QuIEFmdGVyIHRocmVlIGRvc2VzLCB0aGUgb2ludG1lbnQgY3VyZXMgdGhlIGRpc2Vhc2UgZW50aXJlbHku"
        ]
    },
    {
        title: "Mad monkey fever",
        icon: "monkey",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "You succumb to madness",
        description: "Contact with a thin, blue, odorless mist may infect you",
        reference: "TOA, pg. 40.",
        bullets: [
            "QSBtYWdpY2FsIG1pc3QgY3JlZXBzIHRocm91Z2ggdGhlIGp1bmdsZXMuIENvbnRhY3Qgd2l0aCB0aGlzIHRoaW4sIGJsdWUsIG9kb3JsZXNzIG1pc3QgY2FuIGluZmVjdCBnaWFudHMgYW5kIGh1bWFub2lkcyB3aXRoIG1hZCBtb25rZXkgZmV2ZXIuIEEgPGk+ZGlzcGVsIG1hZ2ljPC9pPiBzcGVsbCBkZXN0cm95cyB0aGUgbWlzdCBpbiBhIDIwLWZvb3Qgc3F1YXJlIHN0YXJ0aW5nIGF0IGEgcG9pbnQgY2hvc2VuIGJ5IHRoZSBjYXN0ZXIgd2l0aGluIHRoZSBzcGVsbCdzIHJhbmdlLiBBbiBlbmNvdW50ZXIgd2l0aCB0aGlzIG1pc3QgdHlwaWNhbGx5IGNvdmVycyAxZDYgc3VjaCBhcmVhcyAoNDAwLTI0MDAgc3F1YXJlIGZlZXQpLg==",
            "QSBnaWFudCBvciBodW1hbm9pZCB0aGF0IGNvbWVzIGludG8gY29udGFjdCB3aXRoIHRoZSBtaXN0IG11c3Qgc3VjY2VlZCBvbiBhIERDIDEzIENvbnN0aXR1dGlvbiBzYXZpbmcgdGhyb3cgb3IgYmVjb21lIGluZmVjdGVkIHdpdGggbWFkIG1vbmtleSBmZXZlci4gVGhlIGluZmVjdGVkIGNyZWF0dXJlIGdhaW5zIGEgcmFuZG9tIGZvcm0gb2YgPGEgaHJlZj0nbWFkJz5sb25nLXRlcm0gbWFkbmVzczwvYT4gdGhhdCBtYW5pZmVzdHMgMWQ2IGhvdXJzIGFmdGVyIGluZmVjdGlvbiBhbmQgbGFzdHMgZm9yIHRoZSBkdXJhdGlvbi4=",
            "SWYgdGhlIG1hZG5lc3MgaXMgYWxsb3dlZCB0byBydW4gaXRzIGZ1bGwgY291cnNlLCB0aGUgY3JlYXR1cmUgbXVzdCByZXBlYXQgdGhlIHNhdmluZyB0aHJvdyBhdCB0aGUgZW5kIG9mIHRoZSBtYWRuZXNzLiBJZiB0aGUgc2Vjb25kIHNhdmluZyB0aHJvdyBmYWlscywgdGhlIGNyZWF0dXJlIHN1ZmZlcnMgYW5vdGhlciBib3V0IG9mIDxhIGhyZWY9J21hZCc+bG9uZy10ZXJtIG1hZG5lc3M8L2E+IHRoYXQgbGFzdHMgZm9yIHRoZSBub3JtYWwgZHVyYXRpb24uIFRoZSBtYWRuZXNzIHN5bXB0b21zIGNvbnRpbnVlIHVudGlsIHRoZSBkaXNlYXNlIGVuZHMu"
        ]
    },
    {
        title: "Shivering sickness",
        icon: "earwig",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "You shiver and grind your teeth",
        description: "Being bitten by an insect may infect you",
        reference: "TOA, pg. 40.",
        bullets: [
            "SW5zZWN0cyBuYXRpdmUgdG8gdGhlIGp1bmdsZXMgYW5kIG1hcnNoZXMgY2FycnkgdGhpcyBkaXNlYXNlLCBzaGl2ZXJpbmcgc2lja25lc3MuIFRoZSBlYXNpZXN0IHByb3RlY3Rpb24gYWdhaW5zdCBpdCBpcyBhIGNvYXRpbmcgb2YgaW5zZWN0LXJlcGVsbGluZyBzYWx2ZSBvbiBhbGwgZXhwb3NlZCBza2luLg==",
            "QSBnaWFudCBvciBodW1hbm9pZCB0aGF0IHRha2VzIGRhbWFnZSBmcm9tIGluc2VjdCBzd2FybXMgb3IgZnJvbSBnaWFudCBjZW50aXBlZGVzLCBnaWFudCBzY29ycGlvbnMsIG9yIGdpYW50IHdhc3BzIGlzIGV4cG9zZWQgdG8gdGhlIGRpc2Vhc2UgYXQgdGhlIGVuZCBvZiB0aGUgZW5jb3VudGVyLiBUaG9zZSB3aG8gaGF2ZW4ndCBhcHBsaWVkIGluc2VjdCByZXBlbGxlbnQgc2luY2UgdGhlaXIgcHJldmlvdXMgPGEgaHJlZj0nbG9uZy1yZXN0Jz5sb25nIHJlc3Q8L2E+IGFyZSBleHBvc2VkIHRvIHRoZSBkaXNlYXNlIHdoZW4gdGhleSBmaW5pc2ggYSA8YSBocmVmPSdsb25nLXJlc3QnPmxvbmcgcmVzdDwvYT4u",
            "QSBnaWFudCBvciBodW1hbm9pZCBleHBvc2VkIHRvIHRoZSBkaXNlYXNlIG11c3Qgc3VjY2VlZCBvbiBhIERDIDExIENvbnN0aXR1dGlvbiBzYXZpbmcgdGhyb3cgb3IgYmVjb21lIGluZmVjdGVkLiBBIGNyZWF0dXJlIHdpdGggbmF0dXJhbCBhcm1vciBoYXMgYWR2YW50YWdlIG9uIHRoZSBzYXZpbmcgdGhyb3cuIEl0IHRha2VzIDJkNiBob3VycyBmb3Igc3ltcHRvbXMgdG8gbWFuaWZlc3QgaW4gYW4gaW5mZWN0ZWQgY3JlYXR1cmUuIFN5bXB0b21zIGluY2x1ZGUgYmx1cnJlZCB2aXNpb24sIGRpc29yaWVudGF0aW9uLCBhbmQgYSBzdWRkZW4gZHJvcCBpbiBib2R5IHRlbXBlcmF0dXJlIHRoYXQgY2F1c2VzIHVuY29udHJvbGxhYmxlIHNoaXZlcmluZyBhbmQgY2hhdHRlcmluZyBvZiB0aGUgdGVldGgu",
            "T25jZSBzeW1wdG9tcyBiZWdpbiwgdGhlIGluZmVjdGVkIGNyZWF0dXJlIHJlZ2FpbnMgb25seSBoYWxmIHRoZSBub3JtYWwgbnVtYmVyIG9mIGhpdCBwb2ludHMgZnJvbSBzcGVuZGluZyBIaXQgRGljZSBhbmQgbm8gaGl0IHBvaW50cyBmcm9tIGEgPGEgaHJlZj0nbG9uZy1yZXN0Jz5sb25nIHJlc3Q8L2E+LiBUaGUgaW5mZWN0ZWQgY3JlYXR1cmUgYWxzbyBoYXMgZGlzYWR2YW50YWdlIG9uIGFiaWxpdHkgY2hlY2tzIGFuZCBhdHRhY2sgcm9sbHMuIEF0IHRoZSBlbmQgb2YgYSA8YSBocmVmPSdsb25nLXJlc3QnPmxvbmcgcmVzdDwvYT4sIGFuIGluZmVjdGVkIGNyZWF0dXJlIHJlcGVhdHMgdGhlIHNhdmluZyB0aHJvdywgc2hha2luZyBvZmYgdGhlIGRpc2Vhc2Ugb24gYSBzdWNjZXNzZnVsIHNhdmUu"
        ]
    },
    {
        title: "Throat leeches",
        icon: "leeching-worm",
        locked: "4199c83a2e87859ffd045b169274fbb5",
        subtitle: "You feel shortness of breath",
        description: "Drinking water tainted by throat leeches may infect you",
        reference: "TOA, pg. 40.",
        bullets: [
            "TWludXNjdWxlIHBhcmFzaXRlcyBrbm93biBhcyB0aHJvYXQgbGVlY2hlcyBpbmZlY3QgdGhlIHdhdGVyIGluIGZvcmVzdHMsIHN3YW1wcywgYW5kIHJpdmVycy4gQW55IGdpYW50IG9yIGh1bWFub2lkIHRoYXQgc3dhbGxvd3MgdGFpbnRlZCB3YXRlciBtdXN0IHN1Y2NlZWQgb24gYSBEQyAxMiBDb25zdGl0dXRpb24gc2F2aW5nIHRocm93IG9yIGJlIGluZmVzdGVkIHdpdGggdGhyb2F0IGxlZWNoZXMuIEltbWVkaWF0ZSBzeW1wdG9tcyBpbmNsdWRlIHRocm9hdCBpbmZsYW1tYXRpb24gYW5kIHNob3J0bmVzcyBvZiBicmVhdGgu",
            "QWZ0ZXIgMWQ2IGhvdXJzLCB0aGUgaW5mZWN0ZWQgY2hhcmFjdGVyIGdhaW5zIG9uZSBsZXZlbCBvZiA8YSBocmVmPSdleGhhdXN0aW9uJz5leGhhdXN0aW9uPC9hPiB0aGF0IGNhbid0IGJlIHJlbW92ZWQgdW50aWwgdGhlIGRpc2Vhc2UgaXMgY3VyZWQuIEF0IHRoZSBlbmQgb2YgZWFjaCA8YSBocmVmPSdsb25nLXJlc3QnPmxvbmcgcmVzdDwvYT4sIHRoZSBpbmZlY3RlZCBjcmVhdHVyZSBtdXN0IHJlcGVhdCB0aGUgc2F2aW5nIHRocm93LiBPbiBhIGZhaWxlZCBzYXZlLCB0aGUgY3JlYXR1cmUncyBleGhhdXN0aW9uIGluY3JlYXNlcyBieSBvbmUgbGV2ZWwuIE9uIGEgc3VjY2Vzc2Z1bCBzYXZlLCB0aGUgY3JlYXR1cmUncyBleGhhdXN0aW9uIGRlY3JlYXNlcyBieSBvbmUgbGV2ZWwuIGxmIGEgc3VjY2Vzc2Z1bCBzYXZpbmcgdGhyb3cgcmVkdWNlcyB0aGUgaW5mZWN0ZWQgY3JlYXR1cmUncyBsZXZlbCBvZiBleGhhdXN0aW9uIGJlbG93IG9uZSwgdGhlIGNyZWF0dXJlIHJlY292ZXJzIGZyb20gdGhlIGRpc2Vhc2Uu",
            "RXhwbG9yZXJzIGNhbiBhdm9pZCBjb250cmFjdGluZyB0aHJvYXQgbGVlY2hlcyBieSBkcmlua2luZyBvbmx5IHJhaW53YXRlciBvciB3YXRlciB0aGF0J3MgYmVlbiBib2lsZWQgb3IgbWFnaWNhbGx5IHB1cmlmaWVkLg=="
        ]
    }
];

data_curses = [
    {
        title: "Death curse",
        icon: "cursed-star",
        locked: "1281f8fbf72adf58d78111c554d58c6b",
        subtitle: "You begin to waste away",
        description: "You begin to waste away, losing part of your lifeforce every midnight",
        reference: "TOA, pg. 6.",
        bullets: [
            "QW55IGh1bWFub2lkIG9uIHRoZSBwbGFuZXQgdGhhdCBoYXMgYmVlbiBicm91Z2h0IGJhY2sgZnJvbSB0aGUgZGVhZCBiZWdpbnMgdG8gd2FzdGUgYXdheS4gSXRzIGhpdCBwb2ludCBtYXhpbXVtIGlzIHJlZHVjZWQgYnkgMSBmb3IgZWFjaCBkYXkgdGhlIGRlYXRoIGN1cnNlIGhhcyBiZWVuIGFjdGl2ZSBhbmQgZGVjcmVhc2VzIGJ5IDEgZXZlcnkgbWlkbmlnaHQgdW50aWwgdGhlIGN1cnNlIHNvdXJjZSBpcyBkZXN0cm95ZWQuIElmIGEgaHVtYW5vaWQncyBoaXQgcG9pbnQgbWF4aW11bSBkcm9wcyB0byAwLCBpdCBkaWVzLiBUcmF2ZWxpbmcgdG8gYW5vdGhlciB3b3JsZCBvciBwbGFuZSBkb2VzIG5vdGhpbmcgdG8gaGFsdCB0aGUgd2FzdGluZyBlZmZlY3Qgb25jZSBpdCBoYXMgYmVndW4u",
            "QSBodW1hbm9pZCB3aG9zZSBoaXQgcG9pbnQgbWF4aW11bSBpcyByZWR1Y2VkIGNhbid0IGluY3JlYXNlIG9yIHJlc3RvcmUgaXQuIFRoaXMgaXMgdHJ1ZSB3aGV0aGVyIHRoZSBjcmVhdHVyZSdzIGhpdCBwb2ludCBtYXhpbXVtIGlzIHJlZHVjZWQgYnkgdGhlIGRlYXRoIGN1cnNlIG9yIGJ5IHNvbWUgb3RoZXIgbGlmZS1kcmFpbmluZyBlZmZlY3QsIHN1Y2ggYXMgdGhlIHRvdWNoIG9mIGEgd2lnaHQsIHdyYWl0aCwgb3Igc2ltaWxhciBjcmVhdHVyZS4=",
            "SWYgYSBodW1hbm9pZCBkaWVzIGFueXdoZXJlIG9uIHRoZSBwbGFuZXQsIGl0cyBzb3VsIGJlY29tZXMgdHJhcHBlZC4gT25seSB0aGUgZGVzdHJ1Y3Rpb24gb2YgdGhlIGN1cnNlIHNvdXJjZSBjYW4gZnJlZSB0aGUgdHJhcHBlZCBzb3VsLiBTcGVsbHMgc3VjaCBhcyA8aT5jb21tdW5lPC9pPiBhbmQgPGk+ZGl2aW5hdGlvbjwvaT4gY2FuIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYSBzb3VsIGhhcyBiZWVuIGRldm91cmVkIG9yIHdoZXRoZXIgaXQncyBzdGlsbCB0cmFwcGVkLg==",
            "QW55IHNwZWxsIHRoYXQgYnJlYXRoZXMgbGlmZSBpbnRvIHRoZSBkZWFkIChpbmNsdWRpbmcgPGk+cmV2aXZpZnk8L2k+LCA8aT5yYWlzZSBkZWFkPC9pPiwgPGk+cmVzdXJyZWN0aW9uPC9pPiwgYW5kIDxpPnRydWUgcmVzdXJyZWN0aW9uPC9pPikgYXV0b21hdGljYWxseSBmYWlscyBpZiBjYXN0IG9uIGEgaHVtYW5vaWQgd2hvc2Ugc291bCBpcyBlaXRoZXIgdHJhcHBlZCBvciBoYXMgYmVlbiBkZXZvdXJlZCB1bmRlciB0aGUgZWZmZWN0cyBvZiB0aGUgY3Vyc2Uu",
            "VGhlIGVmZmVjdHMgb2YgdGhlIGN1cnNlIGRvIG5vdCBhZmZlY3QgdGhlIHdvcmtpbmdzIG9mIDxpPnNwZWFrIHdpdGggZGVhZDwvaT4gc3BlbGxzIG9yIHNpbWlsYXIgbWFnaWMuIFRoZSBkZWF0aCBjdXJzZSwgaGFzIG5vIGVmZmVjdCBvbiBwcmVleGlzdGluZyBnaG9zdHMgb3Igc3Bpcml0cy4=",
            "VGhlIGN1cnNlIGFsc28gaGFzIHRoZSBwb3dlciB0byBkcmF3IHRob3NlIHdobyBhcmUgY2xvc2UgdG8gZGVhdGguIEEgZGVhdGggc2F2aW5nIHRocm93IHN1Y2NlZWRzIG9uIGEgcm9sbCBvZiAxNSBvciBoaWdoZXIgKGluc3RlYWQgb2YgMTAgb3IgaGlnaGVyKS4gVGhpcyBlZmZlY3QgZW5kcyB3aGVuIHRoZSBjdXJzZSBzb3VyY2UgaXMgZGVzdHJveWVkLiBPdGhlciBydWxlcyBjb25jZXJuaW5nIGRlYXRoIHNhdmluZyB0aHJvd3MgcmVtYWluIHVuY2hhbmdlZC4="
        ]
    }
];