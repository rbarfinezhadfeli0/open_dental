# File: ./www.opendental.com/site/apisheetdefs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API SheetDefs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisheetdefs','apispecification','documentation')">
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
		<div class="TopBar2"><p>API SheetDefs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96sheetdef.html" target="_blank">SheetDef Database Schema.</a></p>
<h2>SheetDefs GET (single)</h2>
<p>Version Added: 25.1.20</p>
<p>Gets a single SheetDef.</p>
<p><b>SheetDefNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /sheetdefs/1</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "SheetDefNum": 1,<br> "Description": "Excuse Letter",<br> "SheetType": "PatientLetter"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound</p>
<h2>SheetDefs GET (multiple)</h2>
<p>Version Added: 23.2.5.0</p>
<p>Gets a list of SheetDefs.</p>
<p><b>SheetType:</b> Optional. (Added in version 25.1.20). Filter by SheetTypeEnum. See <a href="../OpenDentalDocumentation25-1.xml">Database Schema</a> for options.</p>
<p><b>Example Requests:</b><br> GET /sheetdefs<br> GET /sheetdefs?SheetType=PatientForm<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "SheetDefNum": 1,<br> "Description": "Excuse Letter",<br> "SheetType": "PatientLetter"<br> },<br> {<br> "SheetDefNum": 2,<br> "Description": "Screening",<br> "SheetType": "Screening"<br> },<br> {<br> "SheetDefNum": 3,<br> "Description": "Registration Form",<br> "SheetType": "PatientForm"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
