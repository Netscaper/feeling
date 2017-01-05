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
            var arr=[];
            var st=localStorage.getItem("data");
            return JSON.parse(st)
        },
        savedata:function (data) {
            localStorage.setItem("data",JSON.stringify(data))
        }
    }
})
ctrl.controller("cc",function ($scope,localS,$filter){
    // $scope.data=datas;
    $scope.f1=false;
    $scope.f2=false;
    $scope.f3=false;
    $scope.nextkg=""
    $scope.content="";
    $scope.status3={'backgroundColor':'#222222'};
    $scope.status2={'backgroundColor':'#222222'};
    $scope.status1={'backgroundColor':'#222222'};
    $scope.data=localS.getdata()||[];
    $scope.eve=function(e){
        var value=e.target.value
        var classname=e.target.className;
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
            $scope.f1=true
            if(value.length==0){
               $scope.content="··用户名不能为空";
               $scope.falg1=false;
            }else{
                if(CheckMail(value)||CheckPhone(value)){
                    if($scope.data!=null){
                        for(var i=0;i<=$scope.data.length-1;i++){
                            if($scope.data[i].name==value){
                                $scope.content="··用户名已存在";
                                $scope.falg1=false;
                            } 
                        }
                        $scope.content="";
                        $scope.falg1=true;
                    }else{
                        $scope.content="";
                        $scope.falg1=true;
                    }
                    
                }else{
                    $scope.content="··用户名格式错误";
                    $scope.falg1=false;
                }
                
            }
        }else if(e.target.className=="passward"){
            $scope.f2=true
            if(value.length==0){
                $scope.falg2=false;
                $scope.content="··密码不能为空";
            }else{
                if(value.length>=6&&value.length<=8){
                    $scope.falg2=true;
                    $scope.content=""
                }else{
                    $scope.falg2=false;
                    $scope.content="··请输入6-8位密码";
                }     
            }
        }else if(e.target.className=="repwd"){
            $scope.f3=true
            if(value.length==0){
                $scope.falg3=false;
                $scope.content="··两次输入密码不一致";
            }else{
                if($('input')[1].value==value){
                    $scope.falg3=true;
                    $scope.content=""
                }else{
                    $scope.falg3=false;
                    $scope.content="··两次输入密码不一致";
                }     
            }
        }
        if($scope.falg1&&$scope.falg2&&$scope.falg3) {
            $(".sly-next")[0].style.backgroundImage='url("../../images/redbtn.png")'
            $(".sly-next").removeAttr('disabled')
        }else{
            $(".sly-next")[0].style.backgroundImage='url("../../images/greybtn.png")'
            $(".sly-next").attr('disabled','true')
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
    // $scope.zhBlur=function(){
    //     $scope.f1=true
    //     console.log($scope.zhanghao)
    //     function CheckMail(mail) {
    //         var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //         if (filter.test(mail)) {
    //             return true;
    //         }else {
    //             return false;
    //         }
    //     }
    //     function CheckPhone(phone){
    //         var str=/^1[34578]\d{9}$/
    //         if(str.test(phone)){
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }
    //     if(!$scope.zhanghao){
    //         $scope.status1={'backgroundColor':'#f60c3d'};
    //         $scope.content="··用户名不能为空";
    //     }else{
    //         if(CheckMail($scope.zhanghao)||CheckPhone($scope.zhanghao)){
    //             if($scope.data!=null){
    //                 $scope.xinxi = $filter('filter')($scope.data,$scope.zhanghao,true);
    //                 if($scope.xinxi.length){
    //                     $scope.status1={'backgroundColor':'#f60c3d'};
    //                     $scope.content="··用户名已存在";
    //                 }else{
    //                     $scope.status1={'backgroundColor':'#28db67'};
    //                     $scope.content="";
    //                 }
    //             }else{
    //                 $scope.content="";
    //                 $scope.status1={'backgroundColor':'#28db67'}
    //             }      
    //         }else{
    //             $scope.content="··用户名格式错误";
    //             $scope.status1={'backgroundColor':'#f60c3d'}
    //         } 
    //     }
        
    // }
    // $scope.password;
    // $scope.pwd = function(){
    //     $scope.f2=true;
    //     console.log($scope.password)
    //     if(!$scope.password){
    //         $scope.status2={'backgroundColor':'#f60c3d'};
    //         $scope.content="··密码不能为空";
    //     }else{
    //         if($scope.password.length>=6&&$scope.password.length<=8){
    //             $scope.status2={'backgroundColor':'#28db67'};
    //             $scope.content=""
    //         }else{
    //             $scope.status2={'backgroundColor':'#f60c3d'};
    //             $scope.content="··请输入6-8位密码";
    //         }     
    //     }    
    // }
    // $scope.repwd;
    // $scope.repwdBlur = function(){
    //     $scope.f3=true;
    //     if(!$scope.repwd){
    //         $scope.status3={'backgroundColor':'#f60c3d'};
    //         $scope.content="··两次输入密码不一致";
    //     }else{
    //         if($scope.password===$scope.repwd){
    //             $scope.status3={'backgroundColor':'#28db67'};
    //             $scope.content=""
    //         }else{
    //             $scope.status3={'backgroundColor':'#f60c3d'};
    //             $scope.content="··两次输入密码不一致";
    //         }     
    //     }  
        
    // }
    
})