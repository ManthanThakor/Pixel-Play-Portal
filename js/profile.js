
  // const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  // if (loggedInUser) {
  //     // Hide the login button if a user is logged in
  //     // document.querySelector('#loginButton').style.display = 'none';

  //     const initial = loggedInUser.username.toUpperCase();
  //     console.log(initial);
  //     document.querySelector(".username").textContent= initial;
  //     const loggedInUserDiv = document.createElement('div');
  //     loggedInUserDiv.className = 'initial-circle';
  //     loggedInUserDiv.textContent = initial;
  //     document.querySelector('.logo-menu-part').appendChild(loggedInUserDiv);

  //     // Add event listeners for hover and click events
  //     loggedInUserDiv.addEventListener('mouseenter', function() {
  //         // Replace the initial with the logout icon when hovered over
  //         loggedInUserDiv.innerHTML = '<i class="fas fa-sign-out-alt" style = "position: absolute; right:85px" id="logout-part" aria-hidden="true"></i>';
  //     });

  //     loggedInUserDiv.addEventListener('mouseleave', function() {
  //         // Replace the logout icon with the initial when mouse leaves
  //         loggedInUserDiv.textContent = initial;
  //     });

  //     loggedInUserDiv.addEventListener('click', function() {
  //         // Remove the logged-in user information from localStorage
  //         localStorage.removeItem('loggedInUser');
  //         alert('Logged out successfully!');
  //         // Redirect to the home page
  //         window.location.href = 'index.html';
  //     });
  // } else {
  //     // // Show the login button if no user is logged in
  //     // const loginButton = document.createElement('button');
  //     // loginButton.className = 'login btn';
  //     // loginButton.textContent = 'Login';
  //     // document.getElementById('loginButton').appendChild(loginButton);
  //     // // Optionally, you can add an event listener to perform an action when the login button is clicked
  //     // loginButton.addEventListener('click', function() {
  //     //     // Redirect to the login page
  //     //     window.location.href = 'login.html';
  //     // });
  // }

 // JavaScript code

 // Function to load selected image into the profile picture preview
function loadFile(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
}

// Function to save profile data to local storage
function saveProfile() {
  var profilePic = document.getElementById('output').src;
  var status = document.getElementById('status').value;

  // Save data to local storage
  localStorage.setItem('profilePic', profilePic);
  localStorage.setItem('status', status);
}

// Function to clear user data from local storage (logout)
function logout() {
  localStorage.removeItem('profilePic');
  localStorage.removeItem('status');
  localStorage.removeItem('loggedInUser'); // Clear logged-in user data
  alert('Logged out successfully!');
  window.location.href = 'index.html'; // Redirect to index.html after logout
}

// Function to hide the login button
function hideLoginButton() {
  document.querySelector('#loginButton').style.display = 'none';
}

// Function to show the login button
function showLoginButton() {
  document.querySelector('#loginButton').style.display = 'block';
}

// Function to load profile data from local storage using async/await
async function loadProfile() {
  try {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      // Check if profile pic and status exist in local storage
      const profilePic = localStorage.getItem('profilePic');
      const status = localStorage.getItem('status');
      
      // Load profile pic if exists
      if (profilePic) {
        document.getElementById('output').src = profilePic;
        document.getElementById('output').style.display = 'block'; // Show the image
      }

      // Load status if exists
      if (status) {
        document.getElementById('status').value = status;
      }

      // Display initial in uppercase
      const initial = loggedInUser.username.toUpperCase();
      document.querySelector(".username").textContent = initial;

      // Create a div to display initial
      const loggedInUserDiv = document.createElement('div');
      loggedInUserDiv.textContent = initial;
      document.querySelector('.logo-menu-part').appendChild(loggedInUserDiv);
    } else {
      console.log("Logged-in user not found in local storage.");
    }
  } catch (error) {
    console.error('Error loading profile:', error);
  }
}

// Call loadProfile function when the page loads
window.onload = loadProfile;

// Event listener for the save button
document.getElementById('edit-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  saveProfile(); // Save profile data
  alert('Profile saved successfully!');
});

// Event listener for the logout button
document.querySelector('.logout-btn').addEventListener('click', function() {
  logout(); // Call logout function when the button is clicked
});

// Check if a user is logged in
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUser) {
  // Hide the login button if a user is logged in
  hideLoginButton();
}

const loggedInUserr = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUserr) {
  // Get the first character of the username and convert it to uppercase
  const initial = loggedInUserr.username.charAt(0).toUpperCase();
  
  // Set the content of the .username element to the initial
  document.querySelector(".username").textContent = initial;
} else {
  console.log("Logged-in user not found in local storage.");
}









const loggedInUserrr = JSON.parse(localStorage.getItem('loggedInUser'));
if (loggedInUserrr) {  
    const initial = loggedInUserrr.username.toUpperCase();
    console.log(initial);
    document.querySelector(".username").textContent= initial;
    const loggedInUserrrDiv = document.createElement('div');
    loggedInUserrrDiv.textContent = initial;
    document.querySelector('.logo-menu-part').appendChild(loggedInUserrrDiv);
} 


