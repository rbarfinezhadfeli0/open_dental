Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Tasks Preferences

Task Preferences allow users to customize global Task settings, local computer default settings, and set up Task inboxes.

In the [Main Menu](mainmenu.html), click Setup, [Tasks](tasks.html).

![](images/tasksetupnew.png)

## Global settings

**Inbox Setup**: Set up user inboxes. See [Task List](tasklists.html).

**Show legacy repeating tasks**: This is checked by default if [Repeating Task Lists (Legacy)](tasklistrepeating.html) existed prior to updating to 16.3. Otherwise the box is unchecked by default.

* Enabled: Repeating Task List tabs are displayed in the Tasks Area. Checking this box disables reminder Tasks.
* Disabled: Repeating task lists do not show.

**Always show task list**

* Enabled: The Tasks Area is be docked at the bottom or to the right of the screen in all modules. The *Local Computer Default Settings* are enabled.
* Disabled: The Tasks area can only be accessed via the Manage Module, Tasks.

**New/Viewed status tracked by individual user**

* Enabled: Users can independently mark Tasks as viewed/not viewed without affecting others. This is useful when task lists are used heavily. For user inboxes, the new message count applies to the user the inbox is assigned to, not the currently logged on user. For all other Task Lists, the new message count applies to the currently logged on user only.
* Disabled: The new/viewed status is the same for all users.

**Show open tasks for user**

* Enabled: The Open Tasks tab is displayed in the Tasks Area.
* Disabled: The Open Tasks tab is not displayed in the Tasks Area.

**Default to sorting appointment type task lists by AptDate Time:** Set the sort order for Tasks Lists that have an object type of *appointment*. To change this setting for the current user only see Tasks, Options button.

* Enabled: Task Lists that have an appointment Object Type are sorted Tasks first by the attached appointment's date and time, then by all other object types.
* Disabled: Tasks Lists that have an appointment Object Type are sortedTasks by the Task *Date/Time Created*.

**Default Filter for Tasks in Lists**: Only available when [Clinics](clinics.html) are enabled. Allows users to filter the Task List by the clinic associated with the patient or appointment on the Task.

* Disabled: Do not enable Task filtering. Task Filter button is not shown in the [Tasks Area](tasksarea.html).
* None: Show Task Filter button in Tasks Area, but do not automatically filter.
* Clinic: Enable Task Filter options and default to filter by the clinic selected in Main Menu.
* Region: Enable Task Filter options and default to filter by the Region assigned to the [Clinic](clinics.html) selected in Main Menu.

Note: If a Task is attached to an appointment, it is filtered by the clinic assigned to the appointment. If the Task is assigned to a patient, it is filtered by the patient's clinic. If the Object Type is *None*, the Task is not filtered.

**Allow multiple Tasks attached to one Appointment**

* Enabled: Only one task can be attached to an [Appointment](aptedit.html).
* Disabled: Multiple tasks can be attached to an appointment.

**Image category folder for attachments**: Select which Image Category task attachments save to. Options only include Image Categories marked as *Task Attachments*. To add a folder, see [Definitions: Image Categories](definitionsimagecat.html). For details on adding a Task attachment, see [Task Attachments](taskattachments.html).

## Local computer default settings

These options affect the current workstation only.

**Don't show on this computer**

* Checked: Tasks Lists are not shown on this computer.
* Unchecked: Tasks Lists are shown based on the global setting for *Always show task list*.

**Dock Right / Dock Bottom**: Determines where the Tasks Area is docked when set to show in all modules.

* Dock Right: The Tasks Area is docked on the right side of the main Open Dental window. Enter an X Default value to set the default location of the vertical splitter.
* Dock Bottom: The Tasks Area is docked across the bottom of the main Open Dental window. Enter a Y Default value to set the default location of the horizontal splitter.