Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

XDR Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **XDR from www.XDRradiology.com**.

![](images/bridgeXDR.png)

XDR website: [www.xdrradiology.com](http://www.xdrradiology.com).

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Enter a **Local path override** if needed.
4. Verify the **InfoFile path**.
5. Enter the **Location ID** as assigned by XDR.
6. If using clinics, select the **Clinic** from the dropdown.
7. Select how XDR should open using the **XDR Patient ID**.
   * PatientNum: Uses the automatically assigned patient number from Open Dental.
   * ChartNum: Uses the manually assigned chart number from Open Dental.
8. Enter the **Text on button**.
9. Under **Add a button to these toolbars**, highlight where to display the button.
10. (Optional) Import an image to show on the button (22 x 22 pixels).
11. Click Save when finished.

## Technical Data

This bridge sends patient data to the specified InfoFile. It then launches XDR and passes the name of the InfoFile as a command line argument.

The Open Dental user that launched the bridge transfers to XDR to ensure the correct database is selected.

XDR now has a standalone MySQL installer that creates a separate MySQL service named MyXDR which uses port 3310 (MySQL for OD uses port 3306). The typical XDR install location is **C:\XDR\MyXDR**. The complete install, including the bin and data directories are in that location. The drive varies depending on customer needs and hardware setup. The MyXDR instance should not interfere with any current or future install of MySQL, so long as it does not use port 3310.

## Multiple Locations

XDR can store images in 3 different ways:

1. Flat files and folders.
2. Hybrid, where metadata is in SQL database, but images are in files.
3. SQL database, with images stored directly in the database itself.

For multiple locations, the recommended solution is to use a single central SQL database to store images. All locations should be connected by a fast VPN, and then the images are all accessed from each location by connecting to the SQL database.