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
})
dir.directive('swiper',function($timeout){
    return {
        restrict:'ECMA',
        templateUrl:'directives/template/flash.html',
        transclude:true,
        link:function(){
            $timeout(function(){
               var flashSwiper = new Swiper('.swiper-container',{
                     pagination: '.pagination',
                     paginationClickable: true
                   })
            },500);
        }
    }
})