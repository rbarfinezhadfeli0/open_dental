# File: ./www.opendental.com/site/apilabcases.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API LabCases</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apilabcases','apispecification','documentation')">
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
		<div class="TopBar2"><p>API LabCases</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7labcaseedit.html">Lab Case</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96labcase.html" target="_blank">LabCase Database Schema.</a></p>
<h2>LabCases GET (single)</h2>
<p>Version Added: 24.2.28</p>
<p>Gets a single labcase.</p>
<p><b>LabCaseNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /labcases/1<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LabCaseNum": 1,<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 6994,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "0001-01-01 00:00:00",<br> "DateTimeCreated": "0001-01-01 00:00:00",<br> "DateTimeSent": "2000-01-01 00:00:00",<br> "DateTimeRecd": "2000-01-01 00:00:00",<br> "DateTimeChecked": "0001-01-01 00:00:00",<br> "ProvNum": 1,<br> "Instructions": "",<br> "LabFee": 0.0,<br> "DateTStamp": "2022-09-30 14:23:12",<br> "InvoiceNum": ""<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>LabCases GET (multiple)</h2>
<p>Version Added: 24.2.28</p>
<p>Gets a list of labcases.</p>
<p><b>Parameters:</b> All optional.<br></p>
<p><b>PatNum: </b> FK to patient.PatNum.<br><b>LaboratoryNum: </b> FK to laboratory.LaboratoryNum. The lab that the case gets sent to.<br><b>AptNum: </b> FK to appointment.AptNum.<br><b>PlannedAptNum: </b> FK to appointment.AptNum.<br><b>ProvNum : </b> FK to provider.ProvNum.<br></p>
<p><b>Example Requests:</b><br> GET /labcases<br> GET /labcases?PatNum=1<br> GET /labcases?LaboratoryNum=5<br> GET /labcases?AptNum=143<br> GET /labcases?PlannedAptNum=357<br> GET /labcases?AptNum=143&amp;ProvNum=3<br></p>
<p><b>Example Responses:</b><br><span class="codeblock"> [<br> {<br> "LabCaseNum": 226,<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 143,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "0001-01-01 00:00:00",<br> "DateTimeCreated": "2022-09-30 14:23:12",<br> "DateTimeSent": "2022-10-03 14:24:12",<br> "DateTimeRecd": "2022-10-04 14:24:12",<br> "DateTimeChecked": "2022-10-05 14:24:12",<br> "ProvNum": 3,<br> "Instructions": "Repair clasps on Max partial",<br> "LabFee": 0.0,<br> "DateTStamp": "2022-10-05 14:24:12",<br> "InvoiceNum": ""<br> },<br> {<br> "LabCaseNum": 227,<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 143,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "0001-01-01 00:00:00",<br> "DateTimeCreated": "2022-09-30 14:24:12",<br> "DateTimeSent": "2022-09-30 14:24:12",<br> "DateTimeRecd": "2022-10-03 14:24:12",<br> "DateTimeChecked": "2022-10-04 14:24:12",<br> "ProvNum": 3,<br> "Instructions": "",<br> "LabFee": 0.0,<br> "DateTStamp": "2022-10-04 14:24:12",<br> "InvoiceNum": ""<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>LabCases POST (create)</h2>
<p>Version Added: 24.4.19</p>
<p>Creates a labcase.</p>
<p><b>PatNum: </b>Required. FK to patient.PatNum.<br><b>LaboratoryNum:</b> Required. FK to laboratory.LaboratoryNum. The lab that the case gets sent to.<br><b>ProvNum:</b> Required. FK to provider.ProvNum.<br><br><b>AptNum:</b> Optional. FK to appointment.AptNum where appointment.AptStatus=Scheduled.<br><b>PlannedAptNum:</b> Optional. FK to appointment.AptNum where appointment.AptStatus=Planned.<br><b>DateTimeDue:</b> Optional. The due date that is put on the labslip. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeCreated:</b> Optional. When the labcase was created. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeSent:</b> Optional. The time that the labcase actually went out to the lab. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeRecd:</b> Optional. Date/time received back from the lab. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeChecked:</b> Optional. Date/time that quality was checked. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>Instructions:</b> Optional. The text instructions for this labcase.<br><b>LabFee:</b> Optional. This is used for tracking and informational purposes only. The fee is not used in any calculation.<br><b>InvoiceNum:</b> Optional. This is an optional invoice number used for tracking and informational purposes only.<br></p>
<p><b>Example Request:</b><br> POST /labcases<br></p>
<p><span class="codeblock"> {<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 143,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "2022-10-04 14:23:12",<br> "DateTimeCreated": "2022-09-30 14:23:12",<br> "DateTimeSent": "2022-10-03 14:24:12",<br> "DateTimeRecd": "2022-10-04 14:24:12",<br> "DateTimeChecked": "2022-10-05 14:24:12",<br> "ProvNum": 3,<br> "Instructions": "Repair clasps on Max partial",<br> "LabFee": 0.0,<br> "InvoiceNum": ""<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LabCaseNum": 226,<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 143,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "2022-10-04 14:23:12",<br> "DateTimeCreated": "2022-09-30 14:23:12",<br> "DateTimeSent": "2022-10-03 14:24:12",<br> "DateTimeRecd": "2022-10-04 14:24:12",<br> "DateTimeChecked": "2022-10-05 14:24:12",<br> "ProvNum": 3,<br> "Instructions": "Repair clasps on Max partial",<br> "LabFee": 0.0,<br> "DateTStamp": "2022-10-05 14:24:12",<br> "InvoiceNum": ""<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>LabCases PUT (update)</h2>
<p>Version Added: 24.4.19</p>
<p>Updates a labcase.</p>
<p><b>LabCaseNum:</b> Required in the URL.<br></p>
<p></p>
<p><b>LaboratoryNum:</b> FK to laboratory.LaboratoryNum. The lab that the case gets sent to.<br><b>AptNum:</b> FK to appointment.AptNum where appointment.AptStatus=Scheduled.<br><b>PlannedAptNum:</b> FK to appointment.AptNum where appointment.AptStatus=Planned.<br><b>DateTimeDue:</b> The due date that is put on the labslip. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeCreated:</b> When the labcase was created. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeSent:</b> The time that the labcase actually went out to the lab. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeRecd:</b> Date/time received back from the lab. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>DateTimeChecked:</b> Date/time that quality was checked. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>ProvNum:</b> FK to provider.ProvNum.<br><b>Instructions:</b> The instructions for this labcase.<br><b>LabFee:</b> This is used for tracking and informational purposes only. The fee is not used in any calculation.<br><b>InvoiceNum:</b> This is an optional invoice number used for tracking and informational purposes only.<br></p>
<p><b>Example Request:</b><br> PUT /labcases/226<br></p>
<p><span class="codeblock"> {<br> "DateTimeDue": "2022-12-05 09:30:00",<br> "DateTimeCreated": "2022-11-30 12:00:00",<br> "DateTimeSent": "2022-12-01 16:15:00",<br> "DateTimeRecd": "2022-12-05 09:45:00",<br> "DateTimeChecked": "2022-12-06 10:00:00",<br> "ProvNum": 4,<br> "Instructions": "PFM crown #28. Shade A1",<br> "LabFee": 17.50,<br> "InvoiceNum": "271828"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LabCaseNum": 226,<br> "PatNum": 33,<br> "LaboratoryNum": 1,<br> "AptNum": 143,<br> "PlannedAptNum": 0,<br> "DateTimeDue": "2022-12-05 09:30:00",<br> "DateTimeCreated": "2022-11-30 12:00:00",<br> "DateTimeSent": "2022-12-01 16:15:00",<br> "DateTimeRecd": "2022-12-05 09:45:00",<br> "DateTimeChecked": "2022-12-06 10:00:00",<br> "ProvNum": 4,<br> "Instructions": "PFM crown #28. Shade A1",<br> "LabFee": 17.50,<br> "DateTStamp": "2022-12-07 10:24:53",<br> "InvoiceNum": "271828"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>LabCases DELETE</h2>
<p>Version Added: 24.4.19</p>
<p>Deletes a labcase.</p>
<p><b>LabCaseNum:</b> Required in URL. <br></p>
<p><b>Example Request:</b><br> DELETE /labcases/5<br></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
