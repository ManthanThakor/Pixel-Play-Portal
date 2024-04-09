
// GLOWING TEXT 

const glowingText = (() => {
    const textElement = document.getElementById('glowing_text');
    let coloredText;
    let index = 0;

    const startGlowing = () => {
        setInterval(() => {
            const letters = textElement.textContent.split('');
            if (letters[index] == ' ') {
                index++;
            }
            letters[
                index
            ] = `<span style="color: var(--glowColor); text-shadow: var(--shadowColor);">${letters[index]}</span>`;
            coloredText = letters.join('');
            textElement.innerHTML = coloredText;
            index = (index + 1) % letters.length;
        }, 200);
    };

    return startGlowing;
})();

window.addEventListener('load', glowingText, false);


// SEARCH BAR 

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

  // HAM BURGER
  document.addEventListener('DOMContentLoaded', () => {
    const hamPartSection = document.querySelector(".ham-part-section");
    const pixelMenu = document.querySelector(".pixel-menu");
    let isMenuVisible = false;
  
    hamPartSection.addEventListener('click', () => {
      
        if (!isMenuVisible) {
                pixelMenu.style.display = "flex"; // Show the pixel-menu part
                console.log(isMenuVisible);
                isMenuVisible = true;
                // document.querySelector(".pixel-head").querySelectorAll("*").forEach(element => {
                //          if (!element.classList.contains('pixel-menu') && !element.closest('.logo-menu-part') ) {
                //              element.style.filter = "blur(3px)";
                //              console.log(element)
                document.querySelector(".main-name-part").style.filter = "blur(3px)";
                  
              
      } else {
        pixelMenu.style.display = "none"; // Hide the pixel-menu part
        isMenuVisible = false;
        document.querySelector(".main-name-part").style.filter = "blur(0px)";
      }
    });
  });


  // document.getElementById('animationButton').addEventListener('click', function() {
  //   setTimeout(function() {
  //     document.getElementById('animationContainer').classList.add('show');
  //   }, 2000); // 2000 milliseconds = 2 seconds delay
  // });






  // document.addEventListener('DOMContentLoaded', () => {
  //   const hamPartSection = document.querySelector(".ham-part-section");
  //   const pixelMenu = document.querySelector(".pixel-menu");
  //   const pixelMenuu = document.querySelector(".logo-menu-part");
  //   const pixelMenuuu = document.querySelector(".pixel-menu-section");
  //   let isMenuVisible = false;
  
  //   hamPartSection.addEventListener('click', () => {
  //     if (!isMenuVisible) {
  //       pixelMenu.style.display = "flex"; // Show the pixel-menu part
  //       isMenuVisible = true;
  //       document.querySelector(".pixel-head").querySelectorAll("*").forEach(element => {
  //         if (!element.classList.contains('pixel-menu') && !element.closest('.logo-menu-part') ) {
  //           element.style.filter = "blur(3px)";
  //           console.log(element)
  //         }
  //       });
  //     } else {
  //       pixelMenu.style.display = "none"; // Hide the pixel-menu part
  //       isMenuVisible = false;
  //       document.querySelector(".pixel-head").querySelectorAll("*").forEach(element => {
  //         element.style.filter = "blur(0px)";

  //       });
  //     }
  //   });
  // });