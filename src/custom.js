// navigation animation on scroll
var nav = $('.page-navigation');

$(window).scroll(function() {
    if ($(window).scrollTop() > 5) {
        nav.addClass('page-navigation-animate');
    } else {
        nav.removeClass('page-navigation-animate');
    }
});
