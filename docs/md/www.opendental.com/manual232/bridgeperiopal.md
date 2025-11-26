Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

PerioPal Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **PerioPal** in the list.

![](images/bridgePeriopal.png)

PerioPal is voice activated software for periodontal examinations. The PerioPal website is no longer available.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
5. Click OK.

## Technical Details

The bridge uses a command line as follows:

[Application Path]/PerioPal "PtChart;PtName;PtBday;PtMedAlert;"

Where :

[Application Path ] Usually = C{\Program Files\PerioPal\

Pt Chart = AlphaNumeric Chart number from the Office Management System

PtName = Patients Last, First Middle Init

PtBday is the Patient Birthdate in any Microsoft Access compatible date format

Pt MedAlert is a Y or N .