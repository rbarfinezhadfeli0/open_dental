Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Install on Workstation

See [Installation](installation.html).

These steps explain how to install Open Dental on a new workstation when there are multiple computers in the office. Workstation installations are different than server installations.

Note:

* Open Dental requires the .Net framework, which is usually installed with most modern operating systems.
* Individual workstations do not need MySQL/MariaDB components, the OpenDentImages folder, or databases installed.
* If installing in [Canada](canada.html), set the [Region and Language Settings](regionlanguagesettings.html) on the workstation to Canada before installing.

## Installation Steps

In File Explorer:

1. From the workstation, browse to the OpenDentImages folder on the server.
2. Locate the Setup.exe file.
   ![](images/installWorkstation.png)
3. Right-click on the Setup.exe file and select *Run as Administrator*.
4. Once the install is complete, the Open Dental icon appears on the desktop. Right-click the icon and select *Run as Administrator*.
5. In the Choose Database window, select the connection settings:
   * Enter the servername or IP address.
   * Select the database.
   * Enter the MySQL Username and Password.
   * (optional) Check *Do not show this window on startup* to hide this window the next time Open Dental is started. This is a typical setting on a workstation.