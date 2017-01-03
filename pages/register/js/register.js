var datas=[
    {
        name:"13467110519",
        pwd:"123456",
    },
    {
        name:"13423337477",
        pwd:"123456",
    },
    {
        name:"13422554435",
        pwd:"123456",
    }
]
var ctrl=angular.module("ctrl",[]);

ctrl.factory("localS",function(){
    return {
        getdata:function(){
            var arr=[]
            var st=localStorage.getItem("data");
            return JSON.parse(st)
        },
        savedata:function (data) {
            localStorage.setItem("data",JSON.stringify(data))
        }
    }
})
ctrl.controller("cc",function ($scope,localS){
    // $scope.data=datas;
    $scope.content="";
    $scope.data=localS.getdata()||[];
    $scope.eve=function(e){
        var value=e.target.value
        var classname=e.target.className
        console.log(value)
        console.log(classname)
        var flag1,flag2,flag3;
        console.log(typeof $scope.data)
        function CheckMail(mail) {
            var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (filter.test(mail)) {
                return true;
            }else {
                return false;
            }
        }
        function CheckPhone(phone){
            var str=/^1[34578]\d{9}$/
            if(str.test(phone)){
                return true;
            }else{
                return false;
            }
        }
        if(e.target.className=="name"){

            if(value.length==0){
               $(".sly-quan")[0].style.backgroundColor="red";
               $scope.content="··用户名不能为空";
            }else{
                if(CheckMail(value)||CheckPhone(value)){
                    if($scope.data!=null){
                        for(var i=0;i<=$scope.data.length-1;i++){
                            if($scope.data[i].name==value){
                                $(".sly-quan")[0].style.backgroundColor="red";
                                $scope.content="··用户名已存在";
                            } 
                        }
                        $(".sly-quan")[0].style.backgroundColor="green"
                        $scope.content=""
                    }else{
                        $(".sly-quan")[0].style.backgroundColor="green";
                        $scope.content=""
                    }
                    
                }else{
                    $(".sly-quan")[0].style.backgroundColor="red";
                    $scope.content="··用户名格式错误"
                }
                
            }
        }else if(e.target.className=="passward"){
            if(value.length==0){
                $(".sly-quan")[1].style.backgroundColor="red";
                $scope.content="··密码不能为空";
            }else{
                if(value.length>=6&&value.length<=8){
                    $(".sly-quan")[1].style.backgroundColor="green";
                    $scope.content=""
                }else{
                    $(".sly-quan")[1].style.backgroundColor="red";
                    $scope.content="··请输入6-8位密码";
                }     
            }
        }else if(e.target.className=="repwd"){
            if(value.length==0){
                $(".sly-quan")[1].style.backgroundColor="red";
                $scope.content="··两次输入密码不一致";
            }else{
                if($('input')[1].value==value){
                    $(".sly-quan")[2].style.backgroundColor="green";
                    $scope.content=""
                }else{
                    $(".sly-quan")[2].style.backgroundColor="red";
                    $scope.content="··两次输入密码不一致";
                }     
            }
        }
        if($(".sly-quan").eq(0).css("background-color")=='green'&&$(".sly-quan").eq(1).css("background-color")=='green'&&$(".sly-quan").eq(2).css("background-color")=='green') {
            $(".sly-next")[0].style.backgroundImage='url("../../images/redbtn.png")'
            $(".sly-next").removeAttr('disabled')
        }
    }
    $scope.save=function(){
        var name=$(".name").val()
        var pwd=$(".passward").val()
        $scope.data.push({
            name:name,
            pwd:pwd
        })
        localS.savedata($scope.data)
    }
    $scope.showfalg=true;
    $scope.hidefalg=true;
    $scope.show=function(){
        if($scope.showfalg){
            $(".mima").css({
                marginLeft:'0.6rem'
            });
            $(".mima").parent().parent().find("input")[0].type="text"
        }else{
            $(".mima").css({
                marginLeft:'0.06rem'
            });
            $(".mima").parent().parent().find("input")[0].type="password"
        }
        $scope.showfalg=!$scope.showfalg
    }
    $scope.hide=function(){
        if($scope.hidefalg){
            $(".mm").css({
                marginLeft:'0.6rem'
            });
            $(".mm").parent().parent().find("input")[0].type="text"
        }else{
            $(".mm").css({
                marginLeft:'0.06rem'
            });
            $(".mm").parent().parent().find("input")[0].type="password"
        }
        $scope.hidefalg=!$scope.hidefalg
    }
    
})