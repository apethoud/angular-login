(function(angular) {
  angular
    .module("application")
    .service("loginService", function($rootScope) {
      // public API
      this.login = _login;
      this.logout = _logout;
      this.isLoggedIn = _isLoggedIn;
      this.getLoggedInUser = _getLoggedInUser;
      this.getFirstName = _getFirstName;

      let loggedInUser = null;
      let notifyControllerCallback = null;

      // FORM CREATION AND VALIDATION INSTRUCTIONS
      // you must name a form for angular to recognize it <form name="myForm" ...>
      // you must also include "novalidate". this turns off your browser's validation. it will conflict with angular's validation.
      // <form name="myForm" novalidate ...>
      // on your form's inputs, you must include ng-model and name: <input ng-model="firstName" name="myForm.first-name "...>
      // your form's submit button should use ng-submit.
      // to validate an email: ng-class="{ 'error': myForm.emailAddress.$invalid }"

      // implementation

      firebase.auth().onAuthStateChanged(updateLogInStatus);

      function updateLogInStatus(authenticatedUser) {
        console.log("updateLogInStatus triggered");
        console.log("authenticatedUser is: ", authenticatedUser);
        console.log("notifyControllerCallback is: ", notifyControllerCallback);
        loggedInUser = authenticatedUser;
        // $rootScope.$apply();
        debugger;
      }

      function _getLoggedInUser() {
        console.log("loggedInUser is: ", loggedInUser);
        return loggedInUser;
      }

      function _login() {
        return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());

        // this.loggedInUser = {
        //   name: inputName
        // };
        //
        // this.inputName = null;
        //
        // $location.path('/rooms');
      }

      function _logout() {
        return firebase.auth().signOut();

        // this.loggedInUser = {};
        //
        // $location.path('/welcome');
      }

      function _isLoggedIn() {
        return Boolean(loggedInUser);
      }

      function _getFirstName() {
        if (loggedInUser) {
        return loggedInUser.displayName.split(' ')[0];
      } else {
        return "";
      }
      }
    });
}(window.angular));
