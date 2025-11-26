Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Manage Time Cards

Print and manage all employee time cards from the Manage Time Cards window.

In the [Time Clock](timeclock.html), click **Manage** to view all employee time cards at once.

![](images/timeCardManage.png)

Time card management is only available to users with the *Edit All Timecards* [Permission](permissions.html). Calculations correspond with ADP format requirements for offices that use ADP Workforce Now for payroll.

Note: ADP Run does not accept the format used by ADP Workforce Now.

Related links

* [Time Card Setup](timecardsetup.html)
* ![](images/YouTube_PlayButton_15px.png) See our videos: [Time Cards Webinar](https://youtu.be/IvXTWCr7CNM).

**Setup**: Access [Time Card Setup](timecardsetup.html).

**Reports**: Click the dropdown to run payroll reports.

* **Print Grid**: Print the Employee Time Cards grid.
* **Export Grid**: Click to export the Employee Time Cards grid as a .txt file to. Users will be prompted to select a folder to export to. When the export is complete, a message indicate the file name and location.
* **Export ADP**: Click to export the time card data in ADP Workforce Now format (.csv file). Users will be prompted to select a folder to export to. If any errors are detected, a notification will appear. When the export is complete, a message indicate the file name and location. To include the employee name when exporting, enable the [Preference](preferences.html), *ADP export includes employee name*.
* **Export ADP Run**: Click to export the time card data in ADP Run format (.csv file). Users will be prompted to select a folder to export to. If any errors are detected, a notification will appear. When the export is complete, a message indicate the file name and location. Requires *ADPRunIID* entered in [Time Card Setup](timecardsetup.html).

**Pay Period**: Click the right/left arrows to move back or forward a pay period. The Start, End, and Paycheck dates will automatically change to reflect the pay period of the Employee Time Cards grid.

**Clinic**: If using Clinics, select the clinic to manage time cards for. The logged-on user can only manage time cards for clinics they have access to. The default is determined by the clinic selected in the main menu, Clinics. All employees who have clock events for the selected clinic will list.

**Employee Time Cards grid**: Each row represents an employee's time card for the pay period. Employees are listed in alphabetical order by last name. Only employees who have at least one clock in/out event during the pay period will list. Adjustments alone do not cause an employee's time card to show.

* **Total Hrs**: Total number of hours worked (regular, overtime, and differential).
* **Rate 1**: The number of regular hours worked.
* **Rate 1 OT**: The number of regular overtime hours worked.
* **Rate 2**: The number of regular differential (Rate 2) hours worked.
* **Rate 2 OT**: The number of overtime differential (Rate 2) hours worked.
* **Rate 3**: The number of regular weekend (Rate 3) hours worked.
* **Rate 3 OT**: The number of overtime weekend (Rate 3) hours worked.
* **PTO**: The number of hours for paid time off added as an adjustment with a PTO Type selected.
* **PL Hours**: The number of hours marked as *Protected Leave*.
* **Notes**: Note from the Pay Period section of the employee's [Time Card](timeclockedit.html). Does not show any individual Clock Event notes.

**Clear Manual Adjusts**: Clear any manually entered adjustments made to a clock event for selected employees.

Calculations: Use the buttons to calculate total hours worked, overtime, and differentials, based on any rules (see Time Card Setup) created. Take note of any clock event notes and any errors that need to be fixed before running calculations. See Calculate Daily and Weekly Totals section below for additional information.

* **Daily**: Calculate total hours worked each day for all employees, taking into account rules for overtime, differential hours, and your preference for breaks over 30 minutes. Adjustments will be made within a clock event; new rows will not be created. The current day will be excluded if it falls within the pay period being calculated.
* **Weekly**: Calculate overtime for all employees (more than 40 hours in a week).

**Print All**: Print all time cards at once.

**Print Selected**: Only print time cards for selected employees. Press Ctrl + click to select multiple employees.

Note: Time card notes may be limited when printing. Pay period notes will only print two lines (approximately 190 characters). Clock event notes will only print one line (approximately 25 characters).

## Other Time Card Options

Time card related settings can be found in the following places:

* Determine permissions and settings for Time Cards in [Security](security.html).
* See [Time Card Setup](timecardsetup.html) for managing pay periods, overtime, differential, and time format.
* Change time card calculation in Preferences.

## Add Adjustments to a Time Card

Manually enter adjustments to account for other hours, additional overtime, etc. These adjustments create a separate row in the time card.

On the Employee Timecard, click **Add Adjustment** or double-click an existing adjustment to edit.

![](images/timeCardAdj.png)

* **Automatically Entered**: Indicates this adjustment was automatically entered.
* **Manually entered**: Indicates this adjustment was entered manually and protects this adjustment from being deleted from auto deletion.
* **Date/Time Entry**: Verify the date and time the adjustment is being entered. Defaults to today's date and the current time. Date/time determines the sort order of the adjustment on the time card.
  + If manually changing the time to midnight, the time will automatically reset 12:01.
* **Hours**: Enter the number of hours to add to the time card. If removing hours, enter a negative number. Enter 0 if adding a note.
* **Overtime Adjustment**: Check this box when this is an adjustment to account for overtime. Calculations totals will deduct the entered hours from regular time and transfer to overtime. Cannot be checked if a PTO Type has been selected below.
* **Protected Leave**: Marks the adjustment hours are protected. Protected leave hours are kept separate from all calculations for hours worked and payable hours, so they don't contribute to overtime calculations or any columns that sum total hours.
* **PTO Type**: Select a PTO Adjustment Type if it applies to this adjustment. Add PTO types from [Definitions: Time Card Adj Types](definitionstimecardadjtypes.html).
* **User**: The user who originally created the adjustment.
* **Note**: Enter any notes about the adjustment.

Click **OK** to save.

Note: Adjustments add to overtime when the total hours is over 40 per week.
 For example, if an employee worked 38 hours, and a user adds an 8 hour adjustment to that week, clicking *Calc Weekly* will calculate 40 regular hours and 6 overtime hours.

## Calculate Daily and Weekly Totals

At the end of each pay period, calculate regular and overtime hours. Calculations can be run for all employees at once or per time card.

1. Check employee time cards for errors (e.g. no missing clock-in/out events). Add any manual adjustments. Correct any time card errors. See [Time Card Edit](timeclockedit.html).
2. Calculate total hours worked each day, taking into account rules for overtime, differential hours, and the preference for breaks over 30 minutes. Adjustments will be made within a clock event; new rows will not be created.
   * To calculate for all employees, click **Daily**.
   * To calculate for a single employee, click **Calc Daily** on their time card. If the results are not as anticipated or not the the user's liking, edit the rules in Time Card Setup and run it again. Alternatively, overrides can be made to individual clock events.
3. Calculate weekly overtime for employees who worked more than 40 hours in a week. Determine the start of the week in [Preferences](preferences.html),  *Time Card first day of week for overtime*.
   * To calculate for all employees, click **Weekly**.
   * To calculate for a single employee, click **Calc Week OT** on their time card. If the total hours for an employee in a week is over 40, an additional adjustment row will be added for overtime hours. The weekly calculation will cross pay periods.

Calculations are completed only if an employee is clocked out. If calculations cannot be made a note is added to the employee denoting the date and clock event error (e.g., *the employee did not clock out*). If using Clinics, total hours and overtime hours are assigned by Clinic.

## Hour Calculation Logic

The math behind time card hour calculations is explained below.

Total hours = all hours worked (includes regular, overtime and differential (Rate 2) hours.

OT hours = overtime hours

Rate 1 hours = hours paid at the regular rate

Rate 2 hours = hours paid at the differential rate

Rate 3 hours = hours paid at the weekend rate

Rate 1 hours = (1 - (Rate 2 + Rate 3)/Total hours) \* Regular hours

Rate 2 hours = (Rate 2/Total hours) \* Regular hours

Rate 3 hours = (Rate 3/Total hours) \* Regular hours

So Rate 1 hours + Rate 2 hours + Rate 3 Hours = Regular hours

Rate 1 OT hours = (1 - (Rate 2 + Rate 3)/Total hours) \* OT hours

Rate 2 OT hours = (1 - (Rate 1 + Rate 3)/Total hours) \* OT hours

Rate 3 OT Hours = Total hours - (Rate 1 + Rate 2 + Rate 3 + Rate 1 OT + Rate 2 OT hours)