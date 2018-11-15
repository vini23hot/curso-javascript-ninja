# Aula 10

---
### Wrapper Objects
**Valores não primitivos - possui propriedades e métodos:**
- Array
- Function
- Object

**Wrapper Objects:**
```javascript
var name = "Vinicius"; //Tipo primitivo string
name.lenght; //8 - Propriedade lenght
```

*Mas se é um tipo primitivo e não um tipo de objeto, então por que eles tem propriedades?*

**Construtores:** Criam novos objetos. 

O JS possui alguns construtores padrão para alguns dos seus tipos primitivos:
```javascript
var name = new String('Vinicius');
var age = new Number(17);
var ninja = new Boolean(false);
```

*O construtor é um objeto, que é criado e possui propriedades e métodos. No caso, o construtor String cria um objeto String que possui a propriedade lenght.*

**Quando uma string é criada a partir do construtor String, essa string sempre vai ser um objeto e não uma string literal:**
```javascript
console.log(name); //[String: 'Vinicius']
console.log(name.lenght); //8
console.log(name.valueOf()); //'Vinicius' - Método valueOf() retorna a string literal do objeto String
```

**Wrapper Object:** Quando um tipo primitivo literal é criado (`var name = "Vinicius";`), o Javascript *envolve* o tipo primitivo literal em um objeto do tipo correspondente para que possa ser usado a propriedade *lenght.* **Porém, não deve-se criar string, number ou boolean através do objeto, mas sim pelo modo literal.**

**Exemplo:**
```javascript
var name = "Vinicius"; //O JS converte o valor de name em um objeto String para ser utilizado a propriedade lenght - Wrapper Object
```

---
### Converter Valor Utilizando Wrapper Objects
Quando não utilizamos o **new** com o construtor do tipo primitivo, o construtor vai servir como conversor de tipo, pois ele não irá criar um novo objeto porque não foi colocada a palavra-chave **new**:
```javascript
var convertToString = String(30);
var convertToNum = Number('5.2');
var convertToBoolean = Boolean(0); //0 - Valor falsy
var convertToBoolean2 = Boolean({}); //{} - Valor truthy

console.log(convertToString); //'30'
console.log(convertToNum); //5.2
console.log(convertToBoolean); //false
console.log(convertToBoolean2); //true
```

---
### Testar Tipos de Valores
Para testar/saber qual é o tipo de uma variável, parâmetro, propriedade, etc... Utilizamos o operador unário: 
```javascript
typeof <operando>
```

**typeof <operando>:** passamos o operando e ele vai retornar o tipo do operando.
```javascript
typeof undefined; //'undefined'
typeof function() {}; //'function'
typeof true; //'boolean'
typeof 10; //'number'
typeof 'teste'; //'string'
typeof NaN; //'number'
```

```javascript
typeof {}; //'object'
typeof []; //'object'
typeof null; //'object' - ERRO NA IMPLEMENTAÇÃO DO JAVASCRIPT
```

***Obs:** Somente utilizar o typeof para testar valores primitivos!*

**Exemplos de uso do typeof:**
```javascript
function subtract(n1, n2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
    return n1 - n2;
    }
    return "Digite dois números!";
}
```
