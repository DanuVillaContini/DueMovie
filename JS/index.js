/** CODIGO JS MOVIMIENTO SCROOLL DEL CAROUSEL */

const fila = document.querySelector('.js-conteiner-carousel');
//const movie = document.querySelector('.js-movie');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');


const filaDos = document.querySelector('.js-conteiner-carousel2');
const arrowLeftDos = document.getElementById('arrow-left2');
const arrowRightDos = document.getElementById('arrow-right2');

    /** Event Listener para las flechas carousel 1 */
arrowLeft.addEventListener('click', () =>{
    fila.scrollLeft -= fila.offsetWidth;
})
arrowRight.addEventListener('click', () =>{
    fila.scrollLeft += fila.offsetWidth;
})
    /** Event Listener para las flechas carousel 2 */
    arrowLeftDos.addEventListener('click', () =>{
        filaDos.scrollLeft -= filaDos.offsetWidth;
    })
    arrowRightDos.addEventListener('click', () =>{
        filaDos.scrollLeft += filaDos.offsetWidth;
    })

/**FIN CODIGO JS MOVIMIENTO SCROOLL DEL CAROUSEL */
