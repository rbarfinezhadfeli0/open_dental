Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

MySQL Troubleshooting

See [Database Management Systems](databasemanagementsystems.html).

Read below for MySQL errors and solutions.

**Error: Unable to Connect to MySQL Host.**

If Open Dental has been installed properly, the "Unable to connect to any of the specified MySQL hosts" may appear after clicking OK in the Choose Database window. It's best to contact Open Dental Support, but if unable try the following:

On the Server: If Open Dental is working on the server but not on a workstation, then it could be a firewall issue.

* Check the Windows firewall to make sure incoming traffic on Port 3306 is allowed, as well as any possible firewall that is part of an antivirus program. [Firewall](firewalls.html) may need to be turned off.
* If still unable to connect from a workstation, then it might be a networking issue such as not being in the same workgroup.
* If a non-standard installation was performed andMySQL was installed separately, then it might be a security issue such as improper use of MySQL user name and password. See [MySQL Security](securitymysql.html).

Operating System: Make sure to use a supported operating system.

* Visit [Computer Requirements](../site/computerrequirements.html) for a full list of supported operating systems.
* If using Linux, the process is different. See [Linux and Mac](clinuxmac.html).

MySQL Service: MySQL needs to be running to be able to connect.

1. If the MySQL service is not running, go to Services and try to start it.
2. If the service won't start, an antivirus program or backup program may be interfering.
   * Temporarily disable the antivirus or backup program to see if this is the issue. After testing, always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.
3. Try to reinstall the MySQL service. It may not be installed correctly.

Database Files: Make sure the database files are in the right place with no improper nesting.

* Open **C:\mysql\data\opendental\**. There should be about 1200 files.
* If the opendental folder is missing, or the expected files are missing, then they have been moved. Move them back. Ctop the MySQL service before moving files. Do not delete anything; instead, rename them. If renaming the opendental folder, it cannot have a special characters in the name.

Read Only Database: The [Choose Database](choosedatabase.html) window may state, *Database is present but not accepting commands* instead of *database not present*. An *Unhandled Exception: Read Only Table* or *Table [insert name here] is Read Only* may also appear.

1. Go to **C:\mysql\data\**. Right-click on the opendental folder and select Properties.
2. Find the box that says Read-only and click on it until it is completely blank.
3. Click OK.
4. When given the choice, apply changes to this folder, subfolders, and files.
5. Run Open Dental.
6. If unsuccessful, restart the computer.
7. Retry the above steps as needed.
8. Contact Open Dental support if issues persist.

As a last resort, try to install Open Dental and MySQL on a different computer.

**When using RAID on initial installation or migration: get a MySQL error 1067 or error 87**

This problem can occur when the MySQL program files are on a GPT partitioned drive. Add 'innodb\_flush\_method=normal' to the my.ini file, then start the MySQL service