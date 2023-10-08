// import './sass/styles.scss';
import 'normalize.css';
import { showSlide, nextSlide, prevSlide, sliderBtnNext, sliderBtnPrev } from './js/Slider';
import  { cardPrevBtn, cardNextBtn, showPrev, showNext  } from './js/Cards';
import { scrollUp, trackScroll, scrollTop } from './js/ScrollTop';
import { playVideoBtns, playVideo, stopVideo } from './js/VideoPlayer';
import { galleryBtns, selectVideoByTag } from './js/VideoGallery';
import { details, toggleAccordionItems, closeAccordionByClickOutside } from './js/Accordion';
import { watchEntry } from './js/ElementAnimation';
import { showGallery, showPrevGalleryImg, showNextGalleryImg } from './js/Certificates'; 
import { carouselBtnPrev, carouselBtnNext, scrollCarouselPrev, scrollCarouselNext, setCarouselItemWidth, checkBtns } from './js/Testimonials';

// Welcome section slider
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
window.addEventListener('load', showSlide);
window.addEventListener('resize', showSlide);

// Scroll up button
window.addEventListener('scroll', trackScroll);
scrollUp.addEventListener('click', scrollTop);

// Cards slider
cardPrevBtn.addEventListener('click',showPrev);
cardNextBtn.addEventListener('click',showNext);

// Video player
playVideoBtns.forEach(item => item.addEventListener('click', (e) => playVideo(e)));
document.body.addEventListener('click', stopVideo);

// Video gallery
galleryBtns.forEach(item => {
  item.addEventListener('click', (e) => selectVideoByTag(e));
});

// Accordion
details.forEach(item => item.addEventListener('toggle', toggleAccordionItems));
document.body.addEventListener('click',  closeAccordionByClickOutside);

// Start element animation observer
window.addEventListener('load', watchEntry);

// Certificates section slider
window.addEventListener('load', showGallery);
window.addEventListener('resize', showGallery);

document.querySelector('.gallery__btn-next').addEventListener('click', showNextGalleryImg);
document.querySelector('.gallery__btn-prev').addEventListener('click',showPrevGalleryImg);

// Testimonials section slider
carouselBtnPrev.addEventListener('click',scrollCarouselPrev);
carouselBtnNext.addEventListener('click', scrollCarouselNext);
window.addEventListener('load', setCarouselItemWidth);
window.addEventListener('load', checkBtns);











// setInterval(() => {
//   nextSlide()
//   console.log('next')
// }, 5000);