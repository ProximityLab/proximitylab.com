// Document is loaded and ready

$(document).ready(function() {

  // Function to change elements on document scroll
  // Header Scroll State

  var $headerContainer = $('.primary-nav-holder');
  var $headerNav = $('.primary-nav-holder .page-navigation');
  var $headerPanel = $('.primary-nav-holder .ww-underlay');
  var initialScroll = $(document).scrollTop();

  if (initialScroll > 40) {
    $headerContainer.addClass("scrolled");
  }

  $(document).scroll(function() {
    var scroll = $(document).scrollTop();

    if (scroll > 40) {
      $headerContainer.addClass("scrolled");

    } else {
      $headerContainer.removeClass("scrolled");
      $headerContainer.removeClass("headerScrolledUp");
    }

  });

  function navigatePrevious(event) {
    if (event.handled !== true) // This will prevent event triggering more then once
    {
      var nextpage = $('[data-role="next-page"]');
      // swipe using id of next page if exists
      if (nextpage.length > 0) {
        window.location.href = nextpage.attr('href');
      }
      event.handled = true;
    }
    return false;
  }

  function navigateNext(event) {
    if (event.handled !== true) // This will prevent event triggering more then once
    {
      var prevpage = $('[data-role="previous-page"]');
      // swipe using id of next page if exists
      if (prevpage.length > 0) {
        window.location.href = prevpage.attr('href');
      }
      event.handled = true;
    }
    return false;
  }

  $('.ww-portfolio').swipe({
    swipeLeft: function(event, direction, distance, duration, fingerCount) {
      navigatePrevious(event);
    },
    swipeRight: function(event, direction, distance, duration, fingerCount) {
      navigateNext(event);
    }
  });

  $('.ww-portfolio').keyup(function(event) {
    if (event.keyCode == 39) {
      navigatePrevious(event);
    }
    if (event.keyCode == 37) {
      navigateNext(event);
    }
  });

  // Work items for Mobile

  $(".work-item-overlay").click(function() {
    if ($(window).width() < 768) {
      if ($(this).parent().hasClass('active')) {
        $('.work-item-container').removeClass('active');
      } else {
        $('.work-item-container').removeClass('active');
        $(this).parent().addClass('active');
      }
    } else {
      $('.work-item-container').removeClass('active');
    }
  });

  $(".work-item-overlay a").click(function(event) {
    event.stopPropagation();
  });

  // Profile overlays for Mobile

  $(".about-team-person-overlay").click(function() {
    if ($(window).width() < 768) {
      if ($(this).hasClass('active')) {
        $('.about-team-person-overlay').removeClass('active');
      } else {
        $('.about-team-person-overlay').removeClass('active');
        $(this).addClass('active');
      }
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

  // Adobe Carousels
  var adobeCarousel1 = $('#adobe-carousel-1');
  var adobeCarousel2 = $('#adobe-carousel-2');
  var adobeCarousel3 = $('#adobe-carousel-3');

  if (adobeCarousel1 && adobeCarousel1.carousel) {
    window.setTimeout(function() {
      adobeCarousel1.carousel();
    }, 0);
  }

  if (adobeCarousel2 && adobeCarousel2.carousel) {
    window.setTimeout(function() {
      adobeCarousel2.carousel();
    }, 4000);
  }

  if (adobeCarousel3 && adobeCarousel3.carousel) {
    window.setTimeout(function() {
      adobeCarousel3.carousel();
    }, 2000);
  }

  // Home Page Carousels

  $('#home-carousel-testimonial').carousel();

  $('.ww-panels .carousel').mouseenter(function() {
    $(this).find('.carousel-indicators').css('display', 'flex');
    $(this).find('.carousel-indicators').fadeIn();
    $(this).carousel(0).carousel();
    $(this).find('h3').hide();
    $(this).find('h3').addClass('active');
    $(this).find('h3').finish().fadeIn();
    $(this).find('.ww-panel-icon-container').removeClass('active');
    $(this).find('.carousel-inner').addClass('active');
    $(this).addClass('slide');
  });

  $('.ww-panels .carousel').mouseleave(function() {
    $(this).removeClass('slide');
    $(this).find('.carousel-indicators').hide();
    $(this).carousel('pause');
    $(this).find('h3').hide();
    $(this).find('h3').removeClass('active');
    $(this).find('h3').finish().fadeIn();
    $(this).find('.carousel-inner').removeClass('active');
    $(this).find('.ww-panel-icon-container').addClass('active');
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
          $headerContainer.removeClass("headerScrolledUp");
        }
      }
    });

    var waypointUp = new Waypoint({
      element: document.getElementById("waypoint"),
      // direction: 'up',
      offset: '<-75%',
      handler: function(direction) {
        if (direction === 'up') {
          var scrollTop = $(document).scrollTop();
          var winHeight = $(window).height();
          var docHeight = $(document).height();
          var scrollBottom = docHeight - scrollTop - winHeight;
          $headerContainer.removeClass("headerScrolledDown");
          if (scrollTop < 40 || scrollBottom < 5) {
            $headerContainer.removeClass("headerScrolledUp");
          } else {
            $headerContainer.addClass("headerScrolledUp");
          }
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

  var mainVideo;

  if ($('#video1').length > 0) {
    mainVideo = $('#video1');
    medQualVersionSrc = '/video/minim_medium.mp4';
    highQualVersionSrc = '/video/minim.mp4';
    webMSrc = '/video/minim.webm';
  } else if ($('#video-amadeus').length > 0) {
    mainVideo = $('#video-amadeus');
    medQualVersionSrc = '/video/amadeus_590x444_M.mp4';
    highQualVersionSrc = '/video/amadeus_1920x1440_S.mp4';
    webMSrc = '/video/amadeus.webm';
  }

  if (mainVideo) {
    if ($(window).width() < 576) {
      mainVideo.append("<source type='video/mp4' src='" + medQualVersionSrc + "' type='video/mp4;codecs=avc1.42E01E, mp4a.40.2' />");
    } else {
      mainVideo.append("<source type='video/mp4' src='" + highQualVersionSrc + "' type='video/mp4;codecs=avc1.42E01E, mp4a.40.2' />");
    }
    mainVideo.append("<source type='video/webm' src='" + webMSrc + "' type='video/webm;codecs=vp8, vorbis' />Your browser does not support the video tag.");

    $("video").prop("volume", 0.25);

    mainVideo[0].onplay = function() {
      $("#ww-play-pause").addClass('ww-init');
      $("#ww-play-pause").addClass('active');
    };

    mainVideo[0].onended = function() {
      $("#ww-play-pause").removeClass('active');
      $("#ww-play-pause").removeClass('ww-init');
      mainVideo[0].currentTime = 10;
      mainVideo[0].load();
      mainVideo[0].pause();
    };

    $("#ww-play-pause").click(function() {

      if (mainVideo[0].paused) {
        mainVideo[0].play();
        $("#ww-play-pause").addClass('active');
        $("#ww-play-pause").addClass('ww-init');
      } else if (mainVideo[0].ended) {
        // video ended
      } else {
        mainVideo[0].pause();
        $("#ww-play-pause").removeClass('active');
        $("#ww-play-pause").removeClass('ww-init');
      }
    });
  }
});