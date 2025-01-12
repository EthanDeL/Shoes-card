const heartIcon = document.getElementById("heart-icon");

heartIcon.addEventListener("click", function() {
    heartIcon.classList.add("clicked");

    heartIcon.classList.toggle("ri-heart-3-fill");
    heartIcon.classList.toggle("ri-heart-3-line");

    heartIcon.classList.toggle("heart-filled");

    setTimeout(() => {
        heartIcon.classList.remove("clicked");
    }, 300);
});
