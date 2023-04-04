document.addEventListener('DOMContentLoaded', () => {
    
    $('.hpslider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.company__slider, .store__page-slider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.services__itemslider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        speed: 900,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
        ]
    });

    $('.services__page-hnav_btnmore').click(function() {
        $(this).closest('.services__page-hnav_btnlist').find('.btn.hidden').removeClass('hidden');
        $(this).hide();
    });


    if(document.querySelector('.services__page-hnav')){

        $('.services__page-hnav_btnlist').clone().addClass('show-mobile').addClass('type-mobilestiky').insertAfter('.services__page-hnav');

        $(window).scroll(function (event) {
            if ($(window).scrollTop() > $('.services__page-hnav').offset().top + $('.services__page-hnav').height()){
                $('.services__page-hnav_btnlist.type-mobilestiky').addClass('is-show');
            } else {
                $('.services__page-hnav_btnlist.type-mobilestiky').removeClass('is-show');
            }
        });

        if ($(window).scrollTop() > $('.services__page-hnav').offset().top + $('.services__page-hnav').height()){
            $('.services__page-hnav_btnlist.type-mobilestiky').addClass('is-show');
        } else {
            $('.services__page-hnav_btnlist.type-mobilestiky').removeClass('is-show');
        }
    }

    $('.reviews__itemv2-body .section__gallery-row .link-btn').click(function() {
        $(this).find('span').eq(0).toggle();
        $(this).find('span').eq(1).toggle();
        $(this).closest('.section__gallery-row').find('.section__gallery-foto.hidden').toggle();
    });

    $('.reviews__loadmore').click(function() {
        $(this).find('span').text($(this).find('span').text() == 'Все отзывы' ? 'Скрыть' : 'Все отзывы');
        $(this).find('i').toggleClass('icon-plus-circle');
        $('.reviews__itemlist').find('.reviews__itemv2.hidden').toggle();
    });
    
});