const sliderImages = document.querySelectorAll('.slider__img'),
      sliderLine = document.querySelector('.slider__line'),
      sliderDots = document.querySelectorAll('.slider__dot'),
      sliderBtnNext = document.querySelector('.slider__btn-next'),
      sliderBtnPrev = document.querySelector('.slider__btn-prev');

let sliderCount = 0,
    sliderWidth = document.querySelector('.slider').offsetWidth;

function showSlide() {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
  rollSlider();
}

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;
  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;
  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function thisSlide(idx) {
  sliderDots.forEach(item => item.classList.remove('slider__dot_active'));
  sliderDots[idx].classList.add('slider__dot_active');
}

sliderDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    sliderCount = idx;
    rollSlider();
    thisSlide(sliderCount);
  })
})

export { showSlide, nextSlide, prevSlide, sliderBtnNext, sliderBtnPrev }