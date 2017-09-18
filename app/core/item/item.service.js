'use strict';

angular.
  module('core.item').
  factory('Item', ['$http',
    ($http) => {
      return {
        getItems: () => {
          return $http.get('items/items.json').then(function(response) {
            return response.data;
          });
        }
      }
    }
  ]);
