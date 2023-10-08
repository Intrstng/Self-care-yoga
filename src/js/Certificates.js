// Certificates section slider

const images = document.querySelectorAll('.gallery .gallery__line img'),
      sliderLine = document.querySelector('.gallery .gallery__line');
let count = 0,
    galleryWidth;

function showGallery() {
  galleryWidth = document.querySelector('.gallery').offsetWidth;
    sliderLine.style.width = galleryWidth * images.length + 'px';
    images.forEach(item => {
        item.style.width = galleryWidth + 'px';
        item.style.height = 'auto';
    });
    rollGallerySlider();
}

function showPrevGalleryImg() {
  count--;
  count < 0 && (count = images.length - 1);
  rollGallerySlider();
}

function showNextGalleryImg() {
  count++;
  count >= images.length && (count = 0);
  rollGallerySlider();
}

function rollGallerySlider() {
  sliderLine.style.transform = 'translate(-' + count * galleryWidth + 'px)';
}

export { showGallery, showPrevGalleryImg, showNextGalleryImg }