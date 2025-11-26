Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Troubleshooting

See [Installation](installation.html).

Below is troubleshooting information for common issues associated with the installation of Open Dental.

We support [MySQL 5.5](mysql55.html) and [MariaDB 10.5](mariadb.html) in our installer. Any other versions of [MySQL](mysql.html) are not supported by Open Dental and may cause issues with your database. In addition, MySQL must be installed using myISAM default engine, not InnoDb. This can be configured in the [my.ini](myini.html) file.

Related Links:

* [Troubleshooting Slowness](troubleshootingslowness.html)
* [Scanners](scanners.html)
* [Replication Troubleshooting](replicationtroubleshooting.html)

## Installation

Install the [Trial Version](../trial.html) first. Once you are ready to purchase the full version of Open Dental, call us for the registration key and to update to the full version.

When the update is complete, install Open Dental on your workstations. See [Install on Workstation](installworkstation.html).

## Crashes Immediately

If Open Dental crashes immediately upon startup, first make sure that both required [dot Net ( .NET )](dotnet.html) versions are installed.

If the problem is on a single workstation, and Open Dental crashes on startup, or as soon as you select a database, it is possible that DirectX or OpenGL is not installed or working properly. Go to another workstation, then in the [Main Menu](mainmenu.html), click Setup, Advanced Setup, [Computers](computer.html), then use simple graphics on the computer instead.

If Open Dental crashes immediately after the splash screen and without any useful error message, you may not have the Arial font completely installed. From the Control Panel, open Fonts, Arial. Look for Arial or Arial Regular. Not Black, Narrow, Italic, Bold or any other variation, just plain Arial. If it's not present, then install Download and run this file from Microsoft: [EUupdate.exe](../resources/EUupdate.exe).

## MySQL Issues

**Unable to Connect to MySQL Host.**

You've installed Open Dental according to the directions and when you get to the Choose Database window and click OK, it says, "Unable to connect to any of the specified MySQL hosts". It's best to contact us at this point and let us troubleshoot the problem for you over a high-speed internet connection. If you'd rather try it yourself, here are some troubleshooting ideas.

On the Server: If Open Dental is working on the server but not on a workstation, then it could be a firewall issue.

* Check the Windows firewall to make sure incoming traffic on Port 3306 is allowed, as well as any possible firewall that is part of an antivirus program. You may need to turn the firewall off. See [Firewall](firewalls.html).
* If you still can't connect from a workstation, then it might be a networking issue such as not being in the same workgroup.
* If you did a non-standard installation and installed MySQL yourself separately, then it might be a security issue such as improper use of MySQL user name and password. See [MySQL Security](securitymysql.html).

Operating System: Make sure you are using a supported operating system.

* The program will not install on Windows 98, Windows Me, or Windows 2000.
* Windows XP is no longer supported by Microsoft and has limited support from Open Dental.
* If you're using Linux, the process is different. See [Linux and Mac](clinuxmac.html).
* Visit [Computer Requirements](../site/computerrequirements.html) for a full list of supported operating systems.

MySQL Service: MySQL needs to be running to be able to connect.

1. If the MySQL service is not running, go to Services and try to start it.
   * Click Start and right-click Computer.
   * Select Manage.
   * Double-click Services and Applications, then double-click Services.
   * Find MySQL in the alphabetical list.
2. If the service won't start, an antivirus program or backup program may be interfering.
   * Temporarily disable your antivirus or backup program to see if this is the issue. After testing, always make sure that some form of antivirus software is reinstalled, either the same one, or a different brand.
3. Try to reinstall the MySQL service. It may not be installed correctly. See [Trial Version](../trial.html) or contact support.

Proper Installation: Correct installation is crucial to the success of MySQL.

