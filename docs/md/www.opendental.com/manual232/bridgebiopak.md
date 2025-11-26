Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

BioPAK Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **BioPAK from www.bioresearchinc.com**.

![](images/bridgeBioPAK.png)

BioPAK is a digital imaging and analysis software. Website: <http://www.bioresearchinc.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings. Use the PatNum (enter 0) or the ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

BioPAK uses the patient number to identify selected patients. Open Dental will send the selected patients birthdate, chart number (if selected), gender, patient number, and name to BioPAK. If the patient number does not exist, a new patient record is created. If the patient number does exists but the name does not match then it will give an error that the patient already exists. If the patient record is correct, update the name to match in both softwares.