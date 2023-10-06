const galleryContainer = document.querySelector('.practices__buttons');


galleryContainer.addEventListener('click', function(e) {
  if (e.target.closest('btn')) {
    console.log('ok')
  }
})