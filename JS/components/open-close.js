"use strict";

//target all button-close
const close = document.getElementsByClassName('button-close');
//target all artcile-clicked
const clicked = document.getElementsByClassName('section__article--clicked');
//target all section
const energy = document.getElementsByClassName("section-energy")[0];
const health = document.getElementsByClassName("section-health")[0];
const garden = document.getElementsByClassName("section-garden")[0];
const food = document.getElementsByClassName("section-food")[0];
//target all article-no-clicked
const noClickedHealth = document.getElementsByClassName('section-health__article--no-clicked')[0];
const noClickedEnergy = document.getElementsByClassName('section-energy__article--no-clicked')[0];
const noClickedGarden = document.getElementsByClassName('section-garden__article--no-clicked')[0];
const noClickedFood = document.getElementsByClassName('section-food__article--no-clicked')[0];

//////////////////// OPEN EVENT ///////////////////////

//section-energy event
energy.addEventListener("click", ()=> {

    health.classList.add('displayNone');
    food.classList.add('displayNone');
    garden.classList.add('displayNone');
    noClickedEnergy.classList.add('displayNone');

    for(let i=0; i < clicked.length;i++){

        clicked[i].classList.remove('displayNone');

    }
});

//section-food event
food.addEventListener("click", ()=> {

    health.classList.add('displayNone');
    energy.classList.add('displayNone');
    garden.classList.add('displayNone');
    noClickedFood.classList.add('displayNone');

    for(let i=0; i < clicked.length;i++){

        clicked[i].classList.remove('displayNone');

    }
});

//section-garden event
garden.addEventListener("click", ()=> {

    health.classList.add('displayNone');
    food.classList.add('displayNone');
    energy.classList.add('displayNone');
    noClickedGarden.classList.add('displayNone');

    for(let i=0; i < clicked.length;i++){

        clicked[i].classList.remove('displayNone');

    }
});

//sectio-health event
health.addEventListener("click", ()=> {

    energy.classList.add('displayNone');
    food.classList.add('displayNone');
    garden.classList.add('displayNone');
    noClickedHealth.classList.add('displayNone');

    for(let i=0; i < clicked.length;i++){

        clicked[i].classList.remove('displayNone');

    }
});

//////////////// BUTTON-CLOSE EVENT ///////////////////

for(let i = 0; i < clicked.length; i++){

        close[i].addEventListener("click", ()=> {

            
            clicked[i].classList.add('displayNone');
            
        
            

    });
}