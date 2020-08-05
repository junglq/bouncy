$(document).ready(function () {

    // Slider
    $('.reviews__slider,.team__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });

    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });

    // Burger 
    $('.header__burger').on('click', function (event) {
        event.preventDefault();
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    // Fixed Header
    let scrollOffset = $(window).scrollTop();
    checkscroll(scrollOffset);

    $(window).on('scroll resize', function () {
        scrollOffset = $(this).scrollTop();
        // topScroll(scrollOffset);
        checkscroll(scrollOffset);
    })

    // function topScroll(scrollOffset) {
    //     if (scrollOffset + 59 < 701) {
    //         $('#hello').addClass('active');
    //     } else {
    //         $('#hello').removeClass('active');
    //     }
    // }

    function checkscroll(scrollOffset) {
        if (scrollOffset > 0) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $('.nav__link').not($(this)).removeClass('active');
        $(this).addClass('active');

        $('.header__menu,.header__burger').removeClass('active');
        $('body').removeClass('lock');

        $("html,body").animate({
            scrollTop: elementOffset - 59
        }, 1000)

    })


    let intro = $(".intro");
    let introH = intro.innerHeight();

    $(".intro__arrow").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: introH - 59
        }, 1000)
    })
})



