'use strict';

angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: ['Item', '$location',
      function ItemListController(Item, $location) {
        Item.getItems().then(response => {
          this.items = response;
        });
        this.orderProp = 'name';
        this.orderReverse = false;
        this.preorder = (name) => {
          console.log('???');
          $location.path(`/storefront/${name}`);
        }
      }
    ]
  });
