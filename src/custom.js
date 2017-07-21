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
