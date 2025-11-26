# File: ./www.opendental.com/site/apitreatplans.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API TreatPlans</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apitreatplans','apispecification','documentation')">
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
		<div class="TopBar2"><p>API TreatPlans</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p><a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplanedit.html">Treatment Plans</a> are designed to track treatment the patient has accepted, display treatment charted for the patient that has not been completed, or keep a record of treatment the patient denied.</p>
<p>treatplans with a TPStatus of "Active" or "Inactive" use <a href="apitreatplanattaches.html">treatplanattach</a> to reference attached procedures. treatplans with a TPStatus of "Saved" use <a href="apiproctps.html">proctp</a> which are copies of the procedure, and will not change after being saved.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96treatplan.html" target="_blank">TreatPlan Database Schema.</a></p>
<h2>TreatPlans GET</h2>
<p>Version Added: 22.4.16</p>
<p>Get a list of treatplans that meet a set of search criteria.</p>
<p><b>Parameters:</b> All optional.</p>
<b>PatNum:</b> patient.PatNum.<br><b>SecDateTEdit :</b> Only include treatplans with a SecDateTEdit altered after the specified date and time. String in "yyyy-MM-dd HH:mm:ss" format.<br><b>TPStatus :</b> Either "Saved", "Active", or "Inactive". Default all.<br><br><p><b>Example Requests:</b><br> GET /treatplans?PatNum=1897&amp;TPStatus=Saved<br> GET /treatplans?SecDateTEdit=2022-07-01%2005%3A30%3A00</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br>  "TreatPlanNum": 1786,<br>  "PatNum": 1897,<br>  "DateTP": "0001-01-01",<br>  "Heading": "Active Treatment Plan",<br>  "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",<br> "SigIsTopaz": "false",<br>  "ResponsParty": 0,<br>  "DocNum": 0,<br>  "TPStatus": "Active",<br>  "SecUserNumEntry": 12,<br>  "SecDateEntry": "2022-07-02",<br>  "SecDateTEdit": "2022-07-02 09:39:54",<br>  "UserNumPresenter": 0,<br>  "TPType": "Insurance",<br>  "DateTSigned": "0001-01-01 00:00:00",<br>  "DateTPracticeSigned": "0001-01-01 00:00:00",<br>  "SignatureText": "",<br>  "SignaturePracticeText": "",<br> "isSigned": "false",<br> "isSignedPractice": "false"<br>  },<br>  {<br>  "TreatPlanNum": 1787,<br>  "PatNum": 1901,<br>  "DateTP": "0001-01-01",<br>  "Heading": "Active Treatment Plan",<br>  "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",<br> "SigIsTopaz": "false",<br>  "ResponsParty": 0,<br>  "DocNum": 0,<br>  "TPStatus": "Active",<br>  "SecUserNumEntry": 12,<br>  "SecDateEntry": "2022-07-02",<br>  "SecDateTEdit": "2022-07-02 10:32:51",<br>  "UserNumPresenter": 0,<br>  "TPType": "Insurance",<br>  "DateTSigned": "0001-01-01 00:00:00",<br>  "DateTPracticeSigned": "0001-01-01 00:00:00",<br>  "SignatureText": "",<br>  "SignaturePracticeText": "",<br> "isSigned": "false",<br> "isSignedPractice": "false"<br>  },<br>  {<br>  "TreatPlanNum": 1788,<br>  "PatNum": 1906,<br>  "DateTP": "0001-01-01",<br>  "Heading": "Saved Treatment Plan",<br>  "Note": "Please read this carefully:\nIf you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect.\nEven if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay.",<br> "SigIsTopaz": "false",<br>  "ResponsParty": 0,<br>  "DocNum": 0,<br>  "TPStatus": "Saved",<br>  "SecUserNumEntry": 13,<br>  "SecDateEntry": "2022-07-02",<br>  "SecDateTEdit": "2022-07-02 11:39:54",<br>  "UserNumPresenter": 0,<br>  "TPType": "Insurance",<br>  "DateTSigned": "2022-07-02 11:39:54",<br>  "DateTPracticeSigned": "2022-07-02 11:39:54",<br>  "SignatureText": "Brandon Booter",<br>  "SignaturePracticeText": "Dr. Carl Moore",<br> "isSigned": "true",<br> "isSignedPractice": "true"<br>  },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>TreatPlans POST (create)</h2>
<p>Version Added: 23.2.13</p>
<p>Creates an inactive treatplan for a patient.</p>
<p><b>Parameters:</b></p>
<p><b>PatNum:</b> Required.<br><b>Heading:</b> Optional. Default "Inactive Treatment Plan".<br><b>Note:</b> Optional. Defaults to the TreatmentPlanNote preference.<br><b>TPType:</b> Optional. Either "Insurance" or "Discount". If the patient is subscribed to a Discount Plan, this will default to "Discount". Otherwise, defaults to "Insurance".<br></p>
<p><b>Example Request:</b><br> POST /treatplans<br></p>
<p><span class="codeblock"> {<br> "PatNum": 31,<br> "Heading": "Fillings",<br> "Note": "ONLY AN ESTIMATE.",<br> "TPType": "Insurance"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "TreatPlanNum": 18,<br> "PatNum": 31,<br> "DateTP": "0001-01-01",<br> "Heading": "Fillings",<br> "Note": "ONLY AN ESTIMATE.",<br> "SigIsTopaz": "false",<br> "ResponsParty": 0,<br> "DocNum": 0,<br> "TPStatus": "Inactive",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2023-08-10",<br> "SecDateTEdit": "2023-08-10 12:18:12",<br> "UserNumPresenter": 0,<br> "TPType": "Insurance",<br> "DateTSigned": "0001-01-01 00:00:00",<br> "DateTPracticeSigned": "0001-01-01 00:00:00",<br> "SignatureText": "",<br> "SignaturePracticeText": "",<br> "isSigned": "false",<br> "isSignedPractice": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>TreatPlans POST Saved</h2>
<p>Version Added: 23.2.22</p>
<p>Creates an unsigned Saved treatplan from an existing Active or Inactive treatplan.</p>
<p><b>Parameters:</b></p>
<p><b>TreatPlanNum:</b> Required.<br><b>Heading:</b> Optional. Defaults to the heading of the supplied Treatment Plan.<br><b>UserNumPresenter:</b> Optional. FK to userod.UserNum. Default 0.<br></p>
<p><b>Example Request:</b><br> POST /treatplans/Saved<br></p>
<p><span class="codeblock"> {<br> "TreatPlanNum": 138,<br> "Heading": "Saved Plan",<br> "UserNumPresenter": 5<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "TreatPlanNum": 138,<br> "PatNum": 15,<br> "DateTP": "2023-09-22",<br> "Heading": "Saved Plan",<br> "Note": "If you have dental insurance, please be aware that THIS IS AN ESTIMATE ONLY. Coverage may be different if your deductible has not been met, annual maximum has been met, or if your coverage table is lower than average.",<br> "SigIsTopaz": "false",<br> "ResponsParty": 0,<br> "DocNum": 0,<br> "TPStatus": "Saved",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2023-09-22",<br> "SecDateTEdit": "2023-09-22 14:45:35",<br> "UserNumPresenter": 5,<br> "TPType": "Insurance",<br> "DateTSigned": "0001-01-01 00:00:00",<br> "DateTPracticeSigned": "0001-01-01 00:00:00",<br> "SignatureText": "",<br> "SignaturePracticeText": "",<br> "isSigned": "false",<br> "isSignedPractice": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>TreatPlans PUT (update)</h2>
<p>Version Added: 24.1.10</p>
<p>Updates a treatplan.</p>
<p>To sign a saved Treatment Plan for a patient, set <b>isSigned</b> to "true". Most developers will only use <b>isSigned</b>.</p>
<p>Every Treatment Plan Sheet is required to have at least one Signature Box, meaning <b>isSigned</b> will always be allowed. The signature that appears on the Treatment Plan Sheet displays as the following: "Digitally Signed by [API DeveloperName] Date Signed: ["MM/dd/yyyy HH:mm:ss tt"]". The Treatment Plan Sheet used is the office or clinic's default Treatment Plan Sheet. The availablities of <b>isSignedPractice</b>, <b>SignatureText</b>, and <b>SignaturePracticeText</b> are dependent upon the default TP Sheet's layout. The office's default TP Sheet used can be found by calling Preferences GET with "SheetsDefaultTreatmentPlan".</p>
<p>See <a href="apiimplementation.html">API Implementation</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetstreatplan.html">Treatment Plan Layout</a>, <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7treatmentplansign.html">Sign Treatment Plan</a>, and <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7sheetdefaults.html">Sheet Def Defaults</a> for more information on signing Treatment Plans. When signing a Treatment Plan, if the "TreatPlanSaveSignedToPdf" preference is enabled, then a PDF will be generated and saved in the practice's set <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7paths.html">Path</a>.</p>
<p><b>TreatPlanNum:</b> Required in the URL.<br></p>
<p><b>DateTP:</b> The date of the treatment plan. Can only be set if TPStatus is "Saved". String in "yyyy-MM-dd" format.<br><b>Heading:</b> The heading that shows at the top of the treatment plan.<br><b>Note:</b> A note specific to this treatment plan that shows at the bottom. Overwrites existing note.<br><b>ResponsParty:</b> FK to patient.PatNum. The patient responsible for approving the treatment.<br><b>TPType:</b> Either "Insurance" or "Discount".<br><b>SignatureText:</b> The typed name of the person who signed the patient signature. Only allowed if the Treatment Plan Sheet has a SheetFieldDef with a FieldName of "SignatureText".<br><b>SignaturePracticeText:</b> The typed name of the person who signed the practice signature. Only allowed if the Treatment Plan Sheet has a SheetFieldDef with a FieldName of "SignaturePracticeText".<br><b>isSigned:</b> Either "true" or "false". "true" updates treatplan Signature, digitally signs for the patient, and overwrites existing signature. "false" clears the exisiting signature.<br><b>isSignedPractice:</b> Either "true" or "false". "true" updates the treatplan SignaturePractice, digitally signs for the practice, and overwrites existing signature. "false" clears the exisiting practice signature. Only allowed if the Treatment Plan Sheet Def has a Sheet Field Def of FieldType=16 (SigBoxPractice).<br></p>
<p><b>Example Requests:</b><br> PUT /treatplans/9087<br></p>
<p><span class="codeblock"> {<br> "DateTP": "2024-01-27",<br> "Heading": "Inactive Treatment Plan - Patient Declined"<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "DateTP": "2024-01-27",<br> "Heading": "Saved Treatment Plan for Extractions + Implant",<br> "Note": "Please read this carefully: If you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect. Even if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay. This Treatment Plan was selected using Amazing Smiles Dental Application.",<br> "ResponsParty": 712,<br> "SignatureText": "Pamela Hoovey",<br> "SignaturePracticeText": "Dr. Ben Jeong",<br> "isSigned": "true",<br> "isSignedPractice": "true"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "TreatPlanNum": 9087<br> "PatNum": 8643,<br> "DateTP": "2024-01-27",<br> "Heading": "Saved Treatment Plan for Extractions + Implant",<br> "Note": "Please read this carefully: If you have insurance, THIS IS AN ESTIMATE ONLY. Insurance might not pay what we expect. Even if you pay your estimate ahead of time, you will still be responsible for any portion that insurance does not pay. This Treatment Plan was selected using Amazing Smiles Dental Application..",<br> "SigIsTopaz": "false",<br> "ResponsParty": 712,<br> "DocNum": 476,<br> "TPStatus": "Saved",<br> "SecUserNumEntry": 0,<br> "SecDateEntry": "2024-01-22",<br> "SecDateTEdit": "2024-01-27 14:13:05",<br> "UserNumPresenter": 0,<br> "TPType": "Insurance",<br> "DateTSigned": "2024-01-27 14:13:05",<br> "DateTPracticeSigned": "2024-01-27 14:13:05",<br> "SignatureText": "Pamela Hoovey",<br> "SignaturePracticeText": "Dr. Ben Jeong",<br> "isSigned": "true",<br> "isSignedPractice": "true"<br> }<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>TreatPlans DELETE</h2>
<p>Version Added: 24.4.26</p>
<p>Deletes a treatplan. For treatplans with a TPStatus of "Saved", all associated proctps are also deleted.</p>
<p><b>TreatPlanNum:</b> Required in the URL.<br></p>
<p><b>Example Request:</b><br> DELETE /treatplans/115<br></p>
<p><b>Example Responses:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
