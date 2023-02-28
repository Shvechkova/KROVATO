// footer
$(document).ready(function () {
  $(window).width(function () {
    if ($(this).width() < 768) {
      $(".footer__info__list").hide();
      $(".footer__categori__list").hide();
      $(".footer__client__list").hide();
    } else {
      $(".footer__info__list").show();
      $(".footer__categori__list").show();
      $(".footer__client__list").show();
    }
  });
});

$(".footer__info__title").on("click", function () {
  $(".footer__info__list").slideToggle();
  $(".footer__info__title--mobile").toggleClass(
    "footer__info__title--mobile-active"
  );
});

$(".footer__categori__title").on("click", function () {
  $(".footer__categori__list").slideToggle();
  $(".footer__categori__title--mobile").toggleClass(
    "footer__categori__title--mobile-active"
  );
});

$(".footer__client__title").on("click", function () {
  $(".footer__client__list").slideToggle();
  $(".footer__client__title--mobile").toggleClass(
    "footer__client__title--mobile-active"
  );
});

// header

//header translate
$(".translate__title").on("click", function () {
  $(".translate__toggle__wrap").toggleClass("translate__toggle__wrap--active");
  $(".translate__wrap").toggleClass("translate__wrap--active");
});

// headet tell toggl
$(".header-middle__tel").on("click", function () {
  $(".header-middle__tel-wrap").toggleClass("header-middle__tel-wrap--active");
  $(".header-middle__tel-wrap--maxtel").toggleClass(
    "header-middle__tel-wrap--maxtel--active"
  );
});
// header menu btn
$(".header-middle__katalog-btn").on("click", function (event) {
  event.stopPropagation();
  $(".btn-img-katalog").toggleClass("btn-img-katalog--active");
  $(".btn-img-katalog-close").toggleClass("btn-img-katalog-close--active");

  $(".header-bottom-wrap").toggleClass("header-bottom-wrap--active-kat");
  $(".main").toggleClass("main--active-kat");
  $(".footer").toggleClass("footer--active-kat");

  $(".catalog").toggleClass("catalog--active");
});

$("body").on("click", function (event) {
  $(".btn-img-katalog").removeClass("btn-img-katalog--active");
  $(".btn-img-katalog-close").removeClass("btn-img-katalog-close--active");

  $(".header-bottom-wrap").removeClass("header-bottom-wrap--active-kat");
  $(".main").removeClass("main--active-kat");
  $(".footer").removeClass("footer--active-kat");

  $(".catalog").removeClass("catalog--active");
});



const swiperr = new Swiper(".swiperr", {

 
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true

  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiperr-button-next",
    prevEl: ".swiperr-button-prev",
  },

  // And if we need scrollbar
 
});

const akcii__swiper = new Swiper(".akcii__swiper", {
   slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".akcii__swiper-prev",
    prevEl: ".akcii__swiper-next",
  },
});

const reviews_slaider = new Swiper(".reviews_slaider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // If we need pagination

  scrollbar: {
    el: ".reviews_slaider-scrollbar",
    draggable: true,
  },
});