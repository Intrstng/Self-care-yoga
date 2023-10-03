// import './sass/styles.scss';
import 'normalize.css';
import { showSlide, nextSlide, prevSlide, sliderBtnNext, sliderBtnPrev } from './js/Slider';

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', showSlide);

// setInterval(() => {
//   nextSlide()
//   console.log('next')
// }, 2000);