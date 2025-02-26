const newGameButton = document.querySelector('.menu-button:nth-child(1)');
const gameContainer = document.getElementById('gameContainer');
const backgroundMusic = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');
const playPauseButton = document.getElementById('playPauseButton'); // Select play/pause button

let isMusicPlaying = false; // Variable to track music state (initially paused)
backgroundMusic.volume = volumeSlider.value;


newGameButton.addEventListener('click', function() {
    gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
});


playPauseButton.addEventListener('click', function() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        isMusicPlaying = false;
        playPauseButton.textContent = "Play"; // Change button text to "Play" when paused
    } else {
        backgroundMusic.play();
        isMusicPlaying = true;
        playPauseButton.textContent = "Pause"; // Change button text to "Pause" when playing
    }
});

volumeSlider.addEventListener('input', function() {
    backgroundMusic.volume = volumeSlider.value;
});