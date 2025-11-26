Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Trophy (Enhanced) Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click **Trophy(enhanced)**.

![](images/bridgeTrophyEnhanced.png)

After version 5.0, this is known as Kodak Dental Imaging (KDI). Also use this bridge for some Carestream products.

There are two different Trophy bridges available:

* *[Trophy](bridgetrophy.html) Simple*: Not recommended, however may be used for new installations of Trophy. It always uses the patient ID (PatNum) as the image folder name.
* *Trophy Enhanced*: Recommended for new installations. Required for existing installations of Trophy. For existing installations, the user must type in the name of the folder in the Edit Patient Information window for each patient.

Note: To change patients, close Kodak, switch patients in Open Dental, then reopen the bridge.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties** to change settings.
   1. Storage Path: Where images are stored.
   2. Enter 1 to enable Numbered Mode
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

Storage Path: The storage path might look similar to

\\SERVER\tw

or

F:\tw

The storage path must be set to exactly the same value as the database location within Trophy. To change the database location in Trophy, in the main menu click options or preferences and that will open a window with a series of tabs. Inside one of the tabs there will be a place to enter a location for the database. Trophy uses this database path when searching for patients.

**Enhanced Bridge**
 If using Fona OrisWin imaging then the enhanced bridge is the correct bridge to use. If using the enhanced bridge, then each patient will have a Trophy Folder path entered in the Patient Edit window. The folder name for one patient might look similar to

G.rvg\G0000001

or

\\SERVER\tw\G.rvg\G0000001

The bridge makes the following assumptions:

* User has previously used the standalone mode of Trophy.
* The previous program created a text file inside each patient folder. The format of the text file is shown further down.
* The storage path contains a series of A to Z folders named like A.rvg, B.rvg, C.rvg, etc.

Automation capabilities of the bridge:

* Searches text files for matching LName, FName, Birthdate.
* If all three match, uses that folder.
* If birthday doesn't match, but there is exactly one match for LName and FName, then it use that folder.
* Otherwise, lets user choose from existing list of folders.
* User can create folder for new patient, which automatically increments the max folder number by one.
* Open Dental does not create new text files. It only makes use of existing text files.

Example text file:

Name of file: FILEDATA.txt. Contents:

[Patient file]

NUMERO=W0000022

NOM=WALIA

PRENOM=KUNAL

DATE=19820411

SECU=...-..-....

CODE=.....-....

TEL1= (...)...-....

TEL2= (...)...-....

PHOTO=

EXTNUM=W0000022

**Enhanced Bridge, Numbered Mode**
 Some installations of Trophy do not use FILEDATA.txt files, and the folders are numbered according to patient ID. The patient folders are grouped into subfolders with similar numbers. If the user has had a conversion from SoftDent to Open Dental, and if the patient id numbers have been preserved, then many existing patients will already have patient image folders named by their patient numbers.

Automation sequence:

* Searches all subfolders of main image folder, regardless of folder organization.
* If a folder name matches the patient ID, then it assigns that folder to the patient.
* If no folder is found, it creates a folder with the name of the patient ID. It puts it in a subfolder named by the last two digits. Example: 23/123

As an alternative to linking folders on the fly, we provide an image conversion service which links up the folders ahead of time.

## Troubleshooting

If the bridge isn't working, you can troubleshoot it by creating a windows shortcut. On your desktop, in a blank area, right click, New, Shortcut. The location / target will be the Trophy program itself. For example, **C:\Program Files\Trophy\TW.exe**. After creating the shortcut, right-click on it and select properties. Edit the target. Add a space after the original target and then -P, then no space, then the full path to a patient folder without any trailing \. Similar to this:

C:\Program Files\Trophy\TW.exe -PF:\tw\G.rvg\G0000001

Click OK to close the properties window. Then, click your shortcut to test. This simulates exactly what Open Dental is doing. If you can't get this to work, then Open Dental won't work either. If you can't get it to work, please contact support for troubleshooting.

But if it does work, you should be able to change the settings in Open Dental to match.