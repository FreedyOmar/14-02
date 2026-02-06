const carrusel = document.getElementById("carrusel");
const items = document.querySelectorAll(".item");
const tarjetas = document.querySelectorAll(".tarjeta");

const total = items.length;
const angulo = 360 / total;
const radio = 280;

/* Posicionar círculo */
items.forEach((item, i) => {
    item.style.transform =
        `rotateY(${angulo*i}deg) translateZ(${radio}px)`;
});

/* Giro carrusel */
let rotacion = 0;
let arrastrando = false;
let inicioX = 0;

carrusel.addEventListener("mousedown", e=>{
    arrastrando = true;
    inicioX = e.clientX;
});

window.addEventListener("mouseup", ()=>{
    arrastrando = false;
});

window.addEventListener("mousemove", e=>{
    if(!arrastrando) return;

    let mover = e.clientX - inicioX;
    inicioX = e.clientX;

    rotacion += mover * 0.3;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;
});

/* Touch */
carrusel.addEventListener("touchstart", e=>{
    arrastrando = true;
    inicioX = e.touches[0].clientX;
});

window.addEventListener("touchend", ()=>{
    arrastrando = false;
});

window.addEventListener("touchmove", e=>{
    if(!arrastrando) return;

    let mover = e.touches[0].clientX - inicioX;
    inicioX = e.touches[0].clientX;

    rotacion += mover * 0.4;

    carrusel.style.transform =
        `rotateY(${rotacion}deg)`;
});

/* Flip individual */
tarjetas.forEach(t=>{
    t.addEventListener("click", e=>{
        e.stopPropagation();
        t.classList.toggle("voltear");
    });
});

