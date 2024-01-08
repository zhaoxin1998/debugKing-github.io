import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as n}from"./app-88d002b0.js";const r={},s=n(`<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><ul><li>数组创建后,它的大小就是固定的</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int[] nums0 = {1,2,3,4,5}; //静态初始化
String[] array2=new String[]{&quot;黄渤&quot;,&quot;张艺兴&quot;,&quot;孙红雷&quot;,&quot;小猪&quot;,&quot;牙哥&quot;,&quot;黄磊&quot;};
int[] nums1 = new int[size]; //动态初始化(默认值为基本类型默认值值)


nums.length; // 获取数组的长度

int[][] array={{1,2},{2,3},{3,4}}
array.length; //返回行数即3,
array[0].length; //返回某行列数即2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="arrays工具类" tabindex="-1"><a class="header-anchor" href="#arrays工具类" aria-hidden="true">#</a> Arrays工具类</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Arrays.asList(&quot;1&quot;,&quot;2&quot;,&quot;3&quot;); //数组转list,传递的数组必须是对象数组，而不是基本类型。
    // 如果传入基本数据类型的数组,得到的List只有一个元素,为该数组 
    // 返回的并不是 java.util.ArrayList ，而是 java.util.Arrays 的一个内部类,无add等方法
Arrays.asList(array1).contains(&quot;a&quot;); //判断数组中是否包含a
Arrays.toString(a); //转字符串
Arrays.sort(a);  //升序
Arrays.sort(arr,Collections.reverseOrder()); // 倒序,数组必须是包装类型
Arrays.sort(a,fromIndex,toIndex);  //范围升序,含头不含尾
Arrays.binarySearch(e,&quot;c&quot;) //二分查找字符c在数组的位置,要先排序
Arrays.fill(a,0); //将数组a中元素全部填充为0
Arrays.fill(a,2,4,0); // 从0数[2,4)填充为0
Arrays.copyOf(h, 6); // 复制的长度
Arrays.copyOfRange(h, 6, 11); // 指定索引复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="稀疏数组" tabindex="-1"><a class="header-anchor" href="#稀疏数组" aria-hidden="true">#</a> 稀疏数组</h1><ul><li>当一个数组中大部分元素为0或同一个值时,可以使用稀疏数组来保存该数组节省空间.</li><li>稀疏数组是一个n行3列的二维数组 <ul><li>第一行记录原始数组的行,列,有效值的个数</li><li>剩余行记录有效值在原始数组的位置和值</li></ul></li></ul>`,7),l=[s];function d(t,u){return i(),a("div",null,l)}const v=e(r,[["render",d],["__file","03-数组.html.vue"]]);export{v as default};
