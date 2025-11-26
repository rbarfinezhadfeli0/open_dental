# File: ./www.opendental.com/site/apilaboratories.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Laboratories</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apilaboratories','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Laboratories</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>See <a href="../autoLogin.aspx%EF%B9%96ReturnUrl=%EA%A4%B7help253%EA%A4%B7laboratories.html">Laboratories</a> for more information.</p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96laboratory.html" target="_blank">Laboratory Database Schema.</a></p>
<h2>Laboratories GET (single)</h2>
<p>Version Added: 24.2.33</p>
<p>Gets a single laboratory.</p>
<p><b>LaboratoryNum:</b> Required in URL.</p>
<p><b>Example Request:</b><br> GET /laboratories/1<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LaboratoryNum": 1,<br> "Description": "Go Smiles Lab",<br> "Phone": "(503)240-1910",<br> "Notes": "",<br> "Slip": 0,<br> "Address": "231 Hoyt Rd",<br> "City": "Glendale",<br> "State": "OR",<br> "Zip": "91124",<br> "Email": "",<br> "WirelessPhone": "",<br> "IsHidden": "false"<br> } </span></p>
<p>200 OK<br> 404 NotFound (with explanation)<br></p>
<h2>Laboratories GET (multiple)</h2>
<p>Version Added: 24.2.33</p>
<p>Gets a list of laboratories.</p>
<p><b>Example Request:</b><br> GET /laboratories<br></p>
<p><b>Example Responses:</b><br><span class="codeblock"> [<br> {<br> "LaboratoryNum": 1,<br> "Description": "Go Smiles Lab",<br> "Phone": "(503)240-1910",<br> "Notes": "",<br> "Slip": 0,<br> "Address": "231 Hoyt Rd",<br> "City": "Glendale",<br> "State": "OR",<br> "Zip": "91124",<br> "Email": "",<br> "WirelessPhone": "",<br> "IsHidden": "false"<br> },<br> {<br> "LaboratoryNum": 2,<br> "Description": "Lab",<br> "Phone": "(503)555-1810",<br> "Notes": "",<br> "Slip": 0,<br> "Address": "",<br> "City": "",<br> "State": "",<br> "Zip": "",<br> "Email": "",<br> "WirelessPhone": "",<br> "IsHidden": "false"<br> },<br> etc...<br> ]<br></span></p>
<p>200 OK<br></p>
<h2>Laboratories POST (create)</h2>
<p>Version Added: 24.4.22</p>
<p>Creates a Laboratory.</p>
<p><b>Description: </b>Required. Description of lab.<br></p>
<p><b>Phone:</b> Optional.<br><b>Notes:</b> Optional.<br><b>Slip:</b> Optional. FK to sheetdef.SheetDefNum. Lab slips can be set for individual laboratories. If 0, then the default internal lab slip will be used instead of a custom lab slip. Default 0.<br><b>Address:</b> Optional. The laboratory's address.<br><b>City:</b> Optional. City.<br><b>State:</b> Optional. Two capital character in USA. Province in Canada.<br><b>Zip:</b> Optional. Postal code. Must be in format 12345, 12345-1234, or 123456789 (US) or A0A 0A0 (CA).<br><b>Email:</b> Optional. The laboratory's email address.<br><b>WirelessPhone:</b> Optional.<br><b>IsHidden:</b> Optional. Set "true" for laboratories no longer in use. Default "false".<br></p>
<p><b>Example Request:</b><br> POST /laboratories<br></p>
<p><span class="codeblock"> {<br> "Description": "Go Smiles Lab",<br> "Phone": "(503)240-1910",<br> "Notes": "Implants.",<br> "Slip": 0,<br> "Address": "231 Hoyt Rd",<br> "City": "Glendale",<br> "State": "OR",<br> "Zip": "91124",<br> "Email": "GoSmilesLab@mail.com",<br> "WirelessPhone": "(503)981-5555",<br> "IsHidden": "false"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LaboratoryNum": 1,<br> "Description": "Go Smiles Lab",<br> "Phone": "(503)240-1910",<br> "Notes": "Implants.",<br> "Slip": 0,<br> "Address": "231 Hoyt Rd",<br> "City": "Glendale",<br> "State": "OR",<br> "Zip": "91124",<br> "Email": "GoSmilesLab@mail.com",<br> "WirelessPhone": "(503)981-5555",<br> "IsHidden": "false"<br> }<br></span></p>
<p>201 Created<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
<h2>Laboratories PUT (update)</h2>
<p>Version Added: 24.4.23</p>
<p>Updates a laboratory.</p>
<p><b>LaboratoryNum: </b>Required in the URL.<br></p>
<p><b>Description:</b> Name of laboratory.<br><b>Phone:</b> Contact phone number.<br><b>Notes:</b> Overwrites existing note.<br><b>Slip:</b> FK to sheetdef.SheetDefNum. Set to 0 to use the default internal lab slip.<br><b>Address:</b> The laboratory's address.<br><b>City:</b> City.<br><b>State:</b> Two capital character in USA. Province in Canada.<br><b>Zip:</b> Postal code. Must be in format 12345, 12345-1234, or 123456789 (US) or A0A 0A0 (CA).<br><b>Email:</b> Email address for laboratory.<br><b>WirelessPhone:</b> Additional contact phone number.<br><b>IsHidden:</b> Set "true" for laboratories no longer in use.<br></p>
<p><b>Example Request:</b><br> PUT /laboratories/1<br></p>
<p><span class="codeblock"> {<br> "Notes": "Implant Specialists.",<br> "Email": "GoSmilesImplantSpecialists@mail.com"<br> }<br></span></p>
<p><b>Example Response:</b><br><span class="codeblock"> {<br> "LaboratoryNum": 1,<br> "Description": "Go Smiles Lab",<br> "Phone": "(503)240-1910",<br> "Notes": "Implant Specialists.",<br> "Slip": 2,<br> "Address": "231 Hoyt Rd",<br> "City": "Glendale",<br> "State": "OR",<br> "Zip": "91124",<br> "Email": "GoSmilesImplantSpecialists@mail.com",<br> "WirelessPhone": "(503)981-5555",<br> "IsHidden": "false"<br> }<br></span></p>
<p>200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
