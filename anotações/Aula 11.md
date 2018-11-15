# Aula 11


---
### Laços (Loops)
**do / while:** Executa pelo menos 1 vez e depois verifica se é verdadeiro ou não.
```javascript
var counter = 10;
do {
    console.log(    counter++); //10
} while (coumter < 10);
```

***for in*:** Serve para percorrer propriedades de um objeto. Porém, o for in é mais lento que o for normal, então deve-se tomar cuidado ao usá-lo.
```javascript
var car = {
    brand: 'Fiat',
    model: 'Argo',
    year: 2018
}

for (var prop in car) {
    console.log(prop); //brand //model //year
    console.log(car[prop]); //'Fiat' //'Argo' //2018
}
```

---
### Verificar se a propriedade existe num objeto - in
O **in** também pode ser usado para verificar se uma propriedade existe num determinado objeto:
```javascript
console.log('brand' in car); //true
console.log('combustivel' in car); //false
```

---
### Saltos
**Saltos:** São algumas instruções no JS que usamos para pular algumas partes do código.

**Exemplos:**
- return
```javascript
function myFunc() {
    var num = 10;
    if (num === 10) {
        return true; //Usando return como salto para pular o restante das instruções da função se o if for true
    }
    return false;
}
console.log(myFunc()); //true
```
- break
```javascript
var num = 10;
switch (num) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 10:
        console.log(10);
        break; //Usando break para pular o resto do switch caso seja 10
    default:
        console.log('default');
}
```

```javascript
for (var i = 0; i<=9; i++) {
    if (i === 5) {
        break; //Usa o break para sair da instrução for se i for igual a 5
    }
}
```
- continue
```javascript
for (var i = 0; i<=9; i++) {
    if (i === 5) {
        continue; //Usa o continue para pular o resto da instrução for e continua/volta ao começo do for adicionando mais 1 (i++)
    }
}
```
