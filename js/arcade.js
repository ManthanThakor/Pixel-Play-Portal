// Array of card information
const cards = [
  {
    imgSrc: "Img/arcade-part/arcade-card/rdr2.jpg",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.",
      downSrc:"https://se7en.ws/files/7l_rdr2_setup.exe",
      category: "adventure",
      likeCount: 0, // Initial like count
      liked: false // Initial liked status
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/er.jpg",
    title: "Elden Ring",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",   
      downSrc:"http://surl.li/tiufu",
      category: "action", 
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/gta5.jpg",
    title: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",  
  
      downSrc:"https://files.modyolo.com/GTA%205/GTA5_v0.7_Beta.apk",
      category: "adventure",
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      downSrc:"https://files.modyolo.com/NieR:%20Automata/NierM.b1.apk",
      category: "roleplaying" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      downSrc:"http://surl.li/tiuqa",
      category: "multiplayer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "multiplayer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/cyberpunk.jpg",
    title: "Cyberpunk 2077",
    description:"Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red, and published by CD Projekt, and based on Mike Pondsmith's Cyberpunk tabletop game series. The plot is set in the fictional metropolis of Night City, California, within the dystopian Cyberpunk universe.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "multiplayer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/Dishonored2.jpg",
    title: "Dishonored 2",
    description:"Arkane is known for many games, but – not to take anything away from the also-fantastic Prey and Deathloop – for our money, Dishonored 2 stands as its masterpiece. The darkly fantastical world of magic and intrigue that the original created is built upon in the thriving city of Karnaca, filled with convincing NPCs and towering Clockwork Soldiers that represent both dire threat and tempting opportunities if they can be turned against their masters.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "multiplayer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/doom.jpg",
    title: "Doom",
    description:"One of the greatest reimaginings of a classic game ever made, the 2016 reboot of Doom held nothing back as it launched us face-first into a horde of space demons and invited us to rip and tear them to shreds, then feast upon the glowing bits that popped out so that we could do it again and again. While the sequel, Doom Eternal, arguably improved on the combat by making it even more technical, for us nothing beats the relative simplicity of the satisfying slug-fests of Doom.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "Adventurer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/XCOMjpg.jpg",
    title: " XCOM 2",
    description:" XCOM 2 builds on the brilliant, high-stakes tactical combat that Firaxis reinvigorated with XCOM: Enemy Unknown back in 2012, and its War of the Chosen expansion made it even better. It features the same tension of going from a technologically inferior underdog to powerful war machine, amplified with the constant threat of the permanent deaths of your customized soldiers looming over every decision.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "Adventure" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/blader.jpg",
    title: "Baldur's Gate 3",
    description:"Call it recency bias if you must, but IGN’s 2023 PC Game of The Year winner also takes the top spot in 2024’s Best PC Games list. Baldur’s Gate 3’s massive roleplaying adventure is both enormously ambitious in its scope and yet endearingly old-school in its style. ",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "Action" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/witcher.jpg",
    title: "The Witcher 3: Wild Hunt",
    description:"Deep, lengthy RPGs are a staple of PC gaming, and very few have put a larger chunk of sophisticated content forward than The Witcher 3: Wild Hunt has. Its massive sandbox open-world areas impress, both in terms of scope and density; they’re generously dotted with great monsters to slay, tantalizing mysteries to solve, and personal stories to unfurl.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "Action" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/hitman.jpg",
    title: "Hitman",
    description:"Seeing as it collects all of the deviously designed scenarios from Io Interactive’s recent Hitman trilogy under one banner, Hitman: World of Assassination is too good to pass up. With all of the rich, rewarding, and highly replayable sandboxes at your fingertips, there’s virtually no end to the cold-blooded and often hilarious trouble you can cause as Agent 47.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "role playing" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/resident-evel.jpg",
    title: "Resident Evil 4 Remake",
    description:"Simultaneously one of the newest games on this list and also the oldest, the 2023 remake of 2005’s Resident Evil 4 took everything that made the original a standout action-horror classic and modernized it to thrill present-day gamers just as much as it had those who always saw it through rose-tinted glasses.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "adventure" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/4k-hd-valorant-w3mmmt4rvg8thwnm.jpg",
    title: "VALORANT",
    description:"Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "multiplayer" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/forza.jpg",
    title: "Forza Horizon 5",
    description:"Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the fifth Forza Horizon title and twelfth main instalment in the Forza series. The game is set in a fictionalised representation of Mexico",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "racing" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/hades.jpg",
    title: "Hades",
    description:"Hades is a 2020 roguelike action role-playing game developed and published by Supergiant Games. It was released for macOS, Nintendo Switch, and Windows following an early access release in December 2018.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "adventure" ,
      likeCount: 0, 
      liked: false 
  },
  {
    imgSrc: "./Img/arcade-part/arcade-card/HD-wallpaper-dirt-dirt-rally-2.jpg",
    title: "DiRT Rally 2.0",
    description:"Dirt Rally 2.0 is a racing simulation video game developed and published by Codemasters for PlayStation 4, Windows, and Xbox One. It was released on 26 February 2019.",
      downSrc:"https://store.steampowered.com/app/570/Dota_2/",
      category: "racing" ,
      likeCount: 0, 
      liked: false 
  }

  // Add more card objects as needed
];

