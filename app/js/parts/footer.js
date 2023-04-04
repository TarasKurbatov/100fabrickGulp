document.addEventListener('DOMContentLoaded', () => {

    $('.footer__store-icon, .footer__store-logo, .footer__store-title').hover(function (e) {
        $(this).closest('.footer__store').addClass('is-hover');
    });
    $('.footer__store-icon, .footer__store-logo, .footer__store-title').hover(
        function () {
            $(this).closest('.footer__store').addClass('is-hover');
        }, function () {
            $(this).closest('.footer__store').removeClass('is-hover');
        }
    );
});