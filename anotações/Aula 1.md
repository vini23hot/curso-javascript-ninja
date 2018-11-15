# Aula 1

---
### Variáveis
Para declarar uma variável utilizar a palavra **var**:
```javascript
var x = 3;
```

---
### Tipos de dados
- number (1 ou 5.2)
- string (" " ou ' ')
- boolean (true ou false)
- null
- undefined
- object { }
- array [ ]
Exemplos:
```javascript
x = 1.2;
x = "Hello world!";
x = true;
x = false;
x = null; //VALOR NULO
x = undefined; //AUSENCIA DE VALOR


//OBJETO
var pessoa = {};
pessoa = { altura: 1.87, peso: 90 }; //A variável pessoa é um objeto que possui dois atributos/propriedades: altura com valor de 1.87 e peso com valor de 90

console.log(pessoa.altura); //Para acessar os atributos de um objeto, utiliza-se o ponto
console.log(pessoa.peso);

console.log(pessoa["altura"]); //Acessar a propriedade pela notação de ARRAY - Procurar utilizar pela notação de objeto (pessoa.altura)

pessoa.altura = 1.90; //Sobrescrever e atribuir um novo valor a propriedade altura do objeto pessoa


//ARRAY - Lista de valores que possui índices
var numeros = [];
numeros = [1, 2, 3, 4, 5]; //Atribuir valores ao array

console.log(numeros[0]); //Retorna o valor do índice 0
console.log(numeros[3]); //Retorna o valor do índice 3

```

---
### Operadores Aritméticos
- Adição +
- Subtração -
- Multiplicação *
- Divisão /
- Incrementar ++  (+1)
- Decrementar --  (-1)
```javascript
var soma = 20;

// Se incrementar ++ depois do nome da variável, vai mostrar a variável e depois vai incrementar.
console.log(soma++); //Retorna 20
console.log(soma); //Retorna 21

// Se incrementar ++ antes do nome da variável, vai incrementar primeiro e depois mostrar o valor
console.log(++soma); //Retorna 22
```
- Operadores aritméticos abreviados (+=, -+, *=,  /=)
```javascript
soma += 20; //soma = soma + 20;
soma -= 20; //soma = soma - 20;
soma *= 20;
soma /= 20;
```

---
### Operadores de igualdade e relacionais
- Igual a ==
- Diferente de !=
```javascript
var x = 0;
console.log(x == 0); //true
console.log(1 != 2); //true
console.log(x == 5); //false
```
- Igual a, e do mesmo tipo ===
- Diferentes e de tipos diferentes !==
```javascript
console.log('Vincius' == 'Vincius'); //true

var nome1 = 'Nicole';
var nome2 = "Vinicius";

console.log(nome1 == nome2); //false
console.log(nome1 == 'Nicole'); //true


var umString = '1';
var umNum = 1;

console.log(umString == umNum); //true - Javascript possui tipagem fraca e dinâmica. Ele tenta converter o valor e verifica se é igual.
console.log(umString === umNum); //false - Não é do mesmo tipo
console.log(umSring === '1'); //true - Mesmo tipo
console.log(umString === 1); //false - Tipo diferente

console.log(1 !== '1'); //true 
```
- Maior que >
- Menor que <
- Maior ou igual a >=
- Menos ou igual a <=

---
### Funções
Bloco de código nomeado que pode ser executado e chamado com ( ).
Para criar uma função, deve ser utilizado a palavra reservada **function.**
```javascript
function nome() {}
```

Exemplo:
```javascript
var x = 1;
function soma() {
    x = x + 1;
}

console.log(x); //1
soma();
console.log(x); // 2
```

**Funções criam escopo:** Toda variável criada dentro de uma função, só será possível acessá-la dentro da função somente.
```javascript
function qualquer() {
    var nome = "Vincius";
}

console.log(nome); //ERRO - Não existe a variável nome
qualquer();
console.log(nome); //ERRO - Não existe a variável nome
```

**Funções podem retornar valores:** Utilizando a palavra reservada **return** dentro de uma função, é possível retornar um valor para ser acessado fora da function.
```javascript
function qualquer2() {
    var nome = "Vincius";
    return nome;
}

console.log(qualquer2()); //"Vinicius"
```

**Funções podem receber parâmetros ou argumentos:**
```javascript
function soma(x, y) {
    return x + y;
}

console.log(soma(1, 4)); //5
```
