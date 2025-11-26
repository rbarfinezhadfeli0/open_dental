Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Planmeca Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Dimaxis from Planmeca**.

![](images/bridgeDimaxis.png)

Planmeca is an imaging software. It is also known as Dimaxis or Romexis. Website: [www.planmeca.com](http://www.planmeca.com/).

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Enter Birthdate format. Use (dd/MM/yyyy) or (MM/dd/yyyy).
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click Save.

## Technical Data

Open Dental sends commands to Planmeca via the command line. This is made possible by a program called DxStart which Planmeca provides for this purpose. The syntax looks like this:

DxStart.exe "PatientID" "FamilyName" "FirstName" "BirthDate" <"Doctor">

All the fields are in quotation marks because they may include blanks. Normally Dimaxis asks the password to the database at startup. This can be prevented by adding the following line into the [ODBC] section of the Dimaxis.ini file (in the Windows directory). PWD=dixi

If the patient that was passed in the DxStart command line exists in the Dimaxis database, the patient information in the database will be updated if any of the passed fields differs from the values in the database.

The one disadvantage of this bridge is that it can only handle Latin characters, and not other character sets such as Greek. In order to support other character sets, we would have to implement the Windows DLL bridging interface, PmBridge, available for Dimaxis.

The path of file to open may differ. If *DxStart.exe* does not work, try *DxStartW\_64.exe*.

## Romexis

DxStart.exe was designed for Dimaxis, but it also works with Romexis. When Romexis is first installed, perform a custom installation and make sure the PmBridge option is enabled. This should result in the installation of DxStart.exe. If Romexis is already installed and the PmBridge option was not enabled, then call Planmeca support for help reinstalling Romexis with the PmBridge option enabled.