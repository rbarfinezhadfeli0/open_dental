Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.4 +v24.3v24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Task Window

The Task window shows task details and allows user to add notes and make edits.

In the [Tasks Area](tasksarea.html), click **Add Task**.

![](images/taskWindow.png)

Alternatively,

* Click **Tasks** from the [Main Toolbar](toolbar.html) and select a Task List.
* Click **New Task** from the [Task Search](tasksearch.html).

See [Tasks Workflow](tasksworkflow.html) for details on creating and sending tasks.

## Date and Status

![](images/taskWindowDate.png)

**New**: The read status of a task. Uncheck to mark a Task as read. When checked, task appears in the *New For* tab of the [Tasks Area](tasksarea.html) if the logged-on user is subscribed to the corresponding Task List.

* This box is unchecked by default when a receiving a Task Popup.
* When opening an unread Task from a Task List, the box remains checked.

**Done**: Complete and close a Task.

* Editing or sending a completed Task to another Task List automatically removes the Done status.
* Hides the task from the Task List by default. To view completed Tasks, check *Show Finished Tasks* in Tasks, Options.
* Set the color of completed tasks in [Chart Module](chart.html), Progress Notes from [Definitions: Prog Note Colors](definitionsprognotecolors.html).

**Date/Time Created**: Auto-populates with the date and time the Task is created. For security purposes, this cannot be edited.

**Date/Time Task**: Typically the same as Date/Time Created. Click Now to enter the current date/time or manually edit to a specific date/time. This field affects the order of the Task in the Task List.

**Date/Time Finished**: Auto-populates with the date and time the Task was marked done or set complete. Click Now to enter the current/date time (does not mark done).

## Reminder Setup

![](images/taskWindowReminder.png)

Set up the task to appear at a specific time. See [Task Reminder](taskreminders.html) for detailed instructions. If the *Type* is set to NoReminder, the task is sent and appears immediately.

## User, Task List, and Priority

![](images/taskWindowUser.png)

**From User**: Displays the user that created the Task. To change the user, click **[...]** and select a new user from the list. The user can only be changed once the Task is saved (i.e., Create the Task, click **OK**, then return to the Task to change the user). If changed, the original user is no longer be able to see edits to the Task unless the user is subscribed to the Task List the Task is sent to.

**Task List**: Auto-populates with the name of the Task List the Task is currently in or being sent to. To change, click **Send To** (see below).

**Task Priority**: Assign a priority to the Task. Tasks are sorted by the New status, Task Priority, then date and time. Add or edit priority types in [Definitions: Task Priorities](definitionstaskpriorities.html).

## Description

![](images/taskWindowDescriptions.png)

**Description**: Type the Task text or details. [Right-Click](rightclicktextboxes.html) the text box for additional options. To change the height of the description box, move the splitter bar between the Description text box and Notes grid and drag to the desired height.

* Use [Quick Paste Notes](quickpastenotessetup.html) to quickly add frequently used notes. Enter the quick note shortcut or right-click and select *Insert Quick Note*. The quick note must be in a quick note category assigned to Tasks to work.

**Edit Auto Note**: Click to resume filling out a previously started Auto Note.

**Auto Note**: Insert an [Auto Note](autonotes.html) template to the Task description.

**Short Descript**: Type a brief description of the Task. This displays in the Task List or Tasks Area instead of the full description. Users can double-click to view the entire Task.

Only users with the *Task Edit* [Security Permission](permissions.html) can edit descriptions on an existing task.

## Notes

![](images/taskWindowNotes.png)

**Notes**: Comments and notes added by users. Double-click a note to make changes. User must have *Task Note Edit* security permissions.

* Date Time: Time stamp of when the note was created.
* User: Name of the user that added a note.
* Note: Note text added by the user.

**Add**: Opens the Task Note Edit window to add comments and notes to the Task.
![](images/taskNoteEdit.png)

* Date/Time: Auto-populates with the date and time the note is created. This is read-only when adding a new Task Note. It can be edited on existing notes.
* User: Name of the user adding the note.
* Note: Text to appear on the task. Also support wiki links, quick notes, web URLs, and Auto Notes. See the subsequent Navigating Tasks section below for additional details. [Right-Click](rightclicktextboxes.html) the text box for additional options.
* Delete: Removes entire note from Task. Only enabled for users with the *Task Delete* permission
* Click **Save** to add the note or keep changes. On existing task notes, this is only enabled for users with the *Task Note Edit* permission.

