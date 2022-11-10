$(document).ready(function () {
    $('.footer__info__list').hide();
    $('.footer__categori__list').hide();
    $('.footer__client__list').hide();
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


