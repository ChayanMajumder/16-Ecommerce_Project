var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
    delay: 1500,
disableOnInteraction: false,
},
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});


let toggleBtn = document.querySelector(".toggle");
let menuText = document.querySelector(".menu-text");
toggleBtn.addEventListener("click", ()=> {
    document.querySelector(".menu-text").classList.toggle("show-menu");
    // console.log(menuText);
});