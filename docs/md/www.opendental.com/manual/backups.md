Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Backups

Backing up patient data is critical, as well as a requirement for [HIPAA](../site/hipaa.html) compliance. You should establish a regular backup and recovery plan. This will ensure that patient data is protected, even if there is accidental data loss, database corruption, hardware failures, theft, or other disasters (floods, fires, etc).

Backups should be frequent, stored securely, and tested regularly to ensure quality. We suggest backing up data to a high quality encrypted USB flash drive, using an online backup service, or both. Then verify the quality by restoring backups to a secure, off-site computer not connected to the office network (e.g., home computer or another location) to prevent overwriting the live database.

Note:

* It is recommended to run an Open Dental Backup only when other users are not working in Open Dental. Otherwise, users may experience a UE: Table 'procedurelog' is read only error that will disappear when the backup is complete.
* If using a laptop to verify backups, turn off the MySQL service when closing out of Open Dental. If a laptop goes to sleep while MySQL is running, it may cause corruption in the database.

There are several backup options to consider when making a backup plan.

* [Backup Tool](backuptool.html)
* [Online Backups](backupsonline.html)
* [Manual Backups](backupsmanual.html)

Also see: [Supplemental Backups](supplementalbackups.html)

## What to Back Up

* **\\SERVER\mysql\data\**: The database that stores patient data.
* **\\SERVER\OpenDentImages\:** The [A to Z Folders](atozfolder.html) that store files you scan or import. See [Paths](paths.html).
* Other office documents unrelated to Open Dental.

## Frequency

At minimum, backups should be made daily. If you at least have good daily backups, then the worst-case scenario is having to re-enter one day of data. Incremental backups throughout the day would be a little bit better, if you have that ability. Backing up while the database is in use is possible, but only with certain software, and it can get complicated.

## Encryption

Backed-up data should be encrypted so that patient data remains secure, for example in cases of theft or loss. See [Encryption of Data at Rest and in Transit](encryption.html).

* Encrypted USB drives: We recommend purchasing a few and rotating them. An example is <http://www.ironkey.com>.
* Hardware Encrypted Drives (Recommended), such as those offered by [Apricorn (https://www.apricorn.com/)](https://www.apricorn.com/). Data is encrypted by a dedicated processor located on the encrypted drive instead of using the computer's processor. Hardware encryption devices run independently of the operating system and any additional software. Data is protected from unauthorized access by pin numbers.
* Software Encryption, such as [BitLocker Encryption](encryptionbitlocker.html). This will entail encrypting the data first, then backing it up. Software encryption uses the computer's resources to encrypt data. Software must be updated, or reinstalled if you change operating systems.

RAID is not a backup solution and should not be relied on for backups or disaster recovery plans.

## Archives

You also need to keep old copies of some of your backups. You can make separate monthly backups to a different flash drive. When it fills up, put it in storage, and get another one. If you are using imaging, then manually backup the **C:\OpenDentImages** folder to CDs, DVDs, or removable hard drives.

A good use of archiving would be to use a file versioning system which allows you to go back to a specific date and time to restore files that might have been accidentally deleted or modified. These programs can typically backup to multiple locations safely and securely.