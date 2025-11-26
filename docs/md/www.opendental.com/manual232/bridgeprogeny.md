Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Progeny Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Progeny from www.progenydental.com**.

![](images/bridgeProgeny.png)

Progeny is an imaging software. Website: [www.progenydental.com](http://www.progenydental.com/).

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

## Technical Details

The following patient information is sent to Progeny when the bridge button is pressed in OD: first name, last name and identifier (either PatientNum or ChartNum depending on the setting Enter 0 to use PatientNum, or 1 to use ChartNum). Patients are loaded in Progeny based on the identifier passed in from Open Dental.

Note:

* Date of Birth is required to be entered for patients for bridge to launch.
* Progeny does not receive gender from Open Dental. All new patients are automatically assigned male. This must be changed manually in Progeny as required.
* Progeny accepts two word last names, but concates them into a single word.

**Receive an error message in Progeny: No Patient Selected. If you close Progeny, then launch the bridge in Open Dental, this error message may display depending on how long Progeny takes to load. Eventually, the patient does load.**

To avoid this message, leave Progeny running in the background.

**When I launch the Progeny program link, more than one instance of Progeny is created.**

Call Progeny support to get help upgrading Progeny to version 1.10 or later.