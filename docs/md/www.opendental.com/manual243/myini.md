Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

my.ini

See [Database Management Systems](databasemanagementsystems.html).

There is a small text file called my.ini that is part of the [MySQL](mysql.html) or [MariaDB](mariadb.html) installation.

* For MySQL 5.5 users, it is usually found at **C:\Program Files (x86)\MySQL\MySQL Server 5.5\**
* For MySQL 5.6 users, it is usually found at **C:\Program Files\MySQL\MySQL Server 5.6\**
* For MariaDB 10.5 users, it is usually found at **C:\Program Files\MariaDB 10.5\**

## MariaDB 10.5

The file for MariaDB users will look like this:

[mysqld]

basedir="C:/Program Files/MariaDB 10.5/"

datadir="C:/mysql/data/"

default-storage-engine=MyISAM

max\_allowed\_packet=40M

max\_connections=3000

port=3306

sql\_mode=''

explicit\_defaults\_for\_timestamp=1

innodb\_file\_per\_table=1

myisam\_recover\_options=OFF

optimizer\_switch=split\_materialized=off

## MySQL 5.5

The files looks like this:

[mysqld]

basedir="C:/Program Files (x86)/MySQL/MySQL Server 5.5/"

datadir="C:/mysql/data/"

default-storage-engine=MyISAM

skip-innodb

max\_allowed\_packet=40M

## MySQL 5.0

Or, if you are still using MySQL 5.0, then it might look like this:

[mysqld]

basedir="C:/Program Files/MySQL/MySQL Server 5.0/"

datadir="C:/mysql/data/"

skip-innodb

## Alternate Options

If you are a power user, you can look at the examples of alternate my.ini files in the same folder. For example, open my-huge.ini and look under the [mysqld] section. Selective copying of some of those Variables above into your my.ini file would help to take advantage of a more powerful server. For example, here is a suggested my.ini file. DO NOT change the existing path of the basedir or datadir. The paths in the example below might not be the same as on your system.

[mysqld]

basedir="C:/Program Files/MySQL/MySQL Server 5.5/"

datadir="C:/mysql/data/"

default-storage-engine=MyISAM

skip-innodb

max\_allowed\_packet=40M

key\_buffer = 384M

table\_cache = 512

sort\_buffer\_size = 2M

read\_buffer\_size = 2M

read\_rnd\_buffer\_size = 8M

myisam\_sort\_buffer\_size = 64M

thread\_cache\_size = 8

query\_cache\_size = 32M

tmp\_table\_size = 32M

join\_buffer\_size = 128M

Because the my.ini file is the Program Files folder, you will not be allowed by Windows to edit the file directly. There are two workarounds to the Windows security issue:

1. Launch Notepad as an administrator. Then, open the my.ini file from within Notepad by browsing to it.
2. Copy and paste the entire my.ini file from an alternate temporary location into the target directory.

In both cases, stop the MySQL service before making the changes, and then start the service after saving the changes.