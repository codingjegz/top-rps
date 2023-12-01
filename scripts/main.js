const DEFAULT_LIFE = 4;
const playerSelection = document.querySelectorAll("li");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

let playerCount = DEFAULT_LIFE;
let computerCount = DEFAULT_LIFE;

const playerHealth = document.querySelector(".player-life");
const computerHealth = document.querySelector(".computer-life");
let displayRoundWinner = document.querySelector(".vs");
setHealth(playerHealth, "p");
setHealth(computerHealth, "c");
playerSelection.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    player.textContent = el.textContent;
    computer.textContent = computerChose();
    console.log("PLAYER", playerCount);

    switch (compareDecision(player.textContent, computer.textContent)) {
      case "P":
        computerHealth.removeChild(
          document.querySelector("#c-" + computerCount)
        );
        computerCount--;
        displayRoundWinner.textContent = "PLAYER WON";
        break;

      case "C":
        playerHealth.removeChild(document.querySelector("#p-" + playerCount));
        playerCount--;
        displayRoundWinner.textContent = "COMPUTER WON";
        break;

      default:
        displayRoundWinner.textContent = "DRAW";
        break;
    }

    if (playerCount == -1) {
      resetGame(playerHealth, "p");
      resetGame(computerHealth, "c");
      alert("COMPUTER WON");
    }

    if (computerCount == -1) {
      resetGame(computerHealth, "c");
      resetGame(playerHealth, "p");
      alert("PLAYER WON");
    }
  });
});

function computerChose() {
  const selection = ["Rock", "Paper", "Scissor"];
  return selection[Math.floor(Math.random() * 3)];
}

function compareDecision(player, computer) {
  switch (`${player}, ${computer}`) {
    case "Rock, Paper":
      return "C";
    case "Rock, Scissor":
      return "P";
    case "Paper, Rock":
      return "P";
    case "Paper, Scissor":
      return "C";
    case "Scissor, Rock":
      return "C";
    case "Scissor, Paper":
      return "P";
    default:
      return "D";
  }
}

function setHealth(element, identifier) {
  initializeLife(element, identifier);
}

function initializeLife(element, identifier) {
  for (let i = 0; i < 5; i++) {
    let heart = document.createElement("p");
    heart.textContent = `${i}`;
    heart.setAttribute("id", `${identifier}-${i}`);
    element.appendChild(heart);
  }
}

function resetGame(element, identifier) {
  player.textContent = "";
  computer.textContent = "";
  playerCount = DEFAULT_LIFE;
  computerCount = DEFAULT_LIFE;
  displayRoundWinner.textContent = "v.s";
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  setHealth(element, identifier);
}
