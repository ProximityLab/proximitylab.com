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


    // Oracle video
    var oracleVideo = $("#oracle-video"); 

    $("#oracle-video-play, #oracle-video-play-link").click(function() { 
        oracleVideo[0].play();
        oracleVideo[0].controls = true;

        $("#oracle-video-overlay").removeClass("d-flex").addClass("d-none");

        return false; // Prevents default behavior from link
    });


    // Amadeus video
    var amadeusVideo = $("#amadeus-video"); 

    $("#amadeus-video-play").click(function() { 
        amadeusVideo[0].play();
        amadeusVideo[0].controls = true;

        $("#amadeus-video-overlay").removeClass("d-flex").addClass("d-none");
    });

});
