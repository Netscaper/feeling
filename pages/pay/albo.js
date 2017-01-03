/* 
* @Author: Marte
* @Date:   2017-01-02 12:59:40
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-03 13:53:32
*/

var mySwiper = new Swiper('.swiper-container',{
  pagination: '.pagination',
  paginationClickable: true,
  centeredSlides: true,
  slidesPerView: 3.57,
  watchActiveIndex: true
})
$('.hyb-btn').click(function(){
    $('.hyb-msk').show()
})
$('.hyb-msk').click(function(e){
    e.preventDefault();
    var mu=e.target||e.srcElement;
    if(mu==$(this)[0]){
         $(this).hide()
    }
})