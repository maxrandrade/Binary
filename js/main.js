var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menu-btn');
var closeBtn = document.getElementById('close-btn');
var backToTop = document.getElementsByClassName('back-to-top')[0];
var articles = document.getElementsByTagName('article');

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
  menu.classList.add("visible");
}

function closeMenu() {
  menu.classList.remove("visible");
}

window.setInterval( function(){
  if (window.scrollY > 2000) {
     backToTop.classList.add('visible');
  }
  if (window.scrollY < 2000) {
    backToTop.classList.remove('visible');
 }
},1000);

function addNavBtnsId(){
  for (var i = 0; i < articles.length ; i++) {
    var prevNav = articles[i].getElementsByClassName('nav-articles-btn')[0];
    var nextNav = articles[i].getElementsByClassName('nav-articles-btn')[1];
    
    if (i == 0) {
      prevNav.classList.add('disabled');
      prevNav.setAttribute('href', '#!');
      getNextArt();
    } else if (i + 1 == articles.length) {
      nextNav.classList.add('disabled');
      nextNav.setAttribute('href', '#!');
      getPrevArt();
    } else {
      getPrevArt();
      getNextArt();
    }
  }

  function getPrevArt() {
    var idPrevArt = articles[i-1].getAttribute('id');
    prevNav.setAttribute('href', '#' + idPrevArt);
  }
  
  function getNextArt() {
    var idNextArt = articles[i+1].getAttribute('id');
    nextNav.setAttribute('href', '#' + idNextArt);
  }
}

addNavBtnsId();