Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Update to Full Version

See [Installation](installation.html).

When you order the full version of Open Dental, a support technician will often update the software on the main computer and perform some minor required setup. If you update on your own, refer to the following instructions.

1. If not already installed, install the [Trial Version](http://opendental.com/trial.html) on the server.
2. Update to the full version on the server following the instructions below.
3. Perform required setup on the server (see below).
4. If using Open Dental on several computers, see [Install on Workstation](installworkstation.html). These steps are different than server installations.

These steps are used when updating from the Open Dental Trial Version to the Full Version. If the full version of Open Dental is already installed, use the steps on [Install Update](updateinstall.html) instead.

## Update to the Full Version on the Server

The Trial version should already be installed.

1. On the computer desktop, right-click on the Open Dental icon, then click **Run as Administrator**.
2. In the [Main Menu](mainmenu.html), click Help, Update, then **Setup** in the upper left corner.
   ![](images/installUpdateSetup.gif)
3. Next to Registration Key, click **Change**.
4. Enter the registration key from the welcome email.
5. Review the CDT, Open Dental and SQL license agreements. Check the boxes to agree. See [CDT Compliance](../resources/cdtcompliance.pdf).
6. Click **OK** twice to return to the Update window.
7. Click **Check for Updates** to see a list of all available versions.
   ![](images/updatecheck.png)
8. Click **Install** next to the version to install. Only select one option. Normally, offices want to install the *New Stable* version. Do not install *Beta* unless users are comfortable with potential errors. Beta versions are not quite as stable and will require frequent updates.
9. Any announcements specific to the update will show. Click **OK** to proceed.
10. Open Dental must close on all workstations. A warning message will show. Click **Continue** to close Open Dental on the listed workstations and start the download. The listed workstations will receive a warning before Open Dental closes.
![](images/updateShutdownWorkstations.png)11. Restart Open Dental. When it opens, the new files will be copied to the server. Installation to the main computer is complete.

## Required Setup

Complete these steps on the server (main computer) before proceeding. A support technician can assist the office.

1. Run the [Procedure Code Tools](procedurecodetools.html) to remove temporary codes used in the Trial version and automatically add CDT codes.
   1. In the main menu, click Lists, Procedure Codes.
   2. At the lower left, click **Tools**.
   3. Check all boxes.
   4. Click **Run Now**.
2. If using multiple computers, perform these on the server before installing on a workstation.
   1. See [Share A to Z Folder](atozshare.html).
   2. Set the path to the shared OpenDentImages folder. (In the main menu, click Setup, [Data Paths](paths.html)).

If workstations have trouble connecting, it may be a firewall issue. If users cannot get past the Choose Database window, then it's a firewall issue. The office may need to create an exception to allow Port 3306. See [Firewall](firewalls.html) for information on how to open Port 3306.