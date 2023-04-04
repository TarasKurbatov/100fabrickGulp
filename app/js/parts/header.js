document.addEventListener('DOMContentLoaded', () => {

     //  Scroll Events Start ----------------------------------------- 

    $(window).scroll(function (event) {
        if ($(window).scrollTop() > 0) {
            $('.header, .sticky').addClass('fixed');
        } else {
            $('.header, .sticky').removeClass('fixed');
        }
    });

    if ($(window).scrollTop() > 0) {
        $('.sticky').addClass('fixed');
        $('.header').addClass('header-animated').addClass('fixed')
    }

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {

        var st = $(window).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
        if (st > lastScrollTop && st > navbarHeight) {
            $('.header').addClass('header-animated');

        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.header').removeClass('header-animated');

            }
        }
        lastScrollTop = st;
    }

    //  Scroll Events End -----------------------------------------

    //  MainEventsFunction ----------------------------------------

    function showHeaderModals(dataNav){
        if(dataNav && dataNav !== 'noopen'){
            $('.header__modal-navigation .header__navmodals-btn').removeClass('is-active');
            $(`.header__navmobile-btn[data-event="show-headermodal"]`).removeClass('is-open');
            $('.header__modal-tabsbody').addClass('hidden');
            
                $(`.header__modal-navigation .header__navmodals-btn[data-nav=${dataNav}]`).addClass('is-active');
                $(`.header__navmobile-btn[data-nav=${dataNav}]`).addClass('is-open');
                $(`.header__modal-tabsbody[data-nav=${dataNav}]`).removeClass('hidden');
            

            $('.header__overlay3').fadeIn();
            $('.header__modal').addClass('is-show');
            $('body').addClass('noscroll');
        }
    }

    function hideHeaderModals(){
        $(`.header__navmobile-btn[data-event="show-headermodal"]`).removeClass('is-open');
        $('.header__overlay3').fadeOut();
        $('.header__modal').removeClass('is-show');
        $('body').removeClass('noscroll');
    }

    function hideHeaderSearch(){
        $('.header__showsearch i').removeClass('icon-close').addClass('icon-search');
        $('.header__navmobile-btn[data-event="show-headersearch"]').removeClass('is-open');
        $('.header__search, .header__search-result').fadeOut();
        $('.header__search-form input').val('');
        $('body').removeClass('noscroll');
        $('.header__overlay2').fadeOut();
    }

    function hideHeaderCatalog(){
        $('.header__showcatalog i').removeClass('icon-close').addClass('icon-dots-burger');
        $('.header__navmobile-btn[data-event="show-headercatalog"]').removeClass('is-open').removeClass('icon-close').addClass('icon-dots-burger');
        if ($(window).width() > 991 ) {
            $('.header__catalog').fadeOut();
        }
        $('.header__catalog').removeClass('is-show');
        $('.header__catalog-subcategory').removeClass('is-show');
        $('.header__overlay2').fadeOut();
        $('body').removeClass('noscroll');
    }

    function hideHeaderMobileMenu(){
        $('.header__burger').removeClass('is-open');
        $('.header__menumobile').removeClass('is-show');
        $('body').removeClass('noscroll'); 
    }


    //  Show-Hide Catalog and Search Events Start -----------------------------------------

    $('.header__showcatalog').click(function () {
        $('.header__showsearch i').addClass('icon-search').removeClass('icon-close');
        if($('.header__showcatalog i').hasClass('icon-close')){
            hideHeaderCatalog()
        }
        else{
            $('.header__showcatalog i').removeClass('icon-dots-burger').addClass('icon-close');
            $('.header__overlay2').fadeIn();
            $('.header__catalog-sidebar li').removeClass('is-active');
            $('.header__catalog-sidebar li').eq(0).addClass('is-active');
            $('.header__catalog-subcategory').eq(0).css('display', 'flex');
            $('.header__search, .header__search-result').fadeOut();
            $('.header__catalog').fadeIn();
            $('body').addClass('noscroll');

            
            if ($(window).width() > 991) {
                $('.header__catalog .stock__slider').slick('unslick');
                setTimeout(() => {
                    $('.header__catalog .stock__slider').slick({
                        infinite: true,
                        dots: false,
                        arrows: true,
                        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
                        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                }, 200)
            }
        }
    });

    $('.header__showsearch').click(function () {
        $('.header__showcatalog i').addClass('icon-dots-burger').removeClass('icon-close');
        if($('.header__showsearch i').hasClass('icon-close')){
            hideHeaderSearch();
        }
        else{
            $('.header__showsearch i').removeClass('icon-search').addClass('icon-close');
            $('.header__overlay2').fadeIn();
            $('.header__catalog').fadeOut();
            $('.header__search').fadeIn();
            $('body').addClass('noscroll')
        }
    });

    $('.header__search .header__search-form input').keyup(function () {
        if($(this).val()){
            $(this).closest('.header__search').find('.header__search-result').fadeIn();
        }
        else{
            $(this).closest('.header__search').find('.header__search-result').hide();
        }
    });


    $('.header__search--mobilestatick .header__search-form input').keyup(function () {
        if($(this).val()){
            $(this).closest('.header__search--mobilestatick').find('.header__search-result').fadeIn();
        }
        else{
            $(this).closest('.header__search--mobilestatick').find('.header__search-result').hide();
        }
    });

    $('.header__overlay2').click(function () {
        hideHeaderSearch();
        hideHeaderCatalog();
    });

    //  Show-Hide Catalog and Search Events End -----------------------------------------

    //  Hover Dectop Events Start -----------------------------------------

    var showSubcategoryShow = 0;
    $('.header__nav-ul a, .header__nav-ul>.is-active, .header__nav-ul>span').mouseenter(
        function(e) {
            e.preventDefault();
            if ($(window).width() > 991) {
                if($(this).hasClass('hover') && $(this).hasClass('.is-category')){
                    $('.header__nav-ul a, .header__nav-ul>.is-active, .header__nav-ul>span').removeClass('hover');
                    $('.header__nav-subcategory').fadeOut();
                    $('.header__overlay').fadeOut();
                }
                else{
                    if($(this).hasClass('is-category')){
                        $('.header__nav-ul a, .header__nav-ul>.is-active, .header__nav-ul>span').removeClass('hover');
                        $(this).addClass('hover');
                        let category = $(this).data(category);
                        $('.header__nav-subcategory').hide();
                        if(showSubcategoryShow == 0){
                            showSubcategoryShow = 1;
                            $('.header__overlay').fadeIn();
                            $(`.header__nav-subcategory[data-category= ${category.category}]`).fadeIn();
                        }
                        else{
                            $(`.header__nav-subcategory[data-category= ${category.category}]`).show();
                        }
                        
                    }else{
                        $('.header__nav-ul a, .header__nav-ul>.is-active, .header__nav-ul>span').removeClass('hover');
                        $('.header__nav-subcategory').fadeOut();
                        $('.header__overlay').fadeOut();
                        showSubcategoryShow = 0;
                    }
                }
            }
        }
    );
    $('.header__overlay, .header__top').mouseenter( function(e) {
        $('.header__nav-subcategory').fadeOut();
        $('.header__nav-ul .is-category').removeClass('hover');
        $('.header__overlay').fadeOut();
        showSubcategoryShow = 0
    });

    $('.header__catalog-sidebar li').mouseenter( function(e) {

        if ($(window).width() > 991) {

            $('.header__catalog-sidebar li').removeClass('is-active');
            $(this).addClass('is-active');
            $('.header__catalog-subcategory').hide();
            $('.header__catalog-subcategory').eq($(this).index()).css('display', 'flex');
            var indexCategory = $(this).index();

            
                $('.header__catalog .stock__slider').slick('unslick');
                setTimeout(() => {
                    $('.header__catalog-subcategory').eq(indexCategory).find('.stock__slider').slick({
                        infinite: true,
                        dots: false,
                        arrows: true,
                        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
                        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                }, 200)
        }
    });

    $('.header__catalog-sidebar li .goto-subcategory').click( function(e) {
        if ($(window).width() < 992) {
            $('.header__catalog-subcategory').eq($(this).index()).addClass('is-show');
        }
    });

    //  Hover Dectop Events End -----------------------------------------

    $('.header__catalog-subcategory_close').click(function () {
        $(this).parent('.header__catalog-subcategory').removeClass('is-show');
    });

    $('.header__overlay3, .header__modal-close').click(function () {
        hideHeaderModals();
    });

    //  Left Modals Events Start -----------------------------------------

    $('.show-hmodals').click(function () {
        let dataNav = $(this).data('nav');
        showHeaderModals(dataNav);
    });


    $('.header__navmodals-btn').click(function () {
        let dataNav = $(this).data('nav');
        showHeaderModals(dataNav);
    });

    
    $(`.header__navmobile-btn[data-event="show-headermodal"]`).click(function () {

        hideHeaderSearch();
        hideHeaderCatalog();
        hideHeaderMobileMenu();

        let dataNav = $(this).data('nav');

        if($(this).hasClass('is-open')){
            $(this).removeClass('is-open');
            hideHeaderModals();
        }
        else{
            $(`.header__navmobile-btn[data-event="show-headermodal"]`).removeClass('is-open');
            $(this).addClass('is-open');
            showHeaderModals(dataNav);
        }

    });

    $('.header__navmobile-btn[data-event="show-headercatalog"]').click(function () {

        hideHeaderModals();
        hideHeaderSearch();
        hideHeaderMobileMenu();

        if($(this).hasClass('is-open')){
            hideHeaderCatalog();
        }
        else{
            $(this).addClass('is-open').removeClass('icon-dots-burger').addClass('icon-close');
            $('.header__search, .header__search-result').fadeOut();
            $('.header__catalog').addClass('is-show');
            $('body').addClass('noscroll'); 
        } 
        $('.header__modal').removeClass('is-show');
    });

    $('.header__navmobile-btn[data-event="show-headersearch"]').click(function () {

        hideHeaderModals();
        hideHeaderCatalog();
        hideHeaderMobileMenu();

        if($(this).hasClass('is-open')){
            $('.header__navmobile-btn[data-event="show-headersearch"]').removeClass('is-open')
            hideHeaderSearch();
        }
        else{
            $('.header__navmobile-btn[data-event="show-headersearch"]').addClass('is-open')
            $('body').addClass('noscroll'); 
            $('.header__overlay2').fadeIn();
            $('.header__search').fadeIn();
        } 
        
    });

    // Profile Events Start -----------------------------------------

    $('.header__modal-btn_forgotpassword').click(function () {
        $('.header__modal-profileforms .tab-btn__wrapper').hide();
        $('.tabs-content__wrap .tab-content').hide();
        $('.tabs-content__wrap .tab-content[data-tab="forgotpassword"]').fadeIn();
    });

    $('.header__modal-btn_forgotpasswordcancel').click(function () {
        $('.header__modal-profileforms .tab-btn__wrapper').show();
        $('.tabs-content__wrap .tab-content').hide();
        $('.tabs-content__wrap .tab-content').eq(0).fadeIn();
    });

    $('.header__modal-forgotpassword_form').submit(function() {

        var urlAjax = '/forgotpassword';

        $.ajax({
            type: "POST",
            url: urlAjax,
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.header__modal-profileforms .tab-btn__wrapper').hide();
                    $('.tabs-content__wrap .tab-content').hide();
                    $('.tabs-content__wrap .tab-content[data-tab="forgotpassword-finish"]').fadeIn();
                } else {
                    $('.header__modal-profileforms .tab-btn__wrapper').hide();
                    $('.tabs-content__wrap .tab-content').hide();
                    $('.tabs-content__wrap .tab-content[data-tab="forgotpassword-finish"]').fadeIn();
                }
            },
            error: function(response) {
                $('.header__modal-profileforms .tab-btn__wrapper').hide();
                $('.tabs-content__wrap .tab-content').hide();
                $('.tabs-content__wrap .tab-content[data-tab="forgotpassword-finish"]').fadeIn();
            }
        })
        return false;
    });

    //  Left Modals Events End -----------------------------------------


    // Mobile Events Start -----------------------------------------

    $('.header__search-form_close').click(function () {
        hideHeaderSearch();
    });

    // $('.footer__navcatalog').clone().appendTo('.header__menumobile');
    $('.footer__menu').clone().appendTo('.header__menumobile');

    $('.header__burger').click(function () {

        hideHeaderModals();
        hideHeaderCatalog();
        hideHeaderSearch();

        if($(this).hasClass('is-open')){
            hideHeaderMobileMenu();
        }
        else{
            $('.header__burger').addClass('is-open');
            $('.header__menumobile').addClass('is-show');
            $('body').addClass('noscroll'); 
        }
    });

    // Mobile Events End -----------------------------------------


    

});