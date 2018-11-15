# Aula 4

---
### Valores Truthy e Falsy
**Truthy:** é todo valor que quando convertido para boolean que é representado por *true.*

**Falsy:** é todo valor que quando convertido para boolean é representado por *false.*

```javascript
var teste;

if (1) {
    teste = true;
}
else {
    teste = false;
}
console.log(teste); //true

if (0) {
    teste = true;
}
else {
    teste = false;
}
console.log(teste); //false

//Quando 1 é convertido pra boolean, ele é representado por true, assim a variavel teste recebe true
//Quando 0 é convertido pra boolean, ele é representado por false, assim a variavel teste recebe false
```

**Valores Falsy:**
- undefined
- null
- NaN *(Not-A-Number)*
- 0
- -0
- "" ou '' *(Uma string vazia é falsy)*
- *false*
```javascript
if ('') {
    teste = true;
}
else {
    teste = false;
}
//teste = false


if('0') {
    teste = true;
}
else {
    teste = false;
}
//teste = true


if (null) {
    teste = true;
}
else {
    teste = false;
}
//teste = false
//...
```

**Valores Truthy:**
- Todos os outros
```javascript
//Objeto preenchido ou vaizo é truthy
if ({}) {
    teste = true;
}
else {
    teste = false;
}

//Array preenchido ou vazio é truthy
if ([]) {
    teste = true;
}
else {
    teste = false;
}

//Todos os outros números são truthy
if (2) {
    teste = true;
}
else {
    teste = false;
}

//...
```


**Como descobrir a representação booleana sem utilizar o IF:** Utilizar duas vezes o sinal de exclamação ( !! ).

*Apenas 1 sinal de exclamação inverte o valor, 2 sinais de exclamação inverte o valor duas vezes retornando o valor  booleano padrão.*

```javascript
!!true // true
!!2 //true
!!0 //false
!!null //false
!!"" //false
!!"teste" //true
!!false //false
!!undefined //false
!!NaN //false
```

---
### Condicional Ternário *(IF de Linha)*
**Sintaxe:**
```javascript
condicao ? true : false;
```

**Exemplos:**
```javascript
1 == 2 ? true : false; //Retorna false

//Mesma coisa que:
if (1 == 2) {
    true;
}
else {
    false;
}
```

```javascript
var pessoa = { nome: 'Vinicius', sexo: 'M' };

var sexo = pessoa.sexo == "M" ? 'o' : 'a';
//If de linha direto na variável. Se o atributo sexo do objeto pessoa for igual a "M", a variável sexo vai receber 'o', caso contrário vai receber 'a'.
```

```javascript
1 ? true : false; //true

var carro = 'string' ? 'porta' : 'janela'; //Uma string preenchida é truthy
```

---
### Escopo de Variáveis e Funções
**Escopo:** Local onde é declarada a variável.

**Tipos de Escopo de Variáveis:**
- Local
- Global

**Global:** Quando uma variável é declarada no topo do código ou fora de uma função.

**Local:** Variável declarada dentro de uma função. Function cria um escopo local.

**Exemplos:**
```javascript
//Variável de Escopo Global
var myvar = 1;

fuction myFunction() {
    return myvar;
}
```

```javascript
function otherFunction() {
    //Variável de Escopo Local - Disponível somente dentro da função.
    var otherVar = true;
    return otherVar;
}
```

***Importante:** Sempre criar variável utilizando a palavra **var.** Se não for criada utilizando var, o Javascript vai criá-la como variável global e não local.*


**Garbage Collector no JS:** Limpa  automaticamente da memória o espaço ocupado por uma variável local que não será utilizada novamente no código.