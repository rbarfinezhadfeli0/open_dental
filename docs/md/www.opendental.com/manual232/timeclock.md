Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Time Clock

Employees can use the time clock to clock in and out of work.

In the [Manage Module](manage.html), at the upper-right, is the Time Clock area.

![](images/timeClock.png)

![](images/YouTube_PlayButton_15px.png) See our webinar: [Time Cards](https://www.youtube.com/playlist?list=PLyjZ9PCVynCnp3kAZYRTmpCvqK-VryAc1).

Before using the time clock, the following tasks must be completed.

1. Add employees. See [Employees](employees.html).
2. Create user profiles for each employee. See [User Edit](securityusers.html).
3. Add pay periods in [Time Card Setup](timecardsetup.html).

## Buttons

**Manage:** Manage employee time cards, calculate daily/weekly totals, and run reports. See [Manage Time Cards](timecardmanage.html). Requires *Edit All Time Cards* [Permission](permissions.html).
**View Time Card:** View or edit the selected employee's [Time Card](timeclockedit.html). Always enabled for the employee associated with the logged-in user. Requires *Edit All Time Cards* for use with other employees.
**View Breaks:** View or edit the selected employee's breaks in the Time Card. Always enabled for the employee associated with the logged-in user. Requires *Edit All Time Cards* for use with other employees.
**View Schedule:** Open [Schedule](scheduleview.html) for the selected employees.

**Server Time**: The server time is used to time stamp all events in the database (commlogs, audit trail, tasks, etc). This time is pulled from the server hosting the Open Dental database. If the time is changed on the server, a restart of the [MySQL](mysql.html) service may be required.

By default, the time displayed is the time of the server. To use a workstation's local time instead, see [Miscellaneous Setup](miscsetup.html).

**Clock In**: Click an employee, then Clock In.
**Clock Out For**: Click an employee, select a status (Home, Lunch, Break), then click Clock Out For.

* **Home**: Use this status when leaving for the day. The clock out time will be recorded on the time card.
* **Lunch**: Use this status when clocking out for an unpaid break. The clock out time will be recorded on the time card.
  + Lunch is hidden when *Allow paid 30 minute breaks* is unchecked in Preferences. Use the Break status to clock out for unpaid breaks instead.
* **Break**: The behavior of this status is determined by the preference, *Allow paid 30 minute breaks*.
  + If paid breaks are allowed, use this status to clock out for paid breaks. The length of the break is tracked in the time card under Breaks. To determine if break time that exceeds 30 minute is considered paid versus unpaid, change the setting in Time Card Setup for *Calc Daily button makes adjustments if breaks over 30 minutes*.
  + If paid breaks are not allowed, use this status to clock out for unpaid breaks. The clock out time will be recorded on the time card.

Note: Users without the *Edit All Time Cards*  Permission see Clock In/Clock Out For enabled for the employee associated with their user only. Users with the *Edit All Time Cards* Permission see the Clock In/Clock Out For enabled for all employees.

## Employee Grid

For an employee to list in the grid, they must be added in the [Employees](employees.html) list.

When using clinics, the clinic selected in the Main Menu determines which employees are listed. When clocking in, this clinic is associated to the clock in event and subsequent clock out events.

**Filter by Name**: Search for an employee to narrow down Employee list. Automatically refreshes while typing.

Status: Displays current status of the employee:

* Home: Employee is clocked out.
* Working: Employee is clocked in.
* Break: Employee is clocked out for break.
* Lunch: Employee is clocked out for lunch.
* Manual Entry: An employee edited the time card so the clock out event happens in the future.