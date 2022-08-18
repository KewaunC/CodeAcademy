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


const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();

  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
