// Function to play the video
function playVideo() {
    var video = document.getElementById('video-player');
    video.play();
  }
  
  // Function to pause the video
  function pauseVideo() {
    var video = document.getElementById('video-player');
    video.pause();
  }
  
  // Function to change the video source based on user input
  function changeVideoSource() {
    var video = document.getElementById('video-player');
    var input = document.getElementById('video-source-input');
    var source = input.value;
    video.src = source;
  }
  
  // Function to handle form submission
  function handleSubmit() {
    var linkInput = document.getElementById('video-source-input');
    var linkType = document.getElementById('video-type-input');
  
    if (linkType.value === 'm3u8') {
      // Handle m3u8 video link
      changeVideoSource();
      playVideo();
    } else {
      alert('Invalid link type. Only m3u8 links are supported.');
    }
  }
  
  // Event listeners for buttons and form submission
  document.getElementById('play-btn').addEventListener('click', playVideo);
  document.getElementById('pause-btn').addEventListener('click', pauseVideo);
  document.getElementById('submit-btn').addEventListener('click', handleSubmit);
  