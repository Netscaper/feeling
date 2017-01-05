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
    $scope.xinxi=[];
    console.log($scope.xinxi)
    $scope.data = localS.getdata();
    $scope.zhStatus=false;
    $scope.status;
    $scope.zhBlur=function(){
        $scope.xinxi = $filter('filter')($scope.data,$scope.zhanghao,true);
        if($scope.xinxi.length){
            $scope.status1={
                'background':'#28DB67'
            }
        }else{
            $scope.status1={
                'background':'#FF0000'
            }
        }
    }
    $scope.pwdBlur = function(){
        console.log($scope.pwd,$scope.xinxi[0].pwd);
        if($scope.pwd==$scope.xinxi[0].pwd){
            $scope.status2={
                'background':'#28DB67'
            }
        }else{
            $scope.status2={
                'background':'#FF0000'
            }
        }
    }
    $scope.zhChange = function(){
        $scope.data.forEach(function(v){
            if(v.name.slice(0,1)==$scope.zhanghao.slice(0,1)){
                $scope.zhStatus=true;
            }
        })
        if($scope.zhanghao.length==0){
            $scope.zhStatus=false;
        }
    }
    $scope.btnClick = function(e){
        console.log(e)
    }
})