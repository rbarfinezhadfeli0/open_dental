# File: ./www.opendental.com/site/apipatfields.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PatFields</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipatfields','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PatFields</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7custompatientfields.html">Patient Fields</a> are custom fields that are found in various areas of Open Dental such as the Patient Information area of the Family Module, Account Module, and Chart Module.</p>
<p><b>FieldTypes</b> can be:  <li>Text - String.</li>
<li>PickList - patfieldpickitem.Name for the patfielddef</li>
<li>Date - String in "yyyy-MM-dd" format.</li>
<li>Checkbox - "1" indicates true.</li>
<li>Currency - Monetary amount.</li>
</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96patfield.html" target="_blank">PatField Database Schema</a>.</p>
<h2>PatFields GET (single)</h2>
<p>Version Added: 22.4</p>
<p>Gets a single PatField.</p>
<p><b>PatFieldNum: </b>Required in the URL.</p>
<p><b>Example Request:</b><br> GET /patfields/5<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatFieldNum": 5,<br> "PatNum": 69,<br> "FieldName": "Ins Verified",<br> "FieldValue": "Yes",<br> "SecDateEntry":"2021-12-04",<br> "SecDateTEdit": "2022-12-15 11:26:31"<br> }<br></span></p>
<h2>PatFields GET (multiple)</h2>
<p>Version Added: 21.1</p>
<p>Gets a list of PatFields.</p>
<p><b>Parameters:</b> All optional.</p>
<p><b>PatNum:</b> (Optional after version 22.4.5) The patient's PatNum.<br><b>FieldName:</b> (Optional after version 22.4.5) FK to patFieldDef.FieldName. Case sensitive.<br><b>SecDateTEdit:</b> (Added in version 22.4.5) Timestamp representing when the PatField was last edited. In "yyyy-MM-dd HH:mm:ss" format.<br></p>
<p><b>Example Requests:</b><br> GET /patfields<br> GET /patfields?PatNum=69&amp;FieldName=Ins%20Verified<br> GET /patfields?FieldName=Deposit<br></p>
<p><b>Example Responses:</b><br><span class="codeblock"> [<br> {<br> "PatFieldNum": 1,<br> "PatNum": 39,<br> "FieldName": "Deposit",<br> "FieldValue": "450.29",<br> "SecDateEntry":"2021-02-04",<br> "SecDateTEdit": "2022-12-22 09:31:00"<br> },<br> {<br> "PatFieldNum": 2,<br> "PatNum": 68,<br> "FieldName": "Over 18",<br> "FieldValue": "1",<br> "SecDateEntry":"2020-03-14",<br> "SecDateTEdit": "2022-10-22 08:35:33"<br> },<br> {<br> "PatFieldNum": 3,<br> "PatNum": 86,<br> "FieldName": "Ortho Status",<br> "FieldValue": "In Progress",<br> "SecDateEntry":"2020-06-24",<br> "SecDateTEdit": "2022-12-22 14:45:11"<br> },<br> etc...<br> ]<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "PatFieldNum": 5,<br> "PatNum": 69,<br> "FieldName": "Ins Verified",<br> "FieldValue":"Yes",<br> "SecDateEntry":"2021-05-05",<br> "SecDateTEdit": "2022-12-15 11:26:31"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "PatFieldNum": 1,<br> "PatNum": 39,<br> "FieldName": "Deposit",<br> "FieldValue": "450.29",<br> "SecDateEntry":"2009-11-09",<br> "SecDateTEdit": "2022-12-22 09:31:00"<br> }<br></span></p>
<h2>PatFields POST (create)</h2>
<p>Version Added: 22.4</p>
<p>Creates a patfield. Cannot create PatFields associated with hidden PatFieldDefs.</p>
<p><b>Parameters: </b></p>
<p><b>PatNum: </b>Required. The patient's PatNum.<br><b>FieldName: </b>Required. FK to PatFieldDef.FieldName. Case sensitive.<br><b>FieldValue: </b>Required. See the top of this page for more information. Relies on PatFieldDef.FieldType.<br></p>
<p><b>Example Request:</b><br> POST /patfields<br></p>
<p><span class="codeblock"> {<br> "PatNum":10,<br> "FieldName": "Ins Verified",<br> "FieldValue":"Yes"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatFieldNum": 29,<br> "PatNum": 10,<br> "FieldName": "Ins Verified",<br> "FieldValue": "Yes",<br> "SecDateEntry":"2021-12-04",<br> "SecDateTEdit": "2022-12-28 09:38:01"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PatFields PUT</h2>
<p>Version Added: 21.1</p>
<p>Updates an existing patfield.</p>
<p><b>Parameters:</b></p>
<p><b>PatNum: </b>Required. The patient's PatNum.<br><b>FieldName: </b>Required. FK to patFieldDef.FieldName. Case sensitive.<br><b>FieldValue: </b>Required. See the top of this page for more information. Relies on PatFieldDef.FieldType.<br></p>
<p><b>Example Request:</b><br> PUT /patfields<br></p>
<p><span class="codeblock"> {<br>  "PatNum": 10,<br>  "FieldName": "Ins Verified",<br>  "FieldValue":"No"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatFieldNum": 29,<br> "PatNum": 10,<br> "FieldName": "Ins Verified",<br> "FieldValue": "No",<br> "SecDateEntry": "2025-09-17",<br> "SecDateTEdit": "2025-09-17 13:15:56"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PatFields DELETE</h2>
<p>Version Added: 22.4</p>
<p>Deletes a patfield. Will not delete a PatField with an associated PatFieldDef of type CareCreditStatus.</p>
<p><b>PatFieldNum: </b>Required in the URL.</p>
<p><b>Example Request:</b><br> DELETE /patfields/29<br></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)</p>
		</div>
	</div>
</body>
</html>```
