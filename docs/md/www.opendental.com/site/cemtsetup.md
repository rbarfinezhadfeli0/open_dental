Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

CEMT Setup

Some setup is required before using the [Central Enterprise Management Tool ( CEMT )](central.html).

## Configure the Central Manager

[Update](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7update.html) to the latest stable version of Open Dental before using the CEMT tool.

These steps are required before the CentralManager.exe file (open the Central Manager main window) can be launched.

1. Stop the MySQL service.
2. Place a blank copy of an Open Dental database in the **C:\mysql\data folder**. Rename it to identify it as the central manager database (e.g., dbcentral).
   * **For MySQL Users**: If using Open Dental 20.5.63 or newer, a blank database can be downloaded here: [dbcentral\_20\_5\_63.zip](../resources/dbcentral_20_5_63.zip).
   * **For MariaDB 10.5 Users**: If using Open Dental 21.1.49 or newer, a blank database can be downloaded here: [dbcentral\_10.5\_24.1.66.zip](../resources/dbcentral_10.5_24.1.66.zip)
   * **For MariaDB 10.11 Users**: If using Open Dental 24.3.54 or newer, a blank database can be downloaded here: [dbcentral\_10.11\_25.1.61.zip](../resources/dbcentral_10.11_25.1.61.zip)

   Note: To save the database, right-click and *Save As*. If Google Chrome displays a security warning, select *Keep*.
3. Start the MySQL service.
4. Open Open Dental and select *dbcentral* from the [Choose Database](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7choosedatabase.html) window. This updates *dbcentral* to the current version of Open Dental.

   Note:
   * If the Choose Database window does not appear on startup, run Open Dental as a administrator, then go to File, Choose Database. Uncheck *Do not show this window on startup (this computer only)*. Close Open Dental then try again.
   * After the database is updated an Add Regkey window appears. A registration key is not required for the CEMT database. Simply close the regkey window.
5. Copy *FreeDentalConfig.xml* from **C:\Program Files (x86)\Open Dental** to the desktop.
6. Rename the file to CentralManagerConfig.xml and right click on the file and select Edit with Notepad. It will look similar to the following:
   ![](images/cemtSetupXml.png)
   * Change the ComputerName to reflect the name or IP address of the server.
   * Change the database name to the central manager database (e.g. dbcentral).
   * Ignore the parameters for NoShowOnStartup and UseDynamicMode, if present. These parameters are ignored.
   * Move this file from the desktop to Open Dental installation directory (typically **C:\Program Files (x86)\Open Dental\**)
7. Launch *CentralManager.exe* from the Open Dental program folder to begin using CEMT. Create a Windows shortcut to this program to make it easier to open in the future.
8. Once the CEMT is launched, set up database connections and define users, permissions, and other security settings.
   * Set up [CEMT Connections](cemtconnections.html).
   * Create connection groups.
   * Define [CEMT Security](cemtsecurity.html) settings (users, user groups, permissions, lock dates).

## Adding CEMT to an Additional Workstation

1. On the server, copy the CentralManagerConfig.xml file to the OpenDentImages folder.
2. On the workstation, open the OpenDentImages folder.
3. Copy the CentralManagerConfig.xml file and paste it into the Open Dental directory (typically **C:\Program Files\Open Dental (x86)\**)
4. Launch the Central Manager.

## Middle Tier

If the central manager database is hosted on a [Middle Tier](middletier.html) server, also add a new middle tier XML node for the URI: **<MiddleTierAddr></MiddleTierAddr>**. Add it directly under the password node.

CEMT does not work for Middle Tier connection when using [eClinicalWorks](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7bridgeeclinicalworks.html).