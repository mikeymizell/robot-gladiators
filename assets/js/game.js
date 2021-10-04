var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// WIN - player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// LOSE - play robot's health is zero or less

var fight = function(enemyName) {
    //Alert players when the round starts
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you light to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "FIGHT" || promptFight === "fight") {
        //Subtract the value of 'playerAttack' from value of 'enemyHealth' and use that
        //result to update in the 'enemyHealth' var
        enemyHealth -= playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use 
        //that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //checks palyer's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "SKIP" || promptFight === "skip") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes, leave fight and take money
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney -= 2;
        }

        //if no, ask question again my running fight() again
        else {
            fight();
        }      
    }
    else {
        window.alert("You need to chose a valid option. Try again!");
    }
    
};

for (var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);
}