// let currSong = new Audio()
// let songs;
// let currfolder;

// function secondsToMinutesSeconds(seconds) {
//     if (isNaN(seconds) || seconds < 0) {
//         return "00:00";
//     }

//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);

//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');

//     return `${formattedMinutes}:${formattedSeconds}`;
// }

// async function displayAlbums() {
//     console.log(currfolder)
//     let a = await fetch(`http://127.0.0.1:5502/Quaver/song`)
//     let response = await a.text()
//     // console.log(response)
//     let div = document.createElement("div")
//     div.innerHTML = response
//     let anchors = div.getElementsByTagName("a")
//     let cardContainer = document.querySelector(".card-container")
//     // cardContainer.innerHTML = ""
//     Array.from(anchors).forEach(async e => {
//         if (e.href.includes("/Quaver/song/")) {

//             let folder = e.href.split("/").slice(-1)[0]
//             let a = await fetch(`http://127.0.0.1:5502/Quaver/song/${folder}/info.json`)
//             let response = await a.json()

//             cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
            
//             <div class="pic">
//                 <img src="../Quaver/song/${folder}/cover.jpg" alt="img">
//                 <div class="play">
//                     <svg width="16" height="16" viewBox="0 0 20 24" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
//                             stroke-linejoin="round" />
//                     </svg>
//                 </div>
//             </div>
//             <h2>${response.title}</h2>
//             <p>${response.description}</p>
//         </div>`


//         }

//         Array.from(document.getElementsByClassName("card")).forEach(e => {

//             e.addEventListener("click", async item => {
//                 console.log("clicked")
//                 currfolder = `song/${item.currentTarget.dataset.folder}`
//                 console.log(item.currentTarget.dataset.folder)
//                 await getSongs(currfolder)
//                 console.log(songs)
//                 playMusic(songs[0])

//             })

//         })

//     })
// }


// async function getSongs(currfolder) {
//     let a = await fetch(`http://127.0.0.1:5502/Quaver/${currfolder}`)
//     let response = await a.text()
//     let div = document.createElement("div")
//     div.innerHTML = response
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".flac") || element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`${currfolder}/`)[1])


//         }

//     }

//     let songUl = document.querySelector(".songlist").getElementsByTagName("ol")[0]
//     songUl.innerHTML = ""
//     for (const song of songs) {
//         songUl.innerHTML = songUl.innerHTML + `
        
        
//         <li>
//                             <div class="songblock">
//                                 <img src="img/logo.svg" alt="">
    
//                                 <div class="info">
//                                     <div>${decodeURIComponent(song)}</div>
//                                     <div>Artist Name</div>
//                                 </div>
//                             </div>
//                             <img id="playnow" src="img/play.svg" alt="">
                       
        
        
        
//          </li>`;

//     }



//     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener('click', element => {
//             console.log(e.querySelector(".info").getElementsByTagName("div")[0].innerText)


//             const filePath = e.querySelector(".info").getElementsByTagName("div")[0]

//             var songURL = `/Quaver/${currfolder}/` + filePath.innerText;
//             fetch(songURL)
//                 .then(response => {
//                     if (response.ok) {
//                         playMusic(filePath.innerText);

//                     } else {

//                         playMusic(filePath.innerHTML);

//                     }
//                 })


//         })
//     });

// }

// getSongs('song/ncs')

// const playMusic = (track, pause = false) => {
//     songURL = `/Quaver/${currfolder}/` + track;
//     currSong.src = songURL;

//     if (!pause) {
//         currSong.play();
//         document.querySelectorAll(".playbar #play").forEach(playButton => {
//             playButton.src = "img/pause.svg";
//         });
//     } else {
//         document.querySelectorAll(".playbar #play").forEach(playButton => {
//             playButton.src = "img/play.svg";
//         });
//     }

//     // Update song info in all playbars
//     document.querySelectorAll(".playbar .songinfo").forEach(songinfo => {
//         songinfo.innerText = decodeURIComponent(track);
//     });
//     document.querySelectorAll(".playbar .songtime").forEach(songtime => {
//         songtime.innerHTML = "00:00/00:00";
//     });
// };




// async function main() {

//     currfolder = `song/All%20Songs`
//     console.log(currfolder)
//     await getSongs(currfolder)
//     console.log(songs)
//     playMusic(songs[0], true)


