'use strict';

angular.
  module('core').
  filter('cashstyle', () => {
    return (input) => {
      return isNaN(input) ? input : input.toFixed(2);
    };
  });
