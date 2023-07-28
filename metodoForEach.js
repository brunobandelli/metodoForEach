/*Para que serve o ForEach?

TRADUÇÃO: PARA CADA

O forEach é uma forma mais concisa de percorrer os elementos de um array
em comparação com um loop for tradicional, porém mais elegante e funcional,
ele serve especififamente para percorrer o array, com uma sintaxe mais legivel.

O forEach é um método de array que permite executar uma função para cada elemento de um array.

Ou seja, para cada item desse array, ele irá executar alguma ação.



A sintaxe do forEach é a seguinte:

O forEach é um metodo que precisa que você passe no máximo 3 parametros (elemento, indice, array),
sendo que o elemento é obrigatório. E o índice e o array são opcionais funcionando de forma respectiva.

array.forEach(function(elemento, indice, array) {
  // Código a ser executado para cada elemento
});

ou com Arrow Function:

array.forEach((elemento, indice, array) => {
  // Código a ser executado para cada elemento
});

Onde:

array: O array que será percorrido.
elemento: O elemento atual sendo processado pelo loop.
indice: (opcional) O índice do elemento atual no array.
array: (opcional) O próprio array sendo percorrido.

A função passada como argumento para o forEach é uma função de retorno de chamada (callback),
No qual será invocada uma vez para cada elemento do array.





Em resumo, o forEach é útil quando você precisa iterar por cada elemento de um array 
e executar alguma operação para cada um deles, sem a necessidade de criar um novo array.



OBS: 
É importante notar que o forEach NÃO CRIA UM NOVO ARRAY como resultado, 
ele apenas percorre os elementos existentes. 

Se você precisar criar um novo array com base nos elementos do array original 
terá que utilizar outros métodos como map, filter, reduce, entre outros.



VEJA OS EXEMPLOS ABAIXO:

*/









// EXEMPLO 01

// const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']


// /*
//  Dentro da invocação do forEach(), nós precisamos inserir uma função de Callback,
//  Então nós podemos inserir uma arrow function como argumento do forEach(()=>{}).
// */

// socialNetworks.forEach((elemento,indice,array)=>{
//     console.log("Rede social: " + elemento + "            " + "Indice: " + indice + "              " + "Array: " + array )
// })


// /*Oque irá acontecer: 
// Para cada elemento desse array, ele vai executar a função de callback que passamos de argumento dele:

// (elemento,indice,array)=>{
//     console.log("Rede social: " + elemento + "            " + "Indice: " + indice + "              " + "Array: " + array )
// }
// */




// /*--------------------------------------------------------------------------------------------------------------------------------*/













// EXEMPLO 02

// /*
// Uma outra vantagem do forEach, em relação ao for,
// é que a declaração dessa função pode ser desacoplada,
// por exemplo acima do forEach, nós podemos declarar uma contante,
// fazer ela receber a arrow function:

//  const nomeDaFuncao = (elemento,indice,array)=>{
//     ...
//  }


// E como argumento do forEach, nós podemos simplemente referenciar a função,
// inserindo só o nome dela:

// array.forEach(nomeDaFuncao)


// Dessa forma, se nos desacoplarmos a função dessa forma, o código ficara mais organizado,
// mais legivel e a função poderá ser reutilizada em algum outro lugar do código se for necessario.

// VEJA O EXEMPLO ABAIXO:
// */

// const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

// const logArrayInfo = (elemento,indice,array)=>{
//     console.log("Rede social: " + elemento + "            " + "Indice: " + indice + "               " + " Array: " + array )
// }

// socialNetworks.forEach(logArrayInfo)



// /*--------------------------------------------------------------------------------------------------------------------------------*/













// EXEMPO 03

// //ESSE EXEMPLO TEM QUE SER EXECUTADO NO BROWSER

// 'use strict' //Aqui ativamos o modo strict, que ajuda a evitar práticas problemáticas no código e melhora a detecção de erros no console do browser, garantindo a integridade do código.

// //Array da lista dos produtos.
// const listaProdutos = [
//     'Leite',
//     'Maçã',
//     'Chocolate',
//     'Café',
//     'Palha de aço'
// ]

// //Acessamos o elemento ul do DOM no HTML.
// let ul = document.getElementById('ulProdutos')  

// // Percorremos todos os itens do array.
// listaProdutos.forEach( item =>{                 

//     // Criamos uma Tag HTML de linha (li) na lista (ul) dentro do DOM para cada elemento do array.
//     let li = document.createElement('li')

//     // Insere o valor de cada elemento do array em cada Tag linha(li) criada anteriormente.
//     li.innerText = item
                      

//     // Incluimos o elemento ao filho da UL
//     ul.appendChild(li)                          
// })