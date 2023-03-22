class Sprite {
  constructor({ position, velocity, color, height, destination, speed }) {
    this.position = position;
    this.velocity = velocity;
    this.color = color;
    this.height = height;
    this.destination = destination;
    this.speed = speed;
  }

  // draws the sprite in a single frame
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, 50, 50);
  }

  // updates the position of the sprite at any animation frame
  update() {
    // if game is unpaused calculate the eucleidean distance between destination and current position
    if (!isPaused) {
      let dx = this.destination.x - this.position.x;
      let dy = this.destination.y - this.position.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      // while the distance is greater than the speed, move. else, stop
      if (dist >= this.speed) {
        let angle = Math.atan2(dy, dx);
        this.velocity.x = this.speed * Math.cos(angle);
        this.velocity.y = this.speed * Math.sin(angle);
      } else {
        this.velocity.x = 0;
        this.velocity.y = 0;
      }
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
    }
  }
}

class Player extends Sprite {
  draw() {
    drawTriangle(this.position.x, this.position.y, this.height, this.color, "white");
  }

}

// creates the player sprite
const player = new Player({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "blue",
  height: 50,
  destination: {
    x: canvas.width / 2,
    y: canvas.height / 2,
  },
  speed: 5,
});
