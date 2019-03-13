data_adventuring_rests = [
    {
        title: "Short rest",
        icon: "sands-of-time",
        subtitle: "At least 1 hour long",
        description: "At least 1 hour long of rest, light activity and tending to wounds",
        reference: "PHB, pg. 186.",
        bullets: [
            "A short rest is a period of downtime, at least 1 hour long, during which a character does nothing more strenuous than eating, drinking, reading, and tending to wounds.",
            "A character can spend one or more Hit Dice at the end of a short rest, up to the character's maximum number of Hit Dice, which is equal to the character's level. For each Hit Die spend in this way, the player rolls the die and adds the character's Constitution modifier to it. The character regains hit points equal to the total (minimum of 0). The player can decide to spend an additional Hit Die after each roll. A character regains some spent Hit Die upon finishing a <a href='long-rest'>long rest</a>, as explained below."
        ]
    },
    {
        title: "Long rest",
        icon: "bed",
        subtitle: "At least 8 hours long",
        description: "At least 8 hours long rest, of which you have to sleep at least 6 hours and perform no more than 2 hours of light activity",
        reference: "PHB, pg. 186. (changed on the 6th printing)",
        bullets: [
            "A long rest is a period of extended downtime, at least 8 hours long, during which a character sleeps for at least 6 hours and performs no more than 2 hours of light activity, such as reading, talking, eating, or standing watch.",
            "If the rest is interrupted by a period of strenuous activity —at least 1 hour of walking, fighting, casting spells, or similar adventuring activity— the characters must begin the rest again to gain any benefit from it.",
            "At the end of a long rest, a character regains all lost hit points. In addition, you regain at least one Hit Die when you finish a long rest, up to a number of dice equal to half the character's total number of them. For example if a character has eight Hit Dice, he or she can regain four spent Hit Dice upon finishing a long rest.",
            "A character can't benefit from more than one long rest in a 24-hour period, and a character must have at least 1 hit point at the start of the rest to gain its benefits."
        ]
    },
    {
        title: "Recuperating",
        icon: "arm-sling",
        subtitle: "At least 3 days of downtime",
        description: "You can use downtime between adventures to recover from a debilitating injury, disease, or poison.",
        reference: "PHB, pg. 187.",
        bullets: [
            "After three days of downtime spent recuperating, you can make a DC 15 Constitution saving throw. On a successful save, you can choose one of the following results: <br>" +
            "• End one effect on you that prevents you from regaining hit points. <br>" +
            "• For the next 24 hours, gain advantage on saving throws against one disease or poison currently affecting you. <br>"
        ]
    }
];

data_traveling = [
    {
        title: "Travel pace",
        icon: "treasure-map",
        subtitle: "Move at a normal, fast, or slow pace",
        description: "While traveling, a group of adventurers can move at a normal, fast, or slow pace",
        reference: "PHB, pg. 182.",
        bullets: [
            "A fast pace makes characters less perceptive, while a slow pace makes it possible to sneak around and to search an area more carefully (see the <i>Activity while traveling</i> section for more information).",
            "<table><tr><th style='text-align:left'>Pace</th><th></th><th></th><th style='text-align:center'>Minute</th><th></th><th></th><th style='text-align:center'>Hour</th><th></th><th></th><th style='text-align:center'>Day</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>Fast</td><td></td><td></td><td>400 feet</td><td></td><td></td><td>4 miles</td><td></td><td></td><td>30 miles</td><td></td><td></td><td>-5 penalty to passive Wisdom (Perception) scores</td></tr><tr><td>Normal</td><td></td><td></td><td>300 feet</td><td></td><td></td><td>3 miles</td><td></td><td></td><td>24 miles</td><td></td><td></td><td>-</td></tr><tr><td>Slow</td><td></td><td></td><td>200 feet</td><td></td><td></td><td>2 miles</td><td></td><td></td><td>18 miles</td><td></td><td></td><td>Able to use <a href='hide'>stealth</a></td></tr></table>"
        ]
    },
    {
        title: "Forced march",
        icon: "run",
        subtitle: "Travel more than 8 hours in a day",
        description: "Push on beyond, at the risk of exhaustion",
        reference: "PHB, pg. 181.",
        bullets: [
            "The <i>Travel pace</i> table assumes that characters travel for 8 hours in a day. They can push on beyond that limit, at the risk of <a href='exhaustion'>exhaustion</a>.",
            "For each additional hour of travel beyond 8 hours, the characters cover the distance shown in the Hour column for their pace, and each character must make a Constitution saving throw at the end of the hour. The DC is 10 + 1 for each hour past 8 hours. On a failed saving throw, a character suffers one level of <a href='exhaustion'>exhaustion</a>."
        ]
    },
    {
        title: "Mounts and vehicles",
        icon: "cavalry",
        subtitle: "Animals move much faster",
        description: "Mounted characters can ride at a gallop for about an hour",
        reference: "PHB, pg. 181.",
        bullets: [
            "For short spans of time (up to an hour), many animals move much faster than humanoids. A mounted character can ride at a gallop for about an hour, covering twice the usual distance for a fast pace. If fresh mounts are available every 8 to 10 miles, characters can cover larger distances at this pace, but this is very rare except in densely populated areas.",
            "Characters in wagons, carriages, or other land vehicles choose a pace as normal. Characters in a waterborne vessel are limited to the speed of the vessel, and they don't suffer penalties for a fast pace or gain benefits from a slow pace. Depending on the vessel an the size of the crew, ships might be able to travel for up to 24 hours per day.",
            "Certain special mounts, such as a pegasus or griffon, or special vehicles, such as a carpet of flying, allow you to travel more swiftly."
        ]
    },
    {
        title: "Foraging",
        icon: "berries-bowl",
        subtitle: "Gather food and water while traveling",
        description: "Characters can gather food and water as the party travels",
        reference: "DMG, pg. 111.",
        bullets: [
            "Characters can gather food and water as the party travels at a normal or slow pace.",
            "A foraging character makes a Wisdom (Survival) check whenever the DM calls for it, with the DC determined by the abundance of food and water in the region.",
            "If multiple characters forage, each character makes a separate check. A foraging character finds nothing on a failed check. On a successful check, roll 1d6 + the character's Wisdom modifier to determine how much food (in pounds) the character finds, then repeat the roll for water (in gallons)."
        ]
    },
    {
        title: "Becoming lost",
        icon: "direction-signs",
        subtitle: "Travelers run the risk of becoming lost",
        description: "Adventurers traveling in the wilderness run the risk of becoming lost",
        reference: "DMG, pg. 111-112.",
        bullets: [
            "Unless they are following a path, or something like it, adventurers traveling in the wilderness run the risk of becoming lost.",
            "The party's navigator makes a Wisdom (Survival) check when the DM decides it's appropriate, against a DC determined by the prevailing terrain. If the party is moving at a slow pace, the navigator gains a +5 bonus to the check, and a fast pace imposes a - 5 penalty. If the party has an accurate map of the region or can see the sun or stars, the navigator has advantage on the check.",
            "If the Wisdom (Survival) check succeeds, the party travels in the desired direction without becoming lost. If the check fails, the party inadvertently travels in the wrong direction and becomes lost. The party's navigator can repeat the check after the party spends 1d6 hours trying to get back on course."
        ]
    }
];
