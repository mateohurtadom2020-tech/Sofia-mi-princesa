// Animations.js con autoreparación
const crearContenedor = () => {
    let container = document.getElementById('hojas-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'hojas-container';
        document.body.appendChild(container);
    }
    return container;
};

function crearHoja() {
    const container = crearContenedor();
    const hoja = document.createElement('div');
    hoja.classList.add('hoja');

    hoja.style.left = Math.random() * 100 + 'vw';
    
    const tamaño = Math.random() * 15 + 10 + 'px';
    hoja.style.width = tamaño;
    hoja.style.height = tamaño;
    
    const duracion = Math.random() * 3 + 4 + 's'; 
    hoja.style.animationDuration = duracion;

    container.appendChild(hoja);

    // Se borra al terminar para no trabar la PC
    setTimeout(() => {
        hoja.remove();
    }, parseFloat(duracion) * 1000);
}

// Iniciar la lluvia
setInterval(crearHoja, 300);