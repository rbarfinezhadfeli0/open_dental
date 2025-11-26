# File: ./www.opendental.com/site/apioperatories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Operatories</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apioperatories','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Operatories</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96operatory.html" target="_blank">Operatory Database Schema.</a></p>
<h2>Operatories GET (single)</h2>
<p>Version Added: 24.1.10</p>
<p>Gets a single operatory.</p>
<p><b>OperatoryNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /operatories/1<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "OperatoryNum": 1,<br> "OpName": "Dr. Brian Albert",<br> "Abbrev": "OP-1",<br> "ItemOrder": 0,<br> "IsHidden": "false",<br> "ProvDentist": 1,<br> "ProvHygienist": 0,<br> "IsHygiene": "false",<br> "ClinicNum": 2,<br> "SetProspective": "false",<br> "IsWebSched": "false"<br> "OperatoryType": 0, <br> "operatoryType": ""<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Operatories GET (multiple)</h2>
<p>Version Added: 21.1</p>
<p>Gets a list of all operatories.</p>
<p><b>ClinicNum</b>: Optional. </p>
<p><b>Example Requests:</b><br> GET /operatories<br> GET /operatories?ClinicNum=2<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "OperatoryNum": 1,<br> "OpName": "Dr. Brian Albert",<br> "Abbrev": "OP-1",<br> "ItemOrder": 0,<br> "IsHidden": "false",<br> "ProvDentist": 1,<br> "ProvHygienist": 0,<br> "IsHygiene": "false",<br> "ClinicNum": 0,<br> "SetProspective": "false",<br> "IsWebSched": "false"<br> "OperatoryType": 0, <br> "operatoryType": ""<br> },<br>  {<br> "OperatoryNum": 2,<br> "OpName": "Dr. Sarah Lexington",<br> "Abbrev": "OP-2",<br> "ItemOrder": 1,<br> "IsHidden": "false",<br> "ProvDentist": 3,<br> "ProvHygienist": 0,<br> "IsHygiene": "false",<br> "ClinicNum": 0,<br> "SetProspective": "false",<br> "IsWebSched": "false"<br> "OperatoryType": 0, <br> "operatoryType": ""<br> }<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
