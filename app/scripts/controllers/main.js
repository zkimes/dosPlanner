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
    $scope.attributes = [
    	{name: 'Strength', val: 5},
    	{name: 'Dexterity', val: 5},
    	{name: 'Intelligence', val: 5},
    	{name: 'Constitution', val: 5},
    	{name: 'Speed', val: 5},
    	{name: 'Perception', val: 5}
    ];

    $scope.incrimentAttrPoint = function(attr){
    	if (attr.val < 15){
    		attr.val++;
    	}
    };

    $scope.remainingAttrPoints = function(){
    	var count = 0;
    	angular.forEach($scope.attributes, function(attr){
    		count = count + attr.val;
    	});
    	return 45 - count;
    };

    $scope.talents = [
    	{'name' : 'All Skilled Up','desc' : 'Gives you 2 extra Ability Points to spend. (Note that if you wait for it to be unlocked in your Homestead, you can instead trade 1 unused Talent Point for 10 Ability Points)','req' : 'Level 3'},
		{'name' : 'Anaconda', 'desc' : 'Increases your damage with crushing weapons by 10%.', 'req' : 'Single-Handed 1'},
		{'name' : 'Arrow Recovery', 'desc' : 'Gives you 20% chance to recover a special arrow after shooting it.', 'req' : ''},
		{'name' : 'Back-Stabber', 'desc' : 'Allows a character to backstab with daggers and knives. Backstabs always get a 100% chance to critical (using the weapon\'s critical multiplier, e.g. x2), assuming you position properly.', 'req' : 'Scoundrel 1'},
		{'name' : 'Bigger and Better', 'desc' : 'Gives you 1 extra Attribute Point(s) to spend.', 'req' : 'Level 5'},
		{'name' : 'Bully', 'desc' : 'Gives you 50% extra damage against opponents that are slowed, crippled or knocked down. Only works with melee or ranged weapons; not with spells.', 'req' : ''},
		{'name' : 'Comeback Kid', 'desc' : 'When an opponent lands the blow that should kill you, Comeback Kid will leave you with 1 health as long as you had more than 1 left.', 'req' : 'Willpower 5'},
		{'name' : 'Courageous', 'desc' : 'Grants you immunity to fear, but you can no longer flee from combat.', 'req' : 'Incompatible with Escapist'},
		{'name' : 'Demon', 'desc' : 'A character with Demon has a chance to burn an opponent who strikes with a melee weapon but takes a 25% penalty to Water Resistance.', 'req' : 'Pyrotechnic 5'},
		{'name' : 'Elemental Affinity', 'desc' : 'Lowers the Action Point cost of spells by 1 when standing in a surface of the same element.', 'req' : ''},
		{'name' : 'Elemental Ranger', 'desc' : 'Arrows may inflict bonus elemental damage depending on the surface on which your target is standing.', 'req' : 'Expert Marksman 5'},
		{'name' : 'Escapist', 'desc' : 'Allows you to flee combat even when enemies are right next to you.', 'req' : 'Incompatible with Courageous'},
		{'name' : 'Far Out Man', 'desc' : 'Increases the range of spells and scrolls by 2.0m.', 'req' : ''},
		{'name' : 'Five-Star Diner', 'desc' : 'Doubles the effects of food.', 'req' : ''},
		{'name' : 'Glass Cannon', 'desc' : 'Doubles your recovery AP but your total vitality is decreased by 50% (including the bonus from Lone Wolf).', 'req' : 'Level 5'},
		{'name' : 'Guerrilla', 'desc' : 'Doubles your attack damage while sneaking. Works with any weapon, not just daggers/knives.', 'req' : 'Sneaking 1'},
		{'name' : 'Headstrong', 'desc' : 'Gives you a 20% bonus against being Frozen, Stunned, Petrified and Knocked Down.', 'req' : 'Scoundrel 5'},
		{'name' : 'Ice King', 'desc' : 'A character with Ice King has a chance to chill an opponent who strikes with a melee weapon but takes a 25% penalty to Fire Resistance.', 'req' : 'Hydrosophist 5'},
		{'name' : 'Know-it-All', 'desc' : 'Decreases everyone\'s attitude towards you by 20 but gives you 1 extra point in Intelligence.', 'req' : ''},
		{'name' : 'Leech', 'desc' : 'Heals you when standing in blood. (Note: usually only during your turn)', 'req' : ''},
		{'name' : 'Light Stepper', 'desc' : 'Gives you a +2 Perception bonus for detecting traps and secrets.', 'req' : ''},
		{'name' : 'Lightning Rod', 'desc' : 'Makes you immune to Stun.', 'req' : 'Aerotheurge 5'},
		{'name' : 'Lone Wolf', 'desc' : 'A character with Lone Wolf can no longer have a companion but receives a 60% bonus to base vitality, 1 bonus to Recovery and maximum Action Points and an extra ability point on level up.', 'req' : ''},
		{'name' : 'Morning Person', 'desc' : 'When resurrected, you revive to full health. (Note: Revive normally raises you at 20% HP)', 'req' : 'Body Building 1'},
		{'name' : 'My Precious', 'desc' : 'Every time you hit or get hit, your gear has a 50% chance of not losing durability.', 'req' : ''},
		{'name' : 'Opportunist', 'desc' : 'Gives you the ability to perform attacks of opportunity.', 'req' : 'Man-at-arms 1'},
		{'name' : 'Packmule', 'desc' : 'Increases the amount of weight you can carry.', 'req' : ''},
		{'name' : 'Pet Pal', 'desc' : 'Enables you to talk to animals. (Note: This is useful for starting/completing some quests, as well as tapping into the general humor of the game)', 'req' : ''},
		{'name' : 'Picture of Health', 'desc' : 'Gives you 5% × Man-at-arms extra Vitality.', 'req' : 'Man-at-arms 2'},
		{'name' : 'Politician', 'desc' : 'Gives you 2 bonus points in Charisma, but you lose a point in Intelligence.', 'req' : ''},
		{'name' : 'Quickdraw', 'desc' : 'Reduces 1 AP from the cost of using ranged weapons.', 'req' : 'Expert Marksman 5'},
		{'name' : 'Scientist', 'desc' : 'Gives you a bonus point in Blacksmithing and one in Crafting.', 'req' : ''},
		{'name' : 'Sidestep', 'desc' : 'Gives you 10% extra chance to evade hits.', 'req' : 'Expert Marksman 2'},
		{'name' : 'Sidewinder', 'desc' : 'Removes your defense rating penalty when flanked. (Note: The penalty is normally 10 per adjacent enemy beyond the 1st. Unfortunately, this talent appears to frequently only halve the penalty, instead of eliminating it outright.)', 'req' : 'Man-at-arms 5'},
		{'name' : 'Speedcreeper', 'desc' : 'A character with Speedcreeper moves at normal speed while sneaking.', 'req' : 'Sneaking 1'},
		{'name' : 'Stand Your Ground', 'desc' : 'A character with Stand Your Ground cannot be knocked down.', 'req' : 'Body Building 5'},
		{'name' : 'Stench', 'desc' : 'Decreases everyone\'s attitude towards you by 25, but melee opponents will find you less attractive in combat.', 'req' : ''},
		{'name' : 'Swift Footed', 'desc' : 'Gives you a 20% movement bonus. (Note: affects combat only? needs additional verification)', 'req' : 'Scoundrel 2'},
		{'name' : 'Thick Skin', 'desc' : 'Gives you 5 extra base armour + Man-at-arms × 2. (Up to +15 armor)', 'req' : 'Man-at-arms 1'},
		{'name' : 'Voluble Mage', 'desc' : 'Gives you immunity to Muted.', 'req' : 'Willpower 5'},
		{'name' : 'Walk it Off', 'desc' : 'Reduces all status duration by 1 turn. This also affects positive statuses.', 'req' : ''},
		{'name' : 'Weather the Storm', 'desc' : 'Gives you a 5% × Man-at-arms extra Elemental Resistance. (+25% Fire/Water/Earth/Air resist, but not Poison or Tenebrium. Resistances still cap at 80 without temporary bonuses.)', 'req' : 'Man-at-arms 5'},
		{'name' : 'Weatherproof', 'desc' : 'Makes you immune to environmental effects. (Note: Weather effects only, such as desert Slow status; standing on different elemental surfaces like poison/fire/etc still affects you normally. Lava is also still lethal.)', 'req' : 'Geomancer 5'},
		{'name' : 'What a Rush', 'desc' : 'Increases your recovery and maximum Action Points by 2 when your health is below 30%.', 'req' : ''},
		{'name' : 'Zombie', 'desc' : 'Lets you heal from poison but causes damage from regular healing. (Note: This grants 200% Poison Resistance and makes you immune to the Poisoned status. This stacks with other poison resistance effects, e.g. from equipment. Any other elemental resistance higher than 100% will also heal you, as does sleeping in a bed, draining blood with Leech, and few other limited methods. However, other forms of healing will harm you, even food or spells like Vampiric Touch.)', 'req' : ''}
    ];
  });
