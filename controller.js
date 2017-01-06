var recom=[
    {
        id:1,
        name:'孙悟空',
        ctitle:'填写Feeling为您的专属定制',
        etitle:'Upload your lovely face',
        title:'请选择您的性别',
        desc:'Please select your profession',
        lis:[
            '男孩子',
            '女孩子'
        ]
    }
]


var cont=angular.module('cont',[]);
cont.controller('recom',function($scope){
    $scope.recom=recom[0];
})
cont.controller('lunbo',function($scope){
    $scope.recom=recom[0];
})
cont.controller('lis',function($scope){
    $scope.recom=recom[0].lis;
    console.log($scope.recom)
})