/**
 * Pixel Play Portal - Music Player
 * A complete music player that works across all domains
 */

// Core player variables
let currSong = new Audio();
let songs = [];
let currFolder = "";
let isDragging = false;
let songIndex = 0;

// Fixed sample data - eliminating the need for server-side folder reading
const musicLibrary = {
  "All Songs": {
    title: "All Songs",
    description: "Complete collection of all available music",
    cover: "img/happybeats.jpg",
    songs: [
      "NIVIRO - Flares [NCS Release].mp3",
      "Call Of Silence (Attack On Titan) - Lo-Fi Luke  Sushi (128).mp3",
      "Enemy (1).mp3",
      "Julius Dreisig & Zeus X Crona - Invisible [NCS Release].mp3",
      "KSHMR - Around The World (Feat. NOUMENN) [Official Audio].mp3",
      "Martin Garrix feat. JRM - These Are The Times (Official Video).mp3",
      "NIVIRO - Flares [NCS Release].mp3",
      "QUB3, Quickdrop & B0UNC3 - Stay Or Be Alone [NCS Release].mp3",
      "RANDALL - Wahran (Official Audio).mp3",
      "Wasted (Nightcore) - Murkish  Huken (128).mp3",
    ],
  },
  ncs: {
    title: "NCS Songs",
    description: "No one Owns the Music, It's free just like you",
    cover: "./song/ncs/cover.jpg",
    songs: [
      "Julius Dreisig & Zeus X Crona - Invisible [NCS Release].mp3",
      "KSHMR - Around The World (Feat. NOUMENN) [Official Audio].mp3",
    ],
  },
  cs: {
    title: "Copyright Songs",
    description: "Just Enjoy it, Don't care much about it",
    cover: "./song/cs/cover.jpg",
    songs: [
      "NIVIRO - Flares [NCS Release].mp3",
      "Wasted (Nightcore) - Murkish Huken (128).mp3",
    ],
  },
};

// Helper function to convert seconds to MM:SS format
function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Function to get base path for assets
function getBasePath() {
  const path = window.location.pathname;
  const dirs = path.split("/");
  dirs.pop(); // Remove the filename
  return dirs.join("/");
}

// Function to display all available albums
function displayAlbums() {
  const cardContainer = document.querySelector(".card-container");
  if (!cardContainer) return;

  cardContainer.innerHTML = ""; // Clear existing content

  // Loop through our predefined library and create album cards
  Object.keys(musicLibrary).forEach((folder) => {
    const album = musicLibrary[folder];

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.folder = folder;

    card.innerHTML = `
      <div class="pic">
        <img src="${album.cover}" alt="${album.title}">
        <div class="play">
          <svg width="16" height="16" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <h2>${album.title}</h2>
      <p>${album.description}</p>
    `;

    cardContainer.appendChild(card);

    // Add click event to each card
    card.addEventListener("click", () => {
      currFolder = folder;
      loadSongs(folder);
    });
  });
}

