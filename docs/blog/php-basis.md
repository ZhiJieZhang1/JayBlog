# 基础语法

## PHP是什么

PHP（外文名：PHP：Hypertext Preprocessor，中文名：“超文本预处理器”）是一种通用开元脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，实用广泛，主要适用于Web开发领域。PHP独特的语法混合了C、Java、Perl以及PHP自创的语法。它可以比CGI或者Perl更快速的执行动态网页。用PHP做出的动态页面与 其他编程语言相比，PHP是将程序嵌入到HTML（标准通用标记语言下的一个应用）文档中去执行，执行效率比完全生成HTML标记的CGI要高许多；PHP还可以执行编译后代码，编译可以达到加密和优化代码运行，使代码运行更快

## 语法

- 脚本文件以 **.php** 为后缀，需要php脚本处理环境来运行（如：Apache）
- 代码块必须包含在 **<?php ... ?>** 中

```php{1,6}
  <?php

    $a = 1;
    echo $a;

  ?>
```

::: warning
php的代码语句，必须要以 <code>;</code> 结尾！
:::

- 注释

```php
<?php
  // 这是 PHP 单行注释

  /*
  这是
  PHP 多行
  注释
  */
?>
```

## 变量

### **变量规则**

- 变量以 $ 符号开头，其后是变量的名称
- 变量名必须以字母或者下划线字符开始
- 变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
- 变量名不能包含空格
- 变量名是区分大小写的（$y 和 $Y 是两个不同的变量）
::: tip
PHP **语句**和 PHP **变量**都是区分大小写的。
:::

### **变量作用域**

- local（局部）
- global（全局）
- static（静态）
- parameter(参数)
::: tip
函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。
:::

#### 1. global 在局部作用域中访问全局变量

```php
  <?php

    $a = 2;
    $b = 3;
    function addTest() {
      global $a,$b;
      $a = $a + $b;
    }
    addTest();
    echo $a; // 5

  ?>
```

#### 2. <code>$GLOBALS[index]</code>操作全局变量，可读写

```php
  <?php

    $a = 2;
    $b = 3;
    function addTest() {
      $GLOBALS["a"] = $GLOBALS["a"] + $GLOBALS["b"]
    }
    addTest();
    echo $a; // 5

  ?>
```

#### 3. static 存储静态变量

通常运行环境会自动垃圾回收，但是有时某些变量我们并不想被销毁  
**该变量是局部变量**

```php
  <?php

    function addTest() {
      static $a = 0;
      $b = 0;
      echo $a;
      echo $b;
      $a++;
      $b++;
    }
    addTest(); // 0 0
    addTest(); // 1 0
    addTest(); // 2 0
    echo $a;   // 报错 Undefined variable

  ?>
```

#### 4. parameter 参数作用域

参数是通过调用代码将值传递给函数的局部变量。
参数是在参数列表中声明的，作为函数声明的一部分：

```php
<?php
  function myTest($x)
  {
      echo $x;
  }
  myTest(5);
?>
```

## echo/print

- 共同点： PHP 中两个基本的输出方式
- 区别点：
  - echo - 可以输出一个或多个字符串
  - print - 只允许输出一个字符串，返回值总为 1
::: tip
echo 输出的速度比 print 快， echo 没有返回值，print有返回值1。
:::

```php
<?php
echo "<h2>PHP 很有趣!</h2>"; // PHP 很有趣!
echo "Hello world!<br>"; // Hello world!
echo("Hello world!<br>"); // Hello world!
echo "这是一个", "字符串，", "使用了", "多个", "参数。"; // 这是一个字符串，使用了多个参数。

$txt1="学习 PHP";
$txt2="这儿";
$cars=array("Volvo","BMW","Toyota");

echo $txt1; // 学习 PHP
echo "<br>";
echo "在 $txt2 学习 PHP "; // 在 这儿 学习 PHP
echo "<br>";
echo "我车的品牌是 {$cars[0]}"; // 我车的品牌是 Volvo

print "<h2>PHP 很有趣!</h2>"; // PHP 很有趣!
print "Hello world!<br>"; // Hello world!

$txt1="学习 PHP";
$txt2="这儿";
$cars=array("Volvo","BMW","Toyota");

print $txt1;  // 学习 PHP
print "<br>";
print "在 $txt2 学习 PHP "; // 在 这儿 学习 PHP
print "<br>";
print "我车的品牌是 {$cars[0]}"; // 我车的品牌是 Volvo
?>
```

