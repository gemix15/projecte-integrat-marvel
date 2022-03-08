setInterval(changeImg, 3000);
setInterval(sliderAct, 2000);

window.onscroll = function() {scrollNav()};

  // Creo una array amb totes les imatges
   var imatgesHero = document.getElementsByClassName("evento-slider");

  // console.log(imatgesHero);

function setZindex() {

  // for (i té valor de 0, mentres i sigui inferior a la quantitat d'imatges, i s'incrementa 1)
  // Dono valor de z-index a cada una de les imatges (així tindran un valor de 0, 1, 2 i 3 respectivament)
  for (var i = 0; i < imatgesHero.length; i++) {
    imatgesHero[i].style.zIndex = i;
    // console.log(imatgesHero[i] + ": " +imatgesHero[i].style.zIndex);
  }
}

function changeImg(){
  // Si el valor de z-index de cada una de les imatges és igual a la quantitat d'imatges - 1 (0 1 2 3 z-index, 1 2 3 4 length -1), 
  // aplica clip path a la imatge.
  // Fem que la imatge superior (amb z-index 3) es coloqui al fons (amb z-index 0).
  // I que les imatges restants s'incrementin en 1 el valor de z-index.

  for (var i = 0; i < imatgesHero.length; i++) {
    if (imatgesHero[i].style.zIndex == imatgesHero.length - 1) {
      
        imatgesHero[i].style.zIndex = 0;
        
         imatgesHero[i].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        } 

    else if(imatgesHero[i].style.zIndex == imatgesHero.length -2){
      imatgesHero[i].style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
      imatgesHero[i].style.zIndex++;
      }

      else {
        imatgesHero[i].style.zIndex++;
      }
  }
}

function scrollNav(){
  var menuB = document.getElementById("menu-b");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menuB.style.height = '70px';
    menuB.style.top= '0';
  } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    menuB.style.height = '50px';
    menuB.style.top = '50px';
  }
}

// MODIFICAR PERQUE NO FUNCIONA
var imatgesAct = document.getElementsByClassName("slider-act");

function actZindex(){
  for (var i = 0; i < imatgesAct.length; i++) {
    imatgesAct[i].style.zIndex = i;
    console.log(imatgesAct[i] + ": " +imatgesAct[i].style.zIndex);
  }
}


function sliderAct(){
  for (var i = 0; i < imatgesAct.length; i++) {
    if (imatgesAct[i].style.zIndex == imatgesAct.length - 1) {
      
        imatgesAct[i].style.zIndex = 0;
        
        imatgesAct[i].style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
        } else if(imatgesAct[i].style.zIndex == imatgesAct.length -2){
            imatgesAct[i].style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
            imatgesAct[i].style.zIndex++;
           }

            else {
              imatgesAct[i].style.zIndex++;
            }
    }
}

