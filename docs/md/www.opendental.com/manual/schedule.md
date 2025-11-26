Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Schedule Setup

Schedule setup allows users to view and enter all provider and employee schedules.

To view the schedule, in the [Main Menu](mainmenu.html), click Setup, **Schedules**.

![](images/schedule.png)

Alternatively, in the [Manage Module](manage.html), select a specific employee(s). Click **View Schedule**.

![](images/youtubeLogo.png) See our videos: [Operatory and Schedule Setup](https://youtu.be/jDnnrFnw3CU) & [Operatory and Schedule Setup for Clinics](https://youtu.be/CBwNnjaxzlg)

Offices can define any kind of rotating or alternating schedule they want. From the Schedule window, enter individual work hours, holidays, lunch hours, and staff meetings.

To edit schedules, the *Schedules - Practice and Provider* [Security Permission](permissions.html) is required. The schedule may be blank upon entering this window. See the Filters section to update what is shown in the Schedules grid.

Once schedules are entered, open/closed hours are indicated in the Appointments Module with the background colors set in [Definitions: Appointment Colors](definitionsappointmentcolors.html).

## Schedule Grid

The schedule may be blank upon opening the Schedule. Set filter criteria (e.g., select providers/employees) and click **Refresh** to view schedules.

![](images/scheduleGrid.png)

Each day is represented by a single cell. Today's date and schedule are displayed in red text. Holidays or notes added to the schedule are denoted in the corresponding cell.

Double-click a day to open [Schedule Edit](scheduleeditdaywindow.html) to make changes to a single day's schedule (e.g., add employees or provider time to the schedule).

## Filters

Set filters to affect which schedules are displayed in the Schedule grid..

![](images/scheduleFilters.png)

After setting filters, click **Refresh** to update what is displayed in the Schedule grid.

* **From / To Dates**: The date range to display in the Schedule grid.
* **Show Practice Holidays and Notes**: Display practice notes and holidays entered via the Edit Day window. If using clinics, this corresponds to notes or holidays with *Headquarters* assigned as the clinic.
* **Show Clinic Holidays and Notes**: Only displays when Clinics are enabled in [Show Features](showfeatures.html). Display the selected Clinic's holidays and notes entered via the Edit Day window.
* **Clinic**: Only displays when Clinics are enabled. Select a clinic to show only schedules for providers/employees assigned to the clinic.
  + Defaults to the clinic selected in the [Main Menu](mainmenu.html).
  + If user is restricted to specific clinics, only accessible clinics are listed.
  + The selected clinic also affects the Providers and Employees lists. Only providers or employees assigned to the selected clinic are listed in these tabs.
* **Limit to Ops in Clinic**: Only displays when Clinics are enabled. Check the box to show only schedules assigned to the clinic's [Operatories](operatories.html) or for provider's assigned to the clinic's operatories. While in this view, Clear Week, and Copy/Paste options are disabled.
* **Providers(0) / Employees (0)**: Highlight the providers or employees to view in the Schedule grid. The number currently selected appears in parentheses.
  + When *Select all provider/employees when loading schedules* is enabled in [Preferences](preferences.html), all providers and employees are selected when the Schedule window is opened. If the preference is disabled, no employees or providers are selected when the Schedule window is opened; employees or providers must be selected manually to view schedules.
  + When using Clinics, only displays providers or employees associated with the selected clinic.
    - If a provider or user attached to an employee is assigned to multiple clinics, they are listed for any accessible clinic.
    - If an employee is not assigned to a [User](securityusers.html), they are only displayed when *Headquarters* is selected.
  + Double-click a provider or employee to immediately update the Schedule grid to show only their schedule .
* **Clear Week**: Delete all schedule entries for the selected providers and employees, for the selected week.
  + To clear multiple weeks, users can also go to a blank week, copy it, and then repeat it. Ensure *Replace Existing* is checked (for example repeat it for 20 weeks to clear 20 weeks.)
* **Week Filter**: Choose which days of the week are currently displayed on the schedule and copied to the clipboard.
  + Work Week: Display only weekdays (Monday - Friday)
  + Full Week: Display entire week (Monday - Sunday)
  + Weekend: Display only weekends (Saturday and Sunday)

## Copy / Paste Schedule

Use the Copy / Paste areas to quickly create or edit the schedule.

![](images/schedulecopypaste.png)

Copy: Copy a day or week's schedule to the clipboard. This tool is useful (with Paste/Repeat below) to quickly fill the schedule.

* **Clipboard Contents**: Indicates the current date range copied to the clipboard that will be pasted/repeated.
* **Copy Day**: Highlight a day on the schedule and click to copy the currently selected providers/employees schedules to the clipboard.
* **Copy Week / Copy Weekend**: Highlight a day on the schedule and click to copy the currently selected provider/employee schedules to the clipboard.
  + If the Week Filter is set to Work Week or Full Week, shows Copy Week.
  + If the Week Filter is set to Weekend, shows Copy Weekend.
  + All the days of the calendar week corresponding with the *Week Filter* are copied (e.g., if set to Work Week, copies Monday-Friday).

Paste: Paste the clipboard contents schedule to additional days or weeks.

* **Warn on Provider Overlap**: Check to receive a warning when provider schedules overlap in assigned operatories when clicking Paste or Repeat.
* **Replace Existing**: Check this box to overwrite any existing schedules when a user clicks Paste or Repeat. There is a warning indicating the number of providers whose schedule will be replaced.
* Click **Paste** to insert the clipboard contents into the currently selected day or week.
* Enter a number and click **Repeat** to insert the copied schedule, starting at the currently selected date, for a specified number of days or weeks. If the clipboard contents contain a single day, the number corresponds to days. If the clipboard contents contain a week's schedule, the number corresponds to weeks.

Note:

* When using Clinics, the schedule for all Clinics is copied, regardless of the clinic selected in Filters.
* Days marked as a holiday are not replaced when pasting/repeating a schedule. To enter a schedule for these days, it must be done manually from Edit Day.
* See the Examples section of [Schedule Edit](scheduleeditdaywindow.html) for further instructions on setting up various schedules.

## Print Schedule

Click **Print** to send a copy of the schedule displayed in the grid to the default printer.