# File: ./www.opendental.com/site/apiprocedurecodes.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API ProcedureCodes</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiprocedurecodes','apispecification','documentation')">
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
		<div class="TopBar2"><p>API ProcedureCodes</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96procedurecode.html" target="_blank">ProcedureCode Database Schema.</a></p>
<h2>ProcedureCodes GET (single)</h2>
<p>Version Added: 23.3.25</p>
<p>Gets a single ProcedureCode.</p>
<p><b>Example Request:</b><br> GET /procedurecodes/35</p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CodeNum": 35,<br> "ProcCode": "D0120",<br> "Descript": "periodic oral evaluation - established patient",<br> "AbbrDesc": "PerEx",<br> "ProcTime": "/X/",<br> "ProcCat": 73,<br> "procCat": "Exams &amp; Xrays",<br> "TreatArea": "Mouth",<br> "NoBillIns": "false",<br> "IsProsth": "false",<br> "DefaultNote": "",<br> "IsHygiene": "false",<br> "AlternateCode1": "",<br> "MedicalCode": "",<br> "IsTaxed": "false",<br> "PaintType": "None",<br> "LaymanTerm": "",<br> "IsCanadianLab": "false",<br> "BaseUnits": 0,<br> "SubstitutionCode": "",<br> "SubstOnlyIf": "Always",<br> "DateTStamp": "2023-12-12 09:15:11",<br> "DrugNDC": "",<br> "RevenueCodeDefault": "",<br> "ProvNumDefault": 0,<br> "CanadaTimeUnits": 0.0,<br> "IsRadiology": "false",<br> "DefaultClaimNote": "",<br> "DefaultTPNote": "",<br> "PaintText": "",<br> "AreaAlsoToothRange": "false",<br> "DiagnosticCodes": ""<br> }<br></span></p>
<p>200 OK<br> 404 NotFound</p>
<h2>ProcedureCodes GET (multiple)</h2>
<p>Version Added: 22.3.22</p>
<p>Gets a list of ProcedureCodes.</p>
<p><b>DateTStamp:</b> (Added in version 22.4.28) Optional. String in "yyyy-MM-dd HH:mm:ss" format. Get ProcedureCodes altered on and after the specified date and time.</p>
<p><b>Example Requests:</b><br> GET /procedurecodes<br> GET /procedurecodes?DateTStamp=2021-11-07%2014%3A00%3A00</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "CodeNum": 35,<br> "ProcCode": "D0120",<br> "Descript": "periodic oral evaluation - established patient",<br> "AbbrDesc": "PerEx",<br> "ProcTime": "/X/",<br> "ProcCat": 73,<br> "procCat": "Exams &amp; Xrays",<br> "TreatArea": "Mouth",<br> "NoBillIns": "false",<br> "IsProsth": "false",<br> "DefaultNote": "",<br> "IsHygiene": "false",<br> "AlternateCode1": "",<br> "MedicalCode": "",<br> "IsTaxed": "false",<br> "PaintType": "None",<br> "LaymanTerm": "",<br> "IsCanadianLab": "false",<br> "BaseUnits": 0,<br> "SubstitutionCode": "",<br> "SubstOnlyIf": "Always",<br> "DateTStamp": "2023-12-12 09:15:11",<br> "DrugNDC": "",<br> "RevenueCodeDefault": "",<br> "ProvNumDefault": 0,<br> "CanadaTimeUnits": 0.0,<br> "IsRadiology": "false",<br> "DefaultClaimNote": "",<br> "DefaultTPNote": "",<br> "PaintText": "",<br> "AreaAlsoToothRange": "false",<br> "DiagnosticCodes": ""<br> },<br> {<br>  "CodeNum": 36,<br>  "ProcCode": "D0140",<br>  "Descript": "limited oral evaluation - problem focused",<br>  "AbbrDesc": "LimEx",<br>  "ProcTime": "/X/",<br>  "ProcCat": 73,<br>  "procCat": "Exams &amp; Xrays",<br>  "TreatArea": "Mouth",<br>  "NoBillIns": "false",<br>  "IsProsth": "false",<br>  "DefaultNote": "",<br>  "IsHygiene": "false",<br>  "AlternateCode1": "",<br>  "MedicalCode": "",<br>  "IsTaxed": "false",<br>  "PaintType": "None",<br>  "LaymanTerm": "",<br>  "IsCanadianLab": "false",<br>  "BaseUnits": 0,<br>  "SubstitutionCode": "",<br>  "SubstOnlyIf": "Always",<br>  "DateTStamp": "2018-07-18 08:59:14",<br>  "DrugNDC": "",<br>  "RevenueCodeDefault": "",<br>  "ProvNumDefault": 0,<br>  "CanadaTimeUnits": 1.0,<br>  "IsRadiology": "false",<br>  "DefaultClaimNote": "",<br>  "DefaultTPNote": "",<br>  "PaintText": "",<br>  "AreaAlsoToothRange": "false",<br>  "DiagnosticCodes": ""<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest</p>
<h2>ProcedureCodes POST (create)</h2>
<p>Version Added: 22.3</p>
<p>Creates a new ProcedureCode. For more information, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodeedit.html">Procedure Code</a>.</p>
<p><b>ProcCode:</b> Required. Dental code.<br><b>Descript:</b> Required. The main description of the procedure.<br><b>AbbrDesc:</b> Required. Abbreviated description.<br><b>ProcCat:</b> This or <b>procCat</b> is required. FK to definition.DefNum where definition.Category=11. <br><b>procCat:</b> This or <b>ProcCat</b> is required. The string version of the definition.ItemName.<br></p>
<p><b>ProcTime:</b> Optional. Time pattern in increments defined by the AppointmentTimeIncrement preference. A string consisting of 'X' and '/' characters only. Default "/X/".<br><b>TreatArea:</b> (Added in version 22.4.34) Optional. Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange". Default is "None".<br><b>NoBillIns:</b> (Added in version 23.2.10) Optional. Either "true" or "false". Default "false".<br><b>IsProsth:</b> (Added in version 23.3.25) Optional. Either "true" or "false". Default "false".<br><b>DefaultNote:</b> Optional. The default note for this procedure that will be copied to a ProcNote when marking complete.<br><b>IsHygiene:</b> Optional. Either "true" or "false". Default "false".<br><b>AlternateCode1:</b> (Added in version 23.3.25) Optional. For Medicaid.<br><b>MedicalCode:</b> Optional. FK to procedurecode.ProcCode. The medical code that is being referenced must be set up first. Anytime a procedure is added, this medical code will also be added to that procedure.<br><b>IsTaxed:</b> (Added in version 23.3.25) Optional. If true, uses PrefName.SalesTaxDefaultProvider to apply a sales tax adjustment to procedurelog. Either "true" or "false". Default "false".<br><b>PaintType:</b> (Added in version 23.3.25) Optional. Either "None", "Extraction", "Implant", "RCT", "PostBU", "FillingDark", "FillingLight", "CrownDark", "CrownLight", "BridgeDark", "BridgeLight", "DentureDark", "DentureLight", "Sealant", "Veneer", "Text", "RetainedRoot", or "SpaceMaintainer". Default is "None".<br><b>LaymanTerm:</b> Optional. When creating treatment plans, this description will be used instead of <b>Descript</b>.<br><b>IsCanadianLab:</b> (Added in version 23.3.25) Optional. True if procedure code is used as an adjunct to track the lab fee. Either "true" or "false". Default "false".<br><b>BaseUnits:</b> (Added in version 23.3.25) Optional. Base units for a code. Cannot be negative. Normally 0.<br><b>SubstitutionCode:</b> (Added in version 22.4.9) Optional. FK to procedurecode.ProcCode. Used to create a substitution code at the procedure level. Case sensitive.<br><b>SubstOnlyIf:</b> (Added in version 22.4.9) Optional. Either "Always", "Molar", "SecondMolar", "Never", or "Posterior". Only used if <b>SubstitutionCode</b> is set. Default is "Always".<br><b>DrugNDC:</b> (Added in version 23.3.25) Optional. National Drug Code number. 11 digits or blank.<br><b>RevenueCodeDefault:</b> (Added in version 23.3.25) Optional. A 3-digit code sometimes used for institutional claims.<br><b>ProvNumDefault:</b> Optional. FK to provider.ProvNum. 0 for none. Otherwise, this provider will override other providers.<br><b>CanadaTimeUnits:</b> Optional. Tracks scaling insurance and periodontal scaling units for patients depending on coverage.<br><b>IsRadiology:</b> (Added in version 23.3.25) Optional. Either "true" or "false". Default "false".<br><b>DefaultClaimNote:</b> (Added in version 23.3.25) Optional. Default note appended to claim.ClaimNote when a claim is created using this procedure code.<br><b>DefaultTPNote:</b> (Added in version 23.3.25) Optional. Default note appended to a treatment planned procedure.<br><b>PaintText:</b> (Added in version 23.3.24) Optional. The text to draw on the tooth. <b>PaintType</b> must be "Text".<br><b>AreaAlsoToothRange:</b> (Added in version 23.3.25) Optional. <b>TreatArea</b> must be "Quad" or "Arch". Either "true" or "false". Default "false".<br><b>DiagnosticCodes:</b> (Added in version 23.3.25) Optional. Text to store up to 4 ICD-10 codes. Codes are comma-separated with no whitespace. </p>
<p><b>Example Request:</b><br> POST /procedurecodes<br></p>
<p><span class="codeblock"> {<br> "ProcCode": "G0140",<br> "Descript": "limited oral evaluation - problem focused",<br> "AbbrDesc": "LimEx",<br> "ProcCat": 83,<br> "DiagnosticCodes": "B08.09"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CodeNum": 617,<br> "ProcCode": "G0140",<br> "Descript": "limited oral evaluation - problem focused",<br> "AbbrDesc": "LimEx",<br> "ProcTime": "/X/",<br> "ProcCat": 83,<br> "procCat": "Ortho",<br> "TreatArea": "None",<br> "NoBillIns": "false",<br> "IsProsth": "false",<br> "DefaultNote": "",<br> "IsHygiene": "false",<br> "AlternateCode1": "",<br> "MedicalCode": "",<br> "IsTaxed": "false",<br> "PaintType": "None",<br> "LaymanTerm": "",<br> "IsCanadianLab": "false",<br> "BaseUnits": 0,<br> "SubstitutionCode": "",<br> "SubstOnlyIf": "Always",<br> "DateTStamp": "2023-12-29 09:19:21",<br> "DrugNDC": "",<br> "RevenueCodeDefault": "",<br> "ProvNumDefault": 0,<br> "CanadaTimeUnits": 0.0,<br> "IsRadiology": "false",<br> "DefaultClaimNote": "",<br> "DefaultTPNote": "",<br> "PaintText": "",<br> "AreaAlsoToothRange": "false",<br> "DiagnosticCodes": "B08.09"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)</p>
<h2>ProcedureCodes PUT (update)</h2>
<p>Version Added: 23.3.25</p>
<p>Updates an existing ProcedureCode. All fields are optional. For more information, see <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7procedurecodeedit.html">Procedure Code</a>. </p>
<p><b>CodeNum:</b> Required in URL.<br></p>
<p><b>Descript:</b> The main description of the Procedure.<br><b>AbbrDesc:</b> Abbreviated description.<br><b>ProcTime:</b> Time pattern in increments defined by the AppointmentTimeIncrement preference. A string consisting of 'X' and '/' characters only.<br><b>ProcCat:</b> This or <b>procCat</b>. FK to definition.DefNum where definition.Category=11. <br><b>procCat:</b> This or <b>ProcCat</b>. The string version of the definition.ItemName.<br><b>TreatArea:</b> Either "None", "Surf", "Tooth", "Mouth", "Quad", "Sextant", "Arch", or "ToothRange".<br><b>NoBillIns:</b> Either "true" or "false".<br><b>IsProsth:</b> Either "true" or "false".<br><b>DefaultNote:</b> The default note for this procedure that will be copied to a ProcNote when marking complete.<br><b>IsHygiene:</b> Either "true" or "false".<br><b>AlternateCode1:</b> For Medicaid.<br><b>MedicalCode:</b> FK to procedurecode.ProcCode. The medical code that is being referenced must be set up first. Anytime a procedure is added, this medical code will also be added to that procedure.<br><b>IsTaxed:</b> If true, uses PrefName.SalesTaxDefaultProvider to apply a sales tax adjustiment to a procedurelog. Either "true" or "false".<br><b>PaintType:</b> Either "None", "Extraction", "Implant", "RCT", "PostBU", "FillingDark", "FillingLight", "CrownDark", "CrownLight", "BridgeDark", "BridgeLight", "DentureDark", "DentureLight", "Sealant", "Veneer", "Text", "RetainedRoot", or "SpaceMaintainer".<br><b>LaymanTerm:</b> When creating treatment plans, this description will be used instead of the <b>Descript</b>.<br><b>IsCanadianLab:</b> True if procedure code is used as an adjunct to track lab fee. Either "true" or "false".<br><b>BaseUnits:</b> Base units for a code. Cannot be negative. Normally 0.<br><b>SubstitutionCode:</b> FK to procedureCode.ProcCode. Used to create a substitution code at the procedure level. Case sensitive.<br><b>SubstOnlyIf:</b> Either "Always", "Molar", "SecondMolar", "Never", or "Posterior". Only used if <b>SubstitutionCode</b> is set.<br><b>DrugNDC:</b> National Drug Code number. 11 digits or blank.<br><b>RevenueCodeDefault:</b> A 3-digit code sometimes used for institutional claims.<br><b>ProvNumDefault:</b> FK to provider.ProvNum. 0 for none. Otherwise, this provider will override other providers.<br><b>CanadaTimeUnits:</b> Tracks scaling insurance and periodontal scaling units for patients depending on coverage.<br><b>IsRadiology:</b> Either "true" or "false".<br><b>DefaultClaimNote:</b> Default note appended to claim.ClaimNote when a claim is created using this procedure code.<br><b>DefaultTPNote:</b> Default note appended to a treatment planned procedure.<br><b>PaintText:</b> The text to draw on the tooth. <b>PaintType</b> must be "Text".<br><b>AreaAlsoToothRange:</b><b> TreatArea</b> must be "Quad" or "Arch". Either "true" or "false".<br><b>DiagnosticCodes:</b> Text to store up to 4 ICD-10 codes. Codes are comma-separated with no whitespace. </p>
<p><b>Example Request:</b><br> PUT /procedurecodes/617<br></p>
<p><span class="codeblock"> {<br> "PaintType": "Text",<br> "PaintText": "Watch"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "CodeNum": 617,<br> "ProcCode": "G0140",<br> "Descript": "limited oral evaluation - problem focused",<br> "AbbrDesc": "LimEx",<br> "ProcTime": "/X/",<br> "ProcCat": 83,<br> "procCat": "Ortho",<br> "TreatArea": "None",<br> "NoBillIns": "false",<br> "IsProsth": "false",<br> "DefaultNote": "",<br> "IsHygiene": "false",<br> "AlternateCode1": "",<br> "MedicalCode": "",<br> "IsTaxed": "false",<br> "PaintType": "Text",<br> "LaymanTerm": "",<br> "IsCanadianLab": "false",<br> "BaseUnits": 0,<br> "SubstitutionCode": "",<br> "SubstOnlyIf": "Always",<br> "DateTStamp": "2023-12-29 09:19:21",<br> "DrugNDC": "",<br> "RevenueCodeDefault": "",<br> "ProvNumDefault": 0,<br> "CanadaTimeUnits": 0.0,<br> "IsRadiology": "false",<br> "DefaultClaimNote": "",<br> "DefaultTPNote": "",<br> "PaintText": "Watch",<br> "AreaAlsoToothRange": "false",<br> "DiagnosticCodes": "B08.09"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)</p>
		</div>
	</div>
</body>
</html>```
