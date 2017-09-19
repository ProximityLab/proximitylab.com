// Document is loaded and ready

$(document).ready(function() {

  // Function to change elements on document scroll
  // Header Scroll State

  $(document).scroll(function() {

    var $headerContainer = $('.primary-nav-holder');

    var $headerNav = $('.primary-nav-holder .page-navigation');

    var $headerPanel = $('.primary-nav-holder .ww-underlay');

    var scroll = $(document).scrollTop();

    if (scroll > 5) {

      $headerContainer.addClass("headerScrolledUp");
      $headerNav.addClass("scrolled");
      $headerPanel.addClass("scrolled");

    } else {

      $headerContainer.removeClass("headerScrolledUp");
      $headerNav.removeClass("scrolled");
      $headerPanel.removeClass("scrolled");

    }

  });

  // Work items for Mobile

  $(".work-item-overlay").click(function() {

    if ($(window).width() < 768) {

      $('.work-item-container').removeClass('active');
      $(this).parent().addClass('active');

    } else {

      $('.work-item-container').removeClass('active');

    }
  });

  // Profile overlays for Mobile

  $(".about-team-person-overlay").click(function() {

    if ($(window).width() < 768) {

      $('.about-team-person-overlay').removeClass('active');
      $(this).addClass('active');

    } else {

      $('.about-team-person-overlay').removeClass('active');

    }
  });

  // Footer Forms

  $(".form-dropdown").click(function() {

    var $form = $(this).siblings('.ww-form');

    var $otherForms = $(this).parent().siblings();

    var $bigButton = $('.page-footer-button');

    var formMessages = $('#form-messages');

    $bigButton.fadeOut();

    $otherForms.slideUp();

    $(formMessages).text('');

    $form.fadeIn();

  });

  $(".form-close").click(function() {

    var $form = $('.ww-form');

    var $otherForms = $('.form-dropdown').parent();

    var $bigButton = $('.page-footer-button');

    $bigButton.fadeIn();

    $otherForms.show();

    $form.fadeOut();

  });

  //Use animateCss to remove the animation immediately
  $.fn.extend({
    animateCss: function(animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
      return this;
    }
  });

  $('.ww-panels .carousel').find('.ww-btn').addClass('animated fadeOut');
  $('.ww-panels h3').find('.ww-panel-icon').addClass('animated fadeInUp');

  $('.ww-panels .carousel').mouseenter(function() {
    // console.log('oh hey, now the home-carousel-enterprise is loaded');
    $(this).find('.carousel-indicators').animateCss('fadeIn');
    $(this).find('.carousel-indicators').css('display', 'flex');
    $(this).carousel({
      interval: 4000
    });
    $(this).carousel(1);
    $(this).find('h3').css('top', '10%');
    $(this).find('h3').animateCss('fadeIn');
    $(this).addClass('slide');
  });

  $('.ww-panels .carousel').mouseleave(function() {
    $(this).removeClass('slide');
    // $(this).find('.carousel-indicators').animateCss('fadeOut');
    $(this).find('.carousel-indicators').css('display', 'none');
    $(this).carousel({
      interval: 0
    });
    $(this).carousel('pause');
    $(this).carousel(0);
    $(this).find('h3').css('top', '70%');
    $(this).find('h3').animateCss('fadeIn');
  });

  $('#home-carousel-testimonial.carousel').carousel({
    interval: 10000
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  var $obj = $('.footer-form-step');
  var $btn = $('.page-footer-button');

  $btn.on('click', function(e) {
    e.preventDefault();

    var scrollTop = $("body").scrollTop();

    $obj.stop(true, true).slideToggle(400);

    $("html, body").animate({
      scrollTop: $(document).height()
    }, 700);

    $btn.fadeOut(400);
  });

  $('.form-close').on('click', function(e) {
    e.preventDefault();

    var scrollTop = $("body").scrollTop();

    $obj.stop(true, true).slideToggle(400);

    $("html, body").animate({
      scrollTop: $(document).height()
    }, 700);

    $btn.fadeIn(400);
    $current_form = $(this);
  });

  $('.form-dropdown').on('click', function(e) {
    e.preventDefault();
    var $current_form = $(this).nextAll(".ww-form").eq(0);
    $current_form.addClass('animated fadeIn');

  });

  function setWays() {
    var $headerContainer = $('.primary-nav-holder');

    var waypointDown = new Waypoint({
      element: document.getElementById("waypoint"),
      // direction: 'down',
      offset: '<-25%',
      handler: function(direction) {
        if (direction === 'down') {
          $headerContainer.addClass("headerScrolledDown");
        }
      }
    });

    var waypointUp = new Waypoint({
      element: document.getElementById("waypoint"),
      // direction: 'up',
      offset: '<-75%',
      handler: function(direction) {
        if (direction === 'up') {
          $headerContainer.removeClass("headerScrolledDown");
        }
      }
    });
  }

  setTimeout(setWays, 500);

  // Get the messages div.
  var formMessages = $('#form-messages');

  function hideForm(form) {
    var $otherForms = $('.form-dropdown').parent();

    var $bigButton = $('.page-footer-button');

    $bigButton.fadeOut();

    $otherForms.show();

    form.hide();
  }

  function submitContactForm(formName) {

    return function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      var form = $('#' + formName);

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })
        .done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#' + formName + 'name').val('');
          $('#' + formName + 'email').val('');
          $('#' + formName + 'message').val('');

          hideForm(form);
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }

          hideForm(form);
        });
    }
  }

  // Get the form.
  var newBusinessForm = $('#new-business-form');
  var sayHelloForm = $('#say-hello-form');
  var careersForm = $('#careers-form');

  // Set up an event listener for the contact form.
  $(newBusinessForm).submit(submitContactForm('new-business-form'));
  $(sayHelloForm).submit(submitContactForm('say-hello-form'));
  $(careersForm).submit(submitContactForm('careers-form'));

});

