const swiper = new Swiper('.swiper', {
    // Optional parameters

    slidesPerView: 2,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    initialSlide: 1,
    loopAdditionalSlides: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const backBtn = document.querySelector(".back");
const forwardBtn = document.querySelector(".forward");

backBtn.addEventListener("click", () => swiper.slidePrev())
forwardBtn.addEventListener("click", () => swiper.slideNext())