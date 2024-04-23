// Set the date for the end of registration
var endDate = new Date("May 15, 2024 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the time remaining
  var distance = endDate - now;
  
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the countdown with each part wrapped in a div and spans below them
  var countdownDisplay = '<div class="countdown-part">' + days + "<span>days</span></div> ";
  countdownDisplay += '<div class="countdown-part">' + hours + "<span>hours</span></div> ";
  countdownDisplay += '<div class="countdown-part">' + minutes + "<span>minutes</span></div> ";
  countdownDisplay += '<div class="countdown-part">' + seconds + "<span>seconds</span></div> ";
  document.getElementById("countdown").innerHTML = countdownDisplay;
  
  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "tournament has ended";
  }
}, 1000);


// BOOSTER PRIZE AND PRIZE CLICK EVENT 

document.getElementById("booster-tour-btn").addEventListener("click", function() {
  document.getElementById("v-pills-booster-tab").click();
});

document.getElementById("prize-tour-btn").addEventListener("click", function() {
  document.getElementById("v-pills-prize-tab").click();
});

