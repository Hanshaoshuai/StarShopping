好1技术访谈：
npm install vue-cli -g    安装vue命令环境

第一种simple
vue init simple vue-deme

第二种webpack   有Eslint代码检查  和单元测试
vue init webpack vue-deme

cnpm install


第三种webpack-simple   没有Eslint代码检查  和单元测试
vue init webpack-simple vue-deme

cnpm install

http://www.jb51.net/article/84973.htm    倾力总结40条常见的移动端Web页面问题解决方案


$("p").find("span")    从所有的段落开始，进一步搜索下面的span元素。与$("p span")相同。


jQuery 代码:                            对于每个匹配的元素所要执行的函数


$("img").each(function(i){					你可以使用 'return' 来提前跳出 each() 循环。

   this.src = "test" + i + ".jpg";
 });
 
 结果:
<img src="test0.jpg" />, <img src="test1.jpg" /> 

在each() 循环里所要执行的函数
$(function(){
	var a = "";
	$(".colorS_s").find("ul").find("li").click(function(){
		$(".colorS_s").each(function(){
			if($(this).find(".another").length > 0 ){
				var a_title = $(this).prev(".colorS").find("p").text();
				var a_id = $(this).find(".another").attr("id_data");
				var a_data = a_title+":"+a_id;
				if(a){
					a += ","+a_data;
				}else{
					a += a_data;
				}
				
			}
		});
		console.log(a);
	});
})
function auto_time(week,time){
	var timer=setInterval(function(){
		var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
		var str="";
		var d=new Date();
		var w=d.getDay();
		var h=d.getHours();
		var m=d.getMinutes();
		var s=d.getSeconds();
		h=h.toString().length<2?"0"+h:h;
		m=m.toString().length<2?"0"+m:m;
		s=s.toString().length<2?"0"+s:s;
		str=h+":"+m+":"+s;
		//console.log(w+"/"+str)//测试是否正确
		if(w == week && str == time){
			alert("现在是"+arr[w]+"，早上"+time+"。")
		}
	},1000)
}
auto_time("3","06:30:00");//一定要是字符串形式


http://yuip076.com/

13483045948
15330078046

什么是CSS hack

http://www.360doc.com/content/14/0828/06/1659610_405244148.shtml
http://git.oschina.net/    码云网
http://192.168.10.100/app/app/?id=42 内网
http://192.168.10.100/app/product/?id=453
http://192.168.10.100/index.php/admin/index/index
http://51jzgou.com/index.php/admin/index/index
   admin  114177920

http://121.196.218.57/app/app/?id=103 外网
http://unicorn25.iteye.com/blog/916504


后台管理模板
http://www.mycodes.net/154/7449.htm



D:\新建文件夹\Desktop\远程资料\远程资料最新\yaf_mmg_512\application\modules\Admin\views\order
http://local.mmg.com/app/app/index.html?id=1
http://my.com/application/modules/Admin/views/order/orderupdate.html
http://my.com/index.php/admin/index/index


账户是90906密码是333333


我:
192.168.6.13 本地测试环境
我:
test.51maimaigo.com 线上测试环境
我:
本地测试环境根目录地址为   /datadisk/wwwroot/mmg
我:
线上测试环境 根目录为   /datadisk/wwwroot/mmg2


用手机去预览 需通过ifconfig、windows是ipconfig查看本机的ip  把localhost换成本机ip同样访问  再通过cli.im网站草料生成二维码手机扫描手机必须统一局域网
ifconfig
ipconfig
"18500281418"


http://web.duanxin123.cn/		上海俊毅软件登录注册  10秒  1300元 两万条
http://web.daiyicloud.com/ 岱亿短信	1200元两万条 长期发送我建议您办理2000套餐 35000条
http://115.28.50.135:8888/logins.html	小狮子短信服务	账号kd107	2万条是1100元
http://web.cr6868.com/default.aspx		创瑞短信商务	18310998379	1300/2万条
http://www.sms9.net/	九天企信王专
http://sms.bdt360.com/frmMain.aspx	北斗星短信平台**
http://web.duanxinwang.cc/default.aspx  短信网 dxwhuaqian  997530
http://web.5c.com.cn/ 美联软通
http://www.xinxunxi.cn/sms/web_17.html	新讯息106短信群发平台
http://dx.sms654.com/main.htm		信朗通讯361062939    361062939
www.my9527.com		九五二七   hzhqkj 密码：hzhqkj123456



https://shixian.com/consultants		实现  兼职
https://cloud.baidu.com/index.html?track=cp:npinzhuan|pf:pc|pp:left|ci:|pu:495	百度云
https://ant.design/index-cn  react pc 组件库


