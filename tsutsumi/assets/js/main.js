function kvSwiper(){
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 5000,
        },
        fadeEffect: {
            crossFade: true
        }
    });
}


function scrollToTop(){
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

}

function toggle(){
    $('.burger__toggle').click(function(){
      $('.navigation').slideToggle('100', function(){
        console.log($('.burger__img').attr('src'));
          if ($('.burger__img').attr('src') == './assets/images/common/open.png') {
            $('.header__container').css('background-color','#00437c');
            $('.logo__img').addClass('logo__hidden');
              $('.burger__img').attr('src', './assets/images/common/close.png');
              // menu_button_close_sp
              // dropdown_ico.png
          } else {
            $('.logo__img').removeClass('logo__hidden');
            $('.logo__img').addClass('logo__visible');
            $('.header__container').css('background-color','white');
            $('.burger__img').attr('src', './assets/images/common/open.png')
          }
      });
  })
}

$(function(){
    kvSwiper();
    $(window).resize(function(){
      if ($(window).width() > 768) {
        $(".navigation").css("display", "block");
      }else {
        $(".navigation").css("display", "none");
      }
    });
    toggle();
    scrollToTop();

});

