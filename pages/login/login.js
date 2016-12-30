var list=[
    {
        title:"登录",
        imgUrl:"yc_login_images/login_04.png"
    },
    {
        title:"注册",
        imgUrl:"yc_login_images/login_06.png"
    },
    {
        title:"登录",
        imgUrl:"yc_login_images/button1_03.png"
    }
]
var login=angular.module("login",[])
login.controller("c",function ($scope) {
    $scope.login=function (v) {
        console.log(v)
    }
})
login.directive("newButton",function () {
    return {
        restrict: "ECMA",
        templateUrl: "../../tpl/label.html",
        replace: true,
        scope:true,
        controller:"n"
    }
})
login.controller("n",function ($scope) {
    $scope.list=list;
    console.log($scope)
})