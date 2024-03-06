var clicado = document.getElementById('quadrado');

clicado.addEventListener('click', clicar);
function clicar(){ //clicar foi definido no onclick na parte do HTML
   clicado.innerText = 'clicado';
    clicado.style.backgroundColor = 'blue';
    clicado.style.color = 'white';
    console.log('mouse clicou no quadrado');
   
}; // quando a função clicar for chamada ele irá acionar um bloco de comando no DOM

clicado.addEventListener('mouseenter', entrar) ;
function entrar(){
    clicado.style.backgroundColor = 'yellow';
    clicado.innerText = 'dentro';
    clicado.style.color = 'black';
    console.log('mouse entrou no quadrado');
}
            // css faz essas 2 açôes tambem

clicado.addEventListener('mouseout', sair);
function sair(){
    clicado.style.backgroundColor = 'red';
    clicado.innerText = 'fora';
    clicado.style.color = 'white';
    console.log('mouse saiu do quadrado');
}