Note: Users can link URLs, tasks, patients, etc. to the Description and Task Notes. See the subsequent [Task](tasks.html) Navigating section for additional information.

## Attachments

The Attachments area indicate the names of any attachments added to the Task. The current number of attachments added to the task is indicated in parentheses.

![](images/taskWindowAttachments.png)

Click the **Attachments** button to open [Task Attachments](taskattachments.html) to view or add attachments.

## Additional Task Details and Options

See and edit additional task information at the bottom of the task window.

![](images/taskWindowAdditionalOptions.png)

**Copy**: Copies the Task number, date/time stamps, patient name and appointment date/time (if attached), Description, notes, and associated users to the clipboard.

**Object Type**: Attach a Task to an appointment or patient. Attached patient related tasks to an appointment or patient to quickly access the patient or jump to the appointment.

* None: Task is not attached to an appointment or patient. Tasks with object type *None* are not tracked in the Open Tasks tab.
* Patient: Task is attached to a patient and shows in the patient's progress notes and Patient Tasks tab. Patient name displays as last name, preferred name (if any), first name, and Patient Number (PatNum).
* Appointment: Task is attached to an appointment.

**Change**: Change attached patient or appointment. Only available if the object type is set to Patient or Appointment.

* When Object Type is set to *Patient*: Opens [Select Patient](patientselect.html). Double-click the patient to attach to the task. Only one patient can be attached.
* When the object type is set to *Appointment*, opens the Select Patient window. Once a patient is selected, [Patient Appointments](apptspatient.html) opens. Double-click an appointment to attach. Only one appointment can be attached.

**Go To**: Exits the Task window and changes the currently selected patient to the patient attached to the Task. When the object type is Appointment, the active modules changes to [Appointments Module](appointments.html) and jumps to the date of the appointment in the calendar.

**TaskNum**: Displays the internal number associated with the Task. Useful when using [Task Search](tasksearch.html).

## Task History

Click **History** to open Task History. A summary of Task changes is displayed. Only available when the user has the *TaskEdit* permission.
![](images/taskHistory.png)

* Create Date: Time stamp of when the task was originally created. Matches the Date/Time Created.
* Edit Date: Time stamp of when a change was made.
* Editing User: User who made the change.
* Changes: Details about the task change.

## Sending and Deleting

![](images/taskWindowSendOptions.png)

**Delete**: Only enabled for users with *Task Delete* permission. Deletes the task and any Task Notes. An [Audit Trail](audittrail.html) entry is created but the task cannot be retrieved once deleted.

**Reply**: Opens the Task Edit Note window to add a note.

* Click **Save** to add the note and immediately send the task back to the inbox of the user attached to the most recent note or the task *From User* if no notes have been added.
* Only displays for existing tasks in a specific Task List (i.e., not listed directly in the Main tab of the Tasks area) when the logged-in user did not create the most recent note.

**Send To**: Moves the Task to the selected Task List. Click to open the Select Task List window. Type the Task List name in the Search field or select from the available Task Lists then double-click or click OK to move the Task.

* For Tasks with Object Type *Patient* or  *Appointment*, Task Lists with the same Object Type as the Task are shown by default.
* For Tasks with Object Type *None*, only Tasks List Inboxes are shown by default.
* Check *Show all task lists* to view Task Lists for all Object Types.

**Save**: For a new task, creates the task and sends it to the specified Task List. For existing tasks, closes the task window and keeps changes. Does not affect changes to Task Notes.

## Navigating Tasks

The task Description and Task Notes can include navigation to outside sources or places within the program. Right-click in the Description or a Task Note to navigate.

![](images/taskRightClick.png)

* **File Explorer**: Opens a folder in the File Explorer.
  + If navigating to a folder, a UNC path must end with a backslash (e.g., **\\Server\OpenDentalExports\**).
  + If navigating to a file, a UNC path must end with the file name/extension (e.g., **\\Server\OpenDentalExports\File.txt**)
  + If a folder name contains punctuation or special characters, the folder may not open.
* **PatNum**: Select a patient in Open Dental. Enter the Patient Number (found in [Edit Patient Information](patientedit.html)) immediately after the colon (e.g., *patnum:234*).
* **TaskNum**: Open a specific task in a new window. Enter the TaskNum (found in the Task window) immediately after the colon (e.g., *tasknum:789).*
* **Web**: Open a URL using the computer's default web browser.
* **Wiki**: Open the corresponding wiki page. Enter the page name in two brackets (e.g., *[[page name]]*). *Detect wiki links in textboxes and grids* must be enabled in [Wiki](wiki.html) Setup.