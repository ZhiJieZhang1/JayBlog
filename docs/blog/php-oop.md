---
lang: zh-CN
sidebarDepth: 3
---

# 面向对象

## 类

具有相同属性(特征)和方法(行为)的一系列个体的集合，类是一个抽象的概念

## 对象

从类中拿到的具有具体属性值得个体，称为对象，对象是一个具体的个体。 所以，面向对象即我们专注对象来处理问题，通过从一个个具有属性和功能的类中拿到对象来处理问题。

## 软件工程学

软件工程学士一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科，它涉及到程序设计语言、数据库、软件开发工具、系统换平台、标准、设计模式等方法。 分为结构化方法（按软件周期分为三个阶段：分析、设计、编程）和面向对象

**三个目标：**

- **重用性**
- **灵活性**
- **扩展性**

## 面向对象OOP

Object-Oriented Programming
使其编程的代码更简洁、更易于维护，并且具有更强的可重用性。

**特点：**

- **封装**
- **继承**
- **多态**

**特性：**

- **对象的行为**
- **对象的状态**
- **对象的标识**

### 内容

- **类** − 定义了一件事物的抽象特点。类的定义包含了数据的形式以及对数据的操作。

- **对象** − 是类的实例。

- **成员变量** − 定义在类内部的变量。该变量的值对外是不可见的，但是可以通过成员函数访问，在类被实例化为对象后，该变量即可称为对象的属性。

- **成员函数** − 定义在类的内部，可用于访问对象的数据。

- **继承** − 继承性是子类自动共享父类数据结构和方法的机制，这是类之间的一种关系。在定义和实现一个类的时候，可以在一个已经存在的类的基础之上来进行，把这个已经存在的类所定义的内容作为自己的内容，并加入若干新的内容。

- **父类** − 一个类被其他类继承，可将该类称为父类，或基类，或超类。

- **子类** − 一个类继承其他类称为子类，也可称为派生类。

- **多态** − 多态性是指相同的函数或方法可作用于多种类型的对象上并获得不同的结果。不同的对象，收到同一消息可以产生不同的结果，这种现象称为多态性。

- **重载** − 简单说，就是函数或者方法有同样的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法。

- **抽象性** − 抽象性是指将具有一致的数据结构（属性）和行为（操作）的对象抽象成类。一个类就是这样一种抽象，它反映了与应用有关的重要性质，而忽略其他一些无关内容。任何类的划分都是主观的，但必须与具体的应用有关。

- **封装** − 封装是指将现实世界中存在的某个客体的属性与行为绑定在一起，并放置在一个逻辑单元内。

- **构造函数** − 主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，总与new运算符一起使用在创建对象的语句中。

- **析构函数** − 析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。析构函数往往用来做"清理善后" 的工作（例如在建立对象时用new开辟了一片内存空间，应在退出前在析构函数中用delete释放）。

### 定义类

基本语法

```php
<?php
/**
 * 类的变量使用 var 来声明, 变量也可以初始化值
 * 定义的函数只能通过该类及其实例化的对象访问
 */
class phpClass {
  var $var1;
  var $var2 = "constant string";

  function myfunc ($arg1, $arg2) {
    [...]
  }
  [...]
}
?>
```

实例：

```php
<?php
class Site {

  /* 成员变量 */
  var $url;
  var $title;

  /* 成员函数 */
  function setUrl($par) {
    // $this 表示自己
    $this->url = $par;
  }
  function getUrl() {
    echo $this->url . PHP_EOL;
  }
  function setTitle($par) {
    $this->title = $par;
  }
  function getTitle() {
    echo $this->title . PHP_EOL;
  }

}
?>
```

### 创建对象

类创建后，我们可以使用 new 运算符来实例化该类的对象：

```php
<?php
$baidu = new Site;
$taobao = new Site;
$google = new Site;
?>
```

#### 调用成员方法

```php
<?php
// 调用成员函数，设置title和URL
$baidu->setTitle("百度");
$taobao->setTitle("淘宝");
$google->setTitle("谷歌");

$baidu->setUrl("www.baidu.com");
$taobao->setUrl("www.taobao.com");
$google->setUrl("www.google.com");

// 调用成员函数，获取title和URL
$baidu->getTitle();
$taobao->getTitle();
$google->getTitle();

$baidu->getUrl();
$taobao->getUrl();
$google->getUrl();

// 百度
// 淘宝
// 谷歌
// www.baidu.com
// www.taobao.com
// www.google.com
?>
```

### 构造函数

构造函数是一种特殊的方法。主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，在创建对象的语句中与 new 运算符一起使用。

语法

