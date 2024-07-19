document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les éléments HTML nécessaires
    const customSelect = document.getElementById('customSelect');
    const selected = customSelect.querySelector('.select-selected');
    const itemsContainer = customSelect.querySelector('.select-items');
    const customSelectContainer = customSelect.closest('.custom-select');

    // Définition des options du menu déroulant
    const options = [
        { value: 1, text: 'Popularité', ariaLabel: 'Popularité' },
        { value: 2, text: 'Date', ariaLabel: 'Date' },
        { value: 3, text: 'Titre', ariaLabel: 'Titre' }
    ];

    // Fonction pour mettre à jour les options visibles, en excluant une option spécifique
    function updateOptions(excludeValue) {
        itemsContainer.innerHTML = ''; // Réinitialise le conteneur des éléments
        options.forEach(option => {
            if (option.value !== excludeValue) { // Exclut l'option sélectionnée
                const item = document.createElement('div');
                item.classList.add('select-item');
                item.dataset.value = option.value;
                item.textContent = option.text;
                item.setAttribute('aria-label', option.ariaLabel);
                item.addEventListener('click', () => {
                    // Met à jour l'élément sélectionné et cache le menu
                    selected.textContent = option.text;
                    selected.dataset.value = option.value;
                    itemsContainer.classList.add('select-hide');
                    customSelectContainer.classList.remove('menu-open');
                    selected.classList.remove('select-arrow-active');
                    updateOptions(option.value); // Met à jour les options restantes
                });
                itemsContainer.appendChild(item); // Ajoute l'élément au conteneur
            }
        });
    }

    // Affiche ou cache les options du menu déroulant lorsque l'utilisateur clique sur l'élément sélectionné
    selected.addEventListener('click', () => {
        itemsContainer.classList.toggle('select-hide');
        customSelectContainer.classList.toggle('menu-open');
        selected.classList.toggle('select-arrow-active');
    });

    // Cache les options du menu lorsque l'utilisateur clique en dehors du menu déroulant
    document.addEventListener('click', (event) => {
        if (!customSelect.contains(event.target)) {
            itemsContainer.classList.add('select-hide');
            customSelectContainer.classList.remove('menu-open');
            selected.classList.remove('select-arrow-active');
        }
    });

    // Initialise les options en excluant l'option actuellement sélectionnée
    updateOptions(parseInt(selected.dataset.value, 10) || 1);
});
