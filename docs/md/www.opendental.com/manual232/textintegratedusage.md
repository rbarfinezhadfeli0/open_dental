Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Texting

View a summary of each location's text message history.

In [eServices Setup](eservicessetup.html), click **Texting Services**.

![](images/eServicesTexting.gif)

Also see:

* ![](images/youtubeLogo.png) Webinar: [eServices: Integrated Texting](https://youtu.be/tk_1lSk1jIo)
* [Text Message](textmessages.html)

Note: The [eConnector](econnector.html) must be running at all times to track monthly limits and overages. If it is not running, text messages can be sent, but tracking information will be inaccurate and customer replies will not be recorded.

By default, usage information for the current month shows. Use the arrows or calendar below the grid to change the month.

* Click the left or right arrows to move forward/back one month.
* Click the calendar dropdown to select a month using the calendar.
* Click **This Month** to quickly switch to the current month.

Column definitions:

* Default: The default texting clinic is marked with an X. See Set the Default Texting Clinic below.
* Location: The name of the clinic/practice.
* Subscribed: Whether or not the location is signed up for integrated texting.
* Primary Phone Number: The location's texting phone number. The number is based only on the office's country, so obtaining a number with your area code is not guaranteed. It is not possible to select a phone number from a list or alter this number.
* Country Code: Where clinic/practice is located. This determines per message fee.
* Limit: The total monthly limit, in USD, for all locations.
* Sent for Month: The total number of outgoing text messages sent during the currently selected month.
* Sent Charges: The total amount of charges for outgoing texts for the currently selected month.
* Received for Month: The total number of incoming text messages received during the currently selected month.
* Received Charges: The total amount of charges for incoming texts for the currently selected month.

Note:

* Open Dental HQ will attempt to send outstanding message receipts for outbound messages for up to 60 days. If after 60 days, the receipts could not be delivered, they are deleted. Receipts includes the charge associated with the message and the message's deliver status.
* The eConnector must be running to receive receipts. If receipts cannot be delivered, the Sent Charges column may not be up-to-date. Charges displayed here may not match the amount billed on your Monthly Support statement.

OptIn Preferences:

* **Clinics**: Select the clinic which settings you want to view/change.
* **OptIn Office Title**: Enter the practice name to use when sending an OptIn text message. If left blank, the Practice Title set in [Practice Setup](practice.html) is used. If both are blank, "Your Dentist" is used.
* **Prompt for OptIn**: Determines whether an OptIn/OptOut statement appears for the office.
  + Checked: When adding or updating wireless phone number for a patient whose *Text OK* status is set to "Yes" in [Edit Patient Information](patientedit.html) or when changing *Text OK* status to "Yes", a prompt will appear to text the patient for approval.
  + Unchecked: Uncheck this box to disable the prompts. When disabled, each patient will be treated as a "Yes" when the appointment is set complete. The user must remember to obtain consent from the patient.
* **Save**: Click to save Appt Text settings. If settings are unchanged, red text will display as a warning.

## Set the Default Texting Clinic

When using clinics, only patients assigned to a default clinic will receive text messages, or there must be a default texting clinic. To set a default texting clinic:

1. Select the clinic.
2. Click **Set Default**. X will show in the Default column.

This clinic will be used when patients are not assigned to default clinic.

To remove a default, click **Clear Default**, or select a different clinic default.