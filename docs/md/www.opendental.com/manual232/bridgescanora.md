Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Scanora Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Scanora from www.soredex.com**.

![](images/bridgeScanora.png)

Scanora is a cone beam tomography and optional 2D panoramic imaging system in one. Website: <https://www.kavo.com/en-us/?lang=en-us>.

To enable the bridge:

1. Check the**Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Set **Import.ini path** for the C:\ProgramData\Scanora\Scanora.ini file.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

This is an example of what your ini should look like:

[PracticeManagementInterface]

CLEAR\_PRACTICE\_MANAGEMENT\_AUTOMATICALLY = 1

USE\_PRACTICE\_MANAGEMENT = 1

PATID = 443672

PATLNAME = Test1

PATMNAME =

PATFNAME = Scanora

PATSOCSEC = 123456789

PATBD = 1980-10-20

PROVIDER1 = Jessica Castaneda, FNP

PROVIDER2 = doc Testnew

ADDRESS1 = 1234thst

ADDRESS2 =

CITY = Albany

STATE = OR

ZIP = 97321

HOMEPHONE = 5415222222

WORKPHONE = 5412222222

EMAIL1 = abc@gmail.com

Your ini file should be in the ANSI encoding file format with a leading blank line.