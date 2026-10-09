/* =========================================
   010 TUIN & ONDERHOUD
   MAIN.JS
   Algemene functies
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     MOBIEL MENU
  ========================================= */

  const menuButton =
    document.getElementById("menuButton");

  const mobileNav =
    document.getElementById("mobileNav");


  if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        mobileNav.classList.toggle("active");

      menuButton.classList.toggle(
        "active",
        isOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Menu sluiten"
          : "Menu openen"
      );

    });


    /* Menu sluiten als bezoeker op een link klikt */

    const mobileLinks =
      mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mobileNav.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Menu openen"
        );

      });

    });

  }


  /* =========================================
     ESCAPE = MOBIEL MENU SLUITEN
  ========================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        mobileNav &&
        menuButton
      ) {

        mobileNav.classList.remove("active");
        menuButton.classList.remove("active");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  /* =========================================
     JAARTAL
     Werkt automatisch als we later
     #currentYear in de footer gebruiken.
  ========================================= */

  const currentYear =
    document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }

});
