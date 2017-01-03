<<<<<<< HEAD
=======
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'pages/home/home.html'})
    .when('/login',{templateUrl:'pages/login/login1.html'})
    .when('/register',{templateUrl:'pages/register/register.html'})
	.when("/search1",{
        templateUrl:'pages/search/html/search1.html',
    	controller:'ss'
	})
    .when("/search2",{
        templateUrl:'pages/search/html/search2.html',
        controller:'ss'
    })
}])
>>>>>>> 2297a40ec988c3c02e0021955984dc703de9e083
