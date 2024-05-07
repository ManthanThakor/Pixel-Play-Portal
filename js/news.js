// js for poll

const choices = document.querySelectorAll("input[name=poll]");

const increaseNumber = (node, value) => {
  node.innerText = "0%";
  node.innerText = value + "%";
  animateNumber(0, value, 1200, easeQuad, function (v) {
    node.innerText = Math.ceil(v) + "%";
  });
};

const reset = () => {
  choices.forEach((c, i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    c.closest(".poll").classList.remove("answered");
    pollChoice.classList.remove("winner");
    result.style.setProperty("--percent", 0 + "%");
    pollChoice.querySelector(".poll-percent").innerText = "0%";
  });
};

const handleChange = (event) => {
  const choice = event.target;
  const choiceIndex = [...choices].indexOf(choice);
  let total = 100;
  let remaining = total;
  let values = [];
  choices.forEach((c, i) => {
    let r = Math.ceil(Math.random() * remaining);
    remaining -= r;
    values[i] = r;
  });
  values[values.length - 1] = values[values.length - 1] + remaining;
  choices.forEach((c, i) => {
    const pollChoice = c.closest(".poll-choice");
    const result = pollChoice.querySelector(".poll-result");
    pollChoice.classList.remove("winner");
    if (values[i] === Math.max(...values)) {
      pollChoice.classList.add("winner");
    }
    result.style.setProperty("--percent", values[i] + "%");
    increaseNumber(pollChoice.querySelector(".poll-percent"), values[i]);
  });
  choice.closest(".poll").classList.add("answered");
};

choices.forEach((choice) => {
  choice.addEventListener("change", handleChange);
});

// ----

document.querySelector(".reset-part-poll").addEventListener("click", reset);

function easeQuad(t) {
  return (t * t) / (2 * (t * t - t) + 1);
}

