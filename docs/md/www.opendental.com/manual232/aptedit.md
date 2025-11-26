Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Edit Appointment

Create, edit, or update appointment details from the Edit Appointment window.

In the [Appointments Module](appointments.html), with a patient selected, double-click on an open area to create a new Appointment.

![](images/apptEdit.png)

Alternatively:

* In the Appointments Module, double-click an existing appointment to edit.
* In the Appointments Module, click Make Appt, Make Recall, or Fam Recall.
* In the [Patient Appointments](apptspatient.html) window, click Copy to Pinboard, Schedule Recall, Entire Family, or Create New Appt.
* In the [Recall List](recalllist.html), [Unscheduled List](unscheduled.html), or [Planned Appointment Tracker](appttracker.html), double-click an appointment row.
* When using Web Sched, patients can schedule their own appointments online.

Note:

* When scheduling a procedure with an insurance frequency limitation, and [Frequency Limitations](insfrequencylimitations.html) are enabled, users are warned if a frequency conflict is detected.
* A warning appears when scheduling an appointment for a patient who is on the [Unscheduled List](unscheduled.html). Users can continue to create the appointment or schedule the appointment on the Unscheduled List.
* To block out appointment times in Operatories, see [Blockouts](blockouts.html).

## Title and Time Bar

![](images/apptEditTitleTime.png)

**Title Bar**: Shows the patient name, appointment day, date, and time, and the appointment's Operatory.

**Time Bar**: Along the left side are color-coded [Time Bars](timebars.html) that indicate appointment length. The default appointment time is based on the procedure's time pattern. The total length of the appointment displays.

* To shorten or increase time, drag the slider up or down.
* The left column displays the primary treating provider color. When *Is Hygiene* is checked, this is the *Hygienist* color. When *Is Hygiene* is unchecked, this is the Provider (dentist) color.
* The middle column displays the secondary treating provider color. Click a box to assign secondary provider time. When *Is Hygiene* is checked, this is the *Provider* (dentist) color. When *Is Hygiene* is unchecked, this is the *Hygienist* color.
* Type into the right column to add any abbreviations to note on the appointment. Examples include assistant abbreviation assignments or symbols for any purpose.

  Note: Because of the way these letters are stored in the database, it is assumed that [Appointment View](appointmentviewsetup.html) time increments and rows per increment will not change.
* Change the width of the Time Bar in [Preferences](preferences.html).

## Patient Information and Appointment Fields

![](images/apptEditPatInfoApptField.png)

**Patient Information**: Shows basic patient information. Fields displayed cannot be customized or edited.

* First Name, Last Name, Middle Initial, Birthdate, and Billing Type: Comes from the [Edit Patient Information](patientedit.html) window.
* Total Balance: Current patient balance without insurance estimates or write-offs.
* Address and Phone Notes: Comes from the [Edit Patient Information](patientedit.html) window.
* Family Balance: Current family balance after insurance estimates and write-offs.
* Est. Patient Portion: Patient portion for procedures attached to the appointment. Includes write-offs, insurance estimates, and treatment plan discounts. For estimates to calculate correctly the procedure must be charted procedure from the Chart Module then attached to the appointment. If procedures are added directly to the appointment, users must click into the Treatment Plan Module to update estimates.
* Fee this Appt: Total fee for procedures attached to the appointment.

**Appt Fields**: A list of all [Appointment Field Defs](appointmentfields.html). Double-click on a field to enter patient information.

## Appointment Settings

![](images/apptSettings1.png)

**Status**: The appointment's current status.

* Scheduled: The appointment is scheduled.
* Complete: The appointment has been [Set Complete](apptcomplete.html).
* Unsched List: Sends an appointment to the [Unscheduled List](unscheduled.html). The option is disabled if the appointment is accessed from the Unscheduled List and an appointment has not been scheduled.
* Broken: The appointment has been [Broken](apptbreak.html).

**ASAP**: Marks the appointment as ASAP and add it to the [ASAP List](asaplist.html). This means the patients wants to come in sooner if an opening becomes available. ASAP can also be a set as a display option in [Appointment Views](appointmentviews.html).

**Unscheduled Status**: Used in the Unscheduled List, [Recall List](recalllist.html), and [Planned Appointment Tracker](appttracker.html) to easily identify why an appointment has not been scheduled and determine whether to contact patient or not. Customize options in [Definitions: Recall / Unsched Status](definitionsrecallunschedstatus.html).

**Confirmed**: The [Confirmation Status](confirmationstatus.html). Confirmed statuses are also linked to Time Arrived, Time Seated, and Time Dismissed values (see below).

Note: To also indicate confirmed status in the appointment box on the schedule, add *Confirmed Color* to the Appointment View. A small colored circle shows on the appointment box.

