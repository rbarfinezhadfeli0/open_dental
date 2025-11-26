Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Sirona Sidexis Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Sirona Sidexis from www.sirona.com**.

![](images/bridgeSirona.png)

Sirona SIDEXIS XG is an imaging software. Website: [www.dentsplysirona.com](https://www.dentsplysirona.com/en-us).

Note: Sidexis 4 is different than Sidexis XG. To use the latest update for Sidexis 4, change the path of file to open to the correct exe (e.g., **C:\Program Files\Sirona\SIDEXIS4\sidexis4.exe**).

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
   * The file path may vary. The correct file path must contain the *sifiledb.ini*.
   * Examples of possible paths are: **C:\Program Files\Sirona\SIDEXIS4\XG\sidexis.exe** or **C:\Program Files\Sirona\SIDEXIS4\sidexis4.exe**
3. Double-click on **Additional Properties** to change settings. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Details

A valid birthdate is required for the patient for the bridge to launch properly.

Dates are always sent to Sirona in European format "dd.mm.yyyy", as required by Sirona. In Canada and in other countries, if there is a mixture of computers in the office with different Windows Region and Language Settings, this may cause duplicate patients to be created by Sirona when comparing birthdates. This seems to especially be a problem if patients were manually entered into Sirona.

Open Dental reads the ini file, FromStation0 | File to determine location of comm file (sendBox) (siomin.sdx). For example, this File location indicates only one sendBox on the entire network:

[FromStation0]

File=F:\PDATA\siomin.sdx

Open Dental then sets OfficeManagement | OffManConnected = 1 to make Sidexis ready to accept a message. For example:

[OfficeManagement]

OffManConnected=1

Open Dental then adds a "U" section to the comm file (siomin.sdx), signifying Update patient in Sidexis. The entire "U" section gets ignored by Sidexis if this is a new patient. Open Dental leaves the "initial patient id" blank, causing the patient id used in Sidexis to get updated to the PatNum or ChartNumber used in Open Dental.

Open Dental then adds a "N" section to the comm file. N signifies create New patient in Sidexis. If patient already exists, then it simply updates any old data.

Open Dental then adds an "A" section to the comm file. A signifies Autoselect patient.

In each of the three sections discussed above, the full name and birthdate are included, and Sidexis seems to use name and birthdate to identify patients.

Open Dental then launches Sidexis.exe.

A troubleshooting step would be to get a copy of the ini file before Sidexis is launched, possibly by changing the program link to launch a dummy file instead of Sidexis.exe. This would prevent consumption of the ini file.