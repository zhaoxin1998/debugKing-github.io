import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-88d002b0.js";const t={},p=e(`<h1 id="日期与时间" tabindex="-1"><a class="header-anchor" href="#日期与时间" aria-hidden="true">#</a> 日期与时间</h1><h2 id="calendar对象获取日历" tabindex="-1"><a class="header-anchor" href="#calendar对象获取日历" aria-hidden="true">#</a> Calendar对象获取日历</h2><ul><li>Calendar是Java中常用的时间处理工具之一,它提供了很多日历类型常见方法.</li></ul><h4 id="_1-创建calendar对象" tabindex="-1"><a class="header-anchor" href="#_1-创建calendar对象" aria-hidden="true">#</a> 1.创建Calendar对象</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 		<span class="token comment">//Calendar是一个抽象类，不能直接创建对象，可以通过getInstance()方法获取实例</span>
        <span class="token class-name">Calendar</span> calendar <span class="token operator">=</span> <span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//默认是当前日期</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-常用方法" tabindex="-1"><a class="header-anchor" href="#_2-常用方法" aria-hidden="true">#</a> 2.常用方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> 		    <span class="token comment">//2.1 获取年</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;年：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">YEAR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.2 获取月</span>
        <span class="token comment">//月份从0开始，0表示1月份，1表示2月份，以此类推</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;月：&quot;</span><span class="token operator">+</span><span class="token punctuation">(</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MONTH</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.3 获取日</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;日：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_MONTH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.4 获取时</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;时：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">HOUR_OF_DAY</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.5 获取分</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;分：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.6 获取秒</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;秒：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">SECOND</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.7 获取星期几</span>
        <span class="token comment">//星期日：1，星期一：2，星期二：3，星期三：4，星期四：5，星期五：6，星期六：7</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;星期几：&quot;</span><span class="token operator">+</span>calendar<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Calendar</span><span class="token punctuation">.</span><span class="token constant">DAY_OF_WEEK</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

输出： 
        年：<span class="token number">2024</span>
        月：<span class="token number">1</span>
        日：<span class="token number">8</span>
        时：<span class="token number">15</span>
        分：<span class="token number">51</span>
        秒：<span class="token number">35</span>
        星期几：<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date对象" tabindex="-1"><a class="header-anchor" href="#date对象" aria-hidden="true">#</a> Date对象</h2><ul><li>java.util 包提供了 Date 类来封装当前的日期和时间</li><li>Date 类提供两个构造函数来实例化 Date 对象-&gt;Date( ) Date(long millisec)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>		<span class="token class-name">Date</span> date2<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
        <span class="token comment">//参数表示1970-01-01 00:00:00到指定时间的毫秒数</span>
        <span class="token class-name">Date</span> date1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">14686531L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span><span class="token punctuation">;</span>
