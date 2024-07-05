import Api from "../api/Api.js";
import PhotographerHeader from "../templates/PhotographerHeader.js";
import Photographer from "../models/Photographer.js";

const photographersApi = new Api("./data/photographers.json");
const photographerId = new URLSearchParams(window.location.search).get("id");

export const getPhotographerById = async () => {
    const { photographers } = await photographersApi.get();
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    return { photographer };
};

const displayProfilePage = async () => {
    const { photographer } = await getPhotographerById();
    const headerTemplate = new PhotographerHeader(photographer);
    headerTemplate.createPhotographerHeader();
};

displayProfilePage();