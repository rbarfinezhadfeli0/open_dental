# File: ./www.opendental.com/site/apisubstitutionlinks.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API SubstitutionLinks</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apisubstitutionlinks','apispecification','documentation')">
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
		<div class="TopBar2"><p>API SubstitutionLinks</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7downgrades.html">Estimate Downgrades</a> for additional information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96substitutionlink.html" target="_blank">SubstitutionLink Database Schema.</a></p>
<h2>SubstitutionLinks GET</h2>
<p>Version Added: 22.4.25</p>
<p>Gets a list of substitution links for a given insurance plan.</p>
<p><b>PlanNum:</b> FK to InsPlan.planNum.<br></p>
<p><b>Example Request:</b><br> GET /substitutionlinks?PlanNum=33<br></p>
<b>Example Response:</b><br><p><br><span class="codeblock"> [<br> {<br> "SubstiutionLinkNum": 13,<br> "PlanNum": 33,<br> "CodeNum": 6,<br> "SubstitutionCode": "D3002",<br> "SubstOnlyIf": "Always"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>SubstitutionLinks POST (create)</h2>
<p>Version Added: 22.4.1</p>
<p>Creates a new SubstitutionLink. These links are created for a single insurance plan and will overwrite the ProcedureCode on a procedure with the SubstitutionCode. This replacement is based upon the SubstOnlyIf condition.</p>
<p><b>PlanNum:</b> Required. FK to InsPlan.PlanNum.<br><b>CodeNum:</b> Required. FK to ProcedureCode.CodeNum.<br><b>SubstitutionCode:</b> Required. FK to ProcedureCode.ProcCode. Case-sensitive.<br><b>SubstOnlyIf:</b> Required. Either "Always", "Molar", "SecondMolar", "Never", or "Posterior".<br></p>
<p><b>Example Request:</b><br> POST /substitutionlinks<br></p>
<p><span class="codeblock"> {<br>  "PlanNum": 34,<br>  "CodeNum": 6,<br>  "SubstitutionCode": "D3002",<br>  "SubstOnlyIf": "Molar"<br> }<br></span></p>
<b>Example Response:</b><br><p><br><span class="codeblock"> {<br> "SubstitutionLinkNum": 16, <br>  "PlanNum": 34,<br>  "CodeNum": 6,<br>  "SubstitutionCode": "D3002",<br>  "SubstOnlyIf": "Molar"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>SubstitutionLinks PUT (update)</h2>
<p>Version Added: 22.4.25</p>
<p>Updates a substitution link.</p>
<p></p>
<p><p><b>SubstitutionLinkNum:</b> Required in the URL.<br></p>
<b>SubstitutionCode:</b> Optional. FK to ProcedureCode.ProcCode. Case-sensitive.<br><b>SubstOnlyIf:</b> Optional. Either "Always", "Molar", "SecondMolar", "Never", or "Posterior".<br></p>
<p><b>Example Request:</b><br> PUT /substitutionlinks/34<br></p>
<p><span class="codeblock"> {<br>  "SubstitutionCode": "D3004",<br>  "SubstOnlyIf": "SecondMolar"<br> }<br></span></p>
<b>Example Response:</b><br><p><br><span class="codeblock"> {<br> "SubstitutionLinkNum": 34, <br>  "PlanNum": 14,<br>  "CodeNum": 6,<br>  "SubstitutionCode": "D3004",<br>  "SubstOnlyIf": "SecondMolar"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>SubstitutionLinks DELETE</h2>
<p>Version Added: 22.4.25</p>
<p>Deletes an existing substitution link by SubstitutionLinkNum.</p>
<p><b>SubsitutionLinkNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> DELETE /substitutionlinks/25</p>
<b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br>		</div>
	</div>
</body>
</html>```
