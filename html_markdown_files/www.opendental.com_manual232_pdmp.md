# File: ./www.opendental.com/manual232/pdmp.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Prescription Drug Monitoring Program (PDMP)</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('pdmp','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/pdmp.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/pdmp.html" >v24.2</option><option value="https://www.opendental.com/manual241/pdmp.html" >v24.1</option><option value="https://www.opendental.com/manual233/pdmp.html" >v23.3</option><option value="https://www.opendental.com/manual232/pdmp.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/pdmp.html" >v23.1</option><option value="https://www.opendental.com/manual224/pdmp.html" >v22.4</option><option value="https://www.opendental.com/manual223/pdmp.html" >v22.3</option><option value="https://www.opendental.com/manual222/pdmp.html" >v22.2</option><option value="https://www.opendental.com/manual221/pdmp.html" >v22.1</option><option value="https://www.opendental.com/manual214/pdmp.html" >v21.4</option><option value="https://www.opendental.com/manual213/pdmp.html" >v21.3</option><option value="https://www.opendental.com/manual212/pdmp.html" >v21.2</option><option value="https://www.opendental.com/manual211/pdmp.html" >v21.1</option><option value="https://www.opendental.com/manual205/pdmp.html" >v20.5</option><option value="https://www.opendental.com/manual204/pdmp.html" >v20.4</option><option value="https://www.opendental.com/manual203/pdmp.html" >v20.3</option><option value="https://www.opendental.com/manual202/pdmp.html" >v20.2</option><option value="https://www.opendental.com/manual201/pdmp.html" >v20.1</option><option value="https://www.opendental.com/manual194/pdmp.html" >v19.4</option><option value="https://www.opendental.com/manual193/pdmp.html" >v19.3</option><option value="https://www.opendental.com/manual192/pdmp.html" >v19.2</option><option value="https://www.opendental.com/manual191/pdmp.html" >v19.1</option><option value="https://www.opendental.com/manual184/pdmp.html" >v18.4</option><option value="https://www.opendental.com/manual183/pdmp.html" >v18.3</option><option value="https://www.opendental.com/manual182/pdmp.html" >v18.2</option><option value="https://www.opendental.com/manual181/pdmp.html" >v18.1</option><option value="https://www.opendental.com/manual174/pdmp.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Prescription Drug Monitoring Program (PDMP)</p></div>
<div class="GeneralPageContent">
<p>See: <a href="dosespotuse.html">DoseSpot eRx / Prescription</a></p>
<p>The Prescription Drug Monitoring Program (PDMP) helps providers manage prescriptions for their patients. When a patient is selected in Open Dental, the provider can launch the patient in PDMP to view prescription information. </p>
<h2>Bridges</h2>
<p>There are two bridges available in Open Dental for PDMP. Users should enable the bridge that corresponds with their state.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li>Users in California, Illinois, Kentucky, Maryland, Utah, and Washington should enable the <a href="bridgepdmpillinois.html">PDMP Bridge</a>.</li>
<li>Users in all other states should enable the <a href="bridgeappriss.html">Appriss Bridge</a>.</li>
</ul>
<h2>eRx</h2>
<p>Both <a href="../site/newcropfeature.html">NewCrop eRx</a> and <a href="dosespotuse.html">DoseSpot</a> have Appriss integrations for all states. </p>
<p>Appriss credentials are vendor specific. Credentials created when signing up through NewCrop eRX or DoseSpot will not transfer to or work within Open Dental. </p>
<h2>Requirements</h2>
<p class="MarginBottomZero">To launch PDMP, the following must be set: </p>
<ul class="MarginBottomGap">
<li><a href="providerseditwindow.html">Providers </a>must have a First Name, Last Name, DEA Number, and National Provider ID entered.</li>
<li><a href="patientedit.html">Patients</a> must have a First Name, Last Name, Birthdate, and Zip Code entered. </li>
<li>The logged-on <a href="securityusers.html">User</a> must be associated with a provider.</li>
<li>The <a href="opendentalservice.html">Open Dental Service</a> must be installed and running.</li>
</ul>
</div>
</div>
</body>
</html>```
