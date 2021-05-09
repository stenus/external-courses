const imageNames = [
  "buildings.jpg",
  "butterfly.jpg",
  "dandelion.jpg",
  "elephants.jpg",
  "feather.jpg",
  "flowers.jpg",
  "lake.jpg",
  "meal.jpg",
  "mountains.jpg",
  "sea.jpg",
  "uganda-wildlife.jpg",
];

currentImageNumber = 0;
showImage();

function showImage() {
  const currentImage = document.querySelector(".photo");
  const newImage = document.createElement("img");
  newImage.src = "asset/" + imageNames[currentImageNumber];
  newImage.alt = imageNames[currentImageNumber];
  newImage.className = "photo appearance";
  currentImage.parentNode.replaceChild(newImage, currentImage);
}

function showPreviousImage() {
  if (currentImageNumber === 0) {
    currentImageNumber = imageNames.length - 1;
  } else {
    currentImageNumber = currentImageNumber - 1;
  }

  showImage();
}

function showNextImage() {
  if (currentImageNumber === imageNames.length - 1) {
    currentImageNumber = 0;
  } else {
    currentImageNumber = currentImageNumber + 1;
  }

  showImage();
}
