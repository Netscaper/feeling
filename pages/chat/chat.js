var listdata=[
    {
        src:"jd.png",
        title:"我的朋友",
        remark:"查看新增好友的信息及记录",
        num:"02"
    },
    {
        src:"mht.png",
        title:"我的群组",
        remark:"查看新增群组和选择进入群组互动",
        num:"05"
    },
    {
        src:"bql.png",
        title:"特别关注",
        remark:"添加为特别关注好友可随时了解他的最新动态",
        num:"2/2"
    }
]
var chat=angular.module("chat",[])
chat.controller("c",function($scope){
    $scope.listdata=listdata
})
chat.directive("pList",function(){
    return {
        replace:true,
        templateUrl:"list.html",
        scope:{
            listdata:"=listdata"
        }
    }
})