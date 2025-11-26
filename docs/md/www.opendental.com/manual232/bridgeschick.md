Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Schick CDR Dicom Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Schick from www.schicktech.com**.

![](images/bridgeSchick.png)

Schick is a digital imaging software. Website: [www.schickbysirona.com](http://www.schickbysirona.com/).

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on a row in **Additional Properties**.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Schick Version 4 or 5: Enter the version of Schick you are using. The default is version 5. Version 4 applies to any version prior to version 5.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

## Technical Details

Open Dental passes the LN (last name), FN (first name), and PatNum/ChartNum to Schick.

Within Schick, make sure that it is set to use bridge mode.

Schick versions older than v3.5 will not reuse the exam window.

For Windows 10, the minimum requirement is CDR DICOM 5.

You may also use the Apteryx Data Grabber instead of our built-in bridge if you wish: <https://apteryx.com/product/datagrabber/>.