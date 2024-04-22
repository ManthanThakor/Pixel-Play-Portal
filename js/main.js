// search box

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector(".search-box").addEventListener('click', (event) => {
//       if (event.target.classList.contains('search-box') || (event.target.classList.contains('search-icon')) )   {
//         const searchBox = document.querySelector(".search-box-one");
//         if (searchBox.innerHTML === "") {
//           searchBox.innerHTML = '<input type="text" class="nav-link" placeholder="Search here..."/>';
//         } else {
//           searchBox.innerHTML = "";
//         }
//       }
//     });
//   });
document.getElementById('search-sec-p').addEventListener('click', function() {
  var searchWrap = document.querySelector('.search__wrap');
  searchWrap.style.top = '0';
});

document.getElementById('sandbox-two').addEventListener('click', function() {
  var searchWrap = document.querySelector('.search__wrap');
  searchWrap.style.top = '-100%';
});

// search box two

document.getElementById('search-sec-p-two').addEventListener('click', function() {
  var searchWrap = document.querySelector('.search__wrap');
  searchWrap.style.top = '0';
});

document.getElementById('sandbox-two').addEventListener('click', function() {
  var searchWrap = document.querySelector('.search__wrap');
  searchWrap.style.top = '-100%';
});


   // ham burger
  
   function toggleMenu() {
    const hamPartSection = document.querySelector(".ham-part-section");
    const pixelMenu = document.querySelector(".pixel-menu");
    let isMenuVisible = false;

    hamPartSection.addEventListener("click", () => {
      if (!isMenuVisible) {
        pixelMenu.style.display = "flex"; // Show the pixel-menu part
        isMenuVisible = true;
      } else {
        pixelMenu.style.display = "none"; // Hide the pixel-menu part
        isMenuVisible = false;
      }
    });
  }
  // Call the function initially
  toggleMenu();
  

// cursor animation



// Get the top button
var mybutton = document.getElementById("goToTopBtn");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Active class 

// function changeActiveClass(event) {
// Remove active class from all navigation items
function changeActiveClass(event) {
  // Remove active class from all navigation items
  var navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(function(item) {
    item.classList.remove('act');
  });

  // Add active class to the clicked navigation item
  event.target.classList.add('act');
}



// submit the contact part 

document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contFrm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Redirect to contact.html
    window.location.href = "contact.html";
  });
});










// Mouse scroll animation


// script.js
// document.addEventListener('mousemove', function(e) {
//   const container = document.getElementById('star-container');
//   const star = document.createElement('div');
//   star.className = 'star';
//   container.appendChild(star);

//   // Set the initial position of the star
//   star.style.left = `${e.pageX}px`;
//   star.style.top = `${e.pageY}px`;

//   // Set the animation for the star
//   setTimeout(() => {
//       star.style.transform = 'translate(-50%, -50%) scale(2)'; // Moves and grows
//       star.style.opacity = '0'; // Fades out
//   }, 50);

//   // Remove the star after the animation
//   setTimeout(() => {
//       container.removeChild(star);
//   }, 600); // Should match the longest transition time
// });



  // document.getElementById('animationButton').addEventListener('click', function() {
  //   setTimeout(function() {
  //     document.getElementById('animationContainer').classList.add('show');
  //   }, 2000); // 2000 milliseconds = 2 seconds delay
  // });
  
  // slick slider animation


  /*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

// Init slick slider + animation


// <!-- ============SCRIPT FOR slick slider=============== -->
  // $(document).ready(function () {
  //   $(".slick-part-one").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     dots: true,
  //     arrows: true,
  //   });
  // });
  

// Btn animation

// Add this JavaScript to your script
// document.querySelector('.common-btn-part').addEventListener('click', function() {
//   // Add your click event functionality here
//   console.log('Button clicked');
// });


