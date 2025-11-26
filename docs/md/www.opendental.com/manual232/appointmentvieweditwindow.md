Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Appointment View Edit

Customize Appointment Views to display preferred information in the Appointments Module.

In the [Appointment View Setup](appointmentviewsetup.html) window, double-click a view.

![](images/apptViewEdit.png)

## Options

![](images/apptViewOptions.png)

* **Description**: The identifying name of this Appointment View.
* **Rows per time increment (usually 1)**: Affects the row height for time increments. Enter a number between 1 and 3.
* **Minimum Op width (default 0) (turns on hscroll)**: Enter the minimum width of an Operatory (in pixels). Appointments do not scale down below that width, and a horizontal scroll bar appears at the bottom if needed.
* **View Start Time on Load**: Set a fixed default start time. This option is only used when start times are not determined dynamically.
* **Dynamic start time based on schedule**: When checked, the schedule automatically scrolls to whichever comes first: the start time of the earliest appointment or blockout, or the scheduled start time of the earliest scheduled provider.
  + Only providers in Operatories included in the view are considered.
  + Operatories not assigned a provider consider the default provider's [Schedule](schedule.html).
  + If no Operatory has a scheduled provider or appointment, the *View Start Time on Load* value is used.
  + When Open Dental is first launched, the appointment schedule automatically scrolls to the default start time based on the settings above. After Open Dental is launched, the scroll bar remembers the last position it was in and stay there when moving around the program.
* **Disable appointment bubbles**: Set whether or not the Appointment Bubble appears in this Appointment View when hovering over an appointment in the schedule.
  + When checked, Appointment Bubbles do not appear when hovering over appointments.
  + When unchecked, Appointment Bubbles appear when hovering over appointments.
  + Disabling Appointment Bubbles is useful for privacy (so PHI is not visible) or for better system performance.
  + The default state of this setting is determined by *Default appointment bubble to 'disabled' for new Appointment Views* in [Preferences](preferences.html)
* **Clinic**: If using [Clinics](clinics.html), select the Clinic associated with this view. The view is only available when this Clinic is selected in the [Main Menu](mainmenu.html). Selecting *Unassigned* allows the view to be selected from *Headquarters*. Defaults to the Clinic selected on the Appointment Views window.
* **Waiting Room Name Format**: Set how name displays in the [Waiting Room](waitingroom.html).
  + Last, First: Displays patient's last and first name (e.g., Smith, John).
  + First, Last Initial: Displays patient's first name and last initial (e.g., John, S).
  + First: Displays patient's first name only (e.g., John).

## Display Filter

![](images/apptViewDisplayFilter.png)

**Only show ops for scheduled provs**: Check this box to dynamically show Operatories based on provider schedules. Applies to Day View only.

* Only Operatories selected in *View Operatories* are considered.
* For this feature to function correctly, it is recommended that all providers be scheduled in an Operatory ([Schedule Setup](schedule.html)).
* If there is an Operatory that does not have a provider scheduled or assigned, but there is a provider on the schedule with no Operatory, the Operatory is still displayed.

The following settings only display when *Only show Operatories for scheduled providers* is checked.

* **Only if before time**: Show Operatories for providers whose schedule starts and ends before this time.
* **Only if after time**: Show Operatories for providers whose schedule starts and ends after this time.

Example: Providers are assigned to different Operatories after lunch. Create two Appointment Views, one for morning and one for afternoon.

## View Operatories

![](images/apptViewOps.png)

Select the Operatories that show in the Appointment View. If using Clinics, only Operatories associated with the assigned Clinic are listed. Click and drag or press Shift or Ctrl while clicking to select multiple Operatories. At least one Operatory must be selected. Sort order is based on [Operatories](operatories.html) order.

## View Provider Bars

![](images/apptViewProvBars.png)

Select the provider [Time Bars](timebars.html) to show in the view. Time bars show on the left of the schedule in the appointment color of the provider.

## Add Rows to the Appointment View

![](images/apptViewRows.png)

The information that displays on an appointment is determined by rows added to the view. Rows to left of the arrows (Available Rows, Appt Field Defs, and Patient Field Defs) are available to add to an Appointment View. Rows to the right of the arrows (Main List, Upper Right Corner, and Lower Right Corner) are currently visible in the Appointment View.

