export function displayLightBoxMedias() {
    const allMedia = document.querySelectorAll(".gallery_thumbnail");
    let currentIndex = -1;

    console.log("tous les médias", allMedia);

    // for (let i = 0; i < allMedia.length; i++) {
    //     const media = allMedia[i];
    //     media.addEventListener("click", function(e) {
    //         currentIndex = i;
    //         console.log("le media cliqué :", e.target.src);
    //         openLightBoxMedias();
    //         document.querySelector('.btn_close_lightbox').focus();
    //         lightboxTemplate(e.target);
    //     });
    //     console.log("valeur de média :", media);
    // }
    for (let i = 0; i < allMedia.length; i++) {
        const media = allMedia[i];

        // Ajout de l'événement 'click'
        media.addEventListener("click", function(e) {
            currentIndex = i;
            console.log("CLIQUE = OUVRIR LA VISIONNEUSE", i);
            openLightBoxAndDisplayMedia(e.target);
        });

        // Ajout de l'événement 'keydown' pour écouter la touche 'Enter'
        media.addEventListener("keydown", function(e) {
            if (e.key === 'Enter') {
                currentIndex = i;
                console.log("ENTER = OUVRIR LA VISIONNEUSE", i);
                openLightBoxAndDisplayMedia(e.target);
            }
        });
    }

    function openLightBoxAndDisplayMedia(target) {
        openLightBoxMedias();
        lightboxTemplate(target);
    }                   


    function lightboxTemplate(target) {
        console.log("dans lightboxTemplate");
    
        const lightboxMedia = document.querySelector('.lightbox_media');
        console.log("Html de .lightbox_media", lightboxMedia);
    
        let src = target.src;
        let alt = target.alt;
        let title = target.title; // Récupérer le titre de l'image ou de la vidéo
        if (!src && target.tagName.toLowerCase() === 'video') {
            const sourceElement = target.querySelector('source');
            if (sourceElement) {
                src = sourceElement.src;
            }
        }
        console.log("src contient", src);
    
        let view = '';
        console.log("contenu de target :", target);
        if (target.tagName.toLowerCase() === 'img') {
            view = `<img src="${src}" alt="${alt}">`;
            if (title) {
                view += `<figcaption class="legend">${title}</figcaption>`;
            }
            console.log("contenu de view :", view);
        } else {
            view = `<video controls><source src="${src}" type="video/mp4"></video>`;
            if (title) {
                view += `<figcaption class="legend">${title}</figcaption>`;
            }
            console.log("contenu de view :", view);
        }
    
        console.log("contenu de view (sorti du if) :", view);
        lightboxMedia.innerHTML = view;
    }
    
    function openLightBoxMedias() {
        document.querySelector('.btn_close_lightbox').focus();
        const modal = document.querySelector(".modal_lightbox");
        modal.style.display = "flex";
    }

    function closeLightBoxMedias() {
        const modal = document.querySelector(".modal_lightbox");
        modal.style.display = "none";
    }

    function handlerLightBoxMediasByKeybord() {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {  // Vérifie si la touche Échap est pressée
                closeLightBoxMedias();  // Ferme la visionneuse
            } else if (event.key === 'ArrowLeft') { // Touche flèche gauche
                showPrevMedia();
            } else if (event.key === 'ArrowRight') { // Touche flèche droite
                showNextMedia();
            }
        });
    }
    
    handlerLightBoxMediasByKeybord();

    const btnClose = document.querySelector('.btn_close_lightbox');
    btnClose.addEventListener('click', () => closeLightBoxMedias());

    const btnPrev = document.querySelector('.btn_previous');
    const btnNext = document.querySelector('.btn_next');

    btnPrev.addEventListener('click', () => showPrevMedia());

    btnNext.addEventListener('click', () => showNextMedia());

    function showPrevMedia() {
        if (currentIndex > 0) {
            currentIndex--;
            const media = allMedia[currentIndex];
            lightboxTemplate(media);
        }
    }

    function showNextMedia() {
        if (currentIndex < allMedia.length - 1) {
            currentIndex++;
            const media = allMedia[currentIndex];
            lightboxTemplate(media);
        }
    }
}
