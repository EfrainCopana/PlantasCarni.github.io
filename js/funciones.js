let name_image = 1;

function main() {
    setInterval(cambiarBanner, 2000);
}

function cambiarBanner() {
    // Crear la URL de la imagen
    const imageUrl = `img/banner/${name_image}.jpg`;

    // Acceder a la imagen por su id (asumiendo que la imagen tiene el id 'Banner')
    const banner = document.getElementById('Banner');

    // Crear una nueva instancia de Image
    const imagen = new Image();

    // Manejar la carga exitosa de la imagen
    imagen.onload = function () {
        banner.src = imageUrl;
    };

    // Manejar posibles errores de carga de la imagen
    imagen.onerror = function () {
        console.error(`Error al cargar la imagen: ${imageUrl}`);
    };

    // Asignar la URL de la imagen
    imagen.src = imageUrl;

    // Actualizar el contador
    name_image += 1;

    // Reiniciar el contador si supera el número de imágenes disponibles
    if (name_image > 8) {
        name_image = 1;
    }
}

main();
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    var main = document.querySelector('main');
    var navPlaceholder = document.getElementById('nav-placeholder');

    var headerHeight = header.offsetHeight;

    function adjustNav() {
        if (window.scrollY > headerHeight) {
            nav.classList.add('fixed');
            navPlaceholder.style.display = 'block';
            main.style.marginTop = headerHeight + 'px';
        } else {
            nav.classList.remove('fixed');
            navPlaceholder.style.display = 'none';
            main.style.marginTop = '0';
        }
    }

    // Ajusta el nav al cargar la página
    adjustNav();

    // Ajusta el nav en respuesta al desplazamiento
    window.addEventListener('scroll', adjustNav);
});

