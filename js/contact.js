/* =========================================
   010 TUIN & ONDERHOUD
   CONTACT.JS
   Demo contactformulier
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const contactForm =
    document.getElementById("contactForm");

  if (!contactForm) {
    return;
  }


  /* =========================================
     FORMULIER VERSTUREN
  ========================================= */

  contactForm.addEventListener(
    "submit",
    (event) => {

      /* Demo-site:
         formulier wordt nog niet echt verstuurd
      */

      event.preventDefault();


      /* =========================================
         OUDE MELDING VERWIJDEREN
      ========================================= */

      const oldMessage =
        document.getElementById("formMessage");

      if (oldMessage) {
        oldMessage.remove();
      }


      /* =========================================
         SUCCESMELDING MAKEN
      ========================================= */

      const message =
        document.createElement("div");

      message.id = "formMessage";

      message.setAttribute(
        "role",
        "status"
      );

      message.style.marginTop = "16px";
      message.style.padding = "14px 16px";
      message.style.borderRadius = "8px";

      message.style.background =
        "var(--green-soft)";

      message.style.color =
        "var(--green-dark)";

      message.style.fontWeight = "700";

      message.textContent =
        "Bedankt! Dit is een demoformulier. Op een echte klantwebsite wordt de aanvraag hier doorgestuurd naar het bedrijf.";


      /* =========================================
         MELDING ONDER FORMULIER
      ========================================= */

      contactForm.appendChild(message);


      /* =========================================
         FORMULIER LEEGMAKEN
      ========================================= */

      contactForm.reset();

    }
  );

});
