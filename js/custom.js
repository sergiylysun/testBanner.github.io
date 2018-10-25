var slides = document.getElementsByClassName('slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}


var slidesBig = document.getElementsByClassName('slide-big');
var currentSlideBig = 0;
var slideIntervalBig = setInterval(nextSlideBig,2000);
 
function nextSlideBig() {
    slidesBig[currentSlideBig].className = 'slide-big';
    currentSlideBig = (currentSlideBig+1)%slidesBig.length;
    slidesBig[currentSlideBig].className = 'slide-big showing-big';
}

var slideImg = setInterval($(function() {
      $('.slide-img-box img').each(function(i) {
    $(this).delay((i++) * 150).fadeTo(200, 1);})
}), 2000);

