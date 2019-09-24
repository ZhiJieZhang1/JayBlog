---
lang: zh-CN
sidebarDepth: 2
---

# mysql

## 终端操作基本命令

### 库相关

登录mysql

```bash
    mysql -u root -p 密码
```

查看所有数据库

```bash
    show databases;
```

创建数据库

```bash
    create database if not exists test(数据库名) default charset utf8(编码) collate utf8_general_ci(排序);
```

查看所有数据库

```bash
    alter database test default character utf8 default collate utf8_general_ci;
```

打开数据库

```bash
    use test;
```

查看当前所在数据库

```bash
    select database();
```

### 表相关

创建数据表

```bash
    CREATE TABLE table_name (column_name column_type);
    create table `account` (`userId` int primary key not null, `userName` varchar(100) not null);
    create table accountT (`userId` int not null primary key, `userName` varchar(100) not null);
```

查看所有表

```bash
    show tables;
```

删除数据表

```bash
    drop table 表名;
```

查看表结构

```php
    // 查看字段信息
    show columns from 表名;
    +----------+--------------+------+-----+---------+-------+
    | Field    | Type         | Null | Key | Default | Extra |
    +----------+--------------+------+-----+---------+-------+
    | userId   | int(11)      | NO   | PRI | NULL    |       |
    | userName | varchar(100) | NO   |     | NULL    |       |
    +----------+--------------+------+-----+---------+-------+

    // 查看完整字段信息
    show full columns from 表名;
    +----------+-------------+-------------------+------+-----+---------+-------+---------------------------------+--------------------------+
    | Field    | Type        | Collation         | Null | Key | Default | Extra | Privileges                      | Comment                  |
    +----------+-------------+-------------------+------+-----+---------+-------+---------------------------------+--------------------------+
    | id       | int(10)     | NULL              | YES  |     | NULL    |       | select,insert,update,references |                          |
    | userId   | int(11)     | NULL              | NO   |     | NULL    |       | select,insert,update,references |                          |
    | userName | varchar(50) | latin1_swedish_ci | YES  |     | NULL    |       | select,insert,update,references | 修改后的字段注释            |
    | id_1     | int(10)     | NULL              | NO   |     | NULL    |       | select,insert,update,references |                          |
    +----------+-------------+-------------------+------+-----+---------+-------+---------------------------------+--------------------------+

    // 查看创表语句
    show create table 表名;
    +---------+----------------------------------------------+
    | Table   | Create Table                                 |
    +---------+----------------------------------------------+
    | account | CREATE TABLE `account` (
                  `userId` int(11) NOT NULL,
                  `userName` varchar(100) NOT NULL,
                  PRIMARY KEY (`userId`)
                ) ENGINE=InnoDB DEFAULT CHARSET=latin1       |
    +---------+----------------------------------------------+
```

修改数据表

```php

    alter table 表名 选项;

    // 修改表名
    alter table 表名 rename 新表名;

    // 修改表注释
    alter table 表名 comment '修改后的注释';

    // 修改表属性 InnoDB(默认) MYISAM
    alter table 表名 engine = MYISAM;

    /**
     *  增加
     *  注意：关键字，保留字不可设置为字段名
     */

    // 增加字段
    alter table 表名 add 字段名 类型 是否为空 默认值;

    // 增加字段 放置于 第一位
    alter table 表名 add 字段名 first;

    // 增加字段 放置于 某个字段 之后
    alter table 表名 add 字段名 after 某个字段;

    /**
     *  修改
     *  modify: 修改字段类型设置,不可以更改字段名
     *  change: 修改字段类型设置 可以更改字段名
     */

    // 修改字段 非空
    alter table 表名 modify 字段名 类型(必须有) not null;

    // 修改字段名
    alter table 表名 change 字段名 新字段名 类型(必须有);

    // 修改字段注释
    alter table 表名 change 字段名 类型(必须有) comment '修改后的注释';

    // 修改默认值
    alter table 表名 alter 字段名 set default 默认值;

    /**
     *  删除
     */

    // 删除字段
    alter table 表名 drop 字段名;

    // 删除字段默认值
    alter table 表名 alter 字段名 drop default;

    // 删除主键 设置新的主键前，需要先删除旧的主键
    alter table 表名 drop primary key;
    
```

