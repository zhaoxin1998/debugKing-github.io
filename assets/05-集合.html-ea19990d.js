import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as n}from"./app-88d002b0.js";const l="/debugKing-github.io/assets/images/HashTable.png",s="/debugKing-github.io/assets/images/ConcurrentHashMap.png",t="/debugKing-github.io/assets/images/clipboard.png",r={},d=n(`<h1 id="集合collection" tabindex="-1"><a class="header-anchor" href="#集合collection" aria-hidden="true">#</a> 集合Collection</h1><ul><li>Collection 单列 <ul><li>List: 有序,允许重复 <ul><li>Arraylist： Object数组,线程不安全</li><li>Vector： Object数组,方法全部使用Synchronized修饰线程安全,效率低</li><li>LinkedList： 双向链表(JDK1.6之前为循环链表，JDK1.7取消了循环),线程不安全</li></ul></li><li>Set: 不允许重复 <ul><li>HashSet（⽆序，唯⼀）: 基于 HashMap 实现的，底层采⽤ HashMap 来保存元素</li><li>LinkedHashSet： LinkedHashSet 继承于 HashSet，并且其内部是通过 LinkedHashMap来实现的。</li><li>TreeSet（有序，唯⼀）： 红⿊树(⾃平衡的排序⼆叉树)</li></ul></li></ul></li><li>Map: 双列键值对 <ul><li>HashMap： JDK1.8之前HashMap由数组+链表组成的。JDK1.8以后在解决哈希冲突时有了较⼤的变化，<br> 当链表⻓度⼤于阈值（默认为8）时，将链表转化为红⿊树，以减少搜索时间</li><li>LinkedHashMap： LinkedHashMap 继承⾃ HashMap，所以它的底层仍然是由数组和链表或红⿊树组成。另外，LinkedHashMap 在上⾯结构的基础上，增加了⼀条双向链<br> 表，使得上⾯的结构可以保持键值对的插⼊顺序。同时通过对链表进⾏相应的操作，实现了访问<br> 顺序相关逻辑。</li><li>Hashtable： 数组+链表组成的.方法全部使用Synchronized修饰线程安全,效率低.</li><li>TreeMap： 红⿊树（⾃平衡的排序⼆叉树）</li></ul></li><li>判断所有集合内部的元素是否为空，使用 <code>isEmpty()</code>方法，而不是 <code>size()==0</code> 的方式。</li><li>Collections 类返回的对象，如：emptyList()/singletonList()等都是 immutable list，<br> 不可对其进行添加或者删除元素的操作。</li><li>使用集合转数组的方法，必须使用集合的 <code>toArray(T[] array)</code>，传入的是和返回类型完全一<br> 致、长度为 0 的空数组。 <ul><li>直接使用 toArray 无参方法存在问题，此方法返回值只能是 Object[]类，若强转其它类型数组将出现ClassCastException 错误。</li><li>等于 0，动态创建与 size 相同的数组，性能最好。</li><li>大于 0 但小于 size，重新创建大小等于 size 的数组，增加 GC 负担。</li><li>等于 size，在高并发情况下，数组创建完成之后，size 正在变大的情况下，负面影响与 2 相同。</li><li>大于 size，空间浪费，且在 size 处插入 null 值，存在 NPE 隐患。</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;(2);
list.add(&quot;guan&quot;);
list.add(&quot;bao&quot;);
// 数组大小 等于 0，动态创建与 size 相同的数组，性能最好
String[] array = list.toArray(new String[0]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h1><ul><li>ArrayList如何动态扩容: 它的底层是一个动态数组(默认容量10),会在add()时进行判断,如果已满则自动扩容1.5倍 <ul><li>具体为<code>int newCapacity= oldCapacity + (Capacity&gt;&gt;1); </code></li><li>扩容操作将原数组整个复制到新数组中，这个操作代价很高，因此最好在创建 ArrayList 对象时就指定大概的容量大小，减少扩容操作的次数。</li></ul></li><li>不要在 foreach 循环里进行元素的 remove/add 操作,会抛出ConcurrentModificationException异常。remove 元素请使用 Iterator<br> 方式，如果并发操作，需要对 Iterator 对象加锁。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add(&quot;1&quot;);
list.add(&quot;2&quot;);
Iterator&lt;String&gt; iterator = list.iterator();
while (iterator.hasNext()) {
    String item = iterator.next();
    if (删除元素的条件) {
        iterator.remove();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用工具类 <code>Arrays.asList()</code>把数组转换成集合时，不能使用其修改集合相关的方法，<br> 它的 add/remove/clear 方法会抛出 UnsupportedOperationException 异常。</li></ul><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List.of(&quot;hello&quot;, &quot;world&quot;); //创建不可变的list

list.contains(&quot;苹果&quot;); //判断集合中是否存在苹果
arrayList.add(&quot;1&quot;); //添加元素
arrayList.add(0,&quot;2&quot;); //在指定位置添加元素
arrayList.addAll(Collection&lt;? extends E&gt; c)  //将集合中所有元素插入该集合末尾
arrayList.addAll(int index, Collection&lt;? extends E&gt; c)  //将集合中所有元素插入该集合指定位置
arrayList.get(i) //获取元素
arrayList.remove(2); //删除指定位置上的元素
arrayList.remove(new Object()); //删除指定对象
arrayList.removeAll(Collection&lt;?&gt; c) //从此列表中删除指定集合中包含的所有元素。 
arrayList.clear(); //清空ArrayList
arrayList.isEmpty() //判断ArrayList是否为空
arrayList.size() //大小
arrayList.indexOf() //获取对象位置(有相同引用的对象 返回最前的下标)
arrayList.set(index, new Object()); //替换 指定下标的对象


linkedList.addFirst(0); // 添加元素到列表开头
linkedList.addLast(3); // 添加元素到列表结尾
linkedList.getFirst()
linkedList.getLast()
linkedList.removeFirst()
linkedList.removeLast()
linkedList.indexOf(3) //返回此列表中首次出现的指定元素的索引
linkedList.lastIndexOf(3); // 返回此列表中最后出现的指定元素的索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正确的将数组转换为arraylist" tabindex="-1"><a class="header-anchor" href="#正确的将数组转换为arraylist" aria-hidden="true">#</a> 正确的将数组转换为ArrayList</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 最简便的方法
List list = new ArrayList&lt;&gt;(Arrays.asList(&quot;a&quot;, &quot;b&quot;, &quot;c&quot;))

// 使用 Java8 的Stream
Integer [] myArray = { 1, 2, 3 };
List myList = Arrays.stream(myArray).collect(Collectors.toList());
//基本类型也可以实现转换（依赖boxed的装箱操作）
int [] myArray2 = { 1, 2, 3 };
List myList = Arrays.stream(myArray2).boxed().collect(Collectors.toList());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>List&lt;String&gt; items = new ArrayList&lt;&gt;();
// jdk8之前
for(String item : items){
    System.out.println(item);
}
// jdk8之后
items.forEach(item-&gt;System.out.println(item));

// 遍历的同时要进行修改使用迭代器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h1><ul><li>HashSet 的本质就是只有键的 HashMap</li><li>HashSet判断对象是否存在,先执行对象的<code>hashcode()</code>方法,若无重复则对象不存在.若重复则调用<code>equals()</code>方法判断是否真的相同</li></ul><h1 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h1><ol><li>HashMap创建时默认的初始化容量(1&lt;&lt;4 即16)和加载因子(0.75f).阀值的计算公式是 <code>容量 * 加载因子</code>,达到阀值则扩容为原来的两倍</li><li>HashMap 使用 HashMap(int initialCapacity) 初始化，如果暂时无法确定集合大小，那么指定默<br> 认值（16）即可。<code>initialCapacity = (需要存储的元素个数 / 负载因子) + 1</code>,HashMap底层会通过tableSizeFor() ⽅<br> 法将initialCapacity扩充为2的幂次⽅⼤⼩</li><li>Hash的值大约40亿个( -(2 ^ 31)~(2 ^ 31 - 1)),内存放不下,因此要对hash的⻓度取模运算，得到的余数才能⽤来要存放<br> 的位置也就是对应的数组下标。<strong>而取余(%)操作中如果除数是2的幂次则等价于与其除数减⼀的与(&amp;)操作</strong>(hash%n 等价于 (n-1)&amp;hash).因为二进制操作比%运算效率高,这就解释了 HashMap 的⻓度<br> 为什么是2的幂次⽅。</li><li>HashTable 是线程安全的；HashTable 内部的⽅法<br> 基本都经过 synchronized 修饰。默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。</li><li>将数据put到HashMap后,HashMap会根据key的hashcode()从小到大排序. <ul><li>而1的hashcode为1,2的hashcode为2,只要把key设置为数字,遍历时就是从小到大输出了.</li></ul></li></ol><h2 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map.containsKey() // 判断是否包含某个Key值
map.containsValue() // 判断是否包含某个Value值。
map.put(&quot;san&quot;, &quot;张三&quot;); //键不能重复，值可以重复
map.get(&quot;si&quot;)
map.remove(&quot;key&quot;); 
map.size()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遍历-1" tabindex="-1"><a class="header-anchor" href="#遍历-1" aria-hidden="true">#</a> 遍历</h2><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><p>使用 entrySet/keySet/values返回集合对象时,不可以对其进行添加元素操作,不然会报 UnsupportedOperationException 异常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // foreach
  map.forEach((k,v)-&gt;System.out.println(&quot;key : &quot; + k + &quot; value : &quot; + v));
  
  // entrySet是 键-值 对的集合，entrySet中的类型是Map.Entry
  for (Map.Entry&lt;String, String&gt; entry : map.entrySet()) {
    System.out.println(&quot;key= &quot; + entry.getKey() + &quot; and value= &quot; + entry.getValue());
  }
  
  
  // keySet是键的集合，Set里面的类型即key的类型
  for (String key : map.keySet()) {
     System.out.println(&quot;key= &quot;+ key + &quot; and value= &quot; + map.get(key));
  }
  
  // values是值的集合
  for (String v : map.values()) {
    System.out.println(&quot;value= &quot; + v);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h3><ol><li>使用方法iterator()要求容器返回一个Iterator。第一次调用Iterator的next()方法时返回序列的第一个元素</li><li>使用next()获得序列中的下一个元素。</li><li>使用hasNext()检查序列中是否还有元素。</li><li>使用remove()将迭代器新返回的元素删除。</li></ol><h2 id="hashmap底层实现" tabindex="-1"><a class="header-anchor" href="#hashmap底层实现" aria-hidden="true">#</a> HashMap底层实现</h2><h3 id="jdk1-8之前" tabindex="-1"><a class="header-anchor" href="#jdk1-8之前" aria-hidden="true">#</a> jdk1.8之前</h3><p>JDK1.8 之前 HashMap 底层是 数组和链表 结合在⼀起使⽤也就是 链表散列(数组中的每个元素都是一个链表)。HashMap 通过 key 的hashCode 经过扰动函数(HashMap的hash方法,减少冲突概率)处理过后得到 hash值，然后通过 (n - 1) &amp; hash判断当前元素存放的位置（这⾥的 n 指的是数组的⻓度），如果当前位置存在元素的话，就判断该元素与要存⼊的元素的 hash<br> 值以及 key 是否相同，如果相同的话，直接覆盖，不相同则利用链表在原结点后插入新的结点.</p><h3 id="jdk1-8之前-1" tabindex="-1"><a class="header-anchor" href="#jdk1-8之前-1" aria-hidden="true">#</a> jdk1.8之前</h3><p>当链表的长度大于阈值(默认8)时,将链表转换为红黑树,减少搜索时间.</p><h2 id="concurrenthashmap-和-hashtable-实现线程安全的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-和-hashtable-实现线程安全的区别" aria-hidden="true">#</a> ConcurrentHashMap 和 Hashtable 实现线程安全的区别</h2><ul><li>Hashtable(同⼀把锁) :使⽤ synchronized 来保证线程安全，效率⾮常<br> 低下。</li><li>在JDK1.7的时候，ConcurrentHashMap（分段锁） 对整个桶<br> 数组进⾏了分割分段(Segment)，每⼀把锁只锁容器其中⼀部分数据，多线程访问容器⾥不同数<br> 据段的数据，就不会存在锁竞争，提⾼并发访问率。(⼀个 ConcurrentHashMap ⾥包含⼀个 Segment 数组。⼀个 Segment 包含⼀个 HashEntry 数组，每个 HashEntry 是⼀个链表结构的元素) <ul><li>JDK1.8 的时候已经摒弃了Segment的概念，⽽是直接⽤ Node 数组+链表+红⿊树的数据结构来实现，并发控制使⽤ synchronized 和CAS来操作。synchronized只锁定当前链表或红⿊⼆叉树的⾸节点，这样只要hash不冲突，就不会产⽣并发，效率⼜<br> 提升N倍。</li></ul></li></ul><p><img src="`+l+'" alt="image" loading="lazy">)<br><img src="'+s+'" alt="image" loading="lazy"><br><img src="'+t+'" alt="image" loading="lazy"></p><h1 id="comparable-和-comparator的区别" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator的区别" aria-hidden="true">#</a> comparable 和 Comparator的区别</h1><ul><li>comparable接⼝出⾃java.lang包 它有⼀个 compareTo(Object obj) ⽅法⽤来排<br> 序(在实体类中实现,String和包装类都默认实现了)</li><li>comparator接⼝出⾃ java.util 包它有⼀个 compare(Object obj1, Object obj2) ⽅法⽤来排序(无法修改实体类时，直接在调用方通过匿名内部类的方式创建) <ul><li>TreeSet 要求存放的对象所属的类必须实现 Comparable 接口，该接口提供了比<br> 较元素的 compareTo()方法，当插入元素时会回调该方法比较元素的大小。</li><li>TreeMap 要求存放的键值对映射的键必须实现 Comparable 接口从而根据键对元<br> 素进行排序。</li><li>Collections 工具类的 sort 方法有两种重载的形式，第一种要求传入的待排序容器中存放的对象比较实现 Comparable 接口以实现元素的比较；第二种不强制性的要求容器中的元素必须可比较，但是要求传入第二个参数，参数是Comparator 接口的子类型（需要重写 compare 方法实现元素的比较），相当于一个临时定义的排序规则，其实就是通过接口注入比较元素大小的算法，也是对回调模式的应用（Java 中对函数式编程的支持）。</li></ul></li></ul>',35),c=[d];function o(u,v){return i(),a("div",null,c)}const b=e(r,[["render",o],["__file","05-集合.html.vue"]]);export{b as default};
