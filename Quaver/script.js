let currSong = new Audio()
let songs;
let currfolder;

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

async function displayAlbums() {
    console.log(currfolder)
    let a = await fetch(`http://127.0.0.1:5502/Quaver/song`)
    let response = await a.text()
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".card-container")
    // cardContainer.innerHTML = ""
    Array.from(anchors).forEach(async e => {
        if (e.href.includes("/Quaver/song/")) {

            let folder = e.href.split("/").slice(-1)[0]
            let a = await fetch(`http://127.0.0.1:5502/Quaver/song/${folder}/info.json`)
            let response = await a.json()

            cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
            
            <div class="pic">
                <img src="../Quaver/song/${folder}/cover.jpg" alt="img">
                <div class="play">
                    <svg width="16" height="16" viewBox="0 0 20 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`


        }

        Array.from(document.getElementsByClassName("card")).forEach(e => {

            e.addEventListener("click", async item => {
                console.log("clicked")
                currfolder = `song/${item.currentTarget.dataset.folder}`
                console.log(item.currentTarget.dataset.folder)
                await getSongs(currfolder)
                console.log(songs)
                playMusic(songs[0])

            })

        })

    })
}


async function getSongs(currfolder) {
    let a = await fetch(`http://127.0.0.1:5502/Quaver/${currfolder}`)
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".flac") || element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`${currfolder}/`)[1])


        }

    }

    let songUl = document.querySelector(".songlist").getElementsByTagName("ol")[0]
    songUl.innerHTML = ""
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



    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener('click', element => {
            console.log(e.querySelector(".info").getElementsByTagName("div")[0].innerText)


            const filePath = e.querySelector(".info").getElementsByTagName("div")[0]

            var songURL = `/Quaver/${currfolder}/` + filePath.innerText;
            fetch(songURL)
                .then(response => {
                    if (response.ok) {
                        playMusic(filePath.innerText);

                    } else {

                        playMusic(filePath.innerHTML);

                    }
                })


        })
    });

}



