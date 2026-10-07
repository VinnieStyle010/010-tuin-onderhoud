/* =========================================================
   010 TUIN & ONDERHOUD
   Contactformulier
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const contactForm =
    document.querySelector("#contact-form");

  if (!contactForm) {
    return;
  }


  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
      contactForm.querySelector('[name="name"]');

    const email =
      contactForm.querySelector('[name="email"]');

    const message =
      contactForm.querySelector('[name="message"]');


    /* ---------- CONTROLE ---------- */

    if (
      !name?.value.trim() ||
      !email?.value.trim() ||
      !message?.value.trim()
    ) {

      showFormMessage(
        "Vul uw naam, e-mailadres en bericht in.",
        "error"
      );

      return;
    }


    if (!isValidEmail(email.value)) {

      showFormMessage(
        "Vul een geldig e-mailadres in.",
        "error"
      );

      return;
    }


    /*
      Dit is voorlopig een demoformulier.

      Later koppelen we dit aan een echte
      formulierenservice of backend zodat
      aanvragen daadwerkelijk verstuurd worden.
    */

    showFormMessage(
      "Bedankt! Dit demoformulier werkt. Voor een echte website koppelen we hier de verzending aan.",
      "success"
    );

  });


  /* ---------- E-MAIL CONTROLEREN ---------- */

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  }


  /* ---------- MELDING TONEN ---------- */

  function showFormMessage(message, type) {

    let status =
      document.querySelector("#form-status");

    if (!status) {

      status = document.createElement("div");

      status.id = "form-status";

      contactForm.appendChild(status);

    }


    status.textContent = message;

    status.className =
      `form-status ${type}`;

  }

});