function animateNumber(start, end, duration, easingFunction, callback) {
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
    imageUrl:
      "./Img/newsdetails/helldivers-2-orbital-precision-strike-imprecise.jpg",
    title: "HELLDIVERS 2",
    subTitle: "Helldivers 2 Fan Points Out Stratagem Problem You Can't Unsee",
    description:
      "A Helldivers 2 fan uncovers a subtle error in the icon of a popular Stratagem, igniting community discussion and highlighting player dedication.",
    h: "Fans are buzzing about how the icon for Helldivers 2's Orbital Precision Strike Stratagem is misaligned, sparking discussions within the community about attention to detail.",
    Highlighttwo:
      "Arrowhead Game Studios has addressed performance issues in Helldivers 2 with update 1.000.301 to enhance players' experience.",
    Highlightthree:
      "Players are active and invested in Helldivers 2, exploring new strategies and mysteries like the discovery of massive tunnels on Terminid planets.",
    paraone:
      "Helldivers 2 fans are buzzing about a new revelation: a keen-eyed player has spotted a subtle issue with the icon for one of the game's popular Stratagems, causing a stir within the community. Helldivers 2, developed by Arrowhead Game Studios, is a cooperative third-person shooter set in a dystopian future where players battle against alien forces on various planets. The game features a wide array of Stratagems, powerful abilities that players can deploy to aid them in combat, including the Orbital Precision Strike, which has gotten a lot of attention for its effectiveness in eliminating foes.",
    paratwo:
      "Arrowhead Game Studios has been maintaining the momentum of Helldivers 2 with update 1.000.301. The recent update addresses a range of performance issues and crashes reported by players following the previous update, 1.000.300. Despite its release several months ago, Helldivers 2 continues to attract new players due to Arrowhead Game Studios' commitment to regular content updates and bug fixes. Recent discussions even hint at potential new additions like a leaked plasma pistol, although such rumors are subject to verification.",
  },
  {
    imageUrl: "./Img/newsdetails/this-destiny-2-hunter-looks-just-like-raven-from-teen-titans.avif",
    title: "DESTINY 2",
    subTitle: "This Destiny 2 Hunter Looks Just Like Raven From Teen Titans",
    description: "A clever Destiny 2 player transforms their Hunter into Raven from the Teen Titans, one of DC Comics' most beloved characters.",
    h: "Customization in Destiny 2 reaches new levels as players recreate famous characters like DC Comics' Raven, showcasing inventiveness with the game's armor pieces and shaders.",
    Highlighttwo: " Reddit user iixVanquishxX transformed their Hunter into Raven with Pathfinder's Helmet, Parade Cloak, and other tailored armor pieces.",
    Highlightthree: " Reddit user iixVanquishxX transformed their Hunter into Raven with Pathfinder's Helmet, Parade Cloak, and other tailored armor pieces.",
    paraone: "An inventive Destiny 2 player has used the game's resources to make their version of Raven from Teen Titans. As happens with most MMOs, Destiny 2 players find various pieces of armor to protect their Guardians from danger. These armor pieces have become a very popular aspect of Destiny 2 due to their intricate designs, piquing players' creativity when it comes to changing the look of their characters.",
    paratwo: "Because of this, the Destiny 2 community has become very famous for its inventiveness in transforming the Guardians into different characters, such as Raven. A beloved character among DC Comics fans, Raven is a human-demon hybrid and one of the founding members of the New Teen Titans. Created by Marv Wolfman and George Perez, Raven's first appearance was in DC Comics Presents #26 in 1980. Since then, the character has made multiple appearances in different media, such as the games Injustice and LEGO Batman.",
  },
  {
    imageUrl: "./Img/newsdetails/pokemon-go-leak-reveals-new-info-about-necrozmas-debut.avif",
    title: "POKEMON GO",
    subTitle: "Pokemon GO Leak Reveals New Info About Necrozma's Debut",
    description: "A Pokemon GO leak shares exciting new information about Necrozma's debut, the next Legendary Pokemon to be added to Niantic's game.",
    h: "Players will soon be able to catch Necrozma in Pokemon GO, and a leak has revealed that its fusions will be available.",
    Highlighttwo: " Specifically, players will be able to fuse Necrozma with Solgaleo and Lunala to access Necrozma's alternate forms like Dusk Mane and Dawn Wings.",
    Highlightthree: "However, questions remain about the permanence of fusion, its costs, and shiny requirements.",
    paraone: "A Pokemon GO leak has revealed that Necrozma's fusions will be available in the game. Pokemon GO has 61 Legendary monsters in its Pokedex, and players can catch most of them in 5-star Raids. The list of Legendary Pokemon available in the game will soon increase with the addition of Necrozma, one of the critters featured in Gen 7.",
    paratwo: "Necrozma has a vaguely humanoid appearance, and its body is made from a black crystalline material. The Psychic-type Pokemon is the cover mascot for Pokemon Ultra Sun and Ultra Moon, and together with Solgaleo and Lunala forms the \"Light trio.\" After leaks teased the addition of the Legendary to the augmented reality game, Niantic later confirmed that Necrozma is coming to Pokemon GO. But while Necrozma will debut at Pokemon GO Fest 2024's Raids, players have not known many details beyond that. Now, a new Pokemon GO leak has been shared that reveals exciting information about Necrozma's arrival.",
  },
  {
    imageUrl: "./Img/newsdetails/newpokemon.avif",
    title: "POKEMON GO",
    subTitle: "New Pokemon GO Update Makes It Extremely Hard To Catch Pokemon",
    description: "After the controversial avatar update, Niantic's latest Pokemon GO update makes it extremely difficult to catch Pokemon and participate in GBL.",
    h: "Pokemon GO's latest update has caused major glitches, making it hard for fans to catch Pokemon and participate in the Battle League.",
    Highlighttwo: "Players have found workarounds for the issues, like turning off native refresh rate or reducing phone refresh rate.",
    Highlightthree: "The bugs seem to be affecting Android users and not iOS users, impacting gameplay and putting Android players at a disadvantage.",
    paraone: "Pokemon GO's recent update has turned out to be a nightmare for fans, as many are unable to catch Pokemon at all due to the glitches. That's not all, either, as the framerate issues have also made it extremely difficult for players to take part in the Pokemon GO Battle League, putting them at a significant disadvantage.",
    paratwo: "Pokemon GO's World of Wonders season has received a vitriolic response from the community so far. While the season started off on a high with some exciting events, things have gone downhill in the past few weeks with the release of Pokemon GO's controversial Avatar update. Not only are many fans still unable to make peace with the revamped avatars, it seems like yet another issue has cropped up in the game.",
  },
  {
    imageUrl: "./Img/newsdetails/fallout.avif",
    title: "FALLOUT 4",
    subTitle: "Fallout 4 Player Makes Character That Looks Like Walter White From Breaking Bad",
    description: "A Fallout 4 fan makes their player character look like Walter White, the teacher-turned-drug-dealer from the hit TV show Breaking Bad.",
    h: " Fallout 4 fans are getting creative by recreating characters like Walter White in-game, leading to hilarious results.",
    Highlighttwo: "The widespread success of the Amazon TV show Breaking Bad has inspired players to recreate Walter White and other characters using character creation tools in various games.",
    Highlightthree: "Fans are not only recreating Breaking Bad characters in Fallout 4, but in other popular video games like Grand Theft Auto 5 and Minecraft.",
    paraone: "An avid Fallout 4 fan attempts to recreate the likeness of Breaking Bad's Walter White in-game and ends up with surprisingly good results. Though it may seem like a bad combination at first glance, it turns out the iconic drug dealer from the legendary AMC drama doesn't look all that out of place wearing a vault suit in the post-apocalyptic world of Fallout 4.",
    paratwo: "With the Fallout franchise's popularity at an all-time high thanks to the widespread success of the Amazon TV show, more and more players are messing around with Bethesda's famous role-playing games and showing off the player characters they've created. One individual, for instance, managed to make a lifelike rendition of Norm from the Fallout TV series in Fallout 4. Another fan, meanwhile, created an accurate replica of Lucy, one of the main protagonists in Prime Video's acclaimed live-action Fallout adaptation. This latest player character recreation, however, stands out like a sore thumb as it's based off of a different TV show entirely, which makes it all the more hilarious.",
  },
  {
    imageUrl: "./Img/newsdetails/marvel-spider-man-2-unrelease-venom-video.avif",
    title: "SPIDER-MAN 2",
    subTitle: "Insomniac Developer Shares Unused Venom Animation From Marvel's Spider-Man 2",
    description: "An early concept video of Venom from Marvel's Spider-Man 2 sparks a fresh debate in the community about the possibly missed potential.",
    h: " Fans are impressed with an unused Venom traversal animation from Marvel's Spider-Man 2.",
    Highlighttwo: "In the footage, Venom moves around in his liquid form before turning into the solid monstrous creature players expect to see.",
    Highlightthree: "The unreleased Venom footage has sparked debate among fans, with fans divided on its potential and some gamers thinking the concept was cooler than the final product.",
    paraone: "An Insomniac Games developer has shared an unused piece of animation from Marvel's Spider-Man 2 pertaining to the game's iconic antagonist, Venom. Despite not making it to the final version of Marvel's Spider-Man 2, fans are quite impressed with how good the animation is.",
    paratwo: "With Venom having his own fan base far before the release of Marvel's Spider-Man 2, expectations were high for Insomniac Games' portrayal of the symbiote. The fact that the Marvel's Spider-Man 2 community was yearning to get more playtime as Venom speaks volumes about how fans feel about the game's take on the character. However, it seems like there was a slightly different variant of Venom which Insomniac Games had initially designed, and it has left fans in a dilemma.",
  },
  {
    imageUrl: "./Img/newsdetails/world-of-warcraft-the-war-within-alpha-hallowfall-dynamic-lighting-beledar.avif",
    title: "WORLD OF WARCRAFT",
    subTitle: "New World of Warcraft: The War Within Zone Has Incredible Dynamic Environment Effect",
    description: "Weather and dynamic lighting have appeared in World of Warcraft, but a new environmental effect in The War Within takes it to another level entirely.",
    h: "Hallowfall in World of Warcraft: The War Within has a dazzling dynamic effect with Beledar, shifting between light and dark every three hours.",
    Highlighttwo: " Beledar plays a significant role in the lore of the Arathi, transforming the entire underground zone of Hallowfall.",
    Highlightthree: "Players were astonished by the stunning special effect of Beledar in WoW, increasing excitement for The War Within.",
    paraone: "Hallowfall, one of the new zones in World of Warcraft: The War Within, has a stunning new dynamic environmental effect involving Beledar, the radiant star on the cave's roof. The crystal briefly shifts from light to dark and back again every three hours, transforming the entire World of Warcraft zone in the process.",
    paratwo: "The War Within, World of Warcraft's next expansion after Dragonflight, takes place on Khaz Algar, a new island with four new zones, three of which are underground. The third zone players visit in The War Within is Hallowfall, a massive underground region lit by the light of Beledar, a bright crystal jutting out from the ceiling of the cavern that is central to the culture of the Arathi who live there.",
  },
  {
    imageUrl: "./Img/newsdetails/spider-man-2-peter-strange-detail-miles.avif",
    title: "Spider-Man 2",
    subTitle: "SPIDER-MAN 2 Players Point Out Weird Peter Parker Oversight",
    description: "Spider-Man 2 players notice a strange and somewhat out-of-character gameplay detail that comes up whenever they aren't playing Peter Parker.",
    h: " Players notice Peter missing as an AI companion in combat while controlling Miles Morales in Spider-Man 2.",
    Highlighttwo: "The game allows the Spider-heroes to team up occasionally during missions, despite no co-op multiplayer option.",
    Highlightthree: " Some speculate Peter's absence as an AI companion is due to his faith in Miles' abilities as a superhero in the game's story.",
    paraone: "Some Marvel’s Spider-Man 2 fans have started pointing out that Peter Parker is missing as an AI companion in combat when the player is controlling Miles Morales. Spider-Man 2 gives gamers two crime-fighting Spider-heroes for the price of one, with Peter returning from the first game and Miles now a fully-fledged web-slinger following his starring role in the 2020 spin-off Spider-Man: Miles Morales.",
    paratwo: "While Spider-Man 2 doesn’t offer any kind of co-op multiplayer gameplay, it does allow the two Spideys to team up on occasion to take down the criminals of New York City. During certain story missions and free-roaming combat sections, players will sometimes bump into the Spider-Man that they aren’t controlling, who will assist them as an AI companion in battle. This isn’t limited to just Peter or Miles either, as Peter’s former police ally Yuriko Watanabe will sometimes show up to help under her vigilante persona Wraith.",
  },
  {
    imageUrl: "./Img/newsdetails/red-denuvo-logo-with-prohibited-emoji-sign-over-letter-o-on-building-square-display-static-from-persona-5-royal.avif",
    title: "PERSONA 5 ROYAL",
    subTitle: "Denuvo Outage Makes Hit Single-Player Game Unplayable",
    description: "A major Denuvo server outage leaves an extremely popular single-player game temporarily unplayable, angering fans in the process.",
    h: " A Denuvo server outage rendered the PC version of Persona 5 Royal unplayable on May 2.",
    Highlighttwo: "A partial workaround allowed Steam users to access the game without online functionality, but most didn't use it, with the game's concurrent player count consequently plummeting from 16,600 to just over 600.",
    Highlightthree: "The outage lasted for hours, angering fans in the process.",
    paraone: "The PC version of Persona 5 Royal has been rendered temporarily unplayable in early May due to a major Denuvo server outage. While a partial workaround allowed fans to circumvent the issue and access the game with some features disabled, this turn of events still angered many Persona 5 Royal players.",
    paratwo: "The definitive edition of Atlus's 2016 RPG has been a long-time hit among PC gamers, as underlined by the fact that the Steam version of Persona 5 Royal has been consistently averaging thousands of concurrent players since its late 2022 debut. The game had a significant popularity spike in late April, doubling its daily concurrent player peak to 25,000, after a 60% discount saw it drop to its lowest-ever price of $23.99 on Valve's storefront.",
  },
  {
    imageUrl: "./Img/newsdetails/helldivers-2-hulk-flamethrower-automaton.avif",
    title: "HELLDIVERS 2",
    subTitle: "Helldivers 2 Devs Having 'Internal Discussions' About Account Linking Controversy",
    description: "A Helldivers 2 community manager reveals developers are holding internal discussions regarding the PSN and Steam account linking controversy.",
    h: "The developers of Helldivers 2 are discussing the controversial account-linking requirements for Steam players after intense backlash from the community.",
    Highlighttwo: " Players were encouraged by the game's Discord community manager to voice their opinions through negative reviews and refund requests, as doing so gives the developers leverage while negotiating with Sony for a compromise.",
    Highlightthree: "The uproar led to Sony quietly changing its PSN FAQs, while Arrowhead Game Studios considers alternative solutions to the issue.",
    paraone: "Helldivers 2 developers are reportedly holding internal discussions regarding its controversial PlayStation Network account linking requirements for Steam players. The Helldivers 2 community was caught in a fiery meltdown after Arrowhead Game Studios announced plans to enforce its account-linking measures months after the game was released, with players quickly flooding online forums and servers demanding an explanation from both the developers and publisher.",
    paratwo: "In contrast to the overwhelmingly positive reception it received in the weeks following its February launch, Helldivers 2 has seen unprecedented levels of contempt in recent days from its thousands of players, who were outraged by its plans to begin enforcing a rule stipulating that PC users will be required to link their Steam account to PSN after a month-long grace period. Many fans have protested against this decision, claiming the game's End-User License Agreement for Steam contained no clear mention of a PSN requirement. They additionally pointed out that PSN was only available in 69 countries and that, for players residing outside these territories, simply creating an account is already violating PSN's Terms of Service, which is a bannable offense.",
  },
  {
    imageUrl: "./Img/newsdetails/fallout-4-pip-boy-3000-mark-iv-in-game-first-boot-up-image.avif",
    title: "FALLOUT",
    subTitle: "Fallout Image Shows How Pip-Boy Designs Have Changed Throughout the Years",
    description: "A Fallout fan shares how the series' eponymous wrist-worn computer, the Pip-Boy, has evolved over the years in the games and the TV series.",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },
  {
    imageUrl: "./Img/newsdetails/eldenring-01-4k-1623357441326.avif",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },
  {
    imageUrl: "./Img/newsdetails/destiny-2-void-titan.avif",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },
  {
    imageUrl: "./Img/newsdetails/call-of-duty-zombies-ray-gun-replica.avif",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },
  {
    imageUrl: "./Img/newsdetails/baldurs-gate-3-wyll-mizora.avif",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },
  {
    imageUrl: "./Img/newsdetails/call-of-duty-4-main-menu-war-picture.avif",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  }, {
    imageUrl: "",
    title: "",
    subTitle: "",
    description: "",
    h: "",
    Highlighttwo: "",
    Highlightthree: "",
    paraone: "",
    paratwo: "",
  },

  // Add more news objects here if needed
];

