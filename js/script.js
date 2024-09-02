const gradientElement = document.getElementById("gradient");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  gradientElement.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 50%)`;
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(
  "#link-about, #link-experience, #link-projects"
);

function getCurrentSection() {
  const windowHeight = window.innerHeight;
  const windowMidpoint = window.scrollY + windowHeight / 4;

  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionMidpoint = sectionTop + sectionHeight / 2;

    if (Math.abs(windowMidpoint - sectionMidpoint) < windowHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  return currentSection;
}
function updateActiveNavItem() {
  const currentSection = getCurrentSection();
  navLinks.forEach((link) => {
    const linkId = link.getAttribute("id").replace("link-", "");
    if (linkId === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
window.addEventListener("load", updateActiveNavItem);
window.addEventListener("scroll", updateActiveNavItem);
window.addEventListener("resize", updateActiveNavItem);
