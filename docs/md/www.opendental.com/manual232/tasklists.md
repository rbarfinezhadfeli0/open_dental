Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Task List and Inbox

Task lists are a way to organize tasks and reminders.

In the [Tasks](tasks.html) area, in the Main tab, click **Add Task List**.

![](images/taskListEdit.png)

* Alternatively, open a task list and click **Add Task List** to create a sub-task list within a main task list.
* To edit an existing task list, right-click the list and select **Edit Properties**.

A task list can have nested task lists or tasks within it, much like the folder/file concept. A user's inbox is also considered a task list.

* **Description**: Enter the task list name.
* **Object Type**: Select whether to attach patients or appointments to tasks in this list.
  + Patient: Task lists with this type selected will be listed automatically when users select **Tasks** from the Main Toolbar. This should be selected when setting up an inbox.
  + Appointment: Task lists with this type will be listed automatically when users click **To Task List** in the [Edit Appointment](aptedit.html) window.
* **Global Filter Override**: Only available when *Global Filter for Task Lists* is enabled.
  + Default: This task list will automatically use the filtering option selected in [Tasks Preferences](tasksetup.html).
  + None: This task list will not automatically filter. This overrides the selection set in Task Preferences.
  + Clinic: This task list will automatically filter by the selected clinic. This overrides the selection set in Task Preferences.
  + Region: This task list will automatically filter by region. This overrides the selection set in Task Preferences.

The following options are only visible when [Repeating Task Lists (Legacy)](tasklistrepeating.html) are enabled.

* **Date**: Leave blank except to show all tasks added to this list on a dated list.
* **Date Type**: Normally set to none.
* **Is From Repeating**: Normally leave unchecked.

## Set up a User Inbox

A User Inbox is a task list that contains tasks sent directly to a specific user when a user clicks **Send To** or **Reply**.

For each inbox, create a task list for the user and select *Patient* as the task list's Object Type.

In the [Main Menu](mainmenu.html), click Setup, Tasks, Inbox Setup.
![](images/taskInboxSetup.png)

Current users appear on the left. All existing task lists appear on the right. To add or edit users, see [User Edit](securityusers.html).

To set an inbox, highlight the user on the left, then the associated task list on the right, and click **Set**.

Have each user log in and subscribe to their inbox. See [Tasks Area](tasksarea.html) for details on finding and subscribing to a list.