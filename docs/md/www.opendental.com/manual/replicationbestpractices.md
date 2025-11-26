Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Replication Best Practices

When using [Replication](replication.html), allowing internet access to your database must not be done without following these best practices to help protect your network against intrusion, viruses, and malicious code attacks.

* Install an anti-virus software on all replication servers and all other devices on your network. The **C:/Mysql/Data** directory on replication servers should not be included in real time scans. It should be included separately in a periodic (daily) scheduled scan during non-operating hours because it will interfere with operations by locking the mysql tables.
* Do not open the MySQL port (default is port 3306) on your routers and do not allow incoming traffic for that port. You can open this port as a Firewall exception rule on your servers but NOT on your routers. In simple terms, this means do not open the database to the entire internet, even if you think you are verifying the source IP address: that is not sufficient as IP addresses can be spoofed.
* Use a VPN (Virtual Private Network). Data is encrypted across the internet over a VPN and thus verifies the identity client (machine or router) before decrypting. There is a very little risk in sharing data between computers on the same virtual network.
* Use strong passwords for VPN and all other network devices.
* Create a strong password for your MySQL user's root password.
* Replication servers should be dedicated to replication only. Uninstall or disable Internet browsers.
* When using replication with intermittent internet connections (e.g., mobile units) avoid making changes that result in deleted records. This includes merging patients, consolidating insurance plans, deleting insurance plans, deleting patients, deleting fee schedules, etc. These actions should be performed when all mobile units are connected to the replication server and from a single, non-mobile database. This reduces the chances of replication failure. Open Dental is a robust software that tries to elegantly handle as many of these situations as possible. If replication failure occurs, follow your replication failure procedures to restore your replication environment. Please inform Open Dental of your issues so that a permanent fix can be made to the program.
* You will need to keep your [A to Z Folder](atozfolder.html) synchronized. See [Folder Replication](sharednetworkfolder.html)
* Install the *OpenDentalReplicationService* on each Replica.
* It is recommended not to exceed more than five replication servers.