Select a row, the use the left and right arrows to add it to or remove it from the view.

* **Available Rows**: See below for an explanation of each row item.
* **Appt Field Defs**: Displays [Appointment Field Defs](appointmentfields.html).
* **Patient Field Defs**: Displays [Patient Fields](custompatientfields.html). See below for additional details.
* **Main List**: Displays rows added to the Appointment View. These rows display in the center list of the appointment.
* **Upper Right Corner**: The fields listed appear in the upper-right corner of the appointment box. Whether the information is stacked vertically or horizontally is based on the UR stack behavior selection. It can be useful to organize data that displays as symbols in the upper right (e.g., I, A, [L]). Double-click an item to change its text/background color or to move it to a different location.
* **Lower Right Corner**: The fields listed here appear in the lower right corner of the appointment box. Whether the information is stacked vertically or horizontally is based on the LR stack behavior selection. Double-click an item to change its text/background color or to move it to a different location.

Note: When adding a field to the Upper Right Corner or Lower Right Corner, only the first row of information is displayed. To see all rows of information, add the field to Main List instead.

* To reorder rows, Select the row then use the **Up** and **Down** arrows to move it.
* **Mobile**: Only displays when [ODMobile](opendentalmobile.html) is enabled for the Practice or Clinic. Click to determine which fields show on appointments when viewed from an ODMobile device. See below for details.

## Appointment View Item Edit

When a field has been moved from the Available Rows column, the text color or alignment can be edited.

To edit a field, double-click it. The Appointment View Item Edit window will open.

![](images/apptViewItemEdit.png)

* **Description**: Name of the field. This value cannot be changed.
* **Text Color**: Click Change to change the [Color](colorselection.html) of the text or row background, depending on the item and location.
* **Alignment**: Select where the field displays on the appointment.
  + Main: Displays on the appointment in the center list.
  + UR: Displays in the upper right of the appointment.
  + LR: Displays in the lower right of the appointment.

## Mobile Appointment View Edit

For [ODMobile](../site/mobileapp.html) users, click **Mobile** to set up the Appointment View for the mobile app.

![](images/ApptViewMobile.png)

Use the **Left** and **Right** arrows to determine which Available Rows, Appointment Field Defs, and Patient Field Defs display in the Main List on appointments in ODMobile and ODTouch. Fields can only be displayed in the Main List.

Note: *Confirmed Color* is not a listed option as it always displays in the upper-right corner of ODMobile and ODTouch appointments.

## Available Rows

A list of available data that can be shown.

