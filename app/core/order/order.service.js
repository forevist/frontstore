'use strict';

angular.
  module('core.order').
  factory('Order', [
    function() {
			let store = {
        test: 'kek'
      };
      return {
        updateValue: function(newValue) {
					store = newValue;
				},
				getValue: function() {
					return store;
				}
      };
    }
  ]);
