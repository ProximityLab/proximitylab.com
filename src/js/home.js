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

});
