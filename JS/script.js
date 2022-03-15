setInterval(changeImg, 3000);

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
  var menuA = document.getElementById("menu-a");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    menuA.style.height = "0";
    // menuB.style.height = '70px';
    // menuB.style.top= '0';
  } else if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    menuA.style.height = "60px";
    // menuB.style.height = '50px';
    // menuB.style.top = '50px';
  }
}

function showImgAct(event, target){
  var imgActList = document.getElementsByClassName("slider-act");

  for (var i = 0; i < imgActList.length; i++){
    imgActList[i].style.display = "none";
  }

  var tabList = document.getElementsByClassName("tab-act");

  for (var i = 0; i < tabList.length; i++){
    tabList[i].classList.remove("tab-active");
  }

  document.getElementById(target).style.display = "block";
  event.currentTarget.classList.add("tab-active");

}


function setImgMerchBackgroud(event){
  console.log(event);
  var merchBg = document.getElementById("merch-bg");
  var infoMerch = document.getElementById("info-merch");
  merchBg.style.backgroundImage = "url(" + event.currentTarget.src + ")";
  infoMerch.style.opacity = "100%";
  infoMerch.style.height = "50%";
}

function unsetImgMerchBackgroud(event){
  var merchBg = document.getElementById("merch-bg");
  var infoMerch = document.getElementById("info-merch");
  merchBg.style.backgroundImage = "";
  infoMerch.style.opacity = "0";
  infoMerch.style.height = "0";
}

