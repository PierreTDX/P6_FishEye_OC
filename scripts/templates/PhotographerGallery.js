import { displayLightBoxMedias } from "../utils/lightboxMedias.js"
import { addLike } from "../utils/likes.js";

export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    };

        // Fonction pour trier les médias par nombre de likes du plus grand au plus petit
        sortMediasByLikesDescending() {
            this.medias.sort((a, b) => b.likes - a.likes);
        }

    createPhotographerGallery() {
         // Trier les médias avant de créer la galerie
         this.sortMediasByLikesDescending();
         
        const contentGallery = document.querySelector(".content_gallery");

        this.medias.forEach(media => {

            const mediaContent = media.image
            ? ` <img class="gallery_thumbnail" src="./assets/images/SamplePhotos/${this.photographer.name}/${media.image}" alt="${media.title}" title="${media.title}">`
            : ` <video class="gallery_thumbnail" aria-label="${media.title}" title="${media.title}">
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