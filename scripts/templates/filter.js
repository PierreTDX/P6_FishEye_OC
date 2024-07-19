document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.getElementById('customSelect');
    const selected = customSelect.querySelector('.select-selected');
    const itemsContainer = customSelect.querySelector('.select-items');
    const customSelectContainer = customSelect.closest('.custom-select');

    const options = [
        { value: 1, text: 'Popularité', ariaLabel: 'Popularité' },
        { value: 2, text: 'Date', ariaLabel: 'Date' },
        { value: 3, text: 'Titre', ariaLabel: 'Titre' }
    ];

    function updateOptions(excludeValue) {
        itemsContainer.innerHTML = '';
        options.forEach(option => {
            if (option.value !== excludeValue) {
                const item = document.createElement('div');
                item.classList.add('select-item');
                item.dataset.value = option.value;
                item.textContent = option.text;
                item.setAttribute('aria-label', option.ariaLabel);
                item.addEventListener('click', () => {
                    selected.textContent = option.text;
                    selected.dataset.value = option.value;
                    itemsContainer.classList.add('select-hide');
                    customSelectContainer.classList.remove('menu-open');
                    selected.classList.remove('select-arrow-active');
                    updateOptions(option.value);
                });
                itemsContainer.appendChild(item);
            }
        });
    }

    selected.addEventListener('click', () => {
        itemsContainer.classList.toggle('select-hide');
        customSelectContainer.classList.toggle('menu-open');
        selected.classList.toggle('select-arrow-active');
    });

    document.addEventListener('click', (event) => {
        if (!customSelect.contains(event.target)) {
            itemsContainer.classList.add('select-hide');
            customSelectContainer.classList.remove('menu-open');
            selected.classList.remove('select-arrow-active');
        }
    });

    // Initialize the options, excluding the selected one
    updateOptions(parseInt(selected.dataset.value, 10) || 1);
});