接口管理平台
https://www.eolinker.com/#/share/project/detail?groupID=-1&apiID=172644&shareCode=MvFE3Y&shareToken=$2y$10$QsQ5Aw8jatV2HBfzTPnVDelKvRjTrkyk8WszVDSf6b0EC4buFS~2Fca&shareID=39903
接口管理平台
https://www.eolinker.com/#/home/project/inside/api/list?projectName=%E4%BC%81%E8%9E%8D%E7%9B%B4%E9%80%9A%E8%BD%A6&projectHashKey=pXkyBXBef379c1a04f0fce828851a3b50a0dc2a9a008e9a
https://www.eolinker.com/#/home/project/inside/api/list?groupID=-1&projectName=%E4%BC%81%E8%9E%8D%E7%9B%B4%E9%80%9A%E8%BD%A6&projectHashKey=pXkyBXBef379c1a04f0fce828851a3b50a0dc2a9a008e9a
https://www.eolinker.com/#/share/index?shareCode=MvFE3Y
企融直通车接口管理平台
http://test.qironghome.com:8080/document/api/index

我本人的	AppID(小程序ID)wxf24741fba4eb3cd2
我本人的	AppSecret(小程序密钥)wx51f72fe2e0317442
http://blog.csdn.net/wangsf789/article/details/53419781		微信小程序进行微信支付步骤简述
https://greasyfork.org/zh-CN/scripts	用户脚本下载


http://test.qironghome.com/phpmyadmin/   		企融数据库
http://www.qironghome.com/admin/ 				线上后台管理系统	:qironghome 	Hqian168
http://test.qironghome.com/admin/				测试后台管理系统	:qironghome 	hqqr168
http://test.qironghome.com			   			测试企融融资web页面


微信服务号 公众平台  账号huaqianqrqr@163.com  密码huaqianqr168
huaqianqr@163.com  huaqian999	华千邮箱
阿里测试服务器 root 密码：nS0!53FxMW123
阿里正试服务器 root 密码：nS0!53FxMW


https://www.fir.im/   								发布接口API
developer.apple.com 								发布证书下载
http://www.jianshu.com/p/9d9e3699515e  				iOS开发证书与配置文件的使用
http://ask.dcloud.net.cn/article/152   				iOS证书(.p12)和描述文件(.mobileprovision)申请使用教程
https://zhidao.baidu.com/question/440631981.html  	ios应用程序 怎么上传到appstore
https://itunesconnect.apple.com/					苹果上架官网


chrome://inspect/#devices		真机调试


http://blog.csdn.net/qq_27626333/article/details/51823302	HTML5+规范：Push(管理推送消息功能)
http://www.html5plus.org/doc/zh_cn/contacts.html··			mui获取通讯录
http://www.html5plus.org/doc/zh_cn/nativeui.html			mui弹出系统选择按钮框
http://blog.csdn.net/xiejunna/article/details/53086574		html5 runtime运行环境
http://blog.csdn.net/xiejunna/article/details/53086574		html5 runtime运行环境
http://ask.dcloud.net.cn/article/1349       				Hbuilder集成微信支付教程(简单流程)
http://ask.dcloud.net.cn/article/32							mui设置全屏显示
http://blog.csdn.net/sinat_33713995/article/details/74783768	mui设置沉浸式状态栏
http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.open	Webview模块管理应用窗口界面，实现多窗口的逻辑控制管理操作。通过plus.webview可获取应用界面管理对象。


http://blog.csdn.net/x386277405/article/details/52702627	 js/jquery实现复制、粘贴、剪切触发事件




18357018864
http://www.adobe.com/cn/downloads.html   //编辑器下载网站


scrollTop为滚动条在Y轴上的滚动距离。
clientHeight为内容可视区域的高度。
scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
从这个三个属性的介绍就可以看出来，滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight。（兼容不同的浏览器）


http://www.jb51.net/article/109570.htm							Vue 过渡实现轮播图效果
https://www.cnblogs.com/best/p/8176281.html						前端MVC Vue2学习总结（四）——条件渲染、列表渲染、事件处理器
https://segmentfault.com/a/1190000007474673  					vue播放器使用
https://segmentfault.com/a/1190000008479698  					vue上传图片文件地址；
http://www.jb51.net/article/116915.htm
https://segmentfault.com/q/1010000007566567   					vue上传图片文件地址；
http://www.sojson.com/blog/214.html  							原生上传文件或图片；
http://www.jianshu.com/p/011d308d7dd7   						滚动
https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#		起步   滚动
https://www.v2ex.com/t/341875
http://www.jianshu.com/p/31ad32e7ec13   						滚动插件
http://blog.csdn.net/zjw0742/article/details/77802611  			优化滚动条插件
http://blog.csdn.net/zhaohaixin0418/article/details/71212475    基于vue2写的上拉加载
http://www.jianshu.com/p/31ad32e7ec13  							vue-cli中vue-scroller的详细用法，上拉加载下拉刷新,vue-axios获取数据的详细过程

	
http://www.qqtn.com/article/article_185683_1.html				微信附近小程序怎么申请？微信附近的小程序怎么发布？


https://segmentfault.com/a/1190000010377156						移动端视频播放
https://surmon-china.github.io/vue-video-player/				移动端视频播放
https://segmentfault.com/a/1190000011346597

http://blog.csdn.net/ssisse/article/details/52311713			来获取元素在页面的位置Javascript getBoundingClientRect()
https://www.cnblogs.com/limeiky/p/6179964.html					来获取元素在页面的位置Javascript getBoundingClientRect()
https://blog.csdn.net/prospertu/article/details/50635362		js监听页面的scroll事件



