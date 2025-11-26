# File: ./www.opendental.com/manual/fhir.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - API Setup</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('fhir','+menusetupAdvanced','+setup','mainmenu','manual')">
<nav class="LeftTree">
<div class="TopBarLeft"><p>Table of Contents</p></div>
<div id="Manual"><a href="manual.html">Manual</a></div>
</nav>
<div class="RightMain">
<div class="TopBar">
    <a href="../index.html">
        <div class="Logo">
            <img src="resources/logoWhite160.png" alt="Home" width="158" height="40">
        </div>
    </a>
    <div class="TopBarLinks">
        <div class="TopBarTitle">Manual 
					<select id="SelectVersion" class="TopBarVersionDrop" onchange="location = this.options[this.selectedIndex].value;
						for (var i = 0; i < document.getElementById('SelectVersion').options.length; i++) {
							if (document.getElementById('SelectVersion').options[i].attributes.selected)
								document.getElementById('SelectVersion').selectedIndex=i;
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/fhir.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/fhir.html" >v24.2</option><option value="https://www.opendental.com/manual241/fhir.html" >v24.1</option><option value="https://www.opendental.com/manual233/fhir.html" >v23.3</option><option value="https://www.opendental.com/manual232/fhir.html" >v23.2</option><option value="https://www.opendental.com/manual231/fhir.html" >v23.1</option><option value="https://www.opendental.com/manual224/fhir.html" >v22.4</option><option value="https://www.opendental.com/manual223/fhir.html" >v22.3</option><option value="https://www.opendental.com/manual222/fhir.html" >v22.2</option><option value="https://www.opendental.com/manual221/fhir.html" >v22.1</option><option value="https://www.opendental.com/manual214/fhir.html" >v21.4</option><option value="https://www.opendental.com/manual213/fhir.html" >v21.3</option><option value="https://www.opendental.com/manual212/fhir.html" >v21.2</option><option value="https://www.opendental.com/manual211/fhir.html" >v21.1</option><option value="https://www.opendental.com/manual205/fhir.html" >v20.5</option><option value="https://www.opendental.com/manual204/fhir.html" >v20.4</option><option value="https://www.opendental.com/manual203/fhir.html" >v20.3</option><option value="https://www.opendental.com/manual202/fhir.html" >v20.2</option><option value="https://www.opendental.com/manual201/fhir.html" >v20.1</option><option value="https://www.opendental.com/manual194/fhir.html" >v19.4</option><option value="https://www.opendental.com/manual193/fhir.html" >v19.3</option><option value="https://www.opendental.com/manual192/fhir.html" >v19.2</option><option value="https://www.opendental.com/manual191/fhir.html" >v19.1</option><option value="https://www.opendental.com/manual184/fhir.html" >v18.4</option><option value="https://www.opendental.com/manual183/fhir.html" >v18.3</option><option value="https://www.opendental.com/manual182/fhir.html" >v18.2</option><option value="https://www.opendental.com/manual181/fhir.html" >v18.1</option><option value="https://www.opendental.com/manual174/fhir.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>API Setup</p></div>
<div class="GeneralPageContent">
<p>If you are an Open Dental customer, a third-party developer might want to work with you to enable your database for 2-way communication. Those instructions are documented below. If you are a third-party developer, you should first see the <a href="../site/apispecification.html">API Specification</a>.</p>
<p>We recommend having a Business Associate Agreement (BAA) in place with a third-party developer before entering the API key. Many third-party programs gather and retain Protected Health Information (PHI), so a BAA will assist with <a href="https://opendental.com/site/hipaa.html">HIPAA</a> compliance.</p>
<h2>Customer Setup</h2>
<p>In the <a href="mainmenu.html">Main Menu</a>, click Setup, Advanced Setup,<b> API</b>.</p>
<img src="images/apisetup.png" width="783" height="540"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Enabled</b>: Check to enable 2-way communication from this customer database.</li>
<li><b>Process subscription interval</b>: Only for FHIR subscriptions.</li>
<li><b>Payment type for created payments</b>: The payment type associated with payments made from the API. See <a href="definitionspaymenttypes.html">Definitions: Payment Types</a>.</li>
</ul>
<p><b>Add Key</b>: Click to add a new API key. <br/><img src="images/apiKeyAssign.png" width="374" height="196" class="ImageInParagraph"/></p>
<p>When adding a new key, a license agreement displays. Accept the agreement to continue. Accepting a license is logged in the Audit Trail.</p>
<img src="images/apiKeyAccept.png"/>

<p>Double-click an existing key to edit.</p>
<img src="images/apiKeyEdit.png" width="522" height="300"/><h2>FHIR</h2>
<p>FHIR is an older alternative to our API. It's designed for interfacing with certain medical software, but is not otherwise useful. The latest version is FHIR Version 19.4, also known as our FHIR Version 2. This version remains compatible with all future versions of Open Dental. Development has stopped on this interface, although we have no plans to remove it.<br/><a href="../resources/OpenDentalFHIR19-4Spec.pdf">Open Dental FHIR Interface Specifications for 19.4 (pdf)</a></p>
</div>
</div>
</body>
</html>```
