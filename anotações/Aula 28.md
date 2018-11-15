# Aula 28

---
### Ajax - Asynchronous Javascript and XML
Serve para fazer requisições em um servidor que trazem informações sem que precise recarregar toda a tela pra mostrar essas informações. Podendo trazer a resposta como HTML, XML, JSON, etc...

**window.XMLHttpRequest():** Objeto do window que precisa ser instanciado pra fazer a requisição AJAX.

**3 passos pra funcionar uma requisição AJAX:**
- Instanciar - `var ajax = new XMLHttpRequest();`
- Abrir uma conexão passando o protocolo (GET, POST, PUT, DELETE, HEAD, OPTIONS) e a URL de origem -`ajax.open(<protocol>, <url>);`
- Enviar os dados (se tiverem) para o servidor - `ajax.send(<data>);`

**Status Code:** Códigos do protocolo HTTP.
- 200 - OK
- 404 - Não encontrado
- 500 - Erro no servidor
- 403 - Forbidden/Não autorizado

**Evento onreadystatechange no objeto instanciado:** Evento disparado quando o estado da requisição é alterado.

**ajax.readyState:** Mostra o estado atual da requisição (0, 1, 2, 3, 4).
- 0 - Não enviado (Não cai no evento readystatechanged)
- 1 - Conexão aberta
- 2 - Headers recebidos (Primeira coisa recebida é o cabeçalho - Headers)
- 3 - Carregando o corpo da requisição
- 4 - Concluído (Mesmo se der erro de protocolo HTTP)

**ajax.status:** Mostra o estado atual do protocolo HTTP. Retorna algum dos status code (200, 403, 404, 500, etc.).
```javascript
var ajax = new XMLHttpRequest();
ajax.open('GET', '/');
ajax.send();

ajax.onreadystatechange = function() {
    console.log('Terminou a requisição.', ajax.readyState, ajax.status);
};
//OU
ajax.addEventListener('readystatechange', function() {
    console.log('Terminou a requisição.', ajax.readyState, ajax.status);
}, false);
```


---
### AJAX - Manipular a resposta
**Através do ajax.responseText:** Retorna a resposta da requisição em formato String.
```javascript
var ajax = new XMLHttpRequest();
ajax.open('GET', '/data/data.json');
ajax.onreadystatechange = function() {
    if (isRequestOk()) {
        var data = JSON.parse(ajax.responseText); //Parseia a resposta da requisição
        console.log('Requisição OK!', data.message);
    }
};
ajax.send();

function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
}
```

**ajax.responseXML:** Converte a resposta que vem de um documento XML em um documento para ser manipulado.

---
### Tratamento de Erros
**Disparar erros no JS:** Para disparar um erro, utilizamos a palavra chave throw e criamos um objeto com o construtor do erro, passando uma mensagem por parâmetro.
```javascript
throw new Error('Mensagem de erro!');
throw new SyntaxError('Erro na sintaxe!');
```

**Para capturar esses erros e não mostrar para o usuário, utilizamos o try/catch:** Tenta executar o que está dentro do try, se não conseguir (der erro), executa o que está dentro do catch passando por parâmetro o objeto do erro para resolver o problema do erro.
```javascript
try {
    throw new Error('Mensagem de erro!');
}
catch (e) {
    console.log(e); //Mostra o erro, mas não interrompe a execução do código
}
```

```javascript
var ajax = new XMLHttpRequest();
ajax.open('GET', '/data/data.json');
ajax.onreadystatechange = function() {
    var response = '';
    if (isRequestOk()) {
        try {
            response = JSON.parse(ajax.responseText);
        }
        catch (e) {
            response = ajax.responseText;
        }
        console.log(response);
    }
};
ajax.send();

function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
}
```
