var look = angular.module('look',[]);
var lookData = [
    'url(pages/look/images/zyp_mr1.png)',
    'url(pages/look/images/zyp_mr2.png)',
    'url(pages/look/images/zyp_mr3.png)',
    'url(pages/look/images/zyp_mr4.png)',
    'url(pages/look/images/zyp_mr5.png)',
    'url(pages/look/images/zyp_mr6.png)',
    'url(pages/look/images/zyp_mr7.png)',
    'url(pages/look/images/zyp_mr8.png)',
    'url(pages/look/images/zyp_mr9.png)',
    'url(pages/look/images/zyp_mr10.png)',
    'url(pages/look/images/zyp_mr11.png)',
    'url(pages/look/images/zyp_mr12.png)'
    ];
look.controller('lookCtrl',function($scope){
    $scope.lookData = lookData;
    $scope.bgFlag=false;
    $scope.lrClick = function(value){
        $scope.bgFlag=value;
    }
})