## require/include

require() 语句的性能与 include() 相类似，都是包括并运行指定文件。  
对于 require() 来说，文件只处理一次(实际上，文件内容替换 require() 语句)；  
对于 include() 语句来说，在执行文件时每次都要进行读取和评估；  
这就意味着如果可能执行多次的代码，则使用 require() 效率比较高。另外一方面，如果每次执行代码时是读取不同的文件，或者有通过一组文件迭代的循环，就使用 include() 语句。

### require

```php
<?php
require("myfile.php");
require "myfile.php";
require_once "myfile.php";
?>
```

这个语句通常放在 PHP 脚本程序的最前面。PHP 程序在执行前，就会先读入 require() 语句所引入的文件，使它变成 PHP 脚本文件的一部分。

### include

```php
<?php
include("myfile.php");
include "myfile.php";
include_once "myfile.php";
?>
```

这个语句一般是放在流程控制的处理区段中。  
******************
PHP 脚本文件在读到 include() 语句时，才将它包含的文件读取进来。这种方式，可以把程式执行时的流程简单化。

- incluce 在用到时加载
- require 在一开始就加载
- _once 后缀表示已加载的不加载

::: warning
include 引入文件的时候，如果碰到错误，会给出提示，并**继续运行**下边的代码。  
require 引入文件的时候，如果碰到错误，会给出提示，并**停止运行**下边的代码。
:::

## JSON

|函数|描述|
|:--|:--|
|json_encode|对变量进行 JSON 编码|
|json_decode|对 JSON 格式的字符串进行解码，转换为 PHP 变量|
|json_last_error|返回最后发生的错误|

### json_encode

json_encode() 用于对变量进行 JSON 编码，该函数如果执行成功返回 JSON 数据，否则返回 FALSE 。

#### 表达式

```php
<?php
string json_encode ( $value [, $options = 0 ] )

?>
```

#### 参数

- value: 要编码的值。该函数只对 UTF-8 编码的数据有效。
- options:由以下常量组成的二进制掩码：JSON_HEX_QUOT, JSON_HEX_TAG, JSON_HEX_AMP, JSON_HEX_APOS, JSON_NUMERIC_CHECK,JSON_PRETTY_PRINT, JSON_UNESCAPED_SLASHES, JSON_FORCE_OBJECT

#### 实例

```php
<?php
  $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
  echo json_encode($arr); // {"a":1,"b":2,"c":3,"d":4,"e":5}
?>
```

### json_decode

json_decode() 函数用于对 JSON 格式的字符串进行解码，并转换为 PHP 变量。

#### 表达式

```php
<?php
mixed json_decode ($json_string [,$assoc = false [, $depth = 512 [, $options = 0 ]]])
?>
```

#### 参数

- json_string: 待解码的 JSON 字符串，必须是 UTF-8 编码数据
- assoc: 当该参数为 TRUE 时，将返回数组，FALSE 时返回对象。
- depth: 整数类型的参数，它指定递归深度
- options: 二进制掩码，目前只支持 JSON_BIGINT_AS_STRING 。

#### 实例

```php
<?php
  $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

  var_dump(json_decode($json));
  var_dump(json_decode($json, true));

  // object(stdClass)#1 (5) {
  //     ["a"] => int(1)
  //     ["b"] => int(2)
  //     ["c"] => int(3)
  //     ["d"] => int(4)
  //     ["e"] => int(5)
  // }

  // array(5) {
  //     ["a"] => int(1)
  //     ["b"] => int(2)
  //     ["c"] => int(3)
  //     ["d"] => int(4)
  //     ["e"] => int(5)
  // }
?>
```

## EOF(heredoc)

定义字符串的方法

### 使用方法

1. 必须后接分号，否则编译通不过。

