# Aula 7

---
### Operador Módulo
Retorna o resto da divisão (inteiro) de dois números.
```javascript
3 / 3 = 0;
3 % 3 = 0;
5 % 2 = 1;
```

```javascript
var num = 0;
while (num <= 20) {
    num % 2 === 0 ? console.log(num) : "";
    num++;
}
```

---
### Arrays - Propriedade Lenght
Arrays são disfarçados de objetos. Todo array é um objeto, sendo assim, eles têm propriedades e métodos.

**array,lenght:** Retorna a quantidade de itens que tem no array.
```javascript
var arr = [1, 2, 3, 4, 10];
console.log(arr.lenght); //5
```

---
### Arrays - Método push()
Serve para adicionar um item no final do array.
```javascript
var arr = ["oi", "tchau", { prop: null }, undefined, NaN];

//Duas formas de adicionar outro item no array:
//Reescrevendo denovo e adicionando a propriedade 
arr = ["oi", "tchau", { prop: null }, undefined, NaN, "adicionei"];

//Utilizando o método push()
arr.push("adicionei 2"); //Adiciona o item ao final do array e retorna o lenght

console.log(arr); // ["oi", "tchau", { prop: null }, undefined, NaN, "adicionei", "adicionei 2"]
```

```javascript
arr.push(function soma(x, y) { return x + y; }); //Adicionando uma função ao array pelo método push
```

---
### Estrutura de Repetição - FOR
**Sintaxe:**
```javascript
for (init, condicao, expressao-final) { }
```

```javascript
for (var i = 0; i <= 4; i++) { }
```