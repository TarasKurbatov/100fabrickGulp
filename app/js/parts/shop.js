document.addEventListener('DOMContentLoaded', () => {

    $('.catalog__catcard-slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        speed: 900,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
        ]
    });

    if ($(window).width() < 768 ) {
        $('.catalog__sgroup-rowslider .hide-md').remove();

        $('.catalog__sgroup-rowslider').slick({
            infinite: false,
            dots: true,
            arrows: true,
            speed: 900,
            prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
            nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: "unslick"
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        // variableWidth: true,
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
    }

    $('.product__item-imgslider_dots div, .product__item-imgslider_navdots div').mouseover(function() {
        $(this).closest('.product__item').find('.product__item-imgslider_dots div').removeClass('is-active');
        $(this).closest('.product__item').find('.product__item-imgslider_dots div').eq($(this).index()).addClass('is-active');
        $(this).closest('.product__item').find('.product__item-imgslider_navdots div').removeClass('is-active');
        $(this).closest('.product__item').find('.product__item-imgslider_navdots div').eq($(this).index()).addClass('is-active');
        $(this).closest('.product__item').find('.product__item-imgslider_gallery img').removeClass('is-show');
        $(this).closest('.product__item').find('.product__item-imgslider_gallery img').eq($(this).index()).addClass('is-show');
    });

    $('.product__itemslider').slick({
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

    $('.product__itemslidercol6').slick({
        infinite: false,
        dots: true,
        arrows: true,
        speed: 900,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 680,
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

    if ($(window).width() > 576 ) {

        $('.product__itemmoduleslider').slick({
            infinite: false,
            dots: true,
            arrows: true,
            speed: 900,
            prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
            nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
            rows: 3,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        rows: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        rows: 2,
                        slidesToShow: 1,
                        lidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        rows: 1,
                        slidesToShow: 1,
                        lidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 310,
                    settings: {
                        rows: 1,
                        slidesToShow: 1,
                        lidesToScroll: 1,
                    }
                },
            ]
        });

    }

    if ($(window).width() < 576 ) {
        $('.product__itemmoduleslider').slick({
            infinite: false,
            dots: true,
            arrows: true,
            speed: 900,
            prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
            nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        });
    }

    $( window ).resize(function() {
        if ($(window).width() < 768 ) {
            if(!$('.catalog__sgroup-rowslider').hasClass('slick-slider')){
                $('.catalog__sgroup-rowslider').slick({
                    infinite: false,
                    dots: true,
                    arrows: true,
                    speed: 900,
                    prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
                    nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
                    responsive: [
                        {
                            breakpoint: 1199,
                            settings: "unslick"
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                // variableWidth: true,
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
            }
        }
    });

    function hideAlertAddFavorite() {
        $('.popup__alert-addfavorite').fadeOut();
    }
    function hideAlertAddtoCart() {
        $('.popup__alert-addtocart').fadeOut();
    }

    $('.product__item-favoritebtn').click(function() {
        if(!$(this).hasClass('is-favorite')){
            $(this).addClass('is-favorite')
            $('.popup__alert-addfavorite').fadeIn();
            setTimeout(hideAlertAddFavorite, 1500);
        }
        else{
            $(this).removeClass('is-favorite')
        }
    });
    $('.product__item-addbtn, .product__addbtn').click(function() {
        $('.header__navmodals-btn .span-count, .header__navmobile-btn .span-count').css('display', 'flex')
        $('.popup__alert-addtocart').fadeIn();
        setTimeout(hideAlertAddtoCart, 1500);

        
    });

    $('.cartproduct__item-addbtn').click(function() {
        $(this).hide();
        $(this).closest('.cartproduct__item').find('.cartproduct__item-rblock').removeClass('hidden');
        $('.popup__alert-addtocart').fadeIn();
        setTimeout(hideAlertAddtoCart, 1500);
    });

    $('.cartproduct__item-remove[data-events="show-addbtn"]').click(function() {
        $(this).closest('.cartproduct__item').find('.cartproduct__item-rblock').addClass('hidden');
        $(this).closest('.cartproduct__item').find('.cartproduct__item-addbtn').show();
    });

    $('.cartproduct__complect-showlistproduct').click(function() {
        $(this).toggleClass('is-open');
        $(this).closest('.cartproduct__complect').find('.cartproduct__complect-listproduct').slideToggle();
        $(this).find('._toggletitle').text($(this).find('._toggletitle').text() == 'Показать модули' ? 'Скрыть модули' : 'Показать модули');
    });

    $('.catalog__scatcover-catlist .catalog__btnlinkmore').click(function() {
        $(this).hide();
        $(this).closest('.catalog__scatcover-catlist').find('.catalog__btnlink').removeClass('hidden')
    });
    $('.catalog__catcard-listlink .catalog__btnlinkmore').click(function() {
        $(this).hide();
        $(this).closest('.catalog__catcard-listlink').find('.catalog__btnlink').removeClass('hidden')
    });

    $('.catalog__tagsbtn_more').click(function() {
        $(this).hide();
        $(this).closest('.catalog__tagsblock-listbtn').find('.catalog__tagsbtn').removeClass('hidden')
    });

    $('.catalog__subcatcard-flexlist .catalog__sgroup-showallbtn.show-more').click(function() {
        $(this).parent('.catalog__subcatcard').hide();
        $(this).closest('.catalog__subcatcard-flexlist').find('.catalog__subcatcard').removeClass('hidden')
    });

    // Filter ------------------------------------

    $('.filter__item-title').click(function() {
        $(this).toggleClass('is-open');
        $(this).next('.filter__item-props').slideToggle();
    });

    $('.filter__btn-show').click(function() {
        $('.filter').addClass('is-open');
        $('.header__overlay3').fadeIn();
    });

    $('.filter__close, .header__overlay3').click(function() {
        $('.filter').removeClass('is-open');
        $('.header__overlay3').fadeOut();
    });

    $('.catalog__horizontalfilter-showmore').click(function() {
        $(this).closest('.catalog__horizontalfilter').find('.filter__item').removeClass('hidden');
        $(this).hide();
    });


    // Product detail -----------------------------

    $('.product__page-img').slickLightbox({
        itemSelector: '.product__page-imglightbox'
    });
    $('.product__page-imgslider').slick({
        infinite: false,
        speed: 900,
        dots: false,
        arrows: true,
        prevArrow: $('.product__page-imgslidernav .btn-prev'),
        nextArrow: $('.product__page-imgslidernav .btn-next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__page-imggallery',
    });

    $('.product__page-imggallery').slick({
        infinite: false,
        speed: 900,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        focusOnSelect: true,
        asNavFor: '.product__page-imgslider',
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    variableWidth: false,
                }
            },
        ]
    });

    $('.product__colorcard.type--selectcard').click(function() {
        $(this).closest('.product__colorcard-wrapper ').find('.product__colorcard.type--selectcard').removeClass('is-selected');
        $(this).addClass('is-selected');
        
    });

    $('.product__colorcard.type--selectcard').click(function() {
        $(this).closest('.header__modal-tabsbody').find('.header__modal-cart_footer .btn.btn-disable').removeClass('btn-disable');
    });

    $('.product__page-addbtn').click(function(event) {
        event.stopPropagation();
        console.log('dgdfgd');
        if($(this).hasClass('isnotselected_color')){
            $(`.header__modal-tabsbody[data-nav="colorsmodal-dproduct"]`).find('.product__addbtn').css('display', 'flex').show();
            $(`.header__modal-tabsbody[data-nav="colorsmodal-dproduct"]`).find('.product__addcolor').hide(); 
        }else{
            console.log('dgdfgd');
            $('.header__overlay3').fadeOut();
            $('.header__modal').removeClass('is-show');
            $('body').removeClass('noscroll');
            $('.popup__alert-addtocart').fadeIn();
            setTimeout(hideAlertAddtoCart, 1500);
        }
        
        return false;
    });

    $('.product__colors-choosebtn').click(function() {
        $(`.header__modal-tabsbody[data-nav="colorsmodal-dproduct"]`).find('.product__addbtn').hide();
        $(`.header__modal-tabsbody[data-nav="colorsmodal-dproduct"]`).find('.product__addcolor').css('display', 'flex').show(); 

        $('.product__page-addbtn').removeClass('isnotselected_color');
        $('.product__page-addbtn').removeClass('show-hmodals');
        $('.product__page-addbtn').data( "nav", 'noopen' );
        
    });

    $('.product__addcolor').click(function() {
        
    });
    
    $('.product__addbtn, .product__addcolor').click(function() {

        $('.product__page-addbtn').removeClass('isnotselected_color');
        $('.product__page-addbtn').removeClass('show-hmodals');
        $('.product__page-addbtn').data( "nav", 'noopen' );

        var color = $(`.header__modal-tabsbody[data-nav="colorsmodal-dproduct"]`).find('.product__colorcard.is-selected').data('color');
        $('.product__page-detail .product__colors-flexlist .product__colors-btndisabled').removeClass('is-active');
        $(`.product__page-detail .product__colors-flexlist .product__colors-btndisabled[data-color="${color}"]`).addClass('is-active');

        $('.header__overlay3').fadeOut();
        $('.header__modal').removeClass('is-show');
        $('body').removeClass('noscroll');

        

    });

    

    // Checkout&Order -----------------------------

    $('.checkout__step .input').keyup(function () {
        let dataAttr = $(this).data('input');
        $(`.checkout__step .profile__mdataform-value[data-input="${dataAttr}"]`).text($(this).val());
    }); 

    $('.checkout__step .select .select-optionvalue').click(function () {
        let dataAttr = $(this).closest('.select').data('input');
        $(`.checkout__step .profile__mdataform-value[data-input="${dataAttr}"]`).text($(this).text());
    }); 

    $('.checkout__step-header_edit').click(function() {
        $(this).closest('.checkout__step').addClass('is-open').removeClass('is-save');
    });

    $('.checkout__step-nextstep').click(function() {
        let stepNumber = $(this).data('nextstep');
        $(this).closest('.checkout__step').addClass('is-save').removeClass('is-open');
        $(`.checkout__step[data-step="${stepNumber}"]`).addClass('is-open').removeClass('is-save').removeClass('is-disabled');
        $(`.checkout__step-infototalprops[data-step="${stepNumber}"]`).fadeIn()
    });

    $('.checkout__step.step--1').submit(function(event) {
        event.preventDefault();
        $('.checkout__step.step--1').addClass('is-save').removeClass('is-open');
        $('.checkout__step.step--2').addClass('is-open').removeClass('is-disabled');
        $(`.checkout__step-infototalprops[data-step="2`).fadeIn()
        return false;
    });

    

})