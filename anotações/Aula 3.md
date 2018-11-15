# Aula 3

---
### Diferença entre NULL e UNDEFINED
**Null:** Significa "sem valor". O null precisa ser passado para a variável, para assim, a variável valer null.

**Undefined:** Significa "não foi passado nenhum valor". Qualquer variável que não for passado nenhum valor, o valor será undefined, pois não passou nenhum valor.
```javascript
var myvar;
console.log(myvar); //undefined

myvar = null;
console.log(myvar); //null
```

---
### Tipos de Dados e Objetos
**Tipos Primitivos:**
- number
- string
- boolean
- null
- undefined

**Tipos de Objeto:** São todos os outros tipos sem ser os tipos primitivos.
- object
- array
- function
```javascript
var carro = { cor: 'vermelho', motor: 2.0, portas: 4 }; //Objetos guardam propriedades

console.log(carro.motor); //2.0

// carro = { velocidade: 200 }; Atribui um novo objeto ao carro com somente o atribuito velocidade. Para adicionar uma nova propriedade, deve-se usar a notação de objeto (carro.velocidade = 200;).
```

*Os objetos podem receber propriedades com valores que possuem tipos primitivos ou outros tipos de objeto.*

**Function é um tipo de objeto de primeira classe, pois ela pode ser atribuída a uma classe.**
```javascript
var myvar = function() {
    return 'oi';
}
//Quando uma function é declarada diretamente numa variável, não é obrigatório colocar nome na função.

myvar(); //Executa a função
```

---
### Métodos de Objeto
Quando atribui a uma propriedade uma função, a propriedade é chamada de método.
```javascript
var pessoa = { nome: 'Vinicius', idade: 17, altura: 1.75, peso: 50, sexo: 'M' };
```

**Método:** funções como valor de uma propriedade de um objeto.
```javascript
//Adicionando uma nova propriedade ao objeto pessoa. A propriedade recebe uma função, assim a propriedade será chamada método.
pessoa.andar = function() {
    pessoa.peso--;
    return pessoa.nome + " está andando!";
}

pessoa.aniversario = function() {
    pessoa.idade++;
    return "Feliz aniversário!";
}

//Chamando o método
pessoa.andar();
pessoa.aniversario();
```

