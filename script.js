document.getElementById('tapButton').addEventListener('click', function() {
    // Simulate earning tokens
    const earnedTokens = Math.floor(Math.random() * 10) + 1; // Earn between 1 and 10 tokens
    const messageElement = document.getElementById('message');
    messageElement.innerText = `You earned ${earnedTokens} Bloomee tokens!`;
});
