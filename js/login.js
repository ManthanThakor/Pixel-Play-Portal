   // Function to save user data to JSON
   function saveUserData(username, email, password) {
    // Retrieve existing data or initialize empty array
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    
    // Check if email already exists
    if (usersData.some(user => user.email === email)) {
      alert("Email already exists! Please use a different email.");
      return;
    }

    // Add new user data
    usersData.push({
      username: username,
      email: email,
      password: password
    });

    // Save updated data to local storage
    localStorage.setItem('usersData', JSON.stringify(usersData));
  }

  // Function to handle sign up form submission
  document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signup_username').value;
    const email = document.getElementById('signup_email').value;
    const password = document.getElementById('signup_password').value;
    saveUserData(username, email, password);
    alert("Account created successfully!");
  });

  // Function to handle sign in form submission
  document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('signin_email').value;
    const password = document.getElementById('signin_password').value;

    // Retrieve usersData from local storage
    const usersData = JSON.parse(localStorage.getItem('usersData')) || [];

    // Check if the provided email and password match any user's data
    const user = usersData.find(user => user.email === email && user.password === password);

    if (user) {
      alert("Sign in successful!");
      // Redirect to index.html or any other page
      window.location.href = "index.html";
    } else {
      alert("Email not found. Please create an account.");
      // Switch to sign up panel
      document.getElementById('container').classList.add("right-panel-active");
    }
  });

  // Switch between sign up and sign in panels
  document.getElementById('signUp').addEventListener('click', function () {
    document.getElementById('container').classList.add("right-panel-active");
  });

  document.getElementById('signIn').addEventListener('click', function () {
    document.getElementById('container').classList.remove("right-panel-active");
  });






  document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.getElementById('container').classList.toggle("right-panel-active");
  });



  