# File: ./www.opendental.com/site/apiadjustments.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Adjustments</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiadjustments','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Adjustments</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96adjustment.html" target="_blank">Adjustment Database Schema.</a></p>
<h2>Adjustments GET</h2>
<p>Version Added: 22.2.21</p>
<p>Gets all adjustments for a specified patient.</p>
<p><b>PatNum:</b> Required.<br><b>AdjType:</b> (Added in version 22.2.33) Optional. definition.DefNum where definition.Category=1.<br><b>ProcNum:</b> (Added in version 22.4.28) Optional. FK to procedure.ProcNum.</p>
<p><b>Example Requests:</b><br> GET /adjustments?PatNum=26<br> GET /adjustments?PatNum=42&amp;AdjType=2<br> GET /adjustments?PatNum=42&amp;ProcNum=12</p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "AdjNum": 1,<br> "AdjDate": "2022-07-02",<br> "AdjAmt": -25.0,<br> "PatNum": 26,<br> "AdjType": 1,<br> "adjType": "Misc Neg Adjustment",<br> "ProvNum": 1,<br> "AdjNote": "Cash Discount",<br> "ProcDate": "2022-07-02",<br> "ProcNum": 0,<br> "DateEntry": "2022-07-02",<br> "ClinicNum": 0,<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-07-02 11:45:48",<br> },<br> {<br> "AdjNum": 2,<br> "AdjDate": "2022-07-18",<br> "AdjAmt": 50.0,<br> "PatNum": 26,<br> "AdjType": 2,<br> "adjType": "Misc Pos Adjustment",<br> "ProvNum": 1,<br> "AdjNote": "Finance Charge",<br> "ProcDate": "2022-07-18",<br> "ProcNum": 0,<br> "DateEntry": "2022-07-18",<br> "ClinicNum": 0,<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-07-18 11:45:48",<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Adjustments POST (create)</h2>
<p>Version Added: 22.2.22</p>
<p>Creates an adjustment for a patient.</p>
<p><b>PatNum: </b>Required.<br><b>AdjType:</b> Required. definition.DefNum where definition.Category=1, and definition.ItemValue="+" or "-".<br><b>AdjAmt:</b> Required. Must be positive if <b>AdjType</b> has an ItemValue of "+", or negative if it has an ItemValue of "-".<br><b>AdjDate:</b> Required. Cannot be a future date. String in "yyyy-MM-dd" format.<br></p>
<p><b>ProvNum:</b> Optional. Default patient.PriProv.<br><b>ProcNum:</b> Optional. Only used if attaching this adjustment to a procedure. The procedure must be associated to the patient. Default 0.<br><b>ClinicNum:</b> Optional. Default patient.ClinicNum.<br><b>ProcDate:</b> Optional. String in "yyyy-MM-dd" format. If attaching to a procedure then this will default to the procedure's ProcDate. Otherwise, defaults to today's date.<br><b>AdjNote:</b> Optional. Note for the adjustment.<br></p>
<p><b>Example Request:</b><br> POST /adjustments<br></p>
<p><span class="codeblock"> {<br> "PatNum": 15,<br> "AdjType": 1,<br> "AdjAmt": -24.99,<br> "AdjDate": "2022-07-19",<br> "ProvNum": 1,<br> "AdjNote": "Discount",<br> "ProcNum": 18,<br> "ProcDate": "2022-06-10",<br> "ClinicNum": 1<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "AdjNum": 12,<br> "AdjDate": "2022-07-19",<br> "AdjAmt": -24.99,<br> "PatNum": 15,<br> "AdjType": 1,<br> "adjType": "Misc Neg Adjustment",<br> "ProvNum": 1,<br> "AdjNote": "Discount",<br> "ProcDate": "2022-06-10",<br> "ProcNum": 18,<br> "DateEntry": "2022-06-10",<br> "ClinicNum": 1,<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-07-19 11:45:48",<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Adjustments PUT (update)</h2>
<p>Version Added: 22.2.23</p>
<p>Updates an adjustment. A discount plan adjustment cannot be changed to another AdjType.</p>
<p><b>AdjNum:</b> Required in the URL.<br></p>
<p><b>AdjDate:</b> Cannot be a future date. String in "yyyy-MM-dd" format.<br><b>AdjAmt:</b> Must be positive if the AdjType of the adjustment is positive, or negative if the AdjType is negative or a discount plan.<br><b>AdjType:</b> definition.DefNum where definition.Category=1, and definition.ItemValue="+" or "-". ItemValue must be "+" if AdjAmt is positive, or "-" if AdjAmt is negative.<br><b>ProvNum:</b> ProvNum of a non-hidden provider.<br><b>AdjNote:</b> Overwrites existing note.<br><b>ProcNum:</b> Attaches the adjustment to a procedure, overwriting any previous ProcNum. The procedure's patient must match the patient on the adjustment. Updating this value will also update the adjustment's ProcDate to match the newly attached procedure's ProcDate.<br><b>ClinicNum:</b> ClinicNum of a clinic. Can be 0.<br></p>
<p><b>Example Requests:</b><br> PUT /adjustments/17<br></p>
<p><span class="codeblock"> {<br> "AdjAmt": -24.49<br> }<br></span></p>
<p>or</p>
<p><span class="codeblock"> {<br> "AdjDate": "2022-07-21",<br> "AdjAmt": 39.50,<br> "AdjType": 2,<br> "ProvNum": 4,<br> "AdjNote": "Additional Charge",<br> "ProcNum": 22,<br> "ClinicNum": 0<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "AdjNum": 17,<br> "AdjDate": "2022-07-21",<br> "AdjAmt": 39.5,<br> "PatNum": 21,<br> "AdjType": 2,<br> "adjType": "Misc Pos Adjustment",<br> "ProvNum": 4,<br> "AdjNote": "Additional Charge",<br> "ProcDate": "2022-07-21",<br> "ProcNum": 22,<br> "DateEntry": "2022-07-21",<br> "ClinicNum": 0,<br> "SecUserNumEntry": 0,<br> "SecDateTEdit": "2022-07-21 11:45:48",<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
