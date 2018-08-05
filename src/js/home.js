/** 
 * Home page 
 */
$(document).ready(function() {

    // services icon and heading dimmed
    var headingOne = $('#headingOne');
    var headingTwo = $('#headingTwo');
    var headingThree = $('#headingThree');

    $('#blurbResearch').on('show.bs.collapse', function () {
        headingOne.removeClass("dim")
        headingTwo.addClass("dim");
        headingThree.addClass("dim");
    })

    $('#blurbStrategy').on('show.bs.collapse', function () {
        headingOne.addClass("dim")
        headingTwo.removeClass("dim");
        headingThree.addClass("dim");
    })

    $('#blurbDesign').on('show.bs.collapse', function () {
        headingOne.addClass("dim")
        headingTwo.addClass("dim");
        headingThree.removeClass("dim");
    })


    // Minim video
    var minimVideo = $("#minim-video"); 

    $("#minim-video-overlay").click(function() { 
        minimVideo[0].play();
        minimVideo[0].controls = true;

        $(this).removeClass("d-flex").addClass("d-none");
    });


    // Oracle video
    var oracleVideo = $("#oracle-video"); 

    $("#oracle-video-overlay, #oracle-video-play-link").click(function() { 
        oracleVideo[0].play();
        oracleVideo[0].controls = true;

        $("#oracle-video-overlay").removeClass("d-flex").addClass("d-none");

        return false; // Prevents default behavior from link
    });


    // Amadeus video
    var amadeusVideo = $("#amadeus-video"); 

    $("#amadeus-video-overlay").click(function() { 
        amadeusVideo[0].play();
        amadeusVideo[0].controls = true;

        $(this).removeClass("d-flex").addClass("d-none");
    });

});
