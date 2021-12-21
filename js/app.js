$(document).ready(function () {
  var product = new Swiper(".product", {
    slidesPerView: 2.5,
    breakpoints: {

      768: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      1024: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
        // enabled: false,
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
    breakpoints: {
      768: {
        slidesPerView: 6,
      },
      1024: {
        slidesPerView: 6,
        // enabled: false,
      }
    }
  });


  var news = new Swiper(".news", {
    slidesPerView: 3,
    spaceBetween: 20,
  });

});