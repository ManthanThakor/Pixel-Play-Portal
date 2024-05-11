
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
    imageUrl: "./Img/wallpaper/best-gaming-background-aea1fp9pow4r1l4r.jpg",
    alt: "valorant game",
    category: "valorant",
  },
  {
    imageUrl: "./Img/wallpaper/wallpaper-one/2021-bugatti-bolide-4k_1626180135.jpg",
    alt: "Vehicles Bugatti Bolide 4k Ultra HD Wallpaper",
    category: "car",
  },
  {
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6(2).jpg",
    alt: "gta-six-6 wallpaper 4k hd",
    category: "gta",
  },
  {
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-5-car-2464.jpg",
    alt: "GTA Wallpaper, Gta V, Games, 4k, Hd, Transportation, City, Mode Of",
    category: "car",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/character-gta-5-trevor-on-dog-gta-v-ps3.jpg",
    alt: "GTA 5 Trevor on Dog, gta v ps3 HD wallpaper | Pxfuel",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-v-cars-211.jpg",
    alt: "GTA Background, GTA V Cars HD wallpaper | Pxfuel",
    category: "car",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/jinx-striking-uh-3840x2160.jpg",
    alt: " 94jinx-league-of-legends-wallpapers,league-of-legends-wallpapers,games-wallpapers,hd-wallpapers,artstation-wallpapers,artist-wallpapers,artwork-wallpapers,digital-art-wallpapers,4k-wallpapers,video-games-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-1.jpg",
    alt: " 3995jinx-league-of-legends-wallpapers,league-of-legends-wallpapers,games-wallpapers,hd-wallpapers,4k-wallpapers,5k-wallpapers,artstation-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-3.jpg",
    alt: " 6866jinx-league-of-legends-wallpapers,league-of-legends-wallpapers,arcane-wallpapers,anime-wallpapers,games-wallpapers,hd-wallpapers,4k-wallpapers,5k-wallpapers,8k-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-4.jpg",
    alt: "  1260jinx-league-of-legends-wallpapers,arcane-wallpapers,league-of-legends-wallpapers,tv-shows-wallpapers,artist-wallpapers,artwork-wallpapers,digital-art-wallpapers,hd-wallpapers,4k-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-5.jpg",
    alt: " 2290jinx-league-of-legends-wallpapers,league-of-legends-wallpapers,games-wallpapers,hd-wallpapers,deviantart-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-6.jpg",
    alt: " 4522arcane-wallpapers,netflix-wallpapers,jinx-league-of-legends-wallpapers,tv-shows-wallpapers,league-of-legends-wallpapers,hd-wallpapers,4k-wallpapers,artstation-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-7.jpg",
    alt: " 4650arcane-wallpapers,netflix-wallpapers,jinx-league-of-legends-wallpapers,tv-shows-wallpapers,league-of-legends-wallpapers,hd-wallpapers,4k-wallpapers,5k-wallpapers,artstation-wallpapers",
    category: "character",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-8.jpg",
    alt: " 2537arcane-wallpapers,netflix-wallpapers,jinx-league-of-legends-wallpapers,tv-shows-wallpapers,league-of-legends-wallpapers,hd-wallpapers,4k-wallpapers,5k-wallpapers,artstation-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-9.jpg",
    alt: " 4129call-of-duty-mobile-wallpapers,games-wallpapers,2021-games-wallpapers,hd-wallpapers,call-of-duty-wallpapers,4k-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/j-10.jpg",
    alt: " 1407call-of-duty-mobile-wallpapers,games-wallpapers,2024-games-wallpapers,mobile-wallpapers,call-of-duty-wallpapers,video-games-wallpapers,godzilla-x-kong-the-new-empire-wallpapers,movies-wallpapers,2024-movies-wallpapers,kong-wallpapers,hd-wallpapers,4k-wallpapers,5k-wallpapers",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/2024-call-of-duty-mobile-4k-4c.jpg",
    alt: " 1404call-of-duty-mobile-wallpapers,games-wallpapers,2024-games-wallpapers,call-of-duty-wallpapers,video-games-wallpapers,hd-wallpapers,4k-wallpapers",
    category: "cod",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/call-of-duty-ft-godzilla-x-kong-the-new-empire-ft-tt.jpg",
    alt: " 974call-of-duty-mobile-wallpapers,games-wallpapers,2024-games-wallpapers,hd-wallpapers,call-of-duty-wallpapers,4k-wallpapers,video-games-wallpapers,5k-wallpapers",
    category: "cod",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/2024-call-of-duty-mobile-4k-4c.jpg",
    alt: "call-of-duty-mobile character",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/call-of-duty-mobile-season-12-hc.jpg",
    alt: " 974call-of-duty-mobile-wallpapers,games-wallpapers,2024-games-wallpapers,hd-wallpapers,call-of-duty-wallpapers,4k-wallpapers,video-games-wallpapers,5k-wallpapers",
    category: "cod",
  },{
    imageUrl: "./",
    alt: " 1092call-of-duty-mobile-wallpapers,games-wallpapers,2023-games-wallpapers,hd-wallpapers,call-of-duty-wallpapers,4k-wallpapers,5k-wallpapers",
    category: "cod",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/char-1.jpg",
    alt: "character valo",
    category: "character",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/ai-created-gta-6-gaming-super-car-4k-desktop-wallpaper-v0-tywlv0wlgaoc1.webp",
    alt: "gta 6 gta-vi car",
    category: "car",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/valo-charac.jpg",
    alt: "valorant character",
    category: "character",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/4k-gta-5-tracey-fame-or-shame-mtk6gigh1jrxlh5v.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-5-naturalvision-evolved-night.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-5-car-01.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "car",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/cyberpunk-2077-wallpaper-full-hd-4k-wallpaper-download-in-2021.jpg",
    alt: "cyberpunk",
    category: "popular",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-5-paper.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-5(car).jpg",
    alt: "gta-5(car).",
    category: "car",
  },{
    imageUrl: "./",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/Gta-6-Concept-Car-Wallpapers.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/GTA-6-HD-Wallpaper-Poster.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "popular",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6-police.jpeg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6.png",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6(2).jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6(10.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-car-90.jpg",
    alt: "gta-car-90",
    category: "car",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-6(111).jpeg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta-vi-jp.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/gta(1).png",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/lucia-in-gta-vi-bo.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./Img/wallpaper/wallpaper-one/lucia-in-gta-vi-bo.jpg",
    alt: "gta-5 gta-6 gta-v gta-vi 4k wallpaper hd",
    category: "gta",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
  },{
    imageUrl: "./",
    alt: "",
    category: "",
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
  const imagesPerPage = 12;

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

// Function to open modal with image details
function openModal(imageUrl, imageSize) {
  // Get modal element
  const modal = document.getElementById("myModal");
  
  // Get image element
  const modalImg = document.getElementById("img01");
  
  // Get image size element
  const modalCaption = document.getElementById("caption");
  
  // Set image source
  modalImg.src = imageUrl;
  
  // Set image size
  modalCaption.textContent = `Image Size: ${imageSize}`;
  
  // Show modal
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  // Get modal element
  const modal = document.getElementById("myModal");
  
  // Hide modal
  modal.style.display = "none";
}

// Event listener for images
document.getElementById("dynamicContent").addEventListener("click", (event) => {
  // Check if clicked element is an image
  if (event.target && event.target.nodeName === "IMG") {
    const imageUrl = event.target.src;
    const imageSize = `${event.target.naturalWidth} x ${event.target.naturalHeight}`;
    
    // Open modal with image details
    openModal(imageUrl, imageSize);
  }
});

// Event listener for close button in modal
document.getElementById("closeModal").addEventListener("click", () => {
  // Close modal
  closeModal();
});

// Event listener for download button in modal
document.getElementById("downloadBtn").addEventListener("click", () => {
  // Get image element
  const modalImg = document.getElementById("img01");
  
  // Create anchor element for download
  const downloadLink = document.createElement("a");
  downloadLink.href = modalImg.src;
  downloadLink.download = "image";
  
  // Trigger download
  downloadLink.click();
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








































  // Number of tubes and strips per tube
const numTubes = 5;
const stripsPerTube = 100;

// Get the container element
const container = document.getElementById("containerrr");

// Loop through each tube
for (let i = 0; i < numTubes; i++) {
  // Create a new tube element
  const tube = document.createElement("div");
  tube.className = "tube";

  // Loop through each strip for the current tube
  for (let j = 0; j < stripsPerTube; j++) {
    // Create a new strip element
    const strip = document.createElement("div");
    strip.className = "strip";
    
    // Append the strip to the tube
    tube.appendChild(strip);
  }

  // Append the tube to the container
  container.appendChild(tube);
}
