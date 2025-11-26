Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Update Setup

The Update Setup window contains settings for updating Open Dental. Most of these fields do not change.

In the [Update](update.html) window, click **Setup**.

![](images/updateSetup.png)

**Server Address for Updates / Website Path for Updates**: Do not change these fields; these are required to access Open Dental updates.

**Web Proxy**: Open Dental HQ can provide a proxy address if the office has tight security. This option is rarely used.

**Registration Key**: Click **Change** to open the Registration Key window to enter or update a valid registration key supplied by Open Dental. The registration key can be found in the Welcome email sent after signing up for support. View [License Agreements](licenses.html) and enter the registration key.
![](images/UpdateSetupRegKey.png)
 If changing the registration key, check **I agree to the terms of all of the above license agreements in their entirety.**

**Simultaneously update other databases**: Only for offices that always run multiple databases. For example, multiple dental offices are consolidated in one physical location with a common reception area. In these situations:

1. Pick one *main* database from which updates are always performed.
2. In that database, open the Update Setup window, and enter the names of all the other databases.
3. Follow this sequence to perform an update:
   * Use the [Shutdown](shutdown.html) Tool on all databases other than the main database.
   * Update the main database. This locks users out of all databases at once.
   * Open up each of the other databases. Users are locked out until this is done.

**Show buttons for msi:** Check to see the *Download MSI* option in the Update window. Useful for enterprise or domain users that may want to use an OpenDental.msi instead of OpenDental.exe. Silent install is supported using the following Windows Installer command-line options:

* /quiet
* /qn

**Update Notification Time**: Start a countdown to an update that shows on all workstations.

1. Click **Change**.
   ![](images/updateTime.png)
2. Select the date.
3. Select the estimated update time.
4. Click **OK**.

The time remaining until the update shows in the title bar of all workstations and is updated every 5 seconds.

Update In: 6 hours, 43 minutes

During this time, install and download msi buttons are disabled. Once the date/time has passed, the countdown no longer shows and buttons are enabled again.

Note: The update does not automatically occur once the countdown ends. It must still be manually started.

**Recopy**: Click to update the Update Files folder in the A to Z folder with files from the most currently installed version.