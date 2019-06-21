"use strict";

////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

  // each themes section
  const containerThemes = document.getElementsByClassName('container-themes')[0].children;

  //each button close
  const allButtonClose = document.getElementsByClassName('button-close');

////////////////////////////////////////////////////////////////////////
//                              function                              //
////////////////////////////////////////////////////////////////////////


  ////////////////////////////////////////
  //  function onclick for each themes  //
  ////////////////////////////////////////

  for (const theme of containerThemes) {

    const articleNoClicked = theme.children[0];
    const articleClicked = theme.children[1];
    const aside = articleClicked.children[1];
    const divAside = aside.children;
    const buttonClose = articleClicked.children[2];

    //////////////////
    //  event Open ///
    //////////////////
    articleNoClicked.onclick = function() {
      toggleAllElements(containerThemes, theme, articleNoClicked, articleClicked);
    }

    for (let i = 0; i < divAside.length; i ++){
      divAside[i].addEventListener('click', ()=> {
        if(divAside[i].classList.contains('sidebar-thematics-energy')){

          console.log(theme);
          console.log(divAside[i]);
        }else if(divAside[i].classList.contains('sidebar-thematics-food')){
          console.log(divAside[i]);
        }else if(divAside[i].classList.contains('sidebar-thematics-garden')){
          console.log(divAside[i]);
        }else if(divAside[i].classList.contains('sidebar-thematics-health')){
          console.log(divAside[i]);
        }
      });
    }

    ////////////////////
    //  event Close  /// 
    ////////////////////
    buttonClose.onclick = function() {
      toggleAllElements(containerThemes, theme, articleNoClicked, articleClicked);
    }
  }

  




  ////////////////////////////////////////
  //  function for toggle all elements  //
  ////////////////////////////////////////

  function toggleAllElements(containerThemes, theme, articleNoClicked, articleClicked) {
    displayNone(containerThemes, 'toggle');
    displayNone(theme, 'toggle');
    displayNone(articleNoClicked, 'toggle');
    displayNone(articleClicked, 'toggle');
  }
  
  
  ////////////////////////////////
  //  function for displayNone  //
  ////////////////////////////////
  
  
  function displayNone(elements, action) {
    // know if elements are iterable or not
    if (!elements[1]) {
      displayNoneElement(elements, action);
    } else {
      displayNoneElements(elements, action);
    }
  }
  
  /////////////////////////////////////////////////////////////////
  //  function for add/remove/toggle displayNone single element  //
  /////////////////////////////////////////////////////////////////
  
  
    function displayNoneElement(element, action) {
      if (action == 'add') {
        element.classList.add('displayNone');
      }
      if (action == 'remove') {
        element.classList.remove('displayNone');
      }
      if (action == 'toggle') {
        element.classList.toggle('displayNone');
      }
    }
  
  ////////////////////////////////////////////////////////////////////////
  //  function for add/remove/toggle displayNone for multiple elements  //
  ////////////////////////////////////////////////////////////////////////
  
    function displayNoneElements(elements, action) {
  
      for (const element of elements) {
        if (action == 'add') {
          element.classList.add('displayNone');
        }
        if (action == 'remove') {
          element.classList.remove('displayNone');
        }
        if (action == 'toggle') {
          element.classList.toggle('displayNone');
        }
      }
    }
