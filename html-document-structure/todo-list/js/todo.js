'use strict';

const done = document.querySelector('.done');
const undone = document.querySelector('.undone');
const checkboxes = Array.from(document.querySelectorAll('[type="checkbox"]'));

checkboxes.forEach(cb => cb.addEventListener('click', toggleDone));

function toggleDone() {
    this.parentElement.parentElement === done ? undone.appendChild(this.parentElement) : done.appendChild(this.parentElement)
}
