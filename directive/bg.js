/* 
* @Author: Marte
* @Date:   2016-12-29 14:54:01
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-29 15:34:47
*/
app.directive("Bg", function() {
    return {
        restrict : "ECMA",
        template : "tpl/bg.html",
        scope:{
            bg:'=bg',
        },
    };
});
