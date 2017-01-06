console.log(app)
var userList=[
    {
        username:"Json",
        signature:"微笑是对美的一种诠释，是对心灵的一种释放。",
        grade:"4",
        inputTime:"6-18",
        from:"iPhone7",
        nowSaying:"愿我们都被世界温柔以待 May we all be tender for the world",
        prasie:"16",
        messageNum:"3",
        avatar:"yc_messageImg/tx1.jpg",
        dynamicImg:"yc_messageImg/26.jpg"
    }
]
var personal=angular.module("personal",[]);
personal.directive("per",function () {
    return{
        restrict:"ECMA",
        templateUrl:"../tpl/yc/personal.html",
        replace:true,
        scope:true,
        controller:"person_c"
    }
})
personal.controller("person_c",function ($scope) {
    $scope.userList=userList;
    console.log($scope)
})