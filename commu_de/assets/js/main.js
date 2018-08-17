function showHeaderOnScrollUp() {
    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        if(st < lastScrollTop) {
            $('.fixed__header').css({
                'display': 'block'
            })
            // console.log('up 1');
        }
        else {
            $('.fixed__header').css({
                'display': 'none'
            })
            // console.log('down 1');
        }
        lastScrollTop = st;
    });
}

function carouselPC() {
    $('.main__carousel').slick({
        autoplay: false,
        slidesToShow: 1,
        arrows: false,   
        draggable: false,
    });
    $('.secondary__carousel').slick({
        variableWidth: true,
        width: '12px',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main__carousel',
        arrows: true,  
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.pagination-prev'),
        nextArrow: $('.pagination-next'),   
    }); // pc-mode
}

function carouselSP() {
    $('.text__carousel-sp').slick({
        variableWidth: true,
        width: '300px',
        slidesToShow: 1,
        slidesToScroll: 0,
        centerMode: true,
        arrows: false,
        draggable: true,
        asNavFor: '.sp-slider-handler',
    });
    $('.main__carousel-sp').slick({
        autoplay: false,
        slidesToShow: 1,
        falde: true,
        arrows: false,   
        draggable: true,
        asNavFor: '.sp-slider-handler',
    });
    $('.secondary__carousel-sp').slick({
        variableWidth: true,
        width: '12px',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sp-slider-handler',
        arrows: false,  
        centerMode: true,
        focusOnSelect: true,
    }); // sp-mode
};


function marquee() {
    $('.marquee').slick({
        centerPadding: '280px',
        slidesToShow: 1,
        autoplaySpeed: 0,
        speed: 9000,
        centerMode: true,
        cssEase: 'linear', 
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable:false,
        autoplay: true,
        variableWidth: true,
        width: '100px',
        infinite:true, 
        autoplaySpeed: 0,
        easing:'linear',
        arrows: false,
        accessibility: false,
    }) // marquee sp
}

function changeArrows() {
    var sp =  "./assets/images/carousel/phone-arrow-down-sp.png";
    var pc = "./assets/images/carousel/phone-arrow-down.png";
    if ($(window).width() < 768) {
        $('.img-arrow').attr({
            'src': sp
        })
    }else {
        $('.img-arrow').attr({
            'src': pc
        })
    }
    // on screen resize 
    $(window).resize(function () {
    if ($(window).width() < 768) {
        $('.img-arrow').attr({
            'src': sp
        })
    }else {
        $('.img-arrow').attr({
            'src': pc
        })
    }

    });
}

$(function(){
    showHeaderOnScrollUp();
    // on initial screen load
    changeArrows();
    if ($(window).width() < 768) {
        carouselSP();
       // marqueeSP();
    }else {
        carouselPC();
        // marqueePC();
    }
    // on screen resize 
    $(window).resize(function () {
    // fixes stop on screen resize
    marquee();
    if ($(window).width() < 768) {
        carouselSP();
    }else {
        carouselPC();
    }
    });
    marquee();
   
}); //end of main function
