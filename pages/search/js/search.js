var searchdata=[
    {
        title:"温柔的小太阳"
    },
    {
        title:"大米"
    },
    {
        title:"寂寞沙洲冷"
    },
    {
        title:"黄昏"
    },
    {
        title:"追梦"
    },
    {
        title:"橙子"
    },
    {
        title:"小太阳"
    }
];
var rmtjimg=[
    {
        src:"pages/search/images/zxtj_07.png"
    },
    {
        src:"pages/search/images/zxtj_09.png"
    },
    {
        src:"pages/search/images/zxtj_11.png"
    },
    {
        src:"pages/search/images/zxtj_15.png"
    },
    {
        src:"pages/search/images/zxtj_17.png"
    },
    {
        src:"pages/search/images/zxtj_18.png"
    }
];
var hylb=[
    {
       headerimg:"images/lhy-header_06.png" ,
       name:"陈小樱桃",
       num:"2332",
       eng1:"Small cherry",
       eng2:"Chen Chen who love to eat",
       gx:"山西晋城",
       age:"22",
       gxqm:"有没有冬瓜，在温暖的午后，一杯冰凉的冬瓜汁"
    },
    {
       headerimg:"images/lhy-header_03.png" ,
       name:"陈米亚",
       num:"2311",
       eng1:"Small cherry",
       eng2:"Chen Chen who love to eat",
       gx:"山西太原",
       age:"20",
       gxqm:"有没有冬瓜，在温暖的午后"
    }
]
var newhylb=[];
var search=angular.module("search",[]);
search.controller("ss",function($scope){
    $scope.data=data;
    $scope.rmtjimg=rmtjimg;
    $scope.hylb=hylb;
    $scope.searchdisplay=false;
    $scope.jgshow=false;
    $scope.sea;
    $scope.searchshow=function(){
      $scope.searchdisplay=!$scope.searchdisplay;
    }
    $scope.changeshow=function(){
      $scope.jgshow=true;
      if($scope.sea.length==0){
        $scope.jgshow=false;
      }
    }
})

