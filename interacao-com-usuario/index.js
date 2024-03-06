let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

botao.addEventListener('click', somar);

function somar() {
    let valor1 = parseInt(num1.value);
    let valor2 = parseInt(num2.value);
    let soma = valor1 + valor2;
    resultado.innerHTML = `Resultado da soma de ${valor1} + ${valor2} é ${soma}`;
}


