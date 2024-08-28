const gradientElement = document.getElementById("gradient");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  gradientElement.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav a");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.5
  );
}

function updateActiveLink() {
  let currentSectionId = "";

  sections.forEach((section) => {
    if (isElementInViewport(section)) {
      currentSectionId = section.id;
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSectionId}`) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("resize", updateActiveLink);
document.addEventListener("DOMContentLoaded", updateActiveLink);
