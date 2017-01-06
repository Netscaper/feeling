var lhydata=[
    {
        src:"images/lx_06.png",
        title:"聊天表情",
        href:"#/look"
    },
    {
        src:"images/lx_09.png",
        title:"特效视频",
        href:"javascript:;"
    },
    {
        src:"images/lx_11.png",
        title:"生活服务",
        href:"#/life"
    },
    {
        src:"images/lx_14.png",
        title:"电子书城",
        href:"javascript:;"
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
var  banner=[
    {
        image:"images/banner1_02.png"
    },
    {
        image:"images/banner1_02.png"
    }
]
var home=angular.module("home",[]);
home.controller("lhyhome",function($scope){
    $scope.lhydata=lhydata;
    $scope.lximg=lximg;
    $scope.mood1=mood1;
    $scope.mood2=mood2;
    $scope.banner=banner;
})
home.directive("banner",function($timeout){
    return {
        restrict:"ECMA",
        replace:true,
        link:function(){
            $timeout(function(){
                var lhySwiper = new Swiper ('.swiper-container', {
                    loop: true,
                    autoplay : 1000,
                    pagination: '.swiper-pagination'
                })
            },500);

        }
    }
})
