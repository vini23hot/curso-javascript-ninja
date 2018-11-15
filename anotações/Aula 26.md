# Aula 26

***Além de tags, espaços em branco, comentários, quebras de linha e textos são contados como nós do DOM.***

***Verificar se um método, propriedade, etc. funciona em determinado browser:** [Can I Use*](https://caniuse.com/)

---
### Percorrer DOM - Propriedades
**element.parentNode:** Retorna o nó que é pai do elemento selecionado.

**element.childNodes:** Retorna todos os nós que são filhos do elemento selecionado em formato Array-Like. *(Cuidado: childNodes também conta como nó: espaçamentos e textos).*

**element.firstChild:** Retorna o primeiro nó que é filho do elemento selecionado.

**element.lastChild:** Retorna o último nó que é filho do elemento selecionado.

**element.nextSibling:** Retorna o próximo nó que é irmão do elemento selecionado (nó que está do lado do elemento selecionado).

**element.previousSibling:** Retorna o nó anterior que é irmão do elemento selecionado.

**element.nodeType:** Retorna o número do tipo do nó do elemento selecionado.
- *Document - 9*
- *Element - 1*
- *Text - 3*
- *Comments - 8*
- *documentFragment - 11*

**element.nodeValue:** Retorna o conteúdo textual dos elementos *text* e *comment.*

**element.nodeName:** Retorna o nome do nó.

### Propriedades que trazem somente os nós de elementos:
**element.children:** Retorna todos os nós (elementos) que são filhos do elemento selecionado em formato Array-Like. ***Porém, retorna somente tags HTML, e não textos e quebras de linha com o element.childNodes***.

**element.firstElementChild:** Retorna o primeiro nó (elemento) que é filho do elemento selecionado.

**element.lastElementChild:** Retorna o último nó (elemento) que é filho do elemento selecionado.

**element.nextElementSibling:** Retorna o próximo elemento que é irmão do elemento selecionado (elemento que está do lado do elemento selecionado).

**element.previousElementSibling:** Retorna o elemento anterior que é irmão do elemento selecionado.

**element.childElementCount:** Retorna a quantidade de elementos HTML filhos.

**element.children.length:** Retorna a quantidade de elementos HTML filhos.


---
### Percorrer DOM - Métodos
**element.hasAttribute('name'):** Verifica de existe o atributo passado por parâmetro no elemento selecionado.
```javascript
element.hasAttribute('style'); //true ou false
```

**element.hasAttributes():** Verifica se o elemento selecionado possui qualquer atributo. True se existir pelo menos 1 atributo e false se não existir nenhum.

**element.appendChild(elementChild):** Adiciona o elemento passado por parâmetro como filho do elemento selecionado. Se o elemento passado já existe, ele é removido do local de onde ele está e é colocado dentro (filho) do elemento selecionado.

**element.insertBefore(nodeAdd, nodeBefore):** Insere o nó passado por parâmetro (nodeAdd) antes do segundo nó passado por parâmetro (nodeBefore) dentro do elemento selecionado.

**element.cloneNode(boolean):** Clona um nó já existente. O parâmetro recebido é um booleano que significa se o conteúdo dentro do nó vai ser clonado também ou não.

**element.hasChildNodes():** Verifica se o elemento selecionado possui algum nó filho retornando true ou false.

**element.removeChild(elementChild):** Remove o elemento filho passado por parâmetro de dentro do elemento selecionado.

**element.replaceChild(new, old):** Troca/substitui o elemento filho antigo passado por parâmetro pelo novo elemento filho dentro do elemento selecionado. *Se o novo elemento já existe, ele é removido do local onde ele está.*

**document.createTextNode(text):** Cria um novo nó de texto. *Método do elemento document somente.*

**document.createElement(tagName):** Cria um novo elemento utilizando a tag passada por parâmetro.

---
### Percorrer DOM - Manipular Atributos
***Os atributos que referenciam propriedades do elemento são getters e setters.***

**element.id:** ID do elemento.

**element.value:** Propriedade value do elemento (input).

**element.className:** Nome da classe do elemento.

**element.getAttribute(attr):** Passa exatamente o nome do atributo na tag HTML e retorna o valor do atributo sempre em string.
```javascript
$main.getAttribute('data-js');
```

**element.setAttribute(attr, value):** Seta ou cria um atributo no elemento selecionado (na tag HTML) com o nome e valor passado por parâmetro.
```javascript
$main.setAttribute('number', '5');
```