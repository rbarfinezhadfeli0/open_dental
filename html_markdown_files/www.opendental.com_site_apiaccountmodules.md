# File: ./www.opendental.com/site/apiaccountmodules.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API AccountModules</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiaccountmodules','apispecification','documentation')">
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
		<div class="TopBar2"><p>API AccountModules</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96account.html" target="_blank">Account Database Schema</a></p>
<h2>AccountModules GET Aging</h2>
<p>Version Added: 22.3.6</p>
<p>Gets the Aging information for a patient and their family, similarly to how it shows in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7account.html">Account Module</a> Aging grid.</p>
<p><b>PatNum:</b> Required in the URL. </p>
<p>Returned fields are detailed below:</p>
<b>Bal_0_30:</b> Aged balance from 0 to 30 days old for the entire family.<br><b>Bal_31_60:</b> Aged balance from 31 to 60 days old for the entire family.<br><b>Bal_61_90:</b> Aged balance from 61 to 90 days old for the entire family.<br><b>BalOver90:</b> Aged balance over 90 days old for the entire family.<br><b>Total:</b> Total balance for entire family before insurance estimate.<br><b>InsEst:</b> Insurance Estimate for entire family.<br><b>EstBal:</b> The total remaining balance for the family after subtracting pending insurance amounts and write-offs.<br><b>PatEstBal:</b> The patient balance after subtracting pending insurance amounts and write-offs.<br><b>Unearned:</b> The total Unearned / Prepayment balance for the family.<br><br><p><b>Example Request:</b><br> GET /accountmodules/1337/Aging<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "Bal_0_30": 276.28,<br> "Bal_31_60": 49.0,<br> "Bal_61_90": 64.0,<br> "BalOver90": 278.03,<br> "Total": 667.31,<br> "InsEst": 100.0,<br> "EstBal": 567.31,<br> "PatEstBal": 24.0,<br> "Unearned": 2.46<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (Patient is deleted, etc)<br> 404 NotFound (Patient not found)<br></p>
<h2>AccountModules GET PatientBalances</h2>
<p>Version Added: 22.1</p>
<p>Gets the patient portion for a patient's family, similarly to how it shows in the Account Module's Select Patient grid.</p>
<p><b>PatNum:</b> Required in the URL.</p>
<p>Returned fields are detailed below:</p>
<b>PatNum:</b> The patient's PatNum / family guarantor's PatNum.<br><b>Name:</b> The first and last name of the patient, or "Entire Family" when regarding the total patient portion of the family.<br><b>Balance:</b> The balance of the patient/entire family.<br><br><p><b>Example Request:</b><br> GET /accountmodules/16/PatientBalances<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "PatNum": 15,<br> "Name": "Smith, John",<br> "Balance": 140.2<br> },<br> {<br> "PatNum": 16,<br> "Name": "Smith, Jane",<br> "Balance": 180.55<br> },<br> {<br> "PatNum": 17,<br> "Name": "Smith, Junior",<br> "Balance": 68<br> },<br> {<br> "PatNum": 18,<br> "Name": "Smith, Sis",<br> "Balance": 0<br> },<br> {<br> "PatNum": 15,<br> "Name": "Entire Family",<br> "Balance": 388.75<br> }<br> ]<br></span></p>
<h2>AccountModules GET ServiceDateView</h2>
<p>Version Added: 22.3.32</p>
<p>Gets a list of all charges and credits to the account for a patient and their family, similarly to how it shows in the <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7servicedateview.html">Service Date View</a>.</p>
<p><b>PatNum:</b> Required in the URL.<br><b>isFamily:</b> Optional. Either "true" or "false". Return data for the entire patient's family. Default "false".</p>
<p>Returned fields are detailed below:</p>
<b>ObjectType:</b> The type of object being returned. Either ProcedureLog, Adjustment, PaySplit, ClaimProc, PayPlanCharge, or PayPlan. Otherwise blank.<br><b>PrimaryKey:</b> Primary Key corresponding to the ObjectType. Example: procedure.ProcNum=985.<br><b>Type:</b> Further details of the ObjectType being displayed: 'Proc', 'Adj-Att.', 'PatPay Att.', 'WriteOff-Att.', 'InsPay-Att.', 'PayPlan Charge Att.', 'PatPay Att. PayPlan', 'Unallocated', 'PatPay', 'WriteOff', 'Adj', 'InsPay', 'PayPlan Credit', 'Dynamic PayPlan Credit', 'PayPlan Charge', 'PatPay PayPlan', 'Day Total', 'Overall Total'. Att. indicates Attached.<br><b>ServiceDate:</b> Date service was provided.<br><b>TransDate:</b> Date transaction was posted.<br><b>Patient:</b> patient.FName.<br><b>PatNum:</b> patient.PatNum.<br><b>Reference:</b> Description of the of the returned object.<br><b>Charge:</b> Amount that was charged.<br><b>Credit:</b> Amount that was paid.<br><b>Provider:</b> provider.Abbr.<br><b>InsBal:</b> Balance of estimated insurance payment.<br><b>AcctBal:</b> The remaining patient portion balance.<br><br><p><b>Example Request:</b><br> GET /accountmodules/65/ServiceDateView?isFamily=true<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ObjectType": "Procedure",<br> "PrimaryKey": "43",<br> "Type": "Proc",<br> "ServiceDate": "2021-07-13",<br> "TransDate": "",<br> "Patient": "Jaime",<br> "PatNum": "65",<br> "Reference": "D2393:#14-MOD-C3(P)",<br> "Charge": "235.00",<br> "Credit": "0.00",<br> "Provider": "DOC2",<br> "InsBal": "0.00",<br> "AcctBal": "216.20"<br> },<br> {<br> "ObjectType": "Adjustment",<br> "PrimaryKey": "10",<br> "Type": "Adj-Att.",<br> "ServiceDate": "",<br> "TransDate": "2021-07-13",<br> "Patient": "Jaime",<br> "PatNum": "65",<br> "Reference": "Adj- Discount",<br> "Charge": "0.00",<br> "Credit": "18.80",<br> "Provider": "DOC2",<br> "InsBal": "",<br> "AcctBal": ""<br> },<br> {<br> "ObjectType": "",<br> "PrimaryKey": "",<br> "Type": "Day Total",<br> "ServiceDate": "2021-07-13",<br> "TransDate": "",<br> "Patient": "",<br> "PatNum": "",<br> "Reference": "Total for Date",<br> "Charge": "235.00",<br> "Credit": "18.80",<br> "Provider": "",<br> "InsBal": "0.00",<br> "AcctBal": "216.20"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (Patient is deleted, etc)<br> 404 NotFound (Patient not found)<br></p>
		</div>
	</div>
</body>
</html>```
