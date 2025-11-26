Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

SOTA Cloud Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **SOTA Cloud from sotacloud.com**.

![](images/bridgeSotaCloud.png)

SOTA Cloud is an imaging software. Website: <https://sotaimaging.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on **Additional Properties** to change settings.
   * Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   * Practice Instance Name: A unique identifier provided by SOTA. Required.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click Save.

## Technical Details

This bridge uses an API so there is no local path to set and no executable to launch. The bridge is launched using the workstation's default web browser. SOTA Cloud is only compatible with Chromium-based browsers (e.g., Google Chrome, Microsoft Edge, etc.)

If utilizing the SOTA Hub, use the [ClioSoft/SOTA Imaging Bridge](bridgecliosoft.html) instead.