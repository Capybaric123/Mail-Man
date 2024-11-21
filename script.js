// Terminal text animation (MS-DOS style)
const terminalTextElement = document.getElementById('terminalText');
const gameWindow = document.getElementById('gameWindow');
const requestTextElement = document.getElementById('requestText');
const emailInputElement = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');

const introText = [
    "Initializing...\n",
    "Loading system files...\n",
    "Checking system integrity...\n",
    "Connection established.\n",
    "Welcome to Email Typing Game.\n",
    "Prepare to send an email.\n",
    "Request will appear shortly...\n",
    "Starting game...\n"
];

// Game request message
const emailRequest = "Please write an email to the company:\n\nSubject: Inquiry about our services\nBody: Dear Company, I would like to inquire about the services you offer. Please let me know more details.\n\nThank you.\n";

// Function to simulate typing effect in terminal
let index = 0;
function typeText() {
    if (index < introText.length) {
        terminalTextElement.textContent += introText[index];
        index++;
        setTimeout(typeText, 1000);
    } else {
        setTimeout(showGameWindow, 1000); // Show the game window after intro
    }
}

// Show the game window and email request
function showGameWindow() {
    gameWindow.style.display = "block";
    requestTextElement.textContent = emailRequest;
    emailInputElement.focus();
}

// Check the email input
function checkEmailInput() {
    const correctText = emailRequest.trim();
    if (emailInputElement.value.trim() === correctText) {
        alert("Email sent successfully!");
        emailInputElement.value = "";
    } else {
        alert("Oops! The email is not correct. Try again.");
        emailInputElement.value = "";
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', checkEmailInput);

// Start the terminal animation when the page loads
window.onload = typeText;
