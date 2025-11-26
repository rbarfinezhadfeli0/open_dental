Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Dexis Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Dexis**.

![](images/bridgeDexis.png)

Dexis is imaging software. Website: <http://www.dexis.com>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Verify that the **InfoFile path** is a full file path.
4. Set up a clickable bridge button:
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click Save.

## Technical Data

The bridge sends patient data from Open Dental to the specified text file. Example file:

Williams, Andrea 10/30/91 (135)

PN=135

LN=Williams

FN=Andrea

BD=10/30/91

SX=F

Open Dental then launches Dexis, passing the file name as a command line argument. Example:

**C:\DEXIS\DEXIS.EXE @InfoFile.txt**

The patient number is the only required field in the text file. This means that Dexis likely organizes everything by patient number, and that patient numbers must be identical with those in Open Dental. This is not a problem for new setups with no patients entered in Dexis yet. But it may present a problem if there are already a number of patients entered in Dexis before beginning to use Open Dental. The solution is to change the patient IDs in Dexis to match those in Open Dental.

## Conversions

Sometimes the Dexis patient IDs will not match the Open Dental patient IDs after a data conversion. The Open Dental Conversions Department can determine if a Dexis patient ID renumbering will be required after the data conversion is complete.

Dexis has the ability to renumber patient IDs, but it is our understanding that they now charge a fee for that service. Open Dental can also sometimes renumber the Dexis patient IDs for a fee (see [Image Conversions](https://opendental.com/site/conversionimages.html) for pricing).

Offices must be using Dexis version 10+ (the SQL Server database versions) in order for Open Dental to look into whether or not a patient ID renumbering is possible by the Open Dental Conversions Department. There must be must be an identifiable link between the patient records in Dexis and Open Dental in order for Open Dental to complete the renumbering.

## Troubleshooting

**Error: Could not access C:\DEXIS\DEXIS.EXE**

Possible Solutions:

* Usually this means that Dexis is not installed in the location specified for Path of file to open.
* If it is properly installed in the location and can run outside of Open Dental, usually the issue is that the current user has permission issues on the directory containing the file infofile.txt. The default location for this file is **C:\Program Files\Open Dental**. This can be resolved by setting the InfoFile path to blank.
* Open Dental may need to be to set to run as administrator for the Dexis bridge to work if the path to the Dexis.exe file is already correct. Alternatively, try moving the data file (InfoFile.txt) to a directory that does not require administrator level permissions (something like **C:\ProgramData\Dexis\InfoFile.txt**).

**When using Open Dental Cloud, the Dexis bridge does not launch and there is no error message**

Verify the *InfoFile Path* in additional properties. For Cloud users, this is normally **C:\Temp\InfoFile.txt**, and it cannot be blank.