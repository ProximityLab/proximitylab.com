// jQuery(document).ready(function ($) {
//
  // $('#home-carousel-enterprise').carousel({pause: 'null', ride: 'false'}, 'pause');
  // $('#home-carousel-startups').carousel({interval: 5000, pause: 'null', ride: 'false'}, 'pause');
  // $('#home-carousel-reboots').carousel({interval: 5000, pause: 'null', ride: 'false'}, 'pause');

//   var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })

// $(window).scroll(function() {
//     if ($(window).scrollTop() > 5) {
//         // nav.addClass('page-navigation-animate');
//         $('.ww-underlay').addClass('active');
//         $('.page-navigation').find('ul').removeClass();
//         $('.page-navigation').find('ul').addClass('animated slideOutRight');
//     } else {
//         $('.ww-underlay').removeClass('active');
//         $('.page-navigation').find('ul').removeClass();
//         $('.page-navigation').find('ul').addClass('animated slideInRight');
//     }
// });

// Function to change elements on document scroll

$(document).ready(function(){

	// Header Scroll State

	$(document).scroll(function() {

		var $headerContainer = $('.primary-nav-holder');

		var $headerNav = $('.primary-nav-holder .page-navigation');

		var $headerPanel = $('.primary-nav-holder .ww-underlay');

		var scroll = $(document).scrollTop();

		if (scroll > 0) {

			$headerContainer.addClass("headerScrolledUp");
			$headerNav.addClass("scrolled");
			$headerPanel.addClass("scrolled");

		} else {

			$headerContainer.removeClass("headerScrolledUp");
			$headerNav.removeClass("scrolled");
			$headerPanel.removeClass("scrolled");

		}

	});

});

// Work items for Mobile

$(".work-item-overlay").click(function(){

	if ($(window).width() < 768) {

		$('.work-item-container').removeClass('active');
		$(this).parent().addClass('active');

	} else {

		$('.work-item-container').removeClass('active');

	}
});

//
// function getFileName() {
//   //this gets the full url
//   var url = document.location.href;
//   url = url.substring(url.lastIndexOf('.com/')+5);
// 	var lastChar = url[url.length -1];
// 	if(lastChar === "/"){
// 		url = url.slice(0, -1);
// 	}
//   //return
//   return url;
//   }
//
// var url = getFileName();
//
// // console.log(url+"**************");
// if (url === 'work') {
//   $('body').addClass('ww-work');
// }
// else if(url === '' || url === 'home')
// {
//   $('body').addClass('home');
// }
// else if(url === 'about')
// {
//   $('body').addClass('about');
// }
// else {
//   $('body').addClass('ww-portfolio');
// }

function setWays(){

var $headerContainer = $('.primary-nav-holder');

var waypointDown = new Waypoint({
  element: document.getElementById("waypoint"),
  // direction: 'down',
  offset: '<-25%',
  handler: function(direction) {
    if(direction === 'down')
    {
    	$headerContainer.addClass("headerScrolledDown");
    }
  }
});

var waypointUp = new Waypoint({
  element: document.getElementById("waypoint"),
  // direction: 'up',
   offset: '<-75%',
  handler: function(direction) {
    if(direction === 'up')
    {
    	$headerContainer.removeClass("headerScrolledDown");
    }
  }
});
}

setTimeout(setWays, 500);
// setWays();

// var waypointPinkeyOn = new Waypoint({
//   element: document.getElementById("waypoint"),
//   offset: '<-5%',
//   handler: function(direction) {
//     if(direction === 'down')
//     {
//     console.log('Scrolled to waypoint!' + direction);
//       $('#pl-nav-logo').addClass(' pinkey');
//       $('.page-navigation').removeClass('pinkey');
//       // $('.ww-underlay').animateCss('fadeIn');
//     }
//   }
// });
//
// var waypointPinkeyOff = new Waypoint({
//   element: document.getElementById("waypoint"),
//   offset: '<-75%',
//   handler: function(direction) {
//     if(direction === 'up'){
//     console.log('Scrolled to waypoint!' + direction);
//       $('#pl-nav-logo').removeClass('pinkey');
//       $('.page-navigation').addClass(' pinkey');
//       // $('.ww-underlay').animateCss('fadeIn');
//     }
//   }
// });


