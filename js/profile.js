











  
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser) {
      // Hide the login button if a user is logged in
      // document.querySelector('#loginButton').style.display = 'none';

      const initial = loggedInUser.username.toUpperCase();
      console.log(initial);
      document.querySelector(".username").textContent= initial;
      const loggedInUserDiv = document.createElement('div');
      loggedInUserDiv.className = 'initial-circle';
      loggedInUserDiv.textContent = initial;
      document.querySelector('.logo-menu-part').appendChild(loggedInUserDiv);

      // Add event listeners for hover and click events
      loggedInUserDiv.addEventListener('mouseenter', function() {
          // Replace the initial with the logout icon when hovered over
          loggedInUserDiv.innerHTML = '<i class="fas fa-sign-out-alt" style = "position: absolute; right:85px" id="logout-part" aria-hidden="true"></i>';
      });

      loggedInUserDiv.addEventListener('mouseleave', function() {
          // Replace the logout icon with the initial when mouse leaves
          loggedInUserDiv.textContent = initial;
      });

      loggedInUserDiv.addEventListener('click', function() {
          // Remove the logged-in user information from localStorage
          localStorage.removeItem('loggedInUser');
          alert('Logged out successfully!');
          // Redirect to the home page
          window.location.href = 'index.html';
      });
  } else {
      // // Show the login button if no user is logged in
      // const loginButton = document.createElement('button');
      // loginButton.className = 'login btn';
      // loginButton.textContent = 'Login';
      // document.getElementById('loginButton').appendChild(loginButton);
      // // Optionally, you can add an event listener to perform an action when the login button is clicked
      // loginButton.addEventListener('click', function() {
      //     // Redirect to the login page
      //     window.location.href = 'login.html';
      // });
  }