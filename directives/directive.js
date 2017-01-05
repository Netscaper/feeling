var dir = angular.module('dir',[]);
dir.directive('zypInput',function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:'../tpl/ZypInput/ZypInput.html',
        scope:{
            attr:'=attr'
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
dir.directive("lhyssjg",function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:"../tpl/lhyssjg/lhyssjg.html",
        scope:true
    }   
<<<<<<< HEAD
}) 
=======
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
>>>>>>> 8235d49e24574715a6dfac3692ee411add9a1ca2
