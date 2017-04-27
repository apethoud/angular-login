(function(angular) {
  angular
    .module("application")
    .service("loginService", function($location) {
      // public API
      this.loggedInUser = {};
      this.login = _login;
      this.logout = _logout;
      this.isLoggedIn = _isLoggedIn;


      // FORM CREATION AND VALIDATION INSTRUCTIONS
      // you must name a form for angular to recognize it <form name="myForm" ...>
      // you must also include "novalidate". this turns off your browser's validation. it will conflict with angular's validation.
      // <form name="myForm" novalidate ...>
      // on your form's inputs, you must include ng-model and name: <input ng-model="firstName" name="myForm.first-name "...>
      // your form's submit button should use ng-submit.
      // to validate an email: ng-class="{ 'error': myForm.emailAddress.$invalid }"

      // implementation
      function _login(inputName) {
        this.loggedInUser = {
          name: inputName
        };

        this.inputName = null;

        $location.path('/rooms');
      }

      function _logout() {
        this.loggedInUser = {};

        $location.path('/welcome');
      }

      function _isLoggedIn() {
        return Object.keys(this.loggedInUser).length > 0;
      }
    });
}(window.angular));
