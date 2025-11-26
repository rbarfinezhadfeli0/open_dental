Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Time Card Setup

Define pay periods, set default time card options, enter ADP company codes, and set up rule for clock in time, overtime, and differential hours from Time Card Setup.

In the [Main Menu](mainmenu.html), click Setup, Manage, Time Cards.

![](images/timecardSetup.png)

Alternatively, from [Manage Time Cards](timecardmanage.html), click Setup.

Pay periods must exist for the current date in order for employees to use the [Time Clock](timeclock.html).

## Pay Periods

On the left, is a section listing recent and currently active pay periods. The current pay period is highlighted in blue in the grid.

**Hide pay periods older than 6 months**: Checked by default. Determines which pay periods show in the Pay Periods grid.

* Checked: Hides all pay periods older than six months from today's date, based on the pay period's start date.
* Unchecked: Shows all pay periods regardless of age.

**Pay Periods**: This grid shows pay periods that have been created. Double-click an existing pay period to edit. The Edit Pay Period window (see below) will open.

**Add One**: Click to generate a single pay period. The Edit Pay Period window will open.
![](images/payPeriodEdit.png)

* **Start Date**: Enter the date the pay period begins. This should not overlap with other pay periods.
* **End Date**: Enter the date the pay period period ends. This should not overlap with other pay periods.
* **Paycheck Date**: Enter the date employee paychecks will be issued after the pay period is complete.
* **Delete**: Click to remove this pay period.
* Click **OK** to add the pay period or any changes.

**Generate Many**: Click to create several pay periods at once. The Pay Period Manager will open.

![](images/payPeriodManager.png)

* **Start Date**: Select the first pay period that will be generated. The default is today's date unless a pay period already exists for today. In that case, the start date will default to one day after the last pay period's end date.
* **Interval**: Select the frequency and number of pay periods to generate.
  + Weekly: Pay periods will last 7 days.
  + Monthly (default): Pay periods will last one month.
  + Bi-Weekly: Pay periods will last 14 days.
  + Semi-Monthly: Pay periods will happen twice a month based on Semi-Monthly Settings below.
    - If using *ADP Run*, Semi-Monthly is not currently supported.
  + # Pay Periods to Generate: Type the total number of pay periods to create based on the interval selected above.
* **Semi-Monthly Settings**: Enter additional pay period settings if *Semi-Monthly* is the selected Interval.
  + Period 1 Day: Enter the day of the month used for the first pay period of the month.
    - When *End Date* is selected, this is the day the pay period ends on.
    - When *Pay Date* is selected, this is the paycheck date for the pay period.
  + Period 2 Day: Enter the day of the month used for the second pay period of the month.
    - When *End Date* is selected, this is the day the pay period ends.
    - When *Pay Date* is selected, this is the *Paycheck Date* for the pay period.
  + End Date: Select to set Period Days as the pay period End Date, and use *# Days After Pay Period* setting to determine Paycheck Date.
  + Pay Date: Select to use the Period Days as the the Paycheck Date.
  + Last Day: Select the last day of the month for the second pay period. When checked, Period 2 Day is disabled.
* **Pay Day**: Select the method of determining Paycheck Dates (i.e., the day the employees are paid). There are two options.
  + Day of Week: Set the pay day to a specified day of the week. Only available under certain conditions. Click the dropdown to select a day of week.
    - To enable this option:
      * Use any interval other than Semi-Monthly.
      * Set the # Days After Pay Period to 0.The paycheck date will be the first instance of the day after the end date (e.g., the first Tuesday, Monday, etc. after the pay period end date).
  + # Days After Pay Period: Set the paycheck date to a specific number of days after the end date.
    - **Exclude Weekends**: Check to force the paycheck date to a weekday. This will change the paycheck date even if using Semi-Monthly and setting the Pay Date if the Pay Date falls on a weekend (i.e., Saturday or Sunday). This may also affect the Start and End Dates of the Pay Period. Paycheck dates can be updated manually as needed by double-clicking a generated pay period. If checked, choose to **Pay Before Weekend** or **Pay After Weekend**.
In the screenshot above, employees will be paid five days after the pay period end date, as long as it doesn't fall on a weekend. If it does, employees will be paid on the Friday before.* **Generate**: After setting pay period criteria, click to create pay periods.
* **Pay Periods Grid**: Lists all newly generated pay periods.
* Click **OK** to save generated pay periods.

## Rules

