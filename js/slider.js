var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); //mudar em 5 segs.
}

//botão proximo e anterior

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


//Modal Slider (Transição)

var slideIndexA = 0;
carouselA();

function carouselA() {
    var iA;
    var xA = document.getElementsByClassName("mySlides2");
    for (iA = 0; iA < 4; iA++) {
      xA[iA].style.display = "none";
    }
    slideIndexA++;
    if (slideIndexA > 4) {slideIndexA = 1}
    xA[slideIndexA-1].style.display = "block";
    setTimeout(carouselA, 2500); //mudar em 3 segs.
}
// Modal Slider (Botões)

function plusDivsA(nA) {
  showDivsA(slideIndexA += nA);
}

function showDivsA(nA) {
  var iA;
  var xA = document.getElementsByClassName("mySlides2");
  if (nA > 4) {slideIndexA = 1}
  if (nA < 1) {slideIndexA = 4}
  for (iA = 0; iA < 4; iA++) {
     xA[iA].style.display = "none";
  }
  xA[slideIndexA-1].style.display = "block";
}
