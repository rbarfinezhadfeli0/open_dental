Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Update Setup

The Update Setup window contains settings for updating Open Dental. Most of these fields will not change.

In the [Update](update.html) window, click **Setup**.

![](images/updateSetup.png)

**Server Address for Updates / Website Path for Updates**: Do not change these fields. Required to access Open Dental updates.

**Web Proxy**: Open Dental HQ can provide a proxy address if the office has tight security. This option is rarely used.

**Registration Key**: Click **Change** to enter or update a valid registration key supplied by Open Dental. The registration key can be found in your Welcome email. The Registration Key window will open. View [License Agreements](licenses.html) and enter the Registration Key.
![](images/UpdateSetupRegKey.png)
 If changing your registration key, check **I agree to the terms of all of the above license agreements in their entirety.**

**Simultaneously update other databases**: Only for offices that always run multiple databases. For example, multiple dental offices are consolidated in one physical location with a common reception area. In these situations:

1. Pick one *main* database from which you will always perform updates.
2. In that database, open the Update Setup window, and enter the names of all the other databases.
3. Follow this sequence to perform an update:
   * Use the [Shutdown](shutdown.html) Tool on all databases other than the main database.
   * Update the main database. This locks users out of all databases at once.
   * Open up each of the other databases. Users will be locked out until this is done.

**Show buttons for MSI:** Enterprise users may want to use an *OpenDental.msi* instead of OpenDental.exe. Check this box to show buttons for msi. When you return to the main Update window, you will see the option to download the msi instead of the exe.

**Update Notification Time**: Start a countdown to an update that shows on all workstations.

1. Click Change.
   ![](images/updateTime.gif)
2. Select the date.
3. Select the estimated update time.
4. Click OK.

The time remaining until the update will show in the title bar of all workstations and will update every 5 seconds.

Update In: 6 hours, 43 minutes

The install and download msi buttons will also be disabled. Once the date/time has passed, the countdown will no longer show and buttons will enable again.

Note: The update will not automatically occur once the countdown ends. It must still be manually started.

**Recopy**: Click to update the Update Files folder in the A to Z folder with files from the most currently installed version.