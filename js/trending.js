//   // Array of card information
//   const cards = [
//     { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }, { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }, { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }, { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }, { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }, { imgSrc: 'Img/arcade-part/arcade-card/rdr2.jpg', title: 'Red Dead Redemption 2', description: 'TRed Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player.' }
//     // Add more card objects as needed
//   ];

//   // Function to dynamically create cards
//   function createCards() {
//     const cardContainer = document.getElementById('cardContainer');

//     cards.forEach(card => {
//       const cardHTML = `
//         <div class="col-md-4">
//           <div class="card arcade-card-one">
//             <div class="img-part-main-arc">
//               <img src="${card.imgSrc}" class="card-img-top arcade-card-img" alt="${card.title}">
//             </div>
//             <div class="card-body arcade-body-card">
//               <h5 class="text-uppercase card-title arcade-t-card">${card.title}</h5>
//               <p class="card-text arcade-b-card">${card.description}</p>
//               <div class="button-card-part">
//                 <button type="button" class="btn text-uppercase btn-primary arcade-btn">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;add to cart</button>
//                 <p class="button-card-part-price">$59.99</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       `;
//       cardContainer.insertAdjacentHTML('beforeend', cardHTML);
//     });
//   }

//   // Call the function to create cards when the page loads
//   window.onload = createCards;









let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})