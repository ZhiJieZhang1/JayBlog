# mysql

## 终端操作基本命令

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

创建数据表

    CREATE TABLE table_name (column_name column_type);

查看所有表

    show tbals;




    

### 显示数据库

    mysql> show databases;

    +--------------------+
    | Database           |
    +--------------------+
    | information_schema |
    | test               |
    +--------------------+
    2 rows in set (0.07 sec)
