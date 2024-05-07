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
// var newsData = [
//   {
//     imageUrl:
//       "./Img/newsdetails/helldivers-2-orbital-precision-strike-imprecise.jpg",
//     title: "HELLDIVERS 2",
//     subTitle: "Helldivers 2 Fan Points Out Stratagem Problem You Can't Unsee",
//     description:
//       "A Helldivers 2 fan uncovers a subtle error in the icon of a popular Stratagem, igniting community discussion and highlighting player dedication.",
//     h: "Fans are buzzing about how the icon for Helldivers 2's Orbital Precision Strike Stratagem is misaligned, sparking discussions within the community about attention to detail.",
//     Highlighttwo:
//       "Arrowhead Game Studios has addressed performance issues in Helldivers 2 with update 1.000.301 to enhance players' experience.",
//     Highlightthree:
//       "Players are active and invested in Helldivers 2, exploring new strategies and mysteries like the discovery of massive tunnels on Terminid planets.",
//     paraone:
//       "Helldivers 2 fans are buzzing about a new revelation: a keen-eyed player has spotted a subtle issue with the icon for one of the game's popular Stratagems, causing a stir within the community. Helldivers 2, developed by Arrowhead Game Studios, is a cooperative third-person shooter set in a dystopian future where players battle against alien forces on various planets. The game features a wide array of Stratagems, powerful abilities that players can deploy to aid them in combat, including the Orbital Precision Strike, which has gotten a lot of attention for its effectiveness in eliminating foes.",
//     paratwo:
//       "Arrowhead Game Studios has been maintaining the momentum of Helldivers 2 with update 1.000.301. The recent update addresses a range of performance issues and crashes reported by players following the previous update, 1.000.300. Despite its release several months ago, Helldivers 2 continues to attract new players due to Arrowhead Game Studios' commitment to regular content updates and bug fixes. Recent discussions even hint at potential new additions like a leaked plasma pistol, although such rumors are subject to verification.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/this-destiny-2-hunter-looks-just-like-raven-from-teen-titans.avif",
//     title: "DESTINY 2",
//     subTitle: "This Destiny 2 Hunter Looks Just Like Raven From Teen Titans",
//     description: "A clever Destiny 2 player transforms their Hunter into Raven from the Teen Titans, one of DC Comics' most beloved characters.",
//     h: "Customization in Destiny 2 reaches new levels as players recreate famous characters like DC Comics' Raven, showcasing inventiveness with the game's armor pieces and shaders.",
//     Highlighttwo: " Reddit user iixVanquishxX transformed their Hunter into Raven with Pathfinder's Helmet, Parade Cloak, and other tailored armor pieces.",
//     Highlightthree: " Reddit user iixVanquishxX transformed their Hunter into Raven with Pathfinder's Helmet, Parade Cloak, and other tailored armor pieces.",
//     paraone: "An inventive Destiny 2 player has used the game's resources to make their version of Raven from Teen Titans. As happens with most MMOs, Destiny 2 players find various pieces of armor to protect their Guardians from danger. These armor pieces have become a very popular aspect of Destiny 2 due to their intricate designs, piquing players' creativity when it comes to changing the look of their characters.",
//     paratwo: "Because of this, the Destiny 2 community has become very famous for its inventiveness in transforming the Guardians into different characters, such as Raven. A beloved character among DC Comics fans, Raven is a human-demon hybrid and one of the founding members of the New Teen Titans. Created by Marv Wolfman and George Perez, Raven's first appearance was in DC Comics Presents #26 in 1980. Since then, the character has made multiple appearances in different media, such as the games Injustice and LEGO Batman.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/pokemon-go-leak-reveals-new-info-about-necrozmas-debut.avif",
//     title: "POKEMON GO",
//     subTitle: "Pokemon GO Leak Reveals New Info About Necrozma's Debut",
//     description: "A Pokemon GO leak shares exciting new information about Necrozma's debut, the next Legendary Pokemon to be added to Niantic's game.",
//     h: "Players will soon be able to catch Necrozma in Pokemon GO, and a leak has revealed that its fusions will be available.",
//     Highlighttwo: " Specifically, players will be able to fuse Necrozma with Solgaleo and Lunala to access Necrozma's alternate forms like Dusk Mane and Dawn Wings.",
//     Highlightthree: "However, questions remain about the permanence of fusion, its costs, and shiny requirements.",
//     paraone: "A Pokemon GO leak has revealed that Necrozma's fusions will be available in the game. Pokemon GO has 61 Legendary monsters in its Pokedex, and players can catch most of them in 5-star Raids. The list of Legendary Pokemon available in the game will soon increase with the addition of Necrozma, one of the critters featured in Gen 7.",
//     paratwo: "Necrozma has a vaguely humanoid appearance, and its body is made from a black crystalline material. The Psychic-type Pokemon is the cover mascot for Pokemon Ultra Sun and Ultra Moon, and together with Solgaleo and Lunala forms the \"Light trio.\" After leaks teased the addition of the Legendary to the augmented reality game, Niantic later confirmed that Necrozma is coming to Pokemon GO. But while Necrozma will debut at Pokemon GO Fest 2024's Raids, players have not known many details beyond that. Now, a new Pokemon GO leak has been shared that reveals exciting information about Necrozma's arrival.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/newpokemon.avif",
//     title: "POKEMON GO",
//     subTitle: "New Pokemon GO Update Makes It Extremely Hard To Catch Pokemon",
//     description: "After the controversial avatar update, Niantic's latest Pokemon GO update makes it extremely difficult to catch Pokemon and participate in GBL.",
//     h: "Pokemon GO's latest update has caused major glitches, making it hard for fans to catch Pokemon and participate in the Battle League.",
//     Highlighttwo: "Players have found workarounds for the issues, like turning off native refresh rate or reducing phone refresh rate.",
//     Highlightthree: "The bugs seem to be affecting Android users and not iOS users, impacting gameplay and putting Android players at a disadvantage.",
//     paraone: "Pokemon GO's recent update has turned out to be a nightmare for fans, as many are unable to catch Pokemon at all due to the glitches. That's not all, either, as the framerate issues have also made it extremely difficult for players to take part in the Pokemon GO Battle League, putting them at a significant disadvantage.",
//     paratwo: "Pokemon GO's World of Wonders season has received a vitriolic response from the community so far. While the season started off on a high with some exciting events, things have gone downhill in the past few weeks with the release of Pokemon GO's controversial Avatar update. Not only are many fans still unable to make peace with the revamped avatars, it seems like yet another issue has cropped up in the game.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/fallout.avif",
//     title: "FALLOUT 4",
//     subTitle: "Fallout 4 Player Makes Character That Looks Like Walter White From Breaking Bad",
//     description: "A Fallout 4 fan makes their player character look like Walter White, the teacher-turned-drug-dealer from the hit TV show Breaking Bad.",
//     h: " Fallout 4 fans are getting creative by recreating characters like Walter White in-game, leading to hilarious results.",
//     Highlighttwo: "The widespread success of the Amazon TV show Breaking Bad has inspired players to recreate Walter White and other characters using character creation tools in various games.",
//     Highlightthree: "Fans are not only recreating Breaking Bad characters in Fallout 4, but in other popular video games like Grand Theft Auto 5 and Minecraft.",
//     paraone: "An avid Fallout 4 fan attempts to recreate the likeness of Breaking Bad's Walter White in-game and ends up with surprisingly good results. Though it may seem like a bad combination at first glance, it turns out the iconic drug dealer from the legendary AMC drama doesn't look all that out of place wearing a vault suit in the post-apocalyptic world of Fallout 4.",
//     paratwo: "With the Fallout franchise's popularity at an all-time high thanks to the widespread success of the Amazon TV show, more and more players are messing around with Bethesda's famous role-playing games and showing off the player characters they've created. One individual, for instance, managed to make a lifelike rendition of Norm from the Fallout TV series in Fallout 4. Another fan, meanwhile, created an accurate replica of Lucy, one of the main protagonists in Prime Video's acclaimed live-action Fallout adaptation. This latest player character recreation, however, stands out like a sore thumb as it's based off of a different TV show entirely, which makes it all the more hilarious.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/marvel-spider-man-2-unrelease-venom-video.avif",
//     title: "SPIDER-MAN 2",
//     subTitle: "Insomniac Developer Shares Unused Venom Animation From Marvel's Spider-Man 2",
//     description: "An early concept video of Venom from Marvel's Spider-Man 2 sparks a fresh debate in the community about the possibly missed potential.",
//     h: " Fans are impressed with an unused Venom traversal animation from Marvel's Spider-Man 2.",
//     Highlighttwo: "In the footage, Venom moves around in his liquid form before turning into the solid monstrous creature players expect to see.",
//     Highlightthree: "The unreleased Venom footage has sparked debate among fans, with fans divided on its potential and some gamers thinking the concept was cooler than the final product.",
//     paraone: "An Insomniac Games developer has shared an unused piece of animation from Marvel's Spider-Man 2 pertaining to the game's iconic antagonist, Venom. Despite not making it to the final version of Marvel's Spider-Man 2, fans are quite impressed with how good the animation is.",
//     paratwo: "With Venom having his own fan base far before the release of Marvel's Spider-Man 2, expectations were high for Insomniac Games' portrayal of the symbiote. The fact that the Marvel's Spider-Man 2 community was yearning to get more playtime as Venom speaks volumes about how fans feel about the game's take on the character. However, it seems like there was a slightly different variant of Venom which Insomniac Games had initially designed, and it has left fans in a dilemma.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/world-of-warcraft-the-war-within-alpha-hallowfall-dynamic-lighting-beledar.avif",
//     title: "WORLD OF WARCRAFT",
//     subTitle: "New World of Warcraft: The War Within Zone Has Incredible Dynamic Environment Effect",
//     description: "Weather and dynamic lighting have appeared in World of Warcraft, but a new environmental effect in The War Within takes it to another level entirely.",
//     h: "Hallowfall in World of Warcraft: The War Within has a dazzling dynamic effect with Beledar, shifting between light and dark every three hours.",
//     Highlighttwo: " Beledar plays a significant role in the lore of the Arathi, transforming the entire underground zone of Hallowfall.",
//     Highlightthree: "Players were astonished by the stunning special effect of Beledar in WoW, increasing excitement for The War Within.",
//     paraone: "Hallowfall, one of the new zones in World of Warcraft: The War Within, has a stunning new dynamic environmental effect involving Beledar, the radiant star on the cave's roof. The crystal briefly shifts from light to dark and back again every three hours, transforming the entire World of Warcraft zone in the process.",
//     paratwo: "The War Within, World of Warcraft's next expansion after Dragonflight, takes place on Khaz Algar, a new island with four new zones, three of which are underground. The third zone players visit in The War Within is Hallowfall, a massive underground region lit by the light of Beledar, a bright crystal jutting out from the ceiling of the cavern that is central to the culture of the Arathi who live there.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/spider-man-2-peter-strange-detail-miles.avif",
//     title: "Spider-Man 2",
//     subTitle: "SPIDER-MAN 2 Players Point Out Weird Peter Parker Oversight",
//     description: "Spider-Man 2 players notice a strange and somewhat out-of-character gameplay detail that comes up whenever they aren't playing Peter Parker.",
//     h: " Players notice Peter missing as an AI companion in combat while controlling Miles Morales in Spider-Man 2.",
//     Highlighttwo: "The game allows the Spider-heroes to team up occasionally during missions, despite no co-op multiplayer option.",
//     Highlightthree: " Some speculate Peter's absence as an AI companion is due to his faith in Miles' abilities as a superhero in the game's story.",
//     paraone: "Some Marvel’s Spider-Man 2 fans have started pointing out that Peter Parker is missing as an AI companion in combat when the player is controlling Miles Morales. Spider-Man 2 gives gamers two crime-fighting Spider-heroes for the price of one, with Peter returning from the first game and Miles now a fully-fledged web-slinger following his starring role in the 2020 spin-off Spider-Man: Miles Morales.",
//     paratwo: "While Spider-Man 2 doesn’t offer any kind of co-op multiplayer gameplay, it does allow the two Spideys to team up on occasion to take down the criminals of New York City. During certain story missions and free-roaming combat sections, players will sometimes bump into the Spider-Man that they aren’t controlling, who will assist them as an AI companion in battle. This isn’t limited to just Peter or Miles either, as Peter’s former police ally Yuriko Watanabe will sometimes show up to help under her vigilante persona Wraith.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/red-denuvo-logo-with-prohibited-emoji-sign-over-letter-o-on-building-square-display-static-from-persona-5-royal.avif",
//     title: "PERSONA 5 ROYAL",
//     subTitle: "Denuvo Outage Makes Hit Single-Player Game Unplayable",
//     description: "A major Denuvo server outage leaves an extremely popular single-player game temporarily unplayable, angering fans in the process.",
//     h: " A Denuvo server outage rendered the PC version of Persona 5 Royal unplayable on May 2.",
//     Highlighttwo: "A partial workaround allowed Steam users to access the game without online functionality, but most didn't use it, with the game's concurrent player count consequently plummeting from 16,600 to just over 600.",
//     Highlightthree: "The outage lasted for hours, angering fans in the process.",
//     paraone: "The PC version of Persona 5 Royal has been rendered temporarily unplayable in early May due to a major Denuvo server outage. While a partial workaround allowed fans to circumvent the issue and access the game with some features disabled, this turn of events still angered many Persona 5 Royal players.",
//     paratwo: "The definitive edition of Atlus's 2016 RPG has been a long-time hit among PC gamers, as underlined by the fact that the Steam version of Persona 5 Royal has been consistently averaging thousands of concurrent players since its late 2022 debut. The game had a significant popularity spike in late April, doubling its daily concurrent player peak to 25,000, after a 60% discount saw it drop to its lowest-ever price of $23.99 on Valve's storefront.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/helldivers-2-hulk-flamethrower-automaton.avif",
//     title: "HELLDIVERS 2",
//     subTitle: "Helldivers 2 Devs Having 'Internal Discussions' About Account Linking Controversy",
//     description: "A Helldivers 2 community manager reveals developers are holding internal discussions regarding the PSN and Steam account linking controversy.",
//     h: "The developers of Helldivers 2 are discussing the controversial account-linking requirements for Steam players after intense backlash from the community.",
//     Highlighttwo: " Players were encouraged by the game's Discord community manager to voice their opinions through negative reviews and refund requests, as doing so gives the developers leverage while negotiating with Sony for a compromise.",
//     Highlightthree: "The uproar led to Sony quietly changing its PSN FAQs, while Arrowhead Game Studios considers alternative solutions to the issue.",
//     paraone: "Helldivers 2 developers are reportedly holding internal discussions regarding its controversial PlayStation Network account linking requirements for Steam players. The Helldivers 2 community was caught in a fiery meltdown after Arrowhead Game Studios announced plans to enforce its account-linking measures months after the game was released, with players quickly flooding online forums and servers demanding an explanation from both the developers and publisher.",
//     paratwo: "In contrast to the overwhelmingly positive reception it received in the weeks following its February launch, Helldivers 2 has seen unprecedented levels of contempt in recent days from its thousands of players, who were outraged by its plans to begin enforcing a rule stipulating that PC users will be required to link their Steam account to PSN after a month-long grace period. Many fans have protested against this decision, claiming the game's End-User License Agreement for Steam contained no clear mention of a PSN requirement. They additionally pointed out that PSN was only available in 69 countries and that, for players residing outside these territories, simply creating an account is already violating PSN's Terms of Service, which is a bannable offense.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/fallout-4-pip-boy-3000-mark-iv-in-game-first-boot-up-image.avif",
//     title: "FALLOUT",
//     subTitle: "Fallout Image Shows How Pip-Boy Designs Have Changed Throughout the Years",
//     description: "A Fallout fan shares how the series' eponymous wrist-worn computer, the Pip-Boy, has evolved over the years in the games and the TV series.",
//     h: "The Pip-Boy, a Fallout series staple, has seen multiple designs over the years, with revisions made by RobCo and Vault-Tec Industries.",
//     Highlighttwo: "Fans showcased different Pip-Boy designs on Reddit, including the rustic Pip-Boy 2000 and the Pip-Boy 2000 Mark VI.",
//     Highlightthree: " Fallout 4's Pip-Boy 3000 Mark IV had design changes that corrected previous errors, though many fans seem to love the Pip-Boy 2000 Mark VI design from Fallout 76 the most.",
//     paraone: "In the wake of renewed interest in the Fallout series, a fan put together a collage that showcased how the Pip-Boy device changed in its designs over the years. The Fallout fan shared five different versions of the Pip-Boy designs that are most commonly used throughout the series, and other fans commented about which designs were their favorites.",
//     paratwo: "The Pip-Boy is a wrist-mounted computer that has become a Fallout series staple. Also called the Personal Information Processor (PIP), the Pip-Boy was created by RobCo Industries, and later revisions were made by both RobCo and Vault-Tec Industries, the company behind the series' vaunted Vaults. However, the Pip-Boy is considered a pre-war device, meaning that in the year 2077 of the series, production would cease due to the world's destruction as a result of nuclear warfare. In the Fallout games, the Pip-Boy is used by players for a variety of purposes. Between checking inventory, viewing the map, playing holotapes, and maxing out the player's skills and statistics, the Pip-Boy has seen plenty of revisions over the years.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/eldenring-01-4k-1623357441326.avif",
//     title: "ELDEN RING",
//     subTitle: "Elden Ring Player Thinks They Found a Hidden Code on The Game's Map",
//     description: "A fan thinks they have inched closer to finding Elden Ring's last secret that Miyazaki spoke about, but the community is divided.",
//     h: "The discovery of a mysterious symbol in Elden Ring sparks speculation about it being a hidden code.",
//     Highlighttwo: " The tally mark symbol being found in two locations may hint at its significance, leaving some players eager to uncover what it means.",
//     Highlightthree: " However, the community seems divided on symbol's meaning, with theories ranging from it being leftover text to a piece of a larger puzzle.",
//     paraone: "An Elden Ring player has found a symbol on the game's map which could possibly be a hidden code, adding to the never-ending list of mysteries surrounding the franchise. What's more notable is the fact that the player found the same symbol in another location in Elden Ring, which further suggests that it could have a much larger significance.",
//     paratwo: "The release of Elden Ring's Shadow of the Erdtree DLC is barely a few weeks away, and the hype around it has ramped up significantly lately. The fact that FromSoftware revealed that Shadow of the Erdtree DLC will be the first and last expansion the game will ever receive has made it even more important to the fan base. Several players have been starting new playthroughs to prepare for the release, with many fine-tuning their builds to get their characters well-equipped for the Land of Shadow. As they progress through the game again, players might have another intriguing mystery to solve.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/destiny-2-void-titan.avif",
//     title: "DESTINY 2",
//     subTitle: "Destiny 2 is Revamping Shaders, But Players Aren't Sure How to Feel About It",
//     description: "Destiny 2 will see some significant upgrades made to shaders with The Final Shape expansion, though the changes may prove jarring to veteran players.",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   },
//   {
//     imageUrl: "./Img/newsdetails/call-of-duty-zombies-ray-gun-replica.avif",
//     title: "CALL OF DUTY ZOMBIES",
//     subTitle: "Call of Duty Zombies Fan Shows Off Custom Ray Gun Replica With Unique Features",
//     description: "A Call of Duty Zombies fan shows off an awesome replica of the iconic Ray Gun, which comes with a ton of unique features faithful to the games.",
//     h: " A replica Call of Duty Zombies Ray Gun by a fan features lights, sounds, and moving trigger to pay tribute to iconic weapon.",
//     Highlighttwo: " The original Ray Gun in-game has history dating back to Call of Duty: World at War, and was once the most powerful wonder weapon.",
//     Highlightthree: " Future versions of the replica Ray Gun will include laser pointer shooting feature.",
//     paraone: "A Call of Duty Zombies fan has shared their incredible replica of the Ray Gun, which has a few unique features that fans of the franchise might recognize. The Ray Gun in Call of Duty Zombies has been a staple of the game mode ever since its inception, and this replica is the perfect tribute.",
//     paratwo: "The history of the Ray Gun in Call of Duty Zombies dates all the way back to World at War. Back then, Zombies was unlocked for completing the campaign mode, and featured just a single map - Nacht der Untoten. The Ray Gun could only be found in the mystery box, and in the beginning, it was by far the most powerful weapon players could acquire. Now, this changed somewhat over the years, as Call of Duty Zombies continued to add even more wonder weapons, but the Ray Gun continued to be a powerful addition to any arsenal.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/baldurs-gate-3-wyll-mizora.avif",
//     title: "BALDUR'S GATE 3",
//     subTitle: "Baldur’s Gate 3 Player Discovers Clever Way To Kill Mizora Without Damning Wyll",
//     description: "A Baldur's Gate 3 player online shares a clever way that players are able to kill the Devil Mizora, without damning the companion, Wyll.",
//     h: " A clever player discovered a way to permanently kill Mizora without damning Wyll in Baldur's Gate 3.",
//     Highlighttwo: " The exploit involves draining Mizora's intelligence and casting specific spells.",
//     Highlightthree: "Wyll does not acknowledge Mizora's death due to the unintended glitch.",
//     paraone: "A Baldur’s Gate 3 player online has figured out a method to kill Mizora without damning Wyll to his fate. Previously, attempting to kill Mizora in Baldur’s Gate 3 could have dire consequences for the companion Wyll, although this player might have solved this problem for others.",
//     paratwo: "Throughout Baldur’s Gate 3, players are given many different choices. Every one of these choices has an impact on the game’s story and characters, so players must choose carefully in order to get their preferred Baldur’s Gate 3 ending. Wyll and Mizora are just two small parts of this story, but the choices players get to make surrounding these two characters are still a compelling part of the game’s overall narrative. But as mentioned, actions have consequences, and one player seems to have figured out a way to avoid this with Wyll and Mizora.",
//   },
//   {
//     imageUrl: "./Img/newsdetails/call-of-duty-4-main-menu-war-picture.avif",
//     title: "MODERN WARFARE 4",
//     subTitle: "Call of Duty Fan Notices Incredible Detail in The Original Modern Warfare",
//     description: "A Call of Duty fan online notices an amazing detail in the original Modern Warfare, that very few players will have ever seen before.",
//     h: "Call of Duty 4: Modern Warfare set the standard for FPS games back in 2007, impacting the genre to this day.",
//     Highlighttwo: " A real war photo bears striking resemblance to the game's main menu soldier.",
//     Highlightthree: "Despite its age, the game continues to reveal hidden secrets, keeping fans intrigued.",
//     paraone: "A Call of Duty 4: Modern Warfare player has noticed an incredible parallel with a real war photograph, that very few players will ever have noticed. Call of Duty 4: Modern Warfare is over 16 years old at this point, but that hasn’t stopped players from noticing new things about the classic title.",
//     paratwo: "It’s fair to describe Call of Duty 4: Modern Warfare as legendary. As one of the best FPS games of all time, it wrote the blueprint for the modern multiplayer shooter. Despite being released back in 2007, it perfected many elements of the Call of Duty formula, which can still be seen in the series to this day. A remaster of the game was also released in 2016, but it’s the original game that had all the cultural impact. It’s safe to say that without Call of Duty 4: Modern Warfare, the multiplayer shooter genre would look much different today, and not for the better.",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   },

