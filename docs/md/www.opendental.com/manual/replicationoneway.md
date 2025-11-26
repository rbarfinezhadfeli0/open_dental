Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

One-Way Replication

MySQL comes with its own [Replication](replication.html) capabilities. The recommended steps below include setting up auto-increment variables to avoid data collision. If you already use random primary keys instead, see [One-Way Replication (random primary keys)](replicationonewayrandomprimary.html).

Note: Versions of MySQL or MariaDB must match on all servers.

## Instructions

1. **Add servers and install the *OpenDentalReplicationService* to each Replica**. See [Replication Setup](replicationservers.html).
2. **Stop the MySQL Service on both the Primary and Replica (net stop mysql)**. On some operating systems, this will require you go into the system services in Control Panel, Administrative Tools, Services and stop the MySQL service manually. If the MySQL service is started on the Primary or Replica before step 5, then replication on the Replica will fail.
3. **On all replication servers, wipe out all loose files in the mysql data directory which do not reside in a subfolder.** If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, then all of the "ib" files can be moved to a loose files folder. If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, the "ib" files should not be removed.
4. **Make an identical database or data directory copy from Primary to Replica.** If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, a database copy from Primary to Replica is sufficient. If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, make an identical of the entire data directory from the Primary to Replica server. The replicated database or data directory must be exactly the same before replication begins the first time.
   * If the one-way replication server is being added to an existing daisy chain, the database or data directory copy must be a snapshot from the point in time that the daisy chain was setup (before any SQL statements were ever replicated). If you do not have this older copy of the database or data directory, reset the daisy chain immediately before copying the database or data directory to the one-way server.
5. **On the Replica and Primary, set auto increment / offset variables in the my.ini file**. See [Replication Auto Increment](replicationautoincrement.html).
6. **Make sure the Primary and Replica are synced to the same date and time**.
7. **Start the MySQL service on the Primary and Replica (net start mysql)**. On some operating systems, such as Windows Vista, this will require you go into the system services in Control Panel, Administrative Tools, Services and start the MYSQL service manually.
8. **On the Replica, point the Replica to the Primary (Master)**. Go the command line and navigate to the appropriate bin folder of the MySQL service, typically **C:\Program Files\MySQL\MySQL Server 5.5\bin** or **C:\Program Files\MariaDB 10.5\bin**.
    Type the following: mysql -u root opendental where opendental is the name of the database. If you have a MySQL user password, add -p and -h to the command.

   For users on MySQL 5.5 / 5.6 / MariaDB 10.5 or lower:

   CHANGE MASTER TO

   MASTER\_HOST = 'SERVER\_MASTER',

   MASTER\_USER = 'repl',

   MASTER\_PASSWORD = 'ENTER PASSWORD HERE';

   For users on MariaDB 10.11:

   CHANGE MASTER TO

   MASTER\_HOST = 'SERVER\_MASTER',

   MASTER\_USER = 'repl',

   MASTER\_PASSWORD = 'ENTER PASSWORD HERE',

   MASTER\_USE\_GTID = no;

   * Set MASTER\_HOST to either the IP address or computer name of the Primary (Master).
   * Set MASTER\_PASSWORD to a password of your choosing.

   Note: If using a port alternate to 3306, MASTER\_PORT may also need to be run.
9. **Run the following queries on the Primary to grant permission for the Replica to read data**. This step is easy to get wrong.

   GRANT CREATE TEMPORARY TABLES ON opendental.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   GRANT SUPER ON \*.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   GRANT REPLICATION SLAVE ON \*.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   * The opendental.\* should be the name of your mysql database and must be lowercase. The .\* means everything within the specified database.
10. **Run the START SLAVE; in the mysql command interface on the Replica**.
11. **Run SHOW SLAVE STATUS \G in the mysql command interface on the Replica**. Make sure that the Slave IO Running and Slave SQL Running columns both say, Yes.
    ![](images/Replication_slavestatus.png)
12. Launch Open Dental on Primary Server using *LocalHost* and the replicated database. Input report server settings. See [Report Setup: Report Server](reportserver.html).
13. Ensure replication is working as intended by performing the following:
    1. On the Primary Server, create an appointment for a test patient and make note of the patient's Patient Number. See [Edit Patient Information](patientedit.html)
    2. Verify the appointment was created on the Report Server by querying it from the Primary Server. Go to Reports in the main menu, User Query and ensure that the "Run on report server" box is checked before running the following query: SELECT \* FROM appointment WHERE PatNum = [Patient's PatNum] ORDER BY SecDateTEntry DESC LIMIT 10;
    3. On the Primary server: Delete the appointment and run the above query to again to verify the appointment was removed from the report server.

**Alternative Test**

|  | Master IP 192.168.0.1  database=databasename | Slave IP 192.168.0.2  database=databasename |
| --- | --- | --- |
| Launch Open Dental on Primary Server using LocalHost and the replicated database, then check the log files to make sure the files were created and time stamps are recent. **C:\mysql\data** | **C:\mysql\data>dir**  02/22/2008 01:25 PM 57 relay-log.info  02/22/2008 09:12 PM 235 server-relay-bin.000043  02/22/2008 09:12 PM 26 server-relay-bin.index  02/22/2008 01:22 PM 17,642 server.err  02/22/2008 01:22 PM 5 server.pid | **C:\mysql\data>dir**  02/22/2008 01:25 PM 57 relay-log.info  02/22/2008 09:12 PM 235 server-relay-bin.000043  02/22/2008 09:12 PM 26 server-relay-bin.index  02/22/2008 01:22 PM 17,642 server.err  02/22/2008 01:22 PM 5 server.pid |