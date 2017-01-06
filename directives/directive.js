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
dir.directive('hybswiper',function($timeout){
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
dir.directive('hybrecom',function(){
    return {
        restrict:'ECMA',
        templateUrl:'./directives/template/box.html',
        transclude:true,
        scope:{
            recom:'=recom'
        },
        controller:'recom'
    }
})
dir.directive('hyblunbo',function(){
    return {
        restrict:'ECMA',
        templateUrl:'./directives/template/lunbo.html',
        transclude:true,
        scope:{
            recom:'=recom'
        },
        controller:'lunbo'
    }
})
dir.directive('hyblis',function($timeout){
    return {
        restrict:'ECMA',
        templateUrl:'./directives/template/lis.html',
        transclude:true,
        scope:{
            recom:'=sex'
        },
        controller:'lis',
        link:function(){
            $timeout(function(){
                $('.hyb-sex-change li').click(function(){
                    $('.hyb-sex-dui').hide();
                    $(this).find('.hyb-sex-dui').show()
                })
            })
        }
    }
})