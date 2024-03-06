let botao = document.getElementById('botao');
let label = document.getElementById('label');
let corpo = document.body // interessante para fazer botao de modo escuro na pagina

botao.addEventListener('click', alterar);
corpo.style.background = 'lightblue';

function alterar(){
    corpo.style.background = '#1b1b1b';
    corpo.style.color = 'white';
    label.innerHTML = 'Alterei o body para modo noturno';
};


let btn = document.getElementById('btn');
let paragrafo = document.getElementById('paragraph');

btn.addEventListener('click', change);

function change(){
    paragrafo.style.color = 'purple';
    paragrafo.innerHTML = 'Alterei o color para purple';
};


let p = document.getElementsByTagName('p')[1] // pegando o item do segundo paragrafo

document.write('Atualmente estou me aprimorando no ' + p.innerText)
// document.write('<h1> teste </h1>');


document.querySelector('p#treinando').innerText = 'Marcha i boa'