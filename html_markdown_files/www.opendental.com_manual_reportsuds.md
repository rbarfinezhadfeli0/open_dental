# File: ./www.opendental.com/manual/reportsuds.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - UDS Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportsuds','+reportsPublicHealth','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportsuds.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportsuds.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportsuds.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportsuds.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportsuds.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportsuds.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportsuds.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportsuds.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportsuds.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportsuds.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportsuds.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportsuds.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportsuds.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportsuds.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportsuds.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportsuds.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportsuds.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportsuds.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportsuds.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportsuds.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportsuds.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportsuds.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportsuds.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportsuds.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportsuds.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportsuds.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportsuds.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportsuds.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>UDS Report</p></div>
<div class="GeneralPageContent">
<p>The FQHC Dental Sealant Measure report is for offices utilizing Public Health features.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Public Health section, click <b>FQHC Dental Sealant Measure</b>.</p>
<img src="images/reportUDS.gif" width="395" height="223"/><p>In Federally Qualified Health Centers, typically dental procedures are sent to the medical EHR, and the medical EHR should be used as the primary data source for UDS reporting to prevent duplication of patients. If your office would like to request a UDS report for dental patients, we may be able to add a report, depending on the complexity and demonstrated need. </p>
<p>Contact <a href="../contact.html">Open Dental Support</a> and escalate your call or email to our management team. Information about UDS reporting for Federally Qualified Health Centers can be found here: <a href="http://www.hrsa.gov">http://www.hrsa.gov</a></p>
<p></p>
<p>The FQHC Dental Sealant Measure report is a built-in UDS report that replaces query 1092.</p>
<h2>Filter</h2>
<p>Entering the reporting year in the popup window before running the report.</p>
<h2>Report Preview</h2>
<p>Click <b>OK</b> to launch a print preview of the report results.</p>
<p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Total Denominator</b>: Total number of patients in the report year who were 6 - 9 years of age, had at least one oral assessment or periodic oral evaluation (completed D0120, D0145, D0150, D0180, or D0191), and who are at moderate to high risk for caries (have a completed D0602 or D0603.)</li>
<li><b>Total Numerator</b>: Total number of patients in denominator who have a permanent sealant on a first molar.</li>
<li><b>Total Percentage Met</b>: The percentage of patients who have a permanent sealant on a first molar.</li>
</ul>
<p><div class="Note">Note: Report results exclude children who have molars that are decayed, filled, currently sealed, or unerupted/missing (has a specific set of filling or sealant procedure codes.)</div>
</p>
</div>
</div>
</body>
</html>```
