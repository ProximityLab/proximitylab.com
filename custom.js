// Video autoplay on modal
$('#video-modal').on('shown.bs.modal', function (e) {
    $('#video-iframe').attr('src', 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay=1');
});

$('#video-modal').on('hide.bs.modal', function (e) {
    $('#video-iframe').attr('src', 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0');
});
