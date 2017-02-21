"use strict";

/**
 * Variables
 */
var buttons = document.querySelectorAll("button"),
    textBox = document.querySelector("input"),
    limitDisplay = document.querySelector(".limit"),
    player1 = ".player1",
    player2 = ".player2";
var p1Score = 0,
    p2Score = 0,
    gameOver = false,
    winningScore = 5;

function checkScore(playerScore, player) {
  /**
   * Check the players score, if their score equals the winning score then end the game by setting gameOver to true and add the class "winner" to the winning players score.
   */
  var checkScore = playerScore === winningScore ? (gameOver = true, addClass(_el(player), "winner")) : gameOver = false;
}

function reset() {
  /**
   * reset both player's scores
   */
  p1Score = 0;
  p2Score = 0;

  /**
   * reset both display number scores
   */
  _el(".player1").textContent = 0;
  _el(".player2").textContent = 0;

  /**
   * Check to see if player one or player two class list contain the "winner" class. If so, remove it;
   */
  var removeWinner = _el(".player1").classList.contains("winner") ? removeClass(_el(".player1"), "winner") : removeClass(_el(".player2"), "winner");
  gameOver = false;
}

addEventListener([buttons[0]], "click", function () {
  /**
   * If players one's button is clicked and the game is not over
   */
  if (!gameOver) {
    /**
     * Add 1 to it's score
     */
    p1Score++;
    /**
     * Check to see if the player has reached the winning score
     */
    checkScore(p1Score, player1);
    /**
     * Set the score display number of player one to player one's score number
     */
    _el(".player1").textContent = p1Score;
  }
});

addEventListener([buttons[1]], "click", function () {
  if (!gameOver) {
    p2Score++;
    checkScore(p2Score, player2);
    _el(".player2").textContent = p2Score;
  }
});

addEventListener([textBox], "change", function () {
  /**
   * Set the display limit number to the value of the number input
   */
  limitDisplay.textContent = textBox.value;
  /**
   * Assign the input value to the winning score variable so the value in the input box and the winning score display number will be the same
   */
  winningScore = Number(textBox.value);
  reset();
});

/**
 * If the reset button is clicked
 */
addEventListener([buttons[2]], "click", function () {
  reset();
});