Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

InnoDB

See [Database Management Systems](databasemanagementsystems.html).

InnoDB is a storage engine that can be used as a last-resort alternative to my MyISAM for databases experiencing slowness.

[MySQL](mysql.html) and [MariaDB](mariadb.html) can store data using a handful of different storage engines. Almost all installations of Open Dental use the MyISAM storage engine. For large offices, MyISAM tables lock up for short periods of time when complex queries are being run (e.g., running the Recall List).

## Before Converting to InnoDB

If experiencing slowness:

1. Update to the most recent version of Open Dental.
2. Follow the steps on [Troubleshooting Slowness](troubleshootingslowness.html).
3. Bring the slowness issue to the attention of Open Dental Support in case there is a bug that needs to be fixed.
4. As a last resort, consider switching the storage engine from MyISAM to InnoDB. The MyISAM storage engine locks at the table level and the InnoDB storage engine locks at the row level, so InnoDB does not run into locking slowness as often as MyISAM does.

Before switching to InnoDB, the practice must have reliable IT. There are steps in the process that require the assistance of an IT professional that Open Dental Support does not assist with.

MySQL version 5.5 is the minimum version required to convert the storage engine to InnoDB, however we strongly recommend the database is upgraded to MariaDB 10.5 before converting.

InnoDB users are responsible for their own backups.

## Convert to InnoDB Storage Engine

**Replication Warning**: It is suggested that the practice call and speak with a Replication Coordinator at Open Dental before this process is started.

These steps are for advanced technical users and need to be performed on all active databases within the database server to be converted to InnoDB format.

Review the backup/restore strategy before converting the database to ensure that users know how to validate restored backups. It probably involves a dump to text file instead of copying files. Users cannot use Open Dental's built in backup/restore tool.

1. Make certain that all users stay out of Open Dental during the conversion process. This could take a couple of hours depending on the size of the database.
2. Stop the MySQL Service.
3. Make a backup copy of the data folder for safety. Typically found in **C:\mysql\data**.
4. Change the my.ini file to update existing items and include InnoDB specific items (see below):

   default-storage-engine=InnoDB
    key\_buffer\_size=512MB
    innodb\_buffer\_pool\_instances=1
    innodb\_buffer\_pool\_size = 8192M
    innodb\_log\_file\_size = 2048M
    innodb\_file\_per\_table = 1
    innodb\_fast\_shutdown=0
    #If using a MySQL Version 5.6 or higher, or using MariaDB, remove the hash sign for the line below
    #eq\_range\_index\_dive\_limit=0

   * If using, MySQL Version 5.6 or higher, or using MariaDB, remove the *#* symbol from the final line as indicated above.
   * Buffer pool instances should be 1 in MariaDB. For MySQL 5.5 or 5.6 it should be equal to the logical cpu core quantity.
   * Buffer pool size can generally be half of the available ram when MySQL is not running. More information on how to determine this value see: <https://mariadb.com/kb/en/innodb-buffer-pool/>
   * The log file size can generally be 4096M in MariaDB. For MySQL 5.5 or 5.6 it should be 2048M. For more information on the log file, see <https://mariadb.com/kb/en/innodb-redo-log/>
5. Start the MySQL service.
6. Launch the database through the Open Dental application.
7. Go to Tools, Database Maintenance. Select the Tools tab and click InnoDB.
   ![](images/InnoDBdatabasetools.png)
8. Use the interface to convert all Open Dental tables from MyISAM to InnoDB. This process takes a long time since it is rewriting all of the database tables. Ensure that it ends successfully.
   ![](images/innoDBdatabaseconvert.png)

All of the tables in the database should have changed from three files per table (FRM, MYD, MYI) to two files per table (FRM, IBD).

If there are multiple databases on the server users need to follow steps 6 and 7 for each database.

## InnoDB Backup and Restore Methods

This database type does not function with most online backups. It is important to have a backup plan in place prior to making changes. A combination of backup methods is recommended, with at least one method being automated and incremental.

Backup methods vary between *Hot* and *Cold*. Hot Backups allow users to continue working while Cold Backups do not. Restores are considered *Cold* as users should not be using the Open Dental database while a restore is in progress.

