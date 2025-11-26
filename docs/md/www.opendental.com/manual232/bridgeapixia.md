Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Apixia Bridge

In the [Main Menu](mainmenu.html), click Setup, [Program Links](programlinks.html). Double-click on **Apixia Digital Imaging by Apixia Inc**.

![](images/bridgeApixia.png)

Apixia is a digital imaging software. Website: <http://www.apixia.net/html/front/bin/home.phtml>.

To enable the bridge:

1. Check the **Enabled** box.
2. Verify the **Path of file to open**.
3. Double-click on a row in **Additional Properties to change settings**.
   1. Verify the **System path to Apixia Digital Imaging ini file** value. The Switch.ini must be in the same folder as the digirex.exe executable.
   2. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
4. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
5. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.
6. Click OK.

## Technical Data

Apixia uses a Switch.ini file to identify selected patients. Open Dental sends the selected patient's birthdate, chart number (if selected), dentist ID (Open Dental provider abbreviation), digirex password (digirex), gender, name, and patient number to the Switch.ini file. The Apixia application loads the patient in the Switch.ini file.

Example File:

[Patient]

ID=17

Gender=Male

First=Mickey

Last=Mouse

Year=2008

Month=2

Day=24

[Dentist]

ID=doc1

Password=digirex

Apixia requires user IDs and passwords (these are not the Open Dental usernames and passwords). Use the DigirexServer application to add users for Apixia. The Dr.ID must match the provider abbreviation (uses patient's primary provider) in Open Dental and all passwords must be digirex. If the user ID and password are not setup correctly, message will display and Apixia will freeze.

![](images/bridgeApixiaServer.gif)