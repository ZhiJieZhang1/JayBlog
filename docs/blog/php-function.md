# 可用函数

## isset()

用于检测变量是否已设置并且非 NULL。
::: warning
如果一次传入多个参数，那么 isset() 只有在全部参数都被设置时返回 TRUE，计算过程从左至右，中途遇到没有设置的变量时就会立即停止。
:::

```php
<?php
  $var = '';
  
  // 结果为 TRUE，所以后边的文本将被打印出来。
  if (isset($var)) {
      echo "变量已设置。" PHP_EOL;
  }
  echo PHP_EOL;
  //PHP_EOL 为换行符 在终端有效
  //windows平台相当于    echo "\r\n";
  //unix\linux平台相当于    echo "\n";
  //mac平台相当于    echo "\r";

  $a = "test";
  $b = "anothertest";
  
  var_dump(isset($a));      // TRUE
  var_dump(isset($a, $b)); // TRUE
?>
```

## var_dump()

函数用于输出变量的相关信息  
函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组将递归展开值，通过缩进显示其结构

```php
<?php

  $a = array(1, 2, array("a", "b", "c"));
  var_dump($a);
  // array(3) {
  //   [0]=>
  //   int(1)
  //   [1]=>
  //   int(2)
  //   [2]=>
  //   array(3) {
  //     [0]=>
  //     string(1) "a"
  //     [1]=>
  //     string(1) "b"
  //     [2]=>
  //     string(1) "c"
  //   }
  // }
  $b = 3.1;
  $c = true;
  var_dump($b, $c); // float(3.1) bool(true)
?>
```

## unset()

- 用于销毁给定的变量

```php
<?php
  // 销毁单个变量
  unset ($foo);
  
  // 销毁单个数组元素
  unset ($bar['quux']);
  
  // 销毁一个以上的变量
  unset($foo1, $foo2, $foo3);
?>
```

- 如果在函数中 unset() 一个全局变量，则只是局部变量被销毁，而在调用环境中的变量将保持调用 unset() 之前一样的值。

```php
<?php
  function destory_foo() {
    global $foo;
    unset($foo);
  }
  $foo = "bar";
  destory_foo();
  echo $foo; // bar
?>
```

- 在函数中 unset() 一个全局变量，可使用 $GLOBALS 数组来实现

```php
<?php
  function foo()
  {
      unset($GLOBALS['bar']);
  }
  
  $bar = "something";
  foo();
?>
```

- 如果在函数中 unset() 一个通过引用传递的变量，则只是局部变量被销毁，而在调用环境中的变量将保持调用 unset() 之前一样的值。

```php
<?php
  function foo(&$bar) {
      unset($bar);
      $bar = "blah";
  }
  
  $bar = 'something';
  echo "$bar\n"; // something
  
  foo($bar);
  echo "$bar\n"; // something， 如果没有 unset($bar); 则输出 blah
?>
```

- 如果在函数中 unset() 一个静态变量，那么在函数内部此静态变量将被销毁。但是，当再次调用此函数时，此静态变量将被复原为上次被销毁之前的值。

```php
<?php
function foo()
{
    static $bar;
    $bar++;
    echo "Before unset: $bar, ";
    unset($bar);
    $bar = 23;
    echo "after unset: $bar\n";
}
foo(); // Before unset: 1, after unset: 23
foo(); // Before unset: 2, after unset: 23
foo(); // Before unset: 3, after unset: 23
?>
```
