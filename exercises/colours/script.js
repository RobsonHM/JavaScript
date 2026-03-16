// Robson Henrique SN: 76776

// Generate a random integer from 0 to max-1
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Array of possible hex characters
const hexChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

// Get DOM elements for button, color display, and section
const btn = document.getElementById('color-btn');
const hexText = document.getElementById('hex-display');
const section = document.getElementById('bg-section');

// When button is clicked, generate a new random color
btn.addEventListener('click', () => {
    let hexColor = '#';
    // Build a 6-digit hex color
    for (let i = 0; i < 6; i++) {
        const randomIndex = getRandomNumber(hexChars.length);
        hexColor += hexChars[randomIndex];
    }
    // Set background and display the color
    section.style.backgroundColor = hexColor;
    hexText.textContent = hexColor;
});