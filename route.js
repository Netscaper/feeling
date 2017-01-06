app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'pages/flash/flash.html'})
    .when('/home',{templateUrl:'pages/home/home.html'})
    .when('/login',{templateUrl:'pages/login/login.html'})
    .when('/login1',{templateUrl:'pages/login/login1.html'})
    .when('/chat',{templateUrl:'pages/chat/chat.html'})
    .when('/friend',{templateUrl:'pages/chat/friend.html'})
    .when('/look',{
        templateUrl:'pages/look/look.html',
        controller:'lookCtrl'   
    })
    .when('/look1',{templateUrl:'pages/look/look1.html'})
    .when('/dialog',{templateUrl:'pages/chat/dialog.html'})
    .when('/order',{templateUrl:'pages/pay/order.html'})
    .when('/albo',{templateUrl:'pages/pay/albo.html'})
    .when('/bind',{templateUrl:'pages/pay/bind.html'})
    .when('/pay',{templateUrl:'pages/pay/pay.html'})
    .when('/head',{templateUrl:'pages/register/touxiang.html'})
    .when('/head2',{templateUrl:'pages/register/sccg.html'})
    .when('/sex',{templateUrl:'pages/register/sex.html'})
    .when('/job',{templateUrl:'pages/register/job.html'})
    .when('/tag',{templateUrl:'pages/register/tag.html'})
    .when('/recom',{templateUrl:'pages/register/recom.html'})
    .when('/life',{templateUrl:'pages/life/life.html'})
    .when('/life1',{templateUrl:'pages/life/life1.html'})
    .when('/life2',{templateUrl:'pages/life/life2.html'})
    .when('/mood',{templateUrl:'pages/life/mood.html'})
    .when('/wo',{templateUrl:'pages/chat/wo.html'})
    .when('/list',{templateUrl:'pages/list/list.html'})
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

