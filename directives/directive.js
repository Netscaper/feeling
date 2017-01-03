var dir = angular.module('dir',[]);
dir.directive('zypInput',function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:'../tpl/ZypInput/ZypInput.html',
        scope:{
            attr:'=attr'
        },
        link:function(scope){
            console.log(scope.attr) 
        }
    }
})
dir.directive("lxLan",function(){
    return {
        restrict:'ECMA',
        replace:true,
        templateUrl:"../pages/home/item.html",
        scope:{
            data:"=data"
        }
    }
})
dir.directive('order',function(){
    return {
        restrict : "ECMA",
        template :'<li>'+
                    '<div class="hyb-list-left"><img src="../../images/xl.png" height="100%" width="100%" alt="" /></div>'+
                    '<div class="hyb-list-con">'+
                        '<h2>蛋蛋smile表情'+
                           ' <s class="hyb-dian hyb-s1"></s><s class="hyb-dian hyb-s2"></s>'+
                        '</h2>'+
                        '<h3>一个会动会眨眼睛的蛋蛋,在陪你说话呢。</h3>'+
                    '</div>'+
                    '<div class="hyb-list-right"><span>2.00</span><b></b></div>'+
                '</li>',
        replace:true,
        scope:{
            data:"=order"
        }
    };
})