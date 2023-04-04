document.addEventListener('DOMContentLoaded', () => {

    $('.profile__btnshow_authheader').click(function () {
        $('.header__modal .header__navmodals-btn[data-nav="auth"]').click();
    });

    if(document.querySelector('.profile__page-header')){

        $('.profile__page-header_nav').clone().addClass('show-mobile').addClass('type-mobilestiky').insertAfter('.profile__page-header');

        $(window).scroll(function (event) {
            if ($(window).scrollTop() > $('.profile__page-header').offset().top + $('.profile__page-header').height()){
                $('.profile__page-header_nav').addClass('is-show');
            } else {
                $('.profile__page-header_nav').removeClass('is-show');
            }
        });

        if ($(window).scrollTop() > $('.profile__page-header').offset().top + $('.profile__page-header').height()){
            $('.profile__page-header_nav').addClass('is-show');
        } else {
            $('.profile__page-header_nav').removeClass('is-show');
        }
    }

   
    /*$('.profile__mdataform-edit').click(function () {
        $('.profile__mdataform-edit, .profile__mdataform-value').hide();
        $('.profile__mdataform-submit, .profile__mdataform-col .input-wrap').removeClass('hidden');
    }); */

    $('.profile__mdataform-col input').keyup(function () {
        $(this).closest('.profile__mdataform-col').find('.profile__mdataform-value').text($(this).val());
    }); 

    $('.profile__mdataform').submit(function() {
        var urlAjax = '/profile-editdata';
        $.ajax({
            type: "POST",
            url: urlAjax,
            data: $(this).serialize(),
            success: function(response) {
                if (response) {
                    $('.profile__mdataform-edit, .profile__mdataform-value').show();
                    $('.profile__mdataform-submit, .profile__mdataform-col .input-wrap').addClass('hidden');
                } else {
                    $('.profile__mdataform-edit, .profile__mdataform-value').show();
                    $('.profile__mdataform-submit, .profile__mdataform-col .input-wrap').addClass('hidden');
                }
            },
            error: function(response) {
                $('.profile__mdataform-edit, .profile__mdataform-value').show();
                $('.profile__mdataform-submit, .profile__mdataform-col .input-wrap').addClass('hidden');
            }
        })
        return false;
    });

    function countDellItem(){
        $('.profile__mdelliveryitem').each(function( index ) {
            $(this).find('.profile__mdelliveryitem-label .delllabel_cout').text(index+1);
        });
    }

    $('body').on('click', '.profile__mdelliveryitem-edit', function() {
        $(this).addClass('hidden');
        $(this).closest('.profile__mdelliveryitem').find('.profile__mdelliveryitem-value').addClass('hidden');
        $(this).closest('.profile__mdelliveryitem').find('.profile__mdelliveryitem-submit, .profile__mdelliveryitem-col .input-wrap').removeClass('hidden');
    });

    $('body').on('click', '.profile__mdelliveryitem-submit', function() {
        if ($(this).closest('.profile__mdelliveryitem').find('.input').val().length === 0) {
            $(this).closest('.profile__mdelliveryitem').find('.input').addClass('error');
            $(this).closest('.profile__mdelliveryitem').find('.error-text').fadeIn();
        }
        else{
            $(this).addClass('hidden');
            $(this).closest('.profile__mdelliveryitem').find('.profile__mdelliveryitem-edit, .profile__mdelliveryitem-value').removeClass('hidden');
            $(this).closest('.profile__mdelliveryitem').find('.profile__mdelliveryitem-col .input-wrap').addClass('hidden');
        }
    });
    $('body').on('keyup', '.profile__mdelliveryitem input', function() {
        $(this).closest('.profile__mdelliveryitem').find('.profile__mdelliveryitem-value').text($(this).val());
    });

    $('body').on('click', '.profile__mdelliveryitem-remove', function() {
        $(this).closest('.profile__mdelliveryitem').remove();
        countDellItem();
    });

    $('.profile__adddelladdress').click(function () {
        $('.profile__mdelliveryitem.clone--item').clone().removeClass('hidden').removeClass('clone--item').appendTo('.profile__mdelliveryform');
        countDellItem();
    });

});