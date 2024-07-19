function sortMedia(mediaArray, criteria) {
    return mediaArray.sort(function(a, b) {
        if (criteria === 'date') {
            return new Date(a.date) - new Date(b.date);
        } else if (criteria === 'likes') {
            return a.likes - b.likes;
        } else if (criteria === 'title') {
            return a.title.localeCompare(b.title);
        }
    });
}
// Exemples :
console.log('Trier par date:');
console.log(sortMedia('date'));

// console.log('Trier par likes:');
// console.log(sortMedia('likes'));

// console.log('Trier par title:');
// console.log(sortMedia('title'));