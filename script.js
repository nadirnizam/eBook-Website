//image slider
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  //testimonial swiper
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


//payment geatway

const download = document.getElementById('DownloadPdf');
download.addEventListener('click', onButtonClick);

function onButtonClick() {
  Instamojo.open('https://test.instamojo.com/@subratamondal/l1e1917a4d77e4afd82eb71270e5eb1ff/');
}

// Start client-defined Callback Handler Functions 
function onPaymentSuccessHandler (response) {
  setTimeout(() => {
    window.open('https://drive.google.com/file/d/1uAVJpN5u3iX3iXnc_aYVR7vMgNo9_yBG/view?usp=drive_link');
  }, 2000);
}

// End client-defined Callback Handler Functions 

// Configuring Handlers 
Instamojo.configure({
  handlers: {
    onSuccess: onPaymentSuccessHandler,
  }
});