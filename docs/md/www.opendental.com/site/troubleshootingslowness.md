Table of Contents

[Help](https://www.opendental.com/site/help.html)

[![Home](resources/logoWhite160.png)](../index.html)

[![](resources/search.gif)](searchSite.html)

Troubleshooting Slowness

See [Troubleshooting](troubleshooting.html).

If Open Dental is not as fast and responsive as you would like it to be, there are various steps that can be taken. Contact [Open Dental Support](contact.html) for assistance with these steps.

## Update Version

Update to the most recent build of the currently installed version or update to the newest stable version.

## Upgrade to MariaDB

If using MySQL 5.5, upgrade to [MariaDB](mariadb.html) 10.5.

MySQL 5.5 is 32 bit and may create a processing bottleneck. Upgrading MariaDB to 10.5 will allow for the service to use more server resources, allowing for more processing capabilities, especially if using any third parties or running large reports."

## Settings and Tools

* Run the [Test Latency](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7testlatency.html) tool.
* Run the [Database Maintenance](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenance.html) tool.
* If switching days in the Appointments Module is slow, run the [Clear Duplicate Blockouts](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7blockoutsduplicate.html) tool.
* In [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html)
  + Uncheck the box for *Show ! at upper right of appts for ins not sent*.
  + Check the box for *Appointment bubble popup disabled*.
  + Uncheck the box for *Filter the waiting room based on the selected appointment view*.

## Report Server and Read-Only Server

If experiencing slowness when running reports, the office can designate a dedicated [Report Server](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reportserver.html).

If experiencing slowness when opening [Select Patient](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7patientselect.html), [CEMT Select Patient](central.html), and when opening claims from [ERA](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7era.html) or [ERAs Automatically Processed Report](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7reporterasautomaticallyprocess.html), the office can enable the preference, *Use Separate Read-Only Server*. Other back-end processes utilize the Read-Only Server, so offices experiencing slowness may benefit in setting up a Read-Only Server, even if slowness is not occurring with one of the specified events.

If utilizing a third-party hosted cloud server as the Read-Only Server, enter the file path for the security certificate in the *Sky SQL PEM* Read-Only server preferences. The certificate must be accessible from all workstations.

The Report Server and Read-Only Server can be the same server, but they should generally be different. Both the Report Server and Read-Only server should be different than the database server.

See [One-Way Replication](replicationoneway.html) to set up a Read-Only or Report Server.

## Enterprise Preferences

When Enterprise Setup is enabled in [Show Features](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7showfeatures.html), there are several Enterprise categories in [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html). These categories serve as a centralized location for setting a variety of options related to running Open Dental in an enterprise setting. Many are designed to improve performance by reducing server load for basic tasks.

## Refreshing Data

The *Process signal interval* set in [Preferences](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7preferences.html) determines how often Open Dental sends signals to the database to automatically refresh data. If you are experiencing slowness, especially very large clinics with many workstations, decreasing the number of signals sent may help. This can be accomplished by increasing the interval and/or disabling signals when workstations are inactive for a set period of time.

## Topaz Signature Pads

A computer that currently or previously had a Topaz signature pad installed may experience significant slowness (10 or more seconds) in certain parts of the program, such as procedure edit and commlog edit. Follow these steps to fix:

1. Unplug the Topaz pad from the computer if present.
2. Uninstall the SigPlusBasic application if present.
3. Reinstall Topaz.

For each computer you do not want to use the Topaz pad, repeat steps 1 and 2 to uninstall the Topaz pad.

## Data Path

The connection to the [A to Z Folder](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7atozfolder.html) might be slower than the connection to the database. This is especially true if using a VPN. This slowness will be noticeable when working with images in the Images module. If you use patient pictures, then the slowness will be most noticeable in the Family module and the Appointments module when hover bubbles come up. Open the Data Path window ([Paths](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7paths.html)). If the path at the top is a location that is over a VPN rather than in the LAN, enter an override for the current workstation. The override should point to an A to Z folder in the LAN that stays synchronized with the other A to Z folders. Go around to each workstation and enter the override.

## Slow Printing

Slow printing sometimes happens with network printers. One way to simplify your printing issues is to connect your printer directly to a computer with a USB cable.

## Email

If using the inbound email message feature ([Email Client](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailinbox.html)), slowness could be due to inbound email syncing. Try disabling the inbound email retrieval by going into each email address setup in [Email Setup](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7emailsetup.html) and clearing the Incoming POP3 Server. Also clear the Computer Name to Receive Email From field. It's also a good idea to close all instances of Open Dental on the Computer named in the 'receive from' field, then reopen.

## Interference from Other Programs

Antivirus, firewall, and malware programs can cause slowness in Open Dental. The following specific programs have been verified to cause slowness:

* McAfee (turning off is not sufficient; must be uninstalled)
* ZoneAlarm (turning off is not sufficient; must be uninstalled)
* Dell ControlPoint (also consumes CPU)
* AVG (sometimes causes issues)

The slowness issue associated with the above programs may have been solved by newer versions of those programs. But based on this known interference, a firewall should always be suspected ([Firewall](firewalls.html)). The firewall could be software or hardware.

When testing if an antivirus is the problem, you can try using the antivirus 'disable' option, or if that doesn't work, uninstall the antivirus program. To prevent the server from being hacked during the test, unplug the server ethernet cable to disable internet access on the server before turning off the antivirus application. Unplugging the ethernet to the server means that you will test slowness before and after disabling/uninstalling the antivirus service on the server. Because the ethernet is unplugged, clients will not be able to connect during testing.

## Database optimization

Run the Optimize tool in the [Database Maintenance Tools Tab](../autoLogin.aspx%EF%B9%96ReturnUrl%3D%EA%A4%B7help253%EA%A4%B7databasemaintenancetools.html). The process can take a few minutes. If you notice a significant speed improvement and you have a very large database, you might consider running this tool once per month.

If you are using an older version of Open Dental, you can use the [mysql-administrator-1.1.9-win.msi](../resources/mysql-administrator-1.1.9-win.msi) tool to run optimization.

## Edit the my.ini File

See [my.ini](myini.html).

## Log Slow Queries

See [Slow Query Log Tool](slowquerylog.html) for steps on enabling the log and reviewing the data.

## Replication

**Problem: Open Dental is running slowly or locking up for long periods of time.**

Solution: If using [Random Primary Keys](replicationprimarykeys.html) replication, try increasing the size of your key ranges. When new records are created, Open Dental searches for an available key value from the table it is inserting into. If no more keys are available, Open Dental will be stuck in an infinite loop.

**Problem: In one of my offices, from any client machine, Open Dental freezes just after the Log On Screen.**

Solution: Restart the MySQL service, then restart the MySQL replication thread by running these SQL commands: **SLAVE STOP; SLAVE START;**

## Electronic Prescriptions

If using Ensora eRx (formerly NewCrop eRx), sluggishness when loading the Chart Module may be caused by the eRx vendor's servers being unavailable. Please check the [Open Dental Home Page](../index.html) for any notices of known issues. If you do not see a notice, please contact us.

## eClinicalWorks

**Problem: Open Dental takes a long time opening certain patients, or gradually gets slower over time.**

Solution: If patients were entered without setting a guarantor, this can cause slowness when opening a patient account. To see if this is the cause, run this query: SELECT COUNT(\*) FROM patient WHERE Guarantor=0;

If fewer than 10 results are returned, this is not the cause of slowness. If greater than 10 results are returned, contact us and we will fix it for you.