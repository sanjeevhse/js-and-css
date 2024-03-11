
    function showOverlay() {
      document.querySelector('.dark-overlay').style.display = 'block';
    }

    function hideOverlay() {
      document.querySelector('.dark-overlay').style.display = 'none';
    }



    var videoPlayer = document.getElementById('videoPlayer');
    var myVideo = document.getElementById('myVideo');
    var darkOverlay = document.querySelector('.dark-overlay');

    function stopVideo() {
      videoPlayer.style.display = "none";
      myVideo.pause();
      myVideo.currentTime = 0;
      darkOverlay.style.display = "none";
    }

    function playVideo(file) {
      myVideo.src = file;
      videoPlayer.style.display = "block";
      myVideo.play();
      darkOverlay.style.display = "block";
    }

    // Handle Picture-in-Picture events
    myVideo.addEventListener('enterpictureinpicture', handlePictureInPictureEnter);
    myVideo.addEventListener('leavepictureinpicture', handlePictureInPictureLeave);

    function handlePictureInPictureEnter() {
      // Hide the main video player and overlay when entering Picture-in-Picture mode
      videoPlayer.style.display = "none";
      darkOverlay.style.display = "none";
    }

    function handlePictureInPictureLeave() {
      // Show the main video player and overlay when leaving Picture-in-Picture mode
      videoPlayer.style.display = "block";
      darkOverlay.style.display = "block";
    }


