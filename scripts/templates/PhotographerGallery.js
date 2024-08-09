import { displayLightBoxMedias } from "../utils/lightboxMedias.js"
import { addLike } from "../utils/likes.js";
import { sortMedias } from "../utils/filter.js";

export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
        this.init();
    };

    init() {
        // Écoute l'événement de changement sur le menu déroulant
        document.querySelector('.custom-select').addEventListener('click', () => {
            this.updateGallery();
        });

        // Initialisation de la galerie avec le tri par défaut
        this.updateGallery();
    }

    updateGallery() {
        // Récupère l'élément sélectionné dans le menu déroulant
        const selectedOption = document.querySelector('.select-selected').dataset.value;

        // Détermine le type de tri en fonction de la sélection de l'utilisateur
        let sortType;
        switch (selectedOption) {
            case '1':
                sortType = 'likes'; // Popularité
                break;
            case '2':
                sortType = 'date'; // Date
                break;
            case '3':
                sortType = 'title'; // Titre
                break;
            default:
                sortType = 'likes'; // Par défaut, tri par likes
        }

        // Trie les médias selon le type sélectionné
        sortMedias(this.medias, sortType);

        const contentGallery = document.querySelector(".content_gallery");
        contentGallery.innerHTML = ``;

        this.medias.forEach(media => {

            const mediaContent = media.image
            ? ` <img class="gallery_thumbnail" src="./assets/images/SamplePhotos/${this.photographer.name}/${media.image}" alt="${media.title}" title="${media.title}" tabindex="0">`
            : ` <video class="gallery_thumbnail" aria-label="${media.title}" title="${media.title}" tabindex="0">
                    <source src="./assets/images/SamplePhotos/${this.photographer.name}/${media.video}" type="video/mp4">
                </video>`;

            const galleryCard = `
            <article class="gallery_card">                           
                <div class="thumbnail" data-id=${media.id} role="link" aria-label="Vue image">
                   <figure>${mediaContent}</figure>
                </div>
                <figcaption>
                    <h2>${media.title}</h2>
                    <div role="group" aria-label="bouton like et nombre de likes">
                        <span class="nbLike">${media.likes}</span> 
                        <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                            <span class="fa-solid fa-heart"></span>
                        </button> 
                    </div>
                </figcaption>
            </article>
            `;
            contentGallery.innerHTML += galleryCard;
            
        });

        addLike();
        displayLightBoxMedias();
    };

};