var sslideIndex = 1;
showSlides(sslideIndex);

function plusSlidess(n) {
    showSlides(sslideIndex += n);
}

function currentSlide(n) {
    showSlides(sslideIndex = n);
}

function showSlides(n) {
    var i;
    var sslides = document.getElementsByClassName("i4-mSlides");
    if (n > sslides.length) { sslideIndex = 1 }
    if (n < 1) { sslideIndex = sslides.length }
    for (i = 0; i < sslides.length; i++) {
        sslides[i].style.display = "none";
    }

    sslides[sslideIndex - 1].style.display = "flex";
}