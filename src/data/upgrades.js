export const upgrades = [
  {
    "id": 1,
    "name": "Soul Battery",
    "subId": 1,
    "exType": [],
    "level": 2,
    "text": "Deathbolt gains 3 damage whenever it slays a target, lasts until next realm."
  },
  {
    "id": 1,
    "name": "Winter Bolt",
    "subId": 2,
    "exType": [
      "Ice"
    ],
    "level": 3,
    "text": "Deathbolt also deals ice damage"
  },
  {
    "id": 1,
    "name": "Chaos Skeletons",
    "subId": 3,
    "exType": [],
    "level": 5,
    "text": "Raised skeletons are Chaos skeletons, gaining resistances, a chaos ball attack, and spawning a number of imps on death proportional to their max hp."
  },
  {
    "id": 2,
    "name": "Chaos Ball",
    "subId": 1,
    "exType": [
      "Physical",
      "Lightning"
    ],
    "level": 5,
    "text": "Fireball randomly deals physical, lightning, or fire damage.If a unit is resistant to one or more of these damage types, fireball deals the damage type that resistant to."
  },
  {
    "id": 2,
    "name": "Ash Ball",
    "subId": 2,
    "exType": [
      "Poison"
    ],
    "level": 2,
    "text": "Fireball blinds and poisons units for 4 turns."
  },
  {
    "id": 2,
    "name": "Meteor",
    "subId": 3,
    "exType": [
      "Physical"
    ],
    "level": 3,
    "text": "Units in the center tile take extra physical damage and are stunned for 3 turns."
  },
  {
    "id": 3,
    "name": "Freezing",
    "subId": 1,
    "exType": [],
    "level": 2,
    "text": "Freeze the main target for 2 turns"
  },
  {
    "id": 3,
    "name": "Ice Spear",
    "subId": 2,
    "exType": [
      "Physical"
    ],
    "level": 2,
    "text": "Deals physical damage to all units in a beam to the main target"
  },
  {
    "id": 3,
    "name": "Icicle Harvest",
    "subId": 3,
    "exType": [],
    "level": 2,
    "text": "Whenever a frozen enemy dies to ice damage, regain a charge of Icicle."
  },
  {
    "id": 4,
    "name": "Blood Bond",
    "subId": 1,
    "exType": [],
    "level": 4,
    "text": "Lifedrain also heals 2 random living allies."
  },
  {
    "id": 4,
    "name": "Life Funnel",
    "subId": 2,
    "exType": [],
    "level": 4,
    "text": "Lifedrain also drains life from 2 random enemy units up to 3 tiles away from the target."
  },
  {
    "id": 4,
    "name": "Blindcasting",
    "subId": 3,
    "exType": [],
    "level": 2,
    "text": "Lifedrain gains -1 Requires Los.Lifedrain can be cast without line of sight"
  },
  {
    "id": 5,
    "name": "Channeling",
    "subId": 1,
    "exType": [],
    "level": 2,
    "text": "Lightning bolt can be channeled for up to 10 turns."
  },
  {
    "id": 5,
    "name": "Electric Ink",
    "subId": 2,
    "exType": [],
    "level": 7,
    "text": "Whenever Lightning Bolt Kills a unit, spawn a living lightning scroll that can cast your Lightning Bolt spell once."
  },
  {
    "id": 5,
    "name": "Energy Bolt",
    "subId": 3,
    "exType": [
      "Arcane"
    ],
    "level": 5,
    "text": "Lightning bolt also deals arcane damage"
  },
  {
    "id": 6,
    "name": "Shield Burn",
    "subId": 1,
    "exType": [],
    "level": 2,
    "text": "Magic Missile gain 3 Shield Burn.Magic Missile removes up to 3 SH from the target before dealing damage."
  },
  {
    "id": 6,
    "name": "Disruption Bolt",
    "subId": 2,
    "exType": [
      "Dark",
      "Holy"
    ],
    "level": 3,
    "text": "If Magic Missile targets an arcane unit,it deals dark and holy damage instead of arcane."
  },
  {
    "id": 6,
    "name": "Arcane Crossfire",
    "subId": 3,
    "exType": [],
    "level": 3,
    "text": "When you cast Magic Missile, up to 4 additional missiles are fired from arcane allies in line of sight of the target."
  },
  {
    "id": 6,
    "name": "Ricochet",
    "subId": 4,
    "exType": [],
    "level": 5,
    "text": "Magic Missile bounces up to 2 times to targets in range and line of sight of the target."
  },
  {
    "id": 7,
    "name": "Acidity",
    "subId": 1,
    "exType": [],
    "level": 2,
    "text": "Damaged targets lose all poison resist"
  },
  {
    "id": 7,
    "name": "Silk Shot",
    "subId": 2,
    "exType": [],
    "level": 2,
    "text": "Stuns target and spawns webs along a line to the target Webs stun enemy units that enter them for 2 turns."
  },
  {
    "id": 7,
    "name": "Stinger Barrage",
    "subId": 3,
    "exType": [],
    "level": 4,
    "text": "Hits every poisoned enemy in a radius of 3 of the main target."
  },
  {
    "id": 8,
    "name": "Wolf Pack",
    "subId": 1,
    "exType": [],
    "level": 4,
    "text": "Summons a pack of 3 wolves instead of just 1."
  },
  {
    "id": 8,
    "name": "Ice Hound",
    "subId": 2,
    "exType": [
      "Ice"
    ],
    "level": 2,
    "text": "Summon an ice hound instead of a wolf."
  },
  {
    "id": 8,
    "name": "Clay Hound",
    "subId": 3,
    "exType": [],
    "level": 3,
    "text": "Summon a clay hound instead of a wolf."
  },
  {
    "id": 9,
    "name": "Cascade",
    "subId": 1,
    "exType": [],
    "level": 3,
    "text": "Annihilate gains 3 cascade range Hits from Annihilate will jump to nearby targets if the main target is killed"
  },
  {
    "id": 9,
    "name": "Comprehensive Annihilation",
    "subId": 2,
    "exType": [],
    "level": 2,
    "text": "Annihilate deals additional dark and arcane damage hits"
  },
  {
    "id": 9,
    "name": "Doom Storm",
    "subId": 3,
    "exType": [],
    "level": 3,
    "text": "Annihilate chains to up to 5 units standing in storms in line of sight"
  },
  {
    "id": 10,
    "name": "Extra Damage",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Boiling Blood gains 6 Extra Damage"
  },
  {
    "id": 10,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Boiling Blood gains 7 duration"
  },
  {
    "id": 10,
    "name": "Holy Fury",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Boiling Blood also impacts holy abilities"
  },
  {
    "id": 10,
    "name": "Dark Fury",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Boiling Blood also impacts dark abilities"
  },
  {
    "id": 11,
    "name": "Infernal Spear",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Bone Spear also deals fire damage."
  },
  {
    "id": 11,
    "name": "Toxic Spear",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever the spear kills a unit. up to 3 enemy units within a 3 tile radius take 16 poison damage."
  },
  {
    "id": 11,
    "name": "Stun Spear",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Bone Spear applies stun for 3 turns"
  },
  {
    "id": 12,
    "name": "Mega Barrage",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Chaos Barrage gains 6 num targets"
  },
  {
    "id": 12,
    "name": "Shockwaves",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Each bolt also deals damage to adjacent enemies"
  },
  {
    "id": 12,
    "name": "Smart Bolts",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Chaos barrage ignores allies, and always uses the damage tupe the target resists the least"
  },
  {
    "id": 13,
    "name": "Huskification",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Killed targets are raised as zombies"
  },
  {
    "id": 13,
    "name": "Spirit Eater",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Can target demon and arcane units"
  },
  {
    "id": 13,
    "name": "Gluttony",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "If Devour Mind kills the target, the charge cost is refunded"
  },
  {
    "id": 14,
    "name": "Violent Warp",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Casts Magic Missile on all teleported enemy units"
  },
  {
    "id": 14,
    "name": "Protective Warp",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Teleported allied units in the radius gain 3 SH"
  },
  {
    "id": 16,
    "name": "Eye of Fireballs",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Eye of Fire casts your Fireball spell"
  },
  {
    "id": 16,
    "name": "Fiery Onlooker",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Eye of fire summons a Flaming Eyeball on expiration"
  },
  {
    "id": 16,
    "name": "Eye of Conflaguration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Whenever eye of fire kills an enemy, it fires again"
  },
  {
    "id": 17,
    "name": "Frosty Onlooker",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Summons a Frosty Eyeball when the buff runs out."
  },
  {
    "id": 17,
    "name": "Eye of Freezing",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Freezes target for 3 turns."
  },
  {
    "id": 17,
    "name": "Eye of Iceballs",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Eye of Ice casts your Iceball spell."
  },
  {
    "id": 18,
    "name": "Archon Eye",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Allies along the beam are healed for 15 and gain 1 SH"
  },
  {
    "id": 18,
    "name": "Eye of Thunderstrike",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Eye of Lightning casts your Thunderstrike spell."
  },
  {
    "id": 18,
    "name": "Penetrating Gaze",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Eye of Lightning applies 4 non-stacking -50 Lightning resist to target."
  },
  {
    "id": 19,
    "name": "Lycanthropy",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "When Eye of Rage targets a living unit with 25 or less HP, that unit is instantly killed and raised as friendly Werewolf. That Werewolf is berserked for 14 turns."
  },
  {
    "id": 19,
    "name": "Infectious Rage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Eye of Rage targets a connected group"
  },
  {
    "id": 19,
    "name": "Burning Rage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Targeted units gain a fiery aura that damages nearby units."
  },
  {
    "id": 20,
    "name": "Healing Hearthfire",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Fan of Flames heals allies instead of damaging them."
  },
  {
    "id": 20,
    "name": "Fan of Frostfire",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Fan of flames also deals Ice damage."
  },
  {
    "id": 20,
    "name": "Wildfire",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Fan of Flames gains 1 range for the next turn for each enemy unit killed."
  },
  {
    "id": 21,
    "name": "Refreezing",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The target is refrozen every turn for the duration."
  },
  {
    "id": 21,
    "name": "Mass Freeze",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Freeze a connected group of enemies."
  },
  {
    "id": 21,
    "name": "Quickcast",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Freeze gains 1 quick cast.Casting freeze only takes half a turn"
  },
  {
    "id": 22,
    "name": "Reincarnation",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The Goatia reincarnates once upon death"
  },
  {
    "id": 22,
    "name": "Pain Aura",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The Goatia deals 5 dark damage to any unit that damages it"
  },
  {
    "id": 22,
    "name": "Maggot Host",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "On death, the Goatia spawns 2 mind maggots"
  },
  {
    "id": 23,
    "name": "Shielding Light",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Allies in line of sight gain 1 shield"
  },
  {
    "id": 23,
    "name": "Purifying Light",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Allies in line of sight lose all debuffs"
  },
  {
    "id": 23,
    "name": "Heartflame",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever Healing Light heals an ally, the nearest enemy in line of sight of that ally takes that much fire and holy damage."
  },
  {
    "id": 24,
    "name": "Spirit Bind",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Slain enemies create temporary spirits. Spirits are blinking holy undead with 4 hitpoints and a 2 damage ranged holy attack."
  },
  {
    "id": 24,
    "name": "Shield",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Affected ally units gain 2 SH, to a maximum of 5."
  },
  {
    "id": 24,
    "name": "Echo Heal",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Affected ally units are re-healed for half the initial amount each turn for 5 turns."
  },
  {
    "id": 25,
    "name": "Gnashing Teeth",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Hungry Maw gains a physical melee attack which attacks four times"
  },
  {
    "id": 25,
    "name": "Invincible Maw",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Hunary Maw gains 5 shields"
  },
  {
    "id": 25,
    "name": "Void Maw",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Hungry Maw gains a wall melting arcane beam attack"
  },
  {
    "id": 26,
    "name": "Cloud Combustion",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Gains +2 radius and x2 damage if cast on a Blizzard tile. The Blizzard tile is consumed."
  },
  {
    "id": 26,
    "name": "Ice Crush",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Units inside of the area of effect which are already frozen take physical damage before being refrozen."
  },
  {
    "id": 26,
    "name": "Fae Ball",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever you cast Iceball, summon 1 ice faery for every 4 enemies it damages."
  },
  {
    "id": 27,
    "name": "Conflaguration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Immolate also affects a connected group of enemies."
  },
  {
    "id": 27,
    "name": "Radiant Heat",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Immolate deals half damage to units in a 3 tile radius around the target each turn."
  },
  {
    "id": 27,
    "name": "Dragon Soul",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "When an immolated enemy dies, regain a charge of a random level 4 or lower dragon spell you know."
  },
  {
    "id": 28,
    "name": "Venomous Bite",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Poisons targets for 18 turns."
  },
  {
    "id": 28,
    "name": "Savage Leap",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Instead of 4 melee attack, do a leap attack."
  },
  {
    "id": 28,
    "name": "Scavengers",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Every 3 kills gain a wolf charge."
  },
  {
    "id": 29,
    "name": "Radioactivity",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Lowers target's lightning and arcane resist by 75."
  },
  {
    "id": 29,
    "name": "Electromagnetism",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Deals lightning damage to all units in range rather than just adjacent units."
  },
  {
    "id": 29,
    "name": "Liquid Magnetism",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Casts your Mercurize with 1 duration on adjacent enemy units."
  },
  {
    "id": 30,
    "name": "Mass Melt",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Chains to up to 4 adjacent enemies."
  },
  {
    "id": 30,
    "name": "Ice Penetration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Melt also reduces ice resist by 100"
  },
  {
    "id": 30,
    "name": "White Flame",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever you cast a fire or chaos spell other than Melt targeting an enemy unit, melt is also cast at that target."
  },
  {
    "id": 31,
    "name": "Morbidity",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Mercurized targets also take dark damage"
  },
  {
    "id": 31,
    "name": "Corrosion",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Mercurized targets lose 50 physical resist"
  },
  {
    "id": 31,
    "name": "Toxic Fumes",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Quicksilver Geists have a noxious aura that deals 1 Poison damage to enemy units within 2 tiles each turn."
  },
  {
    "id": 31,
    "name": "Mercurial Vengeance",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "When a Quicksilver Geist is killed, its killer is affliected with Mercurize."
  },
  {
    "id": 32,
    "name": "Glimmerblade",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Deals 1 arcane damage to all enemies in LOS of the target. This damage is fixed and cannot be buffed."
  },
  {
    "id": 32,
    "name": "Electroblade",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Deals 7 lightning damage to up to 3 enemies near the blade's destination."
  },
  {
    "id": 32,
    "name": "Steelshaping",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Regain a charge of another random Metallic spell."
  },
  {
    "id": 33,
    "name": "Glassify",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Turn the target to glass instead of stone. Glass targets have -100 physical resist."
  },
  {
    "id": 33,
    "name": "Arcane Conductivity",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Target loses 100 arcane resist."
  },
  {
    "id": 33,
    "name": "Rocky Servitude",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "On death, raise target as a golem."
  },
  {
    "id": 34,
    "name": "Max Health Loss",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Plague of Undeath gains 25 Max Health Loss"
  },
  {
    "id": 34,
    "name": "Fire Vulnerability",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Plague of Undeath gains 50 Fire Vulnerability"
  },
  {
    "id": 34,
    "name": "Plague of Undead",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Raise killed units as zombies."
  },
  {
    "id": 35,
    "name": "Chaos Pulse",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Add a physical damage layer."
  },
  {
    "id": 35,
    "name": "Lesser Cascade",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Lightning damage arcs to 2 enemy units in line of sight"
  },
  {
    "id": 35,
    "name": "Greater Cascade",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "On kills jump to a new target"
  },
  {
    "id": 36,
    "name": "Acid Rain",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The rainclouds deal 9 poison damage each turn"
  },
  {
    "id": 36,
    "name": "Healing Rain",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Allies are healed for 7 hp per turn while they are in the rainclouds"
  },
  {
    "id": 36,
    "name": "Living Rain",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Each turn, summon a water elemental from Rain Cloud you control."
  },
  {
    "id": 37,
    "name": "Heal",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Regeneration Aura gains 4 heal"
  },
  {
    "id": 37,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Regeneration Aura gains 8 duration"
  },
  {
    "id": 37,
    "name": "Global",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Regeneration Aura gains 1 Whole Map. The aura heals all allies on the level"
  },
  {
    "id": 38,
    "name": "Redemption",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "When a Scourged enemy dies, gain a charge of a random Holy conjuration."
  },
  {
    "id": 38,
    "name": "Conversion",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "When a Scourged enemy dies, gain a charge of Dominate."
  },
  {
    "id": 38,
    "name": "Mass Scourge",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Scourge is applied to a connected group of enemies."
  },
  {
    "id": 39,
    "name": "Forced Transfer",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Soul Swap can target enemy undead units as well."
  },
  {
    "id": 39,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Soul Swap gains 9 max charges"
  },
  {
    "id": 40,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Thunder Strike gains -1 Requires Los. Thunderstrike can be cast without line of sight"
  },
  {
    "id": 40,
    "name": "Storm Power",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Thunder Strike gains 1 Storm Power Charge cost is refunded if the target tile already has a thunder storm."
  },
  {
    "id": 40,
    "name": "Heaven Strike",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Thunder Strike also deals holy damage"
  },
  {
    "id": 41,
    "name": "Flametouch",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Touch of Death gains 200 Fire Damage"
  },
  {
    "id": 41,
    "name": "Touch of the Vampire",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "When a living target dies to touch of death, it is raised as a friendly Vampire."
  },
  {
    "id": 41,
    "name": "Touch of the Reaper",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "When a living target dies to touch of death, it is raise as a friendly Reaper for 6 turns"
  },
  {
    "id": 41,
    "name": "Hand of Death",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Touch of death hits up to 4 more adjacent targets"
  },
  {
    "id": 42,
    "name": "Hum Summons",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Toxic Spores gains 2 num summons"
  },
  {
    "id": 42,
    "name": "Grey Mushbooms",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Summon grey mushbooms instead, which apply stun instead of poison."
  },
  {
    "id": 42,
    "name": "Red Mushbooms",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summon red mushbooms instead, which do not apply poison but deal fire damage"
  },
  {
    "id": 42,
    "name": "Glass Mushbooms",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summon glass mushbooms instead, which apely glassify instead of poison"
  },
  {
    "id": 43,
    "name": "Herbal Remedy",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "All allies in the radius are healed instead of damaged and poisoned."
  },
  {
    "id": 43,
    "name": "Withertoxin",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Toxin Burst also deals 15 dark damage."
  },
  {
    "id": 43,
    "name": "Toxin Bomber",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons a Poison Bomber in the center of the burst that deals 15 poison damage."
  },
  {
    "id": 44,
    "name": "Petrification",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Casts your Petrify on the target."
  },
  {
    "id": 44,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Aether Swap gains —1 Requires Los Aether Swap can be cast without line of sight"
  },
  {
    "id": 44,
    "name": "Quickcast",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Aether Swap gains 1 quick cast Casting Aether Swap only takes half a turn"
  },
  {
    "id": 45,
    "name": "Blazerip Orb",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Arcane Orb casts your Blazerip spell instead of your Magic Missile spell."
  },
  {
    "id": 45,
    "name": "Double Shot",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Arcane Orb fires twice."
  },
  {
    "id": 45,
    "name": "Orb Detonation",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Arcane Orb gains 1 Orb Walk Targeting an existing arcane orb detonates it, casting your Magic Missile 12 times."
  },
  {
    "id": 46,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Basilisk Armor gains 4 max charges"
  },
  {
    "id": 46,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Basilisk Armor gains 5S duration"
  },
  {
    "id": 47,
    "name": "Dual Blazerip",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Blazerip also casts behind the player."
  },
  {
    "id": 47,
    "name": "Aether Poison",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Inflicts Aether Poison on units it hits. Aether Poison lasts 4 turns. and deals 1 arcane damage per turn, and causes the enemy to lose SQ arcane resistance during the duration."
  },
  {
    "id": 47,
    "name": "Blazebuas",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "On kills Summon a swarm of either Fae Flies or Burning Flies."
  },
  {
    "id": 48,
    "name": "Halting Light",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Deals 1 turn of stun to all enemy units."
  },
  {
    "id": 48,
    "name": "Searing Light",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Deals 5 fire damage to all enemy units in LOS."
  },
  {
    "id": 48,
    "name": "Quickcast",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Blinding Light gains 1 quick cast Casting Blinding Light only takes half a turn"
  },
  {
    "id": 49,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Blink gains -1 Requires Los Blink can be cast without line of sight"
  },
  {
    "id": 49,
    "name": "Dissolution",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Casting blink also casts disperse"
  },
  {
    "id": 49,
    "name": "Thunderblink",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Casting blink casts thunderstrike on the 2 closest enemy targets in line of sight."
  },
  {
    "id": 50,
    "name": "Radius",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Bloodshift gains 2 radius"
  },
  {
    "id": 50,
    "name": "Damage",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Bloodshift gains 13 damage"
  },
  {
    "id": 50,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Bloodshift gains S max charges"
  },
  {
    "id": 50,
    "name": "Range",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Bloodshift gains 3 range"
  },
  {
    "id": 50,
    "name": "Toxic Shift",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Bloodshift also deals poison damage, though this damage does not cause healing."
  },
  {
    "id": 51,
    "name": "Chain Fireball",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Cast Fireball for free on each target chain lightning bounces to"
  },
  {
    "id": 51,
    "name": "Cloud Conductance",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Chain Lightning can arc to blizzards and storm clouds"
  },
  {
    "id": 51,
    "name": "Lightning Shield",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Chain Lightning can are to friendly targets. Friendly units hit by Chain Lightning gain 1 SH. up to a max of 3. instead of damaged"
  },
  {
    "id": 52,
    "name": "Dual Angels",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Angels can cast your Death Bolt on a 4 turn cooldown."
  },
  {
    "id": 52,
    "name": "Mercy",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "When an enemy is healed for a cumulative total more than its max health. it becomes an ally."
  },
  {
    "id": 52,
    "name": "Massive Chorus",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Choir of Angels gains 4 num summons"
  },
  {
    "id": 53,
    "name": "Darkvision",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Doesn't blind you or your allies"
  },
  {
    "id": 53,
    "name": "Dark Clouds",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Deal 5 dark damage to all enemies under clouds each turn."
  },
  {
    "id": 53,
    "name": "Eternal Darkness",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Every 2000 dark damage dealt, gain a charge."
  },
  {
    "id": 54,
    "name": "Icy Hecromancy",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Raise slain living units as Icy Skeletons."
  },
  {
    "id": 54,
    "name": "Slaughter Chill",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Also deals poison damage to main target."
  },
  {
    "id": 54,
    "name": "Mass Death Chill",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Applies Death Chill to a connected group of enemies."
  },
  {
    "id": 55,
    "name": "Controlled Appetite",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Instead of killing the target, only steal as much HP as you are missing."
  },
  {
    "id": 55,
    "name": "Mass Feeding",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Also heal allies in a 2 tile radius."
  },
  {
    "id": 55,
    "name": "Charred Flesh",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Slain Living units are raised as Burning Skeletons."
  },
  {
    "id": 56,
    "name": "HP Threshold",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Dominate gains 40 Hp Threshold Increase the maximum HP units which can be targeted"
  },
  {
    "id": 56,
    "name": "Brute Force",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Dominate gains 1 Check Cur Hp Dominate targets based on current hp instead of maximum hp."
  },
  {
    "id": 56,
    "name": "Undead Servitude",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Transforms the target into a lich."
  },
  {
    "id": 57,
    "name": "Earthquake Totem",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Earthen Sentinel gains your Earthquake spell on a 3 turn cool down."
  },
  {
    "id": 57,
    "name": "Stinging Totem",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Earthen Sentinel gains your Poison Sting spell."
  },
  {
    "id": 57,
    "name": "Holy Totem",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Earthen Sentinel gains your Heavenly Blast spell on a 2 turn cool down."
  },
  {
    "id": 58,
    "name": "Safety",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Earthquake will not damage friendly units."
  },
  {
    "id": 58,
    "name": "Aftershocks",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Whenever you cast Earthquake, Earthquake gains +2 radius for 2 turns."
  },
  {
    "id": 58,
    "name": "Magnitude 8.0",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Stuns for 7 turns."
  },
  {
    "id": 59,
    "name": "Burst Fire",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Flame Gate gains 1 radius Elemental attacks gain 1"
  },
  {
    "id": 59,
    "name": "Eye Gate",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Your elementals instantly cast your Eye of Fire spell when summoned"
  },
  {
    "id": 59,
    "name": "Starfire Gate",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Starfire Gate can sustain off of both Fire and Arcane spells. Starfire Gate summons Starfire Elementals instead of Fire Elementals."
  },
  {
    "id": 60,
    "name": "Stone Gaze",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Floating Eye can cast your Petrify on a 3 turn cooldown"
  },
  {
    "id": 60,
    "name": "Eyemage",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Floating Eye can cast your eye spells on 15 turn cooldouns."
  },
  {
    "id": 60,
    "name": "Regenerating Shields",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Floating Eye gains 2 SH per turn up to 4 SH."
  },
  {
    "id": 61,
    "name": "Crustal Eyes Hudra",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Sax of damage dealt by Frostfire Hydra is redealt as Arcane damage."
  },
  {
    "id": 61,
    "name": "Freezing Ice",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Frostfire Hydra's Ice beam freezes units for 2 turns."
  },
  {
    "id": 61,
    "name": "Hydra Reclamation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Whenever a Frostfire Hydra expires, regain a charge of Frostfire Hydra."
  },
  {
    "id": 62,
    "name": "Radius",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Ghostball gains 1 radius"
  },
  {
    "id": 62,
    "name": "Ghost King",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "A Ghost King if summoned at the center of the ghost ball"
  },
  {
    "id": 62,
    "name": "Ghost Mass",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "A Ghostly Mass is summoned at the center of the ghost all."
  },
  {
    "id": 63,
    "name": "Metal Bear",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons a metallic bear instead of a giant bear."
  },
  {
    "id": 63,
    "name": "Venom Bear",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons 4 venom bear instead of a giant bear, Venom Bears have a poison bite, and heal whenever an enemy takes poison damage."
  },
  {
    "id": 63,
    "name": "Blood Bear",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons a blood bear instead of a giant bear. Blood bears are resistant to dark damage, and deal increasing damage with each attack."
  },
  {
    "id": 64,
    "name": "Petrification Orb",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Casts your petrify every turn."
  },
  {
    "id": 64,
    "name": "Orb Shards",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Each turn the orb shoots out tuo glass shards that deal 16 physical damage to random enemies in LOS"
  },
  {
    "id": 64,
    "name": "Enchantment Refraction",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Glass orb recasts any self-targeted enchantment you cast."
  },
  {
    "id": 65,
    "name": "Greater Armor",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Holy Armor gains 25 Resist"
  },
  {
    "id": 65,
    "name": "Crustal Armor",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Also provides resistance to arcane, holy. and ice."
  },
  {
    "id": 65,
    "name": "Smiting Thorns",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Whenever you take damage, deal 7 lightning damage to the source."
  },
  {
    "id": 66,
    "name": "Holy Smite",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Holy Fire deals additional lightning damage on the center tile."
  },
  {
    "id": 66,
    "name": "Divine Blaze",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Holy Fire casts your Blazerip spell."
  },
  {
    "id": 66,
    "name": "Heaven Call",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "If Holy Fire kills 4 unit, gain a charge of Call Seraph"
  },
  {
    "id": 67,
    "name": "Armor Plating",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Grants 1 SH to all minions."
  },
  {
    "id": 67,
    "name": "Permanent Transmutation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Permanent duration."
  },
  {
    "id": 67,
    "name": "Arcane Insulation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Ironize gains 1 Resist Arcane"
  },
  {
    "id": 68,
    "name": "Ring of Fire",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Lightning Halo creates an additional ring with 1 greater radius that deals fire damage."
  },
  {
    "id": 68,
    "name": "Radioactive Field",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Deals 58% poison damage to enemies inside the halo."
  },
  {
    "id": 68,
    "name": "Lightning Nova",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Every turn, Lightning Halo gets +1 radius"
  },
  {
    "id": 69,
    "name": "Mass Blasting",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Lightning Spire gains 4 num targets"
  },
  {
    "id": 69,
    "name": "Wall Penetration",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The spires can zap enemies through walls."
  },
  {
    "id": 69,
    "name": "Resistance Penetration",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Zapped units permenantly lose 14 lightning resistance"
  },
  {
    "id": 70,
    "name": "Toxogenesis",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summons a toxic worm ball instead. Toxic wormballs have a poison aura."
  },
  {
    "id": 70,
    "name": "Mechanogenesis",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summons an iron worm ball instead. Iron wormballs have many resistances."
  },
  {
    "id": 70,
    "name": "Ectogenesis",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summons a ghost worm ball instead. Ghost wormballs have many resistances, are undead, and teleport."
  },
  {
    "id": 71,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Mystic Power gains 8 duration"
  },
  {
    "id": 71,
    "name": "Damage Bonus",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Mystic Power gains 4 Bonus"
  },
  {
    "id": 71,
    "name": "Intensity",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Mystic Power stacks in intensity instead of duration"
  },
  {
    "id": 72,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Mystic Wision gains 8 duration"
  },
  {
    "id": 72,
    "name": "Bonus",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Mustic Vision gains 3 Bonus"
  },
  {
    "id": 72,
    "name": "Vision Aura",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Mystic vision affects all allied units"
  },
  {
    "id": 73,
    "name": "Dark Dream",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Upon ending, temporarily summon Ravens, Werewolves, and Old Witches based on the total damage dealt by the spell."
  },
  {
    "id": 73,
    "name": "Electric Dream",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Upon ending, temporarily summon Spark Spirits, Thunderbirds, and Aelves based on the total damage dealt by the spell."
  },
  {
    "id": 73,
    "name": "Fever Dream",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Upon ending, temporarily summon Fire Lizards, Fire Spirits, and Flame Rifts based on the total damage dealt by the spell."
  },
  {
    "id": 74,
    "name": "Hum Summons",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Plague of Filth gains 2 num summons"
  },
  {
    "id": 74,
    "name": "Minion Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Plague of Filth gains 6 minion duration"
  },
  {
    "id": 74,
    "name": "Serpent Plague",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Plague of Filth has a 58% chance of summoning a snake instead of a fly swarm or frog. Snakes have 3/4 the health of toads, deal 1 more damage. Snakes apply 5 stacks of poison on hit."
  },
  {
    "id": 75,
    "name": "Minion Damage",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Prison of Thorns gains 3 minion damage"
  },
  {
    "id": 75,
    "name": "Minion Health",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Prison of Thorns gains ? minion health"
  },
  {
    "id": 75,
    "name": "Iron Prison",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summon iron thorns instead, which deal 3 more damage and are resistant to many forms of damage."
  },
  {
    "id": 75,
    "name": "Icy Prison",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summon icy thorns instead, which have a ranged ice attack."
  },
  {
    "id": 76,
    "name": "Psychic Fields",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Plant 5S seedlings instead of"
  },
  {
    "id": 76,
    "name": "Immortal Forest",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Grow an Immortal Seedling instead of a normal one."
  },
  {
    "id": 76,
    "name": "Parasitic Growth",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "May target an enemy instead of an empty tile. Targeted enemy takes 1 arcane damage per turn for 18 turns. If the enemy dies, if it had 46 or more max hp, spawn 4 brain tree where it died."
  },
  {
    "id": 77,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Seal Fate gains -1 Requires Los Seal Fate can be cast without line of sight"
  },
  {
    "id": 77,
    "name": "Spreading Curse",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "When Sealed Fate's duration expires, it jumps to 4 random enemy in line of sight."
  },
  {
    "id": 77,
    "name": "Genocide",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Seal Fate effects all enemies with the same name as target."
  },
  {
    "id": 78,
    "name": "More Shrapnel",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Shrapnel Blast gains 12 num targets 12 more shrapnel shards are shot"
  },
  {
    "id": 78,
    "name": "Puncturing Blast",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "The shrapnel can penetrate or destroy walls"
  },
  {
    "id": 78,
    "name": "Magnetized Shards",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "The shrapnel shards always target enemies if possible."
  },
  {
    "id": 79,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Sight of Blood gains 3 duration"
  },
  {
    "id": 79,
    "name": "Demon Frenzy",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Sight of Blood gains 1 Demon Units Demon units are also affected"
  },
  {
    "id": 79,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Sight of Blood gains -1 Requires Los Sight of Blood can be cast without line of sight"
  },
  {
    "id": 80,
    "name": "Copper Shaft",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Deals Lightning damage to all enemies adjacent to the Spear."
  },
  {
    "id": 80,
    "name": "Consecration",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Cast your Heavenly Blast on slain targets."
  },
  {
    "id": 81,
    "name": "Endlessness",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Suspend Mortality gains 2 Lives The target gains 3 reincarnations instead of dust 1."
  },
  {
    "id": 81,
    "name": "Mass Immortaity",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "All allies with the same name as the target are also affected."
  },
  {
    "id": 81,
    "name": "Twilight Essence",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Targeted unit gains the holy and undead tags and 25 holy and dark resist."
  },
  {
    "id": 82,
    "name": "Quickcast",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Underworld Passage gains 1 quick cast Casting underworld passage only takes half a turn"
  },
  {
    "id": 82,
    "name": "Tremorsensitivity",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons 2 Rockworms on each end."
  },
  {
    "id": 83,
    "name": "Wilting Have",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Also deals 22 poison damage and poisons targets for S duration turns"
  },
  {
    "id": 83,
    "name": "Have of Tyranny",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "If Have of Oread deals 50 or more damage in total, regain a charge of Dominate"
  },
  {
    "id": 83,
    "name": "Fear Spirits",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "On killing 4 units Summon a Fearface at that point for 6 turns."
  },
  {
    "id": 84,
    "name": "Armor of Armageddon",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Grants 25 resist to fire, lightning. and physical damage and provides thorns buff that deals 2 damage for each chaos tupe to enemies that attack buffed units."
  },
  {
    "id": 84,
    "name": "Mass Armaments",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Cast on a connected group of allies."
  },
  {
    "id": 84,
    "name": "Mega Armageddon",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Provides unit with a melee version of Mega Annihilate instead of Annihilate."
  },
  {
    "id": 85,
    "name": "Flash Freeze",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Freeze all units in affected tiles for 2 turns."
  },
  {
    "id": 85,
    "name": "Hailstorm",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Each Blizzard has a 25% chance to cast your Icicle spell each turn."
  },
  {
    "id": 85,
    "name": "Snow Feathers",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Every 150 damage, return a charge of your Ice Phoenix spell."
  },
  {
    "id": 86,
    "name": "Pain Aura",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The Blood Golem gains 4 S tile poison and fire damage aura."
  },
  {
    "id": 86,
    "name": "Greater Thorns",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The Blood Golems thorns damage is increased by its minion damage stat."
  },
  {
    "id": 86,
    "name": "Vampire Golem",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Whenever the Blood Golem deals damage, half that much healing is distributed amongst its living allies."
  },
  {
    "id": 87,
    "name": "Bone Spears",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Bone Barrage damages all targets in a beam from the minion to the target"
  },
  {
    "id": 87,
    "name": "Cursed Bones",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Bone Barrage also deals dark damage"
  },
  {
    "id": 88,
    "name": "Bone Explosion",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Also deals physical damage equal to half of the sacrificed unit's hp to all units within 4 tiles of the sacrificed unit."
  },
  {
    "id": 88,
    "name": "Archon Beam",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Shoots lightning along the Path to the sacrificed unit, damaging enemies and shielding allies"
  },
  {
    "id": 89,
    "name": "Moonblade",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The Seraph deals arcane damage in addition to fire and holy damage with its Cleave attack."
  },
  {
    "id": 89,
    "name": "Heal Aura",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Call Seraph gains 4 heal Within 4 tiles for 4 HP each turn."
  },
  {
    "id": 89,
    "name": "Holy Fire Aura",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The Seraph gains a damage aura, randomly dealing either 2 fire or 2 holy damage to enemies within 5 tiles each turn."
  },
  {
    "id": 90,
    "name": "Lifesteal",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "You heal for 50% of all damage dealt by this spell."
  },
  {
    "id": 90,
    "name": "Death Power",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "If the damage killed the enemy, the bolt coming out of that enemy deals 2x damage."
  },
  {
    "id": 90,
    "name": "Torment",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Every 3 kills casts your Fiery Tormentor spell where the slain enemy was."
  },
  {
    "id": 91,
    "name": "Paralyzing Combustion",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Stuns targets for 3 turns."
  },
  {
    "id": 91,
    "name": "Flame Rave",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Heal allies instead of hurting them."
  },
  {
    "id": 91,
    "name": "Toxic Embers",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The explosion applies poison to damaged targets for one half of the fire damage taken."
  },
  {
    "id": 92,
    "name": "Multicopy",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Conductance gains 1 Copies Make 1 extra copy of lightning spells cast on the target"
  },
  {
    "id": 92,
    "name": "Resistance Debuff",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Conductance gains 58 Resistance Debuff"
  },
  {
    "id": 92,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Conductance gains 6 max charges"
  },
  {
    "id": 93,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Death Cleave gains 3 duration"
  },
  {
    "id": 93,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Death Cleave gains 4 max charges"
  },
  {
    "id": 94,
    "name": "Num Targets",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Dispersion Field gains 2 num targets"
  },
  {
    "id": 94,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Dispersion Field gains S duration"
  },
  {
    "id": 94,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Dispersion Field gains S max charges"
  },
  {
    "id": 95,
    "name": "Felomancy",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Slain targets are raised as cursed cats."
  },
  {
    "id": 95,
    "name": "Ursomancy",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Healing over the wizards max health is converted into blood bears."
  },
  {
    "id": 95,
    "name": "Radius",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Drain Pulse gains 3 radius"
  },
  {
    "id": 96,
    "name": "Radius",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Essence Flux gains 2 radius"
  },
  {
    "id": 96,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Essence Flux gains 6 max charges"
  },
  {
    "id": 97,
    "name": "Frostfire Tormentor",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons a frostfire tormentor instead."
  },
  {
    "id": 97,
    "name": "Metallic Tormentor",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summons a metallic fiery tormentor instead."
  },
  {
    "id": 97,
    "name": "Tormenting Mass",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summons a Fiery Tormenting Mass instead."
  },
  {
    "id": 98,
    "name": "Broodlingas",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Fire Drakes can summon 2 Fire Lizards on a 9 turn cooldown."
  },
  {
    "id": 98,
    "name": "Metal Dragon",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summoned Fire Drakes are metallic"
  },
  {
    "id": 98,
    "name": "Dragon Mage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Fire Drakes can cast your Blazerip with a 4 turn cooldown."
  },
  {
    "id": 99,
    "name": "Melting Flame",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Melt walls adjacent to the blast"
  },
  {
    "id": 99,
    "name": "Bright Flame",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Flame Burst deals holy instead of fire. and shields allied units instead of damaging them."
  },
  {
    "id": 99,
    "name": "Spreading Flame",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Each cast of flame burst consumes all remaining charges. For each charge consumed, Flame burst gets +1 radius and +1 damage. Slain enemies create additional explosions with half radius and damage."
  },
  {
    "id": 100,
    "name": "Dracolich",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summoned Ice Drakes are Liches and can create a soul jars."
  },
  {
    "id": 100,
    "name": "Broodlingas",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Ice Drakes can summon 2 Ice Lizards on a 9 turn cooldown."
  },
  {
    "id": 100,
    "name": "Dragon Mage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Ice Drakes can cast Death Chill with an 8 turn cooldoun. This Death Chill gains all of your uparades and bonuses"
  },
  {
    "id": 101,
    "name": "Frostaleam",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Frozen enemies in radius additionally take arcane damage."
  },
  {
    "id": 101,
    "name": "Faebound Orb",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The Orb summons an Ice Faery for every 75 damage it deals"
  },
  {
    "id": 101,
    "name": "Blizzard Orb",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Ice Orb casts your Blizzard on an 8 turn cooldown."
  },
  {
    "id": 102,
    "name": "Damage",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Ice Vortex gains 11 damage"
  },
  {
    "id": 102,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Ice Vortex gains 2 duration"
  },
  {
    "id": 102,
    "name": "Radius",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Ice Vortex gains 3 radius"
  },
  {
    "id": 103,
    "name": "Endless Swarm",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Every 9 turns, passively summon an imp"
  },
  {
    "id": 103,
    "name": "Metal Swarm",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Imp swarm summons copper imps instead of spark imps. and furnace imps instead of fire imps."
  },
  {
    "id": 103,
    "name": "Dark Swarm",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Imp swarm summons rot imps, void imps. and insanity imps instead of fire. spark. and iron imps."
  },
  {
    "id": 104,
    "name": "Lingering Form",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Lasts 3 turns after you cast a lightning spell instead of vanishing instantly."
  },
  {
    "id": 104,
    "name": "Fire Form",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Also works on fire spells and gives 100 fire resist."
  },
  {
    "id": 104,
    "name": "Crackling Aura",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "In lightning form, deal 5 lightning damage to up to 4 enemies in a 5 tile radius each turn."
  },
  {
    "id": 105,
    "name": "Particle Storm",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Clouds summoned by Lightning Storm deal 3 arcane damage every turn."
  },
  {
    "id": 105,
    "name": "Lightning Star",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Each turn, deal damage in a beam along 2 random lightning clouds, twice."
  },
  {
    "id": 105,
    "name": "Spirit Harvest",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "For every 75 damage dealt by Lightning Storm, summon a Storm Spirit."
  },
  {
    "id": 106,
    "name": "Fae Bones",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Arcane Allies are raised as fae bone shamblers instead of normal ones."
  },
  {
    "id": 106,
    "name": "Burning Bones",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Fire allies are raised as burning bone shamblers instead of normal ones."
  },
  {
    "id": 106,
    "name": "Bone Shards",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Each slain ally deals 7 physical damage to up to 3 enemies in line of sight."
  },
  {
    "id": 108,
    "name": "Flesh Harvest",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "For every 100 damage taken during Pain Mirror, gain a charge of Summon Flesh Fiend"
  },
  {
    "id": 108,
    "name": "Dulled Pain",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Gain 25% resist to dark, arcane, fire, lightning, and Physical damage during pain mirror."
  },
  {
    "id": 108,
    "name": "Burning Pain",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Additionally deal fire damage."
  },
  {
    "id": 109,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Permanence gains 20 duration"
  },
  {
    "id": 110,
    "name": "Crumbling Aura",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Each turn, all petrified enemies within the aura with 1or less hp are instantly killed."
  },
  {
    "id": 110,
    "name": "Mormification Aura",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Enemies slain while Petrified within the range of the aura, the enemy is raised as a rock worm."
  },
  {
    "id": 110,
    "name": "Glassify",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Turn enemies to glass instead of stone. making them take double physical damage instead of one quarter."
  },
  {
    "id": 111,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Purity gainsduration"
  },
  {
    "id": 111,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Purity gains 4 max charges"
  },
  {
    "id": 112,
    "name": "Resistance Melting",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Removes 25 Fire resist from targets."
  },
  {
    "id": 112,
    "name": "Linear Conductance",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Redeslt lightning damage is dealt along a beam instead of just to one target."
  },
  {
    "id": 112,
    "name": "Pyrostatic Chaos",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever you cast a chaos spell. cast Pyrostatic Curse at that position."
  },
  {
    "id": 113,
    "name": "Slow Burn",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "On expiring and dealing damage, gain a buff that redeals half the damage, then, finally, one that deals a third of it."
  },
  {
    "id": 113,
    "name": "Chaos Seal",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Gains charges separately from fire, lightning, and Physical damage, and redeals each on expiration."
  },
  {
    "id": 113,
    "name": "Fire Harvest",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "For every 100 damage dealt, summon a flame spirit."
  },
  {
    "id": 114,
    "name": "Assistant Cannoneers",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "In addition to Siege Golems, summon 5 Goblin Assistants that can repair and operate inferno cannons."
  },
  {
    "id": 114,
    "name": "Recycling",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Constructs and Metallic units killed by Inferno Cannons are summoned as Siege Golems."
  },
  {
    "id": 114,
    "name": "Chaos Cannon",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Instead of summoning Siege Golems, summon Chaos Siege Golems. Chaos Siege Golems make a Chaos Cannon that shoots a Fire projectile. a Lightning projectile, and a Physical projectile with lowered radiuses."
  },
  {
    "id": 115,
    "name": "Shield Burn",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Siphon Shields gains 5 Shield Burn Deal 5 fire damage per shield stolen"
  },
  {
    "id": 115,
    "name": "Shield Steal",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Siphon Shields gains 4 Shield Steal"
  },
  {
    "id": 116,
    "name": "Fae Stampede",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summon Faetouched elephants instead of normal ones. Gain 50 arcane resist. Arcane spells do not end elephant form."
  },
  {
    "id": 116,
    "name": "Burning Stampede",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Summon Burning elephants instead of normal ones. Gain 50 fire resist. Fire spells do not end elephant form."
  },
  {
    "id": 116,
    "name": "Metal Stampede",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Summon Metallic elephants instead of normal ones. Gain 25 fire and 50 lightning resist. Metallic spells do not end elephant form."
  },
  {
    "id": 117,
    "name": "Stormshield",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Allies in radius are not affected. and instead gain ice and lightning immunity for 4 turns."
  },
  {
    "id": 117,
    "name": "Dual Hows",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Enemies take both lightning and ice damage instead of just one. and are both frozen and stunned."
  },
  {
    "id": 117,
    "name": "Spirit Nova",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summons 4 Storm Spirit for every 40 damage dealt"
  },
  {
    "id": 118,
    "name": "Storm Summoning",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Whenever you cast Storm Drake, up to 2 lightning storms in line of sight of the target are converted into drakes"
  },
  {
    "id": 118,
    "name": "Ghost Drake",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summoned Storm Drakes are ghostly."
  },
  {
    "id": 118,
    "name": "Drake Swap",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Whenever you target a summoned Storm Drake with a4 lightning spell. swap places with it."
  },
  {
    "id": 118,
    "name": "Dragon Mage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Storm Drakes can cast your Chain Lightning with a 10 turn cooldown."
  },
  {
    "id": 119,
    "name": "Junk Golems",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Whenever an enemy constructs dies. raise it as a junk golem."
  },
  {
    "id": 119,
    "name": "Elemental Spirits",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Whenever an enemy fire, ice or lightning unit dies, a4 random summoned ally gains 100 resistance to that element and 4 ranged attack of that tupe. Each ally can gain only 1 such buff."
  },
  {
    "id": 119,
    "name": "Restless Minions",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Allies can also be raised by Restless Dead"
  },
  {
    "id": 120,
    "name": "Toxic Gaze",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Vampiric Gaze also deals Poison damage"
  },
  {
    "id": 120,
    "name": "Vampiric Tax",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "You heal for 100% of the damage dealt"
  },
  {
    "id": 120,
    "name": "Refracting Gaze",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Each bolt bounces once to a random enemy in line of sight of the original target"
  },
  {
    "id": 121,
    "name": "Void Binding",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Slain enemies are raised as void bombers"
  },
  {
    "id": 121,
    "name": "Star Beam",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Void beam also deals fire damage"
  },
  {
    "id": 121,
    "name": "Voidcurse",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Units in the aoe lose 25 arcane resist"
  },
  {
    "id": 122,
    "name": "Shields",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Void Drake gains 3 shields"
  },
  {
    "id": 122,
    "name": "Dragon Mage",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Yoid Drakes can cast Magic Missile with a 3 turn cooldown. This Magic Missile gains all of your uparades and bonuses"
  },
  {
    "id": 122,
    "name": "Essence Drake",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Whenever a summoned Woid Orake kills an enemy unit, a4 random temporary ally gains +5 turns to its duration."
  },
  {
    "id": 123,
    "name": "Flow Range",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Volcanic Eruption gains 2 Flow Range"
  },
  {
    "id": 123,
    "name": "Blindcasting",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Volcanic Eruption gains -1 Requires Los Volcano can be cast without line of sight"
  },
  {
    "id": 123,
    "name": "Wallcano",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "In addition to chasms, volcano may target walls. Doing so turns the walls into chasms"
  },
  {
    "id": 124,
    "name": "Hungry Wall",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "#ERROR!"
  },
  {
    "id": 124,
    "name": "Fae Wall",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Ice Walls gain fae modifier."
  },
  {
    "id": 124,
    "name": "Endless Wall",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Infinite radius. make floors out of tiles in AoE."
  },
  {
    "id": 125,
    "name": "Pyrostatic Watcher Form",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Instead casts your Pyrostatic Pulse, gain 100 fire resist instead of"
  },
  {
    "id": 125,
    "name": "Void Watcher Form",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Instead casts your Void Beam. gain 100 arcane resist. Can Fire at targets outside of line of sight."
  },
  {
    "id": 125,
    "name": "Chain Watcher Form",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Instead casts your Chain Lightning."
  },
  {
    "id": 126,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Wheel of Death gains 3 max charges"
  },
  {
    "id": 126,
    "name": "Cheat Fate",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Death Roulette avoids shielded and dark immune enemies, and weights its target selection by current resistance adjusted hitpoints instead of uniformly."
  },
  {
    "id": 127,
    "name": "Final Burst",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Casts your Arc Lightning when it dies."
  },
  {
    "id": 127,
    "name": "Drakebirth",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Casts your Lightning Drake when it dies."
  },
  {
    "id": 127,
    "name": "Pyrostatics",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Instead of beams of lightning. fires your Pyrostatic Pulse."
  },
  {
    "id": 129,
    "name": "Holy Bolt",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The Blue Lion's melee attack is replaced by 4 rangeholy bolt attack."
  },
  {
    "id": 129,
    "name": "Shimmermane",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The Blue Lion gains your Healing Light spell on a ? turn cooldown."
  },
  {
    "id": 129,
    "name": "Burning Lion",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summon a Burning Lion instead of a Blue Lion."
  },
  {
    "id": 130,
    "name": "Heal Beam",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Archon's attack heals allies it passes through."
  },
  {
    "id": 130,
    "name": "Beam Arc",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Archon's attack arcs a4 maximum of one time to a nearby enemy."
  },
  {
    "id": 130,
    "name": "Storm Archon",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Archon gains 50 Ice resist and its attack also deals Ice damage."
  },
  {
    "id": 131,
    "name": "Cantrip Burst",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Instead of a cone, Cantrip Cascade casts in a 5 tile burst."
  },
  {
    "id": 131,
    "name": "Orb Cascade",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "In addition to casting in a cone, all of your orbs cast a random known cantrip on the nearest foe in line of sight."
  },
  {
    "id": 131,
    "name": "Evocation Amalgamation",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Additionally cast one random level 2 sorcery spell from your spellbook on all targets."
  },
  {
    "id": 132,
    "name": "Ice Guardians",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "For each 100 damage dealt by a single cast. gain a charge of a random ice conjuration spell."
  },
  {
    "id": 132,
    "name": "Dual Wind",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Chill Wind also casts behind the caster."
  },
  {
    "id": 132,
    "name": "Arcane Storm",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "On kill, Chill Wind casts your Blazerip spell."
  },
  {
    "id": 133,
    "name": "Fire Shock",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "After dealing dark and lightning damage, deals fire damage as well"
  },
  {
    "id": 133,
    "name": "Shield Burn",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Before dealing damage, removes 3 SH"
  },
  {
    "id": 133,
    "name": "Corpse Construct",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "If Death Shock kills one or more enemies, summon an electric zombie with hep equal to half the total hp of all slain enemies."
  },
  {
    "id": 134,
    "name": "Winter Faery",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summon winter faeries instead of normal ones. Winter faeries resist ice and can cast your Freeze spell on a 5 turn cooldown."
  },
  {
    "id": 134,
    "name": "Summon Queen",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "A fae queen is summoned as well"
  },
  {
    "id": 134,
    "name": "Glass Faery",
    "subId": "",
    "exType": [],
    "level": 9,
    "text": "Summon glass faeries instead of normal ones."
  },
  {
    "id": 135,
    "name": "Belly Flop",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Gains 4 25 damage leap attack with a 7 turn cooldoun."
  },
  {
    "id": 135,
    "name": "Barbeque Fiends",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summons burning flesh fiends instead of normal ones."
  },
  {
    "id": 135,
    "name": "Horm Lord",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Flesh Fiends can cast your Lumbriogenesis spell on a 13 turn cooldown."
  },
  {
    "id": 136,
    "name": "Army of Eagles",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Flock of Eagles gains 4 num summons"
  },
  {
    "id": 136,
    "name": "Shielded Eagles",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Flock of Eagles gains 3 shields"
  },
  {
    "id": 136,
    "name": "Thunder Claw",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Eagles gain your Thunder Strike spell on a 15 turn cool down."
  },
  {
    "id": 136,
    "name": "Untouchable Majesty",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Eagles deal 1 holy damage ta anyone dealing them damage."
  },
  {
    "id": 137,
    "name": "Ghost Caller",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "The Golden Skull gains your Ghostball spell with aturn cooldown"
  },
  {
    "id": 137,
    "name": "Bone Wheel",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The Golden Skull gains your Wheel of Death spell with a 12 turn cooldown"
  },
  {
    "id": 137,
    "name": "Blood Skull",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The Golden Skull gians your Bloodshift spell with a 3 turn cooldown"
  },
  {
    "id": 138,
    "name": "Fire Gaze",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Heavenly Idol gains 1 Fire Gaze The Idol gains a fire beam attack"
  },
  {
    "id": 138,
    "name": "Shield Gaze",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The Idol gains a single-target +4 SH ability, which sets the SH of a unit with less than 4 SH to 4 SH."
  },
  {
    "id": 138,
    "name": "Bastion of Immortality",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Casts your Suspend Mortality on summoned ally units with a5 turn cooldown"
  },
  {
    "id": 139,
    "name": "Reincarnations",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Ice Phoenix gains 2 Lives The phoenix will reincarnate 2 more times"
  },
  {
    "id": 139,
    "name": "Ice Aura",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The phoenix gains 2 damage ice aura with atile radius"
  },
  {
    "id": 139,
    "name": "Heal Aura",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The phoenix gains a 1 hp regen aura with atile radius"
  },
  {
    "id": 140,
    "name": "Cascade",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Mega Annihilate gains 4 cascade range Hits from Annihilate will jump to nearby targets if the main target is killed"
  },
  {
    "id": 140,
    "name": "Dark Annihilation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Mega Annihilate gains 1 dark Annihilate deals an additional dark damage hit"
  },
  {
    "id": 140,
    "name": "Arcane Annihilation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Mega Annihilate gains 1 arcane Annihilate deals an additional arcane damage hit"
  },
  {
    "id": 141,
    "name": "Spear Hag",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The Night Hag gains your Bone Spear spell on a 4 turn cooldown"
  },
  {
    "id": 141,
    "name": "Nightmare Hag",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The Hight hag can cast your Hightmare Aura spell"
  },
  {
    "id": 141,
    "name": "Bone Queen",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "The Might Hag gains the ability to summon small bone shamblers"
  },
  {
    "id": 142,
    "name": "Channeling",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Pillar of Flame becomes a channeled spell"
  },
  {
    "id": 142,
    "name": "Disrupting Flames",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Strips main target of shields and applies -50 Fire resist for 10 turns."
  },
  {
    "id": 142,
    "name": "Pillar of Annihilation",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "On kill, casts your Annihilate spell on up to 4 enemy units in line of sight of the target tile."
  },
  {
    "id": 143,
    "name": "Turbo Toxin",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Units blocking the spider ring instantly take 2a Poison damage."
  },
  {
    "id": 143,
    "name": "Long Webs",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Ring of Spiders gains 4 Stun Duration Units blocking the web ring are stunned for 5 turns."
  },
  {
    "id": 143,
    "name": "Aether Spiders",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Ring of Spiders gains 1 Aether Spiders"
  },
  {
    "id": 144,
    "name": "Fire Slime",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Gain a chance to summon fire slime."
  },
  {
    "id": 144,
    "name": "Ice Slime",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Gain a chance to summon ice slime."
  },
  {
    "id": 144,
    "name": "Void Slime",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Gain a chance to summon void slime."
  },
  {
    "id": 145,
    "name": "Arcane Taxation",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Soul Tax gains 1 arcane Soul tax deals an additional third of the target's remaining HP as arcane damage."
  },
  {
    "id": 145,
    "name": "Insta Tax",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Soul Tax gains 1 quick cast Casting foul Tax only takes"
  },
  {
    "id": 145,
    "name": "Mass Taxation",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Targets a connected group of enemies."
  },
  {
    "id": 146,
    "name": "Aether Queen",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summon an aether spider queen instead."
  },
  {
    "id": 146,
    "name": "Steel Queen",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Summon a steel spider queen instead."
  },
  {
    "id": 146,
    "name": "Vampire Queen",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "The Spider Queen and its babies can cast your Life Drain on a 4 turn cooldown."
  },
  {
    "id": 147,
    "name": "Quickcast",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Teleport gains 1 quick cast Casting feleport only takes"
  },
  {
    "id": 147,
    "name": "Group Teleport",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Teleport also teleports up to 1ally units with you."
  },
  {
    "id": 147,
    "name": "Yoid Teleport",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Teleport deals arcane damage to all enemy units in line of sight of the targeted tile equal to its maximum number of charges."
  },
  {
    "id": 148,
    "name": "Proton Storm",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Arc Lightning deals 4 arcane damage to all units in line of sight of each arc target"
  },
  {
    "id": 148,
    "name": "Enervation",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Arc Lightning heals allies instead of damaging them"
  },
  {
    "id": 148,
    "name": "Multi Flash",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Arc Lightning gains 4 num targets"
  },
  {
    "id": 149,
    "name": "Draconic Vitality",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Dragons also gainHP regen for the duration."
  },
  {
    "id": 149,
    "name": "Draconic Vigor",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Dragons gain +2 range to their breath attack"
  },
  {
    "id": 149,
    "name": "Draconic Majesty",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "On cast, all enemy units adjacent to your dragon minions are stunned for S turns."
  },
  {
    "id": 150,
    "name": "Guardian Gnomes",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summonelectric gnomes on casting faehaunt garden."
  },
  {
    "id": 150,
    "name": "Fae Flies",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summon a Fae Fly Swarm every 15 damage."
  },
  {
    "id": 150,
    "name": "Glass Garden",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summon Glass Butterflies instead of Butterfly Demons."
  },
  {
    "id": 151,
    "name": "Flames of Sorcery",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The furnace can cast your Flame Burst spell on a 5 turn coodloun."
  },
  {
    "id": 151,
    "name": "Imp Smithy",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "The furnace also produces an Copper Imp every 30 damage."
  },
  {
    "id": 151,
    "name": "Arcane Eyebolts",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "The hounds can cast your magic missile spell on a 4 turn cooldown."
  },
  {
    "id": 152,
    "name": "Dragon Saint",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Deals 14 holy damage to anything that deals damage to the Gold Drake."
  },
  {
    "id": 152,
    "name": "Immortal Oragon",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Gold Drake gains the Immortal modifier."
  },
  {
    "id": 152,
    "name": "Dragon Mage",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summoned Gold Drakes can cast Healing Light with a 8 turn cooldown. This Healing Light gains all of your upgrades and bonuses"
  },
  {
    "id": 153,
    "name": "Culling",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Heaven's Wrath also damages the units with the lowest current HP."
  },
  {
    "id": 153,
    "name": "Halt Heretics",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Heaven's Wrath gains 3 Stun Duration Heaven's Wrath also applies Stun for 3 turns."
  },
  {
    "id": 153,
    "name": "Fiery Wrath",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Heaven's Wrath also deals fire damage."
  },
  {
    "id": 154,
    "name": "Void Court",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summon only void knights. Summon a void champion as well."
  },
  {
    "id": 154,
    "name": "Storm Court",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summon only storm knights. Summon a storm champion as well."
  },
  {
    "id": 154,
    "name": "Chaos Court",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Summon only chaos knights. Summon a chaos champion as well."
  },
  {
    "id": 155,
    "name": "Distant Memory",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Prioritize regaining charges of depleted spells."
  },
  {
    "id": 155,
    "name": "Deep Reflection",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Mystic Memory gains 3 Max Channel"
  },
  {
    "id": 155,
    "name": "Shield of Memories",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Gain 2 SH each time you gain charges from this spell."
  },
  {
    "id": 156,
    "name": "Explosive Orb",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Searing Orb casts your Flameburst on expiration."
  },
  {
    "id": 156,
    "name": "Matter Melting",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Searing Orb gains 1 Melt Walls Searing Orb can melt and be cast through walls"
  },
  {
    "id": 156,
    "name": "Flame Rift",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "For each 20 damage dealt by anoorbs summon a flame rift for 10 turns near the orb."
  },
  {
    "id": 157,
    "name": "Resistance Debuff",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Twilight Gaze gains 5a Resistance Debuff"
  },
  {
    "id": 157,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Twilight Gaze gains 10 duration"
  },
  {
    "id": 157,
    "name": "Arcane Gaze",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Twilight Gaze also reduces arcane resist."
  },
  {
    "id": 158,
    "name": "Copies",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Multicast gains 1 Copies"
  },
  {
    "id": 158,
    "name": "Duration",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "Multicast gains 4 duration"
  },
  {
    "id": 158,
    "name": "Max Charges",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Multicast gains 4 max charges"
  },
  {
    "id": 159,
    "name": "Ensoulment",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Spawn ghosts from non living units as well"
  },
  {
    "id": 159,
    "name": "Arcane Wind",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Also deals arcane damage to all units in the area of effect"
  },
  {
    "id": 159,
    "name": "Dual Wind",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Soul Wind also casts behind the caster."
  },
  {
    "id": 160,
    "name": "Defense System",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The summoned lairs gain a Projectile attack with 10 range that deals 5 physical damage."
  },
  {
    "id": 160,
    "name": "Manufactory",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Surrounds the initially summoned gates with another layer of gates"
  },
  {
    "id": 160,
    "name": "Copper Spikeballs",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Summons copper spikeballs instead of normal ones"
  },
  {
    "id": 161,
    "name": "Beauty of Steel",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Also heals allied metallic units."
  },
  {
    "id": 161,
    "name": "Shield Strip",
    "subId": "",
    "exType": [],
    "level": 2,
    "text": "Damaged units lose 1 SH before being damaged."
  },
  {
    "id": 161,
    "name": "Echoing Beauty",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Auto recast in 10 turns."
  },
  {
    "id": 162,
    "name": "Animated Chaos",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Slain units are reanimated as Chaos Spirits."
  },
  {
    "id": 162,
    "name": "Chaos Gifts",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Up to 3 random non-chaos allies get the chaos boss modifier."
  },
  {
    "id": 162,
    "name": "Echoing Chaos",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Auto recasts in 10 turns."
  },
  {
    "id": 163,
    "name": "Echoing Ice",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Auto recast in 10 turns."
  },
  {
    "id": 163,
    "name": "Endless Ice",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Gain a charge of all other ice spells on cast."
  },
  {
    "id": 163,
    "name": "Mord of Wind",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Casts your Chill Wind on up to 3 enemies."
  },
  {
    "id": 164,
    "name": "Selective Madness",
    "subId": "",
    "exType": [],
    "level": 1,
    "text": "Only heals allies."
  },
  {
    "id": 164,
    "name": "Echoing Madness",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Auto recast in 10 turns."
  },
  {
    "id": 164,
    "name": "Guardians of Madness",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summon 3 mind devourers, 5 Floating eyeballs, andtroublers for 10 turns at random locations."
  },
  {
    "id": 165,
    "name": "Hatred of Life",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "All other living units take 3poison damage."
  },
  {
    "id": 165,
    "name": "Spirit Gift",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Up to 3 allies Cexcluding undead) get the ghostly modifier."
  },
  {
    "id": 165,
    "name": "Spirit of Lichdam",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Up to 3 random living allies get the lich modifier."
  },
  {
    "id": 166,
    "name": "Magic Eggs",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "Fire eggs cast your Fireball on a 3 turn cooldown, and Ice egas cast your Icicle on a 3 turn cooldown."
  },
  {
    "id": 166,
    "name": "Radiant Egos",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Wurm Egos gain a 1 damage 3 radius aura of their element type."
  },
  {
    "id": 166,
    "name": "Scale Harvest",
    "subId": "",
    "exType": [],
    "level": 4,
    "text": "For everyallied dragons that die, gain a charge of Hurm Egos."
  },
  {
    "id": 167,
    "name": "Aelf Horde",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The spawn time is shortened to 4 to 5 turns instead."
  },
  {
    "id": 167,
    "name": "Fae Aelves",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "The Spawners spawn Fae Aelyves instead of normal Aelves."
  },
  {
    "id": 167,
    "name": "Elite Aelves",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "The Spauners spawn Aelf Lightning Artists instead of normal Aelves."
  },
  {
    "id": 168,
    "name": "Boomerang",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The bolts also return after they reach their target, damaging units in the middle a second time."
  },
  {
    "id": 168,
    "name": "Toxic Hatred",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "The bolts also poison enemies for 13 turns"
  },
  {
    "id": 168,
    "name": "Torment Harvest",
    "subId": "",
    "exType": [],
    "level": 3,
    "text": "If this spell kills an enemy, gain a charge of Summon Fiery Tormentor"
  },
  {
    "id": 169,
    "name": "Trollblooded Halfmen",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summons are Trollblooded."
  },
  {
    "id": 169,
    "name": "Metallic Halfmen",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "Summons are Metallic."
  },
  {
    "id": 169,
    "name": "Burning Halfmen",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Summons are Burning."
  },
  {
    "id": 171,
    "name": "Chaos Storm",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Each meteor casts your Annihilate on 3 enemy units within 4 tiles"
  },
  {
    "id": 171,
    "name": "Rain of Dragons",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Each meteor has a 50% chance of casting your fire drake spell as well"
  },
  {
    "id": 171,
    "name": "Pyrostatic Storm",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Each meteor casts your Lightning Bolt on up to 2 enemies in line of sight"
  },
  {
    "id": 172,
    "name": "Holy Horde",
    "subId": "",
    "exType": [],
    "level": 7,
    "text": "Ritual of Revelation gains 4 num summons"
  },
  {
    "id": 172,
    "name": "Blasphemy",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "Summoned Prophets are liches."
  },
  {
    "id": 172,
    "name": "Arcane Revelation",
    "subId": "",
    "exType": [],
    "level": 8,
    "text": "Also casts your Blazerip on 3 enemies."
  },
  {
    "id": 173,
    "name": "Clay Wizard",
    "subId": "",
    "exType": [],
    "level": 6,
    "text": "The summoned wizards are made of clay"
  },
  {
    "id": 173,
    "name": "Ghost Wizard",
    "subId": "",
    "exType": [],
    "level": 5,
    "text": "The summoned wizards are ghostly"
  },
  {
    "id": 173,
    "name": "Wizard Gang",
    "subId": "",
    "exType": [],
    "level": 9,
    "text": "Summon 3 wizards"
  }
];