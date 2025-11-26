Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

eReminder and eConfirmation Troubleshooting

Below are common questions about [eReminders](ereminderssetup.html), as well as some troubleshooting steps.

**How can I prevent an eReminder or eConfirmation being sent for a specific appointment?**

Set the appointment status to one that does not allow eReminders. See [Automated Messaging Advanced Settings](automatedmessagingadvanced.html) to determine which appointment statuses allow eReminders.

**How can I prevent an eReminder or eConfirmation being sent for a specific patient?**

Set the *Exclude Automated Msgs* setting in the [Edit Patient Information](patientedit.html). If text or email is selected, the patient is not sent automated messages via the selected method. Select both to exclude all.

**I have clinics, and my eReminders and eConfirmations are not sending.**

Check that you have assigned clinics to patients, appointments, and operatories. In addition, in [Automated Messaging Advanced Settings](automatedmessagingadvanced.html), check the option *Allow Automated Messaging from Appts w/o Clinic*. This ensures that automated messages are sent for all appointments, even those with no clinic assigned.

**Automated eReminders or eConfirmations are not sending.**

Solution 1: Ensure that all setup is correct. This can include:

* A sufficient window of time set in the [eServices Misc](eservicesmisctab.html) window, *Automated eServices Schedule*.
* A valid email address set as default in [Email Setup](emailsetup.html).
* Service must be activated in [Automated Messaging](automatedmessaging.html) and the rule must be enabled.
* *Text Msg OK, assume default is 'No' for patients with no selection* is enabled in [Preferences](preferences.html) and many patients have no *Text OK* status selected. If this is checked, patients without a *Text OK* status are not sent text messages. Disable this preference to allow text to send to all patients with no *Text OK* status or change the individual patient's *Text OK status* to *Y* (Yes) in the [Edit Patient Information](patientedit.html) window.
* The patient cannot be sent more than one eConfirmation text in the same day.
* The patient does not have a Wireless Phone number or Email address in the appropriate fields in the Edit Patient Information window.

  Note: For Pediatric offices, if the patient is a minor, the guarantor's contact information will be used if the child has no contact information specified, or if the [Automated Messaging Preference](automatedmessagingpreferences.html), *Patients under age 18 - Send to Guarantor*, is enabled.

Solution 2: When an automated message cannot be sent, an error is logged. Access this log to see which patients did not receive reminders. This can only be accessed on the computer with the eConnector installed.

1. Navigate to the **C:** drive.
2. Open the **Program Files(x86)** folder, then **OpenDental\OpenDentaleConnector\Logger\ConfirmationRequests** or **AppointmentComm**.

These folders are only available if an error was logged for eConfirmations or eReminders.

**What happens when a patient clicks the eConfirmation URL and selects Request Callback?**

The appointment status changes to the status selected for Not Accepted and an [Alert](alerts.html) in Open Dental notifies staff (those subscribed to the Patient Requested Callback alert).

Note: The alert created when the patient selects *Request Callback* cannot be deleted but goes away once the appointment status is changed or marked complete.

**What happens if a patient has multiple appointments on the same day?**

When a patient has multiple appointments on the same day, only one eConfirmation is sent for the patient's first appointment of the day. If a patient then replies to the confirmation, the eConfirmation marks all appointments on that day as confirmed.

**What happens if I have multiple eConfirmation rules and schedule an appointment inside the rule time frame?**

When a new appointment is created and the send time for some rules have already passed, the rule closest to the appointment date/time is used.

* Example: There are two rules: 7 day and 3 day. A new appointment is created 2 days from now. The 3 day rule is used for the appointment since it is closest.

**Why did my patient receive a message stating, "Confirmation Failed - Please contact your provider to confirm this appointment." or "This appointment is no longer at this date and time." when trying to confirm their appointment?**

* Your patient had an appointment that was rescheduled to a different date or time and a new eConfirmation text was not sent.

+ When rescheduling an appointment, users are prompted to send a new eConfirmation. If the office chose not to send a new eConfirmation, when the patient replies to the eConfirmation text, the appointment they are attempting to confirm no longer exists at the date and time they're attempting to confirm, so they receive an error in response.
+ If office staff opts to re-send the eConfirmation with the updated appointment details, the patient is able to confirm the appointment without an error.
+ If an appointment was rescheduled to a different operatory, but remains at the same date and time, the eConfirmation does not need to be re-sent. The patient should be able to confirm using the original message.

* The appointment the eConfirmation text was sent for has been broken. The patient is unable to confirm a broken appointment.

**Is it possible to send eConfirmations manually instead of having them sent out automatically?**

Yes, to send eConfirmations manually instead of automatically, do the following:

1. In [Definitions: Appt Confirmed](definitionsapptconfirmed.html), create a new confirmation status named *ReadyForSend*.
2. In [Automated Messaging Advanced Settings](automatedmessagingadvanced.html), under the *Send eConfirmation* column, uncheck the X for each status except the status *ReadyForSend*.

When you are ready to send an eConfirmation to a patient, change the appointment status to *ReadyForSend*. This ensures eConfirmations are only sent for an appointment if the status has been specifically changed.

The eConfirmation is sent using the [eConfirmation Rule Send Time](editrule.html). To send the eConfirmation immediately upon changing the appointment status, set the send time to 180 days.