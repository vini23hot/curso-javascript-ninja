(function (win, doc) {
  'use strict';
  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  //lib DOM
  function DOM(nodes) {
    this.element = doc.querySelectorAll(nodes);
    this.on = function (event, callback) {
      Array.prototype.forEach.call(this.get(), function (el) {
        el.addEventListener(event, callback, false);
      });
    };
    this.off = function (event, callback) {
      Array.prototype.forEach.call(this.get(), function (el) {
        el.removeEventListener(event, callback, false);
      });
    };
    this.get = function () {
      return this.element;
    };
    this.forEach = function () {
      return Array.prototype.forEach.apply(this.get(), arguments);
    };
    this.map = function () {
      return Array.prototype.map.apply(this.get(), arguments);
    };
    this.filter = function () {
      return Array.prototype.filter.apply(this.get(), arguments);
    };
    this.reduce = function () {
      return Array.prototype.reduce.apply(this.get(), arguments);
    };
    this.reduceRight = function () {
      return Array.prototype.reduceRight.apply(this.get(), arguments);
    };
    this.every = function () {
      return Array.prototype.every.apply(this.get(), arguments);
    };
    this.some = function () {
      return Array.prototype.some.apply(this.get(), arguments);
    };
  }

  //------------------

  var $formCep = new DOM('[data-js="formCep"]');
  var $input = new DOM('[data-js="inputCep"]');

  var $statusMessage = new DOM('[data-js="status"]');

  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cep = new DOM('[data-js="cep"]');

  $formCep.on('submit', handleSubmitForm);
  var xhr = new XMLHttpRequest();

  function handleSubmitForm(e) {
    e.preventDefault();
    clearFields();
    xhr.open('GET', getUrl());
    xhr.send();
    setMessage('loading');
    xhr.addEventListener('readystatechange', handleReadyStateChange, false);
    xhr.onerror = setMessage('error');
  }

  function handleReadyStateChange() {
    if (isRequestOk()) {
      setMessage('ok');
      fillCepFields(xhr.responseText);
    }
    else {
      setMessage('error');
    }
  }

  function getUrl() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', clearCep());
  }

  function clearCep() {
    return $input.get()[0].value.replace(/\D/g, '');
  }

  function isRequestOk() {
    return xhr.readyState === 4 && xhr.status === 200;
  }

  function setMessage(type) {
    var messages = {
      loading: `Buscando informações para o CEP ${$input.get()[0].value}...`,
      ok: `Endereço referente ao CEP ${$input.get()[0].value}:`,
      error: `Não encontramos o endereço para o CEP ${$input.get()[0].value}.`
    }
    $statusMessage.get()[0].textContent = messages[type];
  }

  function fillCepFields() {
    var cepData = parseData();
    if (!cepData) {
      setMessage('error');
      cepData = clearFields();
    }
    $logradouro.get()[0].textContent = cepData.logradouro;
    $bairro.get()[0].textContent = cepData.bairro;
    $cidade.get()[0].textContent = cepData.localidade;
    $estado.get()[0].textContent = cepData.uf;
    $cep.get()[0].textContent = cepData.cep;
  }

  function parseData() {
    var result;
    try {
      result = JSON.parse(xhr.responseText);
    }
    catch (e) {
      result = null;
    }
    return result;
  }

  function clearFields() {
    return {
      logradouro: '',
      bairro: '',
      localidade: '',
      uf: '',
      cep: ''
    }
  }

})(window, document);