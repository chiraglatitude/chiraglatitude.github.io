/* Shapes */
var animItem = bodymovin.loadAnimation({
  container: document.getElementById("svgContainer"),
  //   wrapper: svgContainer,
  animType: "svg",
  loop: true,
  path: "data.json",
});

var animItem = bodymovin.loadAnimation({
  container: document.getElementById("svgContainer2"),
  //   wrapper: svgContainer,
  animType: "svg",
  loop: true,
  path: "data2.json",
});

/* testimonial slider */
$(() => {
  var createSlick = () => {
    let slider = $(".slider");

    slider.not(".slick-initialized").slick({
      autoplay: true,

      dots: true,
      arrow: false,
      prevArrow: false,
      nextArrow: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  createSlick();

  $(window).on("resize orientationchange", createSlick);
});

$(document).ready(function () {
  $(function () {
    $(".flip-horizontal").flip({
      trigger: "hover",
    });
    $(".flip-vertical").flip({
      axis: "x",
      trigger: "hover",
    });
  });
});

/** solution **/
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#hospitals").offset().top,
    },
    2000
  );
});
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#homespital").offset().top,
    },
    2000
  );
});
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#liveing").offset().top,
    },
    2000
  );
});
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#clinic").offset().top,
    },
    2000
  );
});
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#research").offset().top,
    },
    2000
  );
});
$("#button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#sport").offset().top,
    },
    2000
  );
});

ScrollTrigger.defaults({
  markers: false,
});

var points = gsap.utils.toArray(".point");
var indicators = gsap.utils.toArray(".indicator");

var height = 100 * points.length;

gsap.set(".indicators", { display: "flex" });

var tl = gsap.timeline({
  duration: points.length,
  scrollTrigger: {
    trigger: ".philosophie",
    start: "top center",
    end: "+=" + height + "%",
    scrub: true,
    id: "points",
  },
});

var pinner = gsap.timeline({
  scrollTrigger: {
    trigger: ".philosophie .wrapper",
    start: "top top",
    end: "+=" + height + "%",
    scrub: true,
    pin: ".philosophie .wrapper",
    pinSpacing: true,
    id: "pinning",
    markers: false,
  },
});

points.forEach(function (elem, i) {
  gsap.set(elem, { position: "absolute", top: 0 });

  tl.to(indicators[i], { backgroundColor: "orange", duration: 0.25 }, i);
  tl.from(elem.querySelector("img"), { autoAlpha: 0 }, i);
  tl.from(elem.querySelector("article"), { autoAlpha: 0, translateY: 100 }, i);

  if (i != points.length - 1) {
    tl.to(
      indicators[i],
      { backgroundColor: "#adadad", duration: 0.25 },
      i + 0.75
    );
    tl.to(
      elem.querySelector("article"),
      { autoAlpha: 0, translateY: -100 },
      i + 0.75
    );
    tl.to(elem.querySelector("img"), { autoAlpha: 0 }, i + 0.75);
  }
});
