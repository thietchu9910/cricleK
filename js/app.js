$(document).ready(function () {
  var product = new Swiper(".product", {
    slidesPerView: 2.5,
    loop: true,
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      1024 : {
        init: false
      }
    }

  });

  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".services__inner", {
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });


  var news = new Swiper(".news", {
    slidesPerView: 3,
    spaceBetween: 20,
  });
});


var width = $(window).width();
console.log(width);
if (width >= 1024) {
  delete news;
}