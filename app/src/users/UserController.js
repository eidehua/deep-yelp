(function(){

  angular
       .module('users', ['chart.js'])
       .controller('UserController', [
          'startService', 'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$scope', '$q',
          UserController
      ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( startService, userService, $mdSidenav, $mdBottomSheet, $log, $scope) {
    var self = this;
    self.selected     = null;
    self.users        = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.makeContact  = makeContact;

    // Load all registered users
    /*
    startService
          .loadstart()
          .then( function( startup ) {
            //self.users    = [].concat(startup);
            self.selected = startup[0];
          });
*/
    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });


    // *********************************
    // Internal methods
    // *********************************

    $scope.$on('$viewContentLoaded', function(){
       //Here your view content is fully loaded !!
       self.selected = self.users[0];

     });
    $scope.$watch('ul.selected.showComparison', function(newValue, oldValue) {
        if (newValue == true && oldValue == false) {
            // alert("hi");
            // initMapComparisons();
            // var currCenter = map_compare1.getCenter();
            // alert(currCenter)
            // google.maps.event.trigger(map_compare1, 'resize');
            // map_compare1.setCenter(currCenter);
        }
    });
    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    function updateUsers(){
      alert("hi")
    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });
    }
    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      //console.log(self.selected)
      if(self.selected.name == "Head to Head"){
          setTimeout(function(){
            //do what you need here
                     initMapComparisons();

          }, 300);
        }
        if(self.selected.name == "Global Analytics"){
          setTimeout(function(){
          //do what you need here
                   initMapGlobal();

          }, 300);
        }
          // var currCenter = map_compare1.getCenter();
          // google.maps.event.trigger(map_compare1, 'resize');
          // map_compare1.setCenter(currCenter);
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
          controllerAs  : "cp",
          templateUrl   : './src/users/view/contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedUser;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactUser = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }
})();