| Row Name | Description |
| --- | --- |
| Address | Patient address. |
| AddrNote | Address and phone note. |
| Age | As calculated on Edit Patient Information window. |
| ASAP | Display ASAP when the appointment status is ASAP. |
| ASAP[A] | Display A when the appointment status is ASAP. |
| AssistantAbbr | The assistant's abbreviation. Displays the first two characters of the assistant's first name entered in the [Employees](employees.html) list. |
| Birthdate | As entered in the Edit Patient Information window. |
| ChartNumAndName | Chart number and patient last name, first name. |
| ChartNumber | Chart number only. |
| ConfirmedColor | Display a colored circle in the appointment box to indicate [Confirmation Status](confirmationstatus.html). Define colors for each confirmation status in Definitions, Appt Confirmed. |
| CreditType | As entered in the Edit Patient Information window. |
| DiscountPlan | The patient's [Discount Plan](discountplans.html) name. |
| EstPatientPortion | Estimated patient portion for attached procedures. (patient portion = gross production - estimated insurance write-offs - insurance estimates - discount plan discount). For estimates to calculate correctly you must chart the procedure from the Chart Module then attach them to the appointment. If procedures are added directly to the appointment, you must click into the Treatment Plan Module to update the estimates. |
| Guardians | Name of person marked as Guardian in [Family Relationships](familyrelationship.html). |
| HasDiscount[D] | Display D when patient has a discount plan. |
| HasFamilyBalance[$] | Display $ when there is a family balance on the account, regardless of pending insurance. |
| HasIns[I] | Display I when patient has insurance. |
| HmPhone | Home phone number. |
| InsToSend[!] | Display an exclamation point (!) on patient appointments when there are completed procedures within the last year that have not been sent to insurance. This shows for a patient if any family members have an unsent procedure. We recommend placing it in the Upper Right Corner. For this to show, also enable the *Show ! on appts for ins not sent, if added to Appt View* preference. The exclamation point won't show if a claim has been created for the completed procedure or the insurance estimate is $0. |
| Insurance | When in the Main List, displays primary and secondary insurance carriers attached to the appointment. *Insured* displays if the patient currently has medical insurance or other insurance that is not attached to the appointment (i.e., in the Edit Appointment window). |
| Insurance Color | When in the Main List, displays primary and secondary insurance carriers attached to the appointment with a colored background as set in [Carriers](carriers.html). *Insured* displays if the patient currently has medical insurance or other insurance that is not attached to the appointment (i.e., in the Edit Appointment window) and no colored background is set. |
| IsLate[L] | Display [L] when a patient is late for an appointment. A patient is considered late if they have no time arrived entered on the Edit Appointment window or if the time arrived value is later than the appointment start time. |
| Lab | Show the status of [Lab Cases](labcaseedit.html). We recommend changing the text color to red as well. |
| LateColor | Indicate a patient is late for their appointment by changing the appointment's color. A patient is considered late if they have no time arrived entered on the Edit Appointment window or if the time arrived value is later than the appointment start time.  * LateColor overrides provider and appointment type color. * The appointment color does not change from *Late Color* unless the patient's *Time Arrived* is updated to show the patient was not late. * Completed *Late Color* appointments change to *Completed* appointment color. |
| MedOrPremed[+] | Display + to indicate patient has Premedicate checked, medical urgent notes, allergies, and/or problems |
| MedUrgNote | Medical Urgent Note entered in the [Medical Chart](medical.html). |
| NetProduction | Net production of procedures attached to the appointment. Net production is the amount remaining after estimated write-offs and adjustments are calculated. Add this field or Production to see the Daily Prod sum at the right of the Appointments Module. See  [for additional calculation details](productiontotals.html). |
| Note | The Appointment Note entered on the Edit Appointment window. |
| PatientName | The patient's last name, preferred name, first name, and middle initial. |
| PatientNameF | The patient's first name. |
| PatientNamePref | The patient's preferred name. |
| PatNum | Patient number assigned by Open Dental. |
| PatNumAndName | Patient number and patient last name, first name. |
| PremedFlag | Display Premedicate if Premedicate is checked in the Chart Medical area. |
| Procs | List abbreviations for procedures attached to the appointment on a single line, separated by commas. Text wraps to next line if too long for a single line. |
| ProcsColored | See [Proc Appt Colors](apptviewproccolors.html). Can only display in the Main List. |
| Production | Show the sum of the fees for all procedures attached to the appointment for providers who have a provider time bar showing. Add this field or NetProduction to view to see the Daily Prod sum at the right of the Appointments module. See [Production Totals](productiontotals.html). |
| Prophy/PerioPastDue[P] | Displays a **P** icon if a Prophy or Perio [Special Recall](recalltypes.html) type is overdue. |
| Provider | Displays providers on the appointment. |
| RecallPastDue[R] | Displays an **R** icon if any recall type (other than Prophy or Perio) is overdue. |
| TimeAskedToArrive | Display the time before the appointment that the patient has been asked to arrive to the office. See [Time Ask to Arrive](timeasktoarrive.html). |
| VerifyIns[V] | Adds a **V** icon if insurance has not been verified. Icon shows for patients using [Insurance Verification Setup](insverifylistsetup.html) settings. |
| WirelessPhone | Patient wireless phone number. |
| WkPhone | Patient work phone number. |

## Patient Field Defs

The available [Patient Fields](custompatientfields.html).

* CareCredit Approval Status: Displays the CareCredit Quickscreen status for the patient.
  + Green circle: Displays pre-approved status.
  + Orange triangle: Displays unable to pre-approve status.
  + Blue square: Displays cardholder status.