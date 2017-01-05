var listdata=[
    {
        src:"jd.png",
        title:"我的钱包",
        remark:"直接用我的钱包可以快速完成支付哦",
        num:"02"
    },
    {
        src:"mht.png",
        title:"优惠券",
        remark:"完成支付之后获得的奖励",
        num:"05"
    },
    {
        src:"bql.png",
        title:"签到",
        remark:"每日签到可领5颗Feeling豆",
    },
    {
        src:"pg.png",
        title:"我的足迹",
        remark:"小主，您最近看了这些商品呢",
    }
]
var wo=angular.module("wo",[])
wo.controller("wo",function($scope){
    $scope.data=listdata
})