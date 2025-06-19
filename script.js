const newGameButton = document.querySelector('.menu-button:nth-child(1)');
const characterButton = document.querySelector('.menu-button:nth-child(3)');
const gameContainer = document.getElementById('gameContainer');
const backgroundMusic = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');
const playPauseButton = document.getElementById('playPauseButton'); // Select play/pause button

let isMusicPlaying = false; // Variable to track music state (initially paused)
backgroundMusic.volume = volumeSlider.value;

// Johnny Example character data
const johnnyExample = {
    name: "Johnny Example",
    level: 12,
    hp: 245,
    maxHp: 280,
    mp: 85,
    maxMp: 120,
    experience: 15420,
    experienceToNext: 2580,
    gold: 1250,
    stats: {
        strength: 34,
        defense: 28,
        magic: 42,
        speed: 31
    },
    equipment: {
        weapon: "Iron Sword",
        armor: "Leather Armor",
        accessory: "Power Ring"
    },
    inventory: [
        { name: "Health Potion", quantity: 5 },
        { name: "Mana Potion", quantity: 3 },
        { name: "Iron Ore", quantity: 2 },
        { name: "Ancient Key", quantity: 1 },
        { name: "Fire Crystal", quantity: 1 },
        { name: "Bread", quantity: 8 }
    ]
};


// Function to create character viewer HTML
function createCharacterViewer() {
    return `
        <div id="characterViewer">
            <div id="characterHeader">
                <h2>${johnnyExample.name}</h2>
                <p>Level ${johnnyExample.level}</p>
            </div>
            
            <div id="characterStats">
                <div class="stat-section">
                    <h3>Vitals</h3>
                    <div class="stat-row">
                        <span>HP: ${johnnyExample.hp}/${johnnyExample.maxHp}</span>
                        <div class="stat-bar">
                            <div class="stat-fill hp-fill" style="width: ${(johnnyExample.hp / johnnyExample.maxHp) * 100}%"></div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <span>MP: ${johnnyExample.mp}/${johnnyExample.maxMp}</span>
                        <div class="stat-bar">
                            <div class="stat-fill mp-fill" style="width: ${(johnnyExample.mp / johnnyExample.maxMp) * 100}%"></div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <span>EXP: ${johnnyExample.experience} (${johnnyExample.experienceToNext} to next)</span>
                    </div>
                    <div class="stat-row">
                        <span>Gold: ${johnnyExample.gold}</span>
                    </div>
                </div>
                
                <div class="stat-section">
                    <h3>Attributes</h3>
                    <div class="stat-grid">
                        <div class="stat-item">Strength: ${johnnyExample.stats.strength}</div>
                        <div class="stat-item">Defense: ${johnnyExample.stats.defense}</div>
                        <div class="stat-item">Magic: ${johnnyExample.stats.magic}</div>
                        <div class="stat-item">Speed: ${johnnyExample.stats.speed}</div>
                    </div>
                </div>
            </div>
            
            <div id="characterEquipment">
                <h3>Equipment</h3>
                <div class="equipment-grid">
                    <div class="equipment-slot">
                        <strong>Weapon:</strong> ${johnnyExample.equipment.weapon}
                    </div>
                    <div class="equipment-slot">
                        <strong>Armor:</strong> ${johnnyExample.equipment.armor}
                    </div>
                    <div class="equipment-slot">
                        <strong>Accessory:</strong> ${johnnyExample.equipment.accessory}
                    </div>
                </div>
            </div>
            
            <div id="characterInventory">
                <h3>Inventory</h3>
                <div class="inventory-grid">
                    ${johnnyExample.inventory.map(item => 
                        `<div class="inventory-item">
                            <span class="item-name">${item.name}</span>
                            <span class="item-quantity">x${item.quantity}</span>
                        </div>`
                    ).join('')}
                </div>
            </div>
            
            <button id="backToMenu" class="menu-button">Back to Menu</button>
        </div>
    `;
}

// Store original menu HTML for navigation
const originalMenu = gameContainer.innerHTML;

newGameButton.addEventListener('click', function() {
    gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
});

characterButton.addEventListener('click', function() {
    gameContainer.innerHTML = createCharacterViewer();
    
    // Add event listener for back button
    const backButton = document.getElementById('backToMenu');
    backButton.addEventListener('click', function() {
        gameContainer.innerHTML = originalMenu;
        // Re-attach event listeners after restoring menu
        attachMenuEventListeners();
    });
});

// Function to re-attach event listeners when returning to menu
function attachMenuEventListeners() {
    const newGameBtn = document.querySelector('.menu-button:nth-child(1)');
    const characterBtn = document.querySelector('.menu-button:nth-child(3)');
    
    newGameBtn.addEventListener('click', function() {
        gameContainer.innerHTML = '<h2>Starting a New Game!</h2><p>Game content will load here...</p>';
    });
    
    characterBtn.addEventListener('click', function() {
        gameContainer.innerHTML = createCharacterViewer();
        
        const backButton = document.getElementById('backToMenu');
        backButton.addEventListener('click', function() {
            gameContainer.innerHTML = originalMenu;
            attachMenuEventListeners();
        });
    });
}


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