var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;
let navbar = document.querySelector('.navbar');
let box1= document.querySelector('.box1')
let navcontent=document.querySelector('.nav')
//navbar au scroll//
window.addEventListener('scroll', function(){
  console.log(document.querySelector('.port').getBoundingClientRect())
  console.log("about"+ document.querySelector('.container2').offsetLeft)
  console.log("Portfolio"+ document.querySelector('.port').offsetLeft)


  navbar.style="background-color:rgba(255, 255, 255, 0.592);border-radius:10px;width:85px;padding-left:5px;backdrop-filter: blur(8px);";
  if (window.innerWidth<1024) {
    navbar.style="background-color:rgba(255, 255, 255, 0.592);width:80vw;border-radius:10px;flex-direction: row;backdrop-filter: blur(8px);"
    box1.style="display:flex;justify-content: center;align-items: center;"}
})
var home = document.querySelector('.acceuil')
home.addEventListener('click',function(){
  window.scrollTo({
    top: "0",
    behavior: 'smooth'
  })
})
var apropos = document.querySelector('.propos')
apropos.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerWidth),
    behavior: 'smooth'
  })
})
var port = document.querySelector('.port')
port.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerWidth*2),
    behavior: 'smooth'
  })
})
var contactMe = document.querySelector('.contactNav')
contactMe.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerWidth*3),
    behavior: 'smooth'
  })

})
if(window.innerWidth<1024){
  document.getElementById('page').style="position: relative;display: block; ";
  page.scrollLeft = 0;
let panes = document.querySelectorAll(".pane")
panes.forEach(pane => {
  pane.style="overflow:hidden"
}) 
var apropos = document.querySelector('.propos')
apropos.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerHeight),
    behavior: 'smooth'
  })
})
var port = document.querySelector('.port')
port.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerHeight*2),
    behavior: 'smooth'
  })
})

var contactMe = document.querySelector('.contactNav')
contactMe.addEventListener('click',function(){
  window.scrollTo({
    top: (window.innerHeight*3),
    behavior: 'smooth'
  })

})
}
window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();
// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}


// tableau modal objet
const modalContent=[
  {name:"Projet Creative",description:"langage: Html/Css",lien:"https://paulinel.promo-167.codeur.online/Projet/ProjectOneInteNoBootstrap/",src:"img/creative.png"},
  {name:"Projet Calculette",description:"langage: Html/Css et Javascript",lien:"https://paulinel.promo-167.codeur.online/Projet/Calculette/",src:"img/photo3.png"},
  {name:"Projet Popcode",description:"langage: Html/Css  Javascript",lien:"https://paulinel.promo-167.codeur.online/Projet/PopCode/",src:"img/photo4.png"}];
const modal = document.querySelector('.modal');
const projet1 = document.querySelector('.projet1');
const projet3= document.querySelector('.projet3');
const projet4= document.querySelector('.projet4');
const close = document.querySelector('.croix');
projet1.addEventListener('click', function(){
  modal.classList.toggle('none');
  document.querySelector('.modalcontent>h2').textContent=modalContent[0].name;
  document.querySelector('.modalcontent>p').textContent=modalContent[0].description;
  document.querySelector('.modalcontent>.lien').innerHTML= `<a class="lien"target="_blank" href="${modalContent[0].lien}">voir le site</a>`
  document.querySelector('.modalcontent>.lg').src=modalContent[0].src;
})
projet3.addEventListener('click', function(){
  modal.classList.toggle('none');
  document.querySelector('.modalcontent>h2').textContent=modalContent[1].name;
  document.querySelector('.modalcontent>p').textContent=modalContent[1].description;
  document.querySelector('.modalcontent>.lien').innerHTML= `<a class="lien"target="_blank" href="${modalContent[1].lien}">voir le site</a>`;
  document.querySelector('.modalcontent>.lg').src=modalContent[1].src;
})
projet4.addEventListener('click', function(){
  modal.classList.toggle('none');
  document.querySelector('.modalcontent>h2').textContent=modalContent[2].name;
  document.querySelector('.modalcontent>p').textContent=modalContent[2].description;
  document.querySelector('.modalcontent>.lien').innerHTML= `<a class="lien"target="_blank" href="${modalContent[2].lien}">voir le site</a>`;
  document.querySelector('.modalcontent>.lg').src=modalContent[2].src;
})
close.addEventListener('click', function(){
  modal.classList.toggle('none');
})

