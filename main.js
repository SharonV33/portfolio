jQuery(document).ready(function ($) {
    //	$('body').css('padding-top', $('header').innerHeight()); 


    // when clicking on the hamburger menu, open the menu
    // used mainly for mobile devices
    $('.menu-icon.hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.theme-nav .menu-main-menu-container').toggleClass('active');
    });

    // if a menu item has a sub menu, prevent the default behaviour
    // when clicking this item. Instead give the parent an active class
    // to open the sub menu
    $('.menu-item-has-children > a').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').toggleClass('active');
    });
    $('.theme-hero').css('padding-top', $('.theme-header').innerHeight());


    // when user is scrolling, minimise the header
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });

    // add autoplay to video player when overlay is clicked
    $('.theme-video__overlay').on('click', function () {
        $(this).removeClass('active');
        console.log($(this).parent().find('iframe')[0].src);
        $(this).parent().find('iframe')[0].src += '&autoplay=1';
    });

    // set up slick slider for theme-split-slider
    $('.theme-split-slider').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    // set up slick slider for theme-offset-slider
    $('.theme-offset-slider').slick({
        infinite: false,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    // set up slick slider for theme-small-grid
    $('.theme-small-grid').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            }
        ]
    });

    // set up slick slider for theme-review__slider
    $('.theme-review__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
    });

    // set up slick slider for theme-step-slider
    $('.theme-step-slider').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    });

    $('.theme-product__slider a').on('click', function (e) {
        e.preventDefault();
    })

    $('.theme-product__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        arrows: false,
        dots: true,
        //autoplaySpeed: 5000,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            }
        ]
    });
});