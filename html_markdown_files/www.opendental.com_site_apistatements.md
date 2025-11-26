# File: ./www.opendental.com/site/apistatements.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Statements</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apistatements','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Statements</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7statementwindow.html">Statement Window</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96statement.html" target="_blank">Statement Database Schema.</a></p>
<h2>Statements GET (single)</h2>
<p>Version Added: 24.2.23</p>
<p>Gets a single statement.</p>
<p><b>StatementNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /statements/1<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "StatementNum": 1,<br> "PatNum": 1430,<br> "DateSent": "2003-12-05",<br> "DateRangeFrom": "0001-01-01",<br> "DateRangeTo": "2004-02-01",<br> "Note": "",<br> "NoteBold": "",<br> "Mode_": "Mail",<br> "HidePayment": "false",<br> "SinglePatient": "false",<br> "Intermingled": "false",<br> "IsSent": "false",<br> "DocNum": 354,<br> "DateTStamp": "2024-07-26 10:58:28",<br> "IsReceipt": "false",<br> "IsInvoice": "false",<br> "IsInvoiceCopy": "false",<br> "SuperFamily": 0,<br> "IsBalValid": "false",<br> "InsEst": 0.0,<br> "BalTotal": 0.0,<br> "StatementType": "NotSet"<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Statements GET (multiple)</h2>
<p>Version Added: 24.2.23</p>
<p>Gets a list of statements.</p>
<p><b>PatNum: </b> Optional. Filter by patient.PatNum. Typically the guarantor.<br></p>
<p><b>Example Requests:</b><br> GET /statements<br> GET /statements?PatNum=1430<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "StatementNum": 1,<br> "PatNum": 1430,<br> "DateSent": "2003-12-05",<br> "DateRangeFrom": "0001-01-01",<br> "DateRangeTo": "2004-02-01",<br> "Note": "",<br> "NoteBold": "",<br> "Mode_": "Mail",<br> "HidePayment": "false",<br> "SinglePatient": "false",<br> "Intermingled": "false",<br> "IsSent": "false",<br> "DocNum": 354,<br> "DateTStamp": "2024-07-26 10:58:28",<br> "IsReceipt": "false",<br> "IsInvoice": "false",<br> "IsInvoiceCopy": "false",<br> "SuperFamily": 0,<br> "IsBalValid": "false",<br> "InsEst": 0.0,<br> "BalTotal": 0.0,<br> "StatementType": "NotSet"<br> },<br> {<br> "StatementNum": 2,<br> "PatNum": 1430,<br> "DateSent": "2024-02-08",<br> "DateRangeFrom": "2024-01-01",<br> "DateRangeTo": "2024-03-31",<br> "Note": "",<br> "NoteBold": "",<br> "Mode_": "Mail",<br> "HidePayment": "false",<br> "SinglePatient": "false",<br> "Intermingled": "false",<br> "IsSent": "true",<br> "DocNum": 355,<br> "DateTStamp": "2022-09-30 14:20:24",<br> "IsReceipt": "false",<br> "IsInvoice": "false",<br> "IsInvoiceCopy": "false",<br> "SuperFamily": 0,<br> "IsBalValid": "false",<br> "InsEst": 0.0,<br> "BalTotal": 0.0,<br> "StatementType": "NotSet"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Statements POST</h2>
<p>Version Added: 25.3.26</p>
<p>Creates a statement displayed in the Account Module ledger. Does not impact billing.</p>
<p><b>PatNum:</b> Required. FK to patient.PatNum.<br></p>
<p><b>DateSent:</b> Optional. Date the statement was sent in "yyyy-MM-dd" format. Default today.<br><b>Note:</b> Optional. Note for the statement. Default empty string.<br><b>DocNum:</b> Optional. FK to document.DocNum. Default 0. See <a href="apidocuments.html">API Documents</a> for more information.<br></p>
<p><b>Example Request:</b><br> POST /statements<br><span class="codeblock"> {<br> "PatNum": 295,<br> "DateSent": "2025-10-20",<br> "Note": "Statement generated for John Doe on October 20th, 2025.",<br> "DocNum": 457<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock">{<br> "StatementNum": 92,<br> "PatNum": 295,<br> "DateSent": "2025-10-20",<br> "DateRangeFrom": "0001-01-01",<br> "DateRangeTo": "2200-01-01",<br> "Note": "Statement generated for John Doe on October 20th, 2025.",<br> "NoteBold": "",<br> "Mode_": "API",<br> "HidePayment": "true",<br> "SinglePatient": "false",<br> "Intermingled": "true",<br> "IsSent": "true",<br> "DocNum": 457,<br> "DateTStamp": "2025-10-21 13:31:49",<br> "IsReceipt": "false",<br> "IsInvoice": "false",<br> "IsInvoiceCopy": "false",<br> "SuperFamily": 0,<br> "IsBalValid": "false",<br> "InsEst": 0.0,<br> "BalTotal": 0.0,<br> "StatementType": "NotSet"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
