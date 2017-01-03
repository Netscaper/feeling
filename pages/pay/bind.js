/* 
* @Author: Marte
* @Date:   2017-01-02 20:27:39
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 14:04:04
*/
var i=0;
$(".hyb-dui").click(function(){
    i++;
    if(i%2){
        $(this).removeClass('hyb-kong');
    }else{
        $(this).addClass('hyb-kong');
    }
})