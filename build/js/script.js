const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("toggle-btn");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      top: location - 95,
      left: 0,
      behavior: "smooth",
    });
  });
});

const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight >= footer.offsetTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});
