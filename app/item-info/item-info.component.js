'use strict';

angular.
  module('itemInfo').
  directive('credit', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.credit = function(modelValue, viewValue) {
          return /^\d{19}$/.test(viewValue);
        };
      }
    };
  }).
  directive('letters', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.letters = function(modelValue, viewValue) {
          //firstname and surname
          return /^[a-zA-Z]+(?:\s[a-zA-Z]+){0,1}$/.test(viewValue);
        };
      }
    };
  }).
  directive('phone', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.phone = function(modelValue, viewValue) {
          return /^\d{3}-\d{3}-\d{4}$/.test(viewValue);
        };
      }
    };
  }).
  component('itemInfo', {
    templateUrl: 'item-info/item-info.template.html',
    controller: ['$routeParams', 'Item', 'Order', '$location',
      function ItemInfoController ($routeParams, Item, Order, $location) {
        Item.getItems().then(response => {
          this.item = response.find(r => r.name == $routeParams.itemId);
        });
        this.order = (isValid) => {
          this.tryToOrder = true;
          if (isValid) {
            Order.updateValue({
              fullname: this.fullname,
              address: this.address,
              email: this.email,
              phone: this.phone,
              creditcard: this.creditcard,
              item: this.item
            });
            $location.path(`/storefront/${this.item.name}/confirm`);
          }
        }
      }
    ]
  });
