# File: ./www.opendental.com/manual232/dosespotrequiredinfo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Required DoseSpot eRx Information</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('dosespotrequiredinfo','dosespotuse','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/dosespotrequiredinfo.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/dosespotrequiredinfo.html" >v24.2</option><option value="https://www.opendental.com/manual241/dosespotrequiredinfo.html" >v24.1</option><option value="https://www.opendental.com/manual233/dosespotrequiredinfo.html" >v23.3</option><option value="https://www.opendental.com/manual232/dosespotrequiredinfo.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/dosespotrequiredinfo.html" >v23.1</option><option value="https://www.opendental.com/manual224/dosespotrequiredinfo.html" >v22.4</option><option value="https://www.opendental.com/manual223/dosespotrequiredinfo.html" >v22.3</option><option value="https://www.opendental.com/manual222/dosespotrequiredinfo.html" >v22.2</option><option value="https://www.opendental.com/manual221/dosespotrequiredinfo.html" >v22.1</option><option value="https://www.opendental.com/manual214/dosespotrequiredinfo.html" >v21.4</option><option value="https://www.opendental.com/manual213/dosespotrequiredinfo.html" >v21.3</option><option value="https://www.opendental.com/manual212/dosespotrequiredinfo.html" >v21.2</option><option value="https://www.opendental.com/manual211/dosespotrequiredinfo.html" >v21.1</option><option value="https://www.opendental.com/manual205/dosespotrequiredinfo.html" >v20.5</option><option value="https://www.opendental.com/manual204/dosespotrequiredinfo.html" >v20.4</option><option value="https://www.opendental.com/manual203/dosespotrequiredinfo.html" >v20.3</option><option value="https://www.opendental.com/manual202/dosespotrequiredinfo.html" >v20.2</option><option value="https://www.opendental.com/manual201/dosespotrequiredinfo.html" >v20.1</option><option value="https://www.opendental.com/manual194/dosespotrequiredinfo.html" >v19.4</option><option value="https://www.opendental.com/manual193/dosespotrequiredinfo.html" >v19.3</option><option value="https://www.opendental.com/manual192/dosespotrequiredinfo.html" >v19.2</option><option value="https://www.opendental.com/manual191/dosespotrequiredinfo.html" >v19.1</option><option value="https://www.opendental.com/manual184/dosespotrequiredinfo.html" >v18.4</option><option value="https://www.opendental.com/manual183/dosespotrequiredinfo.html" >v18.3</option><option value="https://www.opendental.com/manual182/dosespotrequiredinfo.html" >v18.2</option><option value="https://www.opendental.com/manual181/dosespotrequiredinfo.html" >v18.1</option><option value="https://www.opendental.com/manual174/dosespotrequiredinfo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Required DoseSpot eRx Information</p></div>
<div class="GeneralPageContent">
<p>General requirements to use <a href="dosespotuse.html">DoseSpot eRx</a>:</p>
<ul>
<li>A valid Open Dental registration key (for DoseSpot integration).</li>
<li>Update to the most current stable version.</li>
<li>A high-speed connection (cable, DSL, etc) is necessary for efficient use.</li>
</ul>
<br/><p>If any of the following requirements are not met when DoseSpot is enabled, an error message displays when the eRx button in the Chart Module is clicked.</p>
<ul>
<li>To enable or create prescriptions, the logged in user must have the <i>Rx Create</i> permission. See <a href="permissions.html">Permissions</a>.</li>
<li>Due to strict data requirements, the following information must be entered before prescriptions can be sent: <ul>
<li>Practice (<a href="practice.html">Practice Setup</a>) <ul>
<li>Practice phone (10 digits)</li>
<li>Practice address, including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.</li>
</ul>
</li>
<li>If Clinics are enabled, enter the following information for each clinic that sends prescriptions. (<a href="clinicsetup.html">Clinic List</a>) <ul>
<li>Clinic phone (10 digits)</li>
<li>Clinic address including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.</li>
</ul>
</li>
<li>For each provider who sends prescriptions, enter the following information. Provider cannot be marked as a non-person. (<a href="providers.html">Providers</a>) <ul>
<li>First name (only letters, dashes, and spaces allowed; no special characters)</li>
<li>Last name (only letters, dashes, and spaces allowed; no suffixes or special characters)</li>
<li>A 10 digit NPI</li>
<li>A valid DEA Number (if the provider does not have a DEA number, enter 'none')</li>
<li>A valid State License ID</li>
<li>A valid State Where Licensed</li>
<li>A valid birthdate</li>
</ul>
</li>
<li>Patient <ul>
<li>First Name, Last Name, Date of Birth. Entered in <a href="patientedit.html">Edit Patient Information</a></li>
<li>Email address and phone number. Entered in <a href="patientedit.html">Edit Patient Information</a></li>
<li>Full patient address. Entered in <a href="patientedit.html">Edit Patient Information</a></li>
<li>Height and Weight for patients under the age of 18. Entered in <a href="vitalsignsenter.html">Vital Signs</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<br/><p>NDC#s: All transmitted medications must have an associated NDC (National Drug Code) which is assigned by the FDA whenever a new drug enters the market.</p>
</div>
</div>
</body>
</html>```
