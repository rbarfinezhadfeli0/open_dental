Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Mountainside Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click **Mountainside from www.mountainsidesoftware.com**.

![](images/bridgeMountainside.png)

Mountainside software is a medical practice management software.

Website: <http://mountainsidesoftware.com/>. Open Dental can provide dental capabilities for Mountainside customers.

To enable the bridge:

1. Check the **Enabled** box.
2. Enter the **Out From Mountainside** HL7 path.

   Note: The path is relative to the server computer, not the workstation you are on.
3. Install the OpenDentalHL7 service on the server.

## Technical Details

Any patients that are added or changed in Mountainside are automatically synced in Open Dental. Users should make changes to demographics in Mountainside rather than in Open Dental, because their changes might otherwise be overwritten later by the sync process.

There must be a primary key used to uniquely identify patients in both systems. Because Open Dental users do not have any control over the PatNum, the ChartNumber is instead used. As patients are added or changed in Mountainside, Open Dental attempts to fill in the ChartNumber field of existing patients to match the internal patient ID from Mountainside. Once the ChartNumber field has been set in OD, it allows straightforward future synchronization.