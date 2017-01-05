var dir = angular.module('dir',[]);
dir.directive('zypInput',function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:'../tpl/ZypInput/ZypInput.html',
        scope:{
            attr:'=attr'
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
<<<<<<< HEAD

=======
>>>>>>> 382af616c0e828a73d341965596c9a4169adf74b
dir.directive("lhyssjg",function(){
    return {
        restrict:'ECMA',
        // replace:true,
        templateUrl:"../tpl/lhyssjg/lhyssjg.html",
        scope:true
<<<<<<< HEAD
    }    
})
=======
    }   
}) 

>>>>>>> 382af616c0e828a73d341965596c9a4169adf74b
