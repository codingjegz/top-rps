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

module.exports = compareDecision;
