let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg")
const selections = document.querySelectorAll(".selection")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score") 
const genCompchoice = () => {
    const options = ["rock", "paper", "Scissors"]
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx]
}
const playGame = (userChoice) => {
    console.log("User choice = ", userChoice)
    const compChoice = genCompchoice();
    console.log("Comp Choice =", compChoice)
    
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "Scissors" ? false : true
        }
        else if (userChoice === "Scissrors"){
            userWin = compChoice === "rock" ? false : true
        }
        showWinnner(userWin, userChoice, compChoice)

     }
        
};
const drawGame = () => {
    console.log("Game Was Draw.")
    msg.innerText = `Game was Draw`
    msg.style.backgroundColor = "#081b31"
}
const showWinnner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("The Winner is User")
        msg.innerText = `You Won ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("The Winner is Computer")
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red"
    }    

    }


selections.forEach((selection) => {
    selection.addEventListener("click", () => {
        const userChoice = selection.getAttribute("id");  
        playGame(userChoice);
})
});