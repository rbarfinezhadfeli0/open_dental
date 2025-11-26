# File: ./www.opendental.com/site/apitasklists.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API TaskLists</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apitasklists','apispecification','documentation')">
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
		<div class="TopBar2"><p>API TaskLists</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96tasklist.html" target="_blank">TaskList Database Schema.</a></p>
<h2>TaskLists GET</h2>
<p>Version Added: 22.3.15</p>
<p>Gets a list of all the TaskLists filtered by <b>TaskListStatus</b>.</p>
<p><b>Parameters:</b></p>
<b>TaskListStatus:</b> Optional. Either "Active" or "Archived". Default "Active".<br><br><p><b>Example Request</b><br> GET /tasklists?TaskListStatus=Archived&amp;Offset=100</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "TaskListNum": 102,<br> "Descript": "Brittany",<br> "Parent": 0,<br> "DateTL": "0001-01-01",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Patient",<br> "DateTimeEntry": "2021-10-05 10:25:43",<br> "TaskListStatus": "Archived"<br> },<br> {<br> "TaskListNum": 103,<br> "Descript": "Brittany Paperwork",<br> "Parent": 102,<br> "DateTL": "0001-01-01",<br> "IsRepeating": "false",<br> "DateType": "Week",<br> "FromNum": 0,<br> "ObjectType": "None",<br> "DateTimeEntry": "2021-10-05 10:27:29",<br> "TaskListStatus": "Archived"<br> },<br> {<br> "TaskListNum": 105,<br> "Descript": "Brittany Appointments",<br> "Parent": 102,<br> "DateTL": "0001-01-01",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "Appointment",<br> "DateTimeEntry": "2021-10-05 10:28:11",<br> "TaskListStatus": "Archived"<br> },<br> {<br> "TaskListNum": 107,<br> "Descript": "Debbie",<br> "Parent": 0,<br> "DateTL": "0001-01-01",<br> "IsRepeating": "false",<br> "DateType": "None",<br> "FromNum": 0,<br> "ObjectType": "None",<br> "DateTimeEntry": "2021-10-28 11:46:16",<br> "TaskListStatus": "Archived"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 Bad Request (Invalid TaskListStatus)<br></p>
		</div>
	</div>
</body>
</html>```
