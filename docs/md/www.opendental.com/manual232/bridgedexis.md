Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

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
6. Click OK.

## Technical Data

The bridge sends patient data from Open Dental to the specified text file. Example file:

Mouse, Mickey 02/24/08 (17)

PN=17

LN=Mouse

FN=Mickey

BD=02/24/08

SX=M

Open Dental then launches Dexis, passing the file name as a command line argument. Example:

**C:\DEXIS\DEXIS.EXE @InfoFile.txt**

The patient number is the only required field in the text file. This means that Dexis likely organizes everything by patient number, and that patient numbers must be identical with those in Open Dental. This is not a problem for new setups with no patients entered in Dexis yet. But it may present a problem if you already have a number of patients entered in Dexis before you begin using Open Dental. The solution is to change the patient IDs in Dexis to match those in Open Dental. If Open Dental creates a new patient ID# which is different from the old Dexis ID#, you can easily fix it even if you have images in both Dexis charts. In the Dexis Admin window, scroll to the old patient ID# and click Modify Patient. Change the ID# manually to the new Open Dental ID#. The two Dexis charts will be merged into one. It can be easily done on a case by case basis as needed. After a while all your active patients will only have one ID# that matches their OD ID#.

## Conversions

If you were using Dexis in stand alone mode, and/or the patient IDs do not match between your Dexis database and your Open Dental database, then you can contact Dexis to have them renumber the Dexis patient IDs. Dexis will usually renumber patient IDs for their customers for free (or at a nominal price). In order for Dexis to renumber the patient IDs they will request a spreadsheet containing certain patient information (patient ID, last name, first name, middle initial, and date of birth). Open Dental can provide you with this spreadsheet.

## Troubleshooting

**Error: Could not access C:\DEXIS\DEXIS.EXE**

Possible Solutions:

* Usually this means that Dexis is not installed in the location specified for Path of file to open.
* If it is properly installed in the location and can run outside of Open Dental, usually the issue is that the current user has permission issues on the directory containing the file infofile.txt. The default location for this file is **C:\Program Files\Open Dental**. This can be resolved by setting the InfoFile path to blank.
* You may need to always run Open Dental as administrator for Dexis bridge to work if the path to the Dexis.exe file is already correct. You can set the Open Dental shortcut to always run as administrator by right clicking the icon and selecting Properties. Alternatively you could try moving the data file (InfoFile.txt) to a directory that does not require administrator level permissions (something like **@C:\ProgramData\Dexis\InfoFile.txt**).