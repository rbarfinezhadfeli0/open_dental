# File: ./www.opendental.com/manual243/reportdiscountplan.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Discount Plans Report</title>
<link href="resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "resources/manualToc.js"></script>
<script src = "resources/manual.js"></script>
<link rel="icon" type="image/png" href="resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportdiscountplan','+reportlists','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportdiscountplan.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportdiscountplan.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportdiscountplan.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportdiscountplan.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportdiscountplan.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportdiscountplan.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportdiscountplan.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportdiscountplan.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportdiscountplan.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportdiscountplan.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportdiscountplan.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportdiscountplan.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportdiscountplan.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportdiscountplan.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportdiscountplan.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportdiscountplan.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportdiscountplan.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportdiscountplan.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportdiscountplan.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportdiscountplan.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportdiscountplan.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportdiscountplan.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportdiscountplan.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportdiscountplan.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportdiscountplan.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportdiscountplan.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportdiscountplan.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportdiscountplan.html" >v17.4</option></select>
				</div>        <a href="manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Discount Plans Report</p></div>
<div class="GeneralPageContent">
<p>Run the Discount Plans to get a list of patients currently assigned to a discount plan.</p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Lists section, click <b>Discount Plans</b>.</p>
<img src="images/reportdiscountplan.png" width="384" height="172"/><p>This report is a list of all <a href="discountplans.html">Discount Plans</a> in use, with the associated fee schedule, adjustment type, and effective and term dates of patients using the plan.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filter</h2>
<p>To filter the report to a specific discount plan, enter the discount plan description. To include all plans leave the text box blank. Any discount plans containing matching text in their name are included in the report (e.g., if <i>Discount</i> is entered, <i>Discount Plan 1</i> and <i>In-House Discount Plan</i> are included)</p>
<p>Click <b>OK</b> to generate the report. </p>
<h2>Report Preview</h2>
<p>The following is an example of the report and descriptions of each report column.</p>
<p>For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportdiscountplanprint.png" width="759" height="340"/><p class="MarginBottomZero"></p>
<ul class="MarginBottomGap">
<li><b>Description</b>: Discount plan description (i.e., name)</li>
<li><b>FeeSched</b>: Fee schedule assigned to the discount plan.</li>
<li><b>AdjType</b>: Adjustment type assigned to the discount plan.</li>
<li><b>DateEffective</b>: Patient's effective start date for the discount plan </li>
<li><b>DateTerm</b>: Patient's end date for the discount plan. Patients with a DateTerm in the past are still included in the report. Drop the <a href="discountplan.html">Discount Plan Subscriber Edit</a> from the patient. Once the discount plan is dropped, the patient is no longer included in the report.</li>
<li><b>Patient</b>: Last name and first name of the patient assigned the discount plan.</li>
</ul>
<p>The number of patients is totaled at the end of the last page of the report.</p>
</div>
</div>
</body>
</html>```
