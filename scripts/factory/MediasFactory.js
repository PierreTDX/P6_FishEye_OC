import { Image, Video } from '../models/Media.js'

export default class MediasFactory {
    constructor(data) {
        if (data.image) {
            return new Image(data)
        } else if (data.video) {
            return new Video(data)
        } else {
            throw 'Erreur data image ou vidéo'
        }
    }
};