# Aula 27

---
### DOM Fragments
**Document Fragment:** Serve para manipular o DOM com performance.

**document.createDocumentFragment():** Cria um documento em branco para que possamos manipular nós, assim que terminarmos de manipular, incluímos todos os nós juntos de uma vez.
```javascript
document.createDocumentFragment().parentNode; //null - document em branco
```

```javascript
var fragment = document.createDocumentFragment();
var childP = document.createElement('p');
var textChildP = document.createTextNode('Texto');

childP.appendChild(textChildP);
fragment.appendChild(childP);

document.body.appendChild(fragment); //Depois de realizar todas as manipulações, adiciona o conteúdo do document fragment ao body
```

---
### Dicas sobre eventos
- Posição dos SCRIPTS no HTML importa
**Evento no Document -
 DOMContentLoaded:** Evento disparado quando exatamente todo documento (tags) for carregado. 
Utilizado para manipular elementos HTML quando não esperamos que eles estejam prontos para serem manipulados
*Ele nao espera as imagens serem carregadas.*

**Evento no Window - load:** Espera tudo que está dentro do window ser carregado (incluindo imagens) para depois disparar.

---
### Técnicas Ninja
**Copiar arrays:** Utilizando arr.slice()
```javascript
var arr = [ 1, 2, 3, 4, 5 ];
var arr2 = arr.slice(); //Utilizando slice sem parâmetro, retorna todos os índices do array
```

**Copiar arrays-like:** Utilizando Array.prototype.slice.call(arr)
```javascript
var $divs = document.querySelectorAll('div');
var $divsCopy = Array.prototype.slice.call($divs);
```

**Saber o tipo verdadeiro do dado (objeto):** Utilizando Object.prototype.toString.call(obj)
```javascript
var arr = [ 1, 2, 3 ];
console.log(Object.prototype.toString.call(arr)); //[object Array]

console.log(typeof arr); //object

console.log({ a: 1 }.toString()); //[object Object]
```

```javascript
function myFunc() {}
console.log(Object.prototype.toString.call(myFunc)); //[object Function]
```

```javascript
function myFunc() {
    console.log(Object.prototype.toString.call(arguments)); //[object Arguments] (array-like)
}
```


