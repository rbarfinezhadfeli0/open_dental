# File: ./www.opendental.com/site/apiapptfielddefs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ApptFieldDefs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiapptfielddefs','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ApptFieldDefs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Appointment Field Defs allow you to organize notes specific to a patient's appointment and are displayed in the bottom left of the Edit Appointment window. </p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96apptfielddef.html" target="_blank">ApptFieldDef Database Schema.</a></p>
<h2>ApptFieldDefs GET</h2>
<p>Version Added: 21.4</p>
<p>Gets a list of all Appointment Field Defs.</p>
<p><b>Example Request</b><br> GET /apptfielddefs</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br> "ApptFieldDefNum": 7,<br> "FieldName": "Verify Insurance",<br> "FieldType": "Text",<br> "PickList": ""<br> },<br> {<br> "ApptFieldDefNum": 8,<br> "FieldName": "Patient a minor",<br> "FieldType": "PickList",<br> "PickList": "Yes\r\nNo\r\nUnknown"<br> },<br> {<br> "ApptFieldDefNum": 11,<br> "FieldName": "Temperature",<br> "FieldType": "Text",<br> "PickList": ""<br> }<br> ]<br></span></p>
<h2>ApptFieldDefs POST (create)</h2>
<p>Version Added: 21.4</p>
<p>The API supports creating both Text type and PickList type ApptFieldDefs. Duplicate ApptFieldDefs are not allowed.</p>
<p><b>FieldName:</b>Required. The name of the field.<br><b>FieldType</b>: Optional. Either "Text" or "PickList". If "Text", in the Edit Appointment window, users can enter any free-form text. If "PickList", users will select from a list of items. Default is "Text".<br><b>PickList:</b> Optional. Only used if FieldType is "PickList". Each item in the list must be separated by a \r\n to display properly in the Edit Appointment window.<br></p>
<p><b>Example Request:</b><br> POST /apptfielddefs</p>
<p><span class="codeblock"> {<br> "FieldName": "Temperature"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br>  "FieldName": "Patient a minor?",<br>  "FieldType": "PickList",<br>  "PickList": "Yes\r\nNo\r\nUnknown"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "ApptFieldDefNum": 11,<br>  "FieldName": "Temperature",<br> "FieldType": "Text",<br> "PickList": ""<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "ApptFieldDefNum": 8,<br> "FieldName": "Patient a minor?",<br> "FieldType": "PickList",<br> "PickList": "Yes\r\nNo\r\nUnknown"<br> }<br></span></p>
<p>201 Created<br> 400 Bad Request (with explanation)</p>
		</div>
	</div>
</body>
</html>```
