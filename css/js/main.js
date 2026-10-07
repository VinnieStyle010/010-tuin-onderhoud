/* =========================================================
   010 TUIN & ONDERHOUD
   Algemene JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- MOBIEL MENU ---------- */

  const menuButton = document.querySelector(".menu-button");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

      menuButton.classList.toggle("active");
      mobileNav.classList.toggle("active");

      const isOpen = mobileNav.classList.contains("active");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Menu sluiten na klikken op een link */

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        menuButton.classList.remove("active");
        mobileNav.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* ---------- SMOOTH SCROLL ---------- */

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* ---------- JAARTAL FOOTER ---------- */

  const yearElement =
    document.querySelector("#current-year");

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

});