// Function to create the audio visualizer
function createAudioVisualizer(audioElement, container) {
    var context = new AudioContext();
    var src = context.createMediaElementSource(audioElement);
    var analyser = context.createAnalyser();

    var canvas = document.createElement("canvas");
    canvas.id = "canvas";
    container.appendChild(canvas);

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var maxRadius = Math.min(centerX, centerY) * 0.9;

    var borderCount = 13;
    var dotSizes = [6, 5, 4, 3, 2, 1]; // Dot sizes for each border
    var dotDensity = [4, 8, 12, 16, 20, 24]; // Number of dots for each border

    // function renderFrame() {
    //     requestAnimationFrame(renderFrame);

    //     var dataArray = new Uint8Array(bufferLength);
    //     analyser.getByteFrequencyData(dataArray);

    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     var sliceWidth = (Math.PI * 2) / bufferLength;
    //     var angle = 0;

    //     for (var i = 0; i < bufferLength; i++) {
    //         var barHeight = dataArray[i] * 2;

    //         var x = centerX + Math.cos(angle) * (maxRadius - barHeight * 0.5);
    //         var y = centerY + Math.sin(angle) * (maxRadius - barHeight * 0.5);

    //         ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    //         ctx.beginPath();
    //         ctx.arc(x, y, 3, 0, Math.PI * 2);
    //         ctx.fill();

    //         angle += sliceWidth;
    //     }

    //     // Scatter dots
    //     for (var b = 0; b < borderCount; b++) {
    //         var borderRadius = maxRadius * (borderCount - b) / borderCount;
    //         var dotRadius = dotSizes[b];

    //         for (var i = 0; i < dotDensity[b]; i++) {
    //             var dotAngle = (Math.PI * 2) * (i / dotDensity[b]);
    //             var dotX = centerX + Math.cos(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
    //             var dotY = centerY + Math.sin(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
    //             var dotColor = "rgba(0, 0, 255, " + (1 - dotRadius / 6) + ")"; // Adjust dot color based on size

    //             ctx.fillStyle = dotColor;
    //             ctx.beginPath();
    //             ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
    //             ctx.fill();
    //         }
    //     }

    //     // Scattered white dots dancing in three spiral waveform patterns originating from the same origin
    //     for (var i = 0; i < bufferLength; i += 10) {
    //         var spiralAngle1 = i * 0.1;
    //         var spiralAngle2 = i * 0.1 + Math.PI / 3;
    //         var spiralAngle3 = i * 0.1 + (2 * Math.PI) / 3;

    //         var spiralRadius = maxRadius * (dataArray[i % bufferLength] / 255);

    //         var whiteDotX1 = centerX + Math.cos(spiralAngle1) * spiralRadius;
    //         var whiteDotY1 = centerY + Math.sin(spiralAngle1) * spiralRadius;

    //         var whiteDotX2 = centerX + Math.cos(spiralAngle2) * spiralRadius;
    //         var whiteDotY2 = centerY + Math.sin(spiralAngle2) * spiralRadius;

    //         var whiteDotX3 = centerX + Math.cos(spiralAngle3) * spiralRadius;
    //         var whiteDotY3 = centerY + Math.sin(spiralAngle3) * spiralRadius;

    //         ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    //         ctx.beginPath();
    //         ctx.arc(whiteDotX1, whiteDotY1, 2, 0, Math.PI * 2);
    //         ctx.arc(whiteDotX2, whiteDotY2, 2, 0, Math.PI * 2);
    //         ctx.arc(whiteDotX3, whiteDotY3, 2, 0, Math.PI * 2);
    //         ctx.fill();
    //     }
    // }

    // renderFrame();


    function renderFrame() {
        requestAnimationFrame(renderFrame);
    
        var dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);
    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        var sliceWidth = (Math.PI * 2) / bufferLength;
        var angle = 0;
    
        // Scatter white dots only
        for (var b = 0; b < borderCount; b++) {
            var borderRadius = maxRadius * (borderCount - b) / borderCount;
            var dotRadius = dotSizes[b];
    
            for (var i = 0; i < dotDensity[b]; i++) {
                var dotAngle = (Math.PI * 2) * (i / dotDensity[b]);
                var dotX = centerX + Math.cos(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
                var dotY = centerY + Math.sin(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
                var dotColor = "rgba(255, 255, 255, " + (1 - dotRadius / 6) + ")"; // Adjust dot color based on size
    
                ctx.fillStyle = dotColor;
                ctx.beginPath();
                ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    
        // Scattered white dots dancing in three spiral waveform patterns originating from the same origin
        for (var i = 0; i < bufferLength; i += 10) {
            var spiralAngle1 = i * 0.1;
            var spiralAngle2 = i * 0.1 + Math.PI / 3;
            var spiralAngle3 = i * 0.1 + (2 * Math.PI) / 3;
    
            var spiralRadius = maxRadius * (dataArray[i % bufferLength] / 255);
    
            var whiteDotX1 = centerX + Math.cos(spiralAngle1) * spiralRadius;
            var whiteDotY1 = centerY + Math.sin(spiralAngle1) * spiralRadius;
    
            var whiteDotX2 = centerX + Math.cos(spiralAngle2) * spiralRadius;
            var whiteDotY2 = centerY + Math.sin(spiralAngle2) * spiralRadius;
    
            var whiteDotX3 = centerX + Math.cos(spiralAngle3) * spiralRadius;
            var whiteDotY3 = centerY + Math.sin(spiralAngle3) * spiralRadius;
    
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.beginPath();
            ctx.arc(whiteDotX1, whiteDotY1, 2, 0, Math.PI * 2);
            ctx.arc(whiteDotX2, whiteDotY2, 2, 0, Math.PI * 2);
            ctx.arc(whiteDotX3, whiteDotY3, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    renderFrame();
}

getSongs('song/ncs')


const playMusic = (track, pause = false) => {
    songURL = `/Quaver/${currfolder}/` + track;
    currSong.src = songURL;

    if (!pause) {
        currSong.play();
        document.querySelectorAll(".playbar #play").forEach(playButton => {
            playButton.src = "img/pause.svg";
        });
    } else {
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

    // Create visualizer
    createAudioVisualizer(currSong, document.querySelector('.music-viz'));
};

async function main() {

    currfolder = `song/All%20Songs`
    console.log(currfolder)
    await getSongs(currfolder)
    console.log(songs)
    playMusic(songs[0], true)


 // Play functionality
document.querySelectorAll(".playbar #play").forEach(button => {
    button.addEventListener("click", () => {
        if (currSong.paused) {
            currSong.play();
            document.querySelectorAll(".playbar #play").forEach(playButton => {
                playButton.src = "img/pause.svg";
            });
        } else {
            document.querySelectorAll(".playbar #play").forEach(playButton => {
                playButton.src = "img/play.svg";
            });
            currSong.pause();
        }
    });
});

// Timeupdate functionality
currSong.addEventListener("timeupdate", () => {
    document.querySelectorAll(".playbar .songtime").forEach(songtime => {
        songtime.innerHTML = `${secondsToMinutesSeconds(currSong.currentTime)}/${secondsToMinutesSeconds(currSong.duration)}`;
    });
    document.querySelectorAll(".playbar .circle").forEach(circle => {
        circle.style.left = `${(currSong.currentTime * 100) / currSong.duration}%`;
    });
    console.log(currSong);
});

// Dragging functionality
document.querySelectorAll(".playbar .circle").forEach(circle => {
    circle.addEventListener("mousedown", startDragging);
});
document.querySelectorAll(".playbar .seekbar").forEach(seekbar => {
    seekbar.addEventListener("click", moveCircle);
});
document.addEventListener("mousemove", dragCircle);
document.addEventListener("mouseup", stopDragging);

function startDragging(e) {
    isDragging = true;
}

function moveCircle(e) {
    if (!isDragging) {
        let offsetX = e.clientX - this.getBoundingClientRect().left;
        let percent = (offsetX * 100) / this.getBoundingClientRect().width;
        if (percent >= 0 && percent <= 100) {
            this.querySelector(".circle").style.left = `${percent}%`;
            currSong.currentTime = (currSong.duration * percent) / 100;
        }
    }
}

function dragCircle(e) {
    if (isDragging) {
        let offsetX = e.clientX - document.querySelector(".playbar .seekbar").getBoundingClientRect().left;
        let percent = (offsetX * 100) / document.querySelector(".playbar .seekbar").getBoundingClientRect().width;
        if (percent >= 0 && percent <= 100) {
            document.querySelectorAll(".playbar .circle").forEach(circle => {
                circle.style.left = `${percent}%`;
            });
            currSong.currentTime = (currSong.duration * percent) / 100;
        }
    }
}

function stopDragging(e) {
    isDragging = false;
}

// Previous and Next functionality
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

// Volume control
document.querySelectorAll(".playbar .range input").forEach(input => {
    input.addEventListener("change", (e) => {
        currSong.volume = parseInt(e.target.value) / 100;
    });
});







    


    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0%"
        document.querySelector(".right").style.filter = "blur(3px)"
    })

    document.querySelector(".cross").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-250%"
        document.querySelector(".right").style.filter = "blur(0px)"
    })

    displayAlbums()
    displayAlbums()

currSong.addEventListener("ended", () => {
    let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
    let index = songs.indexOf(fileName);
    if (index !== -1 && index + 1 < songs.length) {
        let nextSong = songs[index + 1];
        playMusic(nextSong);
    } else {
        // If there's no next song, change the play button icon to "play"
        document.querySelectorAll(".playbar #play").forEach(playButton => {
            playButton.src = "img/play.svg";
        });
    }
});

}

main()

    displayAlbums()
    displayAlbums()

currSong.addEventListener("ended", () => {
    let fileName = encodeURIComponent(decodeURIComponent(currSong.src.split("/").pop()));
    let index = songs.indexOf(fileName);
    if (index !== -1 && index + 1 < songs.length) {
        let nextSong = songs[index + 1];
        playMusic(nextSong);
    } else {
        // If there's no next song, change the play button icon to "play"
        document.querySelectorAll(".playbar #play").forEach(playButton => {
            playButton.src = "img/play.svg";
        });
    }
});



main()


document.querySelectorAll('.ex-my').forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = '../musicselect.html';
    });
});


