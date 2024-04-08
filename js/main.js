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


// document.querySelector(".search-icon").addEventListener('click', (a) => {

//  if (   document.querySelector(".search-box-one").innerHTML = "") {
//     document.querySelector(".search-box-one").innerHTML = ('<input type="text" class="nav-link" placeholder="Search here..."/>');
//  } 
//  else {
//     document.querySelector(".search-box-one").innerHTML = "";
//  }
// });


// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector(".search-box").addEventListener('click', (a) => {
//     const searchBox = document.querySelector(".search-box-one");
  

// console.log(a.currentTarget);

//     if (searchBox.innerHTML === "") {
//       searchBox.innerHTML = '<input type="text" class="nav-link" placeholder="Search here..."/>';
//     } else {

//       searchBox.innerHTML = "";
     
//     }
//   });
// });

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