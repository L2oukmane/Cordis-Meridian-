window.addEventListener('load', function() {
    var logo = document.getElementsByClassName('logo-img');
    logo.style.animationPlayState = 'running';
  });

const observer = new IntersectionObserver ((entries) => {
entries.forEach((entry) => {
  console.log(entry)
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  } else{
    entry.target.classList.remove('show');
  }
});
});

const hiddenElements = document.querySelectorAll('.hiden');
hiddenElements.forEach((el)=> observer.observe(el));