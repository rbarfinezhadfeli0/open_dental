Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Genoray Triana Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Triana from genorayamerica.com**.

![](images/bridgeTriana.png)

Genoray Triana is an imaging software. Website: <http://www.genorayamerica.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.

   Note: The Triana program may be installed in a different location.
3. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Enter the **Import.ini path**.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

Command Line: An example of the command line function that we use would be:

**C:\Program Files\Triana\triana.exe -Fc:\Program Files\Triana\import.ini**

This command line will open Triana with the patient from the import.ini file. Programmatically we update the import.ini when the user clicks the button.

Import.ini Path

[OPERATION]

EXECUTE=3 (required)

(Available 2: Open, 3: Registration and open/If he or she has been registered just reopen, 4: Onlyregistration)

[PATIENT]

PATIENTID=Patient\_ID(Chart No.) (Reqired)

FIRSTNAME=Patient\_First\_Name (Required)

LASTNAME= Patient\_Last\_Name

SOCIAL\_SECURITY=Social\_Security\_Number

BIRTHDAY=YYYYMMDD ( Ex: 19801231 )

PATIENTCOMMENT=Patient comment (This will be blank)

GENDER= Sex\_ID (Available 1: Male, 2: Female, 3: Another)