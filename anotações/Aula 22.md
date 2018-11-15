# Aula 22

---
### Propriedades e métodos de funções
**function.name:** Retorna o nome da função.

**function.length:** Retorna a quantidade de parâmetros que a função pode receber.

**function.toString():** Converte e retorna toda a função e seu conteúdo em string.

**function.call(this, arg1, arg2, ...):** Invoca a função.
```javascript
function myFunc() {
    return 'abc';
}
console.log(myFunc.call()); //Executa a função

console.log(myFunc()); //Executa a função
```

*Através do método **call(this)**, podemos passar por parâmetro o **this** que vai ser utilizado pela função.*
```javascript
function myFunc() {
    console.log(this.lastName); //this dentro da função sem utilizar como construtor, referencia o objeto global.
}

console.log(myFunc.call()); //Vai dar erro porque no objeto global não existe a propriedade lastName

var obj = {
    lastName: 'Meneses'
}
console.log(myFunc.call(obj)); //Quando passamos o this que vai ser utilizado pela função, que no caso é o objeto obj, a função vai ser executada e o this dentro dela vai referenciar o objeto passado por parâmetro pelo método call e não o objeto global, assim irá retornar no console 'Meneses' sem erro

var obj2 = {
    lastName: 'Danieli'
}
console.log(myFunc.call(obj2)); //'Danieli'
```

*Também através do método **call(this, arg1, arg2, ...)** podemos passar por parâmetro os demais parâmetros que a função pede/recebe. O primeiro parâmetro do método call vai ser o **this** que vai ser utilizado e os demais são os parâmetros que a própria função pede.*
```javascript
function myFunc(a, b, c, d) {
    console.log(this.lastName, a, b, c, d);
}

var obj = {
    lastName: 'Meneses'
};
var obj2 = {
    lastName: 'Danieli'
};

console.log(myFunc.call(obj2, 'a', 'b', 'c', 'd'));

//Quando utilizarmos o call e não quisermos passar o this, passamos no lugar dele {}, null ou a própria função.
console.log(myFunc.call({}, 'a', 'b', 'c', 'd'));
console.log(myFunc.call(null, 'a', 'b', 'c', 'd'));
console.log(myFunc.call(myFunc, 'a', 'b', 'c', 'd'));
```

**function.apply() ou function.apply(**this**, [arg1, arg2, ...]):** Invoca a função. Podemos passar por parâmetro pelo método apply o this (primeiro parâmetro) que vai ser usado e um array (segundo parâmetro) que cada item dele será quebrado e passado como argumento da função.
```javascript
function myFunc(a, b, c, d) {
    console.log(this.lastName, a, b, c, d);
}

var obj = {
    lastName: 'Meneses'
};
var obj2 = {
    lastName: 'Danieli'
};
var arr = [ 1, 2, 3, 4 ];

console.log(myFunc.call(obj2, 1, 2, 3, 4));
console.log(myFunc.apply(obj2, arr)); //Passando um array em que cada item será um parâmetro, retornando o mesmo resultado que a expressão acima
```

**function.prototype:** É o protótipo onde temos todas as propriedades e métodos de função que é herdado automaticamente quando uma nova função é criada e assim podemos fazer herança.

*Quando criamos um construtor, podemos utilizar a propriedade prototype do construtor para estender a função/objeto instanciado.* 
```javascript
function Construtor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Construtor.prototype.fullName = function() { //Estendendo o construtor adicionando um método fullName a ele, que retorna a junção entre a propriedade name mais a lastName
    return this.name + ' ' + this.lastName;
};

var vinicius = new Construtor('Vinicius', 'Meneses');

Construtor.prototype.age = 30; //Mesmo depois do objeto ter sido instanciado ter estendido, ele vai receber a propriedade age automaticamente.
Construtor.prototype.age = 20;

console.log(vinicius.fullName(), vinicius.age); //'Vinicius Meneses'   20
```

```javascript
//FORMAS ERRADAS DE FAZER:
Construtor.fullName = function() { 
    //Se não utilizamos a propriedade prototype, a função em si vai receber um método fullName, e consequentemente, vai dar erro ao executá-la pois não existe a propriedade name e lastName na função em si.
    return this.name + ' ' + this.lastName;
};
console.log(Construtor.fullName()); //Dois erros: primeiro que a propriedade está a função em si e não no objeto instanciado porque não utilizamos o prototype e segundo, porque não existe as propriedades name e lastName na função.
```

---
### Array-like como Arrays
**Array-Like:** Possui formato de array, é utilizado como um array, mas não é um array de verdade.

**forEach, map, filter...:** Recebem dois argumentos, o primeiro uma função que vai ser executada e o segundo (opcional) que o this que vai ser usado dentro do método.

**Array.prototype:** Possui métodos e propriedades pré-definidas dos arrays, como o forEach, map, filter, pop...
Podemos utilizar os métodos padrões dos arrays com o call e apply também:
**Array.prototype.forEach.call()**

*Podemos utilizar esses métodos e propriedades de Arrays dentro do prototype em Arrays-Like para transformá-los em arrays e utilizá-los como arrays.*
```javascript
function myFunction(a, b, c) {
    console.log(arguments); //O arguments é um array-like
    arguments.forEach(function() { }); //ERRO - Função forEach não existe - Pois arguments é um array-like e não um array, sendo assim não herda os métodos e propriedades do Array.prototype.
    
    //COMO ITERAR UM ARRAY-LIKE:
    Array.prototype.forEach.call(arguments, function(item, index) { //Executamos o método forEach diretamente do array.prototype, passando o array-like como this que vai ser usado dentro do forEach e a function que será executada a cada item do array-like.
        console.log(item);
    });
    
    //Executa o reduce como se fosse um array normal, só que utilizando um array-like
    Array.prototype.reduce.call(arguments, function(acumulado, atual, index) {
        console.log(acumulado + atual);
    });
}

myFunction(1, 2, 3);
```


---
### .editorconfig - https://editorconfig.org/
**EditorConfig:** Configurador de editor (IDEs), cria alguns padrões quando formos editar os arquivos.

Quando temos um arquivo **.editorconfig** na raiz do projeto, os arquivos que estão configurados com as configurações passadas, terão suas devidas regras e serão passadas para a IDE (mantém o padrão do código).