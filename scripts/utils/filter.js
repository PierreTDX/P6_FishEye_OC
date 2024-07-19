export function sortMedias(medias, sortType) {
    switch (sortType) {
        case 'likes':
            return medias.sort((a, b) => b.likes - a.likes);
        case 'date':
            return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'title':
            return medias.sort((a, b) => a.title.localeCompare(b.title));
        default:
            return medias.sort((a, b) => b.likes - a.likes); // Tri par défaut : likes
    }
};
