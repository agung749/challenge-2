const carousel = document.querySelector(".carousel-inner");
const next =  document.getElementById("next");
const back =  document.getElementById("back");
var itterator = 0 ;
var itterator2 = itterator+1 ;
function onNext(){
    if(itterator< (carousel.children.length-1)){
        itterator++;
    }
    else{
        itterator = 0;
        itterator2=carousel.children.length-1;
    }
    ubahSlide(itterator,itterator2);
}
function onBack(){
    if(itterator != 0){
        itterator--;
        itterator2=itterator+1;
    }
    else{
        itterator=carousel.children.length-1;
        itterator2=0;
    }
    ubahSlide(itterator,itterator2);
}
function ubahSlide(slide1,slide2) {

    console.log(slide1);
    console.log(slide2);
    carousel.children[slide1].setAttribute("class","active");
    carousel.children[slide2].removeAttribute("class","active");
}

