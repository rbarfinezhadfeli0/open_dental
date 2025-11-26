# File: ./www.opendental.com/manual/taskswindow.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Task Window</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('taskswindow','tasks','toolbar','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/taskswindow.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/taskswindow.html" >v24.2</option><option value="https://www.opendental.com/manual241/taskswindow.html" >v24.1</option><option value="https://www.opendental.com/manual233/taskswindow.html" >v23.3</option><option value="https://www.opendental.com/manual232/taskswindow.html" >v23.2</option><option value="https://www.opendental.com/manual231/taskswindow.html" >v23.1</option><option value="https://www.opendental.com/manual224/taskswindow.html" >v22.4</option><option value="https://www.opendental.com/manual223/taskswindow.html" >v22.3</option><option value="https://www.opendental.com/manual222/taskswindow.html" >v22.2</option><option value="https://www.opendental.com/manual221/taskswindow.html" >v22.1</option><option value="https://www.opendental.com/manual214/taskswindow.html" >v21.4</option><option value="https://www.opendental.com/manual213/taskswindow.html" >v21.3</option><option value="https://www.opendental.com/manual212/taskswindow.html" >v21.2</option><option value="https://www.opendental.com/manual211/taskswindow.html" >v21.1</option><option value="https://www.opendental.com/manual205/taskswindow.html" >v20.5</option><option value="https://www.opendental.com/manual204/taskswindow.html" >v20.4</option><option value="https://www.opendental.com/manual203/taskswindow.html" >v20.3</option><option value="https://www.opendental.com/manual202/taskswindow.html" >v20.2</option><option value="https://www.opendental.com/manual201/taskswindow.html" >v20.1</option><option value="https://www.opendental.com/manual194/taskswindow.html" >v19.4</option><option value="https://www.opendental.com/manual193/taskswindow.html" >v19.3</option><option value="https://www.opendental.com/manual192/taskswindow.html" >v19.2</option><option value="https://www.opendental.com/manual191/taskswindow.html" >v19.1</option><option value="https://www.opendental.com/manual184/taskswindow.html" >v18.4</option><option value="https://www.opendental.com/manual183/taskswindow.html" >v18.3</option><option value="https://www.opendental.com/manual182/taskswindow.html" >v18.2</option><option value="https://www.opendental.com/manual181/taskswindow.html" >v18.1</option><option value="https://www.opendental.com/manual174/taskswindow.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Task Window</p></div>
<div class="GeneralPageContent">
<p>The Task window shows task details and allows user to add notes and make edits. </p>
<p></p>
<p>In the <a href="tasksarea.html">Tasks Area</a>, click<b> Add Task</b>.</p>
<img src="images/taskWindow.png" width="915" height="459"/><p class="MarginBottomZero">Alternatively, </p>
<ul class="MarginBottomGap">
<li>Click <b>Tasks</b> from the <a href="toolbar.html">Main Toolbar</a> and select a Task List.</li>
<li>Click <b>New Task</b> from the <a href="tasksearch.html">Task Search</a>.</li>
</ul>
<p>See <a href="tasksworkflow.html">Tasks Workflow</a> for details on creating and sending tasks.</p>
<h2>Date and Status</h2>
<img src="images/taskWindowDate.png" width="325" height="93"/><p class="MarginBottomZero"><b>New</b>: The read status of a task. Uncheck to mark a Task as read. When checked, task appears in the <i>New For</i> tab of the <a href="tasksarea.html">Tasks Area</a> if the logged-on user is subscribed to the corresponding Task List. </p>
<ul class="MarginBottomGap">
<li>This box is unchecked by default when a receiving a Task Popup. </li>
<li>When opening an unread Task from a Task List, the box remains checked.</li>
</ul>
<p class="MarginBottomZero"><b>Done</b>: Complete and close a Task.  </p>
<ul class="MarginBottomGap">
<li>Editing or sending a completed Task to another Task List automatically removes the Done status. </li>
<li>Hides the task from the Task List by default. To view completed Tasks, check <i>Show Finished Tasks</i> in Tasks, Options.</li>
<li>Set the color of completed tasks in <a href="chart.html">Chart Module</a>, Progress Notes from <a href="definitionsprognotecolors.html">Definitions: Prog Note Colors</a>.</li>
</ul>
<p><b>Date/Time Created</b>: Auto-populates with the date and time the Task is created. For security purposes, this cannot be edited.</p>
<p><b>Date/Time Task</b>: Typically the same as Date/Time Created. Click Now to enter the current date/time or manually edit to a specific date/time. This field affects the order of the Task in the Task List.</p>
<p><b>Date/Time Finished</b>: Auto-populates with the date and time the Task was marked done or set complete. Click Now to enter the current/date time (does not mark done).</p>
<h2>Reminder Setup</h2>
<img src="images/taskWindowReminder.png" width="273" height="101"/><p>Set up the task to appear at a specific time. See <a href="taskreminders.html">Task Reminder</a> for detailed instructions. If the <i>Type</i> is set to NoReminder, the task is sent and appears immediately. </p>
<h2>User, Task List, and Priority</h2>
<img src="images/taskWindowUser.png" width="235" height="80"/><p><b>From User</b>: Displays the user that created the Task. To change the user, click <b>[...]</b> and select a new user from the list. The user can only be changed once the Task is saved (i.e., Create the Task, click <b>OK</b>, then return to the Task to change the user). If changed, the original user is no longer be able to see edits to the Task unless the user is subscribed to the Task List the Task is sent to. </p>
<p><b>Task List</b>: Auto-populates with the name of the Task List the Task is currently in or being sent to. To change, click <b>Send To</b> (see below).</p>
<p><b>Task Priority</b>: Assign a priority to the Task. Tasks are sorted by the New status, Task Priority, then date and time. Add or edit priority types in <a href="definitionstaskpriorities.html">Definitions: Task Priorities</a>.</p>
<h2>Description</h2>
<img src="images/taskWindowDescriptions.png" width="915" height="131"/><p class="MarginBottomZero"><b>Description</b>: Type the Task text or details. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options. To change the height of the description box, move the splitter bar between the Description text box and Notes grid and drag to the desired height. </p>
<ul class="MarginBottomGap">
<li>Use <a href="quickpastenotessetup.html">Quick Paste Notes</a> to quickly add frequently used notes. Enter the quick note shortcut or right-click and select <i>Insert Quick Note</i>. The quick note must be in a quick note category assigned to Tasks to work.</li>
</ul>
<p><b>Edit Auto Note</b>: Click to resume filling out a previously started Auto Note.</p>
<p><b>Auto Note</b>: Insert an <a href="autonotes.html">Auto Note</a> template to the Task description.</p>
<p><b>Short Descript</b>: Type a brief description of the Task. This displays in the Task List or Tasks Area instead of the full description. Users can double-click to view the entire Task.</p>
<p>Only users with the <i>Task Edit </i><a href="permissions.html">Security Permission</a> can edit descriptions on an existing task. </p>
<h2>Notes</h2>
<img src="images/taskWindowNotes.png" width="915" height="115"/><p class="MarginBottomZero"><b>Notes</b>: Comments and notes added by users. Double-click a note to make changes. User must have <i>Task Note Edit</i> security permissions. </p>
<ul class="MarginBottomGap">
<li>Date Time: Time stamp of when the note was created.</li>
<li>User: Name of the user that added a note.</li>
<li>Note: Note text added by the user.</li>
</ul>
<p class="MarginBottomZero"><b>Add</b>: Opens the Task Note Edit window to add comments and notes to the Task.<br/><img src="images/taskNoteEdit.png" width="666" height="219" class="ImageInParagraph"/><br/></p>
<ul class="MarginBottomGap">
<li>Date/Time: Auto-populates with the date and time the note is created. This is read-only when adding a new Task Note. It can be edited on existing notes.</li>
<li>User: Name of the user adding the note.</li>
<li>Note: Text to appear on the task. Also support wiki links, quick notes, web URLs, and Auto Notes. See the subsequent Navigating Tasks section below for additional details. <a href="rightclicktextboxes.html">Right-Click</a> the text box for additional options.</li>
<li>Delete: Removes entire note from Task. Only enabled for users with the <i>Task Delete</i> permission</li>
<li>Click <b>Save</b> to add the note or keep changes. On existing task notes, this is only enabled for users with the <i>Task Note Edit </i>permission.</li>
</ul>
<p><div class="Note">Note: Users can link URLs, tasks, patients, etc. to the Description and Task Notes. See the subsequent <a href="tasks.html">Task</a> Navigating section for additional information.</div>
</p>
<h2>Attachments</h2>
<p>The Attachments area indicate the names of any attachments added to the Task. The current number of attachments added to the task is indicated in parentheses. </p>
<img src="images/taskWindowAttachments.png" width="439" height="32"/><p>Click the <b>Attachments</b> button to open <a href="taskattachments.html">Task Attachments</a> to view or add attachments.</p>
<h2>Additional Task Details and Options</h2>
<p>See and edit additional task information at the bottom of the task window.</p>
<img src="images/taskWindowAdditionalOptions.png" width="915" height="103"/><p><b>Copy</b>: Copies the Task number, date/time stamps, patient name and appointment date/time (if attached), Description, notes, and associated users to the clipboard.</p>
<p class="MarginBottomZero"><b>Object Type</b>: Attach a Task to an appointment or patient. Attached patient related tasks to an appointment or patient to quickly access the patient or jump to the appointment. </p>
<ul class="MarginBottomGap">
<li>None: Task is not attached to an appointment or patient. Tasks with object type <i>None</i> are not tracked in the Open Tasks tab.</li>
<li>Patient: Task is attached to a patient and shows in the patient's progress notes and Patient Tasks tab. Patient name displays as last name, preferred name (if any), first name, and Patient Number (PatNum).</li>
<li>Appointment: Task is attached to an appointment.</li>
</ul>
<p class="MarginBottomZero"><b>Change</b>: Change attached patient or appointment. Only available if the object type is set to Patient or Appointment.  </p>
<ul class="MarginBottomGap">
<li>When Object Type is set to <i>Patient</i>: Opens <a href="patientselect.html">Select Patient</a>. Double-click the patient to attach to the task. Only one patient can be attached. </li>
<li>When the object type is set to <i>Appointment</i>, opens the Select Patient window. Once a patient is selected, <a href="apptspatient.html">Patient Appointments</a> opens. Double-click an appointment to attach. Only one appointment can be attached.</li>
</ul>
<p><b>Go To</b>: Exits the Task window and changes the currently selected patient to the patient attached to the Task. When the object type is Appointment, the active modules changes to <a href="appointments.html">Appointments Module</a> and jumps to the date of the appointment in the calendar.</p>
<p><b>TaskNum</b>: Displays the internal number associated with the Task. Useful when using <a href="tasksearch.html">Task Search</a>.</p>
<h2>Task History</h2>
<p class="MarginBottomZero">Click <b>History</b> to open Task History. A summary of Task changes is displayed. Only available when the user has the <i>TaskEdit</i> permission.<br/><img src="images/taskHistory.png" width="767" height="203" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li>Create Date: Time stamp of when the task was originally created. Matches the Date/Time Created. </li>
<li>Edit Date: Time stamp of when a change was made. </li>
<li>Editing User: User who made the change.</li>
<li>Changes: Details about the task change.</li>
</ul>
<h2>Sending and Deleting</h2>
<img src="images/taskWindowSendOptions.png" width="698" height="32"/><p><b>Delete</b>: Only enabled for users with <i>Task Delete</i> permission. Deletes the task and any Task Notes. An <a href="audittrail.html">Audit Trail</a> entry is created but the task cannot be retrieved once deleted.</p>
<p class="MarginBottomZero"><b>Reply</b>: Opens the Task Edit Note window to add a note.  </p>
<ul class="MarginBottomGap">
<li>Click <b>Save</b> to add the note and immediately send the task back to the inbox of the user attached to the most recent note or the task <i>From User</i> if no notes have been added.</li>
<li>Only displays for existing tasks in a specific Task List (i.e., not listed directly in the Main tab of the Tasks area) when the logged-in user did not create the most recent note. </li>
</ul>
<p class="MarginBottomZero"><b>Send To</b>: Moves the Task to the selected Task List. Click to open the Select Task List window. Type the Task List name in the Search field or select from the available Task Lists then double-click or click OK to move the Task. </p>
<ul class="MarginBottomGap">
<li>For Tasks with Object Type <i>Patient</i> or <i> Appointment</i>, Task Lists with the same Object Type as the Task are shown by default.</li>
<li>For Tasks with Object Type <i>None</i>, only Tasks List Inboxes are shown by default.</li>
<li>Check <i>Show all task lists</i> to view Task Lists for all Object Types. </li>
</ul>
<p><b>Save</b>: For a new task, creates the task and sends it to the specified Task List. For existing tasks, closes the task window and keeps changes. Does not affect changes to Task Notes.</p>
<h2>Navigating Tasks</h2>
<p>The task Description and Task Notes can include navigation to outside sources or places within the program. Right-click in the Description or a Task Note to navigate.</p>
<img src="images/taskRightClick.png" width="915" height="506"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>File Explorer</b>: Opens a folder in the File Explorer. <ul>
<li>If navigating to a folder, a UNC path must end with a backslash (e.g., <b>\\Server\OpenDentalExports\</b>). </li>
<li>If navigating to a file, a UNC path must end with the file name/extension (e.g., <b>\\Server\OpenDentalExports\File.txt</b>)</li>
<li>If a folder name contains punctuation or special characters, the folder may not open.</li>
</ul>
</li>
<li><b>PatNum</b>: Select a patient in Open Dental. Enter the Patient Number (found in <a href="patientedit.html">Edit Patient Information</a>) immediately after the colon (e.g., <i>patnum:234</i>). </li>
<li><b>TaskNum</b>: Open a specific task in a new window. Enter the TaskNum (found in the Task window) immediately after the colon (e.g., <i>tasknum:789). </i></li>
<li><b>Web</b>: Open a URL using the computer's default web browser.</li>
<li><b>Wiki</b>: Open the corresponding wiki page. Enter the page name in two brackets (e.g., <i>[[page name]]</i>). <i>Detect wiki links in textboxes and grids</i> must be enabled in <a href="wiki.html">Wiki</a> Setup.</li>
</ul>
</div>
</div>
</body>
</html>```
