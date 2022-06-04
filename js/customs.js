(function ($) {
    "use strict";


    // Partnet Active
    $('.partner_active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 5000,
        responsive: {
            0: {
                items: 2
            },
            767: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    })
    // Review Active
    $('.review_active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 3000,
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