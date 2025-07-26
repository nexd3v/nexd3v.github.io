let images = document.querySelectorAll(".gallery img");
let popupImage = document.querySelector(".popup-image");
let popupImgElement = popupImage.querySelector("img");
let currentIndex = 0;

function showImage(index) {
  popupImage.style.display = "flex";
  popupImgElement.style.opacity = 0;
  setTimeout(() => {
    popupImgElement.src = images[index].getAttribute("src");
    popupImgElement.onload = () => {
      popupImgElement.style.opacity = 1;
    };
    currentIndex = index;
  }, 200);
}

images.forEach((image, index) => {
  image.onclick = () => {
    showImage(index);
  };
});

// Close by clicking the close button
document.querySelector(".popup-image span.close").onclick = () => {
  popupImage.style.display = "none";
};

// Next/Prev buttons
document.querySelector(".popup-image .next").onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
};

document.querySelector(".popup-image .prev").onclick = (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
};

//Close when clicking outside image
popupImage.onclick = (e) => {
  // Only close if the clicked element is the overlay itself, NOT child elements (like the image or controls)
  if (e.target === popupImage) {
    popupImage.style.display = "none";
  }
};
