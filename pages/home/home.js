var data=[
    {
        src:"images/lx_06.png",
        title:"聊天表情"
    },
    {
        src:"images/lx_09.png",
        title:"特效视频"
    },
    {
        src:"images/lx_11.png",
        title:"生活服务"
    },
    {
        src:"images/lx_14.png",
        title:"电子书城"
    },
    {
        src:"images/lx_03.png",
        title:"音乐空间"
    }
]
var lximg=[
    {
        src:"images/lximg_11.png"
    },
    {
        src:"images/lximg_04.png"
    },
    {
        src:"images/lximg_13.png"
    },
    {
        src:"images/lximg_18.png"
    },
    {
        src:"images/lximg_20.png"
    },
    {
        src:"images/lximg_22.png"
    },


]
var app=angular.module("app",[]);
app.controller("c",function($scope){
    $scope.data=data;
    $scope.lximg=lximg;
})
app.directive("lx",function(){
    return {
        replace:true,
        templateUrl:"item.html",
        scope:{
            data:"=data"
        }
    }
})
app.directive("lximg",function(){
    return {
        replace:true,
        templateUrl:"item1.html",
        scope:{
            lximg:"=data"
        }
    }
})