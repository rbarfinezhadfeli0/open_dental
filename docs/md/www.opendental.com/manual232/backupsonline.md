Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Online Backups

See [Backup Tool](backuptool.html).

Cloud [Backups](backups.html) can be a tool in a regular backup and recovery plan. If using a cloud service, these folders should be backed up:

* **mysql\data\** - The database that stores patient data.
* **OpenDentImages\** - The [A to Z Folder](atozfolder.html) that store files you scan or import. See [Data Paths Setup](paths.html).

As always, backups should be encrypted, and regularly restored to another machine to verify quality.

Be aware that cloud backups are not a perfect solution.

Also see [Cloud Hosted Automated Backups](../site/vendorssupplementalservices.html#cloud).

**Advantages**: Automated, with no action required by user after setup. Off-site, so protected in case of fire, flood, burglary, etc.

**Disadvantages**: Initial setup and the first backup can be time consuming because the initial backup can be very slow. While the initial backup could take less than an hour if you are only backing up your database, it can literally take as long as a week if you are including many images. Subsequent backups are incremental, only sending the changed data.

**MySQL Service**: Automated stopping and starting of the MySQL service is not important because backups can safely be done without stopping the MySQL service. You would never restore directly to the live database location, so the backup service is not involved with the actual final move of the restored data to the live location. All of the backup services are good at copying locked files. In the rare case that a locked file causes a failure, it should only affect that one file and should not be a major problem. When restoring a database using the data provided by your backup service, follow these general steps.

1. Restore to a new location (like **C:\restored files\** or to another machine), not to your live database on your server.
2. Stop the MySQL Service.
3. Make a manual local backup of your current database (if there is one still there).
4. Delete the current database.
5. Place the restored database in the location where your live data was.
6. Turn back on the MySQL service

## Specialized Backup Services

The company below may provide more specialized solutions or managed backup services that require less technical involvement on the part of the user.

**Central Data Storage (UnisonBDR)** (recommended)

* [Central Data Storage with Open Dental](https://www.centraldatastorage.com/open-dental/)
* Automated backups
* Meet mandatory requirements for a data backup plan, disaster recovery plan, and emergency mode operation plan'
* Managed STaaS (storage as a service)
* Email encryption (CDSmail)
* Confidentiality Agreement (CA)
* Business Associate Agreement (BAA)
* Unlimited storage, archiving, and versions
* Data compression
* File retrieval
* Satisfy 88 of the 168 HIPAA audit controls
* No contracts

## Backup Service Reviews

Specific backup services are listed here to help customers make informed decisions. Most of the products below have quirks and there are learning curves with each one. Some have been reviewed.

**Carbonite**: In June 2016, Carbonite informed us they are capable of supporting backups of live databases for Server Backup versions. Live database backups are currently untested. While some customers have successfully used Carbonite to restore backups, others have reported corrupt files and even appeared to have databases corrupted by the backup process without even doing a restore.

Available for trial or purchase: <https://www.carbonite.com/>

**iDrive**: There are multiple interface options, including classic, web, and explorer (virtual drive). It keeps the last 30 versions of every file, only counting the current version when computing your storage usage. Timeline restore allows restoring to a specific historical point. There's also a free backup program (which we have found to be buggy) available on their website that's optimized for backing up to a removable hard drive. While some customers have successfully used iDrive to manage their backups, others have reported instances where iDrive caused database to lock up and this has occurred even when backup is set to after hours and live backup is turned off.

Available for trial or purchase: [http://www.idrive.com/p=open\_dental](http://www.idrive.com/p%3Dopen_dental).

**SugarSync:** Not reviewed, no known complaints from our customers to us. Feature set looks interesting. Has version management built in, keeping the last 5 versions of every file. Charges by storage size and does not charge extra for multiple computers. Automatic multi-computer sync. Remote access using browser. Share folders with others. The shared folders are password protected, but require the other person to sign up for a free trial. Available for trial or purchase: [www.sugarsync.com/](http://www2.sugarsync.com/)

**Backup4all:** <https://www.backup4all.com/> Get the Pro version. Our favorite features are:

* backup from network share
* backup to network share
* incremental and block-level (partial file) backup
* encryption in zip file
* multiple destinations
* email notification

It also offers cloud backups through the same interface.
 Recommend "mirror" uncompressed backups with "fast mirror" option turned on. Otherwise, backups can only be restored through the Backup4all interface. Read their manual to understand the nuances of this setting. Additional incremental backups can also be done separately from the mirrors.

**Paragon:** Seems very powerful, but they have so many products to pick from that it's very confusing. If you have a large organization, it looks like they could scale up easily to provide centralized backups across many computers. Their free version seems to be intentionally hidden from their menu: <https://www.paragon-software.com/free/br-free/> Not reviewed, but it looks decent and it gets positive reviews from other reviewers. One problem is that the free version only supports workstations, not servers. The next step up from the free version would be Backup and Recovery Business, which does not have a price listed.

## Folder Synchronization (for Replication)

**Distributed File System (DFS):** A good folder synchronization technology if each replication server has a Windows Server operating system. [http://technet.microsoft.com/en-us/library/cc753479(v=WS.10).aspx](http://technet.microsoft.com/en-us/library/cc753479%28v%3DWS.10%29.aspx)