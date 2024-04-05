const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    loop: true,
    mousewheel: true,
  });
