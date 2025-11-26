Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

EvaSoft Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **EvaSoft**.

![](images/bridgeEvaSoft.png)

EvaSoft is a digital imaging program from ImageWorks. Website: <https://www.imageworkscorporation.com/evasoft-software/>. You can also use the bridge for [AFP Imaging Bridge](bridgedentxproimage.html). Also known as Dent-X ProImage and Eva.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

## Technical Details

The ProImage database is based on the patient ID. When using the bridge, the patient ID gets sent along with name, birthdate, address, etc. If the patient ID is not found in the database, then it creates a new patient record. If the ID is found, and the information does not match, then it overwrites all existing patient name, address, etc, with the new information. Every single ID in your ProImage database must be accurate, or you will suddenly find the names on each record being changed. Here's how you should test your setup if you already have patients entered in ProImage:

1. Open a patient information window in ProImage so you can see the name, ID, address, etc. Try to use the Update Patient button at the upper left or in the File menu if you can find it. If it's not visible, try going to Edit, Preferences, Toolbar Style, Advanced. Then look for it again at the upper left.
2. Open the same patient in Open Dental. Go to the Family Module and open the Edit Patient Information window.
3. Compare the ID in ProImage with the Patient Number in Open Dental. They must match before you can use the bridge. You must edit the ID in ProImage to match the one in Open Dental.
4. If they don't match, then you need to go through every single patient in ProImage and change the ID to the Open Dental Patient Number. This can go quickly if you print a list ahead of time with all names and Patient Numbers from Open Dental. You can obtain and print such a list by running this query:

   SELECT PatNum AS PatID,LName,FName, Birthdate FROM patient ORDER BY LName,FName
5. You might have a unique situation where you happen to use chart numbers heavily in your office, possibly including letters such as SP0012. If that's the case, then you do have the option to use chart numbers as the patient ID in both programs, but it will take more work. The chart numbers must be entered for all patients in Open Dental. Also, if you have any existing patient records in ProImage, then you must be certain that the chart numbers are entered in the patient ID blank for all patients before using the bridge. So if you are certain that you want to use Chart Numbers, then go back to the Edit Program Link window shown above. Double-click on the first row of additional properties, and change the 0 to a 1.

EvaSoft may ask if you want to set up Data Drill. This is not required since this bridge does the same thing.