//  // Play functionality
// document.querySelectorAll(".playbar #play").forEach(button => {
//     button.addEventListener("click", () => {
//         if (currSong.paused) {
//             currSong.play();
//             document.querySelectorAll(".playbar #play").forEach(playButton => {
//                 playButton.src = "img/pause.svg";
//             });
//         } else {
//             document.querySelectorAll(".playbar #play").forEach(playButton => {
//                 playButton.src = "img/play.svg";
//             });
//             currSong.pause();
//         }
//     });
// });

// // Timeupdate functionality
// currSong.addEventListener("timeupdate", () => {
//     document.querySelectorAll(".playbar .songtime").forEach(songtime => {
//         songtime.innerHTML = `${secondsToMinutesSeconds(currSong.currentTime)}/${secondsToMinutesSeconds(currSong.duration)}`;
//     });
//     document.querySelectorAll(".playbar .circle").forEach(circle => {
//         circle.style.left = `${(currSong.currentTime * 100) / currSong.duration}%`;
//     });
//     console.log(currSong);
// });

// // Dragging functionality
// document.querySelectorAll(".playbar .circle").forEach(circle => {
//     circle.addEventListener("mousedown", startDragging);
// });
// document.querySelectorAll(".playbar .seekbar").forEach(seekbar => {
//     seekbar.addEventListener("click", moveCircle);
// });
// document.addEventListener("mousemove", dragCircle);
// document.addEventListener("mouseup", stopDragging);

// function startDragging(e) {
//     isDragging = true;
// }

// function moveCircle(e) {
//     if (!isDragging) {
//         let offsetX = e.clientX - this.getBoundingClientRect().left;
//         let percent = (offsetX * 100) / this.getBoundingClientRect().width;
//         if (percent >= 0 && percent <= 100) {
//             this.querySelector(".circle").style.left = `${percent}%`;
//             currSong.currentTime = (currSong.duration * percent) / 100;
//         }
//     }
// }

// function dragCircle(e) {
//     if (isDragging) {
//         let offsetX = e.clientX - document.querySelector(".playbar .seekbar").getBoundingClientRect().left;
//         let percent = (offsetX * 100) / document.querySelector(".playbar .seekbar").getBoundingClientRect().width;
//         if (percent >= 0 && percent <= 100) {
//             document.querySelectorAll(".playbar .circle").forEach(circle => {
//                 circle.style.left = `${percent}%`;
//             });
//             currSong.currentTime = (currSong.duration * percent) / 100;
//         }
//     }
// }

// function stopDragging(e) {
//     isDragging = false;
// }

// // Previous and Next functionality
// document.querySelectorAll(".playbar #previous").forEach(button => {
//     button.addEventListener("click", () => {
//         let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
//         let index = songs.indexOf(fileName);
//         if (index !== -1 && index - 1 >= 0) {
//             let previousSong = songs[index - 1];
//             playMusic(previousSong);
//         }
//     });
// });

// document.querySelectorAll(".playbar #next").forEach(button => {
//     button.addEventListener("click", () => {
//         let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
//         let index = songs.indexOf(fileName);
//         if (index !== -1 && index + 1 < songs.length) {
//             let nextSong = songs[index + 1];
//             playMusic(nextSong);
//         }
//     });
// });

// // Volume control
// document.querySelectorAll(".playbar .range input").forEach(input => {
//     input.addEventListener("change", (e) => {
//         currSong.volume = parseInt(e.target.value) / 100;
//     });
// });







    


//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0%"
//         document.querySelector(".right").style.filter = "blur(3px)"
//     })

//     document.querySelector(".cross").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-250%"
//         document.querySelector(".right").style.filter = "blur(0px)"
//     })

//     displayAlbums()
//     displayAlbums()



// }

// main()




let currSong = new Audio();
let songs;
let currfolder;

// Function to convert seconds to minutes and seconds format
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Function to toggle the beat animation
function toggleBeatAnimation(play) {
    const tourTitleImg = document.querySelector(".tour-title-img");
    if (play) {
        tourTitleImg.classList.add("beat-animation");
    } else {
        tourTitleImg.classList.remove("beat-animation");
    }
}

