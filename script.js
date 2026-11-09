const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");
const navLinks = document.querySelectorAll(".nav-link");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && navigationLinks) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    navigationLinks.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Buka navigasi" : "Tutup navigasi");
    navigationLinks.classList.toggle("is-open", !isExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

if ("IntersectionObserver" in window) {
  const sections = document.querySelectorAll("main section[id]");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isCurrentSection = link.getAttribute("href") === `#${entry.target.id}`;
        if (isCurrentSection) {
          link.setAttribute("aria-current", "location");
          link.classList.add("is-active");
        } else {
          link.removeAttribute("aria-current");
          link.classList.remove("is-active");
        }
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach((section) => sectionObserver.observe(section));
}