### 增删改查

#### 增加

基本语法

    insert into 表名
        (field1, field2,...fieldN)
        VALUES
        ( value1, value2,...valueN );
  
多条插入

    insert into 表名
        (field1, field2,...fieldN)
        VALUES
        ( value1-1, value1-2,...value1-N ),
        ( value2-1, value2-2,...value2-N );

如果所有列都要插入，可以省去字段规定

    insert into 表名
        VALUES
        ( value1-1, value1-2, value1-3, value1-4),
        ( value2-1, value2-2, value2-3, value2-4);

具有自增键的插入 可设置为 0 或者 null，被当做省去字段规定的占位

    insert into 表名
            VALUES
            ( 0, value1-2, value1-3, value1-4),
            ( 0, value2-2, value2-3, value2-4);

#### 删除

基本语法

    DELETE FROM table_name [WHERE Clause]

::: danger
  如果没有指定 WHERE 子句，MySQL 表中的所有记录将被删除。
:::

#### 修改

基本语法

    UPDATE table_name SET field1=new-value1, field2=new-value2
    [WHERE Clause]

#### 查找

基本语法

    SELECT column_name,column_name
    FROM table_name
    [WHERE Clause]
    [LIMIT N][ OFFSET M]

```php

  // 查询语句中你可以使用一个或者多个表，表之间使用逗号(,)分割，并使用WHERE语句来设定查询条件
  // LIMIT 查询条数
  // OFFSET 查询偏移量
  mysql> select * from account where userLevel=2;
  +----+----------+----------+----------+------------------------+-----------+
  | id | userId   | userName | nickName | userDesc               | userLevel |
  +----+----------+----------+----------+------------------------+-----------+
  |  4 | 98000004 | 账号4     | 昵称4    | 这是账号4的描述           |         2 |
  |  6 | 98000006 | 账号6     | 昵称6    | 这是账号6的描述           |         2 |
  |  7 | 98000007 | 账号7     | 昵称7    | 这是账号7的描述           |         2 |
  +----+----------+----------+----------+------------------------+-----------+

  mysql> select * from account where userLevel=2 limit 2 offset 1;
  +----+----------+----------+----------+------------------------+-----------+
  | id | userId   | userName | nickName | userDesc               | userLevel |
  +----+----------+----------+----------+------------------------+-----------+
  |  6 | 98000006 | 账号6    | 昵称6     | 这是账号6的描述           |         2 |
  |  7 | 98000007 | 账号7    | 昵称7     | 这是账号7的描述           |         2 |
  +----+----------+----------+----------+------------------------+-----------+

  // count 查询数量
  select count(*) from 表名 where Clause;

  // min 最小值
  select min(字段名) from 表名 where Clause;

  // max 最大值
  select max(字段名) from 表名 where Clause;

  // sum 求和
  select sum(字段名) from 表名 where Clause;

  // sqrt 平方根
  select sqrt(字段名) from 表名 where Clause;

  // first 符合条件第一个
  select first(字段名) from 表名 where Clause;

  // last 符合条件最后一个
  select last(字段名) from 表名 where Clause;

  // length 某一列数据值长度， 确切的字段名
  select length(字段名) from 表名 where Clause;
  select length(字段名) as 自定义返回的key from 表名 where Clause;

  mysql> select LENGTH(userName) from account where userLevel=2;
  +------------------+
  | LENGTH(userName) |
  +------------------+
  |                7 |
  |                7 |
  |                7 |
  +------------------+
  
  mysql> select LENGTH(userName) as userNameLength from account where userLevel=2;
  +----------------+
  | userNameLength |
  +----------------+
  |              7 |
  |              7 |
  |              7 |
  +----------------+

  // now 显示当前时间
  mysql> select now();
  +---------------------+
  | now()               |
  +---------------------+
  | 2019-09-10 10:45:18 |
  +---------------------+

  // rand 返回0-1的随机数
  mysql> select rand();
  +--------------------+
  | rand()             |
  +--------------------+
  | 0.4327367669276304 |
  +--------------------+

  // concat 拼接字符串
  mysql> select concat('q', 'w');
  +------------------+
  | concat('q', 'w') |
  +------------------+
  | qw               |
  +------------------+
```

