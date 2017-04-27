( function(angular) {
  angular
    .module("application")
    .controller("loginComponentController", function(loginService) {
      this.loginService = loginService;
    });
}(window.angular));
