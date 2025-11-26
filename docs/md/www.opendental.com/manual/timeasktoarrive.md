Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Time Ask to Arrive

Users can be prompted to remind a patient to arrive early for their appointment.

In the [Appointments Module](appointments.html), schedule an appointment.

![](images/timeAskArrivePrompt.png)

When a value for *Ask To Arrive Early* has been entered in [Edit Patient Information](patientedit.html), this message appears immediately upon creating or selecting a patient's scheduled appointment. The *Time Ask To Arrive* is automatically prefilled on new appointments for the patient.

When a value is entered into the *Time Ask To Arrive* field of an appointment manually, the message appears only when rescheduling the appointment.

Additionally, the time asked to arrive can be used when sending automated text messages to the patient.

## Appointment Specific

Set an individual appointment with a reminder to arrive early. This can be useful for first appointments when the patient has forms to fill out.

In the Appointments Module, double-click an existing appointment. In the [Edit Appointment](aptedit.html) window, enter the **Time Ask To Arrive** in 00:00 format.

![](images/timeasktoarrive.png)

## All Appointments for a Patient

Set all appointments for a patient to prompt with a reminder to arrive early. This can be useful for patients who have a history of running late.

In the patient's [Edit Patient Information](patientedit.html), enter a **Ask To Arrive Early** in minutes.

![](images/askToArriveEarly.png)

Additionally, check **Same for entire family** to apply the early arrival time to everyone in the patient's family.

## Additional Details

* The appointment schedule uses the appointment time, not the *Time Ask to Arrive*.
* To display the Time Ask to Arrive in the appointment box, see [Appointment Views](appointmentviews.html).
* The Time Ask to Arrive displays on patient literature (e.g., email, postcard reminders, etc.). If no time is entered, the appointment time is used on this literature.
* When the [ApptTimeAskedArrive] tag is used, [Automated Messaging](automatedmessaging.html) can send this time to a patient via text or email.
* If an appointment is rescheduled, the Time Ask to Arrive value resets. If an Ask to Arrive Early value is entered on the Edit Patient Information window, it is used to calculate a new arrival time, and a message indicates the previous arrival time.
* A patient can be scheduled with a Time Ask to Arrive outside of open office hours without a warning message. For example, the clinic opens at 8:00 am, the patient is scheduled for an 8:00 am appointment but is asked to arrive at 7:45 am (the office is not open).