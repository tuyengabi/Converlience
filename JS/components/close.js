"use strict";

const close = document.getElementsByClassName('button-close');
const clicked = document.getElementsByClassName('section__article--clicked');
const energy = document.getElementsByClassName("section-energy")[0];
const health = document.getElementsByClassName("section-health")[0];
const garden = document.getElementsByClassName("section-garden")[0];
const food = document.getElementsByClassName("section-food")[0];
const noClickedHealth = document.getElementsByClassName('section-health__article--no-clicked')[0];
const noClickedEnergy = document.getElementsByClassName('section-energy__article--no-clicked')[0];
const noClickedGarden = document.getElementsByClassName('section-garden__article--no-clicked')[0];
const noClickedFood = document.getElementsByClassName('section-food__article--no-clicked')[0];

for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
    clicked[i].classList.toggle("displayNone");
    noClickedHealth.classList.toggle('displayNone');
    noClickedEnergy.classList.toggle('displayNone');
    noClickedGarden.classList.toggle('displayNone');
    noClickedFood.classList.toggle('displayNone');
    food.classList.toggle("displayNone");
    health.classList.toggle("displayNone");
    garden.classList.toggle("displayNone");
    energy.classList.toggle("displayNone");
    

});
}

