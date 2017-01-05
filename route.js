app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'pages/home/home.html'})
    .when('/flash',{templateUrl:'pages/flash/flash.html'})
    .when('/login',{templateUrl:'pages/login/login.html'})
    .when('/chat',{templateUrl:'pages/chat/chat.html'})
    .when('/order',{templateUrl:'pages/pay/order.html'})
    .when('/albo',{templateUrl:'pages/pay/albo.html'})
    .when('/register',{templateUrl:'pages/register/register.html'})
	.when("/search1",{
        templateUrl:'pages/search/html/search1.html',
    	controller:'ss'
	})
    .when("/search2",{
        templateUrl:'pages/search/html/search2.html',
        controller:'ss'
    })
    .when("/search4",{
        templateUrl:'pages/search/html/search4.html',
        controller:'ss'
    })
}])

