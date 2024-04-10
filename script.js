//image slider
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });

  // video paly pause function 
  const video = document.querySelector('video');
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    }else{
      video.pause();
    }
  });

  //testimonial swiper
const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.4,
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

    window.open('https://wa.link/cu8fg0'); 
  }, 2000);
}

// End client-defined Callback Handler Functions 

// Configuring Handlers 
Instamojo.configure({
  handlers: {
    onSuccess: onPaymentSuccessHandler,
  }
});
