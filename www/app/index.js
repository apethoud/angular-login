( function(angular) {
	angular
		.module("application", ["ngRoute"])
		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
					.when("/login", {
						templateUrl    : 'www/app/routes/loginpage/loginpage.htm',
						//controller   : "controller",
						//controllerAs : "ctrl",
					})
					.when("/room/:id", {
						template       : '<r-room></r-room>',
						//controller   : "controller",
						//controllerAs : "ctrl",
					})
					.when("/welcome", {
						templateUrl    : 'www/app/routes/welcome/welcome.htm',
						//controller   : "controller",
						//controllerAs : "ctrl",
					})
					.otherwise({
						redirectTo:"/welcome"
					});
		});
} (window.angular));
