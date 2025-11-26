Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Patient Appointments

View a patient's appointment history and upcoming appointments from the Appointments for Patient window.

In the [Appointments Module](appointments.html), at the top, click **Pat Appts**.

![](images/aptOther.png)

This window also opens when scheduling an [Appointment](aptedit.html) for a patient who has [Planned Appointments](apptplanned.html), scheduled appointments, broken appointments, or unscheduled appointments, or [Recall](recall.html) due.

Note: In the [Audit Trail](audittrail.html), this window may be referred to as *Other Appointments*.

**Recall for Family**: Lists all family members with their age, gender, and dates for special [Recall Types](recalltypes.html). Red entries indicate the patient's appointment for a special [Recall](recall.html) is overdue. Click on a family member to quickly switch to their appointment history.

**Appointment Module Note**: Notes that show in red when hovering over patient's appointments in the schedule. Requires *Appt Mod Note* in Appointment Bubble [Display Fields](displayfields.html).

**Family Urgent Financial Notes**: Notes entered in the [Account Module](account.html), Family Urgent Financial Notes section. They cannot be edited here. These notes also show in red when hovering over any family member's appointment in the schedule.

**Planned Appt Done**: This box reflects the value of the Done box in the Chart module, Planned Appt tab. When checked, this notifies scheduling that the next appointment should be a recall, not a restorative procedure. If unchecked, there is a planned appointment. See [Planned Appointments](apptplanned.html).

**Show Completed Planned Appts**: List planned appointments attached to completed appointments. By default these do not list.

**Appointments for Patient**: The patient's planned, scheduled, broken, unscheduled, and completed appointments.

* The background and text color of appointments can be customized in [Definitions: Prog Note Colors](definitionsprognotecolors.html).
* Double-click on an appointment to open the Edit Appointment window.
* Planned appointments have no date or time. To schedule a planned appointment, click **Copy to Pinboard**.

The buttons along the bottom can be used to quickly take action on an appointment:

**Go to Appt**: Quickly jump to the date of the selected appointment. If the appointment is in an operatory not displayed in the currently selected [Appointment View](appointmentviews.html), the appointment view is changed to one that includes the operatory.

**Copy to Pinboard**: Copy the selected appointment to the [Pinboard](apptpinboard.html) for scheduling. Completed appointments cannot be copied.

**Entire Family**: Schedule [Recall](recall.html) appointments for all family members due for a *Special* [Recall Type](recalltypes.html) (e.g., Prophy or Perio).

* For each family member due for a *Special* Recall Type, an appointment is created and sent to the [Pinboard](apptpinboard.html). Recall procedures that are not attached to a *Special* Recall Type are added to appointments automatically along with procedures for the *Special* Recall Type when procedures are due on or before the same date.
* If the schedule is set to *Day* View, the Search function is shown.
* Open Dental searches for openings for all family members' providers starting after the due date for the family member with the furthest out recall due date.
* If there are any available openings after that date, the schedule moves to the first available date. The search box also shows additional available dates.

**Schedule Recall**: Schedule the patient's next recall appointment. Patient must be due for a *special* recall type (e.g. Prophy or Perio).

* An appointment is created and sent to the Pinboard. Recall procedures that are not attached to a *Special* Recall Type are added to appointments automatically along with the *Special* recall procedures if they are due on or before the same date.
* If the schedule is *Day* View, the Search function brought is shown.
* If the patient's secondary (or primary if no secondary is assigned) provider has openings after the patient's recall due date, the schedule moves to the first available date. The search box shows additional available dates.

**Note for Patient**: A patient note that can be placed on the schedule. On the [Edit Appointment](aptedit.html) window, enter notes in the *Patient NOTE* area, change any other settings, then click **Save** to send to the Pinboard for scheduling. These notes can be set complete, but cannot be broken, sent to the Unscheduled List, or sent to the ASAP List. The default background color is set in [Definitions: Appointment Colors](definitionsappointmentcolors.html).

**Create New Appt**: Open the Edit Appointment window to schedule a new appointment.

## Appointments on Sheets

Some [Static Text Fields](statictextfields.html) prompt the Appointments For window to open when generating a sheet.

![](images/apptsForApptDate.png)

The *Recall for Family* section and most action buttons (e.g., Schedule Recall) are hidden.

If *apptDateMonthSpelled*, *apptProcs*, or *apptProvNameFormal* are used on a sheet, and that sheet is selected for the patient, the Appointments For window opens to prompt the user to select an appointment. The appointment date is used on the sheet (*apptDateMonthSpelled*, *apptProcs*) or the appointment's procedures are used on the sheet (*apptProcs*).