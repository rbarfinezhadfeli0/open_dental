Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Daisy Chain Replication: Add Server (random primary keys)

The setup steps below are for adding a new server to daisy chain [Replication](replication.html) when using random primary keys.

Also see: [Daisy Chain Replication](replicationdaisychain.html).

## On the New Replication Server

1. On the new server (location) install the MySQL application if it is not already installed.
   1. Download the Trial version.
   2. Right-click on the downloaded file and Run as administrator.
   3. Click Update MySQL to check the appropriate boxes.
   4. Make any changes if needed to data paths.
   5. Click Install. The installer will begin to install the MySQL Server.
   6. Follow the directions carefully. We recommend using the default selections.
   7. When you reach the MySQL Server Setup window, uncheck the *Launch the MySQL Instance Configuration Wizard* box then click Finish.
2. Enable Replication on the new server by setting up the my.ini file and saving it (**C:\Program Files (x86)\MySQL\MySQL Server 5.5**).

   Add the following lines to the [mysqld] section of the my.ini file:

   log-bin=mysql-bin

   server-id=3

   log-slave-updates

   replicate-do-db=opendental

   relay-log=server-relay-bin

   skip-name-resolve

   * Change the server-id as needed. The server ID must be unique for each replication server.
   * Change the replicate-do-db to the name of the database to replicate.
   * Change the relay-log value to include the name of the server you are on. ex) relay-log=ComputerName-relay-bin.
3. Restart the MySQL service. On some operating systems this will require you go into the system services in Control Panel, Administrative Tools, Services and start the MySQL service manually.

## Adding the New Server to the Daisy Chain

Make sure to complete each numbered step before continuing on to the next step or replication will fail. For the steps that say *on all replication servers...* you must perform the step on all replication servers (Primary and Replicas) before continuing on to the next step.

1. Pick a database from one of the replication servers to act as the Primary. We will refer to the server where this database is located as the *Primary* and all other replication servers as *Replica* in the text below.
2. On the Primary server where the database is located, log in to Open Dental. In the main menu, click Setup, Advanced Setup, Replication. Click Add to add a server. When complete, this database is ready to be replicated to other servers.
   * If using Random Primary Keys, enter its primary keys as well. Follow steps 3 and 4 on [Random Primary Keys](replicationprimarykeys.html).
3. Install the [Open Dental Replication Service](opendentalreplicationservice.html) on each Replica.
4. On all replication servers (except the new server):
   1. Go the command line and navigate to the appropriate bin folder of the MySQL service. Typically **C:\Program Files\MySQL\MySQL Server 5.5\bin** or **C:\Program Files\MariaDB 10.5\bin**
       Type the following: mysql -u root opendental where opendental is the name of the database. If you have a MySQL user password, add -p to the command.
   2. Run the following SQL statement: STOP SLAVE; (this stops the replication thread within MySQL).
   3. Stop the MySQL service.
   4. Backup and remove all files in the mysql data directory which do not reside in a subfolder, except for any files beginning with ib (e.g. iblog\_file0, ib\_logfile1, ibdata1).
5. On all Replica servers (not the Primary or new server): Backup and remove the current replicated database (typically named *opendental*) from the data directory. You must fully complete the above steps on all replication servers before proceeding or replication will fail.
6. Copy the database folder on the Primary to the data directory on all Replicas and the new server.
7. On all replication servers (Primary, Replicas, and new server): Repeat steps 6 - 10 from Daisy Chain Replication Setup. At this point the new server becomes a Replica.
8. Install the [Open Dental Replication Service](opendentalreplicationservice.html) on the new server(s). The service will notify all users and IT staff if replication crashes via Alerts.