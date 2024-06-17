let imagen = document.querySelector('#imagen')

function borde (){
    const imagen = document.querySelector('#imagen');
    if (imagen.style.border === '3px solid yellow') {
        imagen.style.border = '';
        imagen.src = "./assets/imgs/apagado.jpg"
    } else {
        imagen.style.border = '3px solid yellow';
        imagen.src = "./assets/imgs/prendido.jpg"
    }
}