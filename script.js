
let boton=document.getElementById("up");

window.onscroll=function(){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        boton.style.display="block";
    }else{
        boton.style.display="none";
    }
}

function botonup(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}