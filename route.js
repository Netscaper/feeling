app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'pages/home/home.html'})
    .when('/login',{templateUrl:'pages/login/login1.html'})
    .when('/chat',{templateUrl:'pages/chat/chat.html'})
    .when('/pay',{templateUrl:'pages/pay/order.html'})
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