### WHERE 子句

基础语法

    SELECT field1, field2,...fieldN FROM table_name1, table_name2...
    [WHERE condition1 [AND [OR]] condition2.....

范围
```php
  // = , < , > , <= , >= , <> != (不等于)
  select * from 表名 where 字段 > 值1 AND 字段 < 值2;
  select * from 表名 where 字段 between 值1 and 值2;

```

### LIKE 子句

基本语法

    SELECT field1, field2,...fieldN 
    FROM table_name
    WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'

::: warning
- SQL LIKE 子句中使用百分号 %字符来表示任意字符，类似于UNIX或正则表达式中的星号 *。
- 如果没有使用百分号 %, LIKE 子句与等号 = 的效果是一样的。
:::

### UNION 操作符

UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据。

基本语法

    SELECT expression1, expression2, ... expression_n
    FROM tables
    [WHERE conditions]
    UNION [ALL | DISTINCT]
    SELECT expression1, expression2, ... expression_n
    FROM tables
    [WHERE conditions];

::: warning
  - DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响。
  - ALL: 可选，返回所有结果集，包含重复数据。
:::

### 排序 ORDER BY

基本语法

    SELECT field1, field2,...fieldN FROM table_name1, table_name2...
    ORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]

::: warning
- 你可以使用任何字段来作为排序的条件，从而返回排序后的查询结果。
- 你可以设定多个字段来排序。
- 你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。
:::

### 分组 GROUP BY

#### 基本语法

    SELECT column_name, function(column_name)
    FROM table_name
    WHERE column_name operator value
    GROUP BY column_name;

```php
  mysql> SELECT * FROM employee_tbl;
  +----+--------+---------------------+--------+
  | id | name   | date                | singin |
  +----+--------+---------------------+--------+
  |  1 | 小明 | 2016-04-22 15:25:33 |      1 |
  |  2 | 小王 | 2016-04-20 15:25:47 |      3 |
  |  3 | 小丽 | 2016-04-19 15:26:02 |      2 |
  |  4 | 小王 | 2016-04-07 15:26:14 |      4 |
  |  5 | 小明 | 2016-04-11 15:26:40 |      4 |
  |  6 | 小明 | 2016-04-04 15:26:54 |      2 |
  +----+--------+---------------------+--------+
  6 rows in set (0.00 sec)

  mysql> SELECT name, COUNT(*) FROM   employee_tbl GROUP BY name;
  +--------+----------+
  | name   | COUNT(*) |
  +--------+----------+
  | 小丽 |        1 |
  | 小明 |        3 |
  | 小王 |        2 |
  +--------+----------+
  3 rows in set (0.01 sec)
```

#### 使用 WITH ROLLUP

WITH ROLLUP 可以实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）。

**例如我们将以上的数据表按名字进行分组，再统计每个人登录的次数：**

```php
  mysql> SELECT name, SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
  +--------+--------------+
  | name   | singin_count |
  +--------+--------------+
  | 小丽 |            2 |
  | 小明 |            7 |
  | 小王 |            7 |
  | NULL   |           16 |
  +--------+--------------+
  4 rows in set (0.00 sec)
```

其中记录 NULL 表示所有人的登录次数。

