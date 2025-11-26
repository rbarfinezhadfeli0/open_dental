Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Replication

See [Advanced Topics](advancedtopics.html).

Replication is a technology built into [MySQL](mysql.html) that continuously keeps a Replica database synchronized with its Primary. If interested in Replication, contact Open Dental Support for general startup information.

To learn more about replication, see the [MySQL 5.6 Manual](https://dev.mysql.com/doc/refman/5.6/en/replication-configuration.html) or [MariaDB Documentation](https://mariadb.com/kb/en/standard-replication/).

**Support:** There is an additional fee per hour for replication support. See [Replication Support](https://opendental.com/site/fees.html#replication) for the current rate. We provide 15 minutes of free diagnostic support, but anything in excess is charged at the replication support rate. Services are limited to general advice, startup assistance, and troubleshooting the cause of replication failure when asked.

Also see:

* [Replication Best Practices](replicationbestpractices.html)
* [Replication: Update Open Dental Version](replicationupdateod.html)
* [Daisy Chain Replication: Add Server](replicationdaisychainnewserver.html)
* [Replication Troubleshooting](replicationtroubleshooting.html)
* [Reinitialize Replication](replicationreinitialize.html)

## Warnings

Review the following warnings prior to considering Replication.

* Replication requires that proper safeguards be put in place to monitor and repair replication problems. It takes a very skilled database administrator to keep the synchronization running smoothly and to properly handle a downed network. Having a setup and response plan is important.
* We don't support any database access outside of Open Dental.
* The database administrator needs to keep the OpenDentImages folder synchronized. See [Folder Replication](sharednetworkfolder.html).
* If running Daisy Chain Replication on live databases, there must be a Replica monitor.
* Within Open Dental, (Query window) CREATE and DROP commands can only be run from *Report* servers because they have been known to break Replication.
* Certain repair methods using our [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html) tool are considered unsafe for Replication, and require special consideration. See details below.

## Features that Won't Work with Replication

There are no plans to add support for the following feature.

* [eClinicalWorks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeeclinicalworks.html) bridge: Rarely used by dental offices. It assumes that various parameters are int32.

TimeStamp columns, such as procedurelog.DateTStamp, have different values in each database because of the inherent lag with Replication. When looking at the columns in the database, be aware that this is normal and expected.

## Replication Options

**One Way Replication**: See [One-Way Replication](replicationoneway.html). This configuration is recommended for offices that have many workstations or those who experience slowness on the main server when running custom reports or complex backup scripts.

![](images/replicationSimple.png)

The Replica pulls data from the Primary. No changes are ever made directly to the Replica database. Any users of Open Dental should be connected to the Primary database. Connecting directly to the Replica database is never recommended. Data is never sent from the Replica to the Primary because there is no replication process in that direction. If the Replica becomes corrupt, steps should be followed to [Reinitialize Replication](replicationreinitialize.html).

Note: The Primary, the Replica, and any client machines which connect to the Primary, must be on the same version of Open Dental.

**Daisy Chain Replication**: [Daisy Chain Replication](replicationdaisychain.html). This configuration is only recommended for users who are experienced with Replication. The Replication forms a ring. All the databases together are referred to as a single virtual database. Each location can continue to function normally even if the internet connection is lost. During an internet outage, the data from the other locations is not updated. Once the internet connection is restored, the Replication updates the database with current data.

This configuration can be used for mobile vans that service children or nursing homes. The servers at each location have identical data and stay in sync using replication.

Note: It takes a skilled database administrator to keep the synchronization running smoothly and to properly handle a downed network. Setting up the servers is time consuming and requires expertise that we might not be able to provide. Replication also requires that proper safeguards be put in place to monitor and repair any replication problems.

![](images/replicationRing.png)

## Database Maintenance

If running [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html) or [Database Maintenance for Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenancepat.html):

1. Connect to all servers in the Daisy Chain with Open Dental.
2. In Database Maintenance, run a check on each server.
   * Running a check is required. Do not run a fix.
3. Compare the problem results across all servers, highlighting the matching methods on a single server as they are compared.
   * If the result of what needs fixed is the same per method on every server it is safe to run the fix for that method.
   * If there is a difference between the servers for a method then consider reinitialization as one server has data that is different than another server.
4. Run the fix on one server only. Do not attempt a fix on any other server.
5. Because not all methods are safe to run with Replication, the following warning displays.
   ![](images/replicationDBM.png)
   * Click **Yes** to run both safe and unsafe selected methods. A prompt for a password displays. The password is *abracadabra*.
      If a wrong password is entered, or Cancel is clicked, only safe methods are run. ![](images/databaseMaintenanceReplication.png)
   * Click **No** to only run safe selected Database Maintenance methods.