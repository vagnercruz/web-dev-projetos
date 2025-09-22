const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const chooseScreen = document.getElementById("choose-screen");
const mode1v1Btn = document.getElementById("mode-1v1");
const modeBotBtn = document.getElementById("mode-bot");
const chooseXBtn = document.getElementById("choose-x");
const chooseOBtn = document.getElementById("choose-o");
const backBtn = document.getElementById("back-btn");

let vsBot = false;
let currentPlayer = "x";
let playerSymbol = "x";
let botSymbol = "o";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

mode1v1Btn.addEventListener("click", () => {
  vsBot = false;
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

modeBotBtn.addEventListener("click", () => {
  vsBot = true;
  startScreen.classList.add("hidden");
  chooseScreen.classList.remove("hidden");
});

chooseXBtn.addEventListener("click", () => {
  playerSymbol = "x";
  botSymbol = "o";
  currentPlayer = "x";
  chooseScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

chooseOBtn.addEventListener("click", () => {
  playerSymbol = "o";
  botSymbol = "x";
  currentPlayer = "x";
  chooseScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  botPlay();
});

cells.forEach(cell => {
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);

function handleCellClick(e) {
  const cell = e.target;
  const index = cell.getAttribute("data-index");

  if (gameState[index] !== "" || !gameActive) return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer.toUpperCase();
  cell.classList.add(currentPlayer);

  checkResult();

  if (vsBot && gameActive && currentPlayer === botSymbol) {
    setTimeout(botPlay, 500);
  }
}

function checkResult() {
  let roundWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      roundWon = true;
      break;
    }
  }

if (roundWon) {
  statusText.textContent = `Jogador ${currentPlayer.toUpperCase()} venceu!`;
  gameActive = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      [a, b, c].forEach(i => cells[i].classList.add("win"));
    }
  }
  return;
}

  if (!gameState.includes("")) {
    statusText.textContent = "Empate!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "x" ? "o" : "x";
  statusText.textContent = `Vez do jogador ${currentPlayer.toUpperCase()}`;
}

function botPlay() {
  if (!vsBot || !gameActive) return;

  let emptyCells = [];
  gameState.forEach((val, i) => {
    if (val === "") emptyCells.push(i);
  });

  if (emptyCells.length === 0) return;

  let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  gameState[randomIndex] = botSymbol;

  const cell = cells[randomIndex];
  cell.textContent = botSymbol.toUpperCase();
  cell.classList.add(botSymbol);

  checkResult();
}

function restartGame() {
  currentPlayer = "x";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `Vez do jogador ${currentPlayer.toUpperCase()}`;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o", "win");
  });
}

backBtn.addEventListener("click", () => {
    gameScreen.classList.add("hidden");
    chooseScreen.classList.add("hidden")

    startScreen.classList.remove("hidden");

    restartGame();
})