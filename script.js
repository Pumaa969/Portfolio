
let boton=document.getElementById("up");
// boton de scroll up
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

// Fecha actual en el footer y funcionalidad de los botones de referencias

document.addEventListener("DOMContentLoaded", function() {
    const fecha = new Date();
    const opcion = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("fecha").innerHTML = fecha.toLocaleDateString('es-ES', opcion);
    
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

 // Conj de constantes para utilizar en las validaciones y almacenamiento

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const form = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const nombreInput = document.getElementById('nombre');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value;
    const mensaje = mensajeInput.value;
    const nombre = nombreInput.value;
    
    // Validaciones
    if (!nombre || nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
    }
    if (!email || !email.match(emailRegex)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (!mensaje || mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        return;
    }
    
    // guarda datos en local storage
    const datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };
    
    localStorage.setItem('formularioDatos', JSON.stringify(datos));
    
    console.log('nombre: ', nombre);
    console.log('email: ', email);
    console.log('mensaje: ', mensaje);
    
    alert('Gracias por contactarme, ' + nombre + ' He recibido tu mensaje y pronto serás contactado. Los datos han sido guardados.');
    form.reset();
});

//boton de cambiar tema

const togglebutton=document.getElementById('cambiarTema');
const themeicon=document.getElementById('themeicon');
const body=document.body;
const imagen=document.getElementById('fotomia');

togglebutton.addEventListener('click', ()=>{
    body.classList.toggle('dark');
    body.classList.toggle('light');

    body.classList.contains('dark');
    if(body.classList.contains('dark')){
        themeicon.src="imagenes/sol.png";
        imagen.src="imagenes/fotomia.jpg";
        themeicon.alt="Modo Claro";
    }else{
        themeicon.src="imagenes/luna.png";
        imagen.src="imagenes/fotomianoche.jpg";
        themeicon.alt="Modo Oscuro";
    }
});