# File: ./www.opendental.com/site/apibenefits.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Benefits</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apibenefits','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Benefits</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Benefits are complex, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7benefitinfo.html">Benefits</a> for additional information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96benefit.html" target="_blank">Benefit Database Schema.</a></p>
<h2>Benefits GET (single)</h2>
<p>Version Added: 25.3.7</p>
<p>Gets a single benefit.</p>
<p><b>BenefitNum:</b> Required in URL.<br></p>
<p><b>Example Request:</b><br> GET /benefits/14<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "BenefitNum": 14,<br> "PlanNum": 85<br> "PatPlanNum": 0,<br> "CovCatNum": 0,<br> "BenefitType": "Limitations",<br> "Percent": -1,<br> "MonetaryAmt": -1.0,<br> "TimePeriod": "None",<br> "QuantityQualifier": "Months",<br> "Quantity": 6,<br> "CodeNum": 0,<br> "procCode": "",<br> "CoverageLevel": "None",<br> "SecDateTEntry": "2025-07-10 13:32:40",<br> "SecDateTEdit": "2025-07-10 13:32:40",<br> "CodeGroupNum": 31,<br> "TreatArea": "None"<br> }<br></span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Benefits GET (multiple)</h2>
<p>Version Added: 22.3.27</p>
<p>Gets all benefits for a given Insurance Plan or Patient Plan. Empty <b>Percent</b> and <b>MonetaryAmt</b> values are indicated by -1 . </p>
<p><b>PlanNum:</b> (Optional after version 23.2.62) FK to InsPlan.PlanNum.<br><b>PatPlanNum:</b> (Optional after version 23.2.62) FK to PatPlan.PatPlanNum.<br></p>
<p><b>Example Requests:</b><br> GET /benefits?PlanNum=12<br> GET /benefits?PatPlanNum=30<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "BenefitNum": 236,<br> "PlanNum": 12,<br> "PatPlanNum": 0,<br> "CovCatNum": 3,<br> "BenefitType": "CoInsurance",<br> "Percent": 30,<br> "MonetaryAmt": -1.0,<br> "TimePeriod": "None",<br> "QuantityQualifier": "Visits",<br> "Quantity": 2,<br> "CodeNum": 0,<br> "procCode": "",<br> "CoverageLevel": "None",<br> "SecDateTEntry": "2021-06-21 10:03:08",<br> "SecDateTEdit": "2021-06-21 10:03:08",<br> "CodeGroupNum": 0,<br> "TreatArea": "None"<br> },<br> {<br> "BenefitNum": 243,<br> "PlanNum": 12,<br> "PatPlanNum": 0,<br> "CovCatNum": 0,<br> "BenefitType": "WaitingPeriod",<br> "Percent": -1,<br> "MonetaryAmt": -1.0,<br> "TimePeriod": "ServiceYear",<br> "QuantityQualifier": "Months",<br> "Quantity": 3,<br> "CodeNum": 150,<br> "procCode": "D0486",<br> "CoverageLevel": "Family",<br> "SecDateTEntry": "2021-06-21 10:03:08",<br> "SecDateTEdit": "2021-06-21 10:03:08",<br> "CodeGroupNum": 0,<br> "TreatArea": "None"<br> },<br> {<br> "BenefitNum": 245,<br> "PlanNum": 12,<br> "PatPlanNum": 0,<br> "CovCatNum": 12,<br> "BenefitType": "Limitations",<br> "Percent": -1,<br> "MonetaryAmt": 1000.0,<br> "TimePeriod": "Lifetime",<br> "QuantityQualifier": "None",<br> "Quantity": 0,<br> "CodeNum": 0,<br> "procCode": "",<br> "CoverageLevel": "Individual",<br> "SecDateTEntry": "2021-06-21 10:03:08",<br> "SecDateTEdit": "2021-06-21 10:03:08",<br> "CodeGroupNum": 0,<br> "TreatArea": "None"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Benefits POST (create)</h2>
<p>Version Added: 22.3.17</p>
<p>Creates a new benefit for a given Insurance Plan or Patient Plan.</p>
<p><b>PlanNum: </b>This or <b>PatPlanNum</b> is required. FK to InsPlan.PlanNum.<br><b>PatPlanNum: </b>This or <b>PlanNum</b> is required. FK to PatPlan.PlanNum.<br><b>BenefitType: </b>Required. Either "ActiveCoverage", "CoInsurance", "Deductible", "CoPayment", "Exclusions", "Limitations", or "WaitingPeriod".<br><b>CoverageLevel: </b>Required. Either "None", "Individual", or "Family".<br><br><b>CovCatNum: </b>Optional. FK to covcat.CovCatNum.<br><b>Percent: </b>Optional. Only allowed if <b>BenefitType</b> is "CoInsurance". Must be a value between 0 and 100. Default -1 (Indicating empty).<br><b>MonetaryAmt: </b>Optional. Only used if <b>BenefitType</b> is "CoPayment", "Limitations", or "Deductible". Default -1.0 (Indicating empty).<br><b>TimePeriod: </b>Optional. Either "None", "ServiceYear", "CalendarYear", "Lifetime", "Years", or "NumberInLast12Months". Default "CalendarYear" when the insplan.MonthRenew is 0, "ServiceYear" when insplan.MonthRenew is greater than 0, or "None" for some limitation benefits.<br><b>QuantityQualifier: </b>Optional. Either "None", "NumberOfServices", "AgeLimit", "Visits", "Years", or "Months". Default "None". Must be "Months" or "Years" if <b>BenefitType</b> is "WaitingPeriod".<br><b>Quantity: </b>Optional. Must be a value between 0 and 100. Default 0. Must be a value greater than 0 if <b>QuantityQualifier</b> is "AgeLimit".<br><b>CodeNum: </b>Optional. FK to procedurecode.CodeNum. Only allowed if <b>CovCatNum</b> is 0. Will be used over <b>procCode</b> if both are specified. Default 0.<br><b>procCode: </b>Optional. FK to procedurecode.ProcCode. Only allowed if <b>CovCatNum</b> is 0. Default empty string.<br><b>CodeGroupNum: </b>Optional. (Added in version 23.2.62) FK to codegroup.CodeGroupNum. The group of procedure codes that apply to this benefit.<br><b>TreatArea: </b>Optional. (Added in version 25.3.7) Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange". Only allowed if benefit is a <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html">Frequency Limitation</a>. Default "None". </p>
<p><b>Example Requests:</b><br> POST /benefits<br></p>
<p><span style="text-decoration:underline">Frequency Limitation (Every # Years)</span><br><span class="codeblock"> {<br> "PlanNum": 12,<br> "CoverageLevel": "None",<br> "BenefitType": "Limitations",<br> "TimePeriod": "None",<br> "QuantityQualifier": "Years",<br> "Quantity": 2,<br> "CodeGroupNum": 3,<br> "TreatArea": "Quad"<br> }<br></span><br><span style="text-decoration:underline">Frequency Limitation (Every # Months)</span><br><span class="codeblock"> {<br> "PlanNum": 18,<br> "CoverageLevel": "None",<br> "BenefitType": "Limitations",<br> "TimePeriod": "None",<br> "QuantityQualifier": "Months",<br> "Quantity": 9,<br> "CodeGroupNum": 14,<br> "TreatArea": "None"<br> }<br></span><br><span style="text-decoration:underline">Frequency Limitation (# Per Benefit Year)</span><br><i>*TimePeriod will be </i>"ServiceYear"<i> when the insplan.MonthRenew is greater than 0.</i><br><span class="codeblock"> {<br> "PlanNum": 82,<br> "CoverageLevel": "None",<br> "BenefitType": "Limitations",<br> "TimePeriod": "CalendarYear",<br> "QuantityQualifier": "NumberOfServices",<br> "Quantity": 4,<br> "CodeGroupNum": 28,<br> "TreatArea": "None"<br> }<br></span><br><span style="text-decoration:underline">Frequency Limitation (# in Last 12 Months)</span><br><span class="codeblock">{<br> "PlanNum": 74,<br> "CoverageLevel": "None",<br> "BenefitType": "Limitations",<br> "TimePeriod": "NumberInLast12Months",<br> "QuantityQualifier": "NumberOfServices",<br> "Quantity": 2,<br> "CodeGroupNum": 41,<br> "TreatArea": "None"<br> }<br></span><br><span style="text-decoration:underline">Age Limit</span><br><span class="codeblock">{<br> "PlanNum": 56,<br> "CoverageLevel": "None",<br> "BenefitType": "Limitations",<br> "TimePeriod": "None",<br> "QuantityQualifier": "AgeLimit",<br> "Quantity": 18,<br> "CodeGroupNum": 5<br> }</span></p>
<p><b>Example Response:</b><br><span style="text-decoration:underline">Frequency Limitation (Every # Years)</span><br><span class="codeblock"> {<br> "BenefitNum": 236,<br> "PlanNum": 12,<br> "PatPlanNum": 0,<br> "CovCatNum": 0,<br> "BenefitType": "Limitations",<br> "Percent": -1,<br> "MonetaryAmt": -1.0,<br> "TimePeriod": "None",<br> "QuantityQualifier": "Years",<br> "Quantity": 2,<br> "CodeNum": 0,<br> "procCode": "",<br> "CoverageLevel": "None",<br> "SecDateTEntry": "2021-06-21 10:03:08",<br> "SecDateTEdit": "2021-06-21 10:03:08",<br> "CodeGroupNum": 3,<br> "TreatArea": "Quad"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Benefits PUT (update)</h2>
<p>Version Added: 22.4.7</p>
<p>Updates an existing benefit.</p>
<p><b>BenefitNum: </b>Required in URL.<br><br><b>CovCatNum: </b>Optional. FK to covcat.CovCatNum.<br><b>BenefitType: </b>Optional. Either "ActiveCoverage", "CoInsurance", "Deductible", "CoPayment", "Exclusions", "Limitations", or "WaitingPeriod".<br><b>Percent: </b>Optional. Only allowed if <b>BenefitType</b> is "CoInsurance". Must be a value between 0 and 100. Use -1 to indicate empty.<br><b>MonetaryAmt: </b>Optional. Only used if <b>BenefitType</b> is "CoPayment", "Limitations", or "Deductible". Use -1 to indicate empty.<br><b>TimePeriod: </b>Optional. Either "None", "ServiceYear", "CalendarYear", "Lifetime", "Years", or "NumberInLast12Months".<br><b>QuantityQualifier: </b>Optional. Either "None", "NumberOfServices", "AgeLimit", "Visits", "Years", or "Months". Must be "Months" or "Years" if <b>BenefitType</b> is "WaitingPeriod".<br><b>Quantity: </b>Optional. Must be a value between 0 and 100. Must be a value greater than 0 if <b>QuantityQualifier</b> is "AgeLimit".<br><b>CodeNum: </b>Optional. FK to procedurecode.CodeNum. Only allowed if <b>CovCatNum</b> is 0. Will be used over <b>procCode</b> if both are specified.<br><b>procCode: </b>Optional. FK to procedurecode.ProcCode. Only allowed if <b>CovCatNum</b> is 0.<br><b>CoverageLevel: </b>Optional. Either "None", "Individual", or "Family".<br><b>CodeGroupNum: </b>Optional. (Added in version 25.3.7) FK to codegroup.CodeGroupNum. The group of procedure codes that apply to this benefit. Cannot be changed for a Frequency Limitation or an Age Limit benefit that already specifies a CodeGroupNum.<br><b>TreatArea: </b>Optional. (Added in version 25.3.7) Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange". Only allowed if benefit is a <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7insfrequencylimitations.html">Frequency Limitation</a>. </p>
<p><b>Example Requests:</b><br> PUT /benefits/75<br> PUT /benefits/323<br></p>
<p><span class="codeblock"> {<br> "Percent": 70,<br> "QuantityQualifier": "Visits",<br> "Quantity": 2<br> }<br></span><br> or<br><br><span class="codeblock"> {<br> "CovCatNum": 0,<br> "BenefitType": "ActiveCoverage",<br> "Percent": -1,<br> "MonetaryAmt": 499.99,<br> "TimePeriod": "ServiceYear",<br> "QuantityQualifier": "AgeLimit",<br> "Quantity": 13,<br> "CodeNum": 156,<br> "procCode": "D1110",<br> "CoverageLevel": "Individual"<br> }<br></span><br> or<br><br><span class="codeblock">{<br> "Quantity":18<br> }<br></span></p>
<p><b>Example Responses:</b><br><span class="codeblock"> {<br> "BenefitNum": 75,<br> "PlanNum": 10,<br> "PatPlanNum": 0,<br> "CovCatNum": 0,<br> "BenefitType": "ActiveCoverage",<br> "Percent": -1,<br> "MonetaryAmt": 499.99,<br> "TimePeriod": "ServiceYear",<br> "QuantityQualifier": "AgeLimit",<br> "Quantity": 13,<br> "CodeNum": 156,<br> "procCode": "D0999",<br> "CoverageLevel": "Individual",<br> "SecDateTEntry": "2021-05-25 13:27:52",<br> "SecDateTEdit": "2021-05-25 13:27:52",<br> "CodeGroupNum": 0,<br> "TreatArea": "None"<br> }<br></span><br> or<br><br><span class="codeblock">{<br> "BenefitNum": 323,<br> "PlanNum": 25,<br> "PatPlanNum": 0,<br> "CovCatNum": 0,<br> "BenefitType": "Limitations",<br> "Percent": -1,<br> "MonetaryAmt": -1.0,<br> "TimePeriod": "None",<br> "QuantityQualifier": "AgeLimit",<br> "Quantity": 18,<br> "CodeNum": 0,<br> "procCode": "",<br> "CoverageLevel": "None",<br> "SecDateTEntry": "2024-02-13 14:45:19",<br> "SecDateTEdit": "2024-02-13 14:45:19",<br> "CodeGroupNum": 1,<br> "TreatArea": "None"<br> }</span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Benefits DELETE</h2>
<p>Version Added: 22.4.7</p>
<p>Deletes an existing benefit by BenefitNum.</p>
<p><b>BenefitNum: </b>Required in URL.<br></p>
<p><b>Example Request:</b><br> DELETE /benefits/75<br></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
