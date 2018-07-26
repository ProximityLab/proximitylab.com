/** 
 * Studio page 
 */
$(document).ready(function() {

    // Profile overlays for Mobile
    $(".studio-team-overlay").click(function() {
        if ($(window).width() < 768) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).removeClass('active');
                $(this).addClass('active');
            }
        } else {
            $(this).removeClass('active');
        }
    });
    
});
