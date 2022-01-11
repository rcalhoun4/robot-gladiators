var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    if (promptFight === "FIGHT" || promptFight === "fight") {
        enemyHealth = enemyHealth - playerAttack;
        window.alert(playerName + " attacked " + enemyName + " for " + playerAttack + " damage.");
    
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        playerHealth = playerHealth - enemyAttack;
        window.alert(enemyName + " attacked " + playerName + " for " + enemyAttack + " damage.");
    
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");

        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    } else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to skip?")

        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip this fight!");
            playerMoney = playerMoney - 2;
            window.alert(playerName + " now has " + playerMoney + "G left.");

        } else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }

   
}

fight();