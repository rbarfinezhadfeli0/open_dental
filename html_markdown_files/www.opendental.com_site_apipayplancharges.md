# File: ./www.opendental.com/site/apipayplancharges.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PayPlanCharges</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipayplancharges','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PayPlanCharges</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96payplancharge.html" target="_blank">PayPlanCharge Database Schema.</a></p>
<h2>PayPlanCharges GET</h2>
<p>Version Added: 23.2.28</p>
<p>Gets all payplancharges for a specified payment plan.</p>
<p><b>PayPlanNum:</b> Required.<br></p>
<p><b>Example Request:</b><br> GET /payplancharges?PayPlanNum=23<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "PayPlanChargeNum": 42,<br> "PayPlanNum": 23,<br> "Guarantor": 30,<br> "PatNum": 30,<br> "ChargeDate": "2023-09-20",<br> "Principal": 25.0,<br> "Interest": 0.0,<br> "Note": "Down Payment",<br> "ProvNum": 2,<br> "ClinicNum": 0,<br> "ChargeType": "Debit",<br> "ProcNum": 0,<br> "SecDateTEntry": "2023-09-20 09:24:16",<br> "SecDateTEdit": "2023-09-20 09:24:16",<br> "StatementNum": 0,<br> "FKey": 134,<br> "LinkType": "Procedure",<br> "IsOffset": "false"<br> },<br> {<br> "PayPlanChargeNum": 43,<br> "PayPlanNum": 23,<br> "Guarantor": 30,<br> "PatNum": 30,<br> "ChargeDate": "2023-10-20",<br> "Principal": 40.96,<br> "Interest": 0.12,<br> "Note": "",<br> "ProvNum": 2,<br> "ClinicNum": 0,<br> "ChargeType": "Debit",<br> "ProcNum": 0,<br> "SecDateTEntry": "2023-10-20 08:58:27",<br> "SecDateTEdit": "2023-10-20 08:58:27",<br> "StatementNum": 0,<br> "FKey": 134,<br> "LinkType": "Procedure",<br> "IsOffset": "false"<br> },<br> {<br> "PayPlanChargeNum": 44,<br> "PayPlanNum": 23,<br> "Guarantor": 30,<br> "PatNum": 30,<br> "ChargeDate": "2023-10-23",<br> "Principal": 8.04,<br> "Interest": 0.0,<br> "Note": "Close Out Charge",<br> "ProvNum": 2,<br> "ClinicNum": 0,<br> "ChargeType": "Debit",<br> "ProcNum": 0,<br> "SecDateTEntry": "2023-10-23 15:38:30",<br> "SecDateTEdit": "2023-10-23 15:38:30",<br> "StatementNum": 0,<br> "FKey": 134,<br> "LinkType": "Procedure",<br> "IsOffset": "false"<br> }<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
