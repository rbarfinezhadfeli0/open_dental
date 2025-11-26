Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Open Dental Replication Service

The Open Dental Replication Service is used to monitor the replication Replica status.

![](images/openDentalReplicationService.png)

This service is required for [Replication](replication.html) users. It will notify all users and IT staff if replication crashes via [Alerts](alerts.html).

Note:

* The OpenDentalReplicationService will only list in the Service Manager on the server computer.
* The service should only be installed on the replication servers, since additional installations on workstations may cause conflicts.
* If using One Way Replication, this service only needs to be installed on the Report Server.

## Installing the OpenDentalReplicationService

The OpenDentalReplicationService is installed on the server for each location running replication.

To install the OpenDentalReplicationService:

1. In the [Main Menu](mainmenu.html), click Tools, Misc Tools, Service Manager.
2. Click **Add**.
3. Name the service as *OpenDentalReplicationService*.
4. Click **Browse** and select the *OpenDentalReplicationService.exe*. This is typically located in **\Program Files (x86)\OpenDental\OpenDentalReplicationService\**.
5. Click **Install**.
6. Enter your configuration settings.
   ![](images/replicationServiceInstall.png)
7. * If using one way replication, check **Is one way replication** and enter Primary (Master) connection settings.
8. Click **Start**. The status will update to *Installed, Running*.