```php
<?php

void __construct ([ mixed $args [, $... ]] )

?>
```

例如上面的例子，就不用单独调用set了

```php
<?php
class Site {
  var $url;
  var $title;

  function __construct($par1, $par2) {
    $this->url = $par1;
    $this->title = $par2;
  }
  function getUrl() {
    echo $this->url . PHP_EOL;
  }
  function getTitle() {
    echo $this->title . PHP_EOL;
  }
}
?>
```

### 析构函数

析构函数(destructor) 与构造函数相反，当对象结束其生命周期时（例如对象所在的函数已调用完毕），系统自动执行析构函数。

```php
<?php
  class myDestructableClass {
    function __construct() {
      print "构造函数 \n";
      $this->name = "myDestructableClass";
    }
    function __destruct() {
      print "销毁" . $this->name . "\n";
    }
  }

  $obj = new myDestructableClass();

  // 执行结果：
  // 构造函数
  // 销毁 MyDestructableClass
?>
```

### 继承

PHP 使用关键字 extends 来继承一个类，PHP 不支持多继承，格式如下：

```php
<?php

  class Child extends Parent {
    ...
  }

?>
```

创建新类 Child_site 并继承 Site 类

```php
<?php

  class Child_site extends Site {
    var $category;
    function setCate($par) {
      $this->category = $par;
    }
    function getCate() {
      echo $this->category . PHP_EOL;
    }
  }

?>
```

### 方法重写

如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。

重写上面的getUrl和getTitle

```php
<?php
  function getUrl() {
    echo $this->url . PHP_EOL;
    return $this->url;
  }
  function getTitle() {
    echo $this->title . PHP_EOL;
    return $this->title;
  }
?>
```

### 访问控制

PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。

- **public（公有）**：公有的类成员可以在任何地方被访问。
- **protected（受保护）**：受保护的类成员则可以被其自身以及其子类和父类访问。
- **private（私有）**：私有的类成员则只能被其定义所在的类访问。

#### 属性的访问控制

类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。

```php
<?php
/**
 * Define MyClass
 */
class MyClass {

  public $public = "public";
  protected $protected = "protected";
  private $private = "private";

  function  printHello() {
    echo $this->public;
    echo $this->protected;
    echo $this->private;
  }
}

$obj = new MyClass();
echo $obj->public; // public
echo $obj->protected; // 报错
echo $obj->private; // 报错
$obj->printHello(); // public peotected private

/**
 * Define MyClass2
 */
class MyClass2 extends MyClass
{
    // 可以对 public 和 protected 进行重定义，但 private 而不能
    protected $protected = 'Protected2';

    function printHello()
    {
        echo $this->public;
        echo $this->protected;
        echo $this->private;
    }
}

$obj2 = new MyClass2();
echo $obj2->public; // 这行能被正常执行
echo $obj2->private; // 未定义 private
echo $obj2->protected; // 这行会产生一个致命错误
$obj2->printHello(); // 输出 public、protected2 和 Undefined

?>
```

#### 方法的访问控制

类中的方法可以被定义为公有，私有或受保护。如果没有设置这些关键字，则该方法默认为公有。

```php
<?php
  /**
   * Define MyClass
   */
  class MyClass
  {
      // 声明一个公有的构造函数
      public function __construct() { }

      // 声明一个公有的方法
      public function MyPublic() { }

      // 声明一个受保护的方法
      protected function MyProtected() { }

      // 声明一个私有的方法
      private function MyPrivate() { }

      // 此方法为公有
      function Foo()
      {
          $this->MyPublic();
          $this->MyProtected();
          $this->MyPrivate();
      }
  }

  $myclass = new MyClass;
  $myclass->MyPublic(); // 这行能被正常执行
  $myclass->MyProtected(); // 这行会产生一个致命错误
  $myclass->MyPrivate(); // 这行会产生一个致命错误
  $myclass->Foo(); // 公有，受保护，私有都可以执行

  /**
   * Define MyClass2
   */
  class MyClass2 extends MyClass
  {
      // 此方法为公有
      function Foo2()
      {
          $this->MyPublic();
          $this->MyProtected();
          $this->MyPrivate(); // 这行会产生一个致命错误
      }
  }

  $myclass2 = new MyClass2;
  $myclass2->MyPublic(); // 这行能被正常执行
  $myclass2->Foo2(); // 公有的和受保护的都可执行，但私有的不行
?>
```

这有一个醒目的例子

