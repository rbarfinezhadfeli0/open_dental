# File: ./www.opendental.com/manual243/taskreminders.html

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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/taskreminders.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/taskreminders.html" >v24.2</option><option value="https://www.opendental.com/manual241/taskreminders.html" >v24.1</option><option value="https://www.opendental.com/manual233/taskreminders.html" >v23.3</option><option value="https://www.opendental.com/manual232/taskreminders.html" >v23.2</option><option value="https://www.opendental.com/manual231/taskreminders.html" >v23.1</option><option value="https://www.opendental.com/manual224/taskreminders.html" >v22.4</option><option value="https://www.opendental.com/manual223/taskreminders.html" >v22.3</option><option value="https://www.opendental.com/manual222/taskreminders.html" >v22.2</option><option value="https://www.opendental.com/manual221/taskreminders.html" >v22.1</option><option value="https://www.opendental.com/manual214/taskreminders.html" >v21.4</option><option value="https://www.opendental.com/manual213/taskreminders.html" >v21.3</option><option value="https://www.opendental.com/manual212/taskreminders.html" >v21.2</option><option value="https://www.opendental.com/manual211/taskreminders.html" >v21.1</option><option value="https://www.opendental.com/manual205/taskreminders.html" >v20.5</option><option value="https://www.opendental.com/manual204/taskreminders.html" >v20.4</option><option value="https://www.opendental.com/manual203/taskreminders.html" >v20.3</option><option value="https://www.opendental.com/manual202/taskreminders.html" >v20.2</option><option value="https://www.opendental.com/manual201/taskreminders.html" >v20.1</option><option value="https://www.opendental.com/manual194/taskreminders.html" >v19.4</option><option value="https://www.opendental.com/manual193/taskreminders.html" >v19.3</option><option value="https://www.opendental.com/manual192/taskreminders.html" >v19.2</option><option value="https://www.opendental.com/manual191/taskreminders.html" >v19.1</option><option value="https://www.opendental.com/manual184/taskreminders.html" >v18.4</option><option value="https://www.opendental.com/manual183/taskreminders.html" >v18.3</option><option value="https://www.opendental.com/manual182/taskreminders.html" >v18.2</option><option value="https://www.opendental.com/manual181/taskreminders.html" >v18.1</option><option value="https://www.opendental.com/manual174/taskreminders.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Task Reminder</p></div>
<div class="GeneralPageContent">
<p>When using Tasks, reminders can be used to remind staff of tasks that need to be done daily, weekly, monthly, or yearly.</p>
<p>In the <a href="tasksarea.html">Tasks Area</a>, click the Reminders tab. </p>
<img src="images/taskRemindersTab.png" width="694" height="309"/><p>Reminder tasks can be accessed from the Reminders tab to view upcoming reminders. When a reminder is due, the task shows as <i>New</i> in a user's task list when it's due and remains until the user marks it as <i>Done</i>. Reminder tasks that are due also display in the <a href="appointments.html">Appointments Module</a>, Reminders tab. </p>
<p>Click on a task list to view reminders specific to the list. </p>
<img src="images/taskRemindersTaskList.png" width="798" height="255"/><h2>Reminder Task Details</h2>
<p>Options for a reminder task vary depending on the selected Reminder Type. </p>
<img src="images/taskReminders.png" width="915" height="493"/><p class="MarginBottomZero">See <a href="taskswindow.html">Task Window</a> for general information about task fields. Information specific to Reminder Tasks can be found in the following bullets. </p>
<ul class="MarginBottomGap">
<li><b>Date/Time Task</b>: When first creating the task, displays the current date and time. Once a reminder task has been created, changes to the next due date and time. If sending a Daily, Weekly, Monthly, or Yearly task, the time entered is used for the due time. </li>
<li><b>Type</b>: Select the a reminder type from the dropdown. Options include: <ul>
<li><i>NoReminder</i>: Selected by default for normal tasks. This task is not a reminder.</li>
<li><i>Once</i>: Set the task to display only once. Date and Time fields display. Enter the date and time for the task to be due. This type is selected by default when creating a task when the Reminders tab is selected or when creating a task by clicking<i> Reminder</i> from the Add Task dropdown. </li>
<li><i>Daily</i>: Set the task to repeat this reminder every set number of days. An <i>Every _ Days</i> field displays. Enter the amount of days to pass before repeating the task. (e.g., <i>Every 1 Day</i> will repeat daily, <i>Every 2 Day</i> will repeat every other day, etc.).</li>
<li><i>Weekly</i>: Set the task to display weekly. An <i>Every _ Weeks</i> field and <i>Days</i> field display. Enter the amount of weeks to pass before repeating the task. Check the day to display the task on: <ul>
<li>M = Monday</li>
<li>T = Tuesday</li>
<li>W = Wednesday</li>
<li>R = Thursday</li>
<li>F = Friday</li>
<li>S = Saturday</li>
<li>U = Sunday.</li>
</ul>
</li>
<li><i>Monthly</i>: Set the task to repeat every set number of months. The <i>Every _ Months</i> field displays. Enter the amount of months to pass before repeating the task. </li>
<li><i>Yearly</i>: Set the task to repeat every set number of years. The <i>Every _ Years</i> field displays. Enter the amount of years to pass before repeating the task. </li>
</ul>
</li>
<li><b>Task Priority</b>: Set the task priority. If creating a task when the Reminders tab is selected or when creating a task by clicking<i> Reminder</i> from the Add Task dropdown, <i>Reminder</i> is set as the default priority. Edit defaults in <a href="definitionstaskpriorities.html">Definitions: Task Priorities</a></li>
</ul>
<p class="MarginBottomZero">Examples: </p>
<ul class="MarginBottomGap">
<li>Daily type, every 1 day, causes a reminder to appear every day.</li>
<li>Weekly type, every 2 weeks, F, causes a reminder to appear every 2 weeks on Friday.</li>
<li>Yearly type, every 1 year, causes a reminder to appear every year to the date.</li>
</ul>
<h2>Complete or Remove Task Reminders</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>To mark a task reminder as complete and remove it temporarily from the list until the next due date, check <i>Done</i>. This creates a new reminder task for the next interval date.</li>
<li>To stop a task reminder from repeating, set the repeat interval to <i>Once</i> or <i>NoReminder</i>.</li>
<li>To permanently remove a task reminder from a task list, delete it.</li>
</ul>
<p><div class="Note">Note: To view task reminders that have been marked Done, in the Tasks area, click Options, Show Finished Tasks.</div>
</p>
<h2>Additional Information</h2>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>All users subscribed to the task list receive the reminder until it is marked <i>Done</i>.</li>
<li>In <a href="tasksetup.html">Tasks Preferences</a>, <i>Show legacy repeating tasks option</i> must be disabled.</li>
<li>Reminders are tracked in the <a href="audittrail.html">Audit Trail</a>.</li>
</ul>
</div>
</div>
</body>
</html>```
