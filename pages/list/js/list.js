var listdata=[
    {
        src:"img.png",
        title:"么嘛",
        remark:"最美的故事等你回来给你讲",
        num:"02"
    },
    {
        src:"pic.png",
        title:"lg",
        remark:"最动听的情话讲给你听。",
        num:"05"
    },
    {
        src:"mood.png",
        title:"李雪",
        remark:"最动听的情话讲给你听。",
        time:"下午10：06"
    },
    {
        src:"tx.png",
        title:"半夏的微凉",
        remark:"半夏的微凉领取了你的红包",
        time:"下午8：26"
    }
]
var list=angular.module("list",[])
list.controller("list",function($scope){
    $scope.data=listdata
})