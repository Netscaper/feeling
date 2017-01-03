var dir = angular.module('dir',[]);
dir.directive('zypInput',function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:'../tpl/ZypInput/ZypInput.html',
        scope:{
            attr:'=attr'
        },
        link:function(scope){
            console.log(scope.attr) 
        }
    }
})
dir.directive("lxLan",function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:"../pages/home/item.html",
        scope:{
            data:"=data"
        }
    }
})
dir.directive('order',function(){
    return {
        restrict : "ECMA",
        templateUrl :"../pages/pay/tpl1.html",
        replace:true,
        scope:{
            data:"=order"
        }
    };
})