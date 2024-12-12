document.addEventListener('DOMContentLoaded', function () {  
    const musicToggle = document.getElementById('musicToggle');  
    const snowToggle = document.getElementById('snowToggle');  
    const lightsToggle = document.getElementById('lightsToggle');  

    let musicOn = false;  
    let snowOn = false;  
    let lightsOn = false;  

    // Toggle music functionality
  musicToggle.addEventListener('click', () => {
    musicOn = !musicOn;
    musicToggle.textContent = musicOn ? '🔊' : '🔇';
    if (musicOn) {
        toggleMusic();  // Start music
    } else {
        toggleMusic();  // Stop music
    }
});


    // Toggle snow functionality
    snowToggle.addEventListener('click', () => {  
        snowOn = !snowOn;  
        document.getElementById('snow').style.display = snowOn ? 'block' : 'none';  
    });  

    // Toggle lights functionality
    lightsToggle.addEventListener('click', () =>
