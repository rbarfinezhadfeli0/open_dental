Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Replication Troubleshooting

If you experience issues while using [Replication](replication.html), the steps below may be helpful. If you are unable to determine the issue, contact us. We will need the error log message to troubleshoot. There is an additional fee for replication support. See [Replication Support](https://opendental.com/site/fees.html#replication) for the current rate.

Offices that are down can connect directly to a working server that has the most up-to-date data so they can continue working, but with a slower than normal connection.

Initial Troubleshooting

1. Go to the command line and change the directory to the installed version of MySQL or MariaDB's bin folder. Default paths are:
   * C:\Program Files\MariaDB 10.5\bin
   * C:\Program Files (x86)\MySQL\MySQL Server 5.5\bin
2. Type the following: mysql -u root opendental where opendental is the name of the database. If you have a MySQL user password, add -p to the command.
3. Run SHOW SLAVE STATUS\G in the mysql command interface.
   ![](images/Replication_errorlog.gif)
4. Look through the error log for details about what caused replication to fail.
5. Refer to the problems and possible solutions below, or contact support for assistance. If support becomes involved they will need access to a copy of the database and all log files.

## Errors/Issues

Below are common errors. While a possible solutions is provided, we recommend contacting support for assistance. Only users who have an expert understanding of replication and how the office is setup should attempt a solution.

**Problem: SHOW SLAVE STATUS is showing an error of "Got fatal error 1236 from master when reading data from binary log: Client requested master to start replication from impossible position."**

Point all locations to one database, then [Reinitialize Replication](replicationreinitialize.html). We recommend that all locations connect to the database on the server with the most up-to-date data.

**Problem: Receive a message "This database is temporarily unavailable. Please connect instead to your alternate database at the other location".**

This means replication has failed on the server. Follow your response plan or contact your replication administrator. We recommend that all locations connect to the database on the server with the most up-to-date data.

If running a SHOW SLAVE STATUS command on the replication server which is giving the error message reveals that SLAVE\_IO\_RUNNING and SLAVE\_SQL\_RUNNING both says Yes, then log in to Open Dental on another replication server and access the Replication Setup Window ([Replication Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7replicationservers.html)) to use the Clear button for the Replication Failure at Server\_id (this field is not shown in the screen shot, because it only shows when a replication failure has occurred). When this issue occurs, it is because the replication problem has been resolved, but Open Dental is not aware that a fix has been implemented. Using the Clear button informs Open Dental that the issue has been resolved and allows users to access the server that was having issues.

**Problem: A replication failure is suspected, or an alert about the OpenDentalReplicationService has been generated.**

Ensure the OpenDentalReplicationService is running. Check the Logger file for additional information.

**Error: Unable to connect to host.**

1. Check that your Server Description exactly matches the computer name of the server for that location.
2. If a SHOW SLAVE STATUS command is run and there are no errors then check your server's Event Viewer. If the Event Viewer has a lost connection error, the likely scenario is that the Replica's read timeout aborted before the command was completed. Increase the read/write timeout. You may then be faced with a max packets error, in which case increase the allowed max packets as needed.

If none of these work, there is a chance your ibdata file was corrupted prior to performing these steps.

**Problem: CREATE TABLE mytable.**

This is the usual culprit. At a minimum, it must always be prefaced by DROP TABLE IF EXISTS mytable. This applies equally to temp tables that you may create. But even then, it's still dangerous because someone at another node might reference the same table at around the same time.

**Problem: Duplicate entry '0001-01-01 00:00:00' for key IndexAckTime.**

This is due to a corrupted index file. Dropping and recreating the index may solve the problem.

**Problem: Duplicate primary key**

Contact support and provide access to a copy of the database and all log files.

**Error: replication server has tried to connect a number of times to repl@'servername':3306.**

Make sure you open the port of the server. This occurs when the Slave Status on one replication server says SLAVE\_IO\_RUNNING Yes, SLAVE\_SQL\_RUNNING Yes but the other replication server has a status of SLAVE\_IO\_RUNNING Connecting, SLAVE\_SQL\_RUNNING Yes.

**Data won't replicate even though the SLAVE\_IO\_RUNNING and SLAVE\_SQL\_RUNNING both says Yes.**

Ping the server name. If you can't ping by server name but can ping the IP address, stop the Replica (Slave), then repeat steps 7 - 10 in setup. For step 7 use the IP address as the MASTER\_HOST instead of the server name.

CHANGE MASTER TO

MASTER\_HOST = 'IPofMASTER',

MASTER\_USER = 'repl',

MASTER\_PASSWORD = 'ENTER PASSWORD HERE';

**Problem: Slave\_IO\_Running and Slave\_SQL\_Running show as Yes for both, but database is not syncing.**

Review the name of the database if using upper casing for database name. Re-initialize replication using lower case lettering for your .ini files and your Grant commands. Contact support for more information.