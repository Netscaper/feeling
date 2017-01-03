app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when("/",{templateUrl:'pages/search/html/search1.html',
    	controller:'ss'
	})
	.when("/search2",{templateUrl:'pages/search/html/search2.html',
    	controller:'ss'
	})
	// .when('/',{templateUrl:'pages/login/login.html'})
	.when('/login',{templateUrl:'pages/login/login1.html'})
    .when('/register',{templateUrl:'pages/register/register.html'})
}])