# File: ./www.opendental.com/site/apipatplans.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API PatPlans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apipatplans','apispecification','documentation')">
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
		<div class="TopBar2"><p>API PatPlans</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>A PatPlan row in the database indicates coverage aka eligibility. If there is no patplan row, then the patient does not have coverage. So eligibility can be set by adding or removing PatPlan rows. </p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96patplan.html" target="_blank">PatPlan Database Schema.</a></p>
<h2>PatPlans GET</h2>
<p>Version Added: 22.4.27</p>
<p>Gets a list of PatPlans that meet a set of search criteria.</p>
<p><b>Parameters:</b> All optional.</p>
<b>PatNum:</b> FK to patient.PatNum.<br><b>InsSubNum:</b> FK to inssub.InsSubNum<br><br><p><b>Example Request</b><br> GET /patplans?PatNum=1897&amp;InsSubNum=697<br> GET /patplans?PatNum=1897</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "PatPlanNum": 1228,<br> "PatNum": 1897,<br> "Ordinal": 1,<br> "IsPending": "false",<br> "Relationship": "Self",<br> "PatID": "",<br> "InsSubNum": 369,<br> "OrthoAutoFeeBilledOverride": -1.0,<br> "OrthoAutoNextClaimDate": "0001-01-01",<br> "SecDateTEntry": "2021-01-26 14:54:04",<br> "SecDateTEdit": "2021-02-16 13:42:33"<br> },<br> {<br> "PatPlanNum": 1232,<br> "PatNum": 1897,<br> "Ordinal": 2,<br> "IsPending": "false",<br> "Relationship": "SignifOther",<br> "PatID": "",<br> "InsSubNum": 393,<br> "OrthoAutoFeeBilledOverride": -1.0,<br> "OrthoAutoNextClaimDate": "0001-01-01",<br> "SecDateTEntry": "2021-02-15 15:47:07",<br> "SecDateTEdit": "2021-02-16 13:42:33"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>PatPlans POST (create)</h2>
<p>Version Added: 21.1</p>
<p>This adds a PatPlan row to the database. </p>
<p><b>PatNum:</b> Required.<br><b>InsSubNum:</b> Required. This requires that a valid InsSub is already in place. You can obtain the InsSubNum from FamilyModules GET Insurance, or you can obtain it from an InsSubs POST. If this plan is already linked to this InsSub, then response will be BadRequest.<br></p>
<p><b>Ordinal:</b> Optional with a default of 1. This is a single digit numeric field (example: 1, 2, 3...). It represents the primary insurance, secondary insurance, etc. 0 is not used. If Ordinal is set to1, and there is already primary insurance, the other insurance will get bumped to Ordinal 2.<br><b>Relationship:</b> Optional. Default is Self. Values can be "Self", "Spouse", "Child", "Employee", "HandicapDep", "SignifOther", "InjuredPlantiff", "LifePartner" or "Dependent". <br><b>PatID:</b> Added in 21.4. Optional. A patient ID which will override the subscriber ID on eclaims. Also used for Canada.<br></p>
<p><b>Example Request:</b><br> POST /patplans<br></p>
<p><span class="codeblock"> {<br>  "PatNum": 15,<br>  "Ordinal": 1,<br>  "Relationship": "Self",<br>  "InsSubNum": 101<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatPlanNum": 62,<br> "PatNum": 15,<br> "Ordinal": 1,<br> "IsPending": "false",<br> "Relationship": "Self,<br> "PatID": "",<br> "InsSubNum": 101,<br> "OrthoAutoFeeBilledOverride": -1.0,<br> "OrthoAutoNextClaimDate": "0001-01-01",<br> "SecDateTEntry": "2021-02-15 15:47:07",<br> "SecDateTEdit": "2021-02-16 13:42:33"<br> }<br><br></span> 201 Created<br> 400 (Missing or invalid fields)<br> 404 NotFound "Patient does not exist" </p>
<h2>PatPlans PUT (update)</h2>
<p>Version Added: 21.4</p>
<p>This updates an existing PatPlan row in the database. PatNum cannot be updated. Instead, drop the PatPlan and then recreate it.</p>
<p></p>
<p><b>PatPlanNum:</b> Required in URL.</p>
<p><b>InsSubNum:</b> This corresponds to the Change button in the Subscriber Information section of the Insurance Plan window.<br><b>Ordinal:</b> This is a single digit numeric field (example: 1, 2, 3...). It represents the primary insurance, secondary insurance, etc. 0 is not used. If Ordinal is set to1, and there is already primary insurance, the other insurance will get bumped to Ordinal 2.<br><b>Relationship:</b> Values can be "Self", "Spouse", "Child", "Employee", "HandicapDep", "SignifOther", "InjuredPlantiff", "LifePartner" or "Dependent".<br><b>PatID:</b> A patient ID which will override the subscriber ID on eclaims. Also used for Canada.<br></p>
<p><b>Example Request:</b><br> PUT /patplans/12<br></p>
<p><span class="codeblock"> {<br>  "Ordinal": 1,<br>  "Relationship": "Self",<br>  "PatID": ""<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "PatPlanNum": 12,<br> "PatNum": 1245,<br> "Ordinal": 1,<br> "IsPending": "false",<br> "Relationship": "Self,<br> "PatID": "",<br> "InsSubNum": 101,<br> "OrthoAutoFeeBilledOverride": -1.0,<br> "OrthoAutoNextClaimDate": "0001-01-01",<br> "SecDateTEntry": "2021-02-15 15:47:07",<br> "SecDateTEdit": "2021-02-16 13:42:33"<br> }<br><br></span> 200 OK<br> 400 (Missing or invalid fields)<br> 404 "InsSub does not exist" </p>
<h2>PatPlans DELETE</h2>
<p>Version Added: 21.1</p>
<p>This is called "Drop" in the Open Dental UI. This removes a PatPlan row from the database, indicating no coverage, but does not affect the InsPlan itself.</p>
<p><b>PatPlanNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> DELETE /patplans/251<br></p>
<p><b>Example Response:</b><br> 200 OK<br></p>
		</div>
	</div>
</body>
</html>```
