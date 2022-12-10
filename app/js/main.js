// footer
$(document).ready(function () {

    $(window).width(function () {

        if ($(this).width() < 768) {

            $('.footer__info__list').hide();
            $('.footer__categori__list').hide();
            $('.footer__client__list').hide();

        } else {

            $('.footer__info__list').show();
            $('.footer__categori__list').show();
            $('.footer__client__list').show();

        }

    });
   
})




$('.footer__info__title').on('click', function(){
   
    $('.footer__info__list').slideToggle();
    $('.footer__info__title--mobile').toggleClass('footer__info__title--mobile-active');
})

$('.footer__categori__title').on('click', function () {
    $('.footer__categori__list').slideToggle();
    $('.footer__categori__title--mobile').toggleClass('footer__categori__title--mobile-active');
})

$('.footer__client__title').on('click', function () {
    $('.footer__client__list').slideToggle();
    $('.footer__client__title--mobile').toggleClass('footer__client__title--mobile-active');
})

// header


$('.translate__title').on('click', function () {

    $('.translate__toggle__wrap').toggleClass('translate__toggle__wrap--active');
    $('.translate__wrap').toggleClass('translate__wrap--active');

})

$('.header-middle__tel').on('click', function () {

    $('.header-middle__tel-wrap').toggleClass('header-middle__tel-wrap--active');
    $('.header-middle__tel-wrap--maxtel').toggleClass('header-middle__tel-wrap--maxtel--active');

})

