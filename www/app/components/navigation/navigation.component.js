( function(angular) {
  angular
    .module("application")
    .component("navigation", {
      templateUrl: "www/app/components/navigation/navigation.html",
      controller: "navigationController",
      controllerAs: "ctrl",
    });
}(window.angular));
