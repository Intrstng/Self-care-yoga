const scrollUp = document.querySelector('.scroll-up');

function trackScroll() {
  // Position from top of the window
  const scrolled = window.scrollY;
  // Window height
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    scrollUp.classList.add('scroll-up_show');
  } else {
    scrollUp.classList.remove('scroll-up_show');
  }
}

function scrollTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75); // lower - higher scroll speed
    scrollTop(); // recursion
  }
}

export { scrollUp, trackScroll, scrollTop }