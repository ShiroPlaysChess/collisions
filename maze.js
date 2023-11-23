const maze = [
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];

const SQUARE_SIZE = 45;
const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

let playerX = SQUARE_SIZE / 2;
let playerY = SQUARE_SIZE / 2;
const playerSpeed = 10;

const goalX = canvas.width - SQUARE_SIZE / 2;
const goalY = canvas.height - SQUARE_SIZE / 2;

function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = 'black';
        ctx.fillRect(x * SQUARE_SIZE, y * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
      }
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = 'red';
  ctx.fillRect(playerX - SQUARE_SIZE / 2, playerY - SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
}

function canMoveTo(x, y) {
  const nextTileX = Math.floor(x / SQUARE_SIZE);
  const nextTileY = Math.floor(y / SQUARE_SIZE);
  return maze[nextTileY][nextTileX] !== 1;
}

function drawGoal() {
  ctx.fillStyle = 'green';
  ctx.fillRect(goalX - SQUARE_SIZE / 2, goalY - SQUARE_SIZE / 2, SQUARE_SIZE, SQUARE_SIZE);
}

function checkGoalReached() {
  return playerX === goalX && playerY === goalY;
}

document.addEventListener('keydown', (event) => {
  const { key } = event;
  let nextX = playerX;
  let nextY = playerY;

  if (key === 'ArrowUp') {
    nextY -= playerSpeed;
  } else if (key === 'ArrowDown') {
    nextY += playerSpeed;
  } else if (key === 'ArrowLeft') {
    nextX -= playerSpeed;
  } else if (key === 'ArrowRight') {
    nextX += playerSpeed;
  }

  if (canMoveTo(nextX, nextY)) {
    playerX = nextX;
    playerY = nextY;
    drawCanvas();

    if (checkGoalReached()) {
      alert('Congratulations! You reached the goal!');
      // You could add more actions after reaching the goal, like resetting the game.
    }
  }
});

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawGoal();
  drawPlayer();
}

drawCanvas();
