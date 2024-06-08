const buttons = document.querySelectorAll("button");
const options = ["Rock", "Paper", "Scissors"];
const playerChoice = document.getElementById("playerchoice");
const compChoice = document.getElementById("compchoice");
const result = document.getElementById("result");
const playerscore = document.getElementById("playerscore");
const compscore = document.getElementById("compscore");

function draw(){
    result.textContent = "IT'S A TIE";
    result.style.color = "black";
}
function win(){
    result.textContent = "YOU WIN!!!";
    result.style.color = "green";
    playerscore.textContent = Number(playerscore.textContent)+1;

}
function lose(){
    result.textContent = "you lost";
    result.style.color = "red";
    compscore.textContent = Number(compscore.textContent)+1;
}
function playRound(event){
    let pChoice = event.target.id;
    let cChoice = options[Math.floor(3*Math.random())];

    playerChoice.innerHTML = pChoice;
    compChoice.innerHTML = cChoice;
    
    if(pChoice===cChoice){
        draw();
    }else if(pChoice === "Rock" && cChoice === "Scissors" || pChoice === "Paper" && cChoice === "Rock" ||
         pChoice === "Scissors" && cChoice === "Paper"){
            win();
    }else{
        lose();
    }
}
buttons.forEach(button => button.addEventListener("click", playRound));