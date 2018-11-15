# Aula 13

---
### Arrays - toString(), concat(), shift() e unshift()
**arr.toString():** Pega todos os itens do array e junta em uma string, separando-os por virgula. Não modifica o array principal.
```javascript
var arr = [1, 2, 3];
arr.toString(); //'1,2,3'

arr.join(); //'1,2,3' - Porém no join podemos passar o separador por parâmetro no join
```

**arr.contat():** Gera um novo array adicionando os valores passados por parâmetro. Não modifica o array principal, ao contrário do método push().
```javascript
console.log(arr.concat(4)); //[1, 2, 3, 4]
console.log(arr); //[1, 2, 3]

console.log(arr.concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6]

console.log(arr.concat([4, 5, 6], [7, 8]); //[1, 2, 3, 4, 5, 6, 7, 8]
```

*Concat não quebra arrays multidimensionais.*

**arr.unshift():** Adiciona um item no início do array e retorna o arr.length. Modifica o array principal.
```javascript
var arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); //[0, 1, 2, 3]
```

**arr.shift():** Remove o primeiro item do array e retorna o item removido. Modifica o array principal.
```javascript
arr.shift();
console.log(arr); //[1, 2, 3]
```

---
### Arrays - slice() e splice()
**arr.slice(indice-inicial, indice-final):** Retorna um pedaço do array a partir do índice inicial até um indice anterior ao final passado por parâmetro. Se o índice final não for passado, então vai retornar do índice inicial até o fim do array. Não modifica o array principal.
```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1)); //[2, 3, 4]
console.log(arr.slice(0, 2)); //[1, 2]
console.log(arr.slice(1, 4)); //[2, 3, 4]

//DICAS:
console.log(arr.slice(-2)); //[4, 5] - Retorna os 2 ultimos itens do array
```

**arr.splice(indice, qtdElementosRemover, elementosAdicionar):** Modifica o array principal. Pode tanto adicionar como remover itens do array e retorna a parte do array removida.
O primeiro parâmetro especifica onde irá começar a remoção ou inclusão do item e o segundo a quantidade de itens que serão removidos.
Para adicionar novos itens, deve ser utilizado os 2 primeiros parâmetros, mais os parâmetros seguintes que serão adicionados no array.
```javascript
//REMOVENDO
arr.splice(3); //[4, 5]
arr; //[1, 2, 3]

arr = [1, 2, 3, 4, 5];

arr.splice(1, 3); //[2, 3, 4]
arr; //[1, 5]

//ADICIONAR
arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a'); //[] - Não removeu nada
arr; //[1, 'a', 2, 3, 4, 5]

arr.splice(2, 0, 'b', 'c', 'd'); //[]
arr; //[1, 'a', 'b', 'c', 'd', 2, 3, 4, 5]

//Exemplo adicionar e remover ao mesmo tempo:
arr.splice(1, 4, 'Tinha Letras Aqui'); //['a', 'b', 'c', 'd']
arr; //[1, 'Tinha Letras Aqui', 2, 3, 4, 5]
```

---
### Arrays - foreach, every e some
**arr.foreach(function (item, index, array) {}):** Laço de repetição que executará a função recebida por parâmetro a cada item do array. A função recebe três parâmetros opcionais: o item atual, o índice e o próprio array.
Foreach é mais rápido que o for, e é mais prático na utilização do array.
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
var sum = 0;
arr.forEach(function(item, index, array) {
    console.log(item, index, array);
    sum += item;
});
/*Retorno:
1 0 [1, 2, 3, 4, 5, 6, 7]
2 1 [1, 2, 3, 4, 5, 6, 7]
3 2 [1, 2, 3, 4, 5, 6, 7]
4 3 [1, 2, 3, 4, 5, 6, 7]
5 4 [1, 2, 3, 4, 5, 6, 7]
6 5 [1, 2, 3, 4, 5, 6, 7]
7 6 [1, 2, 3, 4, 5, 6, 7]

console.log(sum); //Retorna a soma de todos os itens
```

**arr.every(function (item) {}):** O método every aplica uma função ,que recebe por parâmetro o item atual, a todos itens array retornando true ou false baseado na função.
O método é usado para testar e verificar todos os itens do array baseado em uma verificação passada na função.
Se todos os itens for true baseado na função, every retorna true.
```javascript
var every = arr.every(function (item) {
    return item < 5;
});
console.log(every); //Retorna false, porque nem todos os itens do array são menores que 5.
//Se todos fosse menores, o retorno seria true.

every = arr.every(function(item) {
    return item < 8;
});
console.log(every); //true
```

**some():** Faz basicamente a mesma coisa que o método every faz, mas se apenas um item for true baseado na função, então o some retorna true. Se nenhum item for true, retorna false.
```javascript
var some = arr.some(function (item) {
    return item < 5;
});
console.log(some); //true 
```

---
### Arrays - map e filter
**arr.map(function (item, index, array) {}):** Percorre todos os itens do array, como o método foreach, porém retorna um novo array criado com os itens baseados no que a função passada por parâmetro retorna. Não modifica o array original.
```javascript
var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (item, index, array) {
    return item + 1;
});

console.log(arr, map); //[1, 2, 3, 4, 5] [2, 3, 4, 5, 6]
```

```javascript
var arr = [1, 2, 3, 4, 5];
var map = arr.map(function (item, index, array) {
    return { index: index, item: item };
});

console.log(arr, map); //[1, 2, 3, 4, 5] 
//[ { index: 0, item: 1 }, { index: 1, item: 2 }, { index: 2, item: 3 }, { index: 3, item: 4 }, { index: 4, item: 5 } ]
```

*Utilizamos foreach para quando quisermos percorrer o array e realizar qualquer operação e o map para quando quisermos percorrer o array e realizar qualquer operação diretamente nos itens do array gerando um novo array.*

**arr.filter(function (item, index, array) {}):** Gera um novo array filtrando os itens do array e só vai gerar um novo array com os elementos que são true com base na function.
```javascript
var arr = [1, 2, 3, 4, 5];
var filter = arr.filter(function(item, index, array) {
    return item > 2;
});

console.log(filter); //[ 3, 4, 5]
```

**Exemplos map e filter juntos:**
```javascript
var arr = [1, 2, 3, 4, 5];

var map = arr.map(function (item, index, array) {
    return item + 10;
});

var filter = arr.filter(function(item, index, array) {
    return item > 12;
});

console.log(arr, map, filter); // [1, 2, 3, 4, 5] [11, 12, 13, 14, 15] [13, 14, 15]
```

```javascript
//Com o retorno do map, já executa o método filter e atribui à variável filter
var arr = [1, 2, 3, 4, 5];

var filter = arr.map(function (item, index, array) {
    return item + 10;
}).filter(function(item, index, array) {
    return item > 12;
})

console.log(filter); // [13, 14, 15]
```
