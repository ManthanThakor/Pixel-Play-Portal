// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
 
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


(function() {

	// Get the buttons.
	var startBtn = document.getElementById('button');
  /*var resetBtn = document.getElementById('resetBtn');*/
	// A variable to store the requestID.
	var requestID;
	// Canvas
	var canvas = document.getElementById('canvas');
	// 2d Drawing Context.
	var ctx = canvas.getContext('2d');

	// Variables to for the drawing position and object.
	var posX = 0;
	var W = 246;
  var H = 60;
  var circles = []; 
  
  //Get canvas size
  canvas.width = 246;
  canvas.height = 60; 

	// Animate.
	function animate() {
		requestID = requestAnimationFrame(animate);
    //Fill canvas with black color
    //ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, W, H);

    //Fill the canvas with circles
    for(var j = 0; j < circles.length; j++){
      var c = circles[j];

      //Create the circles
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI*2, false);
          ctx.fillStyle = "rgba("+c.r+", "+c.g+", "+c.b+", 0.5)";
      ctx.fill();

      c.x += c.vx;
      c.y += c.vy;
      c.radius -= .02;

      if(c.radius < 0)
        circles[j] = new create();
    }
    
     
		
	}
  
 //Random Circles creator
      function create() {

        //Place the circles at the center

        this.x = W/2;
        this.y = H/2;


        //Random radius between 2 and 6
        this.radius = 2 + Math.random()*3; 

        //Random velocities
        this.vx = -5 + Math.random()*10;
        this.vy = -5 + Math.random()*10;

        //Random colors
        this.r = Math.round(Math.random())*255;
        this.g = Math.round(Math.random())*255;
        this.b = Math.round(Math.random())*255;
      }

      for (var i = 0; i < 500; i++) {
        circles.push(new create());
      }

	// Event listener for the start button.
	startBtn.addEventListener('mouseover', function(e) {
		e.preventDefault();

		// Start the animation.
		requestID = requestAnimationFrame(animate);
	});


	// Event listener for the stop button.
	startBtn.addEventListener('mouseout', function(e) {
		e.preventDefault();

		// Stop the animation;
		cancelAnimationFrame(requestID);
    
    e.preventDefault();

		// Reset the X position to 0.
		posX = 0;

		// Clear the canvas.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the initial box on the canvas.
		ctx.fillRect(posX, 0, boxWidth, canvas.height);
    
	});
  
  
	/*// Event listener for the reset button.
	resetBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Reset the X position to 0.
		posX = 0;

		// Clear the canvas.
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Draw the initial box on the canvas.
		ctx.fillRect(posX, 0, boxWidth, canvas.height);
	});*/


}());












	   
	   









