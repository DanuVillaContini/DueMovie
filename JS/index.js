/** CODIGO JS MOVIMIENTO SCROOLL DEL CAROUSEL */

const fila = document.querySelector('.js-conteiner-carousel');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

/** Event Listener para las flechas carousel 1 */
arrowLeft.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
})
arrowRight.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
})

// --------------------------------------------------------
const filaDos = document.querySelector('.js-conteiner-carousel2');
const arrowLeftDos = document.getElementById('arrow-left2');
const arrowRightDos = document.getElementById('arrow-right2');

/** Event Listener para las flechas carousel 2 */
arrowLeftDos.addEventListener('click', () =>{
    filaDos.scrollLeft -= filaDos.offsetWidth;
})
arrowRightDos.addEventListener('click', () =>{
    filaDos.scrollLeft += filaDos.offsetWidth;
})

// --------------------------------------------------------
const filaTres = document.querySelector('.js-conteiner-carousel3');
const arrowLeftTres = document.getElementById('arrow-left3');
const arrowRightTres = document.getElementById('arrow-right3');

/** Event Listener para las flechas carousel 3 */
arrowLeftTres.addEventListener('click', () =>{
    filaTres.scrollLeft -= filaTres.offsetWidth;
})
arrowRightTres.addEventListener('click', () =>{
    filaTres.scrollLeft += filaTres.offsetWidth;
})

// --------------------------------------------------------
const filaCuatro = document.querySelector('.js-conteiner-carousel4');
const arrowLeftCuatro = document.getElementById('arrow-left4');
const arrowRightCuatro = document.getElementById('arrow-right4');

/** Event Listener para las flechas carousel 4 */
arrowLeftCuatro.addEventListener('click', () =>{
    filaCuatro.scrollLeft -= filaCuatro.offsetWidth;
})
arrowRightCuatro.addEventListener('click', () =>{
    filaCuatro.scrollLeft += filaCuatro.offsetWidth;
})

// --------------------------------------------------------
/**FIN CODIGO JS MOVIMIENTO SCROOLL DEL CAROUSEL */

// --------------------------------------------------------