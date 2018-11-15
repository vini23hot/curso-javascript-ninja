# Aula 20

---
### IIFE - Passando Parâmetros
```javascript
(function(win) {
    'use strict';
    
    console.log(win, win === window); //Mostra o objeto window e retorna true porque win é igual a window.
})(window);
```

---
### Objeto Window - Métodos
Com o window é o objeto global que representa a janela do browser. Possui propriedades e métodos como qualquer outro objeto.

*Todos os métodos e propriedades que estão dentro do objeto window, podem ser chamados sem utilizar a palavra window.*

**window.alert(string):** Mostra uma mensagem de alerta na tela com a mensagem passada por parâmetro com somente um botão.
```javascript
window.alert('Mensagem');
//Ou
alert('Mensagem');
```

**window.prompt(string):** Cria uma mensagem com a string passada por parâmetro (como o alert) e espera/recebe uma resposta. Retorna a resposta digitada pelo usuário.
```javascript
if (prompt('Pergunta?')) {
    console.log('Respondeu!');
}
else {
    console.log('Não respondeu!');
}
```

**window.confirm():** Cria um alert com uma pergunta e dois botões, porém não recebe uma resposta, somente retorna true ou false com base no botão clicado no alert.
```javascript
if (confirm('Pergunta?')) { //true ou false
    console.log('Confirmou!');
}
else {
    console.log('Não confirmou!');
}
```

**window.document:** Propriedade do objeto global window que é do tipo objeto. Representa todo o documento atual (a página HTML) em formato de objeto (DOM).

---
### DOM - Document Object Model
**DOM (Document Object Model):** Objeto criado quando temos uma estrutura HTML ou XML que possui a estrutura da página HTML e está dentro da propriedade **window.document.** Ou seja, é o documento (página HTML) representado em formato de objeto.

![Image](https://www.w3schools.com/js/pic_htmltree.gif)

*Cada elemento (quadradinho) é um nó que está amarrado à árvore do DOM.*

*A partir do DOM podemos acessar todas as tags e textos do página.*

---
### Selecionar Elementos do Documento
**window.document.getElementById('id'):** Seleciona um elemento a partir do ID no documento e retorna o elemento em forma de objeto.

**window.document.getElementsByClassName('class'):** Seleciona todos  elementos que possui a classe passada por parâmetro do documento e retorna os elementos em forma de objeto dentro de um HTMLCollection (como se fosse um Array).

**window.document.getElementsByTagName('tag'):** Seleciona todos  elementos que possui a tag passada por parâmetro do documento e retorna os elementos em forma de objeto dentro de um HTMLCollection (funciona como um Array).

**window.document.getElementsByName('tag'):** Seleciona todos  elementos que possui a name igual a name passada por parâmetro e retorna os elementos em forma de objeto dentro de um HTMLCollection (funciona como um Array).
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>JS Ninja</title>
        <meta charset="UTF-8"/>
    </head>
    
    <body>
        <a id="my-link">My Text</a>
        
        <a id="my-link2">My Text</a>
        <a id="my-link2">My Text</a>
        <a id="my-link2">My Text</a>
        
        <form action="/" method="get">
            <input type="text" name="username"/>
            <input type="text" name="password"/>
            <button type="submit">Enviar</button>
        </form>
    
        <script src="js/main.js"></script>
    </body>
</html>
```
```javascript
//main.js
(function(win, doc) {
    'use strict';
    
    console.log(doc.getElementById('my-link'));
    console.log(doc.getElementsByClassName('my-link2'));
    console.log(doc.getElementsByTagName('a'));
    
    console.log(doc.getElementsByName('username'));
})(window, doc);
```

***Obs:** Quando usamos os métodos acima para selecionar elementos e atribuímos os elementos selecionados a uma variável, o valor da variável não vai ser estática. Ou seja, se um novo elemento for adicionado durante a execução do código, ele será automaticamente selecionado e inserido dentro da variável.*

***Dica:*** *Quando se referimos a elementos do DOM, criamos a variável iniciando com $.*

---
### querySelector() e querySelectorAll()
Seleciona os elementos a partir de uma estrutura CSS (o parâmetro passado é como iríamos selecionar o elemento se fosse no CSS). Tem a mesma funcionalidade do **getElementBy...()** e retorna do mesmo jeito.

**querySelector() e querySelectorAll():** O querySelector() seleciona somente o primeiro elemento que contrar, já o querySelectorAll() seleciona todos os elementos.
```javascript
var $inputs = document.querySelectorAll('input'); //Seleciona todas as tags input

$inputs = document.querySelectorAll('[type="text"]'); //Seleciona somente os inputs que forem type="text".

$inputs = document.querySelectorAll('.input'); //Seleciona somente os elementos que possui a class input

$inputs = document.querySelector('#input'); //Seleciona somente os elementos que possui o id input
```

***Diferença entre querySelector() e getElementBy....():** Não causa efeito colateral, ou seja, o valor do retornado do querySelector() atribuído a variável $inputs não muda automaticamente, é estático mesmo se adicionar ou remover um elemento do DOM. Somente atualiza se atribuirmos novamente.*

---
### Formulários
**Propriedade .value do elemento:** Pega ou seta o valor do input. (Getter ou Setter).
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>JS Ninja</title>
        <meta charset="UTF-8"/>
    </head>
    
    <body>       
        <form action="#" method="get">
            <input type="text" name="username" id="username"/>
            <input type="text" name="password" id="password"/>
            <button type="submit" id="button">Enviar</button>
        </form>
    
        <script src="js/main.js"></script>
    </body>
</html>
```
```javascript
//main.js
(function(win, doc) {
    'use strict';
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    
    $inputPassword.value = 'usuario'; //Setter
    $inputPassword.value = 'senha'; //Setter
    
    console.log($inputUsername.value, $inputPassword.value); //Getter  
})(window, doc);
```

---
### Eventos
**Introdução à eventos:** A partir de um evento (clique, duplo clique, pressionar tecla...) ocorrido em determinado elemento selecionado, podemos executar uma ação. Para adicionar um evento a um elemento utilizamos: **element.addEventListener(event, function(event) {}, false)**. O método addEventListener() recebe três parâmetros, sendo o primeiro o nome do evento que será escutado, o segundo uma função que será executada quando o evento ocorrer (função de callback) e recebe o objeto event por parâmetro e o terceiro sendo false (veremos mais pra frente).

**element.addEventListener('click',  function(event) {}, false):** Evento de clique.

**element.addEventListener('submit',  function(event) {}, false):** Evento quando o formulário é enviado por um botão submit.
```javascript
//main.js
(function(win, doc) {
    'use strict';
    var $inputUsername = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');
    
    $inputPassword.value = 'usuario';
    $inputPassword.value = 'senha';
    
    $button.addEventListener('click', function(event) {
        event.preventDefault(); //Previne/retira o evento padrão do elemento. Agora o botão não irá mais enviar as informações do input para o form pelo método GET, pois previniu o evento padrão.
        console.log('Click no botão');
    }, false);
    
    $inputUsername.addEventListener('click', function(event) {
        alert('Clicou no input!');
    }, false)
    
})(window, doc);
```


### Utilizar o atributo data-js=" "  nos elementos do HTML para identificar e selecionar um elemento.