2. **EOF** 可以用任意其它字符代替(比如abc)，只需保证结束标识与开始标识一致。

3. **结束标识必须顶格独自占一行(即必须从行首开始，前后不能衔接任何空白和字符)。**

4. 开始标识可以不带引号或带单双引号，不带引号与带双引号效果一致，解释内嵌的变量和转义符号，带单引号则不解释内嵌的变量和转义符号。

5. 当内容需要内嵌引号（单引号或双引号）时，不需要加转义符，本身对单双引号转义，此处相当与q和qq的用法。

```php
<?php
  echo <<<EOF
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
  EOF;
  // 结束需要独立一行且前后不能空格
?>
```

::: warning 注意
1.以 <<<EOF 开始标记开始，以 EOF 结束标记结束，结束标记必须顶头写，不能有缩进和空格，且在结束标记末尾要有分号 。  
2.位于开始标记和结束标记之间的变量可以被正常解析，但是函数则不可以。在 heredoc 中，变量不需要用连接符 . 或 , 来拼接
:::

```php
<?php
  $name="is name";
  $a= <<<EOF
      "abc"$name
      "123"
  EOF;
  // 结束需要独立一行且前后不能空格
  echo $a;
?>
```

## 数据类型

String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）。 
***

### 字符串

单引号，双引号中都行

```php
<?php
  $x = "Hello World";
  $y = 'Hello World';
?>
```

### 整型

整数是一个没有小数的数字。

整数规则:

- 整数必须至少有一个数字 (0-9)

- 整数不能包含逗号或空格

- 整数是没有小数点的

- 整数可以是正数或负数

- 整型可以用三种格式来指定：十进制， 十六进制（ 以 0x 为前缀）或八进制（前缀为 0）。

```php
<?php
  $x = 5985;
  var_dump($x); // int(5985) 
  echo "<br>"; 
  $x = -345; // 负数 
  var_dump($x); // int(-345)
  echo "<br>"; 
  $x = 0x8C; // 十六进制数
  var_dump($x); // int(140)
  echo "<br>";
  $x = 047; // 八进制数
  var_dump($x); // int(39)
?>
```

### 浮点型

浮点数是带小数部分的数字，或是指数形式。

```php
<?php
  $x = 10.365;
  var_dump($x); // float(10.365) 
  echo "<br>"; 
  $x = 2.4e3;
  var_dump($x); // float(2.4e3) 
  echo "<br>"; 
  $x = 8E-5;
  var_dump($x); // float(8E-5) 
?>
```

### 布尔型

```php
<?php
  $x=true;
  $y=false;
?>
```

### 数组

```php
<?php
  $cars = array("Volvo","BMW","Toyota");
  var_dump($cars); // array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(6) "Toyota" }
?>
```

### 对象

对象数据类型也可以用于存储数据。

在 PHP 中，对象必须声明。

首先，你必须使用class关键字声明类对象。类是可以包含属性和方法的结构。

然后我们在类中定义数据类型，然后在实例化的类中使用数据类型：

```php
<?php
class Car
{
  var $color;
  function __construct($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```

### NULL 值

NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。

NULL 值指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。

可以通过设置变量值为 NULL 来清空变量数据：

```php
<?php
  $x="Hello world!";
  $x=null;
  var_dump($x);
?>
```

## 常量

常量值被定义后，在脚本的其他任何地方都不能被改变。

### PHP 常量

常量是一个简单值的标识符。该值在脚本中不能改变。

一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符)。

常量在整个脚本中都可以使用。

### 设置 PHP 常量

设置常量，使用 define() 函数

`bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )`

该函数有三个参数:
- **name**：必选参数，常量名称，即标志符。
- **value**：必选参数，常量的值。
- **case_insensitive**：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。

```php
<?php
  define('WELCOME', '欢迎来到我的博客');
  echo WELCOME;
?>
```

### 常量是全局的

常量在定义后，默认是全局变量，可以在整个运行的脚本的任何地方使用。

```php
<?php
  define('WELCOME', '欢迎来到我的博客');

  function test() {
    echo WELCOME;
  }
  test(); // 欢迎来到我的博客
?>
```
