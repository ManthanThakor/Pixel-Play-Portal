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

// Audio Context variables
let audioContext = null;
let analyser = null;
let visualizerSource = null;

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
      <div class="play">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.5"/>
          <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15421L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" stroke="white" stroke-width="1.5"/>
        </svg>
      </div>
      <img src="${album.cover || 'img/default-cover.jpg'}" alt="${album.title}">
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
      <div class="info">
        <div class="infoimg">
          <img src="img/music.svg" alt="">
        </div>
        <div class="nameArtist">
          <div>${song}</div>
          <div>Artist Name</div>
        </div>
      </div>
      <div class="playnow">
        <span>Play Now</span>
      </div>
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

// Initialize audio context for visualizer
function initAudioContext() {
  if (!audioContext) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
    } catch (error) {
      console.error("Error creating audio context:", error);
    }
  }
}

// Function to update audio visualizer connection with current song
function updateAudioVisualizerConnection() {
  try {
    if (!audioContext || !analyser) {
      initAudioContext();
    }

    // Disconnect previous source if it exists
    if (visualizerSource) {
      try {
        visualizerSource.disconnect();
      } catch (e) {
        // Ignore disconnection errors
      }
    }
    
    // Create and connect new source
    visualizerSource = audioContext.createMediaElementSource(currSong);
    visualizerSource.connect(analyser);
    analyser.connect(audioContext.destination);
    
    // Now create/update the visualizer display
    createAudioVisualizer(document.querySelector(".music-viz"));
  } catch (e) {
    console.error("Error updating audio visualizer connection:", e);
  }
}

// Function to create audio visualizer (now separated from the connection logic)
function createAudioVisualizer(container) {
  if (!container || !analyser) return;

  // Clear previous content
  container.innerHTML = "";

  try {
    // Calculate buffer length from analyzer
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

    // Save current time and pause status before loading new song
    const wasPlaying = !currSong.paused;
    
    // Set up audio source using the provided URL or a base64 fallback
    const songURL = `${getBasePath()}/song/${currFolder}/${songName}`;

    // Create a new Audio element to avoid issues with changing sources
    currSong.src = songURL;
    currSong.load();

    // Set up event handlers
    currSong.oncanplay = () => {
      // Initialize or update audio context
      if (audioContext) {
        // Resume audio context if it was suspended (needed for Chrome's autoplay policy)
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
      }
      
      // Connect the new song to the visualizer
      try {
        updateAudioVisualizerConnection();
      } catch (error) {
        console.error("Error connecting to visualizer:", error);
      }
      
      if (!pause && (wasPlaying || songIndex === 0)) {
        currSong.play().catch((error) => {
          console.error("Error playing audio:", error);
          document.querySelectorAll(".playbar #play").forEach((button) => {
            button.src = "img/play.svg";
          });
        });
      }

      // Update UI
      document.querySelectorAll(".playbar #play").forEach((button) => {
        button.src = pause || !wasPlaying ? "img/play.svg" : "img/pause.svg";
      });

      document.querySelectorAll(".songinfo").forEach((info) => {
        info.innerText = songName;
      });

      document.querySelectorAll(".songtime").forEach((time) => {
        time.innerText = `00:00/${secondsToMinutesSeconds(currSong.duration)}`;
      });
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
        // Resume the audio context if it was suspended
        if (audioContext && audioContext.state === 'suspended') {
          audioContext.resume();
        }
        
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
  // Initialize audio context
  initAudioContext();
  
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
