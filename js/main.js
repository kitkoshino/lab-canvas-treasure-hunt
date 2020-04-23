// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const distanceWidth = height / 10;
const distanceHeight = height / 10;

const player = new Character(0, 0);
const player2 = new Character(9, 9);
const treasure = new Treasure();

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  for (let x = 0; x <= width; x += distanceWidth) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  for (let y = 0; y <= height; y += distanceHeight) {
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
}

function clearCanvas() {
  context.clearRect(0, 0, width, height);
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

function drawPlayer() {
  console.log('Player 1: ', player.image);
  context.drawImage(
    player.image,
    player.col * distanceHeight,
    player.row * distanceWidth
  );
  context.drawImage(
    player2.image,
    player2.col * distanceHeight,
    player2.row * distanceWidth
  );
}

function drawScore() {

}

function drawTreasure() {
  context.drawImage(treasure.image, treasure.col * distanceHeight, treasure.row * distanceWidth , 50, 50);

}

window.addEventListener('load', () => {
  drawEverything();
});

window.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37:
      if (player.col > 0) {
        player.moveLeft();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 38:
      if (player.row > 0) {
        player.moveUp();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 39:
      if (player.col < 9) {
        player.moveRight();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 40:
      if (player.row < 9) {
        player.moveDown();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;

    //w,s,d,a
    case 65:
      if (player2.col > 0) {
        player2.moveLeft();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 87:
      if (player2.row > 0) {
        player2.moveUp();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 68:
      if (player2.col < 9) {
        player2.moveRight();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
    case 83:
      if (player2.row < 9) {
        player2.moveDown();
        clearCanvas();
        drawGrid();
        drawPlayer();
        drawTreasure();
      }
      break;
  }
});
