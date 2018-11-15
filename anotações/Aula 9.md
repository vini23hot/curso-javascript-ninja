# Aula 9

---
### Escopo de Funções
**Exemplos:**
```javascript
function myFunc() {
    function sum() {
        return 1 + 2;
    }
    return sum();
}
console.log(myFunc()); //3
console.log(sum()); //ERRO - Ela só é acessível dentro da function myFunc, porque a função cria escopo local.
```

```javascript
function myFunc() {
    function sum() {
        return num1 + num2;
    }
    var num1 = 1;
    var num2 = 2;
    return sum();
}
console.log(myFunc()); //3 - Não acontece erro, pois quando a function sum é criada utilizando retorno da soma de 2 variáveis, ela não é executada. Assim, antes de executá-la, é criada as variáveis para depois ser executada. Se as variáveis não fossem criadas antes da function ser executada, daria erro.
```

```javascript
function myFunc() {
    var num1 = 1;
    var num2 = 2;
    return sum();
    function sum() {
        return num1 + num2;
    }
}
console.log(myFunc()); //3 - Retorna primeiro a execução da função sum e depois é criada a função sum. Funciona normalmente pois acontece o HOISTING 
```

---
### Hoisting
**Hoisting *(Içamento ou elevação):*** Quando criarmos, chamarmos ou executarmos uma função literal, mesmo depois de uma instrução *return,* o Javascript move a função para cima/antes da instrução *return.*

*Sempre que existir uma função literal dentro de uma outra função, ela vai valer para todo escopo da função*
```javascript
function myFunc() {
    var num1 = 1;
    var num2 = 2;
    return sum();
    function sum() { //A função vai valer pra todo escopo da função myFunc. Depois do return, o JS vai movê-la para antes/cima do return (Hoisting).
        return num1 + num2;
    } 
}
```

***Obs:** Quando uma function é atribuída a uma variável, não acontece o hoisting.*
```javascript
function myFunc() {
    var num1 = 1;
    var num2 = 2;
    return sum();
    var sum = function sum() { //Vai dar erro, porque está atribuída a uma variável e não vai acontecer Hoisting
        return num1 + num2;
    } 
}
```

**Hoisting com variáveis:**
```javascript
function myFunc() {
    console.log('Antes de declarar', num1); //undefined - //Porque o JS detecta que ela foi criada no código e vai ser utilizada depois, então cria var num1;
    var num1 = 10;
    console.log(num2); //ERRO - A variável num2 não foi declarada nenhuma vez no código, por isso nem aparece undefined.
    console.log('Depois de declarar', num1); //10
```

***Dica:** Sempre declarar variáveis no início da função!*

---
### IIFE - Immediately-Invoked Function Expression
**IIFE:** **Expressão de função executada automaticamente** ou ***função auto-executável**.*
```javascript
function sum() {
    return 1 + 2;
}
console.log(sum()); //3

var sum2 = function() {
    return 2 + 2;
};
console.log(sum2()); //4

var sum3 = function otherSum() {
    return 3 + 2;
};
console.log(sum()); //5
console.log(otherSum()); //ERRO - Não é possível executá-la porque a function otherSum só está disponível dentro do escopo da variável sum3.

function() { //Não é possível executar uma função anônima sem atribui-la a algum nome/variável.
    return 1 + 2;
}
```

*Funções literais não podem ser auto-executáveis, pois elas precisam ser chamadas a partir de um nome e utilizando ( ) para ser executada.*

**Para uma função ser executada automaticamente (IIFE), ela precisa se tornar uma expressão:**
```javascript
(function() {
    console.log(1 + 2);
})();
//Para se tornar uma expressão, coloque parenteses envolvendo a função literal. Só assim é possível executá-la automaticamente sem um nome utilizando ();

//Ou
(function() {
    console.log(1 + 2);
}());
```

**Vantagem de utilizar IIFE - uma função auto-executável:**
- Força um escopo local. Pois o informações/variáveis no escopo global é compartilhada com todos os outros arquivos JS que ela for chamada e todo o projeto.