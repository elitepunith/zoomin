
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);

const heroTitle = document.querySelectorAll(".hero-title span");
const heroSubtitle = document.querySelector(".hero-subtitle");
const heroAction = document.querySelector(".hero-action");
const sliderListItem = document.querySelectorAll(".slider-list-item");
const sliderProgress = document.querySelector(".slider-progress");

gsap.fromTo(
  [heroSubtitle, heroTitle, heroAction, sliderListItem],
  {
    autoAlpha: 0,
    y: 100,
    stagger: 0.2,
  },
  {
    autoAlpha: 1,
    y: 0,
    stagger: 0.2,
  }
);
gsap.fromTo(
  sliderProgress,
  {
    autoAlpha: 0,
    y: "100",
  },
  {
    autoAlpha: 1,
    y: "0",
    delay: 1
  }
);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  })
  .to(
    ".sky",
    {
      y: 1000,
    },
    "0"
  )
  .to(
    ".mountains",
    {
      y: -300,
    },
    "0"
  )
  .to(
    ".man-standing",
    {
      y: -100,
    },
    "0"
  )
  .to(
    ".hero-content",
    {
      y: 450,
      autoAlpha: 0,
    },
    "0"
  );

// Quote section fade in
gsap.fromTo(
  ".quote-text",
  { autoAlpha: 0, y: 50 },
  {
    autoAlpha: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#quote-section",
      start: "top 80%",
      end: "center center",
      scrub: 1,
    }
  }
);

gsap.to(".slider-progress-bar", {
  height: "100%",
  ease: "none",
  scrollTrigger: { scrub: 0.3 },
});