// window.onload = function() {
//     var file = document.getElementById("thefile");
//     var audio = document.getElementById("audio");

//     file.onchange = function() {
//         var files = this.files;
//         audio.src = URL.createObjectURL(files[0]);
//         audio.load();
//         audio.play();
//         var context = new AudioContext();
//         var src = context.createMediaElementSource(audio);
//         var analyser = context.createAnalyser();

//         var canvas = document.createElement("canvas");
//         canvas.id = "canvas";
//         document.querySelector('.music-viz').appendChild(canvas);

//         canvas.width = document.querySelector('.music-viz').clientWidth;
//         canvas.height = document.querySelector('.music-viz').clientHeight;
//         var ctx = canvas.getContext("2d");

//         src.connect(analyser);
//         analyser.connect(context.destination);

//         analyser.fftSize = 256;

//         var bufferLength = analyser.frequencyBinCount;
//         console.log(bufferLength);

//         var dataArray = new Uint8Array(bufferLength);

//         var centerX = canvas.width / 2;
//         var centerY = canvas.height / 2;
//         var maxRadius = Math.min(centerX, centerY) * 0.9;

//         var borderCount = 13;
//         var dotSizes = [6, 5, 4, 3, 2, 1]; // Dot sizes for each border
//         var dotDensity = [4, 8, 12, 16, 20, 24]; // Number of dots for each border