我们可以使用 coalesce 来设置一个可以取代 NUll 的名称，coalesce 语法：

    select coalesce(a,b,c);

参数说明：如果a==null,则选择b；如果b==null,则选择c；如果a!=null,则选择a；如果a b c 都为null ，则返回为null（没意义）。

以下实例中如果名字为空我们使用总数代替：

```php
mysql> SELECT coalesce(name, '总数'), SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;
+--------------------------+--------------+
| coalesce(name, '总数') | singin_count |
+--------------------------+--------------+
| 小丽                   |            2 |
| 小明                   |            7 |
| 小王                   |            7 |
| 总数                   |           16 |
+--------------------------+--------------+
4 rows in set (0.01 sec)
```

### JOIN 连接的使用

JOIN 在两个或多个表中查询数据。

- **INNER JOIN（内连接,或等值连接）**：获取两个表中字段匹配关系的记录。
- **LEFT JOIN（左连接）**：获取左表所有记录，即使右表没有对应匹配的记录。
- **RIGHT JOIN（右连接）**： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

**接下来就以下面两张表为数据实例**

```php
  mysql> select * from book_count;
  +----+-------------+------------+
  | id | book_author | book_count |
  +----+-------------+------------+
  |  1 | 小明        |         20 |
  |  2 | 小马        |          5 |
  |  3 | 小张        |         10 |
  +----+-------------+------------+
  3 rows in set (0.00 sec)
  
  mysql> select * from book_record;
  +-----------+-----------------+-------------+------------+
  | record_id | book_title      | book_author | createTime |
  +-----------+-----------------+-------------+------------+
  |         1 | 人与自然         | 小明        | 2017-04-12 |
  |         2 | 超时空传输       | 小明        | 2017-04-12 |
  |         3 | 外星文明         | 小张        | 2017-04-12 |
  |         4 | 猩球崛起         | 小张        | 2017-04-12 |
  |         5 | 三体            | 小王        | 2017-04-12 |
  +-----------+-----------------+-------------+------------+
  5 rows in set (0.00 sec)
```

#### INNER JOIN

```php

  mysql> select book_record.record_id, book_record.book_author, book_count.book_count from book_record inner join book_count on book_record.book_author = book_count.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  +-----------+-------------+------------+
  4 rows in set (0.01 sec)

  // 简化写法
  mysql> select a.record_id, a.book_author, b.book_count from book_record a inner join book_count b on a.book_author = b.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  +-----------+-------------+------------+
  4 rows in set (0.00 sec)

  // 同样效果where写法
  mysql> select a.record_id, a.book_author, b.book_count from book_record a, book_count b where a.book_author = b.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  +-----------+-------------+------------+

```

#### LEFT JOIN

```php

  // book_record 为左表  book_count 为右表
  // 即便右侧表中没有对应book_author的值

  mysql> select book_record.record_id, book_record.book_author, book_count.book_count from book_record left join book_count on book_record.book_author = book_count.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  |         5 | 小王        |       NULL |
  +-----------+-------------+------------+
  5 rows in set (0.02 sec)

  // 简化写法
  mysql> select a.record_id, a.book_author, b.book_count from book_record a left join book_count b on a.book_author = b.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  |         5 | 小王        |       NULL |
  +-----------+-------------+------------+
  5 rows in set (0.00 sec)

```

#### RIGHT JOIN

```php

  // book_record 为左表  book_count 为右表
  // 该语句会读取右边的数据表 book_count 的所有选取的字段数据,即便左侧表中没有对应 book_author 的值

  mysql> select book_record.record_id, book_record.book_author, book_count.book_count from book_record right join book_count on book_record.book_author = book_count.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  |      NULL | NULL        |          5 |
  +-----------+-------------+------------+
  5 rows in set (0.01 sec)

  // 简化写法
  mysql> select a.record_id, a.book_author, b.book_count from book_record a right join book_count b on a.book_author = b.book_author;
  +-----------+-------------+------------+
  | record_id | book_author | book_count |
  +-----------+-------------+------------+
  |         1 | 小明        |         20 |
  |         2 | 小明        |         20 |
  |         3 | 小张        |         10 |
  |         4 | 小张        |         10 |
  |      NULL | NULL        |          5 |
  +-----------+-------------+------------+
  5 rows in set (0.00 sec)

```

