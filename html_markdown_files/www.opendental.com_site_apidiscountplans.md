# File: ./www.opendental.com/site/apidiscountplans.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API DiscountPlans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apidiscountplans','apispecification','documentation')">
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
		<div class="TopBar2"><p>API DiscountPlans</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7discountplans.html">Discount Plans</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96discountplan.html" target="_blank">DiscountPlan Database Schema.</a></p>
<h2>DiscountPlans GET (single)</h2>
<p>Version Added: 22.4.19</p>
<p>Gets a single Discount Plan.</p>
<p><b>Parameters:</b></p>
<p><b>DiscountPlanNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /discountplans/2<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiscountPlanNum": 2,<br> "Description": "Happy Smiles Basic",<br> "FeeSchedNum": 54,<br> "DefNum": 336,<br> "adjustmentType": "Discount Plan",<br> "IsHidden": "false",<br> "PlanNote": "50% services when paid cash at time of service.",<br> "ExamFreqLimit": 1,<br> "XrayFreqLimit": 1,<br> "ProphyFreqLimit": 1,<br> "FluorideFreqLimit": 0,<br> "PerioFreqLimit": 1,<br> "LimitedExamFreqLimit": 0,<br> "PAFreqLimit": 1,<br> "AnnualMax": 1000.0<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlans GET (multiple)</h2>
<p>Version Added: 22.4.19</p>
<p>Gets a list of Discount Plans.</p>
<p><b>Example Request:</b><br> GET /discountplans<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "DiscountPlanNum": 1,<br> "Description": "Happy Smiles Plus",<br> "FeeSchedNum": 54,<br> "DefNum": 336,<br> "adjustmentType": "Discount Plan",<br> "IsHidden": "true",<br> "PlanNote": "75% services when paid cash at time of service.",<br> "ExamFreqLimit": 1,<br> "XrayFreqLimit": 0,<br> "ProphyFreqLimit": 0,<br> "FluorideFreqLimit": 0,<br> "PerioFreqLimit": 1,<br> "LimitedExamFreqLimit": 1,<br> "PAFreqLimit": 1,<br> "AnnualMax": 500.0<br> },<br> {<br> "DiscountPlanNum": 2,<br> "Description": "Happy Smiles Basic",<br> "FeeSchedNum": 54,<br> "DefNum": 336,<br> "adjustmentType": "Discount Plan",<br> "IsHidden": "false",<br> "PlanNote": "50% services when paid cash at time of service.",<br> "ExamFreqLimit": 1,<br> "XrayFreqLimit": 1,<br> "ProphyFreqLimit": 1,<br> "FluorideFreqLimit": 0,<br> "PerioFreqLimit": 1,<br> "LimitedExamFreqLimit": 0,<br> "PAFreqLimit": 1,<br> "AnnualMax": 1000.0<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlans POST</h2>
<p>Version Added: 23.1.20</p>
<p>Creates a DiscountPlan. Frequencies that do not have a limitation display as blank in Open Dental and are stored as -1 in the database.</p>
<p><b>Description:</b> Required. Description of this Discount Plan.<br><b>FeeSchedNum:</b> Required. FK to feesched.FeeSchedNum.<br><b>DefNum:</b> Required. definition.DefNum where definition.Category=1 and definition.ItemValue=dp.<br></p>
<p><b>IsHidden:</b> Optional. Hides a Discount Plan. Default "false".<br><b>PlanNote:</b> Optional. Note on a Discount Plan.<br><b>ExamFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Exam category. Default -1.<br><b>XrayFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's X-Ray category. Default -1 .<br><b>ProphyFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Prophylaxis category. Default -1.<br><b>FluorideFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Fluoride category. Default -1.<br><b>PerioFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Periodontal category. Default -1.<br><b>LimitedExamFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Limited Exam category. Default -1.<br><b>PAFreqLimit:</b> Optional. Number of procedures allowed for a Discount Plan's Periapical X-Ray category. Default -1.<br><b>AnnualMax:</b> Optional. Annual discount maximum for frequency limitations. Default -1, indicates no annual max limitation.<br></p>
<p><b>Example Request:</b><br> POST /discountplans<br></p>
<p><span class="codeblock"> {<br> "Description": "Happy Smiles Ultra",<br> "FeeSchedNum": 54,<br> "DefNum": 336<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiscountPlanNum": 3,<br> "Description": "Happy Smiles Ultra",<br> "FeeSchedNum": 54,<br> "DefNum": 336,<br> "adjustmentType": "Discount Plan",<br> "IsHidden": "false",<br> "PlanNote": "",<br> "ExamFreqLimit": -1,<br> "XrayFreqLimit": -1,<br> "ProphyFreqLimit": -1,<br> "FluorideFreqLimit": -1,<br> "PerioFreqLimit": -1,<br> "LimitedExamFreqLimit": -1,<br> "PAFreqLimit": -1,<br> "AnnualMax": -1.0<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>DiscountPlans PUT</h2>
<p>Version Added: 23.1.20</p>
<p>Updates an existing DiscountPlan. Updating Description and/or PlanNote will overwrite existing values. Frequencies that do not have a limitation display as blank in Open Dental and are stored as -1 in the database.</p>
<p><b>DiscountPlanNum:</b> Required in URL.</p>
<p><b>Description:</b> Description of this Discount Plan.<br><b>FeeSchedNum:</b> FK to feesched.FeeSchedNum.<br><b>DefNum:</b> definition.DefNum where definition.Category=1 and definition.ItemValue=dp.<br><b>IsHidden:</b> Hides a Discount Plan. Either "true" or "false".<br><b>PlanNote:</b> Note on a Discount Plan.<br><b>ExamFreqLimit:</b> Number of procedures allowed for a Discount Plan's Exam category. -1 indicates blank.<br><b>XrayFreqLimit:</b> Number of procedures allowed for a Discount Plan's X-Ray category. -1 indicates blank.<br><b>ProphyFreqLimit:</b> Number of procedures allowed for a Discount Plan's Prophylaxis category. -1 indicates blank.<br><b>FluorideFreqLimit:</b> Number of procedures allowed for a Discount Plan's Fluoride category. -1 indicates blank.<br><b>PerioFreqLimit:</b> Number of procedures allowed for a Discount Plan's Periodontal category. -1 indicates blank.<br><b>LimitedExamFreqLimit:</b> Number of procedures allowed for a Discount Plan's Limited Exam category. -1 indicates blank.<br><b>PAFreqLimit:</b> Number of procedures allowed for a Discount Plan's Periapical X-Ray category. -1 indicates blank.<br><b>AnnualMax:</b> Annual discount maximum for frequency limitations. -1 indicates blank or no annual max limitation.<br></p>
<p><b>Example Request:</b><br> PUT /discountplans/1<br></p>
<p><span class="codeblock"> {<br> "Description": "Happy Smiles Basic Plus",<br> "IsHidden": "false"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "DiscountPlanNum": 1,<br> "Description": "Happy Smiles Basic Plus",<br> "FeeSchedNum": 54,<br> "DefNum": 336,<br> "adjustmentType": "Discount Plan",<br> "IsHidden": "false",<br> "PlanNote": "75% services when paid cash at time of service.",<br> "ExamFreqLimit": 1,<br> "XrayFreqLimit": 0,<br> "ProphyFreqLimit": 0,<br> "FluorideFreqLimit": 0,<br> "PerioFreqLimit": 1,<br> "LimitedExamFreqLimit": 1,<br> "PAFreqLimit": 1,<br> "AnnualMax": 500.0<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