// Function to play music
const playMusic = (track, pause = false) => {
    const songURL = `/Quaver/${currfolder}/` + track;
    currSong.src = songURL;

    if (!pause) {
        currSong.play();
        toggleBeatAnimation(true); // Start beat animation
        // Change play button icon to pause
        document.querySelectorAll(".playbar #play").forEach(playButton => {
            playButton.src = "img/pause.svg";
        });
    } else {
        currSong.pause();
        toggleBeatAnimation(false); // Stop beat animation
        // Change pause button icon to play
        document.querySelectorAll(".playbar #play").forEach(playButton => {
            playButton.src = "img/play.svg";
        });
    }

    // Update song info in all playbars
    document.querySelectorAll(".playbar .songinfo").forEach(songinfo => {
        songinfo.innerText = decodeURIComponent(track);
    });
    document.querySelectorAll(".playbar .songtime").forEach(songtime => {
        songtime.innerHTML = "00:00/00:00";
    });
};

// Function to get songs from the server
async function getSongs(currfolder) {
    let a = await fetch(`http://127.0.0.1:5502/Quaver/${currfolder}`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".flac") || element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`${currfolder}/`)[1]);
        }
    }

    let songUl = document.querySelector(".songlist").getElementsByTagName("ol")[0];
    songUl.innerHTML = "";
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `
            <li>
                <div class="songblock">
                    <img src="img/logo.svg" alt="">
                    <div class="info">
                        <div>${decodeURIComponent(song)}</div>
                        <div>Artist Name</div>
                    </div>
                </div>
                <img id="playnow" src="img/play.svg" alt="">
            </li>`;
    }

    // Add event listener to play button of each song
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener('click', element => {
            const filePath = e.querySelector(".info").getElementsByTagName("div")[0];
            const songURL = `/Quaver/${currfolder}/` + filePath.innerText;
            fetch(songURL)
                .then(response => {
                    if (response.ok) {
                        playMusic(filePath.innerText);
                    } else {
                        playMusic(filePath.innerHTML);
                    }
                });
        });
    });
}

// Function to display albums
async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:5502/Quaver/song`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".card-container");

    Array.from(anchors).forEach(async e => {
        if (e.href.includes("/Quaver/song/")) {
            let folder = e.href.split("/").slice(-1)[0];
            let a = await fetch(`http://127.0.0.1:5502/Quaver/song/${folder}/info.json`);
            let response = await a.json();

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                <div class="pic">
                    <img src="../Quaver/song/${folder}/cover.jpg" alt="img">
                    <div class="play">
                        <svg width="16" height="16" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <h2>${response.title}</h2>
                <p>${response.description}</p>
            </div>`;
        }

        Array.from(document.getElementsByClassName("card")).forEach(e => {
            e.addEventListener("click", async item => {
                currfolder = `song/${item.currentTarget.dataset.folder}`;
                await getSongs(currfolder);
                playMusic(songs[0]);
            });
        });
    });
}

// Main function
async function main() {
    currfolder = `song/All%20Songs`;
    await getSongs(currfolder);
    playMusic(songs[0], true);

    // Add event listeners for play, previous, and next buttons
    document.querySelectorAll(".playbar #play").forEach(button => {
        button.addEventListener("click", () => {
            if (currSong.paused) {
                playMusic(songs[0]);
            } else {
                playMusic(songs[0], true);
            }
        });
    });

    document.querySelectorAll(".playbar #previous").forEach(button => {
        button.addEventListener("click", () => {
            let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
            let index = songs.indexOf(fileName);
            if (index !== -1 && index - 1 >= 0) {
                let previousSong = songs[index - 1];
                playMusic(previousSong);
            }
        });
    });

    document.querySelectorAll(".playbar #next").forEach(button => {
        button.addEventListener("click", () => {
            let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
            let index = songs.indexOf(fileName);
            if (index !== -1 && index + 1 < songs.length) {
                let nextSong = songs[index + 1];
                playMusic(nextSong);
            }
        });
    });

    // Add event listener for volume control
    document.querySelectorAll(".playbar .range input").forEach(input => {
        input.addEventListener("change", (e) => {
            currSong.volume = parseInt(e.target.value) / 100;
        });
    });

    // Add event listener to toggle left and right panels
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0%";
        document.querySelector(".right").style.filter = "blur(3px)";
    });

    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-250%";
        document.querySelector(".right").style.filter = "blur(0px)";
    });

    // Display albums
    displayAlbums();
}

// Initialize the application
main();

