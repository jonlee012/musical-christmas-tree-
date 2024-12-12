function addLights() {
  const tree = document.querySelector('.tree');
  const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
  const lightCount = 30;

  // Loop to create the lights
  for (let i = 0; i < lightCount; i++) {
    const light = document.createElement('div');
    light.className = 'light';

    // Set a random color for each light
    light.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Randomize position within the tree
    light.style.left = `${Math.random() * 80 + 10}%`;
    light.style.top = `${Math.random() * 80 + 10}%`;

    // Add a random animation delay for the twinkle effect
    light.style.animationDelay = `${Math.random() * 2}s`;

    // Append the light to the tree container
    tree.appendChild(light);
  }
}
