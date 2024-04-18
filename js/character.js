

// video playbar part

function toggleMute() {
    var video = document.getElementById("myVideo");
    video.muted = !video.muted;
    var icon = document.querySelector(".vol-sec-svg");
    icon.classList.toggle("mute");
}

function toggleMute() {
var video = document.getElementById("myVideo");
var icon = document.querySelector(".vol-sec-svg");

if (video.muted) {
    video.muted = false;
    icon.classList.remove("mute");
    document.querySelector('.vid-car-bar').value = 50; // Set volume range to 50
    video.volume = 0.5; // Set volume to 0.5 (50%)
} else {
    video.muted = true;
    icon.classList.add("mute");
    document.querySelector('.vid-car-bar').value = 0; // Set volume range to 0
    video.volume = 0; // Set volume to 0
}
}