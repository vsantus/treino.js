var quadrado = document.getElementById('quadrado');


quadrado.addEventListener('click', click);
quadrado.addEventListener('mouseenter', entrou);
quadrado.addEventListener('mouseout', saiu);

function click() {
    quadrado.style.backgroundColor = 'brown';
    quadrado.style.color = 'yellow';
    quadrado.style.fontSize = '20px';
    quadrado.innerText = 'quadrado está clicado';
}

function entrou() {
    quadrado.style.backgroundColor = 'pink';
    quadrado.style.color = 'blue';
    quadrado.style.fontSize = '20px';
    quadrado.innerText = 'mouse entrou ';
}

function saiu() {
    quadrado.style.backgroundColor = 'purple';
    quadrado.style.color = 'black';
    quadrado.style.fontSize = '20px';
    quadrado.innerText = 'mouse saiu do quadrado';
}

// DOM com usuario interagindo IMPORTANTE

function somar() {
    let input1 = document.getElementById('txtn1');
    let input2 = document.getElementById('txtn2');
    let resultado = document.getElementById('resultado');

    let n1 = Number(input1.value);
    let n2 = Number(input2.value);
    let soma = n1 + n2;

    resultado.innerHTML = `a soma de ${n1} e ${n2} é: ${soma} `
}
