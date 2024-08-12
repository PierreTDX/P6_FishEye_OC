export function filter() {

    document.addEventListener('DOMContentLoaded', () => {
        // Sélectionne les éléments HTML nécessaires
        const customSelect = document.getElementById('customSelect');
        const selected = customSelect.querySelector('.select-selected');
        const itemsContainer = customSelect.querySelector('.select-items');
        const customSelectContainer = customSelect.closest('.custom-select');
        let focusedIndex = -1; // Index de l'élément actuellement focalisé

        // Définition des options du menu déroulant avec les types de tri
        const options = [
            { value: 1, text: 'Popularité', ariaLabel: 'Popularité', sortType: 'likes' },
            { value: 2, text: 'Date', ariaLabel: 'Date', sortType: 'date' },
            { value: 3, text: 'Titre', ariaLabel: 'Titre', sortType: 'title' }
        ];

        // Fonction pour mettre à jour les options visibles, en excluant une option spécifique
        function updateOptions(excludeValue) {
            itemsContainer.innerHTML = ''; // Réinitialise le conteneur des éléments
            options.forEach((option, index) => {
                if (option.value !== excludeValue) { // Exclut l'option sélectionnée
                    const item = document.createElement('div');
                    item.classList.add('select-item');
                    item.dataset.value = option.value;
                    item.textContent = option.text;
                    item.setAttribute('aria-label', option.ariaLabel);
                    item.tabIndex = 0; // Rendre les éléments focusables
                    item.addEventListener('click', () => {
                        // Met à jour l'élément sélectionné et cache le menu
                        selected.textContent = option.text;
                        selected.dataset.value = option.value;
                        itemsContainer.classList.add('select-hide');
                        customSelectContainer.classList.remove('menu-open');
                        selected.classList.remove('select-arrow-active');
                        updateOptions(option.value); // Met à jour les options restantes
                    });
                    item.addEventListener('keydown', (e) => handleItemKeydown(e, index));
                    item.addEventListener('focus', () => item.classList.add('hovered')); // Ajoute la classe hovered lors du focus
                    item.addEventListener('blur', () => item.classList.remove('hovered')); // Supprime la classe hovered lors du blur
                    itemsContainer.appendChild(item); // Ajoute l'élément au conteneur
                }
            });
        }

        // Affiche ou cache les options du menu déroulant lorsque l'utilisateur clique sur l'élément sélectionné
        selected.addEventListener('click', () => {
            itemsContainer.classList.toggle('select-hide');
            customSelectContainer.classList.toggle('menu-open');
            selected.classList.toggle('select-arrow-active');
            focusedIndex = -1; // Réinitialiser l'index focalisé
        });

        // Ajoute les classes lors du focus et les retire lors du blur sur le bouton select-selected
        selected.addEventListener('focus', () => {
            selected.classList.add('hovered');
        });
        
        selected.addEventListener('blur', () => {
            selected.classList.remove('hovered');
        });

        // Cache les options du menu lorsque l'utilisateur clique en dehors du menu déroulant
        document.addEventListener('click', (event) => {
            if (!customSelect.contains(event.target)) {
                itemsContainer.classList.add('select-hide');
                customSelectContainer.classList.remove('menu-open');
                selected.classList.remove('select-arrow-active');
            }
        });

        // Navigation au clavier sur l'élément sélectionné
        selected.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowDown':
                    openDropdown();
                    focusNextItem();
                    break;
                case 'ArrowUp':
                    openDropdown();
                    focusPreviousItem();
                    break;
                case 'Enter':
                case ' ':
                    openDropdown();
                    break;
                case 'Escape':
                    closeDropdown();
                    break;
            }
        });

        // Gestion des événements clavier pour les options du menu
        function handleItemKeydown(event) {
            switch (event.key) {
                case 'ArrowDown':
                    focusNextItem();
                    break;
                case 'ArrowUp':
                    focusPreviousItem();
                    break;
                case 'Enter':
                case ' ':
                    event.preventDefault(); // Empêche le comportement par défaut (scroll)
                    itemsContainer.children[focusedIndex].click(); // Sélectionne l'élément
                    break;
                case 'Escape':
                    closeDropdown();
                    break;
            }
        }

        // Ouvre le menu déroulant
        function openDropdown() {
            itemsContainer.classList.remove('select-hide');
            customSelectContainer.classList.add('menu-open');
            selected.classList.add('select-arrow-active');
        }

        // Ferme le menu déroulant
        function closeDropdown() {
            itemsContainer.classList.add('select-hide');
            customSelectContainer.classList.remove('menu-open');
            selected.classList.remove('select-arrow-active');
            selected.focus(); // Revenir au bouton sélectionné
        }

        // Focus sur l'élément suivant
        function focusNextItem() {
            if (focusedIndex < itemsContainer.children.length - 1) {
                focusedIndex++;
                itemsContainer.children[focusedIndex].focus();
            }
        }

        // Focus sur l'élément précédent
        function focusPreviousItem() {
            if (focusedIndex > 0) {
                focusedIndex--;
                itemsContainer.children[focusedIndex].focus();
            }
        }

        // Initialise les options en excluant l'option actuellement sélectionnée
        updateOptions(parseInt(selected.dataset.value, 10) || 1);
    });

}