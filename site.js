$(document).ready(function(){
    $("#flip").click(function(){
        $(".slideshowbody").slideToggle("slow");
    });
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("currentSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1
  } 
  if (n < 1){
    slideIndex = slides.length
    }
  for (a = 0; a < slides.length; a++){
    slides[a].style.display = "none"; 
  }
  for (b = 0; b < dots.length; b++) {
      dots[b].className = dots[b].className.replace(" activation", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " activation";
}

function formFunction() {
    if (confirm("Press Yes if you want to send this to us") == true) {
        window.confirm("You submission has been sent successfully!");
    } else {
        window.alert("You pressed Cancel :C");
    }
    formFunction.preventDefault();
}