const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("please enter an appropiate choice");
  }
};

console.log(getUserChoice("Paper"));

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 2) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 0) {
    return "scissors";
  }
};
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Won";
    } else {
      return "User won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  }

  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "Computer Won";
    } else {
      return "User Won";
    }
  }
};

console.log(determineWinner('rock', 'rock'))