```php
<?php
class Bar
{
  public function test()
  {
    $this->testPrivate();
    $this->testPublic();
  }

  public function testPublic()
  {
    echo "Bar::testPublic\n";
  }

  private function testPrivate()
  {
    echo "Bar::testPrivate\n";
  }
}

class Foo extends Bar
{
  public function testPublic()
  {
    echo "Foo::testPublic\n";
  }

  private function testPrivate()
  {
    echo "Foo::testPrivate\n";
  }
}

$myfoo = new Foo();
$myfoo->test();
// Bar::testPrivate
// Foo::testPublic
?>
```

### 接口

使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。  

接口是通过 interface 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。

接口中定义的所有方法都必须是公有，这是接口的特性。

要实现一个接口，使用 implements 操作符。类中必须实现接口中定义的所有方法，否则会报一个致命错误。类可以实现多个接口，用逗号来分隔多个接口的名称。

```php
<?php
// 声明一个'iTemplate'接口
interface iTemplate
{
    public function setVariable($name, $var);
    public function getHtml($template);
}


// 实现接口
class Template implements iTemplate
{
    private $vars = array();
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
  
    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }

        return $template;
    }
}
?>
```

### 常量

可以把在类中始终保持不变的值定义为常量。在定义和使用常量的时候不需要使用 $ 符号。

常量的值必须是一个定值，不能是变量，类属性，数学运算的结果或函数调用。

自 PHP 5.3.0 起，可以用一个变量来动态调用类。但该变量的值不能为关键字（如 self，parent 或 static）。

```php
<?php
class MyClass
{
    const constant = '常量值';

    function showConstant() {
        echo  self::constant . PHP_EOL;
    }
}

echo MyClass::constant . PHP_EOL;

$classname = "MyClass";
echo $classname::constant . PHP_EOL; // 自 5.3.0 起

$class = new MyClass();
$class->showConstant();

echo $class::constant . PHP_EOL; // 自 PHP 5.3.0 起
?>
```

### 抽象类

任何一个类，如果它里面至少有一个方法是被声明为抽象的，那么这个类就必须被声明为抽象的。

::: danger
比如，这样是错误的：

```php
<?php
class AbstractClass
{
    // 强制要求子类定义这些方法
    abstract protected function getValue();
}
?>
```

:::

定义为抽象的类不能被实例化。

被定义为抽象的方法只是声明了其调用方式（参数），不能定义其具体的功能实现。

继承一个抽象类的时候，子类必须定义父类中的所有抽象方法；另外，这些方法的访问控制必须和父类中一样（或者更为宽松）。例如某个抽象方法被声明为受保护的，那么子类中实现的方法就应该声明为受保护的或者公有的，而不能定义为私有的。

#### 关于抽象类有博客这么幽默解释

