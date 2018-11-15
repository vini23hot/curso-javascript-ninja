# Aula 17

---
### Regex - Expressões Regulares
As expressões regulares servem para manipular strings.
Elas são um tipo primitivo em JS e são utilizadas com **/<expressão-regular>/<flags>**.

**<expressão-regular>:** Caracteres literais alfanuméricos.
**<flags>:**
- **g - Global** - Percorre todo o texto
- **i - Ignore Case** - Retorna as letras maiusculas e minusculas.
```javascript
var regex = /m/;
var regex2 = /m/gi;

var texto = 'A estreia da sinfonia n.° 7 de Shostakovich em Leningrado ocorreu em 9 de agosto de 1942 durante a Segunda Guerra Mundial, enquanto a cidade de Leningrado (atual São Petersburgo) estava sob cerco pelas forças alemãs nazistas.';

texto.match(regex2); //Tenta fazer o match/casamento do texto com uma expressão regular - Retorno: [ 'm', 'm', 'M', 'm' ];
```

**Temos:**
- **\w** - Caracteres alfanuméricos e underline
- **\d** - Números (digits)
```javascript
texto.match(/\w/); //['A'] - Primeira leta do array

texto.match(/\w/g); //[...] //Retorna um array com todas as letras do texto, cada índice recebe uma letra
```

```javascript
texto.match(/Vinicius/); //null - Quando não conseguir fazer um match com nenhum caracter/palavra, retorna null.
```

```javascript
texto.match(/\d/g); //Retorna todos os números encontrados no texto

texto.match(/\d\d/g); //Retorna somente os termos que forem dois números seguidos.

```

```javascript
texto.match(/da|de/g); // | - Ou (or) lógico no Regex. Retorna todos os 'da' ou 'de'
```

**Classes de caracteres (listas):** São representadas por colchetes [ ]. É uma busca de caracteres passados entre os colchetes com o ou (or) lógico incluso automaticamente. Ela representa um único caracter separadamente.
```javascript
texto.match(/[123]/g); 
texto.match(/1|2|3/g); //Mesma coisa que /[123]/g
```

**Agrupamento de caracteres:** Para fazer um agrupamento de caracteres, utiliza-se parênteses ( ).
```javascript
texto.match(/(123)|(456)/g); //Retorna todos os termos que são iguais a (match) 123 ou 456 - pois estão agrupados.
```

**Sequência de Caracteres:**
```javascript
texto.match(/[123456789]/g); //Todos caracteres de 1 a 9
//Ou
texto.match(/[1-9]/g); //Todos caracteres de 1 a 9

// - Indica uma sequência/intervalo de caracteres a partir da tabela UNICODE

texto.match(/[A-Za-z1-9]/g); //Todos caracteres de A a Z, a a z miúsculos e de 1 a 9
```

**Regex com o método str.replace():**
Utilizando o método replace() sem regex, ele substitui somente o primeiro termo encontrado.
```javascript
texto.replace('de', 'DE'); //Substitui somente o primeiro 'de' por 'DE'

texto.replace(/de/g, 'DE'); //Substitui todos os 'de' por 'DE'
```

```javascript
texto.replace(/(de)/g, '--$1--'); //Todos 'de' são alterados para '--de--'

//Quando um item é agrupado utilizando parênteses, ele é chamado GRUPO DE CAPTURA.

//Ele captura o 'de' e entrega a captura por meio do '$1', ou seja, '$1' é a primeira captura e tem valor de 'de'
```

```javascript
texto.replace(/(d)(e)/g, 'DE'); //Altera todos 'de' por 'DE', parênteses não altera em nada, somente agrupa os caracteres em um grupo de captura.
```

```javascript
texto.replace(/(d)(e)/g, '$2-$1'); //Substitui 'de' por 'e-d'

//$2 - Segundo grupo de captura
```

```javascript
texto.replace(/(d)(e)/g, '--$&'); //Substitui 'de' por '--de'

//$& - O e comercial & é o valor de todos grupos de capturas juntos.
```

**Utilizando o replace() com Regex e função para substituir:**
```javascript
texto.replace(/(d)(e)/g, function(capturaTotal, captura1, captura2) {
    return (captura1 + captura2).toUpperCase();
});

//Substitui todos os 'de' por 'DE', pois a função retorna 'DE' em maiúsculo
```

```javascript
//Tudo maiúsculo
'Vinicius'.replace(/(\w)/g, function(capturaTotal, letra) {
    return letra.toUpperCase();
});
//'VINICIUS'
```

```javascript
//Letras maiúsculas e minúsculas revezando
'Vinicius'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2) {
    return letra1.toUpperCase() + letra2.toLowerCase();
});

//'ViNiCiUs'
```

**Objeto RegExp():** 