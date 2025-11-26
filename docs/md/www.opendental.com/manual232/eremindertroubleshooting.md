Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eReminder and eConfirmation Troubleshooting

Below are common questions about [eReminders](ereminderssetup.html), as well as some troubleshooting steps.

**How can I prevent an eReminder being sent for a specific appointment?**

See [Automated Messaging Advanced Settings](automatedmessagingadvanced.html) to determine which appointment statuses allow eReminders.

**How can I prevent an eReminder being sent for a specific patient?**

Set the *Exclude Automated Msgs* setting in the [Edit Patient Information](patientedit.html). If text or email is selected, the patient will not receive eReminders or eConfirmations via the selected method. Select both to exclude all.

**I have clinics, and my eReminders and eConfirmations are not sending.**

Check that you have assigned clinics to patients, appointments, and operatories. In addition, in [eReminders](ereminderssetup.html) or [eConfirmations](econfirmationsetup.html), check the option *Allow eMessages from Appts w/o Clinic*. This will ensure that eMessages are sent for all appointments, even those with no clinic assigned.

**Automated eReminders or eConfirmations are not sending.**

Solution 1: Ensure that all setup is correct. This can include:

* A sufficient window of time, generally more than three hours, in [eServices Misc](eservicesmisctab.html).
* A valid email address set as default in [Email Setup](emailsetup.html).
* *Text Msg OK, assume default is 'No' for patients with no selection* is enabled in [Preferences](preferences.html) and many patients have no *Text OK* status selected. If this is checked, patients without a *Text OK* status are not sent text messages. Disable this preference to allow text to send to all patients with no *Text OK* status or change the individual patient's *Text OK status* to *Yes* in [Edit Patient Information](patientedit.html).
* Service must be activated in [Automated Messaging](automatedmessaging.html) and the rule must be enabled. See [Edit Rule](editrule.html).

Solution 2: When an automated message cannot be sent, an error is logged. You can access this log to see which patients did not receive reminders. This can only be accessed on the computer with the eConnector installed.

1. Navigate to the **C:** drive.
2. Open the **Program Files(x86)** folder, then **OpenDental\OpenDentaleConnector\Logger\ConfirmationRequests** or **AppointmentComm**.

These folders are only available if an error was logged for eConfirmations or eReminders.

**Delivery failure for eConfirmations that include a [ConfirmURL] field.**

Some carriers block texts with a URL as spam. Use the [ConfirmCode] field instead.