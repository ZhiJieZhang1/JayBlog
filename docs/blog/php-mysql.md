# mysql

## 终端操作基本命令

### 库相关

登录mysql

    mysql -u root -p 密码
  
查看所有数据库

    show databases;

创建数据库

    create database if not exists test(数据库名) default charset utf8(编码) collate utf8_general_ci(排序);

查看所有数据库

    alter database test default character utf8 default collate utf8_general_ci;

打开数据库

    use test;

查看当前所在数据库

    select database();

### 表相关

创建数据表

    CREATE TABLE table_name (column_name column_type);
    create table `account` (`userId` int primary key not null, `userName` varchar(100) not null);
    create table accountT (`userId` int not null primary key, `userName` varchar(100) not null);

查看所有表

    show tables;

删除数据表

    drop table 表名;

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

### 显示数据库

    mysql> show databases;

    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | test               |
    +--------------------+
    2 rows in set (0.07 sec)
