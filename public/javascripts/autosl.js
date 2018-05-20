'use strict';

const delaySeconds = 20; // Set this higher for prod
let slideIndex = 0;

showSlides();
// document.getElementById("iphone-original").style.display="block";

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");

    // Hide all of them
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment index, and show slide at slideIndex - 1
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Run this function again in a few seconds
    setTimeout(showSlides, (delaySeconds * 1000));
}

document.onkeydown = (ev) => {
    ev = ev || window.event;
    switch (ev.key) {
        case "ArrowRight":
            ev.preventDefault();
            showSlides();
            break;
        default:
            break;
    }
}