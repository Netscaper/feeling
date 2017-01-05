var login=angular.module("login",[]);
login.factory('localS',function(){
    return {
        getdata:function(){
            var arr=[];
            var st=localStorage.getItem("data");
            return JSON.parse(st);
        },
        savedata:function (data) {
            localStorage.setItem("data",JSON.stringify(data));
        }
    }
})
login.controller('loginCtrl',function($scope,localS,$filter){
    $scope.zhanghao;
    $scope.pwd;
    $scope.text;
    $scope.data = localS.getdata();
    $scope.zhStatus=false;
    $scope.statusbg1=false;
    $scope.statusbg2=false;
    $scope.status=true;
    $scope.route="javascript:;";
    $scope.zhBlur=function(){
        $scope.xinxi = $filter('filter')($scope.data,$scope.zhanghao,true)||[];
        $scope.statusbg1=true;
        if($scope.xinxi != [] && $scope.zhanghao != undefined){
            $scope.status1={
                'background':'#28DB67'
            }
            $scope.zhStatus=false;
        }else if($scope.zhanghao == undefined){
            $scope.status1={
                'background':'#FF0000'
            }
            $scope.zhStatus=true;
            $scope.text='账号不能为空'
        }else{
            $scope.status1={
                'background':'#FF0000'
            }
            $scope.zhStatus=true;
            $scope.text='当前账号不存在'
        }
    }
    $scope.pwdChange = function(){
        console.log($scope.pwd,$scope.xinxi[0].pwd);
        if($scope.pwd==$scope.xinxi[0].pwd){
            $scope.statusbg2=true;
            $scope.status2={
                'background':'#28DB67'
            }
            $scope.status=false;
            $scope.route="#/home";
        }else{
            $scope.status2={
                'background':'#FF0000'
            }
        }
    }
    $scope.pwdBlur = function(){
        if($scope.pwd != undefined)
        $scope.statusbg2=true;
    }
})