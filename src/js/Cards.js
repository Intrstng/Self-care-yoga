const cardPrevBtn = document.querySelector('.flipping__img-left'),
      cardNextBtn = document.querySelector('.flipping__img-right'),
      articles = document.querySelectorAll('.select');

let counterCard = 0;

function showNext() {
  counterCard++;
  if (counterCard > 4) counterCard = 0;
  console.log(counterCard)
  articles.forEach((item) => {
    item.classList.add('hidden');
  });
  articles.forEach((item) => {
    if (Number(item.dataset.slide) === counterCard) {
      item.classList.remove('hidden');
    }
  });
}

function showPrev() {
  counterCard--;
  if (counterCard < 0) counterCard = 0;
    articles.forEach((item) => {
      item.classList.add('hidden');
    });
    articles.forEach((item) => {
      if (Number(item.dataset.slide) === counterCard) {
        item.classList.remove('hidden');
      }
    });
}

export { cardPrevBtn, cardNextBtn, showPrev, showNext }