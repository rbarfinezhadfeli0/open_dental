Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Task Reminder

When using [Tasks](tasks.html), reminders can be used to remind staff of tasks that need to be done daily, weekly, monthly, or yearly.

![](images/taskRemindersTaskList.gif)

The reminder will pop up and show in a user's task list when it is due until it is marked done.

Note: *Show legacy repeating tasks option* must be disabled from [Tasks Preferences](tasksetup.html) for Task Reminders to work correctly.

Task reminders show in three places:

* The user's task list when the reminder is due.
* [Appointments Module](appointments.html), Reminders tab.
* [Tasks area](tasksarea.html), Reminders tab.

## How Task Reminders Work

1. Enable tasks and set up user inboxes and task lists. See [Tasks Preferences](tasksetup.html).
2. Create a task reminder, setting type, date/time and repeat interval.
3. When the reminder is due, it will pop up and appear in the task list. Mark the reminder done to make it disappear until its next due date.
4. When you no longer want the reminder to appear, change the Reminder Type to *NoReminder*.

Additional information:

* All users subscribed to the task list will receive the reminder until it is marked done.
* The time a task reminder appears will be based the *Date/Time Task*. The defaults to the same time as the *Date/Time Created*, but can be changed as needed. For example, a time entry of 3:45 pm will cause a daily reminder to appear at 3:45 pm each day.
* Task Priority determines color. Light orange is the default color for Reminder priority and task reminders. Edit defaults in [Definitions: Task Priorities](definitionstaskpriorities.html).
* Reminder tasks will be turned off if office is using Legacy tasks. See Task Preferences.
* Reminders are tracked in the [Audit Trail](audittrail.html).

## Create a Task Reminder

Examples:

* Daily type, every 1 day, will cause a reminder to appear every day.
* Weekly type, every 2 weeks, F, will cause a reminder to appear every 2 weeks on Friday.
* Yearly type, every 1 year, will cause a reminder to appear every year to the date.

To create a Task Reminder:

1. In the Tasks toolbar, select a [Task List](tasklists.html).
2. Select the Add Task dropdown and click **Reminder**.
   * Alternatively, select a Task List from the Reminders tab, and click **Add Task**.
3. Select the Reminder **Type**.
4. Enter the Reminder details (e.g., Every #, Date, Days etc).
5. Verify the *Date/Time Task*.
6. Select the *Task Priority*.
7. Enter the task *Description*.
8. Verify the *Task List*.
   * If the correct Task List is shown, click **OK** to finish creating the task reminder and send it to the Task List shown.
   * If the correct Task List is not shown (or there is no Task List), click **Send To...**. Select the Task List to send the task reminder and click **OK** to finish creating the task reminder and send it to the selected Task List.

![](images/taskReminders.gif)

**Date/Time Task:** Enter the date/time you want the reminder to first appear. The default is today at the current time. Click Now to inset the current **Date/Time**.

**Type:** Select the a reminder type from the dropdown. Options may change in the Reminder area depending on the reminder type selected. See types below for the available options.

* *NoReminder*: Selected by default for normal tasks. This task is not a reminder.
* *Once*: Selected by default when adding a reminder task using the Add Task, Reminder dropdown or when the Reminders tab is selected. Use the calendar dropdown and time picker to choose a date and time. The reminder will appear once on the selected date and time.
* *Daily*: Select to repeat this reminder each set number of days. Verify the time of the reminder in the Date/Time Task area; the task will repeat based on this date/time.
  + **Every \_\_\_ Day**: Enter a number to indicate frequency. (e.g., *Every 1 Day* will repeat daily, *Every 2 Day* will repeat every other day, etc).
* *Weekly*: Select to repeat the reminder on specific day(s) of the week. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time.
  + **Reminder Every \_\_**: Enter the repeat frequency. For example, Every3days, Every2weeks, Every1year.
  + **Reminder Days:** Only shows for weekly repeat interval. Select the day(s) of the week the reminder should appear:
  - M = Monday
  - T = Tuesday
  - W = Wednesday
  - R = Thursday
  - F = Friday
  - S = Saturday
  - U = Sunday.
* *Monthly*: Select to repeat the reminder each set number of month. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time.
  + **Every \_\_\_ Month**: Enter a number to indicate frequency (e.g., *Every 1 Month* will repeat monthly, *Every 2 Month* will repeat every other month, etc).
* *Yearly*: Select to repeat the reminder on a yearly basis. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time.
  + **Every \_\_\_ Year**: Enter a number to indicate frequency. (e.g., *Every 1 Year* will repeat yearly, *Every 2 Month* will repeat every other year, etc).

**Task Priority:** Select the task priority to organize reminders by importance. The default is Reminder with a color of light orange. Add options in Definitions, Task Priorities.

**Task List**: The Task List currently selected to send the reminder. After entering all Task Reminder details, click **Send To...** to change this Task List if needed. Otherwise, when clicking **OK**, this is the Task List the reminder will be sent to.

**Description:** Enter the text of the reminder.

See [Task Window](taskswindow.html) for additional information on the available fields and options in the Task Window.

## Complete or Remove Task Reminders

To mark a task reminder as complete and remove it temporarily from the list until the next due date, check *Done*. This will create a new reminder task for the next interval date.

To stop a task reminder from repeating, set the repeat interval to *Once* or *NoReminder*.

To permanently remove a task reminder from a task list, delete it.

Note: To view task reminders that have been marked Done, in the Tasks area, click Options, Show Finished Tasks.

## Task Reminder History

A history of task reminders shows under the Reminders tab, grouped by task list.

![](images/taskRemindersTab.gif)

The list includes:

* New/viewed task reminders.
* Task reminders due in the future.
* If Show Finished Tasks is selected, task reminders marked *Done* also show.