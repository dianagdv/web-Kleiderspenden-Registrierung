document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap-Formularvalidierung in den Modals.
  // Da es (noch) kein Backend gibt, wird das Absenden immer abgefangen
  // und bei gültigen Eingaben eine Erfolgsmeldung im Modal angezeigt.
  const formulare = document.querySelectorAll(".needs-validation");

  formulare.forEach((formular) => {
    formular.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const erfolg = formular.querySelector(".erfolg");

      if (!formular.checkValidity()) {
        formular.classList.add("was-validated");
        erfolg?.classList.add("d-none");
        return;
      }

      // Erfolgreich: Meldung zeigen, Formular leeren
      formular.reset();
      formular.classList.remove("was-validated");
      erfolg?.classList.remove("d-none");
    });
  });

  // Beim Schließen eines Modals: Formular, Fehlermeldungen und
  // Erfolgsmeldung zurücksetzen, damit es beim nächsten Öffnen leer ist.
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("hidden.bs.modal", () => {
      const formular = modal.querySelector("form");
      if (!formular) return;
      formular.reset();
      formular.classList.remove("was-validated");
      formular.querySelector(".erfolg")?.classList.add("d-none");
    });
  });

  // Abholdatum: frühestens morgen (lokales Datum, nicht UTC)
  const datum = document.getElementById("datum");
  if (datum) {
    const morgen = new Date();
    morgen.setDate(morgen.getDate() + 1);
    const jahr = morgen.getFullYear();
    const monat = String(morgen.getMonth() + 1).padStart(2, "0");
    const tag = String(morgen.getDate()).padStart(2, "0");
    datum.min = `${jahr}-${monat}-${tag}`;
  }
});
