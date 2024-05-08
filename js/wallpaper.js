// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});











document.addEventListener("DOMContentLoaded", function() {
    var select = document.querySelector(".custom-select");
    var selected = select.querySelector(".select-selected");
    var options = select.querySelector(".select-items");
    var input = select.querySelector("input[type='text']");
  
    selected.addEventListener("click", function() {
      options.classList.toggle("show");
    });
  
    options.addEventListener("click", function(e) {
      if (e.target.classList.contains("select-option")) {
        selected.textContent = e.target.textContent;
        options.classList.remove("show");
      }
    });
  
    input.addEventListener("input", function() {
      var filter = input.value.toUpperCase();
      var items = options.querySelectorAll(".select-option");
  
      items.forEach(function(item) {
        if (item.textContent.toUpperCase().indexOf(filter) > -1) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  



 // Data to be displayed dynamically
    const imageData = [
        {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 1"},
        {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 2"},
        {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 3"}, {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 1"},
        {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 2"},
        {imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg", alt: "Image 3"}
    ];

    // Function to dynamically create and display images
    function displayImages() {
        const dynamicContent = document.getElementById('dynamicContent');
        
        // Clear existing content
        dynamicContent.innerHTML = '';

        // Loop through imageData and create image elements
        imageData.forEach(data => {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('col-lg-4');

            const img = document.createElement('img');
            img.src = data.imageUrl;
            img.alt = data.alt;
            img.classList.add('wall-img');

            const imgContainer = document.createElement('div');
            imgContainer.classList.add('wall-par-main-img');
            imgContainer.appendChild(img);

            imgDiv.appendChild(imgContainer);
            dynamicContent.appendChild(imgDiv);
        });
    }

    // Call the function to display images when the page loads
    window.onload = displayImages;