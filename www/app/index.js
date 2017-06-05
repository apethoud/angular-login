( function(angular) {
	angular
		.module("application", ["ngRoute"])

		.constant("applicationSettings", {
			applicationTitle : "Roomy",

			getFirebaseRestUrl : function(suffix) {
				const prefix = "https://confdeconflictor.firebaseio.com/";
				const ext = ".json";

				return prefix + suffix + ext;
			},

			getImagePath : function(file) {
				return "www/assets/images/${file}";
			}
		})

		.config(function($locationProvider, $routeProvider) {
			$locationProvider.html5Mode(true);

			$routeProvider
					.when("/login", {
						templateUrl    : 'www/app/routes/loginpage/loginpage.htm',
						//controller   : "controller",
						//controllerAs : "ctrl",
					})
					.when("/room/:id", {
						resolve        : {
							isLoggedIn   : function(loginService) {
								return !loginService.isLoggedIn() ? $location.path("/welcome") : true;
							}
						},
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
