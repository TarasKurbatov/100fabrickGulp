document.addEventListener('DOMContentLoaded', () => {

    $('a[href*="#"]').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 900);
        return false;
    });

    $('.slidetoggle-title').click(function() {
        $(this).toggleClass('is-open');
        $(this).parent('.slidetoggle').find('.slidetoggle-text').slideToggle();
    });

    $('.counter .counter-btn').click(function() {
        var currentQty = $(this).parent().find('input').val();
        if ($(this).hasClass('counter-minus') && currentQty > 1) {
            $(this).parent().find('input').val(parseInt(currentQty, 10) - 1);
        } else {
            if ($(this).hasClass('counter-plus')) {
                $(this).parent().find('input').val(parseInt(currentQty, 10) + 1);
            }
        }
    });

    $('.tab-btn').click(function() {
        if(!$(this).parent().hasClass('tabs-disable')){
            var tabsType = $(this).parent('.tab-btn__wrapper').data('tabs');
            $(this).parent('.tab-btn__wrapper').find('.tab-btn').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.tabs-content__wrap[data-tabs= ' + tabsType + '] .tab-content').hide();
            $('.tabs-content__wrap[data-tabs= ' + tabsType + '] .tab-content').eq($(this).index()).fadeIn();
        }
    });

    

        document.querySelectorAll('.scroll-horizontal').forEach((slider) => {
                
            let isDown = false;
            let startX;
            let scrollLeft;

            if ($(window).width() > 991 ) {

                slider.addEventListener('mousedown', (e) => {
                    let rect = slider.getBoundingClientRect();
                    isDown = true;
                    slider.classList.add('active');
                    startX = e.pageX - rect.left;

                    scrollLeft = slider.scrollLeft;
                    
                });

                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.dataset.dragging = false;
                    slider.classList.remove('active');
                });

                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.dataset.dragging = false;
                    slider.classList.remove('active');
                });

                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    let rect = slider.getBoundingClientRect();
                    e.preventDefault();
                    slider.dataset.dragging = true;

                    const x = e.pageX - rect.left;

                    const walk = (x - startX);

                    slider.scrollLeft = scrollLeft - walk;
                
                });

            }
        });

    

    // Form ----------------------------------------

    $('.phone-mask').mask("+7(999)999-99-99");

    $('body').on('click', '.input', function() {
        $(this).removeClass('error');
        $(this).next('.error-text').fadeOut();
    });

    $('.rating-input input').click(function() {
        $(this).parent().parent().find('.error-text').fadeOut();
        $(this).parent().parent().addClass('checked');
    });

    $('.input').bind('focus', function() {
        $(this).removeClass('error')
        $(this).parent('.input-wrap').addClass('focus');
        $(this).parent('.input-wrap').removeClass('error');
        $(this).next('.error-text').fadeOut();
    });

    $('.input').bind('blur', function() {
        if ($(this).val() == 0) {
            $(this).parent('.input-wrap').removeClass('focus');
            $(this).parent('.input-wrap').removeClass('error');
            $(this).next('.error-text').fadeOut();
        }
    });
    $('body').on('keyup', '.input', function() {
        if (!$(this).val() == 0) {
            $(this).parent().find('.value-clear').show();
        }
    });
    

    $('.input-wrap .value-clear').click(function() {
        $(this).hide();
        $(this).parent().find('input').val('');
        $(this).parent().removeClass('focus');
    });

    $('.input-wrap-showpassword').click(function() {
        $(this).toggleClass('icon-eye').toggleClass('icon-eye-off');
        if($(this).closest('.input-wrap').find('.input').attr('type') == 'password'){
            $(this).closest('.input-wrap').find('.input').attr('type', 'text');
        }
        else{
            $(this).closest('.input-wrap').find('.input').attr('type', 'password');
        }
        
        
    });

    $('.select-input').click(function() {
        $(this).toggleClass('open');
        $(this).parent().find('.select-options').fadeToggle();
    });
    

    $('.select-options .select-optionvalue').click(function() {
        var selectPops = $(this).html();
        var selectPopsText = $(this).text();
        $(this).parent().find('.select-optionvalue').removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.select-inputvalue').html(selectPops);
        $(this).parent().parent().find('.select-input input[type=hidden]').val(selectPopsText);
        $(this).parent().parent().find('.select-input').removeClass('open');
        $(this).parent().fadeToggle();
    });

    $('.form .checkbox--required').bind('click', function(v) {
        if ($(this).children('.checkbox-input').is(':checked')) {
            $(this).children('.checkbox-inputcustom').addClass('checked').removeClass('error');
        } else {
            $(this).children('.checkbox-inputcustom').removeClass('checked');
        }
    });


    $('.form .checkbox[data-js="togglereq_email"]').bind('click', function(event) {
        if ($(this).children('.checkbox-input').is(':checked')) {
            $(this).closest('.form').find('.input-wrap[data-js="togglereq_email"] .input').removeClass('required').removeClass('error');
            $(this).closest('.form').find('.input-wrap[data-js="togglereq_email"] .label-input .red').hide();
            $(this).closest('.form').find('.input-wrap[data-js="togglereq_email"] .error-text').fadeOut();
        } else {

            $(this).closest('.form').find('.input-wrap[data-js="togglereq_email"] .input').addClass('required');
            $(this).closest('.form').find('.input-wrap[data-js="togglereq_email"] .label-input .red').show();

            
        }
    });

    $('.form .btn-submit').click(function(event) {
        event.preventDefault();
        var error = 0;
        $(this).closest('.form').find('.required').each(function() {
            if ($(this).val().length === 0) {
                $(this).addClass('error');
                $(this).next().fadeIn();
                error = 1;
            }

        });
        if ($(this).closest('.form').find('.checkbox--required').length) {
            
            if ($(this).closest('.form').find('.checkbox--required .checkbox-inputcustom').hasClass('checked')) {
                $(this).closest('.form').find('.checkbox--required .checkbox-inputcustom').removeClass('error')
            } else {
                $(this).closest('.form').find('.checkbox--required .checkbox-inputcustom').addClass('error');
                error = 1;
            }
        }
        if ($(this).closest('.form').find('.rating-input').length) {
            if (!$(this).closest('.form').find('.rating-input').hasClass('checked')) {
                error = 1;
                $(this).closest('.form').find('.rating-input .error-text').fadeIn();
            }
        }
        /*if (error == 1) {
            $(this).closest('form').find('.required.error').each(function() {
                $('html, body').animate({
                    scrollTop: $('.required.error').offset().top - 150
                }, 500);
            });
        }*/
        if (error == 0) {
            $(this).closest('form').submit();
        }
    });

    $('.form__dateselect .select-input.date_from').click(function(event) {
        event.preventDefault();
        $('.form__dateselect .select-input.date_to').removeClass('open');
        $('.form__dateselect .select-input.date_to').next('.select-options').fadeOut();
    });
    $('.form__dateselect .select-input.date_to').click(function(event) {
        event.preventDefault();
        $('.form__dateselect .select-input.date_from').removeClass('open');
        $('.form__dateselect .select-input.date_from').next('.select-options').fadeOut();
    });

    function successfullEvents() {
        $('.popup__modal').fadeIn();
        $('.popup').fadeOut();
        $('.popup__successfull').fadeIn(1000);
        setTimeout(function() {
            $('.form').trigger('reset');
            $('.form .input-wrap').removeClass('focus');
        }, 1000);
    }

    $('.form.popup__backcall, .form[data-form="standartform"]').submit(function() {
        if ($(this).hasClass('backcall')) {
            var urlAjax = '/callback';
        }
        $.ajax({
            type: "POST",
            url: urlAjax,
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    successfullEvents()
                } else {
                    successfullEvents()
                }
            },
            error: function(response) {
                successfullEvents()
            }
        })
        return false;
    });

    // Popup ---------------------------------------

    $('.show-popup').click(function(event) {
        event.preventDefault();
        var typePopup = $(this).data('popup');
        if($(this).data('title')){
            $('.popup[data-popup= ' + typePopup + ']').find('.popup__title').text($(this).data('title'));
        }
        else{
            $('.popup[data-popup= ' + typePopup + ']').find('.popup__title').text($(this).text());
        }
        $('body').addClass('noscroll');
        $('.popup__modal').fadeIn();
        $('.popup[data-popup= ' + typePopup + ']').fadeIn();
    });

    $('.popup__mask, .popup__close').click(function(event) {
        event.preventDefault();
        $('body').removeClass('noscroll');
        $('.popup, .popup__modal').fadeOut();
        $('.popup__video iframe').remove();
    });

    $('.show-popup-video').click(function(event) {
        event.preventDefault();
        var video = '<iframe class="youtube" height="100%" width="100%" src="https://www.youtube.com/embed/' + $(this).data('video') + '?rel=0;autoplay=1" allowfullscreen frameborder="0"></iframe>';
        $('.popup__video').append(video);
        $('body').addClass('noscroll');
        $('.popup__modal').fadeIn();
        $('.popup__video').fadeIn();
    });



    // Range Slider ---------------------------------------

    $('.ionslider__input').ionRangeSlider({
        onChange: function (data) {
            $(data.input[0]).parent().find('.ionslider__min span').text(data.from)
            $(data.input[0]).parent().find('.ionslider__max span').text(data.to)
        },
    });

    // Gallery Slider ---------------------------------------

    $('.section__gallery-row').slickLightbox({
        itemSelector: '.section__gallery-foto'
    });
    $('.section__gallery-slider2img').slick({
        infinite: false,
        dots: true,
        arrows: true,
        speed: 900,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});