// variaveis compostas = array, sao variaveis que armazenam mais de um valor 


// let estacionamento = [
//     {veiculo:'celta', cor:'preto', portas: 4},
//     {veiculo:'fox', cor:'vermelho', portas: 4}
// ]

// console.table(estacionamento)

// let quatroPortas = estacionamento.filter(function(portas){
//     return portas.cor === 'preto' 
// })

// console.log(quatroPortas);


// let numeros = [1,2,3,4]

//  console.log(numeros)

//  numeros[4] = 5 // numero entra [] significa ordem na linha e o depois de = o numero que vai entrar no array

//  console.log(numeros)

//  numeros.push(6)  // push significa adicionar numero por ultimos no array

//  console.log(numeros)

//  console.log('o array tem ' + numeros.length + ' posições')


//  console.log('primeiro valor do array é: ' + numeros[0])

// let numeros2 = [4,1,2,5,3]

// let letras = ['B', 'C', 'A']

// letras.sort() 
// console.log(letras)

//  console.log(numeros2 + ' array bagunçado')

//  numeros2.sort() // organizar o array, coloca ele em ordem

//  console.log(numeros2 + ' array com sort()')

//  for(let pos = 0; pos <= numeros2.length; pos++){
//      console.log(`A posição ${pos} tem o valor de ${numeros2[pos]}`)
//  }

// for(let pos in numeros2){
//     console.log(`A posição ${pos} tem o valor de ${numeros2[pos]}`)
// }  // forma simplificada de fazer laço for, IMPORTANTE


let numeros3 = [0,1,2,3,4,5,6,7,8] 

console.log(numeros3);

let posicao = numeros3.indexOf(7) //array começa em posição 0, quase tudo começa

console.log(`O valor 7 está na posição ${posicao}`)



