// adds the HTMLCanvasElement for the Intellisense
/** @type {HTMLCanvasElement} */

// defines canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasBoundingBox = canvas.getBoundingClientRect();

// game state paused
let isPaused = true;

// useful variables
let mouseX=canvas.width/2;
let mouseY=canvas.height/2;

// SETUP CODE STARTS
setupCanvas();
canvas.addEventListener("click", onMouseClick);
canvas.addEventListener("touchstart", onMouseClick);

// normalizes the canvas pixels to the actual on-screen dimensions
function setupCanvas() {
  let width = canvas.clientWidth;
  let height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// animates the canvas context if the game state is not paused
function animate() {
  if (!isPaused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateAll();
  }
  window.requestAnimationFrame(animate);
}

// switches the pause state
// TODO: CHANGE
window.onkeydown = function () {
  isPaused = !isPaused;
};

function updateAll() {
  player.update();
}

// moves the player sprite
function onMouseClick(e) {
  isPaused=false;
  getXYpositions(e);
  // must normalize mouse coordinates to canvas pixel size
  mouseX = normalizeX(mouseX);
  mouseY = normalizeY(mouseY);

  player.destination.x=mouseX;
  player.destination.y=mouseY;
}

/** normalizes X value to a given canvas*/
// credits: https://codepen.io/andyranged/pen/KyMKEB
function normalizeX(x) {
  return Math.floor((x - canvasBoundingBox.left) * (ctx.canvas.width / canvasBoundingBox.width));
}
/** normalizes Y value to a given canvas */
// credits: https://codepen.io/andyranged/pen/KyMKEB
function normalizeY(y) {
  return Math.floor((y - canvasBoundingBox.top) * (ctx.canvas.height / canvasBoundingBox.height));
}

/** gets positions of x and y based on whether device is touchscreen  */
function getXYpositions(e) {
  if (is_touch_enabled() && e.touches.length > 0) {
    // credits: https://www.w3schools.com/jsref/event_touch_touches.asp
    mouseX = e.touches[0].clientX;
    mouseY = e.touches[0].clientY;
  } else {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }
}

// for mobile devices
function is_touch_enabled() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
