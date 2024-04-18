let numero = document.getElementById('numero');
let btn1 = document.getElementById('btn1');

// segunda div
let historico = document.getElementById('historico');

btn1.addEventListener ('click', adicionar);

function adicionar () {
    let valor = numero.value ;
    historico.innerHTML += `teste ${valor} <br> `;

}