# File: ./www.opendental.com/manual232/taskreminders.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Task Reminder</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('taskreminders','tasks','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/taskreminders.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/taskreminders.html" >v24.2</option><option value="https://www.opendental.com/manual241/taskreminders.html" >v24.1</option><option value="https://www.opendental.com/manual233/taskreminders.html" >v23.3</option><option value="https://www.opendental.com/manual232/taskreminders.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/taskreminders.html" >v23.1</option><option value="https://www.opendental.com/manual224/taskreminders.html" >v22.4</option><option value="https://www.opendental.com/manual223/taskreminders.html" >v22.3</option><option value="https://www.opendental.com/manual222/taskreminders.html" >v22.2</option><option value="https://www.opendental.com/manual221/taskreminders.html" >v22.1</option><option value="https://www.opendental.com/manual214/taskreminders.html" >v21.4</option><option value="https://www.opendental.com/manual213/taskreminders.html" >v21.3</option><option value="https://www.opendental.com/manual212/taskreminders.html" >v21.2</option><option value="https://www.opendental.com/manual211/taskreminders.html" >v21.1</option><option value="https://www.opendental.com/manual205/taskreminders.html" >v20.5</option><option value="https://www.opendental.com/manual204/taskreminders.html" >v20.4</option><option value="https://www.opendental.com/manual203/taskreminders.html" >v20.3</option><option value="https://www.opendental.com/manual202/taskreminders.html" >v20.2</option><option value="https://www.opendental.com/manual201/taskreminders.html" >v20.1</option><option value="https://www.opendental.com/manual194/taskreminders.html" >v19.4</option><option value="https://www.opendental.com/manual193/taskreminders.html" >v19.3</option><option value="https://www.opendental.com/manual192/taskreminders.html" >v19.2</option><option value="https://www.opendental.com/manual191/taskreminders.html" >v19.1</option><option value="https://www.opendental.com/manual184/taskreminders.html" >v18.4</option><option value="https://www.opendental.com/manual183/taskreminders.html" >v18.3</option><option value="https://www.opendental.com/manual182/taskreminders.html" >v18.2</option><option value="https://www.opendental.com/manual181/taskreminders.html" >v18.1</option><option value="https://www.opendental.com/manual174/taskreminders.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Task Reminder</p></div>
<div class="GeneralPageContent">
<p>When using <a href="tasks.html">Tasks</a>, reminders can be used to remind staff of tasks that need to be done daily, weekly, monthly, or yearly.</p>
<img src="images/taskRemindersTaskList.gif" width="634" height="288"/><p>The reminder will pop up and show in a user's task list when it is due until it is marked done. <div class="Note">Note: <i>Show legacy repeating tasks option</i> must be disabled from <a href="tasksetup.html">Tasks Preferences</a> for Task Reminders to work correctly.</div>
</p>
<p class="MarginBottomZero">Task reminders show in three places: </p>
<ul class="MarginBottomGap">
<li>The user's task list when the reminder is due.</li>
<li><a href="appointments.html">Appointments Module</a>, Reminders tab.</li>
<li><a href="tasksarea.html">Tasks area</a>, Reminders tab. </li>
</ul>
<h2>How Task Reminders Work</h2>
<ol>
<li>Enable tasks and set up user inboxes and task lists. See <a href="tasksetup.html">Tasks Preferences</a>.</li>
<li>Create a task reminder, setting type, date/time and repeat interval.</li>
<li>When the reminder is due, it will pop up and appear in the task list. Mark the reminder done to make it disappear until its next due date.</li>
<li>When you no longer want the reminder to appear, change the Reminder Type to <i>NoReminder</i>.</li>
</ol>
<br/><p class="MarginBottomZero">Additional information: </p>
<ul class="MarginBottomGap">
<li>All users subscribed to the task list will receive the reminder until it is marked done.</li>
<li>The time a task reminder appears will be based the <i>Date/Time Task</i>. The defaults to the same time as the <i>Date/Time Created</i>, but can be changed as needed. For example, a time entry of 3:45 pm will cause a daily reminder to appear at 3:45 pm each day.</li>
<li>Task Priority determines color. Light orange is the default color for Reminder priority and task reminders. Edit defaults in <a href="definitionstaskpriorities.html">Definitions: Task Priorities</a>.</li>
<li>Reminder tasks will be turned off if office is using Legacy tasks. See Task Preferences.</li>
<li>Reminders are tracked in the <a href="audittrail.html">Audit Trail</a>.</li>
</ul>
<h2>Create a Task Reminder</h2>
<p class="MarginBottomZero">Examples: </p>
<ul class="MarginBottomGap">
<li>Daily type, every 1 day, will cause a reminder to appear every day.</li>
<li>Weekly type, every 2 weeks, F, will cause a reminder to appear every 2 weeks on Friday.</li>
<li>Yearly type, every 1 year, will cause a reminder to appear every year to the date.</li>
</ul>
<p class="MarginBottomZero">To create a Task Reminder: </p>
<ol class="MarginBottomGap">
<li>In the Tasks toolbar, select a <a href="tasklists.html">Task List</a>.</li>
<li>Select the Add Task dropdown and click <b>Reminder</b>.  <ul>
<li>Alternatively, select a Task List from the Reminders tab, and click <b>Add Task</b>. </li>
</ul>
</li>
<li>Select the Reminder <b>Type</b>.</li>
<li>Enter the Reminder details (e.g., Every #, Date, Days etc).</li>
<li>Verify the <i>Date/Time Task</i>.</li>
<li>Select the <i>Task Priority</i>.</li>
<li>Enter the task <i>Description</i>.</li>
<li>Verify the <i>Task List</i>. <ul>
<li>If the correct Task List is shown, click <b>OK</b> to finish creating the task reminder and send it to the Task List shown.</li>
<li>If the correct Task List is not shown (or there is no Task List), click <b>Send To...</b>. Select the Task List to send the task reminder and click <b>OK</b> to finish creating the task reminder and send it to the selected Task List.</li>
</ul>
</li>
</ol>
<img src="images/taskReminders.gif" width="915" height="374"/><p><b>Date/Time Task:</b> Enter the date/time you want the reminder to first appear. The default is today at the current time. Click Now to inset the current <b>Date/Time</b>.</p>
<p class="MarginBottomZero"><b>Type:</b> Select the a reminder type from the dropdown. Options may change in the Reminder area depending on the reminder type selected. See types below for the available options.  </p>
<ul class="MarginBottomGap">
<li><i>NoReminder</i>: Selected by default for normal tasks. This task is not a reminder.</li>
<li><i>Once</i>: Selected by default when adding a reminder task using the Add Task, Reminder dropdown or when the Reminders tab is selected. Use the calendar dropdown and time picker to choose a date and time. The reminder will appear once on the selected date and time.</li>
<li><i>Daily</i>: Select to repeat this reminder each set number of days. Verify the time of the reminder in the Date/Time Task area; the task will repeat based on this date/time. <ul>
<li><b>Every ___ Day</b>: Enter a number to indicate frequency. (e.g., <i>Every 1 Day</i> will repeat daily, <i>Every 2 Day</i> will repeat every other day, etc). </li>
</ul>
</li>
<li><i>Weekly</i>: Select to repeat the reminder on specific day(s) of the week. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time.  <ul>
<li><b>Reminder Every __</b>: Enter the repeat frequency. For example, Every3days, Every2weeks, Every1year.</li>
<li><b>Reminder Days:</b> Only shows for weekly repeat interval. Select the day(s) of the week the reminder should appear: </li>
<ul>
<li>M = Monday</li>
<li>T = Tuesday</li>
<li>W = Wednesday</li>
<li>R = Thursday</li>
<li>F = Friday</li>
<li>S = Saturday</li>
<li>U = Sunday.</li>
</ul>
</ul>
</li>
<li><i>Monthly</i>: Select to repeat the reminder each set number of month. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time. <ul>
<li><b>Every ___ Month</b>: Enter a number to indicate frequency (e.g., <i>Every 1 Month</i> will repeat monthly, <i>Every 2 Month</i> will repeat every other month, etc). </li>
</ul>
</li>
<li><i>Yearly</i>: Select to repeat the reminder on a yearly basis. Verify the initial date and time of the reminder in the Date/Time Task area; the task will repeat based on this date/time. <ul>
<li><b>Every ___ Year</b>: Enter a number to indicate frequency. (e.g., <i>Every 1 Year</i> will repeat yearly, <i>Every 2 Month</i> will repeat every other year, etc). </li>
</ul>
</li>
</ul>
<p></p>
<p><b>Task Priority:</b> Select the task priority to organize reminders by importance. The default is Reminder with a color of light orange. Add options in Definitions, Task Priorities.</p>
<p><b>Task List</b>: The Task List currently selected to send the reminder. After entering all Task Reminder details, click <b>Send To...</b> to change this Task List if needed. Otherwise, when clicking <b>OK</b>, this is the Task List the reminder will be sent to.</p>
<p><b>Description:</b> Enter the text of the reminder.</p>
<p>See <a href="taskswindow.html">Task Window</a> for additional information on the available fields and options in the Task Window.</p>
<h2>Complete or Remove Task Reminders</h2>
<p>To mark a task reminder as complete and remove it temporarily from the list until the next due date, check <i>Done</i>. This will create a new reminder task for the next interval date.</p>
<p>To stop a task reminder from repeating, set the repeat interval to <i>Once</i> or <i>NoReminder</i>.</p>
<p>To permanently remove a task reminder from a task list, delete it.</p>
<div class="Note">Note: To view task reminders that have been marked Done, in the Tasks area, click Options, Show Finished Tasks.</div>
<br/><br/><h2>Task Reminder History</h2>
<p>A history of task reminders shows under the Reminders tab, grouped by task list.</p>
<img src="images/taskRemindersTab.gif" width="490" height="281"/><p class="MarginBottomZero">The list includes: </p>
<ul class="MarginBottomGap">
<li>New/viewed task reminders.</li>
<li>Task reminders due in the future.</li>
<li>If Show Finished Tasks is selected, task reminders marked <i>Done</i> also show.</li>
</ul>
</div>
</div>
</body>
</html>```
