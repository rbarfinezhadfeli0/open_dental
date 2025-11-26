Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

iCat Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **iCat**.

![](images/bridgeICat.png)

iCat is an imaging software. Website: <https://www.kavo.com/en-us/i-cat>

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Enter the **Acquisition computer name**.
   3. Verify **XML output file path**.
   4. Verify **Return folder path**.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

In the Additional Properties grid, set the following properties:

**XML output file path:** This is a file that is created and managed by Open Dental. Every time this bridge is used from the acquisition computer, the current patient is added to the file. From within the iCat software, set this same path for the PM.XML file. The patients in this file will show on a list to select from in iCat when acquiring an image.

**Return folder path:** After a patient is selected in the iCat software, it will generate a response file in the specified folder. Open Dental will process this file to remove that patient from the PM.XML file.

**Acquisition computer name:** The name of the computer where the iCat acquisitions take place. The descriptions above all pertain to the acquisition computer. If you are on a different computer and you use the iCat bridge, it will behave totally differently. It will instead try to launch iCat software using a command line argument.

In the iCat software, turn off the option to have iCat return thumbnail images. Open Dental will disregard such images if they are created.

iCat returns an XML file with a small amount of information. The name of the return file will be in the following format:

PatID\_yyyymmddhhmmss.xml

Open Dental is not interested in any of the information within the file, but only in the filename itself. Open Dental extracts the PatID from the filename, removes the corresponding entry in PM.XML, and then deletes the file. If there is an error processing the return file from iCat, Open Dental will fail silently. The return file will not get deleted, and the patient entry will not be removed from the PM.XML file. If this happens, we will need to take a look at the PM.XML file as well as the return file. It is also safe to delete the entire PM.XML file at any time. This will completely clear the list of patients that show on the list to select from in iCat when acquiring an image.