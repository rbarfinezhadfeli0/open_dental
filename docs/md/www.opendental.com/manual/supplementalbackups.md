Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Supplemental Backups

The supplemental backup tool automatically backs up critical data and stores an encrypted copy at Open Dental.

In the [Backup Tool](backuptool.html), click Supplemental Backups.

![](images/supplementalBackups.png)

Also see: [Remove Old Data](removeolddata.html).

The supplemental backup tool is not designed to replace an existing backup method. Supplemental backups are not verified and may not include all data. The OpenDentImages folders are not backed up. Supplemental Backups should not be relied upon and are only available as a last resort.

Note:

* Supplemental backups are only available for customers on support.
* Supplemental backups are not created for Open Dental Cloud databases. See [Open Dental Cloud Backups](opendentalcloudbackups.html) for more information on automatic backups created for these databases.
* Only US customers on support can have supplemental backups stored at Open Dental HQ. Non-US customers can only store supplemental backups locally.
* This tab is not available for Open Dental Cloud users.
* Open Dental does not have access to PHI as files are encrypted. Files can only be decrypted by admins in the practice and is only done when requested by the office.

## Setup

**Supplemental Backups Enabled**: Check to enable supplemental backups. This is unchecked by default if *Disable monthly backup reminder* is checked in [Global Security Settings](securitysettings.html).

**Date/Time Last Local Supplemental**: Automatically inserts the date of the last supplemental backup made to the *Backup Copy Network Path*. If no *Backup Copy Network Path* is defined, this is blank.

**Backup Copy Network Path**: (Optional) Enter the path to store a copy of the supplemental backup on the network. Copies stored on the local network are full backups.

**Save Defaults**: Click to save settings.

The [eConnector](econnector.html) is required to allow supplemental backups.

If an error occurs during the backup process, it is logged in **C:\Program Files (x86)\Open Dental\OpenDentalEConnector\Logger**. Backups occur nightly, typically between 10pm and 4am.

Admin users must have a password enabled. If no password is entered, there is an [Alert](alerts.html).

## Accessing Supplemental Backups

In the event of catastrophic data loss, first contact IT. They can determine if there is a suitable backup that can be used to restore data. If primary backup methods have failed, contact Open Dental support for assistance. Open Dental support can deliver the latest copy of the supplemental backup. As the backup is not verified, it may or may not be possible restore.

To decrypt the database, Open Dental Support needs the password of the last admin user that logged in as of the date of the backup. Open Dental support can determine which user that is.

## Security of Your Data

Over many years, Open Dental has urged users to backup their data. Unfortunately, users forget to make backups, their backup method fails, or their systems are attacked. When the unfortunate happens, data can be permanently lost or held hostage.

Losing this valuable data negatively impacts both the user (the dental office), and its patients. Open Dental has decided that, for users who have the eConnector installed and are on support, we will provide an encrypted backup as a last resort.

The encrypted backup cannot be accessed by support staff or anyone at Open Dental. As stated above, Open Dental does not have access to PHI. We cannot use or view any data in your database. Only the owner of the data (the last administrative user to log on) can decrypt the database. Supplemental backups can be easily turned on, off, or switched to a local copy, as desired.