
// js for poll 

const choices = document.querySelectorAll('input[name=poll]');

const increaseNumber = (node,value) => {
  node.innerText = "0%";
  node.innerText = value + "%";
  animateNumber(0,value, 1200,easeQuad,function(v) {
    node.innerText = Math.ceil(v) + "%";
  })
}

const reset = () => {
  choices.forEach((c,i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    c.closest(".poll").classList.remove("answered");
    pollChoice.classList.remove("winner");
    result.style.setProperty("--percent", 0 + "%");
    pollChoice.querySelector(".poll-percent").innerText = "0%"; 
  })
}

const handleChange = event => {
  const choice = event.target;
  const choiceIndex = [...choices].indexOf(choice);
  let total = 100;
  let remaining = total;
  let values = [];
  choices.forEach((c,i) => {
    let r = Math.ceil(Math.random() * remaining);
    remaining -= r;
    values[i] = r;
  });
  values[values.length-1] = values[values.length-1] + remaining;
  choices.forEach((c,i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    pollChoice.classList.remove("winner");
    if ( values[i] === Math.max(...values) ) {
      pollChoice.classList.add("winner");
    }
    result.style.setProperty("--percent", values[i] + "%");
    increaseNumber(pollChoice.querySelector(".poll-percent"), values[i]);
      
  });
  choice.closest(".poll").classList.add("answered");
}

choices.forEach(choice => {
  choice.addEventListener('change', handleChange );
});

// ----

document.querySelector(".reset-part-poll").addEventListener('click', reset);


  function easeQuad(t) {
    return t*t/(2*(t*t-t)+1)
  }
  
  function animateNumber(
    start,
    end,
    duration,
    easingFunction,
    callback 
  ) {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const change = end - start;
    const tick = () => {
      const now = Date.now();
      if (now >= endTime) {
        callback(end);
      } else {
        const elapsed = now - startTime;
        const value = easingFunction(elapsed / duration) * change + start;
        callback(value);
        requestAnimationFrame(tick);
      }
    };
    tick();
  }




  // // 
  //   // Array of news data
  //   var newsData = [
  //     {
  //         imageUrl: "https://images2.alphacoders.com/135/thumb-1920-1358046.png",
  //         title: "REDFALL",
  //         subTitle: "Redfall is Still Missing DLC Characters 1 Year After Launch",
  //         description: "Players are wondering where the DLC they paid for in the $100 Bite Back edition of Redfall is, a year after the game's notably disappointing launch."
  //     }, {
  //       imageUrl: "https://images2.alphacoders.com/135/thumb-1920-1358046.png",
  //       title: "REDFALL",
  //       subTitle: "Redfall is Still Missing DLC Characters 1 Year After Launch",
  //       description: "Players are wondering where the DLC they paid for in the $100 Bite Back edition of Redfall is, a year after the game's notably disappointing launch."
  //   },
  //     // Add more news objects here if needed
  // ];

  // // Function to dynamically create news sections
  // function createNewsSection(data) {
  //     var newsSection = document.createElement('div');
  //     newsSection.classList.add('part-one-news-sec');

  //     var innerHTML = `
  //         <div class="news-part-one">
  //             <img src="${data.imageUrl}" alt="" class="news-part-oneimg">
  //         </div>
  //         <div class="news-part-two">
  //             <div class="text-uppercase news-game-title">${data.title}</div>
  //             <div class="text-uppercase news-game-title-two">${data.subTitle}</div>
  //             <div class="news-game-discri">${data.description}</div>
  //             <div class="btn-viewnews">
  //                 <button class="text-uppercase view-more-game">view more</button>
  //             </div>
  //         </div>
  //     `;

  //     newsSection.innerHTML = innerHTML;
  //     return newsSection;
  // }

  // // Function to display news sections on the page
  // function displayNews() {
  //     var container = document.getElementById('news-container');
  //     // Clear existing content
  //     container.innerHTML = '';

  //     // Loop through news data and create news sections
  //     newsData.forEach(function(news) {
  //         var newsSection = createNewsSection(news);
  //         container.appendChild(newsSection);
  //     });
  // }

  // // Call the function to display news on page load
  // displayNews();




 // Array of news data
 var newsData = [
  {
      imageUrl: "https://images2.alphacoders.com/135/thumb-1920-1358046.png",
      title: "REDFALL",
      subTitle: "Redfall is Still Missing DLC Characters 1 Year After Launch",
      description: "Players are wondering where the DLC they paid for in the $100 Bite Back edition of Redfall is, a year after the game's notably disappointing launch.",
      Highlight: "Fans are buzzing about how the icon for Helldivers 2's Orbital Precision Strike Stratagem is misaligned, sparking discussions within the community about attention to detail. Arrowhead Game Studios has addressed performance issues in Helldivers 2 with update 1.000.301 to enhance players' experience.Players are active and invested in Helldivers 2, exploring new strategies and mysteries like the discovery of massive tunnels on Terminid planets."
  },
  {
      imageUrl: "https://images2.alphacoders.com/135/thumb-1920-1358046.png",
      title: "REDFALL2",
      subTitle: "Redfall22 is Still Missing DLC Characters 1 Year After Launch",
      description: "Players are wondering where the DLC they paid for in the $100 Bite Back edition of Redfall is, a year after the game's notably disappointing launch22."
  }
  // Add more news objects here if needed
];

// Function to handle view more button click
function onViewMoreClick(index) {
  // Get the data of the clicked news item
  var data = newsData[index];
  // Encode the data as JSON and convert it to a Base64 string
  var encodedData = btoa(JSON.stringify(data));
  // Redirect to the newsdetails.html page with the encoded data and index as query parameters
  window.location.href = 'newsdetails.html?data=' + encodedData + '&index=' + index;
}

// Function to dynamically create news sections
function createNewsSection(data, index) {
  var newsSection = document.createElement('div');
  newsSection.classList.add('part-one-news-sec');

  var innerHTML = `
      <div class="news-part-one">
          <img src="${data.imageUrl}" alt="" class="news-part-oneimg">
      </div>
      <div class="news-part-two">
          <div class="text-uppercase news-game-title">${data.title}</div>
          <div class="text-uppercase news-game-title-two">${data.subTitle}</div>
          <div class="news-game-discri">${data.description}</div>
          <div class="btn-viewnews">
              <button class="text-uppercase view-more-game" onclick="onViewMoreClick(${index})">view more</button>
          </div>
      </div>
  `;

  newsSection.innerHTML = innerHTML;
  return newsSection;
}

// Function to display news sections on the page
function displayNews() {
  var container = document.getElementById('news-container');
  // Clear existing content
  container.innerHTML = '';

  // Loop through news data and create news sections
  newsData.forEach(function(news, index) {
      var newsSection = createNewsSection(news, index);
      container.appendChild(newsSection);
  });
}

// Call the function to display news on page load
displayNews();