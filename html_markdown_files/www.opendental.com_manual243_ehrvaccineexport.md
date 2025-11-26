# File: ./www.opendental.com/manual243/ehrvaccineexport.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - EHR Export Vaccine Data</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('ehrvaccineexport','ehrdashboard1','+chartToolbar','chart','modules','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/ehrvaccineexport.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/ehrvaccineexport.html" >v24.2</option><option value="https://www.opendental.com/manual241/ehrvaccineexport.html" >v24.1</option><option value="https://www.opendental.com/manual233/ehrvaccineexport.html" >v23.3</option><option value="https://www.opendental.com/manual232/ehrvaccineexport.html" >v23.2</option><option value="https://www.opendental.com/manual231/ehrvaccineexport.html" >v23.1</option><option value="https://www.opendental.com/manual224/ehrvaccineexport.html" >v22.4</option><option value="https://www.opendental.com/manual223/ehrvaccineexport.html" >v22.3</option><option value="https://www.opendental.com/manual222/ehrvaccineexport.html" >v22.2</option><option value="https://www.opendental.com/manual221/ehrvaccineexport.html" >v22.1</option><option value="https://www.opendental.com/manual214/ehrvaccineexport.html" >v21.4</option><option value="https://www.opendental.com/manual213/ehrvaccineexport.html" >v21.3</option><option value="https://www.opendental.com/manual212/ehrvaccineexport.html" >v21.2</option><option value="https://www.opendental.com/manual211/ehrvaccineexport.html" >v21.1</option><option value="https://www.opendental.com/manual205/ehrvaccineexport.html" >v20.5</option><option value="https://www.opendental.com/manual204/ehrvaccineexport.html" >v20.4</option><option value="https://www.opendental.com/manual203/ehrvaccineexport.html" >v20.3</option><option value="https://www.opendental.com/manual202/ehrvaccineexport.html" >v20.2</option><option value="https://www.opendental.com/manual201/ehrvaccineexport.html" >v20.1</option><option value="https://www.opendental.com/manual194/ehrvaccineexport.html" >v19.4</option><option value="https://www.opendental.com/manual193/ehrvaccineexport.html" >v19.3</option><option value="https://www.opendental.com/manual192/ehrvaccineexport.html" >v19.2</option><option value="https://www.opendental.com/manual191/ehrvaccineexport.html" >v19.1</option><option value="https://www.opendental.com/manual184/ehrvaccineexport.html" >v18.4</option><option value="https://www.opendental.com/manual183/ehrvaccineexport.html" >v18.3</option><option value="https://www.opendental.com/manual182/ehrvaccineexport.html" >v18.2</option><option value="https://www.opendental.com/manual181/ehrvaccineexport.html" >v18.1</option><option value="https://www.opendental.com/manual174/ehrvaccineexport.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>EHR Export Vaccine Data</p></div>
<div class="GeneralPageContent">
<p>If you administer and record vaccines, data can exported in HL7 format. See <a href="ehrvaccine.html">EHR Vaccine Data</a>.</p>
<p>Open Dental does not currently support automatic submission of vaccine date to immunization registries. Rather, you must manually export data, then submit to the registry using the required transport method. Since most dentists don't administer vaccines, attesting to an exclusion is a good option. However, we recommend checking with your state for final recommendations.</p>
<h2>Before exporting</h2>
<p>The immunization registry may require sign up and additional steps before data can be accepted. Contact your state to determine requirements, sign legal agreements, or begin the on-boarding process.</p>
<h2>Export data</h2>
<ol>
<li>On the <a href="ehrdashboard1.html">EHR Dashboard</a>, click Vaccines. <br/><img src="images/ehrVaccine.gif" width="679" height="554" class="ImageInParagraph"/><p>Listed are all vaccines administered to the patient.</p>
</li>
<li>Indicate whether the patient does or does not want the vaccine data exported for use by other dental or medical offices. This is a per patient setting. <ul>
<li>??: unknown.</li>
<li>Yes: Patient has sanctioned vaccine information sharing.</li>
<li>No: Patient wants to keep the vaccine data within the dental office only. This setting never blocks the vaccine data export.</li>
</ul>
</li>
<li>Select the vaccine data to export, then click <b>Export HL7</b>. You can select multiple vaccines to export at once.</li>
<li>Select the location in which to save the exported txt file, then click Save.</li>
</ol>
<br/><div class="Note">Note: The <b>Submit HL7</b> button currently cannot be used because email is not secure.</div>
</div>
</div>
</body>
</html>```
