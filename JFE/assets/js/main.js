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

function viewport(){
	var _ua = (function(u){
	  return {
	    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
	      || u.indexOf("ipad") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
	      || u.indexOf("kindle") != -1
	      || u.indexOf("silk") != -1
	      || u.indexOf("playbook") != -1,
	    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
	      || u.indexOf("iphone") != -1
	      || u.indexOf("ipod") != -1
	      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
	      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
	      || u.indexOf("blackberry") != -1
	  }
	})(window.navigator.userAgent.toLowerCase());
	if(_ua.Tablet){
		//for this code only apply tablet
		$("meta[name='viewport']").attr('content', 'width=1300');
	}
} // forces tablet devices to have a width of 1300 to accept the pc layout

function changeOnHover() {
    $( ".contact-btn" ).hover(
        function() {
          $( '.contact-btn-img' ).attr('src',"./assets/img/commons/mail-icon.png");
        }, function() {
          $( '.contact-btn-img' ).attr('src',"./assets/img/commons/mail-icon-blue.png");
        }
	  );

	$(".contact").hover(
		function () {
			$( '.contact-btn-mail' ).attr('src',"./assets/img/commons/mail-icon-blue.png");
		}, function () {
			$( '.contact-btn-mail' ).attr('src',"./assets/img/commons/mail-icon.png");
		});
}

function burgerBtn() {
	$('.burger-sp').click(function(){
		$('.burger-sp').toggleClass("white");
		$('.top').toggleClass("one");
		$('.mid').toggleClass("two");
		$('.bottom').toggleClass("three");
		$('.burger-dropDown').toggleClass("active");
		$('.main').toggleClass("darken");
	});
}

function navDropDown() {
	$(".item-01").hover(
		function () {
			$(".drawer-01").css({
				"height": "auto"
			})
		},
		function () {
			$(".drawer-01").css({
				"height": "0px"
			})
		}
	)
}

$(function(){
    smoothScroller();
	viewport();
	changeOnHover();
	navDropDown();
	burgerBtn();
});