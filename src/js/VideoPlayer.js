const videoPlayer = document.getElementById('videoPlayer'),
      myVideo = document.getElementById('myVideo'),
      playVideoBtns = document.querySelectorAll('.video__icon');

// Поменять в ссылке Youtube "watch?v=" на "embed/" + в конец "&autoplay=1"
const videoLinksArr = [
  "https://www.youtube.com/embed/DlEBmURH-JE?start=1&autoplay=1",
  "https://www.youtube.com/embed/DlEBmURH-JE?autoplay=1",
  "https://www.youtube.com/embed/xO0YLdWmM8U?autoplay=1",
  "https://www.youtube.com/embed/tUBx6AimjAA?autoplay=1",
  "https://www.youtube.com/embed/R02YVaxOYQo?start=67&autoplay=1",
  "https://www.youtube.com/embed/lS80uHvmuA8?start=5&autoplay=1",
];

function playVideo(e) {
  myVideo.src = videoLinksArr[Number(e.target.dataset.count)];
  videoPlayer.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function stopVideo(e) {
  e.stopPropagation();
  if (!e.target.classList.contains('video__icon')) {
    var iframeSrc = myVideo.src;
		myVideo.src = iframeSrc;
    videoPlayer.style.display = 'none';
    document.body.style.overflow = 'scroll';
  }
}

export { playVideoBtns, playVideo, stopVideo }