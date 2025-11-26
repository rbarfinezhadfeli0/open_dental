Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

MySQL Data Directory Management

See [Database Management Systems](databasemanagementsystems.html).

The **mysql/data** folder should be cleaned up by an IT Professional in the following scenarios:

* To resolve issues with hard drive space.
* As a prerequisite when migrating from MySQL to MariaDB.

## Considerations

Consider the following before beginning the cleanup process. These considerations are for MySQL versions 5.5 and 5.6, or MariaDB 10.5.

* Do not delete anything from this folder. Instead, move files or folders to a different location (typically the **mysql\backups** folder).
* Check for InnoDB tables before moving a database (.ibd files present or only table .frm files with no matching .myd or .myi).
* Do not delete or move anything out of the data directory that starts with 'ib', regardless of database engine.
* Do not move or delete folders in the data folder called 'mysql','sys','performance\_schema'.
* Do not move or delete binary logs, relay logs, or anything related to replication.

## Cleanup Suggestions

Any database with "backup" in the name can be moved out of the data folder and into a different folder. If cleaning up the data folder for a MariaDB upgrade, files can be moved to the **mysql/backups** folder. The backups folder should also be routinely cleaned up.

Note: Sort the data folder by Date Modified to which databases have been used recently.

## Cleanup Process

Before beginning the cleanup process, verify the database(s) are in MyISAM format and not in InnoDB before moving them.

1. Stop MySQL service.
2. Move databases from the data folder to a different directory.
   * If .PID file exists, the MySQL service may still be running. Verify it has stopped then disable the service until cleanup is complete.
3. Clean up \*.err files.
   * Move the entire file into the new directory.
   * There may be multiple files. The filename that contains the server name is the most current file.
4. If replication/binary log files are present, continue to Replication Cleanup below.
5. Restart the MySQL service.

## Replication Cleanup Process

Begin the Cleanup Process above, then follow the steps before for Replication Cleanup.

Start MySQL service, then in the MySQL Command Line, run the following command:  PURGE BINARY LOGS BEFORE NOW() - INTERVAL 10 DAY;

Note: If this does not work, stop the MySQL service and ensure Replication has caught up on all servers, then move the files into a backup folder. Do not delete the most recent binlog file. Instead, copy the files from this directory into **.\mysql\backups\YYYYMMDD** (use the current date).