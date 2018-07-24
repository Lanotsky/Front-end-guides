function smoothScroller() {
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
}

function changeOnHover() {
    $( ".tel" ).hover(
        function() {
          $( '.tel__no-sp' ).attr('src','./assets/imgs/commons/header-phone-sp-hover.png');
        }, function() {
          $( '.tel__no-sp' ).attr('src','./assets/imgs/commons/header-phone-sp.png');
        }
      );
}


function hideHeader(){
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();

	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').addClass('navi-hide');
	        $('.navi__sp').addClass('navi__sp-hide');
	        $('.submenu').addClass('submenu-hide');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('navi-hide');
	        	$('.navi__sp').removeClass('navi__sp-hide');
	        	$('.submenu').removeClass('submenu-hide');
	        }
	    }

	    lastScrollTop = st;
	}
}

$(function(){
    $('.display__items-sp').slick({
        slidesToShow: 1,
        arrows: false,
      });
      smoothScroller();
    //   hideHeader();
      changeOnHover();
});