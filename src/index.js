// import './sass/styles.scss';
import 'normalize.css';
import { showSlide, nextSlide, prevSlide, sliderBtnNext, sliderBtnPrev } from './js/Slider';
import  { prevCard, nextCard, showPrev, showNext  } from './js/Cards';
import { scrollUp, trackScroll, scrollTop } from './js/ScrollTop';
import { playVideoBtns, playVideo, stopVideo } from './js/VideoPlayer';

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

// VideoPlayer
playVideoBtns.forEach(item => item.addEventListener('click', (e) => playVideo(e)));
window.addEventListener('click', stopVideo);

// setInterval(() => {
//   nextSlide()
//   console.log('next')
// }, 5000);




const galleryBtns = document.querySelectorAll('.button-trial'),
      videoGalleryItemsArr = document.querySelectorAll('.video__card');
let selectedBtnTags = [];

galleryBtns.forEach(item => {
  item.addEventListener('click', (e) => selectVideoByTag(e));
});



function selectVideoByTag(e) {
  selectedBtnTags = e.currentTarget.firstElementChild.dataset.tag.split(', ');
  
  videoGalleryItemsArr.forEach(video => {
    video.style.display = 'none';
  })

  videoGalleryItemsArr.forEach(video => {
    if (selectedBtnTags.includes(video.dataset.type)) {
      video.style.display = 'block';
    }
  })
  changeBtnActiveState(e);
}

function changeBtnActiveState(e) {
  galleryBtns.forEach(item => {
    item.firstElementChild.classList.remove('btn_active');
  });
  e.currentTarget.firstElementChild.classList.add('btn_active');
}