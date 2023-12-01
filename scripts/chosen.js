const selection = ["Rock", "Paper", "Scissor"];
function playerChose(el) {
  return el.textContent;
}

function computerChose(number) {
  return selection[number];
}

module.exports = { playerChose, computerChose, selection };
