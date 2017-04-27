(function(angular) {
  angular
    .module("application")
    .service("navUpdateService", function($location) {
      // public API
      this.updateActive = _updateActive;

      // implementation
      function _updateActive(viewLocation) {
        return (viewLocation === $location.path());
        }
    });
}(window.angular));