// window.mainVideo;
// window.medQualVersionSrc;
// window.highQualVersionSrc;
// window.webMSrc;

if($('#video1').length > 0)
{
  mainVideo = $('#video1');
  medQualVersionSrc = '/video/minim_medium.mp4';
  highQualVersionSrc = '/video/minim.mp4';
  webMSrc = '/video/minim.webm';
  myVideo = document.getElementById("video1");
}
else if($('#video-amadeus').length > 0)
{
  mainVideo = $('#video-amadeus');
  medQualVersionSrc = '/video/amadeus-small.mp4';
  highQualVersionSrc = '/video/amadeus-medium.mp4';
  webMSrc = '/video/amadeus.webm';
  myVideo = document.getElementById("video-amadeus");
}


if ($(window).width() < 576) {
  mainVideo.append("<source type='video/mp4' src='" + medQualVersionSrc + "' type='video/mp4;codecs=avc1.42E01E, mp4a.40.2' />");
} else {
  mainVideo.append("<source type='video/mp4' src='" + highQualVersionSrc + "' type='video/mp4;codecs=avc1.42E01E, mp4a.40.2' />");
}
mainVideo.append("<source type='video/webm' src='" + webMSrc + "' type='video/webm;codecs=vp8, vorbis' />Your browser does not support the video tag.");


// var myVideo;
//
// if(document.getElementById("video1").length > 0)
// {
//   myVideo = document.getElementById("video1");
// }
// else if (document.getElementById("video-amadeus").length > 0)
// {
//   myVideo = document.getElementById("video-amadeus");
// }

if (myVideo) {
  myVideo.onplay = function() {
    console.log("Start myVideo.currentTime: " + myVideo.currentTime);
    $("#ww-play-pause").addClass('ww-init');
    $("#ww-play-pause").addClass('active');
  };

  myVideo.onended = function() {
    $("#ww-play-pause").removeClass('active');
    $("#ww-play-pause").removeClass('ww-init');
    myVideo.currentTime = 10;
    console.log("End myVideo.currentTime: " + myVideo.currentTime);
    // myVideo.pause();
    myVideo.load();
    myVideo.pause();
  };
}


$("#ww-play-pause").click(function() {

  console.log(myVideo.ended + "^^^^^^");

  if (myVideo.paused) {
    myVideo.play();
    $("#ww-play-pause").addClass('active');
    $("#ww-play-pause").addClass('ww-init');
  } else if (myVideo.ended) {
    console.log(myVideo.ended + "##############");
  } else {
    myVideo.pause();
    $("#ww-play-pause").removeClass('active');
    $("#ww-play-pause").removeClass('ww-init');
  }
});
