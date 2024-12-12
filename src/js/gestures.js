export class GestureController {
  constructor() {
    this.tree = document.querySelector('.tree-3d');
    this.initialX = 0;
    this.initialY = 0;
    this.isRotating = false; // Ensure we track rotation state
    this.currentRotationX = 0; // Track current rotation along X-axis
    this.currentRotationY = 0; // Track current rotation along Y-axis
    this.initGestures();
  }

  initGestures() {
    // Mouse events for desktop
    this.tree.addEventListener('mousedown', this.startRotation.bind(this));
    document.addEventListener('mousemove', this.handleRotation.bind(this));
    document.addEventListener('mouseup', this.stopRotation.bind(this));

    // Touch events for mobile/tablets
    this.tree.addEventListener('touchstart', this.startRotation.bind(this));
    document.addEventListener('touchmove', this.handleRotation.bind(this));
    document.addEventListener('touchend', this.stopRotation.bind(this));
  }

  startRotation(e) {
    this.isRotating = true;
    // Store the initial positions for mouse/touch
    this.initialX = e.clientX || e.touches[0].clientX;
    this.initialY = e.clientY || e.touches[0].clientY;
  }

  handleRotation(e) {
    if (!this.isRotating) return;

    // Get the current position for mouse/touch
    const currentX = e.clientX || e.touches[0].clientX;
    const currentY = e.clientY || e.touches[0].clientY;

    // Calculate delta from initial position
    const deltaX = currentX - this.initialX;
    const deltaY = currentY - this.initialY;

    // Update the current rotation values
    this.currentRotationX -= deltaY * 0.2; // Adding sensitivity factor for X-axis
    this.currentRotationY += deltaX * 0.2; // Adding sensitivity factor for Y-axis

    // Apply the new rotation styles
    this.tree.style.transform = `rotateY(${this.currentRotationY}deg) rotateX(${this.currentRotationX}deg)`;

    // Update initial values for next move
    this.initialX = currentX;
    this.initialY = currentY;
  }

  stopRotation() {
    this.isRotating = false;
  }
}
