import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as t,e as s,b as n}from"./app-88d002b0.js";const c={},i=s(`<h1 id="注解-annotation" tabindex="-1"><a class="header-anchor" href="#注解-annotation" aria-hidden="true">#</a> 注解 Annotation</h1><h2 id="jdk内置注解" tabindex="-1"><a class="header-anchor" href="#jdk内置注解" aria-hidden="true">#</a> JDK内置注解</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span> <span class="token comment">//修饰方法,表示为重写</span>
<span class="token annotation punctuation">@Deprecated</span> <span class="token comment">//修饰方法，属性，类,表示废弃</span>
<span class="token annotation punctuation">@FunctionalInterface</span> <span class="token comment">//函数式接口</span>
<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;范围&quot;</span><span class="token punctuation">)</span> <span class="token comment">//压制警告</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元-meta-注解" tabindex="-1"><a class="header-anchor" href="#元-meta-注解" aria-hidden="true">#</a> 元(meta)注解</h2><p>解释注解的注解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Target(value={ElementType.xxx}) //用于描述注解的使用范围:TYPE类,FIELD字段
@Retention(value=RetentionPolicy.xxx) //表示需要在什么级别保存该注释信息，用于描述注解的生命周期（SOURCE&lt;CLASS&lt; RUNTIME）
@Document //说明该注解将被包含在javadoc中
@lnherited //说明子类可以继承父类中的该注解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解" aria-hidden="true">#</a> 自定义注解</h2>`,7),l=n("ul",null,[n("li",{定义内容:""},"@interface用来声明一个注解，格式：public @interface 注解名"),n("li",null,"其中的每一个方法实际上是声明了一个配置参数."),n("li",null,"方法的名称就是参数的名称."),n("li",null,"返回值类型就是参数的类型（返回值只能是基本类型，Class，String，enum,注解,以上类型的数组）."),n("li",null,"可以通过default来声明参数的默认值"),n("li",null,"如果只有一个参数成员，一般参数名为value,并且使用时value可不写"),n("li",null,"注解元素必须要有值，我们定义注解元素时，经常使用空字符串，0作为默认值.")],-1),p=s(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">MyAnnotation</span><span class="token punctuation">{</span>
    <span class="token comment">//参数类型 参数名 ();</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;默认值&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">schools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token annotation punctuation">@Aspect</span>
配合
<span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.demo.MyAnnotation)&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//表示匹配路径为com.demo.MyAnnotation的注解执行AOP业务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="反射-reflection" tabindex="-1"><a class="header-anchor" href="#反射-reflection" aria-hidden="true">#</a> 反射 reflection</h1><p>反射机制是 Java 语言提供的一种基础功能，赋予程序在运行时自省（introspect，官方用语）的能力。通过反射我们可以直接操作类或者对象，比如获取某个对象的类定义，获取类声明的属性和方法，调用方法或者构造对象，甚至可以运行时修改类定义。</p><h2 id="获取class对象" tabindex="-1"><a class="header-anchor" href="#获取class对象" aria-hidden="true">#</a> 获取Class对象</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Class.forName(&quot;全类名&quot;);
类名.class;
对象.getClass();
包装类.TYPE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>同一个字节码文件(.class)在一次程序运行过程中，只会被加载一次，不论通过哪一种方式获取的Class对象都是同一个。</p></blockquote><h2 id="class类的方法" tabindex="-1"><a class="header-anchor" href="#class类的方法" aria-hidden="true">#</a> Class类的方法</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">Class</span> forName（<span class="token class-name">String</span> name）<span class="token comment">//返回指定类名name的Class对象</span>
<span class="token class-name">Object</span> newInstance（）<span class="token comment">//调用无参构造函数，返回Class对象的一个实例</span>
getName（）<span class="token comment">//返回此Class对象所表示的实体（类，接口，数组类或void）的全类名。</span>
<span class="token function">getSimpleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取简单的类名</span>
<span class="token class-name">Class</span> getSuperClass（）<span class="token comment">//返回当前Class对象的父类的Class对象</span>
    <span class="token comment">// 如果此 Class 表示Object 类、一个接口、一个基本类型或 void，则返回 null</span>
getinterfaces（）<span class="token comment">//获取当前Class对象的接口</span>
<span class="token class-name">ClassLoader</span> getClassLoader（）<span class="token comment">//返回该类的类加载器</span>
<span class="token class-name">Constructor</span><span class="token punctuation">[</span><span class="token punctuation">]</span> getConstructors（）<span class="token comment">//获取该类所有的public的构造函数</span>
<span class="token class-name">Method</span> getMothed（<span class="token class-name">String</span> name，<span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token punctuation">.</span>T）<span class="token comment">//返回只能方法名和参数类型的方法</span>
<span class="token function">getMotheds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取本类和父类的所有public方法</span>
<span class="token function">getDeclaredMotheds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取本类的所有方法</span>
<span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//返回public的属性</span>
<span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token punctuation">]</span> getDeclaredFields（）<span class="token comment">//返回所有属性</span>

<span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> 对象<span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span> 参数<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行方法</span>
<span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//允许操作private的字段,方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//根据指定构造器创建对象</span>
constructor<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
constructor<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>方法参数<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">//通过反射执行指定对象的指定方法</span>
mothed<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getDeclaredMothed</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token punctuation">.</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
mothed<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//允许操作private方法</span>
mothed<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>对象<span class="token punctuation">,</span>方法参数值<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token comment">//通过反射操作指定对象的指定字段</span>
field<span class="token operator">=</span>clazz<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span><span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token punctuation">.</span>T<span class="token punctuation">)</span><span class="token punctuation">;</span>
field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//允许操作private字段</span>
field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>对象<span class="token punctuation">,</span>字段值<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取方法泛型信息" tabindex="-1"><a class="header-anchor" href="#获取方法泛型信息" aria-hidden="true">#</a> 获取方法泛型信息</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取方法参数类型
Type[] genericParameterTypes=mothed.getGenericParameterTypes();
for(Type genericParameterTtpe : genericParameterTypes){
    //如果参数类型是泛型
   if(genericParameterTtpe instanceof ParameterizedType){
        //获取泛型
        Type[] actualTpyeArguments = genericParameterTtpe.getActualTpyeArguments()
   }
}

//获取方法返回值类型
Type genericReturnType= mothed.getGenericReturnType();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取注解信息" tabindex="-1"><a class="header-anchor" href="#获取注解信息" aria-hidden="true">#</a> 获取注解信息</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Annotation[] annotations= clazz.getAnnotations(); //获取全部的注解

annotation=field.getAnnotation(注解名.class);//获取字段上指定注解
annotation=clazz.getAnnotation(注解名.class);//获取类上指定注解
annotation.注解属性(); //获取注解属性的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[i,l,p];function u(d,r){return e(),t("div",null,o)}const k=a(c,[["render",u],["__file","10-注解与反射.html.vue"]]);export{k as default};
