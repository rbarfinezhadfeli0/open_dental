# File: ./www.opendental.com/site/apiappointmenttypes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API AppointmentTypes</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiappointmenttypes','apispecification','documentation')">
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
		<div class="TopBar2"><p>API AppointmentTypes</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96appointmenttype.html" target="_blank">AppointmentType Database Schema.</a></p>
<h2>AppointmentTypes GET</h2>
<p>Version Added: 22.4.10</p>
<p>Gets a list of AppointmentTypes.</p>
<p><b>Example Request:</b><br> GET /appointmenttypes</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "AppointmentTypeNum": 1,<br> "AppointmentTypeName": "WebSched New Patient Default",<br> "appointmentTypeColor": "93,54,220",<br> "IsHidden": "false",<br> "Pattern": "//XX//",<br> "CodeStr": "",<br> "CodeStrRequired": "",<br> "RequiredProcCodesNeeded": 0,<br> "BlockoutTypes": ""<br> },<br> {<br> "AppointmentTypeNum": 2,<br> "AppointmentTypeName": "WebSched",<br> "appointmentTypeColor": "74,250,61",<br> "IsHidden": "false",<br> "Pattern": "//XX//",<br> "CodeStr": "D0272,D0274",<br> "CodeStrRequired": "D0272,D0274",<br> "RequiredProcCodesNeeded": "AtLeastOne",<br> "BlockoutTypes": "TeleExam"<br> },<br> etc...<br> ]<br></span></p>
 200 OK<br>		</div>
	</div>
</body>
</html>```
