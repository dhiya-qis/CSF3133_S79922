// Game state and score tracking variables
var gameStarted = false;
var wins = 0;
var losses = 0;
var draws = 0;
var roundCount = 0;
var results = [];

// Validate player name, show welcome message, and set start timestamp
function startGame() {
  var nameInput = document.getElementById("playerName").value.trim();

  if (nameInput === "") {
    alert("Please enter your name.");
    return;
  }

  gameStarted = true;
  document.getElementById("welcomeMsg").innerHTML = "Welcome, " + nameInput + "!";
  document.getElementById("startTime").innerHTML = "Started at: " + new Date().toString();
}

// Pick a random choice from rock, paper, or scissors
function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Play one round, update images, result colour, scoreboard, and history table
function playRound(playerChoice) {
  if (!gameStarted) {
    alert("Click Start Game first.");
    return;
  }

  var computerChoice = getComputerChoice();
  roundCount++;

  document.getElementById("playerImg").src = playerChoice + ".png";
  document.getElementById("computerImg").src = computerChoice + ".png";

  var outcomeText = "";
  var outcomeLabel = "";
  var resultEl = document.getElementById("result");

  
  if (playerChoice === computerChoice) {
    draws++;
    outcomeLabel = "Draw";
    outcomeText = "Round " + roundCount + ": Draw";
    resultEl.style.color = "grey";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    wins++;
    outcomeLabel = "Win";
    outcomeText = "Round " + roundCount + ": Win";
    resultEl.style.color = "green";
  } else {
    losses++;
    outcomeLabel = "Lose";
    outcomeText = "Round " + roundCount + ": Lose";
    resultEl.style.color = "red";
  }

  resultEl.innerHTML = outcomeText;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("draws").innerHTML = draws;
  results.push(outcomeLabel);

  // Append row to history table
  var rowHTML =
    "<tr>" +
    "<td>" + roundCount + "</td>" +
    "<td>" + playerChoice + "</td>" +
    "<td>" + computerChoice + "</td>" +
    "<td>" + outcomeLabel + "</td>" +
    "</tr>";
  document.getElementById("historyBody").innerHTML += rowHTML;
}

// Count wins using a for loop and display total rounds and win percentage
function showSummary() {
  var totalRounds = results.length;
  var winCount = 0;

  for (var i = 0; i < results.length; i++) {
    if (results[i] === "Win") {
      winCount++;
    }
  }

  var percentage = totalRounds === 0 ? 0 : Math.round((winCount / totalRounds) * 100);
  document.getElementById("summary").innerHTML =
    "You played " + totalRounds + " rounds and won " + percentage + "%";
}

// Reset scores, results array, result text, and history table rows
function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  roundCount = 0;
  results = [];

  document.getElementById("wins").innerHTML = 0;
  document.getElementById("losses").innerHTML = 0;
  document.getElementById("draws").innerHTML = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.color = "";
  document.getElementById("historyBody").innerHTML = "";
  document.getElementById("summary").innerHTML = "";
}