document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.valo-part-main');

    // Create main element
    const mainElement = document.createElement('main');

    // Create ul element with class 'slider'
    const ulElement = document.createElement('ul');
    ulElement.classList.add('slider');

    // Array of slide data
    const slideData = [
        {
            image: 'https://images5.alphacoders.com/121/1211521.jpg',
            title: 'Neon',
            description: 'Neon, a dynamic Valorant player, electrifies the battlefield with unparalleled skill and strategic finesse. Their lightning-fast reflexes and precision shots make them a formidable force, while their vibrant playstyle stands out like neon lights in the gaming world. A true virtuoso, Neon dominates opponents with style and flair.'
        },{
            image: 'https://rare-gallery.com/mocahbig/1361525-Fade-ValorantValorant-HD-Wallpaper.jpg',
            title: 'Fade',
            description: 'Fade, a shadowy maestro in the realm of Valorant, navigates the battlefield with enigmatic finesse. Master of stealth and cunning, Fade effortlessly infiltrates enemy lines, leaving confusion in their wake. With a mysterious aura and lethal precision, Fade fades in and out of sight, turning every engagement into a mesmerizing dance of shadows.'
        },{
            image: 'https://rare-gallery.com/mocahbig/45534-Reyna-ValorantReyna-Valorant-HD-Wallpaper.jpg',
            title: 'Reyna',
            description: 'Reyna, the vampiric force of Valorant, thrives on combat, consuming defeated  foes to enhance her strength. With a keen eye and deadly accuracy, she excels in aggressive play, taking risks to secure frags. Her ultimate, Empress, transforms her into a relentless powerhouse, embodying the relentless pursuit of victory.'
        },{
            image: 'https://images2.alphacoders.com/114/1149344.jpg',
            title: 'Viper',
            description: 'Viper, the toxic strategist of Valorant, dominates the battlefield with her poisonous arsenal.Armed with a range of chemical abilities, she controls and denies areas, forcing enemies to succumb to her deadly toxins. Viper\'s ultimate Viper\'s Pit, envelops her in a noxious cloud, solidifying her role as a master tactician and disruptor.'
        },{
            image: 'https://wallpapercave.com/wp/wp12543117.jpg',
            title: 'Sage',
            description: 'Sage, the tranquil healer of Valorant, brings balance to the team with  her supportive abilities. Armed with a healing orb and barriers, she ensures her allies survival. Sage\'s resurrection ultimate, "Resurrection," turns the tides of battle, showcasing her compassionate yet strategic approach to victory in the midst of chaos.'
        },{
            image: 'https://www.hdwallpapers.in/download/white_hair_jett_hd_valorant-HD.jpg',
            title: 'Jett',
            description: 'ett, the agile duelist of Valorant, soars through the battlefield with unparalleled speed and grace. Armed with shurikens and a dash ability, Jett excels in hit-and-run tactics, catching enemies off guard. Her ultimate, Tailwind, allows her to become a fleeting storm, embodying the essence of a skilled and elusive fighter.'
        }
        // Add other slides similarly
    ];

    // Create li elements for each slide
    slideData.forEach(slide => {
        const liElement = document.createElement('li');
        liElement.classList.add('item');
        liElement.style.backgroundImage = `url('${slide.image}')`;

        // Create div with class 'content'
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // Create h2 element with class 'title'
        const titleElement = document.createElement('h2');
        titleElement.classList.add('title');
        titleElement.textContent = slide.title;

        // Create p element with class 'description'
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('description');
        descriptionElement.textContent = slide.description;

        // Create button element
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('valo-btn-more-char');
        buttonElement.textContent = 'View more character';

        // Append title, description, and button to contentDiv
        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(descriptionElement);
        contentDiv.appendChild(buttonElement);

        // Append contentDiv to liElement
        liElement.appendChild(contentDiv);

        // Append liElement to ulElement
        ulElement.appendChild(liElement);
    });

    // Create nav element with class 'nav'
    const navElement = document.createElement('nav');
    navElement.classList.add('nav');

    // Create ion-icon elements for previous and next buttons
    const prevIcon = document.createElement('ion-icon');
    prevIcon.classList.add('btn', 'prev');
    prevIcon.setAttribute('name', 'arrow-back-outline');

    const nextIcon = document.createElement('ion-icon');
    nextIcon.classList.add('btn', 'next');
    nextIcon.setAttribute('name', 'arrow-forward-outline');

    // Append prevIcon and nextIcon to navElement
    navElement.appendChild(prevIcon);
    navElement.appendChild(nextIcon);

    // Append ulElement and navElement to mainElement
    mainElement.appendChild(ulElement);
    mainElement.appendChild(navElement);

    // Append mainElement to mainContainer
    mainContainer.appendChild(mainElement);

    // Function to handle navigation
    function activate(e) {
        const items = document.querySelectorAll('.item');
        e.target.matches('.next') && ulElement.append(items[0])
        e.target.matches('.prev') && ulElement.prepend(items[items.length - 1]);
    }

    document.addEventListener('click', activate, false);
    
    document.querySelectorAll('.valo-btn-more-char').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'valocharcter.html';
        }) 
    });;
});




document.querySelectorAll('.more-char-sec-ppp').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'charactermore.html';
    });
});