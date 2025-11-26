Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

TimeCard

View and edit clock events, calculate overtime, add adjustments, and print time cards for individual employees from the Time Card window.

In the [Time Clock](timeclock.html) area, select an employee. Click **View Time Card** or **View Breaks**.

![](images/timeCard.png)

Alternatively, in [Time Card Management](timecardmanage.html), double-click an employee.

All users can view their time card and breaks. If users are allowed to edit their time cards they can also edit clock events.

The Pay Period dates are shown at the top. Clock events in the pay period are listed in the grid.

* If a clock event has been altered, it is flagged in red text.
* If time card clock events are missing or not showing, this can be a clue to add more pay periods.
* **Pay Period right/left arrows**: Move back or forward one pay period.
* **Note**: A note specific to the pay period as a whole. This note is not blocked from editing by [Global Security Settings](securitysettings.html) or [Permissions](permissions.html). All users with access to the Manage Module can edit this note at any time.
* **Time Card** or **Breaks** radio button: Switch between full time card view and breaks only view. The Breaks radio button is disabled when *Allow 30 minutes of paid break* is unchecked (off) in Preferences.

Time Card Grid Columns

* **In/Out**: The time the employee clocked in and out. Seconds are included in the math.
* **Total**: The total number of hours for the clock event.
* **Adjust**: Adjustments to hours worked.
  + Includes excess time subtracted from the time card when breaks exceed 30 minutes and *Calc Daily button makes adjustments if breaks over 30 minutes* is checked in Time Card Setup and manual adjustments created using **Add Adjustment** button.
  + Excludes time card adjustments with a *PTO Type* or marked *Protected Leave*.
* **Rate2**: Hours worked that qualify as differential hours. Set up differential hours in [Time Card Setup](timecardsetup.html) under Time Card Rules.
* **Rate3**: Hours worked that qualify as weekend hours. Set up weekend hours in Time Cards Rules.
* **PTO**: The paid time off hours added as an adjustment with a PTO type selected. See [Manage Time Cards](timecardmanage.html).
* **OT**: Hours entered for a time card adjustment with *Overtime Adjustment* checked.
  + Automatically created when using **Calc Daily** or **Calc Week OT**, depending on Time Card Rules. Can also be manually entered.
  + These hours are removed from the *Day* total.
  + May not match the total weekly overtime at the bottom because when the Admin user calculates weekly overtime, the values are not rounded up until the end. The bottom value is more accurate.
  + Overtime number accounts for seconds but rounds to the nearest hundredth.
* **PL**: Number of hours marked as *Protected Leave*.
* **Day**: Total regular hours worked that day. Calculated by Total + Adjust.
* **Week**: Total regular hours worked for the week. Sum of all *Day* hours for the week. Hours display in the weekly column at the start of every day, until the end of the scheduled week.
* **Clinic**: The abbreviation of the selected [Clinic](clinics.html) in the Main Menu when the employee clocked-in.
* **Note**: Enter a note for a clock event, usually when an employee must change the time or type of the clock event.

For users with the *Edit All Time Cards* permission (See [Manage Time Cards](timecardmanage.html)):

* Employee right/left arrows: Scroll to the previous or next employee's time card.
* **Add Adjustments**: Add adjustments rows to the grid for holidays, overtime, etc.
* **Calc Daily**: Calculate daily totals for this employee only. The employee must be clocked out for the day.
* **Calc Week OT**: Calculate weekly overtime (over 40 hours) for this employee only. The employee must be clocked out for the day.

**Print**: Print the selected employee's time card or breaks.

## How Time is Calculated

Total Hours display at the bottom of the time card. The left column shows total time worked rounded to the nearest minute in hours: minutes (colon) format. The right column shows times rounded to the nearest hundredth of an hour in decimal format. See [Time Card Setup](timecardsetup.html) for the difference between colon and decimal format. Time accounts for seconds in the entire pay period, but seconds are rounded up before the time is displayed.

* **Regular Time**: All clocked-in hours, including Rate2 and Rate3, and non-PTO or Protected Leave adjustments (i.e., Total + Adjust for the pay period).
* **Overtime**: Total of all overtime adjustments.
* **Rate2**: Hours worked at differential rate (e.g., before 6am or after 5pm).
* **Rate3**: Hours worked at weekend rate.
* **PTO**: Total hours of adjustments with a PTO Type.
* **Protected Leave**: Total hours of adjustments marked as Protected Leave.

Totals include completed clock events only (i.e., clock events with both a Clock In Date/Time and Clock Out Date/Time).

See [Time Clock](timeclock.html), Clock out section for how breaks are calculated.

## Edit a Clock Event

1. Double-click a row in the **Time Card** grid.
   ![](images/clockEvent.png)
2. Edit the Clock In Date or Time, Clock Out Date and Time, or Out Status as needed. Only the Displayed fields can be edited.
3. (optional) Enter a note to describe the reason for the change.
4. Click **Save** once finished to exit the window and keep changes.

**Time Spans**