//   // Add more news objects here if needed
// ];

// // Function to dynamically create news sections
// function createNewsSection(data) {
//   var newsSection = document.createElement("div");
//   newsSection.classList.add("part-one-news-sec");

//   var innerHTML = `
//       <div class="news-part-one">
//           <img src="${data.imageUrl}" alt="" class="news-part-oneimg">
//       </div>
//       <div class="news-part-two">
//           <div class="text-uppercase news-game-title">${data.title}</div>
//           <div class="text-uppercase news-game-title-two">${data.subTitle}</div>
//           <div class="news-game-discri">${data.description}</div>
//           <div class="btn-viewnews">
//               <button class="text-uppercase view-more-game">view more</button>
//           </div>
//       </div>
//   `;

//   newsSection.innerHTML = innerHTML;

//   // Add event listener to the button to navigate to newsdetails.html with encoded data
//   var viewMoreButton = newsSection.querySelector(".view-more-game");
//   viewMoreButton.addEventListener("click", function () {
//     var encodedData = btoa(JSON.stringify(data));
//     window.location.href =
//       "newsdetails.html?data=" + encodeURIComponent(encodedData);
//   });

//   return newsSection;
// }

// // Function to display news sections on the page
// function displayNews() {
//   var container = document.getElementById("news-container");

