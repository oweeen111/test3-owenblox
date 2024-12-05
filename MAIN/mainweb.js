

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the username from localStorage
    const username = localStorage.getItem('username');
    const gameButton = document.getElementById('GamesButton');
    // Get the element where the welcome message will be displayed
    const welcomeText = document.getElementById('PlayerWelcomeText');
    
    // Check if the element exists
    if (welcomeText) {
        // Set the welcome message
        if (username) {
            welcomeText.textContent = 'Welcome, ' + username + '!';
        } 
        
    } else {
        console.error('Element with ID "PlayerWelcomeText" not found.');
    }

    gameButton.addEventListener("click", function (event) {
        console.log('Games clicked.');
        
        
        
    });
    
});

