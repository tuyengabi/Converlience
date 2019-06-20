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
    const buttonClose = articleClicked.children[2];

    articleNoClicked.onclick = function() {
      toggleAllElements();
    }

    buttonClose.onclick = function() {
      toggleAllElements();
    }
  }

  ////////////////////////////////////////
  //  function for toggle all elements  //
  ////////////////////////////////////////

  function toggleAllElements() {
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
