export default class PhotographerCard {
    constructor(photographer){
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement( 'article' );
        const photographerCard = `
            <a href="photographer.html?id=${this.photographer.id}" role="link" aria-label="Voir le profil de ${this.photographer.name}">
                <div class="photographer_header">
                    <img src="./assets/images/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
                    <h2 ">${this.photographer.name}</h2>
                </div>
            </a>
            <div class="photographer_details">
                <h3>${this.photographer.city}, ${this.photographer.country}</h3>
                <q>${this.photographer.tagline}</q>
                <p>${this.photographer.price}€/jour</p>
            </div>
        `;
        article.innerHTML = photographerCard;
        return article;
    }
}