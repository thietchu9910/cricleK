$(document).ready(function () {
  var swiper = new Swiper(".product", {
    slidesPerView: 2.5,
    loop: true,
    initialSlide: 0,
    spaceBetween: 30,
    grabCursor: true,
    
  });

  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".services", {
    slidesPerView: 4,
    loop: true,
  });


  var swiper = new Swiper(".news", {
    slidesPerView: 3,
    spaceBetween: 20,
  });
});
