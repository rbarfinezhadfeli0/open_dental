Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

MySQL 5.5

See [MySQL](mysql.html).

**Warning:** These steps revert MySQL to the default settings and remove any custom users, passwords, ports, or other security settings. If MySQL installation has been customized, we recommend calling Open Dental for assistance updating MySQL.

## Why Upgrade?

If the practice is running a newer version of Open Dental that has issues with older versions of MySQL, "Error 17" may appear a few times per day, requiring restarting the MySQL service each time. Since the errors are coming from MySQL rather than Open Dental, the only way to get the bug fix is to upgrade MySQL.

It is required to at least be using MySQL 5.0 before upgrading to 5.5. If on an earlier version of MySQL, such as 4.1, then follow the instructions at [MySQL 5.0](mysql50.html) as an intermediate step.

## Upgrade to MySQL 5.5

1. Always completely uninstall any older version of MySQL from Windows. Uninstalling MySQL does not damage any data.
2. If the old MySQL folder (e.g., **C:\program files(x86)\mysql\mysql 5.0**) was not deleted, delete it manually.
3. Rename the existing **C:\mysql** to **C:\mysql\_old**.
4. Download the [Trial Version 23.2.45](../TrialDownload-23-2-45.exe). If prompted, select to save the file (not run).
5. Once the download is complete, right-click on the downloaded file and select *Run as Administrator*.
   ![](images/mysqlUpgrade55.png)
6. Click **MySQL Only**. Verify that all paths are correct. The data path should be **C:\mysql\data\**.
   * To install the MySQL program to **D:\** or to any location other than default, change the install path in the installer above.
7. Click **Install**. Follow the directions. During the installation of MySQL 5.5, the *Typical* installation is probably the best choice.
   * If MySQL is not being installed to the default path, choose *Custom* in the MySQL installer, then change the path to the desired path and choose not to install the server data.
8. Copy the the Open Dental database folder (e.g., opendental) from **C:\mysql\_old\data** to **C:\mysql\data**.
9. We recommend now updating to [MariaDB](mariadb.html) now by using the Upgrade Tool.

## Performance Schema Errors

After upgrading to MySQL 5.5, harmless errors may start to show up in the event logs that look like "performance\_schema...has the wrong structure". Performance schema is not used by Open Dental so these errors can be ignored. The mysql\_upgrade.exe tool can be run manually in a command prompt to stop the errors from showing up in the logs. That tool can be found in the bin folder of the MySQL install directory.