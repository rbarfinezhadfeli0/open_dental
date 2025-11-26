Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Install Update

See [Update](update.html).

## Update Requirements

To update Open Dental versions, the practice must be on support and have a unique registration key. If your practice is no longer on support and would like to update, contact [Open Dental Support](../contact.html) to sign back up for support.

Special Installations:

* Open Dental Cloud users, contact Open Dental Support to schedule an appointment to update.
* Multiple location users, see *Updates for Enterprise Users* at the bottom of this page for additional details.
* eService users, always update from the computer where the eConnector is installed.
* HL7 users, always update from HL7 server.
* Replication users, see [Replication: Update Open Dental Version](replicationupdateod.html) for update instructions.

Note: Set an *Update Server* name in [Preferences](preferences.html) to run updates from a specific computer. This can prevent accidental updates and is especially important when using eServices or HL7, or when there are multiple locations.

Notes about updating:

* ![](images/YouTube_PlayButton_15px.png) See our video: [How to Update Open Dental to a New Version](https://www.youtube.com/watch?v=d8CVI3X2Qf8)
* The update time varies on three factors: how far behind the current database version is, the size of the database, and the speed of the server. Generally, an update can be done in 15-30 minutes, however, if there is observable slowness on the server or if the version was released more than two years ago, staff may want to have an hour set aside to be safe. If anything goes wrong, it is possible that it will take longer, these times are not guaranteed.
* We recommend running updates from the server to avoid possible network permission issues.

## Update Instructions

Use these steps to follow along when performing an Open Dental update.

1. In the Update window, Click **Check for Updates**. This displays the available updates.
   * For users with an active registration key, the most recent versions are always available for install.
   * If the database does not have an active registration key (no longer on support), only versions that were available as of the date the key became inactive can be installed.
   * Foreign releases of beta versions require additional time for bug testing, so users outside the U.S. may note a delay.![](images/update1.png)
2. Click **Install** next to the version preferred version to update to.
3. Depending on the current version, there may be additonal warnings or announcements. Take additional action as needed, then click **OK** to proceed. If the are no warnings or announcements, see Step 4.
4. Any open workstations are listed. Open Dental must be closed on all workstations when an update is performed. Click **Continue** to close Open Dental on the workstation and proceed with the installation.
   ![](images/update3.png)
5. The download begins.
   ![](images/update4.png)
6. Once the download is complete, click **OK**.
   ![](images/update5.png)
7. Open Dental closes. Wait until the Setup Wizard appears.

8. Follow the prompts of the Setup Wizard.
   ![](images/update6.png)
9. On the final step of the Setup Wizard, click **Finish**. The Wizard closes.
   ![](images/update7.png)
10. Right-click the Open Dental icon and run as administrator to open.

11. There is a prompt to update the database.
    ![](images/update8.png)
12. Once complete, log into Open Dental as usual.

Note:

* Once the update is installed and run, all other computers are automatically updated when the program is next opened so the computers can easily be kept updated.
* An update can be triggered from any workstation that is using a higher version of Open Dental, even if an update was not intentionally run. This can happen when a multi-location office connects to multiple databases from the same workstation.
* Some updates automatically backup the database as a preventive measure. Large enterprise organizations that update often and have a comprehensive backup strategy can contact Open Dental technical support to disable this process.
* Automatic backups during the update process are generated in the MyISAM format. If an automatic backup needs to be restored after a failed update, offices that use InnoDB must repeat the [DB conversion process](mysqlinnodb.html). The preference *Disable indexes to speed up automatic backups* determines if indexes are included in the backup and can affect the speed of the backup.

## License Agreement

Depending on certain factors, there may be a License Agreement prompt.

![](images/licenseAgreement.png)

This prompt appears when:

* Updating to Open Dental Version 21.3 or greater.
* The user logging in is an Admin user with the *Admin Setup* permission.
* A user has not agreed to the terms yet.

Licenses can be viewed again anytime. See [Licenses](licenses.html).

## Updates for Enterprise Users

Enterprise users who do not allow normal users to have administrative privileges and prefer to centrally manage all software updates can use the standard Windows solution for pushing updates. Use a Group Policy to enable per machine software assignment.