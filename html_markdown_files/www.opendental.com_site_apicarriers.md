# File: ./www.opendental.com/site/apicarriers.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Carriers</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apicarriers','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Carriers</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7carriers.html">Carriers</a> for additional information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96carrier.html" target="_blank">Carrier Database Schema.</a></p>
<h2>Carriers GET (single)</h2>
<p>Version Added: 24.4.5</p>
<p>Gets a single insurance carrier.</p>
<p><b>CarrierNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /carriers/32<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "CarrierNum": 32,<br>  "CarrierName": "PPO (Prefered Provider Insurance)",<br>  "Address": "42960 Random Road",<br>  "Address2": "",<br>  "City": "Harrington",<br>  "State": "PA",<br>  "Zip": "52482",<br>  "Phone": "(503)456-8910",<br>  "ElectID": "18158",<br> "NoSendElect": "SendElect",<br>  "IsHidden": "false"<br> }<br></span></p>
<p> 200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Carriers GET (multiple)</h2>
<p>Version Added: 22.4.16</p>
<p>Gets a list of insurance carriers.</p>
<p><b>Example Request:</b><br> GET /carriers<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br>  "CarrierNum": 1,<br>  "CarrierName": "Dental Guard",<br>  "Address": "123 Elen St",<br>  "Address2": "",<br>  "City": "Portland",<br>  "State": "OR",<br>  "Zip": "97035",<br>  "Phone": "(503)456-8910",<br>  "ElectID": "54651",<br> "NoSendElect": "SendElect",<br>  "IsHidden": "false"<br> },<br> {<br>  "CarrierNum": 2,<br>  "CarrierName": "Out of Network Insurance",<br>  "Address": "365 Tree Top St",<br>  "Address2": "",<br>  "City": "Salem",<br>  "State": "OR",<br>  "Zip": "18911",<br>  "Phone": "(503)456-8910",<br>  "ElectID": "",<br> "NoSendElect": "SendElect",<br>  "IsHidden": "false"<br> },<br> etc...<br> ]<br></span></p>
<p> 200 OK<br> 400 BadRequest (with explanation)<br></p>
<h2>Carriers POST (create)</h2>
<p>Version Added: 21.4</p>
<p>Creates a new insurance carrier.</p>
<p><b>CarrierName:</b> Required.<br></p>
<p></p>
<p><b>Address:</b> Optional. The carriers physical address.<br><b>Address2:</b> Optional. Second address line.<br><b>City:</b> Optional.<br><b>State:</b> Optional. Two capital characters in USA. Province in Canada.<br><b>Zip:</b> Optional. Postal code for USA. Must be in format 12345, 12345-1234, or 123456789.<br><b>Phone:</b> Optional. Phone number including any necessary punctuation.<br><b>ElectID:</b> Optional. Used for e-claims, this is the electronic payer ID.<br><b>NoSendElect:</b> Optional. This must be one of the following values: "SendElect", "NoSendElect" or "NoSendSecondaryElect".<br><b>IsHidden:</b> Optional. Either "true" or "false".<br></p>
<p><b>Example Request:</b><br> POST /carriers<br><span class="codeblock"> {<br>  "CarrierName": "Dental Guard",<br>  "Address": "123 Elen St",<br>  "Address2": "",<br>  "City": "Portland",<br>  "State": "OR",<br>  "Zip": "97035",<br>  "Phone": "503-456-8910", <br> "ElectID": "54651",<br> "NoSendElect": "SendElect", <br> "IsHidden": "false"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br>  "CarrierNum": 1,<br>  "CarrierName": "Dental Guard",<br>  "Address": "123 Elen St",<br>  "Address2": "",<br>  "City": "Portland",<br>  "State": "OR",<br>  "Zip": "97035",<br>  "Phone": "(503)456-8910",<br>  "ElectID": "54651",<br> "NoSendElect": "SendElect",<br>  "IsHidden": "false"<br> }<br></span></p>
<p> 201 Created<br> 400 BadRequest (with explanation)<br></p>
<h2>Carriers PUT (update)</h2>
<p>Version Added: 21.4</p>
<p>Updates an insurance carrier.</p>
<p></p>
<p><b>CarrierNum:</b> Required in the URL.</p>
<p><b>CarrierName:</b> Optional. <br><b>Address:</b> Optional. The carrier's physical address.<br><b>Address2:</b> Optional. Second address line.<br><b>City:</b> Optional.<br><b>State:</b> Optional. Two capital characters in USA. Province in Canada.<br><b>Zip:</b> Optional. Postal code for USA. Must be in format 12345, 12345-1234, or 123456789.<br><b>Phone:</b> Optional. Phone number including any necessary punctuation.<br><b>ElectID:</b> Optional. Used for e-claims, this is the electronic payer ID.<br><b>NoSendElect:</b> Optional. This must be one of the following values: "SendElect", "NoSendElect" or "NoSendSecondaryElect".<br><b>IsHidden:</b> Optional. Either "true" or "false".<br></p>
<p><b>Example Request:</b><br> PUT /carriers/1<br><span class="codeblock"> {<br>  "CarrierName": "Dental Guard",<br>  "Address": "123 Elen St",<br>  "Address2": "",<br>  "City": "Portland",<br>  "State": "OR",<br>  "Zip": "97035",<br>  "Phone": "503-456-8910",<br>  "ElectID": "54651",<br> "NoSendElect": "SendElect", <br> "IsHidden": "true"<br> }<br></span></p>
<p><b>Example Response:</b><br> 200 OK<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
