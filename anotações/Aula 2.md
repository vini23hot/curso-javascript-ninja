# Aula 2

---
### Operadores Lógicos
- AND && *(Retorna true se todos forem true)*
- OR || *(Retorna true se pelo menos um for true)*
- NOT ! *(Inverte o valor)*
```javascript
var x = 3;
console.log(x == 3 && x == 4); //false
console.log(x == 6 || x == 3); //true

var teste = true;
console.log(!teste); // false
```

---
### Operadores Unários
- +
```javascript
3 + 3 //6
+ 3 //3
+ '3' //3 - Converte em número

+ 'Vinicius' //NaN - Not a Number - Não é um número

'Oi ' + 'Vinicius' //"Oi Vinicius"

'3' + 3 //Concatena o número com a string - "33"
3 + '3' //"33"
```
- -
```javascript
var x = 3;

//Converte pra número e inverte o sinal
-x //-3
-'3' //-3
```

*Os operadores unários simplesmente tentam converter o valor e realizar a operação. Porém, se utilizarmos `+ x` ou `- x`  é invertido o sinal, mas o valor invertido não é atribuído à variável.*

---
### Estrutura Léxica
Conjunto de regras que define como é o modo e qual é o modo que deve ser escrito a linguaguagem Javascript.

**Case Sensitive:** A linguagem diferencia letras maiúsculas de minúsculas.

**Comentários:**
- De linha //
- De bloco /* e */

**Literais:** São valores que aparecem diretamente no programa, valores que não mudam e pertecem ao *core* do JS.
- 12
- 1.2
- 'Ninja'
- true
- null
- { a: 1 }
- [1, 2]

**Identificadores:**
- **Podem inicar com:** _ ou $, a - z, A - Z, 0 - 9
- **Pode conter:** qualquer caractere *UNICODE*

**Palavras Reservadas:**
- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- return
- super
- switch
- this
- throw
- try
- typeof
- var
- void
- while
- with
- yield

**Palavras reservadas para uso futuro:**
- enum
- implements
- interface
- let
- package
- private
- protected
- public
- static
- await

---
### Instruções Condicionais - IF
```javascript
var x = 5;
var y = 2;

if (x === 5 && y == 2) {
    x = 1;
    y = 6;
}
```

```javascript
var a = 1;
var b = 2;

if (a == 2) {
    b = 2;
}
else if (b == 1) {
    a = 1
}
else {
    a = 0;
    b = 0;
}
```
