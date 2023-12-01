/**
 * @jest-environment jsdom
 */
const { playerChose, computerChose, selection } = require("./chosen");

describe("Rock, Paper, Scissor", function () {
  document.body.innerHTML =
    "<ul>" +
    "  <li id='rock'>Rock</li>" +
    "  <li id='paper'>Paper</li>" +
    "  <li id='scissor'>Scissor</li>" +
    "</ul>";
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissor = document.querySelector("#scissor");

  let computer = Math.random() * 2;

  // Player
  test('"Player Rock"', function () {
    expect(playerChose(rock)).toEqual("Rock");
  });

  test('"Player Paper"', function () {
    expect(playerChose(paper)).toEqual("Paper");
  });

  test('"Player Scissor"', function () {
    expect(playerChose(scissor)).toEqual("Scissor");
  });

  // Computer
  test('"Computer Selected Rock"', function () {
    expect(computerChose(0)).toEqual("Rock");
  });

  test('"Computer Selected Paper"', function () {
    expect(computerChose(1)).toEqual("Paper");
  });

  test('"Computer Selected Scissor"', function () {
    expect(computerChose(2)).toEqual("Scissor");
  });

  test('"Computer Selected: Random"', function () {
    expect(computerChose(computer)).toEqual(selection[computer]);
    expect(computerChose(computer)).toEqual(selection[computer]);
    expect(computerChose(computer)).toEqual(selection[computer]);
  });
});
