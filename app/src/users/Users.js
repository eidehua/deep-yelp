(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial', 'backand' ])
  .controller('createCard', createCard);


  function createCard () {
      alert("hi")

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      controllerAs: 'card',
      controller: function () {

      },
      link: function ($scope, $element, $attrs) {

      },
      templateUrl   : './src/users/view/business_card.html',
    };
  }


})();
