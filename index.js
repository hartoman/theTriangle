const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

setupCanvas();
drawgraph();

function setupCanvas() {
  let width = canvas.clientWidth;
  let height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
}

function drawgraph() {
  ctx.strokeStyle = "white";
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, 25, 25);
  drawCircle();
 // createImage();
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(25, 25, 15, 0, 2 * Math.PI);
  ctx.fill();
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
