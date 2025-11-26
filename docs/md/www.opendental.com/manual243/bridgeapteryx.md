Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Apteryx Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Apteryx from www.apteryxware.com**.

![](images/bridgeApteryx.png)

Apteryx is a digital imaging program. Website: <http://www.apteryx.com/digital-dentistry>.

This bridge is also used for:

|  |  |  |
| --- | --- | --- |
| Apex Sensors | ImageQ | Oriview |
| Belmont XV | Image XL | QSI Image |
| Cliniview | Lightyear | Sigma Image XRV |
| Dr. Suni/Prof Suni | LynxVision | VisionDent |
| DDS Works | MaxiViewer | XV Capture |
| DentiMax Advanced | MPDx | XL Dent |
| Harmony | OneView | XRay Vision |
|  |  | XVlite |

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click Save.

## Set up a Second Apteryx Bridge

If using two imaging databases with Apteryx, set up two bridges.

To enable a second bridge:

1. In the Main Menu click Setup, Program Links. Click Add to create a new bridge.
2. Enter the **Description**.
3. Check the **Enabled** box.
4. Verify the **Path of File to open**.
5. Enter the Optional command line arguments.
    To use the patient number:
   **/p"[LName], [FName]::[SSN]::[PatNum]::[Birthdate]::[Gender]"**
    To use the chart number:
   **/p"[LName], [FName]::[SSN]::[ChartNum]::[Birthdate]::[Gender]"**
6. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
7. Click Save.

## Technical Details

Note: As of January 2023, Apteryx has sunset XVLite and XRay Vision. Contact Apteryx for details.

Apteryx uses the patient number to identify selected patients. Open Dental sends the selected patient's birthdate, chart number (if selected), gender, name, patient number, and SSN to Apteryx. If the patient does not exist, a new patient record is created.

**XV Sync:** A tool used for enterprises to keep their clinic databases (image folders) synced.

**Name Grabber:** A tool created by Apteryx for practice management software that does not provide built-in bridges. We do not recommend Name Grabber with Open Dental because the tool attempts to grab the patient name from the title bar of Open Dental instead of Open Dental sending the patient information to Apteryx. If the tool is used beware the patient number between the two softwares will not match and will eventually need to be corrected. Also, there may be issues with the tool selecting the correct patient if the patient name is misspelled, changes, or there are duplicate names.