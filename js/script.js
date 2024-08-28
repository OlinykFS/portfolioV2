const gradientElement = document.getElementById("gradient");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  gradientElement.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");

function updateActiveNav() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.querySelector("a").getAttribute("href").includes(current)) {
      li.classList.add("active");
    }
  });
}

window.addEventListener("load", updateActiveNav);

window.addEventListener("scroll", updateActiveNav);
