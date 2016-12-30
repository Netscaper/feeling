/* 
* @Author: Marte
* @Date:   2016-12-29 18:51:50
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-29 22:31:21
*/
var app=angular.module('app',[]);
app.directive('dian',function(){
    return {
        restrict : "ECMA",
        template : "<div class='hyb-dian'></div>",
        replace:true
    };
})