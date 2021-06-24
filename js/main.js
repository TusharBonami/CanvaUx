
TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

t1.to("#js-slideContainer", 0.5, { xPercent: -20 });
// t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t1.to("#js-slideContainer", 0.5, { xPercent: -40 });
// t1.from(content[2], 0.5, { opacity: 0, scale: 2.5, left: 400, top: 400 });
t1.to("#js-slideContainer", 0.5, { xPercent: -60 });
// t1.from(content[3], 0.5, { opacity: 0, scale: 2.5, right: 400, bottom: 400 });
t1.to("#js-slideContainer", 0.5, { xPercent: -80 });
// t1.from(content[4], 0.5, { opacity: 0, scale: 2.5, rotation: 27 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "400%",
})
  .setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);


$('.multiple-items').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev-arrow fa-2x" style="font-size: 26px; background-color: black; color: white; padding: 0.75rem 1rem; border-radius: 50%; position: absolute; top: 50%; left: -3%; z-index: 2; cursor: pointer;"></i>',
    nextArrow: '<i class="fas fa-chevron-right next-arrow fa-2x" style="font-size: 26px; background-color: black; color: white; padding: 0.75rem 1rem; border-radius: 50%; position: absolute; top: 50%; right: -3%; z-index: 2; cursor: pointer"></i>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });
