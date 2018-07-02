/**
 * Home page
 */
$(document).ready(function() {

    // Amadeus video
    var amadeusVideo = $("#amadeus-video");
    var amadeusPlay = $("#amadeus-video-play");
    var amadeusPause = $("#amadeus-video-pause");

    $("#amadeus-video-toggle").click(function() {
        if (amadeusVideo[0].paused)
            amadeusVideo[0].play();
        else
            amadeusVideo[0].pause();
    });

    function toggleVideoControlAmadeus() {
        amadeusPlay.toggleClass("d-block").toggleClass("d-none");
        amadeusPause.toggleClass("d-block").toggleClass("d-none");
    }

    amadeusVideo.on('play pause', toggleVideoControlAmadeus);
    amadeusVideo[0].onended = function() { toggleVideoControlAmadeus };

});
