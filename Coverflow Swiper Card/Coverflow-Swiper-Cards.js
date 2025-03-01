

//This is a swiperJS animation and uses autoplay and coverflow effect
// Refer to https://swiperjs.com/swiper-api#coverflow-effect
// Note that the classes targeted are a combo class ".swiper.is-slider-main-component" change these accordingly
//Note need to have the swiper HTML layout as given in the documentation,swiper>swiper-wrapper>swiper-slide


<script>
    const swiper = new Swiper('.swiper.is-slider-main-component', {
    effect: 'coverflow',
    coverflowEffect: {
    rotate: 10,
    stretch: 1,
    depth: 400,
    modifier: 1,
    slideShadows: false,
},
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    slidesPerView: 'auto', // Changed to auto
    //initialSlide: 1,
    spaceBetween: 16, // Increased for better spacing
    loop: true,
    centeredSlides: true,
    //watchSlidesProgress: true, // Add this
    preventInteractionOnTransition: true, // Add this
    // Add breakpoints for responsiveness
    breakpoints: {
    320: {
    slidesPerView: 1,
},
    768: {
    slidesPerView: 3,
}
}
});
</script>