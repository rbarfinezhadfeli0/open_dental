# File: ./www.opendental.com/site/apiclinics.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

	<title>Open Dental Software - API Clinics</title>
	<link href="resources/siteWithTree.css" rel="stylesheet" type="text/css">
	<link href="../css/common.css" rel="stylesheet" type="text/css">
	<script src = "resources/siteWithTreeToc.js"></script>
	<script src = "resources/siteWithTree.js"></script>
	<link rel="icon" type="image/png" href="resources/favicon.png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="BodyLoaded('apiclinics','apispecification','documentation')">
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
		<div class="TopBar2"><p>API Clinics</p></div>
		<div class="GeneralPageContent">
<p>See <a href="apispecification.html">API Specification</a></p>
<p>Anyone using the API should also become very familiar with our schema documentation which contains important details about individual database table columns.<br> See <a href="SchemaRedirect%EF%B9%96clinic.html" target="_blank">Clinic Database Schema.</a></p>
<h2>Clinics GET</h2>
<p>Version Added: 21.1</p>
<p>Gets all non-hidden clinics. An empty list indicates the dental office does not utilize the Clinics feature.</p>
<p><b>Example Request:</b><br> GET /clinics<br></p>
<p><b>Example Response:</b><br><span class="codeblock"> [<br> {<br> "ClinicNum": 1,<br> "Description": "Clinic1",<br> "Address": "333 Blackwood St",<br> "Address2": "",<br> "City": "Salem",<br> "State": "Oregon",<br> "Zip": "97301",<br> "BillingAddress": "333 Blackwood St ",<br> "BillingAddress2": "",<br> "BillingCity": " Salem ",<br> "BillingState": " Oregon ",<br> "BillingZip": "97301",<br> "PayToAddress": "",<br> "PayToAddress2": "",<br> "PayToCity": "",<br> "PayToState": "",<br> "PayToZip": "",<br> "Phone": "5105552005",<br> "Abbr": "Clinic1",<br> "IsHidden": "false"<br> }<br> ]<br></span></p>
<h2>Clinics PUT (update)</h2>
<p>Version Added: 21.4</p>
<p>Updates general contact and billing information for a clinic.</p>
<p><b>ClinicNum: </b>Required in the URL. <br><br><b>Description:</b> Clinic Name. Will show on statements, letters, etc.<br><b>Phone:</b> Clinic phone number. Exactly 10 digits. Does not include punctuation.<br><b>BillingAddress:</b> The billing address used on claims if different than physical treating address. This address will be used on claims if "Use on Claims" is checked. If checked, the address cannot be a PO Box for e-claims.<br><b>BillingAddress2:</b> Second BillingAddress line.<br><b>BillingCity:</b> City.<br><b>BillingState:</b> State.<br><b>BillingZip:</b> Postal Code.<br><b>PayToAddress:</b> The address where insurance payments will go if different than physical treating address. This can be a PO Box. It will be used as the billing address on claims. If the billing address is also entered, and "Use on Claims" is checked, the pay to address is sent with the address on e-claims but overrides the billing address on printed claims.<br><b>PayToAddress2:</b> Second PayToAddress line.<br><b>PayToCity:</b> City.<br><b>PayToState:</b> State.<br><b>PayToZip:</b> Postal Code.<br><b>Abbr:</b> Abbreviation for the Clinic's description. Will show in dropdowns and pick lists throughout Open Dental.<br><b>IsHidden:</b> Indicates whether or not the clinic is hidden. Clinic cannot be hidden if patients are attached. Either "true" or "false".<br></p>
<p><b>Example Request:</b><br> PUT /clinics/5<br></p>
<p><span class="codeblock"> {<br>  "Description":"Clinic 5",<br>  "Phone":"5418675309",<br>  "BillingAddress":"123 Main St",<br>  "BillingAddress2":"",<br>  "BillingCity":" Austin",<br>  "BillingState":"TX",<br>  "BillingZip":"78701",<br>  "PayToAddress": "456 Main St",<br>  "PayToAddress2": "",<br>  "PayToCity": "Austin",<br>  "PayToState": "TX",<br>  "PayToZip":"78702",<br>  "Abbr":"Clinic Five",<br>  "IsHidden":"false"<br> }<br></span></p>
<p><b>Example Response:</b><br> 200 OK<br> 400 BadRequest (with explanation)<br> 404 NotFound (with explanation)<br></p>
		</div>
	</div>
</body>
</html>```
