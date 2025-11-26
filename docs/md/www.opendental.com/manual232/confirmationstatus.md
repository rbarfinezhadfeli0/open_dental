Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Confirmation Status

In the [Appointments Module](appointments.html), a small circle can be added to an appointment box to indicate an appointment's confirmation status (e.g. confirmed, unconfirmed, etc).

![](images/confirmedColor.gif)

To show the confirmation circle, *Confirmed Color* must be added to the [Appointment View](appointmentviews.html).

Confirmation statuses can be created and customized in [Definitions: Appt Confirmed](definitionsapptconfirmed.html).

## Changing Confirmation Statuses

The default appointment Confirmation status, assigned to newly created appointments, is the first status in the Definitions: Appt Confirmed list. A confirmation status can be changed in a variety of ways:

* Manually from the Edit Appointment window.
* Manually from the Appointments Module under the Pinboard.
* Manually from the Confirmation List.
* Automatically when sending postcard, email, or text message from the Confirmation List.
* Automatically when sending an eConfirmation.
* Automatically when a patient responds to an eConfirmation.

Only users with the *Appointment Confirmation Status Edit* security permission can change the confirmation status. Changes to confirmation status are logged in the [Audit Trail](audittrail.html).

## Rescheduling Appointments

When an appointment is rescheduled, consider updating the confirmation status.

If an appointment is scheduled on a future date, and has a status other than the default, and the appointment is moved to a new time the same day, users are prompted to reset confirmation status.

![](images/apptConfirmedPrompt.gif)

Click **Yes** to reset the confirmation status to the default, or click **No** to maintain the current status.

If an appointment is rescheduled from the Pinboard (either to the same day or a different day), the status is reset to the default without receiving the prompt.

## eConfirmations

When an appointment has been sent an eConfirmation text, and the appointment is rescheduled (either to the same day or a different day), users are prompted to resend the eConfirmation.

![](images/eConfirmationReSend.png)

Click **Yes** to send a new eConfirmation (recommended). Click **No** to do nothing. If the patient attempts to confirm the previous appointment time, they will receive an error.