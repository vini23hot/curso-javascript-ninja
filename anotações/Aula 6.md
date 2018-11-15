# Aula 6

---
### Operador Vírgula
A vírgula separa algumas instruções e junta em uma só expressão.

**Exemplos:**
```javascript
//Declarando 3 variáveis utilizando virgula e somente uma vez a palavra var
var a, b = 2, c;
/*var a;
var b = 2;
var c;*/
```

```javascript
function myFunc() {
    var x = 0;
    return (x += 1, x);
    //Mesma coisa que: return ++x;
}
//Como o JS retorna somente um valor, ele avalia da esquerda pra direita e retorna o último valor que no caso é x. Mas antes de retornar, ele vai resolver a instrução anterior que é o x += 1, ou seja, vai adicionar 1 ao valor de x e vai retornar após ter adicionado.
```

---
### Estrutura Condicional - Switch Case
```javascript
function myFunc(x) {
    //O switch vai avaliar o valor de x
    switch(x) {
        //Caso x seja igual a 1 (x === 1)
        case 1:
            console.log("x é 1");
            break;
        //Caso x seja igual a 2 (x === 2)
        case 2:
            console.log("x é 2");
            break;
        //Caso não seja nenhuma das opções
        default:
            console.log("x não é nenhum dos dois");
    }
}
```

---
### Estrutura de Repetição - While
**While:** Repete o que está dentro da instrução enquanto a expressão dada for true.
```javascript
var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}
```

**Exemplos:**
```javascript
while (0) {
    console.log(0);
}
//Não vai executar nenhuma vez, porque 0 é um valor falsy
```

```javascript
var counter = 10;
while (counter > 0) {
    console.log(counter);
}
```

```javascript
var counter = 10;
while(counter--) {
    console.log(counter);
}
//O while vai ser executado até o counter chegar a 0, pois quando chegar a 0, 0 vai ser valor falsy e vai sair do while.
```