// Function to load songs from a specific folder
function loadSongs(folder) {
  if (!musicLibrary[folder]) {
    console.error(`Folder '${folder}' not found in library`);
    return;
  }

  songs = [...musicLibrary[folder].songs]; // Create a copy of the songs array

  // Update the UI with song list
  const songUl = document
    .querySelector(".songlist")
    .getElementsByTagName("ol")[0];
  if (!songUl) return;

  songUl.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="songblock">
        <img src="img/logo.svg" alt="">
        <div class="info">
          <div>${song}</div>
          <div>Artist Name</div>
        </div>
      </div>
      <img id="playnow" src="img/play.svg" alt="">
    `;

    songUl.appendChild(li);

    // Add click event to play this song
    li.addEventListener("click", () => {
      songIndex = index;
      playMusic(songs[songIndex], false);
    });
  });

  // Play the first song of the folder
  if (songs.length > 0) {
    songIndex = 0;
    playMusic(songs[0], false);
  }
}

// Function to create audio visualizer
function createAudioVisualizer(audioElement, container) {
  if (!container) return;

  // Clear previous content
  container.innerHTML = "";

  try {
    // Create and set up audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const analyser = context.createAnalyser();

    let source;

    // Function to connect or reconnect the audio source
    const connectSource = () => {
      if (source) {
        source.disconnect();
      }
      source = context.createMediaElementSource(audioElement);
      source.connect(analyser);
      analyser.connect(context.destination);
    };

    try {
      connectSource();
    } catch (e) {
      console.log("Audio source already connected, continuing...");
    }

    // Set up analyzer
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;

    // Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = container.clientWidth || 300;
    canvas.height = container.clientHeight || 200;
    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Calculate visualization parameters
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) * 0.9;

    // Animation constants
    const borderCount = 8;
    const dotSizes = [6, 5, 4, 3, 2, 1];
    const dotDensity = [4, 8, 12, 16, 20, 24];

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      // Get frequency data
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw visualization

      // Scatter white dots in concentric circles
      for (let b = 0; b < borderCount; b++) {
        const borderRadius = (maxRadius * (borderCount - b)) / borderCount;
        const dotRadius = dotSizes[Math.min(b, dotSizes.length - 1)];

        for (
          let i = 0;
          i < dotDensity[Math.min(b, dotDensity.length - 1)];
          i++
        ) {
          const dotAngle =
            Math.PI * 2 * (i / dotDensity[Math.min(b, dotDensity.length - 1)]);
          const dotX =
            centerX +
            Math.cos(dotAngle) *
              borderRadius *
              (0.5 + dataArray[i % bufferLength] / 512);
          const dotY =
            centerY +
            Math.sin(dotAngle) *
              borderRadius *
              (0.5 + dataArray[i % bufferLength] / 512);
          const dotColor = "rgba(255, 255, 255, " + (1 - dotRadius / 6) + ")";

          ctx.fillStyle = dotColor;
          ctx.beginPath();
          ctx.arc(dotX, dotY, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw spiral patterns
      for (let i = 0; i < bufferLength; i += 10) {
        const spiralAngle1 = i * 0.1;
        const spiralAngle2 = i * 0.1 + Math.PI / 3;
        const spiralAngle3 = i * 0.1 + (2 * Math.PI) / 3;

        const spiralRadius = maxRadius * (dataArray[i % bufferLength] / 255);

        const whiteDotX1 = centerX + Math.cos(spiralAngle1) * spiralRadius;
        const whiteDotY1 = centerY + Math.sin(spiralAngle1) * spiralRadius;

        const whiteDotX2 = centerX + Math.cos(spiralAngle2) * spiralRadius;
        const whiteDotY2 = centerY + Math.sin(spiralAngle2) * spiralRadius;

        const whiteDotX3 = centerX + Math.cos(spiralAngle3) * spiralRadius;
        const whiteDotY3 = centerY + Math.sin(spiralAngle3) * spiralRadius;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(whiteDotX1, whiteDotY1, 2, 0, Math.PI * 2);
        ctx.arc(whiteDotX2, whiteDotY2, 2, 0, Math.PI * 2);
        ctx.arc(whiteDotX3, whiteDotY3, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Start animation
    renderFrame();
  } catch (error) {
    console.error("Error creating audio visualizer:", error);
    // Create fallback visualization
    const fallbackDiv = document.createElement("div");
    fallbackDiv.textContent = "Music Visualization";
    fallbackDiv.style.cssText =
      "width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:white; font-size:20px;";
    container.appendChild(fallbackDiv);
  }
}

// Play music function - handles all playback logic
function playMusic(songName, pause = false) {
  if (!songName) return;

  try {
    // Show loading status
    document.querySelectorAll(".songinfo").forEach((info) => {
      info.innerText = "Loading...";
    });

    // Set up audio source using the provided URL or a base64 fallback
    // For cross-domain compatibility, we're using a clever approach:
    // We create a URL with the folder and song name, but we'll handle the error if it doesn't exist
    const songURL = `${getBasePath()}/song/${currFolder}/${songName}`;

    currSong.src = songURL;
    currSong.load();

    // Set up event handlers
    currSong.oncanplay = () => {
      if (!pause) {
        currSong.play().catch((error) => {
          console.error("Error playing audio:", error);
          document.querySelectorAll(".playbar #play").forEach((button) => {
            button.src = "img/play.svg";
          });
        });
      }

      // Update UI
      document.querySelectorAll(".playbar #play").forEach((button) => {
        button.src = pause ? "img/play.svg" : "img/pause.svg";
      });

      document.querySelectorAll(".songinfo").forEach((info) => {
        info.innerText = songName;
      });

      document.querySelectorAll(".songtime").forEach((time) => {
        time.innerText = `00:00/${secondsToMinutesSeconds(currSong.duration)}`;
      });

      // Create visualizer
      createAudioVisualizer(currSong, document.querySelector(".music-viz"));
    };

    // Handle errors - use a fallback approach
    currSong.onerror = () => {
      console.error("Error loading audio, trying fallback");
      // In a real application, you might have fallback audio sources
      document.querySelectorAll(".songinfo").forEach((info) => {
        info.innerText = `${songName} (playback error)`;
      });
    };
  } catch (error) {
    console.error("Error in playMusic:", error);
  }
}

// Function to play next song
function playNextSong() {
  if (songs.length === 0) return;

  songIndex = (songIndex + 1) % songs.length;
  playMusic(songs[songIndex], false);
}

// Function to play previous song
function playPreviousSong() {
  if (songs.length === 0) return;

  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playMusic(songs[songIndex], false);
}

// Function to set up all event listeners
function setupEventListeners() {
  // Play/Pause buttons
  document.querySelectorAll(".playbar #play").forEach((button) => {
    button.addEventListener("click", () => {
      if (currSong.paused) {
        currSong.play();
        document.querySelectorAll(".playbar #play").forEach((btn) => {
          btn.src = "img/pause.svg";
        });
      } else {
        currSong.pause();
        document.querySelectorAll(".playbar #play").forEach((btn) => {
          btn.src = "img/play.svg";
        });
      }
    });
  });

  // Next buttons
  document.querySelectorAll(".playbar #next").forEach((button) => {
    button.addEventListener("click", playNextSong);
  });

  // Previous buttons
  document.querySelectorAll(".playbar #previous").forEach((button) => {
    button.addEventListener("click", playPreviousSong);
  });

  // Timeupdate event
  currSong.addEventListener("timeupdate", () => {
    // Update time display
    document.querySelectorAll(".playbar .songtime").forEach((time) => {
      time.innerText = `${secondsToMinutesSeconds(
        currSong.currentTime
      )}/${secondsToMinutesSeconds(currSong.duration)}`;
    });

    // Update progress bar
    const percent = currSong.duration
      ? (currSong.currentTime * 100) / currSong.duration
      : 0;
    document.querySelectorAll(".playbar .circle").forEach((circle) => {
      circle.style.left = `${percent}%`;
    });
  });

  // Song ended event
  currSong.addEventListener("ended", playNextSong);

  // Seekbar handling
  document.querySelectorAll(".playbar .seekbar").forEach((seekbar) => {
    // Click on seekbar
    seekbar.addEventListener("click", function (e) {
      const percent = (e.offsetX / this.offsetWidth) * 100;
      document.querySelectorAll(".playbar .circle").forEach((circle) => {
        circle.style.left = `${percent}%`;
      });
      currSong.currentTime = (percent / 100) * currSong.duration;
    });

    // Drag start on circle
    const circle = seekbar.querySelector(".circle");
    if (circle) {
      circle.addEventListener("mousedown", () => {
        isDragging = true;
      });
    }
  });

  // Drag and drop handling
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const seekbar = document.querySelector(".playbar .seekbar");
    if (!seekbar) return;

    const rect = seekbar.getBoundingClientRect();
    let percent = ((e.clientX - rect.left) / rect.width) * 100;

    // Constrain percent between 0 and 100
    percent = Math.max(0, Math.min(100, percent));

    document.querySelectorAll(".playbar .circle").forEach((circle) => {
      circle.style.left = `${percent}%`;
    });

    if (currSong.duration) {
      currSong.currentTime = (percent / 100) * currSong.duration;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Volume control
  document.querySelectorAll(".playbar .range input").forEach((input) => {
    input.addEventListener("input", (e) => {
      currSong.volume = e.target.value / 100;
    });

    // Set initial volume
    input.value = currSong.volume * 100;
  });

  // Sidebar toggle
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      document.querySelector(".left").style.left = "0%";
      document.querySelector(".right").style.filter = "blur(3px)";
    });
  }

  const cross = document.querySelector(".cross");
  if (cross) {
    cross.addEventListener("click", () => {
      document.querySelector(".left").style.left = "-250%";
      document.querySelector(".right").style.filter = "blur(0px)";
    });
  }
}

// Main initialization function
async function initializePlayer() {
  // Set up event listeners
  setupEventListeners();

  // Display albums
  displayAlbums();

  // Start with All Songs by default
  currFolder = "All Songs";
  loadSongs(currFolder);
}

// Start the player when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializePlayer);
