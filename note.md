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

## 5. 获取后缀名
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

## 6. Doctype作用？严格模式与混杂模式如何区分？它们有何差异？
* Doctype作用是什么？<br/>

 > <!DOCTYPE>声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。<!DOCTYPE>声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签。

* 严格模式与混杂模式如何区分？它们有何意义？

> 严格模式：又称标准模式，是指浏览器按照 W3C 标准解析代码。<br/>
混杂模式：又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。

* 如何区分：浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。

> 1、如果文档包含严格的 DOCTYPE ，那么它一般以严格模式呈现。（严格 DTD ——严格模式） <br>
  2、包含过渡 DTD 和 URI 的 DOCTYPE ，也以严格模式呈现，但有过渡 DTD 而没有 URI （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现。（有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式） <br>
  3、DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现。（DTD不存在或者格式不正确——混杂模式）<br>
  4、HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别，HTML5 有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。（ HTML5 没有严格和混杂之分）

* 意义：严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。

## 7. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

* 块级元素：
\<address>------定义文档或文章的作者/拥有者的联系信息<br>
\<div>------盒子模型<br>
\<dl>------定义列表<br>
\<dt>------定义列表中的项目<br>
\<dd>------列表单元格<br>
\<form>------为用户输入创建 HTML 表单<br>
\<h1>——-\<h6>------\<h1> 定义最大的标题。\<h6> 定义最小的标题\<br>
\<hr>------创建一条水平线<br>
\<fieldset>------将表单内的相关元素分组<br>
\<legend>------为 fieldset元素定义标题<br>
\<noframes>------为那些不支持框架的浏览器显示文本<br>
\<noscript>------脚本未被执行时的替代内容<br>
\<ol>------有序列表<br>
\<ul>------无序列表<br>
\<li>------列表项<br>
\<p>------段落<br>
\<pre>------定义预格式化的文本<br>
\<table>------定义表格<br>
\<caption>------定义表格标题<br>
\<thead>------表格头部<br>
\<tbody>------表格主体<br>
\<tr>------表格行<br>
\<th>------表头单元格<br>
\<td>------表格标准单元格<br>
\<tfoot>------表格底部<br>
* 行内元素：<br>
\<a>------超链接<br>
\<abbr>------对缩写进行标记<br>
\<b>------加粗<br>
\<bdo>------文本方向变反<br>
\<big>------大号字体<br>
\<br>------换行<br>
\<cite>------定义作品标题<br>
\<code>------计算机代码文本<br>
\<dfn>------定义项目<br>
\<em>------强调<br>
\<i>------斜体<br>
\<img>------图片<br>
\<input>------文本框<br>
\<kbd>------键盘文本<br>
\<label>------input定义标记<br>
\<q>------短引用<br>
\<samp>------样本文本<br>
\<select>------创建选择列表<br>
\<small>------小号字体<br>
\<span>------配合其他元素使用<br>
\<strong>------语气更强的强调<br>
\<sub>------下标<br>
\<sup>------上标<br>
\<textarea>------文本域<br>
\<tt>------类似打字机或等宽的文本效果<br>
\<var>------定义变量，配合<code>使用<br>
* 空元素（void）：<br>
\<area>------图像映射中的区域<br>
\<base>------规定默认地址和目标<br>
\<col>------对列定义属性值<br>
\<command>------调用命令<br>
\<embed> ------嵌入内容<br>
\<link> ------链接外部资源<br>
\<meta>------提供页面元信息<br>
\<param>------为\<object>和\<applet>提供参数<br>
\<source>------为\<video>和\<audio>定义资源<br>
\<track>------为\<video>和\<audio>提供外部轨道<br>
\<wbr>------单词换行时机<br>

## 8. 页面导入样式时，使用link和@import有什么区别
link链接方式： 
```javascript
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```
@import导入方式：
```javascript
<style> 
@import url(style.css); 
</style>
``` 
* 区别：
> 1、link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS<br>
  2、页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载<br>
  3、import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题

## 9. 简述一下你对HTML语义化的理解
> 1、用正确的标签做正确的事情。<br>
  2、html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;<br>
  3、即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;<br>
  4、搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;<br>
  5、使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。<br>

