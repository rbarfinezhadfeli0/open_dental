# File: ./www.opendental.com/site/apiproctps.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ProcTPs</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiproctps','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ProcTPs</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>ProcTPs are copies of procedures that are attached to Saved treatment plans. The ProcNumOrig points to the actual procedurelog row. For Active and Inactive treatment plans, use <a href="apitreatplanattaches.html">TreatPlanAttaches</a>. See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplanedit.html">Treatment Plans</a> for more information. </p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96proctp.html" target="_blank">ProcTP Database Schema.</a></p>
<h2>ProcTPs GET</h2>
<p>Version Added: 22.4.17</p>
<p>Get a list of ProcTPs by the TreatPlanNum. Before calling this method, use TreatPlans GET to find the TreatPlanNum of an existing TreatPlan.</p>
<p><b>TreatPlanNum:</b> Required. FK to TreatPlan.TreatPlanNum.<br></p>
<p><b>Example Request:</b><br> GET /proctps?TreatPlanNum=963<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ProcTPNum": 976,<br> "TreatPlanNum": 963,<br> "PatNum": 722,<br> "ProcNumOrig": 1154,<br> "ItemOrder": 0,<br> "Priority": 0,<br> "priority": "",<br> "ToothNumTP": "13",<br> "Surf": "MOD",<br> "ProcCode": "D2393",<br> "Descript": "resin-based composite - three surfaces, posterior",<br> "FeeAmt": 204.0,<br> "PriInsAmt": 80.0,<br> "SecInsAmt": 0.0,<br> "PatAmt": 70.0,<br> "Discount": 54.0,<br> "Prognosis": "",<br> "Dx": "",<br> "ProcAbbr": "C3 (P)",<br> "SecUserNumEntry": 12,<br> "SecDateEntry": "2023-01-24",<br> "SecDateTEdit": "2023-01-24 09:33:46",<br> "FeeAllowed": 0.0,<br> "TaxAmt": 0.0,<br> "ProvNum": 11,<br> "DateTP": "2022-12-19",<br> "ClinicNum": 3,<br> "CatPercUCR": 204.0<br> },<br> {<br> "ProcTPNum": 977,<br> "TreatPlanNum": 963,<br> "PatNum": 722,<br> "ProcNumOrig": 1167,<br> "ItemOrder": 1,<br> "Priority": 0,<br> "priority": "",<br> "ToothNumTP": "",<br> "Surf": "",<br> "ProcCode": "D0140",<br> "Descript": "Limited Exam",<br> "FeeAmt": 57.0,<br> "PriInsAmt": 57.0,<br> "SecInsAmt": 0.0,<br> "PatAmt": 0.0,<br> "Discount": 0.0,<br> "Prognosis": "",<br> "Dx": "",<br> "ProcAbbr": "LimEx",<br> "SecUserNumEntry": 12,<br> "SecDateEntry": "2023-01-24",<br> "SecDateTEdit": "2023-01-24 09:33:46",<br> "FeeAllowed": 0.0,<br> "TaxAmt": 0.0,<br> "ProvNum": 11,<br> "DateTP": "2022-12-19",<br> "ClinicNum": 3,<br> "CatPercUCR": 57.0<br> }<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>ProcTPs PUT (update)</h2>
<p>Version Added: 24.4.26</p>
<p>Updates a ProcTp. Only ProcTPs associated with an unsigned treatment plan can be updated.</p>
<p><b>ProcTPNum: </b>Required in the URL.<br></p>
<p><b>Priority:</b> definition.DefNum where definition.Category=20.<br><b>ToothNumTP:</b> The tooth number.<br><b>Surf:</b> Tooth surfaces or area.<br><b>ProcCode:</b> Not a foreign key. Simply display text.<br><b>Descript:</b> Description of procedure.<br><b>FeeAmt:</b> The fee charged to the patient.<br><b>PriInsAmt:</b> The amount primary insurance is expected to pay.<br><b>SecInsAmt:</b> The amount secondary insurance is expected to pay.<br><b>PatAmt:</b> The amount the patient is expected to pay.<br><b>Discount:</b> The amount of discount. Used for PPOs and procedure level discounts.<br><b>Prognosis:</b> Text for prognosis definition.<br><b>Dx:</b> Text for diagnosis definition.<br><b>ProcAbbr:</b> The procedure code abbreviation.<br><b>FeeAllowed:</b> The amount primary insurance allows.<br></p>
<p><b>Example Request:</b><br> PUT /proctps/1<br></p>
<p><span class="codeblock"> {<br> "Discount": "17.00",<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "ProcTPNum": 1,<br> "TreatPlanNum": 1,<br> "PatNum": 2040,<br> "ProcNumOrig": 10052,<br> "ItemOrder": 0,<br> "Priority": 0,<br> "priority": "",<br> "ToothNumTP": "",<br> "Surf": "",<br> "ProcCode": "D1110",<br> "Descript": "Prophy- Adult",<br> "FeeAmt": 72.0,<br> "PriInsAmt": 72.0,<br> "SecInsAmt": 0.0,<br> "PatAmt": 0.0,<br> "Discount": 17.0,<br> "Prognosis": "",<br> "Dx": "",<br> "ProcAbbr": "Pro",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2022-09-29",<br> "SecDateTEdit": "2022-09-29 11:45:57",<br> "FeeAllowed": 0.0,<br> "TaxAmt": 0.0,<br> "ProvNum": 0,<br> "DateTP": "0001-01-01",<br> "ClinicNum": 0,<br> "CatPercUCR": 0.0<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>ProcTPs DELETE</h2>
<p>Version Added: 23.3.10</p>
<p>Deletes a ProcTp. Only ProcTPs associated with an unsigned treatment plan can be deleted.</p>
<p><b>ProcTPNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /proctps/293<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
