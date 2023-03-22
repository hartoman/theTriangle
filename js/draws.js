// this file contains the summarized functions to draw geometrical shapes

// creates small square missile
// ctx.fillRect(100,100,3,3);

function drawCircle(x, y, radius, color, borderColor) {
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.arc;
  ctx.fill();
  ctx.stroke();
}

// creates an image from the source string e.g. "./images/sea.jpg"
function createImage(source) {
  const img = new Image();
  img.src = source;
  img.addEventListener(
    "load",
    () => {
      ctx.drawImage(img, 50, 100, 50, 50);
    },
    false
  );
}

// creates equilateral triangle
function drawTriangle(centerX, centerY, height, color, borderColor) {
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  let side = height * (2 / Math.sqrt(3));
  let topX = centerX;
  let topY = centerY - height/2;
  ctx.beginPath();
  ctx.moveTo(topX, topY);
  ctx.lineTo(topX + side / 2, topY + height);
  ctx.lineTo(topX - side / 2, topY + height);
  ctx.lineTo(topX, topY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// sums up drawing a line
function drawLine(startX, startY, endX, endY, color) {
  ctx.strokeStyle = color;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

// sums up drawing a square
function drawSquare(x, y, side, color, borderColor) {
  ctx.fillStyle = borderColor;
  ctx.fillRect(x, y, side + 2, side + 2);
  ctx.fillStyle = color;
  ctx.fillRect(x + 1, y + 1, side, side);
}

// displays everything together for demonstration
function drawDemo() {
    drawSquare(80,80,25,"red","white");
    drawCircle(10, 10, 15,"green","white");
    drawEquilateralTriangle(70, 70, 50,"blue","white");
    drawTriangle(150, 105, 50,"blue","white");
    drawLine(0,0,canvas.width,canvas.height,"white");
  }