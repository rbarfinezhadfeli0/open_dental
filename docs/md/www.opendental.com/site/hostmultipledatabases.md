Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Host Multiple Databases from One Web Server

See [Advanced Topics](advancedtopics.html).

One data center might want to host databases for multiple Open Dental customers. These databases may be on the same physical machine if care is taken to isolate the customers from having access to each other's data.

Also see: [Multiple Locations](multiplelocations.html)

## Web Server

We do not recommend hosting multiple databases from one web server (e.g., third-party hosted server, such as Amazon RDS) unless a capable IT is involved and they fully understand what is required during updates.

1. In IIS, create a New Application on the desired web site.
2. Copy all files from the Open Dental installation directory into the root of the new application.
3. Edit the OpenDentalServerConfig.xml to point to a different location.

## Virtual Machine

The current recommendation is for each customer to have a separate virtual machine (VM) with its own instance of MySQL and its own A to Z folders. There can be some economies of scale compared to a traditional server because multiple customers can share the same hardware. There are also some advantages in disaster recovery because a VM can be easily moved to a different physical server.

## Connection Security

When clients connect to the server over the internet, the data must be encrypted. The current recommendation is for the VM to be connected to the physical office by VPN.

## Workstation Connections

The three workstation connection options are direct, RDP, or [Middle Tier](middletier.html). This still applies to multi-tenant scenarios, so the workstation connections must be considered as part of the complete solution.

## MySQL Security

A different MySQL User will need to be set up for each customer ([MySQL Security](securitymysql.html)). If, for example, a customer database is called od\_springfield\_4932, then, set up the MySQL user for that customer to have full access to od\_springfield\_4932\*. Notice the \* wild card character. This allows Open Dental to make backups of the database during the update process. The MySQL user must also have full privileges, including create table and drop table.

If wanting to work from particular devices or IP address ranges, information about setting up usernames for specific devices or network segments is available in the [MySQL Documentation](https://dev.mysql.com/doc/refman/5.6/en/account-names.html) or [MariaDB Documentation](https://mariadb.com/kb/en/create-user/) . Open Dental does not provide advice or direct support on setting up usernames for particular devices or network segments. Open Dental is functional as long as the specified MySQL user has the correct (full) permission set.

## HL7 Service

If the customers are bridging to eCW using HL7 ([eClinicalWorks HL7](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7hl7ecw.html)), multiple instances of the HL7 service will need to be set up, each with a different service name, exe folder, FreeDentalConfig.xml file, and database connection. Different customers may be on different versions of Open Dental. Each HL7 service can be shut down independently as needed.

## HL7 TCP/IP

We recommend HL7 TCP/IP ports instead of HL7 folders. This will eliminate any HL7 folder sharing issues ([Generic HL7](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7hl7.html)).

## Multiple Databases on One Server

Each database will require it's own [A to Z Folder](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7atozfolder.html). See [Paths](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paths.html) for more information.

## Updating with Multiple Middle Tiers

Different versions of the [Middle Tier](middletier.html) can be hosted on one server.

## Updating with Multiple Middle Tiers: Steps

For advanced IT professionals only.

**Multiple Open Dental Directories**

1. Check to make sure all services are stopped. You may need to disable the services if you have a Task Scheduler to start the service if stopped.
2. Using 7zip, extract the opendental.msi from the Setup File or download the MSI directly from the Setup, Update, Download MSI.
3. Use msiexec.exe in an elevated command line to install the MSI to a separate folder: msiexec /a C:\TempOD\opendental.msi /quiet /qn TARGETDIR="C:\TempOD\OD"
4. Copy the entire contents from the C:\TempOD\OD\Program Files\Open Dental\ to each directory where Open Dental is currently installed.

**Multiple eConnector Folders**

1. Check to make sure all Services are stopped. You may need to disable the services if you have a Task Scheduler to start the service if stopped.
2. Using 7zip, extract the opendental.msi from the Setup File or download the MSI directly from the Setup, Update, Download MSI.
3. Use msiexec.exe in an elevated command line to install the MSI to a separate folder: msiexec /a C:\TempOD\opendental.msi /quiet /qn TARGETDIR="C:\TempOD\OD"
4. Copy the entire contents from the C:\TempOD\OD\Program Files\Open Dental\eConnector to each directory where the service program is installed.