/** 
 * Home page 
 */
$(document).ready(function() {

    // Minim video
    var minimVideo = $("#minim-video"); 

    $("#minim-video-play").click(function() { 
        minimVideo[0].play();
        minimVideo[0].controls = true;

        $("#minim-video-overlay").removeClass("d-flex").addClass("d-none");
    });


    // Amadeus video
    var amadeusVideo = $("#amadeus-video"); 

    $("#amadeus-video-play").click(function() { 
        amadeusVideo[0].play();
        amadeusVideo[0].controls = true;

        $("#amadeus-video-overlay").removeClass("d-flex").addClass("d-none");
    });

});
