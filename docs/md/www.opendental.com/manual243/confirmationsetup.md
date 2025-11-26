Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Confirmation Setup

Use Confirmation Setup to define the default messages (text messages, emails, and postcards) for confirmations sent from the Confirmation List and set the default appointment confirmation status to apply when a confirmation is emailed or texted.

In the [Main Menu](mainmenu.html), click Setup, Appointments, Confirmations.

![](images/confirmationSetup.png)

This window is specific to confirmations sent manually (i.e., from the [Confirmation List](confirmationlist.html) or [Appointments Module](appointments.html)).

Note: To set default options for printing postcards and email logic, see [Setup Recall](recallsetup.html).

**Automated eConfirmation and eReminder Setup**: To change settings for automatic confirmations, click to open [Automated Messaging](automatedmessaging.html).

The Messages grid displays the message text used for postcard, email, and text message confirmations sent from the Confirmation List.

* **Mode**: The method of delivery (Postcard, Email, Text).
* **Second column**: General guidance about the message and what variables are available for use.
* **Message**: The message text. See Message Edit below to make changes.
* **Group Families**: Determines the default setting of the Group Families box in the Confirmation List.
  + Checked: Family members group together by default and receive one confirmation.
  + Unchecked: Each family member receives their own confirmation by default.

**Status for emailed confirmation**: The confirmation status applied to the appointment when a confirmation is emailed from the Confirmation List.

**Status for texted confirmation**: The confirmation status applied to the appointment when a confirmation is texted from the Confirmation List.

## Message Edit

Double-click a row to edit the *Message* text.

![](images/confirmationlistMsgEdit.png)

Enter the subject or message text. Insert variables as needed.

Fields in brackets can be used to pull information from the database.

* [NameF]: Patient first name.
* [NameFL]: Patient first and last name.
* [NamePreferredOrFirst]: Patient preferred name, if applicable, otherwise uses first name.
* [date]: Appointment date.
* [time]: Appointment time.
* [FamilyApptList]: List first name, and appointment date and time of all family members. Required when using *Group Families*.
* [ClinicName]: [Clinic](cliniceditwindow.html) name.
* [ClinicPhone]: Clinic phone number.

Note: Clinic information (i.e., ClinicPhone, ClinicName) is determined using the following logic:

+ If a clinic is assigned to the appointment, the information for the assigned clinic is used.
+ If there is no clinic assigned to the appointment, the information for the patient's clinic (see [Edit Patient Information](patientedit.html)) is used.
+ If there is no clinic assigned to the appointment or patient, the [Practice](practice.html) information is used.

* [OfficePhone]: Office phone number.
* [OfficeName]: Office name.
* [PracticeName]: Practice name.
* [PracticePhone]: Practice phone.
* [ProvName]: Appointment provider's name.
* [ProvAbbr]: Provider abbreviation.
* [EmailDisclaimer]: Opt out email disclaimer.

For text messages:

* A message segment is 160 characters. Each additional message segment results in additional charges. See [Integrated Texting Q and A](textmsgfaq.html) for details.
* A carriage return adds two characters.
* The following characters are allowed. If other characters are used the message will fail.

  a-z, A-Z, 0-9, . , : ; ! ? ( ) ~ = + - \_ \ / @ $ # & %