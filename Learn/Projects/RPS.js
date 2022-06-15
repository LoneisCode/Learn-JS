// Trying to make a rock paper scissors game through switch statements

let playGame = confirm("Shall we start ?!?!");
if (playGame){
    
    let playerOne = prompt("Please enter Rock, Paper, or Scissors."); //try to find a way without hard coding;
    if(playerOne)
    {
        playerOne = playerOne.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let comp = Math.floor(Math.random() * 3 + 1)
            comp = comp === 1 ?"rock" : comp === 2 ? "paper" : "scissors" ;
             /*
            switch(playerOne){
                case comp:
                    console.log("TIE GAME");
                    break;
                case "Rock":
                    if(comp === "scissors")
                    {
                        console.log("Player wins!");
                    }else{
                        console.log("Computer Wins");
                    }
                    break;
                case "Paper":
                    if(comp === "rock")
                    {
                        console.log("Player Wins!");
                    }else{
                        console.log("Computer Wins!");
                    }
                    break;
                default:
                    if(comp === "paper"){
                        console.log("Player Wins!");
                    }else{
                        console.log("Computer Wins");
                    }
                    break;
                    
            }
            */
            let result = playerOne === comp ? "Tie Game" 
            : playerOne === "paper" && comp === "scissors" ? `Computer Wins ! \nPlayer : ${playerOne} Computer: ${comp}` 
            : playerOne === "rock" && comp === "paper" ? `Computer Wins ! \nPlayer : ${playerOne} Computer: ${comp}`
            : playerOne === "scissors" && comp === "rock" ? `Computer Wins ! \nPlayer : ${playerOne} Computer: ${comp}`
            : `Player Wins ! \nPlayer : ${playerOne} Computer: ${comp}` ;

            alert(result);
            let playAgain = confirm("Play Again?")
            playAgain ? location.reload() : alert("Ok thanks for playing.");

        }else{
            alert("Invalid choice")
        }
    }
    else{ alert("I guess you dont want to play?")}

    
}else {alert("Maybe next time?")}
