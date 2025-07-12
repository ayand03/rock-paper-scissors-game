let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
let userScoreVal = document.querySelector("#userscore");
let compScoreVal = document.querySelector("#compscore");


const generateCompChoice = () => {
    let options = ["stone", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
    
};


const drawGame = () =>{
    console.log("result is draw");
    message.innerText = "Draw, Try Again";
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        console.log("You Won");
        message.innerText = "You Won!";
        message.style.backgroundColor = "green";
        userScoreVal.innerText = userScore;
    }else{
        compScore++;
        console.log("You Lose");
        message.innerText = "Oops! You lose";
        message.style.backgroundColor = "red";
        compScoreVal.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    //console.log("user choice is", userChoice);
    const compChoice = generateCompChoice();
    //console.log("computer choice is", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});