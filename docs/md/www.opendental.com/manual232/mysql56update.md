Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MySQL 5.6

See [MySQL](mysql.html).

## MySQL 5.6

New installations of the Open Dental Trial Version use [MariaDB](mariadb.html). Existing Open Dental installations may be using MySQL 5.5, however we recommend upgrading to MariaDB 10.5. If choosing to upgrade from MySQL 5.5. to MySQL 5.6, there is a process to follow to prevent issues. These instructions are intended for IT professionals with MySQL experience.

## Why Upgrade?

We recommend updating to the 64-bit version of MariaDB 10.5, however some offices had already upgraded their databases to MySQL 5.6. There are several 'behind the scenes' changes with MySQL 5.6 that tend to make it more efficient than MySQL 5.5. The 64-bit version can also better utilize the processor and memory of the server, making the Open Dental experience more consistent for large offices.

## Upgrade to MySQL 5.6 64-bit:

Note: We recommend [Updating](update.html) Open Dental to the latest stable version prior to upgrading to MySQL 5.6

1. All users need to be out of the Open Dental program. [Shutdown Workstations](shutdown.html) all workstations from Open Dental.
2. Stop the MySQL service.
3. Make a backup of any live databases (this may need to be done prior to stopping the MySQL service depending on how backups are run).
4. Copy the *my.ini* file from the MySQL Server 5.5 program folder to the desktop for later use.
5. Uninstall MySQL Server 5.5. \*If the MySQL service does not uninstall, open an elevated command prompt and run the command:

   sc delete mysql

   This deletes the MySQL service from Windows.
6. (*Optional*) Rename the MySQL Server 5.5 program folder to "MySQL Server 5.5\_old".
7. Download and install [MySQL 5.6 64-bit version](../resources/MySQL%20Server%205.6.42%20%28x64%29.msi).
   * If not already installed, a prompt appears to install Microsoft Visual C++ 2010 Redistributable Package (x64) and Microsoft Visual C++ 2013 Redistributable Package (x64). Download the [Latest Supported Visual C++ downloads](https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0)
8. Edit the *my.ini* file on the desktop with the variables below. There may be other optimizations to make to the my.ini file if using [InnoDB](mysqlinnodb.html).
   * Update the "*basedir*" variable with the MySQL Server 5.6 program folder path:

     basedir="C:/Program Files/MySQL/MySQL Server 5.6/"
9. Move the modified *my.ini* in to the MySQL Server 5.6 program folder.
10. Install the MySQL service by opening an ELEVATED Command Prompt. Use one of the options below. Option 1 is the recommend way to install the service. The other two options are there for information. Be sure to change the commands as needed, if using a non-standard installation.
    * **Option 1**: Run the command:

      sc create MySQL binpath= "\"C:\Program Files\MySQL\MySQL Server 5.6\bin\mysqld.exe\" --defaults-file=\"C:\Program Files\MySQL\MySQL Server 5.6\my.ini\" MySQL" start= auto
    * **Option 2**: From the MySQL bin folder, run the command:

      mysqld.exe --install MySQL --defaults-file="C:\Program Files\MySQL\MySQL Server 5.6\my.ini"
    * **Option 3**: From the MySQL bin folder, run the command:

      mysqld --install
11. Start the MySQL service.
12. From the ELEVATED Command Prompt, in the *bin* folder of the MySQL Server 5.6 program folder, run this command:

    mysql\_upgrade -u root -f

    If using a MySQL user password, add *-p* to the command. This looks at all tables in all databases for incompatibilities with the current version of MySQL Server and also upgrades the system tables so that the practice can take advantage of new privileges, capabilities and changes that might have been introduced with the newer version.
13. Restart the MySQL service.
14. Launch Open Dental. It prompts to Optimize the database ("Tables will now be backed up, optimized, and repaired."), which should be done.
    * If this window is accidentally skipped, run the Optimize tool from the [Database Maintenance Tools Tab](databasemaintenancetools.html).