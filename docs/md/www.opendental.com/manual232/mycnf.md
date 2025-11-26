Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

my.cnf

See [Database Management Systems](databasemanagementsystems.html).

There is a small text file called *my.cnf* that is part of the [MySQL](mysql.html)/[MariaDB](mariadb.html) installation for Linux servers. Below is an example of the my.cnf settings. Restart the MySQL service after making changes to my.cnf.

## MariaDB 10.5 MyISAM Example

[mysqld]

datadir=/var/lib/mysql

default-storage-engine=MyISAM

max\_allowed\_packet=40M

lower\_case\_table\_names=1

port=3306

sql\_mode=''

explicit\_defaults\_for\_timestamp=1

key\_buffer\_size=3G

myisam\_recover\_options=OFF

optimizer\_switch=split\_materialized=OFF

## MySQL 5.5 MyISAM Example

Note: This example is untested.

[mysqld]

datadir=/var/lib/mysql

default-storage-engine=MyISAM

skip-innodb

max\_allowed\_packet=40M

lower\_case\_table\_names=1

## MySQL 5.5 InnoDB Example

Note: This example is untested.

[mysqld]port = 3306

socket = /var/run/mysqld/mysql.sock

default\_character\_set = utf8

default\_storage\_engine = InnoDB

max\_connections = 500

max\_user\_connections = 500

lower\_case\_table\_names = 1

max\_allowed\_packet = 40M

max\_connect\_errors = 1000

skip\_name\_resolve

binlog\_format = ROW

expire\_logs\_days = 4

sync\_binlog = 1

tmp\_table\_size = 64M

max\_heap\_table\_size = 64M

query\_cache\_type = 0

query\_cache\_size = 0

thread\_cache\_size = 500

open\_files\_limit = 65535

table\_definition\_cache = 1024

table\_open\_cache = 1024

net\_buffer\_length = 16K

thread\_stack = 512K

sort\_buffer\_size = 2M

read\_buffer\_size = 2M

read\_rnd\_buffer\_size = 8M

join\_buffer\_size = 128M

binlog\_cache\_size = 1M

innodb\_flush\_method = O\_DIRECT

innodb\_log\_files\_in\_group = 3

innodb\_log\_file\_size = 1G

innodb\_flush\_log\_at\_trx\_commit = 1

innodb\_file\_per\_table = 1

innodb\_buffer\_pool\_size = 1G

innodb\_locks\_unsafe\_for\_binlog = 1

innodb\_autoinc\_lock\_mode = 2

interactive\_timeout = 500

wait\_timeout = 500

connect\_timeout = 10

slow\_query\_log = 1

slow\_query\_log\_file = mysql-slow.log