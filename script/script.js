let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;
let playerName = "";
let playerNameInput = document.getElementById("playerName");
let startButton = document.getElementById("start");
let playerNameDisplay = document.getElementById("playerNameDisplay");

playerNameInput.addEventListener("change", (event) => {
  playerName = event.target.value;
});

startButton.addEventListener("click", (event) => {
  playerNameDisplay.innerText = playerName;
  event.preventDefault();
});

const choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    yourScore == 0;
    opponentScore == 0;
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore += 1;
      } else if (opponent == "paper") {
        opponentScore += 1;
      }
    }

    if (you == "paper") {
      if (opponent == "rock") {
        yourScore += 1;
      } else if (opponent == "scissors") {
        opponentScore += 1;
      }
    }

    if (you == "scissors") {
      if (opponent == "paper") {
        yourScore += 1;
      } else if (opponent == "rock") {
        opponentScore += 1;
      }
    }
  }
  // win();

  setTimeout(function win() {
    if (yourScore === 3) {
      alert("You Win!!!");

      location.reload(true);
    } else if (opponentScore === 3) {
      alert("Opponent Win!!!");

      location.reload(true);
    }
  }, 200);

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
}
