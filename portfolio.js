var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;
let navbar = document.querySelector('.navbar');
let box1= document.querySelector('.box1')
//navbar au scroll//
window.addEventListener('scroll', function(){
  navbar.style="background-color:rgba(255, 255, 255, 0.592);border-radius:10px;width:85px;padding-left:5px";
  if (window.innerWidth<400) {
    navbar.style="background-color:rgba(255, 255, 255, 0.592);width:80vw;border-radius:10px;padding-left:5px;flex-direction: row;"
    box1.style="display:flex;justify-content: center;align-items: center;"}
    if (condition) {
      
    }
})

var y = document.body.getBoundingClientRect().top;
if(window.innerWidth<400){
  document.getElementById('page').style="background: rgb(255, 153, 0);position: relative;display: block; ";
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
$('form').delay(1000).addClass('ouvert');
// En sortant d'un champ du Form (désélection)
$('input,textarea').blur(function () {
  if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le textarea Message
    $(this).parent().css('margin-bottom','0'); // On retire la marge (qui baisse le bouton submit)
  }
  if ( $(this).val() != '' ) { // Si le champs est rempli
    $(this).siblings('label').addClass('labelOuvert'); // On laisse le label en petit
    if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le champ message
      $(this).parent().addClass('messOuvert'); // Ajout de la classe pour agrandir le champ
      $(this).parent().css('margin-bottom','100px'); // On baisse le bouton
    }
  }
  else {
    $(this).siblings('label').removeClass('labelOuvert');
    if($(this).siblings('label').attr('for')=='msg'){ // Si c'est le textarea Message
      $(this).parent().removeClass('messOuvert'); // Retrait de la classe pour reduire le champ
    }
  }
});
$('textarea').focus(function () { // Au clic sur le textarea Message
  if($(this).val() == ''){ // Si le champ est vide
    $(this).parent().css('margin-bottom','100px'); // Rajout de la marge pour baisser le bouton submit
  }
});


