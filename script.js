const menuToggle = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");
const navLinks = document.querySelectorAll(".nav-link");
const currentYear = document.querySelector("#current-year");
const copyEmailButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (copyEmailButton && copyStatus) {
  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.copyEmail;
    if (!email) {
      copyStatus.textContent = "Alamat email tidak tersedia.";
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "Alamat email berhasil disalin.";
    } catch (error) {
      copyStatus.textContent = "Tidak dapat menyalin otomatis. Gunakan tautan email di samping.";
      console.error("Gagal menyalin alamat email ke clipboard.", error);
    }
  });
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

const sections = [...document.querySelectorAll("main section[id]")];

const updateActiveNavLink = () => {
  const activeSection = sections
    .slice()
    .reverse()
    .find((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.35);

  navLinks.forEach((link) => {
    const isCurrentSection = activeSection
      && link.getAttribute("href") === `#${activeSection.id}`;

    if (isCurrentSection) {
      link.setAttribute("aria-current", "location");
      link.classList.add("is-active");
    } else {
      link.removeAttribute("aria-current");
      link.classList.remove("is-active");
    }
  });
};

window.addEventListener("scroll", updateActiveNavLink, { passive: true });
window.addEventListener("resize", updateActiveNavLink);
window.addEventListener("hashchange", updateActiveNavLink);
updateActiveNavLink();
