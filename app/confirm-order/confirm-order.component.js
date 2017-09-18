'use strict';

angular.
  module('confirmOrder').
  component('confirmOrder', {
    templateUrl: 'confirm-order/confirm-order.template.html',
    controller: ['Order', 
      function ConfirmOrderController (Order) {
        this.order = Order.getValue();
        this.number = Math.random() * 100000 ^ 0;
      }
    ]
  });
