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

function createImage() {
  const img = new Image();
  img.src = "./images/sea.jpg";
  img.addEventListener(
    "load",
    () => {
      ctx.drawImage(img, 50, 100, 50, 50);
    },
    false
  );
}

function drawEquilateralTriangle(topX, topY, side, color, borderColor) {
  ctx.fillStyle = color;
  ctx.strokeStyle = borderColor;
  let height = side * (Math.sqrt(3) / 2);
  ctx.beginPath();
  ctx.moveTo(topX, topY);
  ctx.lineTo(topX + side / 2, topY + height);
  ctx.lineTo(topX - side / 2, topY + height);
  ctx.lineTo(topX, topY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

// more practical variation of the above 
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

function drawLine(startX, startY, endX, endY, color) {
  ctx.strokeStyle = color;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

function drawSquare(x, y, side, color, borderColor) {
  ctx.fillStyle = borderColor;
  ctx.fillRect(x, y, side + 2, side + 2);
  ctx.fillStyle = color;
  ctx.fillRect(x + 1, y + 1, side, side);
}


function drawgraph() {
    drawSquare(80,80,25,"red","white");
    drawCircle(10, 10, 15,"green","white");
    drawEquilateralTriangle(70, 70, 50,"blue","white");
    drawTriangle(150, 105, 50,"blue","white");
    drawLine(0,0,canvas.width,canvas.height,"white");
  }