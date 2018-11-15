# Aula 14

---

### Arrays - reduce() e reduceRight()
**arr.reduce(function(acumulado, atual, index, array) {}, valorAcumuladoInicial):** Percorre todos os elementos do array e reduz o array em apenas um número e retorna esse número.
A function passada por parâmetro, recebe o valor acumulado atual, o valor atual, o index atual e o próprio array. 
O segundo parâmetro do método reduce, é o valor acumulado inicial que a function vai receber *(se não passar este parâmetro, por padrão o reduce vai utilizar o primeiro item do array como valor acumulado e vai começar a partir do segundo item)*. 
Não modifica o array principal.
```javascript
var arr = [ 1, 2, 3, 4, 5 ];

var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
}, 0);

console.log(reduce); //15

//Explicacao:
/*Repetições:
Primeira: 0 + 1 = 1
Segunda: 1 + 2 = 3
Terceira: 3 + 3 = 6
Quarta: 6 + 4 = 10
Quinta: 10 + 5 = 15
*/
```

```javascript
var arr = [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ];

var reduce = arr.reduce(function(acumulado, atual, index, array) {
    return acumulado + atual;
});

console.log(reduce); //'Vinicius'
```

*every() e some() fazem a mesma coisa que o reduce(), porém eles somente retornam true ou false.*

**arr.reduceRight(function(acumulado, atual, index, array) {}, valorAcumuladoInicial):** Possui a mesma função que o arr.reduce(), porém ele começa pelos itens a partir da direita e vai até a esquerda, ao contrário do reduce().
```javascript
var arr = [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ];

var reduceRight = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
});

console.log(reduceRight); //'suiciniV'
```

---
### Arrays - indexOf(), lastIndexOf() e isArray()
**arr.indexOf(valor, indiceInicial):** Procura se o valor passado por parâmetro existe em algum índice do array a partir do índice inicial passado por parâmetro (opcional) e retorna o índice onde está o valor no array. Caso o valor não exista no array, é retornado **-1**.
```javascript
var arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.indexOf(3)); //2 - O valor 3 está no indice 2
```

```javascript
var arr = [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ];
console.log(arr.indexOf('c')); //4
```

```javascript
var arr = [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ];

console.log(arr.indexOf('c'), 5); //-1

console.log(arr.indexOf('c'), 4); //4
```

**arr.lastIndexOf(**valor, indiceInicial**):** Faz a mesma coisa e possui a mesma função que o indexOf(), porém o lastIndexOf() procura do final do array para o início *(índice retornado não muda)*.
```javascript
var arr = [ 'V', 'i', 'n', 'i', 'c', 'i', 'u', 's' ];
console.log(arr.lastIndexOf('c')); //4

console.log(arr.lastIndexOf('c', 3)); //-1 - Procurou do 'i', passou por 'n', até o 'v' e não achou, pois o 'c' estava depois do 'i'
```

**Array.isArray(arr):** Método que existe no construtor do array que retorna true ou false se o valor passado por parâmetro for um array ou não.
```javascript
console.log(Array.isArray(arr)); //true

console.log(Array.isArray({})); //false
```

Utilidade do Array.isArray(): Pode ser utilizado para descobrir se o valor passado é um array ou não, pois utilizando typeof com um array, retorna 'object'.