Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MariaDB

See [Advanced Topics](advancedtopics.html).

## Information from Open Dental HQ

On Wednesday, July 14th, 2021, Open Dental released a new trial installer package. The new trial installer package contains the MariaDB application in place of the MySQL application. We are slowly transitioning our users from using MySQL version 5.5 to having them use MariaDB version 10.5. All new Open Dental users use MariaDB.

Existing Open Dental users may upgrade from MySQL to MariaDB if they choose, but it is not a requirement. See *Database Management System Upgrade Wizard*  below for details.

The Open Dental application works with either MySQL or MariaDB. Open Dental remains compatible with MySQL versions 5.5, 5.6, and 5.7, in addition to all versions of MariaDB up through version 10.5.

## About MariaDB

MariaDB was created by the original developers of MySQL, so think of MariaDB as an extension of the MySQL application. When MySQL version 5.6 was under development, the company was bought out by Oracle, and Oracle took over the development of MySQL starting at version 5.6. The original MySQL developers had concerns at that time that Oracle might slowly try to kill MySQL since MySQL was in direct competition with Oracle. As a result, the original MySQL developers created a new company called MariaDB, and they took a copy of the MySQL source code for versions 5.5 and 5.6. The MariaDB company then continued developing the MySQL application (but under the new name MariaDB). The MariaDB company has a philosophy that is closely aligned with that of Open Dental, in that software should remain open source as much as possible, and it is unknown if Oracle will continue to allow MySQL to be completely open source into the future. MariaDB currently has the following versions: 5.5, 5.6, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5, and 10.6. Open Dental is using MariaDB version 10.5 for the time being.

## General Overview

The Open Dental database runs on MariaDB 10.5 which is a very robust and reliable database. See [www.mariadb.com](https://mariadb.com/)

MariaDB and MySQL are closely related, some windows in Open Dental continue to use MySQL as the terminology.

* A database is simply a collection of tables (about 390 in this case). The database server runs on one computer and every copy of Open Dental that connects to it is referred to as a client. The MariaDB connection from the client is created after clicking OK on the [Choose Database](choosedatabase.html) window. The User and Password boxes must match a MySQL username and password ([MySQL Security](securitymysql.html)).
* Overall configuration of MariaDB is controlled by the my.ini file on the database server. Inside of the my.ini file is a data path Variable which is set when MariaDB is installed or upgraded. The database files themselves are located on the same computer where MariaDB is installed, not to another computer or NAS (too slow).
* In MariaDB, certain words are reserved and cannot be used as identifiers for the database, tables, columns, etc. See [MariaDB Reserved Words](https://mariadb.com/kb/en/reserved-words/). Also, databases should not be named only numbers (e.g., 2021). Do not use databases named *mysql*.
* MariaDB Server Variables: There are some users who do not use the Open Dental Installer (Trial Version) to install MariaDB. We only support MariaDB 10.5 in our installer. Any other versions of MySQL or MariaDB installed outside the Trial Version are not supported by Open Dental and may cause problems with the database. In addition, MariaDB must be installed using the myISAM default engine, not InnoDb or other storage engines (e.g., Aria). If the installer provided by Open Dental is not used, extra server variables may appear as part of the installation.
* MariaDB server variables are stored in the my.ini file that is part of the installation process. If our installer is not used, variety of errors can occur. Errors also tend to happen during an update process, corrupting the database. If unsure if server variables are the problem, look at this file: **C:\Program Files\MariaDB\my.ini.** It should look like the examples in [my.ini](myini.html).

## Database Management System Upgrade Wizard

Existing Open Dental Users can utilize the Database Management System Upgrade Wizard to upgrade from MySQL to MariaDB 10.5.19:

We recommend contacting Open Dental Support for assistance with the upgrade.

Note: Offices must be on support with an active registration key to run this tool on the selected database

**System Requirements:**

* The Upgrade Wizard must be run on the Open Dental server (localhost).
* If using Windows 10 (or newer) or Windows Server 2016 (or newer) the following Windows update must be installed: [KB2999226](https://support.microsoft.com/en-us/topic/update-for-universal-c-runtime-in-windows-c0514201-7fe6-95a3-b0a5-287930f3560c)
* MySQL 5.5 or MySQL 5.6 must be installed and currently functional.
* Adequate storage space to create two full backups of the \mysql\data\ folder, plus an additional 220MBs.

**Upgrade Steps**:

1. Clean up the **mysql/data** folder. See [MySQL Data Directory Management](mysqlmanage.html) for details.
2. Ensure Open Dental is closed on all workstations. On the server, log into Open Dental and go to Tools, Misc Tools, [Shutdown All Workstations](shutdown.html), **Shutdown All**.
3. On the Server, open Services from Windows and stop any *OpenDentXXXX* services (e.g., OpenDentalService, OpenDentalEConnector), as well as any Third-Party services that access the Open Dental database.
4. Download the following upgrade tool: [ODDbmsUpgradeTool](../resources/ODDbmsUpgradeTool.exe)
5. Right-click the ODDbmsUpgradeTool.exe and **Run as Administrator**.
6. Ensure MariaDB is selected in the DBMS Type drop down menu and click **Next**.
![](images/mariaDBDBMS1.png)7. Modify the Connection Settings, Backup Location, and Install Location as needed. If a MySQL password is set, enter it into the *DBMS Password* field. We recommend leaving *Install Location* at default.
![](images/mariaDBDBMS2.png)8. Click **Upgrade**.
9. Once the process finishes successfully, close the wizard, and launch Open Dental on the server.
10. A prompt *Tables will now be backed up, optimized, and repaired. This will take a minute or two. Continue?*  will appear, click **OK**.
11. Once the process is complete, the upgrade is finished. Start any services that were stopped in Step 2.

## How to Determine if MariaDB is Installed

MariaDB should be installed on the server. To ensure MariaDB is installed:

1. On the server, go to Services. See if the MySQL service is listed. Right-click and select properties. The Path to Executable should include a MariaDB folder.
2. On the server, go to Add or Remove programs. See if an existing installation of MariaDB is listed.

## How to Determine if MySQL is Running

The MariaDB server runs as a service (named MySQL) on one computer. To easily determine if MySQL is running, open Services and look for MySQL.

## How to Determine the current MariaDB Version

1. On the server, open Services.
2. Navigate to the MySQL service, then right-click to view properties.
3. In the Path to Executable, find the path to mysqld.exe. (Typically, **C:\Program Files\MariaDB 10.5\bin\mysqld.exe**)
4. Open that path, then right-click on *mysqld.exe* and select properties.
5. In the details tab, note the version.

## How to Start/Stop the MySQL Service

Reminder: The MariaDB Service is named MySQL.

Option 1:

1. Run CMD as an administrator.
2. To start the MySQL service, type net start mysql.
3. To stop the MySQL service, type net stop mysql.

Option 2:

1. Open Services.
2. Find MySQL in the list.
3. Click Start or Stop.

Option 3:

1. Open the [Service Manager](servicemanager.html).
2. Double-click MySQL from the list.
3. Click Start or Stop.

To access the data in the MySQL database, use the table viewer in [User Query](queryoverview.html).