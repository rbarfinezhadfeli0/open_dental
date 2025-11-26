Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

eServices Misc

eService Miscellaneous settings set the time window for texts and emails sent via Automated Messaging or Web Sched Recall.

In [eServices Setup](eservicessetup.html), click **Miscellaneous**.

![](images/eservicesMisc.png)

## Automated eServices Schedule

The automated eServices schedule determines the time window during which [Automated Messaging](automatedmessaging.html) or [Web Sched Recall](webschedrecallsetup.html) reminders (including those manually sent from the [Recall List](recalllist.html)) can be sent.

* **Start Time**: The earliest a due message can be sent.
* **End Time**: The latest a due message can be sent.

A limited Start Time/End Time (e.g., 7 AM - 8 AM) forces the eConnector to queue up the messages that would be sent later in the day and instead send within the last few minutes of the run time.

The [eConnector](econnector.html) must also be running during the time window. Messages due after the End time each day are sent at the End time. Same day eReminders that are due within one hour of the Start time (or before) are sent one hour before the appointment, regardless of Start time.

Hints:

* To send messages at all hours of the day, regardless of time, set the Start and End time to the exact same time.
* eReminders sent out same day follow the rule set (e.g., 3 hour reminder), unless it breaks the Start Time. In these cases, it only sends out 1 hour prior to the Start Time (e.g., If the appointments and Start Time are at 8 AM, the 3 hour reminder sends out at 7 AM.)
* To preview 24 hour run times, change the workstation clock settings to 24 HR.

## Same-Day Reminder Exception

Normally, eReminders follow the Automated eServices Schedule, and are not sent outside of this window. The exception to this rule applies to Same Day eReminder rules, when the appointment begins before the Automated eServices Schedule, in which case the eReminder can send up to one hour before the appointment.

* Example 1: The Automated eServices Schedule is 8:00 AM to 8:00 PM. A 2-hour same-day eReminder is set. If a patient has an appointment at 7:00 AM, they receive their eReminder at 6:00 AM.
* Example 2: The Automated eServices Schedule is 8:00 AM to 8:00 PM. A 1-hour same-day eReminder is set. If a patient has an appointment at 8:00 AM, they receive their eReminder at 7:00 AM.

## Date Format

Select the date format to apply in email and text messages (eReminders, eConfirmations, manual confirmations, Web Sched ASAP messages, ASAP List text messages, Web Sched Recall reminders, Web Sched Notify messages, Patient Portal Invites, and email templates that contain appointment date tags).

If using a Custom date format, use the following information as a guide:

* M = month number without a leading zero
* MM = month number with a leading zero
* MMM = abbreviated month name
* MMMM = full month name
* d = day of month number without a leading zero
* dd = day of month number with a leading zero
* ddd = abbreviated day of week
* dddd = full day of week
* yy = two digit year
* yyyy = four digit year