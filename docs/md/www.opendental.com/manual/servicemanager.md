Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Service Manager

The Service Manager is a tool used to manage the installations of the different services used by Open Dental.

In the [Main Menu](mainmenu.html), click Tools, Misc Tools, **Service Manager**.

![](images/serviceManager.gif)

Alternatively, in the Open Dental installation folder, double-click *ServiceManager.exe*.

Note: The Service Manager can not be accessed by Open Dental Cloud users.

By default, all services currently installed will list. Each service must have a unique service name.

The following services can be viewed in the Service Manager:

* **OpenDentalService**: Required for background processes and is installed with Open Dental. See [Open Dental Service](opendentalservice.html).
* **eConnector**: Required to use [eServices](eservices.html). See [eConnector](econnector.html).
* **OpenDentalHL7**: Used by [Generic HL7](hl7.html) or [eClinicalWorks HL7](hl7ecw.html).
* **OpenDentalReplicationService**: Required for [Replication](replication.html). See [Open Dental Replication Service](opendentalreplicationservice.html).
* **MySQL**: Required to access the database and is installed upon Open Dental installation. Can be either [MySQL](mysql.html) or [MariaDB](mariadb.html).
* **OpenDentalAPIService**: Only used by third-party vendors utilizing the Open Dental API.

## Add or Edit a Service

1. Run the Service Manager as an administrator.
   * If opening the Service Manager from within Open Dental, first run Open Dental as an administrator.
   * If opening the Service Manager from the installation folder, right-click to run as an administrator.
2. Click **Add** to install a new service, or double-click to modify an existing service.
   ![](images/econnectorManageStopped.gif)
3. Enter or choose the Service Name.
   * The service name must begin with "OpenDent" (e.g. OpenDentalService), with the exception of the MySQL service.
   * The service name cannot have spaces.
4. Click **Browse** and select a supported service executable. Typically the files are located in the folders below:
   * **\Program Files (x86)\Open Dental\OpenDentalService\OpenDentalService.exe**
   * **\Program Files (x86)\Open Dental\OpenDentalEConnector\OpenDentalEConnector.exe**
   * **\Program Files (x86)\Open Dental\OpenDentHL7.exe**
   * **\Program Files (x86)\Open Dental\OpenDentalCustListener\OpenDentalCustListener.exe**
   * **\Program Files (x86)\Open Dental\OpenDentalReplicationService\OpenDentalReplicationService.exe**
5. Click **Install**. If the installation is successful the status will change from *Not installed* to *Installed, Stopped*.
6. Click **Start** to start the service. The status will change to *Installed, Running*.

## Remove a Service

To remove a service, double-click the service, then click **Uninstall**. Once completed, the service will no longer display in the list.

## Stop a Service

All OpenDent services are automatically stopped prior to an Open Dental update, then restarted when complete. If necessary, a service can be stopped from the Service Manager above, or directly from Windows Services on the server.

## Multiple Databases Hosted on a Single Server

Multiple OpenDental, HL7, and/or eConnector services can run on the same server to allow one server to host multiple databases. In order for each service to process messages for the correct database, a copy of the Open Dental application folder has to be made and uniquely named. For example:

**C:\OpenDentaleConnector\_DatabaseA**
**C:\OpenDentaleConnector\_DatabaseB**
**C:\OpenDentaleConnector\_DatabaseC**

Each folder has the exact contents of the Open Dental application folder with the exception of a config file.

* HL7: [FreeDentalConfig.xml](freedentalconfig.html)
* OpenDentalEConnector: OpenDentalWebConfig.xml
* OpenDentalService: OpenDentalServiceConfig.xml

After an update the application folder will need to be be recopied to the duplicate service folders to ensure the versions match.

## Troubleshooting

If the service does not start as expected, see the Troubleshooting section on [Generic HL7](hl7.html), [eClinicalWorks HL7](hl7ecw.html), or [eServices Troubleshooting](eservicestroubleshooting.html).

**Problem: Receive Windows security errors when trying to install Open Dental services.**

Solution: Contact Open Dental support and we can install them for you.

**OpenDentalWebConfig.xml Errors:**

Event Log:If the service does not start as expected:

1. Check to make sure the database folder is correct in the OpenDentalWebConfig.xml file.
2. The service will not start if the version is not exactly the same as the version of the main Open Dental program.
3. If it still won't start, check the Event Viewer in Windows.
   * In the Event Viewer, select Windows Logs, then click on Application.
   * You can filter this event log for Event Source *OpenDentWeb*. The error and information entries will help determine the reason why the service will not start.

Changing Log Level: It may be necessary to increase the Log Level which is committed to the Event Log referenced above.

1. Right-click on the OpenDentalWebConfig.xml file, then select Open With, Notepad.
2. Add a node (or modify if it is already there) under the <ConnectionSettings> node which is called <LogLevelOfApplication>. Set the node value to one of the supported value listed below.
   * Error - The default, lowest logging level. This will only show errors in the event log.
   * Information - This shows Error entries plus inbound and outbound traffic information. This level will clutter your log file but lets you know how frequent your traffic is.
   * Verbose - This shows Error entries plus Information entries plus program troubleshooting information. This mode should be used very sparingly as it will clutter your event log very rapidly. \*\* NOTE: This mode will generally only be used by engineering in the event that there is an issue that cannot be solved by support. It is not recommended to set the log level for long periods of time.