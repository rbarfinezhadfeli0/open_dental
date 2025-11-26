Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Replication Setup

Use the Replication Setup window when setting up servers for One-Way or Daisy Chain replication.

In the [Main Menu](mainmenu.html) click Setup, Advanced Setup, **Replication**.

![](images/replicationOffset.gif)

Setup servers for [One-Way Replication](replicationoneway.html) or [Daisy Chain Replication](replicationdaisychain.html).

Also see:

* [Replication Troubleshooting](replicationtroubleshooting.html)
* [Open Dental Replication Service](opendentalreplicationservice.html)

Click **Add** to add a server, or double-click a server to edit.
![](images/replicationEditNoRandom.gif)

Enter the server information:

**Server Description**: The description of the server. This description can be changed but it should match your server name or IP address exactly. We recommend using the IP address to reduce possible DNS issues. Click **This Computer** to automatically enter the local computer's IP address.

**server\_id**: Assign a unique server\_id to each server. This ID will be specified in the my.ini file during setup. Each workstation can then use a query to identify which server it is connected to.

**A to Z folders**: Assign each server an A to Z folder. It can differ by server. This allows use of a folder in the local area network rather than one that's accessed across a VPN. This path will show in the Data Path window ([Paths](paths.html)). You can enter multiple paths to the A to Z folders, separated by semicolon (no spaces). When Open Dental starts, the first valid path will be used. Keeping the A to Z folders synchronized between locations is up to the customer and requires additional software and expertise (see [Folder Replication](sharednetworkfolder.html)).

**Update Blocked**: Set whether an Open Dental software update can occur from this server. We recommend updating Open Dental from only one server and blocking updates from others.

* Checked: No workstation connected to this server will be allowed to initiate an update. This is typically checked for servers that are considered Replica or peripheral. It is possible that this could prevent startup of the program in certain situations.
* Unchecked: Workstations connected to this server can initiate an update.

**Report Server**: Flag the server as a *report* replication server so it can run dangerous Queries such as those with CREATE TABLE or DROP TABLE syntax. These queries can cause replication failure so should only be run on *report* servers. More than one computer can be a 'report' server.

Click OK to save.

## Sync Databases

Syncing databases will update all databases in the chain with new entries.

1. Enter the MySQL username and password. [MySQL Security](securitymysql.html)
2. Click Synch.

Note:

* Syncing databases will update all databases in a chain with new entries. This is for Daisy Chain configurations only and does not function for One Way configurations.
* Open Dental will use the text in the server Description as the computer name for each replication server. The synch will fail if the description is not a valid replication server computer name.