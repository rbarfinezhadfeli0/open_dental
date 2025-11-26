Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Automated Thank-Yous

Automated Thank-You messages are an eService that sends an automated message response (email or text message) when a patient schedules an appointment.

In [eServices Setup](eservicessetup.html), click [Automated Messaging](automatedmessaging.html).

![](images/eThankYouSetup.png)

Emailed Automated Thank-You messages can be sent at no additional cost. To send Automated Thank-You messages by text message, Integrated Text Messaging is required and a per text message fee applies.

## Automated Thank-You Messages

An automated Thank-You message is sent shortly after a patient schedules or reschedules their appointment. When using eConfirmations, it can include the [AddToCalendar] tag so patients can add the appointment to the calendar on their device.

## New Patient Thank-You Messages

An automated New Patient Thank-You message is sent shortly after a new patient schedules their first appointment. A patient is considered new if their appointment has *New Patient* checked. If the patient has already been sent a New Patient Thank-You, they are not sent another message, even if they have rescheduled their appointment.

When using eConfirmations and Web Forms, this message can include the [NewPatWebFormURL] tag for patients to fill out forms online. If using the tag, set up the New Patient URL in [Automated Messaging Preferences](automatedmessagingpreferences.html). This is required for messages to send.

This message goes out along with the Automated Thank-You Message, so the patient is sent two separate messages.

## Activate / Deactivate Auto Thank-Yous

Automated Thank-You messages can be activated or deactivated as needed.

![](images/autoThankYouActivate.png)

Automated Thank-You Messages

* To enable Auto Thank-You message, click **Activate Auto Thank-You**. The Auto Thank-You row will display in green with a status of *Active*.
* To disable Auto Thank-You messages, click **Deactivate Auto Thank-You**. The Auto Thank-You row will display in red with a status of *Inactive*.

New Patient Thank-You Messages

* To enable New Patient Thank-You messages, click **Activate New Pat Thank-You**. The New Pat Thank-You row will display in green with a status of *Active*.
* To disable New Patient Thank-You messages, click **Deactivate New Pat Thank-You**. The New Pat Thank-You row will display in red with a status of *Inactive*.

## Auto Thank-You Rules

After activating Auto Thank-You or New Patient Thank-You messages, set up rules in the [Edit Rule](editrule.html) window.

* To add a rule, click **Add Auto Thank-You** or **Add New Patient Thank-You**.
* To edit a rule, double-click the rule from the Automated Messaging Rules grid.