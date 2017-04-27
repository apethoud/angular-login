( function(angular) {
  angular
    .module("application")
    .controller("navigationController", function(loginService, navUpdateService) {
      this.loginService = loginService;
      this.navUpdateService = navUpdateService;
    });
}(window.angular));
