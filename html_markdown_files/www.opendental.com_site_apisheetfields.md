# File: ./www.opendental.com/site/apisheetfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API SheetFields</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisheetfields','apispecification','documentation')">
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
		<div class="TopBar2"><p>API SheetFields</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../OpenDentalDocumentation25-2.xml#sheetfield" target="_blank">SheetFields Database Schema</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96sheetfield.html" target="_blank">SheetField Database Schema.</a></p>
<h2>SheetFields GET (single)</h2>
<p>Version Added: 22.1</p>
<p>Gets a SheetField.</p>
<p><b>SheetFieldNum:</b> Required. </p>
<p><b>Example Request:</b><br><div style="background-color:#EEEEEE; margin:auto; padding:5px;">
 GET /sheetfields/1049<br></div>
</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "SheetFieldNum": 1049,<br> "SheetNum": 24,<br> "FieldType": "InputField",<br> "FieldName": "prov.nameFormal",<br> "FieldValue": "John D. Smith",<br> "IsRequired": "true",<br> "ReportableName": "",<br> "DateTimeSig": "0001-01-01 00:00:00"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>SheetFields GET (multiple)</h2>
<p>Version Added: 22.1</p>
<p>Gets all SheetFields.</p>
<p><b>SheetNum:</b> Optional after version 25.2.3. </p>
<p><b>Example Requests:</b><br><div style="background-color:#EEEEEE; margin:auto; padding:5px;">
 GET /sheetfields<br> GET /sheetfields?SheetNum=24<br> GET /sheetfields?SheetNum=24&amp;Offset=200<br></div>
</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "SheetFieldNum": 1049,<br> "SheetNum": 24,<br> "FieldType": "InputField",<br> "FieldName": "prov.nameFormal",<br> "FieldValue": "John D. Smith",<br> "IsRequired": "true",<br> "ReportableName": "",<br> "DateTimeSig": "0001-01-01 00:00:00"<br> },<br> {<br> "SheetFieldNum": 3068,<br> "SheetNum": 24,<br> "FieldType": "SigBoxPractice",<br> "FieldName": "",<br> "FieldValue": "1FFFFFFFB59486...",<br> "IsRequired": "false",<br> "ReportableName": "",<br> "DateTimeSig": "2023-07-17 13:38:27"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>SheetFields PUT </h2>
<p>Version Added: 25.2</p>
<p>Updates a sheetfield. Only SheetFields of FieldType "OutputText", "InputField", and "CheckBox" are supported.</p>
<p><b>SheetFieldNum: </b>Required in the URL.<br><br><b>FieldValue: </b>Optional. OutputText is pulled from the database to be printed on the sheet. InputField is blank box that the user is supposed to fill in. CheckBox is a clickable area on the screen. It's a form of input, so treated similarly to an InputField.<br></p>
<b>Example Request:</b><br><p><div style="background-color:#EEEEEE; margin:auto; padding:5px;">
 PUT /sheetfields/1049<br><span class="codeblock"> {<br> "FieldValue": "John D. Smith"<br> }<br></span></div>
</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "SheetFieldNum": 1049,<br> "SheetNum": 24,<br> "FieldType": "InputField",<br> "FieldName": "prov.nameFormal",<br> "FieldValue": "John D. Smith",<br> "IsRequired": "true",<br> "ReportableName": "",<br> "DateTimeSig": "0001-01-01 00:00:00"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
