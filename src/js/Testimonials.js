// Testimonials section slider
let position = 0;
const slidesToShow = 3,
      slidesToScroll = 2,
      carouselContainer = document.querySelector('.carousel'),
      carouselLine = document.querySelector('.carousel__line'),
      carouselBtnPrev = document.querySelector('.carousel__btn-prev'),
      carouselBtnNext = document.querySelector('.carousel__btn-next'),
      carouselItems = document.querySelectorAll('.carousel__item'),
      carouselItemCount = carouselItems.length,
      carouselItemWidth = carouselContainer.clientWidth / slidesToShow,
      movePosition = carouselItemWidth * slidesToScroll;

function setCarouselItemWidth() {
  carouselItems.forEach(item => {
    item.style.minWidth = `${carouselItemWidth}px`;
  })
}

function checkBtns() {
  carouselBtnPrev.disabled = position === 0;
  carouselBtnNext.disabled = position <= -(carouselItemCount - slidesToShow) * carouselItemWidth;
}

function setPosition() {
  carouselLine.style.transform = `translateX(${position}px)`;
  checkBtns();
}

function scrollCarouselNext() {
  const itemsLeft = carouselItemCount - (Math.abs(position) + carouselItemWidth * slidesToShow) / carouselItemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : carouselItemWidth * itemsLeft;
  setPosition();
}

function scrollCarouselPrev() {
  const itemsLeft = Math.abs(position) / carouselItemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : carouselItemWidth * itemsLeft;
  setPosition();
}

export { carouselBtnPrev, carouselBtnNext, scrollCarouselPrev, scrollCarouselNext, setCarouselItemWidth, checkBtns }