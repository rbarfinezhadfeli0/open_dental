Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Reinitialize Replication

Once [Replication](replication.html) failure has been detected, replication must be repaired before any users can access that server. The repair should be run after business hours if possible.

Also see [Replication Troubleshooting](replicationtroubleshooting.html).

Make sure to complete each numbered step before continuing on to the next step, or else replication will fail. For the steps that say *on all replication servers...* you must perform the step on all replication servers (Primary and Replicas) before continuing on to the next step.

1. (Recommended) On all replication servers: Block the MySQL service network port (typically 3306) in the windows Firewall for both incoming and outgoing traffic. This step will prevent any client machines from connecting to any database while the repair is in progress.
2. Pick a database from one replication server that you think is the most up-to-date database. We will refer to the server where this database is located the 'Primary' and all other replication servers 'Replicas' in the text below.
3. On the Primary server, in the [Main Menu](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7mainmenu.html), click Setup, Advanced Setup, Replication. Click Clear at the lower right. If this button is not visible, the replication failure was not detected in the database, so skip this step and proceed to step 4.
   ![](images/replicationFailure.gif)
4. On all replication servers:
   1. Run the following SQL statement: STOP SLAVE; (This stops the replication thread within MySQL.)
   2. Stop the MySQL service.
   3. Backup and remove all files in the mysql data directory which do not reside in a subfolder, except for any files beginning with ib (e.g. iblog\_file0, ib\_logfile1, ibdata1).
5. On all Replica servers (not the Primary): Backup and remove the current replicated database (typically named opendental) from the data directory or the entire data directory depending on database management system or storage engine.
   * If all tables in all databases are MyISAM and the database management system in use is MySQL 5.5, only backup and remove the replicated database.
   * If all tables in all databases are MyISAM and the database management system in use is MySQL 5.6 or MariaDB 10.5 or any InnoDB tables exist in any database, backup and remove the entire data directory.

   Note: You must fully complete the steps 4 and 5 on all replication servers before proceeding to step 6 or replication will fail.
6. Copy the database folder or data directory on the Primary to all Replica servers.
7. On all replication servers: Repeat steps 6 - 10 from setup. [Daisy Chain Replication](replicationdaisychain.html), [One-Way Replication](replicationoneway.html)
8. On all replication servers: Verify that replication is running successfully by executing the following SQL statement and checking for the Slave\_IO\_Running and Slave\_SQL\_Running columns to both say Yes: SHOW SLAVE STATUS;
9. On all replication servers: If you blocked the MySQL service network port in step 1, unblock it, making sure to unblock incoming and outgoing.

## Alternate Repair

If the database is very large, then the above repair scenario may not be feasible. If you have a deeper understanding of replication and expertise in restarting failed replication, you might consider restarting replication and running all the queries below the failure point in the log.

MySQL also provides an enterprise monitor software that will graphically show your replication loop and will let you monitor the status of each server and how many seconds each one is behind its Primary. While this is a very useful tool, it is also expensive.