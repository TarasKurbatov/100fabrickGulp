document.addEventListener('DOMContentLoaded', () => {
    
    $('.stock__slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: "<button class='nav-btn btn-prev flb-cc icon-arrow-left'></button>",
        nextArrow: "<button class='nav-btn btn-next flb-cc icon-arrow-right'></button>",
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    
});