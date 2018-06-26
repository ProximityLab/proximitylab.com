/**
 * Home page
 */
$(document).ready(function() {

    // Minim video
    var minimVideo = $("#minim-video");
    var minimPlay = $("#minim-video-play");
    var minimPause = $("#minim-video-pause");

    $("#minim-video-toggle").click(function() {
        if (minimVideo[0].paused)
            minimVideo[0].play();
        else
            minimVideo[0].pause();
    });

    function toggleVideoControl() {
        minimPlay.toggleClass("d-block").toggleClass("d-none");
        minimPause.toggleClass("d-block").toggleClass("d-none");
    }

    minimVideo.on('play pause', toggleVideoControl);
    minimVideo[0].onended = function() { toggleVideoControl };


    // Amadeus video
    $("#amadeus-video-play").click(function() {
        $("#amadeus-video")[0].play();
    });

});
