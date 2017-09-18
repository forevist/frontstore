'use strict';

angular.
  module('storefront').
  config(['$locationProvider' ,'$routeProvider',
    ($locationProvider, $routeProvider) => {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/storefront', {
          template: '<item-list></item-list>'
        }).
        when('/storefront/:itemId', {
          template: '<item-info></item-info>'
        }).
        when('/storefront/:itemId/confirm', {
          template: '<confirm-order></confirm-order>'
        }).
        otherwise('/storefront');
    }
  ]);
