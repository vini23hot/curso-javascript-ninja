# Aula 15

---
### JS no Browser
**Incluir Javascript no HTML:**
É sempre recomendado criar um arquivo *.js*  e depois incluí-lo no HTML através da tag *<script src="file.js"></script>.*
```html
<script src="file.js"></script>
```
```javascript
<script>
    //CÓDIGO EM JS
</script>
```

**Exemplos:**
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Ninja JS</title>
    </head>
    
    <body>
        <script src="main.js">
        </script>
    </body>
</html>
```
```javascript
//main.js
console.log('JS no Browser');
```

**Escopo no Browser:**
A IIFE faz com que seja criado um escopo local.

**Problema encontrado ao utilizar JS sem IIFE:**
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8"/>
        <title>Ninja JS</title>
    </head>
    
    <body>
        <script src="main.js">
        </script>
                <script src="main2.js">
        </script>
    </body>
</html>
```
```javascript
//main.js
var name = 'Vinicius';

//main2.js
console.log(name); //'Vinicius' - Encontrou porque a variável foi criada no escopo global, assim, as variáveis no escopo global são compartilhadas entre os arquivos JS
```

**Com IIFE:**
```javascript
//main.js
(function() {
    var name = 'Vinicius';
})();

//main2.js
console.log(name); //undefined - Variável name está no escopo local do main.js
```

*Sempre utilizar IIFE em cada arquivo JS!*


---
### Criando Construtores no JS
Um construtor no Javascript, ele é uma function que começa com letra maíuscula e criará um objeto com as características definidas e/ou passadas por parâmero. 
Para funcionar como construtor, a function deve ser usada em conjunto com a palavra-chave *new.*
```javascript
function MyConstructor() {
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
}

console.log(MyConstructor()); //undefined

var myObj = new MyConstructor();
console.log(myObj); //{ prop1: 'prop1', prop2: 'prop2' }
```


---
### Objeto this
**this:** É uma palavra-chave e um objeto no JS. 

**Pode ser encontrado em:**
- **Métodos de objetos:** Faz uma referência ao objeto de onde ele está dentro (objeto principal).
```javascript
(function() {
    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    }
    
    console.log(myObject.init()); //{ myProperty: 1, init: function } - Retorna o próprio objeto
})();
```

- **Funções - Ele pode ter 2 valores:** Referência ao objeto global *(no browser, o objeto global é o window)* e referência ao objeto instanciado a partir de um construtor *(a partir do this no construtor, é possível criar suas propriedades e métodos característicos daquele objeto).*
```javascript
//Referencia ao objeto global
function myFunction() {
    return this;
}
console.log(myFunction()); //Retorna o objeto window


//Referencia ao objeto instanciado
function Carro() {
    this.cor = 'Verde';
    this.ano = 2018;
    this.marca: 'Fiat';
    this.modelo: 'Argo';
}
var objCarro = new Carro();
console.log(objCarro); //{ cor: 'Verde', ano: 2018, marca: 'Fiat', modelo: 'Argo' }
```


---
### Objeto Arguments
**Objeto arguments:** É um objeto parecido com um array e funciona como um array, mas na verdade não é um array e aparece implicitamente dentro de funções.

Dentro de cada função, o objeto arguments representa todos os argumentos passados por parâmetro para a função.
```javascript
function myFunction() {
    return arguments;
}
console.log(myFunction()); //[]
```

```javascript
function myFunction(arg1, arg2) {
    return arguments;
}
console.log(myFunction(1, 2)); //[ 1, 2 ]

function myFunction(arg1, arg2) {
    return arguments[0];
}
console.log(myFunction(1, 2)); //[ 1 ]

function myFunction(arg1, arg2) {
    return arguments[1];
}
console.log(myFunction(1, 2)); //[ 2 ]

function myFunction(arg1, arg2) {
    return arguments[2];
}
console.log(myFunction(1, 2)); //undefined
```

