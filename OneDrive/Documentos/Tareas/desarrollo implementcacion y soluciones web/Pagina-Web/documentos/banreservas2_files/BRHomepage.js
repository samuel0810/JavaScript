$(document).ready(function() {

//    Necesidades Carusel
    $('.container_necesidades .owl-carousel').owlCarousel({
        loop: false,
        stagePadding: 0,
        margin: 0,
        autoplay: !1,
        mouseDrag: !1,
        responsiveClass: !0,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            481: {
                items: 2,
                nav: !0
            },
            681: {
                items: 3,
                nav: !0
            },
            1000: {
                items: 5,
                nav: !0,
                loop: !1
            }
        }
    });

    $('#container_necesidades a[data-toggle="collapse"]').click(function(e) {
        target = $(this).attr('data-target')
        if ($(target).hasClass('show')) {
            e.preventDefault();
            e.stopPropagation()
        }
    });

    // Marketing board carusel
    $('#container_marketing_board .owl-carousel').owlCarousel({
        loop: !1,
        autoplay: !1,
        margin: 0,
        nav: !0,
        items: 1,
        smartSpeed: 900,
        mouseDrag: !1,
        dots: !1,
        autoplayHoverPause: !0
    });
    $("#container_marketing_board .owl-stage-outer").after("<div class='container c-control'><div class='control-mboard'></div></div>");
    $("#container_marketing_board .owl-nav").detach().appendTo('.control-mboard')

    // Promociones especiales
    $('#container_promociones_especiales .owl-carousel').owlCarousel({
        loop: true,
        autoplay: !0,
        margin: 0,
        nav: !0,
        items: 3,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            580: {
                items: 2,
                nav: !0
            },
            980: {
                items: 3,
                nav: !0,
                loop: !1
            },
            smartSpeed: 900,
            mouseDrag: !1,
            autoplayHoverPause: !1
        }
    });
    $("#container_promociones_especiales .owl-dots").insertAfter(".container_promociones_especiales .owl-prev")

    // Programas
    $('.container_programas .owl-carousel').owlCarousel({
        loop: !0,
        margin: 0,
        responsiveClass: !0,
        dots: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0
            },
            768: {
                items: 2,
                nav: !1
            }
        }
    });
    $("#programasSmall .owl-dots").insertAfter("#programasSmall .owl-prev")
   
   

  
    
})
