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
<<<<<<< HEAD
dir.directive("lhyssjg",function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:"../tpl/lhyssjg/lhyssjg.html",
        scope:true
    }    
=======
dir.directive('order',function(){
    return {
        restrict : "ECMA",
        templateUrl :"../pages/pay/tpl1.html",
        replace:true,
        scope:{
            data:"=order"
        }
    };
>>>>>>> 3a6567aaf6cf959067bcca2d130d1004d43059b1
})