window.onload = function(){
    var vStart = document.getElementById('play');
    var vStop = document.getElementById('close');
    var vVideo = document.getElementById('vVideo');

    vStart.onclick=function(){
        oVideo.play();
        console.log('vStart');

        vStop.onclick=function(){
            oVideo.pause();
        }


}}