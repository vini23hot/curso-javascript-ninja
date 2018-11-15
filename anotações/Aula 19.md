# Aula 19

---
### Regex - Outros Símbolos
**^** -  Início de string (dentro de uma lista [ ] ele funciona como negação).
```javascript
var regex = /^<p>/; //Verifica se a tag <p> está no começo da string.
```

**$** - Fim de string.
```javascript
regex = /r$/; //Verifica se a string termina com a letra r.
```
 
 **flag /m** - Multiline - Detecta várias linhas. A grande diferença utilizando a flag m, é quando utilizamos o caracter de início de string.
```javascript
regex = /^c/m; //Vai verificar se em cada linha começa com c
```

**?** - Repetição não gulosa (se usado após um repetidor). Captura o mínimo de caracteres necessários para o match.

*Repetição gulosa ele tenta pegar o máximo de caracteres para fazer o match.*

**(?:)** - Somente agrupamento (sem capturar).
```javascript
regex = /jun(?:n|l)ho/g;
//Match em palavras que começam com jun, seguidas por um n ou l e seguidas por ho. ?: faz com que não seja capturado o agrupamento.
```

**\1, \2, \3, \....** - Referência dos grupos de captura dentro de uma Regex.
```javascript
regex = /(\w+)(\1)/g; // \1 vai possuir o valor da primeira captura e assim por diante.
```

---
### Métodos onde é possível utilizar Regex
**str.match(regex):** Retorna um array se algum termo da string der match com a regex.

**str.replace(regex, string)**

**str.split(regex):** 
```javascript
'111.222.333-44'.split(/\d/); //[ '111', '222', '333', '44' ]
```

**str.search(regex):** Faz uma busca na string a partir da regex. É retornado o primeiro índice onde o caracter deu match. Não depende da flag global, pois retorna o primeiro índice somente. 

*str.indexOf() não funciona com regex.*

---
### Construtor RegExp()
Funciona exatamente como os outros construtores. É passado por parâmetro uma string pra ser criada uma Regex. O segundo parâmetro 
```javascript
var regex = new RegExp('nando');
console.log(regex); // /nando/

//Mesma coisa que:
var regex = /nando/;
```

```javascript
var name = 'vini123cius';

var regex = new RegExp('\\d'); // /\d/ - Utiliza 2 vezes a barra invertida na criação do objeto RegExp para fazer uso do símbolo \d que representa dígitos.
```

**Métodos de RegExp:**

**regex.test(string):** Retorna true ou false se conseguir algum match.
```javascript
/\d/.test(name); //true
/zz/.test(name); //false
```

**regex.exec(string):** Ele faz um match por vez a cada execução. Quando for chamado novamente, ele irá retornar o segundo match e assim sucessivamente até não tiver mais matchs.
```javascript
/\d/g.exec(name); //[ '1' ]
/\d/g.exec(name); //[ '2' ]
/\d/g.exec(name); //[ '3' ]

/\d/g.exec(name); //null

/\d/g.exec(name); //[ '1' ] - Começa denovo depois do null
```

```javascript
var regex = /\d/g;
while (result = regex.exec(name) !== null) {
    console.log(result); //true true true
}
```

**Símbolos de Regex direto na string:**
```javascript
console.log('Linha de cima\n', 'Linha de baixo'); //Quebra de linha \n

console.log('Linha de cima\tTabulado'); //Tabulação \t
```

**Escapar aspas na string com \:**
```javascript
console.log('Julio's bar'); //ERRO - Pois fechou a string mesmo sendo um caracter do texto e não está concatenando.

//Solução:
console.log('Julio\'s bar'); //Julio's bar
```
