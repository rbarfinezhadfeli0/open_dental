Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](../manual243/manual.html) [![](resources/search.gif)

Search](../manual243/searchmanual.html)

Task List

Task Lists are a way to organize tasks and reminders.

In the [Tasks Area](tasksarea.html), in the Main tab, click **Add Task List**.

![](images/taskListEdit.png)

Alternatively,

* To edit an existing task list, right-click the list and select **Edit Properties**.
* To create a nested Task List within another Task List, open an existing Task List in the Tasks Area then click **Add Task List**.

A Task List can have nested Task Lists within it, much like the folder/file concept. Task Lists can also be assigned as [User Inboxes](setuptaskinbox.html).

* **Description**: Enter the Task List name.
* **Object Type**: Select whether to attach patients or appointments to Tasks in this list.
  + Patient: Task Lists with this type selected are listed automatically when users select **Tasks** from the Main Toolbar. This should be selected when setting up an inbox.
  + Appointment: Task Lists with this type are listed automatically when users click **To Task List** in the [Edit Appointment](aptedit.html) window.
* **Filter**: Only available when *Default Filter for Tasks in Lists* is enabled in [Tasks Preferences](tasksetup.html). The option set here overrides the filtering option set in Task Preferences.
  + Default: This Task List automatically uses the filtering option selected in Task Preferences.
  + None: This Task List is not automatically filtered.
  + Clinic: This Task List is automatically filtered by the clinic selected in the Main Menu.
  + Region: This Task List is automatically filtered by the Region assigned to the [Clinic](cliniceditwindow.html) selected in the Main Menu.

Note: If a task is attached to an appointment, it is filtered by the clinic assigned to the appointment. If the task is assigned to a patient, it is filtered by the patient's clinic. If the Object Type is None, the task is not filtered.

The following options are only visible when [Repeating Task Lists (Legacy)](tasklistrepeating.html) are enabled.

* **Date**: Leave blank except to show all tasks added to this list on a dated list.
* **Date Type**: Normally set to none.
* **Is From Repeating**: Normally leave unchecked.