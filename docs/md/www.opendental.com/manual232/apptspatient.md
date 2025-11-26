Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Appointments

View a patient's appointment history and upcoming appointments from the Appointments for Patient window.

In the [Appointments Module](appointments.html), at the top, click **Pat Appts**.

![](images/aptOther.gif)

This window also opens when you schedule an [Appointment](aptedit.html) for a patient who has a planned appointment, a scheduled appointment, a broken appointment, an unscheduled appointment, or a recall due.

Note: In the [Audit Trail](audittrail.html), this window may be referred to as *Other Appointments*.

**Recall for Family**: All [Recall](recall.html) due and scheduled for all family members. Red entries indicate the patient's recall appointment is overdue. Click on a family member to quickly switch to their appointment history.

**Appointment Module Note**: Notes that show in red when you hover over patient's appointments in the schedule. Requires *Appt Mod Note* in Appointment Bubble [Display Fields](displayfields.html).

**Family Urgent Financial Notes**: Notes entered in the [Account Module](account.html), Family Urgent Financial Notes section. They cannot be edited here. These notes also show in red when you hover over any family member's appointment in the schedule.

**Planned Appt Done**: This box reflects the value of the Done box in the Chart module, Planned Appt tab. When checked, this notifies scheduling that the next appointment will be a recall, not a restorative procedure. If unchecked, there is a planned appointment. See [Planned Appointments](apptplanned.html).

**Show Completed Planned Appts**: List planned appointments attached to completed appointments. By default these do not list.

**Appointments for Patient**: The patient's planned, scheduled, broken, unscheduled, and completed appointments.

* The background and text color of appointments can be customized in [Definitions: Prog Note Colors](definitionsprognotecolors.html).
* Double-click on an appointment to open the Edit Appointment window.
* Planned appointments have no date or time. To schedule a planned appointment, click Copy to Pinboard.

The buttons along the bottom can be used to quickly take action on an appointment:

**Go to Appt**: Quickly jump to the date of the selected appointment. If the appointment is in an operatory not displayed in the currently selected appointment view, the appointment view will change to one that includes the operatory.

**Copy to Pinboard**: Copy the selected appointment to the [Pinboard](apptpinboard.html) for scheduling. Completed appointments cannot be copied.

**Entire Family**: Schedule [Recall](recall.html) appointments for all family members due for a *special* recall type (e.g. Prophy or Perio).

* For each family member due for a *special* recall type, an appointment will be created and sent to the Pinboard. Recall procedures that are not attached to a *special* recall type will be added to appointments automatically along with the *special* recall if they are due on or before the same date.
* If the schedule is Day View, the Search function will be brought up.
* Open Dental will search for openings for all family members' providers starting after the due date for the family member with the furthest out recall due date.
* If there are any available openings after that date, the schedule will move to the first available date. The search box will show additional available dates.

**Schedule Recall**: Schedule the patient's next recall appointment. Patient must be due for a *special* recall type (e.g. Prophy or Perio).

* An appointment will be created and sent to the Pinboard. Recall procedures that are not attached to a *special* recall type will be added to appointments automatically along with the *special* recall if they are due on or before the same date.
* If the schedule is Day View, the Search function will be brought up.
* If the patient's secondary (or primary if no secondary is assigned) provider has openings after the patient's recall due date, the schedule will move to the first date. The search box will show additional available dates.

**Note for Patient**: A patient note that can be placed on the schedule. On the [Edit Appointment](aptedit.html) window, enter notes in the lower left, change any other settings, then click OK to send to the pinboard to place on the schedule like an appointment. These notes can be set complete, but cannot be broken, sent to the Unscheduled List, or sent to the ASAP List. The default background color is set in [Definitions: Appointment Colors](definitionsappointmentcolors.html).

**Create New Appt**: Open the Edit Appointment window to schedule a new appointment.

## Appointments on Sheets

Some [Static Text Fields](statictextfields.html) will open the Appointments For window when used on a sheet.

If *apptDateMonthSpelled*, *apptProcs*, or *apptProvNameFormal* are used on a sheet, and that sheet is selected for the patient, the user is prompted to select an appointment. The appointment date will be used on the sheet (*apptDateMonthSpelled*, *apptProcs*) or the appointment's procedures will be used on the sheet (*apptProcs*).

![](images/apptsForApptDate.png)