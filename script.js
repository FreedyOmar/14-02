const carrusel = document.getElementById("carrusel");
const items = document.querySelectorAll(".item");
const tarjetas = document.querySelectorAll(".tarjeta");

const total = items.length;
const angulo = 360 / total;

let radio = window.innerWidth < 600 ? 180 : 280;

/* Posición circular */
function posicionar(){
    items.forEach((item, i) => {
        item.style.transform =
            `rotateY(${angulo*i}deg) translateZ(${radio}px)`;
    });
}

posicionar();

window.addEventListener("resize",()=>{
    radio = window.innerWidth < 600 ? 180 : 280;
    posicionar();
});

/* 🔥 Movimiento suave con inercia */
let rotacion = 0;
let objetivo = 0;

/* Mouse mueve el objetivo, no directo */
document.addEventListener("mousemove", e=>{
    let centro = window.innerWidth / 2;
    let distancia = e.clientX - centro;
    objetivo = distancia * 0.3;
});

/* Animación suave */
function animar(){
    rotacion += (objetivo - rotacion) * 0.08;
    carrusel.style.transform = `rotateY(${rotacion}deg)`;
    requestAnimationFrame(animar);
}

animar();

/* Touch móvil */
let touchX = 0;

document.addEventListener("touchstart", e=>{
    touchX = e.touches[0].clientX;
});

document.addEventListener("touchmove", e=>{
    let mover = e.touches[0].clientX - touchX;
    objetivo += mover * 0.5;
    touchX = e.touches[0].clientX;
});

/* Flip tarjetas */
tarjetas.forEach(t=>{
    t.addEventListener("click", e=>{
        e.stopPropagation();
        t.classList.toggle("voltear");
    });
});
