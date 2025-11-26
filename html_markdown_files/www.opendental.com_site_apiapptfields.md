# File: ./www.opendental.com/site/apiapptfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ApptFields</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiapptfields','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ApptFields</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>An ApptField is a highly customizable field that shows on appointments. For example, the office might have an ApptField called "Ins Verified", and you might use the API to set it to "Yes" for a specific appointment. There is some prep work that you must do with the office ahead of time. From within the Open Dental UI at the office, you must first add the field under Setup, Appointments, Appointment Field Defs. There would be additional work to make it also show in the Appt Views and/or Appt Bubble.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96apptfield.html" target="_blank">ApptField Database Schema.</a></p>
<h2>ApptFields GET</h2>
<p>Version Added: 21.1</p>
<p>If an ApptField exists for the appointment, it gets the value. If an ApptField does not exist, it returns an empty string.</p>
<p><b>AptNum: </b>Required.<br><b>FieldName: </b>Required.<br></p>
<p><b>Example Request</b><br> GET /apptfields?AptNum=101&amp;FieldName=Ins%20Verified</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "FieldName": "Ins Verified",<br>  "AptNum":101,<br>  "FieldValue":"Yes"<br> }<br></span></p>
<h2>ApptFields PUT</h2>
<p>Version Added: 21.1</p>
<p>If an ApptField already exists for the appointment, it gets set to the new value, overwriting the old value. If an ApptField does not yet exist for the appointment, then an ApptField gets inserted into the database. </p>
<p><b>AptNum: </b>Required.<br><b>FieldName:</b> Required.<br><b>FieldValue:</b> Required. <br></p>
<p><b>Example Request:</b><br> PUT /apptfields</p>
<p><span class="codeblock"> {<br>  "FieldName": "Ins Verified",<br>  "AptNum":101,<br>  "FieldValue":"Yes"<br> }<br></span></p>
<p><b>Example Response:<br></b> 200 OK<br> 400 Bad Request (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
