export default class PhotographerMedias {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
        console.log(this.medias);
    };

    createPhotographerGallery() {
        const contentGallery = document.querySelector(".content_gallery");
        console.log("début texte");

        this.medias.forEach(media => {
            const galleryCard = `
            <article class="gallery_card">                           
                <a href="#" data-id=${media.id} role="link" aria-label="Vue image">
                   <figure><img class="gallery_thumbnail" src="./assets/images/SamplePhotos/${this.photographer.name}/${media.image}"></img>
                   </figure>
                </a>
                <figcaption>
                    <h2>${media.title}</h2>
                    <div role="group" aria-label="bouton like et nombre de likes">
                        <span class="nbLike">${media.likes}</span> 
                        <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                            <span class="fas fa-heart"></span>
                        </button> 
                    </div>
                </figcaption>
            `;
            console.log(this.photographer.name);
            console.log(media.title);
            contentGallery.innerHTML += galleryCard;
        });

        console.log(this.photographer.name);  
        console.log(this.medias.title);                    
        console.log("fin texte");
        contentGallery.innerHTML = galleryCard;
        return contentGallery;
    };
};

