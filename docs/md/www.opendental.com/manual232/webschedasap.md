Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Web Sched ASAP

Use Web Sched ASAP to quickly send email and/or text messages to patients on the ASAP List about last minute appointment openings.

In the [ASAP List](asaplist.html), send Web Sched ASAP messages.

![](images/webSchedASAPMain.gif)

Messages include a clickable link patients can use to accept and reschedule their ASAP appointment. Patients also have the option to decline.

* ![](images/youtubeLogo.png) See our video: [Web Sched ASAP](https://www.youtube.com/playlist?list=PLyjZ9PCVynCmBChRburobugDCOe_WjdA9).
* [Web Sched ASAP: What Patient Sees](webschedasappatientsees.html)
* [Web Sched Troubleshooting](webschedtroubleshooting.html)
* [ASAP List](asaplist.html)

Requirements:

* Patients must have an appointment or recall marked ASAP.
* To send text messages, [Integrated Texting Feature](../site/textintegrated.html) must be turned on.
* To send text messages, patient must have a wireless number and allow text messages ([Edit Patient Information](patientedit.html)).
* To send email messages, patient must have an email address.

To send a Web Sched ASAP message:

1. In the Appointments Module, right-click on the available time slot, then select *Text ASAP List*. The ASAP List will open.
2. Change the Web Sched ASAP settings on the right if needed, then click Send.
3. In the Send Web Sched ASAP Alerts window, verify the Send Mode and message, then send.
4. A blockout will appear on the schedule so staff is aware a Web Sched ASAP message has been sent to fill the available time.

## ASAP List

All appointments whose length fits within the Start/End time will be selected by default. Information about the available time slot will show at the right in the *Web Sched ASAP* section.

* **Operatory**: Displays operatory of selected opening.
* **Start/End Time**: Click the down arrow to change.
* **Send**: Click to open *Send Mode*. Details below.
* **History**: Click to open [Web Sched ASAP History](webschedasaphistory.html).
* **Notification Settings**: Open [Web Sched Notify Setup](webschedverify.html) for ASAP messages.

Highlighted patients will receive the Web Sched ASAP notification. Click **Send** to proceed.

## Send Mode

![](images/webSchedASAPAlerts.gif)

**Send Mode**: Select how to send the notification. Send Details will change based on the selected option and additional details about send time will show in the upper right.

* **Text Message and Email**: Send both text and email messages.
* **Text Message**: Send text messages only.
* **Email**: Send email messages only.
* **Preferred contact method**: Send using the patient's preferred contact method (email or text message only).

Send Details will indicate what each patient will receive based on the selections and notes to explain the logic. Verify the message text and click Send to transmit messages.

**Text Message Text**: Review and edit the message sent on the text as needed. The default message can be edited in [ASAP Message Setup](asapmsgs.html).

**Email Message Text**: Review and edit the message sent on emails. The default message can be edited in ASAP Message Setup.

* **Edit**: Click to add HTML to the message. See [HTML Email](emailhtml.html) for details.

Click **Send** to message the selected patients.

## Web Sched ASAP Blockouts

In the Appointment Module, a blockout will show on the available opening to indicate a Web Sched ASAP notification has been sent about the opening.

![](images/webSchedASAPBlockout.gif)

Web Sched ASAP Blockouts do not follow traditional blockout behavior. They cannot be edited and are informational only.

These blockouts can be deleted by right-clicking on them and selecting *Delete Web Schedule ASAP Blockout*.

## Send Details Logic

Text Messages:

* Text messages are sent in staggered batches.
  + Texts will be sent for unscheduled appointments first, then scheduled appointments, then recalls.
  + Texts for appointments that are farthest in the future are sent first.
  + When the available time slot is less than 2 hours from the time the texts will send, texts are sent every minute.
  + When the available time slot is within 2 and 12 hours, the texts are sent every 2 minutes.
  + When the available time slot is within 12 and 48 hours, the texts are sent every 4 minutes.
  + When the available time slot is more than 48 hours in the future, texts are sent every 8 minutes.
  + Texts scheduled to be sent after the automated eServices End time are sent at the end time.
  + Text messages are only sent during the automated eServices time window ([eServices Misc](eservicesmisctab.html)), not necessarily when Send is clicked.
* The *Maximum number of texts to send to a patient in a day via Web Sched* setting in ASAP Message Setup affects how many Web Sched text messages can be sent to a patient per day. Defaults to 2. If a Web Sched ASAP notification is not sent because a patient has met their maximum number of texts for the day, the available opening will still be offered as a selection option in the Web Sched ASAP interface (e.g., if other notifications that include the URL have been sent).
* Once a patient opts out of future ASAP notifications for an appointment, they will no longer receive text or email Web Sched ASAP notifications for the appointment.

Emails: Emails are sent immediately when Send is clicked. They do not adhere to the automated eServices schedule.

Text and Emails: Notifications only are sent if the available opening is at least 20 minutes after the send time of the text and/or email.