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


const closeMenu = document.querySelector('.menu-closed');
const mobileMenu  = document.querySelector('.page-links');

const openMenu = document.querySelector(".menu-open");

function open(){
	mobileMenu.classList.add('mobile-menu');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'flex'
};

function close(){
	mobileMenu.classList.remove('mobile-menu');
  openMenu.style.display = 'flex';
  closeMenu.style.display = 'none';
};

openMenu.addEventListener('click',open);
closeMenu.addEventListener('click',close);

