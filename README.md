# feeling社交APP
## 项目：
 名称：
		feeling社交APP<br/>
 时间：
 		完成时间：
 参与人员：
    张雅鹏、雷鸿燕、胡永彪、杨超、苏露燕<br/>
## 兼容要求
    兼容各种屏幕尺寸的手机，和手机端浏览器
## 性能要求 
1. ⾸首屏加载时⻓
2. DOM加载时⻓
3. ⻚页⾯面⽩白屏时⻓
## 统一使用GitHub
1. 各自操作各自的文件，防止冲突
2. 如果有冲突，先删掉本地clone文件，重新克隆
## 项目完成要求
	严格按照PSD稿的尺寸、样式来进行页面的布局。
## 使用H5页面进行布局
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
## 文件夹结构
/-------------------<br/>
	|--- images/  所有图片<br/>
	|<br/>
	|--- js/      库 zepto.js  Swiper.js  rem.js  js文件<br/>
	|<br/>
	|--- css/     基础样式 normalize.css  css文件<br/>
	|<br/>
	|--- index.html<br/>
	|<br/>
	|--- **.html<br/>
	|<br/>
## 规范
####命名规范
	所有的img、js、css 文件 都以自己姓名缩写为前缀如   zyp_index.css <br/>
	多人开发同一个页面，css选择器请加自己姓名缩写前缀防止冲突<br/>
	图片，选择器 名称命名均采用类似 zyp-logo-max.jpg   .zyp-max-nav方式命名<br/>
	注意： 文件名字统一采用下划线     zyp_index.css <br/>
####rem.js
		/**
		 * Created by 张雅鹏 on 2016/12/25.
		 */
		/*
				designWidth 设计稿的宽度
				fontsize 自定义字体大小
				relWidth 实际屏幕宽度
				relFontSize 字体实际尺寸
				当屏幕尺寸变化时执行该函数
				window.onresize=function(){}
		 */
		function fontsize(designWidth){
				function fontsizeRel(){
						var fontSize=100;
						var relWidth=document.documentElement.clientWidth;
						var relFontSize=fontSize*relWidth/designWidth;
						document.getElementsByTagName("html")[0].style.fontSize=relFontSize+"px";
				}
				fontsizeRel();
				window.onresize=fontsizeRel;
		}
	设计稿100px = 逻辑像素50px <br/>
	1rem = 50px <br/>
**例如**：设计稿量的尺寸为100px，换算成rem为1rem <br/>
####文件引入
js公共文件放在头部
各自写的js文件放在尾部，body下面
####图片
公共的图片放在images下，其他的各自在images下建各自的文件夹放图片
####注释问题
	开发过程中,在数据接口处请加好注释说明，方便后台人员套模板 <br/>
**注释样式**
    <!-- nav start -->
    <!-- nav end -->
## 网页内宽
	按照设计稿的尺寸进行布局
## 任务分配 
----网页头部、banner和尾部不用做，分页不用做
	张雅鹏 ：<br/>
	雷鸿燕 ：<br/>
	胡永彪 ：<br/>
	杨超   ：<br/>
	苏露燕 ：<br/>
	个人独立完成所负责部分，问题相互讨论完成。<br/>
<br/>
	合作愉快！
	



