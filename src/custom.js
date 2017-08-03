// Video autoplay on modal
var videoModal = $('#video-modal');
var videoIframe = $('#video-iframe');
var videoSrc = videoIframe.attr('src');

videoModal.on('shown.bs.modal', function (e) {
    videoIframe.attr('src', videoSrc + '&autoplay=1');
});

videoModal.on('hide.bs.modal', function (e) {
    videoIframe.attr('src', videoSrc);
});


// homepage hero logo animation on scroll
/* var logo = $('#pl-logo-hero');

$(window).scroll(function() {
    if ($(window).scrollTop() > 5) {
        logo.addClass('pl-logo-hero-animate');
    } else {
        logo.removeClass('pl-logo-hero-animate');
    }
}); */
