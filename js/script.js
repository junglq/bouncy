$(document).ready(function () {
    // Slider
    $('.reviews__slider,.team__slider,.news__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true
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
        checkscroll(scrollOffset);
    })

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
            scrollTop: elementOffset - 60
        }, 1000)

    })

    // Arrow scroll
    let intro = $(".intro");
    let introH = intro.innerHeight();

    $(".intro__arrow").on("click resize", function (event) {
        event.preventDefault();
        introH = intro.innerHeight();
        $("html,body").animate({
            scrollTop: introH - 60
        }, 1000)
    })

    // Animation items
    const animItems = document.querySelectorAll('.anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            console.log(1);
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('active');
                } else {
                    if (!animItem.classList.contains('anim-no-hide')) {
                        animItem.classList.remove('active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
});