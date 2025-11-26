# File: ./www.opendental.com/manual/tasksarea.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Tasks Area</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('tasksarea','manage','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/tasksarea.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/tasksarea.html" >v24.2</option><option value="https://www.opendental.com/manual241/tasksarea.html" >v24.1</option><option value="https://www.opendental.com/manual233/tasksarea.html" >v23.3</option><option value="https://www.opendental.com/manual232/tasksarea.html" >v23.2</option><option value="https://www.opendental.com/manual231/tasksarea.html" >v23.1</option><option value="https://www.opendental.com/manual224/tasksarea.html" >v22.4</option><option value="https://www.opendental.com/manual223/tasksarea.html" >v22.3</option><option value="https://www.opendental.com/manual222/tasksarea.html" >v22.2</option><option value="https://www.opendental.com/manual221/tasksarea.html" >v22.1</option><option value="https://www.opendental.com/manual214/tasksarea.html" >v21.4</option><option value="https://www.opendental.com/manual213/tasksarea.html" >v21.3</option><option value="https://www.opendental.com/manual212/tasksarea.html" >v21.2</option><option value="https://www.opendental.com/manual211/tasksarea.html" >v21.1</option><option value="https://www.opendental.com/manual205/tasksarea.html" >v20.5</option><option value="https://www.opendental.com/manual204/tasksarea.html" >v20.4</option><option value="https://www.opendental.com/manual203/tasksarea.html" >v20.3</option><option value="https://www.opendental.com/manual202/tasksarea.html" >v20.2</option><option value="https://www.opendental.com/manual201/tasksarea.html" >v20.1</option><option value="https://www.opendental.com/manual194/tasksarea.html" >v19.4</option><option value="https://www.opendental.com/manual193/tasksarea.html" >v19.3</option><option value="https://www.opendental.com/manual192/tasksarea.html" >v19.2</option><option value="https://www.opendental.com/manual191/tasksarea.html" >v19.1</option><option value="https://www.opendental.com/manual184/tasksarea.html" >v18.4</option><option value="https://www.opendental.com/manual183/tasksarea.html" >v18.3</option><option value="https://www.opendental.com/manual182/tasksarea.html" >v18.2</option><option value="https://www.opendental.com/manual181/tasksarea.html" >v18.1</option><option value="https://www.opendental.com/manual174/tasksarea.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Tasks Area</p></div>
<div class="GeneralPageContent">
<p>Task Lists and Tasks are managed in the Tasks Area, and can be used for office communications, reminders, patient lists, daily, weekly, or monthly check off lists, etc.</p>
<p>In the <a href="manage.html">Manage Module</a>, click <b>Tasks</b>.</p>
<img src="images/tasklist.png" width="602" height="308"/><p class="MarginBottomZero">Alternatively:  </p>
<ul class="MarginBottomGap">
<li>The Task Area may also be docked to the bottom or side of the main Open Dental window.</li>
<li>Click the <b>Tasks</b> dropdown in the main toolbar and click <i>For User</i> or <i>Reminders</i> to launch the Task window in the specified tab.</li>
</ul>
<p><img src="images/YouTube_PlayButton_15px.png" width="15" height="12" style="margin-bottom: 0px"/> See our video playlist: <a href="https://www.youtube.com/playlist?list=PLyjZ9PCVynCkrbf5hF0pzSVViropH3Q6Y">Task Lists</a>.</p>
<p>When the Tasks area is docked, the area can be resized by dragging the splitter (the horizontal bar between the Tasks Area and the rest of the screen). To change docking options, right-click on the splitter, or go to <a href="tasksetup.html">Tasks Preferences</a>.</p>
<h2>Task Toolbar</h2>
<p>The Task Toolbar is situated at the top of the Task Area.</p>
<img src="images/taskToolbar.png" width="447" height="56"/><p class="MarginBottomZero"><b>Options</b>: Open Task Options.<br/><img src="images/tasklistOptions.png" width="333" height="218" class="ImageInParagraph"/></p>
<ul class="MarginBottomGap">
<li><b>Show Finished Tasks</b>: If checked, view Tasks that have been marked Done in the selected Task List.</li>
<li><b>Finished Task Start Date</b>: View Tasks marked Done on or after this date. Enter any date in this field.</li>
<li><b>Sort appointment type Task Lists by AptDateTime</b>: If checked, Task Lists that have Object Type set as <i>Appointment</i> are grouped by scheduled and unscheduled appointments, then sorted by appointment date and time, rather than the date and time the Task was created.</li>
<li><b>Default Tasks to collapsed state</b>: If checked, Tasks that meet the criteria are collapsed by default.</li>
<li><b>Show Archived Task Lists</b>: If checked, Task Lists that have been marked <i>Archived</i> are shown.</li>
<li><b>Blocked Task popups still make notification sound</b>: If checked, Task sound is included on blocked tasks.</li>
</ul>
<p><b>Add Task List</b>: Create a new Task List. New Task Lists can only be created when the Main tab is selected. See <a href="tasklists.html">Task List</a>. A Task List can include nested Task Lists or Tasks.</p>
<p><b>Add Task</b>: Create a new <a href="tasks.html">Task</a>. Click the dropdown to add a Reminder Task.</p>
<p><b>Search</b>: Open the <a href="tasksearch.html">Task Search</a>.</p>
<p><b>Manage Blocks</b>: Block Task popups for specific Task Lists. Select the lists to block, then click <b>Save</b>. Tasks in selected lists do not pop up, but are still shown in the <i>New for User</i> tab until read.</p>
<img src="images/taskBlocks.png" width="438" height="186"/><p><b>Task Filter</b>: Only visible when a <i>Default Filter for Tasks in Lists</i> is enabled in <a href="tasksetup.html">Tasks Preferences</a>. Opens Task Filter window to set filters for Task Lists. </p>
<img src="images/taskFilter.png" width="677" height="427"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Date Range</b>: Enter Start/End Dates to filter tasks. If the task is attached to an appointment, the filter applies to the appointment date. If the task is not attached to an appointment, the filter applies to the <i>Date/Time Task</i>.  <ul>
<li>All Dates: Clear the current Start/End Dates to include tasks regardless of date.</li>
<li>Today: Enter the current date in the Start/End Date fields.</li>
<li>Tomorrow: Enter tomorrow's date in the Start/End Date fields.</li>
<li>Next 7 Days: Enter a date range for the next seven days, starting with today, in the Start/End Date fields.</li>
</ul>
</li>
<li><b>Patient</b>: Filter tasks by patient. <ul>
<li>All Patients: Do not filter tasks by patient.</li>
<li>Patient Selected in Main Window: Filter tasks by the currently selected patient. Patient name is normally noted in the main title bar of Open Dental.</li>
<li>Patient on Selected Task: Filter tasks by the patient attached to the currently selected task.</li>
</ul>
</li>
<li><b>Clinic or Region</b>: Choose clinics or regions to filter tasks. Only one type can be selected. Click <b>All </b> to change the current Clinic and Region selections to <i>All</i>.. Tasks with Object Type, <i>None</i> are not filtered.</li>
<ul>
<li>Clinic: Filter by the clinic assigned to the appointment attached to the Task or the clinic of the patient assigned to the Task. </li>
<li>Region: Filter the list by Region assigned to clinic.</li>
</ul>
<li>Click <b>Clear All</b> to reset all filters to the default.</li>
<li>Click <b>OK</b> to save filters.</li>
</ul>
<p><b>Task List Filter</b>: Type to filter the available Task Lists in the selected tab. Click <b>Clear</b> to view all Task Lists in the selected tab. Not functional in <i>New For</i> or <i>Patient Task</i> tabs.</p>
<p><b>Refresh</b>: Enterprise users only. If <i>Tasks, 'Main' and 'Reminders' tabs require manual refresh</i> is enabled in <a href="preferences.html">Preferences</a> this button is available. Click to refresh and get new Tasks and Task Lists in the <i>Main</i> or <i>Reminders</i> tab. If the preference is enabled, upon logging in, users must click Refresh to see any Tasks Lists in the <i>Main</i> or <i>Reminders</i> tab. </p>
<h2>Tabs</h2>
<img src="images/taskTabs.png" width="477" height="27"/><p> Click on a tab and its Tasks or Task Lists are displayed.</p>
<p><b>For User:</b> Task Lists that the current user is subscribed to. </p>
<p><b>New for User</b>: See unread Tasks for the currently logged-on user's subscribed Task Lists. Click <i>read</i> to remove a task from the list. Users may see Tasks from Task Lists they are no longer subscribed to if the Task was unread at the time of unsubscribing. </p>
<p><b>Open Tasks</b>: Keep track of Tasks that have an object type of <i>Patient</i> and are <i>From</i> the currently logged-on user. This tab is only visible if <i>Show open Tasks for user</i> is checked in <a href="tasksetup.html">Tasks Preferences</a>.</p>
<p><b>Patient Tasks</b>: Keep track of Tasks that have an object type of <i>Patient</i> and a patient attached. When the attached patient is selected, their Tasks are displayed in this list.</p>
<p><b>Main</b>: All Task Lists and inboxes. Excludes archived Task Lists by default. </p>
<p><b>Reminders</b>: All Task Lists and inboxes (excludes archived lists by default). Click a list to view all Task reminders regardless of due status. Reminders replace Repeating Tasks. See <a href="taskreminders.html">Task Reminder</a>.</p>
<p><b>Repeating</b> (setup) / By Date / By Week / By Month: Only shows when <i>Show legacy repeating tasks</i> is enabled in Task Setup. </p>
<h2>Task Lists</h2>
<img src="images/tasksList.png" width="791" height="206"/><p>From a corresponding tab, click on a Task list to see the Tasks within.</p>
<p class="MarginBottomZero">Right-click options: </p>
<ul>
<li><b>Edit Properties</b>: Edit Task List options.</li>
<li><b>Set Priority</b>: Change the Task Priority. A Task Note is added with the user that changed the Task and the new Task Priority (only applies to non-inbox Task Lists).</li>
<li><b>Cut</b>: Cut Task List to move into another list.</li>
<li><b>Paste</b>: Paste a cut Task List into another location.</li>
<li><b>Delete</b>: Delete this Task List.</li>
<li><b>Subscribe</b>: Subscribe to the Task List. Only available when the Main tab or Reminders tab is selected. <ul>
<li>Subscribing to a Task List also subscribes to any nested Task Lists. </li>
</ul>
</li>
<li><b>Unsubscribe</b>: Unsubscribe to the Task List. Only available when the For User tab is selected. <ul>
<li>Users cannot unsubscribe from a nested Task List when subscribed to the containing Task List.</li>
</ul>
</li>
<li><b>Archive</b>: Marks list as archived, allows it to be hidden by default.<br/><div class="Note">Note: <ul>
<li>Archiving archives any nested Task Lists. </li>
<li>Archiving unsubscribes any users subscribed to the list.</li>
<li>Archived Task Lists disassociate any User Inboxes.</li>
<li>To show Archived Task Lists, enable Show Archived Task Lists in Task Options above. <ul>
<li>When Archived Task Lists are showing, a right-click option to <i>Unarchive</i> is be available. This does not restore Object of Date Type, or User Inbox associations.</li>
</ul>
</li>
<li>Open Reminder Tasks have their reminder settings removed. </li>
</ul>
</div>
</li>
</ul>
<p class="MarginBottomGap"><div class="Note">Note: If a user moves a main Task List into its own nested Task List, the nested Task List(s) become main Task List(s).</div>
</p>
<h2>Tasks</h2>
<p>Click on a Task List or click the <i>New for User</i> or <i>Patient Tasks</i> tab to see Tasks.</p>
<p>By default, only open Tasks are shown. Click <b>Options</b> to include closed Tasks. Tasks lists that have new Tasks are flagged with an orange checkbox and the number of new Tasks appears in parentheses. A Task List can include nested Task Lists or Tasks. </p>
<img src="images/tasks.png" width="465" height="135"/><p>Double-click a Task to open it. See <a href="taskswindow.html">Task Window</a>.</p>
<p class="MarginBottomZero">From the Tasks window or Tasks dock, right-click a Task to see the following options: </p>
<ul class="MarginBottomGap">
<li><b>Done</b> (affects all users): Mark a Task as done.</li>
<li><b>Edit Properties</b>: Open Task to make edits.</li>
<li><b>Set Priority</b>: Change Task Priority. Add Task Priorities in <a href="definitionstaskpriorities.html">Definitions: Task Priorities</a></li>
<li><b>Cut</b>: Cut Task to move to another list.</li>
<li><b>Copy</b>: Make a copy of the Task to move to another list.</li>
<li><b>Paste</b>: Paste a cut or copied Task into a list.</li>
<li><b>Delete</b>: Delete this Task.</li>
<li><b>Send to Me</b>: Send selected Task to the current logged-on user's inbox.</li>
<li><b>Send to Me &amp; Go to</b>: Send Task to the current logged-on user's inbox, select the attached patient, and add a note to the Task.</li>
<li><b>Go To</b>: Go to the patient or appointment associated with the Task.</li>
<li><b>Navigate to Attachment</b>: Opens the selected Task attachment.</li>
<li><b>Mark as Read</b>: Mark Task as read. Removes task from the New For tab</li>
</ul>
<p>Task text that is more than 250 characters, has two or more Task Notes, or one Task Note more than 250 characters can be expanded or collapsed. The + or - in the +/-column indicates in current state. Click the +/-column header to toggle all Tasks between expand or collapse.</p>
<p><b>-</b> indicates a Task that is expanded. Click - to collapse text.</p>
<p><b>+</b>indicates a Task that is collapsed. Click + to expand.</p>
<p>Set the default state in Task Preferences.</p>
<h2>Task Popout Count</h2>
<p>The Task popout window displays the number of new (i.e., unread) Tasks in the selected Task List. Hover over the Open Dental icon on the taskbar to view. Task count only shows when the Tasks window is open and a Task List or tab is selected.</p>
<img src="images/tasksWindowsToolbar.png" width="683" height="216"/></div>
</div>
</body>
</html>```