**Open Dental Backup Tool (Hot Method)**: Use the built-in [Backup Tool](backuptool.html) to routinely make backups of the entire database. The tool can be used for backups only, not restores.

**Data Directory Backup (Cold Method)**: This solution involves routinely making a copy of the entire data directory. This can require a fair amount of disk space.

To back up using this method:

1. Stop the MySQL service. Ensure that it stops without errors.
2. Copy the MySQL Data directory (e.g., **C:\mysql\data**).
3. Start the MySQL Service.

**Mariabackup (Hot Method)**: MariaDB has a built-in utility to create hot, full and incremental backups. IT can research this on [mariadb.com](https://mariadb.com/kb/en/mariabackup-overview/) and utilize Windows task scheduler to create automated backups. An incremental backup can still create lag and we do recommend doing a full, nightly backup with whatever other method is chosen.

**Binary Logs (Hot Method)**: This method requires specialized IT. The practice can use this method in conjunction with Mariabackup or a dump backup method to get up-to-the-minute recovery. This method requires shadow-copying the binary logs so they don't get set read-only and requires more in-depth knowledge of applying them to the backup for the additional data recovery.

**SQL Dump Backup (Hot Method)**: This method creates a smaller total file size, in a .sql file format, which can be further compressed as a .zip file. While this method can be done while Open Dental is in use, it may cause slowness while running.

To back up using this method

1. Run Windows Command Prompt as Administrator, then navigate to the MySQL *bin* folder (e.g. **C:\Program Files\MySQL\MySQL Server 5.5\bin**).
2. Run the following command, replacing ### with the database name (e.g. opendental). Adjust the target directory as necessary. Enter the MySQL root password when prompted, if required.
   mysqldump -u root -p --max-allowed-packet=1024MB --default-character-set=utf8 --verbose ### > C:\mysql\###.sql
3. The dump is located in the MySQL Folder directory (by default) when finished.

Note: If the dump process fails, it may be due to the *max-allowed-packet size* being too small. Increase the value for that variable and try again.

**Network Path Supplemental Backups (Hot Method)**: The [Supplemental Backups](supplementalbackups.html) utility in Open Dental can be used to create an automated, encrypted, zipped, database dump in a network or local location nightly. Network Path Supplemental Backups are a complete copy of a database but are not recommended to be relied upon as the primary backup method. The OpenDentalEConnector service performs this backup once every 7 days.

**Data Directory Restore (Cold)**: To restore a database using this method, follow the steps below.

1. On the computer being used to restore the database, ensure MySQL is installed and configured for InnoDB.
2. Stop the MySQL service.
3. Archive any existing MySQL Data directory.
4. Place the backup Data directory in the MySQL directory (e.g. **C:\mysql**).
5. Start the MySQL service.

**SQL Dump Restore (Cold)**: To restore a database using this method, follow the steps below.

1. On the restore computer, ensure MySQL is installed and configured for InnoDB.
2. Run Windows Command Prompt, then navigate to the MySQL *bin* folder.
3. Run the following command. Enter the MySQL root password when prompted, if required.
   mysql -u root -p
4. Run the following command, replacing ### with a database name that currently does not exist in the MySQL data directory (e.g. opendental\_[datetoday]).
   CREATE DATABASE ### CHARACTER SET=UTF8 COLLATE=utf8\_general\_ci;
5. Run the following command, replacing ### with the database name that was just created.
   use ###
6. Run the following command to verify an empty database is being used.
   SHOW TABLES\G
    If this command returns anything other than *Empty set*, return to step 5 and verify the database name used is unique.
7. Run the following command replacing ### with the name of the dump file (e.g. opendental) to import the dump into the newly created empty database.
   SOURCE C:/mysql/###.sql;

**Alternative InnoDB Backup and Restore Methods Using Third-Party Software (Varies)**: A backup and restore can also be achieved using 3rd-party software such as MySQL Workbench or SQLYog. Methods may be Hot or Cold and can vary by software. Please reference their documentation for more information. Also see: [Online Backups](backupsonline.html).