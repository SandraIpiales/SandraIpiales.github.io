 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 25,
  
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      200: {
          slidesPerView: 2,
      },
      400: {
        slidesPerView: 3,
      },
      900:{
        slidesPerView: 4,
      },
      1050: {
          slidesPerView: 5,
      },
  },
});