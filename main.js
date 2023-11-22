<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }

    #square {
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
  <title>Movable Square</title>
</head>
<body>

<div id="square"></div>

<script>
  const square = document.getElementById('square');
  let squareX = 50; // Initial X position
  let squareY = 50; // Initial Y position
  const moveDistance = 10; // Distance to move on each key press

  // Function to update square position
  function updateSquarePosition() {
    square.style.left = squareX + 'px';
    square.style.top = squareY + 'px';
  }

  // Event listener for key presses
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'a':
        squareX -= moveDistance;
        break;
      case 'd':
        squareX += moveDistance;
        break;
      case 'w':
        squareY -= moveDistance;
        break;
      case 's':
        squareY += moveDistance;
        break;
    }

    updateSquarePosition();
  });

  // Initial square position
  updateSquarePosition();
</script>

</body>
</html>
