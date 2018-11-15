# Aula 5

---
### Retorno de Funções (Objects e Arrays)
**Retorno de funções além do tipos primitivos:** É possível retornar tipos de objetos (object, array...)

**Exemplos:**
```javascript
//Retorno de array
function myFunc() {
    return [5, 10, 15];
}

console.log(myFunc()); //[5, 10, 15]
console.log(myFunc()[1]); //10
```

```javascript
//Retorno de objeto
function myFunc2() {
    return {
        nome: 'Vinicius',
        idade: 17,
        altura: 1.75,
        andar: function() {
            return "Estou andando!";
        }
    }
}

console.log(myFunc2().nome); //"Vinicius"
console.log(myFunc2().altura); //1.75
console.log(myFunc2().andar()); //"Estou andando!"

var pessoa = myFunc2();
console.log(pessoa.andar()); //"Estou andando!"
console.log(pessoa.nome); //"Vinicius"
```

---
### Parâmetros de Funções (Arrays e Objects)
**Exemplos:**
```javascript
var array = ["Errado", "Certo", "Errado"];

function achaCerto(pArray) {
    return pArray[1];
}

console.log(achaCerto(array)); //"Certo"
console.log(achaCerto(["Errado", "Certo", "Errado"])); //"Certo"
```

```javascript
var objeto = {
    cor: "Vermelha",
    tamanho: 0.1,
    nome: "Tesoura"
}

function getObjeto(obj) {
    return obj;
}
function getNome(obj) {
    return obj.nome;
}
function addUtilidade(obj, util) {
    obj.utilidade = util;
    return obj.utilidade;
}

console.log(getObjeto(objeto)); //{ cor: "Vermelha", tamanho: 0.1, nome: "Tesoura" }
console.log(getObjeto(objeto).cor); //"Vermelha"
console.log(getNome(objeto)); //"Tesoura"
console.log(addUtilidade(objeto, "Cortar")); //"Cortar"
console.log(objeto.utilidade); //"Cortar"
```
