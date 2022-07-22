var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  var x =document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  // if (window.matchMedia("(min-width:767px)").matches) {
  //   page.scrollTop=-y; 
  // }
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

