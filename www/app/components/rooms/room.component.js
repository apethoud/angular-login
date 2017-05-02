( function(angular) {
  angular
    .module("application")
    .component("rRoom", {
      templateUrl: "www/app/components/rooms/room.htm",
      controller: "roomComponentController",
      controllerAs: "ctrl",
    });
}(window.angular));
