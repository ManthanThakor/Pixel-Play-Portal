 // Glow color

 const glowingText = (() => {
  const textElement = document.getElementById("glowing_text");
  let coloredText;
  let index = 0;

  const startGlowing = () => {
    setInterval(() => {
      const letters = textElement.textContent.split("");
      if (letters[index] == " ") {
        index++;
      }
      letters[
        index
      ] = `<span style="color: var(--glowColor); text-shadow: var(--shadowColor);">${letters[index]}</span>`;
      coloredText = letters.join("");
      textElement.innerHTML = coloredText;
      index = (index + 1) % letters.length;
    }, 200);
  };

  return startGlowing;
})();

window.addEventListener("load", glowingText, false);

// Ham burger

function toggleMenu() {
    const hamPartSection = document.querySelector(".ham-part-section");
    const pixelMenu = document.querySelector(".pixel-menu");
    let isMenuVisible = false;

    hamPartSection.addEventListener("click", () => {
      if (!isMenuVisible) {
        pixelMenu.style.display = "block"; // Show the pixel-menu part
        isMenuVisible = true;
        document.querySelector(".main-name-part").style.filter = "blur(3px)";
        document.querySelector("#background-part-sec").style.filter = "blur(3px)";
      } else {
        pixelMenu.style.display = "none"; // Hide the pixel-menu part
        isMenuVisible = false;
        document.querySelector(".main-name-part").style.filter = "blur(0px)";
        document.querySelector("#background-part-sec").style.filter = "blur(0px)";
      }
    });
  }
  // Call the function initially
  toggleMenu();


  
  // Function to truncate text and add read more button
  // Select all card elements

let cards = document.querySelectorAll(".arcade-b-card");

// Function to add "Read more/Read less" functionality to each card
cards.forEach(card => {
    let originalContent = card.innerHTML;
    
    let readless = () => {
        if (card.textContent.length > 139) {
            card.innerHTML = card.textContent.slice(0, 139) + '...' +
                '<span class="remaining-text" style="display: none;">' + '</span>' +
                '<span class="read-more"> Read more</span>';
        }
    }
    readless();

    let click_read = () => {
        card.addEventListener('click', function(event) {
            if (event.target.classList.contains('read-more')) {
                card.innerHTML = originalContent +
                    '<span class="remaining-text" style="display: none;">' + '</span>' +
                    '<span class="read-less"> Read less </span>';

                document.querySelector(".read-less").addEventListener('click', function() {
                    readless();
                });
            }
        });
    }
    click_read();
});


//

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contFrm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Redirect to contact.html
    window.location.href = "contact.html";
  });
});







// // Function to show custom alert
// function showCustomAlert() {
//   // Create custom alert box
//   var alertBox = $('<div>').addClass('custom-alert').text('Please login to Pixel Play Portal');
//   var loginButton = $('<button>').text('Login').addClass('login-button');
  
//   // Add click event to the login button
//   loginButton.click(function() {
//     // Redirect to login.html
//     window.location.href = 'login.html';
//   });
  
//   // Append the login button to the alert box
//   alertBox.append(loginButton);
  
//   // Append the alert box to the body
//   $('body').append(alertBox);
// }
