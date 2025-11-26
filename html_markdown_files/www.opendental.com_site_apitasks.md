# File: ./www.opendental.com/site/apitasks.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Tasks</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apitasks','apispecification','documentation')">
	<nav class="LeftTree">
		<div class="TopBarLeft"><p>Table of Contents</p></div>
		<div id="TocTree"><a href="https://www.opendental.com/site/help.html">Help</a></div>
	</nav>
	<div class="RightMain">
		<div class="TopBar">
			<a href="../index.html">
				<div class="Logo">
					<img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
				</div>
			</a>
			<div class="TopBarLinks">
				<div class="TopBarTitle"></div>
				<a href="searchSite.html">
					<div class="TopBarSearch">
						<img src="resources/search.gif"/>
						<p>Search<p>
					</div>
				</a>
			</div>
		</div>
		<div class="TopBar2"><p>API Tasks</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7tasks.html">Tasks</a> are a way for intra-office communication, setting reminders, and more.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96task.html" target="_blank">Task Database Schema.</a></p>
<h2>Tasks GET (single)</h2>
<p>Version Added: 24.4.13</p>
<p>Gets a single task.</p>
<p><b>TaskNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /tasks/1408</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "TaskNum": 1408,<br> "TaskListNum": 14,<br> "DateTask": "0001-01-01",<br> "KeyNum": 33,<br> "Descript": "The attached patient has requested a call back regarding their upcoming appointment.",<br> "TaskStatus": "New",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2024-12-10 13:08:47",<br> "UserNum": 1,<br> "DateTimeFinished": "0001-01-01 00:00:00",<br> "PriorityDefNum": 260,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2024-12-10 13:08:47",<br> "SecDateTEdit": "2024-12-10 13:09:02",<br> "DescriptOverride": "",<br> "IsReadOnly": "false"<br> }<br></span></p>
<p> 200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Tasks GET (multiple)</h2>
<p>Version Added: 22.3.16</p>
<p>Get a list of tasks that meet a set of search criteria. To get a list of all patient or appointment tasks, use only the ObjectType. To get a list of tasks for a specific patient or appointment, use both the ObjectType and KeyNum.</p>
<p><b>Parameters:</b> All optional.</p>
<b>TaskListNum:</b> Optional. tasklist.TaskListNum. Default all TaskLists.<br><b>KeyNum:</b> Optional. Either patient.PatNum or appointment.AptNum. Used when <b>ObjectType</b> is "Patient" or "Appointment". Default 0.<br><b>ObjectType:</b> Optional, unless <b>KeyNum</b> is specified. Either "None", "Patient", or "Appointment". Default all ObjectTypes.<br><b>TaskStatus:</b> Optional. Either "New", "Viewed", or "Done". Default all TaskStatuses.<br><b>DateTimeOriginal:</b> Optional. Gets tasks created after this datetime. String in "yyyy-MM-dd HH:mm:ss" format. Default is the previous 14 days.<br><br><p><b>Example Request:</b><br> GET /tasks?ObjectType=Appointment&amp;DateTimeOriginal=2022-07-01%2005%3A30%3A00<br> GET /tasks?TaskStatus=New&amp;TaskListNum=74</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "TaskNum": 9004,<br> "TaskListNum": 74,<br> "DateTask": "0001-01-01",<br> "KeyNum": 0,<br> "Descript": "Need to re-order general cleaning supplies by this next Friday.",<br> "TaskStatus": "New",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "None",<br> "DateTimeEntry": "2022-10-01 11:18:11",<br> "UserNum": 1,<br> "DateTimeFinished": "0001-01-01 00:00:00",<br> "PriorityDefNum": 358,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2022-10-07 11:18:11",<br> "SecDateTEdit": "2022-10-07 11:18:36",<br> "DescriptOverride": "",<br> "IsReadOnly": "false"<br> },<br> {<br> "TaskNum": 9027,<br> "TaskListNum": 74,<br> "DateTask": "0001-01-01",<br> "KeyNum": 755,<br> "Descript": "Mr. Andersons Insurance needs to be verified before his next appointment.",<br> "TaskStatus": "New",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Appointment",<br> "DateTimeEntry": "2022-10-07 11:16:40",<br> "UserNum": 1,<br> "DateTimeFinished": "0001-01-01 00:00:00",<br> "PriorityDefNum": 358,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2022-10-07 11:16:40",<br> "SecDateTEdit": "2022-10-07 11:17:39",<br> "DescriptOverride": "",<br> "IsReadOnly": "false"<br> },<br> {<br> "TaskNum": 9093,<br> "TaskListNum": 74,<br> "DateTask": "0001-01-01",<br> "KeyNum": 73,<br> "Descript": "Need to update Rebecca's contact information.",<br> "TaskStatus": "New",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2022-10-07 11:17:41",<br> "UserNum": 1,<br> "DateTimeFinished": "0001-01-01 00:00:00",<br> "PriorityDefNum": 358,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2022-10-07 11:17:41",<br> "SecDateTEdit": "2022-10-07 11:17:59",<br> "DescriptOverride": "",<br> "IsReadOnly": "false"<br> }<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 Bad Request (Invalid fields, etc)<br> 404 NotFound (Patient not found, Appointment not found, etc)<br></p>
<h2>Tasks POST (create)</h2>
<p>Version Added: 22.3.17</p>
<p>Creates a new task. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7taskswindow.html">Task Window</a> for more details on each field.</p>
<b>TaskListNum:</b> Required. tasklist.TaskListNum. Use TaskLists GET to find available TaskLists.<br><b>Descript:</b> Required. The description of this task.<br><b>UserNum:</b> Required. userod.UserNum. The user that created the task.<br><br><b>KeyNum:</b> Optional. Either patient.PatNum or appointment.AptNum. Used when <b>ObjectType</b> is "Patient" or "Appointment". Default 0.<br><b>ObjectType:</b> Optional, unless <b>KeyNum</b> is specified. Either "None", "Patient", or "Appointment". Default "None".<br><b>DateTimeEntry:</b> Optional. The date and time that this task was added. String in "yyyy-MM-dd HH:mm:ss". Default to Now.<br><b>PriorityDefNum:</b> Optional. Definition.DefNum where Category=33. Default is the dental office's default, if set, or the first definition in that Category. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7definitionstaskpriorities.html">Definitions: Task Priorities</a>.<br><b>DescriptOverride:</b> Optional. "Short Descript" in UI. Limited to 256 characters.<br><br><p><b>Example Request:</b><br> POST /tasks</p>
<p><span class="codeblock"> {<br> "TaskListNum": 3842,<br> "Descript": "Please attach the Insurance card and info for this patient.",<br> "UserNum": 12,<br> "KeyNum": 73,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2022-10-12 08:00:00",<br> "PriorityDefNum": 90,<br> "DescriptOverride": "Patient insurance task"<br> }<br></span></p>
<b>Example Response:</b><br><p><span class="codeblock"> {<br> "TaskNum": 9093,<br> "TaskListNum": 3842,<br> "DateTask": "0001-01-01",<br> "KeyNum": 73,<br> "Descript": "Please attach the Insurance card and info for this patient.",<br> "TaskStatus": "New",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2022-10-12 08:00:00",<br> "UserNum": 1,<br> "DateTimeFinished": "0001-01-01 00:00:00",<br> "PriorityDefNum": 90,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2022-10-12 07:34:41",<br> "SecDateTEdit": "2022-10-12 07:34:41",<br> "DescriptOverride": "Patient insurance task",<br> "IsReadOnly": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 Bad Request (Invalid fields, etc)<br> 404 NotFound (Patient not found, Appointment not found, etc)<br></p>
<h2>Tasks PUT (update)</h2>
<p>Version Added: 22.4.15</p>
<p>Updates an existing task by TaskNum. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7taskswindow.html">Task Window</a> for more details on each field.</p>
<b>TaskNum:</b> Required in the URL.<br><br><b>Descript:</b> Optional. The description of this task. Overwrites existing. Sets tasks with a <b>TaskStatus</b> of "Done" to "Viewed".<br><b>TaskStatus:</b> (Added in version 24.2.10) Optional. Either "New", "Viewed", or "Done".<br><b>KeyNum:</b> Optional. Either patient.PatNum or appointment.AptNum. Used when <b>ObjectType</b> is "Patient" or "Appointment".<br><b>ObjectType:</b> Optional, unless <b>KeyNum</b> is specified. Either "None", "Patient", or "Appointment".<br><b>DateTimeEntry:</b> Optional. The date and time that this task was added. Also used for reminder tasks. String in "yyyy-MM-dd HH:mm:ss".<br><b>PriorityDefNum:</b> Optional. Definition.DefNum where Category=33.<br><b>DescriptOverride:</b> Optional. "Short Descript" in UI. Overwrites existing. Limited to 256 characters.<br><br><p><b>Example Request:</b><br> PUT /tasks/6857</p>
<p><span class="codeblock"> {<br> "TaskStatus": "Done",<br> "DateTimeEntry": "2023-01-12 08:00:00",<br> "PriorityDefNum": 90<br> }<br><br> or<br><br> {<br> "Descript": "Please attach the Insurance card and info for this patient.",<br> "KeyNum": 73,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2023-01-12 08:00:00",<br> "PriorityDefNum": 90,<br> "DescriptOverride": "Patient insurance task"<br> }<br></span></p>
<b>Example Response:</b><br><p><span class="codeblock"> {<br> "TaskNum": 6857,<br> "TaskListNum": 3842,<br> "DateTask": "0001-01-01",<br> "KeyNum": 73,<br> "Descript": "Please attach the Insurance card and info for this patient.",<br> "TaskStatus": "Done",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2023-01-12 08:00:00",<br> "UserNum": 1,<br> "DateTimeFinished": "2023-01-15 08:00:00",<br> "PriorityDefNum": 90,<br> "ReminderGroupId": "",<br> "ReminderType": "NoReminder",<br> "ReminderFrequency": 0,<br> "DateTimeOriginal": "2023-01-10 08:23:36",<br> "SecDateTEdit": "2023-01-11 07:34:41",<br> "DescriptOverride": "Patient insurance task",<br> "IsReadOnly": "false"<br> }<br></span></p>
<p> 200 OK<br> 400 Bad Request (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
