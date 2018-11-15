# Aula 18

---
### Continuação Regex
**[ ]** - Corresponde a UM dos que estiverem dentro
**()** - Grupo de captura

**\w** - Caracteres alfanuméricos e underline.
**\d** - Dígitos (0 a 9).
**\s** - Espaços em branco e quebra de linha.
**\n** - Quebra de linha (nova linha). - *Esses caracteres não são visíveis.*
**\t** - Tabulação (Espaços em branco criados pela tecla tab).
**.** - Qualquer caracter (exceto quebra de linha).

---
### Regex - Negação
**Negação:** Para fazer uma negação utiliza o sinal **^** sempre dentro de uma lista **[ ]**.

**Exemplo:**
- **/[^abc]/g:** O match deve ser feito com qualquer item, menos com os da lista - a, b ou c.

**Ou também:**
- **\W** - \W maiúsculo, faz o match com qualquer caracter menos os alfanuméricos.
- **\D** - \D maiúsculo, faz o match com qualquer caracter menos os dígitos.
- **\S** -  \S maiúsculo, faz o match com qualquer caracter menos os espaços em branco.

---
### Regex - Repetidores
**I**n**tervalo - {n,m}:** Item anterior (item que vem antes do intervalo) ao menos n vezes e no máximo **m** vezes.

**Exemplo:**
- **/\d{2,4}/g:** Vai dar match com todos os números que são no mínimo 2 e no máximo 4 dígitos seguidos.

**Intervalo Aberto - {n,}:** Item anterior (item que vem antes do intervalo) ao menos **n** vezes ou mais vezes.

**Exemplo:**
- **/\d{3,}/g:** Vai dar match com todos os números que são no mínimo 3 e não existe máximo.

**Intervalo Exato - {n}:** Item anterior (item que vem antes do intervalo) exatamente **n** vezes.

**Exemplo:**
- **/\d{4}/g:** Vai dar match com todos os números que são 4 dígitos seguidos.

**Opcional - ?:** Zero ou uma ocorrência do item anterior.

**Exemplo:**
- **/\d\d?/g:** Vai dar match com um dígito, seguido por outro dígito que é opcional. Se tiver só um digito, vai dar match.

**Mais - +:** Uma ou mais ocorrências do item anterior.

**Exemplo:**
- **/\d+/g:** Vai dar match com 1 ou mais dígitos seguidos.

**Mais - +:** Zero ou mais ocorrências do item anterior.

**Exemplo:**
- **/\w*/g:** Vai dar match com 0 ou mais dígitos.

---
### Regex - Exemplos Reais
**Validar link/domínio:**
```javascript
var validarLink = /https?:\/\/\w+[.\w]+/g;
//Match com todos os links que tiverem http com ou sem s (opcional) seguido por :// (barra invertida para escapar o caracter, falando que eu quero ele no formato literal) seguido por 1 ou mais caracter alfanumérico seguido por ponto ou qualquer caracter alfanumérico ou mais vezes.
```

**Validar e-mail:**
```javascript
var validarEmail = /[\w+]+@\w+\.\w+([.\w]+)?/g;
```

**Obter nome e valor do $_GET:**
```javascript
var queryString = '?a=aaa&b=bbb&c=ccc';

queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value) {
    console.log(key, value);
});
```
