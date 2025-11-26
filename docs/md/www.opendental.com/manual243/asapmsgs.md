Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

ASAP Message Setup

On the ASAP List Setup window, customize the text and email messages sent to patients about available openings.

In the [ASAP List](asaplist.html), at the upper left, click **Settings**.

![](images/webSchedASAPSetup.png)

Alternatively, in the [Main Menu](mainmenu.html), click Setup, Appointments, ASAP List.

**Clinics**: Select the clinic the message is for. Customize messages for each clinic, or use the same message for all or some clinics.

* Default messages: Select *Default* as the clinic, then customize the messages. To use the default rule for a clinic, select the clinic, then check **Use Defaults**.
* Clinic-specific message: Select the clinic, uncheck **Use Defaults**, then customize the messages.

Message Types:

* **Text Manual:** The default text message when *Text from the ASAP List* is selected.
* **Web Sched Text**: The default message when sending a [Web Sched ASAP](webschedasap.html) text message.
* **Web Sched Email Body**: The default body text when sending a Web Sched ASAP email.
* **Web Sched Email Subject**: The default subject when sending a Web Sched ASAP email.

**Maximum number of texts to send to a patient in a day via Web Sched**: Limit the total number of Web Sched text messages that can be sent to a patient per day. Defaults to 2.

**Prompt user to send Web Sched message to patients on ASAP List when an appointment is broken**: Determines if users are prompted to message patients on the ASAP List about the opening. Regardless of the setting selected, the prompt does not appear if the appointment time starts within the next 20 minutes.

* Checked: Prompt the user to send a text when Web Sched ASAP is enabled and a patient is on the ASAP List. Displays patients whose appointments can fit within the available timeslot.
* Unchecked: Do not prompt the user.

## Message Edit

Double-click a message to edit it.

![](images/webSchedASAPMsgEdit.png)

To insert data from the database into the message text, use Template Replacement Tags.

* **[NameF]**: Patient's first name.
* **[Date]**: The date of the available appointment.
* **[Time]**: The start time of the available appointment.
* **[OfficeName]**: The name of the practice or clinic.
* **[OfficePhone]**: The phone number of the practice or clinic.
* **[ASAPURL]**: Add a URL link the patient can click to schedule the appointment (Web Sched ASAP messages only).

Note: Message types that support HTML formatting open the [HTML Email](emailhtml.html) editor. Raw HTML is not supported for Recall messages.

Once a patient successfully books an online Web Sched ASAP appointment, optionally send them an automated notification of appointment details. See [Web Sched Notify Setup](webschedverify.html).