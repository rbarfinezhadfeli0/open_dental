Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Tasks Preferences

Task preferences lets users customize global task settings, local computer default settings, and set up task inboxes.

In the [Main Menu](mainmenu.html), click Setup, [Tasks](tasks.html).

![](images/tasksetupnew.png)

## Global settings

**Inbox Setup**: Set up user inboxes. See [Task List and Inbox](tasklists.html).

**Show legacy repeating tasks**: This is checked by default if repeating tasks existed prior to updating to 16.3. Otherwise the box is unchecked by default. See [Repeating Task Lists (Legacy)](tasklistrepeating.html).

* Checked: The repeating task list tabs will show in the Tasks Area. Checking this box will disable reminder tasks.
* Unchecked: Repeating task lists do not show.

**Always show task list**

* Checked: The Tasks area will be docked at the bottom or to the right of the screen in all modules. The Local Computer Default Settings will be enabled.
* Unchecked: The Tasks area can only be accessed via the Manage Module, Tasks.

**New/Viewed status tracked by individual user**

* Checked: Users can independently mark tasks as viewed/not viewed without affecting others. This is useful when task lists are used heavily. For user inboxes, the new message count applies to the user the inbox is assigned to, not the currently logged on user. For all other task lists, the new message count applies to the currently logged on user only.
* Unchecked: The new/viewed status will be the same for everyone.

**Show open tasks for user**

* Checked: The Open Tasks tab will show in the Tasks area.
* Unchecked: The Open Tasks tab will not show in the Tasks area.

**Default to sorting appointment type task lists by AptDate Time:** Set the sort order for Tasks Lists that have an object type of *appointment*. To change this setting for the current user only see Tasks, Options button.

* Checked: Task lists that have an appointment Object Type will sort tasks first by the attached appointment's date and time, then by all other object types.
* Unchecked: Tasks lists that have an appointment Object Type will sort tasks by the task creation date and time.

**Global Filter for Task Lists**: Only available when [Clinics](clinics.html) are enabled. Allows users to filter the task list by the clinic associated with the patient or appointment on the task.

* Disabled: Do not enable task filtering.
* None: Enable task list filtering but do not automatically filter.
* Clinic: Enable task list filtering and default to filter by the selected clinic.
* Region: Enable task list filtering and default to filter by region. See [Definitions: Regions](definitionsregions.html). A region must be assigned to each [Clinic](cliniceditwindow.html).

**Image category folder for attachments**: Select which Image Category task attachments save to. Options only include Image Categories marked as *Task Attachments*. To add a folder, see [Definitions: Image Categories](definitionsimagecat.html). For details on adding a task attachment, see [Task Attachments](taskattachments.html).

## Local computer default settings

These options will affect the current workstation only.

**Don't show on this computer**

* Checked: Tasks lists will not show on this computer.
* Unchecked: Tasks lists will show based on the global setting for Always show task list.

**Dock Right / Dock Bottom**: Determines where the Tasks area is docked when set to show in all modules.

* Dock Right: The Tasks area will be docked on the right side of the screen. Enter an X Default value to set the default location of the vertical splitter.
* Dock Bottom: The Tasks area will be docked across the bottom of the window. Enter a Y Default value to set the default location of the horizontal splitter.