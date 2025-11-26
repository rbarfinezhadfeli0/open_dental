Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Server Migration

See [Database Management Systems](databasemanagementsystems.html).

This information is for advanced IT users only. If you need assistance with any of these steps, something does not go as expected, or you have errors, please [Contact Open Dental support](../contact.html). Follow these steps to migrate Open Dental to a new server.

## Required Steps Before Beginning

**MariaDB or MySQL**

1. Verify what version of MariaDB or MySQL is running. When migrating, the same MariaDB or MySQL version will need to be on the new server as the old server. Newer installations of Open Dental (installed after July 14th, 2021) will normally use MariaDB; older installs will use MySQL.
2. See the How to Determine your Current Version sections on the [MariaDB](mariadb.html) and [MySQL](mysql.html) pages to determine what version the database is using.
3. If the MySQL Version is 5.6, users will first install 5.5 using the Open Dental Trial installer, then continue with the [MySQL Upgrade to 5.6](mysql56update.html).

**HL7**
 HL7 users should contact Open Dental support to schedule a server migration.

**Backup**
 Make a backup of the original [OpenDentImages](atozfolder.html) folder (usually found at **c:\OpenDentImages**) and the database (usually found at **c:\mysql\data** and in a directory named *opendental*). See [Backup Tool](backuptool.html)  or [Manual Backups](backupsmanual.html).

Note: If the database structure is InnoDB, backup the entire data folder. Also have a backup copy of the my.ini file, usually located in *C:\Program Files (x86)\MySQL\MySQL Server 5.5.*

## Migrate to a New Server

**On the Old Server**

1. Stop the MySQL, [OpenDentalService](opendentalservice.html), and [OpenDentalEConnector](econnector.html) services.
2. Disable the MySQL, OpenDentalService, and OpenDentalEConnector services to make sure workstations can no longer point to the older server.
   * Change the Startup Type from *Automatic* to *Disabled* then click **OK**.
3. Rename the OpenDentImages folder (e.g., "OpenDentImages\_old\_date"). This stops the sharing of the folder, which will prevent any workstations from accidentally storing images to the old location.
4. Disable  [Port 3306](port3306.html) in Windows Firewall.

**On the New Server**

1. Download the [Trial Version](https://opendental.com/trial.html).
   If using MySQL, install the MySQL Trial Installer found at the bottom of the Trial Version page, under Troubleshooting.
   * Right-click on the Trial version and Run as administrator. Only check the boxes for:
     + MySQL Server (if installing MySQL) or MariaDB Server (if installing MariaDB)
     + MySQL grant tables (if installing MySQL) or MariaDB grant tables (if installing MariaDB)
     + my.ini
     + OpenDentImages

     Note: Do not check the boxes for Open Dental Program or opendental Database. These will be copied from the old server.
2. If the old server had MySQL 5.6, upgrade to [MySQL 5.6](mysql56update.html) on the new server. Otherwise skip to the next step.
3. Stop the MySQL Service.
4. Put the copy of the database on the new server into the MySQL data folder.
   * The database is usually found at **c:\mysql\data**.

   Note: If the database structure is InnoDB users can rename the data folder and copy the old one into the mysql folder.
5. Start the MySQL Service.
6. Share and set full access on the newly-created OpenDentImages folder. See [Share A to Z Folder](atozshare.html) for full instructions.
   * Usually at **c:\OpenDentImages**.
7. Merge the OpenDentImages folders. Place the copy of the OpenDentImages folder, from the old server, into the same directory as the newly-created OpenDentImages folder.
   * Users may continue to the next step while the merge is being performed.

     Note: If a warning occurs stating more than three duplicate files (typically the claim form images included in an Open Dental installation), cancel and ensure files are copying into the correct folder.
8. From within the OpenDentImages folder, right-click on *setup.exe*, then Run as administrator to install Open Dental.
9. Once the installation is complete, open Open Dental (Run as administrator) and enter the new Server Name. Alternatively, it can be left as *localhost*. If needed, also enter MySQL user and password. See [MySQL Security](securitymysql.html).
10. Update the path to the OpenDentImages Folder.
    * If the Data Paths window opens (Paths), make sure the paths point to the new server.
    * If it does not open, in Open Dental, click Setup, Data Paths to ensure the paths point to the new server.
11. Update the Update Server name
    * In Open Dental, click Setup, Miscellaneous to ensure the Update Server is the new servers name.
12. [Open Port 3306](port3306.html) in Windows Firewall.
13. Install the [Open Dental Service](opendentalservice.html). Many features in Open Dental utilize this service.
14. Install the [eConnector](econnector.html). Some features in Open Dental utilize this service, eServices require this service to function.

**On Each Workstation**

1. Start Open Dental (Run as administrator).
2. On the [Choose Database](choosedatabase.html) window, enter the new server name.