/* 
* @Author: Marte
* @Date:   2016-12-29 18:51:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 14:00:26
*/
var orderlist=[
    {
        id:1,
        title:"蛋蛋smile表情",
        desc:'一个会动会眨眼睛的蛋蛋，他在陪你说话呢。',
        price:2,
        num:6,
        icon:'images/xl.png'
    },
    {
        id:2,
        title:"甜蜜棒棒糖",
        desc:'粉色的棒棒糖，送她甜蜜到心里。',
        price:5,
        num:2,
        icon:'images/mht.png'
    }
] 
var order=angular.module('order',[]);
order.factory('localS',function(){
    return {
        getdata:function(){
            data=localStorage.getItem('td');
            return JSON.parse(data);
        },
        savedata:function(data){
            localStorage.setItem('td',JSON.stringify(data));
        }
    };
})
order.controller('o',function($scope,localS){
    $scope.order=orderlist;
    $scope.arr=[];
    $scope.sum=0;
    $scope.del=function (v){
        if(v.num==0){
           return;
        }
        v.num--;
    }
    $scope.add=function (v){
        v.num++;
    }
    $scope.$watch('order',function(newval,oldval,scope){
         $scope.rmb();
    },true)
    $scope.rmb=function(){
        var n=0;
        angular.forEach($scope.order,function(obj,i){
            n+=obj.num*obj.price;
        })
        $scope.sum=n;
    }
})

