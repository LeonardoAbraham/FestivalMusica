document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria () {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="imagen/avif">
            <source srcset="build/img/thumb/${i}.webp" type="imagen/webp">
            <img loading="lazy" width="200" height="300" src="src/img/thumb/${i}.jpg" alt="Imagen Galeria">
        `;

        imagen.onclick = function(){
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="imagen/avif">
        <source srcset="build/img/grande/${id}.webp" type="imagen/webp">
        <img loading="lazy" width="200" height="300" src="src/img/grande/${id}.jpg" alt="Imagen Galeria">
    `;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay);

}