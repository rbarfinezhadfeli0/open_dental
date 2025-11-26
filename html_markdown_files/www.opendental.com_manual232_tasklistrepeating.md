# File: ./www.opendental.com/manual232/tasklistrepeating.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Repeating Task Lists (Legacy)</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('tasklistrepeating','taskreminders','tasks','toolbar','manual')">
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
						}"><option value="https://www.opendental.com/manual243/tasklistrepeating.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/tasklistrepeating.html" >v24.2</option><option value="https://www.opendental.com/manual241/tasklistrepeating.html" >v24.1</option><option value="https://www.opendental.com/manual233/tasklistrepeating.html" >v23.3</option><option value="https://www.opendental.com/manual232/tasklistrepeating.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/tasklistrepeating.html" >v23.1</option><option value="https://www.opendental.com/manual224/tasklistrepeating.html" >v22.4</option><option value="https://www.opendental.com/manual223/tasklistrepeating.html" >v22.3</option><option value="https://www.opendental.com/manual222/tasklistrepeating.html" >v22.2</option><option value="https://www.opendental.com/manual221/tasklistrepeating.html" >v22.1</option><option value="https://www.opendental.com/manual214/tasklistrepeating.html" >v21.4</option><option value="https://www.opendental.com/manual213/tasklistrepeating.html" >v21.3</option><option value="https://www.opendental.com/manual212/tasklistrepeating.html" >v21.2</option><option value="https://www.opendental.com/manual211/tasklistrepeating.html" >v21.1</option><option value="https://www.opendental.com/manual205/tasklistrepeating.html" >v20.5</option><option value="https://www.opendental.com/manual204/tasklistrepeating.html" >v20.4</option><option value="https://www.opendental.com/manual203/tasklistrepeating.html" >v20.3</option><option value="https://www.opendental.com/manual202/tasklistrepeating.html" >v20.2</option><option value="https://www.opendental.com/manual201/tasklistrepeating.html" >v20.1</option><option value="https://www.opendental.com/manual194/tasklistrepeating.html" >v19.4</option><option value="https://www.opendental.com/manual193/tasklistrepeating.html" >v19.3</option><option value="https://www.opendental.com/manual192/tasklistrepeating.html" >v19.2</option><option value="https://www.opendental.com/manual191/tasklistrepeating.html" >v19.1</option><option value="https://www.opendental.com/manual184/tasklistrepeating.html" >v18.4</option><option value="https://www.opendental.com/manual183/tasklistrepeating.html" >v18.3</option><option value="https://www.opendental.com/manual182/tasklistrepeating.html" >v18.2</option><option value="https://www.opendental.com/manual181/tasklistrepeating.html" >v18.1</option><option value="https://www.opendental.com/manual174/tasklistrepeating.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Repeating Task Lists (Legacy)</p></div>
<div class="GeneralPageContent">
<p>Legacy repeating tasks are an older method of setting task reminders. Use <a href="taskreminders.html">Task Reminders</a> as an updated alternative to repeating task lists.</p>
<img src="images/taskRepeating.gif" width="539" height="323"/><p class="MarginBottomZero">Repeating task lists are automatically generated checklists that can be used to mark off tasks you do repeatedly. For example: </p>
<ul class="MarginBottomGap">
<li>Daily tasks in the sterilization room.</li>
<li>Weekly tasks for stocking supplies.</li>
<li>Monthly tasks for equipment maintenance.</li>
</ul>
<p>As you complete tasks, mark them Done under the <b>By Date</b>, <b>By Week</b>, or <b>By Month</b> tab to clear them from the list. They will reappear each day, week, or month depending on the Date Type setting (Day, Week, Month). Lists and tasks can be nested inside other repeating task lists, much like the folder/file concept.</p>
<p class="MarginBottomZero">If using repeating tasks: </p>
<ul class="MarginBottomGap">
<li>Reminders are not sent to you.</li>
<li>You cannot go to one place and see everything you need to do today.</li>
<li>The list does not specify who needs to do the task.</li>
<li>A supervisor must go to each list to see what is missed.</li>
<li>You cannot subscribe to repeating task lists.</li>
</ul>
<p>Because you no longer have a list hanging on a wall and there is no reminder, staff must remember to perform the task, go into the repeating task list and mark the task done.</p>
<h2>Set Up a Repeating Task List</h2>
<p>Click Setup, Tasks, then check <b>Show legacy repeating tasks</b> to enable. See <a href="tasksetup.html">Tasks Preferences</a>.</p>
<ol>
<li>In the Tasks Area, click the Repeating (setup) tab.</li>
<li>Click<b> Add Task List</b>.</li>
<li>Enter the task list name as the <b>Description</b> (e.g., Equipment Maintenance).</li>
<li>Select a Date Type for the task list. This determines which Date tab it will appear under. <p>Day: For daily tasks (By Date tab).<br/> Week: For tasks done once a week (By Week tab).<br/> Month: For tasks done once a month (By Month tab).</p>
</li>
</ol>
<p>To create nested lists, highlight an existing repeating list first, then click <b>Add Task List</b>. Nested lists inherit the date type of parent lists.</p>
<p><div class="Note">Note: Task lists are sorted alphabetically. Numbering them may help with organization. </div>
</p>
<h2>Add Repeating Tasks to a Repeating Task List</h2>
<p class="MarginBottomZero"></p>
<ol class="MarginBottomGap">
<li>In the Tasks Area, click the Repeating (setup) tab.</li>
<li>Highlight the task list.</li>
<li>Click <b>Add Task</b>.</li>
<li>Enter the task description (e.g., Confirm patients).</li>
<li>Click <b>OK</b>.</li>
</ol>
<p>The task will list under the tab that matches the date type of the task list.</p>
</div>
</div>
</body>
</html>```
