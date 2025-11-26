Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Demandforce Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **DemandForce**.

![](images/bridgeDemandforce.png)

Demandforce is a marketing and communication platform for dental practices. Website: [https://www.demandforce.com/.](https://www.demandforce.com/)

Note: As of February 2017, Demandforce no longer develops D3One. This bridge was implemented for this specific software. If you obtained D3One prior to its discontinuation, the bridge will work for you. Otherwise, D3One is no longer available.

To enable the bridge:

1. Check the **Enabled** box.
2. Change the **Path of file to open** to the Demandforce executable (e.g., demandforce.exe or d3one.exe).
3. Under **Additional Properties**, double-click the Value cell then enter the Demandforce license key.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

The bridge will write out an xml file with all patient data. Use Demandforce to sync the xml file.