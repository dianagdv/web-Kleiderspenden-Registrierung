// Bootstrap-Formularvalidierung: zeigt Fehlermeldungen an,
// wenn Pflichtfelder leer oder ungültig sind.
document.addEventListener("DOMContentLoaded", () => {
  const formulare = document.querySelectorAll(".needs-validation");

  formulare.forEach((formular) => {
    formular.addEventListener("submit", (event) => {
      if (!formular.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      formular.classList.add("was-validated");
    });
  });

  // Abholdatum: frühestens morgen
  const datum = document.getElementById("datum");
  if (datum) {
    const morgen = new Date();
    morgen.setDate(morgen.getDate() + 1);
    datum.min = morgen.toISOString().split("T")[0];
  }
});
