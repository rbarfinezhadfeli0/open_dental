Table of Contents

[Manual](manual.html)

[![Home](resources/logoWhite160.png)](../index.html)

Manual
v24.3 betav24.2v24.1v23.3v23.2v23.1v22.4v22.3v22.2v22.1v21.4v21.3v21.2v21.1v20.5v20.4v20.3v20.2v20.1v19.4v19.3v19.2v19.1v18.4v18.3v18.2v18.1v17.4

[![](resources/home.gif)](manual.html) [![](resources/search.gif)

Search](searchmanual.html)

Task Window

The Task window opens when a Task is created or Task response is received, or double-clicking an existing Task from a Task list.

In the [Main Toolbar](toolbar.html), click the [Task](tasks.html) dropdown, **For user**. In the Tasks window, click **Add Task**.

![](images/taskWindow.png)

**New**: The read status of a Task. Uncheck to mark a Task as read. When checked, Task appears in the *New For* tab of the [Tasks Area](tasksarea.html) if the logged-on user is subscribed to the Task List.

* This box is unchecked by default when a receiving a Task Popup.
* When opening an unread Task from a Task List, the box remains checked.

**Done**: Complete and close a Task.

* Editing or sending a completed Task to another Task List automatically removes the Done status.
* Hides the task from the Task List by default. To view completed Tasks, check *Show Finished Tasks* in Tasks, Options.
* Set the color of completed tasks in [Chart Module](chart.html), Progress Notes from [Definitions: Prog Note Colors](definitionsprognotecolors.html).

**Date/Time Created**: Auto-populates with the date and time the Task is created. For security purposes, this cannot be edited.

**Date/Time Task**: Typically the same as Date/Time Created. Click Now to enter the current date/time or manually edit to a specific date/time. This field affects the order of the Task in the Task List.

**Date/Time Finished**: Auto-populates with the date and time the Task was marked done or set complete. Click Now to enter the current/date time (does not mark done).

**Reminder**: Set the Task to pop up or appear new in the Task List for a specific date and time. If the Reminder state is anything other than *NoReminder*, additional fields will appear below. See [Task Reminder](taskreminders.html).

**From User**: Displays the user that created the Task. To change the user, click **[...]** and select a new user from the list. The user can only be changed once the Task is saved (i.e., Create the Task, click **OK**, then return to the Task to change the user). If changed, the original user isno longer be able to see edits to the Task unless the user is subscribed to the Task List the Task is sent to.

**Task List**: Auto-populates with the name of the Task List the Task is currently in or being sent to. To change, click **Send To** (see below).

**Task Priority**: Assign a priority to the Task. Tasks are sorted by the New status, Task Priority, then date and time. Add or edit priority types in [Definitions: Task Priorities](definitionstaskpriorities.html).

**Description**: Type the Task text or details. This text box supports [Right Click Text Box](rightclicktextboxes.html) options. To change the height of the description box, move the splitter bar between the Description text box and Notes grid and drag to the desired height.

* Use [Quick Paste Notes](quickpastenotessetup.html) to quickly add frequently used notes. Enter the quick note shortcut or right-click and select *Insert Quick Note*. The quick note must be in a quick note category assigned to Tasks to work.

**Edit Auto Note**: Click to resume filling out a previously started Auto Note.

**Auto Note**: Insert an [Auto Note](autonotes.html) template to the Task description.

**Short Descript**: Type a brief description of the Task. This displays in the Task List or Tasks Area instead of the full description. Users can double-click to view the entire Task.

**Notes**: Comments and notes added by users. Double-click into a note to make changes. User must have *Task Note Edit* security permissions.

* Date Time: The date and time a user added a note.
* User: Name of the user that added a note.
* Note: Note text added by the user.

**Add**: Opens the Task Note Edit window to add comments and notes to the Task.
![](images/taskNoteEdit.png)

* Date/Time: Auto-populates with the date and time the note is created.
* User: Name of the user adding the note.
* Note: Additional Task comments or notes. Also support wiki links, quick notes, web URLs, and auto notes.
* Delete: Removes entire note from Task.
* OK: Saves the note.
* Cancel: Exits the Task Note Edit window without saving changes.

Note: Users can link URLs, tasks, patients, etc. to the Description and Task Notes. See [Task](tasks.html), Navigating section for additional information.

**Attachments**: Displays attachments added to the Task (if any). The number in parenthesis updates with the number of attachments added. Click **Attachments** to view a list of attachments or add a new one. See [Task Attachments](taskattachments.html).

**Copy**: Copies the Task number, date/time stamps, patient name and appointment date/time (if attached), Task description, notes, and associated users to the clipboard.

**Object Type**: Attach a Task to an appointment or patient. Attached patient related tasks to an appointment or patient to quickly access the patient or jump to the appointment.

* None: Task is not attached to an appointment or patient. Tasks with object type None cannot be tracked in the New For or Open Tasks tabs.
* Patient: Task is attached to a patient and shows in the patient's progress notes and Patient Tasks tab. Patient name will show last name, preferred name (if entered), first name, and patnum.
* Appointment: Task is attached to an appointment.

**Change**: Change attached patient or appointment. Only available if the object type is set to Patient or Appointment. Click Change to open the [Select Patient](patientselect.html) window and select a patient to attach (only one patient can be attached). When the object type is set to Appointment, Change opens the Select Patient window and when a patient is selected, the [Patient Appointments](apptspatient.html) window opens to select the patient's appointment to attach.

**Go To**: Exits the Task window and changes the currently selected patient to the patient attached to the Task. When the object type is Appointment, the active modules changes to [Appointments Module](appointments.html) and jumps to the date of the appointment in the calendar.

**TaskNum**: Displays the internal number associated with the Task. Useful when using [Task Search](tasksearch.html).

**Delete**: Deletes the Task and Task Notes. An audit trail entry will be created but the Task cannot be retrieved once deleted.

**History**: Opens the Task History window shown below that displays a summary of Task changes. Only available if the user has [Security Permissions](permissions.html) for *TaskEdit*.
![](images/taskHistory.png)

* Create Date: Original date of the Task.
* Edit Date: Date the Task was changed.
* Editing User: User who made the change.
* Changes: Description of the change.

**Reply**: Opens the Task Edit Note window to add a note. Click **OK** to immediately send the Task with the reply back to the inbox of the last user that added a note or the original creator of the Task if no notes have been added.

**Send To**: Moves the Task to the selected Task List. Click to open the Select Task List window. Type the Task List name in the Search field or select from the available Task Lists then double-click or click OK to move the Task.

* For Tasks with Object Type *Patient* or  *Appointment*, Task Lists with the same Object Type as the Task are shown by default.
* For Tasks with Object Type *None*, only Tasks List Inboxes are shown by default.
* Check *Show all task lists* to view Task Lists for all Object Types.

**OK**: Exits the Task window and saves changes.

**Cancel**: Exits the Task window without saving changes to the Task information (e.g., description). If notes or attachments were added to an existing Task, these will be saved.