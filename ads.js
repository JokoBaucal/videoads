var videoElement;

// On window load, attach an event to the play button click
// that triggers playback on the video element
window.addEventListener('load', function(event) {
  videoElement = document.getElementById('video-element');
  var playButton = document.getElementById('play-button');
  playButton.addEventListener('click', function(event) {
    videoElement.play();
  });
});
