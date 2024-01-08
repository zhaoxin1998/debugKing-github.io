import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as d}from"./app-88d002b0.js";const s={},l=d(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.  匹配除换行符以外的任意字符
[] 匹配所包含的任意一个字符。
    [aeiou] 匹配aeiou任意一个
    [0-9]、[a-z]  范围匹配
    ^ 在 [ ] 中是取非操作
    在 [ ] 中 . 不是元字符

+ 匹配 1 个或者多个字符
* 匹配 0 个或者多个字符
? 匹配 0 个或者 1 个字符

{n} 匹配 n 个字符
{m,n} 匹配 m~n 个字符
{m,} 至少匹配 m 个字符

# 分组
() 子表达式,子表达式的内容可以当成一个独立元素表示一个分组，即可以将它看成一个字符，并且使用 * 等元字符。
(\\w)(\\w) 自动命名分组，第一个小括号是分组1，第二个小括号是分组2
(?&#39;Word&#39;\\w+)) 表示定义了一个叫做Word的分组
(?&lt;Word&gt;\\w+)) 表示定义了一个叫做Word的分组
(?:\\w+) 匹配exp,不捕获匹配的文本，也不给此分组分配组号
# 后向引用
\\1 表示分组1匹配的文本
\\k&lt;Word&gt; 表示分组Word匹配的文本


\\ 转义字符, /需要进行转义才能匹配到
| 指明两项之间的一个选择。

\\b 匹配单词的开始或结束
^ 匹配字符串的开始
$ 匹配字符串的结束
\\G 上一个匹配的结尾（本次匹配开始）
\\A 字符串开头(类似^，但不受处理多行选项的影响)
\\Z 字符串结尾或行尾(不受处理多行选项的影响)
\\z 字符串结尾(类似$，但不受处理多行选项的影响)

\\f	换页符
\\n	换行符
\\r	回车符
\\t	制表符
\\v	垂直制表符

\\d	数字字符，等价于 [0-9]
\\D	非数字字符，等价于 [^0-9]

\\w	大小写字母，下划线和数字，等价于 [a-zA-Z0-9_]
\\W	对 \\w 取非

\\s	任何一个空白字符，等价于 [\\f\\n\\r\\t\\v]
\\S	对 \\s 取非

# 零宽断言（正向和负向）:匹配字符的时候再添加一些定位条件，使匹配更精准。
\\w+(?=ing) 匹配以ing结尾的多个字符（不包括ing）
\\w+(?!ing) 匹配不是以ing结尾的多个字符
(?&lt;=re)\\w+ 匹配以re开头的多个字符（不包括re）
(?&lt;!re)\\w+ 匹配不是以re开头的多个字符
(?&lt;=\\s)\\d+(?=\\s) 匹配两边是空白符的数字，不包括空白符

# 懒惰(匹配尽可能短的字符串)模式的启用只需在重复元字符之后加?既可。
    # 正则表达式有另一条规则，比懒惰／贪婪规则的优先级更高：最先开始的匹配拥有最高的优先权
*? 重复任意次，但尽可能少重复
+? 重复1次或更多次，但尽可能少重复
?? 重复0次或1次，但尽可能少重复
{n,m}? 重复n到m次，但尽可能少重复
{n,}? 重复n次以上，但尽可能少重复

# 在表达式里插记号的方式来启用绝大多数的模式，在正则的哪里插入，就从哪里启用。
(?i)：忽略大小写(CASE_INSENSITIVE)
(?x)：忽略空格字符(COMMENTS)
(?s)：.匹配任意字符，包括换行符（DOTALL）
(?m)：多行模式（MULTILINE）
(?u)：对Unicode符大小写不敏感（UNICODE_CASE），必须启用CASE_INSENSITIVE
(?d)：只有&#39;\\n&#39;才被认作一行的中止（UNIX_LINES）

# 平衡组/递归匹配:用于匹配嵌套层次结构，常用于匹配HTML标签（当HTML内容不规范，起始标签和结束标签数量不同时，匹配出正确配对的标签）
(?&#39;group&#39;\\w) 捕获的分组（\\w匹配到的内容）命名为group，并压入堆栈
(?&#39;-group&#39;\\w) 捕获分组（\\w匹配到的内容）后，弹出group分组栈的栈顶内容（最后压入的捕获内容），堆栈本来为空，则本分组的匹配失败
(?(group)yes|no) 如果group栈非空匹配表达式yes，否则匹配表达式no
(?!) 零宽负向先行断言，由于没有后缀表达式，试图匹配总是失败

# 注释
(?#comment)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h1><p>标记也称为修饰符，正则表达式的标记用于指定额外的匹配策略。</p><p>标记不写在正则表达式里，标记位于表达式之外，格式如下：<code>/pattern/flags</code></p><table><thead><tr><th>修饰符</th><th>含义</th><th>描述</th></tr></thead><tbody><tr><td>i</td><td>ignore - 不区分大小写</td><td>将匹配设置为不区分大小写，搜索时不区分大小写: A 和 a 没有区别。</td></tr><tr><td>g</td><td>global - 全局匹配</td><td>查找所有的匹配项。</td></tr><tr><td>m</td><td>more - 多行匹配</td><td>使边界字符 ^ 和 $ 匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。</td></tr><tr><td>s</td><td>特殊字符圆点 . 中包含换行符 \\n</td><td>默认情况下的圆点 . 是 匹配除换行符 \\n 之外的任何字符，加上 s 修饰符之后, . 中包含换行符 \\n。</td></tr></tbody></table><h1 id="java使用正则" tabindex="-1"><a class="header-anchor" href="#java使用正则" aria-hidden="true">#</a> Java使用正则</h1><p><code>java正则表达式中 &quot;\\\\&quot; 代表一个正则&quot;\\&quot;,所以正则中&quot;\\\\\\\\&quot;代表一个真正的&quot;\\&quot; </code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Pattern p = Pattern.compile(&quot;.*\\\\d+.*&quot;); //创建指定规则的正则对象
Matcher m = p.matcher(content); //获取matcher对象
boolean b = m.matches() //判断字符串是否匹配规则
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),v=[l];function a(r,t){return i(),e("div",null,v)}const m=n(s,[["render",a],["__file","13-正则表达式.html.vue"]]);export{m as default};
