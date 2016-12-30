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
        replace:true,
        templateUrl:"../pages/home/item.html",
        scope:{
            data:"=data"
        }
    }
})