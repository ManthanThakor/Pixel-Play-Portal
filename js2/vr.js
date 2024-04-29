var slideIndex = 1;
showSlid(slideIndex);

function plusSlided(n) {
  showSlid((slideIndex += n));
}

function currentSlided(n) {
  showSlid((slideIndex = n));
}

function showSlid(n) {
  var i;
  var slide = document.getElementsByClassName("vr-out");
  var dots = document.getElementsByClassName("dott");

  if (n > slide.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slide[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
