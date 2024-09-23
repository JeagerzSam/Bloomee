let totalCoins = 0; // Variable to store total coins

document.getElementById('tapButton').addEventListener('click', function() {
    // Simulate earning tokens
    const earnedTokens = Math.floor(Math.random() * 10) + 1; // Earn between 1 and 10 tokens
    totalCoins += earnedTokens; // Add to total coins
    const messageElement = document.getElementById('message');
    messageElement.innerText = `You earned ${earnedTokens} Bloomee tokens!`;
    updateCoinCount(); // Update displayed coin count
});

document.getElementById('checkBalanceButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.innerText = `You have ${totalCoins} Bloomee tokens.`;
});

// Help button functionality
document.getElementById('helpButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    messageElement.innerText = "Instructions:\n- Tap 'Tap to Earn' to earn Bloomee tokens.\n- Use 'Check Balance' to see how many tokens you have.";
});

// Function to update the displayed coin count
function updateCoinCount() {
    const coinCountElement = document.getElementById('coinCount');
    coinCountElement.innerText = `You have ${totalCoins} Bloomee tokens.`;
}
