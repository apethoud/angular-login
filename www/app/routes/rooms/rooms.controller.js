( function(angular) {
  angular
    .module("application")
    .controller("roomsController", function(loginService) {
      this.loginService = loginService;
    });
}(window.angular));
