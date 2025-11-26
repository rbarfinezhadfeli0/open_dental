Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EvaSoft Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **EvaSoft from www.imageworkscorporation.com**.

![](images/bridgeEvaSoft.png)

EvaSoft is a digital imaging program from ImageWorks. Website: <https://www.imageworkscorporation.com/evasoft-software/>. The bridge for [AFP Imaging Bridge](bridgedentxproimage.html) can also be used. Also known as Dent-X ProImage and Eva.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click Save.

## Technical Details

The ProImage database is based on the patient ID. When using the bridge, the patient ID gets sent along with name, birthdate, address, etc. If the patient ID is not found in the database, then it creates a new patient record. If the ID is found, and the information does not match, then it overwrites all existing patient name, address, etc, with the new information. Every single ID in the ProImage database must be accurate, or the names on each record may be changed. To test the setup if there are already patients entered in ProImage:

1. Open a patient information window in ProImage to see the name, ID, address, etc. Try to use the Update Patient button.
2. Open the same patient in Open Dental. Go to the Family Module and open the Edit Patient Information window.
3. Compare the ID in ProImage with the Patient Number in Open Dental. They must match before the bridge can be used.
4. If they don't match, go through every patient in ProImage and change the ID to the Open Dental Patient Number. Print a list ahead of time with all names and Patient Numbers from Open Dental. Obtain this list by running this query:

   SELECT PatNum AS PatID,LName,FName, Birthdate FROM patient ORDER BY LName,FName
5. If using chart numbers heavily in the office, then there is an option to use chart numbers as the patient ID in both programs. The chart numbers must be entered for all patients in Open Dental. Also, if there are existing patient records in ProImage, then the chart numbers entered in the patient ID field must be blank for all patients.

EvaSoft may ask to set up Data Drill. This is not required since this bridge does the same thing.