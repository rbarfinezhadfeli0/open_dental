Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Replication: Update Open Dental Version

To update Open Dental when using [Replication](replication.html), refer to the steps below.

Before updating, make sure required setup is complete.

* All workstations need shared access to an [A to Z Folder](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7atozfolder.html) with the updated contents of the Update Files folder (e.g., use file replication for shared network folders). See [Paths](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paths.html).
* Disable third-party programs that may try to query the Open Dental database.
* Pick one replication server that will always perform updates. This is typically the first server in your replication chain. Set this server as your *Update Server* in [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html) to ensure updates are not initiated by any other workstation.
* Coordinate a specific time to perform the update with all locations. Users should stay out of Open Dental for up to 60 minutes.

When ready to update Open Dental for all locations, follow the steps below:

1. From your Update Server, kick all users out of Open Dental. Go to Tools, Misc Tools, [Shutdown All Workstations](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7shutdown.html). This tool reminds users about the update and closes Open Dental on all workstations.
   ![](images/shutdownWorkstations.png)
2. Ensure all MySQL replication servers are running smoothly.

1. From the File Explorer, navigate to the MySQL folder. The default location is C:\Program Files (x86)\MySQL\MySQL Server 5.5 or C:\Program Files\MariaDB 10.5
2. Locate the MySQL *bin* folder. (Typically C:\Program Files (x86)\MySQL\MySQL Server 5.5\bin or C:\Program Files\MariaDB 10.5\bin) Double-click into it.
3. In the address bar, type *CMD* and hit enter to open CMD.
   ![](images/replicationCommandWindow.gif)
4. Run the following command. Replace *opendental* with the name of the database if different.

   mysql -u root -c opendental

   Note: If the MySQL service has a password add -p to the command.
5. Run the next command.

   show slave status \G

You will get the following information:
![](images/replicationCommandWindow2.gif)

3. Repeat step two for each server.

   Note:
   * An *Empty set* is expected on the primary server in a two server one-way setup as only the reporting server will have a replica (slave) running
   * By running the show slave status command on each server it will determine if replication is up and running. Do not continue if any slave status says that the Slave IO or Slave SQL is not running.
   * In cases where replication is not running: In Open Dental go to Setup, Advanced Setup, Replication.
     + For Daisy Chain configurations, click *Sync* in the lower left. This stops and starts the Replicas and will ensure all replication servers receive the database update queries.
     + For One Way configurations, this is generally not necessary, though you could run the stop slave; and start slave; commands to be certain.
4. From the Update Server, open Open Dental and go to Help, Update. Install the updated version.
5. Launch Open Dental to upgrade the database.
6. Launch Open Dental on all servers in the replication chain and log into a user at least once, to ensure the [Replication Service Monitor](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7opendentalreplicationservice.html) can monitor the health of the replication chain. The Replication Service Monitor service may need to be stopped to complete the Open Dental Client update. The service can be started once the client update completes.
7. Once complete, users can log back into Open Dental. They will be prompted to update to the new version. Click OK, then log in as normal.