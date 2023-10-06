const videoPlayer = document.getElementById('videoPlayer'),
      myVideo = document.getElementById('myVideo'),
      playVideoBtns = document.querySelectorAll('.video__icon');

// Поменять в ссылке Youtube "watch?v=" на "embed/" + в конец "?autoplay=1"
let videoLinksArr = [
  "https://www.youtube.com/embed/2IWHZ-9RRlI?si=zWtVRCP-h98l4XaS?autoplay=1",
  "https://www.youtube.com/embed/1ldoWsIR9dQ?si=QVTpylyw32gMDanB?autoplay=1",
  "https://www.youtube.com/embed/GN5q747x1zI?si=EjeQTp9HV0x-FjAy?autoplay=1" ,
  "https://www.youtube.com/embed/zZtAB-8RdL8?si=C80juienB4JC_Xak?autoplay=1",
  "https://www.youtube.com/embed/i0swoyVALWc?si=XIjZXJ8IarhsMhJK?autoplay=1" ,
  "https://www.youtube.com/embed/AwqVDf9kcj0?si=norZGtPtbei9fvai?autoplay=1" ,
]

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