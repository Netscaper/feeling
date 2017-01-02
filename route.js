app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:'pages/search/search.html'})
                .when('/login',{templateUrl:'pages/login/login1.html'})
                .when('/register',{templateUrl:'pages/register/register.html'})
            }])