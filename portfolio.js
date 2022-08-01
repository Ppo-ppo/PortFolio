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
  if (window.innerWidth<400) {
    navbar.style="background-color:rgba(255, 255, 255, 0.592);width:80vw;border-radius:10px;padding-left:5px;flex-direction: row;backdrop-filter: blur(8px);"
    box1.style="display:flex;justify-content: center;align-items: center;"}
})
var y = document.body.getBoundingClientRect().top;
if(window.innerWidth<400){
  document.getElementById('page').style="position: relative;display: block; ";
  page.scrollLeft = 0;
let panes = document.querySelectorAll(".pane")
panes.forEach(pane => {
  pane.style="overflow:hidden"
}) 


}
window.onscroll = function () {
  // Horizontal Scroll.
  //var y = document.body.getBoundingClientRect().top;
  var x =document.body.getBoundingClientRect().top;
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



