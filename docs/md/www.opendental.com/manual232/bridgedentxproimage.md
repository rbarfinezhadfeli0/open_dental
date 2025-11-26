Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

AFP ProImage Eva Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **ProImage**.

![](images/bridgeDentx.png)

AFP Imaging DBA Imageworks is a digital imaging program. Website: <https://www.imageworkscorporation.com/evasoft-software/>. Also known as Dent-X ProImage, Eva, or [EvaSoft Bridge](bridgeevasoft.html).

To activate the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

EvaSoft must be running in the background for the bridge to work.

The ProImage database is based on the patient number. Open Dental sends the patient number, last name, first name, date of birth, address, etc. to ProImage. If the patient does not exist, a new patient record is created.

If the patient number exists but the additional information sent does not match, the patient record will be updated to match the patient information from Open Dental.

Check ProImage patient records to confirm the information matches Open Dental before using the bridge. To check:

1. Select the patient in ProImage from the Update Patient button located in the upper left or File menu. If it is not visible, enable the button from the Advanced settings under the Edit menu, Preferences, then Toolbar Style.
2. Select the same patient in Open Dental.
3. Compare the ID in ProImage with the Patient Number in Open Dental. They must match before the bridge can be used.
4. If they don't match, change the patient ID in ProImage to match the patient number in Open Dental (patient numbers in Open Dental cannot be changed). To print a list of names and patient numbers run this Query:

   SELECT PatNum AS PatID,LName,FName, Birthdate FROM patient ORDER BY LName,FName