* When completing installation, follow the directions for MySQL installation (see [Trial Version](../trial.html)).
* In the installer program, all the boxes along the left side should be checked.
* Paths and other settings do not usually need to be changed.
* Read each box as it comes up for clarity.
* You might try reinstalling (you don't have to uninstall anything first), and go through each point slowly to be sure you understand each step.
* Feel free to contact Open Dental support if you run into any problems.

  Note: In rare cases on HP computers, the installation path may be incorrect.

Database Files: Make sure the database files are in the right place with no improper nesting.

* Open **C:\mysql\data\opendental\**. You should see about 200 files.
* If the opendental folder is missing, or if you do not see the expected files, then they have been moved. Move them back. You will have to stop the MySQL service to move files. Be very careful not to lose anything or make a mess. Never delete anything; instead, rename by tacking on "old" or some numbers representing the date. Remember that if you change the name of the opendental folder, it cannot have a special characters in the name.

Read Only Database: Are your database files set to read only? The [Choose Database](choosedatabase.html) window may tell you, *Database is present but not accepting commands* instead of *database not present*.

* Go to**C:\mysql\data\**. Right-click on the opendental folder and select Properties.
* Find the box that says Read-only and click on it until it is completely blank.
* Click OK.
* When given the choice, apply changes to this folder, subfolders, and files.
* Run Open Dental.
* If unsuccessful, restart your computer.
* You may need to retry the above steps.
* Contact Open Dental support if you still have issues.

As a last resort, try to install Open Dental and MySQL on a different computer.

**When using RAID on initial installation or migration, you get a MySQL error 1067 or error 87**

This problem can occur when the MySQL program files are on a GPT partitioned drive. Add 'innodb\_flush\_method=normal' to the my.ini file, then start the MySQL service

## Graphics Card

This is a fairly rare error.

In the Choose Database window, clicking OK causes the window to disappear without any error message. Then while the program itself is starting up and before any of the modules show, the program crashes with an error message. The detail text of the error message might look similar to this:

\*\*\*\*\*\*\*\*\*\*\*\*\*\* Exception Text \*\*\*\*\*\*\*\*\*\*\*\*\*\* System.AccessViolationException: Attempted to read or write protected memory. This is often an indication that other memory is corrupt. at Tao.Platform.Windows.Wgl.wglMakeCurrent(IntPtr deviceContext, IntPtr renderingContext)etc...

The key words to look for are "Tao.Platform.Windows". This indicates a bug in the graphics card driver rather than our software.

The graphics card involved will always be an ATI card, usually integrated. The error is happening as our 3D tooth chart is attempting to load. The best solution is to try to update the graphics card driver.

* If you are already using the most current driver, then the only option will be to make a change to the database which will tell Open Dental to use a 2D tooth chart for this workstation.
* It is usually best to let us make the change to the database for you using a remote connection. But if you are a power user, it's OK to attempt it yourself.
* To see the database and to make the change you will use any client program of your choice. You can even use the User Query tool that's in Open Dental itself, but you will have to do it from a workstation that is already running Open Dental successfully.
* You will need to know the name of the computer where you are having the problem. Let's assume the name is "FRONTDESK".
* Run this query:

  SELECT \* FROM computerpref
* Look for a row in the resulting table that has FRONTDESK (for example) in the ComputerName column. If you don't see such a row, run a query similar to this (only try this if you know what you are doing):

  --INSERT INTO computerpref (ComputerName,GraphicsSimple) VALUES ('FRONTDESK',1);
* Or, if you do see a row with FRONTDESK already, then run a query similar to this (only try this if you know what you are doing):

  --UPDATE computerpref SET GraphicsSimple=1 WHERE ComputerName='FRONTDESK';
* One more time, run

  SELECT \* FROM computerpref

  to verify that the row looks correct. Then, try again to restart Open Dental on the problem workstation.
* See [Graphics Preferences](graphics.html) for information on how to try a different format. But beware that if the graphics driver is buggy, that it may crash while you are trying different graphics formats, and you would then need to go through the process above again. It is probably better to try to update the graphics driver or to switch to a different graphics card.

## Text is Cut Off or Windows Not Displaying Properly

The Windows display font size setting is too big, so now the button text and other text in Open Dental does not fit inside the controls. It typically looks like the bottom of some windows are cut off so user cannot click OK or Cancel. Change your DPI setting to 100% (96 pixels per inch), then restart your computer if necessary.

* Windows 7: Control Panel, Personalization, Display. At the very left, there is a link to Set custom text size DPI.

If your screen resolution is 1280 x 768, the bottom of Open Dental may be cut off due to the task bar. The easiest fix for this is to resize the Open Dental program to end just above the task bar.

See [Screen Size](../site/screensize.html) for additional information on screen scaling, resolution and display size.

## Missing Buttons

If, after updating, certain windows no longer appear to fit on the screen and buttons are missing and/or inaccessible, this is usually caused by running Open Dental in compatibility mode.

To correct this, right-click on the Open Dental shortcut. In the Compatibility tab, uncheck the "Run this program in compatibility mode for" option in the *Compatibility mode* section.

## Other Problems While Using Open Dental

1. Run [Database Maintenance](databasemaintenance.html).
2. Make sure you are using the most current version. See [Update](update.html) to check. If a new build is available for your version, update.
3. Run Database Maintenance again, since improvements are constantly being made to it.
4. Did you use our installer to install MySQL? If not, see the MySQL Server Variables.
5. Read the manual carefully so that you completely understand how the program is supposed to function. If you are using the most current version, and you think you found a bug, let us know. We generally only accept bug reports from users who are on a support plan.