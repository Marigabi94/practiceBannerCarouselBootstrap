//----------------- Js Code --------------------------
let banner = document.querySelector("#myCarousel");
// let banner2 = document.querySelector("#myCarousel2");

//---------- Js Basic Code----------------------------
const carousel = new bootstrap.Carousel(banner, {
  interval: 2000,
  pause: "hover",
});

//--------- Reusable code 1 --------------------------
// let interval = 2000;
// let interval2 = 1000;
// function bannerCarousel(carousel, loop) {
//   new bootstrap.Carousel(carousel, {
//     interval: loop,
//     pause: "hover",
//   });
// }
// bannerCarousel(banner, interval);
// bannerCarousel(banner2, interval2);

//--------- Reusable code 2 --------------------------
// let carouselConfig = { interval: 500, pause: "hover" };
// let carouselConfig2 = { interval: 2000, pause: false };

// function bannerCarousel(carousel, config) {
//   new bootstrap.Carousel(carousel, config);
// }
// bannerCarousel(banner, carouselConfig);
// bannerCarousel(banner2, carouselConfig2);

//------------ Jquery Code ---------------------

// let loop = 3500;
// let time = null;
// let banner = $("#myCarousel");

// banner
//   .mouseover(() => {
//     stopBanner();
//   })
//   .mouseout(() => {
//     playBanner();
//   });

// function playBanner() {
//   time = setInterval(() => {
//     banner.next();
//   }, loop);
// }

// function stopBanner() {
//   time = setInterval(() => {
//     clearInterval(loop);
//   }, loop);
//   time = null;
// }