## 脚本连接操作

### 连接

```php
<?php
$dbhost = 'localhost';  
$dbuser = 'root';
$dbpass = '';
// 连接mysql
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);

if(!$conn )
{
    die('连接失败: ' . mysqli_error($conn));
} else {
  echo 'success';
}

// 设置编码，防止中文乱码
mysqli_set_charset($con,"utf8");

// 选择指定的数据库
mysqli_select_db( $conn, 'library');

// 执行SQL语句
$sql = 'select a.record_id, a.book_author, b.book_count from book_record a right join book_count b on a.book_author = b.book_author';
$retval = mysqli_query( $conn, $sql );

?>
```

### 实例:

**一条新闻的 编辑，后端入库，展示页**

#### 编辑页 news-edit.php

```php
<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>新闻管理系统</title>
</head>
<body>
    <form action="mysql.php">
        <p>
            <label for="newstitle">新闻标题</label>
            <input type="text" id="newstitle" name="newstitle">
        </p>
        <p>
            <label for="newsimg">图片地址</label>
            <input type="text" id="newsimg" name="newsimg">
        </p>
        <p>
            <label for="newscontent">新闻内容</label>
            <textarea  id="newscontent" name="newscontent" cols="30" rows="10"></textarea>
        </p>
        <p>
            <label for="addtime">新闻时间</label>
            <input type="date" id="addtime" name="addtime">
        </p>
        <p>
            <input type="submit" value="提交">
            <input type="reset" value="重置">
        </p>
    </form>
</body>
</html>
?>
```

#### 后端入库逻辑 news-mysql.php

```php
<?php

$dbhost = 'localhost';  
$dbuser = 'root';
$dbpass = '';

$con = mysqli_connect($dbhost, $dbuser, $dbpass);

header("Content-type: text/html; charset=utf-8");
if (!$con) {
    die('Could not connect: ' .mysqli_error($con));
} else {
    mysqli_select_db($con, 'news_data');
    //从前端传来数据存储到数据库
    $newstitle = $_REQUEST["newstitle"];
    $newsimg = $_REQUEST["newsimg"];
    $newscontent = $_REQUEST["newscontent"];
    $addtime = $_REQUEST["addtime"];
    $sql = "INSERT INTO `news`(`id`, `newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES (null, '".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."');";
    mysqli_set_charset($con,"utf8");
    $result = mysqli_query($con, $sql);
    if (!$result) {
        die('Error:'.mysqli_error($con));
    } else {
        echo 'success';
    }
}
mysqli_close($con);

?>
```

#### 展示页 news.php

```php
<?php
$dbhost = 'localhost';  
$dbuser = 'root';
$dbpass = '';

$con = mysqli_connect($dbhost, $dbuser, $dbpass);
header("Content-type: text/html; charset=utf-8");
if (!$con) {
    die('Could not connect: ' .mysqli_error($con));
} else {
    mysqli_select_db($con, 'news_data');
    $sql = "SELECT * FROM `news`";
    mysqli_set_charset($con,"utf8");
    $result = mysqli_query($con, $sql);
    $arr = array();
    echo '<h1>新闻速报</h1>';
    while ($row = mysqli_fetch_array($result)) {
      echo"<h2>{$row['id']}.{$row['newstitle']} </h2>".
          "<span>报道日期：{$row['addtime']} </span><br/>".
          "<img src=' {$row['newsimg']} ' />".
          "<p> {$row['newscontent']} </p>";
    }
}
mysqli_close($con);
?>
```
