const newGameButton = document.querySelector('.menu-button:nth-child(1)');
const gameContainer = document.getElementById('gameContainer');
const musicYesButton = document.getElementById('musicYes');
const musicNoButton = document.getElementById('musicNo');
const backgroundMusic = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');
const playPauseButton = document.getElementById('playPauseButton'); // Select play/pause button

let isMusicPlaying = false; // Variable to track music state (initially paused)

newGameButton.addEventListener('click', function() {
    gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
});

musicYesButton.addEventListener('click', function() {
    backgroundMusic.play();
    isMusicPlaying = true; // Update music state to playing
    playPauseButton.textContent = "Pause"; // Update button text to "Pause"
});

musicNoButton.addEventListener('click', function() {
    backgroundMusic.pause();
    isMusicPlaying = false; // Update music state to paused
    playPauseButton.textContent = "Play"; // Update button text to "Play"
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