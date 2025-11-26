# File: ./www.opendental.com/site/apisheets.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Sheets</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisheets','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Sheets</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96sheet.html" target="_blank">Sheet Database Schema.</a></p>
<h2>Sheets GET</h2>
<p>Version Added: 21.4</p>
<p>Gets all Sheets for a single patient.</p>
<p><b>PatNum:</b> Required. </p>
<p><b>Example Request:</b><br> GET /sheets?PatNum=123<br> GET /sheets?PatNum=123&amp;Offset=400<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br>  "SheetNum": 45,<br>  "SheetType": "PatientLetter",<br>  "PatNum": 123,<br>  "DateTimeSheet": "2021-11-16 02:45:38",<br>  "InternalNote": "",<br>  "Description": "Custom Patient Letter",<br>  "IsWebForm": "false",<br>  "SheetDefNum": 25,<br>  "DocNum": 0,<br>  "ClinicNum": 0,<br>  "DateTSheetEdited": "2022-01-23 08:33:02"<br> },<br> {<br>  "SheetNum": 47,<br>  "SheetType": "MedicalHistory",<br>  "PatNum": 123,<br>  "DateTimeSheet": "2021-11-16 12:21:03",<br>  "InternalNote": "",<br>  "Description": "Medical History Simple",<br>  "IsWebForm": "false",<br>  "SheetDefNum": 24,<br>  "DocNum": 0,<br>  "ClinicNum": 0,<br>  "DateTSheetEdited": "2022-11-23 04:20:12"<br> },<br> {<br>  "SheetNum": 50,<br>  "SheetType": "ExamSheet",<br>  "PatNum": 123,<br>  "DateTimeSheet": "2022-03-07 10:25:00",<br>  "InternalNote": "",<br>  "Description": "Exam",<br>  "IsWebForm": "false",<br>  "SheetDefNum": 20,<br>  "DocNum": 0,<br>  "ClinicNum": 0,<br>  "DateTSheetEdited": "2022-03-07 10:25:22"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation) </p>
<h2>Sheets POST</h2>
<p>Version Added: 23.1.32</p>
<p>Creates a Sheet with SheetFields using an existing SheetDef for a patient. Only SheetDefs of SheetType "Consent", "PatientLetter", "PatientForm", "MedicalHistory", and "ExamSheet" are supported.</p>
<p><b>SheetDefNum:</b> Required. FK to sheetdef.SheetDefNum.<br><b>PatNum:</b> Required.<br><b>InternalNote:</b> Optional.<br></p>
<p><b>Example Request:</b><br> POST /sheets<br></p>
<p><span class="codeblock"> {<br> "SheetDefNum": 25,<br> "PatNum": 465<br> }<br></span></p>
<b>Example Response:</b><br><span class="codeblock"> {<br>  "SheetNum": 70,<br>  "SheetType": "PatientLetter",<br>  "PatNum": 465,<br>  "DateTimeSheet": "2023-06-21 15:24:52",<br>  "InternalNote": "",<br>  "Description": "Patient Letter",<br>  "IsWebForm": "false",<br>  "SheetDefNum": 25,<br>  "DocNum": 0,<br>  "ClinicNum": 0,<br>  "DateTSheetEdited": "2023-06-21 15:24:52"<br> } </span><br><br><p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation) </p>
<h2>Sheets POST DownloadSftp</h2>
<p>Version Added: 22.1</p>
<p>Converts a sheet to a PDF, then downloads it to an SFTP site that you specify. After running this method, download the resulting file from your SFTP site. The user with the SFTP credentials must have write permission in this directory. Directory will be created if it does not exist, and files already existing with the specified name will be overwritten. If no file name is specified, the file will be titled "sheet.pdf".</p>
<p><b>SheetNum:</b> Required.<br><b>SftpAddress:</b> Required.<br><b>SftpUsername:</b> Required.<br><b>SftpPassword:</b> Required.<br></p>
<p><b>Example Request:</b><br> POST /sheets/DownloadSftp<br></p>
<p><span class="codeblock"> {<br> "SheetNum": 50,<br> "SftpAddress": "MySftpSite/myUsername/Sheets/ExamSheetJones.pdf",<br> "SftpUsername": "myUsername",<br> "SftpPassword": "myPassword"<br> }<br></span></p>
<p><b>Example Response:</b><br></p>
<p> 201 Created, "location": The full filepath of the saved file.<br> 400 BadRequest (Invalid fields, invalid file extension, and Sftp connection errors).<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