//   // Function to append news items to the container
//   function appendNews(newsItems) {
//     newsItems.forEach(function (news) {
//       var newsSection = createNewsSection(news);
//       container.insertBefore(newsSection, container.firstChild);
//     });
//   }

//   // Load the first batch of news items
//   appendNews(newsData.slice(0, 10));

//   // Create and append "Load More" button
//   var loadMoreButton = document.createElement("button");
//   loadMoreButton.textContent = "Load More";
//   loadMoreButton.classList.add("text-uppercase", "load-more-button");
//   container.appendChild(loadMoreButton);

//   // Add event listener to the "Load More" button
//   loadMoreButton.addEventListener("click", function () {
//     var nextBatch = newsData.slice(
//       container.children.length - 1,
//       container.children.length + 10
//     );
//     appendNews(nextBatch);

//     // Remove the "Load More" button if all news items have been displayed
//     if (container.children.length >= newsData.length) {
//       loadMoreButton.remove();
//     }
//   });
// }

// // Call the function to display news on page load
// displayNews();










// // for news section
// var newsData = [
//   {
//     imageUrl:
//       "./Img/newsdetails/helldivers-2-orbital-precision-strike-imprecise.jpg",
//     title: "HELLDIVERS 2",
//     subTitle: "Helldivers 2 Fan Points Out Stratagem Problem You Can't Unsee",
//     description:
//       "A Helldivers 2 fan uncovers a subtle error in the icon of a popular Stratagem, igniting community discussion and highlighting player dedication.",
//     h: "Fans are buzzing about how the icon for Helldivers 2's Orbital Precision Strike Stratagem is misaligned, sparking discussions within the community about attention to detail.",
//     Highlighttwo:
//       "Arrowhead Game Studios has addressed performance issues in Helldivers 2 with update 1.000.301 to enhance players' experience.",
//     Highlightthree:
//       "Players are active and invested in Helldivers 2, exploring new strategies and mysteries like the discovery of massive tunnels on Terminid planets.",
//     paraone:
//       "Helldivers 2 fans are buzzing about a new revelation: a keen-eyed player has spotted a subtle issue with the icon for one of the game's popular Stratagems, causing a stir within the community. Helldivers 2, developed by Arrowhead Game Studios, is a cooperative third-person shooter set in a dystopian future where players battle against alien forces on various planets. The game features a wide array of Stratagems, powerful abilities that players can deploy to aid them in combat, including the Orbital Precision Strike, which has gotten a lot of attention for its effectiveness in eliminating foes.",
//     paratwo:
//       "Arrowhead Game Studios has been maintaining the momentum of Helldivers 2 with update 1.000.301. The recent update addresses a range of performance issues and crashes reported by players following the previous update, 1.000.300. Despite its release several months ago, Helldivers 2 continues to attract new players due to Arrowhead Game Studios' commitment to regular content updates and bug fixes. Recent discussions even hint at potential new additions like a leaked plasma pistol, although such rumors are subject to verification.",
//   },
//  {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   }, {
//     imageUrl: "",
//     title: "",
//     subTitle: "",
//     description: "",
//     h: "",
//     Highlighttwo: "",
//     Highlightthree: "",
//     paraone: "",
//     paratwo: "",
//   },

