import { totalLikes } from "../utils/likes.js";

export default class PhotographerLikesAndPrice {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    };

    createPhotographerThumbnailLikesAndPrice() {
        const contentLikesAndPrice = document.querySelector(".likes_price_thumbnail");

        const LikesAndPriceCard = `
            <aside class="aside_content">                           
                <p class="photographer_Likes">
                    <span class="photographer_likes_count">XXXX</span>
                    <span class="fa-solid fa-heart"></span>
                </p>
                <span>${this.photographer.price}€ / jour</span>
            </aside>
            `;

        contentLikesAndPrice.innerHTML = LikesAndPriceCard;

        totalLikes();

        return contentLikesAndPrice;
    };

};