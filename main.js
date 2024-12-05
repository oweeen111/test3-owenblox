document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const signUpButton = document.getElementById("signUpButton");

  // Add real-time validation for the username field
  usernameInput.addEventListener("input", function () {
    const username = usernameInput.value.trim();
    const feedback = document.getElementById("usernameFeedback");

    // Check if the username is valid
    if (!isUsernameValid(username)) {
      feedback.textContent = "Username must be between 4 and 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "User is admin. Name: " + username;
      feedback.style.color = 'green';
    }
    if (username === "") {
      feedback.textContent = "";
      return;
    }
    if (username !== "Admin" || password !== "admin123") {
      feedback.textContent = "Not an admin account! Only admins are allowed..";
      feedback.style.color = "red";
    }
    if (username.length == 20) {
      // max char = 20 do this when internet is back
    }
  });

  // Add a click event listener to the "Sign Up" button
  signUpButton.addEventListener("click", function (event) {
    // Prevent the default form submission or button click behavior
    event.preventDefault(); // This will stop the page from redirecting instantly

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      alert("Please enter both a username and a password.");
      return;
    }

    // Check if the username or password is incorrect


    if (!isUsernameValid(username)) {
      alert("Username must be between 4 and 8 characters.");
      return;
    }

    if (username !== "Admin" || password !== "admin123") {
      feedback.textContent = "Not an admin account! Only admins are allowed..";
      feedback.style.color = "red";
      return;
    }

    alert("Sign Up Successful!");
    console.log('test');
    // Redirect to a new page after successful sign up (or later)
    localStorage.setItem('username', username); // Store the username in localStorage
    window.location.href = '/MAIN/mainweb.html'; // Redirect to the desired page
  });
});

// Function to validate the username
function isUsernameValid(username) {
  // Check if the username or password is incorrect


  return username.length >= 4 && username.length <= 8; // Valid if between 4 and 8 characters
}

  
