---
category: 基础
tag: 
  - String
  - java
---
# 字符串String


## Stirng方法

- String 是不可变的,String 类中使⽤ final 关键字修饰字符数组来保存字符串
- 使用 + 号拼接字符串,如果+号左右存在变量则调用的StringBuilder的 append() 方法拼接然后进行 toString() 相当于 new 一个字符串在堆. 若两边都是字面字符常量会在编译期就合并了.

### 常用方法

```java
            String.valueof(xxx) //将xxx转换为string类型
            length() //字符串长度
            trim() //去字符串前后空格
            split(n) //按n（为字符或正则）进行字符串切割
            replaceall(正则，新符号) //替换可字符可正则
            replace(被替换字符，新字符) //替换只能用字符
            substring(begin，end) //获取子字符串，含头不含尾从0开始数
            s1.compareTo(s2) //字符串比较，实际上就是做减法从第一个不相同的字符开始比
            equals(str）//字符串内容是否相同
            equalsIgnorecase(str) //忽略大小写比较内容
            isEmpty() //判断字符串是否为空
            concat() //字符串连接
            startsWith() //方法用于检测字符串是否以指定的前缀开始。
            startsWith(String prefix, int toffset) //字符串中开始查找的位置,查找前缀
            startsWith(String prefix)
            endsWith(String suffix) //测试此字符串是否以指定的后缀结尾
            format() //字符串格式化,只用%s就可以接受大部分数据 String.format("%s %s",msg1,msg2); 比使用+或
            concat()方法节省内存
            toUpperCase() //转成大写字母
            charAt(int index) //指定索引处的字符。索引范围为从 0 到 length() - 1。
            indexOf(int ch) //返回指定字符在此字符串中第一次出现处的索引。
            toCharArray() //字符串 转为 char []
            //如果该对象代表的字符串在常量池可以找到，那么，返回该常量的引用，如果找不到，那么，去堆中查找，堆中存在，则讲堆中对象的引用放入常量池(注意是对象的引用)，并返回该引用，如果都没有找到，则讲该字面量放入常量池
            intern() 
```



## StringBuffer StringBuilder方法

- StringBuffer和StringBuilder是可变的,没用final修饰字符数组 内部char数组长度为构建时初始字符串长度加 16；
- 如果要操作少量的数据用 String,线程安全；
- 多线程操作字符串缓冲区下操作大量数据 StringBuffer，使用了同步锁速度较慢线程安全；
- 单线程操作字符串缓冲区下操作大量数据 StringBuilder；速度最快线程不安全

### 常用方法

```java
            append() //追加字符串
            reverse() //反转字符串
            delete(int start, int end) //移除此序列的子字符串中的字符。
            replace(int start, int end, String str) //使用给定 String 中的字符替换此序列的子字符串中的字符。
```

### String不可变的好处

- 保证hash 值相同: 因为 String 的 hash 值经常被使用，例如 String 用做 HashMap 的 key。不可变 的特性可以使得 hash 值也不可变，因此只需要进行一次计算。
- String Pool 字符串常量池的需要: 如果一个 String 对象已经被创建过了，那么就会从 String Pool 中取得引用。只有 String 是不可变的，才可能使用 String Pool。
- 线程安全性: 不可变保证了字符串本身是线程安全的

```java
            //String比较
            //常量池中创建一个"11"对象
            String str="11";
            //在堆中创建对象，并且新建一个"11"对象放入常量池
            String s1=new String("11");
            //创建5个，分别是堆中的3个："11" "111" "11111"，常量池2个 "11" "111"
            String s1=new String("11")+new String("111");

            String s1 = "Programming";
            String s2 = new String("Programming");
            String s3 = "Program";
            String s4 = "ming";
            String s5 = "Program" + "ming";
            String s6 = s3 + s4;
            System.out.println(s1 == s2); // false
            System.out.println(s1 == s5); // true
            System.out.println(s1 == s6); // false
            System.out.println(s1 == s6.intern()); // true
            System.out.println(s2 == s2.intern()); // false
```



### 判断字符串是否为数字

#### 用JAVA自带的函数

```java
                public static boolean isNumeric(String str) {
                for (int i = str.length(); --i >= 0;) {
                if (!Character.isDigit(str.charAt(i))) {
                return false;
                         }
                   }
                return true;
                }
```

#### 使用lang3下的包下StringUtils类的方法isNumeric()

```java
                String str="1235456";
                boolean flag =StringUtils.isNumeric(str);	
```

#### 用正则表达式

```java
                public static boolean isNumeric(String str) {
                Pattern pattern = Pattern.compile("[0-9]*");
                return pattern.matcher(str).matches();
                }

```

