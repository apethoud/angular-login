( function(angular) {
  angular
    .module("application")
    .controller("navigationController", function($location, loginService, navigationService, roomService, $scope) {
      this.$onInit = function() { // add to each controller
        this.loginService = loginService;
        this.navigationService = navigationService;
        this.roomService = roomService;
        this.isItemActive = isItemActive;

        // add welcome link
        let welcomeItem = {
          title: "Welcome",
          url  : "/welcome"
        };

        navigationService.addNavigationItem(welcomeItem);

        // add room links
        // this is synchronous for now
        roomService.fetchRoomsFromDB().then(rooms => {
          console.log(rooms);
          angular.forEach(rooms, function(objectValue, objectKey) {
            const itemToAdd = {
              title : objectValue.name,
              url   : `/room/${objectKey}`
            };

            navigationService.addNavigationItem(itemToAdd);
          });
        });

        function isItemActive(viewLocation) {
          return (viewLocation === $location.path());
        }
      };

    });
}(window.angular));
