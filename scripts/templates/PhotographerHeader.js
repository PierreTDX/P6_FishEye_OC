export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    };

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector(".photograph_details");
        const details = `
                <h2>${this.photographer.name}</h2>
                <h3>${this.photographer.city}, ${this.photographer.country}</h3>
                <q>${this.photographer.tagline}</q>    
        `;
        const profilePagePicture = document.querySelector(".photograph_picture");
        const picture = `
        <img src="assets/images/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;

        profilePageHeader.innerHTML = details;
        profilePagePicture.innerHTML = picture;

        return {details, picture };
    };
};