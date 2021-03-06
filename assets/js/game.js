//Instantiate variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators!");

//Fight Function
var fight = function(pickedEnemyName) {
    console.log(pickedEnemyName);
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    while(enemyHealth > 0 && playerHealth > 0) {
        
    
        if (promptFight === "fight" || promptFight === "FIGHT") {
  
            //remove enemy's health by subtracting the amount set in the playerAttack variable 
            enemyHealth = enemyHealth - playerAttack;
            playerName + " attacked " + pickedEnemyName + ". " + pickedEnemyName + " now has " + enemyHealth + " health remaining."
            
            // check enemy's health
             if(enemyHealth <= 0) {
              window.alert(pickedEnemyName + " has died!");
              break;
          }
          else {
              window.alert(pickedEnemyName + " still has " + enemyHealth + " health left.");
          }
          
            //remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
            pickedEnemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
          
            //check player's health
            if(playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            }
          
            //if player chooses to skip
            else if (promptFight === "skip" || promptFight === "SKIP") {
                //confirm the user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
                //if yes (true), leave fight
                if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
                }
                //if no (false), ask question again by running fight() again
                else {
                    fight();
                }
            }
            else {
              window.alert("You need to pick a valid option. try again!");
              }
          
    }
  }

//function to start a new game
var startGame = function(){

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
            //let user know what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting a new fight
            enemyHealth = 50;

            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger 

            //call fight function with current enemy robot
            fight(pickedEnemyName);
            }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
            }


    }
    //play again
    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game!")
    }
    else {
        window.alert("You've lost your robot in battle.")
    }

    //ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?")
    if(playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}


startGame();

    




 



