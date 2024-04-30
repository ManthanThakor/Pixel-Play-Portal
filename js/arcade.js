// Array of card information
const cards = [
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' },
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' },
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' },
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' },
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' },
  { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }
  // Add more card objects as needed
];

// Function to dynamically create cards
function createCards() {
  const cardContainer = document.getElementById('cardContainer');

  cards.forEach(card => {
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
              <p class="button-card-part-price">$59.99</p>
            </div>
          </div>
        </div>
      </div>
    `;
      cardContainer.insertAdjacentHTML('beforeend', cardHTML);
  });





  
  // Select all elements with the class ".arcade-b-card" after cards have been created
  let ca = document.querySelectorAll(".arcade-b-card");

  // Function to add "Read more/Read less" functionality to each card
  ca.forEach(card => {
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
}

// Call the function to create cards when the page loads
window.onload = createCards;
