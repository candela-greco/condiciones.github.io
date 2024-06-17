function verificar() {

    const select1 = document.querySelector('#numero1').value;
    const select2 = document.querySelector('#numero2').value;
    const select3 = document.querySelector('#numero3').value;

const total = select1 + select2 + select3;

if (total === '911' ) {
    document.querySelector('#respuesta').innerHTML = 'Password correcto';
} else if (total === '714') {
    document.querySelector('#respuesta').innerHTML = 'Password correcto';
} else {
    document.querySelector('#respuesta').innerHTML = 'Error, ese no es el Password';

}
}