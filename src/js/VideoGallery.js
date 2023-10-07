const galleryBtns = document.querySelectorAll('.button-select'),
      videoGalleryItemsArr = document.querySelectorAll('.video__card');
let selectedBtnTags = [];

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

export { galleryBtns, selectVideoByTag }