# File: ./www.opendental.com/manual243/reportprescriptions.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Prescriptions Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportprescriptions','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportprescriptions.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportprescriptions.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportprescriptions.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportprescriptions.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportprescriptions.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportprescriptions.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportprescriptions.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportprescriptions.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportprescriptions.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportprescriptions.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportprescriptions.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportprescriptions.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportprescriptions.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportprescriptions.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportprescriptions.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportprescriptions.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportprescriptions.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportprescriptions.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportprescriptions.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportprescriptions.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportprescriptions.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportprescriptions.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportprescriptions.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportprescriptions.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportprescriptions.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportprescriptions.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportprescriptions.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportprescriptions.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Prescriptions Report</p></div>
<div class="GeneralPageContent">
<p>Use the Prescriptions Report to generate a list of all prescriptions created in Open Dental that can be filtered by drug name or patient last name.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Lists area, click <b>Prescriptions</b>.</p>
<img src="images/reportPrescriptions.png" width="599" height="194"/><p>Also see: <a href="rx.html">Rx / Prescription</a>.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p><b>Enter the first few letters of the patient's last name or the drug name</b>: Leave blank to show all prescriptions. Type a patient last name or drug name to filter the report.</p>
<p><b>Patient</b>: Select to filter report by patient last name.</p>
<p><b>Drug</b>: Select to filter report by drug name.</p>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to generate a print preview of the report. Below is an example of the report and explanation of the report columns.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportsPrescriptionsprinted.png" width="781" height="343"/><p class="MarginBottomZero"> The report is sorted alphabetically by patient name. </p>
<ul class="MarginBottomGap">
<li><b>Patient Name</b>: Last name, first name, and middle initial of patient associated with the prescription.</li>
<li><b>Date</b>: Rx/Prescription date.</li>
<li><b>Drug Name</b>: Prescribed drug name.</li>
<li><b>Directions</b>: Any text from the <i>Sig</i> field of the Edit Rx window.</li>
<li><b>Dispense</b>: <i>Disp</i> amount from the Edit Rx window.</li>
<li><b>Prov Name</b>: Abbreviation of the prescribing <a href="providers.html">Provider</a>.</li>
</ul>
</div>
</div>
</body>
</html>```
