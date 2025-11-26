Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Break Appointment

Track missed or cancelled appointments by breaking them.

In the [Appointments Module](appointments.html), select the appointment. In the toolbar, click **Break**.

![](images/aptbreakicon.png)

Alternatively:

* Right-click the appointment, then select *Break Appointment*.
* In the [Edit Appointment](aptedit.html) window, change the status to *Broken*.

Broken appointments are crossed out.

![](images/apptBroke.png)

* Customize text color of broken appointment procedures in the Account Module in [Definitions: Account Colors](definitionsaccountcolors.html).
* To add a broken appointment to the [ASAP List](asaplist.html), mark it as ASAP on the [Edit Appointment](aptedit.html).
* To trigger other automated actions, see [Automation](automation.html).
* To generate a report of broken appointments, see [Broken Appointments Report](reportbrokenappt.html) or [Graphic Reports](reportsgraphic.html).

## Broken Appointment Options

If the *Broken appointment procedure type* in [Preferences](preferences.html) is set to anything other than *None*, when breaking an appointment using the toolbar, or Edit Appointment dropdown, the Broken Appt Options window opens.

![](images/apptbreakOptions.png)

**Broken Procedure Type**: Select the type of procedure code to apply to the broken appointment. Enabled options are determined by the *Broken appointment procedure type* preference.

* **Missed**: Adds a procedure with code D9986 to the patient's chart. This is used when the patient simply did not show up for the appointment.
* **Cancelled**: Adds a procedure with code D9987 to the patient's chart. This is used when less than a 24-hour notice was given, making it hard to fill the time slot.

Note: To use broken appointment options, the missed (D9986) or cancelled (D9987) appointment procedures must already exist. Some users (e.g., foreign users) may not have them in the database by default and they must be added manually. See [Add Procedure Code](procedurecodenew.html).

After selecting a Broken Procedure Type, choose one of the buttons to finish breaking the appointment.

* **Send to Unscheduled List**: Click to remove the appointment from the schedule and send it to [Unscheduled List](unscheduled.html).
* **Copy to Pinboard**: Click to copy the appointment to the [Pinboard](apptpinboard.html) in order to reschedule to a different date or time.
* **Leave in Appt Module**: Click to leave the appointment at its currently scheduled date/time. The appointment is crossed out.

If breaking an appointment by right-clicking, options vary depending on the selected *Broken appointment procedure type* preference.

* If the preference is set to *None*, users only have the option to Break Appointment.
* If the preference is set to *Missed*, users have the option to Break Appointment with the following options:
  + Missed - Delete Appointment / Missed - Send to Unscheduled List. Not available if the preference *Do not allow recall appointments on the Unscheduled List* is enabled and the appointment includes a special recall type procedure.
  + Missed - Copy to Pinboard
  + Missed - Leave on Appt Book
* If the preference is set to *Cancelled*, users have the option to Break Appointment with the following options:
  + Cancelled - Delete Appointment / Missed - Send to Unscheduled List. Not available if the preference *Do not allow recall appointments on the Unscheduled List* is enabled and the appointment includes a special recall type procedure.
  + Cancelled - Copy to Pinboard
  + Cancelled - Leave on Appt Book
* If the preference is set to *Both*, users have the option to Break Appointment with all Missed and Cancelled options noted above.
* These options work the same as the Broken Appt Options window.

It is recommended to handle broken appointments before the end of day. Send them to the Unscheduled List, reschedule them, or delete them. Otherwise, incomplete appointments may get left in the Appointments Module.

If a *Broken appointment procedure type* is enabled in preferences, the Broken Appointment Procedure window appears first. See below for additional information on Broken Appointment Procedures.

If the preference, *Make broken appointment adjustment*, is enabled, the [Adjustment Edit](adjustments.html) opens next.

If the preference, *Make broken appointment commlog*, is enabled, the [Commlog](commlog.html) window opens last.

## Rescheduling Broken Appointments

If the preference, *Force users to break scheduled appointments before rescheduling*, is enabled, when moving an existing appointment the the Pinboard, there is a prompt to break the appointment.

![](images/apptBreakResched.png)

## Broken Appointment Procedures

The Broken Appointment Procedure window appears after selecting a Broken Procedure Type.

![](images/apptbreakProc.png)

* Entry Date: Read-only. Date the Broken appointment procedure is created.
* Procedure Date: Editable. Date procedure appears in the Account, Chart, reports, etc.
* User: Read-only. Automatically assigned. User who created the Broken Appointment Procedure.
* Procedure Notes: Displays as a Note in the [Procedure Info](procedureedit.html) window. Automatically includes text of *Appt BROKEN for*, procedure abbreviations, and date/time of appointment. Edit as needed. Click **Auto Note** to insert [Auto Note](autonotes.html) template.
* Account Notes: Displays as a Billing Note in [Procedure Info - Misc Tab](proceduremisc.html). Edit as needed. Click **Auto Note** to insert Auto Note template.

Use the [Broken Appointments Report](reportbrokenappt.html) to view a list of broken appointments in a date range.

## Details

If *TP prepayments are non-refundable* is enabled in [Allocations Setup](allocationssetup.html), prepayments attached to procedures of a broken appointment are transferred to the D9986 (missed) procedure. If the broken appointment procedure amount is changed and is less than the value of the procedure and associated prepayment, the remaining balance of the treatment planned prepayment is transferred from [Hidden Splits](hiddensplits.html) to the patient account as [Unearned Income](unearnedprepayment.html).

Completed appointments cannot be broken if procedures are attached and the *Prevent changes to completed appointment with completed procedures* preference is enabled.