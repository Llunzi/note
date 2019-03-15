## 1. [css中设置div居中显示的方法](https://jingyan.baidu.com/article/fec7a1e5ddaa051191b4e77b.html)
* CSS盒子模型：由四个属性组成的外边距(margin)、内边距(padding)、边界(border)、内容区(width和height);

## 2. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的
* 标准的CSS盒子模型和低端IE CSS盒子模型不同：宽高不一样
　　标准的css盒子模型宽高就是内容区宽高；<br>
　　低端IE css盒子模型宽高 内边距﹢边界﹢内容区；
* 标准的CSS盒子模型与低版本的盒子模型有什么不同的？<br>
标准的CSS盒子模型的宽度指的是内容区（content）的宽度。 
低版本的IECSS盒子模型的宽度指的是：内容区宽+填充区宽+边界。

## 3. CSS选择符有哪些？哪些属性可以继承？
  * 选择符
  1. id选择器（ # myid）
  2. 类选择器（.myclassname）
  3. 标签选择器（div, h1, p）
  4. 相邻选择器（h1 + p）
  5. 子选择器（ul > li）
  6. 后代选择器（li a）
  7. 通配符选择器（ * ）
  8. 属性选择器（a[rel = "external"]）
  9. 伪类选择器（a:hover, li:nth-child）
* 可继承的样式： font-size font-family color, UL LI DL DD DT;
* 不可继承的样式：border padding margin width height ; 

## 4. CSS优先级算法如何计算

## 5. display有哪些值？说明他们的作用
none：此元素不显示。 <br>
block：将元素显示为块级元素，前后会带换行符。<br> 
inline:默认值，元素会被显示为内联元素，前后没有换行符。<br> 
inline-block:行内块级元素。

## 6. position的值relative和absolute的定位原点是？
relative（相对定位）：定位原点是元素本身所在位置； 
absolute（绝对定位）：定位原点是离自己这一级元素最近的一级position设置为absolute或者relative的父元素的左上角为原点的

## 7. [请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？](https://blog.csdn.net/qq_27064559/article/details/81871675)

## 8. [css多列等高如何实现？](https://www.cnblogs.com/kasmine/p/6498577.html)

## 9. [一个满屏 品 字布局 如何设计?](https://blog.csdn.net/sjinsa/article/details/70903940)

## 10. [经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？](https://blog.csdn.net/zzzheli/article/details/81510370)

## 11. [li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？](https://blog.csdn.net/sjinsa/article/details/70919546)
   
## 12. [为什么要初始化CSS样式?](https://blog.csdn.net/lxcao/article/details/52678973)
   
## 13. absolute的containing block计算方式跟正常流有什么不同？
　无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：<br>
　　　　1、若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；<br>
　　　　2、否则,则由这个祖先元素的 padding box 构成。 如果都找不到，则为 initial containing block。<br>
　　补充：<br>
　　　　1.static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）<br>
　　　　2.absolute: 向上找最近的定位为absolute/relative的元素<br>
　　　　3. fixed: 它的containing block一律为根元素(html/body)，根元素也是initial containing block<br>
   
## 14. CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？
```text
在谷歌浏览器里，使用 collapse 值和使用 hidden 值没有什么区别
在火狐浏览器、Opera和IE11里，使用 collapse 值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置。
清除浮动的方式?
　　.clearfix:after {
　　　　visibility:hidden;
　　　　display:block;
　　　　font-size:0;
　　　　content:" ";
　　　　clear:both;
　　　　height:0;
　　}
　　.clearfix {
　　　　zoom:1;
　　}
```
## 15. [position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？](https://www.cnblogs.com/jackyWHJ/p/3756087.html)
   
## 16. [对BFC规范(块级格式化上下文：block formatting context)的理解？](https://www.jianshu.com/p/fc1d61dace7b)
   
## 17. CSS权重优先级是如何计算的？
   
## 18. [请解释一下为什么需要清除浮动？清除浮动的方式](https://blog.csdn.net/sjinsa/article/details/70932804?utm_source=itdadao&utm_medium=referral)
   
## 19. zoom:1的清楚浮动原理?
   
## 20. 移动端的布局用过媒体查询吗？
   
## 21. 使用 CSS 预处理器吗？喜欢那个？
   
## 22. [CSS优化、提高性能的方法有哪些？](https://blog.csdn.net/sinat_35836870/article/details/53260114)
   
## 23. 浏览器是怎样解析CSS选择器的？
   
## 24. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
   
## 25. margin和padding分别适合什么场景使用？
   
## 26. 抽离样式模块怎么写，说出思路，有无实践经验？
   
## 27. 元素竖向的百分比设定是相对于容器的高度吗？
   
## 28. 全屏滚动的原理是什么？用到了CSS的那些属性？
   
## 29. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？
   
## 30. 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
   
## 31. ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用。
   
## 32. 如何修改chrome记住密码后自动填充表单的黄色背景 ？
   
## 33. 你对line-height是如何理解的？
   
## 34. 设置元素浮动后，该元素的display值是多少？（自动变成display:block）
   
## 35. 怎么让Chrome支持小于12px 的文字？
   
## 36. 让页面里的字体变清晰，变细用CSS怎么做？（-webkit-font-smoothing: antialiased;）
   
## 37. font-style属性可以让它赋值为“oblique” oblique是什么意思？
   
## 38. position:fixed;在android下无效怎么处理？
   
## 39. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）
   
## 40. display:inline-block 什么时候会显示间隙？(携程)
   
## 41. overflow: scroll时不能平滑滚动的问题怎么处理？
   
## 42. 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。
   
## 43. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
   
## 44. 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）
   
## 45. style标签写在body后与body前有什么区别？
   
## 46. 什么是CSS 预处理器 / 后处理器？�
   
## 47. rem布局的优缺点