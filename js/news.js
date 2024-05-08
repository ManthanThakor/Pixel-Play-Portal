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
        h: "Destiny 2 fans crave a Stasis armor set inspired by a Call of Duty skin.",
        Highlighttwo: "The Call of Duty Godzilla x Kong Shimo skin ignited excitement among Destiny 2 players, sparking requests for custom Stasis-themed armor.",
        Highlightthree: " Selling cosmetic items like skins in live-service games like Fortnite, Call of Duty, and Destiny 2 ensures fair gameplay without pay-to-win accusations.",
        paraone: "A joking post about a recently released Call of Duty skin has Destiny 2 fans calling on Bungie to release some custom cosmetics in a similar vein. The new skin found in Call of Duty just so happens to look perfectly suited to be an armor set based on the Destiny 2 Stasis subclass.",
        paratwo: "Most modern live-service games, including major titles like Fortnite, Call of Duty, and Destiny 2, make much of their revenue from selling cosmetic items like skins and accessories. This is in part because charging money for things with more concrete impacts on a player's gameplay experience would quickly give rise to accusations that a game is pay-to-win, with players able to essentially buy advantages that give them a leg up on their opponents. Cosmetic items and skins also open up the possibility of entertaining and appealing crossovers with other brands. Call of Duty has been part of the crossover trend for years, announcing and releasing crossover cosmetic packs based on Warhammer, Dune, and Godzilla x Kong: The New Empire.",
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
        imageUrl: "./Img/newsdetailstwo/fortnite-crew-promotional-visual-v-bucks-battle-pass.avif",
        title: "FORTNITE",
        subTitle: "Survey Hints at Massive Upgrade for Fortnite Crew",
        description: "An Epic Games survey suggests that the developer is considering a major upgrade for Fortnite's Crew subscription to come in the future.",
        h: " Epic Games is considering expanding the scope of Fortnite's \"Crew\" monthly subscription, according to a recent survey from the developer.",
        Highlighttwo: "The survey suggests that Epic Games is floating the idea of adding both the LEGO Pass for LEGO Fortnite and the Festival Pass for Fortnite Festival to the Crew service's offerings.",
        Highlightthree: "Fortnite Crew already includes a plethora of perks with subscriptions, including Premium Battle Pass access, exclusive cosmetics, and 1,000 V-Bucks per month.",
        paraone: "A new survey from Epic Games related to Fortnite's Crew subscription suggests that the developer is considering a major upgrade to the service. The massively popular battle royale from Epic Games offers players a wide variety of ways to pick up its wealth of in-game cosmetics, regularly adding plenty of new skins, pickaxes, and more. Alongside the in-game store, Fortnite's many Battle Passes offer incentives for playing the game, with LEGO Fortnite and Fortnite Festival also boasting their own battle pass. Now, Epic Games is considering a major change to the Crew subscription.",
        paratwo: "Aside from Fortnite's rotating battle passes, \"Fortnite Crew\" offers special rewards for players looking to get more out of the battle royale. Fortnite's Crew subscription gifts players with an exclusive \"Crew Pack\" at the start of every month, featuring skins and cosmetics only available through the service. A Crew subscription also grants full access to Fortnite's ongoing Battle Pass, as well as 1,000 V-Bucks per month for players to spend in Fortnite's in-game shop. A newly rolled-out survey could now be hinting at even more perks to come for Crew subscribers.",
      }, {
        imageUrl: "./Img/newsdetailstwo/final-fantasy-14-ddos-attack.avif",
        title: "FINAL FANTASY XIV",
        subTitle: "Final Fantasy 14 Hit With DDoS Attack",
        description: "Malicious actors target the Final Fantasy 14 servers with a DDoS attack, disrupting players of the critically-acclaimed MMORPG in the process.",
        h: " Final Fantasy 14 is being hit by a DDoS attack, causing disruptions for players. It may be best to avoid logging in until the issue is resolved.",
        Highlighttwo: "The highly anticipated Dawntrail expansion for Final Fantasy 14 is set to release soon, attracting players back to the game.",
        Highlightthree: "There have been reports of DDoS attacks on multiple FF14 servers worldwide, including Japan and Oceania. The game's developers are aware of the issue and actively working to fix it.",
        paraone: "Final Fantasy 14 is currently being targeted by a DDoS attack, causing disruption to fans attempting to play the game. Until it is resolved, Final Fantasy 14 players may want to hold off on attempting to log into the critically-acclaimed MMORPG.",
        paratwo: "It is no exaggeration to say Final Fantasy 14 is one of the biggest MMORPGs on the market. The game developers are currently putting the finishing touches on Dawntrail, meaning players are starting to flock back to the game to prepare for the new expansion’s impending release.",
      }, {
        imageUrl: "./Img/newsdetailstwo/halo-2-3ds-and-wii-u.avif",
        title: "HALO 2",
        subTitle: "Halo 2 Record Beaten by Nintendo Gamers After 14 Years",
        description: "Several Nintendo fans have beaten a record previously held by Halo 2 players after playing on Wii U and 3DS servers beyond their scheduled shutdown.",
        h: " Nintendo fans surpass 14-year-old Halo 2 record by playing online after servers shut down for Wii U and 3DS.",
        Highlighttwo: " Gamers are still playing 28 days after shutdown, showcasing dedication to beloved games.",
        Highlightthree: " Community support and preservation projects keep the spirit of Nintendo games alive long after official support ends.",
        paraone: "Nintendo gamers on Wii U and 3DS have beaten a 14-year-old Halo 2 record by playing online after the scheduled shutdown date for the system’s servers. These Nintendo fans surpassed the previous record set by Halo 2 fans, who continued playing for 25 days after the servers were scheduled to be shut down. Like the Nintendo fans today, the Halo fans found that they were able to play well beyond the shut-down date, as long as they kept playing.",
        paratwo: "On April 8th, 2024, almost exactly 14 years after the original Xbox servers went down, Nintendo discontinued Wii U and 3DS servers for players worldwide. This came just over a year after Nintendo closed the eShops for both systems. However, it is still possible for players who still have the Poke Transporter and Pokemon Bank to use their services to transfer Pokemon between games to the Switch via Pokemon Home.",
      }, {
        imageUrl: "./Img/newsdetailstwo/red-dead-redemption-2-poster-rockstar.avif",
        title: "RESIDENT EVIL",
        subTitle: "Rumor: Resident Evil 9 Setting Leaked",
        description: "A reputable Capcom insider spills the beans on Resident Evil 9's setting, which potentially mirrors one of the series' best.",
        h: " A leaker claims that Resident Evil 9 will be set on a Southeast Asian island inspired by Singapore and have players explore a rural town.",
        Highlighttwo: " Recent rumors hint at the upcoming game boasting an open-world format and Chris Redfield as the protagonist.",
        Highlightthree: " Resident Evil 9 may see an official reveal soon during a summer game showcase, with an alleged release window of January 2025.",
        paraone: "A credible leaker has revealed that Resident Evil 9 will be set on a Singapore-inspired island in the Southeast Asian Sea. There has been a bevy of rumors surrounding the next entry in the Resident Evil series lately, and this is potentially one of the most significant.",
        paratwo: "After the launch of Resident Evil Village in 2021, fans had many questions about where the franchise would take them next. Resident Evil games are a staple among Capcom's library of IPs, and the incredible success of the 2023 Resident Evil 4 remake proves that even after 28 years, demand for the survival-horror series has never been stronger. Resident Evil 9 has been heavily rumored to be next, and it's supposedly the largest and most ambitious entry in the franchise to date, but the question of where it will take place has long been ruminated among fans.",
      }, {
        imageUrl: "./Img/newsdetailstwo/skyrim-bethesda-fighting-dragon.avif",
        title: "SKYRIM",
        subTitle: "Hilarious Skyrim Clip Shows Why Players Should Never Open a Book While Slow Time is In Effect",
        description: "A Skyrim player tries to open a book while using Slow Time, hilariously demonstrating why the two don't exactly mix that well.",
        h: "The Slow Time shout in Skyrim can turn simple tasks like opening a book into a frustratingly slow experience.",
        Highlighttwo: "Despite being 14 years old, Skyrim still has a loyal fan base and new players discovering the game's rich fantasy world.",
        Highlightthree: " LocksmithIII717's hilarious clip serves as a reminder of Slow Time's downside and the importance of timing in Skyrim.",
        paraone: "A hilarious clip shows a Skyrim player trying to open a book while affected by a Slow Time shout, and it doesn't go well. When it comes to Shouts in Skyrim, each has its own unique effects, but this clip serves as a great reminder to not search through anything too important when using Slow Time.",
        paratwo: "It's been almost 13 years since Skyrim first launched, and it still offers plenty of reasons to continue discussing the game. Skyrim has built a loyal fan base since its release, while new players are still experiencing the game for the first time. Bethesda offers a rich fantasy world with Skyrim, and there are many abilities players can harness. Some of these powers are implemented through Shouts in Skyrim, which are phrases in dragon language that hold great power. Slow Time is a Shout that, as the name suggests, slows down time, and one player had an unfortunate reminder that this power isn't always helpful.",
      }, {
        imageUrl: "./Img/newsdetailstwo/pokemon-go-studio-layoffs.avif",
        title: "POKEMON GO",
        subTitle: "Studio That Helped Work on Controversial Pokemon GO Avatars Hit With Layoffs",
        description: "The support studio that helped work on the updated avatar system for Pokemon GO was recently affected with a new round of layoffs.",
        h: "Layoffs at Very Very Spaceship impacted producers, recruiters, and character artists, leaving the exact number affected unknown.",
        Highlighttwo: "Very Very Spaceship recently worked on the controversial Pokemon GO Avatars.",
        Highlightthree: "The studio is also believed to be working on a game of its own.",
        paraone: "Seattle-based Pokemon GO support studio Very Very Spaceship was hit with layoffs, shortly after developing the controversial avatars for the game's Rediscover GO update. Although the Pokemon GO update aimed to improve features and visuals in the game, many players in the community were upset with the direction that was taken with the revamped avatars.",
        paratwo: "The lasting appeal of the Pokemon franchise means Pokemon GO is quite active in its eighth year of operations, with new events and Pokemon to discover on a regular basis. Pokemon GO developer Niantic is hard at work releasing new updates for Pokemon GO this year, which includes the Rediscover GO series of updates. The Rediscover GO campaign implemented new visual updates, improved avatar features, in-game map improvements, and much more to bring a fresh experience to returning players. However, fans were not happy with the appearance of the revamped Pokemon GO avatars following the update's release in April.",
      }, {
        imageUrl: "./Img/newsdetailstwo/lego-star-wars-cal-kestis-minifigure-confirmed.avif",
        title: "LEGO Star Wars",
        subTitle: "LEGO Star Wars Cal Kestis Minifigure Confirmed",
        description: "LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer",
        h: " LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer set, with a release date set for August 1.",
        Highlighttwo: " LEGO has confirmed the Cal Kestis minifigure in a new Star Destroyer set, with a release date set for August 1.",
        Highlightthree: " The set will include a lightsaber and character stand for Cal, alongside other iconic Star Wars characters.",
        paraone: "The previously hinted-at LEGO Star Wars minifigure of Star Wars Jedi: Survivor protagonist Cal Kestis has finally been confirmed as part of an upcoming Imperial Star Destroyer set. While the popular LEGO Star Wars line has primarily focused on the Star Wars movies and shows, there have been sets and minifigures based on the numerous video games over the years. In addition to collectible versions of famous Star Wars gaming characters like Starkiller and Darth Malek, the lovable BD-1 from Star Wars Jedi: Fallen Order had a model based on it back in 2022.",
        paratwo: "Rumor had it that Cal Kestis would be joining his faithful droid counterpart as a LEGO minifigure, and it was believed that he would be packaged with a Death Star set released to commemorate the LEGO Star Wars line’s 25th anniversary. This would later be supported by Cal’s appearance in a recent LEGO Star Wars promotional video, in which he and BD-1 dived in to help Saw Gerrera and the crew of the Ghost from Star Wars Rebels battle Imperial Stormtroopers before joining the other plastic heroes of the Galaxy Far, Far Away for a group photo.",
      }, {
        imageUrl: "./Img/newsdetailstwo/elden-ring-screenshot.avif",
        title: "ELDEN RING",
        subTitle: "Elden Ring Player Spots Neat Real-World Reference on a Shield",
        description: "An Elden Ring player discovers that a symbol featured in one of the critically acclaimed RPG's shields has a real-life counterpart.",
        h: "Elden Ring's Beast Crest Heater Shield carries symbols resembling real-life heraldry.",
        Highlighttwo: " The Lion Rampant symbol found on the shield ties back to historical kingdoms worldwide, adding depth to Elden Ring's lore and worldbuilding.",
        Highlightthree: "Director Miyazaki drew inspiration from various game for Elden Ring, which in turn were inspired by various mythologies.",
        paraone: "An Elden Ring player discovered that a symbol featured on one of the critically acclaimed RPG's shields possibly has a real-life counterpart. FromSoftware revealed in the past that while its latest work did not take inspiration from one game in particular, the studio was influenced by titles based on various mythologies.",
        paratwo: "Much like other Soulsborne games, 2022's Elden Ring offers a wide assortment of weapons and equipment that players can use as they journey through the vast, dangerous realm of The Lands Between. Among these is the Beast Crest Heater Shield, a Strength-scaling piece of gear that can be found in the game's starting region of Limgrave. One Elden Ring player has realized that the icon inscribed on the shield resembles the heraldry of one of their country's former kingdoms.",
      }, {
        imageUrl: "./Img/newsdetailstwo/destiny-2-stasis-characters.avif",
        title: "DESTINY 2",
        subTitle: "Call of Duty Skin Has Destiny 2 Fans Calling For a Stasis Armor Set",
        description: "Destiny 2 fans call for a Stasis-themed armor set after a perfect-looking one shows up in a completely different game: Call of Duty.",
        h: "Destiny 2 fans crave a Stasis armor set inspired by a Call of Duty skin.",
        Highlighttwo: " The Call of Duty Godzilla x Kong Shimo skin ignited excitement among Destiny 2 players, sparking requests for custom Stasis-themed armor.",
        Highlightthree: " Selling cosmetic items like skins in live-service games like Fortnite, Call of Duty, and Destiny 2 ensures fair gameplay without pay-to-win accusations.",
        paraone: "A joking post about a recently released Call of Duty skin has Destiny 2 fans calling on Bungie to release some custom cosmetics in a similar vein. The new skin found in Call of Duty just so happens to look perfectly suited to be an armor set based on the Destiny 2 Stasis subclass.",
        paratwo: "Most modern live-service games, including major titles like Fortnite, Call of Duty, and Destiny 2, make much of their revenue from selling cosmetic items like skins and accessories. This is in part because charging money for things with more concrete impacts on a player's gameplay experience would quickly give rise to accusations that a game is pay-to-win, with players able to essentially buy advantages that give them a leg up on their opponents. Cosmetic items and skins also open up the possibility of entertaining and appealing crossovers with other brands. Call of Duty has been part of the crossover trend for years, announcing and releasing crossover cosmetic packs based on Warhammer, Dune, and Godzilla x Kong: The New Empire.",
      }, {
        imageUrl: "./Img/newsdetailstwo/red-dead-redemption-2-poster-rockstar.avif",
        title: "RED DEAD REDEMPTION 2",
        subTitle: "Red Dead Redemption 2 Fan Turns The Game's Soundtrack Into a Cassette",
        description: "A Red Dead Redemption 2 fan has transformed the game's soundtrack into a nostalgic cassette tape, celebrating the game's immersive experience.",
        h: "Red Dead Redemption 2 fans showcase creativity by turning iconic soundtrack into physical cassette tape.",
        Highlighttwo: "Community members express love for game through fan art, cosplay, and innovative projects like these.",
        Highlightthree: " Immersive world and attention to detail in Red Dead Redemption 2 set new standard in environmental storytelling.",
        paraone: "A Red Dead Redemption 2 player celebrated the game's soundtrack by transforming it into a cassette tape. Red Dead Redemption 2, an open-world action-adventure game developed by Rockstar Games, takes players on a journey through the rugged landscapes of the American Wild West. Released in 2018, the game received critical acclaim for its compelling narrative, immersive gameplay, and beautifully crafted world.",
        paratwo: "The Red Dead Redemption 2 community is known for its creativity and passion for the game. From complex fan art to detailed cosplay, fans frequently find unique ways to express their love for the virtual world created by Rockstar Games. Red Dead Redemption 2's immersive world and attention to detail set a new standard for environmental storytelling in open-world games. The game's vast and dynamic landscape serves as both a backdrop for the narrative and a character in its own right, with every corner of the map teeming with life and activity.",
      }, {
        imageUrl: "./Img/newsdetailstwo/minecraft-brilliant-loading-screen-idea-1.avif",
        title: "MINECRAFT",
        subTitle: "Minecraft Fan Comes Up With Brilliant Loading Screen Idea",
        description: "A Minecraft fan has a clever idea that Mojang could use to add a bit of entertainment value to a loading screen in their hit sandbox game.",
        h: "Minecraft fans continue to share creative ideas to enhance the game, like turning loading screens into interactive mini-games.",
        Highlighttwo: " The Armored Paws update brought long-requested additions, like armadillos and wolf armor, to the beloved sandbox game. It also added an armadillo loading screen that players think would be perfect for a Chrome-like mini-game.",
        Highlightthree: "Adding a mini game to Minecraft's loading screen could make wait times more enjoyable, turning a typical (albeit brief) annoyance into fun.",
        paraone: "A Minecraft player comes up with an ingenious idea to add some flair to the newly-updated loading screens in the game's PC launcher and make them more bearable to wait through. Though the ideas they have may not always be acknowledged by Mojang, Minecraft fans continue to share interesting concepts on how to make the beloved sandbox game even better.",
        paratwo: "Over the 13 years since its initial 1.0 release, Minecraft has received consistent update after update, many of which have added major features and overhauled core aspects of the game for the better. Just recently, in fact, Mojang released a content drop for Minecraft titled the Armored Paws update, which brought a number of long-requested additions to the blocky survival game. The Armored Paws \"drop,\" as Mojang called it, added the 2023 Mob Vote winner, armadillos, to the game, in addition to wolf armor and new regional wolf variants. One small feature that wasn't mentioned in the patch notes for the update, however, was the inclusion of a new, armadillo-themed loading screen for the Java Edition Minecraft launcher on PC. Having seen this new addition, a creative Minecraft player came up with an idea to take this simple loading screen to the next level.",
      }, {
        imageUrl: "./Img/newsdetailstwo/call-of-duty-warzone-feature.avif",
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
        imageUrl: "./",
        title: "OVERWATCH 2",
        subTitle: "Overwatch 2 Fan Spots Bizarre Bug When Gold and Jade Guns Come Too Close to Each Other",
        description: "An Overwatch 2 fan highlights a bizarre bug that happens when Gold and Jade Guns come too close to each other.",
        h: " Overwatch 2 players discovered a bug that swaps Doomfist's Gold Gun to Jade when near another Jade Gun.",
        Highlighttwo: "This bug involves emotes and may require players on opposing teams to select the same character to replicate.",
        Highlightthree: "Golden and Jade weapons cost 3,000 Competitive Points, so the bug could be a useful way for players to see if they like Gold or Jade on a certain hero's weapon. It is ultimately harmless, so it will be interesting to see when it will be patched out.",
        paraone: "An Overwatch 2 fan has spotted a bizarre bug when their Doomfist Gold Gun changes color when coming into contact with a Jade Gun. Jade weapons were added to Overwatch 2 in Season 9, and this bug may be an easy way for players to access them.",
        paratwo: "As its predecessor had Golden Guns acquired by many players, Overwatch 2 implemented the same system in its early days. Players can purchase Golden weapons by spending 3,000 Competitive Points that are primarily accumulated by winning Competitive matches. Jade weapons are the next step of this system, and they cost the same amount of points. These Jade weapons were introduced in Season 9 and can be equipped to any hero. As Competitive Points are harder to acquire than Overwatch Coins, many players only have a couple of Golden or Jade weapons. However, one gamer has discovered an interesting bug that applies the Doomfist Jade weapon skin to their Gold gun.",
      },{
        imageUrl: "./",
        title: "POKEMON TCG",
        subTitle: "Alleged Real-Life Yakuza Member Arrested Over Pokemon Cards",
        description: "A Yakuza member gets arrested after stealing Pokemon cards, showing that crime involving Pokemon is more widespread than expected.",
        h: "Pokemon cards thefts are more common than one might think, with real-life Yakuza members involved in some cases in Japan.",
        Highlighttwo: "The Pokemon market is huge, with some cards reaching exorbitant prices.",
        Highlightthree: "Crimes involving Pokemon products are not limited to Japan, with thefts also occurring in places like California and Dallas in recent years.",
        paraone: "A real-life Yakuza member was arrested after stealing Pokemon cards in a break-in. Crimes involving Pokemon are more common and recurring than one might think.",
        paratwo: "As a media franchise, Pokemon has expanded beyond games to merchandise, TV, comics, and trading cards. There is a huge market for buying and selling Pokemon cards, with some Pokemon cards and boosters reaching exorbitant prices. However, this popularity has had some unfortunate side effects for aspiring card collectors.",
      },{
        imageUrl: "./",
        title: "DESTINY 2",
        subTitle: "Hilarious Destiny 2 Clips Capture an Awkward Onslaught Fail From Multiple Angles",
        description: "While playing the new Onslaught mode, some unlucky Destiny 2 players showcase what not to do when trying to work together as a team.",
        h: " Destiny 2 players fail hilariously at teamwork in Onslaught mode, falling to their deaths while attempting to cross platforms.",
        Highlighttwo: "The group's blunder occurred just before facing the final enemy wave in Onslaught, making the situation both funny and frustrating.",
        Highlightthree: "This clip serves as a reminder that even in intense challenges like Onslaught, teamwork mishaps can lead to unexpected outcomes.",
        paraone: "A series of hilarious Destiny 2 clips showcase a group of players failing at teamwork from different angles. While attempting to work together in Destiny 2's new Onslaught mode, the team's plan goes horribly wrong.",
        paratwo: "On April 9, Destiny 2 got an all-new mode with the introduction of Onslaught. The three-person horde mode pits teams of Guardians against oncoming waves of enemies while defending the ADU, adding a fun new challenge to the game. Onslaught can prove to be a petty intense challenge, so it can be frustrating when one makes it far into the match only to be eliminated. However, one particularly unfortunate group of players found themselves failing in a hilariously unexpected way.",
      },{
        imageUrl: "./",
        title: "FORTNITE",
        subTitle: "New Custom Fortnite Game Mode is Just Like Dead by Daylight",
        description: "An upcoming custom Fortnite mode sets out to combine the game with Dead by Daylight in an exciting new way to experience the game.",
        h: "Fortnite continues to evolve with custom modes like Survivors, inspired by Dead by Daylight's gameplay.",
        Highlighttwo: " Lemorion's creative mode in Fortnite Creative allows players to experience the 1v4 hunter-survivor dynamic.",
        Highlightthree: "The constantly changing nature of Fortnite Creative showcases the creativity and value the community brings to the game.",
        paraone: "A custom-made Fortnite mode brings Dead by Daylight's asymmetrical gameplay to Epic Games' popular title. The upcoming Fortnite mode takes clear inspiration from DbD.",
        paratwo: "Through the years, Fortnite has featured a variety of modes. From its Battle Royale to the more recent Fortnite Festival and LEGO Fortnite, Fortnite has become many games in one. Among these many different modes also lies Fortnite Creative. As the name implies, Fortnite Creative is a sandbox mode that gives players the chance to craft their own games and maps to share with the broader community, which has brought some great new experiences to life. One new creation is an intriguing take on Dead by Daylight's formula.",
      },{
        imageUrl: "./",
        title: "DEAD CELLS",
        subTitle: "Dead Cells Fan Creates Incredible Colored Pencil Drawing of The Beheaded",
        description: "A Dead Cells fan showcases their drawing skills by creating an incredible colored pencil design of The Beheaded, earning praise from the community.",
        h: " Dead Cells fans showcase talent with impressive colored pencil drawing of The Beheaded character, receiving praise from community.",
        Highlighttwo: " Dead Cells game offers dynamic experience with fast-paced combat, exploration, procedural generation, and standout features like fluid combat mechanics.",
        Highlightthree: " The Beheaded, main character of Dead Cells, is an amorphous humanoid creature with skull head, wielder of various weapons in the game lore.",
        paraone: "A talented Dead Cells fan has created an incredible colored pencil drawing of The Beheaded. The player then shared this rendition of the Dead Cells cover art with the community, receiving praise for their impressive artistic skills.",
        paratwo: "Dead Cells is a roguelike, metroidvania-inspired action game developed by Motion Twin and released in 2018. It blends fast-paced combat, exploration, and procedural generation, creating a dynamic experience where no two runs are the same. Players control a nameless protagonist, exploring interconnected levels filled with challenging enemies and environmental hazards. The game's standout features include fluid combat mechanics, a vast array of weapons and abilities, and a death mechanic that encourages continuous improvement through each playthrough. Dead Cells garnered extensive acclaim from players upon its release, earning itself a couple of awards in the process.",
      },{
        imageUrl: "./",
        title: "HONKAI: STAR RAIL",
        subTitle: "Honkai: Star Rail 2.2 Stages Give Away Light Cones and Relic Sets",
        description: "Honkai: Star Rail reveals new stages for the version 2.2 update, which provide players with unique Light Cones and relic sets.",
        h: " Version 2.2 of Honkai: Star Rail offers new relic sets, Light Cones, and characters like Boothill and Robin for players to claim.",
        Highlighttwo: " The upcoming Echo of War stage will introduce Dreamville Adventure Light Cone and Watchmaker Master of Dream Machinations relic sets.",
        Highlightthree: " Players can unlock new ascension materials like Countertemporal Shot and Meteoric Bullet in the Stagnant Shadow and Bud of the Hunt stages.",
        paraone: "Honkai: Star Rail players will unlock new relic sets and Light Cones by completing the Echo of War: Salutations of Ashen Dreams stage, which will arrive in version 2.2. Honkai: Star Rail's version 2.2 is now on the horizon, with the developers introducing new characters, Light Cones, and relics that will be available to claim soon. It's been revealed that Boothill and Robin will finally receive their debut banners in the next update, which will start on May 8.",
        paratwo: "Like previous updates, Honkai: Star Rail's 2.2 will be chock-full of content and mark the debut of some Penacony-based units like Robin and Boothill. Along with characters, the upcoming version will promote a pair of Light Cones, Sailing Towards A Second Life and Flowing Nightglow, which offer the wearer unique power-ups. Moreover, Honkai: Star Rail's 2.2 will see the return of several rerun units, such as Topaz and Fu Xuan.",
      },{
        imageUrl: "./",
        title: "HONKAI: STAR RAIL",
        subTitle: "Honkai: Star Rail Leak Details Firefly's Signature Light Cone",
        description: "A recent Honkai: Star Rail leak is teasing the signature Light Cone for upcoming character Firefly, detailing its stats and unique ability.",
        h: "Recent Honkai: Star Rail leaks are teasing the stats and unique ability for upcoming character Firefly's signature Light Cone.",
        Highlighttwo: " Firefly's Light Cone is expected to provide significant stat buffs to the wearer, with a unique effect that increases the wearer's Break Effect and debuffs enemies after breaking their weakness",
        Highlightthree: "Firefly's launch in Version 2.3 will come alongside another five-star character's debut in Jade, a Quantum element character in the Erudition path.",
        paraone: "A new leak from Honkai: Star Rail is detailing the signature Light Cone for upcoming five-star character Firefly, expected to release during Version 2.3. Honkai: Star Rail's Light Cones serve as one of the most effective ways of powering up a player's character, offering major stat boosts and unique effects. Each new character added to the sci-fi RPG typically comes with their own unique Light Cone for players to acquire, granting buffs catered to that character's abilities and strengths. Now, one of the game's upcoming characters is seeing their Light Cone surface early.",
        paratwo: "First appearing during the main story of Penacony, Firefly serves as one of Honkai: Star Rail's most highly-anticipated characters. She plays a major role throughout the story of Honkai: Star Rail's newest world, also serving as the centerpiece of one of Penacony's biggest plot twists. While fans have long speculated about her debut within Star Rail's roster, HoYoverse recently officially confirmed her release for Version 2.3 alongside fellow five-star character Jade. Now, details about Firefly's signature Light Cone have emerged ahead of her debut.",
      },{
        imageUrl: "./",
        title: "FALLOUT (TV SHOW)",
        subTitle: "Gamer Discovers Fallout-Themed Bus Stop",
        description: "A gamer discovers an elaborately-designed Fallout-themed bus stop that advertises Amazon Prime's critically-acclaimed Fallout TV show.",
        h: "Innovative marketing tactics like a Fallout-themed bus stop showcase Amazon's hefty investment in promoting the popular TV show worldwide.",
        Highlighttwo: "The recent live-action adaptation of Fallout is gaining critical acclaim for its faithful translation of the beloved franchise.",
        Highlightthree: " The Fallout TV show has been a massive success with 65 million viewers in just two weeks after its release.",
        paraone: "A gamer discovers a unique-looking Fallout-themed bus stop designed around Amazon's recently released live-action adaptation of the beloved video game franchise. The use of impressive marketing strategies like these goes to show just how much money Amazon pumped into promoting the Fallout TV show worldwide.",
        paratwo: "For decades, video game adaptations were often shunned by both film critics and gaming fanbases, due to the majority of them being rather low-quality. Lately, however, the tide has been turning in favor of fans, as a number of recent shows have garnered widespread critical acclaim for faithfully translating the worlds of beloved video game franchises to the silver screen. Cyberpunk: Edgerunners, HBO's The Last of Us, and Netflix's Arcane are perhaps the most notable examples of this, but Amazon's newly-released Fallout TV show is also climbing up the ranks of popularity and making a name for itself as one of the best video game adaptations ever made. In fact, a recent discovery that one fan of the series made proves just how much this particular show has managed to break into the mainstream.",
      },{
        imageUrl: "./",
        title: "MAGIC THE GATHERING",
        subTitle: "The Newest Magic: The Gathering Card is… Hatsune Miku?!",
        description: "Magic: The Gathering has had some great crossover expansions lately - and the latest and most surprising is with Japanese music \"idol\" Hatsune Miku.",
        h: "Magic: The Gathering continues to captivate fans with exciting new expansion packs, including a unique collaboration with Hatsune Miku.",
        Highlighttwo: " Hatsune Miku, a VOCALOID digital superstar, brings her electrifying energy to Magic cards in the upcoming crossover sets.",
        Highlightthree: " The Sakura Superstar expansion pack, featuring stunning artwork from around the world, will only be available for a limited time - don't miss out!",
        paraone: "While many card games come and go, one that has remained relevant for over two decades is Magic: The Gathering (herein, Magic). Magic has survived the test of time as both a physical and digital tabletop game, with fans that play around the world. One of the reasons it has managed to outlast other card games is that it has managed to stay interesting by adding new cards, including special crossover packs that draw from other popular media. These expansion sets especially keep players interested in the game, releasing them regularly and adding exciting new cards to the game.",
        paratwo: "On the official Wizards of the Coast website last week, the latest crossover expansion pack to release was revealed, and it was an exciting collaboration rather than original characters. Magic will be doing a special collaboration with VOCALOID Hatsune Miku, a famous and iconic Japanese character. Miku will be available on special cards in four upcoming expansion packs for Magic, each one with unique powers, special artwork, and specific themes.",
      },{
        imageUrl: "./",
        title: "GRAND THEFT AUTO 6",
        subTitle: "Potential GTA 6 Lead Actors Leak Online",
        description: "A newly surfaced rumor identifies two potential Grand Theft Auto 6 lead actors, one of whom is a new name not mentioned in any past leaks.",
        h: " A new rumor claims that American actor Dylan Rourke will portray the GTA 6 protagonist, Jason.",
        Highlighttwo: " The same rumor reinforces past fan speculation that Manni L. Perez is portraying the game's other protagonist, Lucia.",
        Highlightthree: " The same rumor reinforces past fan speculation that Manni L. Perez is portraying the game's other protagonist, Lucia.",
        paraone: "Manni L. Perez and Dylan Rourke may be the Grand Theft Auto 6 lead actors, according to a newly surfaced rumor. While Perez has long been speculated to portray Lucia, Rourke is a new name not mentioned in any past GTA 6 reports.",
        paratwo: "Game Rant has previously identified one Joseph Connors as one of the potential GTA 6 lead actors. That's according to Connors's now-removed online resume, which saw him disclose involvement in an unnamed Rockstar project slated for release in 2025. The CV stated that the actor had been hired in a \"lead\" role, suggesting he is either playing Jason or some other prominent character, like the game's main antagonist.",
      },{
        imageUrl: "./",
        title: "ELDEN RING",
        subTitle: "Elden Ring Fan Makes 3D Animated Band Based on The Game, And It's Absolutely Hilarious",
        description: "In a recently trending Reddit post, Elden Ring fans got to see some of the most annoying enemies form a quite eerie music band.",
        h: "Elden Ring fan creates boy band from game enemies in a viral animated video, showcasing their dedication and creativity within the community.",
        Highlighttwo: "The unique video features Elden Ring enemies playing instruments in a cyberpunk-style track, sparking positive feedback and nostalgia among fans.",
        Highlightthree: " Fans praise the creator for over 70 hours of work crafting music and 3D animation, surpassing the time required to complete the game's campaign.",
        paraone: "Elden Ring enthusiasts are accustomed to peculiar tales of players accomplishing the extraordinary within the game's realm. Yet, few anticipated the latest endeavor: the formation of an Elden Ring boy band by a fan. A video gaining traction on Reddit portrays an unusual scene wherein the Tarnished finds themselves encircled by a musical band featuring recognizable characters.",
        paratwo: "Since its launch in 2022, Elden Ring has consistently generated a slew of eyebrow-raising headlines. Whether it's rumored hidden code resurfacing or a player completing Elden Ring with a Soldier of Godrick Build, fans have grown accustomed to the unexpected. However, a recent 3D animated video depicting five Elden Ring enemies skillfully playing drums, bass guitar, and electric keyboard marks a particularly unique occurrence.",
      },{
        imageUrl: "./",
        title: "HELLDIVERS 2",
        subTitle: "Steam is Refunding Helldivers 2 Players Even if They Have More Than 2 Hours of Playtime",
        description: "Amid backlash, Steam grants Helldivers 2 refunds surpassing 2-hour limit, signaling significant discontent with PSN account linking mandate.",
        h: "Steam refunds Helldivers 2 players despite playtime limit, responding to outrage over mandatory PSN linking.",
        Highlighttwo: " The backlash has led to a drop in the game's user rating and an increase in refunds exceeding 2-hour limit, highlighting player discontent.",
        Highlightthree: " Concerns about potential bans for workarounds in regions without PSN access add complexity to the situation.",
        paraone: "Steam is making unexpected moves in the gaming world, refunding Helldivers 2 players despite their playtime exceeding the usual two-hour limit. Helldivers 2, developed by Arrowhead Game Studios, has been a popular multiplayer game on both PlayStation and PC platforms. However, recent controversies surrounding mandatory PlayStation Network (PSN) account linking for PC players have led to widespread discontent among the gaming community.",
        paratwo: "The announcement of a mandatory PSN account linking for PC players of Helldivers 2 from a message posted on social media by Sony through Arrowhead, and it has sparked outrage among the gaming community. Players are upset about the requirement, which they argue restricts access to the game for those residing in countries without access to PSN.",
      },{
        imageUrl: "./",
        title: "HALO 3",
        subTitle: "Hilarious Halo Clip Spotlights a Strange Elite Interaction",
        description: "A Halo 3 player online shares a bizarre interaction with an Elite, while playing through the campaign mission, 'The Covenant.'",
        h: " Halo 3's sandbox has produced many hilarious moments, with one player sharing a unique encounter with an Elite jumping to their doom.",
        Highlighttwo: " A player's bizarre interaction with an Elite in Halo 3 may be explained by a pathing glitch, adding to the game's quirky moments.",
        Highlightthree: " Halo 3's sandbox has produced many hilarious moments, with one player sharing a unique encounter with an Elite jumping to their doom.",
        paraone: "A Halo 3 player has shared their bizarre encounter with an Elite, while playing through the game's campaign. Halo 3's sandbox has produced a ton of hilarious moments over the years, and this one is definitely one of the most unique.",
        paratwo: "Released back in 2007, Halo 3 was one of the premier Xbox 360 exclusives back in the day. Bungie evolved the series formula further from Halo 2, producing a title that many gamers feel is the high point of the entire franchise. It was eventually re-released as part of Halo: The Master Chief Collection, bringing arguably one of the best multiplayer FPS games ever to Xbox One and PC. The standard it set back in 2007 is what all modern Halo titles continue to be compared to, a compliment to its incredible legacy.",
      },{
        imageUrl: "./",
        title: "FALLOUT 4",
        subTitle: "Fallout 4 Clip Shows Bizarre Cait Interaction",
        description: "A Fallout 4 player shares a clip highlighting the cage-fighting companion Cait following them from a distance in a notably bizarre way.",
        h: " Fallout 4 features 17 unique companions, including Cait, who can bring different gameplay experiences and react to player choices.",
        Highlighttwo: " Cait, a former cage fighter, is known for using various Chems in combat encounters, making her a valuable companion for players",
        Highlightthree: " A rare animation bug causes Cait and other NPCs in Fallout 4 to swim in midair, a glitch possibly linked to terrain pathing.",
        paraone: "A Fallout 4 player shares a clip in which Cait floats up to them as if she's swimming through the air. There are many Fallout 4 companions to choose from, and Cait has become a favorite with some players, but this may be the most bizarre thing that she's done.",
        paratwo: "There are 17 Fallout 4 companions, each with their own specialties and storytelling possibilities. As companions will approve or disapprove of a players actions, some incorporate certain ones into evil or good playthroughs. Cait becomes available as a companion after the Combat Zone near Boston Common is cleared and the player talks to Tommy Lonegan. The NPC has a background in cage fighting, and she will use Psycho, Jet, RadAway, and other Chems in encounters, making her particularly useful. One gamer has spotted Cait acting bizarrely as she follows them, swimming in midair rather than running to catch up.",
      },{
        imageUrl: "./",
        title: "DESTINY 2",
        subTitle: "Destiny 2 Fans Are Using The New Superblack Shader to Make Taken Guardians",
        description: "Creative Destiny 2 players are using the exclusive Superblack shader to create customized Guardian costumes inspired by the in-game Taken faction.",
        h: "Destiny 2 players are getting creative with Taken faction inspired costumes using the Superblack shader from the Into the light update.",
        Highlighttwo: "The update also introduced powerful weapons and customization options, with upcoming upgrades in The Final Shape expansion.",
        Highlightthree: " Reddit users Bluejay_leather and revadike showcased impressive Taken-themed Titan and Hunter armor arrangements using Superblack shader.",
        paraone: "Destiny 2 players with an eye for fashion are creating new customized Guardian costumes themed after the game's Taken faction. Key to the costumes is the Superblack color shader, one of the main prizes from the free Destiny 2 Into the Light update, which Bungie released to keep players engaged with the game as they wait for The Final Shape expansion to launch.",
        paratwo: "Destiny 2 has seen a surge of player activity since Bungie released the Destiny 2 Into the Light update early in April 2024. Along with the new Onslaught game mode, the update granted players access to some of the most powerful weapons in Destiny 2's history via the BRAVE Arsenal. The lineup of remastered and revamped weapons from previous years gave a major boost to nostalgic players, as well as opening up some much-requested options for player customization by unlocking the ability to change an existing character's facial appearance for the first time.",
      },{
        imageUrl: "./",
        title: "BORDERLANDS",
        subTitle: "Borderlands Movie Reveals Exciting New Poster",
        description: "The upcoming live-action Borderlands movie gets another exciting update with a brand-new poster, boosting fan hype ahead of the film's release.",
        h: "A new Borderlands movie poster reveals a colorful cast of characters.",
        Highlighttwo: "The film based on the popular video game series will introduce fans to an original story with iconic game characters in action.",
        Highlightthree: "The Borderlands movie aims to bring the fun-loving chaos of the series to life on the silver screen.",
        paraone: "Fans of the Borderlands franchise are getting another look at the upcoming live-action film with a new official poster, featuring a colorful cast of familiar characters. Since the first trailer for the Borderlands movie dropped back in March, announcements for the project have been quiet, but this latest glimpse at the cinematic video game adaptation is looking to reignite fan hype once more.",
        paratwo: "First announced back in 2015, the Borderlands movie began principal production in 2021 and underwent a series of re-shoots before entering the final stages of production in 2023. The film is based on the popular first-person shooter action RPG series and will include beloved characters and iconic locations from the video games. Despite mixed reactions to early announcements, many fans are excited to get another detailed look at the Borderlands film with the latest poster.",
      },{
        imageUrl: "./",
        title: "POKEMON",
        subTitle: "Pokemon TCG Fan Creates Impressive Mewtwo-Themed Card Holder",
        description: "A Pokemon fan creates an impressive Mewtwo card holder for their son that's suitable for Pokemon TCG and Magic: The Gathering cards.",
        h: "Fans can create personalized Pokemon-themed card holders using 3D printing, opening up new possibilities for unique projects.",
        Highlighttwo: " A user named RubDue1609 crafted a Mewtwo card holder for their son, with plans to create Pikachu and Eevee designs next.",
        Highlightthree: "Discussion is ongoing among fans on which Pokemon would make the best card holders, with suggestions ranging from Stakataka to Gengar.",
        paraone: "A Pokemon fan has created a Mewtwo card holder that's ideal for holding cards from The Pokemon Card Game or even Magic: The Gathering. The creative Pokemon idea has spurred a conversation about what kind of Pokemon would make the best card holder.",
        paratwo: "Dedicated Pokemon fans have been creating artwork in two and three dimensions since the series' inception in the '90s. However, with 3D printing having only become a relatively accessible hobby in fairly recent times, it's opened doors to creating all kinds of interesting Pokemon projects that would be difficult to bring to life in any other way. Whether fans are designing their own 3D printed Poke Balls from the ground up or making unique card holders, there's a lot of possibilities out there, and players have likely only just begun to scratch the surface.",
      },{
        imageUrl: "./",
        title: "Hawaiian Punch",
        subTitle: "Hawaiian Punch Drinkers Make Depressing Realization After 63 Years",
        description: "Longtime fans of the popular beverage Hawaiian Punch make a depressing realization that they're surprised they didn't notice sooner.",
        h: " Punchy, the Hawaiian Punch mascot, is actually wearing a hat, not red dreadlocks as many fans believed.",
        Highlighttwo: "Fans of the brand expressed shock upon realizing this long-standing misconception.",
        Highlightthree: "A TikTok post about Punchy's design sparked a wave of reactions online, showing the impact of childhood icons.",
        paraone: "A Hawaiian Punch drinker pointed out a noteworthy detail regarding the popular brand's mascot that led to many depressed reactions among longtime fans of the beverage. This marks yet another instance of a shocking realization shared on the internet about a childhood icon that, upon second glance, was painfully obvious all along.",
        paratwo: "The Hawaiian Punch beverage has been a big part of the childhoods of many people that grew up in the US for several decades at this point. Though the brand itself actually had its start in 1934, it wasn't until 1961 that Hawaiian Punch first brandished the famous surfboarding mascot, Punchy, that many have associated with it over the years. Despite the fact that the character managed to etch itself into the memories of many fruit punch-loving children throughout the mid-to-late 1900s and early 2000s, there's one aspect of Punchy's design that has left drinkers of the beverage a bit baffled. It's no wonder, then, that a recent discovery made by one fan regarding this particular facet of the mascot was met with shocked reactions online.",
      },{
        imageUrl: "./",
        title: "HONKAI: STAR RAIL",
        subTitle: "Honkai: Star Rail Fans Think They've Found a Secret Morse Code Message",
        description: "Honkai: Star Rail's latest Robin trailer allegedly has Morse code in it, which a fan deciphers and finds a troubling message.",
        h: "A Honkai: Star Rail fan discovered a hidden Morse code in Robin's latest trailer. The upcoming 5-star Physical Preservation character will soon become playable with the release of Honkai: Star Rail Version 2.2.",
        Highlighttwo: "A Honkai: Star Rail fan discovered a hidden Morse code in Robin's latest trailer. The upcoming 5-star Physical Preservation character will soon become playable with the release of Honkai: Star Rail Version 2.2.",
        Highlightthree: "A Honkai: Star Rail fan discovered a hidden Morse code in Robin's latest trailer. The upcoming 5-star Physical Preservation character will soon become playable with the release of Honkai: Star Rail Version 2.2.",
        paraone: "Robin first appeared in Honkai: Star Rail Version 2.0, when she and her older brother Sunday welcomed the Astral Express Crew to Penacony. She is a famous singer who's performed on different planets across the cosmos, and is scheduled to perform in Penacony's Charmony Festival. However, the festivities become dark when Robin is found murdered in the Dreamscape at the end of Version 2.0's story.",
        paratwo: "There are still many mysteries left unsolved in Honkai: Star Rail's Penacony arc, and one of them is whether Robin's alive or not. Many Honkai: Star Rail fans believe she's in trouble after watching Robin's music video-style trailer titled \"Sway To My Beat,\" which showed glimpses of dark entities and the singer being trapped in a cage. One fan, aetheronarson2, also claimed they heard faint beeping in the trailer, which could be Morse code translating to \"SOS,\" or a call for help.",
      },{
        imageUrl: "./",
        title: "OBSIDIAN ENTERTAINMENT",
        subTitle: "Fallout: New Vegas Developer Working on 'Cross-Platform RPG'",
        description: "Obsidian Entertainment, the studio behind hit games like Fallout: New Vegas, is seemingly working on a 'cross-platform RPG.'",
        h: "Obsidian Entertainment is working on a cross-platform RPG using Unreal Engine.",
        Highlighttwo: " Xbox-published games like Grounded have been released on PlayStation and Nintendo, hinting at a multi-platform future releases.",
        Highlightthree: "Obsidian is currently working on Avowed and The Outer Worlds 2.",
        paraone: "Fallout: New Vegas developer Obsidian Entertainment is seemingly working on a \"cross-platform RPG\" built using Unreal Engine. Obsidian Entertainment was founded over 20 years ago and has gone on to develop some of the most popular and iconic RPGs of all time. Obsidian was acquired by Microsoft in 2018, and since then, the studio has continued to release critically-acclaimed work.",
        paratwo: "Obsidian's first Xbox-published game was the survival game Grounded, a title that combines typical survival game elements with a Honey, I Shrunk the Kids premise. Grounded was followed up by the narrative-driven RPG Pentiment, which released to rave reviews in 2022. Action-RPG Avowed is next up for Obsidian, with the highly-anticipated game expected to launch later this year for PC and Xbox Series X/S.",
      },{
        imageUrl: "./",
        title: "HADES 2",
        subTitle: "Hades 2 Passes Major Player Milestone in Less Than 24 Hours",
        description: "Less than 24 hours after releasing into early access, Hades 2 has already surpassed a major player milestone set by its predecessor.",
        h: " Hades 2 on Steam has already doubled the original game's peak players, breaking the record in less than 24 hours.",
        Highlighttwo: " After 9 hours, Hades 2 reached 79,276 concurrent players, a number which has only continued to grow since.",
        Highlightthree: " Hades 2 Early Access release sees massive success, promising updates and full experience by end of year.",
        paraone: "Less than 24 hours after launching on Steam, the early access version of Hades 2 has already doubled the all-time peak concurrent player account set by the original Hades. While Supergiant Games certainly found success with its earlier titles like Bastion, Pyre, and Transistor, the studio really took off after it released the roguelike action title, Hades. Although Hades was originally an Epic Games store exclusive, it eventually launched on Steam a year later in 2019 through Early access, releasing Version 1.0 on September 17, before eventually launching across most other platforms like the Switch, PlayStation, and Xbox consoles.",
        paratwo: "Following its release, Hades quickly went on to receive universal acclaim from players and critics alike, earning countless awards and becoming a massive hit for Supergiant Games. However, many began to wonder what was next for the studio, who had established a firm track record of not developing sequels and instead changing genres for new games. As it turns out, Supergiant revealed it is breaking with tradition during the Game Awards 2022 by announcing Hades 2, a sequel to its hit game. The excitement from fans was made clear upon its release into Early Access, as a new milestone has already been broken.",
      },{
        imageUrl: "./",
        title: "THE LEGEND OF ZELDA: TEARS OF THE KINGDOM",
        subTitle: "Rumor: Nintendo Could Have a Surprise for Zelda: Tears of the Kingdom’s First Anniversary",
        description: "To celebrate the upcoming first anniversary of Tears of the Kingdom, Nintendo is reportedly planning on giving fans a surprise.",
        h: " Nintendo reportedly planning a surprise for Zelda Tears of the Kingdom fans to commemorate its first anniversary in May.",
        Highlighttwo: " Fans might get to rediscover the game's music with the rumored release of an official soundtrack by Nippon Columbia in Japan.",
        Highlightthree: " While Nintendo hasn’t confirmed these rumors yet, Nippon Columbia made a similar announcement in 2018 for the first anniversary of Breath of the Wild.",
        paraone: "As Zelda: Tears of the Kingdom will celebrate its first anniversary this May, Nintendo is allegedly planning a surprise for fans to mark the occasion. While Nintendo didn’t have any big plans for The Legend of Zelda 35th anniversary, the company will still give fans a little surprise to commemorate the first year of Tears of the Kingdom.",
        paratwo: "The Legend of Zelda: Tears of the Kingdom came out on May 12, 2023. It continued the adventures of Link and Zelda following the events of 2017’s Breath of the Wild and introduced new mechanics to the series, such as the ability to fuse elements and build vehicles. Tears of the Kingdom was a massive commercial success, selling over 10 million copies three days after its release. This latest installment in The Legend of Zelda series quickly became one of the best-selling games on Nintendo Switch, with fans sharing their adventures across Hyrule and the custom vehicles they built to roam through this land.",
      },{
        imageUrl: "./",
        title: "GENSHIN IMPACT",
        subTitle: "Genshin Impact Leak Hints at Arlecchino Changes in 4.7",
        description: "A new Genshin Impact leak reveals that Arlecchino could receive some changes in Version 4.7, regarding her energy particle generation.",
        h: " Arlecchino in Genshin Impact is getting a cooldown increase in Version 4.7, affecting her particle generation during gameplay.",
        Highlighttwo: " Fans speculate the change is in preparation for a new domain coming in the update, potentially altering Arlecchino's playstyle.",
        Highlightthree: "Arlecchino excels as a main DPS character, and players should consider using her with Crimson Moon's Semblance weapon for optimal performance.",
        paraone: "A new Genshin Impact leak reveals an interesting change to Arlecchino that should go live in the upcoming Version 4.7. Arlecchino was introduced to the game in the first phase of the current update 4.6 alongside another five-star Pyro user, Fontaine's famous magician Lyney.",
        paratwo: "Since her first appearance two years ago in the \"A Winter Night's Lazzo\" trailer, Arlecchino has been one of the most anticipated Genshin Impact characters in the community, especially since she was confirmed to be the fourth Fatui Harbinger. So far, Arlecchino has played the role of the main villain in the Fontaine storyline.",
      },{
        imageUrl: "./",
        title: "POKEMON",
        subTitle: "Pokemon Fan Creates Regional Variant for Remoraid",
        description: "A talented artist creates an adorable regional variant of the Water-type Pokemon Remoraid and shares the original concept online.",
        h: " Lemoraid, a Fairy/Water type Pokemon variant, was created as a fun challenge and will be featured in a new fan-made original region.",
        Highlighttwo: " Lemoraid, a Fairy/Water type Pokemon variant, was created as a fun challenge and will be featured in a new fan-made original region.",
        Highlightthree: "A talented fan also designed a Water/Steel Octillery variant, giving a fresh look to these classic Pokemon.",
        paraone: "A Pokemon fan created a regional variant of Remoraid and shared the original concept online. Remoraid can become an Octillery upon reaching level 25, and it is also required for a Mantyke to evolve into Mantine.",
        paratwo: "Introduced in Pokemon's second generation, Remoraid is a Water-type that appears to be a hybrid between an archerfish and a remora, the latter of which may have been its English namesake. The piscine creature has also been described as being shaped like a gun, with its pelvic and dorsal fins positioned like a trigger and front sight, respectively. One artist has come up with a new variant of Remoraid, giving the Pokemon a more adorable design.",
      },{
        imageUrl: "./",
        title: "HONKAI: STAR RAIL",
        subTitle: "Honkai: Star Rail Trailer Showcases New Character Robin in Music Video Style",
        description: "Honkai: Star Rail releases a new music video trailer featuring the upcoming five-star Harmony user Robin, who is scheduled to arrive in Version 2.2.",
        h: " HoYoverse has released a new video showcasing Robin in a style that simulates a music video, a fitting presentation given the character's status as a popular singer in Honkai: Star Rail.",
        Highlighttwo: " New five-star characters Robin and Boothill will be coming to Honkai: Star Rail 2.2, each bringing unique abilities to the game.",
        Highlightthree: " Robin's kit focuses on supporting her party with buffs and a powerful Ultimate ability, Vox Harmonique, boosting ATK for all teammates.",
        paraone: "A new Honkai: Star Rail trailer features the upcoming five-star character Robin in a music video-style presentation. The recently held live stream event has already confirmed that Robin will be featured in the first phase of the new Version 2.2 alongside Topaz, who is going to receive her first banner re-run.",
        paratwo: "Robin won't be the only new five-star Honkai: Star Rail character in 2.2, as HoYoverse also confirmed the arrival of the new DPS known as Boothill. This character will be featured in the second banner phase, which will also include the popular five-star Quantum user Fu Xuan.",
      },{
        imageUrl: "./",
        title: "REMEDY ENTERTAINMENT",
        subTitle: "Remedy Cancels One of Its Upcoming Multiplayer Games",
        description: "Remedy Entertainment shares bad news with fans looking forward to a premium multiplayer game that was previously announced to be in development.",
        h: "Remedy Entertainment has cancelled the multiplayer co-op game Kestrel to focus on other projects like Control 2 and Max Payne 1+2 Remake.",
        Highlighttwo: " Kestrel was the multiplayer game being co-financed and co-published with Tencent and not the Control multiplayer game, codenamed Condor",
        Highlightthree: " Remedy expressed its appreciation of Tencent and thanked the company for its support.",
        paraone: "Acclaimed game developer Remedy Entertainment has announced the cancellation of its co-op multiplayer game, codenamed Kestrel. This decision comes amid Remedy prioritizing the allocation of resources towards other ongoing projects within its portfolio.",
        paratwo: "Historically renowned for its single-player experiences like the Alan Wake and Control series, Remedy's foray into multiplayer development with Kestrel was a departure from the norm. It wasn't the only multiplayer game the studio was working on, though, because it also confirmed the existence of a Control multiplayer spin-off codenamed Condor. According to recent updates from Remedy about its upcoming projects, Condor has moved into the full production stage, but the Kestrel team was still working on refining the concept.",
      },{
        imageUrl: "./",
        title: "FALLOUT NEW VEGAS",
        subTitle: "Fallout: New Vegas Mod Overhauls Gun Animations",
        description: "A new Fallout: New Vegas mod overhauls the animations for nearly every gun in the game, improving the shooting experience greatly for fans.",
        h: " The New Vegas Animation Overhaul mod for Fallout: New Vegas changes nearly every gun animation to resemble modern first-person shooters.",
        Highlighttwo: "Despite its age, Fallout: New Vegas maintains a strong mod scene, attracting both new players and old fans seeking fresh content.",
        Highlightthree: "The mod compiles existing weapon animation tweaks into one pack, streamlining the modding process by combining separate downloads.",
        paraone: "One of the most popular new mods for the classic RPG Fallout: New Vegas is leaving its mark on virtually every gun in the game. The mod makes comprehensive tweaks to the weapon animations for almost all the Fallout: New Vegas guns, drawing attention from fans looking to inject some new life into the old game.",
        paratwo: "Despite being close to fourteen years old and characterized even by its fans as \"geriatric,\" Fallout: New Vegas continues to maintain an active and healthy mod scene. Some are newer players trying out the game for the first time, brought in by the Amazon Fallout TV adaptation. Many are old fans looking to find or create new content to spice up repeated playthroughs with.",
      },{
        imageUrl: "./",
        title: "FORTNITE",
        subTitle: "Fortnite Leak Reveals Original Idea for Pandora’s Box in Chapter 5 Season 1",
        description: "Concept art for the original idea for Fortnite’s Pandora’s Box is revealed, showing off a much different mechanic for opening it.",
        h: "Fortnite leak reveals original idea for Pandora's Box during Greek mythology themed season.",
        Highlighttwo: "Players attacked box to open a portal for building materials, changing gameplay temporarily.",
        Highlightthree: "Leaker HYPEX shared concept art, original design would include panels revealing teasers one by one.",
        paraone: "A Fortnite leak revealed on May 6 shows off the original idea for Pandora's Box in the game. Fortnite is in the middle of a Greek mythology themed season, with Pandora's Box being part of the central focus. Near the end of Chapter 5 Season 1, a Titan’s Hand pulled the box out of the ground during a live event on March 2.",
        paratwo: "Players attacked the box until it broke open, less than 24 hours after it was revealed. With it, a vortex burst forth from it, which included a bug allowing players to build in Zero Build mode. Eliminating NPCs and moving through the vortex flowing out of the box allowed players to receive materials to build in the game mode, which was meant to remove the building mechanic.",
      },{
        imageUrl: "./",
        title: "MORTAL KOMBAT 1",
        subTitle: "Mortal Kombat 1 Update Adds New Kameo Fighter and More",
        description: "The most recent Mortal Kombat 1 update fixes issues throughout the game and also adds a new Kameo fighter to Kombat Pack 1 owners.",
        h: "Mavado joins Mortal Kombat 1 with the latest update, which adds him to the Kameo fighters roster.",
        Highlighttwo: "The update also includes fixes for various issues within the game experience and fighter moves.",
        Highlightthree: "Mavado joins Mortal Kombat 1 with the latest update, which adds him to the Kameo fighters roster.",
        paraone: "The latest Mortal Kombat 1 update adds Mavado to the roster of Kameo fighters and fixes several issues with the game experience and the moves of some fighters. Mavado joins Mortal Kombat 1 shortly after Ermac. Both fighters are available to players who own Kombat Pack 1 or the game's Premium Edition, but it's also possible to purchase them separately.",
        paratwo: "As done in previous Mortal Kombat games, NetherRealm introduced a DLC pack to Mortal Kombat 1 that adds new fighters to the roster. The first pack, called Kombat Pack 1, has already announced most of the new fighters for Mortal Kombat 1 and their release date. In total, 11 new characters will join the Mortal Kombat 1 arena, six of them to the main roster and five to the Kameo fighters list. Kameos are fighters with their own moveset, fatalities, and brutalities that support the main fighter but cannot be chosen as the protagonist of a fight.",
      },{
        imageUrl: "./",
        title: "CALL OF DUTY: WARZONE MOBILE",
        subTitle: "Call of Duty: Warzone Mobile Releases New Update",
        description: "Activision is rolling out a brand-new update for Call of Duty: Warzone Mobile which addresses a variety of gameplay issues and glitches.",
        h: " Call of Duty: Warzone Mobile's May 6 update improves graphics, fixes bugs, and reduces shader load times for faster match loading.",
        Highlighttwo: "Warzone Mobile remains a top mobile game, generating impressive revenue and maintaining a significant player base.",
        Highlightthree: " The update addresses various glitches and bugs in gameplay, visuals, and performance, enhancing the overall gaming experience.",
        paraone: "A new update has just been released for Call of Duty: Warzone Mobile. This update brings several quality-of-life improvements to the game, as well as a variety of bug fixes. Players hopping into a Call of Duty: Warzone Mobile match already have access to this new update, which was released on May 6.",
        paratwo: "Activision officially launched Call of Duty: Warzone back in 2020, with the game successfully carving out its own space in the competitive battle royale genre. Activision was able to use the well-established Call of Duty brand to launch its own battle royale game, offering players a tight, action-packed first-person-shooter experience that feels familiar and also fresh for both new players and veterans of the series. Warzone was eventually announced for mobile devices and officially released in early 2024. Continued support and content updates for Warzone, including new operators, weapons, and maps, have helped maintain hype for the game, with the most recent update specifically targeting glitches and gameplay improvements.",
      },{
        imageUrl: "./",
        title: "OVERWATCH 2",
        subTitle: "Overwatch 2 Hanaoka Map Has a Hidden Room",
        description: "Some Overwatch 2 fans have discovered an easter egg on the new Hanaoka map in the form of a secret room near one of the spawn locations.",
        h: " Season 10 in Overwatch 2 brings a trial of Clash mode for players to enjoy before its official release.",
        Highlighttwo: "Hanaoka, the new map in Japan, is reminiscent of Hanamura.",
        Highlightthree: "One player discovered a hidden room in Hanaoka, but it only features a single chair.",
        paraone: "While many Overwatch 2 fans are still getting to grips with the new map introduced this season, one player has come across a hidden room found near one of the spawn locations while exploring the new Hanaoka map. Season 10 has brought a significant amount of content to Overwatch 2, including the new damage hero, Venture, the limited-time Mirrorwatch event, as well as a wealth of new skins. Season 10 also brought in a trial version of the upcoming Clash mode for players to try out before it's officially added to the game later on.",
        paratwo: "Hanaoka is a new map located in Japan, and is currently the only map available for the Clash game mode in Overwatch 2. The map itself is hugely reminiscent of the map Hanamura, which was a fan-favorite location back in the original Overwatch before the Assault game mode was removed from standard mode rotations in the sequel. The reasons behind the similarities between these two maps likely extend beyond them both simply being located in the same region of Japan too, as the new Clash mode is considered to be something of a heavily-altered revival of the original Assault mode. With this in mind, it seems likely that Hanaoka was designed to be something of an evolved version of Hanamura, tweaked to better fit Overwatch 2's new mode and gameplay changes.",
      },{
        imageUrl: "./",
        title: "MARVEL SNAP",
        subTitle: "Marvel Snap 'A Blink in Time' Season Launches With 5 New Cards",
        description: "The latest season of Marvel Snap, A Blink in Time, introduces five new cards and two extra locations to the hit CCG, among other novelties",
        h: "Marvel Snap's A Blink in Time season is now available.",
        Highlighttwo: "The game's latest update introduces 5 new cards, 2 unique locations, and 3 albums featuring art by Rian Gonzales and Dan Hipp.",
        Highlightthree: "The game's latest update introduces 5 new cards, 2 unique locations, and 3 albums featuring art by Rian Gonzales and Dan Hipp.",
        paraone: "The latest season of Marvel Snap, A Blink in Time, is now available on PC and mobile devices. This content drop introduces five new Marvel Snap cards and two extra locations, among other novelties.",
        paratwo: "Marvel Snap launched in beta in October 2022 before receiving a full-fledged release come August 2023. Developer Second Dinner has been treating it to seasonal content on a monthly basis ever since. New Marvel Snap seasons commonly start on the first Monday of each month.",
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
