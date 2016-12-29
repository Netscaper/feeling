app.directive("shuru",function () {
    return{
        restrict:"ECMA",
        templateUrl:"<div>susu</div>",
        replace:true,
        scope:true,
        require:"ngModel",
        controller:function ($scope,$element,$attrs,$transclude) {
            console.log($scope)
            console.log(ele)
        }
    }
})
