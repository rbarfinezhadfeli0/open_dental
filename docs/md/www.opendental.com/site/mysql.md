Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

MySQL

See [Database Management Systems](databasemanagementsystems.html).

New installations of the Open Dental Trial Version use MariaDB. Existing Open Dental installations can continue to use MySQL or upgrade to
[MariaDB](mariadb.html).

The Open Dental database runs on MySQL which is a very robust and reliable database management system with extensive features and millions of installations worldwide.

* [www.mysql.com](http://www.mysql.com)
* [MySQL Documentation](https://dev.mysql.com/doc/)

MySQL versions:

* We recommend using MariaDB 10.5, however many offices are on MySQL 5.5.
* We do support MySQL version 5.6 but be sure to have a dedicated IT team and understand the risks before updating.
* We do not support MySQL version 5.7, but it may be used. We have some customers who have successfully used it.
* MySQL 8.0 is not compatible with Open Dental.

## General Overview

* A database is simply a collection of tables (about 400 in this case). The database server runs on one computer and every copy of Open Dental that connects to it is referred to as a client. The MySQL connection from the client is created after clicking OK on the [Choose Database](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7choosedatabase.html) window. The User and Password boxes must match a MySQL username and password ([MySQL Security](securitymysql.html)).
* Overall configuration of MySQL is controlled by the my.ini file on the database server. Inside of the my.ini file is a data path variable which is set when MySQL is installed or upgraded. The database files themselves (**mysql\data**) are always located on the same computer where MySQL is installed, not to another computer or NAS (too slow).
* In MySQL, certain words are reserved and cannot be used as identifiers for the database, tables, columns, etc. Also, databases should not be named only numbers (e.g., 2023). Do not use databases named *mysql*.
* MySQL Server Variables: There are some users who do not use the Open Dental Installer (Trial Version) to install MySQL. We only support MySQL 5.5 or MariaDB in our installer. Any other versions of MySQL or MariaDB are not supported by Open Dental and may cause problems with the database. In addition, MySQL must be installed using the MyISAM default engine, not InnoDB. If the installer provided by Open Dental is not used, extra server variables may appear as part of the installation.

  MySQL server variables are stored in the my.ini file that is part of the installation process. If our installer is not used, a variety of errors is common. Errors also tend to happen during an update process, corrupting the database. If unsure if MySQL server variables are the problem, look at this file: **C:\Program Files\MySQL\MySQL Server 5.5\my.ini**. It should look like the examples in [my.ini](myini.html).

## How to Determine if MySQL is Installed

MySQL should be installed on the server. There are two ways to ensure MySQL is installed:

1. On the server, go to Services. See if the MySQL service is listed.
2. On the server, go to Add or Remove programs. See if an existing installation of MySQL is listed.

## How to Determine if MySQL is Running

The MySQL server runs as a service on one computer. To easily determine if MySQL is running, use the management console.

1. Right-click on Computer and click **Manage**.
2. Open Services and Applications.
3. Open Services. These are all the programs (services) that are running in the background without a user interface. MySQL would show as started.

## How to Determine the current MySQL Version

1. On the server, from Windows, open Services.
2. Navigate to the MySQL service, then right-click to view properties.
3. In the Path to Executable, find the path to mysqld.exe. (Typically, **C:\Program Files (x86)\MySQL\MySQL Server 5.5\bin\mysqld.exe**)
4. Open that path, then right-click on *mysqld.exe* and select properties.
5. In the details tab, note the version.

## How to Start/Stop the MySQL Service

Option 1:

1. From Windows, run CMD as an administrator.
2. To start the MySQL service, type net start mysql.
3. To stop the MySQL service, type net stop mysql.

Option 2:

1. From Windows, open Services.
2. Find MySQL in the list.
3. Click Start or Stop.

Option 3:

1. Open the [Service Manager](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7servicemanager.html).
2. Double-click MySQL from the list.
3. Click Start or Stop.

To access the data in the MySQL database, use the table viewer in [User Query](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7queryoverview.html).