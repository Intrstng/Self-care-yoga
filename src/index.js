// import './sass/styles.scss';
import 'normalize.css';
import { showSlide, nextSlide, prevSlide, sliderBtnNext, sliderBtnPrev } from './js/Slider';
import  { prevCard, nextCard, showPrev, showNext  } from './js/Cards';
import { scrollUp, trackScroll, scrollTop } from './js/ScrollTop';
import { playVideoBtns, playVideo, stopVideo } from './js/VideoPlayer';
import { galleryBtns, selectVideoByTag } from './js/VideoGallery';

// Welcome section slider
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showSlide);

// Scroll up button
window.addEventListener('scroll', trackScroll);
scrollUp.addEventListener('click', scrollTop);

// Cards slider
prevCard.addEventListener('click',showPrev);
nextCard.addEventListener('click',showNext);

// Video player
playVideoBtns.forEach(item => item.addEventListener('click', (e) => playVideo(e)));
window.addEventListener('click', stopVideo);

// Video gallery
galleryBtns.forEach(item => {
  item.addEventListener('click', (e) => selectVideoByTag(e));
});











// setInterval(() => {
//   nextSlide()
//   console.log('next')
// }, 5000);