Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Manual Backups

If not using Open Dental's built in [Backup Tool](backuptool.html) or an online [Online Backups](backupsonline.html) service, you can do manual backups.

## Backup Data

1. Log on to the server hosting the Open Dental database.
2. Connect an external storage device (e.g., USB Flash drive).
3. Make a copy of the following:
   * The database. This is typically found within **C:\mysql\data\** and is typically named **opendental**.
   * The OpenDentImages folder. This is typically found on the C drive (e.g., **C:\OpenDentImages\**)
4. Place the copies on the external storage device.

Note: Manual backups should only be done on myISAM databases; not [InnoDb](mysqlinnodb.html).

## Restore Data

To verify the backup is good, restore it to a workstation that is not connected to the network (e.g., Doctor's laptop).

1. Ensure Open Dental and MySQL are already installed and the versions match the version backed up. See One Time Setup below for details.
2. Stop the MySQL service.
3. Rename the old database folder. For example, from **C:\mysql\data\opendental\** to **C:\mysql\data\opendentalold02142006\**.
4. Copy the database folder from the backup source to the appropriate location on the main hard drive. For example, from **D:\opendental\ to C:\mysql\data\opendental\**. Make sure you don't end up with too many layers (e.g., **C:\mysql\data\opendental\opendental\**).
5. (optional) Copy the OpenDentImages folder (the A to Z folders) to the hard drive. If one already exists, rename the old one or move it to a backups folder.
6. Start the MySQL service.
7. Open the program.

## One Time Setup

If Open Dental is not installed on the workstation you are restoring to, do the following:

1. Install the Trial version of Open Dental.
   * If your live database is using MySQL, install the trial version found at the bottom of the Trial Version page (under Troubleshooting). Install only the MySQL Server, the MySQL 5.5 grant tables, and the my.ini.
   * If your live database is using MariaDB, install the trial version found at the top of the Trial Version page. Install only the MariaDB Server, the MariaDB 10.5 grant tables, and the my.ini.
2. Install the Open Dental program, navigate to the OpenDentImages folder, and run *setup.exe*.
   * A backup of the OpenDentImages folder must already be available on the restore workstation.

If you have trouble opening the program after restoring, you may need to run the setup.exe stored in your backup in the OpenDentImages folder. If the installed version is newer than the backup version, then you will need to uninstall Open Dental from the control panel before running setup.exe.

Also see [HIPAA](../site/hipaa.html).