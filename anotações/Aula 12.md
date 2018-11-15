# Aula 12

---
### Criação de Objetos
**Objetos são:**
- **Mutáveis** - Eles podem mudar, podemos modificar o seus valores, ao contrário de valores literais.
- **Manipulados por referência** - Cada objeto criado é um objeto diferente
```javascript
var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
};

var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2'
};

//Objetos são mutáveis:
obj.prop1 = 'newProp1';
delete obj.prop1; //Deleta a propriedade do objeto
obj.prop1 = 'prop1'; //Adiciona novamente
```

```javascript
//Objetos são manipulados por referência:
obj === obj2; //false - Porque são dois objetos diferentes criados na memória
var objCopy = obj;
objCopy; //{ prop1: 'prop1', prop2: 'prop2' }
objCopy === obj; //true - Porque ele tem uma referência (se refere) ao objeto obj
objCopy.prop1 = 'teste';
obj; //{ prop1: 'teste', prop2: 'prop2' }
```

**Como criar objetos:** Podemos criar objetos a partir de três formas diferentes:
- Pelo formato literal - `var obj = { prop1: 'teste' };`
- Com construtor *(new)*
```javascript
var constructorObj = new Object(); 
//Mesma coisa que criar pela forma literal. Ou seja, é mais rápido e fácil criar pela forma literal do que utilizar new Object()
```
- Com *Object.create()*
```javascript
var obj = Object.create(); //ERRO - Object prototype may only be an Object or null - Veremos porque está dando erro abaixo
```

**Palavra-chave Object:** É uma função que retorna um objeto vazio e tem propriedades e métodos. Também pode ser usado como construtor.

**Object.prototype:** A propriedade prototype é um protótipo do objeto que está sendo criado. Cada objeto que é criado, ele herda do seu próprio protótipo.
```javascript
console.log(Array); //Construtor Array
console.log(Date); //Construtor Date
console.log(String); //Construtor String

//Todos os construtores/objetos acima herdam do Object.prototype
```

*Cada objeto criado no JS, é herdado de Object.prototype. Ou seja, todos os objetos herdam dele.*

---
### Object.create()
**Object.create()** cria um novo objeto herdando o objeto passado por parâmetro. Então o objeto passado por parâmetro vai ser o pai do objeto criado.
```javascript
var obj = { x: 1, y: 2 };
var obj2 = Object.create(obj); //Ele cria um novo objeto herdando as propriedades do obj

console.log(obj2); //{}
console.log(obj2.prototype); //undefined
console.log(obj2.x); //1
console.log(obj2.y); //2;

obj.x = 2;
console.log(obj.x); //2
console.log(obj2.x); //2

obj2.x = 'teste';
console.log(obj2.x); //'teste'
console.log(obj.x); //2
```

**Criar um objeto vazio utilizando Object.create():**
```javascript
var obj = Object.create({});

console.log(obj); //{}
console.log(Object.prototype); //{}

obj.toString(); //Propriedade herdada do Object.prototype
```

**Utilizando *for in*  em um objeto herdado de outro:**
```javascript
var obj = { x: 1, y: 2 };
var obj2 = Object.create(obj); 

for (var prop in obj) {
    console.log(prop); //x //y
}

//Vai tentar acessar todas as propriedades do objeto, inclusive as herdadadas
for (var prop in obj2) {
    console.log(prop); //x //y
}
console.log(obj2); //{}
```

**Método obj.hasOwnProperty('prop'):** Verifica se a propriedade é específica do determinado objeto retornando true ou false.
```javascript
obj.hasOwnProperty('x'); //true
obj.hasOwnProperty('y'); //true

obj2.hasOwnProperty('x'); //false
obj2.hasOwnProperty('y'); //false
```

---
### Métodos de Objeto (Herdados do Object.prototype)
**Object.keys(obj):** Retorna um Array com o nome das propriedades do objeto.
```javascript
var obj = { x: 1, y: 2 };
console.log(Object.keys(obj)); //[ 'x', 'y' ]
console.log(Object.keys(obj).length); //2 - Como retorna um Array, está disponível a propriedade length do array
```

***obj*.isPrototypeOf(otherObj):** Verifica se o *otherObj* é protótipo do obj (se foi herdado).
```javascript
obj.isPrototypeOf(obj2); //true
obj2.isPrototypeOf(obj); //false - obj não foi criado baseado no obj2
```

**JSON:** *(Javascript Object Notation - Notação de objeto no Javascript)*, é uma string que representa um objeto no Javascript.

**JSON.stringify(obj):** Transforma o objeto passado por parâmetro em uma string no formato JSON.
```javascript
var str = JSON.stringify(obj);
console.log(str); //'{"x":1,"y":2}'
```

**JSON.parse(str):** Transforma/converte a string em formato JSON passada por parâmetro em objeto.
```javascript
var obj = JSON.parse(str);
console.log(str); //{ x: 1, y: 2 }
```

---
### Métodos de Array
Como arrays são objetos, eles possuem propriedades e métodos.

**Adicionar itens:**
```javascript
var arr = [];
arr[0] = 10;
arr[1] = 20;
arr[5] = 60;
console.log(arr); //[ 10, 20, , , , 60 ] 

//OU

arr.push(70); //Adiciona no final do array
console.log(arr); //[ 10, 20, , , , 60, 70 ] 
```

**Remover itens:**
**arr.pop():** Remove do final do array e retorna o item removido.
```javascript
arr.pop();
console.log(arr); //[ 10, 20, , , , 60 ]

arr.pop(); 
console.log(arr); //[ 10, 20, , ,  ]
```

```javascript
var arr2 = [];
arr2.push('V');
arr2.push('I');
arr2.push('N');

console.log(arr2.length); //3

var removido = arr2.pop();

console.log(arr2); //[ 'V', 'I' ]
console.log(removido); //'N'
```

**arr.join():** Junta itens do array em uma string, separando-os por vírgula. 
*O método join aceita um parâmetro, que vai será usado como separador do itens do array na string.*
```javascript
var arr = [ 'batata', 'carne', 'vinagrete' ];
console.log(arr.join()); //'batata,carne,vinagrete'

console.log(arr.join(' ')); //'batata carne vinagrete'
```

**arr.reverse():** Inverte os itens do array. *Ele modifica o array e atribui a modificação ao contrário do join() que só retorna a string e não atribui.*
```javascript
console.log(arr.reverse()); //[ 'vinagrete', 'carne', 'batata' ]

console.log(arr); //[ 'vinagrete', 'carne', 'batata' ]

console.log(arr.reverse()); //[ 'batata', 'carne', 'vinagrete' ]
```

**arr.sort():** Ordena os itens do array por ordem alfabética. *Ele modifica o array e atribui a modificação.*
```javascript
console.log(arr.reverse()); //[ 'vinagrete', 'carne', 'batata' ]

console.log(arr.sort()); //[ 'batata', 'carne', 'vinagrete' ]
```
