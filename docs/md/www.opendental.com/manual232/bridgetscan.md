Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Tscan Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Tscan from www.tekscan.com**.

![](images/bridgeTscan.png)

Tscan is digital imaging software. Website: [www.tekscan.com](http://www.tekscan.com).

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Data

Patient ID is the key link between OD and Tscan. The Tscan program requires the patient ID to be composed of letters and numbers only. If the Enter 0 to use PatientNum, or 1 to use ChartNum property is set to 1, then any characters that are not letters or numbers will be removed before the bridge is invoked. When the bridge is invoked, Tscan performs a case-insensitive search to locate the existing patient. If a patient ID match is found for an existing patient within the Tscan database, then the found patient is selected in Tscan. If the patient ID is not found, then a new patient is created in Tscan. If Tscan finds the same patient ID and there is discrepancy between first, last or middle names, then a warning message is displayed.

Additionally, the bridge always sends the patient first and last name to Tscan and removes any characters which are not letters or numbers. If a patient middle name has been entered, then the bridge sends the patient middle name and removes any characters which are not letters or numbers. If the patient has a birthdate entered in OD, then the birthdate is sent over to Tscan, otherwise no birthdate is sent. If the patient gender is set to male or female, then the gender information will be sent to Tscan. Otherwise, if the patient gender is set to unknown then the gender is not sent to Tscan.