**New Patient**: This box automatically checks on the first appointment created for a patient. When checked, *NP* shows in the upper-left corner of the appointment box on the schedule.

* This box can be manually unchecked at any time.
* This box checks by default if there is no *Date of First Service* entered in the [Edit Patient Information: Other Tab](patienteditother.html), and there are no completed procedures for the patient.

**Clinic**: The patient's default clinic. Only visible when [Clinics](clinics.html) is turned on.

**Provider**: The dentist assigned to the appointment. Every appointment must have a dentist and can optionally have a hygienist.

* The default provider on an appointment is the provider [Scheduled](schedule.html) in the Operatory.
* If no provider is scheduled in the Operatory, the default provider is the provider assigned to the [Operatory](operatories.html).
* If no provider is scheduled in or assigned to the Operatory, the default provider is the patient's assigned Primary Provider in [Edit Patient Information](patientedit.html).
* The provider can be manually changed if needed.

**Hygienist**: The hygienist assigned to the appointment.

* The default hygienist is the provider marked secondary (i.e., hygienist) scheduled in the Operatory.
* If no hygiensit is scheduled to the Operatory, the hygienist assigned to the Operatory is used by default.
* If no hygienist is scheduled in or assigned to the Operatory, the patient's assigned Secondary Provider in Edit Patient Information is used by default.
* If the patient has no Secondary Provider assigned, and no hygienist is scheduled in or assigned to the Operatory, no hygienist is assigned by default.
* The hygienist is assigned as the provider on procedures marked *Is Hygiene Procedure* in [Procedure Code Edit](procedurecodeedit.html).
* To always assign the Operatory's hygienist to the appointment, even if it is *none*, enable *Force op's hygiene provider as secondary provider* in Preferences.

**Is Hygiene**: Mark the appointment as a hygiene appointment. The appointment uses the hygienist's color, unless there is a color override, and the provider Time Bar changes to hygienist.

* Automatically checked if the Operatory is marked as *Is Hygiene*.
* If no provider is scheduled in the Operatory or assigned to the Operatory, but a hygienist is assigned to the Operatory, the box is automatically checked.

Note: When moving an appointment, the Is Hygiene flag changes to match the new Operatory settings.

**Assistant**: Displays first name of employee assigned as the assistant. Click the dropdown to choose from the [Employees](employees.html) list.

**Time Locked**: When checked, added procedures do not automatically adjust the appointment time pattern. If users manually adjust the appointment time using the Time Bar, the box is automatically checked.

**Color**: Override the provider color for this appointment only. The color remains until the appointment is set complete. Click **none** to remove an existing color override.

**Appointment Type**: Assign an [Appointment Type](appointmenttypes.html) to automatically assign color overrides, time patterns, attach procedures, and more.

## Appointment Settings (Cont.)

![](images/apptSettings2.png)

**Time Ask to Arrive**: If an *Ask to Arrive Early* value is entered on the Edit Patient Information window, this field automatically fills each time an appointment is scheduled an appointment. A [Time Ask to Arrive](timeasktoarrive.html) (00:00 PM) can also be entered manually.

**Time Arrived**, **Time Seated**, **Time Dismissed**: These values are automated based on time triggers set in Preferences. Usually users do not change them from this window, but instead base values on a confirmed status that in turn trigger an entry. Confirmed statuses are usually selected in the Appointments Module. Users can manually change the field values as well, or right-click, then select **Now** to insert the current time.

These confirmed statuses are usually set as the time trigger defaults for each field:

* Time Arrived trigger: Arrived
* Time Seated trigger: In Treatment Room
* Time Dismissed trigger: Front Desk

**Lab**: Attach a [Lab Case](labcaseedit.html) to this appointment or edit an existing Lab Case. This information can be displayed in an Appointment View.

**InsPlan1** / **InsPlan2**: When an appointment is created these fields automatically fill based on the patient's current primary and secondary insurance carrier. Once scheduled, they are updated automatically when insurance plans are dropped or added. Once an appointment is set complete, the information no longer updates automatically.

* For large public health clinics, the insurance plan fields allow users to run historical reports once a patient's insurance coverage changed.
* To change plan information on a completed appointment,  **[...]**. Select the plan information from the Select Insurance Plan window and click **OK**. Plan options are limited to other plans entered for the family. To clear a selection click **None**.

![](images/apptEditInsPlan.png)

**Req**: Only visible if [Dental Schools](dentalschools.html) feature is enabled. Click to attach [Dental School Requirements](requirements.html) to an appointment.

**Obs**: Only visible if EHR is enabled. Click to open the Appointment Observations window and enter [EHR Syndromic Surveillance Observations](ehrsyndromicdataobs.html).