On the right side is the Rules grid. Automated time card rules are used for clock-in time, overtime, and differential hours in an employee time card. For example, the most common rule calculates overtime for all employees who work more than 8 hours a day. Rules can apply to all or individual employees.

**Rules Grid**: Displays existing time card rules. Times are indicated in a 24-hour format (e.g., 5:00 PM is 17:00). Double-click an existing time card rule to edit. The Time Card Rule Edit window (see below) will open.

* Employee: Name of employee the time card rule applies to. *All Employees* indicates rule applies to anyone using the Time Clock.
* Rate 2 before x Time: Indicates employee receives their differential rate if clocked in before this time.
* Rate 2 after x Time: Indicates employee receives their differential rate if clocked in after this time.
* OT after x Hours: Indicates the number of hours an employee works in a day before overtime is calculated.
* Min Clock In Time: Indicates the earliest time the employee is allowed to clock in.
* Is OT Exempt: Indicates if an employee is exempt from overtime calculations.
* Has Weekend Rate 3: Indicates if employee is eligible for weekend rate.

**Add**: Click to add a new time card rule. The Time Card Rule Edit window will open.

![](images/timeCardRule.png)

Times can be entered in AM/PM or 24-hour format.

* **Overtime if over Hours Per Day**: Enter the number of hours an employee can work per day before overtime is calculated.
* **Rate2 Hours**: Enter the time that will be used to determine differential hours. These fields are in 24 hour format.
  + **Before Time of Day**: Enter a time to indicate hours worked before this time will be marked differential. Click **6 AM** to insert 6:00 AM as the differential time.
  + **After Time of Day**: Enter a time to indicate hours worked after this time will be marked differential. Click **5 PM** to insert 5:00 PM.
* **Use Rate3 for Weekend Hours**: Check to mark employees as eligible for the weekend hours rate.
* **Is Overtime Exempt**: Check to mark employee as exempt from overtime calculations.
* **Earliest Clock in Time**: Enter the earliest time an employee is allowed to clock in. Attempts to clock in before this time will trigger an alert indicating when the employee will be allowed to clock in.
* **Employee**: Select the employee(s) to apply the rule. Select *All Employees* to apply the rule to everyone. Ctrl + click to select multiple employees. If using clinics, *Headquarters* must be selected to see individual employees.
  + Each employee can only have one of each rule type that applies to them (one overtime rule and one AM/PM differential rule).
  + If multiple rules of the same type apply to an employee, users will receive errors when attempting to close Time Card Setup or calculating.
  + If multiple employees are selected, a rule will be created for each individual employee. If *All Employees* is selected, one rule will be created.
* **Delete**: Click to remove the time card rule. This rule will no longer apply when running time card calculations.
* Click **OK** to add the time card rule or save any changes.

## ADP and Options

Additional options are at the bottom of the Time Card Setup window.

**ADPRunIID**: If using ADP Run, input IID as supplied by ADP.

**ADP Company Code**: If using ADP Workforce Now for payroll, enter the practice's company code as supplied by ADP. This code will show when a user clicks Export ADP in [Manage Time Cards](timecardmanage.html). To include the employee name when exporting, check the Manage Module Preference, *ADP export includes employee name*.

**Options**: Set additional time card options.

* **Use decimal format rather than colon format**: Determines the time format in the time card. Regardless of the option chosen, total regular and overtime hours are displayed in both colon and decimal format.
  + Checked: Display total, daily, and weekly times as a decimal.
  + Unchecked: Display the totals in colon format.
  + Colon format in hours: minutes (e.g., 2:30) equals decimal format of 2.5. To convert back and forth, divide or multiply the last number by 60. 30/60=.5, or .5\*60=30. This works for seconds as well as minutes.
  + Rounding totals: Seconds are not shown in the grid, but are included in the math. A time card that displays minutes rather than decimals may show a total that is greater than if user adds all the times together.
* **Calc Daily button makes adjustments if breaks over 30 minutes**: Determines how break time that exceeds 30 minutes is handled when Daily totals are calculated. This option is ignored if the [Preference](preferences.html), *Allow paid 30 minute breaks* is unchecked.
  + Checked: When a break exceeds 30 minutes, subtract excess time from the time card using an adjustment. Excess time will be unpaid.
  + Unchecked: Include all break time, regardless of length, as paid time.
* **Use seconds on time card when using colon format**: Determines whether seconds show on time cards (colon format only).
  + Check: Display seconds on time cards (e.g., 12:04:11). Useful when precise calculation of employee hours is necessary.
  + Unchecked (default): Only display hours and minutes on time cards (e.g., 12:04).