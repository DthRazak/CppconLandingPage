(function($) {
    "use strict";

    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 100){
    //         $('.navbar').css('background-color', 'transparent');
    //         document.getElementsByTagName("nav")[0].classList.remove("navbar-light");
    //         document.getElementsByTagName("nav")[0].classList.add("navbar-dark");
    //     }else{
    //         $('.navbar').css('background-color', '#ffa734');
    //         document.getElementsByTagName("nav")[0].classList.remove("navbar-dark");
    //         document.getElementsByTagName("nav")[0].classList.add("navbar-light");
    //     }
    // });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 70)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 100
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[650,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });

})(jQuery);
