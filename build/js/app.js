document.addEventListener(
  "DOMContentLoaded",

  function () {
    gsap.registerPlugin(ScrollTrigger, TextPlugin, RoughEase);
    gsap.from(".fade-in", {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      delay: 0.3,
      scrub: true,
      start: "top center",
      end: "bottom top",

      scrollTrigger: {
        trigger: ".fade-in",
        toggleActions: "restart none none pause",
      },
    });
    gsap.from(".hero-fade-in", {
      duration: 1,
      opacity: 0,
      stagger: 1.5,
      delay: 0.8,
    });
    gsap.from(".hero-text-fade", {
      duration: 1,
      opacity: 0,
      stagger: 0.5,
      y: "-50%",
      delay: 1,
    });
    gsap.from(".cards", {
      duration: 1,
      opacity: 0,

      delay: 0.4,
      stagger: 0.7,
      start: "top top",
      end: "bottom top",
      scrollTrigger: {
        trigger: ".cards",
        toggleActions: "restart none none pause",
      },
    });
    gsap.from(".cards2", {
      duration: 1,
      opacity: 0,
      stagger: 0.5,
      delay: 0.3,

      scrub: true,
      start: "top top",
      end: "bottom top",
      scrollTrigger: {
        trigger: ".cards2",
        toggleActions: "restart none none pause",
      },
    });
    gsap.from(".cards3", {
      duration: 1,
      opacity: 0,

      delay: 0.2,

      scrub: true,
      start: "top top",
      end: "bottom top",
      scrollTrigger: {
        trigger: ".cards3",
        toggleActions: "restart none none pause",
      },
    });

    gsap.defaults({ ease: "none" });

    const tl = gsap.timeline({});
    tl.to(".text", {
      duration: 1.6,
      delay: 2,

      text: "Front-End Web Developer",
    });

    const container = document.querySelectorAll("#container");

    container.forEach((item) => {
      const fill = item.querySelector("#fill");
      item.addEventListener("mouseenter", () => {
        gsap.to(fill, { duration: 0.3, y: "-100%" });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(fill, { duration: 0.3, y: "0%" });
      });
    });

    const text = SplitType.create("#fillText");

    // const fillText = document.querySelector("#fillText");

    fillText.addEventListener("mouseenter", () => {
      gsap.to(".char", { color: "royalblue", duration: 0.2, stagger: 0.01 });
    });
    fillText.addEventListener("mouseleave", () => {
      gsap.to(".char", { color: "black", duration: 0.2, stagger: 0.01 });
    });
    // container.addEventListener("mouseenter", () => {
    //   gsap.to(fill, { duration: 0.3, y: "-100%" });
    // });

    // container.addEventListener("mouseleave", () => {
    //   gsap.to(fill, { duration: 0.3, y: "0%" });
    // });
  },
);