此处转载自 [https://blog.csdn.net/kaituozheboke/article/details/52183726](https://blog.csdn.net/kaituozheboke/article/details/52183726)


***
**背景：**

春秋战国时期,燕零七 飞行器专家,能工巧匠.他写了一份图纸---【飞行器制造术】

**飞行器秘制图谱：**

- 要有一个有力的发动机,喷气式.
- 要有一个平衡舵,掌握平衡

他的孙子问: 发动机怎么造呢?

燕零七眼望夕阳: 我是造不出来,但我相信后代有人造出来

***

```php
<?php

// 燕零七的构想,当时的科技造不出来,即这个类只能在图纸化,无法实例化.
// 此时这个类没有具体的方法去实现,还太抽象.
// 因此我们把他做成一个抽象类
abstract class FlyIdea {
    // 大力引擎,当时也没法做,这个方法也实现不了
    // 因此方法也是抽象的
    public abstract function engine();

    // 平衡舵
    public abstract function blance();

    /*
----------------------注意:抽象方法 不能有方法体,写到小括号就行了----------------------
        下面这样写是错误的（有方法体）
        public abstract function blance() {
        }
        Fatal error: Abstract function FlyIdea::engine() cannot contain body
    */
}

/*
----------------------抽象类不能 new 来实例化----------------------
下面这行是错误的
$kongke = new FlyIdea();
Cannot instantiate abstract class FlyIdea
*/



// ------------1----------到了明朝,万户用火箭解决了发动机的问题----------------------
abstract class Rocket extends FlyIdea {

    // 万户把engine方法,给实现了,不再抽象了
    public function engine() {
        echo '点燃火药,失去平衡,嘭!<br />';
    }

    // 继承自父类，但是万户实现不了平衡舵,（还有一个抽象方法）
    // 因此平衡舵对于Rocket类来说,
    // 还是抽象的,
    // 类也是抽象的 因此类加一个abstract
}


/*
------------1----------到了现代,燕十八亲自制作飞行器----------------------
这个Fly类中,所以抽象方法,都已经实现了,不再是梦想.
*/

class Fly extends Rocket{
    public function engine() {
        echo '有力一扔<br />';
    }

    public function blance() {
        echo '两个纸翼保持平衡~~~';
    }

    public function start() {
        $this->engine();
        for($i=0;$i<10;$i++) {
            $this->blance();
            echo '平稳飞行<br />';
        }
    }
}

$apache = new Fly();

$apache->start();
/*有力一扔
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行
两个纸翼保持平衡~~~平稳飞行*/

//有一个类是抽象的，但是里面的方法不是抽象的，能否new？
/*
但是 --- 即便全是具体方法,但类是抽象的,
也不能实例化.*/
abstract class Car {
    public function run() {
        echo '滴滴';
    }
}

//$qq = new qq();   不能实例化
//解决办法》》》继承
class qq extends Car {
}

$qq = new qq();
?>
```

:::tip

**总结：**

- 类前加 abstract 是抽象类

- 方法前加 abstract 是抽象方法

- 抽象类 不能 实例化

- 抽象方法 不能有 方法体

- 有抽象方法,则此类必是 抽象类

- 抽象类,内未必有抽象方法

- 但是 --- 即便全是具体方法,但类是抽象的,也不能实例化.
:::

#### 抽象类的意义

**请看如下场景:**

Facebook 多国语言欢迎页面

user登陆,有一个 c 字段,是其国家

当各国人登陆时,看到各国语言的欢迎界面

我们可以用**面向过程**的来做

```php
<?php

$c = 'english';

if($c == 'china') {
    echo '你好,非死不可';
} else if($c =='english') {
    echo 'hi,welcome';
} else if($c == 'japan') {
    echo '搜达斯内';
}
?>
```

反思: 当facebook进入泰国市场时,

增加 else if ,扩展性很差

=====用面向对象来做======

让美国小组/中国开发组/斯蜜达开发组 来开发Welcome类

争执不下: echo 到底该中? 日? 韩?

说: 干脆在wel()方法里,判断一下? 没意义啊

```php
<?php
abstract class Welcome {
    public abstract function wel();
}



// 这是首页的controller开发者
//$wel = new Welcome();
//$wel->wel();
/*
说:你们别争执了,我只知道,我要调用wel()方法,就是打招呼,
你们显示什么语言和我无关.
*/


/**
 *经理说话:
 *Welcome谁也不许动,各国开发小组开发自己的招呼类
 *
 *另:为了首页的controller开发者便于调用,
 *统一继承自welcome类
**/


class china extends Welcome {
    public function wel() {
        echo '你好,非死不可,<br />';
    }
}


class english extends Welcome {
    public function wel() {
        echo 'hi,welcome';
    }
}


class japan extends Welcome {
    public function wel() {
        echo '搜达斯奈';
    }
}



// 再看首页开发者

$c = 'english'; // china, japan
$wel = new $c();
$wel->wel();


/*

以后新增了泰国语,首页的开发者,根本无需改动
只需要增加一个泰国的welcome类 就可以了.

所以有一些面向对象的介绍中,说面向对象的一个特点:可插拔特性

*/
?>
```

### Static 关键字

类的属性或方法声明为static的话，就可以不通过类的实例，直接通过类来调用；

静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）。

由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。

静态属性不可以由对象通过 -> 操作符来访问。

自 PHP 5.3.0 起，可以用一个变量来动态调用类。但该变量的值不能为关键字 self，parent 或 static。

```php
<?php
class Foo
{
  public static $my_static = "foo";
  public function staticValue()
  {
    return self::$my_static;
  }
}

print Foo::$my_static . PHP_EOL;

$foo = new Foo();

print $foo->staticValue() . PHP_EOL;
?>
```

### Final 关键字

PHP 5 新增了一个 final 关键字。如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。

以下代码执行会报错：

```php
<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called" . PHP_EOL;
   }

   final public function moreTesting() {
       echo "BaseClass::moreTesting() called"  . PHP_EOL;
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called"  . PHP_EOL;
   }
}
// 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
?>
```

### 调用父类构造方法

PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 parent::__construct() 。

```php
<?php
class BaseClass
{
  function __construct()
  {
    print "BaseClass中的构造函数" . PHP_EOL;
  }
}

class SubClass extends BaseClass
{
  function __construct()
  {
    parent::__construct();
    print "SubClass中的构造函数" . PHP_EOL;
  }
}

class OtherClass extends BaseClass
{
  // 继承 BaseClass 的构造方法
}

$obj = new BaseClass(); // BaseClass中的构造函数

$obj = new SubClass(); // BaseClass中的构造函数  SubClass中的构造函数

$obj = new OtherClass(); // BaseClass中的构造函数
?>
```
