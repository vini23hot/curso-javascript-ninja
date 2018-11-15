# Aula 8

---
### Funções - A importância de nomeá-las
**Sempre nomear:** Sempre nomear as funções ao invés de criar uma função anônima. 
```javascript
var func = function() { }; //ERRADO

var func = function myFunc() { }; //CERTO
```

Se a função estiver sempre nomeada, facilitará o debug e é possível obter o nome da função.
```javascript
//ERRADO
var func = function() {
    return 'oi';
};
func(); //"oi"
func.name; //""


//CERTO
var func = function myFunc() {
    return 'oi';
};
func(); //"oi"
//Quando a função não é invocada, ela é um tipo de objeto que possui a propriedade name, que retorna o nome da função.
func.name; //"myFunc"
```

---
### Functional Programming
**Functional Programming:** Forma de programar que o programa se baseia em funções.

Para utilizar programação funcional, a linguagem deve disponibilizar alguns recursos, como o que o Javascript possui:
- **Objetos de primeira classe** - Funções tem o mesmo tratamento que os objetos no JS, ou seja, tudo o que é possível fazer com objetos, também é possível fazer com funções.

**Na prática:**
Como podemos criar objetos literais, também podemos criar funções literais:
```javascript
//Objetos Literais
var car = { marca: "Fiat", modelo: "Argo" };

//Funçòes Literais
function sum(x, y) {
    return x + y;
}
```

Como podemos atribuir objetos a variáveis, também podemos atribuir funções a variáveis:
```javascript
var obj = {};

var func = function func() {};
```

Como podemos retornar objetos em uma função, também podemos retornar funções através de outras funções:
```javascript
//Retorno de objeto
function person() {
    return {
        name: 'Vinicius',
        lastname: 'Meneses'
    };
}
console.log(person()); // { name: 'Vinicius', lastname: 'Meneses' }
console.log(person().name); //'Vinicius'

//Retorno de função
function adder(x) {
    return function(y) {
        return x + y;
    };
}
//Ou
function adder(x) {
    function addOther(y) {
        return x + y;
    }
    return addOther; //Retorna sem executar pra ser executada quando for chamada
}
var add2 = adder(2); //Executa a função adder passando 2 por parametro e retorna uma função.
add2(3); //5 - Executa a função retornada passando 3 por parametro e retorna a soma
adder(2)(3); //5
```

Como podemos passar objetos por parâmetro em uma função, também podemos passar funçõs por parâmetro:
```javascript
//Passando objetos por parâmetro
var car = { color: 'yellow' };
function getCarColor(mycar) {
    return mycar.color;
}
console.log(getCarColor(car)); //'yellow'

//Passando funções por parâmetro
function showOtherFunction(func) {
    return func(); //Executa a função passada
}
console.log(showOtherFunction(function() { return 'Javascript Ninja'; })); //'Javascript Ninja'
```
