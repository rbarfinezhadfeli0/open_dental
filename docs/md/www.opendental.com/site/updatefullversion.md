Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Update to Full Version

See [Installation](installation.html).

When you order the full version of Open Dental, a support technician will often update the software on the main computer and perform some minor required setup. If you update on your own, refer to the following instructions.

1. If not already installed, install the [Trial Version](trial.html) on the server.
2. Update to the full version on the server following the instructions below.
3. Perform required setup on the server (see below).
4. If using Open Dental on several computers, see [Install on Workstation](installworkstation.html). These steps are different than server installations.

These steps are used when updating from the Open Dental Trial Version to the Full Version. If the full version of Open Dental is already installed, use the steps on [Install Update](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7updateinstall.html) instead.

## Update to the Full Version on the Server

The Trial version should already be installed.

1. On the computer desktop, right-click on the Open Dental icon, then click **Run as Administrator**.
2. In the Main Menu, click Help, Update, then **Setup** in the upper left corner.
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

1. Run the Procedure Code Tools to remove temporary codes used in the Trial version and automatically add CDT codes.
   1. In the main menu, click Lists, Procedure Codes.
   2. At the lower left, click **Tools**.
   3. Check all boxes.
   4. Click **Run Now**.
2. If using multiple computers, perform these on the server before installing on a workstation.
   1. Share the A to Z Folder.
   2. Set the path to the shared OpenDentImages folder. (In the main menu, click Setup, [Data Paths](0_paths.html)).

If workstations have trouble connecting, it may be a firewall issue. If users cannot get past the Choose Database window, then it's a firewall issue. The office may need to create an exception to allow Port 3306. See [Firewall](firewalls.html) for information on how to open Port 3306.