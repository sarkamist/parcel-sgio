
data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may <a href='move'>move</a> in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <a href='offhand-attack'>offhand attack</a> bonus action).",
            "You may replace one of your melee attacks with a <a href='grapple'>grapple</a> or a <a href='shove'>shove</a>.",
            "Some conditions give advantage on the attack: attacks against <a href='blinded'>blinded</a>, <a href='paralyzed'>paralyzed</a>, <a href='petrified'>petrified</a>, <a href='restrained'>restrained</a>, <a href='stunned'>stunned</a>, or <a href='unconscious'>unconscious</a> targets; melee attacks against <a href='prone'>prone</a> targets; attacks by <a href='invisible'>invisible</a> or <a href='hide'>hidden</a> attackers.",
            "Some conditions give disadvantage on the attack: attacks against <a href='invisible'>invisible</a> or <a href='hide'>hidden</a> targets; ranged attacks against <a href='prone'>prone</a> targets; attacks by <a href='blinded'>blinded</a>, <a href='frightened'>frightened</a>, <a href='poisoned'>poisoned</a>, or <a href='restrained'>restrained</a> attackers."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB, pg. 195.",
        bullets: [
            "You can use the <a href='attack'>attack</a> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the <a href='attack'>attack</a> action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the <a href='grappled'>grappled</a> condition (its speed is set to 0)."
        ]
    },
    {
        title: "Shove",
        icon: "push",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <a href='attack'>attack</a> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the <a href='attack'>attack</a> action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target <a href='prone'>prone</a> or push it 5 feet away from you."
        ]
    },
    {
        title: "Shove aside",
        icon: "push",
        subtitle: "Special melee attack, variant",
        description: "Shove a creature, moving it aside from you",
        reference: "PHB, pg. 195.",
        bullets: [
            "Using the <a href='shove'>shove</a> action, you can move the target to the side, rather than away.",
            "The attacker has disadvantage on its Strength (Athletics) check when it does so.",
            "If that check is successful, the attacker moves the target 5 feet to a different space within its reach."
        ]
    },
    {
        title: "Disarm",
        icon: "drop-weapon",
        subtitle: "Special melee attack",
        description: "A creature can use a weapon attack to knock a weapon or another item from a target's grasp",
        reference: "DMG, pg. 271.",
        bullets: [
            "The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check.",
            "If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item.",
            "The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands.",
            "The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller."
        ]
    },
    {
        title: "Mark",
        icon: "police-target",
        subtitle: "Special melee attack",
        description: "Makes it easier for melee combatants to harry each other with opportunity attacks",
        reference: "DMG, pg. 271.",
        bullets: [
            "When a creature makes a melee <a href='attack'>attack</a>, it can also mark its target. Until the end of the attacker's next turn, any <a href='opportunity-attack'>opportunity attack</a> it makes against the marked target has advantage.",
            "The <a href='opportunity-attack'>opportunity attack</a> doesn't expend the attacker's reaction, but the attacker can't make the attack if anything, such as the <a href='incapacitated'>incapacitated</a> condition or the <i>shocking grasp</i> spell, is preventing it from taking reactions.",
            "The attacker is limited to one <a href='opportunity-attack'>opportunity attack</a> per turn."
        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
            "Some spells require you to maintain <a href='concentrated'>concentration</a> in order to keep their magic active. If you lose <a href='concentrated'>concentration</a>, such a spell ends."
        ]
    },
    {
        title: "Identifying a spell",
        icon: "bolt-spell-cast",
        subtitle: "Spell casting perceived",
        description: "Identify a spell that someone else is casting or that was already cast",
        reference: "XGTE, pg. 85.",
        bullets: [
            "A character can use their reaction to identify a spell as it's being cast, or they can use an action on their turn to identify a spell by its effect after it is cast.",
            "If the character perceived the casting, the spell's effect, or both, the character can make an Intelligence (Arcana) check with the reaction or action. The DC equals 15 + the spell's level.",
            "If the spell is cast as a class spell and the character is a member of that class, the check is made with advantage. For example, if the spellcaster casts a spell as a cleric, another cleric has advantage on the check to identify the spell. Some spells aren't associated with any class when they're cast, such as when a monster uses its <i>Innate Spellcasting</i> trait.",
            "This Intelligence (Arcana) Check represents the fact that identifying a spell requires a quick mind and familiarity with the theory and practice of casting. This is true even for a character whose spellcasting ability is Wisdom or Charisma. Being able to cast spells doesn’t by itself make you adept at deducing exactly what others are doing when they cast their spells."
        ]
    },
    {
        title: "Dash",
        icon: "run",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Overrun",
        icon: "shield-bash",
        subtitle: "Special movement action",
        description: "When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature",
        reference: "DMG, pg. 272.",
        bullets: [
            "As an action or a bonus action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check.",
            "The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller.",
            "If the mover wins the contest, it can <a href='move'>move</a> through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Tumble",
        icon: "body-balance",
        subtitle: "Special movement action",
        description: "A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent",
        reference: "DMG, pg. 272.",
        bullets: [
            "As an action or a bonus action, the tumbler makes a Dexterity (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check.",
            "If the tumbler wins the contest, it can <a href='move'>move</a> through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Climb onto creature",
        icon: "giant",
        subtitle: "Climb onto a bigger creature",
        description: "A suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb",
        reference: "DMG, pg. 271.",
        bullets: [
            "After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check.",
            "If it wins the contest, the smaller creature successfully <a href='move'>moves</a> into the target creature's space and clings to its body.",
            "While in the target's space, the smaller creature <a href='move'>moves</a> with the target and has advantage on attack rolls against it",
            "The smaller creature can <a href='move'>move</a> around within the larger creature's space, treating the space as difficult terrain. The larger creature's ability to attack the smaller creature depends on the smaller creature's location, and is left to DM's discretion.",
            "The larger creature can dislodge the smaller creature as an action —knocking it off, scraping it against a wall, or grabbing and throwing it— by making a Strength (Athletics) check contested by the smaller creature's Strength (Athletics) or Dexterity (Acrobatics) check. The smaller creature chooses which ability to use."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "See the <a href='opportunity-attack'>opportunity attack</a> reaction."
        ]
    },
    {
        title: "Dodge",
        icon: "dodging",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <a href='incapacitated'>incapacitated</a> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "pull",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a <a href='grapple'>grapple</a>, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use object",
        icon: "card-pickup",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "attached-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Become unseen",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Find something",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to <a href='move'>move</a> up to your speed in response to it.",
            "When the trigger occurs, you can either take your <a href='readied-action'>reaction</a> right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires <a href='concentrated'>concentration</a>."
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [
        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
];

