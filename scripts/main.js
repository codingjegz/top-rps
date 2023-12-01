const DEFAULT_LIFE = 5;
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

    switch (compareDecision(player.textContent, computer.textContent)) {
      case "P":
        computerHealth.removeChild(
          document.querySelector("#c-" + computerCount)
        );
        displayRoundWinner.textContent = "PLAYER WON";
        computerCount--;
        if (computerCount == 0) {
          computerHealth.innerHTML = "";
          result("PLAYER");
        }
        break;

      case "C":
        playerHealth.removeChild(document.querySelector("#p-" + playerCount));
        displayRoundWinner.textContent = "COMPUTER WON";
        playerCount--;
        if (playerCount == 0) {
          playerHealth.innerHTML = "";
          result("COMPUTER");
        }
        break;

      default:
        displayRoundWinner.textContent = "DRAW";
        break;
    }

    if (playerCount == 0) {
      playerHealth.innerHTML = "";
      result("COMPUTER");
    }
    if (computerCount == 0) {
      computerHealth.innerHTML = "";
      result("PLAYER");
    }
  });
});

function result(winner) {
  resetGame(playerHealth, "p");
  resetGame(computerHealth, "c");
  alert(`END RESULT: ${winner}`);
}

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
  for (let i = 1; i < 6; i++) {
    let circle = document.createElement("p");
    circle.setAttribute("id", `${identifier}-${i}`);
    circle.setAttribute("class", "circle");
    element.appendChild(circle);
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
