/** 
 * Home page 
 */
$(document).ready(function() {

    // hide blurb before showing another blurb
    var trigger = null;
    var blurbToggleResearch = $("#blurbToggleResearch");
    var blurbToggleStrategy = $("#blurbToggleStrategy");
    var blurbToggleDesign = $("#blurbToggleDesign");
    var blurbResearch = $("#blurbResearch");
    var blurbStrategy = $("#blurbStrategy");
    var blurbDesign = $("#blurbDesign");

    blurbResearch.on("hidden.bs.collapse", function() {
        if (trigger === 'strategy') {
            blurbStrategy.collapse("toggle");
        }

        if (trigger === 'design') {
            blurbDesign.collapse("toggle");
        }

        blurbToggleResearch.removeClass('expanded');
    });

    blurbStrategy.on("hidden.bs.collapse", function() {
        if (trigger === 'research') {
            blurbResearch.collapse("toggle");
        }

        if (trigger === 'design') {
            blurbDesign.collapse("toggle");
        }

        blurbToggleStrategy.removeClass('expanded');
    });

    blurbDesign.on("hidden.bs.collapse", function() {
        if (trigger === 'research') {
            blurbResearch.collapse("toggle");
        }

        if (trigger === 'strategy') {
            blurbStrategy.collapse("toggle");
        }

        blurbToggleDesign.removeClass('expanded');
    });

    blurbToggleResearch.click(function() {
        $(this).toggleClass('expanded');
        trigger = 'research';

        if (blurbStrategy.hasClass("show")) {
            blurbStrategy.collapse("hide");
        } else if (blurbDesign.hasClass("show")) {
            blurbDesign.collapse("hide");
        } else {
            blurbResearch.collapse("toggle");
        }
    });

    blurbToggleStrategy.click(function() {
        $(this).toggleClass('expanded');
        trigger = 'strategy';

        if (blurbResearch.hasClass("show")) {
            blurbResearch.collapse("hide");
        } else if (blurbDesign.hasClass("show")) {
            blurbDesign.collapse("hide");
        } else {
            blurbStrategy.collapse("toggle");
        }
    });

    blurbToggleDesign.click(function() {
        $(this).toggleClass('expanded');
        trigger = 'design';

        if (blurbResearch.hasClass("show")) {
            blurbResearch.collapse("hide");
        } else if (blurbStrategy.hasClass("show")) {
            blurbStrategy.collapse("hide");
        } else {
            blurbDesign.collapse("toggle");
        }
    });


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