## Procedures on the Appointment

![](images/apptEditProcs.png)

**Single Click List**: Lists commonly-used procedure groupings. Click a line item to quickly treatment plan and attach the procedures to the appointments. Customize groupings in [Definitions: Appt Procs Quick Add](definitionsapptquickadd.html).

**Procedures on this Appointment**: This area lists the patient's treatment planned procedures, along with any completed procedures that have the same date as the appointment. Customize which columns show in [Display Fields](displayfields.html). Highlight procedures in the grid to attach to the appointment.

* Double-click a procedure from the grid to open [Procedure Info](procedureedit.html). Users can delete procedures from this window if needed.

**Delete**: Click to to permanently delete all currently highlighted procedures from the list of Procedures on this Appointment. To only delete one procedure, make sure it is the only highlighted procedure, then click **Delete**.

* When the preference, *Appointments require procedures* is enabled, the message below appears when attempting to delete a procedure marked *(other appt)*. Click **OK** to close the message and deselect any *(other appt)* procedures to proceed with deleting. *(other appt)* procedures can be deleted from the [Chart Module](chart.html) or from their original appointment.

  ![](images/procedureDeleteOtherAppt.png)

**Add**: Click to select a procedure from the [Procedure Codes](procedurecodes.html) list.

**Attach All**: Click to highlight all listed procedures with a single click.

Note:

* To prevent staff from creating appointments with no procedures attached, enable *Appointments require procedures* in Preferences.
* If a procedure on an appointment is marked as complete, then later set back to treatment planned, the procedure is detached from the original appointment.

## Appointment Note

![](images/apptEditNote.png)

**Appointment Note**: Notes entered here appear in the Appointment Bubble when users hover over an appointment. This field can also be added to an Appointment View.
 Right-click to insert the date, a Quick Paste Note, or an Auto Note.

## Commlogs and Buttons

![](images/apptEditComm.png)

**Show Automated Commlogs**: Show commlog entries that have been automatically generated (e.g., Recalls, FHIR, Web Sched, etc). This checkbox is user specific, and affects automated commlogs in the Account Module, Chart Module, and Appointment Edit window.

**Communications Log**: A log of all scheduling related communications that have been logged (calls, texts, sent eReminder emails, and sent eConfirmation emails) so users can easily see appointments that were rescheduled, canceled, etc. See [Commlog](commlog.html). This helps staff avoid calling a patient too often when they have indicated a wish to wait. Similarly, if a patient says that nobody called for their recall, staff can immediately confirm by reviewing the history. Typically users do not make an entry for appointment confirmations. To edit or view an entry, double-click on it. Set the default commlog type in [Definitions: Commlog Types](definitionscommlogtypes.html).

**Comm**: Enter a log entry in the Communications Log.

**Text**: Send a confirmation text message to the patient. Set the default message in [Confirmation Setup](confirmationsetup.html). This field is only enabled if:

1. On the Edit Patient Information window, a wireless number has been entered for the patient and Yes has been set for Text Messages.
2. Text Messaging has been set up.

**Audit Trail**: View a log of actions that have been taken for this specific appointment. This audit trail is accessible to all users. It is different than the audit trail accessed via the Tools menu.

**To Task List**: Send this appointment to a specific [Task List](tasklists.html) to keep track of appointments that need follow up or appointments of a certain type.

**Pinboard**: Only appears when opening an appointment from the Appointments for Patient window. Click to send an appointment to the [Pinboard](apptpinboard.html) to schedule or reschedule.

**Delete**: Delete the appointment.

**OK**: Save changes and close the window.

**Cancel**: Close the window without saving changes.

## Edit Patient Note

In the [Patient Appointments](apptspatient.html) window, click **NOTE for Patient** to create a note for the patient. Opens a window nearly identical to the Edit Appointment window. Enter the patient note and click **OK**. Then add the note to the schedule.

![](images/apptEditPatNote.png)

These types of notes can be useful when:

* Overlapping appointments is allowed. The NOTE appointment can be scheduled directly next to the original appointment and can pertain any notes relevant to the patient or appointment.
* An Operatory designated for notes is added to the Appointment View. The NOTE appointment can be used as a To-Do list for the staff. Such as reminders for contacting insurance.

## Troubleshooting

**When saving changing to an appointment, I get the message "Not authorized for Appointment Resize. The appointment length needs to be XX:XX."**

Only users with the *Appointment Resize* [Permission](permissions.html) are allowed to edit appointment length. Click OK on the message and return the appointment to it's original length using the Time Bar. Once the appointment is returned to its original length, click OK on the Edit Appointment window to save any other changes.