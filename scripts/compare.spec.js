const compareDecision = require("./compare");

describe("Player vs Computer", function () {
  test('"DRAW: Scissor vs Scissor"', function () {
    expect(compareDecision("Scissor", "Scissor")).toEqual("D");
  });

  test('"DRAW: Paper vs Paper"', function () {
    expect(compareDecision("Paper", "Paper")).toEqual("D");
  });

  test('"DRAW: Rock vs Rock"', function () {
    expect(compareDecision("Rock", "Rock")).toEqual("D");
  });

  test('"Player WON: Rock beats Scissor"', function () {
    expect(compareDecision("Rock", "Scissor")).toEqual("P");
  });

  test('"Player WON: Paper beats Rock"', function () {
    expect(compareDecision("Paper", "Rock")).toEqual("P");
  });

  test('"Player WON: Scissor beats Paper"', function () {
    expect(compareDecision("Scissor", "Paper")).toEqual("P");
  });

  test('"Computer WON: Scissor beats Paper"', function () {
    expect(compareDecision("Paper", "Scissor")).toEqual("C");
  });

  test('"Computer WON: Rock beats Scissor"', function () {
    expect(compareDecision("Scissor", "Rock")).toEqual("C");
  });

  test('"Computer WON: Paper beats Rock"', function () {
    expect(compareDecision("Rock", "Paper")).toEqual("C");
  });
});
