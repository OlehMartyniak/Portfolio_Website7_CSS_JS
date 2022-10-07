

// Slick - carousel slider
$('.sec3-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 1500
});


// Rolly JS - for smooth scrolling
const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
});
r.init();

// AOS - for animeted appearence while scrolling
AOS.init({
    duration: 1500
});