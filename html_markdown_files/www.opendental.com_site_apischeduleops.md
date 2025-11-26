# File: ./www.opendental.com/site/apischeduleops.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ScheduleOps</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apischeduleops','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ScheduleOps</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>A scheduleop links one schedule block to one operatory. A schedule block can be linked to one or more operatories. A schedule can also not have any scheduleops.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96scheduleop.html" target="_blank">ScheduleOp Database Schema.</a></p>
<h2>ScheduleOps GET</h2>
<p>Version Added: 23.2.27</p>
<p>Gets a list of scheduleops optionally filtered by either <b>ScheduleNum</b> or <b>OperatoryNum</b>.</p>
<p><b>Parameters:</b> All optional.<br></p>
<p><b>ScheduleNum:</b> FK to schedule.ScheduleNum.<br><b>OperatoryNum:</b> FK to operatory.OperatoryNum.<br></p>
<p><b>Example Requests:</b><br> GET /scheduleops<br> GET /scheduleops?ScheduleNum=1093<br> GET /scheduleops?OperatoryNum=14<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br>  "ScheduleOpNum": 156,<br>  "ScheduleNum": 1092,<br>  "OperatoryNum": 12<br>  },<br>  {<br>  "ScheduleOpNum": 157,<br>  "ScheduleNum": 1092,<br>  "OperatoryNum": 13<br>  },<br>  {<br>  "ScheduleOpNum": 158,<br>  "ScheduleNum": 1092,<br>  "OperatoryNum": 14<br>  },<br>  {<br>  "ScheduleOpNum": 159,<br>  "ScheduleNum": 1093,<br>  "OperatoryNum": 12<br>  },<br>  {<br>  "ScheduleOpNum": 160,<br>  "ScheduleNum": 1093,<br>  "OperatoryNum": 13<br>  },<br>  {<br>  "ScheduleOpNum": 161,<br>  "ScheduleNum": 1093,<br>  "OperatoryNum": 14<br>  },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