//   $('#home-carousel-testimonial').carousel({interval:5000});
//   $('#home-carousel-testimonial').on('slid.bs.carousel', function () {
//
//     $('#home-carousel-testimonial').find('.carousel-item').css('left', '0');
//     if ($(this).find('.carousel-item').hasClass('active')) {
//       console.log('(9999999)' + $(this));
//       // return;
//       // $(this).find('.carousel-item').css('opacity', '0');
//       // $(this).find('.carousel-item').animateCss('fadeIn');
//       // $(this).find('.carousel-item').addClass('animted fadeIn');
//     }
//     else {
//       {
//         // $(this).find('.carousel-item').css('opacity', '0');
//         // $(this).find('.carousel-item').animateCss('fadeIn');
//       }
//     }
//
// })

  // $('#home-carousel-testimonial').carousel({interval: 6000, pause: 'null', ride: 'false'}, 'pause');

// $('#home-carousel-testimonial').carousel();

//   function getFileName() {
//     //this gets the full url
//     var url = document.location.href;
//     // //this removes the anchor at the end, if there is one
//     url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
//     // //this removes the query after the file name, if there is one
//     // url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
//     // //this removes everything before the last slash in the path
//     url = url.substring(url.lastIndexOf("/") + 1, url.length);
//     // //this removes everything after the last period (file extension)
//     // url = url.substring(0, url.lastIndexOf("."));
//
//     //return
//     return url;
//     }
//
// // var $activePage = 'benefits-overview';
// var url = getFileName();
//
// // var url = document.location.href;
// console.log(url+"**************");
// if (url == '' || url == '/') {
//   // $('a[href^="/"]').addClass('current');
//   $('body').addClass('home');
// }
// // else
// // {
// //   $('a[href^='+url+']').addClass('current');
// //   $("#page-header").text($title);
// // }


//Use animateCss to remove the animation immediately
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

  var animationtype;
  var offsetvalue;
  var delayamount;
  var delaynum = .0;
  var delayvar = delaynum+'s';
  var itemlist;

  function nextVar(itemlist, animationtype, offsetvalue, delayamount) {
    var delaynum = .0;
    var delayvar = delaynum+'s';
    $.each(itemlist, function(index, value){
      // console.log(value);
      $(value).css({
        '-webkit-animation-delay':  delayvar,
        '-moz-animation-delay':     delayvar,
        'animation-delay':          delayvar
      });

      // $(value).css('opacity', 0);

      $(value).waypoint(function() {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(value).addClass('animated ' + animationtype).one(animationEnd, function() {
              $(value).removeClass('animated ' + animationtype);
          });
        }, {offset: offsetvalue});


      // var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      // $(value).addClass('animated ' + animationtype).one(animationEnd, function() {
      //   $(value).removeClass('animated ' + animationtype);
      // });

      delaynum += delayamount;
      delayvar = delaynum+'s';
    });
  }
// nextVar($('.ww-panels').find('.ww-panel-icon'), 'shake', '70%', .25);
// nextVar($('.ww-panels').find('h3'), 'fadeInUp', '90%', .25);

$('.ww-panels .carousel').find('.ww-btn').addClass('animated fadeOut');
$('.ww-panels h3').find('.ww-panel-icon').addClass('animated fadeInUp');

$('.ww-panels .carousel').mouseenter(function() {
  // console.log('oh hey, now the home-carousel-enterprise is loaded');
  $(this).find('.carousel-indicators').animateCss('fadeIn');
  $(this).find('.carousel-indicators').css('display', 'flex');
  $(this).carousel({interval:4000});
  $(this).carousel('next');
  $(this).find('h3').css('top', '10%');
  $(this).find('h3').animateCss('fadeIn');
});

$('.ww-panels .carousel').mouseleave(function() {
  // $(this).find('.carousel-indicators').animateCss('fadeOut');
  $(this).find('.carousel-indicators').css('display', 'none');
  $(this).carousel({interval: 0});
  $(this).carousel('pause');
  $(this).carousel(0);
  $(this).find('h3').css('top', '70%');
  $(this).find('h3').animateCss('fadeIn');
});

