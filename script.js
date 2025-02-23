console.log("JavaScript file is linked and running!");

document.addEventListener('DOMContentLoaded', function() {
    const newGameButton = document.querySelector('.menu-button:nth-child(1)'); // Select the first button (New Game)
    const gameContainer = document.getElementById('gameContainer');

    newGameButton.addEventListener('click', function() {
        // Change the content of the game container when the button is clicked
        gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
    });
});