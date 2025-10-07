
// Archivo: javascript.js

// 1. OBTENER LOS OBJETOS HTML (Identifikatzailea lortu)
// El ID 'botoia' debe coincidir con el ID del botón en tu HTML.
const aktibazioBotoia = document.getElementById('botoia');
const imagen = document.getElementById('miImagen');

// 2. DEFINIR LA ACCIÓN (Ekintza definitu)
function erakutsiOrain() {
    // Comprueba si la imagen está OCULTA (display es 'none' o vacío)
    if (imagen.style.display === 'none' || imagen.style.display === '') {
        // Si está oculta, la MUESTRA
        imagen.style.display = 'block';
        aktibazioBotoia.textContent = 'Ezkutatu irudia (Ocultar)';
    } else {
        // Si está visible, la OCULTA
        imagen.style.display = 'none';
        aktibazioBotoia.textContent = 'Sakatu irudia erakusteko! (Mostrar)';
    }
}

// 3. ASIGNAR EL ESCUCHADOR DE EVENTOS (Konektatu ekintza)
// Esto va FUERA de la función, para que se asigne una sola vez al cargar la página.
aktibazioBotoia.addEventListener('click', erakutsiOrain); 