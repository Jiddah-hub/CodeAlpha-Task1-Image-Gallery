const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});
function filterImages(category) {

  let images = document.querySelectorAll(".gallery-img");

  images.forEach(image => {

    if(category === "all") {
      image.style.display = "block";
    }

    else if(image.classList.contains(category)) {
      image.style.display = "block";
    }

    else {
      image.style.display = "none";
    }

  });

}