import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as s}from"./app-88d002b0.js";const i={},t=s(`<h1 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h1><p>异常用于解决一下程序无法掌握但又必须面对的情况.</p><h2 id="异常处理原则" tabindex="-1"><a class="header-anchor" href="#异常处理原则" aria-hidden="true">#</a> 异常处理原则</h2><ol><li>尽量不要捕获类似 Exception 这样的通用异常，而是应该捕获特定异常</li><li>不要生吞（swallow）异常,捕获异常后不要不做任何操作或直接e.printStackTrace();输出堆栈轨迹信息</li><li>try-catch 代码段会产生额外的性能开销，它往往会影响 JVM 对代码进行优化，所以建议仅捕获有必要的代码段，尽量不要一个大的 try 包住整段的代码</li><li>Java 每实例化一个 Exception，都会对当时的栈进行快照，这是一个相对比较重的操作。如果发生的非常频繁，这个开销可就不能被忽略了。</li><li>父类能够捕获子类异常</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Annoyance extends Exception {}
class Sneeze extends Annoyance {}
 
class Human {
 
	public static void main(String[] args) 
		throws Exception {
		try {
			try {
				throw new Sneeze();
			} 
			catch ( Annoyance a ) {
				System.out.println(&quot;Caught Annoyance&quot;);
				throw a;
			}
		} 
		catch ( Sneeze s ) {
			System.out.println(&quot;Caught Sneeze&quot;);
			return ;
		}
		finally {
			System.out.println(&quot;Hello World!&quot;);
		}
	}
}

输出:
Caught Annoyance
Caught Sneeze  //使用的是父类的引用，但实际上是子类的对象,所以可以捕获
Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="运行时异常" tabindex="-1"><a class="header-anchor" href="#运行时异常" aria-hidden="true">#</a> 运行时异常</h1><ul><li>ArithmeticException（算术异常）</li><li>ClassCastException （类转换异常）</li><li>IllegalArgumentException （非法参数异常）</li><li>IndexOutOfBoundsException （下标越界异常）</li><li>NullPointerException （空指针异常）</li></ul><h1 id="非运行时异常" tabindex="-1"><a class="header-anchor" href="#非运行时异常" aria-hidden="true">#</a> 非运行时异常</h1><ul><li>InterruptedException: 中断异常</li><li>ClassNotFoundException: 类未找到</li></ul><h1 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h1><ul><li>NoClassDefFoundError: 类已加载但运行时找不到</li></ul><h1 id="检查异常与非检查异常" tabindex="-1"><a class="header-anchor" href="#检查异常与非检查异常" aria-hidden="true">#</a> 检查异常与非检查异常</h1><ul><li>检查异常: 编译器要求你必须处置的异常。 <ul><li>如IOException、SQLException等</li></ul></li><li>非检查异常: RuntimeException与其子类，以及错误（Error）</li></ul><h1 id="try-with-resources-和-multiple-catch" tabindex="-1"><a class="header-anchor" href="#try-with-resources-和-multiple-catch" aria-hidden="true">#</a> try-with-resources 和 multiple catch</h1><p>JDK7提供的try-catch-finally简洁版,用于自动关闭连接,更好处理异常,减少编码量等</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span><span class="token punctuation">(</span><span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//try-with-resources会自动关闭流对象</span>
    <span class="token comment">//do some</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> <span class="token operator">|</span> <span class="token class-name">XException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//multiple catch</span>
    <span class="token comment">//....</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="自定义异常" tabindex="-1"><a class="header-anchor" href="#自定义异常" aria-hidden="true">#</a> 自定义异常</h1><ul><li>自定义非检查异常: extends RuntimeException</li><li>自定义检查异常: extends Exception</li></ul><p>自定义异常的考虑</p><ul><li>是否需要定义成 Checked Exception，因为这种类型设计的初衷更是为了从异常情况恢复，作为异常设计者，我们往往有充足信息进行分类。</li><li>在保证诊断信息足够的同时，也要考虑避免包含敏感信息，因为那样可能导致潜在的安全问题。</li></ul>`,20),l=[t];function c(d,r){return e(),a("div",null,l)}const p=n(i,[["render",c],["__file","01-异常.html.vue"]]);export{p as default};
