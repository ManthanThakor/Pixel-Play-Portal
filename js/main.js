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

  document.addEventListener('DOMContentLoaded', () => {
    const hamPartSection = document.querySelector(".ham-part-section");
    const pixelMenu = document.querySelector(".pixel-menu");
    let isMenuVisible = false;
  
    hamPartSection.addEventListener('click', () => {
      if (!isMenuVisible) {
        pixelMenu.style.display = "flex"; // Show the pixel-menu part
        isMenuVisible = true;
      } else {
        // Add cool animation to hide the pixel-menu part
        pixelMenu.style.display = "none"; // Hide the pixel-menu part
        isMenuVisible = false;
      }
    });
  });


  // document.getElementById('animationButton').addEventListener('click', function() {
  //   setTimeout(function() {
  //     document.getElementById('animationContainer').classList.add('show');
  //   }, 2000); // 2000 milliseconds = 2 seconds delay
  // });