《蚂蚁金服》


https://docs.antfin.com/basement/									解决方案	Basement 为 web 研发提供了多种解决方案，和研发支撑，帮助您开发优质应用。我们包揽了基础性工作，让你可以专注业务。
http://atit.alipay.net/index.php?r=blog/detail&qid=5683				dav-ract学习起步
https://github.com/dvajs/dva										dav-ract学习

http://mobilegwcfg.sit.mayibank.net/serviceList.htm?action=list		所有网关查询	登陆名alibank_admin



http://gitlab.alipay-inc.com/mybank/x/wikis/home								GitLab 学习所有连接	工作涉及到的技术文档、活动案例及权限申请等资料
http://render-dev.site.alipay.net/p/s_dev/activity_collect-S6666538/index#		凤蝶营销活动页面案例总结

https://mp.weixin.qq.com/s/hYjGyIdLK3UCEVF0lRYRCg      				Git常用命令大全，迅速提升你的Git水平
$ git config --global user.name "请输入您的用户名"
$ git config --global user.email "请输入您的邮箱"

我的员工ID为：003000783； 润和软件个人邮箱http://mail.hoperun.com		han_shaoshuai@hoperun.com	Han_shaoshuai123
阿里个人邮箱 https://webmail.alibaba-inc.com/alimail/
https://asset.alibaba-inc.com/workflow/task/auditTask?procInsId=f58767f5-94ff-41c5-bc1f-fe139dd6da35&taskId=2316445855		资产管理平台

https://lark.alipay.com/fengdie										凤蝶开发对外文档

http://gitlab.alipay-inc.com/										欢迎来到GitLab！自己托管的Git管理应用程序。
http://gitlab.alipay-inc.com/mybank-activities/cundidai-activity	GitLab 存抵贷营销活动项目进行中
http://gitlab.alipay-inc.com/mybank/x/issues/17						凤蝶开发 权益互通需求总结

http://gitlab.alipay-inc.com/mybank/x/issues/137					 凤蝶营销活动

https://lark.alipay.com/zefeng.zzf/srwzrv/iw2q6a					存抵贷营销活动交互
https://lark.alipay.com/bankprodtech/vcnq9g/wkylm2					存抵贷旺旺分测试活动系分
alipay.agdscdecision.CustomerLabelQueryService.queryCustomerLabel	存抵贷旺旺分  借口

http://ito.alipay.net/requirementSearchList.htm						技术外包工作管理平台
http://site.alipay.net/iat/open-nebula/jsapi/index.html				JSAPI是支付宝 H5页面通过特定的JS方法调用Native功能。
https://lark.alipay.com/alipay_promo/rb9gvl/usz1dq					promoprod RPC接口接入文档

https://fengdie.alipay.com/space/147987006248648606045431815799/approval			凤蝶建站平台
http://fengdie-dev.alipay.net/site/home												凤蝶建站平台
http://web.npm.alibaba-inc.com/package/@alipay/bkspm				网商银行应用程序安装工具
https://lark.alipay.com/mybank-mobile/loan/zmf2q1					sudo	IOS  hpm（iOS模拟器调试 及使用命令）工具使用介绍	首先安装Xcode
https://lark.alipay.com/bkloantradeteam/iterativedoc/db7xgu			0927活动开发联调计划
http://site.alipay.net/mybank-h5/mybank-nebuladoc/launch_params.html	网商银行容器文档
http://dev.lab.alipay.net/DataCenter/index.php?r=user/customer			网商银行后台注册管理	用户操作-创建认证用户
encodeURIComponent('showToolBar=YES&showTitleBar=NO')					控制台编译

下载 iHosts		开发测试 使用localhost  
127.0.0.1  localhost
255.255.255.255  broadcasthost
::1             localhost

127.0.0.1 h5app.mybank.net
127.0.0.1 local.alipay.net 
127.0.0.1 local.mybank.net
127.0.0.1 y.alipay.net
127.0.0.1 y.mayibank.net
127.0.0.1 local.alipay.net

127.0.0.1 mybank.mayibank.net

110.76.8.195 staticweb.alipay.com

访问 => http://local.alipay.net:8001


http://h5.alipay.net/tool/urlkit/index.html							支付宝Scheme生成器s

15942280414	a111111	stable环境 支付宝测试使用账号


https://lark.alipay.com/tracert/doc/adxgfa							spm埋点指南
https://rmsportal.alipay.com/groups									蜻蜓-静态文件云平台
https://tinypng.com/												智能PNG和JPEG压缩
https://github.com/amfe/lib-flexible								一个移动端的适配方案(flexible方案)


http://gitlab.alipay-inc.com/bkassetmore/bkassetmore-webview		钱多多项目gitlab



用之前的调用方法获取本地mock数据获取不到 没法弄  这个方法之前他们没有mock过数据    用rpc都可以获取到的  本地浏览是获取本地数据在模拟器上只要是在支付宝或网商app上浏览都是获取线上的数据