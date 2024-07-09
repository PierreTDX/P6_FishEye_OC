export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    };

    createPhotographerGallery() {
        const contentGallery = document.querySelector(".content_gallery");

        this.medias.forEach(media => {

            const mediaContent = media.image
            ? ` <img class="gallery_thumbnail" src="./assets/images/SamplePhotos/${this.photographer.name}/${media.image}" alt="${media.title}">`
            : ` <video class="gallery_thumbnail" aria-label="${media.title}">
                    <source src="./assets/images/SamplePhotos/${this.photographer.name}/${media.video}" type="video/mp4">
                </video>`;

            const galleryCard = `
            <article class="gallery_card">                           
                <a href="#" data-id=${media.id} role="link" aria-label="Vue image">
                   <figure>${mediaContent}</figure>
                </a>
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

        // contentGallery.innerHTML = galleryCard;
        // return contentGallery;
    };
};

