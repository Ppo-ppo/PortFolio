var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;
let navbar = document.querySelector('.navbar');
let box1= document.querySelector('.box1')
let navcontent=document.querySelector('.nav')
//navbar au scroll//
window.addEventListener('scroll', function(){
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
    top: (window.screen.width),
    behavior: 'smooth'
  })
})
var port = document.querySelector('.port')
port.addEventListener('click',function(){
  window.scrollTo({
    top: (window.screen.width*2),
    behavior: 'smooth'
  })
})
var contactMe = document.querySelector('.contactNav')
contactMe.addEventListener('click',function(){
  window.scrollTo({
    top: (window.screen.width*3),
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
    top: (window.screen.height),
    behavior: 'smooth'
  })
})
var port = document.querySelector('.port')
port.addEventListener('click',function(){
  window.scrollTo({
    top: (window.screen.height*2),
    behavior: 'smooth'
  })
})

var contactMe = document.querySelector('.contactNav')
contactMe.addEventListener('click',function(){
  window.scrollTo({
    top: (window.screen.height*3),
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

