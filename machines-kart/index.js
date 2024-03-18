var funcionario = document.querySelector('#user');

var material = document.querySelector('#material');

var quantidade = document.querySelector('#qtd');

var botao = document.querySelector('#btn');

var historico = document.querySelector('#historico');


botao.addEventListener('click', click);

function click() {
    let materialCor = material.value;
    let quantidadeMaterial = quantidade.value;
    let usuario = funcionario.value;

    historico.innerHTML = `Colaborador: ${usuario} <br> Material: ${materialCor} <br> Quantidade de Pacotes: ${quantidadeMaterial}`;
}