// Function to dynamically create news sections
function createNewsSection(data) {
  var newsSection = document.createElement("div");
  newsSection.classList.add("part-one-news-sec");

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
  var viewMoreButton = newsSection.querySelector(".view-more-game");
  viewMoreButton.addEventListener("click", function () {
    var encodedData = btoa(JSON.stringify(data));
    window.location.href =
      "newsdetails.html?data=" + encodeURIComponent(encodedData);
  });

  return newsSection;
}

// Function to display news sections on the page
function displayNews() {
  var container = document.getElementById("news-container");

  // Function to append news items to the container
  function appendNews(newsItems) {
    newsItems.forEach(function (news) {
      var newsSection = createNewsSection(news);
      container.insertBefore(newsSection, container.firstChild);
    });
  }

  // Load the first batch of news items
  appendNews(newsData.slice(0, 10));

  // Create and append "Load More" button
  var loadMoreButton = document.createElement("button");
  loadMoreButton.textContent = "Load More";
  loadMoreButton.classList.add("text-uppercase", "load-more-button");
  container.appendChild(loadMoreButton);

  // Add event listener to the "Load More" button
  loadMoreButton.addEventListener("click", function () {
    var nextBatch = newsData.slice(
      container.children.length - 1,
      container.children.length + 10
    );
    appendNews(nextBatch);

    // Remove the "Load More" button if all news items have been displayed
    if (container.children.length >= newsData.length) {
      loadMoreButton.remove();
    }
  });
}

// Call the function to display news on page load
displayNews();
