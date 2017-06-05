( function(angular) {
  angular
    .module("application")
    .component("rRoomReservationList", {
      templateUrl: "www/app/components/rooms/room-reservation-list/room-reservation-list.htm",
      controller: "roomReservationListController",
      controllerAs: "ctrl",
    });
}(window.angular));
