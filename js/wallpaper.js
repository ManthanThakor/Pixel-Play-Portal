
//select menu js

document.addEventListener("DOMContentLoaded", function () {
  var select = document.querySelector(".custom-select");
  var selected = select.querySelector(".select-selected");
  var options = select.querySelector(".select-items");
  var allImages = document.querySelectorAll(".wall-img");

  selected.addEventListener("click", function () {
    options.classList.toggle("show");
  });

  options.addEventListener("click", function (e) {
    if (e.target.classList.contains("select-option")) {
      selected.textContent = e.target.textContent;
      selected.setAttribute(
        "data-category",
        e.target.getAttribute("data-category")
      );
      options.classList.remove("show");
      filterImages(e.target.getAttribute("data-category"));
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    var isClickInside = select.contains(event.target);
    if (!isClickInside) {
      options.classList.remove("show");
    }
  });
});

// Image data
const imageData = [
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "valorant game",
    category: "popular",
  },
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "Image 2",
    category: "valorant",
  },
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "Image 3",
    category: "gta",
  },
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "Image 4",
    category: "popular",
  },
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "Image 5",
    category: "car",
  },
  {
    imageUrl: "Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "Image 6",
    category: "character",
  },
];

// Function to add images dynamically
function addImages(categoryFilter = "", searchQuery = "") {
  const dynamicContent = document.getElementById("dynamicContent");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  // Clear existing content
  dynamicContent.innerHTML = "";

  // Filter images based on category if provided
  const filteredImages = categoryFilter
    ? imageData.filter((img) => img.category === categoryFilter)
    : imageData;

  // Filter images based on search query if provided
  const searchedImages = searchQuery
    ? filteredImages.filter((img) =>
        img.alt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredImages;

  // Number of images to display per page
  const imagesPerPage = 10;

  // Calculate the starting index based on the current page
  const startIndex = currentPage * imagesPerPage;

  // Slice the array to get the images for the current page
  const pageImages = searchedImages.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  pageImages.forEach((data) => {
    // Create image element
    const img = document.createElement("img");
    img.src = data.imageUrl;
    img.alt = data.alt;
    img.className = "wall-img";
    img.loading = "lazy";

    // Create div to hold the image
    const div = document.createElement("div");
    div.className = "wall-img-main";
    div.setAttribute("data-category", data.category);
    div.appendChild(img);

    // Append the div to dynamicContent
    dynamicContent.appendChild(div);
  });

  // Update visibility of previous and next buttons
  if (startIndex === 0) {
    prevButton.style.display = "none"; // Hide previous button on first page
  } else {
    prevButton.style.display = "inline-block";
  }

  if (startIndex + imagesPerPage >= searchedImages.length) {
    nextButton.style.display = "none"; // Hide next button on last page
  } else {
    nextButton.style.display = "inline-block";
  }
}

// Initial page index
let currentPage = 0;

// Call addImages function to populate dynamicContent with images
addImages();

// Event listener for previous button
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    addImages();
  }
});

// Event listener for next button
document.getElementById("nextBtn").addEventListener("click", () => {
  const imagesPerPage = 10;
  if ((currentPage + 1) * imagesPerPage < imageData.length) {
    currentPage++;
    addImages();
  }
});

// Event listener for search input
document
  .querySelector(".input-box input")
  .addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    addImages("", searchQuery);
  });

// Function to filter images based on category
function filterImages(category) {
  addImages(category);
}

// Open Input
document.querySelector(".search").addEventListener("click", () => {
  document.querySelector(".input-box").classList.add("open");
});

// Close Input
document.querySelector(".close-icon").addEventListener("click", () => {
  document.querySelector(".input-box").classList.remove("open");
});
// Event listener for search input
document
  .querySelector(".input-box input")
  .addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    addImages("", searchQuery);
  });

















  


  // information btn click event 



  var searchDetailsBtn = document.querySelector(".search-details-btn");
  var infoPartBtn = document.getElementById("info-part-btn-one");

  infoPartBtn.addEventListener("click", function(event) {
    if (searchDetailsBtn.style.display === "block") {
      searchDetailsBtn.style.display = "none";
    } else {
      searchDetailsBtn.style.display = "block";
    }
    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    var targetElement = event.target;
    if (!searchDetailsBtn.contains(targetElement) && targetElement !== infoPartBtn) {
      searchDetailsBtn.style.display = "none";
    }
  });

  
  var searchDetailsBtnn = document.querySelector(".search-details-btn-two");
  var infoPartBtnn = document.getElementById("info-part-btn-two");

  infoPartBtnn.addEventListener("click", function(event) {
    if (searchDetailsBtnn.style.display === "block") {
      searchDetailsBtnn.style.display = "none";
    } else {
      searchDetailsBtnn.style.display = "block";
    }
    event.stopPropagation();
  });

  document.addEventListener("click", function(event) {
    var targetElement = event.target;
    if (!searchDetailsBtnn.contains(targetElement) && targetElement !== infoPartBtnn) {
      searchDetailsBtnn.style.display = "none";
    }
  });