function changeIconHover(){
    $('.row__img').hover(function (event) {
        // on hover in
        if((event.target.nodeName)==='IMG'){
            $(event.target).css({
                'background-color': 'red'
            })
            console.log('hover in');
        }
      },function (event) {
        // hover out
        if((event.target.nodeName)==='IMG'){
            $(event.target).css({
                'background-color': 'transparent'
            })
            console.log('hover out');
        }
    });
}


$(window).resize(function(){
    if ($(window).width() > 768) {
     // do stuff
    }
});


$(function(){
    // $('.slider__header').slick({
    //     autoplay: true,
    //     arrows: false,   
    // });
});