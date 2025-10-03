
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
    if (email && mensaje && nombre) {
        alert('Gracias por contactarme, ' + nombre + '! He recibido tu mensaje y pronto seras contactado.');
        form.reset();
    } else if (!email.includes('@')) {
        alert('Por favor, ingresa un correo electrónico válido.');
    } else if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
    } else if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
    } else if (!email.match(emailRegex)){
        alert('Por favor, ingresa un correo electrónico válido.');
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formulario');

    function saveFormData() {
        const fromData={
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value
        };

        localStorage.setItem('formData', JSON.stringify(fromData));
    }

    FormData.addEventListener('submit',function(){
        event.preventDefault();
        saveFormData();
        alert('Datos guardados en el almacenamiento local.');
        form.reset();
    });

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', saveFormData);
    });
});
//verificar que no anda