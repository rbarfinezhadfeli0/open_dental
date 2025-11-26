# File: ./www.opendental.com/manual232/newcroprequiredinfo.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Required NewCrop eRx Information</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('newcroprequiredinfo','newcrop','+eRx','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/manual243/newcroprequiredinfo.html" >v24.3 beta</option><option value="https://www.opendental.com/manual/newcroprequiredinfo.html" >v24.2</option><option value="https://www.opendental.com/manual241/newcroprequiredinfo.html" >v24.1</option><option value="https://www.opendental.com/manual233/newcroprequiredinfo.html" >v23.3</option><option value="https://www.opendental.com/manual232/newcroprequiredinfo.html"  selected>v23.2</option><option value="https://www.opendental.com/manual231/newcroprequiredinfo.html" >v23.1</option><option value="https://www.opendental.com/manual224/newcroprequiredinfo.html" >v22.4</option><option value="https://www.opendental.com/manual223/newcroprequiredinfo.html" >v22.3</option><option value="https://www.opendental.com/manual222/newcroprequiredinfo.html" >v22.2</option><option value="https://www.opendental.com/manual221/newcroprequiredinfo.html" >v22.1</option><option value="https://www.opendental.com/manual214/newcroprequiredinfo.html" >v21.4</option><option value="https://www.opendental.com/manual213/newcroprequiredinfo.html" >v21.3</option><option value="https://www.opendental.com/manual212/newcroprequiredinfo.html" >v21.2</option><option value="https://www.opendental.com/manual211/newcroprequiredinfo.html" >v21.1</option><option value="https://www.opendental.com/manual205/newcroprequiredinfo.html" >v20.5</option><option value="https://www.opendental.com/manual204/newcroprequiredinfo.html" >v20.4</option><option value="https://www.opendental.com/manual203/newcroprequiredinfo.html" >v20.3</option><option value="https://www.opendental.com/manual202/newcroprequiredinfo.html" >v20.2</option><option value="https://www.opendental.com/manual201/newcroprequiredinfo.html" >v20.1</option><option value="https://www.opendental.com/manual194/newcroprequiredinfo.html" >v19.4</option><option value="https://www.opendental.com/manual193/newcroprequiredinfo.html" >v19.3</option><option value="https://www.opendental.com/manual192/newcroprequiredinfo.html" >v19.2</option><option value="https://www.opendental.com/manual191/newcroprequiredinfo.html" >v19.1</option><option value="https://www.opendental.com/manual184/newcroprequiredinfo.html" >v18.4</option><option value="https://www.opendental.com/manual183/newcroprequiredinfo.html" >v18.3</option><option value="https://www.opendental.com/manual182/newcroprequiredinfo.html" >v18.2</option><option value="https://www.opendental.com/manual181/newcroprequiredinfo.html" >v18.1</option><option value="https://www.opendental.com/manual174/newcroprequiredinfo.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Required NewCrop eRx Information</p></div>
<div class="GeneralPageContent">
<p>Before a prescriber can create or send an electronic prescription via the <a href="newcrop.html">NewCrop eRx / Prescription</a> interface, necessary information must be entered into Open Dental.</p>
<p>General requirements to use NewCrop eRx:</p>
<ul>
<li>A valid Open Dental registration key.</li>
<li>Current stable version of Open Dental.</li>
<li>Microsoft Edge.</li>
<li>A high-speed connection (cable, DSL, etc) is necessary for efficient use.</li>
</ul>
<br/><p>If any of the following requirements are not met when you enable NewCrop eRx, you will get an error message when you click the <b>eRx</b> button in the Chart Module.</p>
<ul>
<li>To enable or create prescriptions, the logged-on user must have the <i>Rx Create</i> permission. See <a href="permissions.html">Permissions</a>.</li>
<li>Due to strict data requirements, the following information must be entered before you can send a prescription: <ul>
<li>Practice (<a href="practice.html">Practice Setup</a>) <ul>
<li>Practice phone (10 digits)</li>
<li>Practice fax (10 digits)</li>
<li>Practice address, including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.</li>
</ul>
</li>
<li>If Clinics are enabled, enter the following information for each clinic that will send prescriptions. (<a href="clinicsetup.html">Clinic List</a>) <ul>
<li>Clinic phone (10 digits)</li>
<li>Clinic fax (10 digits)</li>
<li>Clinic address including a city name and a 2 character US state abbreviation (all caps) with a 9 digit zip code. Cannot be P.O. Box.</li>
</ul>
</li>
<li>For each provider who will send prescriptions, enter the following information. Provider cannot be marked as a non-person. (<a href="providers.html">Providers</a>) <ul>
<li>First name (only letters, dashes, and spaces allowed; no special characters)</li>
<li>Last name (only letters, dashes, and spaces allowed; no suffixes or special characters)</li>
<li>A 10 digit NPI</li>
<li>A valid DEA Number (if you do not have a DEA number, enter 'none')</li>
<li>A valid State License ID</li>
<li>A valid State Where Licensed</li>
</ul>
</li>
<li>Patient <ul>
<li>Valid birth date. Entered in <a href="patientedit.html">Edit Patient Information</a></li>
<li>If the patient state is not blank, it must be valid. Entered in <a href="patientedit.html">Edit Patient Information</a>.</li>
<li>Height and Weight (for patients under the age of 18). Entered in <a href="vitalsignsenter.html">Vital Signs</a>.</li>
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
