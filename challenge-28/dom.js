(function(doc) {
  'use strict';

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

  window.DOM = DOM;
})(document);
