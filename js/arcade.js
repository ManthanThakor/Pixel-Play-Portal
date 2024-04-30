// Array of card information
const cards = [
  {
    imgSrc: "Img/arcade-part/arcade-card/rdr2.jpg",
    title: "Red Dead Redemption 2",
    description:
      "TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.",
      price:"$59.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/er.jpg",
    title: "Elden Ring",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",   
      price:"$75.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/gta5.jpg",
    title: "Red Dead Redemption 2",
    description:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",  
      price:"$29.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/nier.jpg",
    title: "NieR: Automata",
    description:
      "NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines.",
      price:"$39.99"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/minecraft.jpg",
    title: "Minecraft",
    description:
      "Minecraft is a 2011 sandbox game developed by Mojang Studios and originally released in 2009. The game was created by Markus \"Notch\" Persson in the Java programming language.",
      price:"$26.95"
  },
  {
    imgSrc: "Img/arcade-part/arcade-card/dota2.jpg",
    title: "Dota 2",
    description:
      "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
      price:"FREE"
  },
  
  // Add more card objects as needed
];

// Function to dynamically create cards
function createCards() {
  const cardContainer = document.getElementById("cardContainer");

  cards.forEach((card) => {
    const cardHTML = `
      <div class="col-md-4">
        <div class="card arcade-card-one">
          <div class="img-part-main-arc">
            <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
          </div>
          <div class="card-body arcade-body-card">
            <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
            <p class="card-text arcade-b-card">${card.description}</p>
            <div class="button-card-part">
              <button type="button" class="btn text-uppercase btn-primary arcade-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add to cart</button>
              <p class="button-card-part-price">${card.price}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // Select all elements with the class ".arcade-b-card" after cards have been created
  let ca = document.querySelectorAll(".arcade-b-card");

  // Function to add "Read more/Read less" functionality to each card
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

// Call the function to create cards when the page loads
window.onload = createCards;
