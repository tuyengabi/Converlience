"use strict";

let close = document.getElementsByClassName('button-close');
let clicked = document.getElementsByClassName('section__article--clicked');
//let noClicked = document.getElementsByClassName('section-energy__article--no-clicked')[0];

//close.addEventListener("click", () => { clicked.classList.toggle("displayNone"); });
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
    clicked[i].classList.toggle("displayNone");
});
}

