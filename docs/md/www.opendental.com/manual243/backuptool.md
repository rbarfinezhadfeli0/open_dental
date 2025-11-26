Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Backup Tool

Use Open Dental's built-in tool to back up or restore data.

In the [Manage Module](manage.html), click **Backup**.

![](images/backupTool.png)

The Backup Tool is split up into three tabs:

* Backup (see below)
* [Remove Old Data](removeolddata.html)
* [Supplemental Backups](supplementalbackups.html)

Also see:

* [Backups](backups.html)
* ![](images/youtubeLogo.png) Our webinar: [Backup and Restore](https://youtu.be/DskvtDag_fE)

This tool can back up the following data:

* Open Dental Database: The [MariaDB](mariadb.html) or [MySQL](mysql.html) (in older installs) database where patient data is stored. By default, it is located at **C:\mysql\data\opendental\**.
* A to Z Folders: Scanned or imported files are stored here. Typically **C:\OpenDentImages**. To determine the [A to Z Folder](atozfolder.html) (i.e., OpenDentImages) path for the database, see [Paths](paths.html).

Note:

* The Backup tab is unavailable for Open Dental Cloud Users.
* For [InnoDB databases](mysqlinnodb.html), this tool can only be used for backups. Backups are made in MyISAM format. Restores cannot be done using this tool.

This tool does not encrypt data, so consider an encrypted device or encryption software to ensure data is protected while in storage. See [Encryption of Data at Rest and in Transit](encryption.html). To use the backup tool, users must have the security permission *Backup*.

## Options

![](images/backupToolOptExclude.png)

**Exclude image folder from backup or restore**: By default, the [A to Z Folder](atozfolder.html) is included in the backup or restore. To omit the A to Z folders from the backup or restore, check this box.

![](images/backupToolOptions.png)

**Save Defaults**: Click to save the entered paths as the defaults.

**Managed Backups**: Unison BDR (Central Data Storage) is a preferred online backup service. Click the button to see more information. To remove this button, disable the [Central Data Storage CDS Bridge](bridgecds.html), then check *Hide Unused Button*.

## Backup

Backups should be run from the server that hosts the MySQL database. Running the tool from a workstation will likely result in an error or incorrect data being copied.

To back up data, first connect to the server, then insert the backup device (e.g., USB encrypted flash drive).

If the tool fails, try again by running Open Dental as an Administrator.

![](images/backupToolBackup.png)

**Backup database FROM this folder**: Verify the database path to back up. It should contain the currently connected database. Typically it is **C:\mysql\data\**. Click **Browse** to select a different path. Only the connected database is backed up. Other databases in the path are ignored.

**Backup TO this folder**: Verify the drive or folder to back up the data to. For example, **D:\**. Do not back up to the same folder where the live database is located. We recommend utilizing a network path to another workstation or server in the office. Click **Browse** to select a different drive.

Click **Backup**. A progress bar is displayed while the backup completes. If any files being backed up have a file name exceeding 100 characters, there is a warning indicating these files will be skipped. The progress window is closed once the backup is complete.

If the image folder is also being backed up, this process begins automatically once the database backup is complete. A new progress bar is displayed for the image folder backup. A message is shown once all backups are complete.

* If the destination drive does not have enough space for a complete backup, a notification appears, and the backup stops.
* If the *Backup TO* path does not include a copy of the image folder, a full backup of the image folder is made.
* If the *Backup TO* path includes a copy of the image folder, the backup is incremental (i.e., files not currently in the backup folder are added). Any files previously saved to the backup folder that have since been deleted from the images folder or Imaging Module are not removed from the backup folder.
* If *Exclude image folder in backup or restore* was checked, the backup process is complete after the first message.

## Restore

Backups should be tested regularly to ensure they restore correctly. It is recommended to test backups by restoring them to a workstation not connected to the office network. The name of the database being restored must match the name of the database being used to run the restore tool.

![](images/backupToolRestore.png)

**Restore FROM this folder**: Enter the path the backup is currently stored. For example, if the backup is on an external drive, it might be **D:\**. Click **Browse** to select a different path.

**Restore database TO this folder**: Enter the path to place the backup. Typically it is **C:\mysql\data\**. Click **Browse** to select a different path.

**Restore A-Z images to this folder:** If the A to Z folder was backed up, enter the path where it should be restored. Click **Browse** to select a different path.

**Restore**: Click to restore the database. See below for detailed instructions.

Before beginning a restore:

* If the restored database version does not match the current version of Open Dental, Open Dental automatically closes and must be relaunched.
* The database name on the restore computer must match the database name of the backup.
* Do not restore a backup over a live production database. Data loss can occur and is irreversible.
* Do not replace tables within a database with tables from another database. Foreign key issues occur.
* Run Open Dental as an administrator.

If Open Dental is not installed on the restore computer, first do the following:

1. Install the Trial version of Open Dental.
   * If your live database is using MySQL, install the trial version found at the bottom of the [Trial Version](../trial.html) page (under Troubleshooting). Install only MySQL Server, MySQL 5.5 grant tables, and my.ini.
   * If your live database is using MariaDB, install the trial version found at the top of the Trial Version page. Install only MariaDB Server, MariaDB 10.5 grant tables, and my.ini.
2. Install the Open Dental program, navigate to the [A to Z Folder](atozfolder.html), and run *setup.exe*.
   * A backup of the A to Z Folder must already be available on the restore workstation.

If there is trouble opening the program after restoring, the *setup.exe* file stored in the A to Z Folder backup may need to be run. If the installed version is newer than the backup version, Open Dental must be uninstalled from the Control Panel before running *setup.exe*.

To restore a database:

1. On the restore computer, ensure there is a working copy of Open Dental. If not, install the Trial version and ensure it is working properly.
2. Insert the external drive with the backup into the restore computer.
3. Enter the restore paths.
   * **Restore FROM**
   * **Restore database TO**
   * **Restore A-Z images to this folder**
4. Click **Restore**. There is a prompt to confirm the date of the backup that will be used for the restore.
5. Click **OK** and the restore process begins.
   * The existing database is renamed using the current date (e.g., opendentalbackup\_04\_10\_2023).
   * The database on the *Restore FROM* path is copied to the *Restore database TO* path and becomes the active database.
6. As soon as the restore is finished, close Open Dental.
7. Restart Open Dental.
8. The Edit Paths window is opened. The first line shows the A to Z folder path for the office server. Change it to the path for *restore* computer (e.g., **C:\OpenDentImages**). Leave the other options as is.
9. Click **Save** and Open Dental software should finish opening.

Note: When restoring a backup made automatically by Open Dental, the process may take longer if *Disable indexes to speed up automatic backups* was checked in [Preferences](preferences.html) when the backup was made.