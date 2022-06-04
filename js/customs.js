(function ($) {
    "use strict";


 // owlCarousel
 $('.review_active').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        992: {
            items: 1
        }
    }
})


})(jQuery);