//         function renderFrame() {
//             requestAnimationFrame(renderFrame);

//             analyser.getByteFrequencyData(dataArray);

//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             var sliceWidth = (Math.PI * 2) / bufferLength;
//             var angle = 0;

//             for (var i = 0; i < bufferLength; i++) {
//                 var barHeight = dataArray[i] * 2;

//                 var x = centerX + Math.cos(angle) * (maxRadius - barHeight * 0.5);
//                 var y = centerY + Math.sin(angle) * (maxRadius - barHeight * 0.5);

//                 ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
//                 ctx.beginPath();
//                 ctx.arc(x, y, 3, 0, Math.PI * 2);
//                 ctx.fill();

//                 angle += sliceWidth;
//             }

//             // Scatter dots
//             for (var b = 0; b < borderCount; b++) {
//                 var borderRadius = maxRadius * (borderCount - b) / borderCount;
//                 var dotRadius = dotSizes[b];

//                 for (var i = 0; i < dotDensity[b]; i++) {
//                     var dotAngle = (Math.PI * 2) * (i / dotDensity[b]);
//                     var dotX = centerX + Math.cos(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
//                     var dotY = centerY + Math.sin(dotAngle) * borderRadius * (dataArray[i % bufferLength] / 255);
//                     var dotColor = "rgba(0, 0, 255, " + (1 - dotRadius / 6) + ")"; // Adjust dot color based on size

//                     ctx.fillStyle = dotColor;
//                     ctx.beginPath();
//                     ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
//                     ctx.fill();
//                 }
//             }

//             // Scattered white dots dancing in three spiral waveform patterns originating from the same origin
//             for (var i = 0; i < bufferLength; i += 10) {
//                 var spiralAngle1 = i * 0.1;
//                 var spiralAngle2 = i * 0.1 + Math.PI / 3;
//                 var spiralAngle3 = i * 0.1 + (2 * Math.PI) / 3;

//                 var spiralRadius = maxRadius * (dataArray[i % bufferLength] / 255);

//                 var whiteDotX1 = centerX + Math.cos(spiralAngle1) * spiralRadius;
//                 var whiteDotY1 = centerY + Math.sin(spiralAngle1) * spiralRadius;

//                 var whiteDotX2 = centerX + Math.cos(spiralAngle2) * spiralRadius;
//                 var whiteDotY2 = centerY + Math.sin(spiralAngle2) * spiralRadius;

//                 var whiteDotX3 = centerX + Math.cos(spiralAngle3) * spiralRadius;
//                 var whiteDotY3 = centerY + Math.sin(spiralAngle3) * spiralRadius;

//                 ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//                 ctx.beginPath();
//                 ctx.arc(whiteDotX1, whiteDotY1, 2, 0, Math.PI * 2);
//                 ctx.arc(whiteDotX2, whiteDotY2, 2, 0, Math.PI * 2);
//                 ctx.arc(whiteDotX3, whiteDotY3, 2, 0, Math.PI * 2);
//                 ctx.fill();
//             }
//         }

//         audio.play();
//         renderFrame();
//     };
// };
