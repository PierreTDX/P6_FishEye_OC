export function displayLightBoxMedias() {
    const allMedia = document.querySelectorAll(".gallery_thumbnail");
    console.log("tous les médias", allMedia);

    for (const media of allMedia) {
        media.addEventListener("click", (e) => {
            console.log("le medias cliqué :", e.target.src);
            openLightBoxMedias();
            document.querySelector('.btn_close_lightbox').focus();
            lightboxTemplate(e.target);
        })
        console.log("valeur de média :", media);
    }

function lightboxTemplate(target) {
    console.log("dans lightboxTemplate");    

    const lightboxMedia = document.querySelector('.lightbox_media');
    console.log("Html de .lightbox_media", lightboxMedia)

    let src = target.src;
    if (!src && target.tagName.toLowerCase() === 'video') {
        const sourceElement = target.querySelector('source');
        if (sourceElement) {
            src = sourceElement.src;
        }
    }
    console.log("src contient", src);

    let view ='';
    console.log("contenu de target :",target);
    if (target.tagName.toLowerCase() === 'img'){
        view = `<img src="${src}" alt="image">`;
        console.log("contenu de view :", view)
    } else {
        view = `<video controls><source src="${src}" type="video/mp4"></video>`
        console.log("contenu de view :", view)
    }

    console.log("contenu de view (sorti du if) :", view)
    lightboxMedia.innerHTML = view;

};

function openLightBoxMedias() {
    const modal = document.querySelector(".modal_lightbox");
    modal.style.display = "flex";
};

function closeLightBoxMedias() {
    const modal = document.querySelector(".modal_lightbox");
    modal.style.display = "none";
};

function closeLightBoxMediasByEchap() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {  // Vérifie si la touche Échap est pressée
            closeLightBoxMedias();  // Ferme la visionneuse
        }
    });
}
closeLightBoxMediasByEchap()

const btnClose = document.querySelector('.btn_close_lightbox');
btnClose.addEventListener('click', () => closeLightBoxMedias());

};
