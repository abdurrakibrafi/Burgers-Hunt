var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
//preloader
  var preloader=document.querySelector(".preloader")
  window.addEventListener("load", vanish)
  function vanish(){
      preloader.classList.add("timeout")
  }

//Scroll button
const toTop = document.querySelector (".to-top");

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
   }else {
       toTop.classList.remove("active");
   }
});

