var life=angular.module("life",[]);
var lifedata=[
    {
        img:"lhy-fuwu_03.png",
        title:"手机充值",
        titleeng:"Pre-paid phone"
    },
    {
        img:"lhy-fuwu_05.png",
        title:"生活缴费",
        titleeng:"Life pay cost"
    },
    {
        img:"lhy-fuwu_07.png",
        title:"滴滴出行",
        titleeng:"Drops travel"
    },
    {
        img:"lhy-fuwu_16.png",
        title:"机票",
        titleeng:"The ticket"
    },
    {
        img:"lhy-fuwu_13.png",
        title:"酒店住宿",
        titleeng:"Hotel accommodation"
    },
    {
        img:"lhy-fuwu_19.png",
        title:"美丽说",
        titleeng:"Beautiful said"
    }
]
var lifefashion=[
    {
        img:"lhy-life1_15.png"
    },
   {
        img:"lhy-life1_17.png"
    },{
        img:"lhy-life1_19.png"
    },{
        img:"lhy-life1_23.png"
    },{
        img:"lhy-life1_24.png"
    },{
        img:"lhy-life1_25.png"
    }
]
life.controller("lf",function($scope){
    $scope.lifedata=lifedata;
    $scope.lifefashion=lifefashion;
})	