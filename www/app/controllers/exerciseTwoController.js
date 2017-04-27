(function(angular) {
  angular
    .module("application")
    .controller("exerciseTwoController", function($routeParams, es) { // inject
      this.es = es; // assigning es to the controller as a member







      this.title = "Exercise 2";

      const _possibleColors = [
        {
          name: "Brown",
          hex: "#A52A2A"
        },
        {
          name: "Blue",
          hex: "#0000FF"
        },
        {
          name: "Gainsboro",
          hex: "#DCDCDC"
        }
      ];

      function _getRandomColorFromCollection() {
        const randomColor = _possibleColors[Math.floor(Math.random() * _possibleColors.length)];

        return randomColor;
      }

      this.objectArray = [];

      this._createObject = function() {
        const returnObject = {
          name: "Obj" + (this.objectArray.length + 1),
          clickCount: 0,
          color: _getRandomColorFromCollection()
        };
        return returnObject;
      };

      this.controllerInitObject = this.objectArray;

      this.addNewObject = function() {
        this.objectArray.push(this._createObject());
      };



      let originalButtonText = "Button text";

      this.buttonText = originalButtonText;

      this.buttonMouseEnter = function() {
        this.buttonText = "Rolled over";
      };

      this.buttonResetClick = function() {
        this.buttonText = originalButtonText;
      };

    });
}(window.angular));
