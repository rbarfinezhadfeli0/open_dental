Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Backup Tool

Open Dental has a built-in backup tool to help you create backups or restore data.

In the [Manage Module](0_manage.html), click **Backup**.

![](images/backupTool.png)

The Backup Tool is split up into three tabs:

* [Backup](#backup)
* [Remove Old Data](#removeolddata)
* [Supplemental Backups](#supplemental)

![](images/youtubeLogo.png) Also see our webinar: [Backup and Restore](https://youtu.be/DskvtDag_fE)

## Backup

From this tab, easily create backups of your Open Dental database and image folder or restore an existing backup.

![](images/backupToolBackup.png)

Backups can be created while even while users are still active. Choose where the database is stored and where to create the backup. Create the backup with a single click.

![](images/backupToolRestore.png)

The tool can also be used to restore an existing backup to another computer in order test that backups are working or as needed in case of data loss.

## Remove Old Data

For large databases, the Remove Old Data tool may be beneficial to remove security log or other historical data that contains no financial or clinical information.

![](images/backupRemoveOldData.png)

Specific tables can be selected to determine where data is removed from:

* **SecurityLog/SecurityLogHash**: This includes the ongoing record of database activity and audit logs used for detecting alterations.
* **EmailMessage**:This includes sent and received emails, and saved email drafts.
* **WikiListHist**: This includes historical versions of Wiki Lists.
* **WikiPageHist**: This includes historical versions of Wiki pages.
* **TaskHist**: This inlcudes historical copies of Tasks.

Data removal can also be date limited, so that newer data remains.

## Supplemental Backups

The supplemental backup tool automatically backs up critical data and stores an encrypted copy at Open Dental.

![](images/supplementalBackups.png)

You can choose the enable or disable this feature.

This tool is not designed to replace existing backup methods for full backups, but provides supplemental backups that are available as a last resort.

### Accessing Supplemental Backups

In the event of catastrophic data loss, first contact IT. They can determine if there is a suitable backup that can be used to restore data. If primary backup methods have failed, contact Open Dental support for assistance. Open Dental support can deliver the latest copy of the supplemental backup. As the backup is not verified, it may or may not be possible restore.

To decrypt the database, Open Dental Support needs the password of the last admin user that logged in as of the date of the backup. Open Dental support can determine which user that is.

### Security of Your Data

Over many years, Open Dental has urged users to backup their data. Unfortunately, users forget to make backups, their backup method fails, or their systems are attacked. When the unfortunate happens, data can be permanently lost or held hostage.

Losing this valuable data negatively impacts both the user (the dental office), and its patients. Open Dental has decided that, for users who have the eConnector installed and are on support, we will provide an encrypted backup as a last resort.

The encrypted backup cannot be accessed by support staff or anyone at Open Dental. As stated above, Open Dental does not have access to PHI. We cannot use or view any data in your database. Only the owner of the data (the last administrative user to log on) can decrypt the database. Supplemental backups can be easily turned on, off, or switched to a local copy, as desired.

## Alternate Backup Options

**Online Backups**: Third-party cloud services can be used as a tool in your regular backup and recovery plan. Use these services to back up the Open Dental data folders. Open Dental recommends [Central Data Storage (UnisonBDR)](https://www.centraldatastorage.com/).

**Manual Backups:** If you choose not to use the built-in Open Dental Backup Tool, you can manually create backups of the Open Dental data folders.