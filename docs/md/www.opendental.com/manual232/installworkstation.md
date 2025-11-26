Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Install on Workstation

See [Installation](installation.html).

These steps explain how to install Open Dental on a new workstation when there are multiple computers in the office. Workstation installations are different than server installations.

Note:

* Open Dental requires the .Net framework, which is usually installed with most modern operating systems.
* Individual workstations do not need MySQL/MariaDB components, the OpenDentImages folder, or databases installed.
* If installing in [Canada](canada.html), set the [Region and Language Settings](regionlanguagesettings.html) on the workstation to Canada before installing.

## Installation Steps

In File Explorer:

1. From the workstation, browse to the [OpenDentImages](atozfolder.html) folder on the server.
2. Locate the Setup.exe file.
   ![](images/installWorkstation.png)
3. Right-click on the Setup.exe file and select *Run as Administrator*.
4. Once the install is complete, the Open Dental icon appears on the desktop. Right-click the icon and select *Run as Administrator*.
5. In the [Choose Database](choosedatabase.html) window, select the connection settings:
   * Enter the servername or IP address.
   * Select the database.
   * Enter the MySQL Username and Password.
   * (optional) Check *Do not show this window on startup* to hide this window the next time Open Dental is started. This is a typical setting on a workstation.