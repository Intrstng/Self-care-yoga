export function watchEntry() {
  const options = {
    threshold: [0.5]
  };
  const observer = new IntersectionObserver(onEntry, options),
      titleElements = document.querySelectorAll('.title-animation'),
      textElements = document.querySelectorAll('.text-animation');
  
  titleElements.forEach(title => observer.observe(title));
  textElements.forEach(text => observer.observe(text));
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting && change.target.classList.contains('text-animation')) {
      change.target.classList.add('text-animation_show');
    } 
    if (change.isIntersecting && change.target.classList.contains('title-animation')) {
      change.target.classList.add('title-animation_show');
    }
  });
}