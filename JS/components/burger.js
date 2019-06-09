"use strict";

function openNavBar() {
    const main = document.getElementsByTagName("main")[0];
    const nav = document.getElementsByClassName("navbar")[0];
    const header = document.getElementsByClassName("container-header")[0];
    console.log("thanks");
    
        main.classList.toggle("displayNone");
        nav.classList.toggle("displayNone");
        header.classList.toggle("displayNone");

    }

