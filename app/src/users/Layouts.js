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
      controller: function ($scope) {
          $scope.line_labels = ["2008", "2009", "2010", "2011", "2012", "2013", "2014"];
          $scope.line_series = ['Soho Bistro'];
          $scope.line_data = [
              [4, 5, 6, 14, 15, 10, 14]
          ];
          $scope.onClick = function (points, evt) {
              console.log(points, evt);
          };
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
        $scope.labels =["Reviews", "Useful Votes", "Funny Votes", "Average Rating"];

        $scope.data = [
          [68, 52, 19, 52.19952],//68/5 = 13.6 scale factor
          [12, 6, 0, 53.26576], //12/5 = 2.4 scale factor
        ];

        $scope.line_labels = ["2008", "2009", "2010", "2011", "2012", "2013", "2014"];
        $scope.line_series = ['Soho Bistro', 'Sushiya Japan'];
        $scope.line_data = [
            [4, 5, 6, 14, 15, 10, 14],
            [0, 0, 0, 2, 3, 3, 4]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
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
