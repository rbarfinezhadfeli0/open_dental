Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Daisy Chain Replication

Daisy chain [Replication](replication.html) configuration is very complex and should only be attempted by users who are experienced with replication. Incorrect setup can result in corrupt data, computer crashes, or other serious consequences. For a one-way replication configuration, see [One-Way Replication](replicationoneway.html).

Note:

* The recommended steps below include setting up auto increment variables to avoid data collision. If you already use random primary keys instead, see [Daisy Chain Replication: Add Server (random primary keys)](replicationdaisychainnewserverrandomprimary.html).
* It is recommended to use a folder synchronization software for the [A to Z Folder](atozfolder.html) when using replication. See [Online Backups](backupsonline.html).
* If replication is currently setup and you are trying to re-create the replication setup, you must first stop the existing Replica service by running the SLAVE STOP; while the MySQL service is started.
* Versions of MySQL or MariaDB must match on all servers.
* For instructions when updating, see [Replication: Update Open Dental Version](replicationupdateod.html).
* To add a new server to the chain, or remove a server, see [Daisy Chain Replication: Add Server](replicationdaisychainnewserver.html).

## Instructions

MySQL comes with its own replication capabilities.

1. **Add servers and install the *OpenDentalReplicationService* to each Replica**. See [Replication Setup](replicationservers.html).
    You must have the [Open Dental Replication Service](opendentalreplicationservice.html) when running Daisy Chain Replication. The service will notify all users and IT staff if replication crashes via [Alerts](alerts.html). We are not responsible for the damage done when databases continue to be used after an error crashes replication.
2. **Stop the MySQL service on all replication servers (net stop mysql)**. On some operating systems, this will require you go into the system services in Control Panel, Administrative Tools, Services and stop the MySQL service manually. If the MySQL service is started on any replication server before step 5, then replication will fail.
3. **On all replication servers, wipe out all loose files in the mysql data directory which do not reside in a subfolder.** If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, then all of the "ib" files can be moved to a loose files folder. If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, the "ib" files should not be removed.
4. **Copy the information that corresponds with your database management system.**
   * If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, make an identical database copy on all replication servers.
   * If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, make an identical data directory copy on all replication servers.The replicated database or data directory must be exactly the same on all replication servers before replication begins the first time.
5. **On all replications servers, set auto increment / offset variables in the my.ini file**. Do this before going to the next step. See [Replication Auto Increment](replicationautoincrement.html).
6. **Make sure all the servers are synced to the same date and time**. If locations are in different time zones, data will be synced but may not show at all locations.
7. **Start the MySQL service on all replication servers (net start mysql)**. On some operating systems, such as Windows Vista, this will require you go into the system services in Control Panel, Administrative Tools, Services and start the MySQL service manually.
8. **Set each replication server's Primary (Master)**. Go the command line and navigate to the appropriate bin folder of the MySQL service (typically **C:\Program Files\MySQL\MySQL Server 5.5\bin** or **C:\Program Files\MariaDB 10.5\bin**) and type the following: mysql -u root opendental where opendental is the name of the database. If you have a MySQL user password, add -p to the command.

   CHANGE MASTER TO

   MASTER\_HOST = 'MASTER\_OF\_THIS\_SERVER',

   MASTER\_USER = 'repl',

   MASTER\_PASSWORD = 'ENTER PASSWORD HERE';

   * Set MASTER\_HOST to either the IP address or computer name of the replication Primary (Master) of this server. We recommend IP address to reduce possible DNS issues.
   * Set MASTER\_PASSWORD to a password of your choosing.
9. **For each replication server, run the following queries to grant permission for any replication Replica (Slave) to read data**.

   GRANT CREATE TEMPORARY TABLES ON opendental.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   GRANT SUPER ON \*.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   GRANT REPLICATION SLAVE ON \*.\* TO'repl' IDENTIFIED BY 'ENTER PASSWORD HERE';

   * The opendental.\* should be the name of your mysql database and must be lowercase. The .\* means everything within the specified database.
10. **Run the START SLAVE; in the mysql command interface for each replication server in the chain**.
11. **Run the SHOW SLAVE STATUS\G; in the mysql command interface for each replication server in the chain**. Make sure that the Slave IO Running and Slave SQL Running columns both say, Yes.
    ![](images/Replication_slavestatus.png)
12. **How to test replication between two replication servers**. Only test two replication servers at a time. We recommend testing the first replication server in the chain with the last replication server in the chain. If the test fails, make several smaller tests between consecutive replication servers.
    * Ensure replication is working across each of the servers by performing the following:
      1. Create an appointment on Server 1 and verify the appointment shows up on ALL other servers.
      2. Make a change to the appointment on Server 2 and verify that the change reflects on ALL other servers.
      3. Repeat Step 2 until you have made a change from each server and verified the changes reflected on all other servers.
    * It is important to make a change from EVERY server and make sure those changes are reflected on each server.

|  | Server\_1 IP 192.168.0.1database=databasename | Server\_2 IP 192.168.0.2database=databasename |
| --- | --- | --- |
| Check the log files to make sure the files were created and time stamps are recent. **C:\mysql\data** | **C:\mysql\data>dir**  02/22/2008 01:25 PM 57 relay-log.info  02/22/2008 09:12 PM 235 server-relay-bin.000043  02/22/2008 09:12 PM 26 server-relay-bin.index  02/22/2008 01:22 PM 17,642 server.err  02/22/2008 01:22 PM 5 server.pid | **C:\mysql\data>dir**\  02/22/2008 01:25 PM 57 relay-log.info  02/22/2008 09:12 PM 235 server-relay-bin.000043  02/22/2008 09:12 PM 26 server-relay-bin.index  02/22/2008 01:22 PM 17,642 server.err  02/22/2008 01:22 PM 5 server.pid |