//   // Add more news objects here if needed
// ];

// // Function to dynamically create news sections
// function createNewsSection(data) {
//   var newsSection = document.createElement("div");
//   newsSection.classList.add("part-one-news-sec");

//   var innerHTML = `
//       <div class="news-part-one">
//           <img src="${data.imageUrl}" alt="" class="news-part-oneimg">
//       </div>
//       <div class="news-part-two">
//           <div class="text-uppercase news-game-title">${data.title}</div>
//           <div class="text-uppercase news-game-title-two">${data.subTitle}</div>
//           <div class="news-game-discri">${data.description}</div>
//           <div class="btn-viewnews">
//               <button class="text-uppercase view-more-game">view more</button>
//           </div>
//       </div>
//   `;

//   newsSection.innerHTML = innerHTML;

//   // Add event listener to the button to navigate to newsdetails.html with encoded data
//   var viewMoreButton = newsSection.querySelector(".view-more-game");
//   viewMoreButton.addEventListener("click", function () {
//     var encodedData = btoa(JSON.stringify(data));
//     window.location.href =
//       "newsdetails.html?data=" + encodeURIComponent(encodedData);
//   });

//   return newsSection;
// }

// // Function to display news sections on the page
// function displayNews() {
//   var container = document.getElementById("news-container");

