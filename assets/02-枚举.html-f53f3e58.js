import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-88d002b0.js";const p={},e=t(`<h1 id="枚举enum" tabindex="-1"><a class="header-anchor" href="#枚举enum" aria-hidden="true">#</a> 枚举Enum</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 常量会被转换为当前枚举对象,对象名为常量名</span>
    <span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token constant">GREEN</span><span class="token punctuation">,</span> <span class="token constant">BLUE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 执行输出结果</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Color</span> c1 <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>枚举值必须在枚举类的第一行显式地列出</p></blockquote><p>每个枚举都是通过 Class 在内部实现的，且所有的枚举值都是 public static final 的。上面的枚举类 Color 转化在内部类实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Color</span> <span class="token constant">RED</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Color</span> <span class="token constant">BLUE</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Color</span> <span class="token constant">GREEN</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enum 定义的枚举类默认继承了 java.lang.Enum 类，并实现了 java.lang.Seriablizable 和 java.lang.Comparable 两个接口。</p><p>values(), ordinal() 和 valueOf() 方法位于 java.lang.Enum 类中：</p><ul><li>values() 返回枚举类中所有的值。</li><li>ordinal()方法可以找到每个枚举常量的索引，就像数组索引一样。</li><li>valueOf()方法返回指定字符串值的枚举常量。不存在的会报错 IllegalArgumentException</li><li>重写toString()方法,改变输出的值</li></ul><h1 id="迭代枚举元素" tabindex="-1"><a class="header-anchor" href="#迭代枚举元素" aria-hidden="true">#</a> 迭代枚举元素</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
    <span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token constant">GREEN</span><span class="token punctuation">,</span> <span class="token constant">BLUE</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Color</span> myVar <span class="token operator">:</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myVar<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="枚举类成员" tabindex="-1"><a class="header-anchor" href="#枚举类成员" aria-hidden="true">#</a> 枚举类成员</h1><p>枚举跟普通类一样可以用自己的变量、方法和构造函数，构造函数只能使用 private 访问修饰符，所以外部无法调用。</p><p>枚举既可以包含具体方法，也可以包含抽象方法。 如果枚举类具有抽象方法，则枚举类的每个实例都必须实现它。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">enum</span> <span class="token class-name">Color</span>
<span class="token punctuation">{</span>
    <span class="token constant">RED</span><span class="token punctuation">,</span> <span class="token constant">GREEN</span><span class="token punctuation">,</span> <span class="token constant">BLUE</span><span class="token punctuation">{</span>
         <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">colorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Universal BLUE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    
    <span class="token comment">// 构造函数</span>
    <span class="token keyword">private</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Constructor called for : &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">colorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Universal Color&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span>
<span class="token punctuation">{</span>    
    <span class="token comment">// 输出</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Color</span> c1 <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">RED</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        c1<span class="token punctuation">.</span><span class="token function">colorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Color</span> c2 <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token constant">BLUE</span><span class="token punctuation">;</span>
        c2<span class="token punctuation">.</span><span class="token function">colorInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出</span>
<span class="token class-name">Constructor</span> called <span class="token keyword">for</span> <span class="token operator">:</span> <span class="token constant">RED</span>
<span class="token class-name">Constructor</span> called <span class="token keyword">for</span> <span class="token operator">:</span> <span class="token constant">GREEN</span>
<span class="token class-name">Constructor</span> called <span class="token keyword">for</span> <span class="token operator">:</span> <span class="token constant">BLUE</span>
<span class="token constant">RED</span>
<span class="token class-name">Universal</span> <span class="token class-name">Color</span>
<span class="token class-name">Universal</span> <span class="token constant">BLUE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>enum Type{
    A{
        public String getType() {
            return &quot;A&quot;;
        }
    },B {
        @Override
        public String getType() {
            return &quot;B&quot;;
        }
    },C {
        @Override
        public String getType() {
            return &quot;C&quot;;
        }
    },D {
        @Override
        public String getType() {
            return &quot;D&quot;;
        }
    };

    public abstract String getType();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>带参数的构造函数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">WeekEnum</span> <span class="token punctuation">{</span>

    <span class="token comment">// 因为已经定义了带参数的构造器，所以在列出枚举值时必须传入对应的参数</span>
    <span class="token function">SUNDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期日&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">MONDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">TUESDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">WEDNESDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token function">THURSDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">FRIDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期五&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">SATURDAY</span><span class="token punctuation">(</span><span class="token string">&quot;星期六&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义一个 private 修饰的实例变量</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> date<span class="token punctuation">;</span>

    <span class="token comment">// 定义一个带参数的构造器，枚举类的构造器只能使用 private 修饰</span>
    <span class="token keyword">private</span> <span class="token class-name">WeekEnum</span><span class="token punctuation">(</span><span class="token class-name">String</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义 get set 方法</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDate</span><span class="token punctuation">(</span><span class="token class-name">String</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>date <span class="token operator">=</span> date<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","02-枚举.html.vue"]]);export{k as default};
