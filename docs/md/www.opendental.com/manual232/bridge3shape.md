Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

3Shape Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **3Shape from www.3shape.com/en**.

![](images/bridge3shape.png)

3Shape is a digital imaging software. Website: <https://www.3shape.com/en>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
    (Typically, C:\Program Files\3Shape\Dental Desktop\Plugins\ThreeShape.PracticeManagementIntegration\DentalDesktopCmd.exe.)
3. Double-click on a row in **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

The Open Dental *Patnum* is used to determine patient selection, but the Patnum does not display in 3Shape.

If Birthdate and SSN are entered in Open Dental, these fields pass over to 3Shape.

The *Command Line Interface* setting may need to be enabled in 3Shape settings in order for the bridge to work.