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
download.addEventListener('click', () =>{
  Instamojo.open('https://www.instamojo.com/@nadirnizam/l89fcc9f5e0d74735b4d049853e525ea9/'); 
});


// Start client-defined Callback Handler Functions 
function onPaymentSuccessHandler () {
  setTimeout(() => {
         //TODO: change The link

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