// var nav = $('.primary-nav-holder');

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
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
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  var $obj = $( '.footer-form-step' );
  var $btn = $('.page-footer-button');
  // var $current_form = $('#form-new-business');

  $btn.on('click', function(e) {
    e.preventDefault();
    // $this.toggleClass( 'activated' );
    $obj.stop(true,true).slideToggle();
    // $btn.hide();
    $btn.removeClass();
    $btn.addClass('page-footer-button animated fadeOut');
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  $('.form-close').on('click', function(e) {
    e.preventDefault();
    $obj.stop(true,true).slideToggle();
    // $btn.show();
    $btn.removeClass();
    $btn.addClass('page-footer-button animated fadeIn');
    $current_form = $(this);
  });

  // var acc = document.getElementsByClassName(".form-dropdown");
  // var i;
  //
  // for (i = 0; i < acc.length; i++) {
  //     acc[i].onclick = function(){
  //         /* Toggle between adding and removing the "active" class,
  //         to highlight the button that controls the panel */
  //         this.classList.toggle("active");
  //
  //         /* Toggle between hiding and showing the active panel */
  //         var panel = this.nextElementSibling;
  //         if (panel.style.display === "block") {
  //             panel.style.display = "none";
  //         } else {
  //             panel.style.display = "block";
  //         }
  //     }
  // }

  $('.form-dropdown').on('click', function(e) {
    e.preventDefault();
    var $current_form = $(this).nextAll(".ww-form").eq(0);
    $current_form.addClass('animated fadeIn');

  });

  // $('.form-dropdown').on('click', function(e) {
  //   e.preventDefault();
  //   $current_form = $(this).nextAll("form").eq(0);
  //   // $('.form-new-business ').stop(true,true).slideToggle();
  //   // $(this).children()[0].stop(true,true).slideToggle();
  //   if(typeof $current_form === 'undefined' || typeof $current_form === null){
  //     console.log("Couldn't find the current form with JQuery.");
  //     return;
  //   }
  //   else
  //   {
  //     findTheActiveForm();
  //
  //     $current_form.addClass('active');
  //     $current_form.slideToggle();
  //     // console.log("Found the form with JQuery.");
  //   }
  //   // $btn.show();
  //   // $btn.removeClass();
  //   // $btn.addClass('page-footer-button animated fadeIn');
  // });


//   function findTheActiveForm() {
//     // var allTheForms = $('.footer-form-step ul').nextAll("li").eq(0);
//     // var allTheForms = $('.footer-form-step ul').find("form");
//
//     $('.footer-form-step ul').find('form').each(function(i) {
//
//
//       if($( this ).hasClass('active')){
//         console.log( i + ": " + $( this ).attr('class') );
//         $( this ).removeClass('active');
//         $( this ).slideToggle();
//       }
//     });
//     //
//     // allTheForms.each(function( index ) {
//     //   if($( this ).hasClass('active'))
//     //     console.log( index + ": " + $( this ).attr('class') );
//     //   });
//     // $current_form.removeClass('active');
// }



    // for each
// console.log("Start " + allTheForms);
    // allTheForms.each(function() {

  // if($( this ).hasClass('active') ){
  //   $( this ).removeClass('active');
  //   $( this ).css('height', '0')
  //   console.log("Removed active.");
  //   return;
  // }
// });
  // }

  // $('#say-hello').on('click', function(e) {
  //   e.preventDefault();
    // $('.form-new-business ').stop(true,true).slideToggle();
    // $('.form-say-hello').stop(true,true).slideToggle();
    // $('.form-ww-careers').stop(true,true).slideToggle();
  //   $('.form-say-hello').stop(true,true).slideToggle();
  // });

  // $('#ww-careers').on('click', function(e) {
  //   e.preventDefault();
    // $('.form-new-business ').stop(true,true).slideToggle();
    // $('.form-say-hello').stop(true,true).slideToggle();
    // $('.form-ww-careers').stop(true,true).slideToggle();
  //   $('.form-ww-careers').stop(true,true).slideToggle();
  //   $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  // });

// logolarge.waypoint(function() {
//     logolarge.addClass('animated fadeOut');
//   }, { offset: '10%' });
//
//   logolarge.waypoint(function(direction) {
//       logolarge.removeClass('animated fadeOut');
//     }, { offset: '20%' });





// hide our element on page load
 // $('#home-headline').css('opacity', 0);

 // $('#enterprise').css('opacity', 0);
 // $('#enterprise').css({
 //   '-webkit-animation-delay':  delayvar,
 //   '-moz-animation-delay':     delayvar,
 //   'animation-delay':          delayvar
 // });

 // $('#home-headline').waypoint(function() {
 //   $('#home-headline').addClass('animated fadeIn');
 //
 //   $('#enterprise').addClass('animated fadeIn');
 //
 // }, { offset: '50%' });



//  function onScrollInit( items, trigger ) {
//   items.each( function() {
//     var osElement = $(this),
//         osAnimationClass = osElement.attr('data-os-animation'),
//         osAnimationDelay = osElement.attr('data-os-animation-delay');
//
//         osElement.css({
//           '-webkit-animation-delay':  osAnimationDelay,
//           '-moz-animation-delay':     osAnimationDelay,
//           'animation-delay':          osAnimationDelay
//         });
//
//         var osTrigger = ( trigger ) ? trigger : osElement;
//
//         osTrigger.waypoint(function() {
//           osElement.addClass('animated').toggleClass(osAnimationClass);
//           },{
//               triggerOnce: false,
//               offset: '90%'
//         });
//   });
// }
//
//  // onScrollInit( $('.os-animation') );
//  onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
// });

// });
