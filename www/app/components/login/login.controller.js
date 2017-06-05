( function(angular) {
  angular
    .module("application")
    .controller("loginComponentController", function(loginService, $scope) {
      this.loginService = loginService;
    });
}(window.angular));
