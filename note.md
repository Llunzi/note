## 1. 浏览器内核

主要分成两个部分：渲染引擎(Render Engine)和JS引擎。

渲染引擎：负责取得网页的内容(html,xml和图像等)，整理讯息(例如假如css)，以及计算网页的显示方式，然后输出到显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不同。所有网页浏览器、电子邮件客户端以及它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎：解析和执行JavaScript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向与只指渲染引擎。

浏览器内核
Trident内核：IE，360，搜过浏览器；
Gecko内核：Netscape6及以上版本，
Presto内核：Opera
Blink内核：Opera；
Webkit内核：Safari，Chrome

## 2. 'autocomplete="off"'在Chrome中不起作用解决方案
autocomplete=”off” 
autocomplete=”new-password”

## 3. [如何在页面上实现一个圆形的可点击区域](https://www.cnblogs.com/guorange/p/7155164.html)

## 4. CSS优先级算法
* 行内样式优先级specificity值为1,0,0,0 高于外部定义
  
* 按CSS代码中出现的顺序决定，后者CSS样式居上

* !important声明specificity值优先级最高

* 由继续而得到的样式没有specificity的计算，它低于一切其他规则（比如全局选择符*定义规则）

	get extension()
	{
		let isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows"),
			isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"),
			extension = "";
		
		if(isWin)
		{
			extension = ".exe";
		}
		else if(isMac)
		{
			extension = ".pkg";
		}
		
		return extension;
	}

## 5. Doctype作用？严格模式与混杂模式如何区分？它们有何差异？