function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Fonction pour envoyer le formulaire
function submitForm() {
    // Récupérer les données du formulaire
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    // Convertir les données en un objet pour les afficher dans la console
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Afficher les données dans la console (vous pouvez remplacer cette partie par une requête fetch pour un vrai envoi)
    console.log('Données du formulaire', data);

    // Fermer le modal
    closeModal();
}