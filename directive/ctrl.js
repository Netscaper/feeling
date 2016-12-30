debugger
var ctrl=app.module("ctrl",[])
ctrl.directive("shu",function () {
    return{
        restrict:"ECMA",
        replace:true,
        require:"ngModel",
        trasnclude:"true",
        template:"<div>susu</div>",
        controller:"c"
    }
})
ctrl.controller("c",function ($scope) {
    console.log($scope)
})