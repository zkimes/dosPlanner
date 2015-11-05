'use strict';

/**
 * @ngdoc function
 * @name dosPlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dosPlannerApp
 */
angular.module('dosPlannerApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.isCollapsed = true;

    $scope.attributes = [
    	{name: 'Strength', val: 5},
    	{name: 'Dexterity', val: 5},
    	{name: 'Intelligence', val: 5},
    	{name: 'Constitution', val: 5},
    	{name: 'Speed', val: 5},
    	{name: 'Perception', val: 5}
    ];

    $scope.abilityPoints = 49;

    $scope.abilities = [
    	{
    		category: 'Weapons',
    		abilities: [
    			{name: 'Bow', val: 0},
    			{name: 'Crossbow', val: 0},
    			{name: 'Single-Handed', val: 0},
    			{name: 'Two-Handed', val: 0},
    			{name: 'Tenebrium', val: 0}
    		]
    	},
    	{
    		category: 'Defense',
    		abilities: [
    			{name: 'Armour Specialist', val: 0},
    			{name: 'Body Building', val: 0},
    			{name: 'Shield Specialist', val: 0},
    			{name: 'Willpower', val: 0}
    		]
    	},
    	{
    		category: 'Skills',
    		abilities: [
    			{name: 'Aerotheurge', val: 0},
    			{name: 'Expert Marksman', val: 0},
    			{name: 'Geomancer', val: 0},
    			{name: 'Hydrosophist', val: 0},
    			{name: 'Man-at-arms', val: 0},
    			{name: 'Pyrokinetic', val: 0},
    			{name: 'Scoundrel', val: 0},
    			{name: 'Witchcraft', val: 0}
    		]
    	},
    	{
    		category: 'Personality',
    		abilities: [
    			{name: 'Bartering', val: 0},
    			{name: 'Charisma', val: 0},
    			{name: 'Leadership', val: 0},
    			{name: 'Lucky Charm',  val: 0}
    		]
    	},
    	{
    		category: 'Craftsmanship',
    		abilities: [
    			{name: 'Blacksmithing', val: 0},
    			{name: 'Crafting', val: 0},
    			{name: 'Loremaster', val: 0},
    			{name: 'Telekinesis',  val: 0}
    		]
    	},
    	{
    		category: 'Nasty Deeds',
    		abilities: [
    			{name: 'Lockpicking', val: 0},
    			{name: 'Pickpocketing', val: 0},
    			{name: 'Sneaking',  val: 0}
    		]
    	}
    ];

    $scope.incrimentAbilityPoint = function(ability){
    	if ($scope.abilityPoints >= ability.val + 1 && ability.val < 5){
    		ability.val++;
    		$scope.abilityPoints = $scope.abilityPoints - ability.val;
    	}
    };

    $scope.deincrimentAbilityPoint = function(ability){
    	if (ability.val > 0){
    		$scope.abilityPoints = $scope.abilityPoints + ability.val;
    		ability.val--;
    	}
    };

    $scope.incrimentAttrPoint = function(attr){
    	if (attr.val < 15 && $scope.remainingAttrPoints() > 0){
    		attr.val++;
    	}
    };

    $scope.deincrimentAttrPoint = function(attr){
    	if (attr.val > 5){
    		attr.val--;
    	}
    };

    $scope.remainingAttrPoints = function(){
    	var count = 0;
    	angular.forEach($scope.attributes, function(attr){
    		count = count + attr.val;
    	});
    	return 45 - count;
    };

    $scope.skills = [
    	{
    		ability: 'Aerotheurge', 
    		skills: [
    			{
    				name: 'Air Shield', 
    				reqLevel: 10,
    				skillLevel: 11, 
    				actionPoints: 5, 
    				baseCooldown: 6, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 11,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Enchant self or ally with an air shield that absorbs X damage from all sources (not only Air). Does not stack with other elemental shield spells. 100% base chance to set DOS Buff Shielded (Air).'
    			},
    			{
    				name: 'Become Air', 
    				reqLevel: 4, 
    				skillLevel: 5, 
    				actionPoints: 3, 
    				baseCooldown: 8, 
    				range: 'Self',
    				attr: 'Intelligence',
    				minAttr: 9,
    				reqAbilityLevel: 2,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Absorb half of all physical damage dealt. 100% base chance to set DOS Buff Air'
    			},
    			{
    				name: 'Bitter Cold', 
    				reqLevel: 1, 
    				skillLevel: 2, 
    				actionPoints: 3, 
    				baseCooldown: 8, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Chills a target. If the target gets chilled twice, they will become frozen. 100% base chance to set Chilled'
    			},
    			{
    				name: 'Blitz Bolt', 
    				reqLevel: 1, 
    				skillLevel: 3, 
    				actionPoints: 6, 
    				baseCooldown: 1, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Shoot a bolt of electricity that deals X-Y air damage. 35% base chance to set Stunned'
    			},
    			{
    				name: 'Chain Lightning', 
    				reqLevel: 18, 
    				skillLevel: 18, 
    				actionPoints: 9, 
    				baseCooldown: 16, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 13,
    				reqAbilityLevel: 5,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Shoot a stunning bolt of lightning that forks on impact and deals X-Y air damage to each target. Splits up to 5 times and looks for next target within a 7.0 meter radius. Can target terrain to electrify water.'
    			},
    			{
    				name: 'Farseer', 
    				reqLevel: 4, 
    				skillLevel: 4, 
    				actionPoints: 3, 
    				baseCooldown: 7, 
    				range: 12,
    				attr: 'Intelligence',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 4,
    				desc: '100% base chance to grant a target improved Sight.'
    			},
    			{
    				name: 'Feather Drop', 
    				reqLevel: 10,
    				skillLevel: 10,
    				actionPoints: 4, 
    				baseCooldown: 7, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 10,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Throw an item or character up high and land it safely on the ground. Cannot target self.'
    			},
    			{
    				name: 'Headvice', 
    				reqLevel: 1, 
    				skillLevel: 2, 
    				actionPoints: 6, 
    				baseCooldown: 3, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'A magical claw hold. Deals X-Y air damage.'
    			},
    			{
    				name: 'Immune to Electrified', 
    				reqLevel: 7, 
    				skillLevel: 9, 
    				actionPoints: 4, 
    				baseCooldown: 5, 
    				range: 5,
    				attr: 'Intelligence',
    				minAttr: 10,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 2,
    				desc: 'Make a target immune to being Electrified. Target still takes air damage.'
    			},
    			{
    				name: 'Invisibility', 
    				reqLevel: 7, 
    				skillLevel: 8, 
    				actionPoints: 6, 
    				baseCooldown: 6, 
    				range: 'Self',
    				attr: 'Intelligence',
    				minAttr: 10,
    				reqAbilityLevel: 2,
    				wepReq: 'none',
    				duration: 4,
    				desc: 'Become invisible. 100% base chance to set InvisibleInvisible on self.'
    			},
    			{
    				name: 'Lightning Bolt', 
    				reqLevel: 10,
    				skillLevel: 12, 
    				actionPoints: 6, 
    				baseCooldown: 5, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 11,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Shoot a stunning bolt of lightning that deals X-Y air damage. 65% base chance to set Stunned. Can target water and blood surfaces to electrify them. Electrified surfaces can stun both enemies and allies so beware.'
    			},
    			{
    				name: 'Lightning Strike', 
    				reqLevel: 7, 
    				skillLevel: 7, 
    				actionPoints: 8, 
    				baseCooldown: 10,
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 9,
    				reqAbilityLevel: 2,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Jumps from one enemy target to the other, stunning them and dealing X-Y air damage. Jumps from one enemy to up to 3 nearby enemy targets. Move like lightning from one enemy to the next, and go right through them dealing air damage. Cannot target terrain. Caster will be moved behind last target. 30% base chance to set Stunned'
    			},
    			{
    				name: 'Make Invisible', 
    				reqLevel: 16, 
    				skillLevel: 16, 
    				actionPoints: 8, 
    				baseCooldown: 6, 
    				range: 14,
    				attr: 'Intelligence',
    				minAttr: 12,
    				reqAbilityLevel: 4,
    				wepReq: 'none',
    				duration: 5,
    				desc: 'Set Invisible status on a target. Invisibility breaks when casting or attacking. 100% base chance to set Invisible'
    			},
    			{
    				name: 'Remove Petrification', 
    				reqLevel: 13, 
    				skillLevel: 13, 
    				actionPoints: 6, 
    				baseCooldown: 7, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 11,
    				reqAbilityLevel: 4,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Cures Petrification.'
    			},
    			{
    				name: 'Shocking Touch', 
    				reqLevel: 1, 
    				skillLevel: 6, 
    				actionPoints: 3, 
    				baseCooldown: 7, 
    				range: 3,
    				attr: 'Intelligence',
    				minAttr: 9,
    				reqAbilityLevel: 2,
    				wepReq: 'none',
    				duration: 3,
    				desc: 'Electrify a nearby target. 100% base chance to set Stunned'
    			},
    			{
    				name: 'Storm', 
    				reqLevel: 18, 
    				skillLevel: 19, 
    				actionPoints: 9, 
    				baseCooldown: 16, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 13,
    				reqAbilityLevel: 5,
    				wepReq: 'none',
    				duration: 2,
    				desc: 'Create a lightning storm that randomly picks targets and deals X-Y air damage. Strikes 1 to 3 targets. Can electrify water surfaces. 90% base chance to set  Stunned'
    			},
    			{
    				name: 'Summon Air Elemental', 
    				reqLevel: 13, 
    				skillLevel: 14, 
    				actionPoints: 7, 
    				baseCooldown: 6, 
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 12,
    				reqAbilityLevel: 4,
    				wepReq: 'none',
    				duration: 5,
    				desc: 'Summon an Air Elemental in a 15 meter radius for 5 turns.'
    			},
    			{
    				name: 'Teleportation', 
    				reqLevel: 1, 
    				skillLevel: 2, 
    				actionPoints: 7, 
    				baseCooldown: 10,
    				range: 15,
    				attr: 'Intelligence',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Throw an item or character up high and drop it to the ground, dealing X-Y crushing damage. Cannot target self. Target can be moved 15.0 meters away from its position.'
    			},
    			{
    				name: 'Tornado', 
    				reqLevel: 10,
    				skillLevel: 12, 
    				actionPoints: 7, 
    				baseCooldown: 8, 
    				range: 'Unlimited',
    				attr: 'Intelligence',
    				minAttr: 11,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Removes surfaces from the battlefield.'
    			}
    		]
    	},
    	{
    		ability: 'Expert Marksman', 
    		skills: [
    			{
    				name: 'Arrow Spray', 
    				reqLevel: 13, 
    				skillLevel: 13, 
    				actionPoints: 6, 
    				baseCooldown: 3, 
    				range: 15,
    				attr: 'Dexterity',
    				minAttr: 11,
    				reqAbilityLevel: 4,
    				wepReq: 'Ranged',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: 'Barrage', 
    				reqLevel: 7, 
    				skillLevel: 6, 
    				actionPoints: 8, 
    				baseCooldown: 6, 
    				range: 12,
    				attr: 'Dexterity',
    				minAttr: 9,
    				reqAbilityLevel: 2,
    				wepReq: 'Ranged',
    				duration: 0,
    				desc: 'Fire multiple arrows in a straight line, each dealing 60% weapon (piercing) damage.'
    			},
    			{
    				name: 'Doctor', 
    				reqLevel: 4, 
    				skillLevel: 8, 
    				actionPoints: 4, 
    				baseCooldown: 6, 
    				range: 3,
    				attr: 'Dexterity',
    				minAttr: 10,
    				reqAbilityLevel: 2,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Remove the following Status Effects from the target. This does not prevent them from being reapplied after. Weak, Blind, Muted, and Infectious Disease'
    			},
    			{
    				name: 'First Aid', 
    				reqLevel: 1, 
    				skillLevel: 3, 
    				actionPoints: 3, 
    				baseCooldown: 5, 
    				range: 3,
    				attr: 'Dexterity',
    				minAttr: 8,
    				reqAbilityLevel: 1,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Remove the following Status Effects from the target. This does not prevent them from being reapplied after. Bleeding, Crippled, and Diseased.'
    			},
    			{
    				name: 'Infect', 
    				reqLevel: 10,
    				skillLevel: 10,
    				actionPoints: 6,
    				baseCooldown: 8,
    				range: 3,
    				attr: 'Dexterity',
    				minAttr: 10,
    				reqAbilityLevel: 3,
    				wepReq: 'none',
    				duration: 0,
    				desc: 'Plant a disease on a nearby target. 100% base chance to set DOS Status Effect Diseased'
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			},
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: 'Dexterity',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Geomancer', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Hydrosophist', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Man-at-Arms', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Pyrokinetic', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Scoundrel', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Witchcraft', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	},
    	{
    		ability: 'Special', 
    		skills: [
    			{
    				name: '', 
    				reqLevel: 0,
    				skillLevel: 0,
    				actionPoints: 0,
    				baseCooldown: 0,
    				range: 0,
    				attr: '',
    				minAttr: 0,
    				reqAbilityLevel: 0,
    				wepReq: 'none',
    				duration: 0,
    				desc: ''
    			}
    		]
    	}
    ];

    $scope.talents = [
    	{name: 'All Skilled Up',desc: 'Gives you 2 extra Ability Points to spend. (Note that if you wait for it to be unlocked in your Homestead, you can instead trade 1 unused Talent Point for 10 Ability Points)',req: 'Level 3'},
		{name: 'Anaconda', desc: 'Increases your damage with crushing weapons by 10%.', req: 'Single-Handed 1'},
		{name: 'Arrow Recovery', desc: 'Gives you 20% chance to recover a special arrow after shooting it.', req: ''},
		{name: 'Back-Stabber', desc: 'Allows a character to backstab with daggers and knives. Backstabs always get a 100% chance to critical (using the weapon\'s critical multiplier, e.g. x2), assuming you position properly.', req: 'Scoundrel 1'},
		{name: 'Bigger and Better', desc: 'Gives you 1 extra Attribute Point(s) to spend.', req: 'Level 5'},
		{name: 'Bully', desc: 'Gives you 50% extra damage against opponents that are slowed, crippled or knocked down. Only works with melee or ranged weapons; not with spells.', req: ''},
		{name: 'Comeback Kid', desc: 'When an opponent lands the blow that should kill you, Comeback Kid will leave you with 1 health as long as you had more than 1 left.', req: 'Willpower 5'},
		{name: 'Courageous', desc: 'Grants you immunity to fear, but you can no longer flee from combat.', req: 'Incompatible with Escapist'},
		{name: 'Demon', desc: 'A character with Demon has a chance to burn an opponent who strikes with a melee weapon but takes a 25% penalty to Water Resistance.', req: 'Pyrotechnic 5'},
		{name: 'Elemental Affinity', desc: 'Lowers the Action Point cost of spells by 1 when standing in a surface of the same element.', req: ''},
		{name: 'Elemental Ranger', desc: 'Arrows may inflict bonus elemental damage depending on the surface on which your target is standing.', req: 'Expert Marksman 5'},
		{name: 'Escapist', desc: 'Allows you to flee combat even when enemies are right next to you.', req: 'Incompatible with Courageous'},
		{name: 'Far Out Man', desc: 'Increases the range of spells and scrolls by 2.0m.', req: ''},
		{name: 'Five-Star Diner', desc: 'Doubles the effects of food.', req: ''},
		{name: 'Glass Cannon', desc: 'Doubles your recovery AP but your total vitality is decreased by 50% (including the bonus from Lone Wolf).', req: 'Level 5'},
		{name: 'Guerrilla', desc: 'Doubles your attack damage while sneaking. Works with any weapon, not just daggers/knives.', req: 'Sneaking 1'},
		{name: 'Headstrong', desc: 'Gives you a 20% bonus against being Frozen, Stunned, Petrified and Knocked Down.', req: 'Scoundrel 5'},
		{name: 'Ice King', desc: 'A character with Ice King has a chance to chill an opponent who strikes with a melee weapon but takes a 25% penalty to Fire Resistance.', req: 'Hydrosophist 5'},
		{name: 'Know-it-All', desc: 'Decreases everyone\'s attitude towards you by 20 but gives you 1 extra point in Intelligence.', req: ''},
		{name: 'Leech', desc: 'Heals you when standing in blood. (Note: usually only during your turn)', req: ''},
		{name: 'Light Stepper', desc: 'Gives you a +2 Perception bonus for detecting traps and secrets.', req: ''},
		{name: 'Lightning Rod', desc: 'Makes you immune to Stun.', req: 'Aerotheurge 5'},
		{name: 'Lone Wolf', desc: 'A character with Lone Wolf can no longer have a companion but receives a 60% bonus to base vitality, 1 bonus to Recovery and maximum Action Points and an extra ability point on level up.', req: ''},
		{name: 'Morning Person', desc: 'When resurrected, you revive to full health. (Note: Revive normally raises you at 20% HP)', req: 'Body Building 1'},
		{name: 'My Precious', desc: 'Every time you hit or get hit, your gear has a 50% chance of not losing durability.', req: ''},
		{name: 'Opportunist', desc: 'Gives you the ability to perform attacks of opportunity.', req: 'Man-at-arms 1'},
		{name: 'Packmule', desc: 'Increases the amount of weight you can carry.', req: ''},
		{name: 'Pet Pal', desc: 'Enables you to talk to animals. (Note: This is useful for starting/completing some quests, as well as tapping into the general humor of the game)', req: ''},
		{name: 'Picture of Health', desc: 'Gives you 5% × Man-at-arms extra Vitality.', req: 'Man-at-arms 2'},
		{name: 'Politician', desc: 'Gives you 2 bonus points in Charisma, but you lose a point in Intelligence.', req: ''},
		{name: 'Quickdraw', desc: 'Reduces 1 AP from the cost of using ranged weapons.', req: 'Expert Marksman 5'},
		{name: 'Scientist', desc: 'Gives you a bonus point in Blacksmithing and one in Crafting.', req: ''},
		{name: 'Sidestep', desc: 'Gives you 10% extra chance to evade hits.', req: 'Expert Marksman 2'},
		{name: 'Sidewinder', desc: 'Removes your defense rating penalty when flanked. (Note: The penalty is normally 10 per adjacent enemy beyond the 1st. Unfortunately, this talent appears to frequently only halve the penalty, instead of eliminating it outright.)', req: 'Man-at-arms 5'},
		{name: 'Speedcreeper', desc: 'A character with Speedcreeper moves at normal speed while sneaking.', req: 'Sneaking 1'},
		{name: 'Stand Your Ground', desc: 'A character with Stand Your Ground cannot be knocked down.', req: 'Body Building 5'},
		{name: 'Stench', desc: 'Decreases everyone\'s attitude towards you by 25, but melee opponents will find you less attractive in combat.', req: ''},
		{name: 'Swift Footed', desc: 'Gives you a 20% movement bonus. (Note: affects combat only? needs additional verification)', req: 'Scoundrel 2'},
		{name: 'Thick Skin', desc: 'Gives you 5 extra base armour + Man-at-arms × 2. (Up to +15 armor)', req: 'Man-at-arms 1'},
		{name: 'Voluble Mage', desc: 'Gives you immunity to Muted.', req: 'Willpower 5'},
		{name: 'Walk it Off', desc: 'Reduces all status duration by 1 turn. This also affects positive statuses.', req: ''},
		{name: 'Weather the Storm', desc: 'Gives you a 5% × Man-at-arms extra Elemental Resistance. (+25% Fire/Water/Earth/Air resist, but not Poison or Tenebrium. Resistances still cap at 80 without temporary bonuses.)', req: 'Man-at-arms 5'},
		{name: 'Weatherproof', desc: 'Makes you immune to environmental effects. (Note: Weather effects only, such as desert Slow status; standing on different elemental surfaces like poison/fire/etc still affects you normally. Lava is also still lethal.)', req: 'Geomancer 5'},
		{name: 'What a Rush', desc: 'Increases your recovery and maximum Action Points by 2 when your health is below 30%.', req: ''},
		{name: 'Zombie', desc: 'Lets you heal from poison but causes damage from regular healing. (Note: This grants 200% Poison Resistance and makes you immune to the Poisoned status. This stacks with other poison resistance effects, e.g. from equipment. Any other elemental resistance higher than 100% will also heal you, as does sleeping in a bed, draining blood with Leech, and few other limited methods. However, other forms of healing will harm you, even food or spells like Vampiric Touch.)', req: ''}
    ];
  });
