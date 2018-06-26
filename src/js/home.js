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

    function toggleVideoControlMinim() {
        minimPlay.toggleClass("d-block").toggleClass("d-none");
        minimPause.toggleClass("d-block").toggleClass("d-none");
    }

    minimVideo.on('play pause', toggleVideoControlMinim);
    minimVideo[0].onended = function() { toggleVideoControlMinim };


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
