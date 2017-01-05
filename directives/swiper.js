/* 
* @Author: Marte
* @Date:   2017-01-05 15:47:06
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-05 16:06:56
*/

var swiper = angular.module('swiper',[]);
swiper.directive('swiper',function($timeout){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:'../tpl/hyb/flash.html',
        transclude:true,
        link:function(){
            $timeout(function(){
               var mySwiper = new Swiper('.swiper-container',{
                     pagination: '.pagination',
                     paginationClickable: true
                   })
            },500);

        }
    }
})
