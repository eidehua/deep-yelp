//Creating the layout directives for our angular app
angular.module('users')
.directive('createCard', createCard)
.directive('createMain', createMain)
.directive('createComparison', createComparison)
.directive('createGlobal', createGlobal);


function createCard () {
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
  function createMain () {
    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      controllerAs: 'card',
      controller: function () {

      },
      link: function ($scope, $element, $attrs) {

      },
      templateUrl   : './src/users/view/main_layout.html',
    };
}
function createComparison () {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    controllerAs: 'card',
    controller: function ($scope) {
        $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

        $scope.data = [
          [65, 59, 90, 81, 56, 55, 40],
          [28, 48, 40, 19, 96, 27, 100]
        ];
    },
    link: function ($scope, $element, $attrs) {

    },
    templateUrl   : './src/users/view/comparison_layout.html',
  };
}

function createGlobal () {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    controllerAs: 'card',
    controller: function () {

    },
    link: function ($scope, $element, $attrs) {

    },
    templateUrl   : './src/users/view/global_layout.html',
  };
}
