Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Choose Database

Use the Choose Database window to enter settings used to launch a database.

In the [Main Menu](mainmenu.html), click File, Choose Database.

![](images/choosedatabase.png)

Alternatively, this window may display when launching Open Dental. This window always displays when launching Open Dental for the first time after installation.

These settings allow the workstation to locate and connect to the [Database](databasemanagementsystems.html).

Note: For Open Dental Cloud users, all settings in this window are read-only. Open Dental Cloud users cannot change the database or view MySQL User information.

## Connection Settings

![](images/chooseDatabaseConnectionSettings.png)

* **Server**: The name of the computer where the MySQL server and database are located. If running on a single computer only, the computer name may be *localhost*.
* **Database**: The database to connect to. Usually, this is *opendental*.
* **MySQL User**: Default user is *root*. See [MySQL Security](securitymysql.html) to set users and passwords.
* **MySQL Password**: The user password (if MySQL users and passwords are set).
* **Do not show this window on startup (this computer only)**: Check this box to hide this window on subsequent startups of Open Dental on this workstation.

**MariaDB SkySQL PEM path**: If connecting to a third-party hosted cloud server, enter the file path for the security certificate. The certificate must be accessible from all workstations. Open Dental only references the file created by the third-party host to initialize connection. For information relating to SkySQL's hosting see: <https://skysql.com>.

To save changes to this window for the next time Open Dental is launched on this workstation, choose *Run as Administrator* when launching Open Dental.

## Connect to Middle Tier

See [Middle Tier](middletier.html).

Instead of connecting directly to the database, there is the option to connect to a Middle Tier which handles all database interactions. Advantages include better security and speed for multiple offices and preventing injection attacks when writing queries.

![](images/chooseDatabaseMiddleTier.png)

* **Connect to Middle Tier instead**: Check to connect to the database using Middle Tier settings.
* **URI**: Enter the URI to connect to the Middle Tier database. See [Middle Tier Troubleshooting](middletiertroubleshooting.html).
* **Open Dental User (not MySQL user)**: Enter the Open Dental user name for the user logging into the database.
* **Password**: Enter the password associated with the Open Dental user name entered above.
* **Using eClinicalWorks**: Check to log in using the [eClinicalWorks](ecwgeneral.html) interface.
* **Log me in automatically**: Check to save the entered user information to log into the Middle Tier database automatically.

## Advanced Settings

![](images/chooseDatabaseAdvanced.png)

**Advanced: Use connection string**: Allows customizing the MySQL connection parameters (advanced users only). See also [Oracle](../site/oracle.html).
 Example: Server=servername;Port=portnumber;Database=name\_of\_database;User=username;Password=password;sslca="c:\location\of\sslca.pem"

**Dynamic Mode: Automatically downgrades or upgrades to server version.**: Use when users need to connect to a database from a different version of Open Dental without updating or downgrading the local client.

When running Open Dental in Dynamic Mode, Open Dental must be run as an administrator. Dynamic Mode cannot be run on the update server.

When checked, if the selected server and database are running a [Version](../site/versions.html) different than the currently installed version on the workstation, Open Dental automatically creates a temporary install of the server's version of the Open Dental client into a dynamic folder (typically **C:\Program Files (x86)\Open Dental\DynamicMode**) and launch the program from there.

Note: Dynamic Mode can be useful in a variety of situations. Including:

* Multiple locations: Practices with multiple locations can remote into each other without having to make sure every site is on the same version.
* [CEMT](central.html): Typically, offices using CEMT must have all databases on the same version of Open Dental. With Dynamic Mode, this is no longer the case.
* Verifying backups: Using Dynamic Mode, a backup of Open Dental can be launched to verify on a workstation, without needing to update.
* Testing: If a new or beta version of Open Dental for testing purposes has been installed, use Dynamic Mode to connect to the production database on the same workstation without needing to update the whole office.

## For Advanced Users

The settings on this window are stored in the [FreeDentalConfig.xml](freedentalconfig.html) file in the installation directory. This data is not stored in the database because a database connection has not yet been established.

**Multiple Databases:** Most users have only one database. However, in Open Dental practices have the option of running many databases on the same computer. For example, [Backups](backups.html) could be made of of a database within its original folder. To access a historical snapshot of the data, simply select a database backup to open. Users can also switch between the regular database and a backup on a home computer for read-only purposes. If a user runs a dental billing company, each doctor client can retain a separate database (each office must also have a separate Open Dental license).

To switch between databases, use the Database dropdown. This is only available when the Choose Database window appears upon startup.

## Troubleshooting

****Problem:** Connection to the MySQL server has been lost.**

![](images/connectionlost.png)

**Solution:** This message pops up when the workstation cannot connect to the MySQL server. Open Dental attempts to reconnect until connection is successful or the user aborts (Exit Program).

****Problem:** Error regarding too many connections.**

**Solution:** In the my.ini file on the server, change the max\_connections to 3,000.

Note:- For users on MariaDB 10.5, see [MariaDB Too Many Connections](https://mariadb.com/kb/en/handling-too-many-connections/).
- For users on MySQL 5.5, this uses RAM on the server computer as connections are made.
- For users on MySQL 5.6, it immediately reserves RAM on the server computer.