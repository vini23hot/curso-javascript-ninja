# Aula 29

---
### Module Pattern
**Modularização de código:** serve para reaproveitar, separar e organizar o código importando e exportando-os quando for utilizado.

***Module Pattern é um padrão de módulo que é basicamente uma function.***

**Exportar um módulo (arquivo JS):**
Criar uma função e retornar alguns metódos dessa função que serão acessíves de fora.
- **Primeiro formato:**
```javascript
function app() {
    //todo código...
}
app();
```
- **Segundo formato (revealing module pattern) - revela somente os métodos que serão usados do módulo:**
```javascript
function app() {
    function teste() {
        //...
    }
    function getMessage() {
        //...
    }
    function searchData() {
        console.log(teste());
        //...
    }
    //Retorando/exportando somente os métodos que serão usados
    return {
        getMessage: getMessage,
        searchData: searchData
    }
}

//Exportando o app para o objeto window
window.app = app(); //Object - Function executada
window.app.getMessage();
window.app.searchData();
```

**Conceito closure:** Sempre que temos uma função, ela cria um contexto. Quando criamos uma outra função dentro dela, essa outra função tem acesso a tudo o que está dentro e fora dela (todo escopo dentro e fora) e consegue guardar o valor de fora para ser utilizado posteriormente.

*Executando searchData(), mesmo não tendo acesso à função teste(), ela é executada por causa do conceito de closure.*