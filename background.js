// Define the Star class
class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3;
      this.speed = Math.random() * 1;
    }
  
    draw() {
      context.fillStyle = 'white';
      context.beginPath();
      context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      context.closePath();
      context.fill();
    }
  
    update() {
      this.x += this.speed;
      if (this.x > canvas.width) {
        this.x = 0;
      }
    }
  }
  
  // Set up the canvas
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = 'black';
  canvas.style.position = 'fixed';
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = -1;




  // Create an array to hold all the stars
  const stars = [];
  
  // Create a loop to animate the stars
  let frame = 0;
  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Add a new star every 50 frames
    if (frame % 80 === 0) {
      stars.push(new Star());
    }
  
    // Draw and update all the stars
    for (let i = 0; i < stars.length; i++) {
      stars[i].draw();
      stars[i].update();
    }
  
    // Request the next frame
    requestAnimationFrame(animate);
    frame++;
  }
  
  // Start the animation loop
  animate();
  