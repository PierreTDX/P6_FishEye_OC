export function totalLikes() {
        const nbLikeElements = document.querySelectorAll('.nbLike');
        let totalLikes = 0;
    
        nbLikeElements.forEach(element => {
            totalLikes += parseInt(element.textContent);
        });
    
        // Mettre à jour l'élément affichant le total des likes
        const totalLikesElement = document.querySelector('.photographer_likes_count');
        totalLikesElement.textContent = totalLikes;
    };

export function addLike() {
    const likeButtons = document.querySelectorAll(".btn_like");

    likeButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const likeSpan = event.target.closest("figcaption").querySelector(".nbLike");
            let likes = parseInt(likeSpan.textContent, 10);

            if (button.classList.contains("liked")) {
                likes -= 1;
                button.classList.remove("liked");
            } else {
                likes += 1;
                button.classList.add("liked");
            }

            likeSpan.textContent = likes;
            totalLikes();
        });
    });
};
