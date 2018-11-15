# Aula 21

---
### Sync vs Async
**Sync (Síncrono):** Evento, comando ou algo que está acontecendo um após ao outro. A maior parte dos comandos do JS é sincrono.
```javascript
console.log(1); //Console.log é um comando sincrono
console.log(2);
console.log(3);
```

Como o JS trabalha com somente uma thread, assim quando um comando síncrono bloquear o conteúdo dessa thread, a thread ficará bloqueada.
```javascript
for (var i = 0; i <= 10000; i++) {
    console.log(i); //Irá bloquear a tela até que o  método for seja completado, e como vai até 10 mil, vai ficar bloqueado por um tempo, pois está executando o método de forma síncrona no único thread do JS.
}
```

**Async (assíncrono):** É quando utilizamos eventos, aguardar uma ação do usuário ou criar um temporizador. Para evitar que os métodos e comandos bloqueiem a tela enquanto estiverem executando, utlizamos métodos assíncronos no JS.

**Como trabalhar de forma assíncrona - Event Loop:** 

![Image](https://qph.fs.quoracdn.net/main-qimg-ff39ad46d7fbc5cde9cb412ca6f57bd9)

O Event Loop é um círculo que roda numa thread separada, quando criamos um processo síncrono, ele executa na thread principal (thread pool).

***Exemplo:** Quando criamos um listener, ele coloca o listener numa fila de eventos e fica girando dentro do event loop numa thread separada para não bloquear a thread principal e bloquear a tela. Quando o evento é disparado, ele é colocado na thread principal e executado a função de callback e coloca o listener de volta no event loop*

---
### Criando eventos assíncronos - Temporizador
**setTimeout(function() {}, milissegundos):** É um temporizador assíncrono, que quando o JS fazer a leitura do **setTimeout()**, irá começar a contar os milissegundos passados, quando os milissegundos contados forem iguais ao passado por parâmetro, é executado tudo que estiver dentro da função de callback (primeiro parâmetro) *somente uma vez.*
 
O **setTimeout()** é assíncrono e mesmo quando outro comando síncrono estiver executando na thread principal, ele também será executado no seu tempo determinado.
```javascript
setTimeout(function() {
    console.log('Depois de 1 segundo (1000 milissegundos) executou');
}, 1000);
```

**setInterval(function() {}, milissegundos):** É também um temporizador assíncrono como o setTimeout(), porém ele irá executar a função de callback toda vez a cada X milissegundos passados por parâmetro, ou seja, a função será executada infinitamente a cada X milissegundos.
```javascript
setInterval(function() {
    console.log('Executa a cada 1 segundo!');
}, 1000);
```

*Porém, a cada X milissegundos, a função de callback será colocada na fila dentro do event loop, porém não significa que ela será executada EM EXATOS X SEGUNDOS, pois mais eventos podem estar na fila.*

**Executar mais de uma vez o setTimeout():**
```javascript
var counter = 0;
function timer() { //Função recursiva
    console.log('Depois de 1 segundo (1000 milissegundos)', counter++);
    
    if (counter > 10) {
        return; //Para de executar a função recursiva
    }
    
    setTimeout(timer, 1000);
    //Executa a function timer novamente, assim irá executar o setTimeout infinitamente a cada 1000 milissegundos até que recarregue a tela.
}

timer(); //Executa o timer pela primeira vez
```

**Função Recursiva:** É uma função que possui essas duas premissas: 
- Executar a própria função dentro dela mesma.
- Ter alguma forma de parar a execução infinita dela.

---
## setTimeout() vs setInterval()
```javascript
//setTimeout() - Recursivo
var counter = 0;
function timer() {
    console.log('Timer', counter++);
    if (counter > 10) {
        return;
    }
    setTimeout(timer, 1000);
}
timer(); //Executa o timer pela primeira vez
```

```javascript
//setInterval()
var counter = 0;
function timer() {
    console.log('Timer', counter++);
}
setInterval(timer, 1000);
```

*Devemos sempre utilizar o **setTimeout()** com função recursiva no lugar do **setInterval()**, pois o quando utilizamos o **setTimeout() recursivo**, ele só irá colocar o próximo setTimeout() na fila do event loop após o anterior ter sido completamente executado.*

*Diferente do setInterval() que a cada X milissegundos colocará a função de callback do event loop várias vezes, independentemente se a função de callback tiver sido completamente executada.*

---
### Métodos para parar de executar ou limpar o setTimeout() ou setInterval()
**clearTimeout(id):** 
```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>JS Ninja</title>
        <meta charset="UTF-8"/>
    </head>
    
    <body>
        <button data-js="button">Parar Cronômetro</button>
        
        <script src="js/main.js"></script>
    </body>
</html>
```
```javascript
//main.js
var counter = 0;
var temporizador;
var $button = doc.querySelector('[data-js="button"]');

function timer() {
    console.log('Timer', counter++);
    if (counter > 10) {
        return;
    }
    temporizador = setTimeout(timer, 1000); //Variável temporizador vai receber o id do setTimeout()
}
timer();

$button.addEventListener('click', function() {
    clearTimeout(temporizador); //Para o temporizador - deixa de executar o setTimeout()
}, false)
```

**clearInterval(id):**
```javascript
//main.js
var counter = 0;
var temporizador;
var $button = doc.querySelector('[data-js="button"]');

function timer() {
    console.log('Timer', counter++);
}
temporizador = setInterval(timer, 1000);

$button.addEventListener('click', function() {
    clearInterval(temporizador); //Para o temporizador - deixa de executar o setInterval()
}, false)
```
