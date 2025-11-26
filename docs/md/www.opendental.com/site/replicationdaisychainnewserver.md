Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Daisy Chain Replication: Add Server

The steps below explain how to add a new server when using daisy chain [Replication](replication.html).

Also see: [Daisy Chain Replication](replicationdaisychain.html).

Note:

* The server should be added after business hours because you will need to stop the MySQL service and no one can be using a database.
* Every time you add or remove a server, you must also change the auto\_increment\_increment variable in the my.ini file on all servers to reflect the new total number of servers.

1. Add the new server to [Replication Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7replicationservers.html). This step can alternatively be completed at the end of setup.
2. Shutdown all workstations. [Shutdown Workstations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7shutdown.html)
3. On the new server (location) install the MySQL application if it is not already installed.
   * Download the [Trial](trial.html) version.
   * Right-click on the downloaded file and Run as administrator.
   * Click Update MySQL to check the appropriate boxes.
   * Make any changes if needed to data paths.
   * Click Install. The installer will begin to install the MySQL Server.
   * Follow the directions carefully. We recommend using the default selections.
   * When you reach the MySQL Server Setup window, uncheck the *Launch the MySQL Instance Configuration Wizard* box then click Finish.
4. On all existing servers:
   * Run the following SQL statement: STOP SLAVE;(This stops the replication thread within MySQL.)
   * Stop the MySQL service.
   * Open the my.ini file and update the auto\_increment\_increment value to reflect the new total number of servers.
   * Backup and remove all files in the mysql data directory which do not reside in a subfolder, except for any files beginning with ib (e.g., iblog\_file0, ib\_logfile1, ibdata1).
   * On all Replica servers (not the server with the most up-to-date data (Primary)): Backup and remove the current replicated database (typically named opendental) from the data directory. You must fully complete the above steps on all replication servers before proceeding to next step or replication will fail.
   * Copy the database folder on the Primary server to the data directory on all Replicas.
5. On the new replication servers, set autoincrement / offset variables in the my.ini file. Do this before going to the next step. See [Replication Auto Increment](replicationautoincrement.html).
6. Repeat steps 6 - 10 from [Daisy Chain Replication](replicationdaisychain.html).
7. On all replication servers: Verify that replication is running successfully by executing the following SQL statement and checking for the Slave\_IO\_Running and Slave\_SQL\_Running columns to both say Yes: SHOW SLAVE STATUS;
8. On all replication servers: If you blocked the MySQL service network port in step 1, unblock it, making sure to unblock incoming and outgoing.
9. Install the [Open Dental Replication Service](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html) on the new server(s). The service will notify all users and IT staff if replication crashes via Alerts. Open Dental is not responsible for the damage done when databases continue to be used after an error crashes replication.