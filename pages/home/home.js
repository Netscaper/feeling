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
var mood1=[
    {
        title1:"游来游去的鱼",
        title2:"Gary White",
        min:"19 m",
        content:"周末，徒步旅行的小家伙",
        contentYin:"Weekend backpacking with my look the guys.",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_03.png",
        img2:"images/mood_10.png"
    },
    {
        title1:"游来游去的鱼",
        title2:"Gary White",
        min:"19 m",
        content:"周末，徒步旅行的小家伙",
        contentYin:"Weekend backpacking with my look the guys.",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_03.png",
        img2:"images/mood_10.png"
    },
    {
        title1:"游来游去的鱼",
        title2:"Gary White",
        min:"19 m",
        content:"周末，徒步旅行的小家伙",
        contentYin:"Weekend backpacking with my look the guys.",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_03.png",
        img2:"images/mood_10.png"
    },

]
var mood2=[
    {
        title1:"游来游去的鱼",
        title2:"Gary White",
        min:"19 m",
        content:"周末，徒步旅行的小家伙",
        contentYin:"Weekend backpacking with my look the guys.",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_05.png",
        img2:"images/mood_12.png"
    },
    {
        title1:"萌萌的兔子",
        title2:"Jesse Scott",
        min:"12 m",
        content:"陪我去海边一起看海好吗",
        contentYin:"Accompany me to go to the beach  to watch the sea",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_05.png",
        img2:"images/mood_12.png"
    },
    {
        title1:"游来游去的鱼",
        title2:"Gary White",
        min:"19 m",
        content:"周末，徒步旅行的小家伙",
        contentYin:"Weekend backpacking with my look the guys.",
        sc:"8523",
        pl:"3452",
        img1:"images/mood_05.png",
        img2:"images/mood_12.png"
    }
]
var app=angular.module("app",[]);
app.controller("c",function($scope){
    $scope.data=data;
    $scope.lximg=lximg;
    $scope.mood1=mood1;
    $scope.mood2=mood2;
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