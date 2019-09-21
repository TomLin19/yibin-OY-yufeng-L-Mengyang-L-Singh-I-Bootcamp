window.onload = function () {
    var vStart = document.getElementById('play');
    var vStop = document.getElementById('close');
    var vVideo = document.getElementById('vVideo');
    vStart.onclick = function () {
     vVideo.play();
    };
    vStop.onclick = function () {
     vVideo.pause();
    };
   }