// Number of cards to load each time
const cardsPerPage = 6;
let currentIndex = 0;

// Function to dynamically create cards
function createCards() {
  const cardContainer = document.getElementById("cardContainer");

  // Display initial batch of cards
  displayNextBatch(cardContainer);

  // Add event listener to the "Load More" button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", function () {
    displayNextBatch(cardContainer);
  });

  // Add event listener to the search input field
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredCards = cards.filter(card => {
      return card.title.toLowerCase().includes(searchQuery);
    });
    displayFilteredCards(filteredCards, cardContainer);
  });

  // Add event listener to the category select dropdown
  const categorySelect = document.getElementById("categorySelect");
  categorySelect.addEventListener("change", function () {
    const selectedCategory = categorySelect.value;
    const searchQuery = searchInput.value.toLowerCase();
    let filteredCards = cards;

    if (selectedCategory !== "all") {
      filteredCards = filteredCards.filter(card => card.category === selectedCategory);
    }

    if (searchQuery) {
      filteredCards = filteredCards.filter(card => card.title.toLowerCase().includes(searchQuery));
    }

    displayFilteredCards(filteredCards, cardContainer);
  });
}

// Function to display the next batch of cards
function displayNextBatch(container) {
  // Calculate the end index for the next batch
  const endIndex = Math.min(currentIndex + cardsPerPage, cards.length);

  // Loop through the cards to display
  for (let i = currentIndex; i < endIndex; i++) {
    const card = cards[i];
    const cardHTML = `
      <div class="col-xl-4">
        <div class="card arcade-card-one">
          <div class="img-part-main-arc">
            <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
          </div>
          <div class="card-body arcade-body-card">
            <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
            <p class="card-text arcade-b-card">${card.description}</p>
            <div class="button-card-part">
              <button type="button" class="btn text-uppercase btn-primary arcade-btn add-to-cart" data-index="${i}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View More</button>
              <p class="button-card-part-price">
                <i class="fa-regular fa-heart ${card.liked ? 'liked' : ''}" id="icon-likes-${i}" data-index="${i}" onclick="toggleLike(${i})"></i>
                <span id="like-count-${i}" style="color: ${card.likeCount > 0 ? 'orange' : 'red'}">${card.likeCount > 0 ? card.likeCount : ''}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  }

  // Update current index
  currentIndex = endIndex;

  // Hide the "Load More" button if all cards are displayed
  if (currentIndex >= cards.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }

  // Add event listeners to the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const index = button.dataset.index;
      openCustomModal(cards[index]);
    });
  });

  // Add "Read more/Read less" functionality to each card
  let ca = document.querySelectorAll(".arcade-b-card");
  ca.forEach((card) => {
    let originalContent = card.innerHTML;

    let readless = () => {
      if (card.textContent.length > 125) {
        card.innerHTML =
          card.textContent.slice(0, 125) +
          "..." +
          '<span class="remaining-text" style="display: none;">' +
          "</span>" +
          '<span class="read-more"> Read more</span>';
      }
    };
    readless();

    let click_read = () => {
      card.addEventListener("click", function (event) {
        if (event.target.classList.contains("read-more")) {
          card.innerHTML =
            originalContent +
            '<span class="remaining-text" style="display: none;">' +
            "</span>" +
            '<span class="read-less"> Read less </span>';

          document
            .querySelector(".read-less")
            .addEventListener("click", function () {
              readless();
            });
        }
      });
    };
    click_read();
  });
}

// Function to toggle like for a card
function toggleLike(index) {
  const heartIcon = document.getElementById(`icon-likes-${index}`);
  const likeCountSpan = document.getElementById(`like-count-${index}`);
  const liked = cards[index].liked;
  if (!liked) {
    cards[index].likeCount++;
    heartIcon.classList.add("liked");
    likeCountSpan.style.color = "orange";
  } else {
    cards[index].likeCount--;
    heartIcon.classList.remove("liked");
    likeCountSpan.style.color = "red";
  }
  cards[index].liked = !liked;
  likeCountSpan.textContent = cards[index].likeCount > 0 ? cards[index].likeCount : '';
}

// Function to display filtered cards
function displayFilteredCards(filteredCards, container) {
  // Clear existing cards
  container.innerHTML = "";

  // Display filtered cards
  filteredCards.forEach((card, index) => {
    const cardHTML = `
      <div class="col-xl-4">
        <div class="card arcade-card-one">
          <div class="img-part-main-arc">
            <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
          </div>
          <div class="card-body arcade-body-card">
            <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
            <p class="card-text arcade-b-card">${card.description}</p>
            <div class="button-card-part">
              <button type="button" class="btn text-uppercase btn-primary arcade-btn add-to-cart" data-index="${cards.indexOf(card)}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add to cart</button>
              <p class="button-card-part-price">
                <i class="fa-regular fa-heart ${card.liked ? 'liked' : ''}" id="icon-likes-${index}" data-index="${index}" onclick="toggleLike(${index})"></i>
                <span id="like-count-${index}" style="color: ${card.likeCount > 0 ? 'orange' : 'black'}">${card.likeCount > 0 ? card.likeCount : ''}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Add event listeners to the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const index = button.dataset.index;
      openCustomModal(cards[index]);
    });
  });

  // Add "Read more/Read less" functionality to each card
  let ca = document.querySelectorAll(".arcade-b-card");
  ca.forEach((card) => {
    let originalContent = card.innerHTML;

    let readless = () => {
      if (card.textContent.length > 125) {
        card.innerHTML =
          card.textContent.slice(0, 125) +
          "..." +
          '<span class="remaining-text" style="display: none;">' +
          "</span>" +
          '<span class="read-more"> Read more</span>';
      }
    };
    readless();

    let click_read = () => {
      card.addEventListener("click", function (event) {
        if (event.target.classList.contains("read-more")) {
          card.innerHTML =
            originalContent +
            '<span class="remaining-text" style="display: none;">' +
            "</span>" +
            '<span class="read-less"> Read less </span>';

          document
            .querySelector(".read-less")
            .addEventListener("click", function () {
              readless();
            });
        }
      });
    };
    click_read();
  });
}

// Function to open the custom modal and display game details
function openCustomModal(game) {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("customModalContent");

  modalContent.innerHTML = `
    <span class="custom-close">&times;</span>
    <h2>${game.title}</h2>
    <img src="${game.imgSrc}" alt="${game.title}" style="max-width: 100%;">
    <p>${game.description}</p>
    <button type="button" class="btn text-uppercase btn-primary custom-download-btn"><a href="${game.downSrc}">Download</a></button>
  `;

  // Show modal
  modal.style.display = "block";

  // Close modal when clicking on the close button
  const closeButton = modal.querySelector(".custom-close");
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content area
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Call the function to create cards when the page loads
window.onload = createCards;


