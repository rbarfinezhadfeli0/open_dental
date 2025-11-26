Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Appointment Texts

See [eServices Texting](textintegratedusage.html).

Appointment Texts are any text messages related to an appointment. They include eReminders, eConfirmations, eConfirmation Auto Replies, Arrivals, manually sent recall texts, Automated Thank-You Messages, billing statements, General Messages, Web Sched Recall, Web Sched New Patient, and Web Sched Verify messages.

## Patient Replies

Patients can reply to any text message sent by the office. Some replies cause additional actions to occur.

* C: When replying to an [eConfirmation](econfirmationsetup.html) message, updates the appointment's Confirmed status.
* A: When replying to an [Arrival](arrivalssees.html) message, the appointment's confirmed status is updated and an automated reply is sent back to the patient.
* HELP keyword: Patient receives an automated reply.

Some text replies are required to allow patients to opt out of receiving text messages due to regulatory requirements. Patients can opt out of text messages by replying with one of the following messages. Patients can reply to any text messages sent by the office, not just Appointment Texts in order to opt out.

* STOP
* END
* QUIT
* UNSUBSCRIBE

Opt out text messages are not case-sensitive, but must only contain the single opt out phrase. Receiving any of the replies above excludes the patient from all future text message correspondence. When a patient opts out, the *Text Ok* field in the [Patient Edit](patientedit.html) window is automatically set to *No*.

Once a patient opts out, the office cannot opt them back in. To opt back in to text messages, the patient must text START or OPTIN to the office's Integrated Texting or Landline Texting phone number.