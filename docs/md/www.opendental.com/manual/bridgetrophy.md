Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Trophy Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click **Trophy**.

![](images/bridgeTrophy.png)

After version 5.0, this is known as Kodak Dental Imaging (KDI). Also use this bridge for some Carestream products.

There are two different Trophy bridges available:

* *Trophy Simple*: Not recommended, however may be used for new installations of Trophy. It always uses the patient ID (PatNum) as the image folder name.
* *[Trophy Enhanced](bridgetrophyenhanced.html)*: Recommended for new installations. Required for existing installations of Trophy. For existing installations, the user must type in the name of the folder in the Edit Patient Information window for each patient.

Note: To change patients, close Kodak, switch patients in Open Dental, then reopen the bridge.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings.
   1. In the first row, enter 0 to use the Patient Number or 1 to use Chart Number.
   2. Storage Path: Enter the folder or network path location where images are stored.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click Save.

## Technical Details

Storage Path: The storage path might look similar to

\\SERVER\tw

or

F:\tw

The storage path must be set to exactly the same value as the database location within Trophy. The location for the database can be edited within the Trophy program. Trophy uses this database path when searching for patients.

**Simple Bridge**
 If using the simple bridge, Open Dental always simply uses the Open Dental PatNum to name the Trophy folders. For example, for John Smith, PatNum=123, his images might be found in this folder:

\\SERVER\tw\123

## Troubleshooting

If the bridge is not working, troubleshoot it by creating a Windows shortcut. The location / target is the Trophy program itself. For example, **C:\Program Files\Trophy\TW.exe**. After creating the shortcut, right-click on it and select properties. Edit the target. Add a space after the original target and then -P, then no space, then the full path to a patient folder without any trailing \. Similar to this:

C:\Program Files\Trophy\TW.exe -PF:\tw\G.rvg\G0000001

Close the properties window. Then, click the shortcut to test. This simulates exactly what Open Dental is doing. If this does not work, then Open Dental will not work either. If it does work, change the settings in Open Dental to match.