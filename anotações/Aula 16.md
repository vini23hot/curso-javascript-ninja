# Aula 16

---
### 'use strict';
**'use strict':** Diretiva inserida no JS no ES5. Ela é inserida em algum escopo que eu quero que seja um escopo restrito. 
Assim, o browser irá ler a diretiva e irá corrigir os problemas do ES3 dentro daquele escopo como:

- Quando uma **var**iável é criada sem utilizar var, ela é criada em escopo global. Ao utilizar use strict, criar uma variável sem utilizar o var num escopo local, ela vai permanecer no escopo local.
```javascript
(function() {
    'use strict';
    myName = 'Vinicius';
})();

console.log(myName); //ERRO - O use strict não deixa que a variável criada sem var seja global
```

- Não permite o uso do **with (serve para diminuir o tamanho de um objeto)**
```javascript
(function() {
    'use strict';
    
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    };
    
    console.log(obj.prop1.prop2.prop3.prop31);
    
    with (obj.prop1.prop2.prop3) {
        //O ESCOPO DENTRO DO WITH VAI SER O OBJETO PASSADO POR PARÂMETRO
        console.log(prop31, prop32, prop33); //Porém ao utilizar o with, as variáveis que possui os valores das propriedades do objeto podem se confundir com variáveis externas ao with, por isso não é permitido with no modo 'use strict'
    }
})();
```

- No escopo global, dentro de funções, o this é igual a undefined (this === undefined) quando o  use strict é utilizado. Ele não permite que seja atribuído variáveis ao objeto global (window).
```javascript
//SEM USE STRICT
(function() {
    console.log(this); //Retorna o objeto window
    
    function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  
  console.log(Person('teste', 'teste2', 15); //Quando não é utilizado new no construtor, o this dentro da function Person referencia o objeto global, assim, ele criará as propriedades name, lastName e age no objeto window.
})();
```

```javascript
//COM USE STRICT
(function() {
    'use strict';
    console.log(this); //undefined
    
    function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  
  console.log(Person('teste', 'teste2', 15); //Utilizando use strict, acontece um erro, pois this é undefined, então não é possivel criar as propriedades no objeto global pois não estamos utilizando o new
  console.log(this === undefined); //true
})();
```

*Utilizar sempre a IIFE junto com o 'use strict' logo dentro da IIFE.*

---
### Objeto String
**str.length:** Conta a quantidade de caracteres numa string.

**str.charAt(index):** Retorna o caracter que está no índice passado por parâmetro.
```javascript
var nome = 'vinicius';
nome.charAt(1); //'i'

'vinicius'.charAt(30); //''
```

**str.concat(str1, str2, ...., str10):** Concatena as strings passadas por parâmetro na string principal e retorna a concatenação. Não modifica a string principal.
```javascript
nome.concat(' meneses');
console.log(nome.concat(' meneses')); //'vinicius meneses'
```

**str.indexOf(string [, start]):** Retorna o índice onde existe a string passada por parâmetro, se não existir retorna -1. Podemos passar o parâmetro de índice inicial para começar a busca pelo índice.
```javascript
nome.indexOf('n'); //2
nome.indexOf('ci'); //4
nome.indexOf('dddd'); //-1
```

**str.replace(string, newString):** Busca a string passada por parâmetro na string original e substitui pela newString passada por parâmetro. Não modifica a string original, retorna uma nova string.
```javascript
console.log(nome.replace('s', 'z')); //'viniciuz'
```

**str.slice(start [, end]):** Retorna os caracteres a partir do indice start até um índice anterior ao end. Se não colocar o end, retorna até o final. Não modifica a string original.
```javascript
console.log(nome.slice(2)); //'nicius'
```

**str.split([separador] [, limite]):** Quebra a string e transforma a string em um array. Se um separador for passado, ele irá remover todos caracteres que da string que são iguais ao separador e irá colocar a string quebrada em diferentes índices do array.
```javascript
console.log(nome.split()); //[ 'vinicius' ]

console.log(nome.split('i')); //[ 'v', 'n', 'c', 'us' ]
```

**Técnica para substituir vários caracteres de uma string de uma vez:**
```javascript
console.log(nome.split('i').join('y')); //'vynycyus'
```

**str.substring(start [, end]):** Faz basicamente o mesmo que o método slice. Se o número inicial for maior que o final, ele seleciona a partir do start e vai até o end.
```javascript
console.log(nome.substring(2)); //nicius

console.log(nome.substring(3, 7)); //iciu
```

**str.toLowerCase():** Transforma todos os caracteres da string em minúsculos e retorna uma nova string. Não modifica a string principal.

**str.toUpperCase():** Transforma todos os caracteres da string em maiúsculos e retorna uma nova string. Não modifica a string principal.
```javascript
console.log(nome.toUpperCase()); //'VINICIUS'

console.log(nome.toLowerCase()); //'vinicius'
```

```javascript
var newNome = nome.charAt(0).toUpperCase() + nome.slice(1); //'Vinicius'
```