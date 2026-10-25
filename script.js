
/* 1. Afficher un message dans la console */
console.log("Bienvenue sur mon portfolio !");

/* 2. Afficher l'année actuelle dans le pied de page */
const annee = document.querySelector("#annee");

if (annee) {
    annee.textContent = new Date().getFullYear();
}

/* 3. Afficher un message lorsque l'on clique sur un bouton */
const boutonContact = document.querySelector("#bouton-contact");

if (boutonContact) {
    boutonContact.addEventListener("click", function () {
        alert("Merci de vouloir me contacter !");
    });
}
