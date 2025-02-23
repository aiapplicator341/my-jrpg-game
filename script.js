console.log("JavaScript file is linked and running!");




document.addEventListener('DOMContentLoaded', function() {
    const newGameButton = document.querySelector('.menu-button:nth-child(1)'); // Select the first button (New Game)
    const gameContainer = document.getElementById('gameContainer');

    newGameButton.addEventListener('click', function() {
        // Change the content of the game container when the button is clicked
        gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
    });
});


const newGameButton = document.querySelector('.menu-button:nth-child(1)');
const gameContainer = document.getElementById('gameContainer');
const musicYesButton = document.getElementById('musicYes'); // Select "Yes" button
const musicNoButton = document.getElementById('musicNo');   // Select "No" button
const backgroundMusic = document.getElementById('backgroundMusic'); // Select audio element

newGameButton.addEventListener('click', function() {
    gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
});

musicYesButton.addEventListener('click', function() {
    backgroundMusic.play(); // Start playing music if "Yes" is clicked
});

musicNoButton.addEventListener('click', function() {
    backgroundMusic.pause(); // Pause music if "No" is clicked (or you could also stop it: backgroundMusic.currentTime = 0; backgroundMusic.pause(); )
});
