Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PreXion Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html), PreXion Viewer.

![](images/bridgePreXion.png)

PreXion is an imaging software. Website: [www.prexion.com](http://www.prexion.com/).

The PreXion Viewer bridge allows users to view images in PreXion. To take new images, see [Prexion Acquire Bridge](bridgeprexionaquire.html).

Note: New patients should first be launched from the PreXion Acquire Bridge to ensure patient records are created using the same record number (typically PatNum) as Open Dental.

To enable the bridge:

1. Check the **Enabled** box.
2. Enter the **Path of file to open** as shown.
3. Enter **Additional Properties**:
   * Enter 0 to use PatientNum, or 1 to use ChartNum: See below for details. This should typically be 0.
   * Username: Enter PreXion username.
   * Password: Enter PreXion password.
   * Server Name: Enter the server name.
   * Port: Enter the port specification.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

Previously, this bridge had to be created as a custom bridge. The following information relates to PreXion bridges that were custom created in Open Dental.

The command line arguments will be similar to this:

-l username -p password -pid [PatNum] servername 1200

or

-l username -p password -pid [ChartNumber] servername 1200

Servername is the name of the PreXion server. 1200 refers to the port.