
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






// for news section
var newsData = [
  {
      imageUrl: "newsdetails/helldivers-2-orbital-precision-strike-imprecise.jpg",
      title: "HELLDIVERS 2",
      subTitle: "Redfall is Still Missing DLC Characters 1 Year After Launch",
      description: "A Helldivers 2 fan uncovers a subtle error in the icon of a popular Stratagem, igniting community discussion and highlighting player dedication.",
      h: "Fans are buzzing about how the icon for Helldivers 2's Orbital Precision Strike Stratagem is misaligned, sparking discussions within the community about attention to detail.",
      Highlighttwo: "Arrowhead Game Studios has addressed performance issues in Helldivers 2 with update 1.000.301 to enhance players' experience.",
      Highlightthree: "Players are active and invested in Helldivers 2, exploring new strategies and mysteries like the discovery of massive tunnels on Terminid planets.",
   paraone:"Helldivers 2 fans are buzzing about a new revelation: a keen-eyed player has spotted a subtle issue with the icon for one of the game's popular Stratagems, causing a stir within the community. Helldivers 2, developed by Arrowhead Game Studios, is a cooperative third-person shooter set in a dystopian future where players battle against alien forces on various planets. The game features a wide array of Stratagems, powerful abilities that players can deploy to aid them in combat, including the Orbital Precision Strike, which has gotten a lot of attention for its effectiveness in eliminating foes.",
   paratwo:"Helldivers 2 fans are buzzing about a new revelation: a keen-eyed player has spotted a subtle issue with the icon for one of the game's popular Stratagems, causing a stir within the community. Helldivers 2, developed by Arrowhead Game Studios, is a cooperative third-person shooter set in a dystopian future where players battle against alien forces on various planets. The game features a wide array of Stratagems, powerful abilities that players can deploy to aid them in combat, including the Orbital Precision Strike, which has gotten a lot of attention for its effectiveness in eliminating foes."
  },
  {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
 paraone:"",
 paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},
{
  imageUrl: "",
  title: "",
  subTitle: "",
  description: "",
  h: "",
  Highlighttwo: "",
  Highlightthree: "",
paraone:"",
paratwo:""
},

  // Add more news objects here if needed
];

// Function to dynamically create news sections
function createNewsSection(data) {
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
              <button class="text-uppercase view-more-game">view more</button>
          </div>
      </div>
  `;

  newsSection.innerHTML = innerHTML;

  // Add event listener to the button to navigate to newsdetails.html with encoded data
  var viewMoreButton = newsSection.querySelector('.view-more-game');
  viewMoreButton.addEventListener('click', function() {
      var encodedData = btoa(JSON.stringify(data));
      window.location.href = 'newsdetails.html?data=' + encodeURIComponent(encodedData);
  });

  return newsSection;
}

// Function to display news sections on the page
function displayNews() {
  var container = document.getElementById('news-container');

  // Function to append news items to the container
  function appendNews(newsItems) {
      newsItems.forEach(function(news) {
          var newsSection = createNewsSection(news);
          container.insertBefore(newsSection, container.firstChild);
      });
  }

  // Load the first batch of news items
  appendNews(newsData.slice(0, 10));

  // Create and append "Load More" button
  var loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'Load More';
  loadMoreButton.classList.add('text-uppercase', 'load-more-button');
  container.appendChild(loadMoreButton);

  // Add event listener to the "Load More" button
  loadMoreButton.addEventListener('click', function() {
      var nextBatch = newsData.slice(container.children.length - 1, container.children.length + 10);
      appendNews(nextBatch);

      // Remove the "Load More" button if all news items have been displayed
      if (container.children.length >= newsData.length) {
          loadMoreButton.remove();
      }
  });
}

// Call the function to display news on page load
displayNews();
