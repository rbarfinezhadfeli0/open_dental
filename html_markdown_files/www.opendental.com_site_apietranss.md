# File: ./www.opendental.com/site/apietranss.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Etranss</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apietranss','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Etranss</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96etrans.html" target="_blank">Etrans Database Schema.</a></p>
<h2>Etranss GET</h2>
<p>Version Added: 23.2.7</p>
<p>Gets all etranss for a patient.</p>
<b>Parameters</b>:<br><br><p><b>PatNum</b>: Required.<br><b>CarrierNum</b>: Optional. FK to Carrier.CarrierNum.<br><b>ClaimNum</b>: Optional. FK to Claim.ClaimNum.</p>
<p><b>Example Request:</b><br> GET /etranss?PatNum=66<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "EtransNum": 143,<br> "DateTimeTrans": "2023-07-31 10:40:41",<br> "ClearingHouseNum": 0,<br> "Etype": "ERA_835",<br> "ClaimNum": 54,<br> "OfficeSequenceNumber": 0,<br> "CarrierTransCounter": 0,<br> "CarrierTransCounter2": 0,<br> "CarrierNum": 12,<br> "CarrierNum2": 0,<br> "PatNum": 66,<br> "BatchNumber": 4534,<br> "AckCode": "",<br> "TransSetNum": 0,<br> "Note": "",<br> "EtransMessageTextNum": 22,<br> "AckEtransNum": 0,<br> "PlanNum": 72,<br> "InsSubNum": 21,<br> "TransSetId835": 0,<br> "CarrierNameRaw": "Yamhill Community Care",<br> "PatientNameRaw": "Smith, Jane",<br> "UserNum": 0<br> }<br> ]<br></span></p>
 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br>		</div>
	</div>
</body>
</html>```
