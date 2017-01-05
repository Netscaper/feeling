app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'pages/home/home.html'})
    .when('/login',{templateUrl:'pages/login/login.html'})
    .when('/login1',{templateUrl:'pages/login/login1.html'})
    .when('/chat',{templateUrl:'pages/chat/chat.html'})
    .when('/order',{templateUrl:'pages/pay/order.html'})
    .when('/life',{templateUrl:'pages/life/life.html'})
    .when('/life1',{templateUrl:'pages/life/life1.html'})
    .when('/life2',{templateUrl:'pages/life/life2.html'})
    .when('/mood',{templateUrl:'pages/life/mood.html'})
    .when('/music',{templateUrl:'pages/music/music.html'})
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

