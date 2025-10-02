
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

document.addEventListener("DOMContentLoaded", function() {
    const fecha = new Date();
    const opcion = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("fecha").innerHTML = fecha.toLocaleDateString('es-ES', opcion);
    
    // Configurar todos los botones de referencia
    const refButtons = document.getElementsByClassName("refbutton");
    for (let i = 0; i < refButtons.length; i++) {
        refButtons[i].onclick = function() {
            let parent = this.closest('.menudesp');
            let refdiv = parent.querySelector('.refcontent');
            if (refdiv) {
                refdiv.style.display = (refdiv.style.display === "block") ? "none" : "block";
                parent.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };
    }
});

