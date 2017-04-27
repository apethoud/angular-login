( function(angular) {
	angular
		.module("application", ["ngRoute"])
		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
					.when("/login", {
						templateUrl  : 'www/app/routes/loginpage/loginpage.htm',
						//controller   : "exerciseOneController",
						//controllerAs : "ctrl",
					})
					.when("/rooms", {
						templateUrl  : 'www/app/routes/rooms/rooms.htm',
						controller   : "roomsController",
						controllerAs : "ctrl",
					})
					.when("/welcome", {
						templateUrl  : 'www/app/routes/welcome/welcome.htm',
						//controller   : "roomsController",
						//controllerAs : "ctrl",
					})
					.otherwise({
						redirectTo:"/welcome"
					});
		});
} (window.angular));
