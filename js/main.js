
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
  
// search box

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".search-box").addEventListener('click', (event) => {
      if (event.target.classList.contains('search-box') || (event.target.classList.contains('search-icon')) )   {
        const searchBox = document.querySelector(".search-box-one");
        if (searchBox.innerHTML === "") {
          searchBox.innerHTML = '<input type="text" class="nav-link" placeholder="Search here..."/>';
        } else {
          searchBox.innerHTML = "";
        }
      }
    });
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
  
  // let x = document.querySelector(".arcade-b-card").innerHTML;
  // let xx = Array.from(x);

  // let readless = () => {
  // if (xx.length > 139) {
  //   var text = document.querySelector(".arcade-b-card").textContent.slice(0,139);
  //   console.log( document.querySelector(".arcade-b-card").textContent);
  //   console.log( text);

  //   document.querySelector(".arcade-b-card").innerHTML = text + '...';
  //   console.log(x);
  //   j = text + '...';
        
  //   document.querySelector(".arcade-b-card").innerHTML = j +
  //           '<span class="remaining-text" style="display: none;">' + '</span>' +
  //           '<span class="read-more"> Read more</span>';
  // }
  // }
  // readless();
  
  // let click_read = () => {
  //   document.addEventListener('click', function(event) {
 
  //     if (event.target.classList.contains('read-more')) {

  //   document.querySelector(".arcade-b-card").innerHTML = x +  '<span class="remaining-text" style="display: none;">' + '</span>' +
  //  '<span class="read-less"> Read less </span>';;
      
  //  document.querySelector(".read-less").addEventListener('click', function() {
  //   readless();

  //  });
  //     }
  //   });
  // }
  // click_read();
  


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
