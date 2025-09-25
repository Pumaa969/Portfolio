
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

const fecha = new Date();
const opcion = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("fecha").innerHTML = fecha.toLocaleDateString('es-ES', opcion);