//   // Function to append news items to the container
//   function appendNews(newsItems) {
//     newsItems.forEach(function (news) {
//       var newsSection = createNewsSection(news);
//       container.insertBefore(newsSection, container.firstChild);
//     });
//   }

//   // Load the first batch of news items
//   appendNews(newsData.slice(0, 10));

//   // Create and append "Load More" button
//   var loadMoreButton = document.createElement("button");
//   loadMoreButton.textContent = "Load More";
//   loadMoreButton.classList.add("text-uppercase", "load-more-button");
//   container.appendChild(loadMoreButton);

//   // Add event listener to the "Load More" button
//   loadMoreButton.addEventListener("click", function () {
//     var nextBatch = newsData.slice(
//       container.children.length - 1,
//       container.children.length + 10
//     );
//     appendNews(nextBatch);

//     // Remove the "Load More" button if all news items have been displayed
//     if (container.children.length >= newsData.length) {
//       loadMoreButton.remove();
//     }
//   });
// }

// // Call the function to display news on page load
// displayNews();

// Define an array containing news data
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
        h: "The Pip-Boy, a Fallout series staple, has seen multiple designs over the years, with revisions made by RobCo and Vault-Tec Industries.",
        Highlighttwo: "Fans showcased different Pip-Boy designs on Reddit, including the rustic Pip-Boy 2000 and the Pip-Boy 2000 Mark VI.",
        Highlightthree: " Fallout 4's Pip-Boy 3000 Mark IV had design changes that corrected previous errors, though many fans seem to love the Pip-Boy 2000 Mark VI design from Fallout 76 the most.",
        paraone: "In the wake of renewed interest in the Fallout series, a fan put together a collage that showcased how the Pip-Boy device changed in its designs over the years. The Fallout fan shared five different versions of the Pip-Boy designs that are most commonly used throughout the series, and other fans commented about which designs were their favorites.",
        paratwo: "The Pip-Boy is a wrist-mounted computer that has become a Fallout series staple. Also called the Personal Information Processor (PIP), the Pip-Boy was created by RobCo Industries, and later revisions were made by both RobCo and Vault-Tec Industries, the company behind the series' vaunted Vaults. However, the Pip-Boy is considered a pre-war device, meaning that in the year 2077 of the series, production would cease due to the world's destruction as a result of nuclear warfare. In the Fallout games, the Pip-Boy is used by players for a variety of purposes. Between checking inventory, viewing the map, playing holotapes, and maxing out the player's skills and statistics, the Pip-Boy has seen plenty of revisions over the years.",
      },
      {
        imageUrl: "./Img/newsdetails/eldenring-01-4k-1623357441326.avif",
        title: "ELDEN RING",
        subTitle: "Elden Ring Player Thinks They Found a Hidden Code on The Game's Map",
        description: "A fan thinks they have inched closer to finding Elden Ring's last secret that Miyazaki spoke about, but the community is divided.",
        h: "The discovery of a mysterious symbol in Elden Ring sparks speculation about it being a hidden code.",
        Highlighttwo: " The tally mark symbol being found in two locations may hint at its significance, leaving some players eager to uncover what it means.",
        Highlightthree: " However, the community seems divided on symbol's meaning, with theories ranging from it being leftover text to a piece of a larger puzzle.",
        paraone: "An Elden Ring player has found a symbol on the game's map which could possibly be a hidden code, adding to the never-ending list of mysteries surrounding the franchise. What's more notable is the fact that the player found the same symbol in another location in Elden Ring, which further suggests that it could have a much larger significance.",
        paratwo: "The release of Elden Ring's Shadow of the Erdtree DLC is barely a few weeks away, and the hype around it has ramped up significantly lately. The fact that FromSoftware revealed that Shadow of the Erdtree DLC will be the first and last expansion the game will ever receive has made it even more important to the fan base. Several players have been starting new playthroughs to prepare for the release, with many fine-tuning their builds to get their characters well-equipped for the Land of Shadow. As they progress through the game again, players might have another intriguing mystery to solve.",
      },
      {
        imageUrl: "./Img/newsdetails/destiny-2-void-titan.avif",
        title: "DESTINY 2",
        subTitle: "Destiny 2 is Revamping Shaders, But Players Aren't Sure How to Feel About It",
        description: "Destiny 2 will see some significant upgrades made to shaders with The Final Shape expansion, though the changes may prove jarring to veteran players.",
        h: "",
        Highlighttwo: "",
        Highlightthree: "",
        paraone: "",
        paratwo: "",
      },
      {
        imageUrl: "./Img/newsdetails/call-of-duty-zombies-ray-gun-replica.avif",
        title: "CALL OF DUTY ZOMBIES",
        subTitle: "Call of Duty Zombies Fan Shows Off Custom Ray Gun Replica With Unique Features",
        description: "A Call of Duty Zombies fan shows off an awesome replica of the iconic Ray Gun, which comes with a ton of unique features faithful to the games.",
        h: " A replica Call of Duty Zombies Ray Gun by a fan features lights, sounds, and moving trigger to pay tribute to iconic weapon.",
        Highlighttwo: " The original Ray Gun in-game has history dating back to Call of Duty: World at War, and was once the most powerful wonder weapon.",
        Highlightthree: " Future versions of the replica Ray Gun will include laser pointer shooting feature.",
        paraone: "A Call of Duty Zombies fan has shared their incredible replica of the Ray Gun, which has a few unique features that fans of the franchise might recognize. The Ray Gun in Call of Duty Zombies has been a staple of the game mode ever since its inception, and this replica is the perfect tribute.",
        paratwo: "The history of the Ray Gun in Call of Duty Zombies dates all the way back to World at War. Back then, Zombies was unlocked for completing the campaign mode, and featured just a single map - Nacht der Untoten. The Ray Gun could only be found in the mystery box, and in the beginning, it was by far the most powerful weapon players could acquire. Now, this changed somewhat over the years, as Call of Duty Zombies continued to add even more wonder weapons, but the Ray Gun continued to be a powerful addition to any arsenal.",
      },
      {
        imageUrl: "./Img/newsdetails/baldurs-gate-3-wyll-mizora.avif",
        title: "BALDUR'S GATE 3",
        subTitle: "Baldur’s Gate 3 Player Discovers Clever Way To Kill Mizora Without Damning Wyll",
        description: "A Baldur's Gate 3 player online shares a clever way that players are able to kill the Devil Mizora, without damning the companion, Wyll.",
        h: " A clever player discovered a way to permanently kill Mizora without damning Wyll in Baldur's Gate 3.",
        Highlighttwo: " The exploit involves draining Mizora's intelligence and casting specific spells.",
        Highlightthree: "Wyll does not acknowledge Mizora's death due to the unintended glitch.",
        paraone: "A Baldur’s Gate 3 player online has figured out a method to kill Mizora without damning Wyll to his fate. Previously, attempting to kill Mizora in Baldur’s Gate 3 could have dire consequences for the companion Wyll, although this player might have solved this problem for others.",
        paratwo: "Throughout Baldur’s Gate 3, players are given many different choices. Every one of these choices has an impact on the game’s story and characters, so players must choose carefully in order to get their preferred Baldur’s Gate 3 ending. Wyll and Mizora are just two small parts of this story, but the choices players get to make surrounding these two characters are still a compelling part of the game’s overall narrative. But as mentioned, actions have consequences, and one player seems to have figured out a way to avoid this with Wyll and Mizora.",
      },
      {
        imageUrl: "./Img/newsdetails/call-of-duty-4-main-menu-war-picture.avif",
        title: "MODERN WARFARE 4",
        subTitle: "Call of Duty Fan Notices Incredible Detail in The Original Modern Warfare",
        description: "A Call of Duty fan online notices an amazing detail in the original Modern Warfare, that very few players will have ever seen before.",
        h: "Call of Duty 4: Modern Warfare set the standard for FPS games back in 2007, impacting the genre to this day.",
        Highlighttwo: " A real war photo bears striking resemblance to the game's main menu soldier.",
        Highlightthree: "Despite its age, the game continues to reveal hidden secrets, keeping fans intrigued.",
        paraone: "A Call of Duty 4: Modern Warfare player has noticed an incredible parallel with a real war photograph, that very few players will ever have noticed. Call of Duty 4: Modern Warfare is over 16 years old at this point, but that hasn’t stopped players from noticing new things about the classic title.",
        paratwo: "It’s fair to describe Call of Duty 4: Modern Warfare as legendary. As one of the best FPS games of all time, it wrote the blueprint for the modern multiplayer shooter. Despite being released back in 2007, it perfected many elements of the Call of Duty formula, which can still be seen in the series to this day. A remaster of the game was also released in 2016, but it’s the original game that had all the cultural impact. It’s safe to say that without Call of Duty 4: Modern Warfare, the multiplayer shooter genre would look much different today, and not for the better.",
      }, {
        imageUrl: "",
        title: "FORTNITE",
        subTitle: "Survey Hints at Massive Upgrade for Fortnite Crew",
        description: "An Epic Games survey suggests that the developer is considering a major upgrade for Fortnite's Crew subscription to come in the future.",
        h: " Epic Games is considering expanding the scope of Fortnite's \"Crew\" monthly subscription, according to a recent survey from the developer.",
        Highlighttwo: "The survey suggests that Epic Games is floating the idea of adding both the LEGO Pass for LEGO Fortnite and the Festival Pass for Fortnite Festival to the Crew service's offerings.",
        Highlightthree: "Fortnite Crew already includes a plethora of perks with subscriptions, including Premium Battle Pass access, exclusive cosmetics, and 1,000 V-Bucks per month.",
        paraone: "A new survey from Epic Games related to Fortnite's Crew subscription suggests that the developer is considering a major upgrade to the service. The massively popular battle royale from Epic Games offers players a wide variety of ways to pick up its wealth of in-game cosmetics, regularly adding plenty of new skins, pickaxes, and more. Alongside the in-game store, Fortnite's many Battle Passes offer incentives for playing the game, with LEGO Fortnite and Fortnite Festival also boasting their own battle pass. Now, Epic Games is considering a major change to the Crew subscription.",
        paratwo: "Aside from Fortnite's rotating battle passes, \"Fortnite Crew\" offers special rewards for players looking to get more out of the battle royale. Fortnite's Crew subscription gifts players with an exclusive \"Crew Pack\" at the start of every month, featuring skins and cosmetics only available through the service. A Crew subscription also grants full access to Fortnite's ongoing Battle Pass, as well as 1,000 V-Bucks per month for players to spend in Fortnite's in-game shop. A newly rolled-out survey could now be hinting at even more perks to come for Crew subscribers.",
      }, {
        imageUrl: "",
        title: "FINAL FANTASY XIV",
        subTitle: "Final Fantasy 14 Hit With DDoS Attack",
        description: "Malicious actors target the Final Fantasy 14 servers with a DDoS attack, disrupting players of the critically-acclaimed MMORPG in the process.",
        h: " Final Fantasy 14 is being hit by a DDoS attack, causing disruptions for players. It may be best to avoid logging in until the issue is resolved.",
        Highlighttwo: "The highly anticipated Dawntrail expansion for Final Fantasy 14 is set to release soon, attracting players back to the game.",
        Highlightthree: "There have been reports of DDoS attacks on multiple FF14 servers worldwide, including Japan and Oceania. The game's developers are aware of the issue and actively working to fix it.",
        paraone: "Final Fantasy 14 is currently being targeted by a DDoS attack, causing disruption to fans attempting to play the game. Until it is resolved, Final Fantasy 14 players may want to hold off on attempting to log into the critically-acclaimed MMORPG.",
        paratwo: "It is no exaggeration to say Final Fantasy 14 is one of the biggest MMORPGs on the market. The game developers are currently putting the finishing touches on Dawntrail, meaning players are starting to flock back to the game to prepare for the new expansion’s impending release.",
      }, {
        imageUrl: "",
        title: "HALO 2",
        subTitle: "Halo 2 Record Beaten by Nintendo Gamers After 14 Years",
        description: "Several Nintendo fans have beaten a record previously held by Halo 2 players after playing on Wii U and 3DS servers beyond their scheduled shutdown.",
        h: " Nintendo fans surpass 14-year-old Halo 2 record by playing online after servers shut down for Wii U and 3DS.",
        Highlighttwo: " Gamers are still playing 28 days after shutdown, showcasing dedication to beloved games.",
        Highlightthree: " Community support and preservation projects keep the spirit of Nintendo games alive long after official support ends.",
        paraone: "Nintendo gamers on Wii U and 3DS have beaten a 14-year-old Halo 2 record by playing online after the scheduled shutdown date for the system’s servers. These Nintendo fans surpassed the previous record set by Halo 2 fans, who continued playing for 25 days after the servers were scheduled to be shut down. Like the Nintendo fans today, the Halo fans found that they were able to play well beyond the shut-down date, as long as they kept playing.",
        paratwo: "On April 8th, 2024, almost exactly 14 years after the original Xbox servers went down, Nintendo discontinued Wii U and 3DS servers for players worldwide. This came just over a year after Nintendo closed the eShops for both systems. However, it is still possible for players who still have the Poke Transporter and Pokemon Bank to use their services to transfer Pokemon between games to the Switch via Pokemon Home.",
      }, {
        imageUrl: "",
        title: "RESIDENT EVIL",
        subTitle: "Rumor: Resident Evil 9 Setting Leaked",
        description: "A reputable Capcom insider spills the beans on Resident Evil 9's setting, which potentially mirrors one of the series' best.",
        h: " A leaker claims that Resident Evil 9 will be set on a Southeast Asian island inspired by Singapore and have players explore a rural town.",
        Highlighttwo: " Recent rumors hint at the upcoming game boasting an open-world format and Chris Redfield as the protagonist.",
        Highlightthree: " Resident Evil 9 may see an official reveal soon during a summer game showcase, with an alleged release window of January 2025.",
        paraone: "A credible leaker has revealed that Resident Evil 9 will be set on a Singapore-inspired island in the Southeast Asian Sea. There has been a bevy of rumors surrounding the next entry in the Resident Evil series lately, and this is potentially one of the most significant.",
        paratwo: "After the launch of Resident Evil Village in 2021, fans had many questions about where the franchise would take them next. Resident Evil games are a staple among Capcom's library of IPs, and the incredible success of the 2023 Resident Evil 4 remake proves that even after 28 years, demand for the survival-horror series has never been stronger. Resident Evil 9 has been heavily rumored to be next, and it's supposedly the largest and most ambitious entry in the franchise to date, but the question of where it will take place has long been ruminated among fans.",
      }, {
        imageUrl: "",
        title: "SKYRIM",
        subTitle: "Hilarious Skyrim Clip Shows Why Players Should Never Open a Book While Slow Time is In Effect",
        description: "A Skyrim player tries to open a book while using Slow Time, hilariously demonstrating why the two don't exactly mix that well.",
        h: "The Slow Time shout in Skyrim can turn simple tasks like opening a book into a frustratingly slow experience.",
        Highlighttwo: "Despite being 14 years old, Skyrim still has a loyal fan base and new players discovering the game's rich fantasy world.",
        Highlightthree: " LocksmithIII717's hilarious clip serves as a reminder of Slow Time's downside and the importance of timing in Skyrim.",
        paraone: "A hilarious clip shows a Skyrim player trying to open a book while affected by a Slow Time shout, and it doesn't go well. When it comes to Shouts in Skyrim, each has its own unique effects, but this clip serves as a great reminder to not search through anything too important when using Slow Time.",
        paratwo: "It's been almost 13 years since Skyrim first launched, and it still offers plenty of reasons to continue discussing the game. Skyrim has built a loyal fan base since its release, while new players are still experiencing the game for the first time. Bethesda offers a rich fantasy world with Skyrim, and there are many abilities players can harness. Some of these powers are implemented through Shouts in Skyrim, which are phrases in dragon language that hold great power. Slow Time is a Shout that, as the name suggests, slows down time, and one player had an unfortunate reminder that this power isn't always helpful.",
      }, {
        imageUrl: "",
        title: "POKEMON GO",
        subTitle: "Studio That Helped Work on Controversial Pokemon GO Avatars Hit With Layoffs",
        description: "The support studio that helped work on the updated avatar system for Pokemon GO was recently affected with a new round of layoffs.",
        h: "Layoffs at Very Very Spaceship impacted producers, recruiters, and character artists, leaving the exact number affected unknown.",
        Highlighttwo: "Very Very Spaceship recently worked on the controversial Pokemon GO Avatars.",
        Highlightthree: "The studio is also believed to be working on a game of its own.",
        paraone: "Seattle-based Pokemon GO support studio Very Very Spaceship was hit with layoffs, shortly after developing the controversial avatars for the game's Rediscover GO update. Although the Pokemon GO update aimed to improve features and visuals in the game, many players in the community were upset with the direction that was taken with the revamped avatars.",
        paratwo: "The lasting appeal of the Pokemon franchise means Pokemon GO is quite active in its eighth year of operations, with new events and Pokemon to discover on a regular basis. Pokemon GO developer Niantic is hard at work releasing new updates for Pokemon GO this year, which includes the Rediscover GO series of updates. The Rediscover GO campaign implemented new visual updates, improved avatar features, in-game map improvements, and much more to bring a fresh experience to returning players. However, fans were not happy with the appearance of the revamped Pokemon GO avatars following the update's release in April.",
      }, {
        imageUrl: "",
        title: "LEGO Star Wars",
        subTitle: "LEGO Star Wars Cal Kestis Minifigure Confirmed",
        description: "LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer",
        h: " LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer set, with a release date set for August 1.",
        Highlighttwo: " LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer set, with a release date set for August 1.",
        Highlightthree: " The set will include a lightsaber and character stand for Cal, alongside other iconic Star Wars characters.",
        paraone: "The previously hinted-at LEGO Star Wars minifigure of Star Wars Jedi: Survivor protagonist Cal Kestis has finally been confirmed as part of an upcoming Imperial Star Destroyer set. While the popular LEGO Star Wars line has primarily focused on the Star Wars movies and shows, there have been sets and minifigures based on the numerous video games over the years. In addition to collectible versions of famous Star Wars gaming characters like Starkiller and Darth Malek, the lovable BD-1 from Star Wars Jedi: Fallen Order had a model based on it back in 2022.",
        paratwo: "Rumor had it that Cal Kestis would be joining his faithful droid counterpart as a LEGO minifigure, and it was believed that he would be packaged with a Death Star set released to commemorate the LEGO Star Wars line’s 25th anniversary. This would later be supported by Cal’s appearance in a recent LEGO Star Wars promotional video, in which he and BD-1 dived in to help Saw Gerrera and the crew of the Ghost from Star Wars Rebels battle Imperial Stormtroopers before joining the other plastic heroes of the Galaxy Far, Far Away for a group photo.",
      }, {
        imageUrl: "",
        title: "ELDEN RING",
        subTitle: "Elden Ring Player Spots Neat Real-World Reference on a Shield",
        description: "An Elden Ring player discovers that a symbol featured in one of the critically acclaimed RPG's shields has a real-life counterpart.",
        h: "Elden Ring's Beast Crest Heater Shield carries symbols resembling real-life heraldry.",
        Highlighttwo: " The Lion Rampant symbol found on the shield ties back to historical kingdoms worldwide, adding depth to Elden Ring's lore and worldbuilding.",
        Highlightthree: "Director Miyazaki drew inspiration from various game for Elden Ring, which in turn were inspired by various mythologies.",
        paraone: "An Elden Ring player discovered that a symbol featured on one of the critically acclaimed RPG's shields possibly has a real-life counterpart. FromSoftware revealed in the past that while its latest work did not take inspiration from one game in particular, the studio was influenced by titles based on various mythologies.",
        paratwo: "Much like other Soulsborne games, 2022's Elden Ring offers a wide assortment of weapons and equipment that players can use as they journey through the vast, dangerous realm of The Lands Between. Among these is the Beast Crest Heater Shield, a Strength-scaling piece of gear that can be found in the game's starting region of Limgrave. One Elden Ring player has realized that the icon inscribed on the shield resembles the heraldry of one of their country's former kingdoms.",
      }, {
        imageUrl: "",
        title: "DESTINY 2",
        subTitle: "Call of Duty Skin Has Destiny 2 Fans Calling For a Stasis Armor Set",
        description: "Destiny 2 fans call for a Stasis-themed armor set after a perfect-looking one shows up in a completely different game: Call of Duty.",
        h: "Destiny 2 fans crave a Stasis armor set inspired by a Call of Duty skin.",
        Highlighttwo: " The Call of Duty Godzilla x Kong Shimo skin ignited excitement among Destiny 2 players, sparking requests for custom Stasis-themed armor.",
        Highlightthree: " Selling cosmetic items like skins in live-service games like Fortnite, Call of Duty, and Destiny 2 ensures fair gameplay without pay-to-win accusations.",
        paraone: "A joking post about a recently released Call of Duty skin has Destiny 2 fans calling on Bungie to release some custom cosmetics in a similar vein. The new skin found in Call of Duty just so happens to look perfectly suited to be an armor set based on the Destiny 2 Stasis subclass.",
        paratwo: "Most modern live-service games, including major titles like Fortnite, Call of Duty, and Destiny 2, make much of their revenue from selling cosmetic items like skins and accessories. This is in part because charging money for things with more concrete impacts on a player's gameplay experience would quickly give rise to accusations that a game is pay-to-win, with players able to essentially buy advantages that give them a leg up on their opponents. Cosmetic items and skins also open up the possibility of entertaining and appealing crossovers with other brands. Call of Duty has been part of the crossover trend for years, announcing and releasing crossover cosmetic packs based on Warhammer, Dune, and Godzilla x Kong: The New Empire.",
      }, {
        imageUrl: "",
        title: "RED DEAD REDEMPTION 2",
        subTitle: "Red Dead Redemption 2 Fan Turns The Game's Soundtrack Into a Cassette",
        description: "A Red Dead Redemption 2 fan has transformed the game's soundtrack into a nostalgic cassette tape, celebrating the game's immersive experience.",
        h: "Red Dead Redemption 2 fans showcase creativity by turning iconic soundtrack into physical cassette tape.",
        Highlighttwo: "Community members express love for game through fan art, cosplay, and innovative projects like these.",
        Highlightthree: " Immersive world and attention to detail in Red Dead Redemption 2 set new standard in environmental storytelling.",
        paraone: "A Red Dead Redemption 2 player celebrated the game's soundtrack by transforming it into a cassette tape. Red Dead Redemption 2, an open-world action-adventure game developed by Rockstar Games, takes players on a journey through the rugged landscapes of the American Wild West. Released in 2018, the game received critical acclaim for its compelling narrative, immersive gameplay, and beautifully crafted world.",
        paratwo: "The Red Dead Redemption 2 community is known for its creativity and passion for the game. From complex fan art to detailed cosplay, fans frequently find unique ways to express their love for the virtual world created by Rockstar Games. Red Dead Redemption 2's immersive world and attention to detail set a new standard for environmental storytelling in open-world games. The game's vast and dynamic landscape serves as both a backdrop for the narrative and a character in its own right, with every corner of the map teeming with life and activity.",
      }, {
        imageUrl: "",
        title: "MINECRAFT",
        subTitle: "Minecraft Fan Comes Up With Brilliant Loading Screen Idea",
        description: "A Minecraft fan has a clever idea that Mojang could use to add a bit of entertainment value to a loading screen in their hit sandbox game.",
        h: "Minecraft fans continue to share creative ideas to enhance the game, like turning loading screens into interactive mini-games.",
        Highlighttwo: " The Armored Paws update brought long-requested additions, like armadillos and wolf armor, to the beloved sandbox game. It also added an armadillo loading screen that players think would be perfect for a Chrome-like mini-game.",
        Highlightthree: "Adding a mini game to Minecraft's loading screen could make wait times more enjoyable, turning a typical (albeit brief) annoyance into fun.",
        paraone: "A Minecraft player comes up with an ingenious idea to add some flair to the newly-updated loading screens in the game's PC launcher and make them more bearable to wait through. Though the ideas they have may not always be acknowledged by Mojang, Minecraft fans continue to share interesting concepts on how to make the beloved sandbox game even better.",
        paratwo: "Over the 13 years since its initial 1.0 release, Minecraft has received consistent update after update, many of which have added major features and overhauled core aspects of the game for the better. Just recently, in fact, Mojang released a content drop for Minecraft titled the Armored Paws update, which brought a number of long-requested additions to the blocky survival game. The Armored Paws \"drop,\" as Mojang called it, added the 2023 Mob Vote winner, armadillos, to the game, in addition to wolf armor and new regional wolf variants. One small feature that wasn't mentioned in the patch notes for the update, however, was the inclusion of a new, armadillo-themed loading screen for the Java Edition Minecraft launcher on PC. Having seen this new addition, a creative Minecraft player came up with an idea to take this simple loading screen to the next level.",
      }, {
        imageUrl: "",
        title: "CALL OF DUTY: WARZONE",
        subTitle: "Entertaining Call of Duty: Warzone Clip Proves That Kind Acts Can Pay Off",
        description: "An entertaining Call of Duty: Warzone clip highlights one way that kind acts in the competitive battle royale can still pay off at times.",
        h: " Warzone players engaging in kind acts can lead to unexpected and entertaining moments.",
        Highlighttwo: " For instance, one player recently shared a self-revive with an enemy they downed in a solo match, before the player went on to return the favor.",
        Highlightthree: "With many Warzone players being out for themselves, especially in solos, moments like this are as rare as they are fun.",
        paraone: "An entertaining Call of Duty: Warzone clip shows two players exchanging Self-Revive kits after downing each other. Since Call of Duty: Warzone was released, some unexpected occurrences have taken place, and this one shows that kind acts can still pay off.",
        paratwo: "call of Duty: Warzone received proximity chat a few years back, which resulted in some hilarious and unique moments. Some of the infamous proximity chat clips include gamers teaming up to gain an advantage, whispering to each other to act sneaky, and utilizing deceptive language to access some easy loot. While proximity chat is used by fewer players now, Warzone is still full of entertaining moments. The Self-revive is typically used by players who have been shot down to return to life and potentially come back and win the game. One gamer has exchanged a Self-Revive with a player they defeated only to get it back after the stranger defeats them, with both players communicating without the use of proximity chat.",
      },
      , {
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
    window.location.href = "newsdetails.html?data=" + encodeURIComponent(encodedData);
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
      container.insertBefore(newsSection, container.lastChild.nextSibling); // Append news below existing ones
    });
  }

  // Load the first batch of news items
  appendNews(newsData.slice(0, 5));

  // Create and append "Load More" button
  var loadMoreButton = document.createElement("button");
  loadMoreButton.textContent = "Load More";
  loadMoreButton.classList.add("text-uppercase", "load-more-button");
  container.appendChild(loadMoreButton);

  // Add event listener to the "Load More" button
  loadMoreButton.addEventListener("click", function () {
    var nextBatch = newsData.slice(container.children.length - 1, container.children.length + 10);
    appendNews(nextBatch);

    // Remove the "Load More" button if all news items have been displayed
    if (container.children.length >= newsData.length) {
      loadMoreButton.remove();
    } else {
      container.appendChild(loadMoreButton); // Ensure load more button is at the bottom
    }
  });
}

// Call the function to display news on page load
displayNews();
