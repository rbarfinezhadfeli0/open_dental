Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Broken Appointments Report

Track broken appointments in a date range using the Broken Appointments Report.

In [Standard Reports](reportsstandard.html), in the Lists area, click **Broken Appointments**.

![](images/reportsBrokenAppt.png)

The Broken Appointment report lists patients who have a broken appointment during a date range and any associated fees charged. It is grouped by clinic. Also see [Break Appointment](apptbreak.html).

To control user access to this report, see [Report Setup: Security Permissions](reportsecurity.html).

## Filters

Set the report criteria and filters before running the report.

**Calendar**: Select the date range. Select the start date in the first calendar and the end date in the second calendar.

**Providers**: Highlight the providers to include. Check **All** to select all listed providers.

* When *By procedures* is selected, filters by provider attached to broken appointment [Procedure](procedureedit.html).
* When *By adjustments* is selected, filters by provider attached to broken appointment [Adjustment](adjustments.html).
* When *By appointment status* is selected, filters by provider or hygienist attached to broken appointment.

**Clinics**: Only available when Clinics are enabled in [Show Features](showfeatures.html). Highlight the clinics to include. Check **All (Includes hidden)** to include all clinics, including those marked hidden.

* When *By procedures* is selected, filters by the clinic assigned to the broken appointment procedure. By default, this is the clinic assigned to the appointment, but can be changed.
* When *By adjustments* is selected, filters by the clinic assigned to the broken appointment adjustment. By default, this is the clinic assigned to the appointment, but can be changed.
* When *By appointment* is selected, filters by the clinic assigned to broken appointment.
* If user is restricted to specific clinics, only accessible clinics are listed. When checking **All (includes hidden)**, results include all clinics user has access to, including those marked hidden and anything unassigned to a clinic; results do not include clinics user is restricted from.

Select which patients are included based on the different methods of marking broken appointments. There are up to three options:

* **By procedures**: Include patients who have a D9986 or D9987 completed procedure.
* **By adjustments**: Include patients with a specific adjustment type. Select the adjustment type in the list box on the right.
* **By appointment status**: Include patients who have appointments with a status of *Broken*. Only appointments left on the appointment book are included. Deleted appointments and those sent to the [Unscheduled List](unscheduled.html) or rescheduled do not appear on the report.

Available options for the report may change based on the selected Broken Appointment Automation settings in [Preferences](preferences.html). See the subsequent Technical Details for additional information.

## Report Preview

Click **OK** to generate a print preview the report. The report differs based on the broken appointment method selected. Results for all report types are grouped by clinic if applicable.

The following are examples of each report type and explanation of the report columns. For a description of toolbar buttons, see [Complex Report System](reportcomplex.html).

**Broken appointment report by procedures**:

![](images/reportBrokenApptPrintCode.png)

* **Date**: Broken appointment procedure date (i.e., date appointment was broken).
* **Provider**: Provider assigned to the broken appointment procedure. This defaults to the appointment provider, but can be changed.
* **Code**: Broken appointment procedure code.
* **Patient**: Patient last name and first name.
* **Fee**: Fee associated with the broken appointment procedure.

Fees are totaled for each clinic, at the end of that clinic's grid in bold.

The **Total Broken Appointment Fees** and **Total Broken Appointments** are included on the last page of the report in bold. If using clinics, these are the totals for all clinics included in the report.

**Broken appointment report by adjustments**:

![](images/reportBrokenApptPrintAdjust.png)

* **Date**: Broken appointment adjustment date (i.e., date appointment was broken).
* **Provider**: Provider assigned to the broken appointment procedure. This defaults to the appointment provider, but can be changed.
* **Patient**: Patient last name and first name.
* **Amount**: Amount (i.e., fee) associated with the broken appointment [Adjustment](adjustments.html).
* **Note**: Adjustment note.

Amounts are totaled for each clinic, at the end of that clinic's grid in bold.

The **Total Broken Appointment Adjustment Amount** and **Total Broken Appointments** are included on the last page of the report in bold. If using clinics, these are the totals for all clinics included in the report.

**Broken appointment report by appointment status**:

![](images/reportBrokenApptPrintStatus.png)

* **AptDate**: Date of appointment. The appointment must currently still be on the calendar to appear on the report.
* **Patient**: Patient last name and first name.
* **Doctor**: Provider assigned to the appointment.
* **Hygienist**: Hygienist assigned to the appointment
* **IsHyg**: X indicates the appointment is marked *Is Hygiene*.

The **Total Broken Appointments** are included on the last page of the report in bold. If using clinics, this is the total for all clinics included in the report.

## Technical Details

In the Broken Appointments Report, the default selection for report type is determined by the *Broken Appointment Automation* [Preferences](preferences.html).

1. If *Broken appointment procedure type* is set to anything other than *None*, the report defaults to *By procedure*. Only the selected *Broken appointment procedure type*  procedure codes are available to choose from (e.g., if set to Missed, only the missed procedure code, D9986, is listed and included on the report) If the preference is set to *Both*, there are multiple options (i.e., missed, cancelled, both).
2. If *Broken appointment procedure type* is set to None and *Make broken appointment adjustment* is enabled, *By Adjustments* is selected by default. Any subtraction adjustment type can be selected to include in the report; by default only the *Broken appt default adj type* is selected.
3. If the *Broken appointment procedure type* is set to None and *Make broken appointment adjustment* is disabled, the report defaults to *By appointment status*.