Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Apteryx XVWeb Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **XVWeb from www.apteryx.com/xvweb**.

![](images/bridgeXVweb.png)

Apteryx XVWeb is a web-based imaging application. Website: <http://www.apteryx.com/xvweb>. Before activating the bridge, log into the XV Web account to ensure the XV Web service is active.

To activate the bridge:

1. Check the **Enabled** box.
2. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Enter the custom XV Web URL.
   3. Enter the XV Web **Username**.
   4. Enter the XV Web **Password**.
   5. Select the **Image Category** to save images to.
   6. Select whether to **Save Images** to the OpenDentImages folder. Enter *yes* or *no*.
   7. Enter the preferred **Birthdate Format**.
   8. Select the **Image Quality**.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

## Saving Images

The "yes" option does not work. Leave this in the "no" position. Behavior will be as follows. The image will exist as a download, but will not allow editing or manipulation from the Imaging Module until manually imported into the database. Open Dental will automatically retrieve images in XV Web into the Chart Module, but will not automatically download them. You must still download images you would like to store in Open Dental. In the Chart Module, images will show as downloaded thumbnails. If double clicked, a full size image will be downloaded.

(Optional) Create a new Image Category to save XV Web images to. See [Definitions: Image Categories](definitionsimagecat.html). Set the folder as the default by setting the Image Category above.

## Technical Details

A user name and password is required the first time the bridge is launched. Open Dental will send the selected patients birthdate (optional), chart number (if selected), gender (optional), name, and patient number to Apteryx XVWeb. If the patient does not exist in XVWeb a new patient record will be created.

If an image is saved to Open Dental by copy/pasting or importing, it will appear twice.

This feature will work more efficiently in offices that have a high speed internet connection. If any errors occur, try refreshing the Imaging Module or Chart Module and try again.

To view the old Imaging Module interface, enable *Use old Imaging module interface, pre 2020* in [Preferences](preferences.html). All instances of Open Dental must be closed after enabling this preference so the interface can be synched.