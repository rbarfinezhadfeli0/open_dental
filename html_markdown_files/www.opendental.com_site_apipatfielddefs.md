# File: ./www.opendental.com/site/apipatfielddefs.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PatFieldDefs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipatfielddefs','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PatFieldDefs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7custompatientfields.html">Patient Field Defs</a> allow you to organize fields that are found in various areas of Open Dental such as the Patient Information area of the Family Module, Account Module, and Chart Module. </p>
<p><span style="color:red">In version 24.1, the PickList field was deprecated and replaced with the PatFieldPickItem table. Documentation has changed to reflect this, but the logic continues to support existing implementations.</span></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96patfielddef.html" target="_blank">PatFieldDef Database Schema.</a></p>
<h2>PatFieldDefs GET</h2>
<p>Version Added: 22.4.9</p>
<p>Gets a list of patfielddefs.</p>
<p><b>Example Request</b><br> GET /patfielddefs</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br>  {<br>  "PatFieldDefNum": 7,<br>  "FieldName": "Outstanding",<br>  "FieldType": "Currency",<br>  "PickList": "",<br>  "IsHidden": "false"<br> },<br> {<br> "PatFieldDefNum": 8,<br> "FieldName": "Ortho Status",<br> "FieldType": "PickList",<br> "PickList": ""<br>  "IsHidden": "false"<br> },<br> {<br> "PatFieldDefNum": 11,<br> "FieldName": "Accommodations",<br> "FieldType": "Text",<br> "PickList": ""<br>  "IsHidden": "false"<br> }<br> ]<br></span></p>
<p>200 OK<br></p>
<h2>PatFieldDefs POST (create)</h2>
<p>Version Added: 23.3.26</p>
<p>Creates a patfielddef.</p>
<p><b>FieldName:</b> Required. Name of the field. Must be unique.<br><b>FieldType:</b> Required. Either "Text", "PickList", "Date", "Checkbox", "Currency", "CareCreditStatus", "CareCreditPreApprovalAmt" (Added in version 24.1), or "CareCreditAvailableCredit" (Added in version 24.1).<br><b>PickList:</b> Required if <b>FieldType</b> is "PickList". Otherwise, not allowed. Each item in the list must be separated by a \r\n. Creates a PatFieldPickItem entry for each item in the list. The PatFieldDefs' PickList column will remain blank.<br></p>
<p><b>IsHidden:</b> Optional. Either "true" or "false". Default "false".<br></p>
<p><b>Example Request:</b><br> POST /patfielddefs<br></p>
<p><span class="codeblock"> {<br> "FieldName": "Favorite Color",<br> "FieldType": "PickList",<br> "PickList": "Red\r\nBlue\r\nYellow"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatFieldDefNum": 16,<br> "FieldName": "Favorite Color",<br> "FieldType": "PickList",<br> "PickList": ""<br> "IsHidden": "false"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br></p>
<h2>PatFieldDefs PUT (update)</h2>
<p>Version Added: 23.3.26</p>
<p>Updates a patfielddef.</p>
<p><b>PatFieldDefNum:</b> Required in the URL.<br></p>
<p><b>FieldName:</b> Name of the field. Cannot be changed for in-use CareCredit fields. Must be unique.<br><b>FieldType:</b> Either "Text", "PickList", "Date", "Checkbox", "Currency", "CareCreditStatus", "CareCreditPreApprovalAmt" (Added in version 24.1), or "CareCreditAvailableCredit" (Added in version 24.1).<br><b>PickList:</b> Only allowed if <b>FieldType</b> is "PickList". <span style="color:red">As of version 24.1, this is only allowed and required if changing the FieldType of a PatFieldDef to "PickList" from any other FieldType. It can no longer be used to edit a preexisting PickList.</span> Each item in the list must be separated by a \r\n.<br><b>IsHidden:</b> Either "true" or "false".<br></p>
<p><b>Example Requests:</b><br> PUT /patfielddefs/18<br></p>
<p><span class="codeblock"> {<br> "FieldType": "PickList",<br> "PickList": "Spring\r\nSummer\r\nAutumn\r\nWinter"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatFieldDefNum": 18,<br> "FieldName": "Favorite Season",<br> "FieldType": "PickList",<br> "PickList": "",<br> "IsHidden": "false"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PatFieldDefs DELETE</h2>
<p>Version Added: 23.3.26</p>
<p>Deletes a patfielddef. Cannot delete a patfielddef that is in use.</p>
<p><b>PatFieldDefNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /patfielddefs/16<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
