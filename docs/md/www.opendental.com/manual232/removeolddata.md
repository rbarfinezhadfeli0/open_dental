Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Remove Old Data

For large databases, it may be beneficial to run this tool and remove security log data that contains no financial or clinical information.

In the [Backup Tool](backuptool.html), click Remove Old Data.

![](images/backupRemoveOldData.png)

Also see: [Supplemental Backups](supplementalbackups.html)

Note: Backup Connections Settings do not display for Open Dental Cloud users.

Data removed will be limited to *SecurityLog*, *SecurityLogHash*, and *EmailMessage* tables from prior to the date set below.

**Select the table(s) to remove data from**:

* **SecurityLog/SecurityLogHash**: Check to remove data from the *SecurityLog* and *SecurityLogHash* tables.
  + *SecurityLog* table: Stores an ongoing record of database activity for security purposes.
  + *SecurityLogHash* table: Stores hashes of audit logs for detecting alteration.
* **EmailMessage**: Check to remove data from the *EmailMessage* table. This table stores sent and received emails, as well as saved email drafts.

**Remove old data entries on or before**: Select a date to remove the old data from. All securitylog data from the selected date and before will be removed.

**Backup before removing data**: If checked a backup will be created before the process of removing the old data is performed. We recommend making a backup prior to running this tool.

**Backup Connections Settings**:

* *Server Name*: Set computer name of the server where the [MariaDB](mariadb.html) or [MySQL](mysql.html) (in older installs) database is hosted. If running from the server your server name may be **localhost**.
* *User*: Enter the username for MariaDB or MySQL. In some instances this may have been set to the username **root**.
* *Password*: Enter the MariaDB or MySQL password. In some instances this may be blank.

**Save Defaults**: Save the above settings as the default to use for this tool in the future.

**Remove Old Data**: Run tool. This process may take a long time. Do not turn off or restart this computer until the process has completed. When running this tool, the *securitylog*, *securityloghash*, and *EmailMessage* data will be removed from your production database. Refer to the backup made if you need to reference this data after it has been removed.

When the tool is finished, you will get a prompt showing the number of rows removed. Click OK to finish.

![](images/removeOldData.png)