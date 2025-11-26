Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Replication

See [Advanced Topics](advancedtopics.html).

Replication is a technology built into [MySQL](mysql.html) that continuously keeps a Replica database synchronized with its Primary. If interested in Replication, contact Open Dental Support for general startup information.

To learn more about replication, see the [MySQL 5.6 Manual](https://dev.mysql.com/doc/refman/5.6/en/replication-configuration.html) or [MariaDB Documentation](https://mariadb.com/kb/en/standard-replication/).

**Support:** There is an additional fee per hour for replication support. See [Replication Support](https://opendental.com/site/fees.html#replication) for the current rate. We will provide 15 minutes of free diagnostic support, but anything in excess will be charged at the replication support rate. Services are limited to general advice, startup assistance, and troubleshooting the cause of replication failure when asked.

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
* Certain repair methods using our [Database Maintenance](databasemaintenance.html) tool are considered unsafe for Replication, and require special consideration. See details below.

## Features that Won't Work with Replication

There are no plans to add support for the following features.

* [Language Translation](languages.html): Uses strings for primary key instead of int. And because English phrases are added automatically and frequently, it would be hard (but not impossible) to adapt it for use with Replication. This is not an issue as long as each computer is set for English-US.
* [eClinicalWorks](bridgeeclinicalworks.html) bridge: Rarely used by dental offices. It assumes that various parameters are int32.
* [Public Health](publichealth.html): School table and County table use strings instead of ints for primary keys. May end up with a few duplicates if not syncing in real-time.

TimeStamp columns, such as procedurelog.DateTStamp, will have different values in each database because of the inherent lag with Replication. When looking at the columns in the database, be aware that this is normal and expected.

## Replication Options

**One Way Replication**: See [One-Way Replication](replicationoneway.html). This configuration is useful for offices that have many workstations or who experience slowness on the main server when running custom reports or complex backup scripts. Anyone considering Replication is encouraged to run this configuration for a number of months to get very familiar with the administration.

![](images/replicationSimple.png)

The Replica pulls data from the Primary. No changes are ever made directly to the Replica database. Any users of Open Dental connecting to the Replica database should be trained to only run reports or make backups, not to do any data entry. Data is never sent from the Replica to the Primary because there is no replication process in that direction. If the Replica becomes corrupt, simply wipe it clean and start again.

Note: The Primary, the Replica, and any client machines which connect to the Primary or Replica, must be on the same version of Open Dental.

**Daisy Chain Replication**: [Daisy Chain Replication](replicationdaisychain.html). This configuration should only be attempted by users who are experienced with Replication. The Replication forms a ring. All the databases together are referred to as a single virtual database. Each location can continue to function normally even if the internet connection is lost. The data from the other locations will not be fresh, but an office typically doesn't care as much about that data. Once the internet connection is restored, the Replication quickly updates the database with current data.

This configuration works well for mobile vans that service children or nursing homes. The servers at each location have identical data and they stay in sync using replication.

Note: It takes a skilled database administrator to keep the synchronization running smoothly and to properly handle a downed network. Setting up the servers is time consuming and requires expertise that we might not be able to provide. Replication also requires that proper safeguards be put in place to monitor and repair any replication problems.

![](images/replicationRing.png)

## Database Maintenance

If running [Database Maintenance](databasemaintenance.html) or [Database Maintenance for Patient](databasemaintenancepat.html):

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