( function(angular) {
  angular
    .module("application")
    .controller("navigationController", function($location, loginService, navigationService, roomService) {
      this.$onInit = function() { // add to each controller
        this.loginService = loginService;
        this.navigationService = navigationService;
        this.roomService = roomService;

        // add welcome link
        let welcomeItem = {
          title: "Welcome",
          url  : "/welcome"
        };

        navigationService.addNavigationItem(welcomeItem);

        // add room links
        // this is synchronous for now
        let rooms = roomService.fetchRoomsFromDB();

        rooms.forEach(function(room) {
          const itemToAdd = {
            title : room.name,
            url   : `/room/${room.id}`
          };

          navigationService.addNavigationItem(itemToAdd);
        });

        // add login link
        let loginItem = {
          title : "Login",
          url   : "/login"
        };

        navigationService.addNavigationItem(loginItem);

        function isItemActive(viewLocation) {
          return (viewLocation === $location.path());
        }
      };
    });
}(window.angular));
