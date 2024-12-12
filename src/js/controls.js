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
        
        // Assuming you have a function to handle the music play/pause
        if (musicOn) {
            toggleMusic();  // Play music if musicOn is true
        } else {
            toggleMusic();  // Stop music if musicOn is false
        }
    });  

    // Toggle snow functionality
    snowToggle.addEventListener('click', () => {  
        snowOn = !snowOn;  
        document.getElementById('snow').style.display = snowOn ? 'block' : 'none';  
    });  

    // Toggle lights functionality
    lightsToggle.addEventListener('click', () =>
