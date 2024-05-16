document.getElementById('botao').addEventListener('click', () =>{tirarUmaCartaAleatoria()} ) // addEventlistener sendo chamado diretamente em cima do document, resumindo linhas de codigo, uma arrow function chamando a api de exibir imagem da carta


async function criarBaralhoEmbaralhado (){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    const resposta = await fetch(url) // fetch busca rescursos dentro de quem for mencionado, e o recurso volta em forma response sendo uma promise
    return  await resposta.json() // json também é um metodo, entao ele pode ser adicionado em uma variavel, o .json tambem retorna uma promise
}

async function tirarUmaCarta(id_deck){
    const url = `https://www.deckofcardsapi.com/api/deck/${id_deck}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoria (){ // functions que esperam receber todo o dado p acontecer "async, await"
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemDaCarta = carta.cards[0].image; // . é sempre usado para "entrar" como se fossem pastas, lembra da aula de linux

    document.getElementById('imagem-carta').src = imagemDaCarta
}



