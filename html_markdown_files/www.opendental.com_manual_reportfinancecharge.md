# File: ./www.opendental.com/manual/reportfinancecharge.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

<title>Open Dental Software - Finance Charge Report</title>
<link href="../manual243/resources/manual2.css" rel="stylesheet" type="text/css">
<script src = "../manual243/resources/manualToc.js"></script>
<script src = "../manual243/resources/manual.js"></script>
<link rel="icon" type="image/png" href="../manual243/resources/favicon.png">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body onload="BodyLoaded('reportfinancecharge','+monthly','reportsstandard','reports','mainmenu','manual')">
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
						}"><option value="https://www.opendental.com/site/helpfeature.html">v24.4 +</option><option value="https://www.opendental.com/manual243/reportfinancecharge.html"  selected>v24.3</option><option value="https://www.opendental.com/manual242/reportfinancecharge.html" >v24.2</option><option value="https://www.opendental.com/manual241/reportfinancecharge.html" >v24.1</option><option value="https://www.opendental.com/manual233/reportfinancecharge.html" >v23.3</option><option value="https://www.opendental.com/manual232/reportfinancecharge.html" >v23.2</option><option value="https://www.opendental.com/manual231/reportfinancecharge.html" >v23.1</option><option value="https://www.opendental.com/manual224/reportfinancecharge.html" >v22.4</option><option value="https://www.opendental.com/manual223/reportfinancecharge.html" >v22.3</option><option value="https://www.opendental.com/manual222/reportfinancecharge.html" >v22.2</option><option value="https://www.opendental.com/manual221/reportfinancecharge.html" >v22.1</option><option value="https://www.opendental.com/manual214/reportfinancecharge.html" >v21.4</option><option value="https://www.opendental.com/manual213/reportfinancecharge.html" >v21.3</option><option value="https://www.opendental.com/manual212/reportfinancecharge.html" >v21.2</option><option value="https://www.opendental.com/manual211/reportfinancecharge.html" >v21.1</option><option value="https://www.opendental.com/manual205/reportfinancecharge.html" >v20.5</option><option value="https://www.opendental.com/manual204/reportfinancecharge.html" >v20.4</option><option value="https://www.opendental.com/manual203/reportfinancecharge.html" >v20.3</option><option value="https://www.opendental.com/manual202/reportfinancecharge.html" >v20.2</option><option value="https://www.opendental.com/manual201/reportfinancecharge.html" >v20.1</option><option value="https://www.opendental.com/manual194/reportfinancecharge.html" >v19.4</option><option value="https://www.opendental.com/manual193/reportfinancecharge.html" >v19.3</option><option value="https://www.opendental.com/manual192/reportfinancecharge.html" >v19.2</option><option value="https://www.opendental.com/manual191/reportfinancecharge.html" >v19.1</option><option value="https://www.opendental.com/manual184/reportfinancecharge.html" >v18.4</option><option value="https://www.opendental.com/manual183/reportfinancecharge.html" >v18.3</option><option value="https://www.opendental.com/manual182/reportfinancecharge.html" >v18.2</option><option value="https://www.opendental.com/manual181/reportfinancecharge.html" >v18.1</option><option value="https://www.opendental.com/manual174/reportfinancecharge.html" >v17.4</option></select>
				</div>        <a href="../manual243/manual.html"><div class="TopBarHome"><img src="resources/home.gif"/><p>Manual<p></div></a>        <a href="../manual243/searchmanual.html"><div class="TopBarSearch"><img src="resources/search.gif"/><p>Search<p></div></a>
    </div>       
</div>
<div class="TopBar2"><p>Finance Charge Report</p></div>
<div class="GeneralPageContent">
<p>The Finance Charge Report lists all Finance Charges applied on a selected date.</p>
<p></p>
<p>In <a href="reportsstandard.html">Standard Reports</a>, in the Monthly section, click <b>Finance Charges</b>.</p>
<img src="images/reportFinanceCharge.png" width="450" height="268"/><p>This report lists all <a href="financecharges.html">Finance Charges</a> applied on a selected date. The report does not include Billing Charges.</p>
<p>To control user access to this report, see <a href="reportsecurity.html">Report Setup: Security Permissions</a>.</p>
<h2>Filters</h2>
<p>Set the report criteria before running the report.</p>
<p class="MarginBottomZero"><b>Providers</b>: Highlight the providers to include in the report. Check <b>All</b> to include all providers in the report, including those marked <i>Hidden on Reports</i>. Filters by provider attached to Finance Charge <a href="adjustments.html">Adjustment</a>.
<ul class="MarginBottomGap">
	<li>To exclude hidden providers from the report, manually select visible providers from the list.</li>
</ul></p>
<p><b>Billing Types</b>: Select the <a href="definitionsbillingtypes.html">Billing Types</a> to include in the report. Check <b>All</b> to include all billing types, including those marked hidden.</p>
<p><b>Date Range</b>: Filter the report by the finance charge adjustment date. The default range is the most recent date finance charges were applied. </p>
<h2>Report Preview</h2>
<p>Click <b>OK</b>, to generate a print preview of the report. The following is an example of the report and explanation of the report columns. For a description of toolbar buttons, see <a href="reportcomplex.html">Complex Report System</a>.</p>
<img src="images/reportFinanceChgPrint.png" width="833" height="412"/><p>If multiple finance charges exist in the date range for the same patient, they are each listed separately. Charges are displayed alphabetically by patient.</p>
<p><b>PatNum</b>: Unique Patient Number assigned to the patient in <a href="patientedit.html">Edit Patient Information</a>.</p>
<p><b>Patient Name</b>: Patient's last and first name.</p>
<p><b>Preferred Name</b>: Patient's preferred name (e.g., nickname).</p>
<p><b>Amount</b>: Amount of individual finance charge. Total of all finance charges listed on the report is included on the last page of the report in bold.</p>
</div>
</div>
</body>
</html>```
