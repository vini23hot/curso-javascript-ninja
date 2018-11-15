# Aula 25

---
### Scripts Inline
Quando clicar no link, vai executar tudo que estiver após javascript:, no caso vai executar a função boom().
```javascript
<a href="javascript:boom()">Boom!</a>
```
***Não devemos utilizar scripts inline!***

---
### Eventos Inline
```javascript
<a href="javascript:" onclick="boom()">Boom!</a> //Evento de click diretamente no HTML. Vai executar a function boom()
```
***Não devemos utilizar eventos inline!***

---
### Eventos - Continuação
Todos os eventos estão disponíveis em uma lista no site do [Mozilla Developer Network (MDN).](https://developer.mozilla.org/pt-BR/docs/Web/Events)

```html
<div data-js="div">
    <a data-js="link">Link
        <span data-js="span">Span</span>
    </a>
</div>
<script src="main.js"></script>
```
```javascript
//main.js
(function() {
    'use strict';
    
    var $a = document.querySelector('[data-js="link"]');
    var $div = document.querySelector('[data-js="div"]');
    
    $a.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicou no <a>');
    }, false);
    
    $div.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicou no <div>');
    }, false);
})();
```
*Como o **<a>** está dentro da **<div>**, quando clicarmos no <a> ele irá executar o evento de click do elemento **<a>** (mostrando o alert('Clicou no <a>')) e também irá executar o evento de click do elemento **<div>** (mostrando o alert('Clicou no **<div>**')), pois o evento propagou.*

**Entendendo o terceiro parâmetro do método element.addEventListener():** O terceiro parâmetro recebido por este método vai dizer como vai ser a captura do evento (por padrão é false).
*Quando passamos **false**, o evento é aplicado primeiro no elemento clicado (que recebeu o primeiro evento) e vai propagando até o elemento pai, como foi o caso que aconteceu no exemplo acima. Se passarmos **true** o caminho é o contrário, o evento começa a ser aplicado no elemento pai e vai até o elemento filho que foi clicado.*


**Mais de um evento por elemento:** Como o **.addEventListener** é um método, podemos atribuir vários eventos diferentes a um mesmo elemento.

*Se atribuirmos um mesmo evento duas ou mais vezes para o mesmo elemento, o evento vai ser cumulativo, ou seja, irá executar a primeira function e a segunda function passada por parâmetro no .addEventListener.*
```javascript
//main.js
(function() {
    'use strict';
    
    var $a = document.querySelector('[data-js="link"]');    
   
    $a.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicou no <a>');
    }, false);

    $a.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Clicou no <a> denovo!');
    }, false);
})();
//Ao clicar no elemento <a>, irá mostrar primeiro um alert('Clicou no <a>') e depois o segundo alert('Clicou no <a> denovo!')
```

**Remover um evento - element.removeEventListener(event, callback, false):** Através do método removeEventListener, podemos remover um evento anteriormente adicionado ao elemento.

Para isso, devemos passar por parâmetro o nome do evento que queremos remover e a mesma função de callback passada quando adicionamos o evento *(como uma função é um tipo de objeto, se passarmos function () { ... } por parâmetro para o removeEventListener, não irá funcionar, pois estaremos criando uma outra função, e cada tipo de objeto criado nunca é identico ao outro, então devemos criar uma função literal e utilizá-la tanto para adicionar ou remover).*
```javascript
//main.js
(function() {
    'use strict';
    var $a = document.querySelector('[data-js="link"]');    
   
   function handleClick(event) {
        event.preventDefault();
        alert('Clicou no <a>');
    }
    function handleClick2(event) {
        event.preventDefault();
        alert('Clicou no <a> denovo!');
    }
    
    $a.addEventListener('click', handleClick, false); //Adicionando o evento click
    $a.addEventListener('click', handleClick2, false); //Adicionando o evento click
    
    $a.removeEventListener('click', handleClick, false); //Removendo o evento click
    $a.removeEventListener('click', handleClick2, false); //Removendo o evento click
    //Só irá funcionar o removeEventListener, porque criamos uma função literal e usamos ela tanto para adicionar quanto para remover.
})();
```

**Evento input:** Sempre que alteramos o conteúdo de um input, ele é executado.

**Evento keydown:** Sempre que apertamos uma tecla, ele é executado.

**Evento change:** Sempre que mudamos o valor de um select (selecionamos uma opção), ele é executado.
```javascript
var $input = document.querySelector('[data-js="input"]');
var $select = document.querySelector('[data-js="select"]');

$input.addEventListener('input', function() {
    console.log(this.value); //Sempre que alterarmos (digitar ou apagar) o valor do input, será executado o evento que mostrará no console o valor atual do input.
    //Aqui o this está referenciando o próprio elemento input.
}, false);


$select.addEventListener('change', function() {
    $input.value = this.value; //Sempre que selecionarmos uma opção do select, o $input irá receber o valor atual do select.
    //Aqui o this está referenciando o próprio elemento select.
}, false);
```
