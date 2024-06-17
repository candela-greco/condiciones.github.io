function verificar() {

    const valor1 = Number(document.querySelector('#sticker1').value);
    const valor2 = Number(document.querySelector('#sticker2').value);
    const valor3 = Number(document.querySelector('#sticker3').value);

const total = valor1 + valor2 + valor3;

if (total <= 10 ) {
    document.querySelector('#respuesta').innerHTML = 'muy bien los podes agregar';
} else {
    document.querySelector('#respuesta').innerHTML = 'error, solo podes escoger 10 o menos';

}
}