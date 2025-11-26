Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

AudaxCeph Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **AudaxCeph**.

![](images/bridgeAudaxCeph.png)

AudaxCeph is an x-ray analysis software. Website: <http://www.audaxceph.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on a row in **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

The AudaxCeph bridge must be open before he AudaxCeph bridge button in Open Dental will work. If a patient is selected in Open Dental, but AudaxCeph is already open with a different patient selected, clicking the bridge button will not change the patient.

## Technical Details

Because of the AudaxCeph bridge, the following occurs:

Patient Status: Every patient opened in AudaxCeph will have a patient status of active, even if a different patient status (e.g., deceased, inactive) has been selected on the Edit Patient Information window in Open Dental.

Gender: There are four gender selections in Open Dental (male, female, other, unknown) and only two in AudaxCeph (male, female). All unknown or other genders in Open Dental are translated to a male gender in AudaxCeph.

How the bridge works: When the bridge is enabled, Open Dental creates an update.xml file in the installation folder which AudaxCeph will read from.