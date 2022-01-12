// Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight and defeat all enemy robots


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    while(enemyHealth > 0 && playerHealth > 0) {
        if (promptFight === "FIGHT" || promptFight === "fight") {
            enemyHealth = enemyHealth - playerAttack;
            window.alert(playerName + " attacked " + enemyName + " for " + playerAttack + " damage.");
    
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 5;
                window.alert(playerName + " has received 5G. " + playerName + " now has " + playerMoney + "G.");
                shop();
                return;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
    
            playerHealth = playerHealth - enemyAttack;
            window.alert(enemyName + " attacked " + playerName + " for " + enemyAttack + " damage.");
    
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                window.alert("Game Over!")
                return;

            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        } else if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to skip?")

            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip this fight!");
                playerMoney = playerMoney - 2;
                window.alert(playerName + " now has " + playerMoney + "G left.");
                return;

            } else {
                fight(pickedEnemyName);
            }

        } else {
            window.alert("Please choose a valid option.");
            fight(pickedEnemyName);
        }
    }
   
}

var shop = function() {
    var confirmShop = window.confirm("Would you like to enter the Shop?");

    if (confirmShop) {
        var promptShop = window.prompt("Welcome to the Shop! Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? REFILL and UPGRADE each cost 10G. Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to choose.");

        if (promptShop === "REFILL" || promptShop === "refill") {
            playerHealth = 100;
            playerMoney = playerMoney - 10;
            window.alert(playerName + " now has " + playerHealth + " health, and " + playerMoney + "G!")
            return;

        } else if (promptShop === "UPGRADE" || promptShop === "upgrade") {
            playerAttack = playerAttack + 10;
            playerMoney = playerMoney - 10;
            window.alert(playerName + " now has " + playerAttack + " attack, and " + playerMoney + "G!");
            return;

        } else if (promptShop === "LEAVE" || promptShop === "leave") {
            return;

        } else {
            window.alert("Please choose a valid option.");
            shop();
        }
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    var roundNumber = i + 1;
    if (playerHealth > 0) {
        window.alert(playerName + " has " + playerHealth + " health, " + playerAttack + " attack, and " + playerMoney + "G.");
        window.alert("Welcome to Robot Gladiators Round " + roundNumber + ": " + enemyNames[i] + "!");
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
}