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

### json_last_error
