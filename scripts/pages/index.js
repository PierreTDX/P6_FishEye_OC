import Api from "../api/Api.js";
import Photographer from "../models/Photographer.js";
import PhotographerCard from "../templates/index.js";

const photographersSection = document.querySelector(".photographer_section");
const photographersApi = new Api("./data/photographers.json");

const displayPhotographers = async () => {
    const photographersData = await photographersApi.get();
    const photographers = photographersData.photographers;

    photographers
        .map(photographer => new Photographer(photographer))
        .forEach(photographer => {
            const template = new PhotographerCard(photographer);
            const photographerCard = template.createPhotographerCard();
            photographersSection.appendChild(photographerCard);
        });
};

displayPhotographers();