( function(angular) {
  angular
    .module("application")
    .component("rRoomReservationForm", {
      templateUrl: "www/app/components/rooms/room-reservation-form/room-reservation-form.htm",
      controller: "roomReservationFormController",
      controllerAs: "ctrl",
      require: {
        parentController: "^rRoom" // makes the parent controller a member of this controller
      }
    });
}(window.angular));
