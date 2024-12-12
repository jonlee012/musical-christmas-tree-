export class SnowfallEffect {
  constructor() {
    this.container = document.querySelector('.snow-container');
    this.snowflakeCount = 50;
    this.active = false;
    this.createSnowflakes();
  }

  // Create snowflakes and append them to the container
  createSnowflakes() {
    for (let i = 0; i < this.snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random falling speed
      snowflake.style.animationDelay = `${Math.random() * 2}s`; // Random delay
      this.container.appendChild(snowflake);
    }
  }

  // Toggle the visibility of the snowflakes container
  toggle() {
    this.active = !this.active;
    this.container.style.display = this.active ? 'block' : 'none';
  }
}
