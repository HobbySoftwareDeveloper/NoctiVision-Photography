console.log("running");

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".grid a img");

    images.forEach(img => {
        if (img.naturalWidth > img.naturalHeight) {
            img.classList.add("landscape");
        } else {
            img.classList.add("portrait");
        }
    });
});