Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Lab Cases

Manage and track the status of existing Lab Cases from the Lab Cases list.

In the [Main Menu](mainmenu.html), click Lists, Lab Cases.

![](images/labCases.png)

Alternatively, in the [Appointments Module](appointments.html), under the calendar, click **Lab Cases**.

![](images/labCaseStatus.png)

The status of Lab Cases for the selected date shows next to the Lab Cases button. If the status is *All Received*, then all Lab Cases attached to today's appointments have been marked *Received* on the [Lab Case](labcaseedit.html) Edit window. If the status is *Not Received*, then Lab Cases for today's appointments are still outstanding. The number indicates how many Lab Cases are not marked *Received*. If using Clinics, the status reflects Lab Cases attached to all appointments scheduled in the selected clinic's operatories, for the selected date.

## Filters

Set filter criteria to update Lab Cases grid. By default, only incomplete Lab Cases attached to incomplete appointments are listed.

![](images/labCasesFilters.png)

* **From/To Date**: Enter a date range to view Lab Cases between a specific date range, based on appointment date.
* **Show Unattached**: Check to view Lab Cases not attached to an appointment.
* **Show Completed**: Check to view completed Lab Cases. Lab cases are considered complete when the attached appointment is set complete. The *Status* of the lab is not changed.
* **Clinic**: Select a clinic to filter by clinic attached to appointment. Only visible when [Clinics](clinics.html) is enabled. The list will only include clinics the user has permission to access. If *Show Unattached* is checked, unattached labs are not filtered by clinic.

## Lab Case Grid

Click **Refresh** to update the Lab Cases grid after changing filter criteria.

Double-click a Lab Case to open the [Edit Lab Case](labcaseedit.html)  window and update the lab Tracking status. Right-click a lab case and select **Go To Appointment** to quickly jump to the associated appointment in the schedule.

Below is a description of each column in the grid.

![](images/labCasesGrid.png)

* **Appt Date Time**: Date and time of the appointment the Lab Case is attached to. Blank indicates the Lab Case is unattached.
* **Appt Status**: Status of the appointment the Lab Case is attached to.
* **Procedures:** Abbreviations of procedures attached to the appointment.
* **Patient**: Last name and first name of the patient attached to the lab.
* **Status**: Current *Tracking* status of the lab entered from Edit Lab Case. The status shown will be based on the highest priority tracking status with a tracking date entered. Tracking statuses are
  1. Quality Checked
  2. Received
  3. Sent
  4. Created
* **Lab**: [Laboratory](laboratories.html) attached to the Lab Case.
* **Lab Phone**: Contact phone number entered for the lab in Laboratories List.
* **Instructions**: Any text entered into the *Instructions* area of Edit Lab Case.