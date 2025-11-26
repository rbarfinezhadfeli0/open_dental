Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Waiting Room

In the lower right corner of the [Appointments Module](appointments.html) is the Waiting Room. It is used to track patients who have arrived for their appointment.

![](images/waitingroom.gif)

Patients who list in the waiting room have a *Time Arrived*, but not a *Time Seated* entry on the [Edit Appointment](aptedit.html).

Automated entries for Time Arrived and Time Seated are triggered by the [Confirmation Status](confirmationstatus.html) on the appointment. Patients who self check-in using [eClipboard](../site/eclipboard.html) will be automatically entered in the Waiting Room.

## Add Patient to Waiting room

1. When the patient arrives, click on their appointment. This will select the patient.
2. On the right, click the confirmation status abbreviation that triggers a Time Arrived entry (e.g., Arrived).
   ![](images/waitingroomStatus.gif)
    The patient will list in the waiting room.
3. When patient is seated, select the status that triggers Time Seated (e.g., *In Room*). The patient will no longer show in the waiting room.

## Display Options

There are multiple settings that affect the waiting room.

* In [Preferences](preferences.html):
  + Set the *Time Arrived trigger*. The default is *Arrived*.
  + Set the *Time Seated trigger*. The default is *In Treatment Room*.
  + *Waiting Room alert time in minutes*, *Waiting room alert color*: Use text color to flag patients whose wait time exceeds a certain value.
  + *Filter the waiting room based on the selected appointment view*.
  + *Refresh every 60 seconds. Keeps waiting room times refreshed*.
* Set the *Waiting Room Name Format* in [Appointment View Edit](appointmentvieweditwindow.html).

When using [clinics](clinics.html), the patients that show in the waiting room are based on the clinic selected in the Main Menu. If Headquarters is the clinic, all patients waiting for all clinics will show.

If a patient is accidentally placed in the waiting room, double-click the appointment and remove the Time Seated value.

## Technical Details

The Time Arrived trigger uses the server time. The time waited uses the local workstation time. If the server time and workstation time do not match, the patient may not display properly in the Waiting Room.