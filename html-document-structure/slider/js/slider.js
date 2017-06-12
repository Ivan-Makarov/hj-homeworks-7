'use strict';

const slides = document.querySelector('.slides');
const nav = document.querySelector('.slider-nav');
const next = nav.querySelector('[data-action="next"]');
const prev = nav.querySelector('[data-action="prev"]');
const first = nav.querySelector('[data-action="first"]');
const last = nav.querySelector('[data-action="last"]');

slides.firstElementChild.classList.add('slide-current');
let activeSlide = document.querySelector('.slide-current');

function updateControls() {
    if (!activeSlide.previousElementSibling) {
        disableControl(prev);
        disableControl(first)
    } else {
        activateControl(prev);
        activateControl(first)
    }

    if (!activeSlide.nextElementSibling) {
        disableControl(next);
        disableControl(last)
    } else {
        activateControl(next);
        activateControl(last)
    }
}

function disableControl(control) {
    control.classList.add('disabled');
    control.removeEventListener('click', changeSlide)
}

function activateControl(control) {
    control.classList.remove('disabled');
    control.addEventListener('click', changeSlide)
}

updateControls();

Array.from(nav).forEach(control => control.addEventListener('click', changeSlide));

function changeSlide(click) {
    activeSlide.classList.remove('slide-current');
    switch(click.target) {
        case next:
            activeSlide = activeSlide.nextElementSibling;
            break;
        case prev:
            activeSlide = activeSlide.previousElementSibling;
            break;
        case first:
            activeSlide = slides.firstElementChild;
            break;
        case last:
            activeSlide = slides.lastElementChild;
            break;
        default:
            break;
    }
    activeSlide.classList.add('slide-current');
    updateControls();
}
