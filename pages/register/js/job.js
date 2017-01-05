/* 
* @Author: Marte
* @Date:   2017-01-04 17:13:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-04 19:43:06
*/
 var mySwiper = new Swiper('.swiper-container',{
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    watchActiveIndex: true
  })
$('.swiper-slide').click(function(){
    $('.swiper-slide').removeClass('hyb-job-active')
    $('.hyb-sex-dui').hide()
    $(this).addClass('hyb-job-active').find('.hyb-sex-dui').show()
})