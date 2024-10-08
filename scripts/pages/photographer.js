import Api from "../api/Api.js";
import PhotographerHeader from "../templates/PhotographerHeader.js";
import PhotographerGallery from "../templates/PhotographerGallery.js";
import PhotographerLikesAndPrice from "../templates/PhotographerLikesAndPrice.js";
import NameForm from "../templates/NameForm.js";
import { filter } from "../templates/filter.js";
import MediasFactory from "../factory/MediasFactory.js";
import Photographer from "../models/Photographer.js";

const photographersApi = new Api("./data/photographers.json");
const photographerId = new URLSearchParams(window.location.search).get("id");

export const getPhotographerById = async () => {
    const { photographers, media } = await photographersApi.get();
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    const medias = media
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);
    return { photographer, medias };
};

const displayProfilePage = async () => {
    filter();
    const { photographer, medias } = await getPhotographerById();
    const headerTemplate = new PhotographerHeader(photographer);
    headerTemplate.createPhotographerHeader();
    const galleryTemplate = new PhotographerGallery(photographer, medias);
    galleryTemplate.updateGallery();
    const LikesAndPriceTemplate = new PhotographerLikesAndPrice(photographer, medias);
    LikesAndPriceTemplate.createPhotographerThumbnailLikesAndPrice();
    const nameFormTemplate = new NameForm(photographer);
    nameFormTemplate.nameForm();

};

displayProfilePage();