* **Clocked Time**: Calculated automatically using displayed clock in and clock out times.
* **Adj**: Added automatically when daily totals are calculated at the end of the pay period. If the option to make adjustments for breaks over 30 minutes is selected in Time Card Setup, a negative adjustment is made when an employee exceeds the allowed 30 minute break time on a given day. An override can be manually entered.
* **Overtime**: If there is an overtime rule for daily hours (e.g. overtime after 8 hours), and an employee meets the criteria, a value is entered. Hours are then transferred from regular time to overtime in calculation totals. An override can be entered manually.
* **Regular time**: The total hours, plus or minus adjustments and over time.

Note: Automatic adjustments are not created until **Calc Daily** or **Calc Weekly OT** tools are run.

**Rate 2 or Rate 3:** Used to determine differential hours based on time card rules.

* **Total Time**: All hours worked (Including regular, overtime, Rate2, and Rate3 hours).
* **Rate 2 Time**: How many of the total hours are Rate 2 hours (differential hours). Can be overridden manually.
* **Rate 3 Time**: How many of the total hours are Rate 3 (weekend hours). Can be overridden manually.
* **Rate 1 Time**: Total Time - Rate 2 Time - Rate 3 Time. Adjusts automatically based on the override amount.

To delete a clock event, users must have the *Time Card Delete Entry* permission.

## Time Card Security

Several permissions affect users' ability to see or edit time cards. Below are common scenarios and how to set up permissions. [Global Security Settings](securitysettings.html) affect all users. [Permissions](permissions.html) set in [User Groups](securityusergroups.html) affect only users assigned to the group.

**All Users Can Clock in For any Employee, see any Time Card, and Edit Their Own Time Card**
 To allow all users access to all employee Time Cards and allow all users to edit their own Time Cards, set the following permissions:
 In Global Security Settings:

* Uncheck *Time card security enabled*.

(*Optional*) To allow users to edit other employees Time Cards, assign the following permissions to their User Group as needed:

* *Edit All Time Cards*: Allows users to edit time card events for all employees. Users without this permission can edit their own time card events.
* *Time Card Delete Entry*: Allows users to delete an entire time card event.
* *Edit Protected Leave Time Card Adjustments*: Allows users to edit Time Cards Adjustments marked Protected Leave. Users without this permission can edit these adjustments on their own Time Card. All users can create new Adjustments.

**Scenario 2 - Users Can Edit Their own Time Cards and Certain Users Can Edit Other Employee Time Cards**
 In Global Security Permissions:

* Check *Time card security enabled*.
* (*Optional*) Check *Users cannot edit their own time card except current pay period*: Allows employees to only edit their Time Card for the current pay period.

(*Optional*) To allow users to edit other employees Time Cards, assign the following permissions to their User Group as needed:

* *Edit All Time Cards*
* *Time Card Delete Entry*
* *Edit Protected Leave Time Card Adjustments*

**Scenario 3 - Users Cannot Edit Their Own Time Cards, but Certain Users Can Edit Other Employee Time Cards**
 In Global Security Permissions:

* Check *Time card security enabled*.
* Check *Users cannot edit their own time card*.

(*Optional*) To allow users to edit other employees Time Cards, assign the following permissions to their User Group as needed:

* *Edit All Time Cards*
* *Time Card Delete Entry*
* *Edit Protected Leave Time Card Adjustments*

## Troubleshooting

**Forgot to clock in for the day.**

1. Clock the employee in upon realizing the mistake. The Clock In time will be wrong.
2. Double-click on the inaccurate clock event.
3. Correct the Clock In date and the time.
4. If the employee has left for the day, clock the employee out.
5. Double-click the inaccurate clock event.
6. Correct the Clock Out date and time.

**Forgot to clock out when leaving for the day.**

1. Clock the employee out upon realizing the mistake. The Clock Out time will be wrong.
2. If the employee is working today, immediately clock back in to begin today's time.
3. Double-click on the inaccurate clock event.
4. Correct the Clock Out date and the time.

**Forgot to clock out to lunch or break.**

1. Clock the employee out for lunch (or break). The Clock Out time will be inaccurate.
2. If the employee has returned from lunch (or break), clock the employee back in.
3. Double-click on the clock event.
4. Correct the Clock In and Clock Out times.

If the employee has not yet returned from lunch (or break), they will clock in as normal.

**Clocked out for lunch and then never came back to work.**

1. The next working day, have the employee clock in as usual.
2. Double-click on the clock out event for the previous day's lunch.
3. Change the status from Lunch to Home.

**When clocking out for break, an employee discovers that someone else accidentally clocked out using their time card. The time card shows the employee has been on break for two hours and time is still ticking.**

Option 1: Delete the clock event (double click on it, then click Delete). Only users with the *Time Card Delete Entry* permission are allowed to do this.

Option 2: When the employee is ready to clock back in, do so. Then, double-click on the first inaccurate clock event and change the Clock In time so that it shows correctly.

**When trying to edit a clock event on my own Time Card, I get a warning that I don't have permission.**

[Global Security Settings](securitysettings.html) may prevent you from editing your own Time Card. Depending on your setup, you may not be allowed to edit your own Time Card at all or may only be allowed to edit it during the current pay period. The message differs depending on if you can edit the current pay period or not.

A user with the *Edit All Time Cards* permission, who is not the same person as the employee whose Time Card needs to be edited, must edit the clock event.

Users with the *Edit All Time Cards* permission can still edit other employees Time Cards.