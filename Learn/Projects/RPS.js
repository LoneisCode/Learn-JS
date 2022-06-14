// Trying to make a rock paper scissors game through switch statements

let playerOne = "Paper"; //try to find a way without hard coding;
let comp = "Scissors"; // make random;

switch(playerOne){
    case comp:
        console.log("TIE GAME");
        break;
    case "Rock":
         if(comp === "Scissors")
         {
            console.log("Player wins!");
         }else{
            console.log("Computer Wins");
         }
         break;
    case "Paper":
        if(comp === "Rock")
        {
            console.log("Player Wins!");
        }else{
            console.log("Computer Wins!");
        }
        break;
    default:
        if(comp === "Paper"){
            console.log("Player Wins!");
        }else{
            console.log("Computer Wins");
        }
        break;
    
}