输出：
        <span class="token class-name">Mon</span> <span class="token class-name">Jan</span> <span class="token number">08</span> <span class="token number">16</span><span class="token operator">:</span><span class="token number">12</span><span class="token operator">:</span><span class="token number">34</span> <span class="token constant">CST</span> <span class="token number">2024</span>
        <span class="token class-name">Thu</span> <span class="token class-name">Jan</span> <span class="token number">01</span> <span class="token number">12</span><span class="token operator">:</span><span class="token number">04</span><span class="token operator">:</span><span class="token number">46</span> <span class="token constant">CST</span> <span class="token number">1970</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-常用方法" tabindex="-1"><a class="header-anchor" href="#_1-常用方法" aria-hidden="true">#</a> 1.常用方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>		
        <span class="token keyword">boolean</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token class-name">Date</span> when<span class="token punctuation">)</span> <span class="token comment">//测试此日期是否在指定日期之后。</span>
       
        <span class="token keyword">boolean</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">Date</span> when<span class="token punctuation">)</span> <span class="token comment">//测试此日期是否在指定日期之前。</span>
 
        <span class="token keyword">long</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//返回一个表示此对象表示的日期的毫秒数。</span>
        
        <span class="token class-name">Date</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//返回一个表示此 Calendar 时间值（从历元到现在的毫秒偏移量）的 Date 对象。</span>
       
        <span class="token keyword">void</span> <span class="token function">setTime</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span>  <span class="token comment">//用来对 Calendar 的时间值进行设置。</span>
        
        <span class="token keyword">long</span> <span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//返回此 Calendar 的时间值（从历元至现在的毫秒偏移量）。</span>
       
        <span class="token keyword">void</span> <span class="token function">setTimeInMillis</span><span class="token punctuation">(</span><span class="token keyword">long</span> millis<span class="token punctuation">)</span>  <span class="token comment">//用来对 Calendar 的时间值进行设置。</span>
      
        <span class="token keyword">long</span> <span class="token function">getTimeInMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">//返回此 Calendar 的时间值，以毫秒为单位。</span>
        
        <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">)</span> <span class="token comment">//返回此 Calendar 的时间值，以毫秒为单位。</span>
        
        <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> field<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token comment">//用给定的日历字段值设置日历的当前时间值。</span>
        
        <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> year<span class="token punctuation">,</span> <span class="token keyword">int</span> month<span class="token punctuation">,</span> <span class="token keyword">int</span> date<span class="token punctuation">)</span> <span class="token comment">//用给定的日历字段值设置日历的当前时间值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-simpledateformat-格式化" tabindex="-1"><a class="header-anchor" href="#_2-simpledateformat-格式化" aria-hidden="true">#</a> 2.SimpleDateFormat 格式化</h3><ul><li>进行date类日期的加,减,比较操作可以将其转换为毫秒级的long类型(时间戳)在 进行操作</li><li>SimpleDateFormat 不是线程安全的,可将 其限制在 ThreadLocal 中.也可 使用joda-time库(jdk8将其引入并修改为java.time包)</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>            <span class="token class-name">Date</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
            <span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> time1 <span class="token operator">=</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//date转格式化stirng</span>
            <span class="token class-name">Date</span> time <span class="token operator">=</span>dateFormat<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>time1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//String转Date</span>
            time<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//时间转换成毫秒级的long型（时间戳）</span>

            <span class="token comment">// 计算日期间隔</span>
            <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDatePoor</span><span class="token punctuation">(</span><span class="token class-name">Date</span> endDate<span class="token punctuation">,</span> <span class="token class-name">Date</span> nowDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> nd <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
            <span class="token keyword">long</span> nh <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
            <span class="token keyword">long</span> nm <span class="token operator">=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
            <span class="token comment">// long ns = 1000;</span>
            <span class="token comment">// 获得两个时间的毫秒时间差异</span>
            <span class="token keyword">long</span> diff <span class="token operator">=</span> endDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> nowDate<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 计算差多少天</span>
            <span class="token keyword">long</span> day <span class="token operator">=</span> diff <span class="token operator">/</span> nd<span class="token punctuation">;</span>
            <span class="token comment">// 计算差多少小时</span>
            <span class="token keyword">long</span> hour <span class="token operator">=</span> diff <span class="token operator">%</span> nd <span class="token operator">/</span> nh<span class="token punctuation">;</span>
            <span class="token comment">// 计算差多少分钟</span>
            <span class="token keyword">long</span> min <span class="token operator">=</span> diff <span class="token operator">%</span> nd <span class="token operator">%</span> nh <span class="token operator">/</span> nm<span class="token punctuation">;</span>
            <span class="token comment">// 计算差多少秒//输出结果</span>
            <span class="token comment">// long sec = diff % nd % nh % nm / ns;</span>
            <span class="token keyword">return</span> day <span class="token operator">+</span> <span class="token string">&quot;天&quot;</span> <span class="token operator">+</span> hour <span class="token operator">+</span> <span class="token string">&quot;小时&quot;</span> <span class="token operator">+</span> min <span class="token operator">+</span> <span class="token string">&quot;分钟&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdk8新增-java-time包" tabindex="-1"><a class="header-anchor" href="#jdk8新增-java-time包" aria-hidden="true">#</a> jdk8新增 java.time包</h2><h3 id="_1-clock-时钟" tabindex="-1"><a class="header-anchor" href="#_1-clock-时钟" aria-hidden="true">#</a> 1.Clock 时钟</h3><ul><li>Clock获取指定时区的当前日期,时间</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>            Clock clock = Clock.ststemUTC(); //获取utc时区
            clock.instant(); //获取utc时区转换的当前时间
            clock.millis(); //获取utc时区转换的毫秒数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-instant-时刻-时间戳" tabindex="-1"><a class="header-anchor" href="#_2-instant-时刻-时间戳" aria-hidden="true">#</a> 2.Instant 时刻(时间戳)</h3><ul><li>Instant类表示一个具体的时刻可以精确到纳秒(即时间戳</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>            Instant timestamp = Instant.now(); // 获取当前时间

            Instant instant2 = Instant.ofEpochMilli(date.getTime()); //根据毫秒值或者date转换为instant
            
            Instant parse = Instant.parse(&quot;1970-01-01T01:00:00Z&quot;); //必须符合 UTC格式的字符串

            Instant oneHourLater = Instant.now().plusHours(1); // 加法 +1小时

            Instant plus = instant.plus(Duration.ofHours(5).plusMinutes(10)); //加了5小时10分钟

            Instant instant6 = instant.minusSeconds(60 * 60 * 5); // 减法

            int i = instant.compareTo(instant6); // 相等 0 大于1 小于-1

            boolean after = instant.isAfter(instant6); //前者在后者之后返回true,反之false

            boolean before = instant.isBefore(instant6); //与上面相反
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-localxxx-本地时间" tabindex="-1"><a class="header-anchor" href="#_3-localxxx-本地时间" aria-hidden="true">#</a> 3.LocalXXX 本地时间</h3><ul><li>新引入的类LocalDate、LocalTime和LocalDateTime，分别处理日期、时间和日期时间 如果想用这三个类接收数据库日期，那么使用的mysql-connectorjava版本不能低于5.1.37，即数据库的驱动版本不低于4.2</li></ul><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>            //实例化方式
            //1.使用now()方法
            LocalDate date = LocalDate.now(); //获取当前日期

            LocalDate date = LocalDate.now(clock); //获取clock对应日期

            //2.使用of()方法指定时间
            LocalDateTime birthday = LocalDateTime.of(1994,4,18,4,56,32);
            //方法
            getXxxx() //获取xxx
            with() //通用
            withxxx(int) //调整时间，返回新设置的时间
            plusXXX() //返回加上对应值的时间
            minusxxx() //返回减去对应值的时间
            lengthOfYear() // 获取某年的天数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-datetimeformatter格式化" tabindex="-1"><a class="header-anchor" href="#_4-datetimeformatter格式化" aria-hidden="true">#</a> 4.DateTimeFormatter格式化</h3><ul><li>线程安全</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>            //三种实例化方式
            //使用常量创建
            DateTimeFormatter df1 =DateTimeFormatter.ISO_DATE_TIME;
            df1.format(date); //格式化
            df1.parse(); //解析 string转日期
            //使用Long类型风格的FormatStyle.FULL FormatStyle.LONG FormatStyle.MEDIUM
            FormatStyle.SHORT
            DateTimeFormatter
            df2=DateTimeFormatter.ofLocalizedDateTime(FormatStyle.FULL)
            //自定义格式
            DateTimeFormatter df6=DateTimeFormatter.ofPattern(&quot;HH:mm:ss&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[p];function o(c,i){return s(),a("div",null,l)}const r=n(t,[["render",o],["__file","04-日期与时间类.html.vue"]]);export{r as default};
