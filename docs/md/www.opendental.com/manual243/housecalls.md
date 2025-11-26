Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

HouseCalls Bridge

TeleVox's HouseCalls delivers automatic appointment reminders.

In [Program Links](programlinks.html), double-click on **HouseCalls**.

![](images/bridgeHousecalls.png)

HouseCalls is a patient engagement platform. Website: <https://televox.com/>.

To enable the bridge:

1. Check the **Enabled** box.
2. Double-click on a row in **Additional Properties** to change settings.
   1. Use the PatNum (enter 0) or ChartNum (enter 1) as the patient ID.
   2. Verify the **Export Path**.
3. Set up a clickable bridge button.
   1. Under **Add a button to these toolbars**, highlight where to display the button.
   2. Enter the **Text on button**.
   3. (Optional) Import an image to show on the button (22 x 22 pixels).
   4. If using clinics, click **Hide Button for Clinics**. Select which clinics the button should display on.

## Technical Details

The data is always exported to a file called Appt.txt in the Export Path specified. The file is a simple comma-delimited text file which has the following columns:

LastName
FirstName (or Preferred Name, if exists)
PatientNumber (Can be PatNum or ChartNumber, depending on what user selected)
HomePhone
WorkNumber
EmailAddress
SendEmail (if email address exists.)
Address
Address2 (although they did not offer this as an option)
CityStateZip
ApptDate
ApptTime
ApptReason (procedure descriptions)
DoctorNumber (patient primary provider)
DoctorName
IsNew
PatientWirelessPhone

Click the HouseCalls button, then select a date range of appointments to confirm:

![](images/housecallsOptions.png)

Click OK to create the text file. The HouseCalls software upload the text file sometime in the middle of the night.